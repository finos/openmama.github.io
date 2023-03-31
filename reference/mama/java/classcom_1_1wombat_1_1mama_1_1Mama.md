---
title: com::wombat::mama::Mama
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::Mama





## Public Functions

|                | Name           |
| -------------- | -------------- |
| native [MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) | **[loadBridge](classcom_1_1wombat_1_1mama_1_1Mama.html#function-loadbridge)**(String middleware, String path) |
| [MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) | **[loadBridge](classcom_1_1wombat_1_1mama_1_1Mama.html#function-loadbridge)**(String middleware) |
| native [MamaPayloadBridge](classcom_1_1wombat_1_1mama_1_1MamaPayloadBridge.html) | **[loadPayloadBridge](classcom_1_1wombat_1_1mama_1_1Mama.html#function-loadpayloadbridge)**(String name) |
| native [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) | **[getDefaultQueue](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getdefaultqueue)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| native void | **[open](classcom_1_1wombat_1_1mama_1_1Mama.html#function-open)**() |
| native void | **[open](classcom_1_1wombat_1_1mama_1_1Mama.html#function-open)**(String path, String filename) |
| native void | **[start](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| native void | **[startAll](classcom_1_1wombat_1_1mama_1_1Mama.html#function-startall)**(boolean isBlocking) |
| void | **[startAll](classcom_1_1wombat_1_1mama_1_1Mama.html#function-startall)**() |
| native void | **[startBackground](classcom_1_1wombat_1_1mama_1_1Mama.html#function-startbackground)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge, [MamaStartBackgroundCallback](interfacecom_1_1wombat_1_1mama_1_1MamaStartBackgroundCallback.html) callback) |
| native void | **[stop](classcom_1_1wombat_1_1mama_1_1Mama.html#function-stop)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| native void | **[stopAll](classcom_1_1wombat_1_1mama_1_1Mama.html#function-stopall)**() |
| native void | **[close](classcom_1_1wombat_1_1mama_1_1Mama.html#function-close)**() |
| void | **[enableLogging](classcom_1_1wombat_1_1mama_1_1Mama.html#function-enablelogging)**(Level level) |
| void | **[setLogCallback](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setlogcallback)**([MamaLogFileCallback2](interfacecom_1_1wombat_1_1mama_1_1MamaLogFileCallback2.html) callback) |
| void | **[log](classcom_1_1wombat_1_1mama_1_1Mama.html#function-log)**([MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) level, String message) |
| void | **[enableLogging](classcom_1_1wombat_1_1mama_1_1Mama.html#function-enablelogging)**(Level level, String file) |
| void | **[logToFile](classcom_1_1wombat_1_1mama_1_1Mama.html#function-logtofile)**(String file, Level level) |
| void | **[disableLogging](classcom_1_1wombat_1_1mama_1_1Mama.html#function-disablelogging)**() |
| Level | **[getLogLevel](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getloglevel)**() |
| void | **[setLogLevel](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setloglevel)**(Level level) |
| void | **[setLogFilePolicy](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setlogfilepolicy)**([MamaLogFilePolicy](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html) policy) |
| native String | **[getProperty](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getproperty)**(String name) |
| native void | **[loadDefaultProperties](classcom_1_1wombat_1_1mama_1_1Mama.html#function-loaddefaultproperties)**() |
| String | **[getProperty](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getproperty)**(String name, String defaultValue) |
| Map< String, String > | **[getProperties](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getproperties)**() |
| native void | **[setProperty](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setproperty)**(String name, String value) |
| native void | **[setLogSize](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setlogsize)**(long size) |
| native void | **[setNumLogFiles](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setnumlogfiles)**(int numFiles) |
| native void | **[setAppendToLogFile](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setappendtologfile)**(boolean append) |
| native boolean | **[loggingToFile](classcom_1_1wombat_1_1mama_1_1Mama.html#function-loggingtofile)**() |
| native void | **[setLogSizeCb](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setlogsizecb)**([MamaLogFileCallback](interfacecom_1_1wombat_1_1mama_1_1MamaLogFileCallback.html) callback) |
| [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[getMamaLogLevelForLevel](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getmamaloglevelforlevel)**(Level level) |
| int | **[getMamaLevelForLevel](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getmamalevelforlevel)**(Level level) |
| native void | **[setApplicationName](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setapplicationname)**(String applicationName) |
| native void | **[setApplicationClassName](classcom_1_1wombat_1_1mama_1_1Mama.html#function-setapplicationclassname)**(String applicationClassName) |
| native String | **[getApplicationName](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getapplicationname)**() |
| native String | **[getApplicationClassName](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getapplicationclassname)**() |
| native String | **[getCUserName](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getcusername)**() |
| native String | **[getCHostName](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getchostname)**() |
| String | **[getUserName](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getusername)**() |
| String | **[getHostName](classcom_1_1wombat_1_1mama_1_1Mama.html#function-gethostname)**() |
| String | **[getIpAddress](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getipaddress)**() |
| String | **[getVersion](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getversion)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| native int | **[getLastErrorCode](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getlasterrorcode)**() |
| String | **[getLastErrorText](classcom_1_1wombat_1_1mama_1_1Mama.html#function-getlasterrortext)**() |

## Public Functions Documentation

### function loadBridge

```java
static native MamaBridge loadBridge(
    String middleware,
    String path
)
```


### function loadBridge

```java
static inline MamaBridge loadBridge(
    String middleware
)
```


### function loadPayloadBridge

```java
static native MamaPayloadBridge loadPayloadBridge(
    String name
)
```


### function getDefaultQueue

```java
static native MamaQueue getDefaultQueue(
    MamaBridge bridge
)
```


### function open

```java
static native void open()
```


Initialize MAMA.

MAMA employs a reference count to track multiple calls to [Mama.open()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-open) and [Mama.close()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-close). The count is incremented every time [Mama.open()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-open) is called and decremented when [Mama.close()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.

If entitlements are enabled for the library, the available entitlement server names are read from the entitlement.servers property in the mama.properties file located in the $WOMBAT_PATH directory.

This function is thread safe. 


### function open

```java
static native void open(
    String path,
    String filename
)
```


**Parameters**: 

  * **path** Fully qualified path to the directory containing the properties file 
  * **filename** The name of the file containing MAMA properties. 


Initialize MAMA.

Allows users of the API to override the default behavior of [Mama.open()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-open) where a file mama.properties is required to be located in the directory specified by $WOMBAT_PATH.

The properties file must have the same structure as a standard mama.properties file.

If null is passed as the path the API will look for the properties file on the $WOMBAT_PATH.

If null is passed as the filename the API will look for the default filename of mama.properties.


### function start

```java
static native void start(
    MamaBridge bridge
)
```


**Parameters**: 

  * **bridge** The bridge specific structure. 


Start processing messages on the internal queue. This starts [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html)'s internal throttle, refresh logic, and other internal [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html) processes as well as dispatching messages from the internal queue. 

[Mama.start( )](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) blocks until an invocation of [Mama.stop()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-stop) occurs.

MAMA employs a reference count to track multiple calls to [Mama.start()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) and [Mama.stop()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-stop). The count is incremented every time [Mama.start()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) is called and decremented when [Mama.stop()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-stop) is called. The first [Mama.start()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) call does not unblock until the count reaches zero.

This function is thread safe.


### function startAll

```java
static native void startAll(
    boolean isBlocking
)
```


**Parameters**: 

  * **isBlocking** Whether to start blocking or run in background 


Calls [Mama::start](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) for all currently loaded middleware bridges

This function is thread safe.


### function startAll

```java
static inline void startAll()
```


Calls [Mama::start](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) for all currently loaded middleware bridges and blocks.

This function is thread safe. 


### function startBackground

```java
static native void startBackground(
    MamaBridge bridge,
    MamaStartBackgroundCallback callback
)
```


**Parameters**: 

  * **bridge** The middleware-specific bridge structure 
  * **callback** The callback for asynchronous status. 


Start processing MAMA internal events in the background. This method invokes [Mama::start](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) () in a separate thread.


### function stop

```java
static native void stop(
    MamaBridge bridge
)
```


**Parameters**: 

  * **bridge** The bridge specific structure. 


Stop dispatching on the default event queue for the specified bridge.

MAMA employs a reference count to track multiple calls to [Mama.start()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) and [Mama.stop()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-stop). The count is incremented every time [Mama.start()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) is called and decremented when [Mama.stop()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-stop) is called. The first [Mama.start()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-start) call does not unblock until the count reaches zero.

This function is thread safe.


### function stopAll

```java
static native void stopAll()
```


Stop dispatching on the default event queue for all bridges. 


### function close

```java
static native void close()
```


Close MAMA and free all associated resource.

MAMA employs a reference count to track multiple calls to [Mama.open()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-open) and [Mama.close()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-close). The count is incremented every time [Mama.open()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-open) is called and decremented when [Mama.close()](classcom_1_1wombat_1_1mama_1_1Mama.html#function-close) is called. The resources are not actually released until the count reaches zero.

This function is thread safe. 


### function enableLogging

```java
static inline void enableLogging(
    Level level
)
```


### function setLogCallback

```java
static inline void setLogCallback(
    MamaLogFileCallback2 callback
)
```


### function log

```java
static inline void log(
    MamaLogLevel level,
    String message
)
```


### function enableLogging

```java
static inline void enableLogging(
    Level level,
    String file
)
```


### function logToFile

```java
static inline void logToFile(
    String file,
    Level level
)
```


### function disableLogging

```java
static inline void disableLogging()
```


### function getLogLevel

```java
static inline Level getLogLevel()
```


### function setLogLevel

```java
static inline void setLogLevel(
    Level level
)
```


### function setLogFilePolicy

```java
static inline void setLogFilePolicy(
    MamaLogFilePolicy policy
)
```


### function getProperty

```java
static native String getProperty(
    String name
)
```


**Parameters**: 

  * **name** The name of the property to retrieve.


**Return**: the value of the property or NULL if unset. 

Retrieve a specific property from the API.

If the property has not been set, a NULL value will be returned.


### function loadDefaultProperties

```java
static native void loadDefaultProperties()
```


Load in default mama.properties from the default WOMBAT_PATH directory. 


### function getProperty

```java
static inline String getProperty(
    String name,
    String defaultValue
)
```


**Parameters**: 

  * **name** The name of the property to retrieve. 
  * **defaultValue** The value to return if this property does not exist.


**Return**: the value of the property or NULL if unset. 

Retrieve a specific property from the API.

If the property has not been set, the default value will be returned.


### function getProperties

```java
static inline Map< String, String > getProperties()
```


**Return**: A map of all currently configured properties 

Retrieve a list of all configured properties in key -> value format 


### function setProperty

```java
static native void setProperty(
    String name,
    String value
)
```


### function setLogSize

```java
static native void setLogSize(
    long size
)
```


### function setNumLogFiles

```java
static native void setNumLogFiles(
    int numFiles
)
```


### function setAppendToLogFile

```java
static native void setAppendToLogFile(
    boolean append
)
```


### function loggingToFile

```java
static native boolean loggingToFile()
```


### function setLogSizeCb

```java
static native void setLogSizeCb(
    MamaLogFileCallback callback
)
```


### function getMamaLogLevelForLevel

```java
static inline MamaLogLevel getMamaLogLevelForLevel(
    Level level
)
```


### function getMamaLevelForLevel

```java
static inline int getMamaLevelForLevel(
    Level level
)
```


### function setApplicationName

```java
static native void setApplicationName(
    String applicationName
)
```


### function setApplicationClassName

```java
static native void setApplicationClassName(
    String applicationClassName
)
```


### function getApplicationName

```java
static native String getApplicationName()
```


### function getApplicationClassName

```java
static native String getApplicationClassName()
```


### function getCUserName

```java
static native String getCUserName()
```


### function getCHostName

```java
static native String getCHostName()
```


### function getUserName

```java
static inline String getUserName()
```


**Return**: String the user name 

getUserName get the user name for the application 


### function getHostName

```java
static inline String getHostName()
```


**Return**: String the hostname 

getHostName get the host name of the machine 


### function getIpAddress

```java
static inline String getIpAddress()
```


**Return**: String the IP address 

getIpAddress get the ip address of the machine 


### function getVersion

```java
static inline String getVersion(
    MamaBridge bridge
)
```


### function getLastErrorCode

```java
static native int getLastErrorCode()
```


### function getLastErrorText

```java
static inline String getLastErrorText()
```


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100