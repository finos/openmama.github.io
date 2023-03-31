---
title: com::wombat::mamda::MamdaMultiSecurityManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaMultiSecurityManager



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaMultiSecurityManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html#function-mamdamultisecuritymanager)**(String symbol) |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html#function-addhandler)**([MamdaMultiSecurityHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityHandler.html) handler) |
| void | **[addListener](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html#function-addlistener)**([MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) listener, String symbol) |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html#function-onmsg)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final MamaMsg msg, final short msgType) |

## Detailed Description

```java
class com::wombat::mamda::MamdaMultiSecurityManager;
```


[MamdaMultiSecurityManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html) is a class that manages updates on a group symbol which provides a single subscription to multiple different securities. Developers are notified of each element available for the group and can choose which elements they wish to provide handling for (e.g. based on wildcards).

Specialized Listeners can be added to the `[MamdaMultiSecurityManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html)` in response to the callbacks on the `[MamdaMultiSecurityHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityHandler.html)` being invoked. Alternatively, the Listeners can be added up front if the participants are known in advance. 

## Public Functions Documentation

### function MamdaMultiSecurityManager

```java
inline MamdaMultiSecurityManager(
    String symbol
)
```


**Parameters**: 

  * **symbol** The group symbol for which the corresponding subscription was created. 


Only constructor for the class. No default available.


### function addHandler

```java
inline void addHandler(
    MamdaMultiSecurityHandler handler
)
```


**Parameters**: 

  * **handler** Concrete instance of the [MamdaMultiSecurityHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityHandler.html) interface. 


Add a specialized handler for notifications about new securities. 


### function addListener

```java
inline void addListener(
    MamdaMsgListener listener,
    String symbol
)
```


**Parameters**: 

  * **listener** Concrete instance of the [MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) interface. 
  * **symbol** The symbol for the instrument. 


Add a specialized message listener (e.g. a [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html), [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html), etc.) for a security.

Multiple listeners for each security can be added.


### function onMsg

```java
inline void onMsg(
    final MamdaSubscription subscription,
    final MamaMsg msg,
    final short msgType
)
```


**Reimplements**: [com::wombat::mamda::MamdaMsgListener::onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)


Implementation of the [MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) Interface. 


-------------------------------

Updated on 2023-03-31 at 15:30:33 +0100