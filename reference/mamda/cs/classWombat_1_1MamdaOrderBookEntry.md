---
title: Wombat::MamdaOrderBookEntry
summary: MamdaOrderBookEntry is a class that provides/implements order book functionality. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookEntry



[MamdaOrderBookEntry]() is a class that provides/implements order book functionality. 

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum class sbyte | **[Actions](classWombat_1_1MamdaOrderBookEntry.html#enum-actions)** { Add = (sbyte)'A', Update = (sbyte)'U', Delete = (sbyte)'D', Unknown = (sbyte)'Z'}<br>An enumeration for book entry actions. Price level actions differ from entry actions because, for example, a price level message with [Actions.Add]() may consist of entries with [Actions.Add](), [Actions.Update]() or [Actions.Delete]().  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html#function-mamdaorderbookentry)**() |
| | **[MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html#function-mamdaorderbookentry)**([MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) copy)<br>Copy an order book entry object which is a deep copy of the original.  |
| void | **[copy](classWombat_1_1MamdaOrderBookEntry.html#function-copy)**([MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) copy)<br>Copy an order book entry object which is an exact and deep copy of the original.  |
| void | **[setId](classWombat_1_1MamdaOrderBookEntry.html#function-setid)**(string id) |
| void | **[setSize](classWombat_1_1MamdaOrderBookEntry.html#function-setsize)**(long size) |
| void | **[setAction](classWombat_1_1MamdaOrderBookEntry.html#function-setaction)**([Actions](classWombat_1_1MamdaOrderBookEntry.html#enum-actions) action) |
| void | **[setTime](classWombat_1_1MamdaOrderBookEntry.html#function-settime)**(DateTime time) |
| void | **[setDetails](classWombat_1_1MamdaOrderBookEntry.html#function-setdetails)**([MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) copy) |
| string | **[getId](classWombat_1_1MamdaOrderBookEntry.html#function-getid)**()<br>If supported, Order book entry ID (order ID, participant ID, etc.)  |
| long | **[getSize](classWombat_1_1MamdaOrderBookEntry.html#function-getsize)**()<br>The size of the order entry.  |
| [Actions](classWombat_1_1MamdaOrderBookEntry.html#enum-actions) | **[getAction](classWombat_1_1MamdaOrderBookEntry.html#function-getaction)**()<br>Whether to ADD, UPDATE or DELETE the entry.  |
| DateTime | **[getTime](classWombat_1_1MamdaOrderBookEntry.html#function-gettime)**()<br>Time of order book entry update.  |
| bool | **[hasTime](classWombat_1_1MamdaOrderBookEntry.html#function-hastime)**()<br>Returns whether the time part of this entry was set to a valid date  |
| void | **[assertEqual](classWombat_1_1MamdaOrderBookEntry.html#function-assertequal)**([MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) rhs)<br>Order book entry equality verification. A [MamdaOrderBookException]() is thrown if the entries within a price level are not equal, along with the reason for the inequality.  |
| bool | **[equalId](classWombat_1_1MamdaOrderBookEntry.html#function-equalid)**(string id)<br>Whether the id of the entry is equal to the id passed to the method.  |
| void | **[setStrictChecking](classWombat_1_1MamdaOrderBookEntry.html#function-setstrictchecking)**(bool strict)<br>Enforce strict checking of order book modifications (at the expense of some performance). This setting is automatically updated by [MamdaOrderBook.setStrictChecking()](classWombat_1_1MamdaOrderBook.html#function-setstrictchecking).  |

## Public Types Documentation

### enum Actions

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Add | (sbyte)'A'| A new entry.   |
| Update | (sbyte)'U'| An updated entry.   |
| Delete | (sbyte)'D'| A deleted entry.   |
| Unknown | (sbyte)'Z'| Unknown action (error).   |



An enumeration for book entry actions. Price level actions differ from entry actions because, for example, a price level message with [Actions.Add]() may consist of entries with [Actions.Add](), [Actions.Update]() or [Actions.Delete](). 

## Public Functions Documentation

### function MamdaOrderBookEntry

```csharp
MamdaOrderBookEntry()
```


### function MamdaOrderBookEntry

```csharp
MamdaOrderBookEntry(
    MamdaOrderBookEntry copy
)
```

Copy an order book entry object which is a deep copy of the original. 

**Parameters**: 

  * **copy** The [MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) to copy.


### function copy

```csharp
void copy(
    MamdaOrderBookEntry copy
)
```

Copy an order book entry object which is an exact and deep copy of the original. 

**Parameters**: 

  * **copy** The [MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html) to deep copy.


### function setId

```csharp
void setId(
    string id
)
```


**Parameters**: 

  * **id** 


### function setSize

```csharp
void setSize(
    long size
)
```


**Parameters**: 

  * **size** 


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
    MamdaOrderBookEntry copy
)
```


**Parameters**: 

  * **copy** 


### function getId

```csharp
string getId()
```

If supported, Order book entry ID (order ID, participant ID, etc.) 

**Return**: 

### function getSize

```csharp
long getSize()
```

The size of the order entry. 

**Return**: 

### function getAction

```csharp
Actions getAction()
```

Whether to ADD, UPDATE or DELETE the entry. 

**Return**: The action.

### function getTime

```csharp
DateTime getTime()
```

Time of order book entry update. 

**Return**: 

### function hasTime

```csharp
bool hasTime()
```

Returns whether the time part of this entry was set to a valid date 

**Return**: 

### function assertEqual

```csharp
void assertEqual(
    MamdaOrderBookEntry rhs
)
```

Order book entry equality verification. A [MamdaOrderBookException]() is thrown if the entries within a price level are not equal, along with the reason for the inequality. 

**Parameters**: 

  * **rhs** 


**Exceptions**: 

  * **[MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html)** [MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html)


### function equalId

```csharp
bool equalId(
    string id
)
```

Whether the id of the entry is equal to the id passed to the method. 

**Parameters**: 

  * **id** The id to compare to the order entry id.


**Return**: Whether the id is the same as the order id.

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