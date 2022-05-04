---
title: Wombat::MamaException
summary: Provides a MAMA API-specific exception which captures the status code of the last MAMA API call and a textual description of the error. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaException



Provides a MAMA API-specific exception which captures the status code of the last MAMA API call and a textual description of the error. 

Inherits from Exception

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaException](classWombat_1_1MamaException.html#function-mamaexception)**([MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status)<br>Constructs a new [MamaException](classWombat_1_1MamaException.html) with the specified status code. Automatically populates the textual description of the error.  |
| | **[MamaException](classWombat_1_1MamaException.html#function-mamaexception)**([MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status, string message)<br>Constructs a new [MamaException](classWombat_1_1MamaException.html) with the specified status code and a custom error message.  |
| override void | **[GetObjectData](classWombat_1_1MamaException.html#function-getobjectdata)**(SerializationInfo info, StreamingContext context) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaException](classWombat_1_1MamaException.html#function-mamaexception)**(SerializationInfo info, StreamingContext context) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[Status](classWombat_1_1MamaException.html#property-status)** <br>Returns the MAMA status code.  |

## Public Functions Documentation

### function MamaException

```csharp
MamaException(
    MamaStatus.mamaStatus status
)
```

Constructs a new [MamaException](classWombat_1_1MamaException.html) with the specified status code. Automatically populates the textual description of the error. 

**Parameters**: 

  * **status** the MAMA status code


### function MamaException

```csharp
MamaException(
    MamaStatus.mamaStatus status,
    string message
)
```

Constructs a new [MamaException](classWombat_1_1MamaException.html) with the specified status code and a custom error message. 

**Parameters**: 

  * **status** the MAMA status code
  * **message** the custom error message


### function GetObjectData

```csharp
override void GetObjectData(
    SerializationInfo info,
    StreamingContext context
)
```


## Protected Functions Documentation

### function MamaException

```csharp
MamaException(
    SerializationInfo info,
    StreamingContext context
)
```


## Public Property Documentation

### property Status

```csharp
MamaStatus.mamaStatus Status;
```

Returns the MAMA status code. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100