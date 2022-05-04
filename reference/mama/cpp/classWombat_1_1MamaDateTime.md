---
title: Wombat::MamaDateTime
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDateTime



 [More...](#detailed-description)


`#include <MamaDateTime.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaDateTime](classWombat_1_1MamaDateTime.html#function-mamadatetime)**() |
| | **[MamaDateTime](classWombat_1_1MamaDateTime.html#function-mamadatetime)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & copy) |
| | **[MamaDateTime](classWombat_1_1MamaDateTime.html#function-mamadatetime)**(const char * str, const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) * tz =NULL) |
| | **[~MamaDateTime](classWombat_1_1MamaDateTime.html#function-~mamadatetime)**() |
| [MamaDateTime](classWombat_1_1MamaDateTime.html) & | **[operator=](classWombat_1_1MamaDateTime.html#function-operator=)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & rhs) |
| bool | **[operator==](classWombat_1_1MamaDateTime.html#function-operator==)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaDateTime.html#function-operator!=)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & rhs) const |
| bool | **[operator<](classWombat_1_1MamaDateTime.html#function-operator<)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & rhs) const |
| bool | **[operator>](classWombat_1_1MamaDateTime.html#function-operator>)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & rhs) const |
| int | **[compare](classWombat_1_1MamaDateTime.html#function-compare)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & rhs) const |
| bool | **[empty](classWombat_1_1MamaDateTime.html#function-empty)**() const |
| void | **[setEpochTime](classWombat_1_1MamaDateTime.html#function-setepochtime)**(mama_u32_t secondsSinceEpoch, mama_u32_t microseconds, mamaDateTimePrecision precision =MAMA_DATE_TIME_PREC_UNKNOWN) |
| void | **[setEpochTimeF64](classWombat_1_1MamaDateTime.html#function-setepochtimef64)**(double secondsSinceEpoch) |
| void | **[setEpochTimeMilliseconds](classWombat_1_1MamaDateTime.html#function-setepochtimemilliseconds)**(mama_u64_t millisecondsSinceEpoch) |
| void | **[setEpochTimeMicroseconds](classWombat_1_1MamaDateTime.html#function-setepochtimemicroseconds)**(mama_u64_t microsecondsSinceEpoch) |
| void | **[setWithHints](classWombat_1_1MamaDateTime.html#function-setwithhints)**(mama_u32_t secondsSinceEpoch, mama_u32_t microseconds, mamaDateTimePrecision precision =MAMA_DATE_TIME_PREC_UNKNOWN, mamaDateTimeHints hints =0) |
| mamaDateTimePrecision | **[getPrecision](classWombat_1_1MamaDateTime.html#function-getprecision)**() |
| void | **[setPrecision](classWombat_1_1MamaDateTime.html#function-setprecision)**(mamaDateTimePrecision precision) |
| mamaDateTimeHints | **[getHints](classWombat_1_1MamaDateTime.html#function-gethints)**() |
| void | **[setHints](classWombat_1_1MamaDateTime.html#function-sethints)**(mamaDateTimeHints hints) |
| void | **[setFromString](classWombat_1_1MamaDateTime.html#function-setfromstring)**(const char * str, const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) * tz =NULL) |
| void | **[setFromString](classWombat_1_1MamaDateTime.html#function-setfromstring)**(const char * str, mama_size_t strLen, const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) * tz =NULL) |
| void | **[setToNow](classWombat_1_1MamaDateTime.html#function-settonow)**() |
| void | **[setToMidnightToday](classWombat_1_1MamaDateTime.html#function-settomidnighttoday)**(const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) * tz =NULL) |
| void | **[setFromStructTimeSpec](classWombat_1_1MamaDateTime.html#function-setfromstructtimespec)**(struct timespec & inputTimeSpec) |
| void | **[set](classWombat_1_1MamaDateTime.html#function-set)**(struct timeval inputTimeVal) |
| void | **[set](classWombat_1_1MamaDateTime.html#function-set)**(mama_u32_t year, mama_u32_t month, mama_u32_t day, mama_u32_t hour, mama_u32_t minute, mama_u32_t second, mama_u32_t microsecond, mamaDateTimePrecision precision =MAMA_DATE_TIME_PREC_UNKNOWN, const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) * tz =NULL) |
| void | **[setTime](classWombat_1_1MamaDateTime.html#function-settime)**(mama_u32_t hour, mama_u32_t minute, mama_u32_t second, mama_u32_t microsecond, mamaDateTimePrecision precision =MAMA_DATE_TIME_PREC_UNKNOWN, const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) * tz =NULL) |
| void | **[setDate](classWombat_1_1MamaDateTime.html#function-setdate)**(mama_u32_t year, mama_u32_t month, mama_u32_t day) |
| void | **[copyTime](classWombat_1_1MamaDateTime.html#function-copytime)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & copy) |
| void | **[copyDate](classWombat_1_1MamaDateTime.html#function-copydate)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) & copy) |
| void | **[clear](classWombat_1_1MamaDateTime.html#function-clear)**() |
| void | **[clearTime](classWombat_1_1MamaDateTime.html#function-cleartime)**() |
| void | **[clearDate](classWombat_1_1MamaDateTime.html#function-cleardate)**() |
| void | **[addSeconds](classWombat_1_1MamaDateTime.html#function-addseconds)**(mama_f64_t seconds) |
| void | **[addSeconds](classWombat_1_1MamaDateTime.html#function-addseconds)**(mama_i32_t seconds) |
| void | **[addMicroseconds](classWombat_1_1MamaDateTime.html#function-addmicroseconds)**(mama_i64_t microSeconds) |
| mama_u64_t | **[getEpochTimeMicroseconds](classWombat_1_1MamaDateTime.html#function-getepochtimemicroseconds)**() const |
| mama_u64_t | **[getEpochTimeMicroseconds](classWombat_1_1MamaDateTime.html#function-getepochtimemicroseconds)**(const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & tz) const |
| mama_u64_t | **[getEpochTimeMilliseconds](classWombat_1_1MamaDateTime.html#function-getepochtimemilliseconds)**() const |
| mama_u64_t | **[getEpochTimeMilliseconds](classWombat_1_1MamaDateTime.html#function-getepochtimemilliseconds)**(const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & tz) const |
| mama_f64_t | **[getEpochTimeSeconds](classWombat_1_1MamaDateTime.html#function-getepochtimeseconds)**() const |
| mama_f64_t | **[getEpochTimeSeconds](classWombat_1_1MamaDateTime.html#function-getepochtimeseconds)**(const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & tz) const |
| mama_i64_t | **[getEpochTimeExtSeconds](classWombat_1_1MamaDateTime.html#function-getepochtimeextseconds)**() const |
| uint32_t | **[getEpochTimeExtNanoseconds](classWombat_1_1MamaDateTime.html#function-getepochtimeextnanoseconds)**() const |
| void | **[setEpochTimeExt](classWombat_1_1MamaDateTime.html#function-setepochtimeext)**(mama_i64_t seconds, uint32_t nanoseconds) const |
| mama_f64_t | **[getEpochTimeSecondsWithCheck](classWombat_1_1MamaDateTime.html#function-getepochtimesecondswithcheck)**() const |
| void | **[getAsString](classWombat_1_1MamaDateTime.html#function-getasstring)**(char * result, mama_size_t maxLen) const |
| void | **[getTimeAsString](classWombat_1_1MamaDateTime.html#function-gettimeasstring)**(char * result, mama_size_t maxLen) const |
| void | **[getDateAsString](classWombat_1_1MamaDateTime.html#function-getdateasstring)**(char * result, mama_size_t maxLen) const |
| const char * | **[getAsString](classWombat_1_1MamaDateTime.html#function-getasstring)**() const |
| const char * | **[getTimeAsString](classWombat_1_1MamaDateTime.html#function-gettimeasstring)**() const |
| const char * | **[getDateAsString](classWombat_1_1MamaDateTime.html#function-getdateasstring)**() const |
| void | **[getAsFormattedString](classWombat_1_1MamaDateTime.html#function-getasformattedstring)**(char * result, mama_size_t maxLen, const char * format) const |
| void | **[getAsFormattedString](classWombat_1_1MamaDateTime.html#function-getasformattedstring)**(char * result, mama_size_t maxLen, const char * format, const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & tz) const |
| void | **[getAsStructTimeVal](classWombat_1_1MamaDateTime.html#function-getasstructtimeval)**(struct timeval & result) const |
| void | **[getAsStructTimeVal](classWombat_1_1MamaDateTime.html#function-getasstructtimeval)**(struct timeval & result, const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & tz) const |
| void | **[getAsStructTimeSpec](classWombat_1_1MamaDateTime.html#function-getasstructtimespec)**(struct timespec & result) const |
| void | **[getAsStructTm](classWombat_1_1MamaDateTime.html#function-getasstructtm)**(struct tm & result) const |
| void | **[getAsStructTm](classWombat_1_1MamaDateTime.html#function-getasstructtm)**(struct tm & result, const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & tz) const |
| mama_u32_t | **[getYear](classWombat_1_1MamaDateTime.html#function-getyear)**() const |
| mama_u32_t | **[getMonth](classWombat_1_1MamaDateTime.html#function-getmonth)**() const |
| mama_u32_t | **[getDay](classWombat_1_1MamaDateTime.html#function-getday)**() const |
| mama_u32_t | **[getHour](classWombat_1_1MamaDateTime.html#function-gethour)**() const |
| mama_u32_t | **[getMinute](classWombat_1_1MamaDateTime.html#function-getminute)**() const |
| mama_u32_t | **[getSecond](classWombat_1_1MamaDateTime.html#function-getsecond)**() const |
| mama_u32_t | **[getMicrosecond](classWombat_1_1MamaDateTime.html#function-getmicrosecond)**() const |
| mamaDayOfWeek | **[getDayOfWeek](classWombat_1_1MamaDateTime.html#function-getdayofweek)**() const |
| bool | **[hasTime](classWombat_1_1MamaDateTime.html#function-hastime)**() const |
| bool | **[hasDate](classWombat_1_1MamaDateTime.html#function-hasdate)**() const |
| mamaDateTime | **[getCValue](classWombat_1_1MamaDateTime.html#function-getcvalue)**() |
| const mamaDateTime | **[getCValue](classWombat_1_1MamaDateTime.html#function-getcvalue)**() const |

## Detailed Description

```cpp
class Wombat::MamaDateTime;
```


A date/time representation with additional hints for precision, advanced output formatting and support for time zone conversion (using the [MamaTimeZone](classWombat_1_1MamaTimeZone.html) type).

Hints include:

* Whether the time stamp contains a date part, a time part, or both.
* The level of accuracy (if known) of the time part (e.g., minutes, seconds, milliseconds, etc.).
The output format strings are similar to that available for the strftime() function with the addition of %; which adds optional (non-zero) fractional second to the string, and %: which adds fractional seconds including trailing zeros, but does not include the ".". The following table provides examples of output.

| Actual Time  | Output of "%T%;"  | Output of "%T%.:"  
 |
|  -------- | -------- | -------- |
| 01:23:45 and 678 millisecs  | 01:23:45.678  | 01:23:45.678   |
| 01:23:45 and 0 millisecs  | 01:23:45  | 01:23:45.000   |

## Public Functions Documentation

### function MamaDateTime

```cpp
MamaDateTime()
```


### function MamaDateTime

```cpp
MamaDateTime(
    const MamaDateTime & copy
)
```


### function MamaDateTime

```cpp
explicit MamaDateTime(
    const char * str,
    const MamaTimeZone * tz =NULL
)
```


Constructor taking a string argument. This is the same as calling setFromString() immediately after construction. 


### function ~MamaDateTime

```cpp
~MamaDateTime()
```


### function operator=

```cpp
MamaDateTime & operator=(
    const MamaDateTime & rhs
)
```


### function operator==

```cpp
bool operator==(
    const MamaDateTime & rhs
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const MamaDateTime & rhs
) const
```


### function operator<

```cpp
bool operator<(
    const MamaDateTime & rhs
) const
```


### function operator>

```cpp
bool operator>(
    const MamaDateTime & rhs
) const
```


### function compare

```cpp
int compare(
    const MamaDateTime & rhs
) const
```


### function empty

```cpp
bool empty() const
```


### function setEpochTime

```cpp
void setEpochTime(
    mama_u32_t secondsSinceEpoch,
    mama_u32_t microseconds,
    mamaDateTimePrecision precision =MAMA_DATE_TIME_PREC_UNKNOWN
)
```


### function setEpochTimeF64

```cpp
void setEpochTimeF64(
    double secondsSinceEpoch
)
```


### function setEpochTimeMilliseconds

```cpp
void setEpochTimeMilliseconds(
    mama_u64_t millisecondsSinceEpoch
)
```


### function setEpochTimeMicroseconds

```cpp
void setEpochTimeMicroseconds(
    mama_u64_t microsecondsSinceEpoch
)
```


### function setWithHints

```cpp
void setWithHints(
    mama_u32_t secondsSinceEpoch,
    mama_u32_t microseconds,
    mamaDateTimePrecision precision =MAMA_DATE_TIME_PREC_UNKNOWN,
    mamaDateTimeHints hints =0
)
```


### function getPrecision

```cpp
mamaDateTimePrecision getPrecision()
```


### function setPrecision

```cpp
void setPrecision(
    mamaDateTimePrecision precision
)
```


### function getHints

```cpp
mamaDateTimeHints getHints()
```


### function setHints

```cpp
void setHints(
    mamaDateTimeHints hints
)
```


### function setFromString

```cpp
void setFromString(
    const char * str,
    const MamaTimeZone * tz =NULL
)
```


### function setFromString

```cpp
void setFromString(
    const char * str,
    mama_size_t strLen,
    const MamaTimeZone * tz =NULL
)
```


### function setToNow

```cpp
void setToNow()
```


### function setToMidnightToday

```cpp
void setToMidnightToday(
    const MamaTimeZone * tz =NULL
)
```


### function setFromStructTimeSpec

```cpp
void setFromStructTimeSpec(
    struct timespec & inputTimeSpec
)
```


Set the underlying C mamaDateTime from a TimeSpec Struct. This will allow for extended date ranges. 


### function set

```cpp
void set(
    struct timeval inputTimeVal
)
```


Set the underlying C mamaDateTime from a TimeVal Struct. This will allow for extended date ranges. 


### function set

```cpp
void set(
    mama_u32_t year,
    mama_u32_t month,
    mama_u32_t day,
    mama_u32_t hour,
    mama_u32_t minute,
    mama_u32_t second,
    mama_u32_t microsecond,
    mamaDateTimePrecision precision =MAMA_DATE_TIME_PREC_UNKNOWN,
    const MamaTimeZone * tz =NULL
)
```


**Parameters**: 

  * **year** The year (must be 1970 or later). 
  * **month** The month (1 - 12). 
  * **day** The day (1 - 31). 
  * **hour** The hour (0 - 23). 
  * **minute** The minute (0 - 59). 
  * **second** The second (0 - 59). 
  * **microsecond** The second (0 - 999999). 
  * **precision** An explicit precision, if known. 
  * **tz** A timezone to shift from. 


Set the entire date and time for the [MamaDateTime](classWombat_1_1MamaDateTime.html). The year, month and day parameters must all be integers greater than zero.


### function setTime

```cpp
void setTime(
    mama_u32_t hour,
    mama_u32_t minute,
    mama_u32_t second,
    mama_u32_t microsecond,
    mamaDateTimePrecision precision =MAMA_DATE_TIME_PREC_UNKNOWN,
    const MamaTimeZone * tz =NULL
)
```


**Parameters**: 

  * **hour** The hour (0 - 23). 
  * **minute** The minute (0 - 59). 
  * **second** The second (0 - 59). 
  * **microsecond** The second (0 - 999999). 
  * **precision** An explicit precision, if known. 
  * **tz** A timezone to shift from. 


Set the time-of-day portion of the [MamaDateTime](classWombat_1_1MamaDateTime.html). The date portion is not affected.


### function setDate

```cpp
void setDate(
    mama_u32_t year,
    mama_u32_t month,
    mama_u32_t day
)
```


**Parameters**: 

  * **year** The year (must be 1970 or later). 
  * **month** The month (1 - 12). 
  * **day** The day (1 - 31). 


Set the date portion of the [MamaDateTime](classWombat_1_1MamaDateTime.html). The time-of-day portion is not affected. The year, month and day parameters must all be integers greater than zero.


### function copyTime

```cpp
void copyTime(
    const MamaDateTime & copy
)
```


**Parameters**: 

  * **copy** The object to copy from 


Copy the time-of-day portion of the [MamaDateTime](classWombat_1_1MamaDateTime.html). The date portion is not affected.


### function copyDate

```cpp
void copyDate(
    const MamaDateTime & copy
)
```


**Parameters**: 

  * **copy** The object to copy from 


Copy the date portion of the [MamaDateTime](classWombat_1_1MamaDateTime.html). The time-of-day portion is not affected.


### function clear

```cpp
void clear()
```


Clear the entire [MamaDateTime](classWombat_1_1MamaDateTime.html). 


### function clearTime

```cpp
void clearTime()
```


Clear the time-of-day portion of the [MamaDateTime](classWombat_1_1MamaDateTime.html). The date portion is not affected. 


### function clearDate

```cpp
void clearDate()
```


Clear the date portion of the [MamaDateTime](classWombat_1_1MamaDateTime.html). The time-of-day portion is not affected. 


### function addSeconds

```cpp
void addSeconds(
    mama_f64_t seconds
)
```


### function addSeconds

```cpp
void addSeconds(
    mama_i32_t seconds
)
```


### function addMicroseconds

```cpp
void addMicroseconds(
    mama_i64_t microSeconds
)
```


### function getEpochTimeMicroseconds

```cpp
mama_u64_t getEpochTimeMicroseconds() const
```


**Return**: The number of microseconds since the Epoch. 

Get the date and time as microseconds since the Epoch, (using the UTC timezone).


### function getEpochTimeMicroseconds

```cpp
mama_u64_t getEpochTimeMicroseconds(
    const MamaTimeZone & tz
) const
```


**Parameters**: 

  * **[int]** tz The timezone. 


**Return**: The number of microseconds since the Epoch. 

Get the date and time as microseconds since the Epoch in the supplied time zone.


### function getEpochTimeMilliseconds

```cpp
mama_u64_t getEpochTimeMilliseconds() const
```


### function getEpochTimeMilliseconds

```cpp
mama_u64_t getEpochTimeMilliseconds(
    const MamaTimeZone & tz
) const
```


### function getEpochTimeSeconds

```cpp
mama_f64_t getEpochTimeSeconds() const
```


### function getEpochTimeSeconds

```cpp
mama_f64_t getEpochTimeSeconds(
    const MamaTimeZone & tz
) const
```


### function getEpochTimeExtSeconds

```cpp
mama_i64_t getEpochTimeExtSeconds() const
```


**Return**: The number of whole seconds since the Epoch. 

Get the extended datetime value in whole seconds since the Epoch (UTC).


### function getEpochTimeExtNanoseconds

```cpp
uint32_t getEpochTimeExtNanoseconds() const
```


**Return**: The nanosecond portion of the datetime value. 

Get the extended datetime subsecond portion of the datetime value in nanoseconds.


### function setEpochTimeExt

```cpp
void setEpochTimeExt(
    mama_i64_t seconds,
    uint32_t nanoseconds
) const
```


**Parameters**: 

  * **seconds** The number of seconds since the Epoch. 
  * **nanoseconds** The number of nanoseconds since the seconds parameter. 


Set the extended datetime values expressed in seconds since the Epoch (UTC) and nanoseconds since this epoch time.


### function getEpochTimeSecondsWithCheck

```cpp
mama_f64_t getEpochTimeSecondsWithCheck() const
```


**Return**: The number of seconds, (including partial seconds), since the Epoch. 

Get the date and time as seconds since the Epoch, (using the UTC timezone). If no date value is contained in the dateTime then it will be set to today's date and the calculation made.


### function getAsString

```cpp
void getAsString(
    char * result,
    mama_size_t maxLen
) const
```


### function getTimeAsString

```cpp
void getTimeAsString(
    char * result,
    mama_size_t maxLen
) const
```


### function getDateAsString

```cpp
void getDateAsString(
    char * result,
    mama_size_t maxLen
) const
```


### function getAsString

```cpp
const char * getAsString() const
```


Return a string representation of the date/time. Note that the alternative getAsString() methods are more efficient because these method must allocate a temporary buffer (automatically destroyed upon object destruction). The timezone must to set to UTC if calling this from multiple threads concurrently to avoid contention in strftime.p 


### function getTimeAsString

```cpp
const char * getTimeAsString() const
```


### function getDateAsString

```cpp
const char * getDateAsString() const
```


### function getAsFormattedString

```cpp
void getAsFormattedString(
    char * result,
    mama_size_t maxLen,
    const char * format
) const
```


### function getAsFormattedString

```cpp
void getAsFormattedString(
    char * result,
    mama_size_t maxLen,
    const char * format,
    const MamaTimeZone & tz
) const
```


### function getAsStructTimeVal

```cpp
void getAsStructTimeVal(
    struct timeval & result
) const
```


### function getAsStructTimeVal

```cpp
void getAsStructTimeVal(
    struct timeval & result,
    const MamaTimeZone & tz
) const
```


### function getAsStructTimeSpec

```cpp
void getAsStructTimeSpec(
    struct timespec & result
) const
```


### function getAsStructTm

```cpp
void getAsStructTm(
    struct tm & result
) const
```


### function getAsStructTm

```cpp
void getAsStructTm(
    struct tm & result,
    const MamaTimeZone & tz
) const
```


### function getYear

```cpp
mama_u32_t getYear() const
```


### function getMonth

```cpp
mama_u32_t getMonth() const
```


### function getDay

```cpp
mama_u32_t getDay() const
```


### function getHour

```cpp
mama_u32_t getHour() const
```


### function getMinute

```cpp
mama_u32_t getMinute() const
```


### function getSecond

```cpp
mama_u32_t getSecond() const
```


### function getMicrosecond

```cpp
mama_u32_t getMicrosecond() const
```


### function getDayOfWeek

```cpp
mamaDayOfWeek getDayOfWeek() const
```


### function hasTime

```cpp
bool hasTime() const
```


Return whether the object has a time component. 


### function hasDate

```cpp
bool hasDate() const
```


Return whether the object has a date component. 


### function getCValue

```cpp
mamaDateTime getCValue()
```


### function getCValue

```cpp
const mamaDateTime getCValue() const
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100