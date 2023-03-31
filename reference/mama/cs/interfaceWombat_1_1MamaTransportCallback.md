---
title: Wombat::MamaTransportCallback
summary: Callbacks associated with MamaTransports 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransportCallback



Callbacks associated with MamaTransports  [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onDisconnect](interfaceWombat_1_1MamaTransportCallback.html#function-ondisconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>See interface remarks for details  |
| void | **[onReconnect](interfaceWombat_1_1MamaTransportCallback.html#function-onreconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>See interface remarks for details  |
| void | **[onQuality](interfaceWombat_1_1MamaTransportCallback.html#function-onquality)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>Called when an event occurs which affects data quality  |
| void | **[onConnect](interfaceWombat_1_1MamaTransportCallback.html#function-onconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>Called when a subscriber connects to a publisher ([Wombat](namespaceWombat.html) Middleware) or when reconnection to an RV daemon occurs (TIBRV).  |
| void | **[onAcceptConnect](interfaceWombat_1_1MamaTransportCallback.html#function-onacceptconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>Called when a publisher accepts a connection from a subscriber ([Wombat](namespaceWombat.html) Middleware).  |
| void | **[onAcceptReconnect](interfaceWombat_1_1MamaTransportCallback.html#function-onacceptreconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>Called when a publisher accepts a reconnection from a subscriber ([Wombat](namespaceWombat.html) Middleware).  |
| void | **[onPublisherDisconnect](interfaceWombat_1_1MamaTransportCallback.html#function-onpublisherdisconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>Called when a subscriber loses connection to a publisher ([Wombat](namespaceWombat.html) Middleware).  |
| void | **[onNamingServiceConnect](interfaceWombat_1_1MamaTransportCallback.html#function-onnamingserviceconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>Called on connection to a NSD ([Wombat](namespaceWombat.html) Middleware).  |
| void | **[onNamingServiceDisconnect](interfaceWombat_1_1MamaTransportCallback.html#function-onnamingservicedisconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) transport)<br>Called on disconnection to a NSD ([Wombat](namespaceWombat.html) Middleware).  |

## Detailed Description

```csharp
class Wombat::MamaTransportCallback;
```

Callbacks associated with MamaTransports 

Events that can cause one of the callbacks to be invoked vary according to the underlying middleware. The details are as follows: 

All Middleware: MAMA_TRANSPORT_QUALITY is passed when an the underlying transport detects an event that may affect data quality. Depending on the event, MAMA may also mark subscriptions as STALE or MAYBE_STALE. 

TIBRV: TIBRV invokes the callback with MAMA_TRANSPORT_DISCONNECT when the transport disconnects from the RV daemon and MAMA_TRANSPORT_RECONNECT when it reestablishes a connection to the daemon. 

[Wombat](namespaceWombat.html) Middleware: For [Wombat](namespaceWombat.html) Middleware MAMA distinguishes between connections established from a transport to another transport and connections established by the transport from another transport. In general MAMA applications establish connection from a MAMA transport to a feed handler (publisher); however, they may also accept connections from other MAMA clients. Applications subscribe to topics and publisher messages over all connections. When a transport successfully connects to another transport (ie. a feed handler) the mamaTranpsortCallback receives MAMA_TRANSPORT_CONNECT if the connection succeeds immediately otherwise it receives a MAMA_TRANSPORT_RECONNECT if it subsequently succeeds. [Wombat](namespaceWombat.html) Middlware transports may be configured to retry failed connections. When a conection that a transport establishes to another transport (the publisher by convention) and the connection is lost the mamaTranpsortCallback receives the MAMA_TRANSPORT_PUBLISHER_DISCONNECT event. When a transport accepts a connection from a remote transport (the subscriber by convention) it receives either a MAMA_TRANSPORT_ACCEPT or MAMA_TRANSPORT_ACCEPT_RECONNECT event indicating that the remote client is connecting or reconnecting. When the client disconnects MAMA passes the MAMA_TRANSPORT_DISCONNECT value.

## Public Functions Documentation

### function onDisconnect

```csharp
void onDisconnect(
    MamaTransport transport
)
```

See interface remarks for details 

### function onReconnect

```csharp
void onReconnect(
    MamaTransport transport
)
```

See interface remarks for details 

### function onQuality

```csharp
void onQuality(
    MamaTransport transport
)
```

Called when an event occurs which affects data quality 

### function onConnect

```csharp
void onConnect(
    MamaTransport transport
)
```

Called when a subscriber connects to a publisher ([Wombat](namespaceWombat.html) Middleware) or when reconnection to an RV daemon occurs (TIBRV). 

**Parameters**: 

  * **transport** 


### function onAcceptConnect

```csharp
void onAcceptConnect(
    MamaTransport transport
)
```

Called when a publisher accepts a connection from a subscriber ([Wombat](namespaceWombat.html) Middleware). 

**Parameters**: 

  * **transport** 


### function onAcceptReconnect

```csharp
void onAcceptReconnect(
    MamaTransport transport
)
```

Called when a publisher accepts a reconnection from a subscriber ([Wombat](namespaceWombat.html) Middleware). 

**Parameters**: 

  * **transport** 


### function onPublisherDisconnect

```csharp
void onPublisherDisconnect(
    MamaTransport transport
)
```

Called when a subscriber loses connection to a publisher ([Wombat](namespaceWombat.html) Middleware). 

**Parameters**: 

  * **transport** 


### function onNamingServiceConnect

```csharp
void onNamingServiceConnect(
    MamaTransport transport
)
```

Called on connection to a NSD ([Wombat](namespaceWombat.html) Middleware). 

**Parameters**: 

  * **transport** 


### function onNamingServiceDisconnect

```csharp
void onNamingServiceDisconnect(
    MamaTransport transport
)
```

Called on disconnection to a NSD ([Wombat](namespaceWombat.html) Middleware). 

**Parameters**: 

  * **transport** 


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100