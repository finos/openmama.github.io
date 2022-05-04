---
title: Wombat::MamaSourceManager::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceManager::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaSourceManager_create](structWombat_1_1MamaSourceManager_1_1NativeMethods.html#function-mamasourcemanager-create)**(ref IntPtr sourceManager) |
| int | **[mamaSourceManager_destroy](structWombat_1_1MamaSourceManager_1_1NativeMethods.html#function-mamasourcemanager-destroy)**(IntPtr sourceManager) |
| int | **[mamaSourceManager_createSource](structWombat_1_1MamaSourceManager_1_1NativeMethods.html#function-mamasourcemanager-createsource)**(IntPtr sourceManager, string name, ref IntPtr source) |
| int | **[mamaSourceManager_findOrCreateSource](structWombat_1_1MamaSourceManager_1_1NativeMethods.html#function-mamasourcemanager-findorcreatesource)**(IntPtr sourceManager, string name, ref IntPtr source) |
| int | **[mamaSourceManager_findSource](structWombat_1_1MamaSourceManager_1_1NativeMethods.html#function-mamasourcemanager-findsource)**(IntPtr sourceManager, string name, ref IntPtr source) |
| int | **[mamaSourceManager_addSource](structWombat_1_1MamaSourceManager_1_1NativeMethods.html#function-mamasourcemanager-addsource)**(IntPtr sourceManager, IntPtr source) |
| int | **[mamaSourceManager_addSourceWithName](structWombat_1_1MamaSourceManager_1_1NativeMethods.html#function-mamasourcemanager-addsourcewithname)**(IntPtr sourceManager, IntPtr source, string name) |

## Public Functions Documentation

### function mamaSourceManager_create

```csharp
int mamaSourceManager_create(
    ref IntPtr sourceManager
)
```


### function mamaSourceManager_destroy

```csharp
int mamaSourceManager_destroy(
    IntPtr sourceManager
)
```


### function mamaSourceManager_createSource

```csharp
int mamaSourceManager_createSource(
    IntPtr sourceManager,
    string name,
    ref IntPtr source
)
```


### function mamaSourceManager_findOrCreateSource

```csharp
int mamaSourceManager_findOrCreateSource(
    IntPtr sourceManager,
    string name,
    ref IntPtr source
)
```


### function mamaSourceManager_findSource

```csharp
int mamaSourceManager_findSource(
    IntPtr sourceManager,
    string name,
    ref IntPtr source
)
```


### function mamaSourceManager_addSource

```csharp
int mamaSourceManager_addSource(
    IntPtr sourceManager,
    IntPtr source
)
```


### function mamaSourceManager_addSourceWithName

```csharp
int mamaSourceManager_addSourceWithName(
    IntPtr sourceManager,
    IntPtr source,
    string name
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100