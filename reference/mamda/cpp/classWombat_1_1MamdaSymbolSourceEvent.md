---
title: Wombat::MamdaSymbolSourceEvent
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSymbolSourceEvent



 [More...](#detailed-description)


`#include <MamdaSymbolSourceEvent.h>`

Inherited by [Wombat::MamdaSecStatusSymbolSourceAdapter](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSourcedSymbol](classWombat_1_1MamdaSymbolSourceEvent.html#function-getsourcedsymbol)**() const =0 |
| virtual | **[~MamdaSymbolSourceEvent](classWombat_1_1MamdaSymbolSourceEvent.html#function-~mamdasymbolsourceevent)**() |

## Detailed Description

```cpp
class Wombat::MamdaSymbolSourceEvent;
```


[MamdaSymbolSourceEvent](classWombat_1_1MamdaSymbolSourceEvent.html) is an interface that provides access to a sourced symbol name. 

## Public Functions Documentation

### function getSourcedSymbol

```cpp
virtual const char * getSourcedSymbol() const =0
```


**Return**: The sourced symbol. 

**Reimplemented by**: [Wombat::MamdaSecStatusSymbolSourceAdapter::getSourcedSymbol](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-getsourcedsymbol)


Get the sourced symbol.


### function ~MamdaSymbolSourceEvent

```cpp
inline virtual ~MamdaSymbolSourceEvent()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100