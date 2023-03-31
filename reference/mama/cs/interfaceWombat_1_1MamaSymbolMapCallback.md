---
title: Wombat::MamaSymbolMapCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolMapCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[SymbolMapFunc](interfaceWombat_1_1MamaSymbolMapCallback.html#function-symbolmapfunc)**(object closure, ref string result, string symbol, int maxLen)<br>Prototype for symbol-mapping function.  |

## Detailed Description

```csharp
class Wombat::MamaSymbolMapCallback;
```


Callback interface to receive notifications regarding symbol mapping events 

## Public Functions Documentation

### function SymbolMapFunc

```csharp
int SymbolMapFunc(
    object closure,
    ref string result,
    string symbol,
    int maxLen
)
```

Prototype for symbol-mapping function. 

**Parameters**: 

  * **closure** 
  * **result** 
  * **symbol** 
  * **maxLen** 


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100