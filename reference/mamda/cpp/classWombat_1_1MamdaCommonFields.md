---
title: Wombat::MamdaCommonFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaCommonFields



 [More...](#detailed-description)


`#include <MamdaCommonFields.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaCommonFields.html#function-setdictionary)**(const MamaDictionary & dictionary) |
| void | **[reset](classWombat_1_1MamdaCommonFields.html#function-reset)**() |
| bool | **[isSet](classWombat_1_1MamdaCommonFields.html#function-isset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const MamaFieldDescriptor * | **[SYMBOL](classWombat_1_1MamdaCommonFields.html#variable-symbol)**  |
| const MamaFieldDescriptor * | **[ISSUE_SYMBOL](classWombat_1_1MamdaCommonFields.html#variable-issue-symbol)**  |
| const MamaFieldDescriptor * | **[INDEX_SYMBOL](classWombat_1_1MamdaCommonFields.html#variable-index-symbol)**  |
| const MamaFieldDescriptor * | **[PART_ID](classWombat_1_1MamdaCommonFields.html#variable-part-id)**  |
| const MamaFieldDescriptor * | **[SEQ_NUM](classWombat_1_1MamdaCommonFields.html#variable-seq-num)**  |
| const MamaFieldDescriptor * | **[SRC_TIME](classWombat_1_1MamdaCommonFields.html#variable-src-time)**  |
| const MamaFieldDescriptor * | **[LINE_TIME](classWombat_1_1MamdaCommonFields.html#variable-line-time)**  |
| const MamaFieldDescriptor * | **[ACTIVITY_TIME](classWombat_1_1MamdaCommonFields.html#variable-activity-time)**  |
| const MamaFieldDescriptor * | **[SEND_TIME](classWombat_1_1MamdaCommonFields.html#variable-send-time)**  |
| const MamaFieldDescriptor * | **[PUB_ID](classWombat_1_1MamdaCommonFields.html#variable-pub-id)**  |
| const MamaFieldDescriptor * | **[MSG_QUAL](classWombat_1_1MamdaCommonFields.html#variable-msg-qual)**  |
| const MamaFieldDescriptor * | **[MSG_SEQ_NUM](classWombat_1_1MamdaCommonFields.html#variable-msg-seq-num)**  |
| const MamaFieldDescriptor * | **[MSG_NUM](classWombat_1_1MamdaCommonFields.html#variable-msg-num)**  |
| const MamaFieldDescriptor * | **[MSG_TOTAL](classWombat_1_1MamdaCommonFields.html#variable-msg-total)**  |
| const MamaFieldDescriptor * | **[INITIAL_TOTAL](classWombat_1_1MamdaCommonFields.html#variable-initial-total)**  |
| const MamaFieldDescriptor * | **[SENDER_ID](classWombat_1_1MamdaCommonFields.html#variable-sender-id)**  |

## Detailed Description

```cpp
class Wombat::MamdaCommonFields;
```


Utility cache of `MamaFieldDescriptor`s which are used internally by the API when accessing common fields from update messages. This class should be initialized prior to using the listener objects by calling `MamdaCommonFields.setDictionary()` with a valid dictionary object which contains these common fields. 

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


Reset the dictionary for common update fields 


### function isSet

```cpp
static bool isSet()
```


## Public Attributes Documentation

### variable SYMBOL

```cpp
static const MamaFieldDescriptor * SYMBOL;
```


### variable ISSUE_SYMBOL

```cpp
static const MamaFieldDescriptor * ISSUE_SYMBOL;
```


### variable INDEX_SYMBOL

```cpp
static const MamaFieldDescriptor * INDEX_SYMBOL;
```


### variable PART_ID

```cpp
static const MamaFieldDescriptor * PART_ID;
```


### variable SEQ_NUM

```cpp
static const MamaFieldDescriptor * SEQ_NUM;
```


### variable SRC_TIME

```cpp
static const MamaFieldDescriptor * SRC_TIME;
```


### variable LINE_TIME

```cpp
static const MamaFieldDescriptor * LINE_TIME;
```


### variable ACTIVITY_TIME

```cpp
static const MamaFieldDescriptor * ACTIVITY_TIME;
```


### variable SEND_TIME

```cpp
static const MamaFieldDescriptor * SEND_TIME;
```


### variable PUB_ID

```cpp
static const MamaFieldDescriptor * PUB_ID;
```


### variable MSG_QUAL

```cpp
static const MamaFieldDescriptor * MSG_QUAL;
```


### variable MSG_SEQ_NUM

```cpp
static const MamaFieldDescriptor * MSG_SEQ_NUM;
```


### variable MSG_NUM

```cpp
static const MamaFieldDescriptor * MSG_NUM;
```


### variable MSG_TOTAL

```cpp
static const MamaFieldDescriptor * MSG_TOTAL;
```


### variable INITIAL_TOTAL

```cpp
static const MamaFieldDescriptor * INITIAL_TOTAL;
```


### variable SENDER_ID

```cpp
static const MamaFieldDescriptor * SENDER_ID;
```


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100