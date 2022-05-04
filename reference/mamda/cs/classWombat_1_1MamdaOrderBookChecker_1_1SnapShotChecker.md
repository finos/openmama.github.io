---
title: Wombat::MamdaOrderBookChecker::SnapShotChecker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookChecker::SnapShotChecker





Inherits from [Wombat.MamdaOrderBookHandler](interfaceWombat_1_1MamdaOrderBookHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SnapShotChecker](classWombat_1_1MamdaOrderBookChecker_1_1SnapShotChecker.html#function-snapshotchecker)**([MamdaOrderBookChecker](classWombat_1_1MamdaOrderBookChecker.html) outer) |
| void | **[onBookRecap](classWombat_1_1MamdaOrderBookChecker_1_1SnapShotChecker.html#function-onbookrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) recap) |
| void | **[onBookDelta](classWombat_1_1MamdaOrderBookChecker_1_1SnapShotChecker.html#function-onbookdelta)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) fullBook) |
| void | **[onBookClear](classWombat_1_1MamdaOrderBookChecker_1_1SnapShotChecker.html#function-onbookclear)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html) delta, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) fullBook) |
| void | **[onBookGap](classWombat_1_1MamdaOrderBookChecker_1_1SnapShotChecker.html#function-onbookgap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookGap](interfaceWombat_1_1MamdaOrderBookGap.html) gapEvent, [MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html) fullBook) |

## Public Functions Documentation

### function SnapShotChecker

```csharp
SnapShotChecker(
    MamdaOrderBookChecker outer
)
```


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
    MamdaOrderBookRecap fullBook
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
    MamdaOrderBookRecap fullBook
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100