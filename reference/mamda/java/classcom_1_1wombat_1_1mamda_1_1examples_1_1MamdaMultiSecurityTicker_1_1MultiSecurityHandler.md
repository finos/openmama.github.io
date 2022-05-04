---
title: com::wombat::mamda::examples::MamdaMultiSecurityTicker::MultiSecurityHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaMultiSecurityTicker::MultiSecurityHandler



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMultiSecurityHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSecurityCreate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaMultiSecurityTicker_1_1MultiSecurityHandler.html#function-onsecuritycreate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaMultiSecurityManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html) manager, String symbol) |

## Detailed Description

```java
class com::wombat::mamda::examples::MamdaMultiSecurityTicker::MultiSecurityHandler;
```


Implementation of the `MamdaMultiSecurityicipantHandler` interface.

Here we are adding a trade and quote listener for every participant and consolidated update as part of the underlying group subscription. The assumption here is that we are interested in all trade and quote information for all participants. 

## Public Functions Documentation

### function onSecurityCreate

```java
inline void onSecurityCreate(
    MamdaSubscription subscription,
    MamdaMultiSecurityManager manager,
    String symbol
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100