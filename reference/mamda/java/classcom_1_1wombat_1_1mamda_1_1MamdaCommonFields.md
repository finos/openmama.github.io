---
title: com::wombat::mamda::MamdaCommonFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaCommonFields



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#function-setdictionary)**(MamaDictionary dictionary, Properties properties) |
| boolean | **[isSet](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#function-isset)**() |
| void | **[reset](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-symbol)**  |
| MamaFieldDescriptor | **[ISSUE_SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-issue-symbol)**  |
| MamaFieldDescriptor | **[INDEX_SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-index-symbol)**  |
| MamaFieldDescriptor | **[PART_ID](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SEQ_NUM](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-seq-num)**  |
| MamaFieldDescriptor | **[SRC_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[SEND_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-send-time)**  |
| MamaFieldDescriptor | **[PUB_ID](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-pub-id)**  |
| MamaFieldDescriptor | **[MSG_QUAL](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-msg-qual)**  |
| MamaFieldDescriptor | **[MSG_SEQ_NUM](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-msg-seq-num)**  |
| MamaFieldDescriptor | **[MSG_NUM](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-msg-num)**  |
| MamaFieldDescriptor | **[MSG_TOTAL](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-msg-total)**  |
| MamaFieldDescriptor | **[SENDER_ID](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html#variable-sender-id)**  |

## Additional inherited members

**Protected Functions inherited from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| String | **[lookupFieldName](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html#function-lookupfieldname)**(Properties properties, String defaultFieldName) |


## Detailed Description

```java
class com::wombat::mamda::MamdaCommonFields;
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


## Public Attributes Documentation

### variable SYMBOL

```java
static MamaFieldDescriptor SYMBOL = null;
```


### variable ISSUE_SYMBOL

```java
static MamaFieldDescriptor ISSUE_SYMBOL = null;
```


### variable INDEX_SYMBOL

```java
static MamaFieldDescriptor INDEX_SYMBOL = null;
```


### variable PART_ID

```java
static MamaFieldDescriptor PART_ID = null;
```


### variable SEQ_NUM

```java
static MamaFieldDescriptor SEQ_NUM = null;
```


### variable SRC_TIME

```java
static MamaFieldDescriptor SRC_TIME = null;
```


### variable LINE_TIME

```java
static MamaFieldDescriptor LINE_TIME = null;
```


### variable ACTIVITY_TIME

```java
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable SEND_TIME

```java
static MamaFieldDescriptor SEND_TIME = null;
```


### variable PUB_ID

```java
static MamaFieldDescriptor PUB_ID = null;
```


### variable MSG_QUAL

```java
static MamaFieldDescriptor MSG_QUAL = null;
```


### variable MSG_SEQ_NUM

```java
static MamaFieldDescriptor MSG_SEQ_NUM = null;
```


### variable MSG_NUM

```java
static MamaFieldDescriptor MSG_NUM = null;
```


### variable MSG_TOTAL

```java
static MamaFieldDescriptor MSG_TOTAL = null;
```


### variable SENDER_ID

```java
static MamaFieldDescriptor SENDER_ID = null;
```


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100