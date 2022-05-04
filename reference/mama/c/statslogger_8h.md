---
title: mama/statslogger.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/statslogger.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaSlEvent_](statslogger_8h.html#enum-mamaslevent-)** { MAMA_SL_EVENT_LOGIN = 0, MAMA_SL_EVENT_LOGOUT = 1, MAMA_SL_EVENT_SUB_CREATE = 2, MAMA_SL_EVENT_SUB_FAIL = 3, MAMA_SL_EVENT_SUB_DESTROY = 4, MAMA_SL_EVENT_SUB_ENT_PASS = 5} |
| enum| **[mamaSlSubFailReason_](statslogger_8h.html#enum-mamaslsubfailreason-)** { MAMA_SL_SUB_FAIL_REGEX = 0, MAMA_SL_SUB_FAIL_CODE = 1, MAMA_SL_SUB_FAIL_TIMEOUT = 2, MAMA_SL_SUB_FAIL_NOT_FOUND = 3} |
| typedef enum mamaSlEvent_ | **[mamaSlEvent](statslogger_8h.html#typedef-mamaslevent)**  |
| typedef enum mamaSlSubFailReason_ | **[mamaSlSubFailReason](statslogger_8h.html#typedef-mamaslsubfailreason)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const MAMAExpDLL char * | **[mamaStatsLogger_eventToString](statslogger_8h.html#function-mamastatslogger-eventtostring)**(mamaSlEvent event) |
| const MAMAExpDLL char * | **[mamaStatsLogger_subFailReasonToString](statslogger_8h.html#function-mamastatslogger-subfailreasontostring)**(mamaSlSubFailReason subFailReason) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_allocate](statslogger_8h.html#function-mamastatslogger-allocate)**(mamaStatsLogger * logger) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_create](statslogger_8h.html#function-mamastatslogger-create)**(mamaStatsLogger logger, mamaQueue queue, mamaTransport tport) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_createForStats](statslogger_8h.html#function-mamastatslogger-createforstats)**(mamaStatsLogger logger, mamaQueue queue, mamaTransport tport, const char * topic) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_destroy](statslogger_8h.html#function-mamastatslogger-destroy)**(mamaStatsLogger logger) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_setReportInterval](statslogger_8h.html#function-mamastatslogger-setreportinterval)**(mamaStatsLogger logger, mama_f64_t interval) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_setReportSize](statslogger_8h.html#function-mamastatslogger-setreportsize)**(mamaStatsLogger logger, mama_size_t numEvents) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_setUserName](statslogger_8h.html#function-mamastatslogger-setusername)**(mamaStatsLogger logger, const char * userName) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_getUserName](statslogger_8h.html#function-mamastatslogger-getusername)**(const mamaStatsLogger logger, const char ** userName) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_setHostName](statslogger_8h.html#function-mamastatslogger-sethostname)**(mamaStatsLogger logger, const char * hostName) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_getHostName](statslogger_8h.html#function-mamastatslogger-gethostname)**(const mamaStatsLogger logger, const char ** hostName) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_setApplicationName](statslogger_8h.html#function-mamastatslogger-setapplicationname)**(mamaStatsLogger logger, const char * appName) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_getApplicationName](statslogger_8h.html#function-mamastatslogger-getapplicationname)**(const mamaStatsLogger logger, const char ** appName) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_setApplicationClass](statslogger_8h.html#function-mamastatslogger-setapplicationclass)**(mamaStatsLogger logger, const char * applClass) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_getApplicationClass](statslogger_8h.html#function-mamastatslogger-getapplicationclass)**(const mamaStatsLogger logger, const char ** appClass) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_setIpAddress](statslogger_8h.html#function-mamastatslogger-setipaddress)**(mamaStatsLogger logger, const char * ipAddress) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_getIpAddress](statslogger_8h.html#function-mamastatslogger-getipaddress)**(const mamaStatsLogger logger, const char ** ipAddress) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_logLogin](statslogger_8h.html#function-mamastatslogger-loglogin)**(mamaStatsLogger logger) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_logLogout](statslogger_8h.html#function-mamastatslogger-loglogout)**(mamaStatsLogger logger) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_logSubscriptionEntitlePass](statslogger_8h.html#function-mamastatslogger-logsubscriptionentitlepass)**(mamaStatsLogger logger, mamaSubscription subscription, int32_t entitleCode) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_logSubscriptionFail](statslogger_8h.html#function-mamastatslogger-logsubscriptionfail)**(mamaStatsLogger logger, mamaSubscription subscription, mamaSlSubFailReason reason) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_logSubscriptionDestroy](statslogger_8h.html#function-mamastatslogger-logsubscriptiondestroy)**(mamaStatsLogger logger, mamaSubscription subscription) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_addStatMsg](statslogger_8h.html#function-mamastatslogger-addstatmsg)**(mamaStatsLogger * logger, mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_sendReport](statslogger_8h.html#function-mamastatslogger-sendreport)**(mamaStatsLogger * logger) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_getLogMsgStats](statslogger_8h.html#function-mamastatslogger-getlogmsgstats)**(mamaStatsLogger logger, mama_bool_t * logMsgStats) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_setLogMsgStats](statslogger_8h.html#function-mamastatslogger-setlogmsgstats)**(mamaStatsLogger logger, mama_bool_t logMsgStats) |
| MAMAExpDLL mama_status | **[mamaStatsLogger_incMsgCount](statslogger_8h.html#function-mamastatslogger-incmsgcount)**(mamaStatsLogger statsLogger) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SL_TOPIC_USAGE_LOG](statslogger_8h.html#define-sl-topic-usage-log)**  |
|  | **[STATS_TOPIC](statslogger_8h.html#define-stats-topic)**  |

## Types Documentation

### enum mamaSlEvent_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SL_EVENT_LOGIN | 0|   |
| MAMA_SL_EVENT_LOGOUT | 1|   |
| MAMA_SL_EVENT_SUB_CREATE | 2|   |
| MAMA_SL_EVENT_SUB_FAIL | 3|   |
| MAMA_SL_EVENT_SUB_DESTROY | 4|   |
| MAMA_SL_EVENT_SUB_ENT_PASS | 5|   |




The event types handled by the stats logger 


### enum mamaSlSubFailReason_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SL_SUB_FAIL_REGEX | 0|   |
| MAMA_SL_SUB_FAIL_CODE | 1|   |
| MAMA_SL_SUB_FAIL_TIMEOUT | 2|   |
| MAMA_SL_SUB_FAIL_NOT_FOUND | 3|   |




The reasons for a subscription to fail 


### typedef mamaSlEvent

```cpp
typedef enum mamaSlEvent_ mamaSlEvent;
```


The event types handled by the stats logger 


### typedef mamaSlSubFailReason

```cpp
typedef enum mamaSlSubFailReason_ mamaSlSubFailReason;
```


The reasons for a subscription to fail 



## Functions Documentation

### function mamaStatsLogger_eventToString

```cpp
const MAMAExpDLL char * mamaStatsLogger_eventToString(
    mamaSlEvent event
)
```


**Parameters**: 

  * **event** The mamaSlEvent to convert. 


Convert a mamaSlEvent value to a string. Do no attempt to free the string result.


### function mamaStatsLogger_subFailReasonToString

```cpp
const MAMAExpDLL char * mamaStatsLogger_subFailReasonToString(
    mamaSlSubFailReason subFailReason
)
```


**Parameters**: 

  * **subFailReason** The mamaSlSubFailReason to convert. 


Convert a mamaSlSubFailReason value to a string. Do no attempt to free the string result.


### function mamaStatsLogger_allocate

```cpp
MAMAExpDLL mama_status mamaStatsLogger_allocate(
    mamaStatsLogger * logger
)
```


**Parameters**: 

  * **logger** Where the address of the new logger will be written 


Allocate memory for a new stats logger. The logger is not actually created until a call the create() functions is made. Memory must be freed using the `mamaStatsLogger_Deallocate()` function.


### function mamaStatsLogger_create

```cpp
MAMAExpDLL mama_status mamaStatsLogger_create(
    mamaStatsLogger logger,
    mamaQueue queue,
    mamaTransport tport
)
```


**Parameters**: 

  * **logger** The location of a mamaStatsLogger 
  * **queue** The queue for the Stats Logger to use for publishing 
  * **tport** the transport 


Create and activate mamaStatsLogger object.


### function mamaStatsLogger_createForStats

```cpp
MAMAExpDLL mama_status mamaStatsLogger_createForStats(
    mamaStatsLogger logger,
    mamaQueue queue,
    mamaTransport tport,
    const char * topic
)
```


### function mamaStatsLogger_destroy

```cpp
MAMAExpDLL mama_status mamaStatsLogger_destroy(
    mamaStatsLogger logger
)
```


**Parameters**: 

  * **logger** The location of a mamaStatsLogger 


Destroy a mamaStatsLogger object, freeing any memory


### function mamaStatsLogger_setReportInterval

```cpp
MAMAExpDLL mama_status mamaStatsLogger_setReportInterval(
    mamaStatsLogger logger,
    mama_f64_t interval
)
```


**Parameters**: 

  * **logger** The location of a mamaStatsLogger 
  * **interval** The report interval in seconds 


Set the reporting interval


### function mamaStatsLogger_setReportSize

```cpp
MAMAExpDLL mama_status mamaStatsLogger_setReportSize(
    mamaStatsLogger logger,
    mama_size_t numEvents
)
```


**Parameters**: 

  * **logger** The location of a mamaStatsLogger 
  * **numEvents** The number of events to report after 


Set the maximum number of events to cache before reporting


### function mamaStatsLogger_setUserName

```cpp
MAMAExpDLL mama_status mamaStatsLogger_setUserName(
    mamaStatsLogger logger,
    const char * userName
)
```


**Parameters**: 

  * **logger** The logger object to update. 
  * **userName** The user name for the logger 


Set the userName


### function mamaStatsLogger_getUserName

```cpp
MAMAExpDLL mama_status mamaStatsLogger_getUserName(
    const mamaStatsLogger logger,
    const char ** userName
)
```


**Parameters**: 

  * **logger** The logger object to check. 
  * **userName** Location of the result for the description of the logger. 


Get the userName


### function mamaStatsLogger_setHostName

```cpp
MAMAExpDLL mama_status mamaStatsLogger_setHostName(
    mamaStatsLogger logger,
    const char * hostName
)
```


**Parameters**: 

  * **logger** The logger object to update. 
  * **hostName** The host name for the logger 


Set the hostName


### function mamaStatsLogger_getHostName

```cpp
MAMAExpDLL mama_status mamaStatsLogger_getHostName(
    const mamaStatsLogger logger,
    const char ** hostName
)
```


**Parameters**: 

  * **logger** The logger object to check. 
  * **hostName** Location of the result for the description of the logger. 


Get the hostName


### function mamaStatsLogger_setApplicationName

```cpp
MAMAExpDLL mama_status mamaStatsLogger_setApplicationName(
    mamaStatsLogger logger,
    const char * appName
)
```


**Parameters**: 

  * **logger** The logger object to update. 
  * **appName** The applicationName for the logger 


Set the applicationName


### function mamaStatsLogger_getApplicationName

```cpp
MAMAExpDLL mama_status mamaStatsLogger_getApplicationName(
    const mamaStatsLogger logger,
    const char ** appName
)
```


**Parameters**: 

  * **logger** The logger object to check. 
  * **appName** Location of the result for the applicationName 


Get the applicationName


### function mamaStatsLogger_setApplicationClass

```cpp
MAMAExpDLL mama_status mamaStatsLogger_setApplicationClass(
    mamaStatsLogger logger,
    const char * applClass
)
```


**Parameters**: 

  * **logger** The logger object to update. 
  * **applClass** The applicationName for the logger 


Set the applicationClass


### function mamaStatsLogger_getApplicationClass

```cpp
MAMAExpDLL mama_status mamaStatsLogger_getApplicationClass(
    const mamaStatsLogger logger,
    const char ** appClass
)
```


**Parameters**: 

  * **logger** The logger object to check. 
  * **appClass** Location of the result for the applicationClass 


Get the applicationClass


### function mamaStatsLogger_setIpAddress

```cpp
MAMAExpDLL mama_status mamaStatsLogger_setIpAddress(
    mamaStatsLogger logger,
    const char * ipAddress
)
```


**Parameters**: 

  * **logger** The logger object to update. 
  * **ipAddress** The ipAddress for the logger 


Set the ipAddress


### function mamaStatsLogger_getIpAddress

```cpp
MAMAExpDLL mama_status mamaStatsLogger_getIpAddress(
    const mamaStatsLogger logger,
    const char ** ipAddress
)
```


**Parameters**: 

  * **logger** The logger object to check. 
  * **ipAddress** Location of the result for the ipAddress of the logger. 


Get the ipAddress


### function mamaStatsLogger_logLogin

```cpp
MAMAExpDLL mama_status mamaStatsLogger_logLogin(
    mamaStatsLogger logger
)
```


**Parameters**: 

  * **logger** The logger object to use. 


Log a login event


### function mamaStatsLogger_logLogout

```cpp
MAMAExpDLL mama_status mamaStatsLogger_logLogout(
    mamaStatsLogger logger
)
```


**Parameters**: 

  * **logger** The logger object to use. 


Log a logout event


### function mamaStatsLogger_logSubscriptionEntitlePass

```cpp
MAMAExpDLL mama_status mamaStatsLogger_logSubscriptionEntitlePass(
    mamaStatsLogger logger,
    mamaSubscription subscription,
    int32_t entitleCode
)
```


**Parameters**: 

  * **logger** The logger object to use. 
  * **subscription** the subscription 
  * **entitleCode** the entitlement code 


Log a subscription entitlement check pass event


### function mamaStatsLogger_logSubscriptionFail

```cpp
MAMAExpDLL mama_status mamaStatsLogger_logSubscriptionFail(
    mamaStatsLogger logger,
    mamaSubscription subscription,
    mamaSlSubFailReason reason
)
```


**Parameters**: 

  * **logger** The logger object to use. 
  * **subscription** the subscription 
  * **reason** the reason 


Log a subscription fail event


### function mamaStatsLogger_logSubscriptionDestroy

```cpp
MAMAExpDLL mama_status mamaStatsLogger_logSubscriptionDestroy(
    mamaStatsLogger logger,
    mamaSubscription subscription
)
```


**Parameters**: 

  * **logger** The logger object to use. 
  * **subscription** the subscription 


Log a subscription destroy event


### function mamaStatsLogger_addStatMsg

```cpp
MAMAExpDLL mama_status mamaStatsLogger_addStatMsg(
    mamaStatsLogger * logger,
    mamaMsg msg
)
```


### function mamaStatsLogger_sendReport

```cpp
MAMAExpDLL mama_status mamaStatsLogger_sendReport(
    mamaStatsLogger * logger
)
```


### function mamaStatsLogger_getLogMsgStats

```cpp
MAMAExpDLL mama_status mamaStatsLogger_getLogMsgStats(
    mamaStatsLogger logger,
    mama_bool_t * logMsgStats
)
```


### function mamaStatsLogger_setLogMsgStats

```cpp
MAMAExpDLL mama_status mamaStatsLogger_setLogMsgStats(
    mamaStatsLogger logger,
    mama_bool_t logMsgStats
)
```


### function mamaStatsLogger_incMsgCount

```cpp
MAMAExpDLL mama_status mamaStatsLogger_incMsgCount(
    mamaStatsLogger statsLogger
)
```




## Macros Documentation

### define SL_TOPIC_USAGE_LOG

```cpp
#define SL_TOPIC_USAGE_LOG "SL_TOPIC_USAGE_LOG"
```


### define STATS_TOPIC

```cpp
#define STATS_TOPIC "STATS_TOPIC"
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

#ifndef MamaStatsLoggerH__
#define MamaStatsLoggerH__

#include <mama/status.h>
#include <mama/types.h>

#if defined(__cplusplus)
extern "C" {
#endif

/************************************************************************
* Constants
*************************************************************************/
#define SL_TOPIC_USAGE_LOG "SL_TOPIC_USAGE_LOG"
#define STATS_TOPIC        "STATS_TOPIC"

/************************************************************************
* Typedefs
*************************************************************************/
typedef enum mamaSlEvent_
{
    MAMA_SL_EVENT_LOGIN         = 0,
    MAMA_SL_EVENT_LOGOUT        = 1,
    MAMA_SL_EVENT_SUB_CREATE    = 2,
    MAMA_SL_EVENT_SUB_FAIL      = 3,
    MAMA_SL_EVENT_SUB_DESTROY   = 4,
    MAMA_SL_EVENT_SUB_ENT_PASS  = 5
} mamaSlEvent;

typedef enum mamaSlSubFailReason_
{
    MAMA_SL_SUB_FAIL_REGEX      = 0,
    MAMA_SL_SUB_FAIL_CODE       = 1,
    MAMA_SL_SUB_FAIL_TIMEOUT    = 2,
    MAMA_SL_SUB_FAIL_NOT_FOUND  = 3
} mamaSlSubFailReason;

/************************************************************************
* Functions
*************************************************************************/

MAMAExpDLL
extern const char*
mamaStatsLogger_eventToString (mamaSlEvent  event);
MAMAExpDLL
extern const char*
mamaStatsLogger_subFailReasonToString (mamaSlSubFailReason  subFailReason);

MAMAExpDLL
extern mama_status
mamaStatsLogger_allocate (mamaStatsLogger* logger);

MAMAExpDLL
extern mama_status
mamaStatsLogger_create (mamaStatsLogger  logger,
                        mamaQueue        queue,
                        mamaTransport    tport);

MAMAExpDLL
extern mama_status
mamaStatsLogger_createForStats (mamaStatsLogger  logger,
                                mamaQueue        queue,
                                mamaTransport    tport,
                                const char*      topic);


MAMAExpDLL
extern mama_status
mamaStatsLogger_destroy (mamaStatsLogger  logger);

MAMAExpDLL
extern mama_status
mamaStatsLogger_setReportInterval (mamaStatsLogger logger,
                                   mama_f64_t      interval);

MAMAExpDLL
extern mama_status
mamaStatsLogger_setReportSize(mamaStatsLogger logger,
                              mama_size_t     numEvents);

MAMAExpDLL
extern mama_status
mamaStatsLogger_setUserName (mamaStatsLogger    logger,
                            const char*         userName);

MAMAExpDLL
extern mama_status
mamaStatsLogger_getUserName (const mamaStatsLogger  logger,
                             const char**           userName);


MAMAExpDLL
extern mama_status
mamaStatsLogger_setHostName (mamaStatsLogger logger,
                             const char*     hostName);

MAMAExpDLL
extern mama_status
mamaStatsLogger_getHostName (const mamaStatsLogger logger,
                             const char**          hostName);

MAMAExpDLL
extern mama_status
mamaStatsLogger_setApplicationName (mamaStatsLogger    logger,
                                    const char*        appName);

MAMAExpDLL
extern mama_status
mamaStatsLogger_getApplicationName (const mamaStatsLogger  logger,
                                    const char**           appName);

MAMAExpDLL
extern mama_status
mamaStatsLogger_setApplicationClass (mamaStatsLogger logger,
                                    const char*      applClass);

MAMAExpDLL
extern mama_status
mamaStatsLogger_getApplicationClass (const mamaStatsLogger  logger,
                                     const char**           appClass);

MAMAExpDLL
extern mama_status
mamaStatsLogger_setIpAddress (mamaStatsLogger logger,
                              const char*     ipAddress);

MAMAExpDLL
extern mama_status
mamaStatsLogger_getIpAddress (const mamaStatsLogger  logger,
                              const char**           ipAddress);

MAMAExpDLL
extern mama_status
mamaStatsLogger_logLogin (mamaStatsLogger logger);

MAMAExpDLL
extern mama_status
mamaStatsLogger_logLogout (mamaStatsLogger logger);

MAMAExpDLL
extern mama_status
mamaStatsLogger_logSubscriptionEntitlePass (mamaStatsLogger logger,
                                            mamaSubscription subscription,
                                            int32_t          entitleCode);

MAMAExpDLL
extern mama_status
mamaStatsLogger_logSubscriptionFail (mamaStatsLogger     logger,
                                     mamaSubscription    subscription,
                                     mamaSlSubFailReason reason);
MAMAExpDLL
extern mama_status
mamaStatsLogger_logSubscriptionDestroy (mamaStatsLogger  logger,
                                        mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaStatsLogger_addStatMsg (mamaStatsLogger* logger,
                                mamaMsg          msg);

MAMAExpDLL
extern mama_status
mamaStatsLogger_sendReport (mamaStatsLogger* logger);

MAMAExpDLL
extern mama_status
mamaStatsLogger_getLogMsgStats (mamaStatsLogger  logger,
                                mama_bool_t*     logMsgStats);
MAMAExpDLL
extern mama_status
mamaStatsLogger_setLogMsgStats (mamaStatsLogger  logger,
                                mama_bool_t      logMsgStats);

MAMAExpDLL
extern mama_status
mamaStatsLogger_incMsgCount (mamaStatsLogger statsLogger);

#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
