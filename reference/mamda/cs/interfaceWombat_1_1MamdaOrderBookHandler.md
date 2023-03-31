---
title: Wombat::MamdaOrderBookHandler
summary: Process updates on the order book. Concrete instances of this interface are passed to the 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookHandler



Process updates on the order book. Concrete instances of this interface are passed to the  [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookRecap](interfaceWombat_1_1MamdaOrderBookHandler.html#function-onbookrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) fullBook)<br>Method invoked when an updated full order book image is available. The reason for the invocation may be any of the following:  |
| void | **[onBookDelta](interfaceWombat_1_1MamdaOrderBookHandler.html#function-onbookdelta)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) fullBook)<br>Method invoked when a regular update for an order book is available.  |
| void | **[onBookClear](interfaceWombat_1_1MamdaOrderBookHandler.html#function-onbookclear)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) fullBook)<br>Method invoked when an order book is cleared.  |
| void | **[onBookGap](interfaceWombat_1_1MamdaOrderBookHandler.html#function-onbookgap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookGap](interfaceWombat_1_1MamdaOrderBookGap.html) gapEvent, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) fullBook)<br>Method invoked when a gap in order book updates is discovered.  |

## Detailed Description

```csharp
class Wombat::MamdaOrderBookHandler;
```

Process updates on the order book. Concrete instances of this interface are passed to the 

`[MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html)` in order for an application to receive callbacks on order book update events.

## Public Functions Documentation

### function onBookRecap

```csharp
void onBookRecap(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookDelta delta,
    MamdaOrderBookRecap fullBook
)
```

Method invoked when an updated full order book image is available. The reason for the invocation may be any of the following: 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **delta** The order book delata generated from the update.
  * **fullBook** The full order book




* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onBookDelta

```csharp
void onBookDelta(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookDelta delta,
    MamdaOrderBookRecap fullBook
)
```

Method invoked when a regular update for an order book is available. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **delta** The order book delata generated from the update.
  * **fullBook** The full order book


### function onBookClear

```csharp
void onBookClear(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookDelta delta,
    MamdaOrderBookRecap fullBook
)
```

Method invoked when an order book is cleared. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **delta** The order book delata generated from the update.
  * **fullBook** The full order book


### function onBookGap

```csharp
void onBookGap(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookGap gapEvent,
    MamdaOrderBookRecap fullBook
)
```

Method invoked when a gap in order book updates is discovered. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **gapEvent** Access to details on the order book gap event.
  * **fullBook** The full order book


-------------------------------

Updated on 2023-03-31 at 15:30:17 +0100