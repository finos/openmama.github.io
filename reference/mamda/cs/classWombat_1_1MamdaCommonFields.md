---
title: Wombat::MamdaCommonFields
summary: Maintains a cache of common update field descriptors. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaCommonFields



Maintains a cache of common update field descriptors. 

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaCommonFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties)<br>Set the dictionary for common update fields. Maintains a cache of MamaFieldDescriptors for common update related fields. The  |
| bool | **[isSet](classWombat_1_1MamdaCommonFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaCommonFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SYMBOL](classWombat_1_1MamdaCommonFields.html#variable-symbol)**  |
| MamaFieldDescriptor | **[ISSUE_SYMBOL](classWombat_1_1MamdaCommonFields.html#variable-issue-symbol)**  |
| MamaFieldDescriptor | **[INDEX_SYMBOL](classWombat_1_1MamdaCommonFields.html#variable-index-symbol)**  |
| MamaFieldDescriptor | **[PART_ID](classWombat_1_1MamdaCommonFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SEQ_NUM](classWombat_1_1MamdaCommonFields.html#variable-seq-num)**  |
| MamaFieldDescriptor | **[SRC_TIME](classWombat_1_1MamdaCommonFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classWombat_1_1MamdaCommonFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classWombat_1_1MamdaCommonFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[SEND_TIME](classWombat_1_1MamdaCommonFields.html#variable-send-time)**  |
| MamaFieldDescriptor | **[PUB_ID](classWombat_1_1MamdaCommonFields.html#variable-pub-id)**  |
| MamaFieldDescriptor | **[MSG_QUAL](classWombat_1_1MamdaCommonFields.html#variable-msg-qual)**  |
| MamaFieldDescriptor | **[MSG_SEQ_NUM](classWombat_1_1MamdaCommonFields.html#variable-msg-seq-num)**  |
| MamaFieldDescriptor | **[MSG_NUM](classWombat_1_1MamdaCommonFields.html#variable-msg-num)**  |
| MamaFieldDescriptor | **[MSG_TOTAL](classWombat_1_1MamdaCommonFields.html#variable-msg-total)**  |
| MamaFieldDescriptor | **[SENDER_ID](classWombat_1_1MamdaCommonFields.html#variable-sender-id)**  |

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

Set the dictionary for common update fields. Maintains a cache of MamaFieldDescriptors for common update related fields. The 

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

### variable SYMBOL

```csharp
static MamaFieldDescriptor SYMBOL = null;
```


### variable ISSUE_SYMBOL

```csharp
static MamaFieldDescriptor ISSUE_SYMBOL = null;
```


### variable INDEX_SYMBOL

```csharp
static MamaFieldDescriptor INDEX_SYMBOL = null;
```


### variable PART_ID

```csharp
static MamaFieldDescriptor PART_ID = null;
```


### variable SEQ_NUM

```csharp
static MamaFieldDescriptor SEQ_NUM = null;
```


### variable SRC_TIME

```csharp
static MamaFieldDescriptor SRC_TIME = null;
```


### variable LINE_TIME

```csharp
static MamaFieldDescriptor LINE_TIME = null;
```


### variable ACTIVITY_TIME

```csharp
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable SEND_TIME

```csharp
static MamaFieldDescriptor SEND_TIME = null;
```


### variable PUB_ID

```csharp
static MamaFieldDescriptor PUB_ID = null;
```


### variable MSG_QUAL

```csharp
static MamaFieldDescriptor MSG_QUAL = null;
```


### variable MSG_SEQ_NUM

```csharp
static MamaFieldDescriptor MSG_SEQ_NUM = null;
```


### variable MSG_NUM

```csharp
static MamaFieldDescriptor MSG_NUM = null;
```


### variable MSG_TOTAL

```csharp
static MamaFieldDescriptor MSG_TOTAL = null;
```


### variable SENDER_ID

```csharp
static MamaFieldDescriptor SENDER_ID = null;
```


-------------------------------

Updated on 2022-05-04 at 07:54:10 +0100