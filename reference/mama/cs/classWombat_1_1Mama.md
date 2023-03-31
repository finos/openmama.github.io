---
title: Wombat::Mama
summary: MAMA - Middleware Agnostic Messaging API 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Mama



MAMA - Middleware Agnostic Messaging API  [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamaLogLevel](namespaceWombat.html#enum-mamaloglevel) | **[GetLogLevelForString](classWombat_1_1Mama.html#function-getloglevelforstring)**(string level) |
| void | **[setLogCallback](classWombat_1_1Mama.html#function-setlogcallback)**([MamaLogFileCallback2](interfaceWombat_1_1MamaLogFileCallback2.html) callback)<br>Sets the log callback, this will be invoked every time a log is written in MAMA.  |
| void | **[setLogSizeCb](classWombat_1_1Mama.html#function-setlogsizecb)**([MamaLogFileCallback](interfaceWombat_1_1MamaLogFileCallback.html) callback)<br>Set callback for log max size exceeded. Applies only to USER policy.  |
| void | **[onNativeLogCallback](classWombat_1_1Mama.html#function-onnativelogcallback)**(int level, string message)<br>This handler is called by the C layer whenever a log comes in, it will invoke the managed object.  |
| [MamaBridge](classWombat_1_1MamaBridge.html) | **[loadBridge](classWombat_1_1Mama.html#function-loadbridge)**(string middleware)<br>Load the bridge specified by middleware string. If the bridge has already been loaded then the existing bridge instance will be returned.  |
| [MamaBridge](classWombat_1_1MamaBridge.html) | **[loadBridge](classWombat_1_1Mama.html#function-loadbridge)**(string middleware, string path)<br>Load the bridge specified by middleware string using the path specified by the user. If the bridge has already been loaded then the existing bridge instance will be returned  |
| [MamaPayloadBridge](classWombat_1_1MamaPayloadBridge.html) | **[loadPayloadBridge](classWombat_1_1Mama.html#function-loadpayloadbridge)**(string payload)<br>Load the payload brige specified by the payload string.  |
| void | **[open](classWombat_1_1Mama.html#function-open)**() |
| void | **[openWithProperties](classWombat_1_1Mama.html#function-openwithproperties)**(string path, string filename) |
| void | **[setProperty](classWombat_1_1Mama.html#function-setproperty)**(string name, string value)<br>Set a specific property for the API. If the property being set has already been given a value from a properties file that value will be replaced. See the example mama.properties provided with the distribution for examples of property formatting. The properties set via this function should be formatted in the same manner as those specified in mama.properties. The strings passed to the function are copied.  |
| string | **[getProperty](classWombat_1_1Mama.html#function-getproperty)**(string name)<br>Retrieve a specific property from the API. If the property has not been set, a null value will be returned.  |
| void | **[loadDefaultProperties](classWombat_1_1Mama.html#function-loaddefaultproperties)**()<br>Load in default mama.properties from the default WOMBAT_PATH directory.  |
| string | **[getProperty](classWombat_1_1Mama.html#function-getproperty)**(string name, string defaultValue)<br>Retrieve a specific property from the API. If the property has not been set, the default value will be returned  |
| Dictionary< string, string > | **[getProperties](classWombat_1_1Mama.html#function-getproperties)**()<br>Retrieve all configured properties as a dictionary from the current configuration.  |
| string | **[getVersion](classWombat_1_1Mama.html#function-getversion)**([MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl)<br>Return the version information for the library The version of [Mama](classWombat_1_1Mama.html) follows in parenthesis  |
| void | **[start](classWombat_1_1Mama.html#function-start)**([MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl)<br>Start processing messages on the internal queue. This starts [Mama](classWombat_1_1Mama.html)'s internal throttle, refresh logic, and other internal [Mama](classWombat_1_1Mama.html) processes as well as dispatching messages from the internal queue.  |
| void | **[startAll](classWombat_1_1Mama.html#function-startall)**()<br>Starts and starts dispatching on all currently loaded MAMA bridges and blocks until they have been stopped.  |
| void | **[startAll](classWombat_1_1Mama.html#function-startall)**(bool isBlocking)<br>Starts and starts dispatching on all currently loaded MAMA bridges and optionally blocks until they have been stopped.  |
| void | **[stopAll](classWombat_1_1Mama.html#function-stopall)**()<br>Stops dispatching for all currently started MAMA bridges.  |
| void | **[close](classWombat_1_1Mama.html#function-close)**() |
| void | **[startBackground](classWombat_1_1Mama.html#function-startbackground)**([MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl, [MamaStartBackgroundCallback](interfaceWombat_1_1MamaStartBackgroundCallback.html) callback)<br>Start [Mama](classWombat_1_1Mama.html) in the background. This method invokes [Mama.start()](classWombat_1_1Mama.html#function-start) in a separate thread.  |
| void | **[stop](classWombat_1_1Mama.html#function-stop)**([MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl)<br>Stop dispatching on the default event queue for the specified bridge.  |
| void | **[enableLogging](classWombat_1_1Mama.html#function-enablelogging)**([MamaLogLevel](namespaceWombat.html#enum-mamaloglevel) level)<br>Enable logging.  |
| void | **[logToFile](classWombat_1_1Mama.html#function-logtofile)**(string fileName, [MamaLogLevel](namespaceWombat.html#enum-mamaloglevel) level)<br>Enable logging, accepts a string representing the file location.  |
| void | **[disableLogging](classWombat_1_1Mama.html#function-disablelogging)**()<br>Disable logging.  |
| void | **[logDestroy](classWombat_1_1Mama.html#function-logdestroy)**()<br>Close any underlying log resources.  |
| void | **[setLogLevel](classWombat_1_1Mama.html#function-setloglevel)**([MamaLogLevel](namespaceWombat.html#enum-mamaloglevel) level)<br>Set the log level.  |
| [MamaLogLevel](namespaceWombat.html#enum-mamaloglevel) | **[getLogLevel](classWombat_1_1Mama.html#function-getloglevel)**()<br>Get the log level.  |
| void | **[setLogSize](classWombat_1_1Mama.html#function-setlogsize)**(ulong size)<br>Set the log file max size.  |
| void | **[setNumLogFiles](classWombat_1_1Mama.html#function-setnumlogfiles)**(int numFiles)<br>Set the max number of log files.  |
| void | **[setLogFilePolicy](classWombat_1_1Mama.html#function-setlogfilepolicy)**([MamaLogFilePolicy](namespaceWombat.html#enum-mamalogfilepolicy) policy)<br>Set logging policy.  |
| void | **[setAppendToLogFile](classWombat_1_1Mama.html#function-setappendtologfile)**(bool append)<br>Set append to prevent overwriting existing logfiles.  |
| bool | **[loggingToFile](classWombat_1_1Mama.html#function-loggingtofile)**()<br>Get logging to file status  |
| void | **[log](classWombat_1_1Mama.html#function-log)**([MamaLogLevel](namespaceWombat.html#enum-mamaloglevel) level, string text)<br>Add string to mama log at specified mama level.  |
| void | **[defaultLogFunction](classWombat_1_1Mama.html#function-defaultlogfunction)**([MamaLogLevel](namespaceWombat.html#enum-mamaloglevel) level, string text)<br>This function will invoke the default log function.  |
| void | **[setDefaultQueueHighWatermark](classWombat_1_1Mama.html#function-setdefaultqueuehighwatermark)**(int highWatermark)<br>Set the high watermark for the internal default MAMA queue. See  |
| void | **[setDefaultQueueLowWatermark](classWombat_1_1Mama.html#function-setdefaultqueuelowwatermark)**(int lowWatermark)<br>Set the low watermark for the internal default MAMA queue. See  |
| [MamaQueue](classWombat_1_1MamaQueue.html) | **[getDefaultEventQueue](classWombat_1_1Mama.html#function-getdefaulteventqueue)**([MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[opened](classWombat_1_1Mama.html#property-opened)**  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const string | **[DllName](classWombat_1_1Mama.html#variable-dllname)** <br>Name of DLL containing Native code  |

## Detailed Description

```csharp
class Wombat::Mama;
```

MAMA - Middleware Agnostic Messaging API 

MAMA provides an abstraction layer over various messaging middleware platforms. In particular, MAMA adds market data semantics to messaging platforms that would otherwise be too limited for use as a market data distribution middleware. Features that MAMA adds to any messaging middleware are: 

* Subscription management (initial values, throttling). 
* Entitlements/permissioning. 
* Data quality. 

MAMA currently supports the following middleware platforms: 

* [Wombat](namespaceWombat.html) TCP Middleware 
* 29West Latency Busters Messaging (see [http://29west.com](http://29west.com)) 
* Tibco TIB/RV versions 6 and 7 (see [http://tibco.com](http://tibco.com)) 
Future supported platforms may include: 

* Tibco SmartSockets (see [http://tibco.com](http://tibco.com)) 
* Reuters SSL, SFC, TibMsg, etc. 
A higher level market data API is also available: the Middleware Agnostic Market Data API (MAMDA). While MAMA provides a field-based abstraction to market data, MAMDA provides smart, specialized data types to deal with specific market data events, such as trades, quotes, order books, etc. MAMDA is particularly suitable for applications such as program trading and tick capture systems, where context is important. MAMA is more suited to applications that don't care about the meaning of fields, such as a simple, field-based market data display application. 

## Public Functions Documentation

### function GetLogLevelForString

```csharp
static MamaLogLevel GetLogLevelForString(
    string level
)
```


### function setLogCallback

```csharp
static void setLogCallback(
    MamaLogFileCallback2 callback
)
```

Sets the log callback, this will be invoked every time a log is written in MAMA. 

**Parameters**: 

  * **callback** The callback to invoke. 


### function setLogSizeCb

```csharp
static void setLogSizeCb(
    MamaLogFileCallback callback
)
```

Set callback for log max size exceeded. Applies only to USER policy. 

**Parameters**: 

  * **callback** The callback object to invoke whenever the log size is exceeded. 


### function onNativeLogCallback

```csharp
static void onNativeLogCallback(
    int level,
    string message
)
```

This handler is called by the C layer whenever a log comes in, it will invoke the managed object. 

**Parameters**: 

  * **level** The log level. 
  * **message** The log message. 


### function loadBridge

```csharp
static MamaBridge loadBridge(
    string middleware
)
```

Load the bridge specified by middleware string. If the bridge has already been loaded then the existing bridge instance will be returned. 

**Parameters**: 

  * **middleware** 


**Return**: mama_status Whether the call was successful or not


The middleware string. Can be "wmw", "lbm" or "tibrv". 


### function loadBridge

```csharp
static MamaBridge loadBridge(
    string middleware,
    string path
)
```

Load the bridge specified by middleware string using the path specified by the user. If the bridge has already been loaded then the existing bridge instance will be returned 

**Parameters**: 

  * **middleware** 
  * **path** 


**Return**: mama_status Whether the call was successful or not


The middleware string. Can be "wmw", "lbm" or "tibrv". 
The path to the bridge library 


### function loadPayloadBridge

```csharp
static MamaPayloadBridge loadPayloadBridge(
    string payload
)
```

Load the payload brige specified by the payload string. 

**Parameters**: 

  * **payload** 



The payload string. 


### function open

```csharp
static void open()
```


Initialize MAMA.

MAMA employs a reference count to track multiple calls to [Mama.open()](classWombat_1_1Mama.html#function-open) and [Mama.close()](classWombat_1_1Mama.html#function-close). The count is incremented every time [Mama.open()](classWombat_1_1Mama.html#function-open) is called and decremented when [Mama.close()](classWombat_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.

If entitlements are enabled for the library, the available entitlement server names are read from the entitlement.servers property in the mama.properties file located in the WOMBAT_PATH% directory.

This function is thread safe.


### function openWithProperties

```csharp
static void openWithProperties(
    string path,
    string filename
)
```


**Parameters**: 

  * **path** Fully qualified path to the directory containing the properties file 
  * **filename** The name of the file containing MAMA properties. 


Initialize MAMA.

Allows users of the API to override the default behavior of mama_open() where a file mama.properties is required to be located in the directory specified by WOMBAT_PATH%.

The properties file must have the same structure as a standard mama.properties file.

If null is passed as the path the API will look for the properties file on the WOMBAT_PATH%.

If null is passed as the filename the API will look for the default filename of mama.properties


### function setProperty

```csharp
static void setProperty(
    string name,
    string value
)
```

Set a specific property for the API. If the property being set has already been given a value from a properties file that value will be replaced. See the example mama.properties provided with the distribution for examples of property formatting. The properties set via this function should be formatted in the same manner as those specified in mama.properties. The strings passed to the function are copied. 

### function getProperty

```csharp
static string getProperty(
    string name
)
```

Retrieve a specific property from the API. If the property has not been set, a null value will be returned. 

### function loadDefaultProperties

```csharp
static void loadDefaultProperties()
```

Load in default mama.properties from the default WOMBAT_PATH directory. 

### function getProperty

```csharp
static string getProperty(
    string name,
    string defaultValue
)
```

Retrieve a specific property from the API. If the property has not been set, the default value will be returned 

### function getProperties

```csharp
static Dictionary< string, string > getProperties()
```

Retrieve all configured properties as a dictionary from the current configuration. 

### function getVersion

```csharp
static string getVersion(
    MamaBridge bridgeImpl
)
```

Return the version information for the library The version of [Mama](classWombat_1_1Mama.html) follows in parenthesis 

**Return**: Version string

### function start

```csharp
static void start(
    MamaBridge bridgeImpl
)
```

Start processing messages on the internal queue. This starts [Mama](classWombat_1_1Mama.html)'s internal throttle, refresh logic, and other internal [Mama](classWombat_1_1Mama.html) processes as well as dispatching messages from the internal queue. 

**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 


[Mama.start( )](classWombat_1_1Mama.html#function-start) blocks until an invocation of [Mama.stop()](classWombat_1_1Mama.html#function-stop) occurs.

MAMA employs a reference count to track multiple calls to [Mama.start()](classWombat_1_1Mama.html#function-start) and [Mama.stop()](classWombat_1_1Mama.html#function-stop). The count is incremented every time [Mama.start()](classWombat_1_1Mama.html#function-start) is called and decremented when [Mama.stop()](classWombat_1_1Mama.html#function-stop) is called. The first [Mama.start()](classWombat_1_1Mama.html#function-start) call does not unblock until the count reaches zero.

This function is thread safe. 


### function startAll

```csharp
static void startAll()
```

Starts and starts dispatching on all currently loaded MAMA bridges and blocks until they have been stopped. 

### function startAll

```csharp
static void startAll(
    bool isBlocking
)
```

Starts and starts dispatching on all currently loaded MAMA bridges and optionally blocks until they have been stopped. 

### function stopAll

```csharp
static void stopAll()
```

Stops dispatching for all currently started MAMA bridges. 

### function close

```csharp
static void close()
```


Close MAMA and free all associated resource.

MAMA employs a reference count to track multiple calls to [Mama.open()](classWombat_1_1Mama.html#function-open) and [Mama.close()](classWombat_1_1Mama.html#function-close). The count is incremented every time [Mama.open()](classWombat_1_1Mama.html#function-open) is called and decremented when [Mama.close()](classWombat_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.

This function is thread safe.


### function startBackground

```csharp
static void startBackground(
    MamaBridge bridgeImpl,
    MamaStartBackgroundCallback callback
)
```

Start [Mama](classWombat_1_1Mama.html) in the background. This method invokes [Mama.start()](classWombat_1_1Mama.html#function-start) in a separate thread. 

**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 
  * **callback** The callback for asynchronous status. 


### function stop

```csharp
static void stop(
    MamaBridge bridgeImpl
)
```

Stop dispatching on the default event queue for the specified bridge. 

**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 


MAMA employs a reference count to track multiple calls to [Mama.start()](classWombat_1_1Mama.html#function-start) and [Mama.stop()](classWombat_1_1Mama.html#function-stop). The count is incremented every time [Mama.start()](classWombat_1_1Mama.html#function-start) is called and decremented when [Mama.stop()](classWombat_1_1Mama.html#function-stop) is called. The first [Mama.start()](classWombat_1_1Mama.html#function-start) call does not unblock until the count reaches zero.

This function is thread safe.


### function enableLogging

```csharp
static void enableLogging(
    MamaLogLevel level
)
```

Enable logging. 

**Parameters**: 

  * **level** The logging level allowed. 


**Exceptions**: 

  * **ArgumentOutOfRangeException** The file name contains invalid characters. 


### function logToFile

```csharp
static void logToFile(
    string fileName,
    MamaLogLevel level
)
```

Enable logging, accepts a string representing the file location. 

**Parameters**: 

  * **fileName** The full path to the log file. 
  * **level** The logging level allowed. 


**Exceptions**: 

  * **ArgumentNullException** The file name is null or blank. 
  * **ArgumentOutOfRangeException** The file name contains invalid characters. 


### function disableLogging

```csharp
static void disableLogging()
```

Disable logging. 

### function logDestroy

```csharp
static void logDestroy()
```

Close any underlying log resources. 

### function setLogLevel

```csharp
static void setLogLevel(
    MamaLogLevel level
)
```

Set the log level. 

**Parameters**: 

  * **level** The logging level allowed. 


**Exceptions**: 

  * **ArgumentOutOfRangeException** The file name contains invalid characters. 


### function getLogLevel

```csharp
static MamaLogLevel getLogLevel()
```

Get the log level. 

**Return**: Log level MamaLogLevel

### function setLogSize

```csharp
static void setLogSize(
    ulong size
)
```

Set the log file max size. 

**Parameters**: 

  * **size** 


**Exceptions**: 

  * **ArgumentOutOfRangeException** Thrown if the size is 0. 


### function setNumLogFiles

```csharp
static void setNumLogFiles(
    int numFiles
)
```

Set the max number of log files. 

**Parameters**: 

  * **numFiles** 


**Exceptions**: 

  * **ArgumentOutOfRangeException** Thrown if the number of files is 0 or less. 


### function setLogFilePolicy

```csharp
static void setLogFilePolicy(
    MamaLogFilePolicy policy
)
```

Set logging policy. 

**Parameters**: 

  * **policy** 


### function setAppendToLogFile

```csharp
static void setAppendToLogFile(
    bool append
)
```

Set append to prevent overwriting existing logfiles. 

**Parameters**: 

  * **append** 


### function loggingToFile

```csharp
static bool loggingToFile()
```

Get logging to file status 

**Return**: Boolean true if logging to file

### function log

```csharp
static void log(
    MamaLogLevel level,
    string text
)
```

Add string to mama log at specified mama level. 

**Parameters**: 

  * **level** The level to log at. 
  * **text** The log message. 


**Exceptions**: 

  * **ArgumentOutOfRangeException** The logging level is invalid. 


### function defaultLogFunction

```csharp
static void defaultLogFunction(
    MamaLogLevel level,
    string text
)
```

This function will invoke the default log function. 

**Parameters**: 

  * **level** The level to log at. 
  * **text** The log message. 


**Exceptions**: 

  * **ArgumentNullException** The logging text has not been supplied. 
  * **ArgumentOutOfRangeException** The logging level is invalid. 


### function setDefaultQueueHighWatermark

```csharp
static void setDefaultQueueHighWatermark(
    int highWatermark
)
```

Set the high watermark for the internal default MAMA queue. See 

**Parameters**: 

  * **highWatermark** 


`mamaQueue_setHighWatermark()` for details.

Although the monitoring callbacks on the default queue cannot be specified for RV, setting of the high water mark is still supported.


### function setDefaultQueueLowWatermark

```csharp
static void setDefaultQueueLowWatermark(
    int lowWatermark
)
```

Set the low watermark for the internal default MAMA queue. See 

**Parameters**: 

  * **lowWatermark** 


`mamaQueue_setLowWatermark()` for details.

Currently supported only on [Wombat](namespaceWombat.html) TCP middleware.


### function getDefaultEventQueue

```csharp
static MamaQueue getDefaultEventQueue(
    MamaBridge bridgeImpl
)
```


## Public Property Documentation

### property opened

```csharp
static bool opened;
```


## Public Attributes Documentation

### variable DllName

```csharp
static const string DllName = "libmamacmd.dll";
```

Name of DLL containing Native code 

-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100