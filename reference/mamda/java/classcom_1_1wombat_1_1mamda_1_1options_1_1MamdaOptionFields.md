---
title: com::wombat::mamda::options::MamdaOptionFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionFields



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#function-setdictionary)**(final MamaDictionary dictionary, final Properties properties) |
| boolean | **[isSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#function-isset)**() |
| void | **[reset](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[CONTRACT_SYMBOL](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#variable-contract-symbol)**  |
| MamaFieldDescriptor | **[UNDERLYING_SYMBOL](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#variable-underlying-symbol)**  |
| MamaFieldDescriptor | **[EXPIRATION_DATE](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#variable-expiration-date)**  |
| MamaFieldDescriptor | **[STRIKE_PRICE](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#variable-strike-price)**  |
| MamaFieldDescriptor | **[PUT_CALL](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#variable-put-call)**  |
| MamaFieldDescriptor | **[OPEN_INTEREST](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#variable-open-interest)**  |
| MamaFieldDescriptor | **[EXERCISE_STYLE](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html#variable-exercise-style)**  |

## Additional inherited members

**Protected Functions inherited from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| String | **[lookupFieldName](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html#function-lookupfieldname)**(Properties properties, String defaultFieldName) |


## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionFields;
```


Maintains a cache of common options related field descriptors. 

## Public Functions Documentation

### function setDictionary

```java
static inline void setDictionary(
    final MamaDictionary dictionary,
    final Properties properties
)
```


**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary 
  * **properties** A Properties object containing field mappings. (See [MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html) for more information) 


Set the dictionary for common options fields. Maintains a cache of MamaFieldDescriptors for common options related fields. The `properties` parameter allows users of the API to map the common dictionary names to something else if they are being published under different names.


### function isSet

```java
static inline boolean isSet()
```


### function reset

```java
static inline void reset()
```


## Public Attributes Documentation

### variable CONTRACT_SYMBOL

```java
static MamaFieldDescriptor CONTRACT_SYMBOL = null;
```


### variable UNDERLYING_SYMBOL

```java
static MamaFieldDescriptor UNDERLYING_SYMBOL = null;
```


### variable EXPIRATION_DATE

```java
static MamaFieldDescriptor EXPIRATION_DATE = null;
```


### variable STRIKE_PRICE

```java
static MamaFieldDescriptor STRIKE_PRICE = null;
```


### variable PUT_CALL

```java
static MamaFieldDescriptor PUT_CALL = null;
```


### variable OPEN_INTEREST

```java
static MamaFieldDescriptor OPEN_INTEREST = null;
```


### variable EXERCISE_STYLE

```java
static MamaFieldDescriptor EXERCISE_STYLE = null;
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100