---
title: com::wombat::mama::MamaException
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaException



 [More...](#detailed-description)

Inherits from RuntimeException, Serializable

Inherited by [com.wombat.mama.MamaFieldTypeException](classcom_1_1wombat_1_1mama_1_1MamaFieldTypeException.html), [com.wombat.mama.MamaNoEntitlementsForUserException](classcom_1_1wombat_1_1mama_1_1MamaNoEntitlementsForUserException.html), [com.wombat.mama.MamaNotEntitledException](classcom_1_1wombat_1_1mama_1_1MamaNotEntitledException.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html#function-mamaexception)**(final String message, final Throwable cause) |
| | **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html#function-mamaexception)**(final Throwable cause) |
| | **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html#function-mamaexception)**(final String message) |

## Detailed Description

```java
class com::wombat::mama::MamaException;
```


This is the superclass for all MAMA exceptions. 

## Public Functions Documentation

### function MamaException

```java
inline MamaException(
    final String message,
    final Throwable cause
)
```


**Parameters**: 

  * **message** the detail message (which is saved for later retrieval by the [getMessage()] method). 
  * **cause** the cause (which is saved for later retrieval by the [getCause()] method). (A `null` value is permitted, and indicates that the cause is nonexistent or unknown.) 


Constructs a new runtime exception with the specified detail message and cause. 

Note that the detail message associated with `cause` is _not_ automatically incorporated in this runtime exception's detail message.


### function MamaException

```java
inline MamaException(
    final Throwable cause
)
```


**Parameters**: 

  * **cause** the cause 


Constructs a new runtime exception with the specified cause and a detail message. This constructor is useful for runtime exceptions that are little more than wrappers for other throwables.


### function MamaException

```java
inline MamaException(
    final String message
)
```


**Parameters**: 

  * **message** 


Create a `[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)` with the specified message. 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100