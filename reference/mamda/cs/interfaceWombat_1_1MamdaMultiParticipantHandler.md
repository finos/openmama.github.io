---
title: Wombat::MamdaMultiParticipantHandler
summary: The MamdaMultiParticipantHandler class is an interface that allows a developer to be notified dynamically when new partipant updates are received on the underlying subscription. This is useful for handling information such as NYSE, AMEX and NASDAQ listed securities (including NQDS). Access to consolidated information (i.e., best bid and offer and consolidated trade info) is also available. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMultiParticipantHandler



The [MamdaMultiParticipantHandler]() class is an interface that allows a developer to be notified dynamically when new partipant updates are received on the underlying subscription. This is useful for handling information such as NYSE, AMEX and NASDAQ listed securities (including NQDS). Access to consolidated information (i.e., best bid and offer and consolidated trade info) is also available.  [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onConsolidatedCreate](interfaceWombat_1_1MamdaMultiParticipantHandler.html#function-onconsolidatedcreate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html) manager)<br>Method invoked when the consolidated trade and BBO quote information for the security has become available. This method is invoked only if there is BBO or consolidated trade information available.  |
| void | **[onParticipantCreate](interfaceWombat_1_1MamdaMultiParticipantHandler.html#function-onparticipantcreate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html) manager, string particpantId, NullableBool isPrimary)<br>Method invoked when the trade and quote information for a participant has become available for the security. This method is invoked only if there is participant quote or trade information available. isPrimary is not yet supported!  |

## Detailed Description

```csharp
class Wombat::MamdaMultiParticipantHandler;
```

The [MamdaMultiParticipantHandler]() class is an interface that allows a developer to be notified dynamically when new partipant updates are received on the underlying subscription. This is useful for handling information such as NYSE, AMEX and NASDAQ listed securities (including NQDS). Access to consolidated information (i.e., best bid and offer and consolidated trade info) is also available. 

Note that any actions to register per-participant or consolidated listeners can be added up front (and this callback omitted or left empty) if the participant IDs are known beforehand. 

## Public Functions Documentation

### function onConsolidatedCreate

```csharp
void onConsolidatedCreate(
    MamdaSubscription subscription,
    MamdaMultiParticipantManager manager
)
```

Method invoked when the consolidated trade and BBO quote information for the security has become available. This method is invoked only if there is BBO or consolidated trade information available. 

**Parameters**: 

  * **subscription** 
  * **manager** 


### function onParticipantCreate

```csharp
void onParticipantCreate(
    MamdaSubscription subscription,
    MamdaMultiParticipantManager manager,
    string particpantId,
    NullableBool isPrimary
)
```

Method invoked when the trade and quote information for a participant has become available for the security. This method is invoked only if there is participant quote or trade information available. isPrimary is not yet supported! 

**Parameters**: 

  * **subscription** 
  * **manager** 
  * **particpantId** 
  * **isPrimary** 


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100