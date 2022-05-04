---
title: com::wombat::mamda::MamdaSecurityStatusFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaSecurityStatusFields



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#function-setdictionary)**(MamaDictionary dictionary, Properties properties) |
| int | **[getMaxFid](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#function-getmaxfid)**() |
| boolean | **[isSet](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#function-isset)**() |
| void | **[reset](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SRC_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[SEND_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-send-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-security-status)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_QUAL](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-security-status-qual)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-security-status-time)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_ORIG](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-security-status-orig)**  |
| MamaFieldDescriptor | **[SHORT_SALE_CIRCUIT_BREAKER](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-short-sale-circuit-breaker)**  |
| MamaFieldDescriptor | **[SEQNUM](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-seqnum)**  |
| MamaFieldDescriptor | **[PART_ID](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-symbol)**  |
| MamaFieldDescriptor | **[ISSUE_SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-issue-symbol)**  |
| MamaFieldDescriptor | **[REASON](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-reason)**  |
| MamaFieldDescriptor | **[LULDINDICATOR](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-luldindicator)**  |
| MamaFieldDescriptor | **[LULDTIME](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-luldtime)**  |
| MamaFieldDescriptor | **[LULDHIGHLIMIT](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-luldhighlimit)**  |
| MamaFieldDescriptor | **[LULDLOWLIMIT](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-luldlowlimit)**  |
| int | **[MAX_FID](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html#variable-max-fid)**  |

## Additional inherited members

**Protected Functions inherited from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| String | **[lookupFieldName](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html#function-lookupfieldname)**(Properties properties, String defaultFieldName) |


## Detailed Description

```java
class com::wombat::mamda::MamdaSecurityStatusFields;
```


Maintains a cache of common security status related FieldDescriptors. 

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


Set the dictionary for common security status fields. Maintains a cache of MamaFieldDescriptors for common security status related fields. The `properties` parameter allows users of the API to map the common dictionary names to something else if they are being published under different names.


### function getMaxFid

```java
static inline int getMaxFid()
```


### function isSet

```java
static inline boolean isSet()
```


### function reset

```java
static inline void reset()
```


Reset the dictionary for security status update fields. 


## Public Attributes Documentation

### variable SRC_TIME

```java
static MamaFieldDescriptor SRC_TIME = null;
```


### variable ACTIVITY_TIME

```java
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable SEND_TIME

```java
static MamaFieldDescriptor SEND_TIME = null;
```


### variable LINE_TIME

```java
static MamaFieldDescriptor LINE_TIME = null;
```


### variable SECURITY_STATUS

```java
static MamaFieldDescriptor SECURITY_STATUS = null;
```


### variable SECURITY_STATUS_QUAL

```java
static MamaFieldDescriptor SECURITY_STATUS_QUAL = null;
```


### variable SECURITY_STATUS_TIME

```java
static MamaFieldDescriptor SECURITY_STATUS_TIME = null;
```


### variable SECURITY_STATUS_ORIG

```java
static MamaFieldDescriptor SECURITY_STATUS_ORIG = null;
```


### variable SHORT_SALE_CIRCUIT_BREAKER

```java
static MamaFieldDescriptor SHORT_SALE_CIRCUIT_BREAKER = null;
```


### variable SEQNUM

```java
static MamaFieldDescriptor SEQNUM = null;
```


### variable PART_ID

```java
static MamaFieldDescriptor PART_ID = null;
```


### variable SYMBOL

```java
static MamaFieldDescriptor SYMBOL = null;
```


### variable ISSUE_SYMBOL

```java
static MamaFieldDescriptor ISSUE_SYMBOL = null;
```


### variable REASON

```java
static MamaFieldDescriptor REASON = null;
```


### variable LULDINDICATOR

```java
static MamaFieldDescriptor LULDINDICATOR = null;
```


### variable LULDTIME

```java
static MamaFieldDescriptor LULDTIME = null;
```


### variable LULDHIGHLIMIT

```java
static MamaFieldDescriptor LULDHIGHLIMIT = null;
```


### variable LULDLOWLIMIT

```java
static MamaFieldDescriptor LULDLOWLIMIT = null;
```


### variable MAX_FID

```java
static int MAX_FID = 0;
```


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100