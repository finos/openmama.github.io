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

There are two main approaches that are possible to accomplish this sort of thing.

The first (recommended) is arguably a more modern approach to design the interface "developer first" and think of what (in an
ideal world) the API would do for the developer, then craft an interface to satisfy that approach.

The other is the the "classic" approach which involves several wrapper APIs which abstract away from the
interface but at the cost of adding complexity.
This approach is most commonplace in environments as seen in the wild today. We even have an open source
one to reference here in the MAMA Managed Environment.



### MAMA Resource Pool (recommended)

This is the original approach outlined by Frank on the mailing list. The idea is to reduce an OpenMAMA subscribing application to something which looks more like this when using C:

```c
// Use a new "resource pool" to manage lifecycles of all pool-created resources,
// allocating queues, defaults etc from configuration
mamaResourcePool resourcePool;
mamaResourcePool_create(&resourcePool, "pool_name");

// Set up the event handlers for subscription
mamaMsgCallbacks callbacks;
memset(&callbacks, 0, sizeof(callbacks));
callbacks.onMsg = subscriptionOnMsg;
callbacks.onCreate = subscriptionOnCreate;
callbacks.onError = subscriptionOnError;

// Actually... subscribe to something via something convenient like a URI (Additional API)
const void* closure = NULL;
mamaResourcePool_createSubscriptionFromUri(resourcePool,
                                           &subscription,
                                           "bridge://transport/source/topic",
                                           &callbacks,
                                           closure);

// Block and begin receiving callbacks
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

The idea is to use configuration such as below to manage things like the number of queues to use,
how do load balance etc:

```properties
# The number of threads / queues to use in the pool’s queue group
mama.resource_pool.<pool name>.queues = 2

# Any preferred regex for assigning URIs to threads on creation
mama.resource_pool.<pool_name>.queue_0.regex = ^.*[/]b*[0-9A-M].*$
mama.resource_pool.<pool_name>.queue_1.regex = ^.*[/]b*[N-Z].*$

# Name of OpenMAMA queue thread to create in the queue group (to work
# alongside mama.thread_affinity (will be <thread_prefix>_N where N is
# the queue index).
mama.resource_pool.<pool_name>.thread_name_prefix = <pool_name>

# List of bridges to load (by default will try to load all available)
mama.resource_pool.<pool_name>.bridges = <bridge X> <bridge Y>
```

So in this case, the mamaResourcePool will:

* Create queues for subscriptions (which could be configurable based on the pool name).
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


This is only one potential interface though. The technical working group have discussed several
different potential APIs including many which would have required the provision of both a MAMA Transport
and a MAMA Bridge at various points which adds complexity in both the application and the interface.

As a result of this discussion and the increasingly complex API that it was veering towards,
it was agreed that using the same transport name across multiple
MAMA Bridges should be considered bad practice, and allowing mamaResourcePool (which is primarily aimed at new
adopters) to be hindered because of this particular use case was considered too restrictive and inflexible. So with that
in mind, mamaResourcePool and assocated APIs mandate that the **same transport name cannot be
used for multiple middlewares**.

In the same spirit, the same could be said for sources. Allowing multiple sources to appear across
multiple transports reduced flexibility in the API, so with that in mind it was agreed that the
**same source may not be used on multiple transports when using the MAMA resource pool**.
This allows us to open up API calls that don't require passing bridges or transports around
everywhere since they can be managed by the mamaResourcePool instead, for example:

```c

// This one will use the transport, source and topic to subscribe... with the mama resource pool
// finding / creating the transports and sources requested
mamaResourcePool_createSubscriptionFromComponents(resourcePool,
                                                  &subscription,
                                                  "transportname",
                                                  "sourcename",
                                                  "topicname",
                                                  &callbacks,
                                                  closure);

// This one will imply using the mama resource pool's default transport
mamaResourcePool_createSubscriptionFromTopicWithSource(resourcePool,
                                                       &subscription,
                                                       "sourcename",
                                                       "topicname",
                                                       &callbacks,
                                                       closure);

// This one will imply using the mama resource pool's default transport, and that transport's
// default source (or the pool's default source if provided)
mamaResourcePool_createSubscriptionFromTopic(resourcePool,
                                             &subscription,
                                             "topicname",
                                             &callbacks,
                                             closure);
```

Which would then depend on configuration such as this to define the default source / transport for the
resource pool:

```properties
# Configure a default transport for this resource pool
mama.resource_pool.<pool name>.default_transport = <transport>

# Default source may be provided by either the resource pool, or the transport itself
mama.resource_pool.<pool name>.default_source = <source_name>

# New source level configuration to define the transport and bridge
mama.source.<source_name>.transport = <transport>
mama.source.<source_name>.bridge = <bridge>

# Default source may also be specified at a transport level
mama.transport.bridge.<transport>.default_source = <source_name>
```

This means that application developers don't need to go through the motions of URI construction
to build everything they need for a transport and instead they can defer that boilerplate to
configuration instead.

An added benefit of adopting this approach means that an API such as the following may safely
be used to generate "pick lists" of available transports without fear of conflict or overlap
since transport names are now configured-application-instance-unique:

```c
// Optionally gather all available transports defined in mama.properties for use in pick lists
char* transports[8];
mama_getAvailableTransportNames(resourcePool, transports, 8);
```

Which would then be all you would need to use a mamaResourcePool to create and initialize that transport (no
need to throw mamaBridge instances around):

```c
// Gather just the transport for further metadata to be used in pick lists should need arise
mamaTransport transport;
mamaResourcePool_createTransportFromName(resourcePool,
                                         &transport);
```

Or indeed simply let the mamaResourcePool just-in-time initialize that transport when the first subscription
using it is instantiated.

##### Publishing

Note this covers the subscribing side of the mamaResourcePool for now. Further discussions need to be had around
the potential implementation of a **publish** side equivalent (should it be deemed beneficial).

#### Pros of this approach

* Starts with a "developer first" mentality
* Will make it very easy to get up and running with OpenMAMA
* Should scale well for both "getting started" and "rolling up" deployments
* Configuration over code should make it easier to performance tweak
* Provides a small interface which is easy to port to other languages
* User doesn't need to get bogged down with OpenMAMA semantics
* URIs can be extended with query parameters to extend functionality beyond the bare URI

#### Cons of this approach

* Needs probing to see if it's suitable for enterprise as well as simple applications
* May prove tricky to be fully thread safe for all operations without sacrificing performance

### MAMA Managed Environment or similar (classic)

[This project or something similar to it](https://github.com/nyfix/MME).

This is something that many users will have adopted - a series of APIs to try and help reuse code across
different projects or build a layer on top of it. In various implementations though, the principle is always the same - abstract
OpenMAMA to only the interfaces which your application uses, and the threading models which your
applications find convenient.

#### Pros of MME (or similar approach)

* Abstracts underlying MAMA objects
* Has production miles

#### Cons of MME (or similar approach)

* If you go on for long enough, you'll end up re-writing an abstraction layer above almost all of OpenMAMA
* May help with DRY in projects which use it but beyond that doesn't add much convenience
* Not much of an improvement in terms of complexity (in fact it adds an additional layer)
* No C++ / Java / C# Bindings

## Impact of Resulting Changes

### Impact to Application Users

These changes would be backwards compatible with existing applications.

### Impact to Bridge Developers

These changes would be backwards compatible with existing bridges with no code changes required.

### Impact to Internal API Components

We do not anticipate any internal API components will require any backwards incompatible changes,
though this may be subject to change further down the implementation.
