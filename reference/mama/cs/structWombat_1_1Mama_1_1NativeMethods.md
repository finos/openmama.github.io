---
title: Wombat::Mama::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Mama::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mama_open](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-open)**() |
| int | **[mama_openWithProperties](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-openwithproperties)**(string path, string filename) |
| int | **[mama_setProperty](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setproperty)**(string name, string value) |
| IntPtr | **[mama_getProperty](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-getproperty)**(string name) |
| void | **[mama_loadDefaultProperties](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-loaddefaultproperties)**() |
| IntPtr | **[mama_getPropertiesAsString](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-getpropertiesasstring)**() |
| void | **[mama_freeAllocatedBuffer](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-freeallocatedbuffer)**(IntPtr buffer) |
| IntPtr | **[mama_getVersion](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-getversion)**(IntPtr bridgeImpl) |
| int | **[mama_close](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-close)**() |
| int | **[mama_start](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-start)**(IntPtr bridgeImpl) |
| int | **[mama_startAll](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-startall)**(bool isBlocking) |
| int | **[mama_startBackground](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-startbackground)**(IntPtr bridgeImpl, StartBackgroundCallbackForwarder.StartBackgroundCompleteDelegate callback) |
| int | **[mama_stop](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-stop)**(IntPtr bridgeImpl) |
| int | **[mama_stopAll](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-stopall)**() |
| int | **[mama_enableLogging](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-enablelogging)**(IntPtr f, int level) |
| int | **[mama_logToFile](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-logtofile)**(string fileName, int level) |
| int | **[mama_disableLogging](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-disablelogging)**() |
| void | **[mama_logDestroy](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-logdestroy)**() |
| int | **[mama_setLogLevel](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setloglevel)**(int level) |
| int | **[mama_getLogLevel](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-getloglevel)**() |
| int | **[mama_setLogSize](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setlogsize)**(ulong size) |
| int | **[mama_setNumLogFiles](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setnumlogfiles)**(int numFiles) |
| int | **[mama_setLogFilePolicy](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setlogfilepolicy)**(int policy) |
| int | **[mama_setAppendToLogFile](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setappendtologfile)**(int append) |
| int | **[mama_loggingToFile](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-loggingtofile)**() |
| int | **[mama_setLogSizeCb](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setlogsizecb)**(LogSizeCallbackDelegate callback) |
| void | **[mama_log2](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-log2)**(int level, string txt) |
| void | **[mama_logDefault2](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-logdefault2)**(int level, string txt) |
| void | **[mama_setWrapperGetVersion](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setwrappergetversion)**(wrapperGetVersion getVer) |
| int | **[mama_getDefaultEventQueue](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-getdefaulteventqueue)**(IntPtr bridgeImpl, ref IntPtr queuePtr) |
| int | **[mama_setLogCallback2](structWombat_1_1Mama_1_1NativeMethods.html#function-mama-setlogcallback2)**(LogFileCallbackDelegate callback) |

## Public Functions Documentation

### function mama_open

```csharp
int mama_open()
```


### function mama_openWithProperties

```csharp
int mama_openWithProperties(
    string path,
    string filename
)
```


### function mama_setProperty

```csharp
int mama_setProperty(
    string name,
    string value
)
```


### function mama_getProperty

```csharp
IntPtr mama_getProperty(
    string name
)
```


### function mama_loadDefaultProperties

```csharp
void mama_loadDefaultProperties()
```


### function mama_getPropertiesAsString

```csharp
IntPtr mama_getPropertiesAsString()
```


### function mama_freeAllocatedBuffer

```csharp
void mama_freeAllocatedBuffer(
    IntPtr buffer
)
```


### function mama_getVersion

```csharp
IntPtr mama_getVersion(
    IntPtr bridgeImpl
)
```


### function mama_close

```csharp
int mama_close()
```


### function mama_start

```csharp
int mama_start(
    IntPtr bridgeImpl
)
```


### function mama_startAll

```csharp
int mama_startAll(
    bool isBlocking
)
```


### function mama_startBackground

```csharp
int mama_startBackground(
    IntPtr bridgeImpl,
    StartBackgroundCallbackForwarder.StartBackgroundCompleteDelegate callback
)
```


### function mama_stop

```csharp
int mama_stop(
    IntPtr bridgeImpl
)
```


### function mama_stopAll

```csharp
int mama_stopAll()
```


### function mama_enableLogging

```csharp
int mama_enableLogging(
    IntPtr f,
    int level
)
```


### function mama_logToFile

```csharp
int mama_logToFile(
    string fileName,
    int level
)
```


### function mama_disableLogging

```csharp
int mama_disableLogging()
```


### function mama_logDestroy

```csharp
void mama_logDestroy()
```


### function mama_setLogLevel

```csharp
int mama_setLogLevel(
    int level
)
```


### function mama_getLogLevel

```csharp
int mama_getLogLevel()
```


### function mama_setLogSize

```csharp
int mama_setLogSize(
    ulong size
)
```


### function mama_setNumLogFiles

```csharp
int mama_setNumLogFiles(
    int numFiles
)
```


### function mama_setLogFilePolicy

```csharp
int mama_setLogFilePolicy(
    int policy
)
```


### function mama_setAppendToLogFile

```csharp
int mama_setAppendToLogFile(
    int append
)
```


### function mama_loggingToFile

```csharp
int mama_loggingToFile()
```


### function mama_setLogSizeCb

```csharp
int mama_setLogSizeCb(
    LogSizeCallbackDelegate callback
)
```


### function mama_log2

```csharp
void mama_log2(
    int level,
    string txt
)
```


### function mama_logDefault2

```csharp
void mama_logDefault2(
    int level,
    string txt
)
```


### function mama_setWrapperGetVersion

```csharp
void mama_setWrapperGetVersion(
    wrapperGetVersion getVer
)
```


### function mama_getDefaultEventQueue

```csharp
int mama_getDefaultEventQueue(
    IntPtr bridgeImpl,
    ref IntPtr queuePtr
)
```


### function mama_setLogCallback2

```csharp
int mama_setLogCallback2(
    LogFileCallbackDelegate callback
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100