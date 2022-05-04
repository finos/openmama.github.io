---
title: com::wombat::mama::MamaSourceStateChangeListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSourceStateChangeListener



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onStateChanged](interfacecom_1_1wombat_1_1mama_1_1MamaSourceStateChangeListener.html#function-onstatechanged)**([MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html) sourceGroup, [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) topWeightSource, Object closure) |

## Detailed Description

```java
class com::wombat::mama::MamaSourceStateChangeListener;
```


Applications can register with [MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html) to receive state change notifications when the state of sources within the group has changed. 

## Public Functions Documentation

### function onStateChanged

```java
void onStateChanged(
    MamaSourceGroup sourceGroup,
    MamaSource topWeightSource,
    Object closure
)
```


**Parameters**: 

  * **sourceGroup** The source group notifying the applications. 
  * **topWeightSource** The top weight source in the group. Determined when _reevaluate() is called. 
  * **closure** User supplied data. 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100