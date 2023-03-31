---
title: com::wombat::mama::testtools::performance::MamaConsumerJava
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::testtools::performance::MamaConsumerJava



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[main](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava.html#function-main)**(String[] args) |

## Detailed Description

```java
class com::wombat::mama::testtools::performance::MamaConsumerJava;
```


This sample application demonstrates how to send mamaMsg's from an inbox, and receive the reply.

It accepts the following command line arguments: [-s topic] The topic to which to subscribe. Default value is "MAMA_INBOUND_TOPIC". [-tport name] The transport parameters to be used from mama.properties. [-q] Quiet mode. Suppress output. [-t] Time interval in uSec to print stats 

## Public Functions Documentation

### function main

```java
static inline void main(
    String[] args
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100