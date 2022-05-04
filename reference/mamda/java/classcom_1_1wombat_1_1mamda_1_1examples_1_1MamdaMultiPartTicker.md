---
title: com::wombat::mamda::examples::MamdaMultiPartTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaMultiPartTicker



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[main](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaMultiPartTicker.html#function-main)**(final String[] args) |

## Detailed Description

```java
class com::wombat::mamda::examples::MamdaMultiPartTicker;
```


Example program illustrating the use of MAMDA with multi participant group subscriptions.

In this example, we create one ComboTicker for _each_ of the individual participants and consolidated member of the [MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html) (i.e., one each for the BBO and each participant). (The same instance could be used for all. However, a separate MamdaMsglistener instance must be used for each.)

If the developer only wanted a subset of these members, then those could be selected in his/her implementation of [MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html). Similarly, the developer may not want to create listeners for both trades and quotes for each participant.

Note: if trades are reported, they will be reported twice: once for the participant and once for the consolidated. Depending upon exchange and oversight rules, there may be differences between the trade reports for a participant versus the same report for the consolidated. For example, by certain rules, a trade may qualify to update the official last price for an exchange but not the consolidated last price. The aggregate volume traded will, of course, be different for each participant and the consolidated. 

## Public Functions Documentation

### function main

```java
static inline void main(
    final String[] args
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100