---
title: Wombat::MamaSymbolMap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolMap



 [More...](#detailed-description)


`#include <MamaSymbolMap.h>`

Inherited by [Wombat::MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSymbolMap](classWombat_1_1MamaSymbolMap.html#function-~mamasymbolmap)**(void ) |
| virtual bool | **[map](classWombat_1_1MamaSymbolMap.html#function-map)**(char * result, const char * symbol, size_t maxLen) const =0 |
| virtual bool | **[revMap](classWombat_1_1MamaSymbolMap.html#function-revmap)**(char * result, const char * symbol, size_t maxLen) const =0 |

## Detailed Description

```cpp
class Wombat::MamaSymbolMap;
```


The [MamaSymbolMap](classWombat_1_1MamaSymbolMap.html) class provides the ability for MAMA to do client side symbology mapping. Subclasses of this class can provide custom symbology mapping. A [MamaSymbolMap](classWombat_1_1MamaSymbolMap.html) can be assigned to each [MamaTransport](classWombat_1_1MamaTransport.html). 

## Public Functions Documentation

### function ~MamaSymbolMap

```cpp
inline virtual ~MamaSymbolMap(
    void 
)
```


### function map

```cpp
virtual bool map(
    char * result,
    const char * symbol,
    size_t maxLen
) const =0
```


**Reimplemented by**: [Wombat::MamaSymbolMapFile::map](classWombat_1_1MamaSymbolMapFile.html#function-map)


Map a symbol. 

 The result is the feed side symbol used to actually subscribe to in the infrastructure. The return value indicates whether or not a symbology mapping existed for the given symbol (True = yes, False = No). 


### function revMap

```cpp
virtual bool revMap(
    char * result,
    const char * symbol,
    size_t maxLen
) const =0
```


**Reimplemented by**: [Wombat::MamaSymbolMapFile::revMap](classWombat_1_1MamaSymbolMapFile.html#function-revmap)


Map a feed side symbol. This is reverse of the natural mapping schema and the result in this case is the corresponding client side symbol. The return value indicates whether or not a symbology mapping existed for the given symbol (True = yes, False = No). 


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100