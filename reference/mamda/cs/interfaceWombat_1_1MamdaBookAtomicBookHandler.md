---
title: Wombat::MamdaBookAtomicBookHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBookAtomicBookHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookAtomicBeginBook](interfaceWombat_1_1MamdaBookAtomicBookHandler.html#function-onbookatomicbeginbook)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) listener, bool isRecap)<br>Method invoked before we start processing the first level in a message. The book should be cleared when isRecap == true.  |
| void | **[onBookAtomicEndBook](interfaceWombat_1_1MamdaBookAtomicBookHandler.html#function-onbookatomicendbook)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) listener) |
| void | **[onBookAtomicClear](interfaceWombat_1_1MamdaBookAtomicBookHandler.html#function-onbookatomicclear)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg) |
| void | **[onBookAtomicGap](interfaceWombat_1_1MamdaBookAtomicBookHandler.html#function-onbookatomicgap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicGap](interfaceWombat_1_1MamdaBookAtomicGap.html) gapEvent) |

## Detailed Description

```csharp
class Wombat::MamdaBookAtomicBookHandler;
```


[MamdaBookAtomicBookHandler](interfaceWombat_1_1MamdaBookAtomicBookHandler.html) is an interface for applications that need to know when a [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) finishes processing a single book update.

This may be useful for applications that wish to destroy the subscription from a callback as the subscription can only be destroyed after the message processing is complete. Furthermore, it allows applications to determine when to clear the book when a recap arrives. 

## Public Functions Documentation

### function onBookAtomicBeginBook

```csharp
void onBookAtomicBeginBook(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    bool isRecap
)
```

Method invoked before we start processing the first level in a message. The book should be cleared when isRecap == true. 

param name = "subscription">

//The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. param name = "listener">

//The listener handling the recap. param name = "isRecap">

//Whether the first update was a recap. summary> Method invoked when we stop processing the last level in a message. We invoke this method after the last entry for the level gets processed. The subscription may be destroyed from this callback. 

param name = "subscription">

//The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. param name = "listener">

//The listener handling the recap. 


### function onBookAtomicEndBook

```csharp
void onBookAtomicEndBook(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener
)
```


summary> Method invoked when an order book is cleared. param name = "subscription">

//The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. param name = "listener">

//The listener handling the recap. param name = "msg">

//The MamaMsg that triggered this invocation. 


### function onBookAtomicClear

```csharp
void onBookAtomicClear(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg
)
```


summary> Method invoked when a gap in orderBook reports is discovered. param name = "subscription">

//The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. param name = "listener">

//The listener handling the recap. param name = "msg">

//The MamaMsg that triggered this invocation. param name = "gapEvent">

//The gap value object. 


### function onBookAtomicGap

```csharp
void onBookAtomicGap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicGap gapEvent
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:10 +0100