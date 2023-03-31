---
title: com::wombat::mama::MamaFieldCacheProperties::Entry
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaFieldCacheProperties::Entry



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Entry](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties_1_1Entry.html#function-entry)**([MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) field) |
| | **[Entry](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties_1_1Entry.html#function-entry)**([MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) field, long serial) |
| | **[Entry](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties_1_1Entry.html#function-entry)**(Entry entry) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[mField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties_1_1Entry.html#variable-mfield)**  |
| long | **[mSerial](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties_1_1Entry.html#variable-mserial)**  |

## Detailed Description

```java
class com::wombat::mama::MamaFieldCacheProperties::Entry;
```


So we know if a field has been added. 

## Public Functions Documentation

### function Entry

```java
inline Entry(
    MamaFieldCacheField field
)
```


### function Entry

```java
inline Entry(
    MamaFieldCacheField field,
    long serial
)
```


### function Entry

```java
inline Entry(
    Entry entry
)
```


## Public Attributes Documentation

### variable mField

```java
MamaFieldCacheField mField = null;
```


### variable mSerial

```java
long mSerial = 0;
```


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100