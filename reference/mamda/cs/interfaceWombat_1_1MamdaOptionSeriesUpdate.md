---
title: Wombat::MamdaOptionSeriesUpdate
summary: MamdaOptionSeriesUpdate is an interface that provides access to fields related to option series update events. Update events include adds/removes of contracts to the chain. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionSeriesUpdate



[MamdaOptionSeriesUpdate]() is an interface that provides access to fields related to option series update events. Update events include adds/removes of contracts to the chain. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) | **[getOptionContract](interfaceWombat_1_1MamdaOptionSeriesUpdate.html#function-getoptioncontract)**()<br>Get the option contract to which the most recent event applies.  |
| MamdaOptionAction | **[getOptionAction](interfaceWombat_1_1MamdaOptionSeriesUpdate.html#function-getoptionaction)**()<br>Get the most recent action.  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)**()<br>Returns the source time.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| long | **[getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |


## Public Functions Documentation

### function getOptionContract

```csharp
MamdaOptionContract getOptionContract()
```

Get the option contract to which the most recent event applies. 

**Return**: The option contract to which the most recent event applies. If the contract is new, it will have already been added to the chain. If it is being removed, it will have already been removed from the chain. 

**Reimplemented by**: [Wombat::MamdaOptionChainListener::getOptionContract](classWombat_1_1MamdaOptionChainListener.html#function-getoptioncontract)


### function getOptionAction

```csharp
MamdaOptionAction getOptionAction()
```

Get the most recent action. 

**Return**: The action related to the last series update message.

**Reimplemented by**: [Wombat::MamdaOptionChainListener::getOptionAction](classWombat_1_1MamdaOptionChainListener.html#function-getoptionaction)


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100