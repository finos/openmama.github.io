---
title: com::wombat::mama::MamaPrice
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaPrice





Inherits from Comparable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-mamaprice)**() |
| | **[MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-mamaprice)**(double value) |
| | **[MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-mamaprice)**(double value, [MamaPricePrecision](classcom_1_1wombat_1_1mama_1_1MamaPricePrecision.html) precision) |
| | **[MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-mamaprice)**([MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) src) |
| int | **[hashCode](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-hashcode)**() |
| boolean | **[equals](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-equals)**(Object obj) |
| int | **[compareTo](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-compareto)**(Object obj) |
| void | **[add](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-add)**([MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) value) |
| void | **[add](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-add)**(double value) |
| void | **[subtract](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-subtract)**([MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) value) |
| void | **[subtract](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-subtract)**(double value) |
| native void | **[clear](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-clear)**() |
| void | **[set](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-set)**(double priceValue, [MamaPriceHints](classcom_1_1wombat_1_1mama_1_1MamaPriceHints.html) hints) |
| native void | **[setValue](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-setvalue)**(double value) |
| native void | **[setFromString](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-setfromstring)**(String value) |
| void | **[setPrecision](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-setprecision)**([MamaPricePrecision](classcom_1_1wombat_1_1mama_1_1MamaPricePrecision.html) precision) |
| void | **[setHints](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-sethints)**([MamaPriceHints](classcom_1_1wombat_1_1mama_1_1MamaPriceHints.html) hints) |
| native double | **[getValue](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-getvalue)**() |
| double | **[getRoundedValue](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-getroundedvalue)**() |
| double | **[getRoundedValue](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-getroundedvalue)**([MamaPricePrecision](classcom_1_1wombat_1_1mama_1_1MamaPricePrecision.html) precision) |
| [MamaPricePrecision](classcom_1_1wombat_1_1mama_1_1MamaPricePrecision.html) | **[getPrecision](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-getprecision)**() |
| [MamaPriceHints](classcom_1_1wombat_1_1mama_1_1MamaPriceHints.html) | **[getHints](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-gethints)**() |
| native String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-tostring)**() |
| void | **[negate](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-negate)**() |
| boolean | **[isZero](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-iszero)**() |
| native void | **[setIsValidPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-setisvalidprice)**(boolean valid) |
| native boolean | **[getIsValidPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-getisvalidprice)**() |
| native void | **[copy](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-copy)**([MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) price) |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-destroy)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-getpointerval)**() |
| Object | **[clone](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-clone)**() |
| void | **[finalize](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#function-finalize)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final double | **[EPSILON](classcom_1_1wombat_1_1mama_1_1MamaPrice.html#variable-epsilon)**  |

## Public Functions Documentation

### function MamaPrice

```java
inline MamaPrice()
```


### function MamaPrice

```java
inline MamaPrice(
    double value
)
```


### function MamaPrice

```java
inline MamaPrice(
    double value,
    MamaPricePrecision precision
)
```


### function MamaPrice

```java
inline MamaPrice(
    MamaPrice src
)
```


### function hashCode

```java
inline int hashCode()
```


### function equals

```java
inline boolean equals(
    Object obj
)
```


### function compareTo

```java
inline int compareTo(
    Object obj
)
```


### function add

```java
inline void add(
    MamaPrice value
)
```


### function add

```java
inline void add(
    double value
)
```


### function subtract

```java
inline void subtract(
    MamaPrice value
)
```


### function subtract

```java
inline void subtract(
    double value
)
```


### function clear

```java
native void clear()
```


### function set

```java
inline void set(
    double priceValue,
    MamaPriceHints hints
)
```


### function setValue

```java
native void setValue(
    double value
)
```


### function setFromString

```java
native void setFromString(
    String value
)
```


### function setPrecision

```java
inline void setPrecision(
    MamaPricePrecision precision
)
```


### function setHints

```java
inline void setHints(
    MamaPriceHints hints
)
```


### function getValue

```java
native double getValue()
```


### function getRoundedValue

```java
inline double getRoundedValue()
```


**Exceptions**: 

  * **[com.wombat.mama.MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** thrown if the underlying JNI object has been destroyed. 
  * **com.wombat.common.WombatException** for other general MAMA errors. 


**Return**: The rounded value. 

This function obtains the double value of the price rounded to zero precision.


### function getRoundedValue

```java
inline double getRoundedValue(
    MamaPricePrecision precision
)
```


**Parameters**: 

  * **precision** The precision to use for rounding. 


**Exceptions**: 

  * **[com.wombat.mama.MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** thrown if the underlying JNI object has been destroyed. 
  * **com.wombat.common.WombatException** for other general MAMA errors. 


**Return**: The rounded value. 

This function obtains the double value of the price rounded to the supplied precision.


### function getPrecision

```java
inline MamaPricePrecision getPrecision()
```


### function getHints

```java
inline MamaPriceHints getHints()
```


### function toString

```java
native String toString()
```


### function negate

```java
inline void negate()
```


### function isZero

```java
inline boolean isZero()
```


### function setIsValidPrice

```java
native void setIsValidPrice(
    boolean valid
)
```


### function getIsValidPrice

```java
native boolean getIsValidPrice()
```


### function copy

```java
native void copy(
    MamaPrice price
)
```


### function destroy

```java
native void destroy()
```


## Protected Functions Documentation

### function getPointerVal

```java
inline long getPointerVal()
```


### function clone

```java
inline Object clone()
```


### function finalize

```java
inline void finalize()
```


## Public Attributes Documentation

### variable EPSILON

```java
static final double EPSILON = 0.00000000001;
```


MAMA_PRICE_EPSILON a value that is considered equivalent to zero. 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100