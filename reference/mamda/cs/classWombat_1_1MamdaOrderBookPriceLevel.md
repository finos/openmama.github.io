---
title: Wombat::MamdaOrderBookPriceLevel
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookPriceLevel





Inherits from IEnumerable

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum class sbyte | **[Actions](classWombat_1_1MamdaOrderBookPriceLevel.html#enum-actions)** { Add = (sbyte)'A', Update = (sbyte)'U', Delete = (sbyte)'D', Unknown = (sbyte)'Z'}<br>An enumeration for book price level actions. Price level actions differ from entry actions because, for example, a price level message with [Actions.Add]() may consist of entries with [Actions.Add](), [Actions.Update]() or [Actions.Delete]().  |
| enum class sbyte | **[Sides](classWombat_1_1MamdaOrderBookPriceLevel.html#enum-sides)** { Bid = (sbyte)'B', Ask = (sbyte)'A', Unknown = (sbyte)'U'} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html#function-mamdaorderbookpricelevel)**()<br>Default constructor.  |
| | **[MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html#function-mamdaorderbookpricelevel)**([MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) copy)<br>Construct a price level object which is a shallow copy of the original.  |
| void | **[copy](classWombat_1_1MamdaOrderBookPriceLevel.html#function-copy)**([MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) copy)<br>Copy a price level object which is an exact and deep copy of the original.  |
| void | **[setPrice](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setprice)**(MamaPrice price) |
| void | **[setSize](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setsize)**(long size) |
| void | **[setSizeChange](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setsizechange)**(long size) |
| void | **[setNumEntries](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setnumentries)**(int numEntries) |
| void | **[setSide](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setside)**([Sides](classWombat_1_1MamdaOrderBookPriceLevel.html#enum-sides) side) |
| void | **[setAction](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setaction)**([Actions](classWombat_1_1MamdaOrderBookPriceLevel.html#enum-actions) action) |
| void | **[setTime](classWombat_1_1MamdaOrderBookPriceLevel.html#function-settime)**(DateTime time) |
| void | **[setDetails](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setdetails)**([MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) level)<br>Take the details from  |
| void | **[addEntry](classWombat_1_1MamdaOrderBookPriceLevel.html#function-addentry)**([MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) entry)<br>Add a new order book entry to the price level.  |
| void | **[updateEntry](classWombat_1_1MamdaOrderBookPriceLevel.html#function-updateentry)**([MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) entry)<br>Update the details of an existing entry in the level.  |
| void | **[removeEntry](classWombat_1_1MamdaOrderBookPriceLevel.html#function-removeentry)**([MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) entry)<br>Remove an order book entry from the price level. [MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) |
| IEnumerator | **[GetEnumerator](classWombat_1_1MamdaOrderBookPriceLevel.html#function-getenumerator)**()<br>Returns a  |
| void | **[checkNotExist](classWombat_1_1MamdaOrderBookPriceLevel.html#function-checknotexist)**([MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) entry)<br>If the provided order book entry exists in the price level a  |
| void | **[markAllDeleted](classWombat_1_1MamdaOrderBookPriceLevel.html#function-markalldeleted)**()<br>Mark everything in this price level as deleted, including entries.  |
| void | **[setAsDifference](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setasdifference)**([MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) lhs, [MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) rhs) |
| MamaPrice | **[getPrice](classWombat_1_1MamdaOrderBookPriceLevel.html#function-getprice)**()<br>Return the price for this level.  |
| long | **[getSize](classWombat_1_1MamdaOrderBookPriceLevel.html#function-getsize)**()<br>Return the total size (across all entries) for this level.  |
| long | **[getSizeChange](classWombat_1_1MamdaOrderBookPriceLevel.html#function-getsizechange)**()<br>Return the size change for this (presumably delta) level. This attribute is only of interest for delta order books. For full order books, this field will be equal to the size of the price level.  |
| int | **[getNumEntries](classWombat_1_1MamdaOrderBookPriceLevel.html#function-getnumentries)**()<br>Return the actual number of entries for this level. The actual number of entries may not equate to the number of entries that can be iterated over if: (a) the feed does not provide the actual entries, or (b) the price level is just a delta.  |
| [Sides](classWombat_1_1MamdaOrderBookPriceLevel.html#enum-sides) | **[getSide](classWombat_1_1MamdaOrderBookPriceLevel.html#function-getside)**()<br>Return the side (bid/ask) of the book for this level.  |
| [Actions](classWombat_1_1MamdaOrderBookPriceLevel.html#enum-actions) | **[getAction](classWombat_1_1MamdaOrderBookPriceLevel.html#function-getaction)**()<br>Return the action for this price level. All price levels for a full book are marked with mActionADD.  |
| bool | **[hasTime](classWombat_1_1MamdaOrderBookPriceLevel.html#function-hastime)**() |
| DateTime | **[getTime](classWombat_1_1MamdaOrderBookPriceLevel.html#function-gettime)**()<br>Return the time stamp for when the price level was last updated.  |
| void | **[assertEqual](classWombat_1_1MamdaOrderBookPriceLevel.html#function-assertequal)**([MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) rhs)<br>Order book price level equality verification. A is thrown if the price levels are not equal, along with the reason for the inequality.  |
| void | **[setStrictChecking](classWombat_1_1MamdaOrderBookPriceLevel.html#function-setstrictchecking)**(bool strict)<br>Enforce strict checking of order book modifications (at the expense of some performance). This setting is automatically updated by [MamdaOrderBook.setStrictChecking()](classWombat_1_1MamdaOrderBook.html#function-setstrictchecking).  |

## Public Types Documentation

### enum Actions

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Add | (sbyte)'A'| A new price level   |
| Update | (sbyte)'U'| Updated price level.   |
| Delete | (sbyte)'D'| Deleted price level.   |
| Unknown | (sbyte)'Z'| Unknown action (error).   |



An enumeration for book price level actions. Price level actions differ from entry actions because, for example, a price level message with [Actions.Add]() may consist of entries with [Actions.Add](), [Actions.Update]() or [Actions.Delete](). 

### enum Sides

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Bid | (sbyte)'B'| Bid (buy) side.   |
| Ask | (sbyte)'A'| Ask (sell) side.   |
| Unknown | (sbyte)'U'| Unknown side (error).   |




## Public Functions Documentation

### function MamdaOrderBookPriceLevel

```csharp
MamdaOrderBookPriceLevel()
```

Default constructor. 

### function MamdaOrderBookPriceLevel

```csharp
MamdaOrderBookPriceLevel(
    MamdaOrderBookPriceLevel copy
)
```

Construct a price level object which is a shallow copy of the original. 

**Parameters**: 

  * **copy** The [MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) to copy.


### function copy

```csharp
void copy(
    MamdaOrderBookPriceLevel copy
)
```

Copy a price level object which is an exact and deep copy of the original. 

**Parameters**: 

  * **copy** The [MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) to copy.


### function setPrice

```csharp
void setPrice(
    MamaPrice price
)
```


**Parameters**: 

  * **price** 


### function setSize

```csharp
void setSize(
    long size
)
```


**Parameters**: 

  * **size** 


### function setSizeChange

```csharp
void setSizeChange(
    long size
)
```


**Parameters**: 

  * **size** 


### function setNumEntries

```csharp
void setNumEntries(
    int numEntries
)
```


**Parameters**: 

  * **numEntries** 


### function setSide

```csharp
void setSide(
    Sides side
)
```


**Parameters**: 

  * **side** 


### function setAction

```csharp
void setAction(
    Actions action
)
```


**Parameters**: 

  * **action** 


### function setTime

```csharp
void setTime(
    DateTime time
)
```


**Parameters**: 

  * **time** 


### function setDetails

```csharp
void setDetails(
    MamdaOrderBookPriceLevel level
)
```

Take the details from 

**Parameters**: 

  * **level** The price level object from which the details are being obtained.


`level`code> and apply them to this level This does not update entries within the level, only information pertaining to the level itself. It is intended that this method should not be used externally to the API.


### function addEntry

```csharp
void addEntry(
    MamdaOrderBookEntry entry
)
```

Add a new order book entry to the price level. 

**Parameters**: 

  * **entry** The new entry to be added to the level.


### function updateEntry

```csharp
void updateEntry(
    MamdaOrderBookEntry entry
)
```

Update the details of an existing entry in the level. 

**Parameters**: 

  * **entry** An instance of 

```cpp
MamdaOrderBookEntry
```

 with the new details for the entry in the level.


### function removeEntry

```csharp
void removeEntry(
    MamdaOrderBookEntry entry
)
```

Remove an order book entry from the price level. [MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html)

**Parameters**: 

  * **entry** The entry which is to be removed from the price level.


### function GetEnumerator

```csharp
IEnumerator GetEnumerator()
```

Returns a 

**Return**: The enumerator for the price level entries

`System.Collections.IEnumerator` for all entries within this level. Price Level entries are represented by the `[MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html)` class.


### function checkNotExist

```csharp
void checkNotExist(
    MamdaOrderBookEntry entry
)
```

If the provided order book entry exists in the price level a 

**Parameters**: 

  * **entry** The entry whose presence in the level is being determined.


**Exceptions**: 

  * **[MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html)** Throws [MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html) if the entry is found in the price


`[MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html)` exception is thrown. Otherwise the method simply returns.


### function markAllDeleted

```csharp
void markAllDeleted()
```

Mark everything in this price level as deleted, including entries. 

### function setAsDifference

```csharp
void setAsDifference(
    MamdaOrderBookPriceLevel lhs,
    MamdaOrderBookPriceLevel rhs
)
```


**Parameters**: 

  * **lhs** 
  * **rhs** 


### function getPrice

```csharp
MamaPrice getPrice()
```

Return the price for this level. 

**Return**: The price for this level.

### function getSize

```csharp
long getSize()
```

Return the total size (across all entries) for this level. 

**Return**: The total size for this level.

### function getSizeChange

```csharp
long getSizeChange()
```

Return the size change for this (presumably delta) level. This attribute is only of interest for delta order books. For full order books, this field will be equal to the size of the price level. 

**Return**: The changed size for this level.

### function getNumEntries

```csharp
int getNumEntries()
```

Return the actual number of entries for this level. The actual number of entries may not equate to the number of entries that can be iterated over if: (a) the feed does not provide the actual entries, or (b) the price level is just a delta. 

**Return**: The actual number of entries for this level.

### function getSide

```csharp
Sides getSide()
```

Return the side (bid/ask) of the book for this level. 

**Return**: The side of the book for this level.

### function getAction

```csharp
Actions getAction()
```

Return the action for this price level. All price levels for a full book are marked with mActionADD. 

**Return**: The action for this level.

### function hasTime

```csharp
bool hasTime()
```


**Return**: 

### function getTime

```csharp
DateTime getTime()
```

Return the time stamp for when the price level was last updated. 

**Return**: The time stamp for when the price level was last updated.

### function assertEqual

```csharp
void assertEqual(
    MamdaOrderBookPriceLevel rhs
)
```

Order book price level equality verification. A is thrown if the price levels are not equal, along with the reason for the inequality. 

**Parameters**: 

  * **rhs** 


**Exceptions**: 

  * **[MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html)** [MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html) is thrown if the price levels are


### function setStrictChecking

```csharp
static void setStrictChecking(
    bool strict
)
```

Enforce strict checking of order book modifications (at the expense of some performance). This setting is automatically updated by [MamdaOrderBook.setStrictChecking()](classWombat_1_1MamdaOrderBook.html#function-setstrictchecking). 

**Parameters**: 

  * **strict** 


-------------------------------

Updated on 2023-03-31 at 15:30:17 +0100