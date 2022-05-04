---
title: com::wombat::mama::MamaFieldCache
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaFieldCache





Inherits from [com.wombat.mama.MamaFieldCacheFieldList](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCache](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-mamafieldcache)**() |
| [MamaFieldCacheReadOnlyField](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html)[] | **[getFastReadOnlyDeltaArray](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-getfastreadonlydeltaarray)**() |
| [MamaFieldCacheReadOnlyField](interfacecom_1_1wombat_1_1mama_1_1MamaFieldCacheReadOnlyField.html)[] | **[getFastReadOnlyFullArray](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-getfastreadonlyfullarray)**() |
| void | **[getDeltaMsg](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-getdeltamsg)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) message) |
| void | **[getFullMsg](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-getfullmsg)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) message) |
| boolean | **[getUseFieldNames](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-getusefieldnames)**() |
| void | **[setUseFieldNames](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-setusefieldnames)**(boolean useFieldNames) |
| void | **[apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-apply)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dict, [MamaFieldCacheFieldList](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html) delta) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[add](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-add)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAdd](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradd)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddBool](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddbool)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheChar](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html) | **[findOrAddChar](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddchar)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheUint8](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint8.html) | **[findOrAddUint8](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradduint8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheInt8](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt8.html) | **[findOrAddInt8](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddint8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheUint16](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint16.html) | **[findOrAddUint16](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradduint16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheInt16](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt16.html) | **[findOrAddInt16](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddint16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheUint32](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint32.html) | **[findOrAddUint32](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradduint32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheInt32](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html) | **[findOrAddInt32](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddint32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheUint64](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheUint64.html) | **[findOrAddUint64](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradduint64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheInt64](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html) | **[findOrAddInt64](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddint64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheFloat32](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat32.html) | **[findOrAddFloat32](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddfloat32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheFloat64](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFloat64.html) | **[findOrAddFloat64](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddfloat64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheDateTime](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheDateTime.html) | **[findOrAddDateTime](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradddatetime)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCachePrice](classcom_1_1wombat_1_1mama_1_1MamaFieldCachePrice.html) | **[findOrAddPrice](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddprice)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html) | **[findOrAddString](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddstring)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[add](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-add)**(int fid, short type, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAdd](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradd)**(int fid, short type, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddBool](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddbool)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddChar](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddchar)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddUint8](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradduint8)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddInt8](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddint8)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddUint16](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradduint16)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddInt16](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddint16)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddUint32](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradduint32)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddInt32](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddint32)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddUint64](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradduint64)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddInt64](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddint64)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddFloat32](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddfloat32)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddFloat64](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddfloat64)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddDateTime](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoradddatetime)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddPrice](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddprice)**(int fid, String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[findOrAddString](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-findoraddstring)**(int fid, String name) |
| void | **[lockFields](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-lockfields)**() |
| void | **[unlockFields](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-unlockfields)**() |
| void | **[setTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-settrackmodstate)**(boolean state) |
| boolean | **[getTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-gettrackmodstate)**() |
| void | **[setOverrideDescriptorTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-setoverridedescriptortrackmodstate)**(boolean state) |
| boolean | **[getOverrideDescriptorTrackModState](classcom_1_1wombat_1_1mama_1_1MamaFieldCache.html#function-getoverridedescriptortrackmodstate)**() |

## Additional inherited members

**Public Functions inherited from [com.wombat.mama.MamaFieldCacheFieldList](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheFieldList](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-mamafieldcachefieldlist)**() |
| void | **[clear](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-clear)**() |
| void | **[clearAndDelete](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-clearanddelete)**() |
| void | **[addIfModified](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-addifmodified)**([MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) field) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[find](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-find)**(String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[find](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-find)**(int fid) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[find](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-find)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| int | **[size](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-size)**() |
| boolean | **[empty](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-empty)**() |
| Iterator | **[getIterator](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-getiterator)**() |

**Protected Functions inherited from [com.wombat.mama.MamaFieldCacheFieldList](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html)**

|                | Name           |
| -------------- | -------------- |
| ArrayList | **[getArrayList](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html#function-getarraylist)**() |


## Public Functions Documentation

### function MamaFieldCache

```java
inline MamaFieldCache()
```


### function getFastReadOnlyDeltaArray

```java
inline MamaFieldCacheReadOnlyField[] getFastReadOnlyDeltaArray()
```


### function getFastReadOnlyFullArray

```java
inline MamaFieldCacheReadOnlyField[] getFastReadOnlyFullArray()
```


### function getDeltaMsg

```java
inline void getDeltaMsg(
    MamaMsg message
)
```


### function getFullMsg

```java
inline void getFullMsg(
    MamaMsg message
)
```


### function getUseFieldNames

```java
inline boolean getUseFieldNames()
```


### function setUseFieldNames

```java
inline void setUseFieldNames(
    boolean useFieldNames
)
```


### function apply

```java
inline void apply(
    MamaMsg msg,
    MamaDictionary dict,
    MamaFieldCacheFieldList delta
)
```


### function add

```java
inline MamaFieldCacheField add(
    MamaFieldDescriptor desc
)
```


### function findOrAdd

```java
inline MamaFieldCacheField findOrAdd(
    MamaFieldDescriptor desc
)
```


### function findOrAddBool

```java
inline MamaFieldCacheField findOrAddBool(
    MamaFieldDescriptor desc
)
```


### function findOrAddChar

```java
inline MamaFieldCacheChar findOrAddChar(
    MamaFieldDescriptor desc
)
```


### function findOrAddUint8

```java
inline MamaFieldCacheUint8 findOrAddUint8(
    MamaFieldDescriptor desc
)
```


### function findOrAddInt8

```java
inline MamaFieldCacheInt8 findOrAddInt8(
    MamaFieldDescriptor desc
)
```


### function findOrAddUint16

```java
inline MamaFieldCacheUint16 findOrAddUint16(
    MamaFieldDescriptor desc
)
```


### function findOrAddInt16

```java
inline MamaFieldCacheInt16 findOrAddInt16(
    MamaFieldDescriptor desc
)
```


### function findOrAddUint32

```java
inline MamaFieldCacheUint32 findOrAddUint32(
    MamaFieldDescriptor desc
)
```


### function findOrAddInt32

```java
inline MamaFieldCacheInt32 findOrAddInt32(
    MamaFieldDescriptor desc
)
```


### function findOrAddUint64

```java
inline MamaFieldCacheUint64 findOrAddUint64(
    MamaFieldDescriptor desc
)
```


### function findOrAddInt64

```java
inline MamaFieldCacheInt64 findOrAddInt64(
    MamaFieldDescriptor desc
)
```


### function findOrAddFloat32

```java
inline MamaFieldCacheFloat32 findOrAddFloat32(
    MamaFieldDescriptor desc
)
```


### function findOrAddFloat64

```java
inline MamaFieldCacheFloat64 findOrAddFloat64(
    MamaFieldDescriptor desc
)
```


### function findOrAddDateTime

```java
inline MamaFieldCacheDateTime findOrAddDateTime(
    MamaFieldDescriptor desc
)
```


### function findOrAddPrice

```java
inline MamaFieldCachePrice findOrAddPrice(
    MamaFieldDescriptor desc
)
```


### function findOrAddString

```java
inline MamaFieldCacheString findOrAddString(
    MamaFieldDescriptor desc
)
```


### function add

```java
inline MamaFieldCacheField add(
    int fid,
    short type,
    String name
)
```


### function findOrAdd

```java
inline MamaFieldCacheField findOrAdd(
    int fid,
    short type,
    String name
)
```


### function findOrAddBool

```java
inline MamaFieldCacheField findOrAddBool(
    int fid,
    String name
)
```


### function findOrAddChar

```java
inline MamaFieldCacheField findOrAddChar(
    int fid,
    String name
)
```


### function findOrAddUint8

```java
inline MamaFieldCacheField findOrAddUint8(
    int fid,
    String name
)
```


### function findOrAddInt8

```java
inline MamaFieldCacheField findOrAddInt8(
    int fid,
    String name
)
```


### function findOrAddUint16

```java
inline MamaFieldCacheField findOrAddUint16(
    int fid,
    String name
)
```


### function findOrAddInt16

```java
inline MamaFieldCacheField findOrAddInt16(
    int fid,
    String name
)
```


### function findOrAddUint32

```java
inline MamaFieldCacheField findOrAddUint32(
    int fid,
    String name
)
```


### function findOrAddInt32

```java
inline MamaFieldCacheField findOrAddInt32(
    int fid,
    String name
)
```


### function findOrAddUint64

```java
inline MamaFieldCacheField findOrAddUint64(
    int fid,
    String name
)
```


### function findOrAddInt64

```java
inline MamaFieldCacheField findOrAddInt64(
    int fid,
    String name
)
```


### function findOrAddFloat32

```java
inline MamaFieldCacheField findOrAddFloat32(
    int fid,
    String name
)
```


### function findOrAddFloat64

```java
inline MamaFieldCacheField findOrAddFloat64(
    int fid,
    String name
)
```


### function findOrAddDateTime

```java
inline MamaFieldCacheField findOrAddDateTime(
    int fid,
    String name
)
```


### function findOrAddPrice

```java
inline MamaFieldCacheField findOrAddPrice(
    int fid,
    String name
)
```


### function findOrAddString

```java
inline MamaFieldCacheField findOrAddString(
    int fid,
    String name
)
```


### function lockFields

```java
inline void lockFields()
```


### function unlockFields

```java
inline void unlockFields()
```


### function setTrackModState

```java
inline void setTrackModState(
    boolean state
)
```


### function getTrackModState

```java
inline boolean getTrackModState()
```


### function setOverrideDescriptorTrackModState

```java
inline void setOverrideDescriptorTrackModState(
    boolean state
)
```


### function getOverrideDescriptorTrackModState

```java
inline boolean getOverrideDescriptorTrackModState()
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100