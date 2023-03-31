---
title: Wombat::MamdaQualityListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQualityListener



 [More...](#detailed-description)


`#include <MamdaQualityListener.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onQuality](classWombat_1_1MamdaQualityListener.html#function-onquality)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, mamaQuality quality) =0 |
| virtual | **[~MamdaQualityListener](classWombat_1_1MamdaQualityListener.html#function-~mamdaqualitylistener)**() |

## Detailed Description

```cpp
class Wombat::MamdaQualityListener;
```


[MamdaQualityListener](classWombat_1_1MamdaQualityListener.html) defines an interface for handling changes in quality notifications for a [MamdaSubscription](classWombat_1_1MamdaSubscription.html). 

## Public Functions Documentation

### function onQuality

```cpp
virtual void onQuality(
    MamdaSubscription * subscription,
    mamaQuality quality
) =0
```


### function ~MamdaQualityListener

```cpp
inline virtual ~MamdaQualityListener()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100