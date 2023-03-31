---
title: com::wombat::mamda::MamdaAuctionFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaAuctionFields



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html#function-setdictionary)**(MamaDictionary dictionary, Properties properties) |
| boolean | **[isSet](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html#function-isset)**() |
| void | **[reset](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html#function-reset)**() |
| int | **[getMaxFid](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html#function-getmaxfid)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[UNCROSS_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html#variable-uncross-price)**  |
| MamaFieldDescriptor | **[UNCROSS_VOLUME](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html#variable-uncross-volume)**  |
| MamaFieldDescriptor | **[UNCROSS_PRICE_IND](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html#variable-uncross-price-ind)**  |
| int | **[MAX_FID](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html#variable-max-fid)**  |

## Additional inherited members

**Protected Functions inherited from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| String | **[lookupFieldName](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html#function-lookupfieldname)**(Properties properties, String defaultFieldName) |


## Detailed Description

```java
class com::wombat::mamda::MamdaAuctionFields;
```


Maintains a cache of common update field descriptors. 

## Public Functions Documentation

### function setDictionary

```java
static inline void setDictionary(
    MamaDictionary dictionary,
    Properties properties
)
```


**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary 
  * **properties** A Properties object containing field mappings. (See [MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html) for more information) 


Set the dictionary for common update fields. Maintains a cache of MamaFieldDescriptors for common update related fields. The `properties` parameter allows users of the API to map the common dictionary names to something else if they are being published under different names.


### function isSet

```java
static inline boolean isSet()
```


### function reset

```java
static inline void reset()
```


### function getMaxFid

```java
static inline int getMaxFid()
```


## Public Attributes Documentation

### variable UNCROSS_PRICE

```java
static MamaFieldDescriptor UNCROSS_PRICE = null;
```


### variable UNCROSS_VOLUME

```java
static MamaFieldDescriptor UNCROSS_VOLUME = null;
```


### variable UNCROSS_PRICE_IND

```java
static MamaFieldDescriptor UNCROSS_PRICE_IND = null;
```


### variable MAX_FID

```java
static int MAX_FID = 0;
```


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100