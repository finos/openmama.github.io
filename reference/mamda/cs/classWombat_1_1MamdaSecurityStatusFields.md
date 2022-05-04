---
title: Wombat::MamdaSecurityStatusFields
summary: Maintains a cache of common security status related FieldDescriptors. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecurityStatusFields



Maintains a cache of common security status related FieldDescriptors. 

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaSecurityStatusFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties)<br>Set the dictionary for common security status fields. Maintains a cache of MamaFieldDescriptors for common security status related fields. The  |
| int | **[getMaxFid](classWombat_1_1MamdaSecurityStatusFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaSecurityStatusFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaSecurityStatusFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SRC_TIME](classWombat_1_1MamdaSecurityStatusFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classWombat_1_1MamdaSecurityStatusFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS](classWombat_1_1MamdaSecurityStatusFields.html#variable-security-status)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_QUAL](classWombat_1_1MamdaSecurityStatusFields.html#variable-security-status-qual)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_TIME](classWombat_1_1MamdaSecurityStatusFields.html#variable-security-status-time)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_ORIG](classWombat_1_1MamdaSecurityStatusFields.html#variable-security-status-orig)**  |
| MamaFieldDescriptor | **[SHORT_SALE_CIRCUIT_BREAKER](classWombat_1_1MamdaSecurityStatusFields.html#variable-short-sale-circuit-breaker)**  |
| MamaFieldDescriptor | **[SEQNUM](classWombat_1_1MamdaSecurityStatusFields.html#variable-seqnum)**  |
| MamaFieldDescriptor | **[REASON](classWombat_1_1MamdaSecurityStatusFields.html#variable-reason)**  |
| MamaFieldDescriptor | **[LULDINDICATOR](classWombat_1_1MamdaSecurityStatusFields.html#variable-luldindicator)**  |
| MamaFieldDescriptor | **[LULDTIME](classWombat_1_1MamdaSecurityStatusFields.html#variable-luldtime)**  |
| MamaFieldDescriptor | **[LULDHIGHLIMIT](classWombat_1_1MamdaSecurityStatusFields.html#variable-luldhighlimit)**  |
| MamaFieldDescriptor | **[LULDLOWLIMIT](classWombat_1_1MamdaSecurityStatusFields.html#variable-luldlowlimit)**  |
| int | **[MAX_FID](classWombat_1_1MamdaSecurityStatusFields.html#variable-max-fid)**  |

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

Set the dictionary for common security status fields. Maintains a cache of MamaFieldDescriptors for common security status related fields. The 

**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary
  * **properties** A NameValueCollection object containing field mappings. (See [MamdaFields](classWombat_1_1MamdaFields.html) for more information)


`properties` parameter allows users of the API to map the common dictionary names to something else if they are being published under different names.


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

### variable SRC_TIME

```csharp
static MamaFieldDescriptor SRC_TIME = null;
```


### variable ACTIVITY_TIME

```csharp
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable SECURITY_STATUS

```csharp
static MamaFieldDescriptor SECURITY_STATUS = null;
```


### variable SECURITY_STATUS_QUAL

```csharp
static MamaFieldDescriptor SECURITY_STATUS_QUAL = null;
```


### variable SECURITY_STATUS_TIME

```csharp
static MamaFieldDescriptor SECURITY_STATUS_TIME = null;
```


### variable SECURITY_STATUS_ORIG

```csharp
static MamaFieldDescriptor SECURITY_STATUS_ORIG = null;
```


### variable SHORT_SALE_CIRCUIT_BREAKER

```csharp
static MamaFieldDescriptor SHORT_SALE_CIRCUIT_BREAKER = null;
```


### variable SEQNUM

```csharp
static MamaFieldDescriptor SEQNUM = null;
```


### variable REASON

```csharp
static MamaFieldDescriptor REASON = null;
```


### variable LULDINDICATOR

```csharp
static MamaFieldDescriptor LULDINDICATOR = null;
```


### variable LULDTIME

```csharp
static MamaFieldDescriptor LULDTIME = null;
```


### variable LULDHIGHLIMIT

```csharp
static MamaFieldDescriptor LULDHIGHLIMIT = null;
```


### variable LULDLOWLIMIT

```csharp
static MamaFieldDescriptor LULDLOWLIMIT = null;
```


### variable MAX_FID

```csharp
static int MAX_FID = 0;
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100