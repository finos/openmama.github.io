---
title: Wombat::MamdaOrderImbalanceSide
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceSide





## Public Functions

|                | Name           |
| -------------- | -------------- |
| override string | **[ToString](classWombat_1_1MamdaOrderImbalanceSide.html#function-tostring)**()<br>Returns the string name for the enumerated type.  |
| string | **[toString](classWombat_1_1MamdaOrderImbalanceSide.html#function-tostring)**()<br>Returns the string name for the enumerated type.  |
| int | **[getValue](classWombat_1_1MamdaOrderImbalanceSide.html#function-getvalue)**()<br>Returns the integer value for the type. This value can be used in switch statements against the public XXX_VALUE const members of the class.  |
| bool | **[equals](classWombat_1_1MamdaOrderImbalanceSide.html#function-equals)**([MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) imbalanceSide)<br>Compare the two types for equality.  |
| override bool | **[Equals](classWombat_1_1MamdaOrderImbalanceSide.html#function-equals)**(object obj) |
| override int | **[GetHashCode](classWombat_1_1MamdaOrderImbalanceSide.html#function-gethashcode)**() |
| bool | **[operator==](classWombat_1_1MamdaOrderImbalanceSide.html#function-operator==)**([MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) left, [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) right) |
| bool | **[operator!=](classWombat_1_1MamdaOrderImbalanceSide.html#function-operator!=)**([MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) left, [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) right) |
| String | **[valueToString](classWombat_1_1MamdaOrderImbalanceSide.html#function-valuetostring)**(int value)<br>Utility method for mapping type integer values to corresponding string values.  |
| [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) | **[enumObjectForValue](classWombat_1_1MamdaOrderImbalanceSide.html#function-enumobjectforvalue)**(int value)<br>Return an instance of a [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) corresponding to the specified integer value. Returns null if the integer value is not recognised.  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const int | **[BID_SIDE_VALUE](classWombat_1_1MamdaOrderImbalanceSide.html#variable-bid-side-value)**  |
| readonly [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) | **[BID_SIDE](classWombat_1_1MamdaOrderImbalanceSide.html#variable-bid-side)**  |
| const int | **[ASK_SIDE_VALUE](classWombat_1_1MamdaOrderImbalanceSide.html#variable-ask-side-value)**  |
| readonly [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) | **[ASK_SIDE](classWombat_1_1MamdaOrderImbalanceSide.html#variable-ask-side)**  |
| const int | **[NO_IMBALANCE_VALUE](classWombat_1_1MamdaOrderImbalanceSide.html#variable-no-imbalance-value)**  |
| readonly [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) | **[NO_IMBALANCE_SIDE](classWombat_1_1MamdaOrderImbalanceSide.html#variable-no-imbalance-side)**  |

## Public Functions Documentation

### function ToString

```csharp
override string ToString()
```

Returns the string name for the enumerated type. 

**Return**: Name for the type.

### function toString

```csharp
string toString()
```

Returns the string name for the enumerated type. 

**Return**: Name for the type.

### function getValue

```csharp
int getValue()
```

Returns the integer value for the type. This value can be used in switch statements against the public XXX_VALUE const members of the class. 

**Return**: The integer type.

### function equals

```csharp
bool equals(
    MamdaOrderImbalanceSide imbalanceSide
)
```

Compare the two types for equality. 

**Parameters**: 

  * **imbalanceSide** The object to check equality against.


**Return**: Returns true if the integer value of both types is equal. Otherwise returns false.

### function Equals

```csharp
override bool Equals(
    object obj
)
```


### function GetHashCode

```csharp
override int GetHashCode()
```


### function operator==

```csharp
static bool operator==(
    MamdaOrderImbalanceSide left,
    MamdaOrderImbalanceSide right
)
```


### function operator!=

```csharp
static bool operator!=(
    MamdaOrderImbalanceSide left,
    MamdaOrderImbalanceSide right
)
```


### function valueToString

```csharp
static String valueToString(
    int value
)
```

Utility method for mapping type integer values to corresponding string values. 

**Parameters**: 

  * **value** The int value for a [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html)


**Return**: The string name value of the specified [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) integer value

Returns "UNKNOWN" is the int type value is not recognised.


### function enumObjectForValue

```csharp
static MamdaOrderImbalanceSide enumObjectForValue(
    int value
)
```

Return an instance of a [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) corresponding to the specified integer value. Returns null if the integer value is not recognised. 

**Parameters**: 

  * **value** Int value for a [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html)


**Return**: Instance of a [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) if a mapping exists.

## Public Attributes Documentation

### variable BID_SIDE_VALUE

```csharp
static const int BID_SIDE_VALUE = 0;
```


BID_SIDE_IMBALANCE 


### variable BID_SIDE

```csharp
static readonly MamdaOrderImbalanceSide BID_SIDE =
			new MamdaOrderImbalanceSide(valueToString(BID_SIDE_VALUE), BID_SIDE_VALUE);
```


### variable ASK_SIDE_VALUE

```csharp
static const int ASK_SIDE_VALUE = 1;
```


ASK_SIDE_IMBALANCE 


### variable ASK_SIDE

```csharp
static readonly MamdaOrderImbalanceSide ASK_SIDE =
			new MamdaOrderImbalanceSide(valueToString(ASK_SIDE_VALUE), ASK_SIDE_VALUE);
```


### variable NO_IMBALANCE_VALUE

```csharp
static const int NO_IMBALANCE_VALUE = 2;
```


NO_IMBALANCE 


### variable NO_IMBALANCE_SIDE

```csharp
static readonly MamdaOrderImbalanceSide NO_IMBALANCE_SIDE =
			new MamdaOrderImbalanceSide(valueToString(NO_IMBALANCE_VALUE), NO_IMBALANCE_VALUE);
```


-------------------------------

Updated on 2023-03-31 at 15:30:13 +0100