---
title: com::wombat::mama::MamaSourceDerivative
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSourceDerivative





Inherits from [com.wombat.mama.MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html), [com.wombat.mama.MamaSourceManager](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceDerivative](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html#function-mamasourcederivative)**([MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) baseSource) |
| [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) | **[getBaseSource](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html#function-getbasesource)**() |
| [MamaSourceState](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html) | **[getState](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html#function-getstate)**() |
| short | **[getQuality](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html#function-getquality)**() |
| [MamaSourceDerivative](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html) | **[findSourceDerivative](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html#function-findsourcederivative)**(final String sourceName) |

## Additional inherited members

**Public Functions inherited from [com.wombat.mama.MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html)**

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
| String | **[getStateAsString](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getstateasstring)**() |
| [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) | **[getParent](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getparent)**() |
| native final String | **[getSymbolNamespace](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getsymbolnamespace)**() |
| [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) | **[getTransport](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-gettransport)**() |
| void | **[addSubscription](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-addsubscription)**(final String key, [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) | **[findSubscription](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-findsubscription)**(final String key) |
| boolean | **[isPartOf](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-ispartof)**([MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source) |
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-destroy)**() |

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
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html#function-destroy)**() |


## Public Functions Documentation

### function MamaSourceDerivative

```java
inline MamaSourceDerivative(
    MamaSource baseSource
)
```


### function getBaseSource

```java
inline MamaSource getBaseSource()
```


**Return**: the base source. 

Return the base source. 


### function getState

```java
inline MamaSourceState getState()
```


**Return**: The state of the source object 

**Reimplements**: [com::wombat::mama::MamaSource::getState](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getstate)


Get the state of a mama source object 


### function getQuality

```java
inline short getQuality()
```


**Reimplements**: [com::wombat::mama::MamaSource::getQuality](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-getquality)


### function findSourceDerivative

```java
inline MamaSourceDerivative findSourceDerivative(
    final String sourceName
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100