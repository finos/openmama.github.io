---
title: com::wombat::mama::MamaDateTime
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDateTime



 [More...](#detailed-description)

Inherits from Comparable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-mamadatetime)**() |
| | **[MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-mamadatetime)**([MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) copy) |
| | **[MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-mamadatetime)**([MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) time, [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) date) |
| | **[MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-mamadatetime)**(Calendar calendar) |
| | **[MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-mamadatetime)**(String str) |
| | **[MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-mamadatetime)**(String str, [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) tz) |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-tostring)**() |
| String | **[formatString](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-formatstring)**(String str, [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) tz) |
| int | **[compareTo](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-compareto)**(Object obj) |
| boolean | **[equals](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-equals)**(Object obj) |
| int | **[hashCode](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-hashcode)**() |
| native boolean | **[isEmpty](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-isempty)**() |
| void | **[setEpochTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-setepochtime)**(long secondsSinceEpoch, long microseconds, [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) precision) |
| void | **[setEpochTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-setepochtime)**(long secondsSinceEpoch, long microseconds) |
| native void | **[setEpochTimeF64](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-setepochtimef64)**(double secondsSinceEpoch) |
| native void | **[setEpochTimeMilliseconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-setepochtimemilliseconds)**(long millisecondsSinceEpoch) |
| native void | **[setEpochTimeMicroseconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-setepochtimemicroseconds)**(long microsecondsSinceEpoch) |
| void | **[setWithHints](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-setwithhints)**(long secondsSinceEpoch, long microseconds, [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) precision, [MamaDateTimeHints](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html) hints) |
| native void | **[setToNow](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-settonow)**() |
| void | **[setToMidnightToday](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-settomidnighttoday)**([MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) tz) |
| void | **[set](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-set)**(int year, int month, int day, int hour, int minute, int second, long microsecond, [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) precision, [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) tz) |
| void | **[setTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-settime)**(int hour, int minute, int second, long microsecond, [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) precision, [MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) tz) |
| native void | **[setDate](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-setdate)**(int year, int month, int day) |
| native void | **[copyTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-copytime)**([MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) src) |
| native void | **[copyDate](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-copydate)**([MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) src) |
| native void | **[clear](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-clear)**() |
| native void | **[clearTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-cleartime)**() |
| native void | **[clearDate](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-cleardate)**() |
| native boolean | **[hasDate](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-hasdate)**() |
| native boolean | **[hasTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-hastime)**() |
| native void | **[addSeconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-addseconds)**(double seconds) |
| native void | **[addSeconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-addseconds)**(long seconds) |
| native void | **[addMicroSeconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-addmicroseconds)**(long microSeconds) |
| long | **[getEpochTimeMicroseconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getepochtimemicroseconds)**() |
| long | **[getEpochTimeMicroseconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getepochtimemicroseconds)**([MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) tz) |
| long | **[getEpochTimeMilliseconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getepochtimemilliseconds)**() |
| long | **[getEpochTimeMilliseconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getepochtimemilliseconds)**([MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) tz) |
| double | **[getEpochTimeSeconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getepochtimeseconds)**() |
| double | **[getEpochTimeSeconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getepochtimeseconds)**([MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html) tz) |
| native double | **[getEpochTimeSecondsWithCheck](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getepochtimesecondswithcheck)**() |
| native String | **[getAsString](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getasstring)**() |
| native String | **[getTimeAsString](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-gettimeasstring)**() |
| native String | **[getDateAsString](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getdateasstring)**() |
| native long | **[getYear](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getyear)**() |
| native long | **[getMonth](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getmonth)**() |
| native long | **[getDay](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getday)**() |
| native long | **[getHour](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-gethour)**() |
| native long | **[getMinute](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getminute)**() |
| native long | **[getSecond](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getsecond)**() |
| native long | **[getMicrosecond](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getmicrosecond)**() |
| [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[getDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getdayofweek)**() |
| Calendar | **[getCalendar](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getcalendar)**() |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-destroy)**() |
| native void | **[copy](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-copy)**([MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) copy) |
| native double | **[diffSeconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-diffseconds)**([MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) t1, [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) t0) |
| native double | **[diffSecondsSameDay](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-diffsecondssameday)**([MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) t1, [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) t0) |
| native long | **[diffMicroseconds](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-diffmicroseconds)**([MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) t1, [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) t0) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-getpointerval)**() |
| void | **[setPointerVal](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-setpointerval)**(long pointerVal) |
| void | **[finalize](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html#function-finalize)**() |

## Detailed Description

```java
class com::wombat::mama::MamaDateTime;
```


MamaDataTime

Posix date/time representation. 

## Public Functions Documentation

### function MamaDateTime

```java
inline MamaDateTime()
```


### function MamaDateTime

```java
inline MamaDateTime(
    MamaDateTime copy
)
```


### function MamaDateTime

```java
inline MamaDateTime(
    MamaDateTime time,
    MamaDateTime date
)
```


### function MamaDateTime

```java
inline MamaDateTime(
    Calendar calendar
)
```


### function MamaDateTime

```java
inline MamaDateTime(
    String str
)
```


### function MamaDateTime

```java
inline MamaDateTime(
    String str,
    MamaTimeZone tz
)
```


### function toString

```java
inline String toString()
```


### function formatString

```java
inline String formatString(
    String str,
    MamaTimeZone tz
)
```


### function compareTo

```java
inline int compareTo(
    Object obj
)
```


### function equals

```java
inline boolean equals(
    Object obj
)
```


### function hashCode

```java
inline int hashCode()
```


### function isEmpty

```java
native boolean isEmpty()
```


### function setEpochTime

```java
inline void setEpochTime(
    long secondsSinceEpoch,
    long microseconds,
    MamaDateTimePrecision precision
)
```


### function setEpochTime

```java
inline void setEpochTime(
    long secondsSinceEpoch,
    long microseconds
)
```


### function setEpochTimeF64

```java
native void setEpochTimeF64(
    double secondsSinceEpoch
)
```


### function setEpochTimeMilliseconds

```java
native void setEpochTimeMilliseconds(
    long millisecondsSinceEpoch
)
```


### function setEpochTimeMicroseconds

```java
native void setEpochTimeMicroseconds(
    long microsecondsSinceEpoch
)
```


### function setWithHints

```java
inline void setWithHints(
    long secondsSinceEpoch,
    long microseconds,
    MamaDateTimePrecision precision,
    MamaDateTimeHints hints
)
```


This is not actually implemented in C/C++. The hints field is ignored.


### function setToNow

```java
native void setToNow()
```


### function setToMidnightToday

```java
inline void setToMidnightToday(
    MamaTimeZone tz
)
```


### function set

```java
inline void set(
    int year,
    int month,
    int day,
    int hour,
    int minute,
    int second,
    long microsecond,
    MamaDateTimePrecision precision,
    MamaTimeZone tz
)
```


### function setTime

```java
inline void setTime(
    int hour,
    int minute,
    int second,
    long microsecond,
    MamaDateTimePrecision precision,
    MamaTimeZone tz
)
```


### function setDate

```java
native void setDate(
    int year,
    int month,
    int day
)
```


### function copyTime

```java
native void copyTime(
    MamaDateTime src
)
```


### function copyDate

```java
native void copyDate(
    MamaDateTime src
)
```


### function clear

```java
native void clear()
```


### function clearTime

```java
native void clearTime()
```


### function clearDate

```java
native void clearDate()
```


### function hasDate

```java
native boolean hasDate()
```


### function hasTime

```java
native boolean hasTime()
```


### function addSeconds

```java
native void addSeconds(
    double seconds
)
```


### function addSeconds

```java
native void addSeconds(
    long seconds
)
```


### function addMicroSeconds

```java
native void addMicroSeconds(
    long microSeconds
)
```


### function getEpochTimeMicroseconds

```java
inline long getEpochTimeMicroseconds()
```


**Exceptions**: 

  * **[com.wombat.mama.MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** thrown if the underlying JNI object has been destroyed. 
  * **com.wombat.common.WombatException** for other general MAMA errors. 


**Return**: The number of microseconds since the Epoch. 

Get the date and time as microseconds since the Epoch, (using the UTC timezone).


### function getEpochTimeMicroseconds

```java
inline long getEpochTimeMicroseconds(
    MamaTimeZone tz
)
```


### function getEpochTimeMilliseconds

```java
inline long getEpochTimeMilliseconds()
```


### function getEpochTimeMilliseconds

```java
inline long getEpochTimeMilliseconds(
    MamaTimeZone tz
)
```


### function getEpochTimeSeconds

```java
inline double getEpochTimeSeconds()
```


### function getEpochTimeSeconds

```java
inline double getEpochTimeSeconds(
    MamaTimeZone tz
)
```


### function getEpochTimeSecondsWithCheck

```java
native double getEpochTimeSecondsWithCheck()
```


**Exceptions**: 

  * **[com.wombat.mama.MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** thrown if the underlying JNI object has been destroyed. 
  * **com.wombat.common.WombatException** for other general MAMA errors. 


**Return**: The number of seconds, (including partial seconds), since the Epoch. 

Get the date and time as seconds since the Epoch, (using the UTC timezone). If no date value is contained in the dateTime then it will be set to today's date and the calculation made.

The timezone must to set to UTC if calling this from multiple threads concurrently to avoid contention in strftime.


### function getAsString

```java
native String getAsString()
```


### function getTimeAsString

```java
native String getTimeAsString()
```


### function getDateAsString

```java
native String getDateAsString()
```


### function getYear

```java
native long getYear()
```


### function getMonth

```java
native long getMonth()
```


### function getDay

```java
native long getDay()
```


### function getHour

```java
native long getHour()
```


### function getMinute

```java
native long getMinute()
```


### function getSecond

```java
native long getSecond()
```


### function getMicrosecond

```java
native long getMicrosecond()
```


### function getDayOfWeek

```java
inline MamaDayOfWeek getDayOfWeek()
```


### function getCalendar

```java
inline Calendar getCalendar()
```


### function destroy

```java
native void destroy()
```


### function copy

```java
native void copy(
    MamaDateTime copy
)
```


### function diffSeconds

```java
static native double diffSeconds(
    MamaDateTime t1,
    MamaDateTime t0
)
```


### function diffSecondsSameDay

```java
static native double diffSecondsSameDay(
    MamaDateTime t1,
    MamaDateTime t0
)
```


### function diffMicroseconds

```java
static native long diffMicroseconds(
    MamaDateTime t1,
    MamaDateTime t0
)
```


## Protected Functions Documentation

### function getPointerVal

```java
inline long getPointerVal()
```


### function setPointerVal

```java
inline void setPointerVal(
    long pointerVal
)
```


### function finalize

```java
inline void finalize()
```


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100