---
title: com::wombat::mama::MamaPublisherCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaPublisherCallback



 [More...](#detailed-description)

Inherited by [com.wombat.mama.examples.MamaPublisherJava](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html#function-oncreate)**([MamaPublisher](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html) pub) |
| void | **[onDestroy](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html#function-ondestroy)**([MamaPublisher](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html) pub) |
| void | **[onError](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html#function-onerror)**([MamaPublisher](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html) pub, short status, String info) |
| void | **[onSuccess](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html#function-onsuccess)**([MamaPublisher](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html) pub, short status, String info) |

## Detailed Description

```java
class com::wombat::mama::MamaPublisherCallback;
```


Callback for publisher events. 

## Public Functions Documentation

### function onCreate

```java
void onCreate(
    MamaPublisher pub
)
```


**Reimplemented by**: [com::wombat::mama::examples::MamaPublisherJava::onCreate](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-oncreate)


### function onDestroy

```java
void onDestroy(
    MamaPublisher pub
)
```


**Reimplemented by**: [com::wombat::mama::examples::MamaPublisherJava::onDestroy](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-ondestroy)


### function onError

```java
void onError(
    MamaPublisher pub,
    short status,
    String info
)
```


**Reimplemented by**: [com::wombat::mama::examples::MamaPublisherJava::onError](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-onerror)


### function onSuccess

```java
void onSuccess(
    MamaPublisher pub,
    short status,
    String info
)
```


**Reimplemented by**: [com::wombat::mama::examples::MamaPublisherJava::onSuccess](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava.html#function-onsuccess)


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100