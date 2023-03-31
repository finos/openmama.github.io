---
title: com::wombat::mamda::MamdaStaleListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaStaleListener



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onStale](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |

## Detailed Description

```java
class com::wombat::mamda::MamdaStaleListener;
```


[MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html) defines an interface for handling changes in staleness notifications for a [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html). 

## Public Functions Documentation

### function onStale

```java
void onStale(
    MamdaSubscription subscription,
    short quality
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) on which the data quality event fired. 
  * **quality** Can be MamaQuality.QUALITY_OK, MamaQuality.QUALITY_MAYBE_STALE, MamaQuality.QUALITY_PARTIAL_STALE or MamaQuality.QUALITY_STALE 


Invoked in response to the onQuality() callback for the underlying MamaSubscription. Typically invoked in response to an underlying symbol level sequence number gap being detected.


-------------------------------

Updated on 2023-03-31 at 15:30:35 +0100