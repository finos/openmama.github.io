---
title: com::wombat::mamda::examples::MamdaListen::ListenerCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaListen::ListenerCallback





Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html), MamaMsgFieldIterator

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListen_1_1ListenerCallback.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, MamaMsg msg, short msgType) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListen_1_1ListenerCallback.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListen_1_1ListenerCallback.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |
| void | **[onField](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListen_1_1ListenerCallback.html#function-onfield)**(MamaMsg msg, MamaMsgField field, MamaDictionary dict, Object closure) |
| void | **[setDictionary](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListen_1_1ListenerCallback.html#function-setdictionary)**(MamaDictionary dictionary) |

## Public Functions Documentation

### function onMsg

```java
inline void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    short msgType
)
```


### function onStale

```java
inline void onStale(
    MamdaSubscription subscription,
    short quality
)
```


### function onError

```java
inline void onError(
    MamdaSubscription subscription,
    short severity,
    short errorCode,
    String errorStr
)
```


### function onField

```java
inline void onField(
    MamaMsg msg,
    MamaMsgField field,
    MamaDictionary dict,
    Object closure
)
```


### function setDictionary

```java
inline void setDictionary(
    MamaDictionary dictionary
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100