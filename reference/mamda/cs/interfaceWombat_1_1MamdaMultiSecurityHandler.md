---
title: Wombat::MamdaMultiSecurityHandler
summary: MamdaMultiSecurityHandler is an interface that allows a developer to be notified dynamically when new security updates are received on a group subscription. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMultiSecurityHandler



[MamdaMultiSecurityHandler]() is an interface that allows a developer to be notified dynamically when new security updates are received on a group subscription.  [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSecurityCreate](interfaceWombat_1_1MamdaMultiSecurityHandler.html#function-onsecuritycreate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html) manager, string symbol)<br>Method invoked when the trade and quote information for a new security has become available  |

## Detailed Description

```csharp
class Wombat::MamdaMultiSecurityHandler;
```

[MamdaMultiSecurityHandler]() is an interface that allows a developer to be notified dynamically when new security updates are received on a group subscription. 

Note that any actions to register per-security listeners can be added up front (and this callback omitted or left empty) if the symbols are known beforehand. 

## Public Functions Documentation

### function onSecurityCreate

```csharp
void onSecurityCreate(
    MamdaSubscription subscription,
    MamdaMultiSecurityManager manager,
    string symbol
)
```

Method invoked when the trade and quote information for a new security has become available 

**Parameters**: 

  * **subscription** 
  * **manager** 
  * **symbol** 


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100