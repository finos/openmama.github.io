---
title: com::wombat::mama::MamaError
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaError



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaError.html#function-tostring)**(int error) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final int | **[ERROR_DEFAULT](classcom_1_1wombat_1_1mama_1_1MamaError.html#variable-error-default)**  |
| final int | **[ERROR_INITIAL_TIMEOUT](classcom_1_1wombat_1_1mama_1_1MamaError.html#variable-error-initial-timeout)**  |
| final int | **[ERROR_RECAP_TIMEOUT](classcom_1_1wombat_1_1mama_1_1MamaError.html#variable-error-recap-timeout)**  |
| final int | **[ERROR_NOT_ENTITLED](classcom_1_1wombat_1_1mama_1_1MamaError.html#variable-error-not-entitled)**  |
| final int | **[ERROR_NO_RESOLVER](classcom_1_1wombat_1_1mama_1_1MamaError.html#variable-error-no-resolver)**  |
| final int | **[ERROR_UNKNOWN](classcom_1_1wombat_1_1mama_1_1MamaError.html#variable-error-unknown)**  |

## Detailed Description

```java
class com::wombat::mama::MamaError;
```


Class containing constants and utility methods for [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html) internal errors. 

## Public Functions Documentation

### function toString

```java
static inline String toString(
    int error
)
```


**Parameters**: 

  * **error** The error code to stringify. 


**Return**: The string representation of the quality. 

Get a stringified representation of the error.


## Public Attributes Documentation

### variable ERROR_DEFAULT

```java
static final int ERROR_DEFAULT = 0;
```


The last error in the current thread 


### variable ERROR_INITIAL_TIMEOUT

```java
static final int ERROR_INITIAL_TIMEOUT = 1;
```


### variable ERROR_RECAP_TIMEOUT

```java
static final int ERROR_RECAP_TIMEOUT = 2;
```


### variable ERROR_NOT_ENTITLED

```java
static final int ERROR_NOT_ENTITLED = 3;
```


### variable ERROR_NO_RESOLVER

```java
static final int ERROR_NO_RESOLVER = 4;
```


### variable ERROR_UNKNOWN

```java
static final int ERROR_UNKNOWN = 999;
```


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100