---
title: mama/price.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/price.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaPricePrecision_](price_8h.html#enum-mamapriceprecision-)** { MAMA_PRICE_PREC_UNKNOWN = 0, MAMA_PRICE_PREC_10 = 1, MAMA_PRICE_PREC_100 = 2, MAMA_PRICE_PREC_1000 = 3, MAMA_PRICE_PREC_10000 = 4, MAMA_PRICE_PREC_100000 = 5, MAMA_PRICE_PREC_1000000 = 6, MAMA_PRICE_PREC_10000000 = 7, MAMA_PRICE_PREC_100000000 = 8, MAMA_PRICE_PREC_1000000000 = 9, MAMA_PRICE_PREC_10000000000 = 10, MAMA_PRICE_PREC_100000000000 = 11, MAMA_PRICE_PREC_1000000000000 = 12, MAMA_PRICE_PREC_10000000000000 = 13, MAMA_PRICE_PREC_100000000000000 = 14, MAMA_PRICE_PREC_1000000000000000 = 15, MAMA_PRICE_PREC_INT = 16, MAMA_PRICE_PREC_DIV_2 = 17, MAMA_PRICE_PREC_DIV_4 = 18, MAMA_PRICE_PREC_DIV_8 = 19, MAMA_PRICE_PREC_DIV_16 = 20, MAMA_PRICE_PREC_DIV_32 = 21, MAMA_PRICE_PREC_DIV_64 = 22, MAMA_PRICE_PREC_DIV_128 = 23, MAMA_PRICE_PREC_DIV_256 = 24, MAMA_PRICE_PREC_DIV_512 = 25, MAMA_PRICE_PREC_TICK_32 = 26, MAMA_PRICE_PREC_HALF_32 = 27, MAMA_PRICE_PREC_QUARTER_32 = 28, MAMA_PRICE_PREC_TICK_64 = 29, MAMA_PRICE_PREC_HALF_64 = 30, MAMA_PRICE_PREC_10000000000000000 = 31, MAMA_PRICE_PREC_CENTS = MAMA_PRICE_PREC_100, MAMA_PRICE_PREC_PENNIES = MAMA_PRICE_PREC_100} |
| typedef enum mamaPricePrecision_ | **[mamaPricePrecision](price_8h.html#typedef-mamapriceprecision)**  |
| typedef mama_u8_t | **[mamaPriceHints](price_8h.html#typedef-mamapricehints)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaPrice_create](price_8h.html#function-mamaprice-create)**(mamaPrice * price) |
| MAMAExpDLL mama_status | **[mamaPrice_destroy](price_8h.html#function-mamaprice-destroy)**(mamaPrice price) |
| MAMAExpDLL mama_status | **[mamaPrice_clear](price_8h.html#function-mamaprice-clear)**(mamaPrice price) |
| MAMAExpDLL mama_status | **[mamaPrice_copy](price_8h.html#function-mamaprice-copy)**(mamaPrice dest, const mamaPrice src) |
| MAMAExpDLL mama_status | **[mamaPrice_add](price_8h.html#function-mamaprice-add)**(mamaPrice dest, const mamaPrice rhs) |
| MAMAExpDLL mama_status | **[mamaPrice_subtract](price_8h.html#function-mamaprice-subtract)**(mamaPrice dest, const mamaPrice rhs) |
| MAMAExpDLL int | **[mamaPrice_equal](price_8h.html#function-mamaprice-equal)**(const mamaPrice lhs, const mamaPrice rhs) |
| MAMAExpDLL double | **[mamaPrice_compare](price_8h.html#function-mamaprice-compare)**(const mamaPrice lhs, const mamaPrice rhs) |
| MAMAExpDLL mama_status | **[mamaPrice_setValue](price_8h.html#function-mamaprice-setvalue)**(mamaPrice price, double value) |
| MAMAExpDLL mama_status | **[mamaPrice_setPrecision](price_8h.html#function-mamaprice-setprecision)**(mamaPrice price, mamaPricePrecision precision) |
| MAMAExpDLL mama_status | **[mamaPrice_setIsValidPrice](price_8h.html#function-mamaprice-setisvalidprice)**(mamaPrice price, mama_bool_t valid) |
| MAMAExpDLL mama_status | **[mamaPrice_setHints](price_8h.html#function-mamaprice-sethints)**(mamaPrice price, mamaPriceHints hints) |
| MAMAExpDLL mama_status | **[mamaPrice_setWithHints](price_8h.html#function-mamaprice-setwithhints)**(mamaPrice price, double value, mamaPriceHints hints) |
| MAMAExpDLL mama_status | **[mamaPrice_setFromString](price_8h.html#function-mamaprice-setfromstring)**(mamaPrice price, const char * str) |
| MAMAExpDLL mama_status | **[mamaPrice_getValue](price_8h.html#function-mamaprice-getvalue)**(const mamaPrice price, double * value) |
| MAMAExpDLL mama_status | **[mamaPrice_getRoundedValue](price_8h.html#function-mamaprice-getroundedvalue)**(const mamaPrice price, const mamaPricePrecision precision, double * value) |
| MAMAExpDLL mama_status | **[mamaPrice_getPrecision](price_8h.html#function-mamaprice-getprecision)**(const mamaPrice price, mamaPricePrecision * precision) |
| MAMAExpDLL mama_status | **[mamaPrice_getIsValidPrice](price_8h.html#function-mamaprice-getisvalidprice)**(const mamaPrice price, mama_bool_t * valid) |
| MAMAExpDLL mama_status | **[mamaPrice_getHints](price_8h.html#function-mamaprice-gethints)**(const mamaPrice price, mamaPriceHints * hints) |
| MAMAExpDLL mama_status | **[mamaPrice_getWithHints](price_8h.html#function-mamaprice-getwithhints)**(const mamaPrice price, double * value, mamaPricePrecision * precision) |
| MAMAExpDLL mama_status | **[mamaPrice_getAsString](price_8h.html#function-mamaprice-getasstring)**(const mamaPrice price, char * str, mama_size_t maxLen) |
| MAMAExpDLL mama_status | **[mamaPrice_negate](price_8h.html#function-mamaprice-negate)**(mamaPrice price) |
| MAMAExpDLL mama_status | **[mamaPrice_isZero](price_8h.html#function-mamaprice-iszero)**(const mamaPrice price, mama_bool_t * result) |
| MAMAExpDLL mamaPricePrecision | **[mamaPrice_decimals2Precision](price_8h.html#function-mamaprice-decimals2precision)**(mama_i32_t places) |
| MAMAExpDLL mamaPricePrecision | **[mamaPrice_denom2Precision](price_8h.html#function-mamaprice-denom2precision)**(mama_i32_t denominator) |
| MAMAExpDLL mama_i32_t | **[mamaPrice_precision2Decimals](price_8h.html#function-mamaprice-precision2decimals)**(mamaPricePrecision precision) |
| MAMAExpDLL mama_i32_t | **[mamaPrice_precision2Denom](price_8h.html#function-mamaprice-precision2denom)**(mamaPricePrecision precision) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAMA_PRICE_HINTS_NONE](price_8h.html#define-mama-price-hints-none)**  |
|  | **[MAMA_PRICE_MAX_STR_LEN](price_8h.html#define-mama-price-max-str-len)**  |
|  | **[MAMA_PRICE_EPSILON](price_8h.html#define-mama-price-epsilon)**  |

## Types Documentation

### enum mamaPricePrecision_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_PRICE_PREC_UNKNOWN | 0|   |
| MAMA_PRICE_PREC_10 | 1|   |
| MAMA_PRICE_PREC_100 | 2|   |
| MAMA_PRICE_PREC_1000 | 3|   |
| MAMA_PRICE_PREC_10000 | 4|   |
| MAMA_PRICE_PREC_100000 | 5|   |
| MAMA_PRICE_PREC_1000000 | 6|   |
| MAMA_PRICE_PREC_10000000 | 7|   |
| MAMA_PRICE_PREC_100000000 | 8|   |
| MAMA_PRICE_PREC_1000000000 | 9|   |
| MAMA_PRICE_PREC_10000000000 | 10|   |
| MAMA_PRICE_PREC_100000000000 | 11|   |
| MAMA_PRICE_PREC_1000000000000 | 12|   |
| MAMA_PRICE_PREC_10000000000000 | 13|   |
| MAMA_PRICE_PREC_100000000000000 | 14|   |
| MAMA_PRICE_PREC_1000000000000000 | 15|   |
| MAMA_PRICE_PREC_INT | 16|   |
| MAMA_PRICE_PREC_DIV_2 | 17|   |
| MAMA_PRICE_PREC_DIV_4 | 18|   |
| MAMA_PRICE_PREC_DIV_8 | 19|   |
| MAMA_PRICE_PREC_DIV_16 | 20|   |
| MAMA_PRICE_PREC_DIV_32 | 21|   |
| MAMA_PRICE_PREC_DIV_64 | 22|   |
| MAMA_PRICE_PREC_DIV_128 | 23|   |
| MAMA_PRICE_PREC_DIV_256 | 24|   |
| MAMA_PRICE_PREC_DIV_512 | 25|   |
| MAMA_PRICE_PREC_TICK_32 | 26|   |
| MAMA_PRICE_PREC_HALF_32 | 27|   |
| MAMA_PRICE_PREC_QUARTER_32 | 28|   |
| MAMA_PRICE_PREC_TICK_64 | 29|   |
| MAMA_PRICE_PREC_HALF_64 | 30|   |
| MAMA_PRICE_PREC_10000000000000000 | 31|   |
| MAMA_PRICE_PREC_CENTS | MAMA_PRICE_PREC_100|   |
| MAMA_PRICE_PREC_PENNIES | MAMA_PRICE_PREC_100|   |




### typedef mamaPricePrecision

```cpp
typedef enum mamaPricePrecision_ mamaPricePrecision;
```


### typedef mamaPriceHints

```cpp
typedef mama_u8_t mamaPriceHints;
```



## Functions Documentation

### function mamaPrice_create

```cpp
MAMAExpDLL mama_status mamaPrice_create(
    mamaPrice * price
)
```


**Parameters**: 

  * **price** The location of a mamaPrice where to store the result. 


Create a mamaPrice object.


### function mamaPrice_destroy

```cpp
MAMAExpDLL mama_status mamaPrice_destroy(
    mamaPrice price
)
```


**Parameters**: 

  * **price** The price object to destroy. 


Destroy a mamaPrice object.


### function mamaPrice_clear

```cpp
MAMAExpDLL mama_status mamaPrice_clear(
    mamaPrice price
)
```


**Parameters**: 

  * **price** The price object to clear. 


Clear a mamaPrice object.


### function mamaPrice_copy

```cpp
MAMAExpDLL mama_status mamaPrice_copy(
    mamaPrice dest,
    const mamaPrice src
)
```


**Parameters**: 

  * **copy** The destination price. 
  * **src** The price to copy. 


Copy a price object. The destination object must have already been allocated using mamaPrice_create().


### function mamaPrice_add

```cpp
MAMAExpDLL mama_status mamaPrice_add(
    mamaPrice dest,
    const mamaPrice rhs
)
```


**Parameters**: 

  * **dest** The price to add to. 
  * **rhs** The price to add. 


Add to a price object. The destination object must have already been allocated using mamaPrice_create().


### function mamaPrice_subtract

```cpp
MAMAExpDLL mama_status mamaPrice_subtract(
    mamaPrice dest,
    const mamaPrice rhs
)
```


**Parameters**: 

  * **dest** The price to subtract from. 
  * **src** The price to subtract. 


Subtract from a price object. The destination object must have already been allocated using mamaPrice_create().


### function mamaPrice_equal

```cpp
MAMAExpDLL int mamaPrice_equal(
    const mamaPrice lhs,
    const mamaPrice rhs
)
```


**Parameters**: 

  * **lhs** The first price to compare. 
  * **rhs** The second price to compare. 


Check for equality between two price objects.


### function mamaPrice_compare

```cpp
MAMAExpDLL double mamaPrice_compare(
    const mamaPrice lhs,
    const mamaPrice rhs
)
```


**Parameters**: 

  * **lhs** The first price to compare. 
  * **rhs** The second price to compare. 


Compare two price objects. The return value is negative if lhs is earlier than rhs, positive if lhs is greater than rhs and zero if the two are equal.


### function mamaPrice_setValue

```cpp
MAMAExpDLL mama_status mamaPrice_setValue(
    mamaPrice price,
    double value
)
```


**Parameters**: 

  * **price** The price to set. 
  * **value** The value to set. 


Set the price value only (no hint information).


### function mamaPrice_setPrecision

```cpp
MAMAExpDLL mama_status mamaPrice_setPrecision(
    mamaPrice price,
    mamaPricePrecision precision
)
```


**Parameters**: 

  * **price** The price to set. 
  * **precision** The precision for the price. 


Set the price precision.


### function mamaPrice_setIsValidPrice

```cpp
MAMAExpDLL mama_status mamaPrice_setIsValidPrice(
    mamaPrice price,
    mama_bool_t valid
)
```


**Parameters**: 

  * **price** The price to set. 
  * **valid** If price contains a valid value. 


Set if price contains a valid value. (0 may be a valid value)


### function mamaPrice_setHints

```cpp
MAMAExpDLL mama_status mamaPrice_setHints(
    mamaPrice price,
    mamaPriceHints hints
)
```


**Parameters**: 

  * **price** The price to set. 
  * **hints** The hints for the price. 


Set all of the price hints.


### function mamaPrice_setWithHints

```cpp
MAMAExpDLL mama_status mamaPrice_setWithHints(
    mamaPrice price,
    double value,
    mamaPriceHints hints
)
```


**Parameters**: 

  * **price** The price to set. 
  * **value** The value to set. 
  * **hints** The price hints. 


Set the price with hint information.


### function mamaPrice_setFromString

```cpp
MAMAExpDLL mama_status mamaPrice_setFromString(
    mamaPrice price,
    const char * str
)
```


**Parameters**: 

  * **price** The price to set. 
  * **str** The string representation of some price. 


Set the price from a string representation, preserving any detectable hints.


### function mamaPrice_getValue

```cpp
MAMAExpDLL mama_status mamaPrice_getValue(
    const mamaPrice price,
    double * value
)
```


**Parameters**: 

  * **price** The price to get. 
  * **value** The the decimal value of the price. 


Get the price value only.


### function mamaPrice_getRoundedValue

```cpp
MAMAExpDLL mama_status mamaPrice_getRoundedValue(
    const mamaPrice price,
    const mamaPricePrecision precision,
    double * value
)
```


**Parameters**: 

  * **price** The price to round. 
  * **precision** The precision to use for rounding. 
  * **value** The rounded value. 


**Return**: Indicates whether the function succeeded or failed and could be one of:

* MAMA_STATUS_INVALID_ARG
* MAMA_STATUS_OK 

This function obtains the double value of a price rounded to the supplied precision.


### function mamaPrice_getPrecision

```cpp
MAMAExpDLL mama_status mamaPrice_getPrecision(
    const mamaPrice price,
    mamaPricePrecision * precision
)
```


**Parameters**: 

  * **price** The price to get. 
  * **precision** The price precision hint. 


Get the price precision.


### function mamaPrice_getIsValidPrice

```cpp
MAMAExpDLL mama_status mamaPrice_getIsValidPrice(
    const mamaPrice price,
    mama_bool_t * valid
)
```


**Parameters**: 

  * **price** The price to get. 
  * **valid** If the value is valid. 


Check if price contains a valid value.


### function mamaPrice_getHints

```cpp
MAMAExpDLL mama_status mamaPrice_getHints(
    const mamaPrice price,
    mamaPriceHints * hints
)
```


**Parameters**: 

  * **price** The price to get. 
  * **hints** The price hints. 


**Return**: Indicates whether the function succeeded or failed and could be one of:

* MAMA_STATUS_INVALID_ARG
* MAMA_STATUS_OK 

**Note**: This function is intended for internal use only. 

Get the price hints.


### function mamaPrice_getWithHints

```cpp
MAMAExpDLL mama_status mamaPrice_getWithHints(
    const mamaPrice price,
    double * value,
    mamaPricePrecision * precision
)
```


**Parameters**: 

  * **price** The price to get. 
  * **value** The decimal value of the price. 
  * **precision** The precision of the price. 


Get the price with special, optional hints.


### function mamaPrice_getAsString

```cpp
MAMAExpDLL mama_status mamaPrice_getAsString(
    const mamaPrice price,
    char * str,
    mama_size_t maxLen
)
```


**Parameters**: 

  * **price** The price to set. 
  * **str** The string buffer to update. 
  * **maxLen** The maximum size of the string buffer (including trailing '\0'). 


Get the price as a string, formatted according to the hints provided.


### function mamaPrice_negate

```cpp
MAMAExpDLL mama_status mamaPrice_negate(
    mamaPrice price
)
```


Negate the price value. Hints and precisions are not affected. 


### function mamaPrice_isZero

```cpp
MAMAExpDLL mama_status mamaPrice_isZero(
    const mamaPrice price,
    mama_bool_t * result
)
```


Return whether the price has a value equivalent to zero. It may not be exactly 0.0, but we check against +/- epsilon. 


### function mamaPrice_decimals2Precision

```cpp
MAMAExpDLL mamaPricePrecision mamaPrice_decimals2Precision(
    mama_i32_t places
)
```


Return the appropriate precision code for a given number of decimal places. 


### function mamaPrice_denom2Precision

```cpp
MAMAExpDLL mamaPricePrecision mamaPrice_denom2Precision(
    mama_i32_t denominator
)
```


Return the appropriate precision code for a given fractional denominator. 


### function mamaPrice_precision2Decimals

```cpp
MAMAExpDLL mama_i32_t mamaPrice_precision2Decimals(
    mamaPricePrecision precision
)
```


Return the number of decimal places for a given precision code. 


### function mamaPrice_precision2Denom

```cpp
MAMAExpDLL mama_i32_t mamaPrice_precision2Denom(
    mamaPricePrecision precision
)
```


Return the fractional denominator for a given precision code. 




## Macros Documentation

### define MAMA_PRICE_HINTS_NONE

```cpp
#define MAMA_PRICE_HINTS_NONE ((mamaPriceHints)0x00)
```


### define MAMA_PRICE_MAX_STR_LEN

```cpp
#define MAMA_PRICE_MAX_STR_LEN (32)
```


### define MAMA_PRICE_EPSILON

```cpp
#define MAMA_PRICE_EPSILON ((mama_f64_t)0.00000000001)
```


MAMA_PRICE_EPSILON a value that is considered equivalent to zero. 


## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MamaPriceH__
#define MamaPriceH__

#include <mama/config.h>
#include <mama/status.h>
#include <mama/types.h>


#if defined(__cplusplus)
extern "C" {
#endif


typedef enum mamaPricePrecision_
{
    MAMA_PRICE_PREC_UNKNOWN             = 0,
    MAMA_PRICE_PREC_10                  = 1,
    MAMA_PRICE_PREC_100                 = 2,
    MAMA_PRICE_PREC_1000                = 3,
    MAMA_PRICE_PREC_10000               = 4,
    MAMA_PRICE_PREC_100000              = 5,
    MAMA_PRICE_PREC_1000000             = 6,
    MAMA_PRICE_PREC_10000000            = 7,
    MAMA_PRICE_PREC_100000000           = 8,
    MAMA_PRICE_PREC_1000000000          = 9,
    MAMA_PRICE_PREC_10000000000         = 10,
    MAMA_PRICE_PREC_100000000000        = 11,
    MAMA_PRICE_PREC_1000000000000       = 12,
    MAMA_PRICE_PREC_10000000000000      = 13,
    MAMA_PRICE_PREC_100000000000000     = 14,
    MAMA_PRICE_PREC_1000000000000000    = 15,
    MAMA_PRICE_PREC_INT                 = 16,
    MAMA_PRICE_PREC_DIV_2               = 17,
    MAMA_PRICE_PREC_DIV_4               = 18,
    MAMA_PRICE_PREC_DIV_8               = 19,
    MAMA_PRICE_PREC_DIV_16              = 20,
    MAMA_PRICE_PREC_DIV_32              = 21,
    MAMA_PRICE_PREC_DIV_64              = 22,
    MAMA_PRICE_PREC_DIV_128             = 23,
    MAMA_PRICE_PREC_DIV_256             = 24,
    MAMA_PRICE_PREC_DIV_512             = 25,
    MAMA_PRICE_PREC_TICK_32             = 26,
    MAMA_PRICE_PREC_HALF_32             = 27,
    MAMA_PRICE_PREC_QUARTER_32          = 28,
    MAMA_PRICE_PREC_TICK_64             = 29,
    MAMA_PRICE_PREC_HALF_64             = 30,
    MAMA_PRICE_PREC_10000000000000000   = 31,
    MAMA_PRICE_PREC_CENTS               = MAMA_PRICE_PREC_100,
    MAMA_PRICE_PREC_PENNIES             = MAMA_PRICE_PREC_100
} mamaPricePrecision;

typedef mama_u8_t  mamaPriceHints;
#define MAMA_PRICE_HINTS_NONE     ((mamaPriceHints)0x00)

#define MAMA_PRICE_MAX_STR_LEN (32)


#define MAMA_PRICE_EPSILON   ((mama_f64_t)0.00000000001)


MAMAExpDLL
extern mama_status
mamaPrice_create (mamaPrice*  price);

MAMAExpDLL
extern mama_status
mamaPrice_destroy (mamaPrice  price);

MAMAExpDLL
extern mama_status
mamaPrice_clear (mamaPrice  price);

MAMAExpDLL
extern mama_status
mamaPrice_copy (mamaPrice         dest,
                const mamaPrice   src);

MAMAExpDLL
extern mama_status
mamaPrice_add (mamaPrice         dest,
               const mamaPrice   rhs);

MAMAExpDLL
extern mama_status
mamaPrice_subtract (mamaPrice         dest,
                    const mamaPrice   rhs);

MAMAExpDLL
extern int
mamaPrice_equal (const mamaPrice   lhs,
                 const mamaPrice   rhs);

MAMAExpDLL
extern double
mamaPrice_compare (const mamaPrice   lhs,
                   const mamaPrice   rhs);

MAMAExpDLL
extern mama_status
mamaPrice_setValue (mamaPrice  price,
                    double     value);

MAMAExpDLL
extern mama_status
mamaPrice_setPrecision (mamaPrice           price,
                        mamaPricePrecision  precision);

MAMAExpDLL
extern mama_status
mamaPrice_setIsValidPrice (mamaPrice   price,
                           mama_bool_t valid);


MAMAExpDLL
extern mama_status
mamaPrice_setHints (mamaPrice       price,
                    mamaPriceHints  hints);

MAMAExpDLL
extern mama_status
mamaPrice_setWithHints (mamaPrice       price,
                        double          value,
                        mamaPriceHints  hints);

MAMAExpDLL
extern mama_status
mamaPrice_setFromString(mamaPrice    price,
                        const char*  str);

MAMAExpDLL
extern mama_status
mamaPrice_getValue(const mamaPrice      price,
                   double*              value);

MAMAExpDLL
mama_status
mamaPrice_getRoundedValue(const mamaPrice      price,
                          const mamaPricePrecision  precision,
                          double*              value);

MAMAExpDLL
extern mama_status
mamaPrice_getPrecision(const mamaPrice      price,
                       mamaPricePrecision*  precision);

MAMAExpDLL
extern mama_status
mamaPrice_getIsValidPrice (const mamaPrice price,
                           mama_bool_t*    valid);

MAMAExpDLL
extern mama_status
mamaPrice_getHints(const mamaPrice      price,
                   mamaPriceHints*      hints);

MAMAExpDLL
extern mama_status
mamaPrice_getWithHints(const mamaPrice      price,
                       double*              value,
                       mamaPricePrecision*  precision);

MAMAExpDLL
extern mama_status
mamaPrice_getAsString(const mamaPrice      price,
                      char*                str,
                      mama_size_t          maxLen);

MAMAExpDLL
extern mama_status
mamaPrice_negate(mamaPrice  price);

MAMAExpDLL
extern mama_status
mamaPrice_isZero(const mamaPrice  price,
                 mama_bool_t*     result);

MAMAExpDLL
extern  mamaPricePrecision
mamaPrice_decimals2Precision (mama_i32_t  places);

MAMAExpDLL
extern  mamaPricePrecision
mamaPrice_denom2Precision (mama_i32_t  denominator);

MAMAExpDLL
extern  mama_i32_t
mamaPrice_precision2Decimals (mamaPricePrecision  precision);

MAMAExpDLL
extern  mama_i32_t
mamaPrice_precision2Denom (mamaPricePrecision  precision);

#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
