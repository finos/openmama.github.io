---
title: Wombat::MamaWrapper
summary: Base class for all wrapped native objects. Provides common facilities to the base classes. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaWrapper



Base class for all wrapped native objects. Provides common facilities to the base classes. 

Inherits from IDisposable

Inherited by [Wombat.MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html), [Wombat.MamaBridge](classWombat_1_1MamaBridge.html), [Wombat.MamaClientProfile](classWombat_1_1MamaClientProfile.html), [Wombat.MamaDictionary](classWombat_1_1MamaDictionary.html), [Wombat.MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html), [Wombat.MamaFtMember](classWombat_1_1MamaFtMember.html), [Wombat.MamaInbox](classWombat_1_1MamaInbox.html), [Wombat.MamaIo](classWombat_1_1MamaIo.html), [Wombat.MamaMsg](classWombat_1_1MamaMsg.html), [Wombat.MamaMsgField](classWombat_1_1MamaMsgField.html), [Wombat.MamaMsgIterator](classWombat_1_1MamaMsgIterator.html), [Wombat.MamaPayloadBridge](classWombat_1_1MamaPayloadBridge.html), [Wombat.MamaPrice](classWombat_1_1MamaPrice.html), [Wombat.MamaPublisher](classWombat_1_1MamaPublisher.html), [Wombat.MamaQueue](classWombat_1_1MamaQueue.html), [Wombat.MamaSource](classWombat_1_1MamaSource.html), [Wombat.MamaSourceGroup](classWombat_1_1MamaSourceGroup.html), [Wombat.MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html), [Wombat.MamaSourceManager](classWombat_1_1MamaSourceManager.html), [Wombat.MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html), [Wombat.MamaTimer](classWombat_1_1MamaTimer.html), [Wombat.MamaTransport](classWombat_1_1MamaTransport.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual abstract [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)**() =0<br>Subclasses must do whatever is necessary with the native handle in the overridden method in order to destroy the native peer object. If the destruction went successfully, the overridden method must return [MamaStatus.mamaStatus.MAMA_STATUS_OK](classWombat_1_1MamaStatus.html#enumvalue-mama-status-ok), or a suitable error code otherwise  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |

## Public Functions Documentation

### function Dispose

```csharp
void Dispose()
```

Destroys the underlying peer object and unbinds the wrapper from it. 

### function setNativeHandle

```csharp
void setNativeHandle(
    IntPtr nHandle
)
```

Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly. 

## Protected Functions Documentation

### function MamaWrapper

```csharp
MamaWrapper()
```

Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized. 

### function MamaWrapper

```csharp
MamaWrapper(
    IntPtr nativeHandle
)
```

Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized 

**Parameters**: 

  * **nativeHandle** The opaque native handle to the peer object


### function Dispose

```csharp
virtual void Dispose(
    bool disposing,
    bool destroyNativeHandle =true
)
```

The actual implementation of Dispose - called by both the Dispose method and the finalizer. 

**Parameters**: 

  * **disposing** true if the object is being disposed (false if being finalized)


**Reimplemented by**: [Wombat::MamaPublisher::Dispose](classWombat_1_1MamaPublisher.html#function-dispose)


### function DestroyNativePeer

```csharp
virtual abstract MamaStatus.mamaStatus DestroyNativePeer() =0
```

Subclasses must do whatever is necessary with the native handle in the overridden method in order to destroy the native peer object. If the destruction went successfully, the overridden method must return [MamaStatus.mamaStatus.MAMA_STATUS_OK](classWombat_1_1MamaStatus.html#enumvalue-mama-status-ok), or a suitable error code otherwise 

**Return**: [MamaStatus.mamaStatus.MAMA_STATUS_OK](classWombat_1_1MamaStatus.html#enumvalue-mama-status-ok) on success, one of the [MamaStatus.mamaStatus.MAMA_STATUS_OK](classWombat_1_1MamaStatus.html#enumvalue-mama-status-ok) error codes otherwise

**Reimplemented by**: [Wombat::MamaPayloadBridge::DestroyNativePeer](classWombat_1_1MamaPayloadBridge.html#function-destroynativepeer), [Wombat::MamaSourceManager::DestroyNativePeer](classWombat_1_1MamaSourceManager.html#function-destroynativepeer), [Wombat::MamaSourceGroupManager::DestroyNativePeer](classWombat_1_1MamaSourceGroupManager.html#function-destroynativepeer), [Wombat::MamaSource::DestroyNativePeer](classWombat_1_1MamaSource.html#function-destroynativepeer), [Wombat::MamaBridge::DestroyNativePeer](classWombat_1_1MamaBridge.html#function-destroynativepeer), [Wombat::MamaIo::DestroyNativePeer](classWombat_1_1MamaIo.html#function-destroynativepeer), [Wombat::MamaFieldDescriptor::DestroyNativePeer](classWombat_1_1MamaFieldDescriptor.html#function-destroynativepeer), [Wombat::MamaSourceGroup::DestroyNativePeer](classWombat_1_1MamaSourceGroup.html#function-destroynativepeer), [Wombat::MamaDictionary::DestroyNativePeer](classWombat_1_1MamaDictionary.html#function-destroynativepeer), [Wombat::MamaPublisher::DestroyNativePeer](classWombat_1_1MamaPublisher.html#function-destroynativepeer), [Wombat::MamaSymbolMapFile::DestroyNativePeer](classWombat_1_1MamaSymbolMapFile.html#function-destroynativepeer), [Wombat::MamaPrice::DestroyNativePeer](classWombat_1_1MamaPrice.html#function-destroynativepeer), [Wombat::MamaClientProfile::DestroyNativePeer](classWombat_1_1MamaClientProfile.html#function-destroynativepeer), [Wombat::MamaTransport::DestroyNativePeer](classWombat_1_1MamaTransport.html#function-destroynativepeer), [Wombat::MamaMsgField::DestroyNativePeer](classWombat_1_1MamaMsgField.html#function-destroynativepeer), [Wombat::MamaFtMember::DestroyNativePeer](classWombat_1_1MamaFtMember.html#function-destroynativepeer), [Wombat::MamaTimer::DestroyNativePeer](classWombat_1_1MamaTimer.html#function-destroynativepeer), [Wombat::MamaQueue::DestroyNativePeer](classWombat_1_1MamaQueue.html#function-destroynativepeer), [Wombat::MamaInbox::DestroyNativePeer](classWombat_1_1MamaInbox.html#function-destroynativepeer), [Wombat::MamaMsgIterator::DestroyNativePeer](classWombat_1_1MamaMsgIterator.html#function-destroynativepeer), [Wombat::MamaBasicSubscription::DestroyNativePeer](classWombat_1_1MamaBasicSubscription.html#function-destroynativepeer), [Wombat::MamaMsg::DestroyNativePeer](classWombat_1_1MamaMsg.html#function-destroynativepeer)


### function OnDispose

```csharp
virtual void OnDispose()
```


**Reimplemented by**: [Wombat::MamaTransport::OnDispose](classWombat_1_1MamaTransport.html#function-ondispose), [Wombat::MamaMsg::OnDispose](classWombat_1_1MamaMsg.html#function-ondispose)


## Protected Attributes Documentation

### variable nativeHandle

```csharp
IntPtr nativeHandle;
```

the handle to the native peer object 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100