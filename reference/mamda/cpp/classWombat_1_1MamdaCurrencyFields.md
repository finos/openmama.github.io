---
title: Wombat::MamdaCurrencyFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaCurrencyFields





## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaCurrencyFields.html#function-setdictionary)**(const MamaDictionary & dictionary) |
| void | **[reset](classWombat_1_1MamdaCurrencyFields.html#function-reset)**() |
| uint16_t | **[getMaxFid](classWombat_1_1MamdaCurrencyFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaCurrencyFields.html#function-isset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const MamaFieldDescriptor * | **[BID_PRICE](classWombat_1_1MamdaCurrencyFields.html#variable-bid-price)**  |
| const MamaFieldDescriptor * | **[ASK_PRICE](classWombat_1_1MamdaCurrencyFields.html#variable-ask-price)**  |

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

### variable BID_PRICE

```cpp
static const MamaFieldDescriptor * BID_PRICE;
```


### variable ASK_PRICE

```cpp
static const MamaFieldDescriptor * ASK_PRICE;
```


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100