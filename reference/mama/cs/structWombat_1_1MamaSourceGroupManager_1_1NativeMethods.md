---
title: Wombat::MamaSourceGroupManager::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroupManager::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaSourceGroupManager_create](structWombat_1_1MamaSourceGroupManager_1_1NativeMethods.html#function-mamasourcegroupmanager-create)**(ref IntPtr sourceGroupManager) |
| int | **[mamaSourceGroupManager_destroy](structWombat_1_1MamaSourceGroupManager_1_1NativeMethods.html#function-mamasourcegroupmanager-destroy)**(IntPtr sourceGroupManager) |
| int | **[mamaSourceGroupManager_createSourceGroup](structWombat_1_1MamaSourceGroupManager_1_1NativeMethods.html#function-mamasourcegroupmanager-createsourcegroup)**(IntPtr sourceGroupManager, string name, ref IntPtr sourceGroup) |
| int | **[mamaSourceGroupManager_findOrCreateSourceGroup](structWombat_1_1MamaSourceGroupManager_1_1NativeMethods.html#function-mamasourcegroupmanager-findorcreatesourcegroup)**(IntPtr sourceGroupManager, string name, ref IntPtr sourceGroup) |
| int | **[mamaSourceGroupManager_findSourceGroup](structWombat_1_1MamaSourceGroupManager_1_1NativeMethods.html#function-mamasourcegroupmanager-findsourcegroup)**(IntPtr sourceGroupManager, string name, ref IntPtr sourceGroup) |
| int | **[mamaSourceGroupManager_addSourceGroup](structWombat_1_1MamaSourceGroupManager_1_1NativeMethods.html#function-mamasourcegroupmanager-addsourcegroup)**(IntPtr sourceGroupManager, IntPtr sourceGroup) |

## Public Functions Documentation

### function mamaSourceGroupManager_create

```csharp
int mamaSourceGroupManager_create(
    ref IntPtr sourceGroupManager
)
```


### function mamaSourceGroupManager_destroy

```csharp
int mamaSourceGroupManager_destroy(
    IntPtr sourceGroupManager
)
```


### function mamaSourceGroupManager_createSourceGroup

```csharp
int mamaSourceGroupManager_createSourceGroup(
    IntPtr sourceGroupManager,
    string name,
    ref IntPtr sourceGroup
)
```


### function mamaSourceGroupManager_findOrCreateSourceGroup

```csharp
int mamaSourceGroupManager_findOrCreateSourceGroup(
    IntPtr sourceGroupManager,
    string name,
    ref IntPtr sourceGroup
)
```


### function mamaSourceGroupManager_findSourceGroup

```csharp
int mamaSourceGroupManager_findSourceGroup(
    IntPtr sourceGroupManager,
    string name,
    ref IntPtr sourceGroup
)
```


### function mamaSourceGroupManager_addSourceGroup

```csharp
int mamaSourceGroupManager_addSourceGroup(
    IntPtr sourceGroupManager,
    IntPtr sourceGroup
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100