---
title: Wombat::MamaIoCallback
summary: Callback interface invoked by the MamIo handler. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaIoCallback



Callback interface invoked by the MamIo handler. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onIo](interfaceWombat_1_1MamaIoCallback.html#function-onio)**([MamaIo](classWombat_1_1MamaIo.html) io, [mamaIoType](namespaceWombat.html#enum-mamaiotype) ioType)<br>Callback invoked by the [MamaIo](classWombat_1_1MamaIo.html) handler  |

## Public Functions Documentation

### function onIo

```csharp
void onIo(
    MamaIo io,
    mamaIoType ioType
)
```

Callback invoked by the [MamaIo](classWombat_1_1MamaIo.html) handler 

**Parameters**: 

  * **io** The mamaIo handle
  * **ioType** The mamaIoType for the event.


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100