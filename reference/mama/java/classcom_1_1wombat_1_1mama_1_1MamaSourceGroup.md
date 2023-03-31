---
title: com::wombat::mama::MamaSourceGroup
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSourceGroup





Inherits from [com.wombat.mama.MamaSourceGroupListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceGroupListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-mamasourcegroup)**(String name) |
| void | **[enableLogging](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-enablelogging)**(Level level) |
| void | **[disableLogging](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-disablelogging)**() |
| String | **[getName](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-getname)**() |
| [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) | **[findSource](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-findsource)**(final String sourceName) |
| void | **[addSource](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-addsource)**([MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source, long weight) |
| void | **[addSourceWithName](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-addsourcewithname)**([MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source, String sourceName, long weight) |
| void | **[setSourceWeight](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-setsourceweight)**(String sourceName, long weight) |
| boolean | **[reevaluate](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-reevaluate)**() |
| [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) | **[getTopWeightSource](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-gettopweightsource)**() |
| void | **[registerStateChangeListener](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-registerstatechangelistener)**([MamaSourceStateChangeListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceStateChangeListener.html) event) |
| void | **[unregisterStateChangeListener](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-unregisterstatechangelistener)**([MamaSourceStateChangeListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceStateChangeListener.html) event) |
| Iterator | **[sourceIterator](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-sourceiterator)**() |

## Public Functions Documentation

### function MamaSourceGroup

```java
inline MamaSourceGroup(
    String name
)
```


Create a mamaSourceGroup object. 


### function enableLogging

```java
inline void enableLogging(
    Level level
)
```


### function disableLogging

```java
inline void disableLogging()
```


### function getName

```java
inline String getName()
```


**Return**: The group name 

Return the name string identifier for the specified source group. 


### function findSource

```java
inline MamaSource findSource(
    final String sourceName
)
```


**Parameters**: 

  * **sourceName** The name identifier for the source being located. 


**Return**: [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html)

Find a source with the given name in the group. 


### function addSource

```java
inline void addSource(
    MamaSource source,
    long weight
)
```


**Parameters**: 

  * **source** The mamaSource being added to the mamaSourceGroup. 
  * **weight** The weighing to apply to the source being added. 


Add a mamaSource to the specified group with the specified weighting. The source id will be used by the group to uniquely identify the source.


### function addSourceWithName

```java
inline void addSourceWithName(
    MamaSource source,
    String sourceName,
    long weight
)
```


**Parameters**: 

  * **source** The mamaSource being added to the mamaSourceGroup. 
  * **sourceName** The unique identifier for this source in this group. 
  * **weight** The weighing to apply to the source being added. 


Add a mamaSource to the specified group with the specified weighting and string name identifier. 


### function setSourceWeight

```java
inline void setSourceWeight(
    String sourceName,
    long weight
)
```


**Parameters**: 

  * **sourceName** The name of the source whose weight is being updated. 
  * **weight** The new weight value for the specified source. 


Set the weight for an existing mamaSource in the specified group. 


### function reevaluate

```java
inline boolean reevaluate()
```


**Return**: boolean Whether any states were changed as a result of the call. false indicates none were changed. true indicates that the state of one or more sources has changed. 

Re-evaluate the group by checking all of the relative weights and changing the state of each [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) in the group as appropriate. Returns true if any states were changed; otherwise false.


### function getTopWeightSource

```java
inline MamaSource getTopWeightSource()
```


Return the top weighted source for this source group 


### function registerStateChangeListener

```java
inline void registerStateChangeListener(
    MamaSourceStateChangeListener event
)
```


**Parameters**: 

  * **event** to register 


**Reimplements**: [com::wombat::mama::MamaSourceGroupListener::registerStateChangeListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceGroupListener.html#function-registerstatechangelistener)


Applications interested in event notifications can register for events. 


### function unregisterStateChangeListener

```java
inline void unregisterStateChangeListener(
    MamaSourceStateChangeListener event
)
```


**Parameters**: 

  * **event** to unregister 


**Reimplements**: [com::wombat::mama::MamaSourceGroupListener::unregisterStateChangeListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceGroupListener.html#function-unregisterstatechangelistener)


Applications interested in event notifications can unregister for events. 


### function sourceIterator

```java
inline Iterator sourceIterator()
```


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100