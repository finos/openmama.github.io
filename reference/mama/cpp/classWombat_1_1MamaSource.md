---
title: Wombat::MamaSource
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSource



 [More...](#detailed-description)


`#include <MamaSource.h>`

Inherits from [Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)

Inherited by [Wombat::MamaSourceDerivative](classWombat_1_1MamaSourceDerivative.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSource](classWombat_1_1MamaSource.html#function-mamasource)**() |
| | **[MamaSource](classWombat_1_1MamaSource.html#function-mamasource)**(const char * id, const char * transportName, const char * subscSourceName, mamaBridge bridge, bool createTransport =true) |
| | **[MamaSource](classWombat_1_1MamaSource.html#function-mamasource)**(const char * id, [MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * subscSourceName) |
| virtual | **[~MamaSource](classWombat_1_1MamaSource.html#function-~mamasource)**() |
| void | **[setId](classWombat_1_1MamaSource.html#function-setid)**(const char * id) |
| void | **[setMappedId](classWombat_1_1MamaSource.html#function-setmappedid)**(const char * id) |
| void | **[setDisplayId](classWombat_1_1MamaSource.html#function-setdisplayid)**(const char * id) |
| void | **[setQuality](classWombat_1_1MamaSource.html#function-setquality)**(mamaQuality quality) |
| void | **[setState](classWombat_1_1MamaSource.html#function-setstate)**(mamaSourceState state) |
| void | **[setParent](classWombat_1_1MamaSource.html#function-setparent)**([MamaSource](classWombat_1_1MamaSource.html) * parent) |
| void | **[setTransport](classWombat_1_1MamaSource.html#function-settransport)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport) |
| void | **[setTransportName](classWombat_1_1MamaSource.html#function-settransportname)**(const char * transportName) |
| void | **[setPublisherSourceName](classWombat_1_1MamaSource.html#function-setpublishersourcename)**(const char * sourceName) |
| virtual const char * | **[getId](classWombat_1_1MamaSource.html#function-getid)**() const |
| virtual const char * | **[getMappedId](classWombat_1_1MamaSource.html#function-getmappedid)**() const |
| virtual const char * | **[getDisplayId](classWombat_1_1MamaSource.html#function-getdisplayid)**() const |
| virtual mamaQuality | **[getQuality](classWombat_1_1MamaSource.html#function-getquality)**() const |
| virtual mamaSourceState | **[getState](classWombat_1_1MamaSource.html#function-getstate)**() const |
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

## Additional inherited members

**Public Classes inherited from [Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)**

|                | Name           |
| -------------- | -------------- |
| class | **[iterator](classWombat_1_1MamaSourceManager_1_1iterator.html)**  |

**Public Functions inherited from [Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceManager](classWombat_1_1MamaSourceManager.html#function-mamasourcemanager)**() |
| virtual | **[~MamaSourceManager](classWombat_1_1MamaSourceManager.html#function-~mamasourcemanager)**() |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[create](classWombat_1_1MamaSourceManager.html#function-create)**(const char * sourceName) |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[findOrCreate](classWombat_1_1MamaSourceManager.html#function-findorcreate)**(const char * sourceName) |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[find](classWombat_1_1MamaSourceManager.html#function-find)**(const char * sourceName) |
| virtual const [MamaSource](classWombat_1_1MamaSource.html) * | **[find](classWombat_1_1MamaSourceManager.html#function-find)**(const char * sourceName) const |
| virtual void | **[add](classWombat_1_1MamaSourceManager.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) * source) |
| virtual void | **[add](classWombat_1_1MamaSourceManager.html#function-add)**(const char * sourceName, [MamaSource](classWombat_1_1MamaSource.html) * source) |
| mama_size_t | **[size](classWombat_1_1MamaSourceManager.html#function-size)**() const |
| [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[begin](classWombat_1_1MamaSourceManager.html#function-begin)**() |
| const_iterator | **[begin](classWombat_1_1MamaSourceManager.html#function-begin)**() const |
| [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[end](classWombat_1_1MamaSourceManager.html#function-end)**() |
| const_iterator | **[end](classWombat_1_1MamaSourceManager.html#function-end)**() const |

**Public Attributes inherited from [Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)**

|                | Name           |
| -------------- | -------------- |
| const typedef [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[const_iterator](classWombat_1_1MamaSourceManager.html#variable-const-iterator)**  |


## Detailed Description

```cpp
class Wombat::MamaSource;
```


A MAMA source maintains information about a data source, including the quality of the data coming from that source. It inherits [MamaSourceManager](classWombat_1_1MamaSourceManager.html) because a source can have sub-sources. 

## Public Functions Documentation

### function MamaSource

```cpp
MamaSource()
```


### function MamaSource

```cpp
MamaSource(
    const char * id,
    const char * transportName,
    const char * subscSourceName,
    mamaBridge bridge,
    bool createTransport =true
)
```


### function MamaSource

```cpp
MamaSource(
    const char * id,
    MamaTransport * transport,
    const char * subscSourceName
)
```


### function ~MamaSource

```cpp
virtual ~MamaSource()
```


### function setId

```cpp
void setId(
    const char * id
)
```


### function setMappedId

```cpp
void setMappedId(
    const char * id
)
```


### function setDisplayId

```cpp
void setDisplayId(
    const char * id
)
```


### function setQuality

```cpp
void setQuality(
    mamaQuality quality
)
```


### function setState

```cpp
void setState(
    mamaSourceState state
)
```


### function setParent

```cpp
void setParent(
    MamaSource * parent
)
```


### function setTransport

```cpp
void setTransport(
    MamaTransport * transport
)
```


### function setTransportName

```cpp
void setTransportName(
    const char * transportName
)
```


### function setPublisherSourceName

```cpp
void setPublisherSourceName(
    const char * sourceName
)
```


### function getId

```cpp
virtual const char * getId() const
```


### function getMappedId

```cpp
virtual const char * getMappedId() const
```


### function getDisplayId

```cpp
virtual const char * getDisplayId() const
```


### function getQuality

```cpp
virtual mamaQuality getQuality() const
```


**Reimplemented by**: [Wombat::MamaSourceDerivative::getQuality](classWombat_1_1MamaSourceDerivative.html#function-getquality)


### function getState

```cpp
virtual mamaSourceState getState() const
```


**Reimplemented by**: [Wombat::MamaSourceDerivative::getState](classWombat_1_1MamaSourceDerivative.html#function-getstate)


### function getParent

```cpp
virtual MamaSource * getParent()
```


### function getParent

```cpp
virtual const MamaSource * getParent() const
```


### function getTransport

```cpp
virtual MamaTransport * getTransport() const
```


### function getTransportName

```cpp
virtual const char * getTransportName() const
```


### function getPublisherSourceName

```cpp
virtual const char * getPublisherSourceName() const
```


### function getCValue

```cpp
mamaSource getCValue()
```


### function getCValue

```cpp
const mamaSource getCValue() const
```


### function isPartOf

```cpp
bool isPartOf(
    const MamaSource * source
) const
```


Is this source part of the supplied source i.e. Is it the same as the supplied source or is the supplied source a parent (or parent of a parent) of this source 


### function addSubscription

```cpp
void addSubscription(
    const char * symbol,
    MamaSubscription * sub
)
```


Add a subscription. 


### function findSubscription

```cpp
MamaSubscription * findSubscription(
    const char * symbol
)
```


Look up a [MamaSubscription](classWombat_1_1MamaSubscription.html). NULL is returned if not found. 


### function removeSubscription

```cpp
MamaSubscription * removeSubscription(
    const char * symbol
)
```


Remove a [MamaSubscription](classWombat_1_1MamaSubscription.html). Subscription return is the subscription removed from list of associated subscriptions. NULL is returned if not found. 


### function deactivateSubscriptions

```cpp
void deactivateSubscriptions()
```


Activate all subscriptions for this source. 


### function activateSubscriptions

```cpp
void activateSubscriptions()
```


deactivate all subscriptions for this source. 


### function forEachSubscription

```cpp
void forEachSubscription(
    MamaSubscriptionIteratorCallback * callback,
    void * closure
)
```


Iterate through all subscriptions and call the MamaSubscriptionIterator's onSubscription method for each. 


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100