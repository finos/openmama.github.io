---
title: com::wombat::mama::MamaFieldCacheReadOnlyField
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaFieldCacheReadOnlyField





Inherited by [com.wombat.mama.MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[copy](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-copy)**() |
| String | **[getAsString](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-getasstring)**() |
| [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[getDescriptor](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-getdescriptor)**() |
| short | **[getType](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-gettype)**() |
| boolean | **[getTrackModState](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-gettrackmodstate)**() |
| short | **[getModState](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-getmodstate)**() |
| boolean | **[isUnmodified](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-isunmodified)**() |
| boolean | **[isModified](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-ismodified)**() |
| boolean | **[isTouched](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-istouched)**() |

## Public Functions Documentation

### function copy

```java
MamaFieldCacheField copy()
```


**Return**: the copy 

**Reimplemented by**: [com::wombat::mama::MamaFieldCacheUint16::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html#function-copy), [com::wombat::mama::MamaFieldCachePrice::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html#function-copy), [com::wombat::mama::MamaFieldCacheInt64::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html#function-copy), [com::wombat::mama::MamaFieldCacheUint32::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html#function-copy), [com::wombat::mama::MamaFieldCacheInt8::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html#function-copy), [com::wombat::mama::MamaFieldCacheChar::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html#function-copy), [com::wombat::mama::MamaFieldCacheBool::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-copy), [com::wombat::mama::MamaFieldCacheUint8::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html#function-copy), [com::wombat::mama::MamaFieldCacheUint64::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html#function-copy), [com::wombat::mama::MamaFieldCacheString::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html#function-copy), [com::wombat::mama::MamaFieldCacheInt32::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html#function-copy), [com::wombat::mama::MamaFieldCacheInt16::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html#function-copy), [com::wombat::mama::MamaFieldCacheFloat64::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html#function-copy), [com::wombat::mama::MamaFieldCacheFloat32::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html#function-copy), [com::wombat::mama::MamaFieldCacheEnum::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheEnum.html#function-copy), [com::wombat::mama::MamaFieldCacheDateTime::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html#function-copy), [com::wombat::mama::MamaFieldCacheField::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-copy)


Make a copy of this field.


### function getAsString

```java
String getAsString()
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheField::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-getasstring), [com::wombat::mama::MamaFieldCacheBool::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-getasstring), [com::wombat::mama::MamaFieldCacheUint32::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html#function-getasstring), [com::wombat::mama::MamaFieldCacheUint16::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html#function-getasstring), [com::wombat::mama::MamaFieldCacheInt8::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html#function-getasstring), [com::wombat::mama::MamaFieldCacheChar::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html#function-getasstring), [com::wombat::mama::MamaFieldCacheUint8::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html#function-getasstring), [com::wombat::mama::MamaFieldCacheUint64::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html#function-getasstring), [com::wombat::mama::MamaFieldCacheInt64::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html#function-getasstring), [com::wombat::mama::MamaFieldCacheInt32::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html#function-getasstring), [com::wombat::mama::MamaFieldCacheInt16::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html#function-getasstring), [com::wombat::mama::MamaFieldCacheFloat64::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html#function-getasstring), [com::wombat::mama::MamaFieldCacheFloat32::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html#function-getasstring), [com::wombat::mama::MamaFieldCacheEnum::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheEnum.html#function-getasstring), [com::wombat::mama::MamaFieldCacheString::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html#function-getasstring), [com::wombat::mama::MamaFieldCachePrice::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html#function-getasstring), [com::wombat::mama::MamaFieldCacheDateTime::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html#function-getasstring)


Create a string value of the field in the buffer provided. 


### function getDescriptor

```java
MamaFieldDescriptor getDescriptor()
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheField::getDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-getdescriptor)


Return the [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for this field (or NULL). 


### function getType

```java
short getType()
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheField::getType](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-gettype)


Return the actual field type for this field. It is possible to create fields that actually differ from the type specified in the dictionary field descriptor. 


### function getTrackModState

```java
boolean getTrackModState()
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheField::getTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-gettrackmodstate)


Get the track modification state for the field 


### function getModState

```java
short getModState()
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheField::getModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-getmodstate)


Get the modification state for the field. 


### function isUnmodified

```java
boolean isUnmodified()
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheField::isUnmodified](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-isunmodified)


Return whether the field is unmodified. 


### function isModified

```java
boolean isModified()
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheField::isModified](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-ismodified)


Return whether the field is modified. 


### function isTouched

```java
boolean isTouched()
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheField::isTouched](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-istouched)


Return whether the field is modified. 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100