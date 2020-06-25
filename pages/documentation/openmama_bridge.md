---
title: Bridge Documentation
sidebar: openmama_sidebar
permalink: openmama_bridge.html
folder: openmama
toc: true
---
OpenMAMA is an open source Middleware Agnostic Messaging API that provides a single API for writing event driven applications across multiple message oriented middlewares. OpenMAMA supports multiple middleware and payload types (wire formats) through bridges. As illustrated in Figure 1, OpenMAMA loads multiple bridges and payloads either dynamically at runtime or statically. 

Middleware and wire format providers who wish to add support for their middleware would need to implement the bridge API, which interfaces between their middleware and the OpenMAMA library.
The OpenMAMA Bridge API usually requires simple wrappers for middleware that follow normal publish/subscribe and request/reply semantics.

This document provides information to assist developer's who wish to write bridge to interface their middleware with the OpenMAMA API. Further relating to getting your bridge incorporated into the OpenMAMA release can be found [here](openmama_bridge_incorporation_guidelines.html).

N.B. A [reference bridge]([http://www.openmama.org/openmama-reference-bridge) has been provided, details for which can be found [here](openmama_reference_bridge.html).


![Figure 1](images/bridge-documentation-1.jpg)

# Conventions

Throughout this document examples refer to a middleware bridge for a hypothetical middleware called **myMiddleware** and a hypothetical payload bridge for a wire format called **myPayload**.

Source code appears in fixed-pitch with implementation dependent items italicized. The following represents a property file entry for a transport for **myMiddleware**:


 <tt>mama.mymiddleware.transport.**transport_name.parameter**</tt>

In this case **transport_name** and **parameter** are arbitrary values.

Source file names are in *italics*. Paths beginning with a '/' are relative to the root of the OpenMAMA source tree. All other paths are relative to */mama/c_cpp/src/c*:

 **configure.ac**:         *OpenMAMA_root/configure.ac*

 **mama/mama.h**:         *OpenMAMA_root/mama/c_cpp/src/mama/mama.h*

# OpenMAMA Integration Headers

It is now possible to access internal OpenMAMA methods and types
using OpenMAMA's integration headers. You'll find these located in
`<install-prefix>/include/mama/integration`. Each of these header
files are header guarded and only accessible if the OPENMAMA_INTEGRATION
macro is defined in your third party application at compile time. For
example `-DOPENMAMA_INTEGRATION` or `/DOPENMAMA_INTEGRATION`.

For an example of the sort of changes which are required to leverage this new API, see:

[OpenMAMA ZeroMQ bridge example](https://github.com/cascadium/OpenMAMA-zmq/commit/4fc1c46212061d66c939dc34a65f87adf9d8622d)

and

[OpenMAMA OMNM payload example](https://github.com/cascadium/OpenMAMA-omnm/commit/3cde22a069dccebe39b5bef1769cdb19025f1b2b)

To migrate from the old method of including internal headers, it mostly involves:

* Stopping using the internal code tree and use a release instead. It's the easiest way to
  decouple yourself from the internal code of OpenMAMA.
* Stop using direct access to internal members of the bridge object and instead use the
  getters and setters provided in the integration headers (e.g. mamaImpl_setDefaultEventQueue)
* Adding includes for <mama/integration/types.h> since most of the types are defined there.
* Replacing old internal header files with new integration header files. E.g. replacing `msgimpl.h`
  with `mama/integration/msg.h`.

If anything is missing from the integration headers, send a message around the developers mailing
list, and we can see if it already exists.


# Bridge Architecture Overview

OpenMAMA bridges implement an internal bridge API defined in *bridge.h* that OpenMAMA loads into a virtual function table. MAMA objects like transports, subscriptions, queues, etc. access the native middleware through this virtual function table. By allowing multiple virtual function tables OpenMAMA enables applications to use multiple middlewares.

To initialize the OpenMAMA API, the client application would need to load the appropriate bridge using the **mama_loadBridge (&impl, “middleware”)** method, as this method dynamically loads in the appropriate shared object.

For example when loading the avis bridge, the application loads the bridge using **mama_loadBridge (&impl, “avis")**, which causes the OpenMAMA API to load the *libmamaavisimpl.so* shared object file.

In order to incorporate a new user defined middleware into OpenMAMA, the bridge must have a unique enumeration. This ensures that **mama_loadBridge()** may be called referring to a specific middleware. Details of the enumeration process may be found [[here|Bridge Incorporation Guidelines]].

The bridge would also need to invoke the **mamaInternal_registerBridge()** method to register itself with the OpenMAMA API.

All the methods discussed for this bridge implementation start with validating all the arguments. This validation should be done as an initial step of the method implementation.

![Figure 2](images/bridge-documentation-2.jpg)
# Bridge Core Components

As Illustrated in Figure 2, below are the core components, messaging bridge must implement as part of the OpenMAMA Bridge wrapper to the underlying middleware.

The messaging bridge consists of functions that fall into nine major categories: initialization, transport, queuing, IO (events on file descriptors), timers, subscriptions, request reply (subinitial), publishing, and message handling.

![Figure 1](images/bridge-documentation-1.jpg)

# Initialization

The initialization components of the bridge include methods to open, close, start and stop the bridge.

Below are the core operations this main initialization component of this bridge implementation requires

* Initialize the bridge,
* Open and close the  bridge,
* Start and Stop the bridge,
* Get accessories.


## Initialize the bridge

_Note: This behaviour has been changed in favour of dynamic loading for OpenMAMA 2.4.0 onwards, see [[Dynamic Bridge Loading]] for details on how to implement dynamic loading for your middleware bridge._
**Method:** ***myMiddlewareBridge_init***

This will be the first point of entry for the middleware bridge. It will be provided by mama with a pre-allocated
middleware bridge struct and will be responsible for:

1) Properly initializing the preallocated struct with the middleware bridge implementation.
2) Registering function pointer definitions with implementations for required and optional bridge functions.


## Open and Close the Bridge

### Opening the Bridge

**Method:** ***myMiddlewareBridge_open***

MAMA invokes this method when the application dynamically/statically loads the bridge implementation using *mama_loadBridge*method of the OpenMAMA API

This method is responsible for creating the Default Event Queue, which is primarily used by the API for dispatching internal events. 

The default event queue is created by invoking the *mamaQueue_create* or *mamaQueue_create_usingNative*method. 

This default queue can be assigned a name using the *mamaQueue_setQueueName* method.This method is also responsible for initializing and starting the heap timer.


###Closing the Bridge
**Method** ***myMiddlewareBridge_close***

This method gets invoked when the application closes the bridge using the *mama_close* interface method.

This method destroys the queues using the *amaQueue_destroyWait* and also destroys the heap timers.


## Start and Stop the Bridge

###Starting the Bridge

**Method:** ***myMiddlewareBridge_start***

This method is responsible for creating and starting the dispatching on the default queue and creating a dedicated thread for dispatching the transport related events.

### Stopping the Bridge

 **Method:** ***myMiddlewareBridge_stop***

This method stops dispatching on the default event queue and also stops the dispatching of transport related events.
Note: - You cannot start and stop the bridge without creating the transport, as starting and stopping the bridge causes the transport thread to start and stop dispatching event from the middleware to the mama event queues.


## Get Methods

**Methods:**

* ***getVersion***
* ***getNames***
* ***getDefaultPayloadID***

The following get methods return the appropriate values from the *mamaBridge* structure.
*getVersion*, *getNames* and *getDefaultPayloadID*.

The *getDefaultPayloadID* method returns the payload name and the payload Id, this method is used internally by the OpenMAMA API to determine and the load the appropriate payload message.


# Transport Bridge Component

The transport component of the Bridge establishes the underlying transport connection between the publisher and subscriber. It creates the communication channels to use for making subscriptions and publishing data through the OpenMAMA API.
Below are the core transport responsibilities:

* Create and Destroy the transport,
* Start and Stop Transport Bridge,
* Conflation methods,
* Get methods.


## Create and destroy the transport

### Creating the transport

**Method:** ***myMiddlewareBridgeMamaTransport_create***

The main responsibility of this method is to initialize and create the middleware context that can be used to establish the connection between the publisher and the subscriber.
This method allocates the *myMiddlewareTransportBridge* and then assigns the middleware context to that transport structure.
Below are the members of the *myMiddlewareTransportBridge* structure

```c
 typedef struct myMiddlewareTransportBridge
 {
    Middleware*       mMiddleware;
    void *            mMiddleware;
    mamaTransport     mTransport;
    wsem_t            mMiddlewareSem;
 } myMiddlewareTransportBridge;
```

Once the transport object is allocated, the allocated transport needs to be assigned to the *mTransportBridge* member variable of the *middlewareBridge* structure.

The Middleware Bridge can be accessed through the *mamaBridgeImpl_getClosure* closure method by passing in the *mamaBridge*. 

This mamaBridge can be accessed through the *mamaTransportImpl_getBridgeImpl* by passing in the *mamaTransport* object.


### Destroying the transport

 **Method:** ***myMiddlewareBridgeMamaTransport_destroy***

This method frees the memory allocated by the transport and the transportBridge object. This object also invokes the underlying middleware destroy method to free up underlying resource allocated by the middleware.

###Start and Stop the transport bridge

####Starting the transport

**Method:** ***myMiddlewareTransportBridge_start***

This method creates a new thread that middleware uses to dispatch middleware related events. This thread dispatches internal timers, messages and events.

#### Stopping the transport

**Method:** ***myMiddlewareTransportBridge_stop***

This method stops the thread started in *myMiddlewareTransportBridge_start()* and safely shutdown the middleware connection. This method also closes any internal timers, IO events, and subscriptions.


# Conflation methods

**Methods:**

* ***myMiddlewareBridgeMamaTransport_requestConflation***
* ***myMiddlewareBridgeMamaTransport_requestEndConflation***
* ***myMiddlewareMamaTransport_installConnectConflateMgr***
* ***myMiddlewareMamaTransport_uninstallConnectConflateMgr***
* ***myMiddlewareMamaTransport_startConnectionConflation***
* ***myMiddlewareBridgeMamaTransport_isValid***
* ***myMiddlewareBridgeMamaTransport_findConnection***
* ***myMiddlewareMamaTransport_sendMsgToConnection***
* ***myMiddlewareMamaTransport_isConnectionIntercepted***
* ***myMiddlewareBridgeMamaTransport_freeAllConnections***
* ***myMiddlewareBridgeMamaTransport_freeAllServerConnections***


These above methods are optional and provide support for conflation. Conflation is a process where publishers merge multiple messages on the write queue into a single message to reduce bandwidth and to deal with slow consumers.

The most important aspect is that a client can request and end conflation which requires publishers to process these requests. The conflation API assumes connections based middleware which provides the ability for publishers to intercept (isolate) a single connection to a slow consumer and compress/conflate the affected stream.
A client may monitor its own queue sizes to determine when it requires conflated data.

These methods can return the MAMA_STATUS_NOT_IMPLEMENTED status, if middleware doesn’t support such features.

## Get methods

**Methods:**

* **myMiddlewareBridgeMamaTransport_getNumLoadBalanceAttributes***
* **myMiddlewareBridgeMamaTransport_getLoadBalanceSharedObjectName***
* **myMiddlewareBridgeMamaTransport_getLoadBalanceScheme***
* **myMiddlewareBridgeMamaTransport_getAllConnections ***
* **myMiddlewareBridgeMamaTransport_getAllConnectionsForTopic ***
* **myMiddlewareBridgeMamaTransport_getAllServerConnections***
* **myMiddlewareBridgeMamaTransport_getNativeTransport***
* **myMiddlewareBridgeMamaTransport_getNativeTransportNamingCtx***

These above methods are optional and provide support for Load balancing feature. Load Balancing is a mechanism of selecting a particular transport from a set of available transport channel to balance the amount of traffic transmitted.  The selection could be made at random or in a round robin fashion or in some other way according to the user requirements. The above get method provides the OpenMAMA API with the appropriate load balancing scheme, attributes and the load balancing shared object used by the underlying middleware.

If the underlying middleware doesn’t support load balancing feature then the method could return the MAMA_STATUS_NOT_IMPLEMENTED status.


# Queue Component

Below are the core operations that need to be implemented in this queue component of the bridge implementation

* Creating the queue,
* Destroying the queue,
* Dispatching the queue,
* Get/Set methods.


## Creating the Queue

**Methods:**

* ***myMiddlewareBridgeMamaQueue_create***
* ***myMiddlewareBridgeMamaQueue_create_usingNative***

Both the above methods *myMiddlewareBridgeMamaQueue_create* and *myMiddlewareBridgeMamaQueue_create_usingNative* create queues in the bridge implementation.

The “using native” method allows callers to create a MAMA queue with a handle to a queue created by the native underlying middleware. This is useful when combining applications written partially to OpenMAMA and partially to the native middleware directly.

*myMiddlewareBridgeMamaQueue_create* method allocates the memory for *myMiddlewareQueueBridge* structure and then assigns the parent *mamaQueue* object to the *mParent* member of the *myMiddlewareQueueBridge* structure.

```c
Below are the members of the *myMiddlewareQueueBridge* structure

 typedef struct myMiddlewareQueueBridge {
    mamaQueue          mParent;
    wombatQueue        mQueue;
    uint8_t            mIsNative;
 } myMiddlewareQueueBridge;
```

OpenMAMA also provides the WombatQueue implementation as part of the common library. Middlewares that do not support the concept of queuing natively may use the WombatQueue rather than implementing queuing from scratch.Wombat Queue can be creating by invoking the *wombatQueue_allocate* method, followed by *wombatQueue_create* method of the Wombat Queue Implementation.

*myMiddlewareBridgeMamaQueue_create_usingNative* doesn’t use the Wombat Queue Implementation; it accepts a native implementation of the queue and assigns that queue to the allocated *myMiddlewareQueueBridge* structure.


## Destroying the Queue

**Method:** ***myMiddlewareBridgeMamaQueue_destroy***

This method destroys the underlying queue implementation, Wombat Queue Implementation can be destroyed by invoked the *wombatQueue_destroy* method.

Also this method frees up the memory allocated by the *myMiddlewareQueueBridge* Structure.


## Dispatching the Queue


**Methods:**

* ***myMiddlewareBridgeMamaQueue_dispatch***
* ***myMiddlewareBridgeMamaQueue_timedDispatch***
* ***myMiddlewareBridgeMamaQueue_dispatchEvent***
* ***myMiddlewareBridgeMamaQueue_enqueueEvent***
* ***myMiddlewareBridgeMamaQueue_stopDispatch***

There are different approaches to dispatching events from the queue, The OpenMAMA API provides methods that dispatch one event at a time or dispatch with a timeout or dispatch indefinitely. 

*myMiddlewareBridgeMamaQueue_dispatch* method dispatches event indefinitely, until someone invokes stop dispatch from a another thread.

For the Wombat Queue, this method uses the timed dispatch method: dispatching event on a with a 0.5 second timeout interval and then checking to see if someone has invoked *stopDispatc*h on the queue. The queue stops dispatching if *stopDispatch* method was invoked setting the *isDispatching* Boolean flag to be set to false.

*myMiddlewareBridgeMamaQueue_timedDispatch* method invokes the timed dispatch implementation of the Wombat Queue (*wombatQueue_timedDispatch*). This *timedDispatch* method takes in timeout argument and it only dispatches for the specified time interval.

*myMiddlewareBridgeMamaQueue_dispatchEvent* method only dispatches one event at a time. This method invokes the *wombatQueue_dispatch* method of the Wombat Queue Implementation.

*myMiddlewareBridgeMamaQueue_stopDispatch* method stop dispatching on the queue, this method invokes the *wombatQueue_unblock* method of the Wombat Queue Implementation.

OpenMAMA API allows user to add user events to the queue irrespective of the middleware. This allows user code to be executed on any of the dispatching thread. This is done through *myMiddlewareBridgeMamaQueue_enqueueEvent* method, this method adds event in the front of the queue to be dispatched from the dispatching thread.

This method allocates a *QueueClosure* object and assigns the callbacks and other closure to the object. Once the closure object is populated, this method invokes the wombatQueue_enqueue method of the Wombat Queue Implementation with the closure as one of the argument. The *wombatQueue_enqueue* method adds and dispatches the added event in the relevant thread


## Set and Get Methods

**Methods:**

* ***myMiddlewareBridgeMamaQueue_setEnqueueCallback***
* ***myMiddlewareBridgeMamaQueue_removeEnqueueCallback***
* ***myMiddlewareBridgeMamaQueue_getNativeHandle***
* ***myMiddlewareBridgeMamaQueue_setHighWatermark***
* ***myMiddlewareBridgeMamaQueue_setLowWatermark***
* ***myMiddlewareBridgeMamaQueue_getEventCount***

The OpenMAMA API supports registering for callbacks to be invoked when a high watermark for the queue is reached, that is the number of outstanding events on the queue reaches a specified threshold. This callback is invoked when the number of events returns to a low watermark level.

*myMiddlewareBridgeMamaQueue_setHighWatermark* and *myMiddlewareBridgeMamaQueue_setLowWatermark* are the methods that implementes this feature in this queue component of the bridge. These methods accept high and low watermark and pass it on to the middleware for notification to be triggered to the callback methods.

If the middleware doesn’t support High and Low Watermark then this method need to return MAMA_STATUS_NOT_IMPLEMENTED.

*myMiddlewareBridgeMamaQueue_getEventCount* method returns the number of outstanding events in the queue. This method invokes the *wombatQueue_getSize* method to find the size of the Wombat Queue Implementation. This method invokes the appropriate method for native queue implementations or returns MAMA_STATUS_NOT_IMPLEMENTED.

*myMiddlewareBridgeMamaQueue_getNativeHandle* method provides access to the underlying middleware queue object, this object can either be the *wombatQueue* or the *nativeQueue*, depending on the implementation.

OpenMAMA allows user to add user events to the queue irrespective of the middleware. This allows user code to be executed on any of the dispatching thread. This is done through *myMiddlewareBridgeMamaQueue_enqueueEvent* method. If the native queue does not support arbitrary callbacks, this method must return MAMA_STATUS_NOT_IMPLEMENTED

The *MiddlewareBridgeMamaQueue_setEnqueueCallback* allows applications to receive a callback whenever an item/event is placed on the queue. Implementation is optional.

*myMiddlewareBridgeMamaQueue_removeEnqueueCallback* removes the callback specified in “setEnqueueCallback()”. .
If the underlying middleware doesn’t support these features then this method would return the MAMA_STATUS_NOT_IMPLEMENTED status.


# Input Output (I/O) Component (Optional)

The input/output component of the bridge generates events asynchronous IO on file descriptors and sockets.
Below are the core operations that need to be implemented in this input/output component of the bridge implementation

* Create and Destroy methods
* Get methods


## Create and Destroy methods##

**Methods:**

* ***myMiddlewareBridgeMamaIo_create***
* ***myMiddlewareBridgeMamaIo_destroy***

The OpenMAMA API provides an abstract mechanism by which a client registers interest for various events on file descriptors. A callback, provided to the API, is invoked whenever an event of the type specified when registering interest.

If the underlying middleware supports the registration of IO events, then the *myMiddlewareBridgeMamaIo_create* identifies the I/O event and maps the event to the appropriate middleware I/O event. It also initializes the callback and the queue for this event to be as the middleware receives the event.

If the underlying middleware does not support the registration of IO events, then the above method returns MAMA_STATUS_UNSUPPORTED_IO_TYPE or MAMA_STATUS_NOT_IMPLEMENTED. 

*myMiddlewareBridgeMamaIo_destroy* method cancels the interest for any input/output events and frees any resources associated with the IO event object.


## Get methods

**Method:** ***myMiddlewareBridgeMamaIo_getDescriptor***

*myMiddlewareBridgeMamaIo_getDescriptor* method returns the file descriptor associated with the IO event.

If the underlying middleware doesn’t support the registration of Input/output event, then the above method returns MAMA_STATUS_NOT_IMPLEMENTED.

# Timer Component

OpenMAMA supports the concept of a repeating timer that enqueues a callback on a queue to be invoked by the dispatch thread at regular intervals. The timer can be created with a specified interval in seconds, using a double precision floating point number to give resolution in fractions of seconds if required. MAMA invokes the callback at intervals no shorter than that specified. A number of factors, including queue depth, cause the timer interval to be inexact or the callback not to be immediately invoked on firing of the timer.

Below are the core operations that need to be implemented in this timer component of the bridge implementation
* Create/ Destroy methods
* Reset methods
* Get/Set  methods

##Create/Destroy methods

**Method:**

* ***myMiddlewareBridgeMamaTimer_create***
* ***myMiddlewareBridgeMamaTimer_destroy***

**myMiddlewareBridgeMamaTimer_create** method allocates the myMiddlewareTimerImpl structure: 

```c
 typedef struct myMiddlewareTimerImpl_
 {
    timerElement      mTimerElement;
    double            mInterval;
    mamaTimerCb       mAction;
    void*             mClosure;
    mamaTimer         mParent;
    wombatQueue       mQueue;
    mamaTimerCb       mOnTimerDestroyed;
 } myMiddlewareTimerImpl;
```

Once the above structure is allocated, all the allocated member values are assigned in the create method with values from the arguments. Once assigned the timer is created using the *createTimer* method, method implemented in the common code.

The *myMiddlewareBridgeMamaTimer_destroy* method destroys the timer using the *destroyTimer* method, a method implemented in the common code. This method also set the mAction element of the myMiddlewareTimerImpl to NULL. 

This method also add a event in the event queue to be dispatched, to provide notification to the client application of the destroyed timer through the *onTimerDestroyed* callback


## Reset methods

**Method:** ***myMiddlewareBridgeMamaTimer_reset***

The *myMiddlewareBridgeMamaTimer_reset* method populates the timeval struct using the values from the 
myMiddlewareTimerImpl structure. Once populated, the reset method destroys the timer using the *destroyTimer*, a method implemented in the common code.

After the timer is destroyed, the reset method creates a new timer using the *createTimer* and the value populated in the timeval struct.


## Get/Set Methods

**Methods:**

* ***myMiddlewareBridgeMamaTimer_setInterval***
* ***myMiddlewareBridgeMamaTimer_getInterval***

The set Interval method accepts the interval value as an argument and set the value to the *mInterval* member of the timer structure.

The get Interval method returns the value of the *mInterval* member of the timer structure as the return value.


# Subscription Component

Subscription in OpenMAMA provides the ability to register interest in the source of data for a specific symbol. The OpenMAMA API is used to subscribe to market data as published by NYSE Technologies Market Data Infrastructure and the OpenMAMA advanced publisher (dqpublisher). The API also supports Basic subscription, which is used to subscribe to data published by generic OpenMAMA Publisher.
Below are the core operations that need to be implemented in this subscription component of the bridge implementation

* Create methods
* Destroy methods
* Mute methods
* Wildcard  methods
* Get/Set methods
* Other methods


## Create methods

**Method:** ***myMiddlewareBridgeMamaSubscription_create***

The create method then allocates the *myMiddlewareSubscription* structure and assigns the relevant value to the member of the *myMiddlewareSubscription* structure. Below is the structure of the *myMiddlewareSubscription* that needs to be allocated and assigned with the relevant values.

```c
 typedef struct myMiddlewareSubscription
 {
    Subscription*        mMWSubscription;
    Elvin*               mMiddleware;
    mamaMsgCallbacks     mMamaCallback;
    mamaSubscription     mMamaSubscription;
    mamaQueue            mQueue;
    mamaTransport        mTransport;
    const char*          mSource;
    const char*          mSymbol;
    char                 mSubject[256];    
    void*                mClosure;
    int                  mIsNotMuted;
    int                  mIsValid;
 } myMiddlewareSubscription;
```

To create a subscription, the create method requires the queue, transport, the parent mamaSubscription object, callback and closure object, to be allocated and assigned to the *myMiddlewareSubscription* strcuture. This method also defines the subject name for the underlying subscription by combining the source name and the symbol name.


Once the *myMiddlewareSubscription* structure is populated with the relevant values such as subject name, middleware context and other mama objects, this method invokes the underlying middleware method to register interest in the topic. For example in Elvin, the create method invokes the *elvin_subscribe* method to register interest.

Once the interest for the symbol is registered, this method also adds the listener callback to be notified of any update from the underlying subject name. For example in Elvin, the listener callback is added through the *elvin_subscription_add_listener* method. This listener method requires a callback method to be passed and this callback method would be invoked for any updates for the underlying symbol.

Once the callback is invoked from the middleware, the callback method fetches the native handle of the queue using the *mamaQueue_getNativeHandle* method. Having access to the native queue handle, this callback method adds an event into the native queue to be dispatched on the same thread. This event invokes another callback method with data from the middleware and the subscription object as arguments.

The callback method invoked from the queue essentially populates the mamaMsg object with the payload from the middleware and passes the mamaMsg to the OpenMAMA Interface for processing.

Below are some steps, this queue callback check before passing the message for processing. The Queue callback method makes sure that the subscription is still processing message by checking the member value *mIsNotMuted* and *mIsValid* variable.

This method also then fetches the reusable message object stored in the associated mamaQueue using the *mamaQueueImpl_getMsg* method, having access to the mamaMsg object; this queue callback method also fetches the bridge message from the mamaMsg using the *mamaMsgImpl_getBridgeMsg* method.

Before passing the message to the OpenMAMA, the queue callback method sets the payload on the mamaMsg using the *mamaMsgImpl_setMsgBuffer* method and this method also sets the attributes by invoking the bridge specific *setAttributesAndSecure*. Once the mamaMsg message is populated, the bridge passes the message for processing using the *mamaSubscription_processMsg* to the OpenMAMA API.

Below is the pseudo code that explains the create method in little more detail.

```c
 myMiddlewareSubscription* impl = (myMiddlewareSubscription*)calloc (1,     sizeof(myMiddlewareSubscription));  
  
    impl->mMamaCallback       = callback;
    impl->mMamaSubscription   = subscription;
    impl->mQueue              = queue;
    impl->mTransport          = transport;
    impl->mClosure            = closure;
    impl->mIsNotMuted         = 1;
    impl->mIsValid            = 1;
    impl->mMiddlewareSubscription = myMiddleware_subscribe(impl->mMiddleware, makeMiddlewareSubject(impl->mSubject));  
    middleware_subscription_add_listener(impl->mMiddlewareSubscription, middleware_callback, impl);  
    *subscriber = (subscriptionBridge) impl;
    return MAMA_STATUS_OK;
```

## Destroy methods

**Method:** ***myMiddlewareBridgeMamaSubscription_destroy***

This destroy method unregisters the interest for the underlying symbol by invoking the middleware specific unsubscribe method. This method also removes the listener for that particular symbol.

For example in Elvin middleware, the unsubscribing is done using the *elvin_unsubscribe* method and the removal of the listener callback method is done through the *elvin_subscription_remove_listener* 

This method also fetches the native queue handle using the *mamaQueue_getNativeHandle* method, having access to the native queue, the destroy method adds an event to the queue to invokes the destroy callback, which notifies the client application of the successful destroy of the subscription.


## Mute methods

**Methods:**

* ***myMiddlewareBridgeMamaSubscription_mute***
* ***myMiddlewareBridgeMamaSubscription_muteCurrentTopic***

*myMiddlewareBridgeMamaSubscription_mute* method set the *mIsNotMuted* member value to zero, *myMiddlewareBridgeMamaSubscription_muteCurrentTopic* set mute on particular topic.

If the middleware doesn’t support mute method, then the method can return the MAMA_STATUS_NOT_IMPLEMENTED status 


## Wildcard methods (Optional)

**Methods:**

* ***myMiddlewareBridgeMamaSubscription_createWildCard***
* ***myMiddlewareBridgeMamaSubscription_hasWildcards***

Some underlying middleware has support for wildcard subscription, in which case the above method would parse the arguments and invoke the relevant middleware specific methods for wildcard subscription.

If the underlying middleware doesn’t support wild card subscription, then this method could simply return the MAMA_STATUS_NOT_IMPLEMENTED status.


## Get/Set methods

**Methods:**

* ***myMiddlewareBridgeMamaSubscription_getPlatformError***
* ***myMiddlewareBridgeMamaSubscription_setTopicClosure***

*myMiddlewareBridgeMamaSubscription_getPlatformError* method checks for any error from the middleware and provide the error description.
*myMiddlewareBridgeMamaSubscription_setTopicClosure* method set the closure object on a topic basis

If the underlying middleware doesn’t support the above methods, then this method could simply return the MAMA_STATUS_NOT_IMPLEMENTED status.


## Other methods

**Methods:**

* ***myMiddlewareBridgeMamaSubscription_isValid***
* ***myMiddlewareBridgeMamaSubscription_isTportDisconnected***

*myMiddlewareBridgeMamaSubscription_isValid* method returns whether the subscription is valid or not, this method returns the value of the member variable mIsValid.

*myMiddlewareBridgeMamaSubscription_isTportDisconnected* method check the status of the underlying transport connection by invoking the middleware specific transport verification method. For example in Elvin, transport is verified using the return value of the elvin_is_open method.

If the underlying middleware doesn’t support the above methods, then this method could simply return the MAMA_STATUS_NOT_IMPLEMENTED status.


# SubInitial Component

Request/Response communication involves a requester of data issuing a request on a topic to responders of data for that topic on a particular transport. A requester can receive multiple responses to a request. This response semantics are always point to point.
Below are the core operations that need to be implemented in this sub initial component of the bridge implementation

* Create methods
* Destroy methods
* Get methods
* Callback  methods


## Create methods

**Method:** ***myMiddlewareBridgeMamaInbox_create***

*myMiddlewareBridgeMamaInbox_create* method initiates and creates the inbox subscription to the underlying symbol.

To create an inbox subscription, a message is first associated with an instance of an inbox object and then sent from the publisher. The inbox is a destination recipient for any responses to the issued request. A callback is registered with the inbox upon creation and is invoked whenever any response to the request is received by the middleware.

This create method internally invokes a private method called *myMiddlewareBridgeMamaInbox_createByIndex* by passing the same set of the argument and an additional transport index argument 
*myMiddlewareBridgeMamaInbox_createByIndex* method check for the validity of the arguments and allocates the middleware inbox structure. Below are the members of the middleware inbox structure.

```c
 typedef myMiddlewareInboxImp{
    char                     mInbox[MAX_SUBJECT_LENGTH];
    mamaSubscription         mSubscription;    
    void*                    mClosure;
    
    
    mamaInboxMsgCallback     mMsgCB;
    mamaInboxErrorCallback   mErrCB;
    mamaInboxDestroyCallback mOnInboxDestroyed;
    
    mamaInbox                mParent;
 }
```

Once the above structure is allocated, the structure need to be populated with the relevant objects. A *mamaMsgCallback' object is allocated and assigned to the member of the inbox structure. A mama subscription object is allocated using the *mamaSubscription_allocate* method and assigned to the *mSubscription* member of the inbox structure. 

Once the inbox structure is populated the underlying subscription is created using the **'mamaSubscripion_createBasic method, by passing in the transport, queue, callback, inbox and other objects.


## Destroy methods

 **Method:** ***myMiddlewareBridgeMamaInbox_destroy***

The *myMiddlewareBridgeMamaInbox_destroy* method destroys and deallocates the underlying mama subscription object and also frees up the underlying inbox structure.


## Get methods

**Method:** ***myMiddlewareInboxImpl_getReplySubject***

The *myMiddlewareInboxImpl_getReplySubject* method returns the inbox string by accessing the middleware inbox structure.


## Callback methods

**Methods:**

* ***myMiddlewareInbox_onMsg***
* ***myMiddlewareInbox_onCreate***
* ***myMiddlewareInbox_onDestroy***
* ***myMiddlewareInbox_onError***

The above *onMsg*, *onCreate*, *onDestroy* and *onError* callback method needs to be implemented and registered with the inbox object for to be invoked on notification for any relevant event from the middleware.

*onCreate* callback method notifies the user of the successful creation of the inbox subscription.

*onDestroy* callback method invokes the onInboxDestroyed callback method to notify the user of the destruction of the 
inbox subscription.

*onError* callback method logs the error with creating the inbox subscription.

*onMsg* callback method invokes the msgCb method from the inbox structure to pass the message over the OpenMAMA API for processing the message.


# Publisher Component

The OpenMAMA API currently only supports topic based publishing.

Below are the core operations that need to be implemented in this publisher component of the bridge implementation

* Create methods
* Destroy methods
* Send methods
* Build  methods


## Create methods

**Methods:**

* ***myMiddlewareBridgeMamaPublisher_create***
* ***myMiddlewareBridgeMamaPublisher_createByIndex***

The create method allocates the publisher structure and assigns the member of the structure. The create method also builds the subject needed to publish the message.

*myMiddlewareBridgeMamaPublisher_create* method internally invokes the *myMiddlewareBridgeMamaPublisher_createByIndex* method with the same set of argument and an additional transport index argument.

*myMiddlewareBridgeMamaPublisher_createByIndex* allocates the below defined publisher structure and then assigns the transport, middleware, topic, source and root member of the publisher structure.

```c
 typedef struct myMiddlewarePublisherBridge
 {
    mamaTransport  mTransport;
    Middware*      mMyMiddleware;
    const char*    mTopic;
    const char*    mSource;
    const char*    mRoot;
    char*          mSubject;
 } myMiddlewarePublisherBridge;

After allocating and assigning the member of the publisher structure, the *myMiddlewareBridgeMamaPublisher_createByIndex* method builds the subject by invoking the *myMiddlewareBridgeMamaPublisherImpl_buildSendSubject* method.
```

## Destroy methods

**Method:** ***myMiddlewareBridgeMamaPublisher_destroy***

The destroy method frees the source, topic, root and subject of the publisher structure. This method also frees up the publisher structure allocated during the create method.


## Send methods

**Methods:**

* ***myMiddlewareBridgeMamaPublisher_sendFromInbox***
* ***myMiddlewareBridgeMamaPublisher_sendFromInboxByIndex***
* ***myMiddlewareBridgeMamaPublisher_send***
* ***myMiddlewareBridgeMamaPublisher_sendReplyToInbox***
* ***myMiddlewareBridgeMamaPublisher_sendReplyToInboxHandle***

The *send* method similar to other methods validates the publisher and gets the payload buffer from the mama message object. The payload is extracted using the *mamaMsgImpl_getPayloadBuffer* method.

Once the payload is extracted into a custom middleware object, this send method invokes the appropriate middleware specific send method using the payload and the middleware reference.

For example in Elvin middleware, the send method invokes the *elvin_send* method with the avis middleware and the attributes as an argument.

The *sendFromInbox* method internally invokes the *sendFromInboxByIndex* method by passing the same set of argument and passing in the transport index argument as zero.

The *sendFromInboxByIndex* method validates that the publisher, middleware argument and also verifies whether middleware is open for connection. After the verification process, the *sendFromInboxByIndex* method retrieves the reply address from the inbox using the *myMiddlewareInboxImpl_getReplySubject* method. The method then sets the reply address in the mama message using the *mamaMsg_updateString* on the “__inbx” field name and then invokes the *myMiddlewareBridgeMamaPublisher_send* method with the message as an argument.

The *sendReplyToInbox* method sends a point to point response using the request message, this method uses the request message as an argument to fetches the native handle by invoking the *mamaMsg_getNativeHandle*. This method also fetches the payload from the replyMsg using the *mamaMsgImpl_getPayloadBuffer*, this payload should be now be populated in the middleware specific data type. 

For example in Elvin, attributes object get populated with the payload content.

This method also retrieves a reply address value from the “__inbx” string field from the request message and updates the "__subj" string fields in the reply message. Once the __subj field is updated with the appropriate value, this method invokes the middleware specific send method using the middleware and payload arguments.

For example in Elvin middleware, the send method invokes the *elvin_send* method with the avis middleware and the attributes as an argument.

The *sendReplyToInboxHandle* method validates the publisher object and then updates the "__subj" fields in the mama message object with the inbox using the mamaMsg_updateString. After updating the field, the method invokes the *myMiddlewareBridgeMamaPublisher_sendFromInboxByIndex* with the updated message, mamainbox object and the publisher object as arguments.


## Build methods

*Method:** ***myMiddlewareBridgeMamaPublisherImpl_buildSendSubject***

The above *buildSendSubject* method builds and set the subject on the publisher structure, the subject is used by the publisher object during publishing.

If both the root and the source name are available then the *buildSendSubject* method concatenates the root and the source name and creates the send subject. If the root symbol is not available, the method concatenates the source name and the topic name. If the source name is not available then the method uses the topic name to construct the send subject.

This constructed send subject is assigned to the *mSubject* member variable of the publisher structure.
This method is mainly used by the Application developer to process the subject to any user defined format before issuing to the middleware. 


# Message (MSG) Component

Below are the core operations that need to be implemented in this message component of the bridge implementation

* Create methods
* Destroy methods
* Reply methods
* Get/Set methods
* Other methods

## Create methods

**Method:** ***myMiddlewareBridgeMamaMsg_create***

The create method allocates the underlying message structure and assigns the member of the structure with appropriate value. Below are the members of this message structure.

```c
 typedef struct myMiddlewareMsgImpl
 {
     Attributes*  middlewareVariable;    
     mamaMsg      mParent;
     bool         mSecure;
 }
 ```

After allocating the message structure, the create method fetches the native payload message using the *mamaMsg_getNativeMsg* method and assigns the payload to the member of the structure.


## Destroy methods

**Methods:**

* ***myMiddlewareBridgeMamaMsg_destroy***
* ***myMiddlewareBridgeMamaMsg_destroyMiddlewareMsg***

*myMiddlewareBridgeMamaMsg_destroy* method frees up the underlying message structure after invoking the *myMiddlewareBridgeMamaMsg_destroyMiddlewareMsg* method to destroy the underlying message.

The *myMiddlewareBridgeMamaMsg_destroyMiddlewareMsg* method invokes the middleware specific free method to free up the middleware specific message resources. This method also frees up the payload message and set the member variable of the structure to NULL.


## Reply methods

**Methods:**

* ***myMiddlewareBridgeMamaMsgImpl_setReplyHandle***
* ***myMiddlewareBridgeMamaMsgImpl_setReplyHandleAndIncrement***
* ***myMiddlewareBridgeMamaMsg_getNativeHandle***
* ***myMiddlewareBridgeMamaMsg_duplicateReplyHandle***
* ***myMiddlewareBridgeMamaMsg_copyReplyHandle***
* ***myMiddlewareBridgeMamaMsg_destroyReplyHandle***

The underlying assumption is that that reply channel handle would be reference counted. The copy and duplicate  method would increase the reference count where as the destroy method would decrease the reference count
* The *myMiddlewareBridgeMamaMsg_getNativeHandle* method returns reference to the underlying payload message.
* The *myMiddlewareBridgeMamaMsgImpl_setReplyHandle* method updates the “__inbx” field of the parent mamaMsg object with the value from the argument
* The *myMiddlewareBridgeMamaMsg_duplicateReplyHandle* method duplicates the reply handle by retrieving the “__inbx” field value from the parent mama message object using the mamaMsg_getString method and copying the value to the duplicate variable.
* The *myMiddlewareBridgeMamaMsg_copyReplyHandle* method copies the reply handle to the destination handle using string duplication method
* The *myMiddlewareBridgeMamaMsg_destroyReplyHandle' method destroys the reply handle by invoking free on the replyAddress.


## Get/Set methods

**Methods:**

* ***myMiddlewareBridgeMamaMsg_setSendSubject***
* ***myMiddlewareBridgeMamaMsgImpl_setAttributesAndSecure***


The *myMiddlewareBridgeMamaMsgImpl_setAttributesAndSecure* method accepts the attributes and the secure boolean variable as arguments and sets in the member of the message structure.

The* myMiddlewareBridgeMamaMsg_setSendSubject* method accepts the subject name and the symbol as arguments and sets it on the string field of the parent mama message object using the mamaMsg_updateString method.
The subject value is set on the “__subj” string field of the mama message object and symbol value is set on the “MdSubscSymbol” string field of the mama message


## Other methods

**Methods:**

* ***myMiddlewareBridgeMamaMsg_detach***
* ***myMiddlewareBridgeMamaMsg_getPlatformError***
* ***myMiddlewareBridgeMamaMsg_isFromInbox***

The MamaMsg object goes out of scope outside the callback as it is reused by the API, If the user wants to keep reference to the MamaMsg object, then the detach method can be used to transfer the ownership of the MamaMsg object from the API to the user.

The *myMiddlewareBridgeMamaMsg_detach* method detaches the message and moves the ownership of the message from the API to the user. The message content can be detached by invoking the middleware specific cloning methods.

For example in Elvin, the detach method invokes the clone method to detach the mama message object.

The *myMiddlewareBridgeMamaMsg_getPlatformError* method returns the middleware specific error from the underlying middleware; if the middleware doesn’t support similar method then it could simply return the 
MAMA_STATUS_NOT_IMPLEMENTED status

The *myMiddlewareBridgeMamaMsg_isFromInbox* method returns a Boolean value, which represents whether the message was from inbox or not. This method returns true if the underlying mama message object has a “__inbx” string field available in the message, else false if the field is not present.
