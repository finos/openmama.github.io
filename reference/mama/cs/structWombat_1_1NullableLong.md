---
title: Wombat::NullableLong
summary: Modelled after Nullable<T> in C# 2.0 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::NullableLong



Modelled after Nullable<T> in C# 2.0 

Inherits from IComparable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[NullableLong](structWombat_1_1NullableLong.html#function-nullablelong)**(long value)<br>Constructor  |
| long | **[GetValueOrDefault](structWombat_1_1NullableLong.html#function-getvalueordefault)**()<br>Get the value  |
| long | **[GetValueOrDefault](structWombat_1_1NullableLong.html#function-getvalueordefault)**(long defaultValue)<br>Get value, or default if value is not defined  |
| override bool | **[Equals](structWombat_1_1NullableLong.html#function-equals)**(object other)<br>Return TRUE if other object is equal to this one  |
| int | **[CompareTo](structWombat_1_1NullableLong.html#function-compareto)**(object obj)<br>Compare another object. If both objects are the same, then return zero. If this object has a value but the other object does not, return +1 If this object does not have a value, but the other object does have a value, return -1. If both objects have a value, the return value will be an indication of their relative values  |
| override int | **[GetHashCode](structWombat_1_1NullableLong.html#function-gethashcode)**()<br>Return the hashcode  |
| override string | **[ToString](structWombat_1_1NullableLong.html#function-tostring)**()<br>Stringify the value  |
| implicit | **[operator NullableLong](structWombat_1_1NullableLong.html#function-operator-nullablelong)**(long value)<br>For implicit type conversions  |
| static | **[operator long](structWombat_1_1NullableLong.html#function-operator-long)**([NullableLong](structWombat_1_1NullableLong.html) value)<br>For explicit type conversions  |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[HasValue](structWombat_1_1NullableLong.html#property-hasvalue)** <br>Return TRUE if object has a value  |
| long | **[Value](structWombat_1_1NullableLong.html#property-value)** <br>Return the value  |

## Public Functions Documentation

### function NullableLong

```csharp
NullableLong(
    long value
)
```

Constructor 

### function GetValueOrDefault

```csharp
long GetValueOrDefault()
```

Get the value 

<overloads>Get the value</overloads>


### function GetValueOrDefault

```csharp
long GetValueOrDefault(
    long defaultValue
)
```

Get value, or default if value is not defined 

### function Equals

```csharp
override bool Equals(
    object other
)
```

Return TRUE if other object is equal to this one 

### function CompareTo

```csharp
int CompareTo(
    object obj
)
```

Compare another object. If both objects are the same, then return zero. If this object has a value but the other object does not, return +1 If this object does not have a value, but the other object does have a value, return -1. If both objects have a value, the return value will be an indication of their relative values 

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

### function operator NullableLong

```csharp
static implicit operator NullableLong(
    long value
)
```

For implicit type conversions 

### function operator long

```csharp
static explicit static operator long(
    NullableLong value
)
```

For explicit type conversions 

## Public Property Documentation

### property HasValue

```csharp
bool HasValue;
```

Return TRUE if object has a value 

### property Value

```csharp
long Value;
```

Return the value 

-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100