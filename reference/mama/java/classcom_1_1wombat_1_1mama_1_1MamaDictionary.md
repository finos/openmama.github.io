---
title: com::wombat::mama::MamaDictionary
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDictionary





## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getpointerval)**() |
| native [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[createFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-createfielddescriptor)**(int fid, String name, short type) |
| native void | **[buildDictionaryFromMessage](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-builddictionaryfrommessage)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| native [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) | **[getDictionaryMessage](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getdictionarymessage)**() |
| native [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[getFeedName](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getfeedname)**() |
| native [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[getFeedHost](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getfeedhost)**() |
| native [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[getFieldByFid](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getfieldbyfid)**(int fid) |
| native [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[getFieldByIndex](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getfieldbyindex)**(int index) |
| native [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) | **[getFieldByName](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getfieldbyname)**(String name) |
| native Collection | **[getFieldByNameAll](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getfieldbynameall)**(String name) |
| native int | **[getMaxFid](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getmaxfid)**() |
| native int | **[getSize](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-getsize)**() |
| native boolean | **[hasDuplicates](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-hasduplicates)**() |
| void | **[finalize](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-finalize)**() |
| native void | **[writeToFile](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-writetofile)**(String file) |
| void | **[populateFromFile](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-populatefromfile)**(String file) |
| native void | **[_populateFromFile](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function--populatefromfile)**(String file) |
| native void | **[create](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html#function-create)**() |

## Public Functions Documentation

### function getPointerVal

```java
inline long getPointerVal()
```


### function createFieldDescriptor

```java
native MamaFieldDescriptor createFieldDescriptor(
    int fid,
    String name,
    short type
)
```


### function buildDictionaryFromMessage

```java
native void buildDictionaryFromMessage(
    MamaMsg msg
)
```


### function getDictionaryMessage

```java
native MamaMsg getDictionaryMessage()
```


### function getFeedName

```java
native MamaFieldDescriptor getFeedName()
```


### function getFeedHost

```java
native MamaFieldDescriptor getFeedHost()
```


### function getFieldByFid

```java
native MamaFieldDescriptor getFieldByFid(
    int fid
)
```


### function getFieldByIndex

```java
native MamaFieldDescriptor getFieldByIndex(
    int index
)
```


### function getFieldByName

```java
native MamaFieldDescriptor getFieldByName(
    String name
)
```


### function getFieldByNameAll

```java
native Collection getFieldByNameAll(
    String name
)
```


### function getMaxFid

```java
native int getMaxFid()
```


### function getSize

```java
native int getSize()
```


### function hasDuplicates

```java
native boolean hasDuplicates()
```


### function finalize

```java
inline void finalize()
```


### function writeToFile

```java
native void writeToFile(
    String file
)
```


### function populateFromFile

```java
inline void populateFromFile(
    String file
)
```


### function _populateFromFile

```java
native void _populateFromFile(
    String file
)
```


### function create

```java
native void create()
```


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100