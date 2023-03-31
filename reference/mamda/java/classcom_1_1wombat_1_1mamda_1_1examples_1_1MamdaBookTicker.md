---
title: com::wombat::mamda::examples::MamdaBookTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaBookTicker



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[main](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookTicker.html#function-main)**(final String[] args) |

## Detailed Description

```java
class com::wombat::mamda::examples::MamdaBookTicker;
```


The [MamdaBookTicker](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookTicker.html) example shows how to make a subscription for an order book (similar to trades and quotes). In the callback, one gets access to the complete book after the delta has been applied. The example prints the entire book upon receipt of a recap/initial and just the top-10 for a delta (although the full book is readily available). 

## Public Functions Documentation

### function main

```java
static inline void main(
    final String[] args
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:36 +0100