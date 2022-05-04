---
title: Wombat::MamdaOptionFields
summary: Maintains a cache of common options related field descriptors. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionFields



Maintains a cache of common options related field descriptors. 

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaOptionFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties)<br>Set the dictionary for common options fields. Maintains a cache of MamaFieldDescriptors for common options related fields. The  |
| bool | **[isSet](classWombat_1_1MamdaOptionFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaOptionFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[CONTRACT_SYMBOL](classWombat_1_1MamdaOptionFields.html#variable-contract-symbol)**  |
| MamaFieldDescriptor | **[UNDERLYING_SYMBOL](classWombat_1_1MamdaOptionFields.html#variable-underlying-symbol)**  |
| MamaFieldDescriptor | **[EXPIRATION_DATE](classWombat_1_1MamdaOptionFields.html#variable-expiration-date)**  |
| MamaFieldDescriptor | **[STRIKE_PRICE](classWombat_1_1MamdaOptionFields.html#variable-strike-price)**  |
| MamaFieldDescriptor | **[PUT_CALL](classWombat_1_1MamdaOptionFields.html#variable-put-call)**  |
| MamaFieldDescriptor | **[EXERCISE_STYLE](classWombat_1_1MamdaOptionFields.html#variable-exercise-style)**  |
| MamaFieldDescriptor | **[OPEN_INTEREST](classWombat_1_1MamdaOptionFields.html#variable-open-interest)**  |

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

Set the dictionary for common options fields. Maintains a cache of MamaFieldDescriptors for common options related fields. The 

**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary
  * **properties** A NameValueCollection object containing field mappings. (See [MamdaFields](classWombat_1_1MamdaFields.html) for more information)


`properties` parameter allows users of the API to map the common dictionary names to something else if they are beig published under different names.


### function isSet

```csharp
static bool isSet()
```


### function reset

```csharp
static void reset()
```


## Public Attributes Documentation

### variable CONTRACT_SYMBOL

```csharp
static MamaFieldDescriptor CONTRACT_SYMBOL;
```


### variable UNDERLYING_SYMBOL

```csharp
static MamaFieldDescriptor UNDERLYING_SYMBOL;
```


### variable EXPIRATION_DATE

```csharp
static MamaFieldDescriptor EXPIRATION_DATE;
```


### variable STRIKE_PRICE

```csharp
static MamaFieldDescriptor STRIKE_PRICE;
```


### variable PUT_CALL

```csharp
static MamaFieldDescriptor PUT_CALL;
```


### variable EXERCISE_STYLE

```csharp
static MamaFieldDescriptor EXERCISE_STYLE;
```


### variable OPEN_INTEREST

```csharp
static MamaFieldDescriptor OPEN_INTEREST;
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100