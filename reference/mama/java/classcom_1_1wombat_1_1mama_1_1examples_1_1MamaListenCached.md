---
title: com::wombat::mama::examples::MamaListenCached
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaListenCached



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[main](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached.html#function-main)**(final String[] args) |

## Detailed Description

```java
class com::wombat::mama::examples::MamaListenCached;
```


[MamaListenCached](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached.html) example program is used to test the [MamaFieldCache](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html).

It creates a local cache for the subscription and prints out all the data each time a delta arrives.

Verify option can be used to check the integrity of the cache against the feed cache every configurable interval. 

## Public Functions Documentation

### function main

```java
static inline void main(
    final String[] args
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100