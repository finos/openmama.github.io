---
title: com::wombat::mamda::MamdaSecurityStatusHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaSecurityStatusHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusHandler.html#function-onsecuritystatusrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html) listener, MamaMsg msg, [MamdaSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html) recap) |
| void | **[onSecurityStatusUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusHandler.html#function-onsecuritystatusupdate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html) listener, MamaMsg msg, [MamdaSecurityStatusUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html) event, [MamdaSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html) recap) |

## Detailed Description

```java
class com::wombat::mamda::MamdaSecurityStatusHandler;
```


[MamdaSecurityStatusHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusHandler.html) is an interface for applications that want to have an easy way to handle security status updates. The interface defines callback methods for status update and recap events. 

## Public Functions Documentation

### function onSecurityStatusRecap

```java
void onSecurityStatusRecap(
    MamdaSubscription subscription,
    MamdaSecurityStatusListener listener,
    MamaMsg msg,
    MamdaSecurityStatusRecap recap
)
```


**Parameters**: 

  * **msg** The MamaMsg that triggered this invocation. 


Method invoked when the current security status information for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onSecurityStatusUpdate

```java
void onSecurityStatusUpdate(
    MamdaSubscription subscription,
    MamdaSecurityStatusListener listener,
    MamaMsg msg,
    MamdaSecurityStatusUpdate event,
    MamdaSecurityStatusRecap recap
)
```


**Parameters**: 

  * **msg** The MamaMsg that triggered this invocation. 


Method invoked when the current security status information has changed.


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100