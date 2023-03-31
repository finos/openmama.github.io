---
title: Wombat::MamaIoCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaIoCallback



 [More...](#detailed-description)


`#include <MamaIoCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaIoCallback](classWombat_1_1MamaIoCallback.html#function-~mamaiocallback)**(void ) |
| virtual void | **[onIo](classWombat_1_1MamaIoCallback.html#function-onio)**([MamaIo](classWombat_1_1MamaIo.html) * io, mamaIoType ioType) =0 |

## Detailed Description

```cpp
class Wombat::MamaIoCallback;
```


Subclass this to receive IO notifications. 

## Public Functions Documentation

### function ~MamaIoCallback

```cpp
inline virtual ~MamaIoCallback(
    void 
)
```


### function onIo

```cpp
virtual void onIo(
    MamaIo * io,
    mamaIoType ioType
) =0
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100