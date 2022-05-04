---
title: mama/msgqualifier.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/msgqualifier.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaMsgQual_create](msgqualifier_8h.html#function-mamamsgqual-create)**(mamaMsgQual * msgQual) |
| MAMAExpDLL mama_status | **[mamaMsgQual_destroy](msgqualifier_8h.html#function-mamamsgqual-destroy)**(mamaMsgQual msgQual) |
| MAMAExpDLL mama_status | **[mamaMsgQual_clear](msgqualifier_8h.html#function-mamamsgqual-clear)**(mamaMsgQual msgQual) |
| MAMAExpDLL mama_status | **[mamaMsgQual_copy](msgqualifier_8h.html#function-mamamsgqual-copy)**(mamaMsgQual dest, const mamaMsgQual src) |
| MAMAExpDLL int | **[mamaMsgQual_equal](msgqualifier_8h.html#function-mamamsgqual-equal)**(const mamaMsgQual lhs, const mamaMsgQual rhs) |
| MAMAExpDLL mama_status | **[mamaMsgQual_setValue](msgqualifier_8h.html#function-mamamsgqual-setvalue)**(mamaMsgQual msgQual, mama_u16_t value) |
| MAMAExpDLL mama_status | **[mamaMsgQual_setIsDefinitelyDuplicate](msgqualifier_8h.html#function-mamamsgqual-setisdefinitelyduplicate)**(mamaMsgQual msgQual, int state) |
| MAMAExpDLL mama_status | **[mamaMsgQual_setIsPossiblyDuplicate](msgqualifier_8h.html#function-mamamsgqual-setispossiblyduplicate)**(mamaMsgQual msgQual, int state) |
| MAMAExpDLL mama_status | **[mamaMsgQual_setIsDefinitelyDelayed](msgqualifier_8h.html#function-mamamsgqual-setisdefinitelydelayed)**(mamaMsgQual msgQual, int state) |
| MAMAExpDLL mama_status | **[mamaMsgQual_setIsPossiblyDelayed](msgqualifier_8h.html#function-mamamsgqual-setispossiblydelayed)**(mamaMsgQual msgQual, int state) |
| MAMAExpDLL mama_status | **[mamaMsgQual_setIsOutOfSequence](msgqualifier_8h.html#function-mamamsgqual-setisoutofsequence)**(mamaMsgQual msgQual, int state) |
| MAMAExpDLL mama_status | **[mamaMsgQual_getIsDefinitelyDuplicate](msgqualifier_8h.html#function-mamamsgqual-getisdefinitelyduplicate)**(mamaMsgQual msgQual, int * result) |
| MAMAExpDLL mama_status | **[mamaMsgQual_getIsPossiblyDuplicate](msgqualifier_8h.html#function-mamamsgqual-getispossiblyduplicate)**(mamaMsgQual msgQual, int * result) |
| MAMAExpDLL mama_status | **[mamaMsgQual_getIsDefinitelyDelayed](msgqualifier_8h.html#function-mamamsgqual-getisdefinitelydelayed)**(mamaMsgQual msgQual, int * result) |
| MAMAExpDLL mama_status | **[mamaMsgQual_getIsPossiblyDelayed](msgqualifier_8h.html#function-mamamsgqual-getispossiblydelayed)**(mamaMsgQual msgQual, int * result) |
| MAMAExpDLL mama_status | **[mamaMsgQual_getIsOutOfSequence](msgqualifier_8h.html#function-mamamsgqual-getisoutofsequence)**(mamaMsgQual msgQual, int * result) |
| MAMAExpDLL mama_status | **[mamaMsgQual_getValue](msgqualifier_8h.html#function-mamamsgqual-getvalue)**(const mamaMsgQual msgQual, mama_u16_t * value) |
| MAMAExpDLL mama_status | **[mamaMsgQual_getAsString](msgqualifier_8h.html#function-mamamsgqual-getasstring)**(const mamaMsgQual msgQual, const char * delimiter, char * str, mama_size_t maxLen) |
| MAMAExpDLL mama_status | **[mamaMsgQual_valueToString](msgqualifier_8h.html#function-mamamsgqual-valuetostring)**(mama_u16_t value, const char * delimiter, char * str, mama_size_t maxLen) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAMA_MSG_QUAL_MAX_STR_LEN](msgqualifier_8h.html#define-mama-msg-qual-max-str-len)**  |
|  | **[MAMA_MSG_QUAL_POSSIBLY_DUPLICATE](msgqualifier_8h.html#define-mama-msg-qual-possibly-duplicate)**  |
|  | **[MAMA_MSG_QUAL_DEFINITELY_DUPLICATE](msgqualifier_8h.html#define-mama-msg-qual-definitely-duplicate)**  |
|  | **[MAMA_MSG_QUAL_POSSIBLY_DELAYED](msgqualifier_8h.html#define-mama-msg-qual-possibly-delayed)**  |
|  | **[MAMA_MSG_QUAL_DEFINITELY_DELAYED](msgqualifier_8h.html#define-mama-msg-qual-definitely-delayed)**  |
|  | **[MAMA_MSG_QUAL_OUT_OF_SEQUENCE](msgqualifier_8h.html#define-mama-msg-qual-out-of-sequence)**  |
|  | **[MAMA_MSG_QUAL_NOT_USED](msgqualifier_8h.html#define-mama-msg-qual-not-used)**  |


## Functions Documentation

### function mamaMsgQual_create

```cpp
MAMAExpDLL mama_status mamaMsgQual_create(
    mamaMsgQual * msgQual
)
```


**Parameters**: 

  * **msgQual** The location of a mamaMsgQual where to store the result. 


Create a mamaMsgQual object.


### function mamaMsgQual_destroy

```cpp
MAMAExpDLL mama_status mamaMsgQual_destroy(
    mamaMsgQual msgQual
)
```


**Parameters**: 

  * **msgQual** The object to destroy. 


Destroy a mamaMsgQual object.


### function mamaMsgQual_clear

```cpp
MAMAExpDLL mama_status mamaMsgQual_clear(
    mamaMsgQual msgQual
)
```


**Parameters**: 

  * **msgQual** The object to clear. 


Clear a mamaMsgQual object.


### function mamaMsgQual_copy

```cpp
MAMAExpDLL mama_status mamaMsgQual_copy(
    mamaMsgQual dest,
    const mamaMsgQual src
)
```


**Parameters**: 

  * **dest** The destination mamaMsgQual. 
  * **src** The mamaMsgQual to copy. 


Copy a mamaMsgQual object. The destination object must have already been allocated using mamaMsgQual_create(). 


### function mamaMsgQual_equal

```cpp
MAMAExpDLL int mamaMsgQual_equal(
    const mamaMsgQual lhs,
    const mamaMsgQual rhs
)
```


**Parameters**: 

  * **lhs** The first object to compare. 
  * **rhs** The second object to compare. 


Check for equality between two objects. 


### function mamaMsgQual_setValue

```cpp
MAMAExpDLL mama_status mamaMsgQual_setValue(
    mamaMsgQual msgQual,
    mama_u16_t value
)
```


**Parameters**: 

  * **msgQual** The object to set. 
  * **value** The value to set to. 


Set the value.


### function mamaMsgQual_setIsDefinitelyDuplicate

```cpp
MAMAExpDLL mama_status mamaMsgQual_setIsDefinitelyDuplicate(
    mamaMsgQual msgQual,
    int state
)
```


**Parameters**: 

  * **msgQual** The object to set. 
  * **state** Zero value clears Definitely Duplicate bit. Non-zero value sets Definitely Duplicate bit. 


Set the bit associated with the Definitely Duplicate condition.


### function mamaMsgQual_setIsPossiblyDuplicate

```cpp
MAMAExpDLL mama_status mamaMsgQual_setIsPossiblyDuplicate(
    mamaMsgQual msgQual,
    int state
)
```


**Parameters**: 

  * **msgQual** The object to set. 
  * **state** Zero value clears Possibly Duplicate bit. Non-zero value sets Possibly Duplicate bit. 


Set the bit associated with the Possibly Duplicate condition.


### function mamaMsgQual_setIsDefinitelyDelayed

```cpp
MAMAExpDLL mama_status mamaMsgQual_setIsDefinitelyDelayed(
    mamaMsgQual msgQual,
    int state
)
```


**Parameters**: 

  * **msgQual** The object to set. 
  * **state** Zero value clears Definitely Delayed bit. Non-zero value sets Definitely Delayed bit. 


Set the bit associated with the Definitely Delayed condition.


### function mamaMsgQual_setIsPossiblyDelayed

```cpp
MAMAExpDLL mama_status mamaMsgQual_setIsPossiblyDelayed(
    mamaMsgQual msgQual,
    int state
)
```


**Parameters**: 

  * **msgQual** The object to set. 
  * **state** Zero value clears Possibly Delayed bit. Non-zero value sets Possibly Delayed bit. 


Set the bit associated with the Possibly Delayed condition.


### function mamaMsgQual_setIsOutOfSequence

```cpp
MAMAExpDLL mama_status mamaMsgQual_setIsOutOfSequence(
    mamaMsgQual msgQual,
    int state
)
```


**Parameters**: 

  * **msgQual** The object to set. 
  * **state** Zero value clears Out Of Sequence bit. Non-zero value sets Out Of Sequence bit. 


Set the bit associated with the Out Of Sequence condition.


### function mamaMsgQual_getIsDefinitelyDuplicate

```cpp
MAMAExpDLL mama_status mamaMsgQual_getIsDefinitelyDuplicate(
    mamaMsgQual msgQual,
    int * result
)
```


**Parameters**: 

  * **msgQual** The mamaMsgQual object. 
  * **result** (out) Pointer to the result. "1" indicates a positive result. "0" indicates a negative result. 


Determine whether the message qualifier indicates that the "msg" is Definitely Duplicate.


### function mamaMsgQual_getIsPossiblyDuplicate

```cpp
MAMAExpDLL mama_status mamaMsgQual_getIsPossiblyDuplicate(
    mamaMsgQual msgQual,
    int * result
)
```


**Parameters**: 

  * **msgQual** The mamaMsgQual object. 
  * **result** (out) Pointer to the result. "1" indicates a positive result. "0" indicates a negative result. 


Determine whether the message qualifier indicates that the "msg" is Possibly Duplicate.


### function mamaMsgQual_getIsDefinitelyDelayed

```cpp
MAMAExpDLL mama_status mamaMsgQual_getIsDefinitelyDelayed(
    mamaMsgQual msgQual,
    int * result
)
```


**Parameters**: 

  * **msgQual** The mamaMsgQual object. 
  * **result** (out) Pointer to the result. "1" indicates a positive result. "0" indicates a negative result. 


Determine whether the message qualifier indicates that the "msg" is Definitely Delayed.


### function mamaMsgQual_getIsPossiblyDelayed

```cpp
MAMAExpDLL mama_status mamaMsgQual_getIsPossiblyDelayed(
    mamaMsgQual msgQual,
    int * result
)
```


**Parameters**: 

  * **msgQual** The mamaMsgQual object. 
  * **result** (out) Pointer to the result. "1" indicates a positive result. "0" indicates a negative result. 


Determine whether the message qualifier indicates that the "msg" is Possibly Delayed.


### function mamaMsgQual_getIsOutOfSequence

```cpp
MAMAExpDLL mama_status mamaMsgQual_getIsOutOfSequence(
    mamaMsgQual msgQual,
    int * result
)
```


**Parameters**: 

  * **msgQual** The mamaMsgQual object. 
  * **result** (out) Pointer to the result. 

 "1" indicates a positive result. "0" indicates a negative result. 


Determine whether the message qualifier indicates that the "msg" is Out Of Sequence Delayed.


### function mamaMsgQual_getValue

```cpp
MAMAExpDLL mama_status mamaMsgQual_getValue(
    const mamaMsgQual msgQual,
    mama_u16_t * value
)
```


**Parameters**: 

  * **msgQual** The mamaMsgQual object. 
  * **value** The integer value of the message qualifier. 


Get the message qualifier value.


### function mamaMsgQual_getAsString

```cpp
MAMAExpDLL mama_status mamaMsgQual_getAsString(
    const mamaMsgQual msgQual,
    const char * delimiter,
    char * str,
    mama_size_t maxLen
)
```


**Parameters**: 

  * **msgQual** The mamaMsgQual object. 
  * **delimiter** The delimiter to separate individual condition strings. 
  * **str** The string buffer to update. 
  * **maxLen** The maximum size of the string buffer (including trailing '\0'). 


Get the message qualifier value as a delimited string.


### function mamaMsgQual_valueToString

```cpp
MAMAExpDLL mama_status mamaMsgQual_valueToString(
    mama_u16_t value,
    const char * delimiter,
    char * str,
    mama_size_t maxLen
)
```


**Parameters**: 

  * **value** The value of the message qualifier. 
  * **delimiter** The delimiter to separate individual conditions strings. 
  * **str** The string buffer to update. 
  * **maxLen** The maximum size of the string buffer (including trailing '\0'). 


Get the message qualifier value as a delimited string.




## Macros Documentation

### define MAMA_MSG_QUAL_MAX_STR_LEN

```cpp
#define MAMA_MSG_QUAL_MAX_STR_LEN (100)
```


### define MAMA_MSG_QUAL_POSSIBLY_DUPLICATE

```cpp
#define MAMA_MSG_QUAL_POSSIBLY_DUPLICATE 0x0001
```


### define MAMA_MSG_QUAL_DEFINITELY_DUPLICATE

```cpp
#define MAMA_MSG_QUAL_DEFINITELY_DUPLICATE 0x0002
```


### define MAMA_MSG_QUAL_POSSIBLY_DELAYED

```cpp
#define MAMA_MSG_QUAL_POSSIBLY_DELAYED 0x0004
```


### define MAMA_MSG_QUAL_DEFINITELY_DELAYED

```cpp
#define MAMA_MSG_QUAL_DEFINITELY_DELAYED 0x0008
```


### define MAMA_MSG_QUAL_OUT_OF_SEQUENCE

```cpp
#define MAMA_MSG_QUAL_OUT_OF_SEQUENCE 0x0010
```


### define MAMA_MSG_QUAL_NOT_USED

```cpp
#define MAMA_MSG_QUAL_NOT_USED 0x1000
```


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

#ifndef MSG_QUALIFIER_H__
#define MSG_QUALIFIER_H__

#include <mama/config.h>
#include <mama/types.h>
#include <mama/status.h>

#if defined(__cplusplus)
extern "C" {
#endif

#define MAMA_MSG_QUAL_MAX_STR_LEN (100)

#define MAMA_MSG_QUAL_POSSIBLY_DUPLICATE    0x0001
#define MAMA_MSG_QUAL_DEFINITELY_DUPLICATE  0x0002
#define MAMA_MSG_QUAL_POSSIBLY_DELAYED      0x0004
#define MAMA_MSG_QUAL_DEFINITELY_DELAYED    0x0008
#define MAMA_MSG_QUAL_OUT_OF_SEQUENCE       0x0010
#define MAMA_MSG_QUAL_NOT_USED              0x1000

MAMAExpDLL
extern mama_status
mamaMsgQual_create (
    mamaMsgQual*            msgQual);

MAMAExpDLL
extern mama_status
mamaMsgQual_destroy (
    mamaMsgQual             msgQual);

MAMAExpDLL
extern mama_status
mamaMsgQual_clear (
    mamaMsgQual             msgQual);

MAMAExpDLL
extern mama_status
mamaMsgQual_copy (
    mamaMsgQual             dest,
    const mamaMsgQual       src);

MAMAExpDLL
extern int
mamaMsgQual_equal (
    const mamaMsgQual       lhs,
    const mamaMsgQual       rhs);

MAMAExpDLL
extern mama_status
mamaMsgQual_setValue (
    mamaMsgQual             msgQual, 
    mama_u16_t              value);

MAMAExpDLL
extern mama_status
mamaMsgQual_setIsDefinitelyDuplicate (
    mamaMsgQual             msgQual, 
    int                     state);

MAMAExpDLL
extern mama_status
mamaMsgQual_setIsPossiblyDuplicate (
    mamaMsgQual             msgQual,                                 
    int                     state);

MAMAExpDLL
extern mama_status
mamaMsgQual_setIsDefinitelyDelayed (
    mamaMsgQual             msgQual, 
    int                     state);

MAMAExpDLL
extern mama_status
mamaMsgQual_setIsPossiblyDelayed (
    mamaMsgQual             msgQual, 
    int                     state);

MAMAExpDLL
extern mama_status
mamaMsgQual_setIsOutOfSequence (
    mamaMsgQual             msgQual, 
    int                     state);

MAMAExpDLL
extern mama_status
mamaMsgQual_getIsDefinitelyDuplicate (
    mamaMsgQual             msgQual, 
    int*                    result);

MAMAExpDLL
extern mama_status
mamaMsgQual_getIsPossiblyDuplicate (
    mamaMsgQual             msgQual, 
    int*                    result);

MAMAExpDLL
extern mama_status
mamaMsgQual_getIsDefinitelyDelayed (
    mamaMsgQual             msgQual, 
    int*                    result);

MAMAExpDLL
extern mama_status
mamaMsgQual_getIsPossiblyDelayed (
    mamaMsgQual             msgQual, 
    int*                    result);

MAMAExpDLL
extern mama_status
mamaMsgQual_getIsOutOfSequence (
    mamaMsgQual             msgQual, 
    int*                    result);


MAMAExpDLL
extern mama_status
mamaMsgQual_getValue(
    const mamaMsgQual       msgQual,
    mama_u16_t*             value);

MAMAExpDLL
extern mama_status
mamaMsgQual_getAsString(
    const mamaMsgQual      msgQual,
    const char*            delimiter,
    char*                  str,
    mama_size_t            maxLen);

MAMAExpDLL
extern mama_status
mamaMsgQual_valueToString(
    mama_u16_t             value,
    const char*            delimiter,
    char*                  str,
    mama_size_t            maxLen);


#if defined(__cplusplus)
}
#endif

#endif /* MSG_QUALIFIER_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
