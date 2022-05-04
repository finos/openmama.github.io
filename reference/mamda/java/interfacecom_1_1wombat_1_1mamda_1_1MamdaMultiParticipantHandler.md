---
title: com::wombat::mamda::MamdaMultiParticipantHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaMultiParticipantHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onConsolidatedCreate](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantHandler.html#function-onconsolidatedcreate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html) manager) |
| void | **[onParticipantCreate](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantHandler.html#function-onparticipantcreate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html) manager, String particpantId, MamaBoolean isPrimary) |

## Detailed Description

```java
class com::wombat::mamda::MamdaMultiParticipantHandler;
```


The [MamdaMultiParticipantHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantHandler.html) class is an interface that allows a developer to be notified dynamically when new participant updates are received on the underlying subscription. This is useful for handling information such as NYSE, AMEX and NASDAQ listed securities (including NQDS). Access to consolidated information (i.e., best bid and offer and consolidated trade info) is also available.

Note that any actions to register per-participant or consolidated listeners can be added up front (and this callback omitted or left empty) if the participant IDs are known beforehand. 

## Public Functions Documentation

### function onConsolidatedCreate

```java
void onConsolidatedCreate(
    MamdaSubscription subscription,
    MamdaMultiParticipantManager manager
)
```


Method invoked when the consolidated trade and BBO quote information for the security has become available. 

 This method is invoked only if there is BBO or consolidated trade information available. 


### function onParticipantCreate

```java
void onParticipantCreate(
    MamdaSubscription subscription,
    MamdaMultiParticipantManager manager,
    String particpantId,
    MamaBoolean isPrimary
)
```


Method invoked when the trade and quote information for a participant has become available for the security. This method is invoked only if there is participant quote or trade information available. isPrimary is reserved for future use. 


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100