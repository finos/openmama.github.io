---
title: Wombat::MamdaSecStatusSymbolSourceAdapter
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecStatusSymbolSourceAdapter



 [More...](#detailed-description)


`#include <MamdaSecStatusSymbolSourceAdapter.h>`

Inherits from [Wombat::MamdaSymbolSourceEvent](classWombat_1_1MamdaSymbolSourceEvent.html), [Wombat::MamdaSecStatusHandler](classWombat_1_1MamdaSecStatusHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSecStatusSymbolSourceAdapter](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-mamdasecstatussymbolsourceadapter)**() |
| virtual | **[~MamdaSecStatusSymbolSourceAdapter](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-~mamdasecstatussymbolsourceadapter)**() |
| void | **[addHandler](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-addhandler)**([MamdaSymbolSourceHandler](classWombat_1_1MamdaSymbolSourceHandler.html) * handler) |
| virtual const char * | **[getSourcedSymbol](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-getsourcedsymbol)**() const |
| virtual void | **[onSecStatusRecap](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-onsecstatusrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html) & listener, const MamaMsg & msg, [MamdaSecStatusRecap](classWombat_1_1MamdaSecStatusRecap.html) & recap) |
| virtual void | **[onSecStatusUpdate](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-onsecstatusupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html) & listener, const MamaMsg & msg) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaSymbolSourceEvent](classWombat_1_1MamdaSymbolSourceEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaSymbolSourceEvent](classWombat_1_1MamdaSymbolSourceEvent.html#function-~mamdasymbolsourceevent)**() |

**Public Functions inherited from [Wombat::MamdaSecStatusHandler](classWombat_1_1MamdaSecStatusHandler.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaSecStatusHandler](classWombat_1_1MamdaSecStatusHandler.html#function-~mamdasecstatushandler)**() |


## Detailed Description

```cpp
class Wombat::MamdaSecStatusSymbolSourceAdapter;
```


[MamdaSecStatusSymbolSourceAdapter](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html) is a simple adapter class that can be added as a handler to the [MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html) turning it into a MamdaSymbolSource. Objects implementing the MamdaSymbolSource interface can register with this adapter and receive notification of newly announced symbols indirectly from the [MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html) via this adapter. 

## Public Functions Documentation

### function MamdaSecStatusSymbolSourceAdapter

```cpp
MamdaSecStatusSymbolSourceAdapter()
```


### function ~MamdaSecStatusSymbolSourceAdapter

```cpp
virtual ~MamdaSecStatusSymbolSourceAdapter()
```


### function addHandler

```cpp
void addHandler(
    MamdaSymbolSourceHandler * handler
)
```


**Parameters**: 

  * **handler** The symbol source handler 


Register a handler implementing the [MamdaSymbolSourceHandler](classWombat_1_1MamdaSymbolSourceHandler.html) interface.


### function getSourcedSymbol

```cpp
virtual const char * getSourcedSymbol() const
```


**Return**: sourced symbol 

**Reimplements**: [Wombat::MamdaSymbolSourceEvent::getSourcedSymbol](classWombat_1_1MamdaSymbolSourceEvent.html#function-getsourcedsymbol)


Return the sourced symbol. Implementation of the [MamdaSymbolSourceEvent](classWombat_1_1MamdaSymbolSourceEvent.html) interface


### function onSecStatusRecap

```cpp
virtual void onSecStatusRecap(
    MamdaSubscription * subscription,
    MamdaSecStatusListener & listener,
    const MamaMsg & msg,
    MamdaSecStatusRecap & recap
)
```


**Parameters**: 

  * **subscription** The security status subscription. 
  * **listener** The security status listener. 
  * **msg** The security status update message. 


**Reimplements**: [Wombat::MamdaSecStatusHandler::onSecStatusRecap](classWombat_1_1MamdaSecStatusHandler.html#function-onsecstatusrecap)


Implementation of [MamdaSecStatusHandler](classWombat_1_1MamdaSecStatusHandler.html) interface.


### function onSecStatusUpdate

```cpp
virtual void onSecStatusUpdate(
    MamdaSubscription * subscription,
    MamdaSecStatusListener & listener,
    const MamaMsg & msg
)
```


**Parameters**: 

  * **subscription** The subscription which received the update 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 


**Reimplements**: [Wombat::MamdaSecStatusHandler::onSecStatusUpdate](classWombat_1_1MamdaSecStatusHandler.html#function-onsecstatusupdate)


Method invoked when a security status update is received.


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100