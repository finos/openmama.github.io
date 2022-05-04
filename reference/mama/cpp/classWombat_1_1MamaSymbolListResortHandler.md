---
title: Wombat::MamaSymbolListResortHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolListResortHandler



 [More...](#detailed-description)


`#include <MamaSymbolListHandlerTypes.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSymbolListResortHandler](classWombat_1_1MamaSymbolListResortHandler.html#function-~mamasymbollistresorthandler)**() |
| virtual void | **[onResort](classWombat_1_1MamaSymbolListResortHandler.html#function-onresort)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) * symbolList) =0 |

## Detailed Description

```cpp
class Wombat::MamaSymbolListResortHandler;
```


The [MamaSymbolListResortHandler](classWombat_1_1MamaSymbolListResortHandler.html) interface. Instances of subclasses of this class can be registered with a [MamaSymbolList](classWombat_1_1MamaSymbolList.html) and will be invoked when the sorting of the symbol list has changed. 

## Public Functions Documentation

### function ~MamaSymbolListResortHandler

```cpp
inline virtual ~MamaSymbolListResortHandler()
```


### function onResort

```cpp
virtual void onResort(
    MamaSymbolList * symbolList
) =0
```


**Parameters**: 

  * **symbolList** The symbol list. 


Method invoked when the sorting of the symbol list has changed.


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100