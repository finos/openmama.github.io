---
title: com::wombat::mamda::MamdaDataException
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaDataException



 [More...](#detailed-description)

Inherits from RuntimeException, Serializable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaDataException](classcom_1_1wombat_1_1mamda_1_1MamdaDataException.html#function-mamdadataexception)**(final String message, final Throwable cause) |
| | **[MamdaDataException](classcom_1_1wombat_1_1mamda_1_1MamdaDataException.html#function-mamdadataexception)**(final Throwable cause) |
| | **[MamdaDataException](classcom_1_1wombat_1_1mamda_1_1MamdaDataException.html#function-mamdadataexception)**(final String message) |

## Detailed Description

```java
class com::wombat::mamda::MamdaDataException;
```


MAMDA data exceptions. 

## Public Functions Documentation

### function MamdaDataException

```java
inline MamdaDataException(
    final String message,
    final Throwable cause
)
```


**Parameters**: 

  * **message** the detail message (which is saved for later retrieval by the [getMessage()] method). 
  * **cause** the cause (which is saved for later retrieval by the [getCause()] method). (A `null` value is permitted, and indicates that the cause is nonexistent or unknown.) 


**Since**: 1.4 

Constructs a new runtime exception with the specified detail message and cause. 

Note that the detail message associated with `cause` is _not_ automatically incorporated in this runtime exception's detail message.


### function MamdaDataException

```java
inline MamdaDataException(
    final Throwable cause
)
```


**Parameters**: 

  * **cause** the cause 


**Since**: 1.4 

Constructs a new runtime exception with the specified cause and a detail message. This constructor is useful for runtime exceptions that are little more than wrappers for other throwables.


### function MamdaDataException

```java
inline MamdaDataException(
    final String message
)
```


**Parameters**: 

  * **message** 


Create a `[MamdaDataException](classcom_1_1wombat_1_1mamda_1_1MamdaDataException.html)` with the specified message. 


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100