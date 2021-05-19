---
title: RFC for Mama Resource Pool
sidebar: openmama_sidebar
permalink: openmama_rfc_mama_resource_pool.html
folder: openmama
toc: true
---

## Definition of the Problem

For the new user, OpenMAMA can be a fairly daunting API to get acquainted with. There are
a few high level concepts that a new OpenMAMA developer needs to become acquainted with before
they even begin to write an application:

* Middleware Bridges
* Transport Bridges
* Transports (not to be confused with transport bridges)
* Queues / Dispatchers (for anything beyond the most basic applications)
* Dictionaries
* Sources
* Subscriptions (Basic / Market Data / MAMDA*)

As a result, the basic mamalisten applications that we write actually tend to be quite unwieldy.
And even the simplified quickstart code is much more involved than it would be ideally.
The concepts seem familiar to the seasoned OpenMAMA user
but for new users, it can make the API a little too involved to get their head around.

## High Level Requirements

Primary goals are to:

* Provide a new more convenient interface for managing subscriptions, reducing any barriers
  to entry for new users
* Increase accessibility of the OpenMAMA API for new users
* Provide a convenient and well tuned interface “out of the box” where tuning options
  can be configured rather than coded
* Provide a small interface which would be easy to port to other languages

We should always bear in mind that part of the goal here isn't just to make OpenMAMA accessible
for new users; it's also to help market data vendors distribute their data more easily and risk
free to new prospects. Core approaches may include:

* Using existing OpenMAMA objects as the currency of the interfaces provided here (e.g. `_getSubscription`
  may return a `mamaSubscription` type).
* Abstracting common performance tunings away from code and into configuration (e.g. thread pinning, 
  subscription distribution to queues etc).

## Summaries of Design Approaches Considered

There are two main approaches that are possible to accomplish this sort of thing. One is the "classic"
way which involves writing a whole bunch of APIs which abstract but at the cost of adding complexity.
The odds are that this is what is being used in most places at the moment. We even have an open source
one to reference here in the MAMA Managed Environment.

The other more modern approach is to design the interface "developer first" and think of what (in an
ideal world) the API would do for you, then write an interface to satisfy that approach.

### Adopting MAMA Managed Environment (MME)

[This project or something similar to it](https://github.com/nyfix/MME).

This is something that many users will have adopted - a series of APIs to try and help reuse code across
different projects. This sort of project goes by many names. I have seen MamaManager more
often than not but no matter what it is called, the principle is always the same - abstract
OpenMAMA to only the interfaces which your application uses, and the threading models which your
applications find convenient.

#### Pros of Choice X Description

* Abstracts underlying MAMA objects
* Has production miles

#### Cons of Choice X Description

* If you go on for long enough, you'll end up re-writing an abstraction layer above almost all of OpenMAMA
* May help with DRY in projects which use it but beyond that doesn't add much convenience
* Not much of an improvement in terms of complexity (in fact it adds an additional layer)
* No C++ / Java / C# Bindings

### MAMA Resource Pool

This is the original approach outlined by Frank on the mailing list. The idea is to reduce an OpenMAMA subscribing application to something which looks more like this:

```c
// Set up the event handlers for OpenMAMA
mamaMsgCallbacks callbacks;
memset(&callbacks, 0, sizeof(callbacks));
callbacks.onMsg = subscriptionOnMsg;
callbacks.onCreate = subscriptionOnCreate;
callbacks.onError = subscriptionOnError;

// Use a new "resource pool"
mamaResourcePool resourcePool;
const char* poolName = "pool_name";
const void* closure = NULL;

// Create the resource pool, allocating queues, defaults etc from configuration
mamaResourcePool_create(&resourcePool, poolName);

// Actually... subscribe to something via something convenient like a URI 
mamaResourcePool_createSubscriptionFromUri(&subscription,
                                           "bridge://transport/source/topic",
                                           &callbacks,
                                           closure);

// Block
mama_start();
```

Or even (in a less verbose language and with generous overloading):

```java
MamaResourcePool mamaResourcePool = new MamaResourcePool("pool_name");
MamaSubscription subscription = mamaResourcePool.createSubscription(
    "bridge://transport/source/topic",
    (subscription, msg) -> {
        // Process the message
    },
    closure
);
```

So in this case, the mamaResourcePool will:

* Create queues for subscriptions (which could be configurable based on the poolName).
* Load all middleware bridges found on the PATH / LD_LIBRARY_PATH etc.
* Call mama_open() (if not already open).
* Create and manage internal stores of all managed subscriptions, transports, sources etc.

Then when a resource is created inside:

* Find / create transport bridge.
* Find / create transport.
* Find / create source.
* Find / create subscription (e.g. multiple callbacks for same subscription).
* Find / create anything which is required to acquire the requested resource.
* Be convenient and usable, but still flexible (it would return existing OpenMAMA objects so they can be manipulated).
* Take the heavy lifting and thread safety pain away from the application developer.

The suggestion is to start the API small, then let it grow organically. So start with:

| **Method `mamaResourcePool_*`** | **Function** |
| `mama_status create( mamaResourcePool* pool const char* poolName )` | This will allocate a mamaResourcePool and all requisite dependencies according to the currently loaded configuration. |
| `mama_status destroy( mamaResourcePool )` | This will destroy the mamaResourcePool and all associated subscriptions inside. |
| `mama_status createSubscriptionFromUri( mamaResourcePool pool, mamaSubscription* sub, const char* uri )` | Accepts a subscription to populate and a URI, will create it and then return it. Additional query parameters may then be parsed to provide additional functionality (e.g. to return a subscription in a deactivated state). |
| `mama_status destroySubscription( mamaResourcePool pool, mamaSubscription sub )` | Destroys the provided MAMA Subscription and removes it from the MAMA Resource Pool. This operation will be thread safe. |
| `mama_status getSubscriptionFromUri( mamaResourcePool pool, mamaSubscription* sub, const char* uri )` | Return the MAMA Subscription object from the cache for the provided URI. |

And have the following sort of configuration options:

```
// The number of threads / queues to use in the pool’s queue group
mama.resource_pool.<pool name>.queues = 2

// Any preferred regex for assigning URIs to threads on creation
mama.resource_pool.<pool_name>.queue_0.regex = ^.*[/]b*[0-9A-M].*$
mama.resource_pool.<pool_name>.queue_1.regex = ^.*[/]b*[N-Z].*$

// Name of OpenMAMA queue thread to create in the queue group (to work
// alongside mama.thread_affinity (will be <thread_prefix>_N where N is
// the queue index).
mama.resource_pool.<pool_name>.thread_name_prefix = <pool_name>

// List of bridges to load (by default will try to load all available)
mama.resource_pool.<pool_name>.bridges = qpid zmq
```

#### Pros of Choice X Description

* Starts with a "developer first" mentality
* Will make it very easy to get up and running with OpenMAMA
* Should scale well for both "getting started" and "rolling up" deployments
* Configuration over code should make it easier to performance tweak
* Provides a small interface which is easy to port to other languages
* User doesn't need to get bogged down with OpenMAMA semantics
* URIs can be extended with query parameters to extend functionality beyond the bare URI

#### Cons of Choice X Description

* Needs probing to see if it's suitable for enterprise as well as simple applications
* May prove tricky to be fully thread safe for all operations without sacrificing performance
* String parsing isn't particularly efficient. Other options may be preferred.

## Recommended Design Approach

TBC

### Component X

TBC

#### Interface Changes

TBC

#### Internal Data Structure Changes

TBC

#### Unit Testing Required

TBC

#### Integration Testing Required

TBC

## Impact of Resulting Changes

Refer to [this](https://github.com/OpenMAMA/OpenMAMA/wiki/OpenMAMA-Versioning) when considering this section.

### Impact to Application Users

If application interface is changed, document it here and justify the impact is worth the improvement.

### Impact to Bridge Developers

If the bridge interface is changed, document it here and justify the impact is worth the improvement.

### Impact to Internal API Components

If any internal interface is changed, document it here and justify the impact is worth the improvement.
