---
title: Wombat::MamdaOrderImbalanceType
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceType





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[getValue](classWombat_1_1MamdaOrderImbalanceType.html#function-getvalue)**()<br>Returns the integer value for the type. This value can be used in switch statements against the public XXX_VALUE static members of the class.  |
| string | **[toString](classWombat_1_1MamdaOrderImbalanceType.html#function-tostring)**()<br>Returns the string name for the enumerated type.  |
| override string | **[ToString](classWombat_1_1MamdaOrderImbalanceType.html#function-tostring)**() |
| override int | **[GetHashCode](classWombat_1_1MamdaOrderImbalanceType.html#function-gethashcode)**() |
| bool | **[equals](classWombat_1_1MamdaOrderImbalanceType.html#function-equals)**([MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) imbDataType)<br>Compare the two types for equality. Returns true if the integer value of both types is equal. Otherwise returns false.  |
| override bool | **[Equals](classWombat_1_1MamdaOrderImbalanceType.html#function-equals)**(object obj) |
| [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[enumObjectForValue](classWombat_1_1MamdaOrderImbalanceType.html#function-enumobjectforvalue)**(int value)<br>Return an instance of a [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) corresponding to the specified integer value. Returns null if the integer value is not recognised.  |
| String | **[valueToString](classWombat_1_1MamdaOrderImbalanceType.html#function-valuetostring)**(int value)<br>Utility method for mapping type integer values to corresponding string values.  |
| int | **[stringToValue](classWombat_1_1MamdaOrderImbalanceType.html#function-stringtovalue)**(String type) |
| bool | **[isMamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html#function-ismamdaorderimbalancetype)**(int value) |
| bool | **[isMamdaImbalanceOrder](classWombat_1_1MamdaOrderImbalanceType.html#function-ismamdaimbalanceorder)**(int value) |
| bool | **[operator==](classWombat_1_1MamdaOrderImbalanceType.html#function-operator==)**([MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) left, [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) right) |
| bool | **[operator!=](classWombat_1_1MamdaOrderImbalanceType.html#function-operator!=)**([MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) left, [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) right) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const int | **[MARKET_IMBALANCE_BUY_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-market-imbalance-buy-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[MARKET_IMBALANCE_BUY](classWombat_1_1MamdaOrderImbalanceType.html#variable-market-imbalance-buy)**  |
| const int | **[MARKET_IMBALANCE_SELL_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-market-imbalance-sell-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[MARKET_IMBALANCE_SELL](classWombat_1_1MamdaOrderImbalanceType.html#variable-market-imbalance-sell)**  |
| const int | **[NO_MARKET_IMBALANCE_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-no-market-imbalance-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[NO_MARKET_IMBALANCE](classWombat_1_1MamdaOrderImbalanceType.html#variable-no-market-imbalance)**  |
| const int | **[MOC_IMBALANCE_BUY_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-moc-imbalance-buy-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[MOC_IMBALANCE_BUY](classWombat_1_1MamdaOrderImbalanceType.html#variable-moc-imbalance-buy)**  |
| const int | **[MOC_IMBALANCE_SELL_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-moc-imbalance-sell-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[MOC_IMBALANCE_SELL](classWombat_1_1MamdaOrderImbalanceType.html#variable-moc-imbalance-sell)**  |
| const int | **[NO_MOC_IMBALANCE_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-no-moc-imbalance-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[NO_MOC_IMBALANCE](classWombat_1_1MamdaOrderImbalanceType.html#variable-no-moc-imbalance)**  |
| const int | **[ORDER_IMB_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-order-imb-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[ORDER_IMB](classWombat_1_1MamdaOrderImbalanceType.html#variable-order-imb)**  |
| const int | **[ORDER_INF_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-order-inf-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[ORDER_INF](classWombat_1_1MamdaOrderImbalanceType.html#variable-order-inf)**  |
| const int | **[ORDER_IMBALANCE_BUY_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-order-imbalance-buy-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[ORDER_IMBALANCE_BUY](classWombat_1_1MamdaOrderImbalanceType.html#variable-order-imbalance-buy)**  |
| const int | **[ORDER_IMBALANCE_SELL_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-order-imbalance-sell-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[ORDER_IMBALANCE_SELL](classWombat_1_1MamdaOrderImbalanceType.html#variable-order-imbalance-sell)**  |
| const int | **[NO_ORDER_IMBALANCE_VALUE](classWombat_1_1MamdaOrderImbalanceType.html#variable-no-order-imbalance-value)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[NO_ORDER_IMBALANCE](classWombat_1_1MamdaOrderImbalanceType.html#variable-no-order-imbalance)**  |
| const int | **[UNKNOWN](classWombat_1_1MamdaOrderImbalanceType.html#variable-unknown)**  |
| readonly [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) | **[TYPE_UNKNOWN](classWombat_1_1MamdaOrderImbalanceType.html#variable-type-unknown)**  |

## Public Functions Documentation

### function getValue

```csharp
int getValue()
```

Returns the integer value for the type. This value can be used in switch statements against the public XXX_VALUE static members of the class. 

**Return**: The integer type.

### function toString

```csharp
string toString()
```

Returns the string name for the enumerated type. 

**Return**: Name for the type.

### function ToString

```csharp
override string ToString()
```


### function GetHashCode

```csharp
override int GetHashCode()
```


### function equals

```csharp
bool equals(
    MamdaOrderImbalanceType imbDataType
)
```

Compare the two types for equality. Returns true if the integer value of both types is equal. Otherwise returns false. 

**Parameters**: 

  * **imbDataType** The object to check equality against.


**Return**: Whether the two objects are equal.

### function Equals

```csharp
override bool Equals(
    object obj
)
```


### function enumObjectForValue

```csharp
static MamdaOrderImbalanceType enumObjectForValue(
    int value
)
```

Return an instance of a [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) corresponding to the specified integer value. Returns null if the integer value is not recognised. 

**Parameters**: 

  * **value** Int value for a [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html)


**Return**: Instance of a [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) if a mapping exists.

### function valueToString

```csharp
static String valueToString(
    int value
)
```

Utility method for mapping type integer values to corresponding string values. 

**Parameters**: 

  * **value** The int value for a [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html)


**Return**: The string name value of the specified [MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html) value.

Returns "UNKNOWN" if the int type value is not recognised.


### function stringToValue

```csharp
static int stringToValue(
    String type
)
```


### function isMamdaOrderImbalanceType

```csharp
static bool isMamdaOrderImbalanceType(
    int value
)
```


### function isMamdaImbalanceOrder

```csharp
static bool isMamdaImbalanceOrder(
    int value
)
```


### function operator==

```csharp
static bool operator==(
    MamdaOrderImbalanceType left,
    MamdaOrderImbalanceType right
)
```


### function operator!=

```csharp
static bool operator!=(
    MamdaOrderImbalanceType left,
    MamdaOrderImbalanceType right
)
```


## Public Attributes Documentation

### variable MARKET_IMBALANCE_BUY_VALUE

```csharp
static const int MARKET_IMBALANCE_BUY_VALUE = 16;
```


MARKET_IMBALANCE_BUY 


### variable MARKET_IMBALANCE_BUY

```csharp
static readonly MamdaOrderImbalanceType MARKET_IMBALANCE_BUY =
			new MamdaOrderImbalanceType(valueToString(MARKET_IMBALANCE_BUY_VALUE), MARKET_IMBALANCE_BUY_VALUE);
```


### variable MARKET_IMBALANCE_SELL_VALUE

```csharp
static const int MARKET_IMBALANCE_SELL_VALUE =17;
```


MARKET_IMBALANCE_SELL 


### variable MARKET_IMBALANCE_SELL

```csharp
static readonly MamdaOrderImbalanceType MARKET_IMBALANCE_SELL =
			new MamdaOrderImbalanceType(valueToString(MARKET_IMBALANCE_SELL_VALUE), MARKET_IMBALANCE_SELL_VALUE);
```


### variable NO_MARKET_IMBALANCE_VALUE

```csharp
static const int NO_MARKET_IMBALANCE_VALUE = 18;
```


NO_MARKET_IMBALANCE 


### variable NO_MARKET_IMBALANCE

```csharp
static readonly MamdaOrderImbalanceType NO_MARKET_IMBALANCE =
			new MamdaOrderImbalanceType(valueToString(NO_MARKET_IMBALANCE_VALUE), NO_MARKET_IMBALANCE_VALUE);
```


### variable MOC_IMBALANCE_BUY_VALUE

```csharp
static const int MOC_IMBALANCE_BUY_VALUE = 19;
```


MOC_IMBALANCE_BUY 


### variable MOC_IMBALANCE_BUY

```csharp
static readonly MamdaOrderImbalanceType MOC_IMBALANCE_BUY =
			new MamdaOrderImbalanceType(valueToString(MOC_IMBALANCE_BUY_VALUE), MOC_IMBALANCE_BUY_VALUE);
```


### variable MOC_IMBALANCE_SELL_VALUE

```csharp
static const int MOC_IMBALANCE_SELL_VALUE = 20;
```


MOC_IMBALANCE_SELL 


### variable MOC_IMBALANCE_SELL

```csharp
static readonly MamdaOrderImbalanceType MOC_IMBALANCE_SELL =
			new MamdaOrderImbalanceType(valueToString(MOC_IMBALANCE_SELL_VALUE), MOC_IMBALANCE_SELL_VALUE);
```


### variable NO_MOC_IMBALANCE_VALUE

```csharp
static const int NO_MOC_IMBALANCE_VALUE = 21;
```


NO_MOC_IMBALANCE 


### variable NO_MOC_IMBALANCE

```csharp
static readonly MamdaOrderImbalanceType NO_MOC_IMBALANCE =
			new MamdaOrderImbalanceType(valueToString(NO_MOC_IMBALANCE_VALUE), NO_MOC_IMBALANCE_VALUE);
```


### variable ORDER_IMB_VALUE

```csharp
static const int ORDER_IMB_VALUE = 22;
```


ORDER_IMB 


### variable ORDER_IMB

```csharp
static readonly MamdaOrderImbalanceType ORDER_IMB =
			new MamdaOrderImbalanceType(valueToString(ORDER_IMB_VALUE), ORDER_IMB_VALUE);
```


### variable ORDER_INF_VALUE

```csharp
static const int ORDER_INF_VALUE = 23;
```


ORDER_INF 


### variable ORDER_INF

```csharp
static readonly MamdaOrderImbalanceType ORDER_INF =
			new MamdaOrderImbalanceType(valueToString(ORDER_INF_VALUE), ORDER_INF_VALUE);
```


### variable ORDER_IMBALANCE_BUY_VALUE

```csharp
static const int ORDER_IMBALANCE_BUY_VALUE = 24;
```


ORDER_IMBALANCE_BUY_VALUE 


### variable ORDER_IMBALANCE_BUY

```csharp
static readonly MamdaOrderImbalanceType ORDER_IMBALANCE_BUY =
			new MamdaOrderImbalanceType(valueToString(ORDER_IMBALANCE_BUY_VALUE), ORDER_IMBALANCE_BUY_VALUE);
```


### variable ORDER_IMBALANCE_SELL_VALUE

```csharp
static const int ORDER_IMBALANCE_SELL_VALUE = 25;
```


ORDER_IMBALANCE_SELL_VALUE 


### variable ORDER_IMBALANCE_SELL

```csharp
static readonly MamdaOrderImbalanceType ORDER_IMBALANCE_SELL =
			new MamdaOrderImbalanceType(valueToString(ORDER_IMBALANCE_SELL_VALUE), ORDER_IMBALANCE_SELL_VALUE);
```


### variable NO_ORDER_IMBALANCE_VALUE

```csharp
static const int NO_ORDER_IMBALANCE_VALUE = 26;
```


NO_ORDER_IMBALANCE 


### variable NO_ORDER_IMBALANCE

```csharp
static readonly MamdaOrderImbalanceType NO_ORDER_IMBALANCE =
			new MamdaOrderImbalanceType(valueToString(NO_ORDER_IMBALANCE_VALUE), NO_ORDER_IMBALANCE_VALUE);
```


### variable UNKNOWN

```csharp
static const int UNKNOWN = -99;
```


UKNOWN 


### variable TYPE_UNKNOWN

```csharp
static readonly MamdaOrderImbalanceType TYPE_UNKNOWN =
			new MamdaOrderImbalanceType(valueToString(UNKNOWN), UNKNOWN);
```


-------------------------------

Updated on 2023-03-31 at 15:30:13 +0100