---
title: Wombat::Mama
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Mama



 [More...](#detailed-description)


`#include <mamacpp.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| mamaBridge | **[loadBridge](classWombat_1_1Mama.html#function-loadbridge)**(const char * middleware) |
| mamaBridge | **[loadBridge](classWombat_1_1Mama.html#function-loadbridge)**(const char * middleware, const char * path) |
| mamaPayloadBridge | **[loadPayloadBridge](classWombat_1_1Mama.html#function-loadpayloadbridge)**(const char * payload) |
| mamaBridge | **[getMiddlewareBridge](classWombat_1_1Mama.html#function-getmiddlewarebridge)**(const char * middleware) |
| mamaPayloadBridge | **[getPayloadBridge](classWombat_1_1Mama.html#function-getpayloadbridge)**(const char * payload) |
| const char * | **[getVersion](classWombat_1_1Mama.html#function-getversion)**(mamaBridge bridgeImpl) |
| void | **[open](classWombat_1_1Mama.html#function-open)**() |
| unsigned int | **[openCount](classWombat_1_1Mama.html#function-opencount)**() |
| unsigned int | **[openCount](classWombat_1_1Mama.html#function-opencount)**(const char * path, const char * filename) |
| void | **[open](classWombat_1_1Mama.html#function-open)**(const char * path, const char * filename) |
| void | **[registerEntitlementCallbacks](classWombat_1_1Mama.html#function-registerentitlementcallbacks)**([MamaEntitlementCallback](classWombat_1_1MamaEntitlementCallback.html) * callback) |
| void | **[setProperty](classWombat_1_1Mama.html#function-setproperty)**(const char * name, const char * value) |
| const char * | **[getProperty](classWombat_1_1Mama.html#function-getproperty)**(const char * name) |
| void | **[loadDefaultProperties](classWombat_1_1Mama.html#function-loaddefaultproperties)**(void ) |
| std::map< std::string, std::string > | **[getProperties](classWombat_1_1Mama.html#function-getproperties)**() |
| void | **[close](classWombat_1_1Mama.html#function-close)**() |
| unsigned int | **[closeCount](classWombat_1_1Mama.html#function-closecount)**() |
| void | **[start](classWombat_1_1Mama.html#function-start)**(mamaBridge bridgeImpl) |
| void | **[startAll](classWombat_1_1Mama.html#function-startall)**(bool isBlocking =true) |
| void | **[startBackground](classWombat_1_1Mama.html#function-startbackground)**(mamaBridge bridgeImpl, [MamaStartCallback](classWombat_1_1MamaStartCallback.html) * callback) |
| void | **[stop](classWombat_1_1Mama.html#function-stop)**(mamaBridge bridgeImpl) |
| void | **[stopAll](classWombat_1_1Mama.html#function-stopall)**(void ) |
| void | **[enableLogging](classWombat_1_1Mama.html#function-enablelogging)**(MamaLogLevel level, FILE * logFile) |
| void | **[logToFile](classWombat_1_1Mama.html#function-logtofile)**(const char * file, MamaLogLevel level) |
| void | **[disableLogging](classWombat_1_1Mama.html#function-disablelogging)**(void ) |
| void | **[setLogLevel](classWombat_1_1Mama.html#function-setloglevel)**(MamaLogLevel level) |
| MamaLogLevel | **[getLogLevel](classWombat_1_1Mama.html#function-getloglevel)**(void ) |
| void | **[setLogSize](classWombat_1_1Mama.html#function-setlogsize)**(unsigned long size) |
| void | **[setNumLogFiles](classWombat_1_1Mama.html#function-setnumlogfiles)**(int numFiles) |
| void | **[setLogFilePolicy](classWombat_1_1Mama.html#function-setlogfilepolicy)**(mamaLogFilePolicy policy) |
| void | **[setAppendToLogFile](classWombat_1_1Mama.html#function-setappendtologfile)**(bool append) |
| bool | **[loggingToFile](classWombat_1_1Mama.html#function-loggingtofile)**(void ) |
| void | **[setLogSizeCb](classWombat_1_1Mama.html#function-setlogsizecb)**([MamaLogFileCallback](classWombat_1_1MamaLogFileCallback.html) * callback) |
| void | **[setApplicationName](classWombat_1_1Mama.html#function-setapplicationname)**(const char * applicationName) |
| void | **[setApplicationClassName](classWombat_1_1Mama.html#function-setapplicationclassname)**(const char * className) |
| [MamaQueue](classWombat_1_1MamaQueue.html) * | **[getDefaultEventQueue](classWombat_1_1Mama.html#function-getdefaulteventqueue)**(mamaBridge bridgeImpl) |
| template <typename T \> <br>void | **[deleteObject](classWombat_1_1Mama.html#function-deleteobject)**(T * object) |
| void | **[setBridgeCallback](classWombat_1_1Mama.html#function-setbridgecallback)**(mamaBridge bridge, [MamaBridgeCallback](classWombat_1_1MamaBridgeCallback.html) * callback) |
| void | **[addStatsCollector](classWombat_1_1Mama.html#function-addstatscollector)**([MamaStatsCollector](classWombat_1_1MamaStatsCollector.html) * statsCollector) |
| void | **[removeStatsCollector](classWombat_1_1Mama.html#function-removestatscollector)**([MamaStatsCollector](classWombat_1_1MamaStatsCollector.html) * statsCollector) |

## Detailed Description

```cpp
class Wombat::Mama;
```


The `[Mama](classWombat_1_1Mama.html)` class provides methods global initialization and manipulating global options. 

## Public Functions Documentation

### function loadBridge

```cpp
static mamaBridge loadBridge(
    const char * middleware
)
```


**Parameters**: 

  * **impl** The bridge object 
  * **middleware** The middleware string. Can be "wmw", "lbm" or "tibrv". 


**Return**: mama_status Whether the call was successful or not. 

Load the bridge specified by middleware string. If the bridge has already been loaded then the existing bridge instance will be returned. 


### function loadBridge

```cpp
static mamaBridge loadBridge(
    const char * middleware,
    const char * path
)
```


**Parameters**: 

  * **impl** The bridge object 
  * **middleware** The middleware string. Can be "wmw", "lbm" or "tibrv". 
  * **path** The path to the bridge library 


**Return**: mama_status Whether the call was successful or not. 

Load the bridge specified by middleware string using the path specified by the user. If the bridge has already been loaded then the existing bridge instance will be returned. 


### function loadPayloadBridge

```cpp
static mamaPayloadBridge loadPayloadBridge(
    const char * payload
)
```


**Parameters**: 

  * **payload** The payload to be loaded.


**Return**: mamaPayloadBridge The payload bridge loaded. 

Load the payload bridge specified by payload string.

If the bridge has already been loaded then the existing bridge instance will be returned.


### function getMiddlewareBridge

```cpp
static mamaBridge getMiddlewareBridge(
    const char * middleware
)
```


**Parameters**: 

  * **middleware** The middleware to be returned


**Return**: mamaBridge The middleware bridge to be returned. Returns NULL if none available. 

Return a middleware bridge which matches the middleware string.


### function getPayloadBridge

```cpp
static mamaPayloadBridge getPayloadBridge(
    const char * payload
)
```


**Parameters**: 

  * **payload** The payload to be returned


**Return**: mamaBridge The payload bridge to be returned. Returns NULL if none available. 

Return a payload bridge which matches the payload string.


### function getVersion

```cpp
static const char * getVersion(
    mamaBridge bridgeImpl
)
```


Returns the version of the mama binary. The version of the underlying transport is also returned in parens after the mama version. 


### function open

```cpp
static void open()
```


Initialize MAMA.

MAMA employs a reference count to track multiple calls to [Mama::open()](classWombat_1_1Mama.html#function-open) and [Mama::close()](classWombat_1_1Mama.html#function-close). The count is incremented every time [Mama::open()](classWombat_1_1Mama.html#function-open) is called and decremented when [Mama::close()](classWombat_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.

This function is thread safe. 


### function openCount

```cpp
static unsigned int openCount()
```


**Return**: The reference count for the MAMA library after opening once. This will be non-zero and will match the amount of times a [Mama::open()](classWombat_1_1Mama.html#function-open) variant has been called. 

Initialize MAMA.

MAMA employs a reference count to track multiple calls to [Mama::open()](classWombat_1_1Mama.html#function-open) and [Mama::close()](classWombat_1_1Mama.html#function-close). The count is incremented every time [Mama::open()](classWombat_1_1Mama.html#function-open) is called and decremented when [Mama::close()](classWombat_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.

This function is thread safe.


### function openCount

```cpp
static unsigned int openCount(
    const char * path,
    const char * filename
)
```


**Parameters**: 

  * **path** Fully qualified path to the directory containing the properties file
  * **filename** The name of the file containing MAMA properties.


**Return**: The reference count for the MAMA library after opening once. This will be non-zero and will match the amount of times a [Mama::open()](classWombat_1_1Mama.html#function-open) variant has been called. 

Initialize MAMA.

Allows users of the API to override the default behaviour of [Mama.open()](classWombat_1_1Mama.html#function-open) where a file mama.properties is required to be located in the directory specified by $WOMBAT_PATH.

The properties file must have the same structure as a standard mama.properties file.

If null is passed as the path the API will look for the properties file on the $WOMBAT_PATH.

If null is passed as the filename the API will look for the default filename of mama.properties.

MAMA employs a reference count to track multiple calls to [Mama::open()](classWombat_1_1Mama.html#function-open) and [Mama::close()](classWombat_1_1Mama.html#function-close). The count is incremented every time [Mama::open()](classWombat_1_1Mama.html#function-open) is called and decremented when [Mama::close()](classWombat_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.


### function open

```cpp
static void open(
    const char * path,
    const char * filename
)
```


**Parameters**: 

  * **path** Fully qualified path to the directory containing the properties file
  * **filename** The name of the file containing MAMA properties. 


Initialize MAMA.

Allows users of the API to override the default behaviour of [Mama.open()](classWombat_1_1Mama.html#function-open) where a file mama.properties is required to be located in the directory specified by $WOMBAT_PATH.

The properties file must have the same structure as a standard mama.properties file.

If null is passed as the path the API will look for the properties file on the $WOMBAT_PATH.

If null is passed as the filename the API will look for the default filename of mama.properties.

MAMA employs a reference count to track multiple calls to [Mama::open()](classWombat_1_1Mama.html#function-open) and [Mama::close()](classWombat_1_1Mama.html#function-close). The count is incremented every time [Mama::open()](classWombat_1_1Mama.html#function-open) is called and decremented when [Mama::close()](classWombat_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.


### function registerEntitlementCallbacks

```cpp
static void registerEntitlementCallbacks(
    MamaEntitlementCallback * callback
)
```


**Parameters**: 

  * **callback** Data structure containing the function to be invoked when disconnect request is received or after a dynamic entitlement update occurrs 


Registers the callback methods to be called whenever the user receives a disconnect request or after a dynamic entitlements update occurrs 


### function setProperty

```cpp
static void setProperty(
    const char * name,
    const char * value
)
```


**Parameters**: 

  * **name** The name of the property 
  * **value** The property value 


Set a specific property for the API.

If the property being set has already been given a value from a properties file that value will be replaced.

See the example mama.properties provided with the distribution for examples of property formatting. The properties set via this function should be formatted in the same manner as those specified in mama.properties.

The strings passed to the function are copied.


### function getProperty

```cpp
static const char * getProperty(
    const char * name
)
```


**Parameters**: 

  * **name** The name of the property to retrieve.


**Return**: the value of the property or NULL if unset. 

Retrieve a specific property from the API.

If the property has not been set, a NULL value will be returned.


### function loadDefaultProperties

```cpp
static void loadDefaultProperties(
    void 
)
```


Load in default mama.properties from the default WOMBAT_PATH directory. 


### function getProperties

```cpp
static std::map< std::string, std::string > getProperties()
```


**Return**: A key value map of all configuration properties 

Retrieve all configuration properties from the API.


### function close

```cpp
static void close()
```


Close MAMA and free all associated resource.

MAMA employs a reference count to track multiple calls to [Mama::open()](classWombat_1_1Mama.html#function-open) and [Mama::close()](classWombat_1_1Mama.html#function-close). The count is incremented every time [Mama::open()](classWombat_1_1Mama.html#function-open) is called and decremented when [Mama::close()](classWombat_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.

This function is thread safe. 


### function closeCount

```cpp
static unsigned int closeCount()
```


**Return**: The reference count for the MAMA library after closing once. If this is zero then MAMA and all resources will have been freed. 

Close MAMA and free all associated resources if no more references exist (e.g.if open has been called 3 times then it will require 3 calls to close in order for all resources to be freed).

This function is thread safe.


### function start

```cpp
static void start(
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 


Start processing messages on the internal queue. This starts [Mama](classWombat_1_1Mama.html)'s internal throttle, refresh logic, and other internal [Mama](classWombat_1_1Mama.html) processes as well as dispatching messages from the internal queue. 

[Mama::start( )](classWombat_1_1Mama.html#function-start) blocks until an invocation of [Mama::stop()](classWombat_1_1Mama.html#function-stop) occurs.

MAMA employs a reference count to track multiple calls to [Mama::start()](classWombat_1_1Mama.html#function-start) and [Mama::stop()](classWombat_1_1Mama.html#function-stop). The count is incremented every time [Mama::start()](classWombat_1_1Mama.html#function-start) is called and decremented when [Mama::stop()](classWombat_1_1Mama.html#function-stop) is called. The first [Mama::start()](classWombat_1_1Mama.html#function-start) call does not unblock until the count reaches zero.

This function is thread safe.


### function startAll

```cpp
static void startAll(
    bool isBlocking =true
)
```


**Parameters**: 

  * **isBlocking** Whether to start blocking or run in background 


Calls [Mama::start](classWombat_1_1Mama.html#function-start) for all currently loaded middleware bridges

This function is thread safe.


### function startBackground

```cpp
static void startBackground(
    mamaBridge bridgeImpl,
    MamaStartCallback * callback
)
```


**Parameters**: 

  * **bridgeImpl** The middleware-specific bridge structure 
  * **callback** The callback for asynchronous status. 


Start processing MAMA internal events in the background. This method invokes [Mama::start](classWombat_1_1Mama.html#function-start) () in a separate thread.


### function stop

```cpp
static void stop(
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 


Stop dispatching on the default event queue for the specified bridge.

MAMA employs a reference count to track multiple calls to [Mama::start()](classWombat_1_1Mama.html#function-start) and [Mama::stop()](classWombat_1_1Mama.html#function-stop). The count is incremented every time [Mama::start()](classWombat_1_1Mama.html#function-start) is called and decremented when [Mama::stop()](classWombat_1_1Mama.html#function-stop) is called. The first [Mama::start()](classWombat_1_1Mama.html#function-start) call does not unblock until the count reaches zero.

This function is thread safe.


### function stopAll

```cpp
static void stopAll(
    void 
)
```


Stop dispatching on the default event queue for all bridges. 


### function enableLogging

```cpp
static void enableLogging(
    MamaLogLevel level,
    FILE * logFile
)
```


**Parameters**: 

  * **level** The level 
  * **logFile** the log file. 


Enable logging and direct the output to the specified stream.


### function logToFile

```cpp
static void logToFile(
    const char * file,
    MamaLogLevel level
)
```


**Parameters**: 

  * **file** the log filename 
  * **level** The level 


Enable logging to the specified file.


### function disableLogging

```cpp
static void disableLogging(
    void 
)
```


Disable logging. 


### function setLogLevel

```cpp
static void setLogLevel(
    MamaLogLevel level
)
```


**Parameters**: 

  * **level** The level 


Set the logging level 


### function getLogLevel

```cpp
static MamaLogLevel getLogLevel(
    void 
)
```


**Return**: the logging level 

Get the logging level 


### function setLogSize

```cpp
static void setLogSize(
    unsigned long size
)
```


**Parameters**: 

  * **size** the max size of file (bytes) 


Set the maxmum size of the log file (bytes) Default max size is 500 Mb 


### function setNumLogFiles

```cpp
static void setNumLogFiles(
    int numFiles
)
```


**Parameters**: 

  * **numFiles** the max number of logfiles 


Set the number of rolled logfiles to keep before overwriting. Default is 10 


### function setLogFilePolicy

```cpp
static void setLogFilePolicy(
    mamaLogFilePolicy policy
)
```


**Parameters**: 

  * **policy** the policy to use when max size is reached 


Set the policy regarding how to handle files when Max file size is reached. Default is LOGFILE_UNBOUNDED - uses a single logfile unlimited in size. Other policies are: LOGFILE_ROLL - keeps N logfiles specified with setNumLogFiles(N). LOGFILE_OVERWRITE - uses a single logfile limited in size. LOGFILE_USER - if user has registered a callback it will be calledt. Otherwise the file will roll or get overwritten depending onthe value specified with setNumLogFiles(N). 


### function setAppendToLogFile

```cpp
static void setAppendToLogFile(
    bool append
)
```


**Parameters**: 

  * **append** boolean flag to set append mode on or off 


Set the mode when opening an existing log file. setAppendToLogFile(true) will add data to the end of an existing file. Default is false which will overwrite any existing data in the file. 


### function loggingToFile

```cpp
static bool loggingToFile(
    void 
)
```


**Return**: the status of loggingToFile 

Get the status of loggingToFile Returns true if logging to a file, false if not 


### function setLogSizeCb

```cpp
static void setLogSizeCb(
    MamaLogFileCallback * callback
)
```


**Parameters**: 

  * **LogSizeCallback** function pointer for the callback 


Set a callback for when the max log size is reached. This will only be called if the policy has been set to LOGFILE_USER. 


### function setApplicationName

```cpp
static void setApplicationName(
    const char * applicationName
)
```


**Parameters**: 

  * **applicationName** 


Set the mama application name This should be called before [Mama.open()](classWombat_1_1Mama.html#function-open)


### function setApplicationClassName

```cpp
static void setApplicationClassName(
    const char * className
)
```


**Parameters**: 

  * **className** 


Set the mama application class This should be called before [Mama.open()](classWombat_1_1Mama.html#function-open)


### function getDefaultEventQueue

```cpp
static MamaQueue * getDefaultEventQueue(
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **bridgeImpl** The middleware specific bridge structure. 


**Return**: A pointer to the internal MAMA default event queue. 

Get a pointer to the internal default MAMA event queue.


### function deleteObject

```cpp
template <typename T >
static void deleteObject(
    T * object
)
```


Allow the MAMA API free memory for any objects which have been allocated by the API but responsibility for deleting has been handed to the application code.

This enables users of the API to provide alternate memory management implementations which may result in difficulties when deleting objects allocated internally by the MAMA API.

E.g. Detaching the [MamaMsg](classWombat_1_1MamaMsg.html) in a subscription callback.

Currently supported types:

[MamaMsg](classWombat_1_1MamaMsg.html)


### function setBridgeCallback

```cpp
static void setBridgeCallback(
    mamaBridge bridge,
    MamaBridgeCallback * callback
)
```


Set a MamaBridgeMessageCallback to be invoked whenever information messages are logged at the bridge level. Information messages vary depenging on the underlying middleware. Currently only supported for LBM. 


### function addStatsCollector

```cpp
static void addStatsCollector(
    MamaStatsCollector * statsCollector
)
```


**Parameters**: 

  * **statsCollector** 


It adds the newly created statsCollector to the statsGenerator list 


### function removeStatsCollector

```cpp
static void removeStatsCollector(
    MamaStatsCollector * statsCollector
)
```


**Parameters**: 

  * **statsCollector** 


It removes the statsCollector from the statsGenerator list 


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100