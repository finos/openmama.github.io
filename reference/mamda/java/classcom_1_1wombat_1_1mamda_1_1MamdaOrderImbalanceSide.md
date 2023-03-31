---
title: com::wombat::mamda::MamdaOrderImbalanceSide
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaOrderImbalanceSide





## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#function-tostring)**() |
| int | **[getValue](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#function-getvalue)**() |
| boolean | **[equals](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#function-equals)**([MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) imbalanceSide) |
| String | **[valueToString](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#function-valuetostring)**(int value) |
| [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) | **[enumObjectForValue](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#function-enumobjectforvalue)**(int value) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final int | **[BID_SIDE_VALUE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#variable-bid-side-value)**  |
| final [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) | **[BID_SIDE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#variable-bid-side)**  |
| final int | **[ASK_SIDE_VALUE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#variable-ask-side-value)**  |
| final [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) | **[ASK_SIDE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#variable-ask-side)**  |
| final int | **[NO_IMBALANCE_VALUE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#variable-no-imbalance-value)**  |
| final [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) | **[NO_IMBALANCE_SIDE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html#variable-no-imbalance-side)**  |

## Public Functions Documentation

### function toString

```java
inline String toString()
```


**Return**: Name for the type. 

Returns the stringified name for the enumerated type.


### function getValue

```java
inline int getValue()
```


**Return**: The integer type. 

Returns the integer value for the type. This value can be used in switch statements against the public XXX_VALUE static members of the class.


### function equals

```java
inline boolean equals(
    MamdaOrderImbalanceSide imbalanceSide
)
```


**Parameters**: 

  * **imbalanceSide** The object to check equality against. 


**Return**: Whether the two objects are equal. 

Compare the two types for equality. Returns true if the integer value of both types is equal. Otherwise returns false.


### function valueToString

```java
static inline String valueToString(
    int value
)
```


**Parameters**: 

  * **value** The int value for a [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html)


**Return**: The string name value of the specified [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) integer value. 

Utility method for mapping type integer values to corresponding string values.

Returns "UNKNOWN" is the int type value is not recognised.


### function enumObjectForValue

```java
static inline MamdaOrderImbalanceSide enumObjectForValue(
    int value
)
```


**Parameters**: 

  * **value** Int value for a [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html)


**Return**: Instance of a [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) if a mapping exists. 

Return an instance of a [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) corresponding to the specified integer value. Returns null if the integer value is not recognised.


## Public Attributes Documentation

### variable BID_SIDE_VALUE

```java
static final int BID_SIDE_VALUE = 0;
```


BID_SIDE_IMBALANCE 


### variable BID_SIDE

```java
static final MamdaOrderImbalanceSide BID_SIDE = new 
    MamdaOrderImbalanceSide (valueToString (BID_SIDE_VALUE), BID_SIDE_VALUE);
```


### variable ASK_SIDE_VALUE

```java
static final int ASK_SIDE_VALUE = 1;
```


ASK_SIDE_IMBALANCE 


### variable ASK_SIDE

```java
static final MamdaOrderImbalanceSide ASK_SIDE = new
    MamdaOrderImbalanceSide (valueToString (ASK_SIDE_VALUE), ASK_SIDE_VALUE);
```


### variable NO_IMBALANCE_VALUE

```java
static final int NO_IMBALANCE_VALUE = 2;
```


NO_IMBALANCE 


### variable NO_IMBALANCE_SIDE

```java
static final MamdaOrderImbalanceSide NO_IMBALANCE_SIDE = new
    MamdaOrderImbalanceSide (valueToString (NO_IMBALANCE_VALUE), NO_IMBALANCE_VALUE);
```


-------------------------------

Updated on 2023-03-31 at 15:30:33 +0100