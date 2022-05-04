---
title: Wombat::MamaStartBackgroundCallback
summary: This interface defines a callback function that is used when starting mama with the mama_startBackground function. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaStartBackgroundCallback



This interface defines a callback function that is used when starting mama with the mama_startBackground function. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onStartComplete](interfaceWombat_1_1MamaStartBackgroundCallback.html#function-onstartcomplete)**([MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status)<br>Called whenever mama stop is invoked and the mama_start function finishes blocking.  |

## Public Functions Documentation

### function onStartComplete

```csharp
void onStartComplete(
    MamaStatus.mamaStatus status
)
```

Called whenever mama stop is invoked and the mama_start function finishes blocking. 

**Parameters**: 

  * **status** The result code returned from the mama_start function. 


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100