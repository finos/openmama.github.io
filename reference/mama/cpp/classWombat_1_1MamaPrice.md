---
title: Wombat::MamaPrice
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPrice



 [More...](#detailed-description)


`#include <MamaPrice.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaPrice](classWombat_1_1MamaPrice.html#function-mamaprice)**() |
| | **[MamaPrice](classWombat_1_1MamaPrice.html#function-mamaprice)**(double value, mamaPricePrecision precision =MAMA_PRICE_PREC_100) |
| | **[MamaPrice](classWombat_1_1MamaPrice.html#function-mamaprice)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & copy) |
| | **[~MamaPrice](classWombat_1_1MamaPrice.html#function-~mamaprice)**() |
| [MamaPrice](classWombat_1_1MamaPrice.html) & | **[operator=](classWombat_1_1MamaPrice.html#function-operator=)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) |
| [MamaPrice](classWombat_1_1MamaPrice.html) & | **[operator+=](classWombat_1_1MamaPrice.html#function-operator+=)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) |
| [MamaPrice](classWombat_1_1MamaPrice.html) & | **[operator-=](classWombat_1_1MamaPrice.html#function-operator-=)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) |
| bool | **[operator==](classWombat_1_1MamaPrice.html#function-operator==)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) const |
| bool | **[operator==](classWombat_1_1MamaPrice.html#function-operator==)**(double rhs) const |
| bool | **[operator!=](classWombat_1_1MamaPrice.html#function-operator!=)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaPrice.html#function-operator!=)**(double rhs) const |
| bool | **[operator<](classWombat_1_1MamaPrice.html#function-operator<)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) const |
| bool | **[operator<](classWombat_1_1MamaPrice.html#function-operator<)**(double rhs) const |
| bool | **[operator>](classWombat_1_1MamaPrice.html#function-operator>)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) const |
| bool | **[operator>](classWombat_1_1MamaPrice.html#function-operator>)**(double rhs) const |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[operator-](classWombat_1_1MamaPrice.html#function-operator-)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) const |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[operator-](classWombat_1_1MamaPrice.html#function-operator-)**(double rhs) const |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[operator-](classWombat_1_1MamaPrice.html#function-operator-)**() const |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[operator+](classWombat_1_1MamaPrice.html#function-operator+)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) const |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[operator+](classWombat_1_1MamaPrice.html#function-operator+)**(double rhs) const |
| double | **[compare](classWombat_1_1MamaPrice.html#function-compare)**(const [MamaPrice](classWombat_1_1MamaPrice.html) & rhs) const |
| void | **[clear](classWombat_1_1MamaPrice.html#function-clear)**() |
| void | **[set](classWombat_1_1MamaPrice.html#function-set)**(double priceValue, mamaPriceHints hints =0) |
| void | **[setValue](classWombat_1_1MamaPrice.html#function-setvalue)**(double value) |
| void | **[setPrecision](classWombat_1_1MamaPrice.html#function-setprecision)**(mamaPricePrecision precision) |
| void | **[setHints](classWombat_1_1MamaPrice.html#function-sethints)**(mamaPriceHints hints) |
| void | **[setIsValidPrice](classWombat_1_1MamaPrice.html#function-setisvalidprice)**(bool valid) |
| double | **[getValue](classWombat_1_1MamaPrice.html#function-getvalue)**() const |
| mamaPricePrecision | **[getPrecision](classWombat_1_1MamaPrice.html#function-getprecision)**() const |
| mamaPriceHints | **[getHints](classWombat_1_1MamaPrice.html#function-gethints)**() const |
| bool | **[getIsValidPrice](classWombat_1_1MamaPrice.html#function-getisvalidprice)**() const |
| void | **[setFromString](classWombat_1_1MamaPrice.html#function-setfromstring)**(const char * str) |
| void | **[getAsString](classWombat_1_1MamaPrice.html#function-getasstring)**(char * result, mama_size_t maxLen) const |
| const char * | **[getAsString](classWombat_1_1MamaPrice.html#function-getasstring)**() const |
| void | **[negate](classWombat_1_1MamaPrice.html#function-negate)**() |
| bool | **[isZero](classWombat_1_1MamaPrice.html#function-iszero)**() const |
| mamaPrice | **[getCValue](classWombat_1_1MamaPrice.html#function-getcvalue)**() |
| const mamaPrice | **[getCValue](classWombat_1_1MamaPrice.html#function-getcvalue)**() const |
| mamaPricePrecision | **[decimals2Precision](classWombat_1_1MamaPrice.html#function-decimals2precision)**(mama_i32_t places) |
| mamaPricePrecision | **[denom2Precision](classWombat_1_1MamaPrice.html#function-denom2precision)**(mama_i32_t denominator) |
| mama_i32_t | **[precision2Decimals](classWombat_1_1MamaPrice.html#function-precision2decimals)**(mamaPricePrecision precision) |
| mama_i32_t | **[precision2Denom](classWombat_1_1MamaPrice.html#function-precision2denom)**(mamaPricePrecision precision) |

## Detailed Description

```cpp
class Wombat::MamaPrice;
```


[MamaPrice](classWombat_1_1MamaPrice.html) is a special data type for representing floating point numbers that often require special formatting for display purposes, such as prices. [MamaPrice](classWombat_1_1MamaPrice.html) contains the 64-bit (double precision) floating point value and an optional display hint. The set of display hints includes hints for:

* a number of decimal places,
* a fractional denominator that are powers of two, and
* hints for special denominators used in the finance industry (e.g., halves of 32nds). 

## Public Functions Documentation

### function MamaPrice

```cpp
MamaPrice()
```


### function MamaPrice

```cpp
MamaPrice(
    double value,
    mamaPricePrecision precision =MAMA_PRICE_PREC_100
)
```


### function MamaPrice

```cpp
MamaPrice(
    const MamaPrice & copy
)
```


### function ~MamaPrice

```cpp
~MamaPrice()
```


### function operator=

```cpp
MamaPrice & operator=(
    const MamaPrice & rhs
)
```


### function operator+=

```cpp
MamaPrice & operator+=(
    const MamaPrice & rhs
)
```


### function operator-=

```cpp
MamaPrice & operator-=(
    const MamaPrice & rhs
)
```


### function operator==

```cpp
bool operator==(
    const MamaPrice & rhs
) const
```


### function operator==

```cpp
bool operator==(
    double rhs
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const MamaPrice & rhs
) const
```


### function operator!=

```cpp
inline bool operator!=(
    double rhs
) const
```


### function operator<

```cpp
bool operator<(
    const MamaPrice & rhs
) const
```


### function operator<

```cpp
bool operator<(
    double rhs
) const
```


### function operator>

```cpp
bool operator>(
    const MamaPrice & rhs
) const
```


### function operator>

```cpp
bool operator>(
    double rhs
) const
```


### function operator-

```cpp
inline MamaPrice operator-(
    const MamaPrice & rhs
) const
```


Subtraction operator. Note: this operator creates a temporary object. 


### function operator-

```cpp
inline MamaPrice operator-(
    double rhs
) const
```


Subtraction operator for double. Note: this operator creates a temporary object. 


### function operator-

```cpp
inline MamaPrice operator-() const
```


Negation operator. Note: this operator creates a temporary object. 


### function operator+

```cpp
inline MamaPrice operator+(
    const MamaPrice & rhs
) const
```


Addition operator. Note: this operator creates a temporary object. 


### function operator+

```cpp
inline MamaPrice operator+(
    double rhs
) const
```


Addition operator for double. Note: this operator creates a temporary object. 


### function compare

```cpp
double compare(
    const MamaPrice & rhs
) const
```


### function clear

```cpp
void clear()
```


### function set

```cpp
void set(
    double priceValue,
    mamaPriceHints hints =0
)
```


### function setValue

```cpp
void setValue(
    double value
)
```


### function setPrecision

```cpp
void setPrecision(
    mamaPricePrecision precision
)
```


### function setHints

```cpp
void setHints(
    mamaPriceHints hints
)
```


### function setIsValidPrice

```cpp
void setIsValidPrice(
    bool valid
)
```


### function getValue

```cpp
double getValue() const
```


### function getPrecision

```cpp
mamaPricePrecision getPrecision() const
```


### function getHints

```cpp
mamaPriceHints getHints() const
```


### function getIsValidPrice

```cpp
bool getIsValidPrice() const
```


### function setFromString

```cpp
void setFromString(
    const char * str
)
```


### function getAsString

```cpp
void getAsString(
    char * result,
    mama_size_t maxLen
) const
```


### function getAsString

```cpp
const char * getAsString() const
```


Return a string representation of the price. Note that the alternative getAsString() method is more efficient because this method must allocate a temporary buffer (automatically destroyed upon object destruction). 


### function negate

```cpp
void negate()
```


Negate the price value. Hints and precisions are not affected. 


### function isZero

```cpp
bool isZero() const
```


Return whether the price has a value equivalent to zero. It may not be exactly 0.0, but we check against +/- epsilon. 


### function getCValue

```cpp
mamaPrice getCValue()
```


### function getCValue

```cpp
const mamaPrice getCValue() const
```


### function decimals2Precision

```cpp
static mamaPricePrecision decimals2Precision(
    mama_i32_t places
)
```


Return the appropriate precision code for a given number of decimal places. 


### function denom2Precision

```cpp
static mamaPricePrecision denom2Precision(
    mama_i32_t denominator
)
```


Return the appropriate precision code for a given fractional denominator. 


### function precision2Decimals

```cpp
static mama_i32_t precision2Decimals(
    mamaPricePrecision precision
)
```


Return the number of decimal places for a given precision code. 


### function precision2Denom

```cpp
static mama_i32_t precision2Denom(
    mamaPricePrecision precision
)
```


Return the fractional denominator for a given precision code. 


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100