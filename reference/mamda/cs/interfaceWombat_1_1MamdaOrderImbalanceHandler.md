---
title: Wombat::MamdaOrderImbalanceHandler
summary: MamdaOrderImbalanceHandler is an interface for applications that want to have an easy way to handle order imbalance updates. The interface defines callback methods for different types of order-imbalance events: 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceHandler



[MamdaOrderImbalanceHandler]() is an interface for applications that want to have an easy way to handle order imbalance updates. The interface defines callback methods for different types of order-imbalance events: 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onOrderImbalance](interfaceWombat_1_1MamdaOrderImbalanceHandler.html#function-onorderimbalance)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html) listener, MamaMsg msg)<br>Method invoked when a order imbalance is reported.  |
| void | **[onNoOrderImbalance](interfaceWombat_1_1MamdaOrderImbalanceHandler.html#function-onnoorderimbalance)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html) listener, MamaMsg msg)<br>Method invoked when a no order imbalance is reported.  |
| void | **[onOrderImbalanceRecap](interfaceWombat_1_1MamdaOrderImbalanceHandler.html#function-onorderimbalancerecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html) listener, MamaMsg msg)<br>Method invoked when the current order imbalance information is available. The reason for the invocation may be any of the following:  |

## Public Functions Documentation

### function onOrderImbalance

```csharp
void onOrderImbalance(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    MamaMsg msg
)
```

Method invoked when a order imbalance is reported. 

**Parameters**: 

  * **subscription** The subscription which received this update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.


### function onNoOrderImbalance

```csharp
void onNoOrderImbalance(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    MamaMsg msg
)
```

Method invoked when a no order imbalance is reported. 

**Parameters**: 

  * **subscription** The subscription which received this update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.


### function onOrderImbalanceRecap

```csharp
void onOrderImbalanceRecap(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    MamaMsg msg
)
```

Method invoked when the current order imbalance information is available. The reason for the invocation may be any of the following: 

**Parameters**: 

  * **subscription** The subscription which received this update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.




* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100