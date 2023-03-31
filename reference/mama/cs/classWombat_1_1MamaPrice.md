---
title: Wombat::MamaPrice
summary: A class for manipulating monetary prices 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPrice



A class for manipulating monetary prices 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IComparable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaPrice](classWombat_1_1MamaPrice.html#function-mamaprice)**()<br>Constructor  |
| | **[MamaPrice](classWombat_1_1MamaPrice.html#function-mamaprice)**([MamaPrice](classWombat_1_1MamaPrice.html) price)<br>Copy constructor  |
| void | **[destroy](classWombat_1_1MamaPrice.html#function-destroy)**()<br>Destroy a mamaPrice object.  |
| void | **[copy](classWombat_1_1MamaPrice.html#function-copy)**([MamaPrice](classWombat_1_1MamaPrice.html) rhs) |
| void | **[clear](classWombat_1_1MamaPrice.html#function-clear)**()<br>Clear a [MamaPrice](classWombat_1_1MamaPrice.html) object.  |
| void | **[add](classWombat_1_1MamaPrice.html#function-add)**([MamaPrice](classWombat_1_1MamaPrice.html) rhs)<br>Add a price object  |
| void | **[subtract](classWombat_1_1MamaPrice.html#function-subtract)**([MamaPrice](classWombat_1_1MamaPrice.html) rhs)<br>Subtract a price object.  |
| bool | **[equal](classWombat_1_1MamaPrice.html#function-equal)**([MamaPrice](classWombat_1_1MamaPrice.html) rhs)<br>Check for equality between two price objects.  |
| bool | **[equals](classWombat_1_1MamaPrice.html#function-equals)**([MamaPrice](classWombat_1_1MamaPrice.html) rhs)<br>Synonym of equal  |
| double | **[compare](classWombat_1_1MamaPrice.html#function-compare)**([MamaPrice](classWombat_1_1MamaPrice.html) rhs)<br>Compare two price objects. The return value is negative if lhs is earlier than rhs, positive if lhs is greater than rhs and zero if the two are equal.  |
| void | **[setValue](classWombat_1_1MamaPrice.html#function-setvalue)**(double val)<br>Set the price value only (no hint information).  |
| void | **[setPrecision](classWombat_1_1MamaPrice.html#function-setprecision)**([mamaPricePrecision](namespaceWombat.html#enum-mamapriceprecision) precision)<br>Set the price precision.  |
| void | **[setHints](classWombat_1_1MamaPrice.html#function-sethints)**(byte hints)<br>Set all of the price hints.  |
| void | **[setWithHints](classWombat_1_1MamaPrice.html#function-setwithhints)**(double val, byte hints)<br>Set the price with hint information.  |
| void | **[setFromString](classWombat_1_1MamaPrice.html#function-setfromstring)**(string str)<br>Set the price from a string representation, preserving any detectable hints.  |
| double | **[getValue](classWombat_1_1MamaPrice.html#function-getvalue)**()<br>Get the price value only.  |
| [mamaPricePrecision](namespaceWombat.html#enum-mamapriceprecision) | **[getPrecision](classWombat_1_1MamaPrice.html#function-getprecision)**()<br>Get the price precision.  |
| byte | **[getHints](classWombat_1_1MamaPrice.html#function-gethints)**()<br>Get the price hints.  |
| double | **[getWithHints](classWombat_1_1MamaPrice.html#function-getwithhints)**(ref int precision)<br>Get the price with special, optional hints.  |
| string | **[getAsString](classWombat_1_1MamaPrice.html#function-getasstring)**()<br>Get the price as a string, formatted according to the hints provided.  |
| override string | **[ToString](classWombat_1_1MamaPrice.html#function-tostring)**()<br>Return a string representation of the price.  |
| void | **[negate](classWombat_1_1MamaPrice.html#function-negate)**()<br>Negate the price value. Hints and precisions are not affected.  |
| bool | **[isZero](classWombat_1_1MamaPrice.html#function-iszero)**()<br>Return whether the price has a value equivalent to zero. It may not be exactly 0.0, but we check against +/- epsilon.  |
| override bool | **[Equals](classWombat_1_1MamaPrice.html#function-equals)**(object obj) |
| int | **[CompareTo](classWombat_1_1MamaPrice.html#function-compareto)**(object rhs) |
| override int | **[GetHashCode](classWombat_1_1MamaPrice.html#function-gethashcode)**() |
| [mamaPricePrecision](namespaceWombat.html#enum-mamapriceprecision) | **[decimals2Precision](classWombat_1_1MamaPrice.html#function-decimals2precision)**(int places)<br>Return the appropriate precision code for a given number of decimal places.  |
| [mamaPricePrecision](namespaceWombat.html#enum-mamapriceprecision) | **[denom2Precision](classWombat_1_1MamaPrice.html#function-denom2precision)**(int denominator)<br>Return the appropriate precision code for a given fractional denominator.  |
| int | **[precision2Decimals](classWombat_1_1MamaPrice.html#function-precision2decimals)**(int precision)<br>Return the number of decimal places for a given precision code.  |
| int | **[precision2Denom](classWombat_1_1MamaPrice.html#function-precision2denom)**(int precision)<br>Return the fractional denominator for a given precision code.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaPrice.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]() |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Public Functions Documentation

### function MamaPrice

```csharp
MamaPrice()
```

Constructor 

### function MamaPrice

```csharp
MamaPrice(
    MamaPrice price
)
```

Copy constructor 

### function destroy

```csharp
void destroy()
```

Destroy a mamaPrice object. 

### function copy

```csharp
void copy(
    MamaPrice rhs
)
```


### function clear

```csharp
void clear()
```

Clear a [MamaPrice](classWombat_1_1MamaPrice.html) object. 

### function add

```csharp
void add(
    MamaPrice rhs
)
```

Add a price object 

### function subtract

```csharp
void subtract(
    MamaPrice rhs
)
```

Subtract a price object. 

### function equal

```csharp
bool equal(
    MamaPrice rhs
)
```

Check for equality between two price objects. 

### function equals

```csharp
bool equals(
    MamaPrice rhs
)
```

Synonym of equal 

### function compare

```csharp
double compare(
    MamaPrice rhs
)
```

Compare two price objects. The return value is negative if lhs is earlier than rhs, positive if lhs is greater than rhs and zero if the two are equal. 

### function setValue

```csharp
void setValue(
    double val
)
```

Set the price value only (no hint information). 

### function setPrecision

```csharp
void setPrecision(
    mamaPricePrecision precision
)
```

Set the price precision. 

### function setHints

```csharp
void setHints(
    byte hints
)
```

Set all of the price hints. 

### function setWithHints

```csharp
void setWithHints(
    double val,
    byte hints
)
```

Set the price with hint information. 

### function setFromString

```csharp
void setFromString(
    string str
)
```

Set the price from a string representation, preserving any detectable hints. 

### function getValue

```csharp
double getValue()
```

Get the price value only. 

### function getPrecision

```csharp
mamaPricePrecision getPrecision()
```

Get the price precision. 

### function getHints

```csharp
byte getHints()
```

Get the price hints. 

### function getWithHints

```csharp
double getWithHints(
    ref int precision
)
```

Get the price with special, optional hints. 

### function getAsString

```csharp
string getAsString()
```

Get the price as a string, formatted according to the hints provided. 

### function ToString

```csharp
override string ToString()
```

Return a string representation of the price. 

### function negate

```csharp
void negate()
```

Negate the price value. Hints and precisions are not affected. 

### function isZero

```csharp
bool isZero()
```

Return whether the price has a value equivalent to zero. It may not be exactly 0.0, but we check against +/- epsilon. 

### function Equals

```csharp
override bool Equals(
    object obj
)
```


### function CompareTo

```csharp
int CompareTo(
    object rhs
)
```


### function GetHashCode

```csharp
override int GetHashCode()
```


### function decimals2Precision

```csharp
static mamaPricePrecision decimals2Precision(
    int places
)
```

Return the appropriate precision code for a given number of decimal places. 

### function denom2Precision

```csharp
static mamaPricePrecision denom2Precision(
    int denominator
)
```

Return the appropriate precision code for a given fractional denominator. 

### function precision2Decimals

```csharp
static int precision2Decimals(
    int precision
)
```

Return the number of decimal places for a given precision code. 

### function precision2Denom

```csharp
static int precision2Denom(
    int precision
)
```

Return the fractional denominator for a given precision code. 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]()

**Return**: MAMA Status code

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100