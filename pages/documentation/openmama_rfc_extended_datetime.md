---
title: RFC for Extended MAMA Date Time
sidebar: openmama_sidebar
permalink: openmama_rfc_extended_datetime.html
folder: openmama
toc: true
---


## Definition of the Problem

The mamaDateTime API is limited to representing data ranges between 1970 and 2106 due to its underlying data
structure and several of its methods.

The portion of the mamaDateTime data structure which represents seconds is used to calculate dates and stores the
seconds elapsed since the Unix epoch as an unsigned 32 bit integer. As this value is unsigned, it is incapable
of representing dates before 1970 and as the value is 32-bit, it has a maximum value of 4,294,967,295 which
translates to early in 2106.

There are also several mamaDateTime methods which use unsigned 32 bit integers in their interface and therefore
suffer from the same range limitation.

The most prevalent use case is needing to representing bonds which may have been issued before 1970 or which
may not mature until after 2106.

## High Level Requirements

There are several requirements which any solution being considered must satisfy:

* The mamaDateTime format must be extended to cover at least a millenium before and after the Unix Epoch
* All currently supported OpenMAMA languages should support the extended range (i.e. C, C++, C# and Java)
* There is no appetite to make this feature an OpenMAMA 7 exclusive, so the interface with OpenMAMA 6 applications
  must remain unbroken
* No significant performance overhead should be introduced by these changes
* All existing unit tests must continue to pass
* New unit tests must be written to verify the new extended range
* Changes must not mandate a change in payload's underlying wire format

## Design Approaches Considered

One common theme for each of the design approaches considered below is the underlying data format used
by mamaDateTime. Traditionally this has been an unsigned 64 bit integer, but all the solutions outlined
below are based on the premise that this data structure will be replaced with a struct rather than try
and hack the existing unsigned 64-bit integer to support extended data. Further details on the new data
structure is provided [later in the document](#internal-data-structure-changes).

### Create Extended Methods

This involves considering every MAMA datetime method available today, and if the method does not currently 
supported extended ranges (due to an insufficient function prototype or method signature), create new methods
which do.

This involves adding the following methods in C:

* `mamaDateTime_setEpochTimeEx`
* `mamaDateTime_setEpochTimeMillisecondsEx`
* `mamaDateTime_setEpochTimeMicrosecondsEx`
* `mamaDateTime_setWithHintsEx`
* `mamaDateTime_setWithPrecisionAndTz`
* `mamaDateTime_setTimeEx`
* `mamaDateTime_setTimeWithPrecisionAndTz`
* `mamaDateTime_getEpochTimeEx`
* `mamaDateTime_getEpochTimeMicrosecondsEx`
* `mamaDateTime_getEpochTimeMicrosecondsWithTzEx`
* `mamaDateTime_getEpochTimeMillisecondsEx`
* `mamaDateTime_getEpochTimeMillisecondsWithTzEx`
* `mamaDateTime_getWithHintsEx`

And the following methods in C++:

* `MamaDateTime::setEpochTime`
* `MamaDateTime::setEpochTimeMilliseconds`
* `MamaDateTime::setEpochTimeMicroseconds`
* `MamaDateTime::setWithHints`
* `MamaDateTime::set`
* `MamaDateTime::setTime`
* `MamaDateTime::getEpochTimeMicroseconds`

No other changes are required at C# or Java layer on the interface side.

#### Pros for creating extended methods

* Ensures there is an extended method available for every conceivable method

#### Cons for creating extended methods

* May be implementing extended methods for functions which are not used and may never make it into MAMA 7 (i.e. throwaway development)
* Makes the API look cluttered
* Large effort involved

### Extend only the epoch based methods

This would involve adding extended methods but only for two methods so that there is **some way** available to
read and write extended date times.

This means adding the following methods in C:

* `mamaDateTime_setEpochTimeEx`
* `mamaDateTime_getEpochTimeEx`

And adding the following methods in C++:

* `MamaDateTime::setEpochTimeMicroseconds`
* `MamaDateTime::getEpochTimeMicroseconds`

No other changes are required at C# or Java layer on the interface side.

#### Pros for extending the epoch based methods

* Ensures that it's possible to set time based on epoch regardless of the whether the application is 32 or 64 bit

#### Cons for extending the epoch based methods

* Significant effort required
* Not every possible method has an extended equivalent

### Adding timespec methods

_Note this was formerly related to using timeval, until [we spotted some problems on windows](https://lists.openmama.org/pipermail/openmama-dev/2017/001973.html)_

A method already exists to allow a timespec struct to be populated from a mamaDateTime object (`mamaDateTime_getStructTimeSpec`.
This approach involves adding a corresponding "setter" for this method, so that it can be used instead. 

This means adding the following methods in C:

* `mamaDateTime_setFromStructTimeSpec`

No other changes are required at C# or Java layer on the interface side.

#### Pros for adding timespec methods

* Lowest effort required
* Builds on a standard POSIX method
* Provides native integration with most POSIX functions which expect timespec struct pointers in their interfaces

#### Cons for adding timespec methods

* Not every possible method has an extended equivalent
* Alternative methods would need to be used for 32-bit platforms where `struct timespec` typically uses a 32 bit signed int
  to represent seconds since epoch.
* Not natively available on older versions of MSVC.

## Recommended Design Approach

At the interface level, [adding timespec methods](#adding-timespec-methods) is the most straight forward, in that it simply involves the addition
of a single new interface. It is also the method with the lowest effort involved and the method which conforms closest with POSIX standard
conventions.

In this model, the existing `mamaDateTime` accessor methods would not be changed. Those which are capable at present of representing wider date
ranges will continue to do so, while those with a more limited range will continue to provide only values within that range. If an accessor is
called against a `mamaDateTime` structure which cannot be represented by that accessor, OpenMAMA will report an error condition.

C++ will be extended to also add support for a `timespec` accessor as a parallel to the underlying C addition. Java's `setTime` and
`set` methods will need enhancement to support use of `long` second parameters, while enhancements to the underlying JNI interface
will be required to facilitate the propagation of extended range values. C# will similarly require some enhancements to support the
extended format internally, though the exposed C# DateTime format should already support larger values. 

### Changes required for C API

As all of the other language bindings are built on top of the C layer, this area will be documented the most heavily.

#### Code changes

Each of the current C level accessors will need to be rewritten to parse the updated structure in order to return values consistent
with the current implementation as well as extended data types.

#### Interface Changes

At the interface level, [adding timespec methods](#adding-timespec-methods) simply involves the addition of a two new functions,
`mamaDateTime_setFromStructTimeSpec` and `mamaDateTime_getFromStructTimeSpec`. The function prototypes will look like this:

```
MAMAExpDLL
extern mama_status
mamaDateTime_setFromStructTimeSpec(const mamaDateTime dateTime,
                                   struct timespec*   inputTimeSpec);

MAMAExpDLL
extern mama_status
mamaDateTime_getStructTimeSpec(const mamaDateTime dateTime,
                               struct timespec*   result);
```


This will allow client applications to access extended time range values via the POSIX standard `timespec` structure. On each of OpenMAMA's supported
platforms, `timespec` uses a `time_t` for storing second values, and a second `signed long` is used for microseconds. As such it is usually capable of
representing date ranges far in excess of those required by this RFC.

However, due to the size of `time_t` on 32 bit systems, client applications
on those systems will not be able to retrieve values within the extended date range via epoch-based methods. They can still use other non-epoch
based methods though such as `mamaDateTime_getStructTm`, `mamaDateTime_getDateAsString`, `mamaDateTime_getMonth` etc. without being impacted.

#### Internal Data Structure Changes

Internally the structure utilized by OpenMAMA for the storage of Date Time data will be modified from the existing 64 bit unsigned integer,
to a new extended structure which is capable of handling the extended time range. The format of this structure will be completely abstracted
by the accessor methods, and therefore the changes should be invisible to existing client applications.

The current `mamaDateTime` underlying data structure is a unsigned 64 bit int which is split out as follows: 

|Data Content |Size  |Comments                                                                                                                                  |
|-------------|------|------------------------------------------------------------------------------------------------------------------------------------------|
|Seconds      |32-bit|Needs to be bigger to support times beyond 2106 and also has no ability to represent times before 1970.                                   |
|Microseconds |20-bit|Maximum value is 1,048,575 - if nanosecond support is ever required (planning ahead), this would be too small (you'd need another 10 bits)|
|Precision    |4-bit |Used to store decimal precision.                                                                                                          |
|Hints        |4-bit |Used to store information on whether or not to display as date / time (one of these bits going spare too, could expand to 2 with changes) |
|Spare (idle) |4-bit |Could be 6 if you count the values spare in hints                                                                                         |

It is usually heap-allocated by `mamaDateTime_create()`, but because it's typedef'd to a `mama_u64_t*`, bridges tend to use direct access
to grab a serialized version of the data structure.

```
typedef   mama_u64_t*   mamaDateTime;
```

Using a `mama_u64_t` for datetime always felt like we were going to unnecessary lengths to treat the MAMA Date Time object like a serialized format,
when realistically it's a mapping format which acts as an intermediary between the payload bridge and MAMA which tends to end up dealing
with mediating variables anyway. You would also need some pretty creative bit shifting to make use of those spare bits and it would only
realistically buy us some short term time until nanosecond or TZ support is required. As a further side effect, it's very convoluted to
deal with which makes it difficult to debug.

Therefore the existing data structure is not being considered for this solution. 

To make the new data structure easier to maintain, the following members are proposed:

|Data Content|Data Type           |Comments                                                                                              |
|------------|--------------------|------------------------------------------------------------------------------------------------------|
|Seconds     |int64 (yes - signed)|Slightly wasteful if you're trying to make every bit earn its keep, but easy to work with and will support times prior to 1970. Note that C11 timespec struct uses time_t which I would have preferred but looks like it is only guaranteed to be 64 bit on 64 bit platforms.|
|Nanoseconds |long int            |Note nanoseconds as a whole number is native to C11 timespec which uses a long int to store nanoseconds, so suggesting that data format here|
|Precision   |uint8               |Again, some bits going spare, but easy to work with.                                                  |
|Hints       |uint8               |Again, some bits going spare, but easy to work with.                                                  |

So total data size is 112 bytes. Note that the format is reasonably close to `timespec`, and when all supported systems are 64-bit, we may modify this to simply
use a `timespec` as a member.

The **mamaDateTime object will also be made opaque** to avoid the temptation to attempt direct access to the underlying data type:

```
typedef   void*   mamaDateTime;
```

#### Unit Testing Required

There are currently over 100 unit tests around MAMA Date Time. As each method will effectively be getting re-written to use the new data structure, each function
changed will need to be accompanied with a corresponding set of unit test changes to cover:

* Existing functional tests
* Extended functional tests
* Boundary conditions

#### Integration Testing Required

The methods concerned here are very self contained and should be covered entirely by unit tests. As a result of this, nothing beyond standard
regression testing should be required. 

### Changes required for C++ API

#### Interface Changes

A single new method is required here - `MamaDateTime::setFromStructTimeSpec`. Everything else should remain unchanged in the eyes of the application. The method signature
will be:

```
setFromStructTimeSpec (struct timespec& value);
```

#### Internal Data Structure Changes

As this is built on top of the C layer, no additional changes are required here.

#### Unit Testing Required

As each method will effectively be getting re-written to use the new data structure, each function
changed will need to be accompanied with a corresponding set of unit test changes to cover:

* Existing functional tests
* Extended functional tests
* Boundary conditions

#### Integration Testing Required

The methods concerned here are very self contained and should be covered entirely by unit tests. As a result of this, nothing beyond standard
regression testing should be required. 

### Changes required for C# API

#### Code changes

Code changes will be required in the native layer to integrate with the new C methods for extended ranges.

#### Interface Changes

No method changes are required as the interface uses standard C# DateTime format which already supports extended ranges.

#### Internal Data Structure Changes

As this is built on top of the C layer, no additional changes are required here.

#### Unit Testing Required

Each function will need to be accompanied with a corresponding set of unit test changes to cover:

* Existing functional tests
* Extended functional tests
* Boundary conditions

### Changes required for Java API

#### Code changes

Code changes will be required in the native layer to integrate with the new C methods for extended ranges.

#### Interface Changes

`MamaDateTime.setTime` and `MamaDateTime.set` will require a new signature to allow for seconds as a long. Otherwise no
other changes are required.

#### Internal Data Structure Changes

As this is built on top of the C layer, no additional changes are required here.

#### Unit Testing Required

Each function will need to be accompanied with a corresponding set of unit test changes to cover:

* Existing functional tests
* Extended functional tests
* Boundary conditions

#### Integration Testing Required

The methods concerned here are very self contained and should be covered entirely by unit tests. As a result of this, nothing beyond standard
regression testing should be required. 

## Impact of Resulting Changes

### Impact to Application Users

New methods available as documented in [the summary details](http://localhost:4000/openmama_rfc_extended_datetime.html#unit-testing-required)
for users who require access to the extended datetime format.

### Impact to Bridge Developers

As this change will effectively break the bridge interface for any payload bridges which use direct access to the underlying
mama_u64_t data type. This means that the minor version in OpenMAMA will need to change to reflect this as per
[our versioning standard](https://github.com/OpenMAMA/OpenMAMA/wiki/OpenMAMA-Versioning). 

The payload bridge will be responsible for ensuring that:

1. It treats mamaDateTime as an opaque data structure which it will only manipulate through accessor functions
2. On 32-bit platforms, the use of `mamaDateTime_setFromStructTimeSpec` is avoided in favour of non-epoch based methods such as `mamaDateTime_setDate` and
   `mamaDateTime_setTime`. This will ensure that no gibberish time fields get generated
3. The wire format is backwards compatible for the time being, possibly using some hints that Vela provided to Solace on 19-Oct-2016
4. Ensuring the chosen encoding and decoding methods work on 32-bit platforms

#### Changes bridge developers should implement

After the upgrade, bridge developers will need to stop doing shortcut hacks like this:

```
void setFieldValue (payloadlibField field, mamaDateTime value)
{
    /* dereferencing mamaDateTime to access underlying u64 */
    payloadlib_setWireFormatPtr (field, *value);
}
```

And instead do something more like this to honor the opacity of `mamaDateTime` as many payload bridges already do today:

```
void setFieldValue (payloadlibField field, mamaDateTime value)
{
    payloadlib_setWireFormatDateStamp (field, value.tv_sec, value.tv_usec);
}
```

(note the same applies to all mamaDateTime methods invoked from the bridge).


### Impact to Internal API Components

No other internal API components are impacted by these changes.
