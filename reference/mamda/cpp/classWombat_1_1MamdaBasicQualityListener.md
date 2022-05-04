---
title: Wombat::MamdaBasicQualityListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBasicQualityListener



 [More...](#detailed-description)


`#include <MamdaQualityListener.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onQuality](classWombat_1_1MamdaBasicQualityListener.html#function-onquality)**([MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html) * subscription, mamaQuality quality) =0 |
| virtual | **[~MamdaBasicQualityListener](classWombat_1_1MamdaBasicQualityListener.html#function-~mamdabasicqualitylistener)**() |

## Detailed Description

```cpp
class Wombat::MamdaBasicQualityListener;
```


[MamdaBasicQualityListener](classWombat_1_1MamdaBasicQualityListener.html) defines an interface for handling changes in quality notifications for a [MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html). 

## Public Functions Documentation

### function onQuality

```cpp
virtual void onQuality(
    MamdaBasicSubscription * subscription,
    mamaQuality quality
) =0
```


### function ~MamdaBasicQualityListener

```cpp
inline virtual ~MamdaBasicQualityListener()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100