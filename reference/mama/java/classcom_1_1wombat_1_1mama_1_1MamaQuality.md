---
title: com::wombat::mama::MamaQuality
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaQuality



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaQuality.html#function-tostring)**(short quality) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[QUALITY_OK](classcom_1_1wombat_1_1mama_1_1MamaQuality.html#variable-quality-ok)**  |
| final short | **[QUALITY_MAYBE_STALE](classcom_1_1wombat_1_1mama_1_1MamaQuality.html#variable-quality-maybe-stale)**  |
| final short | **[QUALITY_STALE](classcom_1_1wombat_1_1mama_1_1MamaQuality.html#variable-quality-stale)**  |
| final short | **[QUALITY_PARTIAL_STALE](classcom_1_1wombat_1_1mama_1_1MamaQuality.html#variable-quality-partial-stale)**  |
| final short | **[QUALITY_FORCED_STALE](classcom_1_1wombat_1_1mama_1_1MamaQuality.html#variable-quality-forced-stale)**  |
| final short | **[QUALITY_DUPLICATE](classcom_1_1wombat_1_1mama_1_1MamaQuality.html#variable-quality-duplicate)**  |
| final short | **[QUALITY_UNKNOWN](classcom_1_1wombat_1_1mama_1_1MamaQuality.html#variable-quality-unknown)**  |

## Detailed Description

```java
class com::wombat::mama::MamaQuality;
```


Class containing constants and utility methods for dealing with subscription level quality events. 

## Public Functions Documentation

### function toString

```java
static inline String toString(
    short quality
)
```


**Parameters**: 

  * **quality** A valid quality short value. 


**Return**: The string representation of the quality. 

Get a stringified representation of the quality.


## Public Attributes Documentation

### variable QUALITY_OK

```java
static final short QUALITY_OK = 0;
```


The quality of the subscription is ok. The integrity of the data can be guaranteed. 


### variable QUALITY_MAYBE_STALE

```java
static final short QUALITY_MAYBE_STALE = 1;
```


The quality of the subscription is possibly stale. The integrity of the data must be treated as suspect. The middleware has informed MAMA that data is being lost but a gap has not yet been detected. 


### variable QUALITY_STALE

```java
static final short QUALITY_STALE = 2;
```


The quality of the subscription is stale. A gap has been detected in the message stream. The integrity of the data has been compromised. Data should be treated as invalid until a recap is received. 


### variable QUALITY_PARTIAL_STALE

```java
static final short QUALITY_PARTIAL_STALE = 3;
```


As with `QUALITY_MAYBE_STALE`


### variable QUALITY_FORCED_STALE

```java
static final short QUALITY_FORCED_STALE = 4;
```


### variable QUALITY_DUPLICATE

```java
static final short QUALITY_DUPLICATE = 5;
```


Messages with duplicate sequence numbers have been received for the subscription. 


### variable QUALITY_UNKNOWN

```java
static final short QUALITY_UNKNOWN = 99;
```


Invalid quality state value. 


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100