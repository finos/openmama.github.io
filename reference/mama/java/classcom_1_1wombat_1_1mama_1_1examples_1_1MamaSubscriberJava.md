---
title: com::wombat::mama::examples::MamaSubscriberJava
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaSubscriberJava



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[main](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaSubscriberJava.html#function-main)**(String[] args) |

## Detailed Description

```java
class com::wombat::mama::examples::MamaSubscriberJava;
```


This sample application demonstrates how to send mamaMsg's from an inbox, and receive the reply.

It accepts the following command line arguments: [-s topic] The topic to which to subscribe. Default value is "MAMA_INBOUND_TOPIC". [-tport name] The transport parameters to be used from mama.properties. [-q] Quiet mode. Suppress output. 

## Public Functions Documentation

### function main

```java
static inline void main(
    String[] args
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100