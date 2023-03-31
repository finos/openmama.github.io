---
title: Wombat::MamaSymbolSourceCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolSourceCallback



 [More...](#detailed-description)


`#include <MamaSymbolSourceCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSymbolSourceCallback](classWombat_1_1MamaSymbolSourceCallback.html#function-~mamasymbolsourcecallback)**() |
| virtual void | **[onSymbol](classWombat_1_1MamaSymbolSourceCallback.html#function-onsymbol)**([MamaSymbolSource](classWombat_1_1MamaSymbolSource.html) * symbolSource, const char * symbol, void * closure) =0 |

## Detailed Description

```cpp
class Wombat::MamaSymbolSourceCallback;
```


The [MamaSymbolSourceCallback](classWombat_1_1MamaSymbolSourceCallback.html) interface. The single callback function "onSymbol" gets invoked when a symbol arrives at a symbol source. 

## Public Functions Documentation

### function ~MamaSymbolSourceCallback

```cpp
inline virtual ~MamaSymbolSourceCallback()
```


### function onSymbol

```cpp
virtual void onSymbol(
    MamaSymbolSource * symbolSource,
    const char * symbol,
    void * closure
) =0
```


**Parameters**: 

  * **symbolSource** The symbolSource. 
  * **symbol** The newly sourced symbol 
  * **closure** The closure associated with the symbol source. 


Method invoked when a symbol arrives at a symbol source.


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100