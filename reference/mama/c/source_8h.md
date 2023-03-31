---
title: mama/source.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/source.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaSourceState_](source_8h.html#enum-mamasourcestate-)** { MAMA_SOURCE_STATE_OFF = 0, MAMA_SOURCE_STATE_OK = 1, MAMA_SOURCE_STATE_UNKNOWN = 99} |
| typedef enum mamaSourceState_ | **[mamaSourceState](source_8h.html#typedef-mamasourcestate)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaSource_create](source_8h.html#function-mamasource-create)**(mamaSource * source) |
| MAMAExpDLL mama_status | **[mamaSource_destroy](source_8h.html#function-mamasource-destroy)**(mamaSource source) |
| MAMAExpDLL mama_status | **[mamaSource_clear](source_8h.html#function-mamasource-clear)**(mamaSource source) |
| MAMAExpDLL mama_status | **[mamaSource_setId](source_8h.html#function-mamasource-setid)**(mamaSource source, const char * id) |
| MAMAExpDLL mama_status | **[mamaSource_setMappedId](source_8h.html#function-mamasource-setmappedid)**(mamaSource source, const char * id) |
| MAMAExpDLL mama_status | **[mamaSource_setDisplayId](source_8h.html#function-mamasource-setdisplayid)**(mamaSource source, const char * id) |
| MAMAExpDLL mama_status | **[mamaSource_setQuality](source_8h.html#function-mamasource-setquality)**(mamaSource source, mamaQuality quality) |
| MAMAExpDLL mama_status | **[mamaSource_setState](source_8h.html#function-mamasource-setstate)**(mamaSource source, mamaSourceState quality) |
| MAMAExpDLL mama_status | **[mamaSource_setParent](source_8h.html#function-mamasource-setparent)**(mamaSource source, mamaSource parent) |
| MAMAExpDLL mama_status | **[mamaSource_setSymbolNamespace](source_8h.html#function-mamasource-setsymbolnamespace)**(mamaSource source, const char * symbolNamespace) |
| MAMAExpDLL mama_status | **[mamaSource_setTransportName](source_8h.html#function-mamasource-settransportname)**(mamaSource source, const char * transportName) |
| MAMAExpDLL mama_status | **[mamaSource_setTransport](source_8h.html#function-mamasource-settransport)**(mamaSource source, mamaTransport transport) |
| MAMAExpDLL mama_status | **[mamaSource_setSymbology](source_8h.html#function-mamasource-setsymbology)**(mamaSource source, mamaSymbology symbology) |
| MAMAExpDLL mama_status | **[mamaSource_getId](source_8h.html#function-mamasource-getid)**(const mamaSource source, const char ** id) |
| MAMAExpDLL mama_status | **[mamaSource_getMappedId](source_8h.html#function-mamasource-getmappedid)**(const mamaSource source, const char ** id) |
| MAMAExpDLL mama_status | **[mamaSource_getDisplayId](source_8h.html#function-mamasource-getdisplayid)**(const mamaSource source, const char ** id) |
| MAMAExpDLL mama_status | **[mamaSource_getQuality](source_8h.html#function-mamasource-getquality)**(const mamaSource source, mamaQuality * quality) |
| MAMAExpDLL mama_status | **[mamaSource_getState](source_8h.html#function-mamasource-getstate)**(const mamaSource source, mamaSourceState * state) |
| MAMAExpDLL const char * | **[mamaSource_getStateAsString](source_8h.html#function-mamasource-getstateasstring)**(const mamaSource source) |
| MAMAExpDLL mama_status | **[mamaSource_getParent](source_8h.html#function-mamasource-getparent)**(const mamaSource source, mamaSource * parent) |
| MAMAExpDLL mama_status | **[mamaSource_getSymbolNamespace](source_8h.html#function-mamasource-getsymbolnamespace)**(const mamaSource source, const char ** symbolNamespace) |
| MAMAExpDLL mama_status | **[mamaSource_getTransportName](source_8h.html#function-mamasource-gettransportname)**(const mamaSource source, const char ** transportName) |
| MAMAExpDLL mama_status | **[mamaSource_getTransport](source_8h.html#function-mamasource-gettransport)**(const mamaSource source, mamaTransport * transport) |
| MAMAExpDLL mama_status | **[mamaSource_getSymbology](source_8h.html#function-mamasource-getsymbology)**(const mamaSource source, mamaSymbology * symbology) |
| MAMAExpDLL mama_status | **[mamaSource_getSubSourceManager](source_8h.html#function-mamasource-getsubsourcemanager)**(const mamaSource source, mamaSourceManager * subSourceManager) |

## Types Documentation

### enum mamaSourceState_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SOURCE_STATE_OFF | 0|   |
| MAMA_SOURCE_STATE_OK | 1|   |
| MAMA_SOURCE_STATE_UNKNOWN | 99|   |




### typedef mamaSourceState

```cpp
typedef enum mamaSourceState_ mamaSourceState;
```



## Functions Documentation

### function mamaSource_create

```cpp
MAMAExpDLL mama_status mamaSource_create(
    mamaSource * source
)
```


**Parameters**: 

  * **source** The location of a mamaSource to store the result. 


Create a mamaSource object.


### function mamaSource_destroy

```cpp
MAMAExpDLL mama_status mamaSource_destroy(
    mamaSource source
)
```


**Parameters**: 

  * **source** The source object to destroy. 


Destroy a mamaSource object.


### function mamaSource_clear

```cpp
MAMAExpDLL mama_status mamaSource_clear(
    mamaSource source
)
```


**Parameters**: 

  * **source** The source object to clear. 


Clear a mamaSource object.


### function mamaSource_setId

```cpp
MAMAExpDLL mama_status mamaSource_setId(
    mamaSource source,
    const char * id
)
```


**Parameters**: 

  * **source** The source object to update. 
  * **id** The new ID for the source object. 


Set the ID of a mamaSource object.


### function mamaSource_setMappedId

```cpp
MAMAExpDLL mama_status mamaSource_setMappedId(
    mamaSource source,
    const char * id
)
```


**Parameters**: 

  * **source** The source object to update. 
  * **id** The new mapped ID for the source object. 


Set the mapped ID of a mamaSource object. The mapped ID is the ID that the parent source manager has mapped this source as.


### function mamaSource_setDisplayId

```cpp
MAMAExpDLL mama_status mamaSource_setDisplayId(
    mamaSource source,
    const char * id
)
```


**Parameters**: 

  * **source** The source object to update. 
  * **id** The new display ID for the source object. 


Set the display ID of a mamaSource object.


### function mamaSource_setQuality

```cpp
MAMAExpDLL mama_status mamaSource_setQuality(
    mamaSource source,
    mamaQuality quality
)
```


**Parameters**: 

  * **source** The source object to update. 
  * **quality** The new quality for the source object. 


Set the quality of a mamaSource object.


### function mamaSource_setState

```cpp
MAMAExpDLL mama_status mamaSource_setState(
    mamaSource source,
    mamaSourceState quality
)
```


**Parameters**: 

  * **source** The source object to update. 
  * **quality** The new state for the source object. 


Set the state of a mamaSource object.


### function mamaSource_setParent

```cpp
MAMAExpDLL mama_status mamaSource_setParent(
    mamaSource source,
    mamaSource parent
)
```


**Parameters**: 

  * **source** The source object to update. 
  * **parent** The parent source for this source object. 


**See**: mamaSource_getSubSourceManager()

Set the parent for a mamaSource object. The current mamaSource is added to the parents sub source manager.


### function mamaSource_setSymbolNamespace

```cpp
MAMAExpDLL mama_status mamaSource_setSymbolNamespace(
    mamaSource source,
    const char * symbolNamespace
)
```


**Parameters**: 

  * **source** The source object to update. 
  * **symbolNamespace** The namespace for the publisher this mamaSource object describes. 


Set the publisher specific source name for this source. e.g. This could be "NASDAQ" for a UTP PAPA publisher.


### function mamaSource_setTransportName

```cpp
MAMAExpDLL mama_status mamaSource_setTransportName(
    mamaSource source,
    const char * transportName
)
```


**Parameters**: 

  * **source** The source object to update. 
  * **transportName** The name of the mamaTransport for which this source is valid. 


Set the name of the mamaTransport on which this describes a valid source of data.


### function mamaSource_setTransport

```cpp
MAMAExpDLL mama_status mamaSource_setTransport(
    mamaSource source,
    mamaTransport transport
)
```


**Parameters**: 

  * **source** The source to update. 
  * **transport** The mamaTransport to associate with the source. 


Associate a mamaTransport object with the source.


### function mamaSource_setSymbology

```cpp
MAMAExpDLL mama_status mamaSource_setSymbology(
    mamaSource source,
    mamaSymbology symbology
)
```


**Parameters**: 

  * **source** The source to update. 
  * **symbology** The mamaSymbology to associate with the source. 


Associate a mamaSymbology object with the source.


### function mamaSource_getId

```cpp
MAMAExpDLL mama_status mamaSource_getId(
    const mamaSource source,
    const char ** id
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **id** Location of the result for the ID of the source. 


Get the ID of a mamaSource object.


### function mamaSource_getMappedId

```cpp
MAMAExpDLL mama_status mamaSource_getMappedId(
    const mamaSource source,
    const char ** id
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **id** Location of the result for the mapped ID of the source. 


Get the mapped ID of a mamaSource object.


### function mamaSource_getDisplayId

```cpp
MAMAExpDLL mama_status mamaSource_getDisplayId(
    const mamaSource source,
    const char ** id
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **id** Location of the result for the display ID of the source. 


Get the display ID of a mamaSource object.


### function mamaSource_getQuality

```cpp
MAMAExpDLL mama_status mamaSource_getQuality(
    const mamaSource source,
    mamaQuality * quality
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **quality** Location of the result for the quality of the source. 


Get the quality of a mamaSource object.


### function mamaSource_getState

```cpp
MAMAExpDLL mama_status mamaSource_getState(
    const mamaSource source,
    mamaSourceState * state
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **state** Location of the result for the state of the source. 


Get the state of a mamaSource object.


### function mamaSource_getStateAsString

```cpp
MAMAExpDLL const char * mamaSource_getStateAsString(
    const mamaSource source
)
```


### function mamaSource_getParent

```cpp
MAMAExpDLL mama_status mamaSource_getParent(
    const mamaSource source,
    mamaSource * parent
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **parent** Location to store the address of the parent for this source. 


Get the parent source for a mamaSource object.


### function mamaSource_getSymbolNamespace

```cpp
MAMAExpDLL mama_status mamaSource_getSymbolNamespace(
    const mamaSource source,
    const char ** symbolNamespace
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **symbolNamespace** The source name for the publisher. 


Get the source name for the publisher which this mamaSource represents.


### function mamaSource_getTransportName

```cpp
MAMAExpDLL mama_status mamaSource_getTransportName(
    const mamaSource source,
    const char ** transportName
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **transportName** The location to store the pointer to the transportName. 


Get the name of the mamaTransport on which this source is valid.


### function mamaSource_getTransport

```cpp
MAMAExpDLL mama_status mamaSource_getTransport(
    const mamaSource source,
    mamaTransport * transport
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **transport** The mamaTransport associated with this source. 


Get the mamaTransport associated with this source.


### function mamaSource_getSymbology

```cpp
MAMAExpDLL mama_status mamaSource_getSymbology(
    const mamaSource source,
    mamaSymbology * symbology
)
```


**Parameters**: 

  * **source** The source object to check. 
  * **symbology** The mamaSymbology associated with this source. 


Get the mamaSymbology associated with this source.


### function mamaSource_getSubSourceManager

```cpp
MAMAExpDLL mama_status mamaSource_getSubSourceManager(
    const mamaSource source,
    mamaSourceManager * subSourceManager
)
```


**Parameters**: 

  * **source** The mamaSource for which the sub source manager is being obtained. 
  * **subSourceManager** The location top store the address of the sub source manager object pointer. 


A mamaSource can have sub-sources. These sub sources are maintained by a mamaSourceManager within the mamaSource.




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

#ifndef MamaSourceH__
#define MamaSourceH__

#include "mama/config.h"
#include "mama/status.h"
#include "mama/sourceman.h"
#include "mama/types.h"
#include "mama/quality.h"

#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaSourceState_
{
    MAMA_SOURCE_STATE_OFF     = 0,
    MAMA_SOURCE_STATE_OK      = 1,
    MAMA_SOURCE_STATE_UNKNOWN = 99
} mamaSourceState;

MAMAExpDLL
extern mama_status
mamaSource_create (mamaSource*  source);

MAMAExpDLL
extern mama_status
mamaSource_destroy (mamaSource  source);

MAMAExpDLL
extern mama_status
mamaSource_clear (mamaSource  source);

MAMAExpDLL
extern mama_status
mamaSource_setId (mamaSource  source,
                  const char* id);

MAMAExpDLL
extern mama_status
mamaSource_setMappedId (mamaSource  source,
                        const char* id);

MAMAExpDLL
extern mama_status
mamaSource_setDisplayId (mamaSource  source,
                         const char* id);

MAMAExpDLL
extern mama_status
mamaSource_setQuality (mamaSource  source,
                       mamaQuality quality);

MAMAExpDLL
extern mama_status
mamaSource_setState (mamaSource      source,
                     mamaSourceState quality);

MAMAExpDLL
extern mama_status
mamaSource_setParent (mamaSource source,
                      mamaSource parent);

MAMAExpDLL
extern mama_status
mamaSource_setSymbolNamespace (mamaSource  source,
                               const char* symbolNamespace);

MAMAExpDLL
extern mama_status
mamaSource_setTransportName (mamaSource  source,
                             const char* transportName);

MAMAExpDLL
extern mama_status
mamaSource_setTransport (mamaSource    source,
                         mamaTransport transport);

                         
MAMAExpDLL
extern mama_status
mamaSource_setSymbology (mamaSource    source,
                         mamaSymbology symbology);                        
MAMAExpDLL
extern mama_status
mamaSource_getId (const mamaSource source,
                  const char**     id);

MAMAExpDLL
extern mama_status
mamaSource_getMappedId (const mamaSource source,
                        const char**     id);

MAMAExpDLL
extern mama_status
mamaSource_getDisplayId (const mamaSource source,
                         const char**     id);

MAMAExpDLL
extern mama_status
mamaSource_getQuality (const mamaSource source,
                       mamaQuality*     quality);

MAMAExpDLL
extern mama_status
mamaSource_getState (const mamaSource source,
                     mamaSourceState* state);

/*
   Get the stringified representation of the source state.
*/
MAMAExpDLL
extern const char*
mamaSource_getStateAsString (const mamaSource source);

MAMAExpDLL
extern mama_status
mamaSource_getParent (const mamaSource source,
                      mamaSource*      parent);

MAMAExpDLL
extern mama_status
mamaSource_getSymbolNamespace (const mamaSource source,
                               const char**     symbolNamespace);

MAMAExpDLL
extern mama_status
mamaSource_getTransportName (const mamaSource source,
                             const char**     transportName);

MAMAExpDLL
extern mama_status
mamaSource_getTransport (const mamaSource source,
                         mamaTransport*   transport);


MAMAExpDLL
extern mama_status
mamaSource_getSymbology (const mamaSource source,
                         mamaSymbology*   symbology);
                         
MAMAExpDLL
extern mama_status
mamaSource_getSubSourceManager (const mamaSource   source,
                                mamaSourceManager* subSourceManager);

#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
