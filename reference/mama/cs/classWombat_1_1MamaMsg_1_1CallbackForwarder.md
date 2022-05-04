---
title: Wombat::MamaMsg::CallbackForwarder
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsg::CallbackForwarder





## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[MamaMessageIteratorDelegate](classWombat_1_1MamaMsg_1_1CallbackForwarder.html#function-mamamessageiteratordelegate)**(IntPtr msg, IntPtr field, IntPtr closure) |
| | **[CallbackForwarder](classWombat_1_1MamaMsg_1_1CallbackForwarder.html#function-callbackforwarder)**([MamaMsg](classWombat_1_1MamaMsg.html) sender, [MamaMsgFieldIterator](interfaceWombat_1_1MamaMsgFieldIterator.html) callback, object closure) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [MamaMsgFieldIterator](interfaceWombat_1_1MamaMsgFieldIterator.html) | **[mCallback](classWombat_1_1MamaMsg_1_1CallbackForwarder.html#variable-mcallback)**  |
| object | **[mClosure](classWombat_1_1MamaMsg_1_1CallbackForwarder.html#variable-mclosure)**  |

## Public Functions Documentation

### function MamaMessageIteratorDelegate

```csharp
delegate void MamaMessageIteratorDelegate(
    IntPtr msg,
    IntPtr field,
    IntPtr closure
)
```


### function CallbackForwarder

```csharp
CallbackForwarder(
    MamaMsg sender,
    MamaMsgFieldIterator callback,
    object closure
)
```


## Public Attributes Documentation

### variable mCallback

```csharp
MamaMsgFieldIterator mCallback;
```


### variable mClosure

```csharp
object mClosure;
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100