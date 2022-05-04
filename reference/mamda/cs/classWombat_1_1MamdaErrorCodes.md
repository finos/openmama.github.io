---
title: Wombat::MamdaErrorCodes
summary: Helper class to transform error codes into their textual description and to map mamaMsgStatus codes to MamdaErrorCodes
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaErrorCodes



Helper class to transform error codes into their textual description and to map mamaMsgStatus codes to [MamdaErrorCodes]()

## Public Functions

|                | Name           |
| -------------- | -------------- |
| string | **[stringForMamdaError](classWombat_1_1MamdaErrorCodes.html#function-stringformamdaerror)**([MamdaErrorCode](namespaceWombat.html#enum-mamdaerrorcode) code)<br>Return a text description of the message's status.  |
| [MamdaErrorCode](namespaceWombat.html#enum-mamdaerrorcode) | **[codeForMamaMsgStatus](classWombat_1_1MamdaErrorCodes.html#function-codeformamamsgstatus)**(mamaMsgStatus wombatStatus)<br>Returns the respective MamdaErrorCode for a mamaMsgStatus code  |

## Public Functions Documentation

### function stringForMamdaError

```csharp
static string stringForMamdaError(
    MamdaErrorCode code
)
```

Return a text description of the message's status. 

**Parameters**: 

  * **code** The error code.


**Return**: The description.

### function codeForMamaMsgStatus

```csharp
static MamdaErrorCode codeForMamaMsgStatus(
    mamaMsgStatus wombatStatus
)
```

Returns the respective MamdaErrorCode for a mamaMsgStatus code 

**Parameters**: 

  * **wombatStatus** mamaMsgStatus


**Return**: The respective MamdaErrorCode

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100