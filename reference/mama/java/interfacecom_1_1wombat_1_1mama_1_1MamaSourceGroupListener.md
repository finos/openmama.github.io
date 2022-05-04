---
title: com::wombat::mama::MamaSourceGroupListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSourceGroupListener



 [More...](#detailed-description)

Inherited by [com.wombat.mama.MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[registerStateChangeListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceGroupListener.html#function-registerstatechangelistener)**([MamaSourceStateChangeListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceStateChangeListener.html) event) |
| void | **[unregisterStateChangeListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceGroupListener.html#function-unregisterstatechangelistener)**([MamaSourceStateChangeListener](interfacecom_1_1wombat_1_1mama_1_1MamaSourceStateChangeListener.html) event) |

## Detailed Description

```java
class com::wombat::mama::MamaSourceGroupListener;
```


Applications interested in receiving notifications on Events from the MamaSourcegroup can register and unregister their interest. On events such as state change all registered applications are notified. 

## Public Functions Documentation

### function registerStateChangeListener

```java
void registerStateChangeListener(
    MamaSourceStateChangeListener event
)
```


**Reimplemented by**: [com::wombat::mama::MamaSourceGroup::registerStateChangeListener](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-registerstatechangelistener)


Register to receive state change event notifications 


### function unregisterStateChangeListener

```java
void unregisterStateChangeListener(
    MamaSourceStateChangeListener event
)
```


**Reimplemented by**: [com::wombat::mama::MamaSourceGroup::unregisterStateChangeListener](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html#function-unregisterstatechangelistener)


Unregister from state change event notifications 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100