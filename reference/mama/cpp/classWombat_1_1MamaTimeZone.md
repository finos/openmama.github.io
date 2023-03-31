---
title: Wombat::MamaTimeZone
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTimeZone



 [More...](#detailed-description)


`#include <MamaTimeZone.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) &static const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & | **[utc](classWombat_1_1MamaTimeZone.html#function-utc)**() |
| const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & | **[usEastern](classWombat_1_1MamaTimeZone.html#function-useastern)**() |
| void | **[setScanningInterval](classWombat_1_1MamaTimeZone.html#function-setscanninginterval)**(mama_f64_t seconds) |
| | **[MamaTimeZone](classWombat_1_1MamaTimeZone.html#function-mamatimezone)**() |
| | **[MamaTimeZone](classWombat_1_1MamaTimeZone.html#function-mamatimezone)**(const char * tz) |
| | **[MamaTimeZone](classWombat_1_1MamaTimeZone.html#function-mamatimezone)**(const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & copy) |
| | **[~MamaTimeZone](classWombat_1_1MamaTimeZone.html#function-~mamatimezone)**() |
| [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & | **[operator=](classWombat_1_1MamaTimeZone.html#function-operator=)**(const [MamaTimeZone](classWombat_1_1MamaTimeZone.html) & rhs) |
| void | **[set](classWombat_1_1MamaTimeZone.html#function-set)**(const char * tz) |
| void | **[clear](classWombat_1_1MamaTimeZone.html#function-clear)**() |
| const char * | **[tz](classWombat_1_1MamaTimeZone.html#function-tz)**() const |
| mama_i32_t | **[offset](classWombat_1_1MamaTimeZone.html#function-offset)**() const |
| void | **[check](classWombat_1_1MamaTimeZone.html#function-check)**() |
| mamaTimeZone | **[getCValue](classWombat_1_1MamaTimeZone.html#function-getcvalue)**() |
| const mamaTimeZone | **[getCValue](classWombat_1_1MamaTimeZone.html#function-getcvalue)**() const |

## Detailed Description

```cpp
class Wombat::MamaTimeZone;
```


A time zone representation to make conversion of timestamps to and from particular time zones more convenient.

Note: The addition of instance monitoring to the [MamaTimeZone](classWombat_1_1MamaTimeZone.html) implementation has resulted in the following limitation in its usage. Do not create short lived objects of this type on the method stack or delete long lived objects before program termination. Pointers to all instances are maintained in a global vector. At the moment there is no mechanism by which we can detect deleted objects or those which are popped off the method stack. An internal thread will always iterate over all objects ever created. A call to an object removed from the stack will result in nondeterminable behaviour. Pointers could be stored in a map against a unique object id; however, addition and removal from the map would have to be synchronized which would impact on performance. 

## Public Functions Documentation

### function utc

```cpp
static const MamaTimeZone &static const MamaTimeZone & utc()
```


Return a reference to a [MamaTimeZone](classWombat_1_1MamaTimeZone.html) corresponding to the local time zone. Return a reference to a [MamaTimeZone](classWombat_1_1MamaTimeZone.html) corresponding to UTC time zone. 


### function usEastern

```cpp
static const MamaTimeZone & usEastern()
```


Return a reference to a [MamaTimeZone](classWombat_1_1MamaTimeZone.html) corresponding to the US Eastern time zone. 


### function setScanningInterval

```cpp
static void setScanningInterval(
    mama_f64_t seconds
)
```


Use to set the interval of the thread updating each [MamaTimeZone](classWombat_1_1MamaTimeZone.html) instance offset 


### function MamaTimeZone

```cpp
MamaTimeZone()
```


Constructor. 


### function MamaTimeZone

```cpp
MamaTimeZone(
    const char * tz
)
```


Constructor. NULL argument is equivalent to local timezone. 


### function MamaTimeZone

```cpp
MamaTimeZone(
    const MamaTimeZone & copy
)
```


Copy constructor. 


### function ~MamaTimeZone

```cpp
~MamaTimeZone()
```


Destructor. 


### function operator=

```cpp
MamaTimeZone & operator=(
    const MamaTimeZone & rhs
)
```


Assignment operator. 


### function set

```cpp
void set(
    const char * tz
)
```


Assign new timezones to this object. 


### function clear

```cpp
void clear()
```


Clear this object. 


### function tz

```cpp
const char * tz() const
```


Return the time zone string. 


### function offset

```cpp
mama_i32_t offset() const
```


Return the offset from UTC (in seconds). Can be positive or negative, depending upon the direction. 


### function check

```cpp
void check()
```


Check (recalculate) the UTC offset in case it has changed due to daylight savings adjustments. 


### function getCValue

```cpp
inline mamaTimeZone getCValue()
```


### function getCValue

```cpp
inline const mamaTimeZone getCValue() const
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100