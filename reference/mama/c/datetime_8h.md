---
title: mama/datetime.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/datetime.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaDateTimePrecision_](datetime_8h.html#enum-mamadatetimeprecision-)** { MAMA_DATE_TIME_PREC_SECONDS = 0, MAMA_DATE_TIME_PREC_DECISECONDS = 1, MAMA_DATE_TIME_PREC_CENTISECONDS = 2, MAMA_DATE_TIME_PREC_MILLISECONDS = 3, MAMA_DATE_TIME_PREC_MICROSECONDS = 6, MAMA_DATE_TIME_PREC_NANOSECONDS = 9, MAMA_DATE_TIME_PREC_DAYS = 10, MAMA_DATE_TIME_PREC_MINUTES = 12, MAMA_DATE_TIME_PREC_UNKNOWN = 15} |
| enum| **[mamaDayOfWeek_](datetime_8h.html#enum-mamadayofweek-)** { Sunday = 0, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday} |
| typedef enum mamaDateTimePrecision_ | **[mamaDateTimePrecision](datetime_8h.html#typedef-mamadatetimeprecision)**  |
| typedef enum mamaDayOfWeek_ | **[mamaDayOfWeek](datetime_8h.html#typedef-mamadayofweek)**  |
| typedef mama_u8_t | **[mamaDateTimeHints](datetime_8h.html#typedef-mamadatetimehints)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaDateTime_create](datetime_8h.html#function-mamadatetime-create)**(mamaDateTime * dateTime) |
| MAMAExpDLL mama_status | **[mamaDateTime_destroy](datetime_8h.html#function-mamadatetime-destroy)**(mamaDateTime dateTime) |
| MAMAExpDLL mama_status | **[mamaDateTime_clear](datetime_8h.html#function-mamadatetime-clear)**(mamaDateTime dateTime) |
| MAMAExpDLL mama_status | **[mamaDateTime_clearDate](datetime_8h.html#function-mamadatetime-cleardate)**(mamaDateTime dateTime) |
| MAMAExpDLL mama_status | **[mamaDateTime_clearTime](datetime_8h.html#function-mamadatetime-cleartime)**(mamaDateTime dateTime) |
| MAMAExpDLL mama_status | **[mamaDateTime_copy](datetime_8h.html#function-mamadatetime-copy)**(mamaDateTime dest, const mamaDateTime src) |
| MAMAExpDLL int | **[mamaDateTime_empty](datetime_8h.html#function-mamadatetime-empty)**(const mamaDateTime dateTime) |
| MAMAExpDLL int | **[mamaDateTime_equal](datetime_8h.html#function-mamadatetime-equal)**(const mamaDateTime lhs, const mamaDateTime rhs) |
| MAMAExpDLL int | **[mamaDateTime_compare](datetime_8h.html#function-mamadatetime-compare)**(const mamaDateTime lhs, const mamaDateTime rhs) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeExt](datetime_8h.html#function-mamadatetime-getepochtimeext)**(const mamaDateTime dateTime, mama_i64_t * seconds, mama_u32_t * nanoseconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_setEpochTimeExt](datetime_8h.html#function-mamadatetime-setepochtimeext)**(mamaDateTime dateTime, mama_i64_t seconds, mama_u32_t nanoseconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_setEpochTime](datetime_8h.html#function-mamadatetime-setepochtime)**(mamaDateTime dateTime, mama_u32_t seconds, mama_u32_t microseconds, mamaDateTimePrecision precision) |
| MAMAExpDLL mama_status | **[mamaDateTime_setEpochTimeF64](datetime_8h.html#function-mamadatetime-setepochtimef64)**(mamaDateTime dateTime, mama_f64_t seconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_setEpochTimeMilliseconds](datetime_8h.html#function-mamadatetime-setepochtimemilliseconds)**(mamaDateTime dateTime, mama_u64_t milliseconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_setEpochTimeMicroseconds](datetime_8h.html#function-mamadatetime-setepochtimemicroseconds)**(mamaDateTime dateTime, mama_u64_t milliseconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_setWithHints](datetime_8h.html#function-mamadatetime-setwithhints)**(mamaDateTime dateTime, mama_u32_t seconds, mama_u32_t microseconds, mamaDateTimePrecision precision, mamaDateTimeHints hints) |
| MAMAExpDLL mama_status | **[mamaDateTime_getHints](datetime_8h.html#function-mamadatetime-gethints)**(const mamaDateTime dateTime, mamaDateTimeHints * hints) |
| MAMAExpDLL mama_status | **[mamaDateTime_setHints](datetime_8h.html#function-mamadatetime-sethints)**(mamaDateTime dateTime, mamaDateTimeHints hints) |
| MAMAExpDLL mama_status | **[mamaDateTime_getPrecision](datetime_8h.html#function-mamadatetime-getprecision)**(const mamaDateTime dateTime, mamaDateTimePrecision * precision) |
| MAMAExpDLL mama_status | **[mamaDateTime_setPrecision](datetime_8h.html#function-mamadatetime-setprecision)**(mamaDateTime dateTime, mamaDateTimePrecision precision) |
| MAMAExpDLL mama_status | **[mamaDateTime_setToNow](datetime_8h.html#function-mamadatetime-settonow)**(mamaDateTime dateTime) |
| MAMAExpDLL mama_status | **[mamaDateTime_setToMidnightToday](datetime_8h.html#function-mamadatetime-settomidnighttoday)**(mamaDateTime dateTime, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_setWithPrecisionAndTz](datetime_8h.html#function-mamadatetime-setwithprecisionandtz)**(mamaDateTime dateTime, mama_u32_t year, mama_u32_t month, mama_u32_t day, mama_u32_t hour, mama_u32_t minute, mama_u32_t second, mama_u32_t microsecond, mamaDateTimePrecision precision, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_setTime](datetime_8h.html#function-mamadatetime-settime)**(mamaDateTime dateTime, mama_u32_t hour, mama_u32_t minute, mama_u32_t second, mama_u32_t microsecond) |
| MAMAExpDLL mama_status | **[mamaDateTime_setTimeWithPrecisionAndTz](datetime_8h.html#function-mamadatetime-settimewithprecisionandtz)**(mamaDateTime dateTime, mama_u32_t hour, mama_u32_t minute, mama_u32_t second, mama_u32_t microsecond, mamaDateTimePrecision precision, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_setDate](datetime_8h.html#function-mamadatetime-setdate)**(mamaDateTime dateTime, mama_u32_t year, mama_u32_t month, mama_u32_t day) |
| MAMAExpDLL mama_status | **[mamaDateTime_copyTime](datetime_8h.html#function-mamadatetime-copytime)**(mamaDateTime dest, const mamaDateTime src) |
| MAMAExpDLL mama_status | **[mamaDateTime_copyDate](datetime_8h.html#function-mamadatetime-copydate)**(mamaDateTime dest, const mamaDateTime src) |
| MAMAExpDLL mama_status | **[mamaDateTime_hasTime](datetime_8h.html#function-mamadatetime-hastime)**(const mamaDateTime dateTime, mama_bool_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_hasDate](datetime_8h.html#function-mamadatetime-hasdate)**(const mamaDateTime dateTime, mama_bool_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_addSeconds](datetime_8h.html#function-mamadatetime-addseconds)**(mamaDateTime dateTime, mama_f64_t seconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_addWholeSeconds](datetime_8h.html#function-mamadatetime-addwholeseconds)**(mamaDateTime dateTime, mama_i32_t seconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_addMicroseconds](datetime_8h.html#function-mamadatetime-addmicroseconds)**(mamaDateTime dateTime, mama_i64_t microseconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_setFromString](datetime_8h.html#function-mamadatetime-setfromstring)**(mamaDateTime dateTime, const char * str) |
| MAMAExpDLL mama_status | **[mamaDateTime_setFromStringWithTz](datetime_8h.html#function-mamadatetime-setfromstringwithtz)**(mamaDateTime dateTime, const char * str, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_setFromStringBuffer](datetime_8h.html#function-mamadatetime-setfromstringbuffer)**(mamaDateTime dateTime, const char * str, mama_size_t strLen) |
| MAMAExpDLL mama_status | **[mamaDateTime_setFromStringBufferWithTz](datetime_8h.html#function-mamadatetime-setfromstringbufferwithtz)**(mamaDateTime dateTime, const char * str, mama_size_t strLen, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTime](datetime_8h.html#function-mamadatetime-getepochtime)**(const mamaDateTime dateTime, mama_u32_t * seconds, mama_u32_t * microseconds, mamaDateTimePrecision * precision) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeWithTz](datetime_8h.html#function-mamadatetime-getepochtimewithtz)**(const mamaDateTime dateTime, mama_u32_t * seconds, mama_u32_t * microseconds, mamaDateTimePrecision * precision, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeMicroseconds](datetime_8h.html#function-mamadatetime-getepochtimemicroseconds)**(const mamaDateTime dateTime, mama_u64_t * microseconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeMicrosecondsWithTz](datetime_8h.html#function-mamadatetime-getepochtimemicrosecondswithtz)**(const mamaDateTime dateTime, mama_u64_t * microseconds, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeMilliseconds](datetime_8h.html#function-mamadatetime-getepochtimemilliseconds)**(const mamaDateTime dateTime, mama_u64_t * milliseconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeMillisecondsWithTz](datetime_8h.html#function-mamadatetime-getepochtimemillisecondswithtz)**(const mamaDateTime dateTime, mama_u64_t * milliseconds, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeSeconds](datetime_8h.html#function-mamadatetime-getepochtimeseconds)**(const mamaDateTime dateTime, mama_f64_t * seconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeSecondsWithCheck](datetime_8h.html#function-mamadatetime-getepochtimesecondswithcheck)**(const mamaDateTime dateTime, mama_f64_t * seconds) |
| MAMAExpDLL mama_status | **[mamaDateTime_getEpochTimeSecondsWithTz](datetime_8h.html#function-mamadatetime-getepochtimesecondswithtz)**(const mamaDateTime dateTime, mama_f64_t * seconds, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_getWithHints](datetime_8h.html#function-mamadatetime-getwithhints)**(const mamaDateTime dateTime, mama_u32_t * seconds, mama_u32_t * microseconds, mamaDateTimePrecision * precision, mama_u8_t * hints) |
| MAMAExpDLL mama_status | **[mamaDateTime_getStructTimeVal](datetime_8h.html#function-mamadatetime-getstructtimeval)**(const mamaDateTime dateTime, struct timeval * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getStructTimeValWithTz](datetime_8h.html#function-mamadatetime-getstructtimevalwithtz)**(const mamaDateTime dateTime, struct timeval * result, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_setFromStructTimeVal](datetime_8h.html#function-mamadatetime-setfromstructtimeval)**(const mamaDateTime dateTime, struct timeval * inputTimeVal) |
| MAMAExpDLL mama_status | **[mamaDateTime_getStructTm](datetime_8h.html#function-mamadatetime-getstructtm)**(const mamaDateTime dateTime, struct tm * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getStructTmWithTz](datetime_8h.html#function-mamadatetime-getstructtmwithtz)**(const mamaDateTime dateTime, struct tm * result, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_getAsString](datetime_8h.html#function-mamadatetime-getasstring)**(const mamaDateTime dateTime, char * str, mama_size_t maxLen) |
| MAMAExpDLL mama_status | **[mamaDateTime_getTimeAsString](datetime_8h.html#function-mamadatetime-gettimeasstring)**(const mamaDateTime dateTime, char * str, mama_size_t maxLen) |
| MAMAExpDLL mama_status | **[mamaDateTime_getDateAsString](datetime_8h.html#function-mamadatetime-getdateasstring)**(const mamaDateTime dateTime, char * str, mama_size_t maxLen) |
| MAMAExpDLL mama_status | **[mamaDateTime_getAsFormattedString](datetime_8h.html#function-mamadatetime-getasformattedstring)**(const mamaDateTime dateTime, char * str, mama_size_t maxLen, const char * format) |
| MAMAExpDLL mama_status | **[mamaDateTime_getAsFormattedStringWithTz](datetime_8h.html#function-mamadatetime-getasformattedstringwithtz)**(const mamaDateTime dateTime, char * str, mama_size_t maxLen, const char * format, const mamaTimeZone tz) |
| MAMAExpDLL mama_status | **[mamaDateTime_getYear](datetime_8h.html#function-mamadatetime-getyear)**(const mamaDateTime dateTime, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getMonth](datetime_8h.html#function-mamadatetime-getmonth)**(const mamaDateTime dateTime, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getDay](datetime_8h.html#function-mamadatetime-getday)**(const mamaDateTime dateTime, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getHour](datetime_8h.html#function-mamadatetime-gethour)**(const mamaDateTime dateTime, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getMinute](datetime_8h.html#function-mamadatetime-getminute)**(const mamaDateTime dateTime, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getSecond](datetime_8h.html#function-mamadatetime-getsecond)**(const mamaDateTime dateTime, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getMicrosecond](datetime_8h.html#function-mamadatetime-getmicrosecond)**(const mamaDateTime dateTime, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_getDayOfWeek](datetime_8h.html#function-mamadatetime-getdayofweek)**(const mamaDateTime dateTime, mamaDayOfWeek * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_diffSeconds](datetime_8h.html#function-mamadatetime-diffseconds)**(const mamaDateTime t1, const mamaDateTime t0, mama_f64_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_diffSecondsSameDay](datetime_8h.html#function-mamadatetime-diffsecondssameday)**(const mamaDateTime t1, const mamaDateTime t0, mama_f64_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_diffMicroseconds](datetime_8h.html#function-mamadatetime-diffmicroseconds)**(const mamaDateTime t1, const mamaDateTime t0, mama_i64_t * result) |
| MAMAExpDLL mama_status | **[mamaDateTime_setFromStructTimeSpec](datetime_8h.html#function-mamadatetime-setfromstructtimespec)**(const mamaDateTime dateTime, struct timespec * inputTimeVal) |
| MAMAExpDLL mama_status | **[mamaDateTime_getStructTimeSpec](datetime_8h.html#function-mamadatetime-getstructtimespec)**(const mamaDateTime dateTime, struct timespec * result) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAMA_DATE_TIME_HAS_DATE](datetime_8h.html#define-mama-date-time-has-date)**  |
|  | **[MAMA_DATE_TIME_HAS_TIME](datetime_8h.html#define-mama-date-time-has-time)**  |
|  | **[MAMA_DATE_TIME_NO_TIMEZONE](datetime_8h.html#define-mama-date-time-no-timezone)**  |

## Types Documentation

### enum mamaDateTimePrecision_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_DATE_TIME_PREC_SECONDS | 0|   |
| MAMA_DATE_TIME_PREC_DECISECONDS | 1|   |
| MAMA_DATE_TIME_PREC_CENTISECONDS | 2|   |
| MAMA_DATE_TIME_PREC_MILLISECONDS | 3|   |
| MAMA_DATE_TIME_PREC_MICROSECONDS | 6|   |
| MAMA_DATE_TIME_PREC_NANOSECONDS | 9|   |
| MAMA_DATE_TIME_PREC_DAYS | 10|   |
| MAMA_DATE_TIME_PREC_MINUTES | 12|   |
| MAMA_DATE_TIME_PREC_UNKNOWN | 15|   |




### enum mamaDayOfWeek_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Sunday | 0|   |
| Monday | |   |
| Tuesday | |   |
| Wednesday | |   |
| Thursday | |   |
| Friday | |   |
| Saturday | |   |




### typedef mamaDateTimePrecision

```cpp
typedef enum mamaDateTimePrecision_ mamaDateTimePrecision;
```


### typedef mamaDayOfWeek

```cpp
typedef enum mamaDayOfWeek_ mamaDayOfWeek;
```


### typedef mamaDateTimeHints

```cpp
typedef mama_u8_t mamaDateTimeHints;
```



## Functions Documentation

### function mamaDateTime_create

```cpp
MAMAExpDLL mama_status mamaDateTime_create(
    mamaDateTime * dateTime
)
```


**Parameters**: 

  * **dateTime** The location of a mamaDateTime to store the result 


Create a date/time object.


### function mamaDateTime_destroy

```cpp
MAMAExpDLL mama_status mamaDateTime_destroy(
    mamaDateTime dateTime
)
```


**Parameters**: 

  * **dateTime** The date/time object to destroy. 


Destroy a mamaDateTime object.


### function mamaDateTime_clear

```cpp
MAMAExpDLL mama_status mamaDateTime_clear(
    mamaDateTime dateTime
)
```


**Parameters**: 

  * **dateTime** The date/time object to clear. 


Clear a mamaDateTime object.


### function mamaDateTime_clearDate

```cpp
MAMAExpDLL mama_status mamaDateTime_clearDate(
    mamaDateTime dateTime
)
```


**Parameters**: 

  * **dateTime** The date/time object to clear (preserving the time of day). 


Clear the date part of a mamaDateTime object.


### function mamaDateTime_clearTime

```cpp
MAMAExpDLL mama_status mamaDateTime_clearTime(
    mamaDateTime dateTime
)
```


**Parameters**: 

  * **dateTime** The date/time object to clear. 


Clear the time of day part of a mamaDateTime object (preserving the date).


### function mamaDateTime_copy

```cpp
MAMAExpDLL mama_status mamaDateTime_copy(
    mamaDateTime dest,
    const mamaDateTime src
)
```


### function mamaDateTime_empty

```cpp
MAMAExpDLL int mamaDateTime_empty(
    const mamaDateTime dateTime
)
```


### function mamaDateTime_equal

```cpp
MAMAExpDLL int mamaDateTime_equal(
    const mamaDateTime lhs,
    const mamaDateTime rhs
)
```


### function mamaDateTime_compare

```cpp
MAMAExpDLL int mamaDateTime_compare(
    const mamaDateTime lhs,
    const mamaDateTime rhs
)
```


### function mamaDateTime_getEpochTimeExt

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeExt(
    const mamaDateTime dateTime,
    mama_i64_t * seconds,
    mama_u32_t * nanoseconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to use. 
  * **seconds** The number of seconds since the Epoch. 
  * **nanoseconds** The number of nanoseconds since the seconds parameter. 


Get the extended datetime values expressed in seconds since the Epoch (UTC) and nanoseconds since this epoch time.


### function mamaDateTime_setEpochTimeExt

```cpp
MAMAExpDLL mama_status mamaDateTime_setEpochTimeExt(
    mamaDateTime dateTime,
    mama_i64_t seconds,
    mama_u32_t nanoseconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to use. 
  * **seconds** The number of seconds since the Epoch. 
  * **microseconds** The number of microseconds. 
  * **precision** The precision of the time stamp. 


Set the extended datetime from seconds since the Epoch (UTC) and nanoseconds since this epoch time.


### function mamaDateTime_setEpochTime

```cpp
MAMAExpDLL mama_status mamaDateTime_setEpochTime(
    mamaDateTime dateTime,
    mama_u32_t seconds,
    mama_u32_t microseconds,
    mamaDateTimePrecision precision
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **seconds** The number of seconds since the Epoch. 
  * **microseconds** The number of microseconds. 
  * **precision** The precision of the time stamp. 


Set the date and time as seconds and microseconds since the Epoch (UTC time zone) with an option to designate the accuracy of the time.


### function mamaDateTime_setEpochTimeF64

```cpp
MAMAExpDLL mama_status mamaDateTime_setEpochTimeF64(
    mamaDateTime dateTime,
    mama_f64_t seconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **seconds** The number of seconds since the Epoch. 


Set the date and time as seconds (plus, possibly fractional seconds) since the Epoch (UTC time zone). Fractional seconds will be rounded to microseconds.


### function mamaDateTime_setEpochTimeMilliseconds

```cpp
MAMAExpDLL mama_status mamaDateTime_setEpochTimeMilliseconds(
    mamaDateTime dateTime,
    mama_u64_t milliseconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **milliseconds** The number of milliseconds since the Epoch. 


Set the date and time as milliseconds.


### function mamaDateTime_setEpochTimeMicroseconds

```cpp
MAMAExpDLL mama_status mamaDateTime_setEpochTimeMicroseconds(
    mamaDateTime dateTime,
    mama_u64_t milliseconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **milliseconds** The number of microseconds since the Epoch. 


Set the date and time as microseconds.


### function mamaDateTime_setWithHints

```cpp
MAMAExpDLL mama_status mamaDateTime_setWithHints(
    mamaDateTime dateTime,
    mama_u32_t seconds,
    mama_u32_t microseconds,
    mamaDateTimePrecision precision,
    mamaDateTimeHints hints
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **seconds** The number of seconds (since the Epoch or start-of-day if no date). 
  * **microseconds** The number of microseconds. 
  * **precision** The precision of the date/time stamp. 
  * **hints** Additional hints 


Set the date and/or time with special, optional hints to indicate whether the date/time includes date information, time information and/or whether a user of the date/time should consider it in the context of a time zone.


### function mamaDateTime_getHints

```cpp
MAMAExpDLL mama_status mamaDateTime_getHints(
    const mamaDateTime dateTime,
    mamaDateTimeHints * hints
)
```


**Parameters**: 

  * **dateTime** The dateTime to use. 
  * **precision** The output precision of the date/time stamp. 


Get the hints flags.


### function mamaDateTime_setHints

```cpp
MAMAExpDLL mama_status mamaDateTime_setHints(
    mamaDateTime dateTime,
    mamaDateTimeHints hints
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **precision** The precision of the date/time stamp. 


Set the hints flags.


### function mamaDateTime_getPrecision

```cpp
MAMAExpDLL mama_status mamaDateTime_getPrecision(
    const mamaDateTime dateTime,
    mamaDateTimePrecision * precision
)
```


**Parameters**: 

  * **dateTime** The dateTime to use. 
  * **precision** The output precision of the date/time stamp. 


Get the precision.


### function mamaDateTime_setPrecision

```cpp
MAMAExpDLL mama_status mamaDateTime_setPrecision(
    mamaDateTime dateTime,
    mamaDateTimePrecision precision
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **precision** The precision of the date/time stamp. 


Set the precision.


### function mamaDateTime_setToNow

```cpp
MAMAExpDLL mama_status mamaDateTime_setToNow(
    mamaDateTime dateTime
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 


Set the date and time to the current UTC time. Precision and hints will be set appropriately.


### function mamaDateTime_setToMidnightToday

```cpp
MAMAExpDLL mama_status mamaDateTime_setToMidnightToday(
    mamaDateTime dateTime,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **tz** The timezone in which the date will be set. 


Set the dateTime object to 12am of the current date in the timezone provided (or UTC if NULL).


### function mamaDateTime_setWithPrecisionAndTz

```cpp
MAMAExpDLL mama_status mamaDateTime_setWithPrecisionAndTz(
    mamaDateTime dateTime,
    mama_u32_t year,
    mama_u32_t month,
    mama_u32_t day,
    mama_u32_t hour,
    mama_u32_t minute,
    mama_u32_t second,
    mama_u32_t microsecond,
    mamaDateTimePrecision precision,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **year** The year (must be 1970 or later). 
  * **month** The month (1 - 12). 
  * **day** The day (1 - 31). 
  * **hour** The hour (0 - 23). 
  * **minute** The minute (0 - 59). 
  * **second** The second (0 - 59). 
  * **microsecond** The second (0 - 999999). 
  * **precision** An explicit precision, if known. 
  * **tz** A timezone to shift from. 


Set the entire date and time for the MamaDateTime. The year, month and day parameters must all be integers greater than zero.


### function mamaDateTime_setTime

```cpp
MAMAExpDLL mama_status mamaDateTime_setTime(
    mamaDateTime dateTime,
    mama_u32_t hour,
    mama_u32_t minute,
    mama_u32_t second,
    mama_u32_t microsecond
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **hour** The hour (0 - 23). 
  * **minute** The minute (0 - 59). 
  * **second** The second (0 - 59). 
  * **microsecond** The microsecond (0 - 999999). 


Set the time-of-day portion of the MamaDateTime. The date portion is not affected.


### function mamaDateTime_setTimeWithPrecisionAndTz

```cpp
MAMAExpDLL mama_status mamaDateTime_setTimeWithPrecisionAndTz(
    mamaDateTime dateTime,
    mama_u32_t hour,
    mama_u32_t minute,
    mama_u32_t second,
    mama_u32_t microsecond,
    mamaDateTimePrecision precision,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **hour** The hour (0 - 23). 
  * **minute** The minute (0 - 59). 
  * **second** The second (0 - 59). 
  * **microsecond** The microsecond (0 - 999999). 
  * **precision** An explicit precision, if known. 
  * **tz** A timezone to shift from. 


Set the time-of-day portion of the MamaDateTime with explicit precision. The date portion is not affected.


### function mamaDateTime_setDate

```cpp
MAMAExpDLL mama_status mamaDateTime_setDate(
    mamaDateTime dateTime,
    mama_u32_t year,
    mama_u32_t month,
    mama_u32_t day
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **year** The year (must be 1970 or later). 
  * **month** The month (1 - 12). 
  * **day** The day (1 - 31). 


Set the date portion of the MamaDateTime. The time-of-day portion is not affected.


### function mamaDateTime_copyTime

```cpp
MAMAExpDLL mama_status mamaDateTime_copyTime(
    mamaDateTime dest,
    const mamaDateTime src
)
```


**Parameters**: 

  * **dest** The dateTime to copy to. 
  * **src** The dateTime to copy from. 


Copy the time-of-day portion of the mamaDateTime. The date portion is not affected.


### function mamaDateTime_copyDate

```cpp
MAMAExpDLL mama_status mamaDateTime_copyDate(
    mamaDateTime dest,
    const mamaDateTime src
)
```


**Parameters**: 

  * **dest** The dateTime to copy to. 
  * **src** The dateTime to copy from. 


Copy the date portion of the mamaDateTime. The time-of-day portion is not affected.


### function mamaDateTime_hasTime

```cpp
MAMAExpDLL mama_status mamaDateTime_hasTime(
    const mamaDateTime dateTime,
    mama_bool_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime to check. 
  * **result** Address of a bool to store the result. 0 false. 


Determine whether the time-of-day portion of the MamaDateTime is set.


### function mamaDateTime_hasDate

```cpp
MAMAExpDLL mama_status mamaDateTime_hasDate(
    const mamaDateTime dateTime,
    mama_bool_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime to check. 
  * **result** Address of mama_bool_t to store the result. 0 false. 


Determine whether the date portion of the MamaDateTime is set.


### function mamaDateTime_addSeconds

```cpp
MAMAExpDLL mama_status mamaDateTime_addSeconds(
    mamaDateTime dateTime,
    mama_f64_t seconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **seconds** The number of seconds to add (or subtract). 


Add a number of seconds, including fractional seconds (may be negative).


### function mamaDateTime_addWholeSeconds

```cpp
MAMAExpDLL mama_status mamaDateTime_addWholeSeconds(
    mamaDateTime dateTime,
    mama_i32_t seconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **seconds** The number of seconds to add (or subtract). 


Add a number of whole seconds (may be negative).


### function mamaDateTime_addMicroseconds

```cpp
MAMAExpDLL mama_status mamaDateTime_addMicroseconds(
    mamaDateTime dateTime,
    mama_i64_t microseconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **microseconds** The number of microseconds to add. Can be positive or negative. Note that there are no restrictions on the magnitude of this value. 


Add a number of microseconds (may be negative) Add a number of microseconds (may be negative and greater than 1000000 or less than -1000000).


### function mamaDateTime_setFromString

```cpp
MAMAExpDLL mama_status mamaDateTime_setFromString(
    mamaDateTime dateTime,
    const char * str
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string representation of some date and/or time. 


Set the date and time from a string representation of format YYYY-mm-dd HH:MM:SS.mmmmmm. (YYYY/mm/dd also works.) The precision of subseconds is determined by the number of digits after the decimal point.


### function mamaDateTime_setFromStringWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_setFromStringWithTz(
    mamaDateTime dateTime,
    const char * str,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string representation of some date and/or time. 
  * **tz** A timezone to shift from. 


Set the date and time from a string representation of format YYYY-mm-dd HH:MM:SS.mmmmmm. (YYYY/mm/dd also works.) The precision of subseconds is determined by the number of digits after the decimal point. If tz is not NULL, the time string is assumed to be set in a different time zone and will be adjusted to UTC accordingly.


### function mamaDateTime_setFromStringBuffer

```cpp
MAMAExpDLL mama_status mamaDateTime_setFromStringBuffer(
    mamaDateTime dateTime,
    const char * str,
    mama_size_t strLen
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string representation of some date and/or time. 
  * **strLen** The length of the unterminated string date/time. 


Set the date and time from an unterminated string representation of format YYYY-mm-dd HH:MM:SS.mmmmmm. (YYYY/mm/dd also works.) The precision of subseconds is determined by the number of digits after the decimal point.


### function mamaDateTime_setFromStringBufferWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_setFromStringBufferWithTz(
    mamaDateTime dateTime,
    const char * str,
    mama_size_t strLen,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string representation of some date and/or time. 
  * **strLen** The length of the unterminated string date/time. 
  * **tz** A timezone to shift from. 


Set the date and time from an unterminated string representation of format YYYY-mm-dd HH:MM:SS.mmmmmm. (YYYY/mm/dd also works.) The precision of subseconds is determined by the number of digits after the decimal point. If tz is not NULL, the time string is assumed to be set in a different time zone and will be adjusted to UTC accordingly.


### function mamaDateTime_getEpochTime

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTime(
    const mamaDateTime dateTime,
    mama_u32_t * seconds,
    mama_u32_t * microseconds,
    mamaDateTimePrecision * precision
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **seconds** The number of seconds since the Epoch. 
  * **microseconds** The number of additional microseconds. 
  * **precision** The precision of the returned time value. 


Get the date and time as seconds and microseconds since the Epoch (UTC time zone).


### function mamaDateTime_getEpochTimeWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeWithTz(
    const mamaDateTime dateTime,
    mama_u32_t * seconds,
    mama_u32_t * microseconds,
    mamaDateTimePrecision * precision,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **seconds** The number of seconds since the Epoch. 
  * **microseconds** The number of additional microseconds. 
  * **precision** The precision of the returned time value. 
  * **tz** The timezone for the returned values. 


Get the date and time as seconds and microseconds since the Epoch in the timezone supplied.


### function mamaDateTime_getEpochTimeMicroseconds

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeMicroseconds(
    const mamaDateTime dateTime,
    mama_u64_t * microseconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to obtain the number of microseconds from. 
  * **microseconds** The number of microseconds since the Epoch. 


**Return**: Indicates whether the function succeeded or failed and could be one of:

* MAMA_STATUS_INVALID_ARG
* MAMA_STATUS_OK 

Get the date and time as microseconds since the Epoch, (using the UTC timezone).


### function mamaDateTime_getEpochTimeMicrosecondsWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeMicrosecondsWithTz(
    const mamaDateTime dateTime,
    mama_u64_t * microseconds,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to obtain the number of microseconds from. 
  * **microseconds** The number of microseconds since the Epoch. 
  * **[int]** tz The timezone. 


**Return**: Indicates whether the function succeeded or failed and could be one of:

* MAMA_STATUS_INVALID_ARG
* MAMA_STATUS_OK 

Get the date and time as microseconds since the Epoch in the supplied time zone.


### function mamaDateTime_getEpochTimeMilliseconds

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeMilliseconds(
    const mamaDateTime dateTime,
    mama_u64_t * milliseconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **milliseconds** The number of milliseconds since the Epoch. 


Get the date and time as milliseconds since the Epoch (UTC time zone).


### function mamaDateTime_getEpochTimeMillisecondsWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeMillisecondsWithTz(
    const mamaDateTime dateTime,
    mama_u64_t * milliseconds,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **milliseconds** The number of milliseconds since the Epoch. 
  * **tz** The timezone for the returned values. 


Get the date and time as milliseconds since the Epoch in the timezone supplied.


### function mamaDateTime_getEpochTimeSeconds

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeSeconds(
    const mamaDateTime dateTime,
    mama_f64_t * seconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to set 
  * **seconds** The number of seconds (including partial seconds) since the Epoch. 


Get the date and time as seconds since the Epoch (UTC time zone).


### function mamaDateTime_getEpochTimeSecondsWithCheck

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeSecondsWithCheck(
    const mamaDateTime dateTime,
    mama_f64_t * seconds
)
```


**Parameters**: 

  * **dateTime** The dateTime to obtain the number of microseconds from. 
  * **seconds** The number of seconds, (including partial seconds), since the Epoch. 


**Return**: Indicates whether the function succeeded or failed and could be one of:

* MAMA_STATUS_INVALID_ARG
* MAMA_STATUS_SYSTEM_ERROR
* MAMA_STATUS_NULL_ARG
* MAMA_STATUS_OK 

Get the date and time as seconds since the Epoch, (using the UTC timezone). If no date value is contained in the dateTime then it will be set to today's date and the calculation made.


### function mamaDateTime_getEpochTimeSecondsWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_getEpochTimeSecondsWithTz(
    const mamaDateTime dateTime,
    mama_f64_t * seconds,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set 
  * **seconds** The number of seconds (including partial seconds) since the Epoch. 
  * **tz** The timezone for the returned values. 


Get the date and time as seconds since the Epoch in the timezone supplied.


### function mamaDateTime_getWithHints

```cpp
MAMAExpDLL mama_status mamaDateTime_getWithHints(
    const mamaDateTime dateTime,
    mama_u32_t * seconds,
    mama_u32_t * microseconds,
    mamaDateTimePrecision * precision,
    mama_u8_t * hints
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **seconds** The number of seconds (since the Epoch or start-of-day if no date). 
  * **microseconds** The number of microseconds. 
  * **precision** The precision of the date/time stamp. 
  * **hints** Additional hints 


Get the date and/or time with special, optional hints to indicate whether the date/time includes date information, time information and/or whether a user of the date/time should consider it in the context of a time zone.


### function mamaDateTime_getStructTimeVal

```cpp
MAMAExpDLL mama_status mamaDateTime_getStructTimeVal(
    const mamaDateTime dateTime,
    struct timeval * result
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **result** The struct timeval to fill in. 


Get the date/time as a "struct timeval".


### function mamaDateTime_getStructTimeValWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_getStructTimeValWithTz(
    const mamaDateTime dateTime,
    struct timeval * result,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **result** The struct timeval to fill in. 
  * **tz** The timezone for the returned values. 


Get the date/time as a "struct timeval" in the timezone supplied.


### function mamaDateTime_setFromStructTimeVal

```cpp
MAMAExpDLL mama_status mamaDateTime_setFromStructTimeVal(
    const mamaDateTime dateTime,
    struct timeval * inputTimeVal
)
```


**Parameters**: 

  * **dateTime** The dateTime to update. 
  * **inputTimeVal** The timeval struct to be used to update the dateTime. 


Set the date/time from a "struct timeval".


### function mamaDateTime_getStructTm

```cpp
MAMAExpDLL mama_status mamaDateTime_getStructTm(
    const mamaDateTime dateTime,
    struct tm * result
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **result** The struct timeval to fill in. 


Get the date/time as a "struct tm".


### function mamaDateTime_getStructTmWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_getStructTmWithTz(
    const mamaDateTime dateTime,
    struct tm * result,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **result** The struct timeval to fill in. 
  * **tz** The timezone for the returned values. 


Get the date/time as a "struct tm" in the timezone supplied.


### function mamaDateTime_getAsString

```cpp
MAMAExpDLL mama_status mamaDateTime_getAsString(
    const mamaDateTime dateTime,
    char * str,
    mama_size_t maxLen
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string buffer to update. 
  * **maxLen** The maximum size of the string buffer (including trailing '\0'). 


Get the date and/or time as a string. If no date information is available, no date is printed in the resulting string. The format for dates is YYYY-mm-dd (the ISO 8601 date format) and the format for times is HH:MM:SS.mmmmmmm (where the precision of the subseconds may vary depending upon any precision hints available).

The timezone must to set to UTC if calling this from multiple threads concurrently to avoid contention in strftime.


### function mamaDateTime_getTimeAsString

```cpp
MAMAExpDLL mama_status mamaDateTime_getTimeAsString(
    const mamaDateTime dateTime,
    char * str,
    mama_size_t maxLen
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string buffer to update. 
  * **maxLen** The maximum size of the string buffer (including trailing '\0'). 


Get the time (no date) as a string. The format for times is HH:MM:SS.mmmmmmm (where the precision of the subseconds may vary depending upon any precision hints available).

The timezone must to set to UTC if calling this from multiple threads concurrently to avoid contention in strftime.


### function mamaDateTime_getDateAsString

```cpp
MAMAExpDLL mama_status mamaDateTime_getDateAsString(
    const mamaDateTime dateTime,
    char * str,
    mama_size_t maxLen
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string buffer to update. 
  * **maxLen** The maximum size of the string buffer (including trailing '\0'). 


Get the date (no time) as a string. The format for dates is YYYY-mm-dd (the ISO 8601 date format).

The timezone must to set to UTC if calling this from multiple threads concurrently to avoid contention in strftime.


### function mamaDateTime_getAsFormattedString

```cpp
MAMAExpDLL mama_status mamaDateTime_getAsFormattedString(
    const mamaDateTime dateTime,
    char * str,
    mama_size_t maxLen,
    const char * format
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string buffer to update. 
  * **maxLen** The maximum size of the string buffer (including trailing '\0'). 
  * **format** The output format. 


Get the date and/or time as a string using the format provided. The format string can be the common ones supported by strftime() (Y, m, d, F, T, Y, H, M, S, B, b, h, ), with the additional format strings, "%:" and "%;", which represents the number of subseconds in millis. "%;" includes the dot and only prints the subseconds if they are non-zero. "%:" does not include the dot, and prints "000" for 0 milliseconds. "%." and "%," are identical to "%:" and "%;" except they use the internal precision field to determine how many decimal places to print.


### function mamaDateTime_getAsFormattedStringWithTz

```cpp
MAMAExpDLL mama_status mamaDateTime_getAsFormattedStringWithTz(
    const mamaDateTime dateTime,
    char * str,
    mama_size_t maxLen,
    const char * format,
    const mamaTimeZone tz
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **str** The string buffer to update. 
  * **maxLen** The maximum size of the string buffer (including trailing '\0'). 
  * **format** The output format. 
  * **tz** The timezone for the returned date/time. 


Get the date and/or time as a string using the format provided. The format string can be the common ones supported by strftime() (Y, m, d, F, T, Y, H, M, S, B, b, h, ), with the additional format strings, "%:" and "%;", which represents the number of subseconds in millis. "%;" includes the dot and only prints the subseconds if they are non-zero. "%:" does not include the dot, and prints "000" for 0 milliseconds. "%." and "%," are identical to "%:" and "%;" except they use the internal precision field to determine how many decimal places to print.


### function mamaDateTime_getYear

```cpp
MAMAExpDLL mama_status mamaDateTime_getYear(
    const mamaDateTime dateTime,
    mama_u32_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime from which to get the result. 
  * **result** The result of the get method. 


Get the year (1601 onwards).


### function mamaDateTime_getMonth

```cpp
MAMAExpDLL mama_status mamaDateTime_getMonth(
    const mamaDateTime dateTime,
    mama_u32_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime from which to get the result. 
  * **result** The result of the get method. 


Get the month (1-12).


### function mamaDateTime_getDay

```cpp
MAMAExpDLL mama_status mamaDateTime_getDay(
    const mamaDateTime dateTime,
    mama_u32_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime from which to get the result. 
  * **result** The result of the get method. 


Get the day of month (1-31).


### function mamaDateTime_getHour

```cpp
MAMAExpDLL mama_status mamaDateTime_getHour(
    const mamaDateTime dateTime,
    mama_u32_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime from which to get the result. 
  * **result** The result of the get method. 


Get the hour (0-23).


### function mamaDateTime_getMinute

```cpp
MAMAExpDLL mama_status mamaDateTime_getMinute(
    const mamaDateTime dateTime,
    mama_u32_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime from which to get the result. 
  * **result** The result of the get method. 


Get the minute (0-59).


### function mamaDateTime_getSecond

```cpp
MAMAExpDLL mama_status mamaDateTime_getSecond(
    const mamaDateTime dateTime,
    mama_u32_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime from which to get the result. 
  * **result** The result of the get method. 


Get the second (0-59).


### function mamaDateTime_getMicrosecond

```cpp
MAMAExpDLL mama_status mamaDateTime_getMicrosecond(
    const mamaDateTime dateTime,
    mama_u32_t * result
)
```


**Parameters**: 

  * **dateTime** The dateTime from which to get the result. 
  * **result** The result of the get method. 


Get the microsecond (0-999999).


### function mamaDateTime_getDayOfWeek

```cpp
MAMAExpDLL mama_status mamaDateTime_getDayOfWeek(
    const mamaDateTime dateTime,
    mamaDayOfWeek * result
)
```


**Parameters**: 

  * **dateTime** The dateTime from which to get the result. 
  * **result** The result of the get method. 


Get the day of week.


### function mamaDateTime_diffSeconds

```cpp
MAMAExpDLL mama_status mamaDateTime_diffSeconds(
    const mamaDateTime t1,
    const mamaDateTime t0,
    mama_f64_t * result
)
```


Return the difference, in seconds (including fractions of seconds), between the two times. 


### function mamaDateTime_diffSecondsSameDay

```cpp
MAMAExpDLL mama_status mamaDateTime_diffSecondsSameDay(
    const mamaDateTime t1,
    const mamaDateTime t0,
    mama_f64_t * result
)
```


Return the difference, in seconds (including fractions of seconds), between the two times, ignoring any date information. 


### function mamaDateTime_diffMicroseconds

```cpp
MAMAExpDLL mama_status mamaDateTime_diffMicroseconds(
    const mamaDateTime t1,
    const mamaDateTime t0,
    mama_i64_t * result
)
```


Return the difference, in microseconds, between the two times. 


### function mamaDateTime_setFromStructTimeSpec

```cpp
MAMAExpDLL mama_status mamaDateTime_setFromStructTimeSpec(
    const mamaDateTime dateTime,
    struct timespec * inputTimeVal
)
```


**Parameters**: 

  * **dateTime** The dateTime to update. 
  * **inputTimeVal** The timespec struct to be used to update the dateTime. 


Set the date/time from a "struct timespec".


### function mamaDateTime_getStructTimeSpec

```cpp
MAMAExpDLL mama_status mamaDateTime_getStructTimeSpec(
    const mamaDateTime dateTime,
    struct timespec * result
)
```


**Parameters**: 

  * **dateTime** The dateTime to set. 
  * **result** The struct timespec to fill in. 


Get the date/time as a "struct timespec".




## Macros Documentation

### define MAMA_DATE_TIME_HAS_DATE

```cpp
#define MAMA_DATE_TIME_HAS_DATE ((mamaDateTimeHints) 0x01)
```


### define MAMA_DATE_TIME_HAS_TIME

```cpp
#define MAMA_DATE_TIME_HAS_TIME ((mamaDateTimeHints) 0x02)
```


### define MAMA_DATE_TIME_NO_TIMEZONE

```cpp
#define MAMA_DATE_TIME_NO_TIMEZONE ((mamaDateTimeHints) 0x04)
```


## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#include <mama/config.h>
#include <mama/status.h>
#include <mama/types.h>
#include <mama/timezone.h>
#include "wombat/port.h"

#include <time.h>
#ifndef MamaDateTimeH__
#define MamaDateTimeH__


#if defined(__cplusplus)
extern "C" {
#endif


typedef enum mamaDateTimePrecision_
{
    MAMA_DATE_TIME_PREC_SECONDS      = 0,
    MAMA_DATE_TIME_PREC_DECISECONDS  = 1,
    MAMA_DATE_TIME_PREC_CENTISECONDS = 2,
    MAMA_DATE_TIME_PREC_MILLISECONDS = 3,
    MAMA_DATE_TIME_PREC_MICROSECONDS = 6,
    MAMA_DATE_TIME_PREC_NANOSECONDS  = 9,
    MAMA_DATE_TIME_PREC_DAYS         = 10,
    MAMA_DATE_TIME_PREC_MINUTES      = 12,
    MAMA_DATE_TIME_PREC_UNKNOWN      = 15
} mamaDateTimePrecision;

typedef enum mamaDayOfWeek_
{
    Sunday = 0, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
} mamaDayOfWeek;


typedef mama_u8_t  mamaDateTimeHints;
#define MAMA_DATE_TIME_HAS_DATE    ((mamaDateTimeHints) 0x01)
#define MAMA_DATE_TIME_HAS_TIME    ((mamaDateTimeHints) 0x02)
#define MAMA_DATE_TIME_NO_TIMEZONE ((mamaDateTimeHints) 0x04)


MAMAExpDLL
extern mama_status
mamaDateTime_create (mamaDateTime* dateTime);

MAMAExpDLL
extern mama_status
mamaDateTime_destroy (mamaDateTime dateTime);

MAMAExpDLL
extern mama_status
mamaDateTime_clear (mamaDateTime dateTime);

MAMAExpDLL
extern mama_status
mamaDateTime_clearDate (mamaDateTime dateTime);

MAMAExpDLL
extern mama_status
mamaDateTime_clearTime (mamaDateTime dateTime);

/*
 * Copy a date/time object.  The destination object must have already
 * been allocated using mamaDateTime_create().
 */
MAMAExpDLL
extern mama_status
mamaDateTime_copy (mamaDateTime       dest,
                   const mamaDateTime src);

/*
 * Check whether the date/time object has been set to anything
 */
MAMAExpDLL
extern int
mamaDateTime_empty (const mamaDateTime dateTime);

/*
 * Check for equality between two date/time objects.
 */
MAMAExpDLL
extern int
mamaDateTime_equal (const mamaDateTime lhs,
                    const mamaDateTime rhs);

/*
 * Compare two date/time objects.  The return value is negative if lhs
 * is earlier than rhs, positive if lhs is greater than rhs and zero
 * if the two are equal.
 */
MAMAExpDLL
extern int
mamaDateTime_compare (const mamaDateTime lhs,
                      const mamaDateTime rhs);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeExt(const mamaDateTime     dateTime,
                             mama_i64_t*            seconds,
                             mama_u32_t*            nanoseconds);

MAMAExpDLL
extern mama_status
mamaDateTime_setEpochTimeExt(mamaDateTime           dateTime,
                             mama_i64_t             seconds,
                             mama_u32_t             nanoseconds);
MAMAExpDLL
extern mama_status
mamaDateTime_setEpochTime(mamaDateTime           dateTime,
                          mama_u32_t             seconds,
                          mama_u32_t             microseconds,
                          mamaDateTimePrecision  precision);

MAMAExpDLL
extern mama_status
mamaDateTime_setEpochTimeF64(mamaDateTime dateTime,
                             mama_f64_t   seconds);

MAMAExpDLL
extern mama_status
mamaDateTime_setEpochTimeMilliseconds(mamaDateTime dateTime,
                                      mama_u64_t   milliseconds);

MAMAExpDLL
extern mama_status
mamaDateTime_setEpochTimeMicroseconds(mamaDateTime dateTime,
                                      mama_u64_t   milliseconds);

MAMAExpDLL
extern mama_status
mamaDateTime_setWithHints(mamaDateTime           dateTime,
                          mama_u32_t             seconds,
                          mama_u32_t             microseconds,
                          mamaDateTimePrecision  precision,
                          mamaDateTimeHints      hints);


MAMAExpDLL
extern mama_status
mamaDateTime_getHints(const mamaDateTime     dateTime,
                      mamaDateTimeHints*     hints);

MAMAExpDLL
extern mama_status
mamaDateTime_setHints(mamaDateTime           dateTime,
                      mamaDateTimeHints      hints);

MAMAExpDLL
extern mama_status
mamaDateTime_getPrecision(const mamaDateTime     dateTime,
                          mamaDateTimePrecision* precision);

MAMAExpDLL
extern mama_status
mamaDateTime_setPrecision(mamaDateTime           dateTime,
                          mamaDateTimePrecision  precision);

MAMAExpDLL
extern mama_status
mamaDateTime_setToNow(mamaDateTime dateTime);

MAMAExpDLL
extern mama_status
mamaDateTime_setToMidnightToday(mamaDateTime       dateTime,
                                const mamaTimeZone tz);

MAMAExpDLL
extern mama_status
mamaDateTime_setWithPrecisionAndTz(mamaDateTime           dateTime,
                                   mama_u32_t             year,
                                   mama_u32_t             month,
                                   mama_u32_t             day,
                                   mama_u32_t             hour,
                                   mama_u32_t             minute,
                                   mama_u32_t             second,
                                   mama_u32_t             microsecond,
                                   mamaDateTimePrecision  precision,
                                   const mamaTimeZone     tz);

MAMAExpDLL
extern mama_status
mamaDateTime_setTime(mamaDateTime dateTime,
                     mama_u32_t   hour,
                     mama_u32_t   minute,
                     mama_u32_t   second,
                     mama_u32_t   microsecond);

MAMAExpDLL
extern mama_status
mamaDateTime_setTimeWithPrecisionAndTz(mamaDateTime           dateTime,
                                       mama_u32_t             hour,
                                       mama_u32_t             minute,
                                       mama_u32_t             second,
                                       mama_u32_t             microsecond,
                                       mamaDateTimePrecision  precision,
                                       const mamaTimeZone     tz);

MAMAExpDLL
extern mama_status
mamaDateTime_setDate(mamaDateTime dateTime,
                     mama_u32_t   year,
                     mama_u32_t   month,
                     mama_u32_t   day);

MAMAExpDLL
extern mama_status
mamaDateTime_copyTime (mamaDateTime       dest,
                       const mamaDateTime src);

MAMAExpDLL
extern mama_status
mamaDateTime_copyDate (mamaDateTime       dest,
                       const mamaDateTime src);

MAMAExpDLL
extern mama_status
mamaDateTime_hasTime(const mamaDateTime dateTime,
                     mama_bool_t*       result);

MAMAExpDLL
extern mama_status
mamaDateTime_hasDate(const mamaDateTime dateTime,
                     mama_bool_t*       result);

MAMAExpDLL
extern mama_status
mamaDateTime_addSeconds(mamaDateTime dateTime,
                        mama_f64_t   seconds);

MAMAExpDLL
extern mama_status
mamaDateTime_addWholeSeconds(mamaDateTime dateTime,
                             mama_i32_t   seconds);

MAMAExpDLL
extern mama_status
mamaDateTime_addMicroseconds(mamaDateTime dateTime,
                             mama_i64_t   microseconds);

MAMAExpDLL
extern mama_status
mamaDateTime_setFromString(mamaDateTime dateTime,
                           const char*  str);

MAMAExpDLL
extern mama_status
mamaDateTime_setFromStringWithTz(mamaDateTime        dateTime,
                                 const char*         str,
                                 const mamaTimeZone  tz);

MAMAExpDLL
extern mama_status
mamaDateTime_setFromStringBuffer(mamaDateTime dateTime,
                                 const char*  str,
                                 mama_size_t  strLen);

MAMAExpDLL
extern mama_status
mamaDateTime_setFromStringBufferWithTz(mamaDateTime       dateTime,
                                       const char*        str,
                                       mama_size_t        strLen,
                                       const mamaTimeZone tz);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTime(const mamaDateTime     dateTime,
                          mama_u32_t*            seconds,
                          mama_u32_t*            microseconds,
                          mamaDateTimePrecision* precision);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeWithTz(const mamaDateTime     dateTime,
                                mama_u32_t*            seconds,
                                mama_u32_t*            microseconds,
                                mamaDateTimePrecision* precision,
                                const mamaTimeZone     tz);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeMicroseconds(const mamaDateTime dateTime,
                                      mama_u64_t*        microseconds);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeMicrosecondsWithTz(const mamaDateTime dateTime,
                                            mama_u64_t*        microseconds,
                                            const mamaTimeZone tz);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeMilliseconds(const mamaDateTime dateTime,
                                      mama_u64_t*        milliseconds);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeMillisecondsWithTz(const mamaDateTime dateTime,
                                            mama_u64_t*        milliseconds,
                                            const mamaTimeZone tz);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeSeconds(const mamaDateTime dateTime,
                                 mama_f64_t*        seconds);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeSecondsWithCheck(const mamaDateTime dateTime,
                                          mama_f64_t*        seconds);

MAMAExpDLL
extern mama_status
mamaDateTime_getEpochTimeSecondsWithTz(const mamaDateTime dateTime,
                                       mama_f64_t*        seconds,
                                       const mamaTimeZone tz);

MAMAExpDLL
extern mama_status
mamaDateTime_getWithHints(const mamaDateTime     dateTime,
                          mama_u32_t*            seconds,
                          mama_u32_t*            microseconds,
                          mamaDateTimePrecision* precision,
                          mama_u8_t*             hints);

MAMAExpDLL
extern mama_status
mamaDateTime_getStructTimeVal(const mamaDateTime dateTime,
                              struct timeval*    result);

MAMAExpDLL
extern mama_status
mamaDateTime_getStructTimeValWithTz(const mamaDateTime dateTime,
                                    struct timeval*    result,
                                    const mamaTimeZone tz);

MAMAExpDLL
extern mama_status
mamaDateTime_setFromStructTimeVal(const mamaDateTime dateTime,
                                  struct timeval*    inputTimeVal);

MAMAExpDLL
extern mama_status
mamaDateTime_getStructTm(const mamaDateTime dateTime,
                         struct tm*         result);

MAMAExpDLL
extern mama_status
mamaDateTime_getStructTmWithTz(const mamaDateTime dateTime,
                               struct tm*         result,
                               const mamaTimeZone tz);

MAMAExpDLL
extern mama_status
mamaDateTime_getAsString(const mamaDateTime dateTime,
                         char*              str,
                         mama_size_t        maxLen);

MAMAExpDLL
extern mama_status
mamaDateTime_getTimeAsString(const mamaDateTime dateTime,
                             char*              str,
                             mama_size_t        maxLen);

MAMAExpDLL
extern mama_status
mamaDateTime_getDateAsString(const mamaDateTime dateTime,
                             char*              str,
                             mama_size_t        maxLen);

MAMAExpDLL
extern mama_status
mamaDateTime_getAsFormattedString(const mamaDateTime dateTime,
                                  char*              str,
                                  mama_size_t        maxLen,
                                  const char*        format);

MAMAExpDLL
extern mama_status
mamaDateTime_getAsFormattedStringWithTz(const mamaDateTime dateTime,
                                        char*              str,
                                        mama_size_t        maxLen,
                                        const char*        format,
                                        const mamaTimeZone tz);

MAMAExpDLL
extern mama_status
mamaDateTime_getYear(const mamaDateTime dateTime,
                     mama_u32_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_getMonth(const mamaDateTime dateTime,
                      mama_u32_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_getDay(const mamaDateTime dateTime,
                    mama_u32_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_getHour(const mamaDateTime dateTime,
                     mama_u32_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_getMinute(const mamaDateTime dateTime,
                       mama_u32_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_getSecond(const mamaDateTime dateTime,
                       mama_u32_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_getMicrosecond(const mamaDateTime dateTime,
                            mama_u32_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_getDayOfWeek(const mamaDateTime dateTime,
                          mamaDayOfWeek*     result);

MAMAExpDLL
extern mama_status
mamaDateTime_diffSeconds(const mamaDateTime t1,
                         const mamaDateTime t0,
                         mama_f64_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_diffSecondsSameDay(const mamaDateTime t1,
                                const mamaDateTime t0,
                                mama_f64_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_diffMicroseconds(const mamaDateTime t1,
                              const mamaDateTime t0,
                              mama_i64_t*        result);

MAMAExpDLL
extern mama_status
mamaDateTime_setFromStructTimeSpec(const mamaDateTime dateTime,
                                   struct timespec*   inputTimeVal);

MAMAExpDLL
extern mama_status
mamaDateTime_getStructTimeSpec(const mamaDateTime dateTime,
                               struct timespec*   result);

#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
