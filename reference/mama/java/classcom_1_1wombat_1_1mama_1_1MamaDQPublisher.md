---
title: com::wombat::mama::MamaDQPublisher
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDQPublisher



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-mamadqpublisher)**() |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-create)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, String topic) |
| void | **[send](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-send)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[sendReply](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-sendreply)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) request, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) reply) |
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-destroy)**() |
| void | **[setStatus](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-setstatus)**(int status) |
| void | **[setSenderId](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-setsenderid)**(long id) |
| void | **[setSeqNum](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-setseqnum)**(long num) |
| void | **[setCache](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-setcache)**(Object cache) |
| Object | **[getCache](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html#function-getcache)**() |

## Detailed Description

```java
class com::wombat::mama::MamaDQPublisher;
```


**See**: [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html)

The `[MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)` interface represents a subscription for a symbol. It can also allow for the broadcast and point-to-point publishing of messages to clients.

## Public Functions Documentation

### function MamaDQPublisher

```java
inline MamaDQPublisher()
```


Constructor for [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function create

```java
inline void create(
    MamaTransport transport,
    String topic
)
```


**Parameters**: 

  * **transport** The transport for which to create the new publisher against 
  * **topic** The topic associated with the new publisher 


Create a new [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function send

```java
inline void send(
    MamaMsg msg
)
```


**Parameters**: 

  * **msg** The [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) that will be sent from this publisher 


Send a message (broadcast) from the [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function sendReply

```java
inline void sendReply(
    MamaMsg request,
    MamaMsg reply
)
```


**Parameters**: 

  * **request** The request message (from an inbox) 
  * **reply** The reply message containing the relevant data 


Send a message (point-to-point) from the [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function destroy

```java
inline void destroy()
```


Destroy the [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function setStatus

```java
inline void setStatus(
    int status
)
```


**Parameters**: 

  * **status** The mamaMsgStatus to set for the publisher 


Set the status for the [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function setSenderId

```java
inline void setSenderId(
    long id
)
```


**Parameters**: 

  * **id** The publisher sender id to set for the publisher 


Set the sender ID for the [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function setSeqNum

```java
inline void setSeqNum(
    long num
)
```


**Parameters**: 

  * **num** The sequence number to set for the publisher 


Set the message sequence number for the [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function setCache

```java
inline void setCache(
    Object cache
)
```


**Parameters**: 

  * **cache** The cache to save against the publisher 


Set a cache for the [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


### function getCache

```java
inline Object getCache()
```


**Return**: Object The cache for the publisher 

Return the cache for the [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100