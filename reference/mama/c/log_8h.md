---
title: mama/log.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/log.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[MamaLogLevel](log_8h.html#enum-mamaloglevel)** { MAMA_LOG_LEVEL_OFF = 0, MAMA_LOG_LEVEL_SEVERE = 1, MAMA_LOG_LEVEL_ERROR = 2, MAMA_LOG_LEVEL_WARN = 3, MAMA_LOG_LEVEL_NORMAL = 4, MAMA_LOG_LEVEL_FINE = 5, MAMA_LOG_LEVEL_FINER = 6, MAMA_LOG_LEVEL_FINEST = 7}<br>MAMA Log Level.  |
| enum| **[mamaLogFilePolicy](log_8h.html#enum-mamalogfilepolicy)** { LOGFILE_UNBOUNDED = 1, LOGFILE_ROLL = 2, LOGFILE_OVERWRITE = 3, LOGFILE_USER = 4}<br>MAMA Log Policy.  |
| typedef void(MAMACALLTYPE *)(MamaLogLevel level, const char *format, va_list ap) | **[mamaLogCb](log_8h.html#typedef-mamalogcb)** <br>Definition of a callback.  |
| typedef void(MAMACALLTYPE *)(MamaLogLevel level, const char *message) | **[mamaLogCb2](log_8h.html#typedef-mamalogcb2)** <br>Definition of a callback.  |
| typedef void(MAMACALLTYPE *)(const char *prefix, const char *format, va_list ap) | **[mamaLogCb3](log_8h.html#typedef-mamalogcb3)** <br>Definition of a callback.  |
| typedef void(*)(void) | **[logSizeCbType](log_8h.html#typedef-logsizecbtype)** <br>Definition of a callback.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL void MAMACALLTYPE | **[mama_logDefault](log_8h.html#function-mama-logdefault)**(MamaLogLevel level, const char * format, va_list ap)<br>The default logging within the API unless otherwise specified.  |
| MAMAExpDLL void MAMACALLTYPE | **[mama_logDefault2](log_8h.html#function-mama-logdefault2)**(MamaLogLevel level, const char * message)<br>Second Log Function.  |
| MAMAExpDLL void | **[mama_logStdout](log_8h.html#function-mama-logstdout)**(MamaLogLevel level, const char * format, ... )<br>Log to Standard Output.  |
| MAMAExpDLL void MAMACALLTYPE | **[mama_forceLogDefault](log_8h.html#function-mama-forcelogdefault)**(MamaLogLevel level, const char * format, va_list ap)<br>Forced Log Function.  |
| MAMAExpDLL void MAMACALLTYPE | **[mama_forceLogPrefixDefault](log_8h.html#function-mama-forcelogprefixdefault)**(const char * prefix, const char * format, va_list ap)<br>Forced Log Prefix Function.  |
| MAMAExpDLL mama_status | **[mama_enableLogging](log_8h.html#function-mama-enablelogging)**(FILE * file, MamaLogLevel level)<br>Enable Logging.  |
| MAMAExpDLL mama_status | **[mama_logToFile](log_8h.html#function-mama-logtofile)**(const char * file, MamaLogLevel level)<br>Behaves as mama_enableLogging() but accepts a string representing the file location.  |
| MAMAExpDLL mama_status | **[mama_disableLogging](log_8h.html#function-mama-disablelogging)**(void )<br>Disable logging.  |
| MAMAExpDLL void | **[mama_log](log_8h.html#function-mama-log)**(MamaLogLevel level, const char * format, ... )<br>Used for the majority of logging within the API.  |
| MAMAExpDLL void MAMACALLTYPE | **[mama_log2](log_8h.html#function-mama-log2)**(MamaLogLevel level, const char * message)<br>Second Log Function.  |
| MAMAExpDLL void | **[mama_logVa](log_8h.html#function-mama-logva)**(MamaLogLevel level, const char * format, va_list args)<br>Used for of logging within the API.  |
| MAMAExpDLL void | **[mama_forceLogVa](log_8h.html#function-mama-forcelogva)**(const char * format, va_list args)<br>Used the force logging using variable argument parameters.  |
| MAMAExpDLL void | **[mama_forceLogVaWithPrefix](log_8h.html#function-mama-forcelogvawithprefix)**(const char * prefix, const char * format, va_list args)<br>Used to add a custom prefix to a log line with a variable arg list.  |
| MAMAExpDLL void | **[mama_forceLog](log_8h.html#function-mama-forcelog)**(MamaLogLevel level, const char * format, ... )<br>Used for of logging within the API.  |
| MAMAExpDLL void | **[mama_forceLogWithPrefix](log_8h.html#function-mama-forcelogwithprefix)**(const char * prefix, const char * format, ... )<br>Used to add a custom prefix when logging a line.  |
| MAMAExpDLL mama_status | **[mama_setLogCallback](log_8h.html#function-mama-setlogcallback)**(mamaLogCb callback)<br>Set the callback to be used for mama_log calls. If not set then mama_logDefault will be used.  |
| MAMAExpDLL mama_status | **[mama_setLogCallback2](log_8h.html#function-mama-setlogcallback2)**(mamaLogCb2 callback)<br>Second set callback function.  |
| MAMAExpDLL mama_status | **[mama_setForceLogCallback](log_8h.html#function-mama-setforcelogcallback)**(mamaLogCb callback)<br>Set the callback to be used for mama logging. If not set then mama_ForceLogDefault will be used.  |
| MAMAExpDLL mama_status | **[mama_setForceLogPrefixCallback](log_8h.html#function-mama-setforcelogprefixcallback)**(mamaLogCb3 callback)<br>Set the callback to be used for mama logging. If not set then mama_ForceLogPrefixDefault will be used.  |
| MAMAExpDLL mama_status | **[mama_setLogLevel](log_8h.html#function-mama-setloglevel)**(MamaLogLevel level)<br>Sets the log level for Mama.  |
| MAMAExpDLL MamaLogLevel | **[mama_getLogLevel](log_8h.html#function-mama-getloglevel)**(void )<br>Returns the current log level for Mama.  |
| MAMAExpDLL mama_status | **[mama_setLogSize](log_8h.html#function-mama-setlogsize)**(unsigned long size)<br>Set the maxmum size of the log file (bytes).  |
| MAMAExpDLL mama_status | **[mama_setNumLogFiles](log_8h.html#function-mama-setnumlogfiles)**(int numFiles)<br>Set the number of rolled logfiles to keep before overwriting.  |
| MAMAExpDLL mama_status | **[mama_setLogFilePolicy](log_8h.html#function-mama-setlogfilepolicy)**(mamaLogFilePolicy policy)<br>Set the policy regarding how to handle files when Max file size is reached.  |
| MAMAExpDLL mama_status | **[mama_setAppendToLogFile](log_8h.html#function-mama-setappendtologfile)**(int append)<br>Set append to existing log file.  |
| MAMAExpDLL int | **[mama_loggingToFile](log_8h.html#function-mama-loggingtofile)**(void )<br>Return status of loggingToFile.  |
| MAMAExpDLL mama_status | **[mama_setLogSizeCb](log_8h.html#function-mama-setlogsizecb)**(logSizeCbType logCallbacks)<br>Set a callback for when the max log size is reached.  |
| MAMAExpDLL const char * | **[mama_logLevelToString](log_8h.html#function-mama-logleveltostring)**(MamaLogLevel level)<br>Return string version of log level.  |
| MAMAExpDLL int | **[mama_tryStringToLogLevel](log_8h.html#function-mama-trystringtologlevel)**(const char * s, MamaLogLevel * level)<br>Try to convert string to log level.  |
| MAMAExpDLL const char * | **[mama_logPolicyToString](log_8h.html#function-mama-logpolicytostring)**(mamaLogFilePolicy level)<br>Return string version of log policy.  |
| MAMAExpDLL int | **[mama_tryStringToLogPolicy](log_8h.html#function-mama-trystringtologpolicy)**(const char * s, mamaLogFilePolicy * policy)<br>Try to convert string to log policy.  |
| MAMAExpDLL int | **[mama_logIncrementVerbosity](log_8h.html#function-mama-logincrementverbosity)**(MamaLogLevel * level)<br>Increase by one log level the verbosity of a MamaLogLevel variable.  |
| MAMAExpDLL int | **[mama_logDecrementVerbosity](log_8h.html#function-mama-logdecrementverbosity)**(MamaLogLevel * level)<br>Decrease by one log level the verbosity of a MamaLogLevel variable.  |
| MAMAExpDLL mama_status | **[mama_logForceRollLogFiles](log_8h.html#function-mama-logforcerolllogfiles)**(void )<br>Force rolling the log file.  |
| MAMAExpDLL void | **[mama_logDestroy](log_8h.html#function-mama-logdestroy)**(void )<br>Destroy memory held by the logging.  |
| void | **[mama_loginit](log_8h.html#function-mama-loginit)**(void )<br>Setup MAMA Logging.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL MamaLogLevel | **[gMamaLogLevel](log_8h.html#variable-gmamaloglevel)**  |
| MAMAExpDLL FILE * | **[gMamaLogFile](log_8h.html#variable-gmamalogfile)**  |

## Types Documentation

### enum MamaLogLevel

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_LOG_LEVEL_OFF | 0|  No logging  |
| MAMA_LOG_LEVEL_SEVERE | 1|  Severe logging level  |
| MAMA_LOG_LEVEL_ERROR | 2|  Error logging level  |
| MAMA_LOG_LEVEL_WARN | 3|  Warning logging level  |
| MAMA_LOG_LEVEL_NORMAL | 4|  Normal log level  |
| MAMA_LOG_LEVEL_FINE | 5|  Start/Shutdown logging level  |
| MAMA_LOG_LEVEL_FINER | 6|  Object creation logging level  |
| MAMA_LOG_LEVEL_FINEST | 7|  Message logging level  |



MAMA Log Level. 

The level of detail when logging is enabled within the API 


### enum mamaLogFilePolicy

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| LOGFILE_UNBOUNDED | 1|  Default - No restrictions  |
| LOGFILE_ROLL | 2|  Logfile will roll  |
| LOGFILE_OVERWRITE | 3|  Logfile will overwrite  |
| LOGFILE_USER | 4|  User defined callback  |



MAMA Log Policy. 

The policy to control log file size 


### typedef mamaLogCb

```cpp
typedef void(MAMACALLTYPE * mamaLogCb) (MamaLogLevel level, const char *format, va_list ap);
```

Definition of a callback. 

### typedef mamaLogCb2

```cpp
typedef void(MAMACALLTYPE * mamaLogCb2) (MamaLogLevel level, const char *message);
```

Definition of a callback. 

### typedef mamaLogCb3

```cpp
typedef void(MAMACALLTYPE * mamaLogCb3) (const char *prefix, const char *format, va_list ap);
```

Definition of a callback. 

### typedef logSizeCbType

```cpp
typedef void(* logSizeCbType) (void);
```

Definition of a callback. 


## Functions Documentation

### function mama_logDefault

```cpp
MAMAExpDLL void MAMACALLTYPE mama_logDefault(
    MamaLogLevel level,
    const char * format,
    va_list ap
)
```

The default logging within the API unless otherwise specified. 

**Parameters**: 

  * **level** The log level. 
  * **format** The format of log message. 
  * **ap** Variable argument list. 


### function mama_logDefault2

```cpp
MAMAExpDLL void MAMACALLTYPE mama_logDefault2(
    MamaLogLevel level,
    const char * message
)
```

Second Log Function. 

**Parameters**: 

  * **level** The log level. 
  * **message** The message to log. 


This second logging function takes only a message and not a format string with a variable argument list. It is required for interoperability with all platforms that do not support C variable argument list, (e.g. .Net). Other than that it performs in exactly the same way as the first.


### function mama_logStdout

```cpp
MAMAExpDLL void mama_logStdout(
    MamaLogLevel level,
    const char * format,
    ... 
)
```

Log to Standard Output. 

**Parameters**: 

  * **level** The log level. 
  * **format** The format of log message. 
  * **...** Variable argument list. 


### function mama_forceLogDefault

```cpp
MAMAExpDLL void MAMACALLTYPE mama_forceLogDefault(
    MamaLogLevel level,
    const char * format,
    va_list ap
)
```

Forced Log Function. 

**Parameters**: 

  * **level** The log level. 
  * **format** The format of log message. 
  * **ap** Variable argument list. 


The default function used within the API for the mama_forceLog function pointer. If no logfile is available logging it to stderr.


### function mama_forceLogPrefixDefault

```cpp
MAMAExpDLL void MAMACALLTYPE mama_forceLogPrefixDefault(
    const char * prefix,
    const char * format,
    va_list ap
)
```

Forced Log Prefix Function. 

**Parameters**: 

  * **prefix** The custom prefix (log level to use as a string) 
  * **format** The format of log message. 
  * **ap** Variable argument list. 


The default function used within the API for the mama_forceLogWithPrefix function pointer. If no logfile is available logging it to stderr.


### function mama_enableLogging

```cpp
MAMAExpDLL mama_status mama_enableLogging(
    FILE * file,
    MamaLogLevel level
)
```

Enable Logging. 

**Parameters**: 

  * **file** File to write to. 
  * **level** Output level.


**Return**: mama_status return code can be one of: MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

No per-message or per-tick messages appear at `WOMBAT_LOG_LEVEL_FINE`. `WOMBAT_LOG_LEVEL_FINER` and `WOMBAT_LOG_LEVEL_FINEST` provide successively more detailed logging.


### function mama_logToFile

```cpp
MAMAExpDLL mama_status mama_logToFile(
    const char * file,
    MamaLogLevel level
)
```

Behaves as mama_enableLogging() but accepts a string representing the file location. 

**Parameters**: 

  * **file** The path to the file. Can be relative, absolute or on $WOMBAT_PATH. 
  * **level** The level at which the API should log messages.


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_PLATFORM MAMA_STATUS_IO_ERROR MAMA_STATUS_OK 

### function mama_disableLogging

```cpp
MAMAExpDLL mama_status mama_disableLogging(
    void 
)
```

Disable logging. 

**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

### function mama_log

```cpp
MAMAExpDLL void mama_log(
    MamaLogLevel level,
    const char * format,
    ... 
)
```

Used for the majority of logging within the API. 

**Parameters**: 

  * **level** The log level. 
  * **format** The format of log message. 
  * **...** Variable argument list. 


### function mama_log2

```cpp
MAMAExpDLL void MAMACALLTYPE mama_log2(
    MamaLogLevel level,
    const char * message
)
```

Second Log Function. 

**Parameters**: 

  * **level** The log level. 
  * **message** The message it log. 


### function mama_logVa

```cpp
MAMAExpDLL void mama_logVa(
    MamaLogLevel level,
    const char * format,
    va_list args
)
```

Used for of logging within the API. 

**Parameters**: 

  * **level** The log level. 
  * **format** The format of log message. 
  * **args** Variable argument list. 


### function mama_forceLogVa

```cpp
MAMAExpDLL void mama_forceLogVa(
    const char * format,
    va_list args
)
```

Used the force logging using variable argument parameters. 

**Parameters**: 

  * **format** The format of log message. 
  * **args** Variable argument list. 


### function mama_forceLogVaWithPrefix

```cpp
MAMAExpDLL void mama_forceLogVaWithPrefix(
    const char * prefix,
    const char * format,
    va_list args
)
```

Used to add a custom prefix to a log line with a variable arg list. 

**Parameters**: 

  * **prefix** The prefix to prepend to the log line. 
  * **format** The format of the log message. 
  * **args** Variable argument list. 


### function mama_forceLog

```cpp
MAMAExpDLL void mama_forceLog(
    MamaLogLevel level,
    const char * format,
    ... 
)
```

Used for of logging within the API. 

**Parameters**: 

  * **level** The log level. 
  * **format** The format of log message. 
  * **...** Variable argument list. 


### function mama_forceLogWithPrefix

```cpp
MAMAExpDLL void mama_forceLogWithPrefix(
    const char * prefix,
    const char * format,
    ... 
)
```

Used to add a custom prefix when logging a line. 

**Parameters**: 

  * **prefix** The prefix to prepend to the log line. 
  * **format** The format of the log message. 
  * **...** Variable argument list. 


### function mama_setLogCallback

```cpp
MAMAExpDLL mama_status mama_setLogCallback(
    mamaLogCb callback
)
```

Set the callback to be used for mama_log calls. If not set then mama_logDefault will be used. 

**Parameters**: 

  * **callback** The callback to be set


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

### function mama_setLogCallback2

```cpp
MAMAExpDLL mama_status mama_setLogCallback2(
    mamaLogCb2 callback
)
```

Second set callback function. 

**Parameters**: 

  * **callback** The callback to be used. Pass NULL to restore the mama_logDefault function.


**Return**: mama_status return code can be one of: MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

Set the callback to be used for mama_log calls. This function will set a log callback that receives a formatted string and not a variable argument list. This function is used mainly to support managed clients.


### function mama_setForceLogCallback

```cpp
MAMAExpDLL mama_status mama_setForceLogCallback(
    mamaLogCb callback
)
```

Set the callback to be used for mama logging. If not set then mama_ForceLogDefault will be used. 

**Parameters**: 

  * **callback** Callback to be set.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

### function mama_setForceLogPrefixCallback

```cpp
MAMAExpDLL mama_status mama_setForceLogPrefixCallback(
    mamaLogCb3 callback
)
```

Set the callback to be used for mama logging. If not set then mama_ForceLogPrefixDefault will be used. 

**Parameters**: 

  * **callback** Callback to be set.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

### function mama_setLogLevel

```cpp
MAMAExpDLL mama_status mama_setLogLevel(
    MamaLogLevel level
)
```

Sets the log level for Mama. 

**Parameters**: 

  * **level** The log level to be set.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

### function mama_getLogLevel

```cpp
MAMAExpDLL MamaLogLevel mama_getLogLevel(
    void 
)
```

Returns the current log level for Mama. 

**Return**: MamaLogLevel. 

### function mama_setLogSize

```cpp
MAMAExpDLL mama_status mama_setLogSize(
    unsigned long size
)
```

Set the maxmum size of the log file (bytes). 

**Parameters**: 

  * **size** The max size of a logfile


**Return**: mama_status return code can be one of: MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

When this size is reached the logsize callback is called, or if no callback is set then the default action is to overwrite file from the start. Default max size is 500 Mb


### function mama_setNumLogFiles

```cpp
MAMAExpDLL mama_status mama_setNumLogFiles(
    int numFiles
)
```

Set the number of rolled logfiles to keep before overwriting. 

**Parameters**: 

  * **numFiles** The number of files to keep


**Return**: mama_status return code can be one of: MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

Default is 10.


### function mama_setLogFilePolicy

```cpp
MAMAExpDLL mama_status mama_setLogFilePolicy(
    mamaLogFilePolicy policy
)
```

Set the policy regarding how to handle files when Max file size is reached. 

**Parameters**: 

  * **policy** The MAMA logfile policy to use.


**Return**: mama_status return code can be one of: MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

Default is LOGFILE_UNBOUNDED.


### function mama_setAppendToLogFile

```cpp
MAMAExpDLL mama_status mama_setAppendToLogFile(
    int append
)
```

Set append to existing log file. 

**Parameters**: 

  * **append** Boolean value indicating whether to append to the logfile.


**Return**: mama_status return code can be one of: MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

### function mama_loggingToFile

```cpp
MAMAExpDLL int mama_loggingToFile(
    void 
)
```

Return status of loggingToFile. 

**Return**: Boolean value indication whether logginToFile is set. 

### function mama_setLogSizeCb

```cpp
MAMAExpDLL mama_status mama_setLogSizeCb(
    logSizeCbType logCallbacks
)
```

Set a callback for when the max log size is reached. 

**Parameters**: 

  * **logCallbacks** The log size calback to be set


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_PLATFORM MAMA_STATUS_OK 

This can be used to override the default action which is to wrap the file and continue logging at the beginning


### function mama_logLevelToString

```cpp
MAMAExpDLL const char * mama_logLevelToString(
    MamaLogLevel level
)
```

Return string version of log level. 

**Parameters**: 

  * **level** The level to return as a string value. 


### function mama_tryStringToLogLevel

```cpp
MAMAExpDLL int mama_tryStringToLogLevel(
    const char * s,
    MamaLogLevel * level
)
```

Try to convert string to log level. 

**Parameters**: 

  * **s** The string representation of a log level.
  * **level** The MAMA log level equivalent. 


Return non-zero for success, zero for failure. The string comparison is case insensitive.


### function mama_logPolicyToString

```cpp
MAMAExpDLL const char * mama_logPolicyToString(
    mamaLogFilePolicy level
)
```

Return string version of log policy. 

**Parameters**: 

  * **level** The MAMA logfile policy to convert into its string equi valent. 


### function mama_tryStringToLogPolicy

```cpp
MAMAExpDLL int mama_tryStringToLogPolicy(
    const char * s,
    mamaLogFilePolicy * policy
)
```

Try to convert string to log policy. 

**Parameters**: 

  * **s** The string representation of a MAMA logfile policy.
  * **policy** The MAMA logfile policy string equivalent. 


Return non-zero for success, zero for failure. The string comparison is case insensitive.


### function mama_logIncrementVerbosity

```cpp
MAMAExpDLL int mama_logIncrementVerbosity(
    MamaLogLevel * level
)
```

Increase by one log level the verbosity of a MamaLogLevel variable. 

**Parameters**: 

  * **level** The MAMA Log level to increment.


**Return**: boolean value, 1 it the log level was incremented successfully. 

If the level is already at the maximum verbosity it will be unchanged after calling the function, otherwise the level will be incremented. Returns zero if level is not changed, or non-zero if it is changed If an unrecognized level is passed, the function will return non-zero and the variable will be set to the minimum verbosity


### function mama_logDecrementVerbosity

```cpp
MAMAExpDLL int mama_logDecrementVerbosity(
    MamaLogLevel * level
)
```

Decrease by one log level the verbosity of a MamaLogLevel variable. 

**Parameters**: 

  * **level** The MAMA Log level to increment.


**Return**: boolean value, 1 it the log level was decremented successfully. 

If the level is already at the minimum verbosity it will be unchanged after calling the function, otherwise the level will be decremented. Returns zero if level is not changed, or non-zero if it is changed If an unrecognized level is passed, the function will return non-zero and the variable will be set to the maximum verbosity


### function mama_logForceRollLogFiles

```cpp
MAMAExpDLL mama_status mama_logForceRollLogFiles(
    void 
)
```

Force rolling the log file. 

**Return**: The status of the operation. 

### function mama_logDestroy

```cpp
MAMAExpDLL void mama_logDestroy(
    void 
)
```

Destroy memory held by the logging. 

### function mama_loginit

```cpp
void mama_loginit(
    void 
)
```

Setup MAMA Logging. 

This will setup all the default values from the mama.properties file 



## Attributes Documentation

### variable gMamaLogLevel

```cpp
MAMAExpDLL MamaLogLevel gMamaLogLevel;
```


The current log level within the API deprecated - The helper functions should be used instead of this 


### variable gMamaLogFile

```cpp
MAMAExpDLL FILE * gMamaLogFile;
```


The file to which all logging will be written by default deprecated - The helper functions should be used instead of this 



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

#ifndef MamaLogH__
#define MamaLogH__

#include <stdio.h>
#include <mama/config.h>
#include <stdarg.h>
#ifdef __cplusplus
extern "C"
{
#endif

#include "mama/status.h"

typedef enum
{
    MAMA_LOG_LEVEL_OFF    = 0,  
    MAMA_LOG_LEVEL_SEVERE = 1,  
    MAMA_LOG_LEVEL_ERROR  = 2,  
    MAMA_LOG_LEVEL_WARN   = 3,  
    MAMA_LOG_LEVEL_NORMAL = 4,  
    MAMA_LOG_LEVEL_FINE   = 5,  
    MAMA_LOG_LEVEL_FINER  = 6,  
    MAMA_LOG_LEVEL_FINEST = 7   
} MamaLogLevel;

typedef enum
{
    LOGFILE_UNBOUNDED   = 1,    
    LOGFILE_ROLL        = 2,    
    LOGFILE_OVERWRITE   = 3,    
    LOGFILE_USER        = 4     
} mamaLogFilePolicy;


typedef void (MAMACALLTYPE *mamaLogCb)  (MamaLogLevel level, const char *format, va_list ap);

typedef void (MAMACALLTYPE *mamaLogCb2) (MamaLogLevel level, const char *message);

typedef void (MAMACALLTYPE *mamaLogCb3)  (const char* prefix, const char *format, va_list ap);

typedef void (*logSizeCbType) (void);

MAMAExpDLL
extern void MAMACALLTYPE
mama_logDefault (MamaLogLevel level, const char *format, va_list ap);

MAMAExpDLL
extern void MAMACALLTYPE
mama_logDefault2 (MamaLogLevel level, const char *message);

MAMAExpDLL
extern void
mama_logStdout (MamaLogLevel level, const char *format, ...);

MAMAExpDLL
extern void MAMACALLTYPE
mama_forceLogDefault (MamaLogLevel level, const char *format, va_list ap);


MAMAExpDLL
extern void MAMACALLTYPE
mama_forceLogPrefixDefault (const char* prefix,
                            const char* format,
                            va_list ap);

MAMAExpDLL
extern MamaLogLevel   gMamaLogLevel;

MAMAExpDLL
extern FILE*          gMamaLogFile;

MAMAExpDLL
extern mama_status
mama_enableLogging (FILE *file, MamaLogLevel level);

MAMAExpDLL
extern mama_status
mama_logToFile (const char* file, MamaLogLevel level);

MAMAExpDLL
extern mama_status
mama_disableLogging(void);

MAMAExpDLL
extern void
mama_log (MamaLogLevel level, const char *format, ...);

MAMAExpDLL
extern void MAMACALLTYPE
mama_log2 (MamaLogLevel level, const char *message);

MAMAExpDLL
extern void
mama_logVa (MamaLogLevel level, const char *format, va_list args);

MAMAExpDLL
extern void
mama_forceLogVa(const char   *format, va_list  args);

MAMAExpDLL
extern void
mama_forceLogVaWithPrefix (const char* prefix,
                           const char* format,
                           va_list     args);

MAMAExpDLL
extern void
mama_forceLog (MamaLogLevel level, const char *format, ...);

MAMAExpDLL
extern void
mama_forceLogWithPrefix (const char* prefix,
                         const char* format,
                         ...);

MAMAExpDLL
extern mama_status
mama_setLogCallback (mamaLogCb callback);

MAMAExpDLL
extern mama_status
mama_setLogCallback2 (mamaLogCb2 callback);

MAMAExpDLL
extern mama_status
mama_setForceLogCallback (mamaLogCb callback);

MAMAExpDLL
extern mama_status
mama_setForceLogPrefixCallback (mamaLogCb3 callback);


MAMAExpDLL
extern mama_status
mama_setLogLevel (MamaLogLevel level);

MAMAExpDLL
extern MamaLogLevel
mama_getLogLevel (void);

MAMAExpDLL
extern mama_status
mama_setLogSize (unsigned long size);

MAMAExpDLL
extern mama_status
mama_setNumLogFiles(int numFiles);

MAMAExpDLL
extern mama_status
mama_setLogFilePolicy(mamaLogFilePolicy policy);

MAMAExpDLL
extern mama_status
mama_setAppendToLogFile(int append);

MAMAExpDLL
extern int
mama_loggingToFile(void);

MAMAExpDLL
extern mama_status
mama_setLogSizeCb(logSizeCbType logCallbacks);

MAMAExpDLL
extern const char*
mama_logLevelToString(MamaLogLevel level);

MAMAExpDLL
extern int
mama_tryStringToLogLevel(const char* s, MamaLogLevel* level);

MAMAExpDLL
extern const char*
mama_logPolicyToString(mamaLogFilePolicy level);

MAMAExpDLL
extern int
mama_tryStringToLogPolicy(const char* s, mamaLogFilePolicy* policy);

MAMAExpDLL
extern int
mama_logIncrementVerbosity(MamaLogLevel* level);

MAMAExpDLL
extern int
mama_logDecrementVerbosity(MamaLogLevel* level);

MAMAExpDLL
extern mama_status
mama_logForceRollLogFiles(void);

MAMAExpDLL
extern void
mama_logDestroy(void);

void
mama_loginit (void);

#ifdef __cplusplus
} /* MAMAExpDLL
extern "C" */
#endif

#endif /* MAMA_LOG_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
