---
title: Wombat::MamdaAuctionFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionFields





## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaAuctionFields.html#function-setdictionary)**(const MamaDictionary & dictionary) |
| void | **[reset](classWombat_1_1MamdaAuctionFields.html#function-reset)**() |
| uint16_t | **[getMaxFid](classWombat_1_1MamdaAuctionFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaAuctionFields.html#function-isset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const MamaFieldDescriptor * | **[UNCROSS_PRICE](classWombat_1_1MamdaAuctionFields.html#variable-uncross-price)**  |
| const MamaFieldDescriptor * | **[UNCROSS_VOLUME](classWombat_1_1MamdaAuctionFields.html#variable-uncross-volume)**  |
| const MamaFieldDescriptor * | **[UNCROSS_PRICE_IND](classWombat_1_1MamdaAuctionFields.html#variable-uncross-price-ind)**  |
| const MamaFieldDescriptor * | **[AUCTION_TIME](classWombat_1_1MamdaAuctionFields.html#variable-auction-time)**  |

## Public Functions Documentation

### function setDictionary

```cpp
static void setDictionary(
    const MamaDictionary & dictionary
)
```


### function reset

```cpp
static void reset()
```


Reset the dictionary for fundamental update fields 


### function getMaxFid

```cpp
static uint16_t getMaxFid()
```


### function isSet

```cpp
static bool isSet()
```


## Public Attributes Documentation

### variable UNCROSS_PRICE

```cpp
static const MamaFieldDescriptor * UNCROSS_PRICE;
```


### variable UNCROSS_VOLUME

```cpp
static const MamaFieldDescriptor * UNCROSS_VOLUME;
```


### variable UNCROSS_PRICE_IND

```cpp
static const MamaFieldDescriptor * UNCROSS_PRICE_IND;
```


### variable AUCTION_TIME

```cpp
static const MamaFieldDescriptor * AUCTION_TIME;
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100