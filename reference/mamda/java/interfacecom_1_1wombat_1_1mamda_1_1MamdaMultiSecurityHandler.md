---
title: com::wombat::mamda::MamdaMultiSecurityHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaMultiSecurityHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSecurityCreate](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityHandler.html#function-onsecuritycreate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaMultiSecurityManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html) manager, String symbol) |

## Detailed Description

```java
class com::wombat::mamda::MamdaMultiSecurityHandler;
```


The [MamdaMultiSecurityHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityHandler.html) class is an interface that allows a developer to be notified dynamically when new security updates are received on a group subscription.

Note that any actions to register per-security listeners can be added up front (and this callback omitted or left empty) if the symbols are known beforehand. 

## Public Functions Documentation

### function onSecurityCreate

```java
void onSecurityCreate(
    MamdaSubscription subscription,
    MamdaMultiSecurityManager manager,
    String symbol
)
```


Method invoked when the trade and quote information for a new security has become available 


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100