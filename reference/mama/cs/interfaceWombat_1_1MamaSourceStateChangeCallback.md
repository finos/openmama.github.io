---
title: Wombat::MamaSourceStateChangeCallback
summary: Applications can register with MamaSourceGroup to receive state change notifications when the state of sources within the group has changed. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceStateChangeCallback



Applications can register with [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) to receive state change notifications when the state of sources within the group has changed. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onStateChanged](interfaceWombat_1_1MamaSourceStateChangeCallback.html#function-onstatechanged)**([MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) sourceGroup, [MamaSource](classWombat_1_1MamaSource.html) topWeightSource)<br>The actual callback method  |

## Public Functions Documentation

### function onStateChanged

```csharp
void onStateChanged(
    MamaSourceGroup sourceGroup,
    MamaSource topWeightSource
)
```

The actual callback method 

**Parameters**: 

  * **sourceGroup** The source group notifying the applications.
  * **topWeightSource** The top weight source in the group. Determined when reevaluate() is called.


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100