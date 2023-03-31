---
title: Wombat::SimpleDateFormat
summary: Wraps a date formatting settings 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::SimpleDateFormat



Wraps a date formatting settings 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SimpleDateFormat](classWombat_1_1SimpleDateFormat.html#function-simpledateformat)**(string format)<br>Creates a date format, using the specified date/time format, and an invariant culture System.DateTime.ToString(System.String) |
| | **[SimpleDateFormat](classWombat_1_1SimpleDateFormat.html#function-simpledateformat)**(string format, IFormatProvider formatProvider)<br>Creates a date format, using the specified date/time format and culture (format provider) System.DateTime.ToString(System.String, System.IFormatProvider) |
| string | **[Format](classWombat_1_1SimpleDateFormat.html#function-format)**(DateTime dateTime) |
| DateTime | **[Parse](classWombat_1_1SimpleDateFormat.html#function-parse)**(string dateTimeString) |
| string | **[Format](classWombat_1_1SimpleDateFormat.html#function-format)**(DateTime dateTime, string format, IFormatProvider formatProvider) |
| DateTime | **[Parse](classWombat_1_1SimpleDateFormat.html#function-parse)**(string dateTimeString, string format, IFormatProvider formatProvider) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| string | **[FormatString](classWombat_1_1SimpleDateFormat.html#property-formatstring)**  |
| IFormatProvider | **[FormatProvider](classWombat_1_1SimpleDateFormat.html#property-formatprovider)**  |

## Public Functions Documentation

### function SimpleDateFormat

```csharp
SimpleDateFormat(
    string format
)
```

Creates a date format, using the specified date/time format, and an invariant culture System.DateTime.ToString(System.String)

### function SimpleDateFormat

```csharp
SimpleDateFormat(
    string format,
    IFormatProvider formatProvider
)
```

Creates a date format, using the specified date/time format and culture (format provider) System.DateTime.ToString(System.String, System.IFormatProvider)

### function Format

```csharp
string Format(
    DateTime dateTime
)
```


### function Parse

```csharp
DateTime Parse(
    string dateTimeString
)
```


### function Format

```csharp
static string Format(
    DateTime dateTime,
    string format,
    IFormatProvider formatProvider
)
```


### function Parse

```csharp
static DateTime Parse(
    string dateTimeString,
    string format,
    IFormatProvider formatProvider
)
```


## Public Property Documentation

### property FormatString

```csharp
string FormatString;
```


### property FormatProvider

```csharp
IFormatProvider FormatProvider;
```


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100