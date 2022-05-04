---
title: Wombat::MamdaSecurityStatus
summary: Security Status values 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecurityStatus



Security Status values 

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[mamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html#enum-mamdasecuritystatus)** { SECURITY_STATUS_NONE = 0, SECURITY_STATUS_NORMAL = 1, SECURITY_STATUS_CLOSED = 2, SECURITY_STATUS_HALTED = 3, SECURITY_STATUS_NOT_EXIST = 4, SECURITY_STATUS_DELETED = 5, SECURITY_STATUS_AUCTION = 6, SECURITY_STATUS_CROSSING = 7, SECURITY_STATUS_SUSPENDED = 8, SECURITY_STATUS_AT_LAST = 9, SECURITY_STATUS_INACTIVE = 10, SECURITY_STATUS_UNKNOWN = 99}<br>An enumeration representing the status of a security such as whether or not it is halted or closed for trading.  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| string | **[toString](classWombat_1_1MamdaSecurityStatus.html#function-tostring)**([MamdaSecurityStatus.mamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html#enum-mamdasecuritystatus) securityStatus)<br>Convert a [MamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html) to an appropriate, displayable string  |
| [MamdaSecurityStatus.mamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html#enum-mamdasecuritystatus) | **[mamdaSecurityStatusFromString](classWombat_1_1MamdaSecurityStatus.html#function-mamdasecuritystatusfromstring)**(string securityStatus)<br>Convert a string representation of a security status to the enumeration.  |

## Public Types Documentation

### enum mamdaSecurityStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SECURITY_STATUS_NONE | 0|   |
| SECURITY_STATUS_NORMAL | 1|   |
| SECURITY_STATUS_CLOSED | 2|   |
| SECURITY_STATUS_HALTED | 3|   |
| SECURITY_STATUS_NOT_EXIST | 4|   |
| SECURITY_STATUS_DELETED | 5|   |
| SECURITY_STATUS_AUCTION | 6|   |
| SECURITY_STATUS_CROSSING | 7|   |
| SECURITY_STATUS_SUSPENDED | 8|   |
| SECURITY_STATUS_AT_LAST | 9|   |
| SECURITY_STATUS_INACTIVE | 10|   |
| SECURITY_STATUS_UNKNOWN | 99|   |



An enumeration representing the status of a security such as whether or not it is halted or closed for trading. 

## Public Functions Documentation

### function toString

```csharp
static string toString(
    MamdaSecurityStatus.mamdaSecurityStatus securityStatus
)
```

Convert a [MamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html) to an appropriate, displayable string 

### function mamdaSecurityStatusFromString

```csharp
static MamdaSecurityStatus.mamdaSecurityStatus mamdaSecurityStatusFromString(
    string securityStatus
)
```

Convert a string representation of a security status to the enumeration. 

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100