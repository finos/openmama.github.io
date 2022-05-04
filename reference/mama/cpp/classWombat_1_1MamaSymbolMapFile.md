---
title: Wombat::MamaSymbolMapFile
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolMapFile



 [More...](#detailed-description)


`#include <MamaSymbolMapFile.h>`

Inherits from [Wombat::MamaSymbolMap](classWombat_1_1MamaSymbolMap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html#function-mamasymbolmapfile)**() |
| virtual | **[~MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html#function-~mamasymbolmapfile)**() |
| virtual mama_status | **[load](classWombat_1_1MamaSymbolMapFile.html#function-load)**(const char * mapFileName) |
| virtual void | **[addMap](classWombat_1_1MamaSymbolMapFile.html#function-addmap)**(const char * fromSymbol, const char * toSymbol) |
| virtual bool | **[map](classWombat_1_1MamaSymbolMapFile.html#function-map)**(char * result, const char * symbol, size_t maxLen) const |
| virtual bool | **[revMap](classWombat_1_1MamaSymbolMapFile.html#function-revmap)**(char * result, const char * symbol, size_t maxLen) const |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaSymbolMap](classWombat_1_1MamaSymbolMap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSymbolMap](classWombat_1_1MamaSymbolMap.html#function-~mamasymbolmap)**(void ) |


## Detailed Description

```cpp
class Wombat::MamaSymbolMapFile;
```


[MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html) is a concrete implementation of a symbology map.

It can load a filename and expects the contents of that file to contain two columns of data, with the columns separated by white space. A matching symbol of the left column is mapped to the symbol in the right column. If the symbol does not match anything in the file (or the file cannot be found), then the original symbol is used (no mapping). 

## Public Functions Documentation

### function MamaSymbolMapFile

```cpp
MamaSymbolMapFile()
```


### function ~MamaSymbolMapFile

```cpp
virtual ~MamaSymbolMapFile()
```


### function load

```cpp
virtual mama_status load(
    const char * mapFileName
)
```


### function addMap

```cpp
virtual void addMap(
    const char * fromSymbol,
    const char * toSymbol
)
```


### function map

```cpp
virtual bool map(
    char * result,
    const char * symbol,
    size_t maxLen
) const
```


**Reimplements**: [Wombat::MamaSymbolMap::map](classWombat_1_1MamaSymbolMap.html#function-map)


Map a symbol. 

 The result is the feed side symbol used to actually subscribe to in the infrastructure. The return value indicates whether or not a symbology mapping existed for the given symbol (True = yes, False = No). 


### function revMap

```cpp
virtual bool revMap(
    char * result,
    const char * symbol,
    size_t maxLen
) const
```


**Reimplements**: [Wombat::MamaSymbolMap::revMap](classWombat_1_1MamaSymbolMap.html#function-revmap)


Map a feed side symbol. This is reverse of the natural mapping schema and the result in this case is the corresponding client side symbol. The return value indicates whether or not a symbology mapping existed for the given symbol (True = yes, False = No). 


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100