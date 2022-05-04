---
title: Wombat::MamaFtMember::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFtMember::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaFtMember_create](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-create)**(ref IntPtr member) |
| int | **[mamaFtMember_setup](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-setup)**(IntPtr member, mamaFtType fttype, IntPtr eventQueue, CallbackForwarder.FtMemberCallbackDelegate callback, IntPtr transport, string groupName, uint weight, double heartbeatInterval, double timeoutInterval, object closure) |
| int | **[mamaFtMember_destroy](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-destroy)**(IntPtr member) |
| int | **[mamaFtMember_activate](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-activate)**(IntPtr member) |
| int | **[mamaFtMember_deactivate](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-deactivate)**(IntPtr member) |
| int | **[mamaFtMember_isActive](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-isactive)**(IntPtr member, ref int result) |
| int | **[mamaFtMember_getGroupName](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-getgroupname)**(IntPtr member, ref IntPtr result) |
| int | **[mamaFtMember_getWeight](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-getweight)**(IntPtr member, ref uint result) |
| int | **[mamaFtMember_getHeartbeatInterval](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-getheartbeatinterval)**(IntPtr member, ref double result) |
| int | **[mamaFtMember_getTimeoutInterval](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-gettimeoutinterval)**(IntPtr member, ref double result) |
| int | **[mamaFtMember_setWeight](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-setweight)**(IntPtr member, uint value) |
| int | **[mamaFtMember_setInstanceId](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftmember-setinstanceid)**(IntPtr member, string id) |
| IntPtr | **[mamaFtStateToString](structWombat_1_1MamaFtMember_1_1NativeMethods.html#function-mamaftstatetostring)**(mamaFtState state) |

## Public Functions Documentation

### function mamaFtMember_create

```csharp
int mamaFtMember_create(
    ref IntPtr member
)
```


### function mamaFtMember_setup

```csharp
int mamaFtMember_setup(
    IntPtr member,
    mamaFtType fttype,
    IntPtr eventQueue,
    CallbackForwarder.FtMemberCallbackDelegate callback,
    IntPtr transport,
    string groupName,
    uint weight,
    double heartbeatInterval,
    double timeoutInterval,
    object closure
)
```


### function mamaFtMember_destroy

```csharp
int mamaFtMember_destroy(
    IntPtr member
)
```


### function mamaFtMember_activate

```csharp
int mamaFtMember_activate(
    IntPtr member
)
```


### function mamaFtMember_deactivate

```csharp
int mamaFtMember_deactivate(
    IntPtr member
)
```


### function mamaFtMember_isActive

```csharp
int mamaFtMember_isActive(
    IntPtr member,
    ref int result
)
```


### function mamaFtMember_getGroupName

```csharp
int mamaFtMember_getGroupName(
    IntPtr member,
    ref IntPtr result
)
```


### function mamaFtMember_getWeight

```csharp
int mamaFtMember_getWeight(
    IntPtr member,
    ref uint result
)
```


### function mamaFtMember_getHeartbeatInterval

```csharp
int mamaFtMember_getHeartbeatInterval(
    IntPtr member,
    ref double result
)
```


### function mamaFtMember_getTimeoutInterval

```csharp
int mamaFtMember_getTimeoutInterval(
    IntPtr member,
    ref double result
)
```


### function mamaFtMember_setWeight

```csharp
int mamaFtMember_setWeight(
    IntPtr member,
    uint value
)
```


### function mamaFtMember_setInstanceId

```csharp
int mamaFtMember_setInstanceId(
    IntPtr member,
    string id
)
```


### function mamaFtStateToString

```csharp
IntPtr mamaFtStateToString(
    mamaFtState state
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100