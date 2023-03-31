---
title: Wombat::MamdaTradeChecker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeChecker



 [More...](#detailed-description)


`#include <MamdaTradeChecker.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaTradeChecker](classWombat_1_1MamdaTradeChecker.html#function-mamdatradechecker)**(MamaQueue * queue, [MamdaCheckerHandler](classWombat_1_1MamdaCheckerHandler.html) * handler, MamaSource * source, const char * symbol, mama_f64_t intervalSeconds) |
| | **[~MamdaTradeChecker](classWombat_1_1MamdaTradeChecker.html#function-~mamdatradechecker)**() |
| void | **[checkSnapShotNow](classWombat_1_1MamdaTradeChecker.html#function-checksnapshotnow)**() |
| mama_u32_t | **[getSuccessCount](classWombat_1_1MamdaTradeChecker.html#function-getsuccesscount)**() const |
| mama_u32_t | **[getInconclusiveCount](classWombat_1_1MamdaTradeChecker.html#function-getinconclusivecount)**() const |
| mama_u32_t | **[getFailureCount](classWombat_1_1MamdaTradeChecker.html#function-getfailurecount)**() const |

## Detailed Description

```cpp
class Wombat::MamdaTradeChecker;
```


[MamdaTradeChecker](classWombat_1_1MamdaTradeChecker.html) is a class that provides trades sanity checking by periodically requesting snapshots of the trades from the publisher and comparing that with an trades being maintained in real time. This class is purely for testing purposes, to test for possible configuration or programming errors in the trades publisher and in MAMDA trades management code.

The developer registers a handler that contains callbacks for successful, inconclusive and failure events. The developer also provides an interval representing the frequency of the snapshot checks. The first check will take place at some random point in time between zero and the interval. 

## Public Functions Documentation

### function MamdaTradeChecker

```cpp
MamdaTradeChecker(
    MamaQueue * queue,
    MamdaCheckerHandler * handler,
    MamaSource * source,
    const char * symbol,
    mama_f64_t intervalSeconds
)
```


Constructor 


### function ~MamdaTradeChecker

```cpp
~MamdaTradeChecker()
```


Desctructor. 


### function checkSnapShotNow

```cpp
void checkSnapShotNow()
```


Perform an ad hoc snapshot check now. This may be useful if the checking is to be performed by some external trigger event. 


### function getSuccessCount

```cpp
mama_u32_t getSuccessCount() const
```


**Return**: The number of successful checks. 

### function getInconclusiveCount

```cpp
mama_u32_t getInconclusiveCount() const
```


**Return**: The number of inconclusive checks. 

Return the nmber of inconclusive counts. An attempt to check the order book may be inconclusive if the order book sequence numbers do not match up.


### function getFailureCount

```cpp
mama_u32_t getFailureCount() const
```


**Return**: The number of failed checks. 

Return the number of failed checks. This should be zero, of course.


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100