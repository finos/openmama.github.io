---
title: com::wombat::mama::MamaTimeZone
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaTimeZone



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| static | **[MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-mamatimezone)**() |
| [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) | **[utc](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-utc)**() |
| [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) | **[usEastern](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-useastern)**() |
| | **[MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-mamatimezone)**() |
| | **[MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-mamatimezone)**(String tz) |
| | **[MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-mamatimezone)**([MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) copy) |
| boolean | **[equals](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-equals)**(Object obj) |
| int | **[hashCode](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-hashcode)**() |
| void | **[set](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-set)**(String tz) |
| String | **[tz](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-tz)**() |
| int | **[offset](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-offset)**() |
| TimeZone | **[getJavaTimzone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html#function-getjavatimzone)**() |

## Detailed Description

```java
class com::wombat::mama::MamaTimeZone;
```


A time zone representation to make conversion of timestamps to and from particular time zones more convenient.

Note: The addition of instance monitoring to the [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) implementation has resulted in the following limitation in its usage. Do not create short lived objects of this type on the method stack or delete long lived objects before program termination. Pointers to all instances are maintained in a global vector. At the moment there is no mechanism by which we can detect deleted objects or those which are popped off the method stack. An internal thread will always iterate over all objects ever created. A call to an object removed from the stack will result in nondeterminable behaviour. Pointers could be stored in a map against a unique object id; however, addition and removal from the map would have to be synchronized which would impact on performance. 

## Public Functions Documentation

### function MamaTimeZone

```java
static inline static MamaTimeZone()
```


Return a reference to a [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) corresponding to the local time zone. 


### function utc

```java
static inline MamaTimeZone utc()
```


Return a reference to a [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) corresponding to UTC time zone. 


### function usEastern

```java
static inline MamaTimeZone usEastern()
```


Return a reference to a [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) corresponding to the US Eastern time zone. 


### function MamaTimeZone

```java
inline MamaTimeZone()
```


Constructor. 


The default for C/C++ sets TZ="TZ" which appears to be no timezone (date in bash reports the correct local time with no timezone. For now, we will just use the local timezone. I am not sure if this is correct.


### function MamaTimeZone

```java
inline MamaTimeZone(
    String tz
)
```


Constructor. NULL argument is equivalent to local timezone. 


### function MamaTimeZone

```java
inline MamaTimeZone(
    MamaTimeZone copy
)
```


Copy constructor. 


### function equals

```java
inline boolean equals(
    Object obj
)
```


Equals override. Two timezones are equal if they represent the same timezone 


### function hashCode

```java
inline int hashCode()
```


Hashcode override. 


### function set

```java
inline void set(
    String tz
)
```


Assign new timezones to this object. 


### function tz

```java
inline String tz()
```


Return the time zone string. 


### function offset

```java
inline int offset()
```


Return the offset from UTC (in seconds). Can be positive or negative, depending upon the direction. 


This might be inefficient if this method gets called alot. In the C/C++ implementation, the offset is cached and a spearate thread updates them at regular intervals. We may not need this for Java clients.


### function getJavaTimzone

```java
inline TimeZone getJavaTimzone()
```


Return a java.util.TimeZone object for this [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html). 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100