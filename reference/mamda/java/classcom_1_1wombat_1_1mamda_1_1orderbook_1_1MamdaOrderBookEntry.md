---
title: com::wombat::mamda::orderbook::MamdaOrderBookEntry
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookEntry



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-mamdaorderbookentry)**() |
| | **[MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-mamdaorderbookentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) copy) |
| | **[MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-mamdaorderbookentry)**(String entryId, double entrySize, char action, MamaDateTime eventTime, MamaSourceDerivative source) |
| void | **[copy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-copy)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) copy) |
| void | **[setId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setid)**(String id) |
| void | **[setSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setsize)**(double size) |
| void | **[setAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setaction)**(char action) |
| void | **[setReason](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setreason)**(char reason) |
| void | **[setTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-settime)**(MamaDateTime time) |
| void | **[setDetails](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setdetails)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) copy) |
| void | **[setDetails](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setdetails)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) copy) |
| String | **[getId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getid)**() |
| String | **[getUniqueId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getuniqueid)**() |
| double | **[getSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getsize)**() |
| char | **[getAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getaction)**() |
| char | **[getReason](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getreason)**() |
| MamaDateTime | **[getTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-gettime)**() |
| void | **[setStatus](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setstatus)**(int value) |
| int | **[getStatus](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getstatus)**() |
| double | **[getPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getprice)**() |
| char | **[getSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getside)**() |
| int | **[getPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getposition)**(int maxPos) |
| long | **[getEntryPositionInPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getentrypositioninpricelevel)**() |
| int | **[hashCode](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-hashcode)**() |
| boolean | **[equals](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-equals)**(Object obj) |
| void | **[setPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setpricelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) priceLevel) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getpricelevel)**() |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getorderbook)**() |
| void | **[setManager](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setmanager)**([MamdaOrderBookEntryManager](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html) manager) |
| [MamdaOrderBookEntryManager](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html) | **[getManager](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getmanager)**() |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getsymbol)**() |
| void | **[setSourceDerivative](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setsourcederivative)**(MamaSourceDerivative source) |
| MamaSourceDerivative | **[getSourceDerivative](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getsourcederivative)**() |
| MamaSource | **[getSource](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getsource)**() |
| boolean | **[getCheckSourceState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getchecksourcestate)**() |
| void | **[setQuality](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setquality)**(short quality) |
| short | **[getQuality](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getquality)**() |
| boolean | **[isVisible](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-isvisible)**() |
| void | **[setClosure](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setclosure)**(Object closure) |
| Object | **[getClosure](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-getclosure)**() |
| void | **[assertEqual](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-assertequal)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) rhs) |
| boolean | **[equalId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-equalid)**(String id) |
| void | **[setUniqueId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setuniqueid)**(String uniqueId) |
| void | **[setStrictChecking](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#function-setstrictchecking)**(boolean strict) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final char | **[ACTION_ADD](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#variable-action-add)**  |
| final char | **[ACTION_UPDATE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#variable-action-update)**  |
| final char | **[ACTION_DELETE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#variable-action-delete)**  |
| final char | **[ACTION_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html#variable-action-unknown)**  |

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookEntry;
```


[MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) is a class that provides implements order book functionality. 

## Public Functions Documentation

### function MamdaOrderBookEntry

```java
inline MamdaOrderBookEntry()
```


### function MamdaOrderBookEntry

```java
inline MamdaOrderBookEntry(
    MamdaOrderBookEntry copy
)
```


**Parameters**: 

  * **copy** The [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) to copy. 


Copy an order book entry object which is a shallow copy of the original.


### function MamdaOrderBookEntry

```java
inline MamdaOrderBookEntry(
    String entryId,
    double entrySize,
    char action,
    MamaDateTime eventTime,
    MamaSourceDerivative source
)
```


### function copy

```java
inline void copy(
    MamdaOrderBookEntry copy
)
```


**Parameters**: 

  * **copy** The [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) to copy. 


Copy an order book entry object which is an exact and deep copy of the original.


### function setId

```java
inline void setId(
    String id
)
```


### function setSize

```java
inline void setSize(
    double size
)
```


### function setAction

```java
inline void setAction(
    char action
)
```


### function setReason

```java
inline void setReason(
    char reason
)
```


### function setTime

```java
inline void setTime(
    MamaDateTime time
)
```


### function setDetails

```java
inline void setDetails(
    MamdaOrderBookEntry copy
)
```


### function setDetails

```java
inline void setDetails(
    MamdaBookAtomicLevelEntry copy
)
```


### function getId

```java
inline String getId()
```


**Return**: the id. 

If supported, Order book entry ID (order ID, participant ID, etc.) 


### function getUniqueId

```java
inline String getUniqueId()
```


**Return**: The unique entry id 

If supported, Order book entry unique ID (order ID, participant ID, etc.). The unique ID should be unique throughout the order book. If no explicit unique ID has been set, then it assumed that the basic ID is unique and that is returned.


### function getSize

```java
inline double getSize()
```


**Return**: the size. 

The size of the order entry. 


### function getAction

```java
inline char getAction()
```


**Return**: char The action. 

Whether to ADD, UPDATE or DELETE the entry.


### function getReason

```java
inline char getReason()
```


**Return**: the reason 

The reason for the order entry. 


### function getTime

```java
inline MamaDateTime getTime()
```


**Return**: the time. 

Time of order book entry update. 


### function setStatus

```java
inline void setStatus(
    int value
)
```


**Parameters**: 

  * **value** the new status value. 


Set the status for the entry.


### function getStatus

```java
inline int getStatus()
```


**Return**: the status. 

Return the status for the entry.


### function getPrice

```java
inline double getPrice()
```


**Return**: The price for this entry. 

Get the price for this entry. This method will throw a MamdaOrderBookInvalidEntry if no MamdaPriceLevel is associated with it because order book price information is only stored in [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) objects.


### function getSide

```java
inline char getSide()
```


**Return**: The side for this entry. 

Get the price for this entry. This method will throw a MamdaOrderBookInvalidEntry if no MamdaPriceLevel is associated with it because order book price information is only stored in [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) objects.


### function getPosition

```java
inline int getPosition(
    int maxPos
)
```


**Parameters**: 

  * **maxPos** The maximum position to return;


**Return**: The position of this entry in the order book. 

Get the position in the order book for this entry. If maxPos is not zero, then the method will return a result no greater than maxPos. This is to prevent searching the entire book when only a limited search is necessary. Note: the logic used in the positional search is to use the number of entries that [MamdaOrderBookPriceLevel::getNumEntries()](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getnumentries) returns for price levels above the entry's price level. -1 is return if the entry is in the book but not currently "visible" (i.e., it is being omitted because the MAMA source is turned off). A MamdaOrderBookInvalidEntry is thrown if the entry is not found in the book.


### function getEntryPositionInPriceLevel

```java
inline long getEntryPositionInPriceLevel()
```


**Return**: The position of this entry in the Price Level. 

Get the position of the Entry in the Price Level. The value is indexed from 1. A value of 0 may be returned if the Entry is detached from the Price Level.


### function hashCode

```java
inline int hashCode()
```


### function equals

```java
inline boolean equals(
    Object obj
)
```


### function setPriceLevel

```java
inline void setPriceLevel(
    MamdaOrderBookPriceLevel priceLevel
)
```


**Parameters**: 

  * **priceLevel** The price level to be associated with. 


Set the [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) object to which this entry belongs. This method is invoked automatically internally, by the MAMDA API, when an entry is added to a price level.


### function getPriceLevel

```java
inline MamdaOrderBookPriceLevel getPriceLevel()
```


**Return**: The price level currently associated with this entry. 

Get the [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) object to which this entry belongs.


### function getOrderBook

```java
inline MamdaOrderBook getOrderBook()
```


**Return**: The order book or null. 

Get the order book for this entry, if possible. This can only be done if the entry is part of a price level and the price level is part of an order book. null is returned if no order book can be found.


### function setManager

```java
inline void setManager(
    MamdaOrderBookEntryManager manager
)
```


**Parameters**: 

  * **manager** The manager. 


Set the [MamdaOrderBookEntryManager](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html) object to which this entry belongs. This method is invoked automatically internally, by the MAMDA API, when an entry is added to an entry manager.


### function getManager

```java
inline MamdaOrderBookEntryManager getManager()
```


**Return**: The manager currently associated with this entry. 

Get the [MamdaOrderBookEntryManager](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html) object to which this entry belongs.


### function getSymbol

```java
inline String getSymbol()
```


**Return**: The symbol or NULL. 

Get the symbol for this entry, if possible. This can only be done if the entry is part of a price level and the price level is part of an order book. NULL is returned if no symbol can be found.


### function setSourceDerivative

```java
inline void setSourceDerivative(
    MamaSourceDerivative source
)
```


**Parameters**: 

  * **source** The MAMA source derivative. 


Set the MamaSourceDerivative for this book entry. The source derivative is used to help determine what the quality of order book entry is and to efficiently identify all of the entries for a given source (e.g., for aggregated order books).


### function getSourceDerivative

```java
inline MamaSourceDerivative getSourceDerivative()
```


**Return**: the MamaSourceDerivative 

Return the MamaSourceDerivative for this book entry. 


### function getSource

```java
inline MamaSource getSource()
```


**Return**: the source. 

Return the MamaSource for this book entry. 


### function getCheckSourceState

```java
inline boolean getCheckSourceState()
```


**Return**: Whether to check source state. 

Get whether this order book wants to check the source state.


### function setQuality

```java
inline void setQuality(
    short quality
)
```


**Parameters**: 

  * **quality** The new entry-level MAMA quality level. 


Set the entry-level quality factor. This level, if not MAMA_QUALITY_OK, overrides the source-level level.


### function getQuality

```java
inline short getQuality()
```


**Return**: The current MAMA quality level. 

Get the entry-level quality factor. If the entry-level quality is MAMA_QUALITY_OK, then this method returns the source-level quality.


### function isVisible

```java
inline boolean isVisible()
```


### function setClosure

```java
inline void setClosure(
    Object closure
)
```


**Parameters**: 

  * **closure** The closure. 


Set the order book entry closure handle.


### function getClosure

```java
inline Object getClosure()
```


**Return**: The entry closure. 

Get the order book entry closure handle.


### function assertEqual

```java
inline void assertEqual(
    MamdaOrderBookEntry rhs
)
```


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** 


Order book entry equality verification. A [MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html) is thrown if the entries within a price level are not equal, along with the reason for the inequality. 


### function equalId

```java
inline boolean equalId(
    String id
)
```


**Parameters**: 

  * **id** The id to compare to the order entry id.


**Return**: boolean Whether the id is the same as the order id. 

Whether the id of the entry is equal to the id passed to the method.


### function setUniqueId

```java
inline void setUniqueId(
    String uniqueId
)
```


### function setStrictChecking

```java
static inline void setStrictChecking(
    boolean strict
)
```


Enforce strict checking of order book modifications (at the expense of some performance). This setting is automatically updated by [MamdaOrderBook::setStrictChecking()](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setstrictchecking). 


## Public Attributes Documentation

### variable ACTION_ADD

```java
static final char ACTION_ADD = 'A';
```


An enumeration for book entry actions. Price level actions differ from entry actions because, for example, a price level message with ACTION_UPDATE may consist of entries with ACTION_ADD, ACTION_UPDATE or ACTION_DELETE. A new entry. 


### variable ACTION_UPDATE

```java
static final char ACTION_UPDATE = 'U';
```


An updated entry. 


### variable ACTION_DELETE

```java
static final char ACTION_DELETE = 'D';
```


A deleted entry. 


### variable ACTION_UNKNOWN

```java
static final char ACTION_UNKNOWN = 'Z';
```


Unknown action (error). 


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100