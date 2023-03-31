---
title: com::wombat::mama::examples::MamaListen
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaListen



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[main](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListen.html#function-main)**(final String[] args) |

## Detailed Description

```java
class com::wombat::mama::examples::MamaListen;
```


[MamaListen](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListen.html) - Generic [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html) API subscriber.


Illustrates the following MAMA API features:
  1. Data dictionary initialization.
  2. Examining standard fields (e.g. MdMsgType, MdMsgStatus).
  3. Walking all received fields in messages.
  4. Picking specific fields received in messages.

Examples:

1. Display data dictionary with dictionary requested from symbolNamespace
   "ORDER" (default dictionary symbolNamespace is "WOMBAT" and used in
   subsequent examples, below).

   java com.wombat.mama.MamaListen -D -d ORDER -s MSFT.ISLD

2. Subscribing to top-of-book MSFT quote from Island ITCH feed (all
   fields) where the feed handler symbolNamespace is SOURCE:

   java com.wombat.mama.MamaListen -S SOURCE -s MSFT.ISLD

3. Subscribing to top-of-book MSFT and ORCL from Island ITCH feed
   (specific fields):

   java com.wombat.mama.MamaListen -s MSFT.ISLD -s ORCL.ISLD wBidPrice wBidSize wAskPrice wAskSize wTradePrice wTradeVolume wTotalVolume

4. Subscribing to a list of symbols from a file (all fields):

   java com.wombat.mama.MamaListen -S WOMABT -f file

## Public Functions Documentation

### function main

```java
static inline void main(
    final String[] args
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100