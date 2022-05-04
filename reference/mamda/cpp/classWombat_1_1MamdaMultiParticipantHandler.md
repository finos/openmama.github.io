---
title: Wombat::MamdaMultiParticipantHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMultiParticipantHandler



 [More...](#detailed-description)


`#include <MamdaMultiParticipantHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onConsolidatedCreate](classWombat_1_1MamdaMultiParticipantHandler.html#function-onconsolidatedcreate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html) & manager) =0 |
| virtual void | **[onParticipantCreate](classWombat_1_1MamdaMultiParticipantHandler.html#function-onparticipantcreate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html) & manager, const char * particpantId, bool isPrimary) =0 |
| virtual | **[~MamdaMultiParticipantHandler](classWombat_1_1MamdaMultiParticipantHandler.html#function-~mamdamultiparticipanthandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaMultiParticipantHandler;
```


The [MamdaMultiParticipantHandler](classWombat_1_1MamdaMultiParticipantHandler.html) class is an interface that allows a developer to be notified dynamically when participants are added to the list. This is useful for handling information such as NYSE, AMEX and NASDAQ listed securities (including NQDS). Access to consolidated information (i.e., best bid and offer and consolidated trade info) is also available.

Note that any actions to register per-participant or consolidated listeners can be added up front (and this callback omitted or left empty) if the participant IDs are known beforehand. 

## Public Functions Documentation

### function onConsolidatedCreate

```cpp
virtual void onConsolidatedCreate(
    MamdaSubscription * subscription,
    MamdaMultiParticipantManager & manager
) =0
```


Method invoked when the consolidated trade and BBO quote information for the security has become available. This method is invoked only if there is BBO or consolidated trade information available. 


### function onParticipantCreate

```cpp
virtual void onParticipantCreate(
    MamdaSubscription * subscription,
    MamdaMultiParticipantManager & manager,
    const char * particpantId,
    bool isPrimary
) =0
```


Method invoked when the trade and quote information for a participant has become available for the security. This method is invoked only if there is participant quote or trade information available. isPrimary is not yet supported! 


### function ~MamdaMultiParticipantHandler

```cpp
inline virtual ~MamdaMultiParticipantHandler()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100