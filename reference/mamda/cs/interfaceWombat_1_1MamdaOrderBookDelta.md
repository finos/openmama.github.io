---
title: Wombat::MamdaOrderBookDelta
summary: MamdaOrderBookDelta is an interface that provides access to order book delta related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookDelta



[MamdaOrderBookDelta]() is an interface that provides access to order book delta related fields. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) | **[getDeltaOrderBook](interfaceWombat_1_1MamdaOrderBookDelta.html#function-getdeltaorderbook)**()<br>Return the order book delta. In the case of recap order book, the delta will be the entire recap.  |

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

### function getDeltaOrderBook

```csharp
MamdaOrderBook getDeltaOrderBook()
```

Return the order book delta. In the case of recap order book, the delta will be the entire recap. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaOrderBookListener::getDeltaOrderBook](classWombat_1_1MamdaOrderBookListener.html#function-getdeltaorderbook)


-------------------------------

Updated on 2023-03-31 at 15:30:17 +0100