---
title: com::wombat::mama::MamaSourceGroupManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSourceGroupManager





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceGroupManager](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html#function-mamasourcegroupmanager)**() |
| [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html) | **[findOrCreateSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html#function-findorcreatesourcegroup)**(final String key) |
| [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html) | **[findSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html#function-findsourcegroup)**(final String key) |
| void | **[addSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html#function-addsourcegroup)**([MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html) sourceGroup) |
| Iterator | **[sourceGroupIterator](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html#function-sourcegroupiterator)**() |
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html#function-destroy)**() |

## Public Functions Documentation

### function MamaSourceGroupManager

```java
inline MamaSourceGroupManager()
```


### function findOrCreateSourceGroup

```java
inline MamaSourceGroup findOrCreateSourceGroup(
    final String key
)
```


**Parameters**: 

  * **key** The key identifier for the [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html)


**Return**: [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html)

Locates an existing [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html) for a given name. If none exists, create a new one and add it to the group manager. 


### function findSourceGroup

```java
inline MamaSourceGroup findSourceGroup(
    final String key
)
```


**Parameters**: 

  * **key** The key identifier for the required [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html)


**Return**: [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html)

Locates an existing [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html) in the specified [MamaSourceGroupManager](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html) with the specified key identifier. The value of the sourceGroup will be set to NULL, if no source was found. 


### function addSourceGroup

```java
inline void addSourceGroup(
    MamaSourceGroup sourceGroup
)
```


**Parameters**: 

  * **sourceGroup** - The mama source group being specified. 


Add an existing [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html) to the [MamaSourceGroupManager](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html). The name of the source group manager will be used to uniquely identify the source group within the manager. 


### function sourceGroupIterator

```java
inline Iterator sourceGroupIterator()
```


### function destroy

```java
inline void destroy()
```


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100