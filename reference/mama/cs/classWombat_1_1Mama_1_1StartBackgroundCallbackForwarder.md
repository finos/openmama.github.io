---
title: Wombat::Mama::StartBackgroundCallbackForwarder
summary: This class is used for forward callback events from the native mama_startBackground function to the client's of this class. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Mama::StartBackgroundCallbackForwarder



This class is used for forward callback events from the native mama_startBackground function to the client's of this class. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[StartBackgroundCompleteDelegate](classWombat_1_1Mama_1_1StartBackgroundCallbackForwarder.html#function-startbackgroundcompletedelegate)**([MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status)<br>Delegate is use  |
| | **[StartBackgroundCallbackForwarder](classWombat_1_1Mama_1_1StartBackgroundCallbackForwarder.html#function-startbackgroundcallbackforwarder)**([MamaStartBackgroundCallback](interfaceWombat_1_1MamaStartBackgroundCallback.html) callback) |

## Public Functions Documentation

### function StartBackgroundCompleteDelegate

```csharp
delegate void StartBackgroundCompleteDelegate(
    MamaStatus.mamaStatus status
)
```

Delegate is use 

**Parameters**: 

  * **status** The status returned from mama_start. 


### function StartBackgroundCallbackForwarder

```csharp
StartBackgroundCallbackForwarder(
    MamaStartBackgroundCallback callback
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100