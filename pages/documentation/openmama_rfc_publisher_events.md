---
title: RFC for Publisher Events
sidebar: openmama_sidebar
permalink: openmama_rfc_publisher_events.html
folder: openmama
toc: true
---

## Introduction

The following documents the design of mamaPublisher callbacks for notifications of publishing events.

## Definition of the Problem
The MAMA publisher API is essentially stateless and will “fire and forget” messages, meaning that it will send its
messages and simply return. In certain circumstances extra functionality is desirable. This would provide more feedback
about messages that were unable to be sent due to a connection level event. In this case an event callback notifying
the API of the event could be invoked.

## Design Choices

### Two Options

Two options for publisher event callbacks are presented. Each bridge will implement exactly one of these.

The upshot of this is that apps will need to handle both callback methods, and in the case of the transport callbacks
may need to map the topic back to the mamaPublisher.

#### Publisher Callbacks

This involves having the app pass in a set of function ptrs and having the bridge make the callbacks as appropriate. In
this case each callback is associated with a specific mamaPublisher.

#### Transport Callbacks

This involves using the existing transport callbacks, and extending the status that can be returned. This method would
be used by bridges that do not have the mamaPublisher available when async messages are returned from the infrastructure.

### Publisher Callbacks

#### Publisher Allocate

The callback structure is acquired by the app via a method call so that the structure can be extended as needed in the
future.

    mama_status
    mamaPublisherCallbacks_allocate (mamaPublisherCallbacks** cb);

    mama_status
    mamaPublisherCallbacks_deallocate (mamaPublisherCallbacks* cb);

#### Publisher Callback

This implementation does not include an onSuccess callback, which can be added later. The concern here is that with
high-volume publishing the onSuccess callback might impact performance.

    typedef struct mamaPublisherCallbacks
    {
        mama_publisherOnCreateCb onCreate;
        mama_publisherOnErrorCb onError;
        mama_publisherOnDestroyCb onDestroy;
    } mamaPublisherCallbacks;

#### Publisher Create

A queue will be passed to the createWithCallbacks method(), along with the callback struct and a closure. The closure
is for the level above, so C++ MAMA code may send its own closure and hold the app’s closure in the C++ layer, as is
now done with subscriptions.

    mama_status
    mamaPublisher_createWithCallbacks (
        mamaPublisher* result,
        mamaTransport tport, /* existing param */
        mamaQueue queue, /* NEW: queue for callbacks */
        const char* symbol, /* existing param */
        const char* source, /* existing param */
        const char* root, /* existing param */
        mamaPublisherCallbacks* cb, /* NEW: the callbacks */
        void* closure); /* NEW: closure for layer above */

#### Callback Prototypes

Note that the topic is now available from the mamaPublisher so it is not included as a parameter.

| Parameter | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| publisher | The mamaPublisher                                                |
| closure   | The closure passed in to publisher create                        |
| status    | mama_status                                                      |
| info      | Platform-specific details, usually logged for problem resolution |

    typedef void (MAMACALLTYPE *mama_publisherCreateCB) (
        mamaPublisher publisher,
        void* closure);
    typedef void (MAMACALLTYPE *mama_publisherDestroyCB) (
        mamaPublisher publisher,
        void* closure);
    typedef void (MAMACALLTYPE *mama_publisherErrorCB) (
        mamaPublisher publisher,
        mama_status status,
        const char* info,
        void* closure);

### Transport Topic Callbacks

Some bridges may not have the mamaPublisher available when an async msg regarding a published msg arrives from the infrastructure.
In that case the callbacks associated with the mamaPublisher are not available, and so the existing transport topic callback
(`mamaTransportTopicCB`) will be used with no new parameters.

    typedef void (MAMACALLTYPE *mamaTransportTopicCB)(
        mamaTransport tport,
        mamaTransportTopicEvent event,
        const char* topic,
        const void* platformInfo,
        void *closure);

Additional mamaTransportTopicEvent enums will be added:

    typedef enum
    {
        MAMA_TRANSPORT_TOPIC_SUBSCRIBED,
        MAMA_TRANSPORT_TOPIC_UNSUBSCRIBED,
        MAMA_TRANSPORT_TOPIC_PUBLISH_CREATE, /* onCreate */
        MAMA_TRANSPORT_TOPIC_PUBLISH_DESTROY, /* onDestroy */
        MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR, /* onError: default error */
        MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_NOT_ENTITLED, /* onError: not entitled */
        MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_BAD_SYMBOL, /* onError: bad symbol */
    } mamaTransportTopicEvent;

### Sample Code

This shows the order of calls an application needs to make in order to be able to process publisher events.

{% highlight C %}
mamaPublisherCallbacks* cb = NULL;
mamaPublisher pub = NULL; mamaTransport transport = NULL;
mama_status status;

/* Some bridges pass publisher events as transport callbacks */
status = mamaTransport_allocate (&transport);
status = mamaTransport_create (transport, transportName, mamaBridge);
status = mamaTransport_setTransportTopicCallback(transport, transportTopicCb, NULL);

/* Some bridges pass publisher events as publisher callbacks */
status = mamaPublisherCallbacks_allocate (&cb);
cb->onCreate = onCreateCb;
cb->onError = onErrorCb;
cb->onDestroy = onDestroyCb;

mamaPublisher_createWithCallbacks (&pub, transport, queue, symbol, source, root, &cb, closure);
{% endhighlight %}

### Backwards Compatibility

Applications that were written for the existing ‘fire and forget’ model must work as before, without any code or behavioral changes.
This is accomplished by:

1. Creating a new publisher create method that takes callbacks, and updating the existing method to pass a NULL for the callbacks.
2. If the callbacks are NULL then the mama and bridge layers will not further process any callbacks.

### Topic Get Methods

In order to allow applications to use and log the topic a new set of methods has been added to the publisher interface:

    mamaPublisher_getRoot (mamaPublisher publisher, const char** root);
    mamaPublisher_getSource (mamaPublisher publisher, const char** source);
    mamaPublisher_getSymbol (mamaPublisher publisher, const char** symbol);

### Callbacks Get Method

A method for getting the callbacks is provided. The callbacks are copied into the app space to prevent any issues with
changing them at runtime.

There is no set method since the app can pass these in via the create method. Allowing the app to set the callbacks would
create a lack of clarity as to what it means to set them during the app’s runtime.

    mamaPublisherCallbacks cb;
    mamaPublisher_getUserCallbacks (mamaPublisher publisher, &cb);

### Send Methods

This table lists the various send methods and what callbacks they support. Existing inbox callbacks will work as they do now.
Optional publisher or transport callbacks will become available for each of these.

Publisher callbacks are not available for the sendFromInbox* methods. If they are set in the mamaPublisher they will not be used.
Only the inbox callbacks will be used.

* mamaPublisher_sendFromInbox*
** inbox callbacks
** NO optional publisher callbacks
* mamaPublisher_sendReplyToInbox*
** NO inbox callbacks
** optional publisher callbacks
* mamaPublisher_send*
** optional publisher callbacks
* transport
** optional transport callbacks

### Async/Sync Considerations

The group of publish send() methods can return an error synchronously without using the callbacks. In this case the mama_status is
propagated to the calling app and can be processed immediately.

The callbacks are used for asynchronous notifications to the application, that is, the send() method has completely successfully,
but a fail/success status is available async from the infrastructure.

### State Machine

A state machine based on the subscription model is detailed below.

#### State Machine Methods

The current publisher state can be accessed via these new methods:

    mamaPublisher_getState (mamaPublisher publisher, mamaPublisherState* state);
    const char* mamaPublisher_stringForState (mamaPublisherState state);

### Acknowledgments for Messages

These are the onSuccess callbacks, and are out-of-scope for this version.

### DQPublishing

The new publisher callbacks must also be available when using DQ Publisher (for example, mamaDQPublisher in C).

### Language Support

The new feature must be available in all of the supported languages (C, C++, Java, C#).

### Testing

The new feature must also have relevant unit tests.
* Create publisher with original create method and be able to publish OK.
* Create publisher with new create method.
** Pass in NULL callback struct and publish OK with no callbacks.
** Pass in callback struct with NULL callbacks for each CB, publish OK with callbacks for supplied CBs only.
* Destroy publisher, wait for onDestroy, and receive no more callbacks.
* More as needed.

## Bridge Layer

New bridge APIs will be required to take in new publisher callbacks. This means for bridges to work with the releases with this feature they need to be compiled against the new Mama release.

    typedef mama_status (*bridgeMamaPublisher_setUserCallbacks)(publisherBridge* publisher, mamaQueue queue, mamaPublisherCallbacks* cb, void* closure);

This will be invoked after `bridgeMamaPublisherCreateByIndex()` is called.

The bridge will invoke the callbacks that it has been passed (NULL ptr means don’t make the callback).

## State Machine

The state machine for publishing is modelled on the one for subscriptions.

### States

| State                                 | Description                                                             |
| ------------------------------------- | ----------------------------------------------------------------------- |
| MAMA_PUBLISHER_UNKNOWN                | The state of the publisher is unknown.                                  |
| MAMA_PUBLISHER_CREATING               | The publisher is being created and waiting on the bridge (sync wait).   |
| MAMA_PUBLISHER_LIVE                   | The publisher is live.                                                  |
| MAMA_PUBLISHER_DESTROYING             | The publisher is being destroyed.                                       |
| MAMA_PUBLISHER_DESTROYED_BRIDGE       | The publisher is being destroyed and the bridge has sent onDestroy.     |
| MAMA_PUBLISHER_DESTROYING_WAIT_BRIDGE | The publisher is being destroyed and waiting on the bridge's onDestroy. |
| MAMA_PUBLISHER_DESTROYED              | The publisher has been fully destroyed.                                 |

The DESTROYING states are required since the publisher does not have the allocate/create and destroy/deallocate method sequence like
the subscriptions, and so the ability to deallocate the impl requires tracking when the bridge’s onDestroy callback occurs.


### State Diagram

![State Diagram](images/rfc-publisher-events-state-diagram.png)

## Sequence Diagrams

These three diagrams show the create/destroy sequences.

![Diagram Showing Create Destroy Sequences](images/rfc-publisher-events-create-destroy-sequences.png)

This diagram shows the send/callback sequence.

![Diagram Showing Create Destroy Sequences](images/rfc-publisher-events-send-callback-sequence.png)