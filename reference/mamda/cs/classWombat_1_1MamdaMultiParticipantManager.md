---
title: Wombat::MamdaMultiParticipantManager
summary: MamdaMultiParticipantManager is a class that manages updates on a consolidated basis for securities that may be traded on multiple exchanges and which may have a national best bid and offer. Developers are notified of each element available for the consolidated security, including the national best bid and offer, and each regional exchange (Market Maker). Developers can pick and choose which elements they wish to provide handling for (e.g., BBO-only, certain regional exchanges, etc.). 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMultiParticipantManager



[MamdaMultiParticipantManager]() is a class that manages updates on a consolidated basis for securities that may be traded on multiple exchanges and which may have a national best bid and offer. Developers are notified of each element available for the consolidated security, including the national best bid and offer, and each regional exchange (Market Maker). Developers can pick and choose which elements they wish to provide handling for (e.g., BBO-only, certain regional exchanges, etc.).  [More...](#detailed-description)

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html#function-mamdamultiparticipantmanager)**(string symbol)<br>Only constructor for the class. No default available.  |
| void | **[addHandler](classWombat_1_1MamdaMultiParticipantManager.html#function-addhandler)**([MamdaMultiParticipantHandler](interfaceWombat_1_1MamdaMultiParticipantHandler.html) handler)<br>Add a specialized handler for notifications about the multi-participant security.  |
| void | **[addConsolidatedListener](classWombat_1_1MamdaMultiParticipantManager.html#function-addconsolidatedlistener)**([MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) listener)<br>Add a specialized message listener (e.g., a [MamdaQuoteListener](), [MamdaTradeListener](), etc.) for the consolidated data.  |
| void | **[addParticipantListener](classWombat_1_1MamdaMultiParticipantManager.html#function-addparticipantlistener)**([MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) listener, string partId)<br>Add a specialized message listener (e.g., a [MamdaQuoteListener](), [MamdaTradeListener](), etc.) for a participant.  |
| void | **[onMsg](classWombat_1_1MamdaMultiParticipantManager.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Implementation of the [MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) Interface.  |

## Detailed Description

```csharp
class Wombat::MamdaMultiParticipantManager;
```

[MamdaMultiParticipantManager]() is a class that manages updates on a consolidated basis for securities that may be traded on multiple exchanges and which may have a national best bid and offer. Developers are notified of each element available for the consolidated security, including the national best bid and offer, and each regional exchange (Market Maker). Developers can pick and choose which elements they wish to provide handling for (e.g., BBO-only, certain regional exchanges, etc.). 

Specialized Listeners can be added to the `[MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html)` in response to the callbacks on the `[MamdaMultiParticipantHandler](interfaceWombat_1_1MamdaMultiParticipantHandler.html)` being invoked. Alternatively, the Listeners can be added up front if the participants are known in advance.

Note: the 

```cpp
MamdaMultiParticipantManager
```

 can also be used for securities that are not traded on multiple exchanges. 

## Public Functions Documentation

### function MamdaMultiParticipantManager

```csharp
MamdaMultiParticipantManager(
    string symbol
)
```

Only constructor for the class. No default available. 

**Parameters**: 

  * **symbol** The group symbol for which the corresponding subscription was created.


### function addHandler

```csharp
void addHandler(
    MamdaMultiParticipantHandler handler
)
```

Add a specialized handler for notifications about the multi-participant security. 

**Parameters**: 

  * **handler** Concrete instance of the [MamdaMultiParticipantHandler](interfaceWombat_1_1MamdaMultiParticipantHandler.html) interface.


### function addConsolidatedListener

```csharp
void addConsolidatedListener(
    MamdaMsgListener listener
)
```

Add a specialized message listener (e.g., a [MamdaQuoteListener](), [MamdaTradeListener](), etc.) for the consolidated data. 

**Parameters**: 

  * **listener** Concrete instance of the [MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) interface.


Multiple listeners can be added.


### function addParticipantListener

```csharp
void addParticipantListener(
    MamdaMsgListener listener,
    string partId
)
```

Add a specialized message listener (e.g., a [MamdaQuoteListener](), [MamdaTradeListener](), etc.) for a participant. 

**Parameters**: 

  * **listener** Concrete instance of the [MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) interface.
  * **partId** The participant id for the instrument.


Multiple listeners for each participant can be added.


### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```

Implementation of the [MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) Interface. 

**Parameters**: 

  * **subscription** 
  * **msg** 
  * **msgType** 


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100