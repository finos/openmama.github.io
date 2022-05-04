---
title: Wombat::MamdaAuctionFields
summary: Cache of common Quote related field descriptors. This is required to be populated if using the MamdaQuoteListener. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionFields



Cache of common Quote related field descriptors. This is required to be populated if using the [MamdaQuoteListener](). 

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaAuctionFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties)<br>Set the dictionary for common quote fields. Maintains a cache of MamaFieldDescriptors for common quote related fields. The  |
| int | **[getMaxFid](classWombat_1_1MamdaAuctionFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaAuctionFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaAuctionFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[UNCROSS_PRICE](classWombat_1_1MamdaAuctionFields.html#variable-uncross-price)**  |
| MamaFieldDescriptor | **[UNCROSS_VOLUME](classWombat_1_1MamdaAuctionFields.html#variable-uncross-volume)**  |
| MamaFieldDescriptor | **[UNCROSS_PRICE_IND](classWombat_1_1MamdaAuctionFields.html#variable-uncross-price-ind)**  |
| int | **[MAX_FID](classWombat_1_1MamdaAuctionFields.html#variable-max-fid)**  |

## Additional inherited members

**Protected Functions inherited from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| string | **[lookupFieldName](classWombat_1_1MamdaFields.html#function-lookupfieldname)**(NameValueCollection properties, string defaultFieldName) |


## Public Functions Documentation

### function setDictionary

```csharp
static void setDictionary(
    MamaDictionary dictionary,
    NameValueCollection properties
)
```

Set the dictionary for common quote fields. Maintains a cache of MamaFieldDescriptors for common quote related fields. The 

**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary
  * **properties** A NameValueCollection object containing field mappings. (See [MamdaFields](classWombat_1_1MamdaFields.html) for more information)


`properties` parameter allows users of the API to map the common dictionary names to something else if they are beig published under different names.


### function getMaxFid

```csharp
static int getMaxFid()
```


### function isSet

```csharp
static bool isSet()
```


### function reset

```csharp
static void reset()
```


## Public Attributes Documentation

### variable UNCROSS_PRICE

```csharp
static MamaFieldDescriptor UNCROSS_PRICE = null;
```


### variable UNCROSS_VOLUME

```csharp
static MamaFieldDescriptor UNCROSS_VOLUME = null;
```


### variable UNCROSS_PRICE_IND

```csharp
static MamaFieldDescriptor UNCROSS_PRICE_IND = null;
```


### variable MAX_FID

```csharp
static int MAX_FID = 0;
```


-------------------------------

Updated on 2022-05-04 at 07:54:10 +0100