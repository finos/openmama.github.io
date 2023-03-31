---
title: com::wombat::mamda::MamdaErrorCode
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaErrorCode



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[stringForMamdaError](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#function-stringformamdaerror)**(final int type) |
| short | **[codeForMamaMsgStatus](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#function-codeformamamsgstatus)**(short wombatStatus) |
| short | **[codeForMamaStatus](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#function-codeformamastatus)**(short wombatStatus) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[MAMDA_NO_ERROR](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-no-error)**  |
| final short | **[MAMDA_ERROR_LINE_DOWN](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-line-down)**  |
| final short | **[MAMDA_ERROR_NO_SUBSCRIBERS](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-no-subscribers)**  |
| final short | **[MAMDA_ERROR_BAD_SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-bad-symbol)**  |
| final short | **[MAMDA_ERROR_EXPIRED](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-expired)**  |
| final short | **[MAMDA_ERROR_TIMEOUT](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-timeout)**  |
| final short | **[MAMDA_ERROR_MISC](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-misc)**  |
| final short | **[MAMDA_ERROR_STALE](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-stale)**  |
| final short | **[MAMDA_ERROR_PLATFORM_STATUS](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-platform-status)**  |
| final short | **[MAMDA_ERROR_NOT_ENTITLED](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-not-entitled)**  |
| final short | **[MAMDA_ERROR_NOT_FOUND](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-not-found)**  |
| final short | **[MAMDA_ERROR_POSSIBLY_STALE](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-possibly-stale)**  |
| final short | **[MAMDA_ERROR_NOT_PERMISSIONED](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-not-permissioned)**  |
| final short | **[MAMDA_ERROR_TOPIC_CHANGE](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-topic-change)**  |
| final short | **[MAMDA_ERROR_BANDWIDTH_EXCEEDED](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-bandwidth-exceeded)**  |
| final short | **[MAMDA_ERROR_DELETE](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-delete)**  |
| final short | **[MAMDA_ERROR_EXCEPTION](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html#variable-mamda-error-exception)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaErrorCode;
```


[MamdaErrorCode](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html) defines MAMDA error codes. 

## Public Functions Documentation

### function stringForMamdaError

```java
static inline String stringForMamdaError(
    final int type
)
```


**Return**: The description. 

Return a text description of the message's status.


### function codeForMamaMsgStatus

```java
static inline short codeForMamaMsgStatus(
    short wombatStatus
)
```


### function codeForMamaStatus

```java
static inline short codeForMamaStatus(
    short wombatStatus
)
```


## Public Attributes Documentation

### variable MAMDA_NO_ERROR

```java
static final short MAMDA_NO_ERROR = 0;
```


### variable MAMDA_ERROR_LINE_DOWN

```java
static final short MAMDA_ERROR_LINE_DOWN = 1;
```


The feed handler has detected a Line Down. 


### variable MAMDA_ERROR_NO_SUBSCRIBERS

```java
static final short MAMDA_ERROR_NO_SUBSCRIBERS = 2;
```


The feed handler does not have any subscribers to the subject 


### variable MAMDA_ERROR_BAD_SYMBOL

```java
static final short MAMDA_ERROR_BAD_SYMBOL = 3;
```


The symbol does not exist 


### variable MAMDA_ERROR_EXPIRED

```java
static final short MAMDA_ERROR_EXPIRED = 4;
```


Expired 


### variable MAMDA_ERROR_TIMEOUT

```java
static final short MAMDA_ERROR_TIMEOUT = 5;
```


A time out occurred 


### variable MAMDA_ERROR_MISC

```java
static final short MAMDA_ERROR_MISC = 6;
```


Miscellaneous status. Not an error 


### variable MAMDA_ERROR_STALE

```java
static final short MAMDA_ERROR_STALE = 7;
```


The subject is stale. Messages may have been dropped 


### variable MAMDA_ERROR_PLATFORM_STATUS

```java
static final short MAMDA_ERROR_PLATFORM_STATUS = 8;
```


Error in the underlying messaging API 


### variable MAMDA_ERROR_NOT_ENTITLED

```java
static final short MAMDA_ERROR_NOT_ENTITLED = 9;
```


Not entitled to a subject 


### variable MAMDA_ERROR_NOT_FOUND

```java
static final short MAMDA_ERROR_NOT_FOUND = 10;
```


Not found 


### variable MAMDA_ERROR_POSSIBLY_STALE

```java
static final short MAMDA_ERROR_POSSIBLY_STALE = 11;
```


Messages may have been dropped 


### variable MAMDA_ERROR_NOT_PERMISSIONED

```java
static final short MAMDA_ERROR_NOT_PERMISSIONED = 12;
```


Not permissioned for the subject 


### variable MAMDA_ERROR_TOPIC_CHANGE

```java
static final short MAMDA_ERROR_TOPIC_CHANGE = 13;
```


Topic renamed 


### variable MAMDA_ERROR_BANDWIDTH_EXCEEDED

```java
static final short MAMDA_ERROR_BANDWIDTH_EXCEEDED = 14;
```


Bandwidth exceeded 


### variable MAMDA_ERROR_DELETE

```java
static final short MAMDA_ERROR_DELETE = 17;
```


Message of type DELETE 


### variable MAMDA_ERROR_EXCEPTION

```java
static final short MAMDA_ERROR_EXCEPTION = 999;
```


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100