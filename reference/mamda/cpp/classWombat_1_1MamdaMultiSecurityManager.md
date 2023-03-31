---
title: Wombat::MamdaMultiSecurityManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMultiSecurityManager



 [More...](#detailed-description)


`#include <MamdaMultiSecurityManager.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html#function-mamdamultisecuritymanager)**(const char * symbol) |
| virtual | **[~MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html#function-~mamdamultisecuritymanager)**() |
| void | **[addHandler](classWombat_1_1MamdaMultiSecurityManager.html#function-addhandler)**([MamdaMultiSecurityHandler](classWombat_1_1MamdaMultiSecurityHandler.html) * handler) |
| void | **[addSecurityListener](classWombat_1_1MamdaMultiSecurityManager.html#function-addsecuritylistener)**([MamdaMsgListener](classWombat_1_1MamdaMsgListener.html) * listener, const char * securitySymbol) |
| virtual void | **[onMsg](classWombat_1_1MamdaMultiSecurityManager.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |


## Detailed Description

```cpp
class Wombat::MamdaMultiSecurityManager;
```


[MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html) is a class that manages updates on an arbitrary number of securities that may be traded on multiple exchanges. Developers are notified of each security available, including the national best bid and offer, and each regional exchange, if applicable. Developers can pick and choose which elements they wish to provide handling for (e.g., BBO-only, certain regional exchanges, etc.). 

## Public Functions Documentation

### function MamdaMultiSecurityManager

```cpp
MamdaMultiSecurityManager(
    const char * symbol
)
```


Create a manager for consolidated securities. 


### function ~MamdaMultiSecurityManager

```cpp
virtual ~MamdaMultiSecurityManager()
```


Destructor. 


### function addHandler

```cpp
void addHandler(
    MamdaMultiSecurityHandler * handler
)
```


Add a specialized handler for notifications about each security in the group. The handler is responsible for initializing any data structures and listeners for each security. Currently, only one handler can be registered. 


### function addSecurityListener

```cpp
void addSecurityListener(
    MamdaMsgListener * listener,
    const char * securitySymbol
)
```


Add a specialized message listener (e.g., a [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html), [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html), etc.) for a security. 


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