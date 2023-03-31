---
title: com::wombat::mamda::options::MamdaOptionSeriesUpdate
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionSeriesUpdate



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.options.MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) | **[getOptionContract](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html#function-getoptioncontract)**() |
| char | **[getOptionAction](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html#function-getoptionaction)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final char | **[ACTION_UNKNOWN](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html#variable-action-unknown)**  |
| final char | **[ACTION_ADD](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html#variable-action-add)**  |
| final char | **[ACTION_DELETE](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html#variable-action-delete)**  |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() |
| long | **[getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() |
| MamaDateTime | **[getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() |


## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionSeriesUpdate;
```


[MamdaOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html) is an interface that provides access to fields related to option series update events. Update events include adds/removes of contracts to the chain. 

## Public Functions Documentation

### function getOptionContract

```java
MamdaOptionContract getOptionContract()
```


**Return**: The option contract to which the most recent event applies. If the contract is new, it will have already been added to the chain. If it is being removed, it will have already been removed from the chain. 

**Reimplemented by**: [com::wombat::mamda::options::MamdaOptionChainListener::getOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getoptioncontract)


Get the option contract to which the most recent event applies. 


### function getOptionAction

```java
char getOptionAction()
```


**Return**: The action related to the last series update message. 

**Reimplemented by**: [com::wombat::mamda::options::MamdaOptionChainListener::getOptionAction](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getoptionaction)


Get the most recent action. 


## Public Attributes Documentation

### variable ACTION_UNKNOWN

```java
static final char ACTION_UNKNOWN = ' ';
```


### variable ACTION_ADD

```java
static final char ACTION_ADD = 'A';
```


### variable ACTION_DELETE

```java
static final char ACTION_DELETE = 'D';
```


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100