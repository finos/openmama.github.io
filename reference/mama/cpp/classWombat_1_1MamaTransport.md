---
title: Wombat::MamaTransport
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransport



 [More...](#detailed-description)


`#include <MamaTransport.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaTransport](classWombat_1_1MamaTransport.html#function-mamatransport)**() |
| virtual | **[~MamaTransport](classWombat_1_1MamaTransport.html#function-~mamatransport)**() |
| | **[MamaTransport](classWombat_1_1MamaTransport.html#function-mamatransport)**(mamaTransport cTransport) |
| void | **[create](classWombat_1_1MamaTransport.html#function-create)**(const char * name, mamaBridge bridgeImpl) |
| void | **[setName](classWombat_1_1MamaTransport.html#function-setname)**(const char * name) |
| const char * | **[getName](classWombat_1_1MamaTransport.html#function-getname)**() const |
| const char * | **[getMiddleware](classWombat_1_1MamaTransport.html#function-getmiddleware)**() const |
| double | **[getOutboundThrottle](classWombat_1_1MamaTransport.html#function-getoutboundthrottle)**(mamaThrottleInstance instance =MAMA_THROTTLE_DEFAULT) const |
| void | **[setOutboundThrottle](classWombat_1_1MamaTransport.html#function-setoutboundthrottle)**(double outboundThrottle, mamaThrottleInstance instance =MAMA_THROTTLE_DEFAULT) |
| void | **[setTransportTopicCallback](classWombat_1_1MamaTransport.html#function-settransporttopiccallback)**([MamaTransportTopicEventCallback](classWombat_1_1MamaTransportTopicEventCallback.html) * callback) |
| void | **[getTransportCallbackQueue](classWombat_1_1MamaTransport.html#function-gettransportcallbackqueue)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue) |
| [MamaQueue](classWombat_1_1MamaQueue.html) * | **[getTransportCallbackQueue](classWombat_1_1MamaTransport.html#function-gettransportcallbackqueue)**() |
| void | **[setTransportCallback](classWombat_1_1MamaTransport.html#function-settransportcallback)**([MamaTransportCallback](classWombat_1_1MamaTransportCallback.html) * callback) |
| void | **[setSymbolMap](classWombat_1_1MamaTransport.html#function-setsymbolmap)**(const [MamaSymbolMap](classWombat_1_1MamaSymbolMap.html) * mapper) |
| const [MamaSymbolMap](classWombat_1_1MamaSymbolMap.html) * | **[getSymbolMap](classWombat_1_1MamaTransport.html#function-getsymbolmap)**() const |
| void | **[setDescription](classWombat_1_1MamaTransport.html#function-setdescription)**(const char * description) |
| const char * | **[getDescription](classWombat_1_1MamaTransport.html#function-getdescription)**() const |
| [MamaConnection](classWombat_1_1MamaConnection.html) * | **[findConnection](classWombat_1_1MamaTransport.html#function-findconnection)**(const char * IpAddress, uint16_t port) |
| virtual void | **[getAllConnections](classWombat_1_1MamaTransport.html#function-getallconnections)**([MamaConnection](classWombat_1_1MamaConnection.html) **& list, uint32_t & len) |
| virtual void | **[freeAllConnections](classWombat_1_1MamaTransport.html#function-freeallconnections)**([MamaConnection](classWombat_1_1MamaConnection.html) ** list, uint32_t len) |
| virtual void | **[getAllServerConnections](classWombat_1_1MamaTransport.html#function-getallserverconnections)**([MamaServerConnection](classWombat_1_1MamaServerConnection.html) **& list, uint32_t & len) |
| virtual void | **[freeAllServerConnections](classWombat_1_1MamaTransport.html#function-freeallserverconnections)**([MamaServerConnection](classWombat_1_1MamaServerConnection.html) ** list, uint32_t & len) |
| void | **[setInvokeQualityForAllSubscs](classWombat_1_1MamaTransport.html#function-setinvokequalityforallsubscs)**(bool invokeQualityForAllSubscs) |
| bool | **[getInvokeQualityForAllSubscs](classWombat_1_1MamaTransport.html#function-getinvokequalityforallsubscs)**() const |
| mamaQuality | **[getQuality](classWombat_1_1MamaTransport.html#function-getquality)**() const |
| void | **[requestConflation](classWombat_1_1MamaTransport.html#function-requestconflation)**() const |
| void | **[requestEndConflation](classWombat_1_1MamaTransport.html#function-requestendconflation)**() const |
| [MamaQueue](classWombat_1_1MamaQueue.html) * | **[getTransportCallbackQueue](classWombat_1_1MamaTransport.html#function-gettransportcallbackqueue)**() const |
| void | **[setTransportCallbackQueue](classWombat_1_1MamaTransport.html#function-settransportcallbackqueue)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue) |
| mamaTransport | **[getCValue](classWombat_1_1MamaTransport.html#function-getcvalue)**() |
| const mamaTransport | **[getCValue](classWombat_1_1MamaTransport.html#function-getcvalue)**() const |
| void * | **[getNativeTransport](classWombat_1_1MamaTransport.html#function-getnativetransport)**(int index) |
| void | **[disableRefresh](classWombat_1_1MamaTransport.html#function-disablerefresh)**(bool disable) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaTransportImpl * | **[mPimpl](classWombat_1_1MamaTransport.html#variable-mpimpl)**  |

## Detailed Description

```cpp
class Wombat::MamaTransport;
```


The [MamaTransport](classWombat_1_1MamaTransport.html) class provides market data functionality. 

## Public Functions Documentation

### function MamaTransport

```cpp
MamaTransport()
```


Construct a [MamaTransport](classWombat_1_1MamaTransport.html). Call create to create the transport. 


### function ~MamaTransport

```cpp
virtual ~MamaTransport()
```


### function MamaTransport

```cpp
MamaTransport(
    mamaTransport cTransport
)
```


Construct a [MamaTransport](classWombat_1_1MamaTransport.html) that wraps a mamaTransport from the C API. [Mama](classWombat_1_1Mama.html) uses this internally. C++ Applications should create C++ [MamaTransport](classWombat_1_1MamaTransport.html) objects through the no-argument constructor, and call [MamaTransport::create()](classWombat_1_1MamaTransport.html#function-create).

[MamaTransport](classWombat_1_1MamaTransport.html) objects created with this method do not deallocate or destroy the underlying c Transport because that responsibility lies with the creator. 


### function create

```cpp
void create(
    const char * name,
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **name** The transport name 
  * **bridgeImpl** The middleware-specific bridge structure 


Create a transport. Platform specific parameters are read from the properties file. The parameters are dependent on the underlying messaging transport.


### function setName

```cpp
void setName(
    const char * name
)
```


**Parameters**: 

  * **name** The transport name. 


set the transport name. The name string is copied by the object.


### function getName

```cpp
const char * getName() const
```


get the transport name. 


### function getMiddleware

```cpp
const char * getMiddleware() const
```


get the middleware name. 


### function getOutboundThrottle

```cpp
double getOutboundThrottle(
    mamaThrottleInstance instance =MAMA_THROTTLE_DEFAULT
) const
```


**Return**: The throttle rate. 

Return the outbound throttle rate in messages/second.


### function setOutboundThrottle

```cpp
void setOutboundThrottle(
    double outboundThrottle,
    mamaThrottleInstance instance =MAMA_THROTTLE_DEFAULT
)
```


**Parameters**: 

  * **outboundThrottle** The rate in messages/second. 
  * **instance** the mamaThrottleInstance to use 


Set the throttle rate for outbound message. This rate controls the rate at which methods sent with sendWithThrottle (void) are sent. A value of 0.0 disables throttling.


### function setTransportTopicCallback

```cpp
void setTransportTopicCallback(
    MamaTransportTopicEventCallback * callback
)
```


Set the transport topic callback 


### function getTransportCallbackQueue

```cpp
void getTransportCallbackQueue(
    MamaQueue * queue
)
```


Set the queue that the app provided for transport callbacks. 


### function getTransportCallbackQueue

```cpp
MamaQueue * getTransportCallbackQueue()
```


Get the queue that the app provided for transport callbacks. 


### function setTransportCallback

```cpp
void setTransportCallback(
    MamaTransportCallback * callback
)
```


Set the transport callback. 


### function setSymbolMap

```cpp
void setSymbolMap(
    const MamaSymbolMap * mapper
)
```


**Parameters**: 

  * **mapper** A symbol mapping class. 


Set the symbology mapping class.


### function getSymbolMap

```cpp
const MamaSymbolMap * getSymbolMap() const
```


Return the symbology mapping class. 


### function setDescription

```cpp
void setDescription(
    const char * description
)
```


**Parameters**: 

  * **description** The transport description. 


Set the description for the transport. The description string is copied by the object.


### function getDescription

```cpp
const char * getDescription() const
```


**Return**: const char* The transport description. 

Return the description string for the transport. Do not alter or free the string returned by this method.


### function findConnection

```cpp
MamaConnection * findConnection(
    const char * IpAddress,
    uint16_t port
)
```


### function getAllConnections

```cpp
virtual void getAllConnections(
    MamaConnection **& list,
    uint32_t & len
)
```


### function freeAllConnections

```cpp
virtual void freeAllConnections(
    MamaConnection ** list,
    uint32_t len
)
```


### function getAllServerConnections

```cpp
virtual void getAllServerConnections(
    MamaServerConnection **& list,
    uint32_t & len
)
```


### function freeAllServerConnections

```cpp
virtual void freeAllServerConnections(
    MamaServerConnection ** list,
    uint32_t & len
)
```


### function setInvokeQualityForAllSubscs

```cpp
void setInvokeQualityForAllSubscs(
    bool invokeQualityForAllSubscs
)
```


**Parameters**: 

  * **invokeQualityForAllSubscs** Whether to invoke quality callback for all subscriptions 


Set whether to invoke the quality callback for all subscriptions whenever a data quality event occurs (the default), or whether to invoke the quality callback only when data subsequently arrives for a subscription.

If set to true, an onQuality callback will be invoked for a subscription whenever a data quality event occurs on the transport, even in between updates for that description. If set to false, the onQuality callback will not be called when the data quality event occurs on the transport. However, it will still be invoked when an update arrives for the subscription.


### function getInvokeQualityForAllSubscs

```cpp
bool getInvokeQualityForAllSubscs() const
```


**Return**: Whether transport has been set to invoke quality callback for all subscriptions 

Get whether the transport has been set to invoke the quality callback for all subscriptions whenever a data quality event occurs.


### function getQuality

```cpp
mamaQuality getQuality() const
```


**Return**: The Quality of the transport 

Get the data quality for the transport.

Currently only supported for the Tibco RV middleware. Returns OK for all other middlewares.


### function requestConflation

```cpp
void requestConflation() const
```


Request conflation for the transport.

Currently only supported for WMW. 


### function requestEndConflation

```cpp
void requestEndConflation() const
```


Request an end to conflation for the transport.

Currently only supported for WMW. 


### function getTransportCallbackQueue

```cpp
MamaQueue * getTransportCallbackQueue() const
```


Get the queue for the transport callbacks 


### function setTransportCallbackQueue

```cpp
void setTransportCallbackQueue(
    MamaQueue * queue
)
```


Set the queue for the transport callbacks 


### function getCValue

```cpp
mamaTransport getCValue()
```


### function getCValue

```cpp
const mamaTransport getCValue() const
```


### function getNativeTransport

```cpp
void * getNativeTransport(
    int index
)
```


Return the underlying native transport. Applications should avoid this method if possible as it may result in non-portable, middleware specific code. Callers must cast the nativeTport to the appropriate type.

Note: this method returns the underlying C construct not a C++ object. 


### function disableRefresh

```cpp
void disableRefresh(
    bool disable
)
```


Disable refreshing of subscriptions on this transport. 


## Public Attributes Documentation

### variable mPimpl

```cpp
MamaTransportImpl * mPimpl;
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100