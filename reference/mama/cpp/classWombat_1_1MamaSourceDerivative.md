---
title: Wombat::MamaSourceDerivative
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceDerivative



 [More...](#detailed-description)


`#include <MamaSourceDerivative.h>`

Inherits from [Wombat::MamaSource](classWombat_1_1MamaSource.html), [Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceDerivative](classWombat_1_1MamaSourceDerivative.html#function-mamasourcederivative)**(const [MamaSource](classWombat_1_1MamaSource.html) * baseSource) |
| virtual | **[~MamaSourceDerivative](classWombat_1_1MamaSourceDerivative.html#function-~mamasourcederivative)**() |
| virtual void | **[setQuality](classWombat_1_1MamaSourceDerivative.html#function-setquality)**(mamaQuality quality) |
| virtual void | **[setState](classWombat_1_1MamaSourceDerivative.html#function-setstate)**(mamaSourceState state) |
| virtual mamaQuality | **[getQuality](classWombat_1_1MamaSourceDerivative.html#function-getquality)**() const |
| virtual mamaSourceState | **[getState](classWombat_1_1MamaSourceDerivative.html#function-getstate)**() const |
| virtual [MamaSourceDerivative](classWombat_1_1MamaSourceDerivative.html) * | **[find](classWombat_1_1MamaSourceDerivative.html#function-find)**(const char * sourceName) |
| virtual const [MamaSourceDerivative](classWombat_1_1MamaSourceDerivative.html) * | **[find](classWombat_1_1MamaSourceDerivative.html#function-find)**(const char * sourceName) const |
| const [MamaSource](classWombat_1_1MamaSource.html) * | **[getBaseSource](classWombat_1_1MamaSourceDerivative.html#function-getbasesource)**() const |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaSource](classWombat_1_1MamaSource.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaSource](classWombat_1_1MamaSource.html#function-mamasource)**() |
| | **[MamaSource](classWombat_1_1MamaSource.html#function-mamasource)**(const char * id, const char * transportName, const char * subscSourceName, mamaBridge bridge, bool createTransport =true) |
| | **[MamaSource](classWombat_1_1MamaSource.html#function-mamasource)**(const char * id, [MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * subscSourceName) |
| virtual | **[~MamaSource](classWombat_1_1MamaSource.html#function-~mamasource)**() |
| void | **[setId](classWombat_1_1MamaSource.html#function-setid)**(const char * id) |
| void | **[setMappedId](classWombat_1_1MamaSource.html#function-setmappedid)**(const char * id) |
| void | **[setDisplayId](classWombat_1_1MamaSource.html#function-setdisplayid)**(const char * id) |
| void | **[setParent](classWombat_1_1MamaSource.html#function-setparent)**([MamaSource](classWombat_1_1MamaSource.html) * parent) |
| void | **[setTransport](classWombat_1_1MamaSource.html#function-settransport)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport) |
| void | **[setTransportName](classWombat_1_1MamaSource.html#function-settransportname)**(const char * transportName) |
| void | **[setPublisherSourceName](classWombat_1_1MamaSource.html#function-setpublishersourcename)**(const char * sourceName) |
| virtual const char * | **[getId](classWombat_1_1MamaSource.html#function-getid)**() const |
| virtual const char * | **[getMappedId](classWombat_1_1MamaSource.html#function-getmappedid)**() const |
| virtual const char * | **[getDisplayId](classWombat_1_1MamaSource.html#function-getdisplayid)**() const |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[getParent](classWombat_1_1MamaSource.html#function-getparent)**() |
| virtual const [MamaSource](classWombat_1_1MamaSource.html) * | **[getParent](classWombat_1_1MamaSource.html#function-getparent)**() const |
| virtual [MamaTransport](classWombat_1_1MamaTransport.html) * | **[getTransport](classWombat_1_1MamaSource.html#function-gettransport)**() const |
| virtual const char * | **[getTransportName](classWombat_1_1MamaSource.html#function-gettransportname)**() const |
| virtual const char * | **[getPublisherSourceName](classWombat_1_1MamaSource.html#function-getpublishersourcename)**() const |
| mamaSource | **[getCValue](classWombat_1_1MamaSource.html#function-getcvalue)**() |
| const mamaSource | **[getCValue](classWombat_1_1MamaSource.html#function-getcvalue)**() const |
| bool | **[isPartOf](classWombat_1_1MamaSource.html#function-ispartof)**(const [MamaSource](classWombat_1_1MamaSource.html) * source) const |
| void | **[addSubscription](classWombat_1_1MamaSource.html#function-addsubscription)**(const char * symbol, [MamaSubscription](classWombat_1_1MamaSubscription.html) * sub) |
| [MamaSubscription](classWombat_1_1MamaSubscription.html) * | **[findSubscription](classWombat_1_1MamaSource.html#function-findsubscription)**(const char * symbol) |
| [MamaSubscription](classWombat_1_1MamaSubscription.html) * | **[removeSubscription](classWombat_1_1MamaSource.html#function-removesubscription)**(const char * symbol) |
| void | **[deactivateSubscriptions](classWombat_1_1MamaSource.html#function-deactivatesubscriptions)**() |
| void | **[activateSubscriptions](classWombat_1_1MamaSource.html#function-activatesubscriptions)**() |
| void | **[forEachSubscription](classWombat_1_1MamaSource.html#function-foreachsubscription)**([MamaSubscriptionIteratorCallback](classWombat_1_1MamaSubscriptionIteratorCallback.html) * callback, void * closure) |

**Public Classes inherited from [Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)**

|                | Name           |
| -------------- | -------------- |
| class | **[iterator](classWombat_1_1MamaSourceManager_1_1iterator.html)**  |

**Public Types inherited from [Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)**

|                | Name           |
| -------------- | -------------- |
| typedef const [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[const_iterator](classWombat_1_1MamaSourceManager.html#typedef-const-iterator)**  |

**Public Functions inherited from [Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceManager](classWombat_1_1MamaSourceManager.html#function-mamasourcemanager)**() |
| virtual | **[~MamaSourceManager](classWombat_1_1MamaSourceManager.html#function-~mamasourcemanager)**() |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[create](classWombat_1_1MamaSourceManager.html#function-create)**(const char * sourceName) |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[findOrCreate](classWombat_1_1MamaSourceManager.html#function-findorcreate)**(const char * sourceName) |
| virtual void | **[add](classWombat_1_1MamaSourceManager.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) * source) |
| virtual void | **[add](classWombat_1_1MamaSourceManager.html#function-add)**(const char * sourceName, [MamaSource](classWombat_1_1MamaSource.html) * source) |
| mama_size_t | **[size](classWombat_1_1MamaSourceManager.html#function-size)**() const |
| [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[begin](classWombat_1_1MamaSourceManager.html#function-begin)**() |
| [const_iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[begin](classWombat_1_1MamaSourceManager.html#function-begin)**() const |
| [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[end](classWombat_1_1MamaSourceManager.html#function-end)**() |
| [const_iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[end](classWombat_1_1MamaSourceManager.html#function-end)**() const |
| mamaSourceManager | **[getCValue](classWombat_1_1MamaSourceManager.html#function-getcvalue)**() |
| const mamaSourceManager | **[getCValue](classWombat_1_1MamaSourceManager.html#function-getcvalue)**() const |


## Detailed Description

```cpp
class Wombat::MamaSourceDerivative;
```


A [MamaSourceDerivative](classWombat_1_1MamaSourceDerivative.html) provides a reference to a common [MamaSource](classWombat_1_1MamaSource.html) object but can have attributes (such as the quality state) overridden. This class is intended to be associated with individually subscribed items, including order books. 

## Public Functions Documentation

### function MamaSourceDerivative

```cpp
MamaSourceDerivative(
    const MamaSource * baseSource
)
```


Construct an instance of a derived MAMA source. The resulting source derivative will have derived sub-sources for each of the sub-sources in baseSource. 


### function ~MamaSourceDerivative

```cpp
virtual ~MamaSourceDerivative()
```


### function setQuality

```cpp
virtual void setQuality(
    mamaQuality quality
)
```


### function setState

```cpp
virtual void setState(
    mamaSourceState state
)
```


### function getQuality

```cpp
virtual mamaQuality getQuality() const
```


**Reimplements**: [Wombat::MamaSource::getQuality](classWombat_1_1MamaSource.html#function-getquality)


### function getState

```cpp
virtual mamaSourceState getState() const
```


**Reimplements**: [Wombat::MamaSource::getState](classWombat_1_1MamaSource.html#function-getstate)


### function find

```cpp
virtual MamaSourceDerivative * find(
    const char * sourceName
)
```


**Reimplements**: [Wombat::MamaSourceManager::find](classWombat_1_1MamaSourceManager.html#function-find)


### function find

```cpp
virtual const MamaSourceDerivative * find(
    const char * sourceName
) const
```


**Reimplements**: [Wombat::MamaSourceManager::find](classWombat_1_1MamaSourceManager.html#function-find)


### function getBaseSource

```cpp
inline const MamaSource * getBaseSource() const
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100