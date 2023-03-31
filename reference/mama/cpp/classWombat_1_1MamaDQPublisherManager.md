---
title: Wombat::MamaDQPublisherManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDQPublisherManager





## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html#function-~mamadqpublishermanager)**(void ) |
| | **[MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html#function-mamadqpublishermanager)**(void ) |
| virtual void | **[create](classWombat_1_1MamaDQPublisherManager.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaDQPublisherManagerCallback](classWombat_1_1MamaDQPublisherManagerCallback.html) * callback, const char * sourcename, const char * root ="_MD") |
| virtual void | **[addPublisher](classWombat_1_1MamaDQPublisherManager.html#function-addpublisher)**(const char * symbol, [MamaDQPublisher](classWombat_1_1MamaDQPublisher.html) * pub, void * cache) |
| virtual [MamaDQPublisher](classWombat_1_1MamaDQPublisher.html) * | **[removePublisher](classWombat_1_1MamaDQPublisherManager.html#function-removepublisher)**(const char * symbol) |
| virtual [MamaDQPublisher](classWombat_1_1MamaDQPublisher.html) * | **[createPublisher](classWombat_1_1MamaDQPublisherManager.html#function-createpublisher)**(const char * symbol, void * cache) |
| virtual void | **[destroyPublisher](classWombat_1_1MamaDQPublisherManager.html#function-destroypublisher)**(const char * symbol) |
| virtual const [MamaDQPublisher](classWombat_1_1MamaDQPublisher.html) * | **[getPublisher](classWombat_1_1MamaDQPublisherManager.html#function-getpublisher)**(const char * symbol) const |
| virtual void | **[destroy](classWombat_1_1MamaDQPublisherManager.html#function-destroy)**(void ) |
| virtual void | **[setStatus](classWombat_1_1MamaDQPublisherManager.html#function-setstatus)**(mamaMsgStatus status) |
| virtual void | **[setSenderId](classWombat_1_1MamaDQPublisherManager.html#function-setsenderid)**(uint64_t id) |
| virtual void | **[setSeqNum](classWombat_1_1MamaDQPublisherManager.html#function-setseqnum)**(mama_seqnum_t num) |
| virtual void | **[sendSyncRequest](classWombat_1_1MamaDQPublisherManager.html#function-sendsyncrequest)**(mama_u16_t nummsg, mama_f64_t delay, mama_f64_t duration) |
| virtual void | **[sendNoSubscribers](classWombat_1_1MamaDQPublisherManager.html#function-sendnosubscribers)**(const char * symbol) |

## Public Functions Documentation

### function ~MamaDQPublisherManager

```cpp
virtual ~MamaDQPublisherManager(
    void 
)
```


### function MamaDQPublisherManager

```cpp
MamaDQPublisherManager(
    void 
)
```


### function create

```cpp
virtual void create(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaDQPublisherManagerCallback * callback,
    const char * sourcename,
    const char * root ="_MD"
)
```


**Parameters**: 

  * **transport** The transport to use. Must be a basic transport. 
  * **queue** the quese subscription requests are received on. 
  * **callback** subscription request callback. 
  * **sourcename** The Sourcename for subscribers to send requests 
  * **root** The root for market data publishers. 


Create a MAMA publisher manager for the corresponding transport. 


### function addPublisher

```cpp
virtual void addPublisher(
    const char * symbol,
    MamaDQPublisher * pub,
    void * cache
)
```


### function removePublisher

```cpp
virtual MamaDQPublisher * removePublisher(
    const char * symbol
)
```


### function createPublisher

```cpp
virtual MamaDQPublisher * createPublisher(
    const char * symbol,
    void * cache
)
```


### function destroyPublisher

```cpp
virtual void destroyPublisher(
    const char * symbol
)
```


### function getPublisher

```cpp
virtual const MamaDQPublisher * getPublisher(
    const char * symbol
) const
```


### function destroy

```cpp
virtual void destroy(
    void 
)
```


### function setStatus

```cpp
virtual void setStatus(
    mamaMsgStatus status
)
```


### function setSenderId

```cpp
virtual void setSenderId(
    uint64_t id
)
```


### function setSeqNum

```cpp
virtual void setSeqNum(
    mama_seqnum_t num
)
```


### function sendSyncRequest

```cpp
virtual void sendSyncRequest(
    mama_u16_t nummsg,
    mama_f64_t delay,
    mama_f64_t duration
)
```


### function sendNoSubscribers

```cpp
virtual void sendNoSubscribers(
    const char * symbol
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100