---
title: Wombat::NullableBool
summary: Modelled after Nullable<T> in C# 2.0 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::NullableBool



Modelled after Nullable<T> in C# 2.0 

Inherits from IComparable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[NullableBool](structWombat_1_1NullableBool.html#function-nullablebool)**(bool value)<br>Constructor  |
| bool | **[GetValueOrDefault](structWombat_1_1NullableBool.html#function-getvalueordefault)**()<br>Get the value  |
| bool | **[GetValueOrDefault](structWombat_1_1NullableBool.html#function-getvalueordefault)**(bool defaultValue)<br>Get value, or default if value is not defined  |
| override bool | **[Equals](structWombat_1_1NullableBool.html#function-equals)**(object other)<br>Test for equality  |
| int | **[CompareTo](structWombat_1_1NullableBool.html#function-compareto)**(object obj)<br>Compare another object  |
| override int | **[GetHashCode](structWombat_1_1NullableBool.html#function-gethashcode)**()<br>Return the hashcode  |
| override string | **[ToString](structWombat_1_1NullableBool.html#function-tostring)**()<br>Stringify the value  |
| implicit | **[operator NullableBool](structWombat_1_1NullableBool.html#function-operator-nullablebool)**(bool value)<br>Conversion from bool  |
| static | **[operator bool](structWombat_1_1NullableBool.html#function-operator-bool)**([NullableBool](structWombat_1_1NullableBool.html) value)<br>Conversion to bool  |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[HasValue](structWombat_1_1NullableBool.html#property-hasvalue)** <br>Return TRUE if object has a value  |
| bool | **[Value](structWombat_1_1NullableBool.html#property-value)** <br>Return the value  |

## Public Functions Documentation

### function NullableBool

```csharp
NullableBool(
    bool value
)
```

Constructor 

### function GetValueOrDefault

```csharp
bool GetValueOrDefault()
```

Get the value 

<overloads>Get the value</overloads>


### function GetValueOrDefault

```csharp
bool GetValueOrDefault(
    bool defaultValue
)
```

Get value, or default if value is not defined 

### function Equals

```csharp
override bool Equals(
    object other
)
```

Test for equality 

**Parameters**: 

  * **other** Object to compare with


**Return**: TRUE if other object is equal to this one, FALSE otherwise

### function CompareTo

```csharp
int CompareTo(
    object obj
)
```

Compare another object 

**Parameters**: 

  * **obj** Object to compare with


**Return**: If both objects are the same, returns zero. If this object has a value but the other object does not, returns +1. If this object does not have a value, but the other object does have a value, returns -1. If both objects have a value, returns an indication of their relative values /returns> 

### function GetHashCode

```csharp
override int GetHashCode()
```

Return the hashcode 

### function ToString

```csharp
override string ToString()
```

Stringify the value 

### function operator NullableBool

```csharp
static implicit operator NullableBool(
    bool value
)
```

Conversion from bool 

### function operator bool

```csharp
static explicit static operator bool(
    NullableBool value
)
```

Conversion to bool 

## Public Property Documentation

### property HasValue

```csharp
bool HasValue;
```

Return TRUE if object has a value 

### property Value

```csharp
bool Value;
```

Return the value 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100