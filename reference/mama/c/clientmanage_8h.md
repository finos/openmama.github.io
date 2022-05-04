---
title: mama/clientmanage.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/clientmanage.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[mamaCommand](structmamaCommand.html)** <br>This structure allows for generic commands to be destroyed by the clientmanageresponder.  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaCmCommand](clientmanage_8h.html#enum-mamacmcommand)** { MAMA_COMMAND_SYNC = 1}<br>The enumeration of supported commands.  |
| typedef void(*)(void *handle) | **[cmCommandDtor](clientmanage_8h.html#typedef-cmcommanddtor)** <br>The function prototype for command.  |
| typedef void(*)(mamaCommand *command, void *closure) | **[mamaCommandEndCB](clientmanage_8h.html#typedef-mamacommandendcb)** <br>Commands invoke this callback when they complete so the responder can destroy them.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAMA_CM_TOPIC](clientmanage_8h.html#define-mama-cm-topic)**  |
|  | **[MAMA_CM_PUB_TOPIC](clientmanage_8h.html#define-mama-cm-pub-topic)**  |
|  | **[MAMA_SYNC_TOPICS_ID](clientmanage_8h.html#define-mama-sync-topics-id)**  |
|  | **[MAMA_CM_COMMAND_ID](clientmanage_8h.html#define-mama-cm-command-id)**  |
|  | **[MAMA_SYNC_SOURCE_ID](clientmanage_8h.html#define-mama-sync-source-id)**  |
|  | **[MAMA_SYNC_TOPICS_PER_MSG_ID](clientmanage_8h.html#define-mama-sync-topics-per-msg-id)**  |
|  | **[MAMA_SYNC_RESPONSE_DELAY_ID](clientmanage_8h.html#define-mama-sync-response-delay-id)**  |
|  | **[MAMA_SYNC_RESPONSE_DURATION_ID](clientmanage_8h.html#define-mama-sync-response-duration-id)**  |
|  | **[MAMA_SYNC_TYPES_ID](clientmanage_8h.html#define-mama-sync-types-id)**  |

## Types Documentation

### enum mamaCmCommand

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_COMMAND_SYNC | 1|   |



The enumeration of supported commands. 

Commands 


### typedef cmCommandDtor

```cpp
typedef void(* cmCommandDtor) (void *handle);
```

The function prototype for command. 

### typedef mamaCommandEndCB

```cpp
typedef void(* mamaCommandEndCB) (mamaCommand *command, void *closure);
```

Commands invoke this callback when they complete so the responder can destroy them. 

**Parameters**: 

  * **command** The sync command 
  * **closure** User supplied data 





## Macros Documentation

### define MAMA_CM_TOPIC

```cpp
#define MAMA_CM_TOPIC "__MAMA_CM"
```


FIDS and Command IDs for client management commands FIDS Client Management Request Get Sent HERE 


### define MAMA_CM_PUB_TOPIC

```cpp
#define MAMA_CM_PUB_TOPIC "__MAMA_PUB_CM"
```


### define MAMA_SYNC_TOPICS_ID

```cpp
#define MAMA_SYNC_TOPICS_ID 101
```


The SyncResponder puts the topics in a string array with this ID 


### define MAMA_CM_COMMAND_ID

```cpp
#define MAMA_CM_COMMAND_ID 102
```


Future: We may add other (possibly wadmin style) commands U16 


### define MAMA_SYNC_SOURCE_ID

```cpp
#define MAMA_SYNC_SOURCE_ID 103
```


Client only sends topics for this SOURCE 


### define MAMA_SYNC_TOPICS_PER_MSG_ID

```cpp
#define MAMA_SYNC_TOPICS_PER_MSG_ID 104
```


Client responds with max TOPICS_PER_MSG U16 


### define MAMA_SYNC_RESPONSE_DELAY_ID

```cpp
#define MAMA_SYNC_RESPONSE_DELAY_ID 105
```


Clients waits random interval > 0 < RESPONSE_DELAY before initiating response. 


### define MAMA_SYNC_RESPONSE_DURATION_ID

```cpp
#define MAMA_SYNC_RESPONSE_DURATION_ID 106
```


Clients send response over this duration 


### define MAMA_SYNC_TYPES_ID

```cpp
#define MAMA_SYNC_TYPES_ID 107
```


The SyncResponder puts the subscription types in a string array with this ID 


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

#ifndef MAMA_CLIENT_MANAGE_H__
#define MAMA_CLIENT_MANAGE_H__

#if defined(__cplusplus)
extern "C" {
#endif

#define MAMA_CM_TOPIC       "__MAMA_CM"
#define MAMA_CM_PUB_TOPIC   "__MAMA_PUB_CM"

#define MAMA_SYNC_TOPICS_ID                 101

#define MAMA_CM_COMMAND_ID                  102

#define MAMA_SYNC_SOURCE_ID                 103

#define MAMA_SYNC_TOPICS_PER_MSG_ID         104

#define MAMA_SYNC_RESPONSE_DELAY_ID         105

#define MAMA_SYNC_RESPONSE_DURATION_ID      106

#define MAMA_SYNC_TYPES_ID                 107

typedef enum 
{
    MAMA_COMMAND_SYNC = 1 
} mamaCmCommand;

typedef void (*cmCommandDtor)(void* handle);

typedef struct
{
    void*         mHandle;
    cmCommandDtor mDtor; 
} mamaCommand;

typedef void (*mamaCommandEndCB)(mamaCommand* command, void *closure);

#if defined(__cplusplus)
}
#endif

#endif /* MAMA_CLIENT_MANAGE_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
