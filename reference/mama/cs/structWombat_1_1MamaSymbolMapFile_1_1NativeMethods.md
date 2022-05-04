---
title: Wombat::MamaSymbolMapFile::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolMapFile::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaSymbolMapFile_create](structWombat_1_1MamaSymbolMapFile_1_1NativeMethods.html#function-mamasymbolmapfile-create)**(ref IntPtr fileMap) |
| int | **[mamaSymbolMapFile_destroy](structWombat_1_1MamaSymbolMapFile_1_1NativeMethods.html#function-mamasymbolmapfile-destroy)**(IntPtr fileMap) |
| int | **[mamaSymbolMapFile_load](structWombat_1_1MamaSymbolMapFile_1_1NativeMethods.html#function-mamasymbolmapfile-load)**(IntPtr fileMap, string fileName) |
| void | **[mamaSymbolMapFile_addMap](structWombat_1_1MamaSymbolMapFile_1_1NativeMethods.html#function-mamasymbolmapfile-addmap)**(IntPtr fileMap, string fromSymbol, string toSymbol) |
| int | **[mamaSymbolMapFile_map](structWombat_1_1MamaSymbolMapFile_1_1NativeMethods.html#function-mamasymbolmapfile-map)**(IntPtr fileMap, IntPtr result, string symbol, int maxLen) |
| int | **[mamaSymbolMapFile_revMap](structWombat_1_1MamaSymbolMapFile_1_1NativeMethods.html#function-mamasymbolmapfile-revmap)**(IntPtr fileMap, IntPtr result, string symbol, int maxLen) |

## Public Functions Documentation

### function mamaSymbolMapFile_create

```csharp
int mamaSymbolMapFile_create(
    ref IntPtr fileMap
)
```


### function mamaSymbolMapFile_destroy

```csharp
int mamaSymbolMapFile_destroy(
    IntPtr fileMap
)
```


### function mamaSymbolMapFile_load

```csharp
int mamaSymbolMapFile_load(
    IntPtr fileMap,
    string fileName
)
```


### function mamaSymbolMapFile_addMap

```csharp
void mamaSymbolMapFile_addMap(
    IntPtr fileMap,
    string fromSymbol,
    string toSymbol
)
```


### function mamaSymbolMapFile_map

```csharp
int mamaSymbolMapFile_map(
    IntPtr fileMap,
    IntPtr result,
    string symbol,
    int maxLen
)
```


### function mamaSymbolMapFile_revMap

```csharp
int mamaSymbolMapFile_revMap(
    IntPtr fileMap,
    IntPtr result,
    string symbol,
    int maxLen
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100