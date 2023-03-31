---
title: Wombat::MamdaBasicSubscription
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBasicSubscription



 [More...](#detailed-description)


`#include <MamdaBasicSubscription.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html#function-mamdabasicsubscription)**() |
| | **[~MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html#function-~mamdabasicsubscription)**() |
| void | **[create](classWombat_1_1MamdaBasicSubscription.html#function-create)**(MamaTransport * transport, MamaQueue * queue, const char * symbol, void * closure =NULL) |
| void | **[setTimeout](classWombat_1_1MamdaBasicSubscription.html#function-settimeout)**(double timeout) |
| void | **[addMsgListener](classWombat_1_1MamdaBasicSubscription.html#function-addmsglistener)**([MamdaBasicMsgListener](classWombat_1_1MamdaBasicMsgListener.html) * listener) |
| void | **[addQualityListener](classWombat_1_1MamdaBasicSubscription.html#function-addqualitylistener)**([MamdaBasicQualityListener](classWombat_1_1MamdaBasicQualityListener.html) * listener) |
| void | **[addErrorListener](classWombat_1_1MamdaBasicSubscription.html#function-adderrorlistener)**([MamdaBasicErrorListener](classWombat_1_1MamdaBasicErrorListener.html) * listener) |
| void | **[activate](classWombat_1_1MamdaBasicSubscription.html#function-activate)**() |
| void | **[deactivate](classWombat_1_1MamdaBasicSubscription.html#function-deactivate)**() |
| void | **[setSymbol](classWombat_1_1MamdaBasicSubscription.html#function-setsymbol)**(const char * symbol) |
| const char * | **[getSymbol](classWombat_1_1MamdaBasicSubscription.html#function-getsymbol)**() const |
| void | **[setClosure](classWombat_1_1MamdaBasicSubscription.html#function-setclosure)**(void * closure) |
| void * | **[getClosure](classWombat_1_1MamdaBasicSubscription.html#function-getclosure)**() const |
| void | **[setTransport](classWombat_1_1MamdaBasicSubscription.html#function-settransport)**(MamaTransport * transport) |
| MamaTransport * | **[getTransport](classWombat_1_1MamdaBasicSubscription.html#function-gettransport)**() const |
| void | **[setQueue](classWombat_1_1MamdaBasicSubscription.html#function-setqueue)**(MamaQueue * queue) |
| MamaQueue * | **[getQueue](classWombat_1_1MamdaBasicSubscription.html#function-getqueue)**() const |

## Detailed Description

```cpp
class Wombat::MamdaBasicSubscription;
```


A [MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html) is used to register interest in a particular symbol. A MamaTransport is required to actually activate the subscription.

Multiple listeners can be added to the [MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html). In this way, an application can make use of more than one of the specialized value added MAMDA listeners, such as MamdaCalcListener 

## Public Functions Documentation

### function MamdaBasicSubscription

```cpp
MamdaBasicSubscription()
```


### function ~MamdaBasicSubscription

```cpp
~MamdaBasicSubscription()
```


### function create

```cpp
void create(
    MamaTransport * transport,
    MamaQueue * queue,
    const char * symbol,
    void * closure =NULL
)
```


Create and activate the subscription. You can alternatively set all objects and properties and then call activate is you wish. 


### function setTimeout

```cpp
void setTimeout(
    double timeout
)
```


Set the subscription timeout (in seconds). Do this before calling [activate()](classWombat_1_1MamdaBasicSubscription.html#function-activate). 


### function addMsgListener

```cpp
void addMsgListener(
    MamdaBasicMsgListener * listener
)
```


Add a listener for regular messages. 


### function addQualityListener

```cpp
void addQualityListener(
    MamdaBasicQualityListener * listener
)
```


Add a listener for changes in quality status. 


### function addErrorListener

```cpp
void addErrorListener(
    MamdaBasicErrorListener * listener
)
```


Add a listener for error events. 


### function activate

```cpp
void activate()
```


Activate the subscription. Until this method is invoked, no updates will be received. Is called by [create()](classWombat_1_1MamdaBasicSubscription.html#function-create). 


### function deactivate

```cpp
void deactivate()
```


Deactivate the subscription. No more updates will be received for this subscription (unless [activate()](classWombat_1_1MamdaBasicSubscription.html#function-activate) is invoked again). 


### function setSymbol

```cpp
void setSymbol(
    const char * symbol
)
```


Set the symbol for the subscription. Do this before calling [activate()](classWombat_1_1MamdaBasicSubscription.html#function-activate). 


### function getSymbol

```cpp
const char * getSymbol() const
```


Get the symbol for the subscription. 


### function setClosure

```cpp
void setClosure(
    void * closure
)
```


Set the closure for the subscription. Do this before calling [activate()](classWombat_1_1MamdaBasicSubscription.html#function-activate). 


### function getClosure

```cpp
void * getClosure() const
```


Get the additional object passed as the closure to the [create()](classWombat_1_1MamdaBasicSubscription.html#function-create) method. 


### function setTransport

```cpp
void setTransport(
    MamaTransport * transport
)
```


Set the MAMA transport. Do this before calling [activate()](classWombat_1_1MamdaBasicSubscription.html#function-activate). 


### function getTransport

```cpp
MamaTransport * getTransport() const
```


Get the MamaTransport for this subscription 


### function setQueue

```cpp
void setQueue(
    MamaQueue * queue
)
```


Set the MAMA queue. Do this before calling [activate()](classWombat_1_1MamdaBasicSubscription.html#function-activate). 


### function getQueue

```cpp
MamaQueue * getQueue() const
```


Get the MAMA queue for this subscription. 


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100