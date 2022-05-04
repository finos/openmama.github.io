---
title: Wombat::MamdaStaleListener
summary: MamdaStaleListener defines an interface for handling changes in quality of the subscription through notifications for a MamdaSubscription. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaStaleListener



[MamdaStaleListener]() defines an interface for handling changes in quality of the subscription through notifications for a [MamdaSubscription](). 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onStale](interfaceWombat_1_1MamdaStaleListener.html#function-onstale)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, mamaQuality quality)<br>Invoked in response to the onQuality() callback for the underlying MamaSubscription. Typically invoked in response to an underlying symbol level sequence number gap being detected.  |

## Public Functions Documentation

### function onStale

```csharp
void onStale(
    MamdaSubscription subscription,
    mamaQuality quality
)
```

Invoked in response to the onQuality() callback for the underlying MamaSubscription. Typically invoked in response to an underlying symbol level sequence number gap being detected. 

**Parameters**: 

  * **subscription** The `[MamdaSubscription](classWombat_1_1MamdaSubscription.html)` on which the data quality event fired.
  * **quality** The quality of the subscription - see `MamaQuality`


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100