---
title: com::wombat::mama::MamaDQCause
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDQCause



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaDQCause.html#function-tostring)**(short cause) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[DQ_SUBSCRIBER](classcom_1_1wombat_1_1mama_1_1MamaDQCause.html#variable-dq-subscriber)**  |
| final short | **[DQ_PUBLISHER](classcom_1_1wombat_1_1mama_1_1MamaDQCause.html#variable-dq-publisher)**  |
| final short | **[DQ_NETWORK](classcom_1_1wombat_1_1mama_1_1MamaDQCause.html#variable-dq-network)**  |
| final short | **[DQ_UNKNOWN](classcom_1_1wombat_1_1mama_1_1MamaDQCause.html#variable-dq-unknown)**  |
| final short | **[DQ_DISCONNECT](classcom_1_1wombat_1_1mama_1_1MamaDQCause.html#variable-dq-disconnect)**  |
| final short | **[DQ_CONNECT](classcom_1_1wombat_1_1mama_1_1MamaDQCause.html#variable-dq-connect)**  |

## Detailed Description

```java
class com::wombat::mama::MamaDQCause;
```


Causes of data quality events. Provides an enumeration that represents the cause of a data quality event.

The cause is supplied only by some middlewares. The following middlewares are supported:



* tibrv 

## Public Functions Documentation

### function toString

```java
static inline String toString(
    short cause
)
```


## Public Attributes Documentation

### variable DQ_SUBSCRIBER

```java
static final short DQ_SUBSCRIBER = 7;
```




* tibrv: Slow consumer advisory 


### variable DQ_PUBLISHER

```java
static final short DQ_PUBLISHER = 8;
```




* tibrv: Unused 


### variable DQ_NETWORK

```java
static final short DQ_NETWORK = 9;
```




* tibrv: Data loss advisory 


### variable DQ_UNKNOWN

```java
static final short DQ_UNKNOWN = 10;
```




* tibrv: Data quality event not covered by other categories 


### variable DQ_DISCONNECT

```java
static final short DQ_DISCONNECT = 12;
```




* tibrv: Disconnection advisory 


### variable DQ_CONNECT

```java
static final short DQ_CONNECT = 13;
```




* tibrv: Connection advisory 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100