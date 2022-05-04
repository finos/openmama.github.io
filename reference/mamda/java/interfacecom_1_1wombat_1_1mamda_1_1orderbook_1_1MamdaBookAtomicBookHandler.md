---
title: com::wombat::mamda::orderbook::MamdaBookAtomicBookHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaBookAtomicBookHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookAtomicBeginBook](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicBookHandler.html#function-onbookatomicbeginbook)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, boolean isRecap) |
| void | **[onBookAtomicEndBook](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicBookHandler.html#function-onbookatomicendbook)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener) |
| void | **[onBookAtomicClear](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicBookHandler.html#function-onbookatomicclear)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg) |
| void | **[onBookAtomicGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicBookHandler.html#function-onbookatomicgap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicGap.html) event) |

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaBookAtomicBookHandler;
```


[MamdaBookAtomicBookHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicBookHandler.html) is an interface for applications that need to know when a [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) finishes processing a single book update.

This may be useful for applications that wish to destroy the subscription from a callback as the subscription can only be destroyed after the message processing is complete. Furthermore, it allows applications to determine when to clear the book when a recap arrives. 

## Public Functions Documentation

### function onBookAtomicBeginBook

```java
void onBookAtomicBeginBook(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    boolean isRecap
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The listener handling recaps/updates. 
  * **isRecap** Whether the first update was a recap. 


Method invoked before we start processing the first level in a message. The book should be cleared when isRecap == true.


### function onBookAtomicEndBook

```java
void onBookAtomicEndBook(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The listener handling recaps/updates. 


Method invoked when we stop processing the last level in a message. We invoke this method after the last entry for the level gets processed. The subscription may be destroyed from this callback.


### function onBookAtomicClear

```java
void onBookAtomicClear(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The listener handling recaps/updates. 
  * **msg** The MamaMsg that triggered this invocation. 


Method invoked when an order book is cleared.


### function onBookAtomicGap

```java
void onBookAtomicGap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicGap event
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The listener handling recaps/updates. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** The gap value object. 


Method invoked when a gap in orderBook reports is discovered.


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100