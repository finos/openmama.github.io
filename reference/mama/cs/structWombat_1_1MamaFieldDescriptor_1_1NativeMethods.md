---
title: Wombat::MamaFieldDescriptor::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldDescriptor::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaFieldDescriptor_destroy](structWombat_1_1MamaFieldDescriptor_1_1NativeMethods.html#function-mamafielddescriptor-destroy)**(IntPtr handle) |
| IntPtr | **[mamaFieldDescriptor_getName](structWombat_1_1MamaFieldDescriptor_1_1NativeMethods.html#function-mamafielddescriptor-getname)**(IntPtr handle) |
| ushort | **[mamaFieldDescriptor_getFid](structWombat_1_1MamaFieldDescriptor_1_1NativeMethods.html#function-mamafielddescriptor-getfid)**(IntPtr handle) |
| int | **[mamaFieldDescriptor_getType](structWombat_1_1MamaFieldDescriptor_1_1NativeMethods.html#function-mamafielddescriptor-gettype)**(IntPtr handle) |
| IntPtr | **[mamaFieldDescriptor_getTypeName](structWombat_1_1MamaFieldDescriptor_1_1NativeMethods.html#function-mamafielddescriptor-gettypename)**(IntPtr handle) |
| int | **[mamaFieldDescriptor_create](structWombat_1_1MamaFieldDescriptor_1_1NativeMethods.html#function-mamafielddescriptor-create)**(ref IntPtr handle, int fid, int type, string name) |

## Public Functions Documentation

### function mamaFieldDescriptor_destroy

```csharp
int mamaFieldDescriptor_destroy(
    IntPtr handle
)
```


### function mamaFieldDescriptor_getName

```csharp
IntPtr mamaFieldDescriptor_getName(
    IntPtr handle
)
```


### function mamaFieldDescriptor_getFid

```csharp
ushort mamaFieldDescriptor_getFid(
    IntPtr handle
)
```


### function mamaFieldDescriptor_getType

```csharp
int mamaFieldDescriptor_getType(
    IntPtr handle
)
```


### function mamaFieldDescriptor_getTypeName

```csharp
IntPtr mamaFieldDescriptor_getTypeName(
    IntPtr handle
)
```


### function mamaFieldDescriptor_create

```csharp
int mamaFieldDescriptor_create(
    ref IntPtr handle,
    int fid,
    int type,
    string name
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100