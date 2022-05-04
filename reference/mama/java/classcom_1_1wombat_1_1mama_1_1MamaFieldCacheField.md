---
title: com::wombat::mama::MamaFieldCacheField
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaFieldCacheField





Inherits from [com.wombat.mama.MamaFieldCacheReadOnlyField](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html)

Inherited by [com.wombat.mama.MamaFieldCacheBool](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html), [com.wombat.mama.MamaFieldCacheChar](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html), [com.wombat.mama.MamaFieldCacheDateTime](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html), [com.wombat.mama.MamaFieldCacheEnum](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheEnum.html), [com.wombat.mama.MamaFieldCacheFloat32](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html), [com.wombat.mama.MamaFieldCacheFloat64](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html), [com.wombat.mama.MamaFieldCacheInt16](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html), [com.wombat.mama.MamaFieldCacheInt32](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html), [com.wombat.mama.MamaFieldCacheInt64](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html), [com.wombat.mama.MamaFieldCacheInt8](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html), [com.wombat.mama.MamaFieldCachePrice](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html), [com.wombat.mama.MamaFieldCacheString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html), [com.wombat.mama.MamaFieldCacheUint16](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html), [com.wombat.mama.MamaFieldCacheUint32](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html), [com.wombat.mama.MamaFieldCacheUint64](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html), [com.wombat.mama.MamaFieldCacheUint8](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-mamafieldcachefield)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc, short type) |
| | **[MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-mamafieldcachefield)**(int fid, short type, String name, boolean trackModState) |
| abstract [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-copy)**() |
| abstract void | **[addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-addtomessage)**(boolean fieldName, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) message) |
| abstract void | **[apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-apply)**([MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) msgField) |
| abstract String | **[getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-getasstring)**() |
| void | **[setDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-setdescriptor)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[getDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-getdescriptor)**() |
| short | **[getType](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-gettype)**() |
| void | **[setTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-settrackmodstate)**(boolean state) |
| boolean | **[getTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-gettrackmodstate)**() |
| void | **[setModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-setmodstate)**(short state) |
| void | **[clearModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-clearmodstate)**() |
| short | **[getModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-getmodstate)**() |
| boolean | **[isUnmodified](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-isunmodified)**() |
| boolean | **[isModified](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-ismodified)**() |
| boolean | **[isTouched](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-istouched)**() |
| void | **[touch](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-touch)**() |
| abstract void | **[apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-apply)**([MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) value) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[MOD_STATE_NOT_MODIFIED](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mod-state-not-modified)**  |
| final short | **[MOD_STATE_MODIFIED](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mod-state-modified)**  |
| final short | **[MOD_STATE_TOUCHED](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mod-state-touched)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| short | **[mType](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mtype)**  |
| [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[mDesc](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mdesc)**  |
| short | **[mModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mmodstate)**  |
| boolean | **[mTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mtrackmodstate)**  |
| boolean | **[mLocalDescriptorCopy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mlocaldescriptorcopy)**  |

## Public Functions Documentation

### function MamaFieldCacheField

```java
inline MamaFieldCacheField(
    MamaFieldDescriptor desc,
    short type
)
```


Constructor. Use one of the create() methods to actually initialize the field. 


### function MamaFieldCacheField

```java
inline MamaFieldCacheField(
    int fid,
    short type,
    String name,
    boolean trackModState
)
```


Constructor. Also create a local copy of field descriptor based on supplied info. 


### function copy

```java
abstract MamaFieldCacheField copy()
```


**Return**: the copy 

**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::copy](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-copy)


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheUint16::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html#function-copy), [com::wombat::mama::MamaFieldCachePrice::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html#function-copy), [com::wombat::mama::MamaFieldCacheInt64::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html#function-copy), [com::wombat::mama::MamaFieldCacheUint32::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html#function-copy), [com::wombat::mama::MamaFieldCacheInt8::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html#function-copy), [com::wombat::mama::MamaFieldCacheChar::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html#function-copy), [com::wombat::mama::MamaFieldCacheBool::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-copy), [com::wombat::mama::MamaFieldCacheUint8::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html#function-copy), [com::wombat::mama::MamaFieldCacheUint64::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html#function-copy), [com::wombat::mama::MamaFieldCacheString::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html#function-copy), [com::wombat::mama::MamaFieldCacheInt32::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html#function-copy), [com::wombat::mama::MamaFieldCacheInt16::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html#function-copy), [com::wombat::mama::MamaFieldCacheFloat64::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html#function-copy), [com::wombat::mama::MamaFieldCacheFloat32::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html#function-copy), [com::wombat::mama::MamaFieldCacheEnum::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheEnum.html#function-copy), [com::wombat::mama::MamaFieldCacheDateTime::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html#function-copy)


Make a copy of this field.


### function addToMessage

```java
abstract void addToMessage(
    boolean fieldName,
    MamaMsg message
)
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheInt8::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheChar::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheBool::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheUint8::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheUint64::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheUint32::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheString::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheInt32::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheInt16::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheFloat64::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheFloat32::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheEnum::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheEnum.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheDateTime::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheUint16::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html#function-addtomessage), [com::wombat::mama::MamaFieldCachePrice::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html#function-addtomessage), [com::wombat::mama::MamaFieldCacheInt64::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html#function-addtomessage)


### function apply

```java
abstract void apply(
    MamaMsgField msgField
)
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheUint32::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html#function-apply), [com::wombat::mama::MamaFieldCacheUint16::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html#function-apply), [com::wombat::mama::MamaFieldCacheInt8::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html#function-apply), [com::wombat::mama::MamaFieldCacheChar::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html#function-apply), [com::wombat::mama::MamaFieldCacheBool::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-apply), [com::wombat::mama::MamaFieldCacheUint8::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html#function-apply), [com::wombat::mama::MamaFieldCacheUint64::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html#function-apply), [com::wombat::mama::MamaFieldCacheString::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html#function-apply), [com::wombat::mama::MamaFieldCachePrice::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html#function-apply), [com::wombat::mama::MamaFieldCacheInt64::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html#function-apply), [com::wombat::mama::MamaFieldCacheInt32::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html#function-apply), [com::wombat::mama::MamaFieldCacheInt16::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html#function-apply), [com::wombat::mama::MamaFieldCacheFloat64::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html#function-apply), [com::wombat::mama::MamaFieldCacheFloat32::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html#function-apply), [com::wombat::mama::MamaFieldCacheEnum::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheEnum.html#function-apply), [com::wombat::mama::MamaFieldCacheDateTime::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html#function-apply)


Apply the [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) to the cached field. 


### function getAsString

```java
abstract String getAsString()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::getAsString](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-getasstring)


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheBool::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-getasstring), [com::wombat::mama::MamaFieldCacheUint32::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html#function-getasstring), [com::wombat::mama::MamaFieldCacheUint16::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html#function-getasstring), [com::wombat::mama::MamaFieldCacheInt8::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html#function-getasstring), [com::wombat::mama::MamaFieldCacheChar::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html#function-getasstring), [com::wombat::mama::MamaFieldCacheUint8::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html#function-getasstring), [com::wombat::mama::MamaFieldCacheUint64::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html#function-getasstring), [com::wombat::mama::MamaFieldCacheInt64::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html#function-getasstring), [com::wombat::mama::MamaFieldCacheInt32::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html#function-getasstring), [com::wombat::mama::MamaFieldCacheInt16::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html#function-getasstring), [com::wombat::mama::MamaFieldCacheFloat64::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html#function-getasstring), [com::wombat::mama::MamaFieldCacheFloat32::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html#function-getasstring), [com::wombat::mama::MamaFieldCacheEnum::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheEnum.html#function-getasstring), [com::wombat::mama::MamaFieldCacheString::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html#function-getasstring), [com::wombat::mama::MamaFieldCachePrice::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html#function-getasstring), [com::wombat::mama::MamaFieldCacheDateTime::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html#function-getasstring)


Create a string value of the field in the buffer provided. 


### function setDescriptor

```java
inline void setDescriptor(
    MamaFieldDescriptor desc
)
```


Set the [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for this field. This is an unusual thing to want to do to an existing field but it can help with performance for specialized tasks. 


### function getDescriptor

```java
inline MamaFieldDescriptor getDescriptor()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::getDescriptor](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-getdescriptor)


Return the [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for this field (or NULL). 


### function getType

```java
inline short getType()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::getType](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-gettype)


Return the actual field type for this field. It is possible to create fields that actually differ from the type specified in the dictionary field descriptor. 


### function setTrackModState

```java
inline void setTrackModState(
    boolean state
)
```


Set the whether track modification state for the field 


### function getTrackModState

```java
inline boolean getTrackModState()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::getTrackModState](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-gettrackmodstate)


Get the track modification state for the field 


### function setModState

```java
inline void setModState(
    short state
)
```


Set the modification state for the field. 


### function clearModState

```java
inline void clearModState()
```


Clear the modification state for the field (i.e., set to MOD_STATE_NOT_MODIFIED). 


### function getModState

```java
inline short getModState()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::getModState](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-getmodstate)


Get the modification state for the field. 


### function isUnmodified

```java
inline boolean isUnmodified()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::isUnmodified](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-isunmodified)


Return whether the field is unmodified. 


### function isModified

```java
inline boolean isModified()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::isModified](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-ismodified)


Return whether the field is modified. 


### function isTouched

```java
inline boolean isTouched()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheReadOnlyField::isTouched](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-istouched)


Return whether the field is modified. 


### function touch

```java
inline void touch()
```


Explicitly "touch" the cached value. To touch the cached value means to mark it as modified (or touched, actually) without actually bothering to check/update the current value. 


### function apply

```java
abstract void apply(
    MamaFieldCacheField value
)
```


**Reimplemented by**: [com::wombat::mama::MamaFieldCacheBool::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-apply), [com::wombat::mama::MamaFieldCacheUint32::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html#function-apply), [com::wombat::mama::MamaFieldCacheUint16::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html#function-apply), [com::wombat::mama::MamaFieldCacheInt8::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html#function-apply), [com::wombat::mama::MamaFieldCacheChar::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html#function-apply), [com::wombat::mama::MamaFieldCacheUint8::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html#function-apply), [com::wombat::mama::MamaFieldCacheUint64::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html#function-apply), [com::wombat::mama::MamaFieldCacheInt64::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html#function-apply), [com::wombat::mama::MamaFieldCacheInt32::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html#function-apply), [com::wombat::mama::MamaFieldCacheInt16::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html#function-apply), [com::wombat::mama::MamaFieldCacheFloat64::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html#function-apply), [com::wombat::mama::MamaFieldCacheFloat32::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html#function-apply), [com::wombat::mama::MamaFieldCacheEnum::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheEnum.html#function-apply), [com::wombat::mama::MamaFieldCacheString::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html#function-apply), [com::wombat::mama::MamaFieldCachePrice::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html#function-apply), [com::wombat::mama::MamaFieldCacheDateTime::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html#function-apply)


## Public Attributes Documentation

### variable MOD_STATE_NOT_MODIFIED

```java
static final short MOD_STATE_NOT_MODIFIED = 1;
```


### variable MOD_STATE_MODIFIED

```java
static final short MOD_STATE_MODIFIED = 2;
```


### variable MOD_STATE_TOUCHED

```java
static final short MOD_STATE_TOUCHED = 3;
```


## Protected Attributes Documentation

### variable mType

```java
short mType;
```


### variable mDesc

```java
MamaFieldDescriptor mDesc;
```


### variable mModState

```java
short mModState;
```


### variable mTrackModState

```java
boolean mTrackModState;
```


### variable mLocalDescriptorCopy

```java
boolean mLocalDescriptorCopy;
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100