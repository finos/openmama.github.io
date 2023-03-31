---
title: Wombat::MamaInbox
summary: A class for processing point-to-point messaging 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaInbox



A class for processing point-to-point messaging 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaInbox](classWombat_1_1MamaInbox.html#function-mamainbox)**()<br>Construct an inbox.  |
| void | **[create](classWombat_1_1MamaInbox.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaInboxCallback](interfaceWombat_1_1MamaInboxCallback.html) callback, object closure)<br>Creates an inbox and stores at the address specified by the calling client.  |
| void | **[create](classWombat_1_1MamaInbox.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaInboxCallback](interfaceWombat_1_1MamaInboxCallback.html) callback)<br>Creates an inbox and stores at the address specified by the calling client.  |
| void | **[create](classWombat_1_1MamaInbox.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaInboxCallback](interfaceWombat_1_1MamaInboxCallback.html) callback, object closure)<br>Creates an inbox and stores at the address specified by the calling client. Uses a default queue. This functionality is no longer supported.  |
| void | **[destroy](classWombat_1_1MamaInbox.html#function-destroy)**()<br>A synonym to the [MamaWrapper.Dispose]() method.  |
| object | **[getClosure](classWombat_1_1MamaInbox.html#function-getclosure)**()<br>Returns the user supplied data passed to create.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaInbox.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]() |

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

### function MamaInbox

```csharp
MamaInbox()
```

Construct an inbox. 

### function create

```csharp
void create(
    MamaTransport transport,
    MamaQueue queue,
    MamaInboxCallback callback,
    object closure
)
```

Creates an inbox and stores at the address specified by the calling client. 

**Parameters**: 

  * **transport** The mamaTransport being used. 
  * **queue** Optional mamaQueue. Will use default queue if null. 
  * **callback** A callback interface invoked in response to a p2p message being received or when an error is encountered during p2p messaging. 
  * **closure** User supplied data 


### function create

```csharp
void create(
    MamaTransport transport,
    MamaQueue queue,
    MamaInboxCallback callback
)
```

Creates an inbox and stores at the address specified by the calling client. 

**Parameters**: 

  * **transport** The mamaTransport being used. 
  * **queue** Optional mamaQueue. Will use default queue if null. 
  * **callback** A callback interface invoked in response to a p2p message being received or when an error is encountered during p2p messaging. 


### function create

```csharp
void create(
    MamaTransport transport,
    MamaInboxCallback callback,
    object closure
)
```

Creates an inbox and stores at the address specified by the calling client. Uses a default queue. This functionality is no longer supported. 

**Parameters**: 

  * **transport** The mamaTransport being used. 
  * **callback** A callback interface invoked in response to a p2p message being received or hen an error is encountered during p2p messaging. 
  * **closure** User supplied data. 


### function destroy

```csharp
void destroy()
```

A synonym to the [MamaWrapper.Dispose]() method. 

### function getClosure

```csharp
object getClosure()
```

Returns the user supplied data passed to create. 

**Return**: The user supplied data passed to create. 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100