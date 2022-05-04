---
title: Wombat::MamaTransport::CallbackForwarderSymbolMap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransport::CallbackForwarderSymbolMap





## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate int | **[SymbolMapFuncCallback](classWombat_1_1MamaTransport_1_1CallbackForwarderSymbolMap.html#function-symbolmapfunccallback)**(IntPtr closure, IntPtr result, string symbol, int maxLen) |
| | **[CallbackForwarderSymbolMap](classWombat_1_1MamaTransport_1_1CallbackForwarderSymbolMap.html#function-callbackforwardersymbolmap)**([MamaTransport](classWombat_1_1MamaTransport.html) sender, [MamaSymbolMapCallback](interfaceWombat_1_1MamaSymbolMapCallback.html) callback, object closure) |
| [MamaSymbolMapCallback](interfaceWombat_1_1MamaSymbolMapCallback.html) | **[GetCallback](classWombat_1_1MamaTransport_1_1CallbackForwarderSymbolMap.html#function-getcallback)**() |
| object | **[GetClosure](classWombat_1_1MamaTransport_1_1CallbackForwarderSymbolMap.html#function-getclosure)**() |

## Public Functions Documentation

### function SymbolMapFuncCallback

```csharp
delegate int SymbolMapFuncCallback(
    IntPtr closure,
    IntPtr result,
    string symbol,
    int maxLen
)
```


### function CallbackForwarderSymbolMap

```csharp
CallbackForwarderSymbolMap(
    MamaTransport sender,
    MamaSymbolMapCallback callback,
    object closure
)
```


### function GetCallback

```csharp
MamaSymbolMapCallback GetCallback()
```


### function GetClosure

```csharp
object GetClosure()
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100