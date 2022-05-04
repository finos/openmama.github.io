---
title: com::wombat::mama::examples::MamaInboxJava
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaInboxJava



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[main](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaInboxJava.html#function-main)**(String[] args) |

## Detailed Description

```java
class com::wombat::mama::examples::MamaInboxJava;
```


This sample application demonstrates how to send mamaMsgs from an inbox, and receive the reply.

It accepts the following command line arguments: [-s topic] The topic on which to send the request. Default value is "MAMA_INBOUND_TOPIC". [-tport name] The transport parameters to be used from mama.properties. [-q] Quiet mode. Suppress output. 

## Public Functions Documentation

### function main

```java
static inline void main(
    String[] args
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100