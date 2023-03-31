---
title: com::wombat::mamda::MamdaErrorListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaErrorListener



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onError](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |

## Detailed Description

```java
class com::wombat::mamda::MamdaErrorListener;
```


[MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html) defines an interface for handling error notifications for a [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html). 

## Public Functions Documentation

### function onError

```java
void onError(
    MamdaSubscription subscription,
    short severity,
    short errorCode,
    String errorStr
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **severity** The severity of the error. 
  * **errorCode** The errorCode. (`[MamdaErrorCode](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html)`) 
  * **errorStr** The stringified version of the error.


**See**: [MamdaErrorCode](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html)

Provide a callback to handle errors. The severity is intended as a hint to indicate whether the error is recoverable.


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100