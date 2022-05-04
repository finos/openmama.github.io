---
title: mama/statsloggerfields.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/statsloggerfields.h



## Attributes

|                | Name           |
| -------------- | -------------- |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaSlIntervalStartTime](statsloggerfields_8h.html#variable-mamaslintervalstarttime)**  |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaSlIntervalEndTime](statsloggerfields_8h.html#variable-mamaslintervalendtime)**  |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaSlEvents](statsloggerfields_8h.html#variable-mamaslevents)**  |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaSlEventTime](statsloggerfields_8h.html#variable-mamasleventtime)**  |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaSlEventType](statsloggerfields_8h.html#variable-mamasleventtype)**  |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaSlEventReason](statsloggerfields_8h.html#variable-mamasleventreason)**  |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaSlTotalMsgCount](statsloggerfields_8h.html#variable-mamasltotalmsgcount)**  |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaSlIntervalMsgCount](statsloggerfields_8h.html#variable-mamaslintervalmsgcount)**  |
| const MAMAExpDLL [MamaReservedField](structMamaReservedField__.html) | **[MamaStatEvents](statsloggerfields_8h.html#variable-mamastatevents)**  |



## Attributes Documentation

### variable MamaSlIntervalStartTime

```cpp
const MAMAExpDLL MamaReservedField MamaSlIntervalStartTime;
```


### variable MamaSlIntervalEndTime

```cpp
const MAMAExpDLL MamaReservedField MamaSlIntervalEndTime;
```


### variable MamaSlEvents

```cpp
const MAMAExpDLL MamaReservedField MamaSlEvents;
```


### variable MamaSlEventTime

```cpp
const MAMAExpDLL MamaReservedField MamaSlEventTime;
```


### variable MamaSlEventType

```cpp
const MAMAExpDLL MamaReservedField MamaSlEventType;
```


### variable MamaSlEventReason

```cpp
const MAMAExpDLL MamaReservedField MamaSlEventReason;
```


### variable MamaSlTotalMsgCount

```cpp
const MAMAExpDLL MamaReservedField MamaSlTotalMsgCount;
```


### variable MamaSlIntervalMsgCount

```cpp
const MAMAExpDLL MamaReservedField MamaSlIntervalMsgCount;
```


### variable MamaStatEvents

```cpp
const MAMAExpDLL MamaReservedField MamaStatEvents;
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

#ifndef StatsLoggerFieldsH__
#define StatsLoggerFieldsH__

#include "mama/mama.h"

#if defined(__cplusplus)
extern "C" {
#endif
MAMAExpDLL
extern const MamaReservedField  MamaSlIntervalStartTime;
MAMAExpDLL
extern const MamaReservedField  MamaSlIntervalEndTime;
MAMAExpDLL
extern const MamaReservedField  MamaSlEvents;
MAMAExpDLL
extern const MamaReservedField  MamaSlEventTime;
MAMAExpDLL
extern const MamaReservedField  MamaSlEventType;
MAMAExpDLL
extern const MamaReservedField  MamaSlEventReason;
MAMAExpDLL
extern const MamaReservedField  MamaSlTotalMsgCount;
MAMAExpDLL
extern const MamaReservedField  MamaSlIntervalMsgCount;
MAMAExpDLL
extern const MamaReservedField  MamaStatEvents;


#if defined(__cplusplus)
}
#endif

#endif /* StatsLoggerFieldsH__*/
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
