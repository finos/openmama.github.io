---
title: com::wombat::mama::testtools::performance::MamaConsumerJava::StatHolder
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::testtools::performance::MamaConsumerJava::StatHolder



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[StatHolder](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava_1_1StatHolder.html#function-statholder)**(long totalNumMessages) |
| void | **[setLastMessages](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava_1_1StatHolder.html#function-setlastmessages)**(long lastMessages) |
| void | **[prettyPrintTitle](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava_1_1StatHolder.html#function-prettyprinttitle)**() |
| void | **[prettyPrint](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava_1_1StatHolder.html#function-prettyprint)**(int lowerBound, int upperBound) |

## Detailed Description

```java
class com::wombat::mama::testtools::performance::MamaConsumerJava::StatHolder;
```


Holder to contain the statistics gathering at the end of the program 

## Public Functions Documentation

### function StatHolder

```java
inline StatHolder(
    long totalNumMessages
)
```


### function setLastMessages

```java
inline void setLastMessages(
    long lastMessages
)
```


### function prettyPrintTitle

```java
inline void prettyPrintTitle()
```


### function prettyPrint

```java
inline void prettyPrint(
    int lowerBound,
    int upperBound
)
```


**Parameters**: 

  * **lowerBound** lower bound for array 
  * **upperBound** upper bound for array - 0 if no upper bound 


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100