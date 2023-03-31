---
title: Wombat::MamaDQPublisher
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDQPublisher





## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaDQPublisher](classWombat_1_1MamaDQPublisher.html#function-~mamadqpublisher)**(void ) |
| | **[MamaDQPublisher](classWombat_1_1MamaDQPublisher.html#function-mamadqpublisher)**(void ) |
| virtual void | **[create](classWombat_1_1MamaDQPublisher.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * topic) |
| virtual void | **[send](classWombat_1_1MamaDQPublisher.html#function-send)**([MamaMsg](classWombat_1_1MamaMsg.html) * msg) |
| virtual void | **[sendReply](classWombat_1_1MamaDQPublisher.html#function-sendreply)**(const [MamaMsg](classWombat_1_1MamaMsg.html) & request, [MamaMsg](classWombat_1_1MamaMsg.html) * reply) const |
| virtual void | **[sendReply](classWombat_1_1MamaDQPublisher.html#function-sendreply)**(mamaMsgReply replyHandle, [MamaMsg](classWombat_1_1MamaMsg.html) * reply) const |
| virtual void | **[destroy](classWombat_1_1MamaDQPublisher.html#function-destroy)**(void ) |
| virtual void | **[setStatus](classWombat_1_1MamaDQPublisher.html#function-setstatus)**(mamaMsgStatus status) |
| virtual void | **[setSenderId](classWombat_1_1MamaDQPublisher.html#function-setsenderid)**(uint64_t id) |
| virtual void | **[setSeqNum](classWombat_1_1MamaDQPublisher.html#function-setseqnum)**(mama_seqnum_t num) |
| virtual void * | **[getCache](classWombat_1_1MamaDQPublisher.html#function-getcache)**(void ) |
| virtual void | **[setCache](classWombat_1_1MamaDQPublisher.html#function-setcache)**(void * cache) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| MamaDQPublisherImpl * | **[mImpl](classWombat_1_1MamaDQPublisher.html#variable-mimpl)**  |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[MamaDQPublisherManagerImpl](classWombat_1_1MamaDQPublisher.html#friend-mamadqpublishermanagerimpl)**  |

## Public Functions Documentation

### function ~MamaDQPublisher

```cpp
virtual ~MamaDQPublisher(
    void 
)
```


### function MamaDQPublisher

```cpp
MamaDQPublisher(
    void 
)
```


### function create

```cpp
virtual void create(
    MamaTransport * transport,
    const char * topic
)
```


**Parameters**: 

  * **transport** The transport to use. Must be a basic transport. 
  * **topic** for basic publishers. Symbol for market data topics. 


Create a MAMA DQ publisher for the corresponding transport.


### function send

```cpp
virtual void send(
    MamaMsg * msg
)
```


### function sendReply

```cpp
virtual void sendReply(
    const MamaMsg & request,
    MamaMsg * reply
) const
```


### function sendReply

```cpp
virtual void sendReply(
    mamaMsgReply replyHandle,
    MamaMsg * reply
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


### function getCache

```cpp
virtual void * getCache(
    void 
)
```


### function setCache

```cpp
virtual void setCache(
    void * cache
)
```


## Protected Attributes Documentation

### variable mImpl

```cpp
MamaDQPublisherImpl * mImpl;
```


## Friends

### friend MamaDQPublisherManagerImpl

```cpp
friend class MamaDQPublisherManagerImpl(
    MamaDQPublisherManagerImpl 
);
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100