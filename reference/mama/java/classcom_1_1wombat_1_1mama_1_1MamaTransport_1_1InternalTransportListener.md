---
title: com::wombat::mama::MamaTransport::InternalTransportListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaTransport::InternalTransportListener





Inherits from [com.wombat.mama.MamaTransportListener](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[InternalTransportListener](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-internaltransportlistener)**() |
| void | **[onDisconnect](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-ondisconnect)**(short cause, final Object platformInfo) |
| void | **[onReconnect](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-onreconnect)**(short cause, final Object platformInfo) |
| void | **[onQuality](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-onquality)**(short cause, final Object platformInfo) |
| void | **[onConnect](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-onconnect)**(short cause, final Object platformInfo) |
| void | **[onAccept](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-onaccept)**(short cause, final Object platformInfo) |
| void | **[onAcceptReconnect](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-onacceptreconnect)**(short cause, final Object platformInfo) |
| void | **[onPublisherDisconnect](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-onpublisherdisconnect)**(short cause, final Object platformInfo) |
| void | **[onNamingServiceConnect](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-onnamingserviceconnect)**(short cause, final Object platformInfo) |
| void | **[onNamingServiceDisconnect](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-onnamingservicedisconnect)**(short cause, final Object platformInfo) |
| void | **[setClientListener](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTransportListener.html#function-setclientlistener)**([MamaTransportListener](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html) clientListener) |

## Public Functions Documentation

### function InternalTransportListener

```java
inline void InternalTransportListener()
```


Constructor initialises all member variables. 


### function onDisconnect

```java
inline void onDisconnect(
    short cause,
    final Object platformInfo
)
```


### function onReconnect

```java
inline void onReconnect(
    short cause,
    final Object platformInfo
)
```


### function onQuality

```java
inline void onQuality(
    short cause,
    final Object platformInfo
)
```


### function onConnect

```java
inline void onConnect(
    short cause,
    final Object platformInfo
)
```


### function onAccept

```java
inline void onAccept(
    short cause,
    final Object platformInfo
)
```


### function onAcceptReconnect

```java
inline void onAcceptReconnect(
    short cause,
    final Object platformInfo
)
```


### function onPublisherDisconnect

```java
inline void onPublisherDisconnect(
    short cause,
    final Object platformInfo
)
```


### function onNamingServiceConnect

```java
inline void onNamingServiceConnect(
    short cause,
    final Object platformInfo
)
```


### function onNamingServiceDisconnect

```java
inline void onNamingServiceDisconnect(
    short cause,
    final Object platformInfo
)
```


### function setClientListener

```java
inline void setClientListener(
    MamaTransportListener clientListener
)
```


**Parameters**: 

  * **clientListener** The client listener. 


This function will set the client listener which will then receive events from the transport.


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100