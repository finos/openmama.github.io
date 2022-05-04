---
title: com::wombat::mamda::MamdaSecurityStatus
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaSecurityStatus





## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#function-tostring)**(short securityStatus) |
| short | **[mamdaSecurityStatusFromString](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#function-mamdasecuritystatusfromstring)**(String securityStatus) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[SECURITY_STATUS_NONE](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-none)**  |
| final short | **[SECURITY_STATUS_NORMAL](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-normal)**  |
| final short | **[SECURITY_STATUS_CLOSED](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-closed)**  |
| final short | **[SECURITY_STATUS_HALTED](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-halted)**  |
| final short | **[SECURITY_STATUS_NOT_EXIST](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-not-exist)**  |
| final short | **[SECURITY_STATUS_DELETED](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-deleted)**  |
| final short | **[SECURITY_STATUS_AUCTION](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-auction)**  |
| final short | **[SECURITY_STATUS_CROSSING](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-crossing)**  |
| final short | **[SECURITY_STATUS_SUSPENDED](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-suspended)**  |
| final short | **[SECURITY_STATUS_AT_LAST](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-at-last)**  |
| final short | **[SECURITY_STATUS_INACTIVE](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-inactive)**  |
| final short | **[SECURITY_STATUS_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html#variable-security-status-unknown)**  |

## Public Functions Documentation

### function toString

```java
static inline String toString(
    short securityStatus
)
```


**Parameters**: 

  * **securityStatus** The security status as a long. 


Convert a [MamdaSecurityStatus](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html) to an appropriate, displayable string.


### function mamdaSecurityStatusFromString

```java
static inline short mamdaSecurityStatusFromString(
    String securityStatus
)
```


**Parameters**: 

  * **securityStatus** The security status as a string.


**Return**: The security status as a short. 

Convert a string representation of a security status to the enumeration.


## Public Attributes Documentation

### variable SECURITY_STATUS_NONE

```java
static final short SECURITY_STATUS_NONE = 0;
```


A set of final shorts representing the status of a security such as whether or not it is halted or closed for trading. 


### variable SECURITY_STATUS_NORMAL

```java
static final short SECURITY_STATUS_NORMAL = 1;
```


### variable SECURITY_STATUS_CLOSED

```java
static final short SECURITY_STATUS_CLOSED = 2;
```


### variable SECURITY_STATUS_HALTED

```java
static final short SECURITY_STATUS_HALTED = 3;
```


### variable SECURITY_STATUS_NOT_EXIST

```java
static final short SECURITY_STATUS_NOT_EXIST = 4;
```


### variable SECURITY_STATUS_DELETED

```java
static final short SECURITY_STATUS_DELETED = 5;
```


### variable SECURITY_STATUS_AUCTION

```java
static final short SECURITY_STATUS_AUCTION = 6;
```


### variable SECURITY_STATUS_CROSSING

```java
static final short SECURITY_STATUS_CROSSING = 7;
```


### variable SECURITY_STATUS_SUSPENDED

```java
static final short SECURITY_STATUS_SUSPENDED = 8;
```


### variable SECURITY_STATUS_AT_LAST

```java
static final short SECURITY_STATUS_AT_LAST = 9;
```


### variable SECURITY_STATUS_INACTIVE

```java
static final short SECURITY_STATUS_INACTIVE = 10;
```


### variable SECURITY_STATUS_UNKNOWN

```java
static final short SECURITY_STATUS_UNKNOWN = 99;
```


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100