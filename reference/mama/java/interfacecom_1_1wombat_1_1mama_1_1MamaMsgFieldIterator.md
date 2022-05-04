---
title: com::wombat::mama::MamaMsgFieldIterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaMsgFieldIterator



 [More...](#detailed-description)

Inherited by [com.wombat.mama.MamaFieldCache.FieldCacheBasicMsgIterator](classcom_1_1wombat_1_1mama_1_1MamaFieldCache_1_1FieldCacheBasicMsgIterator.html), [com.wombat.mama.MamaFieldCache.FieldCacheMsgIterator](classcom_1_1wombat_1_1mama_1_1MamaFieldCache_1_1FieldCacheMsgIterator.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onField](interfacecom_1_1wombat_1_1mama_1_1MamaMsgFieldIterator.html#function-onfield)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg, [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) field, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dict, Object closure) |

## Detailed Description

```java
class com::wombat::mama::MamaMsgFieldIterator;
```


Callback interface for [MamaMsg.iterateFields()](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-iteratefields). An object implementing this interface is passed to the `[MamaMsg.iterateFields()](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-iteratefields)` method. The `[onField()](interfacecom_1_1wombat_1_1mama_1_1MamaMsgFieldIterator.html#function-onfield)` method is invoked for each field in the [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) object. 

## Public Functions Documentation

### function onField

```java
void onField(
    MamaMsg msg,
    MamaMsgField field,
    MamaDictionary dict,
    Object closure
)
```


**Parameters**: 

  * **msg** The [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) on which `iterateFields()` was called 
  * **field** The [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) object representing the underlying message field. 
  * **dict** The [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) object if one was passed to `iterateFields()`
  * **closure** The closure object passed to the `[MamaMsg.iterateFields()](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-iteratefields)` method 


Method invoked for each field in the underlying message. Please note that the same single instance of the [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) is passed to this method in all callbacks during iteration on a single message. The state of the object is set for each invocation. This decision helps to reduce unnecessary creation of many new, short lived, objects when parsing messages. As such is is recommended that references to [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) instances are not maintained after the completion of the `onField` method.


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100