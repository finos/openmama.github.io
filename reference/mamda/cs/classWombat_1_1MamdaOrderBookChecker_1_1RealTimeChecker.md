---
title: Wombat::MamdaOrderBookChecker::RealTimeChecker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookChecker::RealTimeChecker





Inherits from [Wombat.MamdaOrderBookHandler](interfaceWombat_1_1MamdaOrderBookHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookRecap](classWombat_1_1MamdaOrderBookChecker_1_1RealTimeChecker.html#function-onbookrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) recap) |
| void | **[onBookDelta](classWombat_1_1MamdaOrderBookChecker_1_1RealTimeChecker.html#function-onbookdelta)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) recap) |
| void | **[onBookClear](classWombat_1_1MamdaOrderBookChecker_1_1RealTimeChecker.html#function-onbookclear)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) fullBook) |
| void | **[onBookGap](classWombat_1_1MamdaOrderBookChecker_1_1RealTimeChecker.html#function-onbookgap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookGap](interfaceWombat_1_1MamdaOrderBookGap.html) gapEvent, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) recap) |

## Public Functions Documentation

### function onBookRecap

```csharp
void onBookRecap(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookDelta delta,
    MamdaOrderBookRecap recap
)
```


### function onBookDelta

```csharp
void onBookDelta(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookDelta delta,
    MamdaOrderBookRecap recap
)
```


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


### function onBookGap

```csharp
void onBookGap(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookGap gapEvent,
    MamdaOrderBookRecap recap
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100