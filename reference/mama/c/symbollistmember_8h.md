---
title: mama/symbollistmember.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/symbollistmember.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_allocate](symbollistmember_8h.html#function-mamasymbollistmember-allocate)**(mamaSymbolList symbolList, mamaSymbolListMember * member)<br>This function will allocate a new symbol list member. The returned member should be freed using mamaSymbolListMember_deallocate.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_deallocate](symbollistmember_8h.html#function-mamasymbollistmember-deallocate)**(mamaSymbolListMember member)<br>Frees a symbol list member previously created by a called to mamaSymbolListMember_allocate.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_getClosure](symbollistmember_8h.html#function-mamasymbollistmember-getclosure)**(const mamaSymbolListMember member, void ** closure)<br>This function returns the closure assocated with the symbol list member.  |
| int | **[mamaSymbolListMember_getSize](symbollistmember_8h.html#function-mamasymbollistmember-getsize)**(void ) |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_getSource](symbollistmember_8h.html#function-mamasymbollistmember-getsource)**(const mamaSymbolListMember member, const char ** source)<br>This function returns the source assocated with the symbol list member.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_getSymbol](symbollistmember_8h.html#function-mamasymbollistmember-getsymbol)**(const mamaSymbolListMember member, const char ** symbol)<br>This function returns the symbol assocated with the symbol list member.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_getSymbolList](symbollistmember_8h.html#function-mamasymbollistmember-getsymbollist)**(const mamaSymbolListMember member, mamaSymbolList * symbolList)<br>This function returns the symbol list assocated with the symbol list member.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_getTransport](symbollistmember_8h.html#function-mamasymbollistmember-gettransport)**(const mamaSymbolListMember member, mamaTransport * transport)<br>This function returns the transport assocated with the symbol list member.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_setClosure](symbollistmember_8h.html#function-mamasymbollistmember-setclosure)**(mamaSymbolListMember member, void * closure)<br>Set the closure assocated with the symbol list member.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_setSource](symbollistmember_8h.html#function-mamasymbollistmember-setsource)**(mamaSymbolListMember member, const char * source)<br>Set the source assocated with the symbol list member.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_setSymbol](symbollistmember_8h.html#function-mamasymbollistmember-setsymbol)**(mamaSymbolListMember member, const char * symbol)<br>Set the symbol assocated with the symbol list member.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_setSymbolList](symbollistmember_8h.html#function-mamasymbollistmember-setsymbollist)**(mamaSymbolListMember member, mamaSymbolList symbolList)<br>Set the symbol list assocated with the symbol list member.  |
| MAMAExpDLL mama_status | **[mamaSymbolListMember_setTransport](symbollistmember_8h.html#function-mamasymbollistmember-settransport)**(mamaSymbolListMember member, mamaTransport transport)<br>This function sets the transport assocated with the symbol list member.  |


## Functions Documentation

### function mamaSymbolListMember_allocate

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_allocate(
    mamaSymbolList symbolList,
    mamaSymbolListMember * member
)
```

This function will allocate a new symbol list member. The returned member should be freed using mamaSymbolListMember_deallocate. 

**Parameters**: 

  * **symbolList** The parent symbol list that the member will become part of. 
  * **member** To return the new member.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_deallocate

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_deallocate(
    mamaSymbolListMember member
)
```

Frees a symbol list member previously created by a called to mamaSymbolListMember_allocate. 

**Parameters**: 

  * **member** The member to free.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_getClosure

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_getClosure(
    const mamaSymbolListMember member,
    void ** closure
)
```

This function returns the closure assocated with the symbol list member. 

**Parameters**: 

  * **member** The member to free. 
  * **closure** The closure to return.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_getSize

```cpp
int mamaSymbolListMember_getSize(
    void 
)
```


### function mamaSymbolListMember_getSource

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_getSource(
    const mamaSymbolListMember member,
    const char ** source
)
```

This function returns the source assocated with the symbol list member. 

**Parameters**: 

  * **member** The member to free. 
  * **source** The source to return.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_getSymbol

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_getSymbol(
    const mamaSymbolListMember member,
    const char ** symbol
)
```

This function returns the symbol assocated with the symbol list member. 

**Parameters**: 

  * **member** The member to free. 
  * **symbol** The symbol to return.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_getSymbolList

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_getSymbolList(
    const mamaSymbolListMember member,
    mamaSymbolList * symbolList
)
```

This function returns the symbol list assocated with the symbol list member. 

**Parameters**: 

  * **member** The member to free. 
  * **symbolList** The symbol list to return


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_getTransport

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_getTransport(
    const mamaSymbolListMember member,
    mamaTransport * transport
)
```

This function returns the transport assocated with the symbol list member. 

**Parameters**: 

  * **member** The member to free. 
  * **transport** To return the transport.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_setClosure

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_setClosure(
    mamaSymbolListMember member,
    void * closure
)
```

Set the closure assocated with the symbol list member. 

**Parameters**: 

  * **member** The symbollist member. 
  * **closure** The closure


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_setSource

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_setSource(
    mamaSymbolListMember member,
    const char * source
)
```

Set the source assocated with the symbol list member. 

**Parameters**: 

  * **member** The symbollist member. 
  * **The** source


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_setSymbol

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_setSymbol(
    mamaSymbolListMember member,
    const char * symbol
)
```

Set the symbol assocated with the symbol list member. 

**Parameters**: 

  * **member** The symbollist member. 
  * **The** symbol


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_setSymbolList

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_setSymbolList(
    mamaSymbolListMember member,
    mamaSymbolList symbolList
)
```

Set the symbol list assocated with the symbol list member. 

**Parameters**: 

  * **member** The symbollist member. 
  * **The** symbollist


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSymbolListMember_setTransport

```cpp
MAMAExpDLL mama_status mamaSymbolListMember_setTransport(
    mamaSymbolListMember member,
    mamaTransport transport
)
```

This function sets the transport assocated with the symbol list member. 

**Parameters**: 

  * **member** The symbollist member. 
  * **transport** The transport


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 



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

#ifndef  MAMA_SYMBOL_LIST_MEMBER_H__
#define  MAMA_SYMBOL_LIST_MEMBER_H__

/* *************************************************** */
/* Includes. */
/* *************************************************** */
#include "mama/mama.h"
#include "mama/symbollisttypes.h"

#if defined(__cplusplus)
extern "C" {
#endif
    
/* *************************************************** */
/* Public Function Prototypes. */
/* *************************************************** */

MAMAExpDLL
extern mama_status
mamaSymbolListMember_allocate(
    mamaSymbolList symbolList,
    mamaSymbolListMember *member);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_deallocate(
    mamaSymbolListMember member);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_getClosure(
    const mamaSymbolListMember member,
    void **closure);

int mamaSymbolListMember_getSize (void);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_getSource(
    const mamaSymbolListMember member, 
    const char **source);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_getSymbol(
    const mamaSymbolListMember member,
    const char **symbol);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_getSymbolList(
    const mamaSymbolListMember member,
    mamaSymbolList *symbolList);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_getTransport(
    const mamaSymbolListMember member,
    mamaTransport *transport);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_setClosure (mamaSymbolListMember  member,
                                 void*                 closure);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_setSource (mamaSymbolListMember    member,
                                const char*             source);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_setSymbol (mamaSymbolListMember    member,
                                const char*             symbol);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_setSymbolList (mamaSymbolListMember  member,
                                    mamaSymbolList        symbolList);

MAMAExpDLL
extern mama_status
mamaSymbolListMember_setTransport (mamaSymbolListMember member,
                                   mamaTransport        transport);

#if defined(__cplusplus)
}
#endif


#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:17 +0100
