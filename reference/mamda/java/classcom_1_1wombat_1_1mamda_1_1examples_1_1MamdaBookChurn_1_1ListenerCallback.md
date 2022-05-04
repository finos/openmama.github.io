---
title: com::wombat::mamda::examples::MamdaBookChurn::ListenerCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaBookChurn::ListenerCallback





Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookClear](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookChurn_1_1ListenerCallback.html#function-onbookclear)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, final MamaMsg msg, final [MamdaOrderBookClear](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookClear.html) clear, final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) fullBook) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookChurn_1_1ListenerCallback.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onBookRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookChurn_1_1ListenerCallback.html#function-onbookrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html) delta, [MamdaOrderBookRecap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookRecap.html) event, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[onBookDelta](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookChurn_1_1ListenerCallback.html#function-onbookdelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html) event, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[onBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookChurn_1_1ListenerCallback.html#function-onbookcomplexdelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html) event, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[onBookGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookChurn_1_1ListenerCallback.html#function-onbookgap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookGap.html) event, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) fullBook) |

## Public Functions Documentation

### function onBookClear

```java
inline void onBookClear(
    final MamdaSubscription sub,
    final MamdaOrderBookListener listener,
    final MamaMsg msg,
    final MamdaOrderBookClear clear,
    final MamdaOrderBook fullBook
)
```


### function onStale

```java
inline void onStale(
    MamdaSubscription subscription,
    short quality
)
```


### function onBookRecap

```java
inline void onBookRecap(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookComplexDelta delta,
    MamdaOrderBookRecap event,
    MamdaOrderBook book
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **delta** The order book delta generated from the update. 
  * **event** The MamdaOrderBookRecap. 
  * **book** The book. 


Method invoked when an updated full order book image is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onBookDelta

```java
inline void onBookDelta(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookSimpleDelta event,
    MamdaOrderBook book
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** The order book delta generated from the update. 
  * **book** The full order book after the update is applied. 


Method invoked when a regular update for an order book is available.


### function onBookComplexDelta

```java
inline void onBookComplexDelta(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookComplexDelta event,
    MamdaOrderBook book
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The order book listener that received the update. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Details of the the delta. 
  * **book** The current full book (after applying the delta). 


Method invoked when an order book delta is reported. A delta consists of one or more price levels (add/update/delete), each of which contains zero or more entries (add/update/delete). Some feeds do not provide order book entry information.


### function onBookGap

```java
inline void onBookGap(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookGap event,
    MamdaOrderBook fullBook
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to details on the order book gap event. 
  * **fullBook** The full order book. 


Method invoked when a gap in order book updates is discovered.


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100