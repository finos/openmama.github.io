---
title: Wombat::MamdaBasicMsgListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBasicMsgListener



 [More...](#detailed-description)


`#include <MamdaMsgListener.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onMsg](classWombat_1_1MamdaBasicMsgListener.html#function-onmsg)**([MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html) * subscription, const MamaMsg & msg, short msgType) =0 |
| virtual | **[~MamdaBasicMsgListener](classWombat_1_1MamdaBasicMsgListener.html#function-~mamdabasicmsglistener)**() |

## Detailed Description

```cpp
class Wombat::MamdaBasicMsgListener;
```


[MamdaBasicMsgListener](classWombat_1_1MamdaBasicMsgListener.html) defines an interface for handling MAMA messages for a [MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html). 

## Public Functions Documentation

### function onMsg

```cpp
virtual void onMsg(
    MamdaBasicSubscription * subscription,
    const MamaMsg & msg,
    short msgType
) =0
```


### function ~MamdaBasicMsgListener

```cpp
inline virtual ~MamdaBasicMsgListener()
```


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100