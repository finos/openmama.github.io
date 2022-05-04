---
title: Wombat::MamdaSymbolSourceHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSymbolSourceHandler



 [More...](#detailed-description)


`#include <MamdaSymbolSourceHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onSymbol](classWombat_1_1MamdaSymbolSourceHandler.html#function-onsymbol)**(const [MamdaSymbolSourceEvent](classWombat_1_1MamdaSymbolSourceEvent.html) & event) =0 |
| virtual | **[~MamdaSymbolSourceHandler](classWombat_1_1MamdaSymbolSourceHandler.html#function-~mamdasymbolsourcehandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaSymbolSourceHandler;
```


[MamdaSymbolSourceHandler](classWombat_1_1MamdaSymbolSourceHandler.html) is an interface for applications that want to have an easy way to handle newly sourced symbol events. The interface defines the callback method for the new symbol event: onSymbol 

## Public Functions Documentation

### function onSymbol

```cpp
virtual void onSymbol(
    const MamdaSymbolSourceEvent & event
) =0
```


**Parameters**: 

  * **event** The [MamdaSymbolSourceEvent](classWombat_1_1MamdaSymbolSourceEvent.html) object. 


Method invoked when a new symbol has been sourced.


### function ~MamdaSymbolSourceHandler

```cpp
inline virtual ~MamdaSymbolSourceHandler()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100