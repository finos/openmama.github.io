---
title: Wombat::MamaPublisher
summary: The MamaPublisher class publishes messages to basic or market data subscriptions depending on the underlying transport 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPublisher



The [MamaPublisher]() class publishes messages to basic or market data subscriptions depending on the underlying transport 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaPublisher](classWombat_1_1MamaPublisher.html#function-mamapublisher)**()<br>M:Wombat.MamaWrapper.::ctor  |
| void | **[create](classWombat_1_1MamaPublisher.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, string topic, string source, string root)<br>Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored.  |
| void | **[createWithCallbacks](classWombat_1_1MamaPublisher.html#function-createwithcallbacks)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaPublisherCallback](interfaceWombat_1_1MamaPublisherCallback.html) callback, Object closure, string topic, string source, string root)<br>Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored.  |
| void | **[create](classWombat_1_1MamaPublisher.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, string topic, string source)<br>Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored.  |
| void | **[create](classWombat_1_1MamaPublisher.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, string topic)<br>Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored.  |
| void | **[send](classWombat_1_1MamaPublisher.html#function-send)**([MamaMsg](classWombat_1_1MamaMsg.html) message)<br>Send a message from the specified publisher.  |
| void | **[sendWithThrottle](classWombat_1_1MamaPublisher.html#function-sendwiththrottle)**([MamaMsg](classWombat_1_1MamaMsg.html) message, [MamaSendCompleteCallback](interfaceWombat_1_1MamaSendCompleteCallback.html) callback, object closure)<br>Send a message with the throttle. The lifecycle of the message sent is controlled by the user of the API. The callback indicates when the API is no longer using the message and can be destroyed/reused by the application.  |
| void | **[sendFromInbox](classWombat_1_1MamaPublisher.html#function-sendfrominbox)**([MamaInbox](classWombat_1_1MamaInbox.html) inbox, [MamaMsg](classWombat_1_1MamaMsg.html) message)<br>Send a p2p message from the specified inbox using the throttle.  |
| void | **[sendFromInboxWithThrottle](classWombat_1_1MamaPublisher.html#function-sendfrominboxwiththrottle)**([MamaInbox](classWombat_1_1MamaInbox.html) inbox, [MamaMsg](classWombat_1_1MamaMsg.html) message, [MamaSendCompleteCallback](interfaceWombat_1_1MamaSendCompleteCallback.html) callback, object closure)<br>Send a p2p message from the specified inbox using the throttle. The lifecycle of the message sent is controlled by the user of the API. The callback indicates when the API is no longer using the message and can be destroyed/reused by the application.  |
| void | **[sendReplyToInbox](classWombat_1_1MamaPublisher.html#function-sendreplytoinbox)**([MamaMsg](classWombat_1_1MamaMsg.html) request, [MamaMsg](classWombat_1_1MamaMsg.html) reply)<br>Send a reply in response to a request to an inbox.  |
| void | **[destroy](classWombat_1_1MamaPublisher.html#function-destroy)**()<br>Destroy the publisher. A synonym to the [MamaWrapper.Dispose]() method.  |
| [MamaTransport](classWombat_1_1MamaTransport.html) | **[getTransport](classWombat_1_1MamaPublisher.html#function-gettransport)**()<br>Get the [MamaTransport](). The result contains the reusable [MamaTransport]() object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object.  |
| string | **[getRoot](classWombat_1_1MamaPublisher.html#function-getroot)**()<br>Get the name of the transport.  |
| string | **[getSource](classWombat_1_1MamaPublisher.html#function-getsource)**()<br>Get the name of the transport.  |
| string | **[getSymbol](classWombat_1_1MamaPublisher.html#function-getsymbol)**()<br>Get the name of the transport.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override void | **[Dispose](classWombat_1_1MamaPublisher.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaPublisher.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]() |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Public Functions Documentation

### function MamaPublisher

```csharp
MamaPublisher()
```

M:Wombat.MamaWrapper.::ctor 

### function create

```csharp
void create(
    MamaTransport transport,
    string topic,
    string source,
    string root
)
```

Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored. 

**Parameters**: 

  * **transport** The transport.
  * **topic** Symbol on which to publish.
  * **source** The source for market data publishers. (e.g. source.symbol)
  * **root** The root for market data publishers. Used internally.


### function createWithCallbacks

```csharp
void createWithCallbacks(
    MamaTransport transport,
    MamaQueue queue,
    MamaPublisherCallback callback,
    Object closure,
    string topic,
    string source,
    string root
)
```

Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored. 

**Parameters**: 

  * **transport** The transport.
  * **topic** Symbol on which to publish.
  * **source** The source for market data publishers. (e.g. source.symbol)
  * **root** The root for market data publishers. Used internally.


### function create

```csharp
void create(
    MamaTransport transport,
    string topic,
    string source
)
```

Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored. 

**Parameters**: 

  * **transport** The transport.
  * **topic** Symbol on which to publish.
  * **source** The source for market data publishers. (e.g. source.symbol)


### function create

```csharp
void create(
    MamaTransport transport,
    string topic
)
```

Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored. 

**Parameters**: 

  * **transport** The transport.
  * **topic** Symbol on which to publish.


### function send

```csharp
void send(
    MamaMsg message
)
```

Send a message from the specified publisher. 

**Parameters**: 

  * **message** The mamaMsg to send.


### function sendWithThrottle

```csharp
void sendWithThrottle(
    MamaMsg message,
    MamaSendCompleteCallback callback,
    object closure
)
```

Send a message with the throttle. The lifecycle of the message sent is controlled by the user of the API. The callback indicates when the API is no longer using the message and can be destroyed/reused by the application. 

**Parameters**: 

  * **message** The mamaMsg to send.
  * **callback** Callback invoked once the message has been send on the throttle
  * **closure** User supplied data returned in the send complete callback.


### function sendFromInbox

```csharp
void sendFromInbox(
    MamaInbox inbox,
    MamaMsg message
)
```

Send a p2p message from the specified inbox using the throttle. 

**Parameters**: 

  * **inbox** The mamaInbox which will process any response to the sent message.
  * **message** The mamaMsg to send.


### function sendFromInboxWithThrottle

```csharp
void sendFromInboxWithThrottle(
    MamaInbox inbox,
    MamaMsg message,
    MamaSendCompleteCallback callback,
    object closure
)
```

Send a p2p message from the specified inbox using the throttle. The lifecycle of the message sent is controlled by the user of the API. The callback indicates when the API is no longer using the message and can be destroyed/reused by the application. 

**Parameters**: 

  * **inbox** The [MamaInbox](classWombat_1_1MamaInbox.html) which will process any response to the sent message.
  * **message** The [MamaMsg](classWombat_1_1MamaMsg.html) to send.
  * **callback** The callback which will be invoked when the message is sent from the throttle queue.
  * **closure** User supplied data returned when the callback is invoked.


### function sendReplyToInbox

```csharp
void sendReplyToInbox(
    MamaMsg request,
    MamaMsg reply
)
```

Send a reply in response to a request to an inbox. 

**Parameters**: 

  * **request** The [MamaMsg](classWombat_1_1MamaMsg.html) to which you are responding.
  * **reply** The [MamaMsg](classWombat_1_1MamaMsg.html) to be sent as the reply.


### function destroy

```csharp
void destroy()
```

Destroy the publisher. A synonym to the [MamaWrapper.Dispose]() method. 

### function getTransport

```csharp
MamaTransport getTransport()
```

Get the [MamaTransport](). The result contains the reusable [MamaTransport]() object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object. 

### function getRoot

```csharp
string getRoot()
```

Get the name of the transport. 

### function getSource

```csharp
string getSource()
```

Get the name of the transport. 

### function getSymbol

```csharp
string getSymbol()
```

Get the name of the transport. 

## Protected Functions Documentation

### function Dispose

```csharp
virtual override void Dispose(
    bool disposing,
    bool destroyNativeHandle =true
)
```

The actual implementation of Dispose - called by both the Dispose method and the finalizer. 

**Parameters**: 

  * **disposing** true if the object is being disposed (false if being finalized)


**Reimplements**: [Wombat::MamaWrapper::Dispose](classWombat_1_1MamaWrapper.html#function-dispose)


### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]()

**Return**: MAMA Status code

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100