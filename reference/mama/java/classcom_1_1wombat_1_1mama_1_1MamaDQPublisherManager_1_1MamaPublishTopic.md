---
title: com::wombat::mama::MamaDQPublisherManager::MamaPublishTopic
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDQPublisherManager::MamaPublishTopic



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaPublishTopic](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager_1_1MamaPublishTopic.html#function-mamapublishtopic)**(String symbol, [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) dqPublisher, Object cache) |
| [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) | **[getPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager_1_1MamaPublishTopic.html#function-getpublisher)**() |
| Object | **[getCache](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager_1_1MamaPublishTopic.html#function-getcache)**() |
| String | **[getSymbol](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager_1_1MamaPublishTopic.html#function-getsymbol)**() |

## Detailed Description

```java
class com::wombat::mama::MamaDQPublisherManager::MamaPublishTopic;
```


This class is used to contain information on each publisher within the [MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html)

## Public Functions Documentation

### function MamaPublishTopic

```java
inline MamaPublishTopic(
    String symbol,
    MamaDQPublisher dqPublisher,
    Object cache
)
```


**Parameters**: 

  * **symbol** The symbol 
  * **dqPublisher** The publisher 
  * **cache** The cache 


Constructor for MamaPublishTopic


### function getPublisher

```java
inline MamaDQPublisher getPublisher()
```


**Return**: [MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) The publisher 

Return the publisher for the MamaPublishTopic


### function getCache

```java
inline Object getCache()
```


**Return**: Object The cache 

Return the cache for the MamaPublishTopic


### function getSymbol

```java
inline String getSymbol()
```


**Return**: String The symbol 

Return the symbol for the MamaPublishTopic


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100