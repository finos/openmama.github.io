---
title: Wombat::MamaConnection
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaConnection





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaConnection](classWombat_1_1MamaConnection.html#function-mamaconnection)**([MamaTransport](classWombat_1_1MamaTransport.html) * tport, mamaConnection cnxn) |
| virtual | **[~MamaConnection](classWombat_1_1MamaConnection.html#function-~mamaconnection)**(void ) |
| [MamaTransport](classWombat_1_1MamaTransport.html) * | **[getTransport](classWombat_1_1MamaConnection.html#function-gettransport)**(void ) const |
| const char * | **[getIpAddress](classWombat_1_1MamaConnection.html#function-getipaddress)**(void ) const |
| uint16_t | **[getPort](classWombat_1_1MamaConnection.html#function-getport)**(void ) const |
| const char * | **[getUserName](classWombat_1_1MamaConnection.html#function-getusername)**(void ) const |
| const char * | **[getAppName](classWombat_1_1MamaConnection.html#function-getappname)**(void ) const |
| uint32_t | **[getQueueSize](classWombat_1_1MamaConnection.html#function-getqueuesize)**(void ) const |
| uint32_t | **[getMaxQueueSize](classWombat_1_1MamaConnection.html#function-getmaxqueuesize)**(void ) const |
| uint32_t | **[getMsgCount](classWombat_1_1MamaConnection.html#function-getmsgcount)**(void ) const |
| uint32_t | **[getBytesSent](classWombat_1_1MamaConnection.html#function-getbytessent)**(void ) const |
| const char * | **[toString](classWombat_1_1MamaConnection.html#function-tostring)**(void ) const |
| bool | **[isIntercepted](classWombat_1_1MamaConnection.html#function-isintercepted)**(void ) const |
| mamaConnection | **[getCValue](classWombat_1_1MamaConnection.html#function-getcvalue)**() |
| const mamaConnection | **[getCValue](classWombat_1_1MamaConnection.html#function-getcvalue)**() const |

## Public Functions Documentation

### function MamaConnection

```cpp
inline MamaConnection(
    MamaTransport * tport,
    mamaConnection cnxn
)
```


### function ~MamaConnection

```cpp
virtual ~MamaConnection(
    void 
)
```


### function getTransport

```cpp
MamaTransport * getTransport(
    void 
) const
```


### function getIpAddress

```cpp
const char * getIpAddress(
    void 
) const
```


### function getPort

```cpp
uint16_t getPort(
    void 
) const
```


### function getUserName

```cpp
const char * getUserName(
    void 
) const
```


### function getAppName

```cpp
const char * getAppName(
    void 
) const
```


### function getQueueSize

```cpp
uint32_t getQueueSize(
    void 
) const
```


### function getMaxQueueSize

```cpp
uint32_t getMaxQueueSize(
    void 
) const
```


### function getMsgCount

```cpp
uint32_t getMsgCount(
    void 
) const
```


### function getBytesSent

```cpp
uint32_t getBytesSent(
    void 
) const
```


### function toString

```cpp
const char * toString(
    void 
) const
```


### function isIntercepted

```cpp
bool isIntercepted(
    void 
) const
```


### function getCValue

```cpp
mamaConnection getCValue()
```


### function getCValue

```cpp
const mamaConnection getCValue() const
```


-------------------------------

Updated on 2023-03-31 at 15:29:24 +0100