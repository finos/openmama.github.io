---
title: mama/ft.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/ft.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaFtState_](ft_8h.html#enum-mamaftstate-)** { MAMA_FT_STATE_STANDBY = 0, MAMA_FT_STATE_ACTIVE = 1, MAMA_FT_STATE_UNKNOWN = 99} |
| enum| **[mamaFtType_](ft_8h.html#enum-mamafttype-)** { MAMA_FT_TYPE_MULTICAST = 1, MAMA_FT_TYPE_BRIDGE = 2, MAMA_FT_TYPE_MAX = 3} |
| typedef enum mamaFtState_ | **[mamaFtState](ft_8h.html#typedef-mamaftstate)**  |
| typedef enum mamaFtType_ | **[mamaFtType](ft_8h.html#typedef-mamafttype)**  |
| typedef void * | **[mamaFtMember](ft_8h.html#typedef-mamaftmember)**  |
| typedef void(MAMACALLTYPE *)(mamaFtMember ftMember, const char *groupName, mamaFtState state, void *closure) | **[mamaFtMemberOnFtStateChangeCb](ft_8h.html#typedef-mamaftmemberonftstatechangecb)** <br>Callback function type for MAMA fault tolerant state change events.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaFtMember_create](ft_8h.html#function-mamaftmember-create)**(mamaFtMember * member)<br>Allocate a MAMA fault tolerance group member. This function is typically followed by mamaFtMember_setup() and mamaFtMember_activate().  |
| MAMAExpDLL mama_status | **[mamaFtMember_setup](ft_8h.html#function-mamaftmember-setup)**(mamaFtMember member, mamaFtType fttype, mamaQueue eventQueue, mamaFtMemberOnFtStateChangeCb callback, mamaTransport transport, const char * groupName, mama_u32_t weight, mama_f64_t heartbeatInterval, mama_f64_t timeoutInterval, void * closure)<br>Set up a MAMA fault tolerance group member. This is only an initialization function. In order to actually start the fault tolerance monitoring, use mamaFtMember_activate().  |
| MAMAExpDLL mama_status | **[mamaFtMember_destroy](ft_8h.html#function-mamaftmember-destroy)**(mamaFtMember member)<br>Destroy a MAMA fault tolerance group member.  |
| MAMAExpDLL mama_status | **[mamaFtMember_activate](ft_8h.html#function-mamaftmember-activate)**(mamaFtMember member)<br>Activate the MAMA fault tolerance group member. The member will begin to send and receive heartbeats. If the member is already active, this function call will deactivate it.  |
| MAMAExpDLL mama_status | **[mamaFtMember_deactivate](ft_8h.html#function-mamaftmember-deactivate)**(mamaFtMember member)<br>Deactivate the MAMA fault tolerance group member. The member will stop sending and listening for heartbeats.  |
| MAMAExpDLL mama_status | **[mamaFtMember_isActive](ft_8h.html#function-mamaftmember-isactive)**(const mamaFtMember member, int * result)<br>Get whether the MAMA fault tolerance member is actively running (not related to its state). Use mamaFtMember_getState() to determine the actual state of the member.  |
| MAMAExpDLL mama_status | **[mamaFtMember_getGroupName](ft_8h.html#function-mamaftmember-getgroupname)**(const mamaFtMember member, const char ** result)<br>Get the name of the group to which this MAMA FT member belongs.  |
| MAMAExpDLL mama_status | **[mamaFtMember_getWeight](ft_8h.html#function-mamaftmember-getweight)**(const mamaFtMember member, mama_u32_t * result)<br>Get the fault tolerance weight of the MAMA FT member.  |
| MAMAExpDLL mama_status | **[mamaFtMember_getHeartbeatInterval](ft_8h.html#function-mamaftmember-getheartbeatinterval)**(const mamaFtMember member, mama_f64_t * result)<br>Get the fault tolerance heartbeat interval of the MAMA FT member.  |
| MAMAExpDLL mama_status | **[mamaFtMember_getTimeoutInterval](ft_8h.html#function-mamaftmember-gettimeoutinterval)**(const mamaFtMember member, mama_f64_t * result)<br>Get the fault tolerance timeout interval of the MAMA FT member.  |
| MAMAExpDLL mama_status | **[mamaFtMember_getHeartbeatTick](ft_8h.html#function-mamaftmember-getheartbeattick)**(const mamaFtMember member, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaFtMember_getClosure](ft_8h.html#function-mamaftmember-getclosure)**(const mamaFtMember member, void ** result)<br>Get the closure argument (provided in the mamaFtMember_setup() function) of the MAMA FT member.  |
| MAMAExpDLL mama_status | **[mamaFtMember_setWeight](ft_8h.html#function-mamaftmember-setweight)**(mamaFtMember member, mama_u32_t value)<br>Set the fault tolerance weight of the MAMA FT member. The FT weight can be changed dynamically, if desired. The member with the highest weight will become the active member.  |
| MAMAExpDLL mama_status | **[mamaFtMember_setInstanceId](ft_8h.html#function-mamaftmember-setinstanceid)**(mamaFtMember member, const char * id)<br>Set the instance ID of the MAMA FT member. The instance ID is used to uniquely identify members of a fault tolerant group.  |
| MAMAExpDLL const char * | **[mamaFtStateToString](ft_8h.html#function-mamaftstatetostring)**(mamaFtState state)<br>Convert a fault tolerant state to a string.  |

## Types Documentation

### enum mamaFtState_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_FT_STATE_STANDBY | 0|  The mamaFtMember is currently not the highest weighted member in the group  |
| MAMA_FT_STATE_ACTIVE | 1|  The mamaFtMember is currently the highest weighted member in the group  |
| MAMA_FT_STATE_UNKNOWN | 99|  The mamaFtMember has yet to establish its state  |




The enumeration of fault tolerant states 


### enum mamaFtType_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_FT_TYPE_MULTICAST | 1|  MAMA creates sockets directly for sending and receiving heartbeats. The middleware is not used  |
| MAMA_FT_TYPE_BRIDGE | 2|  Use the middleware and MAMA subscriptions for sending and receiving heartbeats  |
| MAMA_FT_TYPE_MAX | 3|  Used internally  |




The enumeration of fault tolerant types 


### typedef mamaFtState

```cpp
typedef enum mamaFtState_ mamaFtState;
```


The enumeration of fault tolerant states 


### typedef mamaFtType

```cpp
typedef enum mamaFtType_ mamaFtType;
```


The enumeration of fault tolerant types 


### typedef mamaFtMember

```cpp
typedef void* mamaFtMember;
```


### typedef mamaFtMemberOnFtStateChangeCb

```cpp
typedef void( MAMACALLTYPE * mamaFtMemberOnFtStateChangeCb) (mamaFtMember ftMember, const char *groupName, mamaFtState state, void *closure);
```

Callback function type for MAMA fault tolerant state change events. 

**Parameters**: 

  * **ftMember** The mamaFtMember to which the callback event applies 
  * **groupName** The group name of the mamaFtMember for which the fault tolerant event applies 
  * **mamaFtState** The new fault tolerant state for the group member 
  * **closure** The closure passed to the mamaFtMember when mamaFtMember_setup() is called 



## Functions Documentation

### function mamaFtMember_create

```cpp
MAMAExpDLL mama_status mamaFtMember_create(
    mamaFtMember * member
)
```

Allocate a MAMA fault tolerance group member. This function is typically followed by mamaFtMember_setup() and mamaFtMember_activate(). 

**Parameters**: 

  * **member** A pointer to a mamaFtMember. When the function is called successfully the ftMember will be a pointer to a block of allocated memory.


**Return**: mama_status return code can be one of: MAMA_STATUS_NOMEM MAMA_STATUS_OK 

### function mamaFtMember_setup

```cpp
MAMAExpDLL mama_status mamaFtMember_setup(
    mamaFtMember member,
    mamaFtType fttype,
    mamaQueue eventQueue,
    mamaFtMemberOnFtStateChangeCb callback,
    mamaTransport transport,
    const char * groupName,
    mama_u32_t weight,
    mama_f64_t heartbeatInterval,
    mama_f64_t timeoutInterval,
    void * closure
)
```

Set up a MAMA fault tolerance group member. This is only an initialization function. In order to actually start the fault tolerance monitoring, use mamaFtMember_activate(). 

**Parameters**: 

  * **member** The mamaFtMember to be initialized 
  * **fttype** The type of fault tolerance to be used for the member 
  * **eventQueue** The queue on which the mamaFtMember sends and receives heartbeats 
  * **transport** The mamaTransport used for sending and receiving heartbeats 
  * **groupName** The group name for the mamaFtMember 
  * **weight** The initial weight of the mamaFtMember 
  * **heartbeatInterval** The time in seconds between sending heartbeats 
  * **timeoutInterval** The time in seconds that a mamaFtMember in state MAMA_FT_STATE_STANBY or MAMA_FT_STATE_UNKNOWN will wait to receive a heartbeat before changing state to MAMA_FT_STATE_ACTIVE 
  * **closure** The closure will be passed to subsequent callback invocations for thie mamaFtMember


**Return**: mama_status MAMA_STATUS_OK will be returned on success, otherwise a mama_status code indicating failure will be returned 

### function mamaFtMember_destroy

```cpp
MAMAExpDLL mama_status mamaFtMember_destroy(
    mamaFtMember member
)
```

Destroy a MAMA fault tolerance group member. 

**Parameters**: 

  * **member** The mamaFtMember. When the function returns, memory previously allocated for the member will have been freed


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mamaFtMember_activate

```cpp
MAMAExpDLL mama_status mamaFtMember_activate(
    mamaFtMember member
)
```

Activate the MAMA fault tolerance group member. The member will begin to send and receive heartbeats. If the member is already active, this function call will deactivate it. 

**Parameters**: 

  * **member** The mamaFtMember


**Return**: mama_status MAMA_STATUS_OK will be returned on success, otherwuse a mama_status code indicating failure will be returned 

### function mamaFtMember_deactivate

```cpp
MAMAExpDLL mama_status mamaFtMember_deactivate(
    mamaFtMember member
)
```

Deactivate the MAMA fault tolerance group member. The member will stop sending and listening for heartbeats. 

**Parameters**: 

  * **member** the mamaFtMember


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAAM_STATUS_OK 

### function mamaFtMember_isActive

```cpp
MAMAExpDLL mama_status mamaFtMember_isActive(
    const mamaFtMember member,
    int * result
)
```

Get whether the MAMA fault tolerance member is actively running (not related to its state). Use mamaFtMember_getState() to determine the actual state of the member. 

**Parameters**: 

  * **member** The mamaFtMember 
  * **result** This will be set to 1 if the member is currently active, 0 if it is not


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mamaFtMember_getGroupName

```cpp
MAMAExpDLL mama_status mamaFtMember_getGroupName(
    const mamaFtMember member,
    const char ** result
)
```

Get the name of the group to which this MAMA FT member belongs. 

**Parameters**: 

  * **member** The mamaFtMember 
  * **result** When the function is called successfully, this will point to the member's group name


**Return**: mama_status return code can be on of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mamaFtMember_getWeight

```cpp
MAMAExpDLL mama_status mamaFtMember_getWeight(
    const mamaFtMember member,
    mama_u32_t * result
)
```

Get the fault tolerance weight of the MAMA FT member. 

**Parameters**: 

  * **member** The mamaFtMember 
  * **result** When the function is called successfully, this will store the value of the member's weight


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mamaFtMember_getHeartbeatInterval

```cpp
MAMAExpDLL mama_status mamaFtMember_getHeartbeatInterval(
    const mamaFtMember member,
    mama_f64_t * result
)
```

Get the fault tolerance heartbeat interval of the MAMA FT member. 

**Parameters**: 

  * **member** The mamaFtMember 
  * **result** When the function is called successfully, this will store the value of the member's heartbeat interval


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mamaFtMember_getTimeoutInterval

```cpp
MAMAExpDLL mama_status mamaFtMember_getTimeoutInterval(
    const mamaFtMember member,
    mama_f64_t * result
)
```

Get the fault tolerance timeout interval of the MAMA FT member. 

**Parameters**: 

  * **member** The mamaFtMember 
  * **result** When the function is called successfully, this will store the value of the member's timeout interval


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mamaFtMember_getHeartbeatTick

```cpp
MAMAExpDLL mama_status mamaFtMember_getHeartbeatTick(
    const mamaFtMember member,
    mama_u32_t * result
)
```


Get the current heartbeat tick of the MAMA FT member. 


### function mamaFtMember_getClosure

```cpp
MAMAExpDLL mama_status mamaFtMember_getClosure(
    const mamaFtMember member,
    void ** result
)
```

Get the closure argument (provided in the mamaFtMember_setup() function) of the MAMA FT member. 

**Parameters**: 

  * **member** The mamaFtMember 
  * **result** When the function is called successfully, this will point to member's closure


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mamaFtMember_setWeight

```cpp
MAMAExpDLL mama_status mamaFtMember_setWeight(
    mamaFtMember member,
    mama_u32_t value
)
```

Set the fault tolerance weight of the MAMA FT member. The FT weight can be changed dynamically, if desired. The member with the highest weight will become the active member. 

**Parameters**: 

  * **member** The mamaFtMember 
  * **value** The new fault tolerance weight


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mamaFtMember_setInstanceId

```cpp
MAMAExpDLL mama_status mamaFtMember_setInstanceId(
    mamaFtMember member,
    const char * id
)
```

Set the instance ID of the MAMA FT member. The instance ID is used to uniquely identify members of a fault tolerant group. 

**Parameters**: 

  * **member** The mamaFtMember 
  * **The** new instance ID. This string is copied by the function


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_NOMEM MAMA_STATUS_OK 

Most applications should allow the MAMA API to automatically set the instance ID and this function would not be called. If not set explicitly before activation, then the instance ID is automatically set according to the following format: {group-name}.{hex-ip-addr}.{hex-pid}. For example, if the group name is "FOO", the IP address is 192.168.187.9, and the PId is 10777, the default instance ID would be: FOO.c0a8bb9.2a19


### function mamaFtStateToString

```cpp
MAMAExpDLL const char * mamaFtStateToString(
    mamaFtState state
)
```

Convert a fault tolerant state to a string. 

**Parameters**: 

  * **state** The state to convert.


**Return**: const char* A string representation of the state. This will be either "standby", "active", "unknown", or "error" in the case where the current state is unrecognised 



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

#ifndef MamaFtH__
#define MamaFtH__

#include <mama/mama.h>

#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaFtState_
{
    MAMA_FT_STATE_STANDBY  = 0, 
    MAMA_FT_STATE_ACTIVE   = 1, 
    MAMA_FT_STATE_UNKNOWN  = 99 
} mamaFtState;

typedef enum mamaFtType_
{
    MAMA_FT_TYPE_MULTICAST = 1, 
    MAMA_FT_TYPE_BRIDGE    = 2, 
    MAMA_FT_TYPE_MAX       = 3 
} mamaFtType;

typedef void* mamaFtMember;


typedef void (
MAMACALLTYPE
*mamaFtMemberOnFtStateChangeCb) (mamaFtMember  ftMember,
                                               const char*   groupName,
                                               mamaFtState   state,
                                               void*         closure);

MAMAExpDLL
extern mama_status
mamaFtMember_create (
    mamaFtMember*  member);

MAMAExpDLL
extern mama_status
mamaFtMember_setup (
    mamaFtMember                   member,
    mamaFtType                     fttype,
    mamaQueue                      eventQueue,
    mamaFtMemberOnFtStateChangeCb  callback,
    mamaTransport                  transport,
    const char*                    groupName,
    mama_u32_t                     weight,
    mama_f64_t                     heartbeatInterval,
    mama_f64_t                     timeoutInterval,
    void*                          closure);

MAMAExpDLL
extern mama_status
mamaFtMember_destroy (
    mamaFtMember    member);

MAMAExpDLL
extern mama_status
mamaFtMember_activate (
    mamaFtMember    member);

MAMAExpDLL
extern mama_status
mamaFtMember_deactivate (
    mamaFtMember    member);

MAMAExpDLL
extern mama_status
mamaFtMember_isActive (
    const mamaFtMember  member,
    int*                result);

MAMAExpDLL
extern mama_status
mamaFtMember_getGroupName (
    const mamaFtMember  member,
    const char**        result);

MAMAExpDLL
extern mama_status
mamaFtMember_getWeight (
    const mamaFtMember  member,
    mama_u32_t*         result);

MAMAExpDLL
extern mama_status
mamaFtMember_getHeartbeatInterval (
    const mamaFtMember  member,
    mama_f64_t*         result);

MAMAExpDLL
extern mama_status
mamaFtMember_getTimeoutInterval (
    const mamaFtMember  member,
    mama_f64_t*         result);

MAMAExpDLL
extern mama_status
mamaFtMember_getHeartbeatTick (
    const mamaFtMember  member,
    mama_u32_t*         result);

MAMAExpDLL
extern mama_status
mamaFtMember_getClosure (
    const mamaFtMember  member,
    void**              result);

MAMAExpDLL
extern mama_status
mamaFtMember_setWeight (
    mamaFtMember  member,
    mama_u32_t    value);

MAMAExpDLL
extern mama_status
mamaFtMember_setInstanceId (
    mamaFtMember  member,
    const char*   id);

MAMAExpDLL
extern const char*
mamaFtStateToString (mamaFtState state);


#if defined(__cplusplus)
}
#endif

#endif /* MamaFtH  __ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
