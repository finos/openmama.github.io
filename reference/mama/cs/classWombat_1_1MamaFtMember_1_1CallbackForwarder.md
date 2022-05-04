---
title: Wombat::MamaFtMember::CallbackForwarder
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFtMember::CallbackForwarder





## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[FtMemberCallbackDelegate](classWombat_1_1MamaFtMember_1_1CallbackForwarder.html#function-ftmembercallbackdelegate)**(IntPtr ftMember, string groupName, mamaFtState state, IntPtr closure) |
| | **[CallbackForwarder](classWombat_1_1MamaFtMember_1_1CallbackForwarder.html#function-callbackforwarder)**([MamaFtMember](classWombat_1_1MamaFtMember.html) target, [MamaFtMemberCallback](interfaceWombat_1_1MamaFtMemberCallback.html) callback, object closure) |
| object | **[GetClosure](classWombat_1_1MamaFtMember_1_1CallbackForwarder.html#function-getclosure)**() |

## Public Functions Documentation

### function FtMemberCallbackDelegate

```csharp
delegate void FtMemberCallbackDelegate(
    IntPtr ftMember,
    string groupName,
    mamaFtState state,
    IntPtr closure
)
```


### function CallbackForwarder

```csharp
CallbackForwarder(
    MamaFtMember target,
    MamaFtMemberCallback callback,
    object closure
)
```


### function GetClosure

```csharp
object GetClosure()
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100