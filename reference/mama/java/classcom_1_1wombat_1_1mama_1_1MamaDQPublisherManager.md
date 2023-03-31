---
title: com::wombat::mama::MamaDQPublisherManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDQPublisherManager



 [More...](#detailed-description)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[MamaPublishTopic](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager_1_1MamaPublishTopic.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-create)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaDQPublisherManagerCallback](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManagerCallback.html) callback, String source) |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-create)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaDQPublisherManagerCallback](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManagerCallback.html) callback, String source, String root) |
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-destroy)**() |
| void | **[addPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-addpublisher)**(String symbol, [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) publisher, [MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html) cache) |
| [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) | **[removePublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-removepublisher)**(String symbol) |
| void | **[destroyPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-destroypublisher)**(String symbol) |
| [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) | **[createPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-createpublisher)**(String symbol, Object cache) |
| void | **[setStatus](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-setstatus)**(int status) |
| void | **[setSeqNum](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-setseqnum)**(long seqNum) |
| void | **[setSenderId](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-setsenderid)**(long id) |
| void | **[sendSyncRequest](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-sendsyncrequest)**(int numMsg, double delay, double duration) |
| void | **[sendNoSubscribers](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-sendnosubscribers)**(String symbol) |
| Object | **[getCache](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-getcache)**(String symbol) |
| [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) | **[getPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html#function-getpublisher)**(String symbol) |

## Detailed Description

```java
class com::wombat::mama::MamaDQPublisherManager;
```


**See**: [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html)

The `[MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)` interface represents a collection of subscriptions. It has the ability to provide all the aspects of a [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html) Publisher including initials, recaps, and data quality.

## Public Functions Documentation

### function create

```java
inline void create(
    MamaTransport transport,
    MamaQueue queue,
    MamaDQPublisherManagerCallback callback,
    String source
)
```


**Parameters**: 

  * **transport** The transport to create the publishermanager on 
  * **queue** The queue to create the publisher manager on 
  * **callback** The associated callback to use 
  * **source** The source namepaceto create the publisher manager with 


Create in instance of the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function create

```java
inline void create(
    MamaTransport transport,
    MamaQueue queue,
    MamaDQPublisherManagerCallback callback,
    String source,
    String root
)
```


**Parameters**: 

  * **transport** The transport to create the publishermanager on 
  * **queue** The queue to create the publisher manager on 
  * **callback** The associated callback to use 
  * **source** The source name to create the publisher manager with 
  * **root** The root of the source namespace 


Create in instance of the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function destroy

```java
inline void destroy()
```


Destroy the instance of the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function addPublisher

```java
inline void addPublisher(
    String symbol,
    MamaDQPublisher publisher,
    MamaSubscriptionCallback cache
)
```


**Parameters**: 

  * **symbol** The symbol associated with the new publisher 
  * **publisher** The new publisher instance 
  * **cache** The callback associated with the new publisher 


Add a new Publisher to the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function removePublisher

```java
inline MamaDQPublisher removePublisher(
    String symbol
)
```


**Parameters**: 

  * **symbol** The symbol for which the associated publisher will be removed 


Remove a Publisher from the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function destroyPublisher

```java
inline void destroyPublisher(
    String symbol
)
```


**Parameters**: 

  * **symbol** The symbol for which the associated publisher will be destroyed and free'd 


Remove a Publisher from the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function createPublisher

```java
inline MamaDQPublisher createPublisher(
    String symbol,
    Object cache
)
```


**Parameters**: 

  * **symbol** The symbol for which the new publisher will be created 
  * **cache** The callback that will be associated with the new publisher


**Return**: [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) The newly created [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html)

Create a new Publisher and associate it with the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function setStatus

```java
inline void setStatus(
    int status
)
```


**Parameters**: 

  * **status** The mamaMsgStatus to set for the publisher manager 


Set the status for the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function setSeqNum

```java
inline void setSeqNum(
    long seqNum
)
```


**Parameters**: 

  * **seqNum** The sequence number to set for the publisher manager 


Set the message sequence number for the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function setSenderId

```java
inline void setSenderId(
    long id
)
```


**Parameters**: 

  * **id** The publisher sender id to set for the publisher manager 


Set the sender ID for the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function sendSyncRequest

```java
inline void sendSyncRequest(
    int numMsg,
    double delay,
    double duration
)
```


**Parameters**: 

  * **numMsg** The number of topics to include per sync response message 
  * **delay** The Interval (in seconds) for the responder to wait before sending the first response 
  * **duration** The Interval (in seconds) over which to send the responses 


Send out a synchronization request from the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)


### function sendNoSubscribers

```java
inline void sendNoSubscribers(
    String symbol
)
```


**Parameters**: 

  * **symbol** The symbol to publish a NO_SUBSCRIBERS message against 


Publish a NO_SUBSCRIBERS message for the given symbol


### function getCache

```java
static inline Object getCache(
    String symbol
)
```


**Parameters**: 

  * **symbol** The symbol for the which you want to get the cache


**Return**: The cache associated with the symbol/publisher 

Accessor for the internal ArrayList that contains all the current publishers


### function getPublisher

```java
static inline MamaDQPublisher getPublisher(
    String symbol
)
```


**Parameters**: 

  * **symbol** The symbol for the which you want to get the publisher


**Return**: The [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) associated with the given symbol 

Accessor for the internal ArrayList that contains all the current publishers


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100