---
title: com::wombat::mamda::MamdaOrderImbalanceHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaOrderImbalanceHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onOrderImbalance](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceHandler.html#function-onorderimbalance)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html) listener, final MamaMsg msg, [MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html) imbalance, [MamdaOrderImbalanceUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html) update) |
| void | **[onNoOrderImbalance](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceHandler.html#function-onnoorderimbalance)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html) listener, final MamaMsg msg, [MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html) imbalance, [MamdaOrderImbalanceUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html) update) |
| void | **[onOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceHandler.html#function-onorderimbalancerecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html) listener, final MamaMsg msg, [MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html) imbalance) |

## Detailed Description

```java
class com::wombat::mamda::MamdaOrderImbalanceHandler;
```


[MamdaOrderImbalanceHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceHandler.html) is an interface for applications that want to have an easy way to handle order imbalance updates. The interface defines callback methods for different types of order-imbalance events: 

## Public Functions Documentation

### function onOrderImbalance

```java
void onOrderImbalance(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    final MamaMsg msg,
    MamdaOrderImbalanceRecap imbalance,
    MamdaOrderImbalanceUpdate update
)
```


**Parameters**: 

  * **subscription** The subscription which received this update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **imbalance** Provides access to imbalance details. 
  * **update** Provides access to update details. 


Method invoked when a order imbalance is reported.


### function onNoOrderImbalance

```java
void onNoOrderImbalance(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    final MamaMsg msg,
    MamdaOrderImbalanceRecap imbalance,
    MamdaOrderImbalanceUpdate update
)
```


**Parameters**: 

  * **subscription** The subscription which received this update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **imbalance** Provides access to imbalance details. 
  * **update** Provides access to update details. 


Method invoked when a no order imbalance is reported.


### function onOrderImbalanceRecap

```java
void onOrderImbalanceRecap(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    final MamaMsg msg,
    MamdaOrderImbalanceRecap imbalance
)
```


Method invoked when the current order imbalance information is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed. subscriptionThe subscription which received this update. 

listenerThe listener which invoked this callback. 

msgThe MamaMsg that triggered this invocation. 

imbalanceProvides access to imbalance details. 


-------------------------------

Updated on 2023-03-31 at 15:30:33 +0100