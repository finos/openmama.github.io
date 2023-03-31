---
title: com::wombat::mama::MamaConnection
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaConnection





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaConnection](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-mamaconnection)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, String ipAddress, int port, int maxQueueSize, int curQueueSize, int msgCount, int bytesSent, String userName, String appName) |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-destroy)**() |
| native [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) | **[getTransport](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-gettransport)**() |
| native String | **[getIpAddress](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-getipaddress)**() |
| native int | **[getPort](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-getport)**() |
| native String | **[getUserName](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-getusername)**() |
| native String | **[getAppName](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-getappname)**() |
| native int | **[getMaxQueueSize](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-getmaxqueuesize)**() |
| native int | **[getQueueSize](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-getqueuesize)**() |
| native int | **[getMsgCount](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-getmsgcount)**() |
| native int | **[getBytesSent](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-getbytessent)**() |
| native String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-tostring)**() |
| native boolean | **[isIntercepted](classcom_1_1wombat_1_1mama_1_1MamaConnection.html#function-isintercepted)**() |

## Public Functions Documentation

### function MamaConnection

```java
inline MamaConnection(
    MamaTransport transport,
    String ipAddress,
    int port,
    int maxQueueSize,
    int curQueueSize,
    int msgCount,
    int bytesSent,
    String userName,
    String appName
)
```


### function destroy

```java
native void destroy()
```


### function getTransport

```java
native MamaTransport getTransport()
```


### function getIpAddress

```java
native String getIpAddress()
```


### function getPort

```java
native int getPort()
```


### function getUserName

```java
native String getUserName()
```


### function getAppName

```java
native String getAppName()
```


### function getMaxQueueSize

```java
native int getMaxQueueSize()
```


### function getQueueSize

```java
native int getQueueSize()
```


### function getMsgCount

```java
native int getMsgCount()
```


### function getBytesSent

```java
native int getBytesSent()
```


### function toString

```java
native String toString()
```


### function isIntercepted

```java
native boolean isIntercepted()
```


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100