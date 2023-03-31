---
title: Wombat::MamdaOrderBookListener
summary: MamdaOrderBookListener is a class that specializes in handling order book updates. Developers provide their own implementation of the MamdaOrderBookHandler interface and will be delivered notifications for order book recaps and deltas. Notifications for order book deltas include the delta itself as well as the full order book with deltas applied. An obvious application for this MAMDA class is any kind of program trading application that looks at depth of book. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookListener



[MamdaOrderBookListener]() is a class that specializes in handling order book updates. Developers provide their own implementation of the [MamdaOrderBookHandler](interfaceWombat_1_1MamdaOrderBookHandler.html) interface and will be delivered notifications for order book recaps and deltas. Notifications for order book deltas include the delta itself as well as the full order book with deltas applied. An obvious application for this MAMDA class is any kind of program trading application that looks at depth of book.  [More...](#detailed-description)

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html), [Wombat.MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html), [Wombat.MamdaOrderBookGap](interfaceWombat_1_1MamdaOrderBookGap.html), [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html#function-mamdaorderbooklistener)**()<br>Create an order book listener using internally created data structures for the full and delta order books.  |
| | **[MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html#function-mamdaorderbooklistener)**([MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) fullBook, [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) deltaBook)<br>Create an order book listener using user-provided data structures for the full and delta order books. It is an error for the deltaBook to be NULL. If the fullBook is NULL, then there will be no cached order book (and therefore nothing to apply the delta order books to); this may be useful in some circumstances.  |
| void | **[addHandler](classWombat_1_1MamdaOrderBookListener.html#function-addhandler)**([MamdaOrderBookHandler](interfaceWombat_1_1MamdaOrderBookHandler.html) handler)<br>Add a specialized order book handler. Currently, only one handler can (and must) be registered.  |
| void | **[addIgnoreEntryId](classWombat_1_1MamdaOrderBookListener.html#function-addignoreentryid)**(string id)<br>(Future) Add an entry ID to ignore. This only makes sense when the entry type is participant ID (as opposed to order ID). All order book updates for this entry ID will be ignored.  |
| void | **[removeIgnoreEntryId](classWombat_1_1MamdaOrderBookListener.html#function-removeignoreentryid)**(string id)<br>(Future) Remove an entry ID to ignore. See addIgnoreEntryId.  |
| void | **[clear](classWombat_1_1MamdaOrderBookListener.html#function-clear)**()<br>Clear all cached data fields.  |
| DateTime | **[getSrcTime](classWombat_1_1MamdaOrderBookListener.html#function-getsrctime)**() |
| DateTime | **[getActivityTime](classWombat_1_1MamdaOrderBookListener.html#function-getactivitytime)**() |
| long | **[getEventSeqNum](classWombat_1_1MamdaOrderBookListener.html#function-geteventseqnum)**() |
| DateTime | **[getEventTime](classWombat_1_1MamdaOrderBookListener.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaOrderBookListener.html#function-getsymbolfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaOrderBookListener.html#function-getpartidfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaOrderBookListener.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaOrderBookListener.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaOrderBookListener.html#function-getlinetimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaOrderBookListener.html#function-getsendtimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaOrderBookListener.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaOrderBookListener.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |
| [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) | **[getFullOrderBook](classWombat_1_1MamdaOrderBookListener.html#function-getfullorderbook)**() |
| [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) | **[getDeltaOrderBook](classWombat_1_1MamdaOrderBookListener.html#function-getdeltaorderbook)**() |
| long | **[getBeginGapSeqNum](classWombat_1_1MamdaOrderBookListener.html#function-getbegingapseqnum)**() |
| long | **[getEndGapSeqNum](classWombat_1_1MamdaOrderBookListener.html#function-getendgapseqnum)**() |
| long | **[getSeqNum](classWombat_1_1MamdaOrderBookListener.html#function-getseqnum)**() |
| [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) | **[getBookSnapshot](classWombat_1_1MamdaOrderBookListener.html#function-getbooksnapshot)**()<br>Returns a shallow copy of the underlying order book. As such this method should not be called from a separate thread. The recommended use of this method is to use a timer on the same queue as data for this book is being dispatched and grab the snapshot at regular intervals.  |
| [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) | **[getDeepBookSnapshot](classWombat_1_1MamdaOrderBookListener.html#function-getdeepbooksnapshot)**()<br>Returns a deep copy of the underlying order book.  |
| void | **[setUpdateInconsistentBook](classWombat_1_1MamdaOrderBookListener.html#function-setupdateinconsistentbook)**(bool update)<br>Whether to handle or ignore updates sent for an inconsistent book. A book may be in an inconsistent state if there has been a gap on the sequence of update (delta) messages. Default is to not update (and wait for a recap).  |
| void | **[onMsg](classWombat_1_1MamdaOrderBookListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType) |

## Detailed Description

```csharp
class Wombat::MamdaOrderBookListener;
```

[MamdaOrderBookListener]() is a class that specializes in handling order book updates. Developers provide their own implementation of the [MamdaOrderBookHandler](interfaceWombat_1_1MamdaOrderBookHandler.html) interface and will be delivered notifications for order book recaps and deltas. Notifications for order book deltas include the delta itself as well as the full order book with deltas applied. An obvious application for this MAMDA class is any kind of program trading application that looks at depth of book. 

Note: The [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) class caches the order book. Among other reasons, caching of these fields makes it possible to provide complete trade-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaOrderBookListener

```csharp
MamdaOrderBookListener()
```

Create an order book listener using internally created data structures for the full and delta order books. 

### function MamdaOrderBookListener

```csharp
MamdaOrderBookListener(
    MamdaOrderBook fullBook,
    MamdaOrderBook deltaBook
)
```

Create an order book listener using user-provided data structures for the full and delta order books. It is an error for the deltaBook to be NULL. If the fullBook is NULL, then there will be no cached order book (and therefore nothing to apply the delta order books to); this may be useful in some circumstances. 

**Parameters**: 

  * **fullBook** 
  * **deltaBook** 


### function addHandler

```csharp
void addHandler(
    MamdaOrderBookHandler handler
)
```

Add a specialized order book handler. Currently, only one handler can (and must) be registered. 

**Parameters**: 

  * **handler** 


### function addIgnoreEntryId

```csharp
void addIgnoreEntryId(
    string id
)
```

(Future) Add an entry ID to ignore. This only makes sense when the entry type is participant ID (as opposed to order ID). All order book updates for this entry ID will be ignored. 

**Parameters**: 

  * **id** 


### function removeIgnoreEntryId

```csharp
void removeIgnoreEntryId(
    string id
)
```

(Future) Remove an entry ID to ignore. See addIgnoreEntryId. 

**Parameters**: 

  * **id** 


### function clear

```csharp
void clear()
```

Clear all cached data fields. 

### function getSrcTime

```csharp
DateTime getSrcTime()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)


### function getActivityTime

```csharp
DateTime getActivityTime()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getEventSeqNum

```csharp
long getEventSeqNum()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventTime

```csharp
DateTime getEventTime()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)


### function getSymbolFieldState

```csharp
MamdaFieldState getSymbolFieldState()
```


### function getPartIdFieldState

```csharp
MamdaFieldState getPartIdFieldState()
```


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

Returns the field state. 

**Return**: Source time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

Returns the field state. 

**Return**: Activity time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


### function getLineTimeFieldState

```csharp
MamdaFieldState getLineTimeFieldState()
```


### function getSendTimeFieldState

```csharp
MamdaFieldState getSendTimeFieldState()
```


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

Returns the field state. 

**Return**: Source sequence number Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

Returns the field state. 

**Return**: Event Time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function getFullOrderBook

```csharp
MamdaOrderBook getFullOrderBook()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderBookRecap::getFullOrderBook](interfaceWombat_1_1MamdaOrderBookRecap.html#function-getfullorderbook)


### function getDeltaOrderBook

```csharp
MamdaOrderBook getDeltaOrderBook()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderBookDelta::getDeltaOrderBook](interfaceWombat_1_1MamdaOrderBookDelta.html#function-getdeltaorderbook)


### function getBeginGapSeqNum

```csharp
long getBeginGapSeqNum()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderBookGap::getBeginGapSeqNum](interfaceWombat_1_1MamdaOrderBookGap.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```csharp
long getEndGapSeqNum()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderBookGap::getEndGapSeqNum](interfaceWombat_1_1MamdaOrderBookGap.html#function-getendgapseqnum)


### function getSeqNum

```csharp
long getSeqNum()
```


**Return**: 

### function getBookSnapshot

```csharp
MamdaOrderBook getBookSnapshot()
```

Returns a shallow copy of the underlying order book. As such this method should not be called from a separate thread. The recommended use of this method is to use a timer on the same queue as data for this book is being dispatched and grab the snapshot at regular intervals. 

**Return**: A snapshot of the current Order Book

### function getDeepBookSnapshot

```csharp
MamdaOrderBook getDeepBookSnapshot()
```

Returns a deep copy of the underlying order book. 

**Return**: A deep snapshot of the current Order Book

### function setUpdateInconsistentBook

```csharp
void setUpdateInconsistentBook(
    bool update
)
```

Whether to handle or ignore updates sent for an inconsistent book. A book may be in an inconsistent state if there has been a gap on the sequence of update (delta) messages. Default is to not update (and wait for a recap). 

**Parameters**: 

  * **update** 


### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```


**Parameters**: 

  * **subscription** 
  * **msg** 
  * **msgType** 


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)


-------------------------------

Updated on 2023-03-31 at 15:30:17 +0100