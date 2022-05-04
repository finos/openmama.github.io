---
title: Wombat::MamaIo
summary: I/O handler 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaIo



I/O handler 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaIo](classWombat_1_1MamaIo.html#function-mamaio)**()<br>M:Wombat.MamaWrapper.::ctor  |
| void | **[create](classWombat_1_1MamaIo.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaIoCallback](interfaceWombat_1_1MamaIoCallback.html) action, uint descriptor, [mamaIoType](namespaceWombat.html#enum-mamaiotype) ioType, object closure)<br>Create an IO handler.  |
| void | **[create](classWombat_1_1MamaIo.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaIoCallback](interfaceWombat_1_1MamaIoCallback.html) action, uint descriptor, [mamaIoType](namespaceWombat.html#enum-mamaiotype) ioType)<br>create(MamaQueue, MamaIoCallback, uint, mamaIoType, System.Object)  |
| void | **[create](classWombat_1_1MamaIo.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaIoCallback](interfaceWombat_1_1MamaIoCallback.html) action, long descriptor, [mamaIoType](namespaceWombat.html#enum-mamaiotype) ioType, object closure)<br>CLS compliant version of create create(MamaQueue, MamaIoCallback, uint, mamaIoType, System.Object)  |
| void | **[create](classWombat_1_1MamaIo.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaIoCallback](interfaceWombat_1_1MamaIoCallback.html) action, long descriptor, [mamaIoType](namespaceWombat.html#enum-mamaiotype) ioType)<br>CLS compliant version of create create(MamaQueue, MamaIoCallback, uint, mamaIoType, System.Object)  |
| void | **[destroy](classWombat_1_1MamaIo.html#function-destroy)**()<br>Destroy the IO. A synonym to the [MamaWrapper.Dispose]() method.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaIo.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| uint | **[descriptor](classWombat_1_1MamaIo.html#property-descriptor)** <br>Get the descriptor.  |
| long | **[descriptorClsCompliant](classWombat_1_1MamaIo.html#property-descriptorclscompliant)** <br>CLS compliant version of descriptor  |
| object | **[closure](classWombat_1_1MamaIo.html#property-closure)** <br>Return the closure for the IO.  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Public Functions Documentation

### function MamaIo

```csharp
MamaIo()
```

M:Wombat.MamaWrapper.::ctor 

### function create

```csharp
void create(
    MamaQueue queue,
    MamaIoCallback action,
    uint descriptor,
    mamaIoType ioType,
    object closure
)
```

Create an IO handler. 

**Parameters**: 

  * **queue** The event queue for the io events. null specifies the [Mama](classWombat_1_1Mama.html) default queue
  * **action** The callback to be invoked when an event occurs.
  * **descriptor** Wait for IO on this descriptor.
  * **ioType** Wait for occurences of this type.
  * **closure** The closure that is passed to the callback.


If the underlying infrastructure does not support the requested mamaIoType, create throws MamaException(MAMA_STATUS_UNSUPPORTED_IO_TYPE). For example, RV only supports READ, WRITE, and EXCEPT. LBM supports all types except ERROR 


### function create

```csharp
void create(
    MamaQueue queue,
    MamaIoCallback action,
    uint descriptor,
    mamaIoType ioType
)
```

create(MamaQueue, MamaIoCallback, uint, mamaIoType, System.Object) 

### function create

```csharp
void create(
    MamaQueue queue,
    MamaIoCallback action,
    long descriptor,
    mamaIoType ioType,
    object closure
)
```

CLS compliant version of create create(MamaQueue, MamaIoCallback, uint, mamaIoType, System.Object) 

### function create

```csharp
void create(
    MamaQueue queue,
    MamaIoCallback action,
    long descriptor,
    mamaIoType ioType
)
```

CLS compliant version of create create(MamaQueue, MamaIoCallback, uint, mamaIoType, System.Object) 

### function destroy

```csharp
void destroy()
```

Destroy the IO. A synonym to the [MamaWrapper.Dispose]() method. 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


## Public Property Documentation

### property descriptor

```csharp
uint descriptor;
```

Get the descriptor. 

### property descriptorClsCompliant

```csharp
long descriptorClsCompliant;
```

CLS compliant version of descriptor 

### property closure

```csharp
object closure;
```

Return the closure for the IO. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100