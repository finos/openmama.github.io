---
title: com::wombat::mama::MamaFieldCacheBool
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaFieldCacheBool





Inherits from [com.wombat.mama.MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html), [com.wombat.mama.MamaFieldCacheReadOnlyField](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheBool](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-mamafieldcachebool)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| | **[MamaFieldCacheBool](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-mamafieldcachebool)**(int fid, String name, boolean trackModState) |
| void | **[addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-addtomessage)**(boolean fieldName, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) message) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-copy)**() |
| void | **[apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-apply)**([MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) msgField) |
| void | **[apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-apply)**([MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) value) |
| void | **[set](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-set)**(boolean value) |
| boolean | **[isEqual](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-isequal)**(boolean value) |
| boolean | **[get](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-get)**() |
| String | **[getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheBool.html#function-getasstring)**() |

## Additional inherited members

**Public Functions inherited from [com.wombat.mama.MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-mamafieldcachefield)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc, short type) |
| | **[MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-mamafieldcachefield)**(int fid, short type, String name, boolean trackModState) |
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

**Public Attributes inherited from [com.wombat.mama.MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html)**

|                | Name           |
| -------------- | -------------- |
| final short | **[MOD_STATE_NOT_MODIFIED](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mod-state-not-modified)**  |
| final short | **[MOD_STATE_MODIFIED](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mod-state-modified)**  |
| final short | **[MOD_STATE_TOUCHED](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mod-state-touched)**  |

**Protected Attributes inherited from [com.wombat.mama.MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html)**

|                | Name           |
| -------------- | -------------- |
| short | **[mType](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mtype)**  |
| [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[mDesc](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mdesc)**  |
| short | **[mModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mmodstate)**  |
| boolean | **[mTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mtrackmodstate)**  |
| boolean | **[mLocalDescriptorCopy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#variable-mlocaldescriptorcopy)**  |

**Public Functions inherited from [com.wombat.mama.MamaFieldCacheReadOnlyField](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html)**

|                | Name           |
| -------------- | -------------- |
| [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[getDescriptor](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-getdescriptor)**() |
| short | **[getType](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-gettype)**() |
| boolean | **[getTrackModState](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-gettrackmodstate)**() |
| short | **[getModState](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-getmodstate)**() |
| boolean | **[isUnmodified](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-isunmodified)**() |
| boolean | **[isModified](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-ismodified)**() |
| boolean | **[isTouched](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html#function-istouched)**() |


## Public Functions Documentation

### function MamaFieldCacheBool

```java
inline MamaFieldCacheBool(
    MamaFieldDescriptor desc
)
```


Constructor. Use one of the create() methods to actually initialize the field. 


### function MamaFieldCacheBool

```java
inline MamaFieldCacheBool(
    int fid,
    String name,
    boolean trackModState
)
```


Constructor. 


### function addToMessage

```java
inline void addToMessage(
    boolean fieldName,
    MamaMsg message
)
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheField::addToMessage](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-addtomessage)


### function copy

```java
inline MamaFieldCacheField copy()
```


**Return**: the copy 

**Reimplements**: [com::wombat::mama::MamaFieldCacheField::copy](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-copy)


Make a copy of this field.


### function apply

```java
inline void apply(
    MamaMsgField msgField
)
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheField::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-apply)


Apply the [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) to the cached field. 


### function apply

```java
inline void apply(
    MamaFieldCacheField value
)
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheField::apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-apply)


Apply the [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html). 


### function set

```java
inline void set(
    boolean value
)
```


Explicitly set the cached value. 


### function isEqual

```java
inline boolean isEqual(
    boolean value
)
```


Check whether the field value is equal. 


### function get

```java
inline boolean get()
```


Return the cached value. 


### function getAsString

```java
inline String getAsString()
```


**Reimplements**: [com::wombat::mama::MamaFieldCacheField::getAsString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html#function-getasstring)


Return a string representation of the value 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100