---
title: Introduction to OpenMAMA (Developer's Guide)
sidebar: openmama_sidebar
permalink: openmama_developers_guide_introduction.html
folder: openmama
toc: false
---
The ***OpenMAMA (Open Middleware Agnostic Messaging) API*** is a subscription based messaging API with publish/subscribe semantics,
which provides a lightweight abstraction on top of a variety of underlying messaging middlewares. The ***OpenMAMA API*** provides
developers with a common interface to the underlying messaging API, allowing migration from one messaging API to another
without any code changes to applications built using the API. 

The API provides an asynchronous, event-driven programming model. You use the API to provide callbacks where required.
Data is propagated back to the registered application via these callbacks in response to dispatching of events from
event queues. 

Market data semantics are added through the use of the ***OpenMAMDA (OpenMAMA Market Data API)***.
The OpenMAMA API also provides extra features when used with existing Market Data Infrastructure, such as: 

* Subscription throttling
* Entitlement enforcement
* Initial values/recaps
* Data quality
* Refresh messages
* Group subscriptions

### 1.1. Operating Systems

You will find a complete list of supported platforms [here](openmama_supported_platforms.html).

### 1.2. Middlewares

OpenMAMA supports Qpid by default, and many are provided by third parties. Please refer to the vendor for details.

### 1.3. API Language Implementations

The various language implementations for the MAMA API expose the same top level objects with broadly the same programming
interface.  Unless otherwise specified, allocation of MAMA objects and creation of MAMA objects are two separate steps.
The first step allocates the memory and the second initializes the object. Each of the API implementations is thread
safe and thread aware. All functions/methods in the API, across all language implementations and transports, exhibit
the same behavior, unless otherwise stated. 

The following language implementations are currently supported:

* C
* C++
* C#
* JAVA (Using JNI)

The C API naming convention is used to identify objects and the functions that operate on those objects. Each object
has its own header file containing definitions for all operations supported by that object. The naming convention is
as follows:

* Objects: `mama<Type>`
* Functions: `mama<Type>_operation`

All structures are defined as opaque types. As such they cannot be allocated directly by users of the API. All memory
management for a MAMA object in C is controlled via calls to the appropriate functions, for example: 

* `mama<Type>_allocate()`
* `mama<Type>_destroy()`
* `mama<Type>_deallocate()` 

Sample applications written using the API are located in the examples directory provided with the distribution.
Pre-compiled versions of these example programs are located in the bin directory. For clarity, the sample snippets
of code do not check the return values from function/method calls. In a production application it is recommended
that all return codes are checked for success before proceeding. 

**Use of the API may be used even without any existing market data infrastructure**. We provide the concept of
'Basic' subscribers and publishers that allow users of the API to publish and subscribe to topics outside of the
Market Data Platform. Details are provided in relevant sections throughout this document. 

All callback functions/methods provide access to closure data in order to allow applications to associate contextual
information in their own applications with callbacks invoked from within the OpenMAMA API.
 

### 1.4. Using the API

The following is a high level overview of the steps required to implement the most common use of the MAMA API:
to write a market data subscribing application. Each step and their associated features are detailed in the
following chapters. 

1. Load the bridge(s).

    At least one bridge object must be created before MAMA is opened. Bridges can only be loaded at this time. 

2.	Initialize the API.

    Before creating any MAMA objects it is necessary to initialize the API by calling the
    `Mama::open()` function. This call sets up a number of internal processes within the API that are required for
    successful use of the API. 

    **NB:** The call to `Mama::open()` is reference counted and each call must have a corresponding call to `Mama::close()`.

3.	Create event queue(s) (optional).

    Users of the API can use the default internal event queue for a bridge. If multi-threading is required, or more
    control over the dispatching of events, separate event queues can be created using MamaQueue(). See  for details. 

    **NB:** It is not necessary for an application to create its own event queues.

4.	Create transport(s).

    An application requires that at least one transport object has been created. The MamaTransport object is used
    to define the properties for the underlying middleware's communication protocol. There must be an entry in the
    mama.properties file for each transport created. See   for details. 

5.	Fetch data dictionary.

    A data dictionary is typically required in order to obtain complete information (name, fid and data type)
    regarding fields within messages. See  for details. 

6.	Create subscriptions.

    Create a subscription object, MamaSubscription, for each symbol known to the application at startup. See  for details. 

7.	Start dispatching.

    Once all subscriptions have been created, start dispatching on the default event queue for a bridge, and any other
    queues that have been created. You can continue to create further intra-day subscriptions. 

8.	Shut down.

    Objects must be destroyed in the following order when shutting down the application:

    1.	Stop dispatching on any event queues (also call `Mama::stop()`)
    2.	Destroy event object (Subscriptions, timers, io objects) 
    3.	Destroy all event queues
    4.	Destroy all transports
    5.	Call `Mama::close()`

    Event objects can be created and destroyed at runtime, however, queues must not be destroyed before all event objects that use
    those queues are destroyed. It is recommended that MAMA objects are destroyed in this order, as it will result in the same
    behavior on all middlewares currently supported. Some middlewares may require that all event objects are destroyed prior to the
    transport they are created with otherwise a core may result.

    **Note:** This applies only to shutdown. Event objects can be destroyed at any point during the life of an application.

### 1.5. Object Summary

The following table lists the major objects/types that are available for use within a MAMA based application.

| MAMA Object  | Description                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bridge       | Used by MAMA to communicate with a middleware.                                                                                                             |
| Transport    | Communication protocol properties                                                                                                                          |
| Subscription | Register interest in a symbol (topic) and receive callback updates on that symbol (topic). Receive point-to-point requests.                                |
| Message      | Access to the data delivered through program listing subscription callback events. Used to create structured data for sending when publishing via the API. |
| Queue        | Representation of the underlying event queue for dispatching events (data, timer, io etc).                                                                 |
| Timer        | Recurring timer implementation. Receive a callback at a recurring interval.                                                                                |
| IO           | Register interest in events associated with file descriptors.                                                                                              |
| Publisher    | Publish data to a specific symbol (topic) onto the messaging backbone. Send point-to-point requests.                                                       |
| Inbox        | Receive responses to point-to-point requests.                                                                                                              |
| Dictionary   | Access to the definition of fields (name, fid and type) being used on the Market Data Platform.                                                            |
| Source       | Details of how to obtain data when creating a subscription.                                                                                                |
