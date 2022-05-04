---
title: Wombat::MamdaMultiSecurityManager
summary: MamdaMultiSecurityManager is a class that manages updates on a group symbol which provides a single subscription to multiple different securities. Developers are notified of each element available for the group and can choose which elements they wish to provide handling for (e.g. based on wildcards). 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMultiSecurityManager



[MamdaMultiSecurityManager]() is a class that manages updates on a group symbol which provides a single subscription to multiple different securities. Developers are notified of each element available for the group and can choose which elements they wish to provide handling for (e.g. based on wildcards).  [More...](#detailed-description)

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html#function-mamdamultisecuritymanager)**(string symbol)<br>Only constructor for the class. No default available.  |
| void | **[addHandler](classWombat_1_1MamdaMultiSecurityManager.html#function-addhandler)**([MamdaMultiSecurityHandler](interfaceWombat_1_1MamdaMultiSecurityHandler.html) handler)<br>Add a specialized handler for notifications about new securities.  |
| void | **[addListener](classWombat_1_1MamdaMultiSecurityManager.html#function-addlistener)**([MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) listener, string symbol)<br>Add a specialized message listener (e.g. a [MamdaQuoteListener](), [MamdaTradeListener](), etc.) for a security.  |
| void | **[onMsg](classWombat_1_1MamdaMultiSecurityManager.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Implementation of the [MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) Interface.  |

## Detailed Description

```csharp
class Wombat::MamdaMultiSecurityManager;
```

[MamdaMultiSecurityManager]() is a class that manages updates on a group symbol which provides a single subscription to multiple different securities. Developers are notified of each element available for the group and can choose which elements they wish to provide handling for (e.g. based on wildcards). 

Specialized Listeners can be added to the `[MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html)` in response to the callbacks on the `[MamdaMultiSecurityHandler](interfaceWombat_1_1MamdaMultiSecurityHandler.html)` being invoked. Alternatively, the Listeners can be added up front if the participants are known in advance.

## Public Functions Documentation

### function MamdaMultiSecurityManager

```csharp
MamdaMultiSecurityManager(
    string symbol
)
```

Only constructor for the class. No default available. 

**Parameters**: 

  * **symbol** The group symbol for which the corresponding subscription was created.


### function addHandler

```csharp
void addHandler(
    MamdaMultiSecurityHandler handler
)
```

Add a specialized handler for notifications about new securities. 

**Parameters**: 

  * **handler** Concrete instance of the [MamdaMultiSecurityHandler](interfaceWombat_1_1MamdaMultiSecurityHandler.html) interface


### function addListener

```csharp
void addListener(
    MamdaMsgListener listener,
    string symbol
)
```

Add a specialized message listener (e.g. a [MamdaQuoteListener](), [MamdaTradeListener](), etc.) for a security. 

**Parameters**: 

  * **listener** Concrete instance of the [MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html) interface.
  * **symbol** The symbol for the instrument. 


Multiple listeners for each security can be added.


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

Updated on 2022-05-04 at 07:54:11 +0100