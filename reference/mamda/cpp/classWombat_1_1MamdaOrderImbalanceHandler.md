---
title: Wombat::MamdaOrderImbalanceHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceHandler



 [More...](#detailed-description)


`#include <MamdaOrderImbalanceHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onOrderImbalance](classWombat_1_1MamdaOrderImbalanceHandler.html#function-onorderimbalance)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html) & listener, const MamaMsg & msg, [MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html) & imbalance, [MamdaOrderImbalanceUpdate](classWombat_1_1MamdaOrderImbalanceUpdate.html) & update) =0 |
| virtual void | **[onNoOrderImbalance](classWombat_1_1MamdaOrderImbalanceHandler.html#function-onnoorderimbalance)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html) & listener, const MamaMsg & msg, [MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html) & imbalance, [MamdaOrderImbalanceUpdate](classWombat_1_1MamdaOrderImbalanceUpdate.html) & update) =0 |
| virtual void | **[onOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceHandler.html#function-onorderimbalancerecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html) & listener, const MamaMsg & msg, [MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html) & imbalance) =0 |
| virtual | **[~MamdaOrderImbalanceHandler](classWombat_1_1MamdaOrderImbalanceHandler.html#function-~mamdaorderimbalancehandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaOrderImbalanceHandler;
```


[MamdaOrderImbalanceHandler](classWombat_1_1MamdaOrderImbalanceHandler.html) is an interface for applications that want to have an easy way to handle order imbalance updates. The interface defines callback methods for different types of order-imbalance events: 

## Public Functions Documentation

### function onOrderImbalance

```cpp
virtual void onOrderImbalance(
    MamdaSubscription * subscription,
    MamdaOrderImbalanceListener & listener,
    const MamaMsg & msg,
    MamdaOrderImbalanceRecap & imbalance,
    MamdaOrderImbalanceUpdate & update
) =0
```


**Parameters**: 

  * **subscription** The subscription which received this update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **imbalance** Provides access to imbalance details 
  * **update** Provides access to update details 


Method invoked when a order imbalance is reported.


### function onNoOrderImbalance

```cpp
virtual void onNoOrderImbalance(
    MamdaSubscription * subscription,
    MamdaOrderImbalanceListener & listener,
    const MamaMsg & msg,
    MamdaOrderImbalanceRecap & imbalance,
    MamdaOrderImbalanceUpdate & update
) =0
```


**Parameters**: 

  * **subscription** The subscription which received this update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **imbalance** Provides access to imbalance details 
  * **update** Provides access to update details 


Method invoked when a no order imbalance is reported.


### function onOrderImbalanceRecap

```cpp
virtual void onOrderImbalanceRecap(
    MamdaSubscription * subscription,
    MamdaOrderImbalanceListener & listener,
    const MamaMsg & msg,
    MamdaOrderImbalanceRecap & imbalance
) =0
```


Method invoked when the current order imbalance information is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed. subscriptionThe subscription which received this update 

listenerThe listener which invoked this callback 

msgThe MamaMsg that triggered this invocation 

imbalanceProvides access to imbalance details 


### function ~MamdaOrderImbalanceHandler

```cpp
inline virtual ~MamdaOrderImbalanceHandler()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100