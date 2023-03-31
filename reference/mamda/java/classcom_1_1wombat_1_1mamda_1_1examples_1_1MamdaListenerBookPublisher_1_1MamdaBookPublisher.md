---
title: com::wombat::mamda::examples::MamdaListenerBookPublisher::MamdaBookPublisher
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaListenerBookPublisher::MamdaBookPublisher





Inherits from MamaTimerCallback

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTimer](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-ontimer)**(MamaTimer timer) |
| void | **[subscribeToSymbols](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-subscribetosymbols)**(boolean processEntries) |
| void | **[createPublisher](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-createpublisher)**() |
| void | **[createTimer](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-createtimer)**() |
| void | **[removeSubscription](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-removesubscription)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscribed) |
| void | **[publishMessage](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-publishmessage)**(MamaMsg request, String symbol) |
| [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) | **[getMamdaSubscription](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-getmamdasubscription)**(String symbol) |
| void | **[start](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-start)**() |
| void | **[initializeMama](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-initializemama)**() |
| void | **[createSources](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-createsources)**() |
| MamaDictionary | **[buildDataDictionary](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-builddatadictionary)**(MamaTransport transport, String dictSource) |
| MamaBridge | **[getBridge](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-getbridge)**() |
| void | **[create](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-create)**(MamaMsg msg) |
| MamaTransport | **[getTransport](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-gettransport)**() |
| void | **[onDestroy](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1MamdaBookPublisher.html#function-ondestroy)**(MamaTimer timer) |

## Public Functions Documentation

### function onTimer

```java
inline void onTimer(
    MamaTimer timer
)
```


### function subscribeToSymbols

```java
inline void subscribeToSymbols(
    boolean processEntries
)
```


### function createPublisher

```java
inline void createPublisher()
```


### function createTimer

```java
inline void createTimer()
```


### function removeSubscription

```java
inline void removeSubscription(
    MamdaSubscription subscribed
)
```


### function publishMessage

```java
inline void publishMessage(
    MamaMsg request,
    String symbol
)
```


### function getMamdaSubscription

```java
inline MamdaSubscription getMamdaSubscription(
    String symbol
)
```


### function start

```java
inline void start()
```


### function initializeMama

```java
inline void initializeMama()
```


### function createSources

```java
inline void createSources()
```


### function buildDataDictionary

```java
inline MamaDictionary buildDataDictionary(
    MamaTransport transport,
    String dictSource
)
```


### function getBridge

```java
inline MamaBridge getBridge()
```


### function create

```java
inline void create(
    MamaMsg msg
)
```


### function getTransport

```java
inline MamaTransport getTransport()
```


### function onDestroy

```java
inline void onDestroy(
    MamaTimer timer
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100