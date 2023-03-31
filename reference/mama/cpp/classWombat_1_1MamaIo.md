---
title: Wombat::MamaIo
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaIo



 [More...](#detailed-description)


`#include <MamaIo.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaIo](classWombat_1_1MamaIo.html#function-~mamaio)**(void ) |
| | **[MamaIo](classWombat_1_1MamaIo.html#function-mamaio)**(void ) |
| virtual void | **[create](classWombat_1_1MamaIo.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaIoCallback](classWombat_1_1MamaIoCallback.html) * action, uint32_t descriptor, mamaIoType ioType, void * closure =NULL) |
| virtual uint32_t | **[getDescriptor](classWombat_1_1MamaIo.html#function-getdescriptor)**(void ) const |
| virtual void | **[destroy](classWombat_1_1MamaIo.html#function-destroy)**() |
| virtual void * | **[getClosure](classWombat_1_1MamaIo.html#function-getclosure)**(void ) const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaIoImpl * | **[mPimpl](classWombat_1_1MamaIo.html#variable-mpimpl)**  |

## Detailed Description

```cpp
class Wombat::MamaIo;
```


A repeating IO. The callback will be repeatedly called at the specified interval until the IO is destroyed. See Mama::createMamaIo ().

The IO relies on the underlying middleware so its resolution is also dependent on the middleware. 

## Public Functions Documentation

### function ~MamaIo

```cpp
virtual ~MamaIo(
    void 
)
```


### function MamaIo

```cpp
MamaIo(
    void 
)
```


### function create

```cpp
virtual void create(
    MamaQueue * queue,
    MamaIoCallback * action,
    uint32_t descriptor,
    mamaIoType ioType,
    void * closure =NULL
)
```


**Parameters**: 

  * **queue** The event queue for the io events. NULL specifies the [Mama](classWombat_1_1Mama.html) default queue. 
  * **action** The callback to be invoked when an event occurs. 
  * **descriptor** Wait for IO on this descriptor. 
  * **ioType** Wait for occurrences of this type. See mama/io.h 
  * **closure** The caller supplied closure. 


Create an IO handler.


### function getDescriptor

```cpp
virtual uint32_t getDescriptor(
    void 
) const
```


### function destroy

```cpp
virtual void destroy()
```


### function getClosure

```cpp
virtual void * getClosure(
    void 
) const
```


**Return**: the closure. 

Return the closure for the IO.


## Public Attributes Documentation

### variable mPimpl

```cpp
MamaIoImpl * mPimpl;
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100