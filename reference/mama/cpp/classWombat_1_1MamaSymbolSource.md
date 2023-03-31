---
title: Wombat::MamaSymbolSource
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolSource



 [More...](#detailed-description)


`#include <MamaSymbolSource.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSymbolSource](classWombat_1_1MamaSymbolSource.html#function-~mamasymbolsource)**() |
| virtual void | **[addHandler](classWombat_1_1MamaSymbolSource.html#function-addhandler)**([MamaSymbolSourceCallback](classWombat_1_1MamaSymbolSourceCallback.html) * callback) =0 |

## Detailed Description

```cpp
class Wombat::MamaSymbolSource;
```


[MamaSymbolSource](classWombat_1_1MamaSymbolSource.html) defines an interface which all SymbolSources should implement in order to provide a mechanism by which objects implementing the "MamaSymbolSourceCallback::onSymbol" can be registered with the source such that they can be notified of new symbols as they arrive. 

## Public Functions Documentation

### function ~MamaSymbolSource

```cpp
inline virtual ~MamaSymbolSource()
```


### function addHandler

```cpp
virtual void addHandler(
    MamaSymbolSourceCallback * callback
) =0
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100