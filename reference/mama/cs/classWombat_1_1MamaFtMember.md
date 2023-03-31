---
title: Wombat::MamaFtMember
summary: A member of a MAMA fault tolerance group 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFtMember



A member of a MAMA fault tolerance group 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

Inherited by [Wombat.MamaBridgeFtMember](classWombat_1_1MamaBridgeFtMember.html), [Wombat.MamaMulticastFtMember](classWombat_1_1MamaMulticastFtMember.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFtMember](classWombat_1_1MamaFtMember.html#function-mamaftmember)**() |
| void | **[create](classWombat_1_1MamaFtMember.html#function-create)**()<br>Create object. This function is typically followed by MamaFtMember.setup and [MamaFtMember.activate]() |
| void | **[setup](classWombat_1_1MamaFtMember.html#function-setup)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaFtMemberCallback](interfaceWombat_1_1MamaFtMemberCallback.html) callback, [MamaTransport](classWombat_1_1MamaTransport.html) transport, string groupName, uint weight, double heartbeatInterval, double timeoutInterval, object closure) |
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

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setupFtType](classWombat_1_1MamaFtMember.html#function-setupfttype)**(mamaFtType ftType, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaFtMemberCallback](interfaceWombat_1_1MamaFtMemberCallback.html) callback, [MamaTransport](classWombat_1_1MamaTransport.html) transport, string groupName, uint weight, double heartbeatInterval, double timeoutInterval, object closure) |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaFtMember.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]() |

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

### function MamaFtMember

```csharp
MamaFtMember()
```


### function create

```csharp
void create()
```

Create object. This function is typically followed by MamaFtMember.setup and [MamaFtMember.activate]()

### function setup

```csharp
void setup(
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


### function activate

```csharp
void activate()
```

Activate the MAMA fault tolerance group member. 

### function deactivate

```csharp
void deactivate()
```

Deactivate the MAMA fault tolerance group member. 

### function isActive

```csharp
bool isActive()
```

Get whether the MAMA fault tolerance member is actively running (not related to its state). Use mamaFtMember.getState() to determine the actual state of the member. 

### function getGroupName

```csharp
string getGroupName()
```

Get the group name to which this MAMA FT member belongs. 

### function getWeight

```csharp
uint getWeight()
```

Get the fault tolerance weight of the MAMA FT member. 

### function getHeartbeatInterval

```csharp
double getHeartbeatInterval()
```

Get the fault tolerance heartbeat interval of the MAMA FT member. 

### function getTimeoutInterval

```csharp
double getTimeoutInterval()
```

Get the fault tolerance timeout interval of the MAMA FT member. 

### function getClosure

```csharp
object getClosure()
```

Get the closure argument (provided in the mamaFtMember.create() function) of the MAMA FT member. 

### function setWeight

```csharp
void setWeight(
    uint value
)
```

Set the fault tolerance weight of the MAMA FT member. The FT weight can be changed dynamically, if desired. The member with the highest weight will become the active member. 

### function setInstanceId

```csharp
void setInstanceId(
    string id
)
```

Set the instance ID of the MAMA FT member 

The instance ID is used to uniquely identify members of a fault tolerant group. Most applications should allow the MAMA API to automatically set the instance ID and this function would not be called. If not set explicitly before activation, then the instance ID is automatically set according to the following format: 

{group-name}.{hex-ip-addr}.{hex-pid}

For example, if the group name is "FOO", the IP address is 192.168.187.9, and the PId is 10777, the default instance ID would be:

FOO.c0a8bb9.2a19 


### function mamaFtStateToString

```csharp
static string mamaFtStateToString(
    mamaFtState state
)
```

Convert a fault tolerant state to a string 

## Protected Functions Documentation

### function setupFtType

```csharp
void setupFtType(
    mamaFtType ftType,
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


### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100