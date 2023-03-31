---
title: com::wombat::mamda::examples::MamdaBookPublisher
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaBookPublisher





Inherits from MamaDQPublisherManagerCallback, MamaTimerCallback

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaBookPublisher](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-mamdabookpublisher)**() |
| void | **[onTimer](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-ontimer)**(MamaTimer timer) |
| void | **[processOrder](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-processorder)**() |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getBook](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-getbook)**() |
| MamaMsg | **[getPublishMsg](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-getpublishmsg)**() |
| void | **[publishMessage](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-publishmessage)**(MamaMsg request) |
| void | **[createMsg](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-createmsg)**() |
| void | **[createBook](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-createbook)**(final String symbol, final String partId) |
| void | **[createPublisherTransport](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-createpublishertransport)**(MamaBridge bridge) |
| void | **[createPublisherManager](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-createpublishermanager)**(final String pubSource, MamaBridge bridge) |
| void | **[createTimer](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-createtimer)**(final String symbol, MamaBridge bridge) |
| void | **[setProcessEntries](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-setprocessentries)**(boolean process) |
| void | **[setQueueGroup](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-setqueuegroup)**(MamaQueueGroup queues) |
| boolean | **[publishingSymbol](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-publishingsymbol)**(String symbol) |
| MamaQueueGroup | **[getQueueGroup](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-getqueuegroup)**() |
| void | **[onNewRequest](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-onnewrequest)**(MamaDQPublisherManager publisherManager, final String symbol, short subType, short msgType, MamaMsg msg) |
| void | **[onRequest](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-onrequest)**(MamaDQPublisherManager publisherManager, MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic, short subType, short msgType, MamaMsg msg) |
| void | **[onRefresh](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-onrefresh)**(MamaDQPublisherManager publisherManager, MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic, short subType, short msgType, MamaMsg msg) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-onerror)**(MamaDQPublisherManager publisher, final short status, final String errortxt, MamaMsg msg) |
| void | **[onCreate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-oncreate)**(MamaDQPublisherManager publisher) |
| void | **[onDestroy](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-ondestroy)**(MamaTimer timer) |
| void | **[main](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#function-main)**(final String[] args) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaMsg | **[mPublishMsg](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-mpublishmsg)**  |
| char | **[bidSide](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-bidside)**  |
| char | **[askSide](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-askside)**  |
| final char | **[PLADD](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-pladd)**  |
| final char | **[PLUPDATE](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-plupdate)**  |
| final char | **[PLDELETE](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-pldelete)**  |
| final char | **[PLUNKNOWN](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-plunknown)**  |
| final char | **[ENTADD](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-entadd)**  |
| final char | **[ENTUPDATE](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-entupdate)**  |
| final char | **[ENTDELETE](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookPublisher.html#variable-entdelete)**  |

## Public Functions Documentation

### function MamdaBookPublisher

```java
inline MamdaBookPublisher()
```


### function onTimer

```java
inline void onTimer(
    MamaTimer timer
)
```


### function processOrder

```java
inline void processOrder()
```


### function getBook

```java
inline MamdaOrderBook getBook()
```


### function getPublishMsg

```java
inline MamaMsg getPublishMsg()
```


### function publishMessage

```java
inline void publishMessage(
    MamaMsg request
)
```


### function createMsg

```java
inline void createMsg()
```


### function createBook

```java
inline void createBook(
    final String symbol,
    final String partId
)
```


### function createPublisherTransport

```java
inline void createPublisherTransport(
    MamaBridge bridge
)
```


### function createPublisherManager

```java
inline void createPublisherManager(
    final String pubSource,
    MamaBridge bridge
)
```


### function createTimer

```java
inline void createTimer(
    final String symbol,
    MamaBridge bridge
)
```


### function setProcessEntries

```java
inline void setProcessEntries(
    boolean process
)
```


### function setQueueGroup

```java
inline void setQueueGroup(
    MamaQueueGroup queues
)
```


### function publishingSymbol

```java
inline boolean publishingSymbol(
    String symbol
)
```


### function getQueueGroup

```java
inline MamaQueueGroup getQueueGroup()
```


### function onNewRequest

```java
inline void onNewRequest(
    MamaDQPublisherManager publisherManager,
    final String symbol,
    short subType,
    short msgType,
    MamaMsg msg
)
```


### function onRequest

```java
inline void onRequest(
    MamaDQPublisherManager publisherManager,
    MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic,
    short subType,
    short msgType,
    MamaMsg msg
)
```


### function onRefresh

```java
inline void onRefresh(
    MamaDQPublisherManager publisherManager,
    MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic,
    short subType,
    short msgType,
    MamaMsg msg
)
```


### function onError

```java
inline void onError(
    MamaDQPublisherManager publisher,
    final short status,
    final String errortxt,
    MamaMsg msg
)
```


### function onCreate

```java
inline void onCreate(
    MamaDQPublisherManager publisher
)
```


### function onDestroy

```java
inline void onDestroy(
    MamaTimer timer
)
```


### function main

```java
static inline void main(
    final String[] args
)
```


## Public Attributes Documentation

### variable mPublishMsg

```java
MamaMsg mPublishMsg = null;
```


### variable bidSide

```java
char bidSide = MamdaOrderBookPriceLevel.SIDE_BID;
```


### variable askSide

```java
char askSide = MamdaOrderBookPriceLevel.SIDE_ASK;
```


### variable PLADD

```java
static final char PLADD = MamdaOrderBookPriceLevel.ACTION_ADD;
```


### variable PLUPDATE

```java
static final char PLUPDATE = MamdaOrderBookPriceLevel.ACTION_UPDATE;
```


### variable PLDELETE

```java
static final char PLDELETE = MamdaOrderBookPriceLevel.ACTION_DELETE;
```


### variable PLUNKNOWN

```java
static final char PLUNKNOWN = MamdaOrderBookPriceLevel.ACTION_UNKNOWN;
```


### variable ENTADD

```java
static final char ENTADD = MamdaOrderBookEntry.ACTION_ADD;
```


### variable ENTUPDATE

```java
static final char ENTUPDATE = MamdaOrderBookEntry.ACTION_UPDATE;
```


### variable ENTDELETE

```java
static final char ENTDELETE = MamdaOrderBookEntry.ACTION_DELETE;
```


-------------------------------

Updated on 2023-03-31 at 15:30:36 +0100