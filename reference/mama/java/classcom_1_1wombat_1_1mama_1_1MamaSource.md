---
title: com::wombat::mama::MamaSource
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSource



 [More...](#detailed-description)

Inherits from [com.wombat.mama.MamaSourceManager](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html)

Inherited by [com.wombat.mama.MamaSourceDerivative](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-mamasource)**() |
| | **[MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-mamasource)**(final String sourceId, [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, final String symbolNamespace) |
| native void | **[setId](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-setid)**(final String sourceId) |
| native void | **[setMappedId](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-setmappedid)**(final String mappedId) |
| native void | **[setDisplayId](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-setdisplayid)**(final String displayId) |
| native void | **[setQuality](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-setquality)**(short quality) |
| void | **[setState](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-setstate)**([MamaSourceState](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html) state) |
| void | **[setParent](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-setparent)**([MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) parent) |
| native void | **[setSymbolNamespace](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-setsymbolnamespace)**(final String symbolNamespace) |
| void | **[setTransportName](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-settransportname)**(final String transportName) |
| void | **[setTransport](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-settransport)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport) |
| native final String | **[getId](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getid)**() |
| native final String | **[getMappedId](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getmappedid)**() |
| native final String | **[getDisplayId](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getdisplayid)**() |
| native short | **[getQuality](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getquality)**() |
| [MamaSourceState](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html) | **[getState](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getstate)**() |
| String | **[getStateAsString](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getstateasstring)**() |
| [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) | **[getParent](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getparent)**() |
| native final String | **[getSymbolNamespace](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getsymbolnamespace)**() |
| [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) | **[getTransport](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-gettransport)**() |
| void | **[addSubscription](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-addsubscription)**(final String key, [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) | **[findSubscription](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-findsubscription)**(final String key) |
| boolean | **[isPartOf](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-ispartof)**([MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source) |
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-destroy)**() |

## Additional inherited members

**Public Functions inherited from [com.wombat.mama.MamaSourceManager](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceManager](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-mamasourcemanager)**() |
| [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) | **[findOrCreateSource](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-findorcreatesource)**(final String sourceName) |
| [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) | **[findSource](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-findsource)**(final String sourceName) |
| void | **[addSource](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-addsource)**([MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) mamaSource) |
| void | **[addSource](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-addsource)**([MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) mamaSource, final String sourceName) |
| int | **[getSize](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-getsize)**() |
| Iterator | **[sourceIterator](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-sourceiterator)**() |


## Detailed Description

```java
class com::wombat::mama::MamaSource;
```


A MAMA source maintains information about a data source, including the quality of the data coming from that source. It inherits [MamaSourceManager](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html) because a source can have sub-sources. 

## Public Functions Documentation

### function MamaSource

```java
inline MamaSource()
```


Creates a new mama source with default parameters 


### function MamaSource

```java
inline MamaSource(
    final String sourceId,
    MamaTransport transport,
    final String symbolNamespace
)
```


### function setId

```java
native void setId(
    final String sourceId
)
```


### function setMappedId

```java
native void setMappedId(
    final String mappedId
)
```


### function setDisplayId

```java
native void setDisplayId(
    final String displayId
)
```


### function setQuality

```java
native void setQuality(
    short quality
)
```


### function setState

```java
inline void setState(
    MamaSourceState state
)
```


### function setParent

```java
inline void setParent(
    MamaSource parent
)
```


### function setSymbolNamespace

```java
native void setSymbolNamespace(
    final String symbolNamespace
)
```


### function setTransportName

```java
inline void setTransportName(
    final String transportName
)
```


### function setTransport

```java
inline void setTransport(
    MamaTransport transport
)
```


### function getId

```java
native final String getId()
```


### function getMappedId

```java
native final String getMappedId()
```


### function getDisplayId

```java
native final String getDisplayId()
```


### function getQuality

```java
native short getQuality()
```


**Reimplemented by**: [com::wombat::mama::MamaSourceDerivative::getQuality](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html#function-getquality)


### function getState

```java
inline MamaSourceState getState()
```


**Return**: The state of the source object 

**Reimplemented by**: [com::wombat::mama::MamaSourceDerivative::getState](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html#function-getstate)


Get the state of a mama source object 


### function getStateAsString

```java
inline String getStateAsString()
```


**Return**: The stringified state of the source object 

Get the stringified state name of a mama source object 


### function getParent

```java
inline MamaSource getParent()
```


**Return**: [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) parent object 

Get the parent source of the mama source object 


### function getSymbolNamespace

```java
native final String getSymbolNamespace()
```


### function getTransport

```java
inline MamaTransport getTransport()
```


### function addSubscription

```java
inline void addSubscription(
    final String key,
    MamaSubscription subscription
)
```


**Parameters**: 

  * **key** Key value to use to insert Subscription into a Subscription Map 
  * **subscription** [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) object 


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown is the key value already exists in the Map 


Add a subscriptions to the mamaSource


### function findSubscription

```java
inline MamaSubscription findSubscription(
    final String key
)
```


**Parameters**: 

  * **key** The String identifier key for the subscription 


**Return**: The mama subscription object 

find a [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html), null will be returned if not found 


### function isPartOf

```java
inline boolean isPartOf(
    MamaSource source
)
```


### function destroy

```java
inline void destroy()
```


**Reimplements**: [com::wombat::mama::MamaSourceManager::destroy](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-destroy)


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100