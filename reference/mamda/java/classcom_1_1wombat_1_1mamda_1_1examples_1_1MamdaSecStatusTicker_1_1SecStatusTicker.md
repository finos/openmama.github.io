---
title: com::wombat::mamda::examples::MamdaSecStatusTicker::SecStatusTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaSecStatusTicker::SecStatusTicker





Inherits from [com.wombat.mamda.MamdaSecurityStatusHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSecurityStatusRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaSecStatusTicker_1_1SecStatusTicker.html#function-onsecuritystatusrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html) listener, MamaMsg msg, [MamdaSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html) recap) |
| void | **[onSecurityStatusUpdate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaSecStatusTicker_1_1SecStatusTicker.html#function-onsecuritystatusupdate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html) listener, MamaMsg msg, [MamdaSecurityStatusUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html) event, [MamdaSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html) recap) |

## Public Functions Documentation

### function onSecurityStatusRecap

```java
inline void onSecurityStatusRecap(
    MamdaSubscription subscription,
    MamdaSecurityStatusListener listener,
    MamaMsg msg,
    MamdaSecurityStatusRecap recap
)
```


### function onSecurityStatusUpdate

```java
inline void onSecurityStatusUpdate(
    MamdaSubscription subscription,
    MamdaSecurityStatusListener listener,
    MamaMsg msg,
    MamdaSecurityStatusUpdate event,
    MamdaSecurityStatusRecap recap
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100