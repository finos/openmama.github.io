---
title: mama/symbollist.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/symbollist.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef mama_status(MAMACALLTYPE *)(mamaSymbolListMember symbol, void *closure) | **[addSymbolCbType](symbollist_8h.html#typedef-addsymbolcbtype)** <br>The registered add symbol callback is executed for each symbol added to the symbol list.  |
| typedef void(MAMACALLTYPE *)(mamaSymbolList symbolList, void *closure) | **[mamaSymbolListIterateCompleteFunc](symbollist_8h.html#typedef-mamasymbollistiteratecompletefunc)** <br>Function invoked when completing the iteration over the symbol list using mamaSymbolList_iterate().  |
| typedef void(MAMACALLTYPE *)(mamaSymbolList symbolList, mamaSymbolListMember member, void *closure) | **[mamaSymbolListIterateMemberFunc](symbollist_8h.html#typedef-mamasymbollistiteratememberfunc)** <br>Function prototype for mamaSymbolList_iterate() which iterates over each member of the symbol list.  |
| typedef mama_status(MAMACALLTYPE *)(mamaSymbolListMember symbol, void *closure) | **[removeSymbolCbType](symbollist_8h.html#typedef-removesymbolcbtype)** <br>The registered remove symbol callback is executed just prior to a symbol being removed from the symbol list.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaSymbolList_addMember](symbollist_8h.html#function-mamasymbollist-addmember)**(mamaSymbolList symbolList, mamaSymbolListMember member)<br>Add a symbol member to the symbol list, this will cause the add callback to be invoked if it has been installed.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_allocate](symbollist_8h.html#function-mamasymbollist-allocate)**(mamaSymbolList * symbolList)<br>Allocate and initialize memory for a new symbolList, mamaSymbolList_deallocate should be called on the returned symbol list.  |
| MAMAExpDLL mamaSymbolListMember | **[mamaSymbolList_allocateMember](symbollist_8h.html#function-mamasymbollist-allocatemember)**(mamaSymbolList symbolList)<br>Allocate a symbolListMember.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_clear](symbollist_8h.html#function-mamasymbollist-clear)**(mamaSymbolList symbolList, int membersToo)<br>Clear the symbol list.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_deallocate](symbollist_8h.html#function-mamasymbollist-deallocate)**(mamaSymbolList symbolList)<br>Free a symbol list created by mamaSymbolList_allocate.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_deallocateMember](symbollist_8h.html#function-mamasymbollist-deallocatemember)**(mamaSymbolList symbolList, mamaSymbolListMember member)<br>Deallocate a symbolListMember.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_deallocateWithMembers](symbollist_8h.html#function-mamasymbollist-deallocatewithmembers)**(mamaSymbolList symbolList)<br>Free the memory for the symbolList and all members.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_findMember](symbollist_8h.html#function-mamasymbollist-findmember)**(const mamaSymbolList symbolList, const char * symbol, const char * source, mamaTransport transport, mamaSymbolListMember * member)<br>Find a symbol member in the symbol list.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_getClosure](symbollist_8h.html#function-mamasymbollist-getclosure)**(const mamaSymbolList symbolList, void ** closure)<br>Get the closure associated with the this symbolList.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_getSize](symbollist_8h.html#function-mamasymbollist-getsize)**(const mamaSymbolList symbolList, unsigned long * size)<br>Get the size of the symbolList.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_iterate](symbollist_8h.html#function-mamasymbollist-iterate)**(mamaSymbolList symbolList, mamaSymbolListIterateMemberFunc memberFunc, mamaSymbolListIterateCompleteFunc completeFunc, void * iterateClosure)<br>Iterate over the symbol list. The "handler" function will be invoked for each.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_removeMember](symbollist_8h.html#function-mamasymbollist-removemember)**(mamaSymbolList symbolList, const char * symbol, const char * source, mamaTransport transport, mamaSymbolListMember * member)<br>Remove a symbol member from the symbol list.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_removeMemberByRef](symbollist_8h.html#function-mamasymbollist-removememberbyref)**(mamaSymbolList symbolList, mamaSymbolListMember member)<br>Remove a symbol member from the symbol list.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_setAddSymbolHandler](symbollist_8h.html#function-mamasymbollist-setaddsymbolhandler)**(mamaSymbolList symbolList, addSymbolCbType addCb)<br>Registers the user defined add symbol callback with the symbolList.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_setClosure](symbollist_8h.html#function-mamasymbollist-setclosure)**(mamaSymbolList symbolList, void * closure)<br>Set the closure associated with the this symbolList.  |
| MAMAExpDLL mama_status | **[mamaSymbolList_setRemoveSymbolHandler](symbollist_8h.html#function-mamasymbollist-setremovesymbolhandler)**(mamaSymbolList symbolList, removeSymbolCbType removeCb)<br>Registers the user defined remove symbol callback with the symbolList.  |

## Types Documentation

### typedef addSymbolCbType

```cpp
typedef mama_status(MAMACALLTYPE * addSymbolCbType) (mamaSymbolListMember symbol, void *closure);
```

The registered add symbol callback is executed for each symbol added to the symbol list. 

**Parameters**: 

  * **symbol** The symbol to be added to the list 
  * **userData** User-data to be associated with symbol


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### typedef mamaSymbolListIterateCompleteFunc

```cpp
typedef void(MAMACALLTYPE * mamaSymbolListIterateCompleteFunc) (mamaSymbolList symbolList, void *closure);
```

Function invoked when completing the iteration over the symbol list using mamaSymbolList_iterate(). 

### typedef mamaSymbolListIterateMemberFunc

```cpp
typedef void(MAMACALLTYPE * mamaSymbolListIterateMemberFunc) (mamaSymbolList symbolList, mamaSymbolListMember member, void *closure);
```

Function prototype for mamaSymbolList_iterate() which iterates over each member of the symbol list. 

### typedef removeSymbolCbType

```cpp
typedef mama_status(MAMACALLTYPE * removeSymbolCbType) (mamaSymbolListMember symbol, void *closure);
```

The registered remove symbol callback is executed just prior to a symbol being removed from the symbol list. 

**Parameters**: 

  * **symbol** The symbol to be removed from the list 
  * **userData** User-data previously associated with symbol 


Prototype for remove symbol callback. 



## Functions Documentation

### function mamaSymbolList_addMember

```cpp
MAMAExpDLL mama_status mamaSymbolList_addMember(
    mamaSymbolList symbolList,
    mamaSymbolListMember member
)
```

Add a symbol member to the symbol list, this will cause the add callback to be invoked if it has been installed. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **member** The symbol member.


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_allocate

```cpp
MAMAExpDLL mama_status mamaSymbolList_allocate(
    mamaSymbolList * symbolList
)
```

Allocate and initialize memory for a new symbolList, mamaSymbolList_deallocate should be called on the returned symbol list. 

**Parameters**: 

  * **symbolList** The address of the allocated symbolList.


**Return**: mama_status return code can be one of MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_allocateMember

```cpp
MAMAExpDLL mamaSymbolListMember mamaSymbolList_allocateMember(
    mamaSymbolList symbolList
)
```

Allocate a symbolListMember. 

**Parameters**: 

  * **symbolList** The symbolList the member to be allocated in.


**Return**: Pointer to the new member. 

### function mamaSymbolList_clear

```cpp
MAMAExpDLL mama_status mamaSymbolList_clear(
    mamaSymbolList symbolList,
    int membersToo
)
```

Clear the symbol list. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **membersToo** Whether to also clear all members of the list.


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_deallocate

```cpp
MAMAExpDLL mama_status mamaSymbolList_deallocate(
    mamaSymbolList symbolList
)
```

Free a symbol list created by mamaSymbolList_allocate. 

**Parameters**: 

  * **symbolList** The symbolList to be deallocated.


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_deallocateMember

```cpp
MAMAExpDLL mama_status mamaSymbolList_deallocateMember(
    mamaSymbolList symbolList,
    mamaSymbolListMember member
)
```

Deallocate a symbolListMember. 

**Parameters**: 

  * **symbolList** The symbolList the member belongs to. 
  * **member** The member of the list to deallocate.


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_deallocateWithMembers

```cpp
MAMAExpDLL mama_status mamaSymbolList_deallocateWithMembers(
    mamaSymbolList symbolList
)
```

Free the memory for the symbolList and all members. 

**Parameters**: 

  * **symbolList** The symbolList to be deallocated.


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_findMember

```cpp
MAMAExpDLL mama_status mamaSymbolList_findMember(
    const mamaSymbolList symbolList,
    const char * symbol,
    const char * source,
    mamaTransport transport,
    mamaSymbolListMember * member
)
```

Find a symbol member in the symbol list. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **symbol** The name of the symbol to find. 
  * **source** The source of the symbol to find. 
  * **transport** The tport of the symbol to find. 
  * **member** The return symbol member (set to NULL if not found).


**Return**: mama_status return code can be one of MAMA_STATUS_INVALID_ARG - the member can't be found. MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_getClosure

```cpp
MAMAExpDLL mama_status mamaSymbolList_getClosure(
    const mamaSymbolList symbolList,
    void ** closure
)
```

Get the closure associated with the this symbolList. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **closure** The closure


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_getSize

```cpp
MAMAExpDLL mama_status mamaSymbolList_getSize(
    const mamaSymbolList symbolList,
    unsigned long * size
)
```

Get the size of the symbolList. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **size** The size


**Return**: mama_status value can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_iterate

```cpp
MAMAExpDLL mama_status mamaSymbolList_iterate(
    mamaSymbolList symbolList,
    mamaSymbolListIterateMemberFunc memberFunc,
    mamaSymbolListIterateCompleteFunc completeFunc,
    void * iterateClosure
)
```

Iterate over the symbol list. The "handler" function will be invoked for each. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **memberFunc** The function invoked for each symbol list member. 
  * **completeFunc** The function invoked upon completion. 
  * **iterateClosure** The closure passed to each callback


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_removeMember

```cpp
MAMAExpDLL mama_status mamaSymbolList_removeMember(
    mamaSymbolList symbolList,
    const char * symbol,
    const char * source,
    mamaTransport transport,
    mamaSymbolListMember * member
)
```

Remove a symbol member from the symbol list. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **symbol** The name of the symbol to be removed. 
  * **source** The source of the symbol to be removed. 
  * **transport** The tport of the symbol to be removed. 
  * **member** The return symbol member (set to NULL if not found). Note that this will be freed by the symbol list and should be used for reference only.


**Return**: mama_status return code can be one of MAMA_STATUS_INVALID_ARG - the member can't be found. MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_removeMemberByRef

```cpp
MAMAExpDLL mama_status mamaSymbolList_removeMemberByRef(
    mamaSymbolList symbolList,
    mamaSymbolListMember member
)
```

Remove a symbol member from the symbol list. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **member** The symbol to be removed.


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_setAddSymbolHandler

```cpp
MAMAExpDLL mama_status mamaSymbolList_setAddSymbolHandler(
    mamaSymbolList symbolList,
    addSymbolCbType addCb
)
```

Registers the user defined add symbol callback with the symbolList. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **addCb** Pointer to the user defined callback. Must conform to function prototype `addSymbolCbType`.


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

The registered callback will get called each time a symbol is added to the symbol list.


### function mamaSymbolList_setClosure

```cpp
MAMAExpDLL mama_status mamaSymbolList_setClosure(
    mamaSymbolList symbolList,
    void * closure
)
```

Set the closure associated with the this symbolList. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **closure** The closure


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolList_setRemoveSymbolHandler

```cpp
MAMAExpDLL mama_status mamaSymbolList_setRemoveSymbolHandler(
    mamaSymbolList symbolList,
    removeSymbolCbType removeCb
)
```

Registers the user defined remove symbol callback with the symbolList. 

**Parameters**: 

  * **symbolList** The symbolList. 
  * **removeCb** Pointer to the user defined callback. Must conform to function prototype `removeSymbolCbType`.


**Return**: mama_status return code can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

The registered callback will get called each time a symbol is deleted from the symbol list.




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

#ifndef MamaSymbolListH__
#define MamaSymbolListH__

/* *************************************************** */
/* Includes. */
/* *************************************************** */
#include "mama/mama.h"
#include <mama/config.h>
#include "mama/symbollisttypes.h"

#if defined(__cplusplus)
extern "C" {
#endif

/* *************************************************** */
/* Type Defines. */
/* *************************************************** */

typedef mama_status (MAMACALLTYPE *addSymbolCbType) (
  mamaSymbolListMember  symbol, 
  void*                 closure);

typedef void (MAMACALLTYPE *mamaSymbolListIterateCompleteFunc) (
    mamaSymbolList        symbolList,
    void*                 closure);

typedef void (MAMACALLTYPE *mamaSymbolListIterateMemberFunc) (
    mamaSymbolList        symbolList,
    mamaSymbolListMember  member,
    void*                 closure);

typedef mama_status (MAMACALLTYPE *removeSymbolCbType) (
  mamaSymbolListMember  symbol, 
  void*                 closure);

/* *************************************************** */
/* Public Function Prototypes. */
/* *************************************************** */

MAMAExpDLL
extern mama_status
mamaSymbolList_addMember(
    mamaSymbolList symbolList,
    mamaSymbolListMember member);

MAMAExpDLL
extern mama_status
mamaSymbolList_allocate(
    mamaSymbolList *symbolList);

MAMAExpDLL
extern mamaSymbolListMember 
mamaSymbolList_allocateMember(
    mamaSymbolList symbolList);

MAMAExpDLL
extern mama_status
mamaSymbolList_clear(
    mamaSymbolList   symbolList,
    int              membersToo);

MAMAExpDLL
extern mama_status
mamaSymbolList_deallocate(
    mamaSymbolList symbolList);

MAMAExpDLL
extern mama_status 
mamaSymbolList_deallocateMember (
    mamaSymbolList symbolList,
    mamaSymbolListMember member);

MAMAExpDLL
extern mama_status
mamaSymbolList_deallocateWithMembers(
    mamaSymbolList  symbolList);

MAMAExpDLL
extern mama_status
mamaSymbolList_findMember(
    const mamaSymbolList   symbolList,
    const char*            symbol,
    const char *           source,
    mamaTransport          transport,
    mamaSymbolListMember*  member);

MAMAExpDLL
extern mama_status
mamaSymbolList_getClosure(
    const mamaSymbolList  symbolList, 
    void**                closure);

MAMAExpDLL
extern mama_status
mamaSymbolList_getSize(
    const mamaSymbolList symbolList, 
    unsigned long *size); 

MAMAExpDLL
extern mama_status
mamaSymbolList_iterate(
    mamaSymbolList                      symbolList,
    mamaSymbolListIterateMemberFunc     memberFunc,
    mamaSymbolListIterateCompleteFunc   completeFunc,
    void*                               iterateClosure);

MAMAExpDLL
extern mama_status
mamaSymbolList_removeMember (
    mamaSymbolList   symbolList,
    const char*            symbol,
    const char *           source,
    mamaTransport          transport,
    mamaSymbolListMember*  member);

MAMAExpDLL
extern mama_status mamaSymbolList_removeMemberByRef(
  mamaSymbolList symbolList,
  mamaSymbolListMember member);

MAMAExpDLL
extern mama_status 
mamaSymbolList_setAddSymbolHandler(
    mamaSymbolList   symbolList, 
    addSymbolCbType  addCb);

MAMAExpDLL
extern mama_status
mamaSymbolList_setClosure(
    mamaSymbolList  symbolList, 
    void*           closure);

MAMAExpDLL
extern mama_status 
mamaSymbolList_setRemoveSymbolHandler(
    mamaSymbolList      symbolList, 
    removeSymbolCbType  removeCb);

#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
