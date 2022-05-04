---
title: com::wombat::mama::MamaMsgStatus
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaMsgStatus



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[statusForMsg](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#function-statusformsg)**(final [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| String | **[stringForStatus](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#function-stringforstatus)**(final [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| String | **[stringForStatus](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#function-stringforstatus)**(final int type) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[STATUS_OK](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-ok)**  |
| final short | **[STATUS_LINE_DOWN](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-line-down)**  |
| final short | **[STATUS_NO_SUBSCRIBERS](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-no-subscribers)**  |
| final short | **[STATUS_BAD_SYMBOL](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-bad-symbol)**  |
| final short | **[STATUS_EXPIRED](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-expired)**  |
| final short | **[STATUS_TIMEOUT](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-timeout)**  |
| final short | **[STATUS_MISC](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-misc)**  |
| final short | **[STATUS_STALE](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-stale)**  |
| final short | **[STATUS_TIBRV_STATUS](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-tibrv-status)**  |
| final short | **[STATUS_PLATFORM_STATUS](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-platform-status)**  |
| final short | **[STATUS_NOT_ENTITLED](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-not-entitled)**  |
| final short | **[STATUS_NOT_FOUND](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-not-found)**  |
| final short | **[STATUS_POSSIBLY_STALE](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-possibly-stale)**  |
| final short | **[STATUS_NOT_PERMISSIONED](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-not-permissioned)**  |
| final short | **[STATUS_TOPIC_CHANGE](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-topic-change)**  |
| final short | **[STATUS_BANDWIDTH_EXCEEDED](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-bandwidth-exceeded)**  |
| final short | **[STATUS_DUPLICATE](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-duplicate)**  |
| final short | **[STATUS_DELETE](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-delete)**  |
| final short | **[STATUS_EXCEPTION](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html#variable-status-exception)**  |

## Detailed Description

```java
class com::wombat::mama::MamaMsgStatus;
```


Utility class for interpreting [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html) message status. 

## Public Functions Documentation

### function statusForMsg

```java
static inline int statusForMsg(
    final MamaMsg msg
)
```


**Parameters**: 

  * **msg** 


Extract the status from the supplied message.


### function stringForStatus

```java
static inline String stringForStatus(
    final MamaMsg msg
)
```


**Return**: The string. 

Return the status as a string given an `[MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)` message.


### function stringForStatus

```java
static inline String stringForStatus(
    final int type
)
```


**Return**: The description. 

Return a text description of the message's status.


## Public Attributes Documentation

### variable STATUS_OK

```java
static final short STATUS_OK = 0;
```


OK 


### variable STATUS_LINE_DOWN

```java
static final short STATUS_LINE_DOWN = 1;
```


The feed handler has detected a Line Down. 


### variable STATUS_NO_SUBSCRIBERS

```java
static final short STATUS_NO_SUBSCRIBERS = 2;
```


The feed handler does not have any subscribers to the subject 


### variable STATUS_BAD_SYMBOL

```java
static final short STATUS_BAD_SYMBOL = 3;
```


The symbol does not exist 


### variable STATUS_EXPIRED

```java
static final short STATUS_EXPIRED = 4;
```


Expired 


### variable STATUS_TIMEOUT

```java
static final short STATUS_TIMEOUT = 5;
```


A time out occurred 


### variable STATUS_MISC

```java
static final short STATUS_MISC = 6;
```


Miscellaneous status. Not an error 


### variable STATUS_STALE

```java
static final short STATUS_STALE = 7;
```


The subject is stale. Messages may have been dropped 


### variable STATUS_TIBRV_STATUS

```java
static final short STATUS_TIBRV_STATUS = 8;
```


### variable STATUS_PLATFORM_STATUS

```java
static final short STATUS_PLATFORM_STATUS = 8;
```


Error in the underlying messaging API 


### variable STATUS_NOT_ENTITLED

```java
static final short STATUS_NOT_ENTITLED = 9;
```


Not entitled to a subject 


### variable STATUS_NOT_FOUND

```java
static final short STATUS_NOT_FOUND = 10;
```


Not found 


### variable STATUS_POSSIBLY_STALE

```java
static final short STATUS_POSSIBLY_STALE = 11;
```


Messages may have been dropped 


### variable STATUS_NOT_PERMISSIONED

```java
static final short STATUS_NOT_PERMISSIONED = 12;
```


Not permissioned for the subject 


### variable STATUS_TOPIC_CHANGE

```java
static final short STATUS_TOPIC_CHANGE = 13;
```


Topic renamed 


### variable STATUS_BANDWIDTH_EXCEEDED

```java
static final short STATUS_BANDWIDTH_EXCEEDED = 14;
```


Bandwidth exceeded 


### variable STATUS_DUPLICATE

```java
static final short STATUS_DUPLICATE = 15;
```


Message with duplicate sequence number 


### variable STATUS_DELETE

```java
static final short STATUS_DELETE = 17;
```


Message with the type of DELETE 


### variable STATUS_EXCEPTION

```java
static final short STATUS_EXCEPTION = 999;
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100