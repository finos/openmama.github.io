---
title: Wombat::MamdaMultiSecurityHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMultiSecurityHandler



 [More...](#detailed-description)


`#include <MamdaMultiSecurityHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onSecurityCreate](classWombat_1_1MamdaMultiSecurityHandler.html#function-onsecuritycreate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html) & manager, const char * securitySymbol, bool isPrimary) =0 |
| virtual | **[~MamdaMultiSecurityHandler](classWombat_1_1MamdaMultiSecurityHandler.html#function-~mamdamultisecurityhandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaMultiSecurityHandler;
```


The [MamdaMultiSecurityHandler](classWombat_1_1MamdaMultiSecurityHandler.html) class is an interface that allows a developer to be notified dynamically when securities are added to the list. Access to consolidated information (i.e., best bid and offer and consolidated trade info) is also available. 

## Public Functions Documentation

### function onSecurityCreate

```cpp
virtual void onSecurityCreate(
    MamdaSubscription * subscription,
    MamdaMultiSecurityManager & manager,
    const char * securitySymbol,
    bool isPrimary
) =0
```


Method invoked when the trade and quote information for the security has become available. Invoked as a result of an initial image on subscription (assuming initial values are enabled) or if an update is received for a security the [MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html) is unaware of (typically for securities which come online intra day and, for which, we have not received an initial value). This method is invoked for participant and consolidated quote or trade information.

isPrimary is not yet supported! 


### function ~MamdaMultiSecurityHandler

```cpp
inline virtual ~MamdaMultiSecurityHandler()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100