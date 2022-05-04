---
title: mamaEntitlementCallbacks_
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamaEntitlementCallbacks_



 [More...](#detailed-description)


`#include <mama.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| onSessionDisconnectCB | **[onSessionDisconnect](structmamaEntitlementCallbacks__.html#variable-onsessiondisconnect)**  |
| onEntitlementUpdateCB | **[onEntitlementUpdate](structmamaEntitlementCallbacks__.html#variable-onentitlementupdate)**  |
| onEntitlementCheckingSwitchCB | **[onEntitlementCheckingSwitch](structmamaEntitlementCallbacks__.html#variable-onentitlementcheckingswitch)**  |

## Detailed Description

```cpp
struct mamaEntitlementCallbacks_;
```


Convenience structure for registering entitlement callbacks to MAMA 

## Public Attributes Documentation

### variable onSessionDisconnect

```cpp
onSessionDisconnectCB onSessionDisconnect;
```


### variable onEntitlementUpdate

```cpp
onEntitlementUpdateCB onEntitlementUpdate;
```


### variable onEntitlementCheckingSwitch

```cpp
onEntitlementCheckingSwitchCB onEntitlementCheckingSwitch;
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100