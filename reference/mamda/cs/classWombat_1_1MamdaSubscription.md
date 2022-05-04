---
title: Wombat::MamdaSubscription
summary: A MamdaSubscription is used to register interest in a particular symbol and source. A MamaTransport is required to actually activate the subscription. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSubscription



A [MamdaSubscription]() is used to register interest in a particular symbol and source. A MamaTransport is required to actually activate the subscription.  [More...](#detailed-description)

Inherits from [Wombat.MamdaResourceContainer](classWombat_1_1MamdaResourceContainer.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSubscription](classWombat_1_1MamdaSubscription.html#function-mamdasubscription)**()<br>Default constructor. The subscription is not created until either [create()]() or [activate()]() is called.  |
| void | **[create](classWombat_1_1MamdaSubscription.html#function-create)**(MamaTransport transport, MamaQueue queue, string source, string symbol, object closure)<br>Create and activate a subscription. Any properties for the subscription should be set prior to calling this method.  |
| void | **[setSource](classWombat_1_1MamdaSubscription.html#function-setsource)**(string source)<br>Set the data source name. Do this before calling [activate()]().  |
| void | **[setSymbol](classWombat_1_1MamdaSubscription.html#function-setsymbol)**(string symbol)<br>Set the symbol. Do this before calling [activate()]().  |
| void | **[setTransport](classWombat_1_1MamdaSubscription.html#function-settransport)**(MamaTransport transport)<br>Set the MAMA transport. Do this before calling [activate()]().  |
| void | **[setQueue](classWombat_1_1MamdaSubscription.html#function-setqueue)**(MamaQueue queue)<br>Set the MAMA queue. Do this before calling [activate()]().  |
| void | **[setType](classWombat_1_1MamdaSubscription.html#function-settype)**(mamaSubscriptionType type)<br>Set the subscrption type. Do this before calling [activate()]() Default is  |
| void | **[setServiceLevel](classWombat_1_1MamdaSubscription.html#function-setservicelevel)**(mamaServiceLevel serviceLevel, int serviceLevelOpt)<br>Set the MAMA service level. In the future, certain service levels may have an optional argument (e.g., an interval for conflated data). Do this before calling [activate()](). Default value is  |
| void | **[setRequireInitial](classWombat_1_1MamdaSubscription.html#function-setrequireinitial)**(bool require)<br>Set whether an initial value is required. Do this before calling [activate()](). Default is  |
| void | **[setTimeout](classWombat_1_1MamdaSubscription.html#function-settimeout)**(double timeout)<br>Set the timeout (in seconds) for this subscription. Do this before calling [activate()](). Default is 10 seconds.  |
| void | **[setRetries](classWombat_1_1MamdaSubscription.html#function-setretries)**(int retries)<br>Set the retries for this subscription. Do this before calling [activate()](). Default is 10 seconds.  |
| void | **[setClosure](classWombat_1_1MamdaSubscription.html#function-setclosure)**(Object closure)<br>Set the closure. Do this before calling [activate()]().  |
| void | **[addMsgListener](classWombat_1_1MamdaSubscription.html#function-addmsglistener)**([MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) listener)<br>Add a listener for regular messages.  |
| ArrayList | **[getMsgListeners](classWombat_1_1MamdaSubscription.html#function-getmsglisteners)**()<br>get a listener for regular messages.  |
| void | **[addStaleListener](classWombat_1_1MamdaSubscription.html#function-addstalelistener)**([MamdaStaleListener](interfaceWombat_1_1MamdaStaleListener.html) listener)<br>Add a listener for changes in stale status.  |
| void | **[addErrorListener](classWombat_1_1MamdaSubscription.html#function-adderrorlistener)**([MamdaErrorListener](interfaceWombat_1_1MamdaErrorListener.html) listener)<br>Add a listener for error events.  |
| void | **[activate](classWombat_1_1MamdaSubscription.html#function-activate)**()<br>Activate the subscription. Until this method is invoked, no updates will be received.  |
| void | **[deactivate](classWombat_1_1MamdaSubscription.html#function-deactivate)**()<br>Deactivate the subscription. No more updates will be received for this subscription (unless [activate()](classWombat_1_1MamdaSubscription.html#function-activate) is invoked again).  |
| void | **[requestRecap](classWombat_1_1MamdaSubscription.html#function-requestrecap)**()<br>Force a recap request to be sent for this subscription.  |
| string | **[getSource](classWombat_1_1MamdaSubscription.html#function-getsource)**() |
| double | **[getTimout](classWombat_1_1MamdaSubscription.html#function-gettimout)**() |
| int | **[getRetries](classWombat_1_1MamdaSubscription.html#function-getretries)**() |
| string | **[getSymbol](classWombat_1_1MamdaSubscription.html#function-getsymbol)**() |
| MamaQueue | **[getQueue](classWombat_1_1MamdaSubscription.html#function-getqueue)**() |
| MamaTransport | **[getTransport](classWombat_1_1MamdaSubscription.html#function-gettransport)**() |
| Object | **[getClosure](classWombat_1_1MamdaSubscription.html#function-getclosure)**()<br>Get the additional object passed as the closure to the [create()](classWombat_1_1MamdaSubscription.html#function-create) method.  |
| MamaSubscription | **[getMamaSubscription](classWombat_1_1MamdaSubscription.html#function-getmamasubscription)**() |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaResourceContainer](classWombat_1_1MamdaResourceContainer.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamdaResourceContainer.html#function-dispose)**()<br>Destroys the resources  |

**Protected Functions inherited from [Wombat.MamdaResourceContainer](classWombat_1_1MamdaResourceContainer.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamdaResourceContainer](classWombat_1_1MamdaResourceContainer.html#function-mamdaresourcecontainer)**() |
| void | **[AddResource](classWombat_1_1MamdaResourceContainer.html#function-addresource)**(IDisposable resource) |


## Detailed Description

```csharp
class Wombat::MamdaSubscription;
```

A [MamdaSubscription]() is used to register interest in a particular symbol and source. A MamaTransport is required to actually activate the subscription. 

Multiple listeners can be added to the [MamdaSubscription](classWombat_1_1MamdaSubscription.html). In this way, an application can make use of more than one of the specialized value added MAMDA listeners, such as [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) and [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html).

## Public Functions Documentation

### function MamdaSubscription

```csharp
MamdaSubscription()
```

Default constructor. The subscription is not created until either [create()]() or [activate()]() is called. 

### function create

```csharp
void create(
    MamaTransport transport,
    MamaQueue queue,
    string source,
    string symbol,
    object closure
)
```

Create and activate a subscription. Any properties for the subscription should be set prior to calling this method. 

**Parameters**: 

  * **transport** 
  * **queue** 
  * **source** 
  * **symbol** 
  * **closure** 


### function setSource

```csharp
void setSource(
    string source
)
```

Set the data source name. Do this before calling [activate()](). 

**Parameters**: 

  * **source** 


### function setSymbol

```csharp
void setSymbol(
    string symbol
)
```

Set the symbol. Do this before calling [activate()](). 

**Parameters**: 

  * **symbol** 


### function setTransport

```csharp
void setTransport(
    MamaTransport transport
)
```

Set the MAMA transport. Do this before calling [activate()](). 

**Parameters**: 

  * **transport** 


### function setQueue

```csharp
void setQueue(
    MamaQueue queue
)
```

Set the MAMA queue. Do this before calling [activate()](). 

**Parameters**: 

  * **queue** 


### function setType

```csharp
void setType(
    mamaSubscriptionType type
)
```

Set the subscrption type. Do this before calling [activate()]() Default is 

**Parameters**: 

  * **type** 


`mamaSubscriptionType.MAMA_SUBSC_TYPE_NORMAL`


### function setServiceLevel

```csharp
void setServiceLevel(
    mamaServiceLevel serviceLevel,
    int serviceLevelOpt
)
```

Set the MAMA service level. In the future, certain service levels may have an optional argument (e.g., an interval for conflated data). Do this before calling [activate()](). Default value is 

**Parameters**: 

  * **serviceLevel** 
  * **serviceLevelOpt** 


`MamaServiceLevel.MAMA_SERVICE_LEVEL_REAL_TIME` and 0


### function setRequireInitial

```csharp
void setRequireInitial(
    bool require
)
```

Set whether an initial value is required. Do this before calling [activate()](). Default is 

**Parameters**: 

  * **require** 


`true`


### function setTimeout

```csharp
void setTimeout(
    double timeout
)
```

Set the timeout (in seconds) for this subscription. Do this before calling [activate()](). Default is 10 seconds. 

**Parameters**: 

  * **timeout** 


### function setRetries

```csharp
void setRetries(
    int retries
)
```

Set the retries for this subscription. Do this before calling [activate()](). Default is 10 seconds. 

**Parameters**: 

  * **retries** 


### function setClosure

```csharp
void setClosure(
    Object closure
)
```

Set the closure. Do this before calling [activate()](). 

**Parameters**: 

  * **closure** 


### function addMsgListener

```csharp
void addMsgListener(
    MamdaMsgListener listener
)
```

Add a listener for regular messages. 

**Parameters**: 

  * **listener** 


### function getMsgListeners

```csharp
ArrayList getMsgListeners()
```

get a listener for regular messages. 

### function addStaleListener

```csharp
void addStaleListener(
    MamdaStaleListener listener
)
```

Add a listener for changes in stale status. 

**Parameters**: 

  * **listener** 


### function addErrorListener

```csharp
void addErrorListener(
    MamdaErrorListener listener
)
```

Add a listener for error events. 

**Parameters**: 

  * **listener** 


### function activate

```csharp
void activate()
```

Activate the subscription. Until this method is invoked, no updates will be received. 

### function deactivate

```csharp
void deactivate()
```

Deactivate the subscription. No more updates will be received for this subscription (unless [activate()](classWombat_1_1MamdaSubscription.html#function-activate) is invoked again). 

This function must be called from the same thread dispatching on the associated event queue unless both the default queue and dispatch queue are not actively dispatching.


### function requestRecap

```csharp
void requestRecap()
```

Force a recap request to be sent for this subscription. 

Note: there is still a possibility that the feed handler will reject such recap requests (based on configurable feature(s) of a feed handler). 


### function getSource

```csharp
string getSource()
```


**Return**: 

### function getTimout

```csharp
double getTimout()
```


**Return**: 

### function getRetries

```csharp
int getRetries()
```


**Return**: 

### function getSymbol

```csharp
string getSymbol()
```


**Return**: 

### function getQueue

```csharp
MamaQueue getQueue()
```


**Return**: 

### function getTransport

```csharp
MamaTransport getTransport()
```


**Return**: 

### function getClosure

```csharp
Object getClosure()
```

Get the additional object passed as the closure to the [create()](classWombat_1_1MamdaSubscription.html#function-create) method. 

**Return**: 

### function getMamaSubscription

```csharp
MamaSubscription getMamaSubscription()
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100