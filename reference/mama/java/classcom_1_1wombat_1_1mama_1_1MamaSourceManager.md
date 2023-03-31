---
title: com::wombat::mama::MamaSourceManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSourceManager



 [More...](#detailed-description)

Inherited by [com.wombat.mama.MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html)

## Public Functions

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

## Detailed Description

```java
class com::wombat::mama::MamaSourceManager;
```


A [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html) source manager maintains information about a set of data sources, including the quality of the data coming from sources. 

## Public Functions Documentation

### function MamaSourceManager

```java
inline MamaSourceManager()
```


Constructor - creates a new [MamaSourceManager](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html) object 


thread safe hashmap


### function findOrCreateSource

```java
inline MamaSource findOrCreateSource(
    final String sourceName
)
```


**Parameters**: 

  * **sourceName** The string identifier for the mamaSource 


**Return**: [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html)

Locates an existing mamaSource for a given name, if none exists a new one is created and added to the source manager. 


### function findSource

```java
inline MamaSource findSource(
    final String sourceName
)
```


**Parameters**: 

  * **sourceName** The string identifier for the [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html)


**Return**: [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html)

locates an existing source for a given name, if none is found null is returned, The caller has to validate null value on return. 


### function addSource

```java
inline void addSource(
    MamaSource mamaSource
)
```


**Parameters**: 

  * **mamaSource** an existing mama source 


Add an existing mama Source to the source manager. The id of the source will be used instead of the name to identify the source within the source manager. 


### function addSource

```java
inline void addSource(
    MamaSource mamaSource,
    final String sourceName
)
```


**Parameters**: 

  * **mamaSource** an existing mama source 
  * **sourceName** The string identifier for the [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html)


Add an existing mama Source to the source manager. The name will used to uniquely identify the source within the source manager. 


### function getSize

```java
inline int getSize()
```


Return the size of the contents of source manager 


### function sourceIterator

```java
inline Iterator sourceIterator()
```


### function destroy

```java
inline void destroy()
```


**Reimplemented by**: [com::wombat::mama::MamaSource::destroy](classcom_1_1wombat_1_1mama_1_1MamaSource.html#function-destroy)


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100