---
title: mama/MamaDateTime.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaDateTime.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaDateTime](classWombat_1_1MamaDateTime.html)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| mama_f64_t | **[diffSeconds](MamaDateTime_8h.html#function-diffseconds)**(const [Wombat::MamaDateTime](classWombat_1_1MamaDateTime.html) & t1, const [Wombat::MamaDateTime](classWombat_1_1MamaDateTime.html) & t0) |
| mama_f64_t | **[diffSecondsSameDay](MamaDateTime_8h.html#function-diffsecondssameday)**(const [Wombat::MamaDateTime](classWombat_1_1MamaDateTime.html) & t1, const [Wombat::MamaDateTime](classWombat_1_1MamaDateTime.html) & t0) |
| mama_i64_t | **[diffMicroseconds](MamaDateTime_8h.html#function-diffmicroseconds)**(const [Wombat::MamaDateTime](classWombat_1_1MamaDateTime.html) & t1, const [Wombat::MamaDateTime](classWombat_1_1MamaDateTime.html) & t0) |


## Functions Documentation

### function diffSeconds

```cpp
mama_f64_t diffSeconds(
    const Wombat::MamaDateTime & t1,
    const Wombat::MamaDateTime & t0
)
```


### function diffSecondsSameDay

```cpp
mama_f64_t diffSecondsSameDay(
    const Wombat::MamaDateTime & t1,
    const Wombat::MamaDateTime & t0
)
```


### function diffMicroseconds

```cpp
mama_i64_t diffMicroseconds(
    const Wombat::MamaDateTime & t1,
    const Wombat::MamaDateTime & t0
)
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

#ifndef MamaDateTimeHpp__
#define MamaDateTimeHpp__

#include <mama/datetime.h>
#include <mama/MamaTimeZone.h>



namespace Wombat 
{

class MAMACPPExpDLL MamaDateTime
{
public:
    MamaDateTime ();
    MamaDateTime (const MamaDateTime& copy);

    explicit MamaDateTime (const char*          str,
                           const MamaTimeZone*  tz = NULL);

    ~MamaDateTime ();

    MamaDateTime& operator=  (const MamaDateTime& rhs);
    bool          operator== (const MamaDateTime& rhs) const;
    bool          operator!= (const MamaDateTime& rhs) const
    { return ! operator== (rhs); }
    bool          operator<  (const MamaDateTime& rhs) const;
    bool          operator>  (const MamaDateTime& rhs) const;
    int           compare    (const MamaDateTime& rhs) const;
    bool          empty      () const;

    void          setEpochTime    (mama_u32_t             secondsSinceEpoch,
                                   mama_u32_t             microseconds,
                                   mamaDateTimePrecision  precision =
                                                  MAMA_DATE_TIME_PREC_UNKNOWN);
    void          setEpochTimeF64 (double                 secondsSinceEpoch);
    void          setEpochTimeMilliseconds (
                              mama_u64_t             millisecondsSinceEpoch);
    void          setEpochTimeMicroseconds (
                              mama_u64_t             microsecondsSinceEpoch);
    void          setWithHints    (mama_u32_t             secondsSinceEpoch,
                                   mama_u32_t             microseconds,
                                   mamaDateTimePrecision  precision =
                                                  MAMA_DATE_TIME_PREC_UNKNOWN,
                                   mamaDateTimeHints      hints = 0);
    mamaDateTimePrecision
                  getPrecision    ();
    void          setPrecision    (mamaDateTimePrecision  precision);
    mamaDateTimeHints
                  getHints        ();
    void          setHints        (mamaDateTimeHints      hints);
    void          setFromString   (const char*            str,
                                   const MamaTimeZone*    tz = NULL);
    void          setFromString   (const char*            str,
                                   mama_size_t            strLen,
                                   const MamaTimeZone*    tz = NULL);
    void          setToNow        ();
    void          setToMidnightToday (const MamaTimeZone*    tz = NULL);

    void          setFromStructTimeSpec (struct timespec& inputTimeSpec);

    void set (struct timeval inputTimeVal);

    void set (
        mama_u32_t             year,
        mama_u32_t             month,
        mama_u32_t             day,
        mama_u32_t             hour,
        mama_u32_t             minute,
        mama_u32_t             second,
        mama_u32_t             microsecond,
        mamaDateTimePrecision  precision = MAMA_DATE_TIME_PREC_UNKNOWN,
        const MamaTimeZone*    tz = NULL);

    void setTime (
        mama_u32_t             hour,
        mama_u32_t             minute,
        mama_u32_t             second,
        mama_u32_t             microsecond,
        mamaDateTimePrecision  precision = MAMA_DATE_TIME_PREC_UNKNOWN,
        const MamaTimeZone*    tz = NULL);

    void setDate (
        mama_u32_t          year,
        mama_u32_t          month,
        mama_u32_t          day);

    void copyTime (
        const MamaDateTime&  copy);

    void copyDate (
        const MamaDateTime&  copy);

    void clear ();

    void clearTime ();

    void clearDate ();

    void          addSeconds      (mama_f64_t             seconds);
    void          addSeconds      (mama_i32_t             seconds);
    void          addMicroseconds (mama_i64_t             microSeconds);

    mama_u64_t    getEpochTimeMicroseconds () const;
    
    mama_u64_t    getEpochTimeMicroseconds (const MamaTimeZone&  tz) const;
    
    mama_u64_t    getEpochTimeMilliseconds () const;
    mama_u64_t    getEpochTimeMilliseconds (const MamaTimeZone&  tz) const;
    
    mama_f64_t    getEpochTimeSeconds      () const;
    mama_f64_t    getEpochTimeSeconds      (const MamaTimeZone&  tz) const;

    mama_i64_t    getEpochTimeExtSeconds() const;

    uint32_t      getEpochTimeExtNanoseconds() const;

    void          setEpochTimeExt(mama_i64_t  seconds, uint32_t  nanoseconds) const;

    mama_f64_t    getEpochTimeSecondsWithCheck() const;

    void          getAsString     (char*        result,
                                   mama_size_t  maxLen) const;
    void          getTimeAsString (char*        result,
                                   mama_size_t  maxLen) const;
    void          getDateAsString (char*        result,
                                   mama_size_t  maxLen) const;

    const char*   getAsString     () const;
    const char*   getTimeAsString () const;
    const char*   getDateAsString () const;

    void          getAsFormattedString (char*                result,
                                        mama_size_t          maxLen,
                                        const char*          format) const;
    void          getAsFormattedString (char*                result,
                                        mama_size_t          maxLen,
                                        const char*          format,
                                        const MamaTimeZone&  tz) const;

    void          getAsStructTimeVal (struct timeval&       result) const;
    void          getAsStructTimeVal (struct timeval&       result,
                                      const MamaTimeZone&   tz) const;

    void          getAsStructTimeSpec(struct timespec&       result) const;

    void          getAsStructTm      (struct tm&            result) const;
    void          getAsStructTm      (struct tm&            result,
                                      const MamaTimeZone&   tz) const;
                                      
    mama_u32_t    getYear        () const;
    mama_u32_t    getMonth       () const;
    mama_u32_t    getDay         () const;
    mama_u32_t    getHour        () const;
    mama_u32_t    getMinute      () const;
    mama_u32_t    getSecond      () const;
    mama_u32_t    getMicrosecond () const;
    mamaDayOfWeek getDayOfWeek   () const;

    bool hasTime() const;

    bool hasDate() const;

    mamaDateTime        getCValue();
    const mamaDateTime  getCValue() const;

private:
    mamaDateTime    mDateTime;
    mutable char*   mStrRep;
};

} // namespace Wombat


mama_f64_t  diffSeconds        (const Wombat::MamaDateTime&  t1,
                                const Wombat::MamaDateTime&  t0);

mama_f64_t  diffSecondsSameDay (const Wombat::MamaDateTime&  t1,
                                const Wombat::MamaDateTime&  t0);

mama_i64_t  diffMicroseconds   (const Wombat::MamaDateTime&  t1,
                                const Wombat::MamaDateTime&  t0);

#endif // MamaDateTimeHpp__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
