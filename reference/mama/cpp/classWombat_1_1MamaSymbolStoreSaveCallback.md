---
title: Wombat::MamaSymbolStoreSaveCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolStoreSaveCallback



 [More...](#detailed-description)


`#include <MamaSymbolStoreSaveCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSymbolStoreSaveCallback](classWombat_1_1MamaSymbolStoreSaveCallback.html#function-~mamasymbolstoresavecallback)**() |
| virtual const char * | **[savefilterConverter](classWombat_1_1MamaSymbolStoreSaveCallback.html#function-savefilterconverter)**(const char * symbol) =0 |

## Detailed Description

```cpp
class Wombat::MamaSymbolStoreSaveCallback;
```


The [MamaSymbolStoreSaveCallback](classWombat_1_1MamaSymbolStoreSaveCallback.html) interface. An Object implementing this interface can be passed to the saveSymbolsToFile() function as a mechanism for filtering / transforming symbols being saved to files. 

## Public Functions Documentation

### function ~MamaSymbolStoreSaveCallback

```cpp
inline virtual ~MamaSymbolStoreSaveCallback()
```


### function savefilterConverter

```cpp
virtual const char * savefilterConverter(
    const char * symbol
) =0
```


**Parameters**: 

  * **symbol** The symbol just added to the store. 


Method invoked when a symbol is being saved to file.


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100