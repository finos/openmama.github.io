---
title: com::wombat::mamda::options::MamdaOptionChainViewRangeHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionChainViewRangeHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onOptionViewStrikeRangeReset](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainViewRangeHandler.html#function-onoptionviewstrikerangereset)**([MamdaOptionChainView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html) view, double lowStrike, double highStrike) |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionChainViewRangeHandler;
```


Class to handle change in a [MamdaOptionChainView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html) range. 

## Public Functions Documentation

### function onOptionViewStrikeRangeReset

```java
void onOptionViewStrikeRangeReset(
    MamdaOptionChainView view,
    double lowStrike,
    double highStrike
)
```


Action to take when the strike price range is reset to a new range. 


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100