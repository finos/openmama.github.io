---
title: Wombat::MamaIo::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaIo::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaIo_create](structWombat_1_1MamaIo_1_1NativeMethods.html#function-mamaio-create)**(ref IntPtr result, IntPtr queue, uint descriptor, MamaIoDelegate action, int ioType, IntPtr closure) |
| int | **[mamaIo_getDescriptor](structWombat_1_1MamaIo_1_1NativeMethods.html#function-mamaio-getdescriptor)**(IntPtr io, ref uint descriptor) |
| int | **[mamaIo_destroy](structWombat_1_1MamaIo_1_1NativeMethods.html#function-mamaio-destroy)**(IntPtr io) |

## Public Functions Documentation

### function mamaIo_create

```csharp
int mamaIo_create(
    ref IntPtr result,
    IntPtr queue,
    uint descriptor,
    MamaIoDelegate action,
    int ioType,
    IntPtr closure
)
```


### function mamaIo_getDescriptor

```csharp
int mamaIo_getDescriptor(
    IntPtr io,
    ref uint descriptor
)
```


### function mamaIo_destroy

```csharp
int mamaIo_destroy(
    IntPtr io
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100