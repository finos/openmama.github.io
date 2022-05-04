---
title: com::wombat::mama::MamaFtMember
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaFtMember





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFtMember](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-mamaftmember)**() |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-destroy)**() |
| native void | **[activate](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-activate)**() |
| native void | **[deactivate](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-deactivate)**() |
| native boolean | **[isActive](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-isactive)**() |
| native String | **[getGroupName](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-getgroupname)**() |
| native int | **[getWeight](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-getweight)**() |
| native double | **[getHeartbeatInterval](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-getheartbeatinterval)**() |
| native double | **[getTimeoutInterval](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-gettimeoutinterval)**() |
| native void | **[setWeight](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-setweight)**(int weight) |
| native void | **[setInstanceId](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-setinstanceid)**(String id) |
| native void | **[setupFtMember](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-setupftmember)**(short ftType, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaFtCallback](classcom_1_1wombat_1_1mama_1_1MamaFtCallback.html) callback, [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, String groupName, int weight, double heartbeatInterval, double timeoutInterval) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[finalize](classcom_1_1wombat_1_1mama_1_1MamaFtMember.html#function-finalize)**() |

## Public Functions Documentation

### function MamaFtMember

```java
inline MamaFtMember()
```


### function destroy

```java
native void destroy()
```


### function activate

```java
native void activate()
```


### function deactivate

```java
native void deactivate()
```


### function isActive

```java
native boolean isActive()
```


### function getGroupName

```java
native String getGroupName()
```


### function getWeight

```java
native int getWeight()
```


### function getHeartbeatInterval

```java
native double getHeartbeatInterval()
```


### function getTimeoutInterval

```java
native double getTimeoutInterval()
```


### function setWeight

```java
native void setWeight(
    int weight
)
```


### function setInstanceId

```java
native void setInstanceId(
    String id
)
```


### function setupFtMember

```java
native void setupFtMember(
    short ftType,
    MamaQueue queue,
    MamaFtCallback callback,
    MamaTransport transport,
    String groupName,
    int weight,
    double heartbeatInterval,
    double timeoutInterval
)
```


## Protected Functions Documentation

### function finalize

```java
inline void finalize()
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100