---
title: Wombat::MamdaOptionChainViewRangeHandler
summary: Interface to handle change in a MamdaOptionChainView range. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionChainViewRangeHandler



Interface to handle change in a [MamdaOptionChainView](classWombat_1_1MamdaOptionChainView.html) range. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onOptionViewStrikeRangeReset](interfaceWombat_1_1MamdaOptionChainViewRangeHandler.html#function-onoptionviewstrikerangereset)**([MamdaOptionChainView](classWombat_1_1MamdaOptionChainView.html) view, double lowStrike, double highStrike)<br>Action to take when the strike price range is reset to a new range.  |

## Public Functions Documentation

### function onOptionViewStrikeRangeReset

```csharp
void onOptionViewStrikeRangeReset(
    MamdaOptionChainView view,
    double lowStrike,
    double highStrike
)
```

Action to take when the strike price range is reset to a new range. 

**Parameters**: 

  * **view** 
  * **lowStrike** 
  * **highStrike** 


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100