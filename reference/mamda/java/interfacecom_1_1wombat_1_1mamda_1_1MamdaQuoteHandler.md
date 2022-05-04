---
title: com::wombat::mamda::MamdaQuoteHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaQuoteHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html#function-onquoterecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html#function-onquoteupdate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html) event, [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html#function-onquotegap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html) event, [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html#function-onquoteclosing)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html) event, [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |

## Detailed Description

```java
class com::wombat::mamda::MamdaQuoteHandler;
```


[MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) is an interface for applications that want to have an easy way to handle quote updates. The interface defines callback methods for different types of quote-related events: quotes and closing-quote updates. 

## Public Functions Documentation

### function onQuoteRecap

```java
void onQuoteRecap(
    MamdaSubscription subscription,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteRecap recap
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **recap** Access to the current value of all fields. 


Method invoked when the current last-quote information for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onQuoteUpdate

```java
void onQuoteUpdate(
    MamdaSubscription subscription,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteUpdate event,
    MamdaQuoteRecap recap
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** The [MamdaQuoteUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html) event. 
  * **recap** Access to the current value of all fields. 


Method invoked when a quote update arrives.


### function onQuoteGap

```java
void onQuoteGap(
    MamdaSubscription subscription,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteGap event,
    MamdaQuoteRecap recap
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** The [MamdaQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html) event. 
  * **recap** Access to the current value of all fields. 


Method invoked when a gap in quote updates is discovered.


### function onQuoteClosing

```java
void onQuoteClosing(
    MamdaSubscription subscription,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteClosing event,
    MamdaQuoteRecap recap
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** The [MamdaQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html) event. 
  * **recap** Access to the current value of all fields. 


Method invoked for a quote closing summary.


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100