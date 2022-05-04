---
title: Wombat::MamaBridgeFtMember
summary: A member of a MAMA fault tolerance bridge group 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBridgeFtMember



A member of a MAMA fault tolerance bridge group 

Inherits from [Wombat.MamaFtMember](classWombat_1_1MamaFtMember.html), [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| new void | **[setup](classWombat_1_1MamaBridgeFtMember.html#function-setup)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaFtMemberCallback](interfaceWombat_1_1MamaFtMemberCallback.html) callback, [MamaTransport](classWombat_1_1MamaTransport.html) transport, string groupName, uint weight, double heartbeatInterval, double timeoutInterval, object closure)<br>Set up the object. This is only an initialization function. In order to actually start the fault tolerance monitoring, use [MamaFtMember.activate]() |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaFtMember](classWombat_1_1MamaFtMember.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFtMember](classWombat_1_1MamaFtMember.html#function-mamaftmember)**() |
| void | **[create](classWombat_1_1MamaFtMember.html#function-create)**()<br>Create object. This function is typically followed by MamaFtMember.setup and [MamaFtMember.activate]() |
| void | **[activate](classWombat_1_1MamaFtMember.html#function-activate)**()<br>Activate the MAMA fault tolerance group member.  |
| void | **[deactivate](classWombat_1_1MamaFtMember.html#function-deactivate)**()<br>Deactivate the MAMA fault tolerance group member.  |
| bool | **[isActive](classWombat_1_1MamaFtMember.html#function-isactive)**()<br>Get whether the MAMA fault tolerance member is actively running (not related to its state). Use mamaFtMember.getState() to determine the actual state of the member.  |
| string | **[getGroupName](classWombat_1_1MamaFtMember.html#function-getgroupname)**()<br>Get the group name to which this MAMA FT member belongs.  |
| uint | **[getWeight](classWombat_1_1MamaFtMember.html#function-getweight)**()<br>Get the fault tolerance weight of the MAMA FT member.  |
| double | **[getHeartbeatInterval](classWombat_1_1MamaFtMember.html#function-getheartbeatinterval)**()<br>Get the fault tolerance heartbeat interval of the MAMA FT member.  |
| double | **[getTimeoutInterval](classWombat_1_1MamaFtMember.html#function-gettimeoutinterval)**()<br>Get the fault tolerance timeout interval of the MAMA FT member.  |
| object | **[getClosure](classWombat_1_1MamaFtMember.html#function-getclosure)**()<br>Get the closure argument (provided in the mamaFtMember.create() function) of the MAMA FT member.  |
| void | **[setWeight](classWombat_1_1MamaFtMember.html#function-setweight)**(uint value)<br>Set the fault tolerance weight of the MAMA FT member. The FT weight can be changed dynamically, if desired. The member with the highest weight will become the active member.  |
| void | **[setInstanceId](classWombat_1_1MamaFtMember.html#function-setinstanceid)**(string id)<br>Set the instance ID of the MAMA FT member  |
| string | **[mamaFtStateToString](classWombat_1_1MamaFtMember.html#function-mamaftstatetostring)**(mamaFtState state)<br>Convert a fault tolerant state to a string  |

**Protected Functions inherited from [Wombat.MamaFtMember](classWombat_1_1MamaFtMember.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[setupFtType](classWombat_1_1MamaFtMember.html#function-setupfttype)**(mamaFtType ftType, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaFtMemberCallback](interfaceWombat_1_1MamaFtMemberCallback.html) callback, [MamaTransport](classWombat_1_1MamaTransport.html) transport, string groupName, uint weight, double heartbeatInterval, double timeoutInterval, object closure) |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaFtMember.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]() |

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
| virtual abstract [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)**() =0<br>Subclasses must do whatever is necessary with the native handle in the overridden method in order to destroy the native peer object. If the destruction went successfully, the overridden method must return [MamaStatus.mamaStatus.MAMA_STATUS_OK](classWombat_1_1MamaStatus.html#enumvalue-mama-status-ok), or a suitable error code otherwise  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Public Functions Documentation

### function setup

```csharp
new void setup(
    MamaQueue queue,
    MamaFtMemberCallback callback,
    MamaTransport transport,
    string groupName,
    uint weight,
    double heartbeatInterval,
    double timeoutInterval,
    object closure
)
```

Set up the object. This is only an initialization function. In order to actually start the fault tolerance monitoring, use [MamaFtMember.activate]()

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100