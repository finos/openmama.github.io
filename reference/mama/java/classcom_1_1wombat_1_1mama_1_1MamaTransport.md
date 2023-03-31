---
title: com::wombat::mama::MamaTransport
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaTransport





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-mamatransport)**() |
| void | **[setTransportCallbackQueue](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-settransportcallbackqueue)**([MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue) |
| void | **[addTransportListener](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-addtransportlistener)**([MamaTransportListener](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html) transportListener) |
| void | **[addTransportTopicListener](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-addtransporttopiclistener)**([MamaTransportTopicListener](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html) transportTopicListener) |
| void | **[removeTransportListener](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-removetransportlistener)**([MamaTransportListener](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html) transportListener) |
| void | **[removeTransportTopicListener](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-removetransporttopiclistener)**() |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-getpointerval)**() |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-create)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| native void | **[_create](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function--create)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-create)**(String name, [MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| native void | **[_create](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function--create)**(String name, [MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-destroy)**() |
| double | **[getOutboundThrottle](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-getoutboundthrottle)**([MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) throttleInstance) |
| double | **[getOutboundThrottle](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-getoutboundthrottle)**() |
| void | **[setOutboundThrottle](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-setoutboundthrottle)**([MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) throttleInstance, double outboundThrottle) |
| void | **[setOutboundThrottle](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-setoutboundthrottle)**(double outboundThrottle) |
| native void | **[setDescription](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-setdescription)**(String description) |
| native String | **[getDescription](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-getdescription)**() |
| native void | **[setInvokeQualityForAllSubscs](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-setinvokequalityforallsubscs)**(boolean invokeQualityForAllSubscs) |
| native boolean | **[getInvokeQualityForAllSubscs](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-getinvokequalityforallsubscs)**() |
| native short | **[getQuality](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-getquality)**() |
| [MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) | **[getBridge](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-getbridge)**() |
| native void | **[requestConflation](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-requestconflation)**() |
| native void | **[requestEndConflation](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-requestendconflation)**() |
| native String | **[getName](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-getname)**() |
| native void | **[setName](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-setname)**(String name) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setPointerVal](classcom_1_1wombat_1_1mama_1_1MamaTransport.html#function-setpointerval)**(long pointerVal) |

## Public Functions Documentation

### function MamaTransport

```java
inline MamaTransport()
```


The constructor initialises all member variables and creates the re-usable objects including the transport listeners. 


### function setTransportCallbackQueue

```java
inline void setTransportCallbackQueue(
    MamaQueue queue
)
```


Set the callback queue. 


### function addTransportListener

```java
inline void addTransportListener(
    MamaTransportListener transportListener
)
```


**Parameters**: 

  * **transportListener** The new listener, null can be passed to remove the current listener. 


This function will set the client listener, note that only one listener or extended listener is supported at any one time.


### function addTransportTopicListener

```java
inline void addTransportTopicListener(
    MamaTransportTopicListener transportTopicListener
)
```


**Parameters**: 

  * **transportTopicListener** The new listener, null can be passed to remove the current listener. 


This function will set the client topic listener, note that only one topic listener is supported at any one time.


### function removeTransportListener

```java
inline void removeTransportListener(
    MamaTransportListener transportListener
)
```


**Parameters**: 

  * **transportListener** The transport listener. Note that this parameter is currently redundant. 


This function will remove the current transport listener. It will actually remove both the basic and extended listeners.


### function removeTransportTopicListener

```java
inline void removeTransportTopicListener()
```


This function will remove the current topic listener. 


### function getPointerVal

```java
inline long getPointerVal()
```


### function create

```java
inline void create(
    MamaBridge bridge
)
```


### function _create

```java
native void _create(
    MamaBridge bridge
)
```


### function create

```java
inline void create(
    String name,
    MamaBridge bridge
)
```


### function _create

```java
native void _create(
    String name,
    MamaBridge bridge
)
```


### function destroy

```java
native void destroy()
```


### function getOutboundThrottle

```java
inline double getOutboundThrottle(
    MamaThrottleInstance throttleInstance
)
```


### function getOutboundThrottle

```java
inline double getOutboundThrottle()
```


### function setOutboundThrottle

```java
inline void setOutboundThrottle(
    MamaThrottleInstance throttleInstance,
    double outboundThrottle
)
```


### function setOutboundThrottle

```java
inline void setOutboundThrottle(
    double outboundThrottle
)
```


### function setDescription

```java
native void setDescription(
    String description
)
```


### function getDescription

```java
native String getDescription()
```


### function setInvokeQualityForAllSubscs

```java
native void setInvokeQualityForAllSubscs(
    boolean invokeQualityForAllSubscs
)
```


### function getInvokeQualityForAllSubscs

```java
native boolean getInvokeQualityForAllSubscs()
```


### function getQuality

```java
native short getQuality()
```


### function getBridge

```java
inline MamaBridge getBridge()
```


### function requestConflation

```java
native void requestConflation()
```


### function requestEndConflation

```java
native void requestEndConflation()
```


### function getName

```java
native String getName()
```


### function setName

```java
native void setName(
    String name
)
```


## Protected Functions Documentation

### function setPointerVal

```java
inline void setPointerVal(
    long pointerVal
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100