---
title: Wombat::MamdaOrderBook
summary: MamdaOrderBook is a class that provides order book functionality, including iterators over price levels and entries within price levels. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBook



[MamdaOrderBook]() is a class that provides order book functionality, including iterators over price levels and entries within price levels. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBook](classWombat_1_1MamdaOrderBook.html#function-mamdaorderbook)**()<br>Construct a new order book object. Contains no price levels upon construction.  |
| void | **[clear](classWombat_1_1MamdaOrderBook.html#function-clear)**()<br>Clear all levels from the order book. Clears both the bid and ask side levels from the order book.  |
| void | **[setSymbol](classWombat_1_1MamdaOrderBook.html#function-setsymbol)**(string symbol) |
| String | **[getSymbol](classWombat_1_1MamdaOrderBook.html#function-getsymbol)**() |
| void | **[setBookTime](classWombat_1_1MamdaOrderBook.html#function-setbooktime)**(DateTime time) |
| DateTime | **[getBookTime](classWombat_1_1MamdaOrderBook.html#function-getbooktime)**() |
| void | **[addLevel](classWombat_1_1MamdaOrderBook.html#function-addlevel)**([MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) level)<br>Add a price level to the order book.  |
| void | **[updateLevel](classWombat_1_1MamdaOrderBook.html#function-updatelevel)**([MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) level)<br>Update an existing level in the order book.  |
| void | **[deleteLevel](classWombat_1_1MamdaOrderBook.html#function-deletelevel)**([MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html) level)<br>Delete an existing price level from the book.  |
| void | **[apply](classWombat_1_1MamdaOrderBook.html#function-apply)**([MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) deltaBook)<br>Apply a delta to this (presumably) full book.  |
| void | **[copy](classWombat_1_1MamdaOrderBook.html#function-copy)**([MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) book)<br>Make a shallow copy of a book.  |
| void | **[deepCopy](classWombat_1_1MamdaOrderBook.html#function-deepcopy)**([MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) book)<br>Make a deep copy of a book.  |
| void | **[setAsDeltaDeleted](classWombat_1_1MamdaOrderBook.html#function-setasdeltadeleted)**([MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) bookToDelete)<br>Set this order book to be a delta that would, when applied, delete all of the fields in the bookToDelete.  |
| void | **[setAsDeltaDifference](classWombat_1_1MamdaOrderBook.html#function-setasdeltadifference)**([MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) lhs, [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) rhs)<br>Set this order book to be a delta that would, when applied, be the difference between to other books.  |
| long | **[getTotalNumLevels](classWombat_1_1MamdaOrderBook.html#function-gettotalnumlevels)**()<br>Get the total number of price levels (both sides of order book).  |
| void | **[assertEqual](classWombat_1_1MamdaOrderBook.html#function-assertequal)**([MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) rhs)<br>Order book equality verification. A [MamdaOrderBookException]() is thrown if the books are not equal, along with the reason for the inequality.  |
| IEnumerable | **[getBidLevels](classWombat_1_1MamdaOrderBook.html#function-getbidlevels)**()<br>Allows an application to iterate over all the bid side price levels in the order book.  |
| IEnumerable | **[getAskLevels](classWombat_1_1MamdaOrderBook.html#function-getasklevels)**()<br>Allows an application to iterate over all the ask side price levels in the order book.  |
| void | **[setIsConsistent](classWombat_1_1MamdaOrderBook.html#function-setisconsistent)**(bool isConsistent)<br>Set whether the order book is in a consistent or an an inconsistent state.  |
| bool | **[getIsConsistent](classWombat_1_1MamdaOrderBook.html#function-getisconsistent)**()<br>Get whether the order book is in a consistent or an an inconsistent state. The orderbook will be marked as inconsistent if a gap is detected by the Listener. The book will be marked consistent again once a full recap for the book has been obtained from the feed.  |
| void | **[dump](classWombat_1_1MamdaOrderBook.html#function-dump)**()<br>Dump the order book to standard output.  |
| void | **[dump](classWombat_1_1MamdaOrderBook.html#function-dump)**(Stream stream)<br>Dumps the order book to the specified stream  |
| void | **[dump](classWombat_1_1MamdaOrderBook.html#function-dump)**(TextWriter writer)<br>Dumps the order book using the specified TextWriter instance  |
| void | **[setStrictChecking](classWombat_1_1MamdaOrderBook.html#function-setstrictchecking)**(bool strict)<br>Enforce strict checking of order book modifications (at the expense of some performance). This setting is passed on to the [MamdaOrderBookPriceLevel]() and [MamdaOrderBookEntry]() classes.  |

## Public Functions Documentation

### function MamdaOrderBook

```csharp
MamdaOrderBook()
```

Construct a new order book object. Contains no price levels upon construction. 

### function clear

```csharp
void clear()
```

Clear all levels from the order book. Clears both the bid and ask side levels from the order book. 

### function setSymbol

```csharp
void setSymbol(
    string symbol
)
```


**Parameters**: 

  * **symbol** The order book subscription symbol.


### function getSymbol

```csharp
String getSymbol()
```


**Return**: The order book subscription symbol.

### function setBookTime

```csharp
void setBookTime(
    DateTime time
)
```


**Parameters**: 

  * **time** The order book update time.


### function getBookTime

```csharp
DateTime getBookTime()
```


**Return**: The order book subscription symbol.

### function addLevel

```csharp
void addLevel(
    MamdaOrderBookPriceLevel level
)
```

Add a price level to the order book. 

**Parameters**: 

  * **level** The price level to add to the book.


### function updateLevel

```csharp
void updateLevel(
    MamdaOrderBookPriceLevel level
)
```

Update an existing level in the order book. 

**Parameters**: 

  * **level** The price level to update.


### function deleteLevel

```csharp
void deleteLevel(
    MamdaOrderBookPriceLevel level
)
```

Delete an existing price level from the book. 

**Parameters**: 

  * **level** The price level in the book to delete.


### function apply

```csharp
void apply(
    MamdaOrderBook deltaBook
)
```

Apply a delta to this (presumably) full book. 

**Parameters**: 

  * **deltaBook** The delta to apply to the order book.


### function copy

```csharp
void copy(
    MamdaOrderBook book
)
```

Make a shallow copy of a book. 

**Parameters**: 

  * **book** The order book to copy.


### function deepCopy

```csharp
void deepCopy(
    MamdaOrderBook book
)
```

Make a deep copy of a book. 

**Parameters**: 

  * **book** The order book to copy.


### function setAsDeltaDeleted

```csharp
void setAsDeltaDeleted(
    MamdaOrderBook bookToDelete
)
```

Set this order book to be a delta that would, when applied, delete all of the fields in the bookToDelete. 

**Parameters**: 

  * **bookToDelete** The book to be deleted.


### function setAsDeltaDifference

```csharp
void setAsDeltaDifference(
    MamdaOrderBook lhs,
    MamdaOrderBook rhs
)
```

Set this order book to be a delta that would, when applied, be the difference between to other books. 

**Parameters**: 

  * **lhs** An order book.
  * **rhs** An order book.


### function getTotalNumLevels

```csharp
long getTotalNumLevels()
```

Get the total number of price levels (both sides of order book). 

**Return**: The total number of level in the order book.

### function assertEqual

```csharp
void assertEqual(
    MamdaOrderBook rhs
)
```

Order book equality verification. A [MamdaOrderBookException]() is thrown if the books are not equal, along with the reason for the inequality. 

**Parameters**: 

  * **rhs** The order book to compare to the current book.


**Exceptions**: 

  * **[MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html)** Throws [MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html) if the two books are not equal.


### function getBidLevels

```csharp
IEnumerable getBidLevels()
```

Allows an application to iterate over all the bid side price levels in the order book. 

**Return**: IEnumerable for the bid side price levels in the order book - the elements are of type [MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html)

### function getAskLevels

```csharp
IEnumerable getAskLevels()
```

Allows an application to iterate over all the ask side price levels in the order book. 

**Return**: IEnumerable for the ask side price levels in the order book - the elements are of type [MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html)

### function setIsConsistent

```csharp
void setIsConsistent(
    bool isConsistent
)
```

Set whether the order book is in a consistent or an an inconsistent state. 

**Parameters**: 

  * **isConsistent** Whether the book is consistent.


### function getIsConsistent

```csharp
bool getIsConsistent()
```

Get whether the order book is in a consistent or an an inconsistent state. The orderbook will be marked as inconsistent if a gap is detected by the Listener. The book will be marked consistent again once a full recap for the book has been obtained from the feed. 

**Return**: Whether the book is in a consistent state.

### function dump

```csharp
void dump()
```

Dump the order book to standard output. 

### function dump

```csharp
void dump(
    Stream stream
)
```

Dumps the order book to the specified stream 

**Parameters**: 

  * **stream** The stream on which the order book will be dumped


### function dump

```csharp
void dump(
    TextWriter writer
)
```

Dumps the order book using the specified TextWriter instance 

**Parameters**: 

  * **writer** 


### function setStrictChecking

```csharp
static void setStrictChecking(
    bool strict
)
```

Enforce strict checking of order book modifications (at the expense of some performance). This setting is passed on to the [MamdaOrderBookPriceLevel]() and [MamdaOrderBookEntry]() classes. 

**Parameters**: 

  * **strict** 


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100