---
title: com::wombat::mamda::examples::MamdaMultiPartTicker::MultiPartHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaMultiPartTicker::MultiPartHandler



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMultiParticipantHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onConsolidatedCreate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaMultiPartTicker_1_1MultiPartHandler.html#function-onconsolidatedcreate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html) manager) |
| void | **[onParticipantCreate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaMultiPartTicker_1_1MultiPartHandler.html#function-onparticipantcreate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html) manager, String particpantId, MamaBoolean isPrimary) |

## Detailed Description

```java
class com::wombat::mamda::examples::MamdaMultiPartTicker::MultiPartHandler;
```


Implementation of the `[MamdaMultiParticipantHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantHandler.html)` interface.

Here we are adding a trade and quote listener for every participant and consolidated update as part of the underlying group subscription. The assumption here is that we are interested in all trade and quote information for all participants. 

## Public Functions Documentation

### function onConsolidatedCreate

```java
inline void onConsolidatedCreate(
    MamdaSubscription subscription,
    MamdaMultiParticipantManager manager
)
```


### function onParticipantCreate

```java
inline void onParticipantCreate(
    MamdaSubscription subscription,
    MamdaMultiParticipantManager manager,
    String particpantId,
    MamaBoolean isPrimary
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100