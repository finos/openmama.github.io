---
title: Wombat::NullableInt
summary: Modelled after Nullable<T> in C# 2.0 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::NullableInt



Modelled after Nullable<T> in C# 2.0 

Inherits from IComparable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[NullableInt](structWombat_1_1NullableInt.html#function-nullableint)**(int value)<br>Constructor  |
| int | **[GetValueOrDefault](structWombat_1_1NullableInt.html#function-getvalueordefault)**()<br>Get the value  |
| int | **[GetValueOrDefault](structWombat_1_1NullableInt.html#function-getvalueordefault)**(int defaultValue)<br>Get value, or default if value is not defined  |
| override bool | **[Equals](structWombat_1_1NullableInt.html#function-equals)**(object other)<br>Test for equality  |
| int | **[CompareTo](structWombat_1_1NullableInt.html#function-compareto)**(object obj)<br>Compare another object  |
| override int | **[GetHashCode](structWombat_1_1NullableInt.html#function-gethashcode)**()<br>Return the hashcode  |
| override string | **[ToString](structWombat_1_1NullableInt.html#function-tostring)**()<br>Stringify the value  |
| implicit | **[operator NullableInt](structWombat_1_1NullableInt.html#function-operator-nullableint)**(int value)<br>Conversion from int  |
| static | **[operator int](structWombat_1_1NullableInt.html#function-operator-int)**([NullableInt](structWombat_1_1NullableInt.html) value)<br>Conversion to int  |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[HasValue](structWombat_1_1NullableInt.html#property-hasvalue)** <br>Return TRUE if object has a value  |
| int | **[Value](structWombat_1_1NullableInt.html#property-value)** <br>Return the value  |

## Public Functions Documentation

### function NullableInt

```csharp
NullableInt(
    int value
)
```

Constructor 

### function GetValueOrDefault

```csharp
int GetValueOrDefault()
```

Get the value 

<overloads>Get the value</overloads>


### function GetValueOrDefault

```csharp
int GetValueOrDefault(
    int defaultValue
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

### function operator NullableInt

```csharp
static implicit operator NullableInt(
    int value
)
```

Conversion from int 

### function operator int

```csharp
static explicit static operator int(
    NullableInt value
)
```

Conversion to int 

## Public Property Documentation

### property HasValue

```csharp
bool HasValue;
```

Return TRUE if object has a value 

### property Value

```csharp
int Value;
```

Return the value 

-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100