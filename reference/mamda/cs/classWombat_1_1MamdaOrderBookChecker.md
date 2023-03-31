---
title: Wombat::MamdaOrderBookChecker
summary: TODOC: 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookChecker



TODOC: 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookChecker](classWombat_1_1MamdaOrderBookChecker.html#function-mamdaorderbookchecker)**(MamaTransport transport, MamaQueue queue, [MamdaOrderBookCheckerHandler](interfaceWombat_1_1MamdaOrderBookCheckerHandler.html) handler, string source, string symbol, double intervalSeconds) |
| | **[MamdaOrderBookChecker](classWombat_1_1MamdaOrderBookChecker.html#function-mamdaorderbookchecker)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) realTimeSubsc, [MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html) realTimeListener, [MamdaOrderBookCheckerHandler](interfaceWombat_1_1MamdaOrderBookCheckerHandler.html) handler, double intervalSeconds) |
| long | **[getSuccessCount](classWombat_1_1MamdaOrderBookChecker.html#function-getsuccesscount)**() |
| long | **[getInconclusiveCount](classWombat_1_1MamdaOrderBookChecker.html#function-getinconclusivecount)**() |
| long | **[getFailureCount](classWombat_1_1MamdaOrderBookChecker.html#function-getfailurecount)**() |
| void | **[checkSnapShotNow](classWombat_1_1MamdaOrderBookChecker.html#function-checksnapshotnow)**() |

## Public Functions Documentation

### function MamdaOrderBookChecker

```csharp
MamdaOrderBookChecker(
    MamaTransport transport,
    MamaQueue queue,
    MamdaOrderBookCheckerHandler handler,
    string source,
    string symbol,
    double intervalSeconds
)
```


**Parameters**: 

  * **transport** 
  * **queue** 
  * **handler** 
  * **source** 
  * **symbol** 
  * **intervalSeconds** 


### function MamdaOrderBookChecker

```csharp
MamdaOrderBookChecker(
    MamdaSubscription realTimeSubsc,
    MamdaOrderBookListener realTimeListener,
    MamdaOrderBookCheckerHandler handler,
    double intervalSeconds
)
```


**Parameters**: 

  * **realTimeSubsc** 
  * **realTimeListener** 
  * **handler** 
  * **intervalSeconds** 


### function getSuccessCount

```csharp
long getSuccessCount()
```


**Return**: 

### function getInconclusiveCount

```csharp
long getInconclusiveCount()
```


**Return**: 

### function getFailureCount

```csharp
long getFailureCount()
```


**Return**: 

### function checkSnapShotNow

```csharp
void checkSnapShotNow()
```


-------------------------------

Updated on 2023-03-31 at 15:30:17 +0100