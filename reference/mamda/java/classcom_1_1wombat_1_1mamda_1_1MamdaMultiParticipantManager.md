---
title: com::wombat::mamda::MamdaMultiParticipantManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaMultiParticipantManager



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html#function-mamdamultiparticipantmanager)**(String symbol) |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html#function-addhandler)**([MamdaMultiParticipantHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantHandler.html) handler) |
| void | **[addConsolidatedListener](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html#function-addconsolidatedlistener)**([MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) listener) |
| void | **[addParticipantListener](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html#function-addparticipantlistener)**([MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) listener, String partId) |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html#function-onmsg)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final MamaMsg msg, final short msgType) |

## Detailed Description

```java
class com::wombat::mamda::MamdaMultiParticipantManager;
```


[MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html) is a class that manages updates on a consolidated basis for securities that may be traded on multiple exchanges and which may have a national best bid and offer. Developers are notified of each element available for the consolidated security, including the national best bid and offer, and each regional exchange (Market Maker). Developers can pick and choose which elements they wish to provide handling for (e.g., BBO-only, certain regional exchanges, etc.).

Specialized Listeners can be added to the `[MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html)` in response to the callbacks on the `[MamdaMultiParticipantHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantHandler.html)` being invoked. Alternatively, the Listeners can be added up front if the participants are known in advance.

Note: the `[MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html)` can also be used for securities that are not traded on multiple exchanges. 

## Public Functions Documentation

### function MamdaMultiParticipantManager

```java
inline MamdaMultiParticipantManager(
    String symbol
)
```


**Parameters**: 

  * **symbol** The group symbol for which the corresponding subscription was created. 


Only constructor for the class. No default available.


### function addHandler

```java
inline void addHandler(
    MamdaMultiParticipantHandler handler
)
```


**Parameters**: 

  * **handler** Concrete instance of the [MamdaMultiParticipantHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantHandler.html) interface. 


Add a specialized handler for notifications about the multi-participant security. 


### function addConsolidatedListener

```java
inline void addConsolidatedListener(
    MamdaMsgListener listener
)
```


**Parameters**: 

  * **listener** Concrete instance of the [MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) interface. 


Add a specialized message listener (e.g., a [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html), [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html), etc.) for the consolidated data.

Multiple listeners can be added.


### function addParticipantListener

```java
inline void addParticipantListener(
    MamdaMsgListener listener,
    String partId
)
```


**Parameters**: 

  * **listener** Concrete instance of the [MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) interface. 
  * **partId** The participant id for the instrument. This is suffix for the symbol in NYSE Technologies symbology. 


Add a specialized message listener (e.g., a [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html), [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html), etc.) for a participant.

Multiple listeners for each participant can be added.


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

Updated on 2022-05-04 at 07:54:12 +0100