---
title: Wombat::MamdaOrderBookRecap
summary: MamdaOrderBookRecap is an interface that provides access to order book related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookRecap



[MamdaOrderBookRecap]() is an interface that provides access to order book related fields. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) | **[getFullOrderBook](interfaceWombat_1_1MamdaOrderBookRecap.html#function-getfullorderbook)**()<br>Returns a reference to the full orderbook if a full book is being maintained by the [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html).  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)**()<br>Returns the source time.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| long | **[getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |


## Public Functions Documentation

### function getFullOrderBook

```csharp
MamdaOrderBook getFullOrderBook()
```

Returns a reference to the full orderbook if a full book is being maintained by the [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html). 

**Return**: 

**Reimplemented by**: [Wombat::MamdaOrderBookListener::getFullOrderBook](classWombat_1_1MamdaOrderBookListener.html#function-getfullorderbook)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100