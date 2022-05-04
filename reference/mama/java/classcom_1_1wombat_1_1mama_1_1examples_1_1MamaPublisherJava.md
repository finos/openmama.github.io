---
title: com::wombat::mama::examples::MamaPublisherJava
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaPublisherJava



 [More...](#detailed-description)

Inherits from [com.wombat.mama.MamaPublisherCallback](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-oncreate)**([MamaPublisher](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html) pub) |
| void | **[onDestroy](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-ondestroy)**([MamaPublisher](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html) pub) |
| void | **[onError](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-onerror)**([MamaPublisher](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html) pub, short status, String info) |
| void | **[onSuccess](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-onsuccess)**([MamaPublisher](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html) pub, short status, String info) |
| void | **[run](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-run)**(String[] args) |
| void | **[main](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-main)**(String[] args) |

## Detailed Description

```java
class com::wombat::mama::examples::MamaPublisherJava;
```


This sample application demonstrates how to publish mama messages, and respond to requests from a clients inbox.

It accepts the following command line arguments: [-s topic] The topic on which to send messages. Default value is "MAMA_TOPIC". [-l topic] The topic on which to listen for inbound requests. Default is "MAMA_INBOUND_TOPIC". [-i interval] The interval between messages .Default, 0.5. [-tport name] The transport parameters to be used from mama.properties. [-q] Quiet mode. Suppress output. [-c number] How many messages to publish (default infinite). [-pubCb] Listen for publisher callbacks. 

## Public Functions Documentation

### function onCreate

```java
inline void onCreate(
    MamaPublisher pub
)
```


**Reimplements**: [com::wombat::mama::MamaPublisherCallback::onCreate](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html#function-oncreate)


### function onDestroy

```java
inline void onDestroy(
    MamaPublisher pub
)
```


**Reimplements**: [com::wombat::mama::MamaPublisherCallback::onDestroy](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html#function-ondestroy)


### function onError

```java
inline void onError(
    MamaPublisher pub,
    short status,
    String info
)
```


**Reimplements**: [com::wombat::mama::MamaPublisherCallback::onError](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html#function-onerror)


### function onSuccess

```java
inline void onSuccess(
    MamaPublisher pub,
    short status,
    String info
)
```


**Reimplements**: [com::wombat::mama::MamaPublisherCallback::onSuccess](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html#function-onsuccess)


### function run

```java
inline void run(
    String[] args
)
```


### function main

```java
static inline void main(
    String[] args
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100