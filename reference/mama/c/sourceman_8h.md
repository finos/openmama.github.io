---
title: mama/sourceman.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/sourceman.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(MAMACALLTYPE *)(mamaSourceManager sourceManager, mamaSource source, void *closure) | **[mamaSourceManager_sourcesIteratorCb](sourceman_8h.html#typedef-mamasourcemanager-sourcesiteratorcb)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaSourceManager_create](sourceman_8h.html#function-mamasourcemanager-create)**(mamaSourceManager * sourceManager) |
| MAMAExpDLL mama_status | **[mamaSourceManager_destroy](sourceman_8h.html#function-mamasourcemanager-destroy)**(mamaSourceManager sourceManager) |
| MAMAExpDLL mama_status | **[mamaSourceManager_createSource](sourceman_8h.html#function-mamasourcemanager-createsource)**(mamaSourceManager sourceManager, const char * name, mamaSource * source) |
| MAMAExpDLL mama_status | **[mamaSourceManager_findOrCreateSource](sourceman_8h.html#function-mamasourcemanager-findorcreatesource)**(mamaSourceManager sourceManager, const char * name, mamaSource * source) |
| MAMAExpDLL mama_status | **[mamaSourceManager_findSource](sourceman_8h.html#function-mamasourcemanager-findsource)**(mamaSourceManager sourceManager, const char * name, mamaSource * source) |
| MAMAExpDLL mama_status | **[mamaSourceManager_addSource](sourceman_8h.html#function-mamasourcemanager-addsource)**(mamaSourceManager sourceManager, mamaSource source) |
| MAMAExpDLL mama_status | **[mamaSourceManager_addSourceWithName](sourceman_8h.html#function-mamasourcemanager-addsourcewithname)**(mamaSourceManager sourceManager, mamaSource source, const char * name) |
| MAMAExpDLL mama_status | **[mamaSourceManager_iterateSources](sourceman_8h.html#function-mamasourcemanager-iteratesources)**(mamaSourceManager sourceGroup, mamaSourceManager_sourcesIteratorCb callback, void * closure) |

## Types Documentation

### typedef mamaSourceManager_sourcesIteratorCb

```cpp
typedef void(MAMACALLTYPE * mamaSourceManager_sourcesIteratorCb) (mamaSourceManager sourceManager, mamaSource source, void *closure);
```



## Functions Documentation

### function mamaSourceManager_create

```cpp
MAMAExpDLL mama_status mamaSourceManager_create(
    mamaSourceManager * sourceManager
)
```


**Parameters**: 

  * **sourceManager** The location of a mamaSourceManager to store the result. 


Create a mamaSourceManager object.


### function mamaSourceManager_destroy

```cpp
MAMAExpDLL mama_status mamaSourceManager_destroy(
    mamaSourceManager sourceManager
)
```


**Parameters**: 

  * **sourceManager** The sourceManager object to destroy. 


Destroy a mamaSourceManager object.


### function mamaSourceManager_createSource

```cpp
MAMAExpDLL mama_status mamaSourceManager_createSource(
    mamaSourceManager sourceManager,
    const char * name,
    mamaSource * source
)
```


**Parameters**: 

  * **sourceManager** The sourceManager to use for creating the mamaSource. 
  * **name** The string identifier for the mamaSource. 
  * **source** The address to which the new source will be * written.


**Return**: MAMA_STATUS_OK if execution is successful. 

Create a new mamaSource and add it to the manager.


### function mamaSourceManager_findOrCreateSource

```cpp
MAMAExpDLL mama_status mamaSourceManager_findOrCreateSource(
    mamaSourceManager sourceManager,
    const char * name,
    mamaSource * source
)
```


**Parameters**: 

  * **sourceManager** The sourceManager to use for locating the mamaSource. 
  * **name** The string identifier for the mamaSource 
  * **source** The location to which the address for the source will be written.


**Return**: MAMA_STATUS_OK if execution is successful. 

Locates an existing mamaSource for the given name. If none exists creates a new mamaSource and adds to the sourceManager.


### function mamaSourceManager_findSource

```cpp
MAMAExpDLL mama_status mamaSourceManager_findSource(
    mamaSourceManager sourceManager,
    const char * name,
    mamaSource * source
)
```


**Parameters**: 

  * **sourceManager** The mamaSourceManager to use to locate the specified mamaSource. 
  * **name** The string identifier for the required mamaSource. 
  * **source** The location to which the address for the source will be written. NULL if none is found.


**Return**: MAMA_STATUS_OK if creation is successful. 

Locates an existing mamaSource in the specified sourceManager with the specified string 'name' identifier. The value of the source argument will be set to NULL if no source was located in the sourceManager provided.


### function mamaSourceManager_addSource

```cpp
MAMAExpDLL mama_status mamaSourceManager_addSource(
    mamaSourceManager sourceManager,
    mamaSource source
)
```


**Parameters**: 

  * **sourceManager** The mamaSourceManager to which an existing mamaSource is being added. 
  * **source** The mamaSource being added to the specified mamaSourceManager.


**Return**: MAMA_STATUS_OK if execution is successful. 

Add an existing mamaSource to the specified mamaSourceManager. The id of the source will be used instead of the name to uniquely identify the source within the manager.


### function mamaSourceManager_addSourceWithName

```cpp
MAMAExpDLL mama_status mamaSourceManager_addSourceWithName(
    mamaSourceManager sourceManager,
    mamaSource source,
    const char * name
)
```


**Parameters**: 

  * **sourceManager** The mamaSourceManager to which an existing mamaSource is being added. 
  * **name** The string identifier for the mamaSource 
  * **source** The mamaSource being added to the specified mamaSourceManager.


**Return**: MAMA_STATUS_OK if execution is successful. 

Add an existing mamaSource to the specified mamaSourceManager using the specified name as a unique identifier.


### function mamaSourceManager_iterateSources

```cpp
MAMAExpDLL mama_status mamaSourceManager_iterateSources(
    mamaSourceManager sourceGroup,
    mamaSourceManager_sourcesIteratorCb callback,
    void * closure
)
```


**Parameters**: 

  * **sourceManager** The mamaSourceManager to iterate over. 
  * **callback** The callback function pointer to invoke for each source in the group. 
  * **closure** User supplied arbitrary data. Passed back on each invocation of the callback function.


**Return**: MAMA_STATUS_OK if the function executes successfully. 

Iterate over all the sources in this mamaSourceManager.




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

#ifndef MamaSourceManagerH__
#define MamaSourceManagerH__

#include "mama/config.h"
#include "mama/status.h"
#include "mama/types.h"
#include "mama/quality.h"
#include "mama/log.h"
#include "mama/source.h"

#if defined (__cplusplus)
extern "C" {
#endif

typedef void (MAMACALLTYPE *mamaSourceManager_sourcesIteratorCb) (
                                  mamaSourceManager sourceManager, 
                                  mamaSource        source,
                                  void*             closure);

MAMAExpDLL
extern mama_status
mamaSourceManager_create (mamaSourceManager* sourceManager);

MAMAExpDLL
extern mama_status
mamaSourceManager_destroy (mamaSourceManager sourceManager);

MAMAExpDLL
extern mama_status
mamaSourceManager_createSource (mamaSourceManager sourceManager,
                                const char*       name,
                                mamaSource*       source);

MAMAExpDLL
extern mama_status
mamaSourceManager_findOrCreateSource (mamaSourceManager  sourceManager,
                                      const char*        name,
                                      mamaSource*        source);

MAMAExpDLL
extern mama_status
mamaSourceManager_findSource (mamaSourceManager  sourceManager,
                              const char*        name,
                              mamaSource*        source);

MAMAExpDLL
extern mama_status
mamaSourceManager_addSource (mamaSourceManager  sourceManager,
                             mamaSource         source);

MAMAExpDLL
extern mama_status
mamaSourceManager_addSourceWithName (mamaSourceManager  sourceManager,
                                     mamaSource         source,
                                     const char*        name);

MAMAExpDLL
extern mama_status
mamaSourceManager_iterateSources (mamaSourceManager                 sourceGroup,
                                  mamaSourceManager_sourcesIteratorCb callback,
                                  void*                               closure);
                                
#if defined (__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
