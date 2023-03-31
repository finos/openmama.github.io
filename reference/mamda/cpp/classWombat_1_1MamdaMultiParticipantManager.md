---
title: Wombat::MamdaMultiParticipantManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMultiParticipantManager



 [More...](#detailed-description)


`#include <MamdaMultiParticipantManager.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html#function-mamdamultiparticipantmanager)**(const char * symbol) |
| virtual | **[~MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html#function-~mamdamultiparticipantmanager)**() |
| void | **[addHandler](classWombat_1_1MamdaMultiParticipantManager.html#function-addhandler)**([MamdaMultiParticipantHandler](classWombat_1_1MamdaMultiParticipantHandler.html) * handler) |
| void | **[addConsolidatedListener](classWombat_1_1MamdaMultiParticipantManager.html#function-addconsolidatedlistener)**([MamdaMsgListener](classWombat_1_1MamdaMsgListener.html) * listener) |
| void | **[addParticipantListener](classWombat_1_1MamdaMultiParticipantManager.html#function-addparticipantlistener)**([MamdaMsgListener](classWombat_1_1MamdaMsgListener.html) * listener, const char * partId) |
| virtual void | **[onMsg](classWombat_1_1MamdaMultiParticipantManager.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |


## Detailed Description

```cpp
class Wombat::MamdaMultiParticipantManager;
```


[MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html) is a class that manages updates on a consolidated basis for securities that may be traded on multiple exchanges and which may have a national best bid and offer. Developers are notified of each element available for the consolidated security, including the national best bid and offer, and each regional exchange. Developers can pick and choose which elements they wish to provide handling for (e.g., BBO-only, certain regional exchanges, etc.).

Note: the [MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html) can also be used for securities that are not traded on multiple exchanges. 

## Public Functions Documentation

### function MamdaMultiParticipantManager

```cpp
MamdaMultiParticipantManager(
    const char * symbol
)
```


Create a manager for consolidated securities. 


### function ~MamdaMultiParticipantManager

```cpp
virtual ~MamdaMultiParticipantManager()
```


Destructor. 


### function addHandler

```cpp
void addHandler(
    MamdaMultiParticipantHandler * handler
)
```


Add a specialized handler for notifications about the multi-participant security. The handler is responsible for initializing any data structures and listeners for each participant as well as the consolidated. Currently, only one handler can be registered. 


### function addConsolidatedListener

```cpp
void addConsolidatedListener(
    MamdaMsgListener * listener
)
```


Add a specialized message listener (e.g., a [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html), [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html), etc.) for the consolidated data. 


### function addParticipantListener

```cpp
void addParticipantListener(
    MamdaMsgListener * listener,
    const char * partId
)
```


Add a specialized message listener (e.g., a [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html), [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html), etc.) for a participant. 


### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
)
```


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)


Implementation of [MamdaMsgListener](classWombat_1_1MamdaMsgListener.html) interface. 


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100