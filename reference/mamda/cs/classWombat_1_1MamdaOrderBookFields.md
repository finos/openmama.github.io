---
title: Wombat::MamdaOrderBookFields
summary: Maintains a cache of common orderbook related field descriptors. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookFields



Maintains a cache of common orderbook related field descriptors. 

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaOrderBookFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties)<br>Set the dictionary for common orderbook fields. Maintains a cache of MamaFieldDescriptors for common orderbook related fields. The  |
| int | **[getNumLevelFields](classWombat_1_1MamdaOrderBookFields.html#function-getnumlevelfields)**()<br>Internal. Returns the number of fixed (non-vector) price level fields.  |
| int | **[getNumEntryFields](classWombat_1_1MamdaOrderBookFields.html#function-getnumentryfields)**()<br>Internal. Returns the number of fixed (non-vector) entry fields.  |
| bool | **[getHasVectorFields](classWombat_1_1MamdaOrderBookFields.html#function-gethasvectorfields)**()<br>Internal. Returns whether the dictionary contains vector fields (important when unpacking order book messages).  |
| bool | **[getHasFixedLevelFields](classWombat_1_1MamdaOrderBookFields.html#function-gethasfixedlevelfields)**()<br>Internal. Returns whether the dictionary contains fixed price level fields (important when unpacking order book messages).  |
| bool | **[isSet](classWombat_1_1MamdaOrderBookFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaOrderBookFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SRC_TIME](classWombat_1_1MamdaOrderBookFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classWombat_1_1MamdaOrderBookFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classWombat_1_1MamdaOrderBookFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[PART_ID](classWombat_1_1MamdaOrderBookFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SEQNUM](classWombat_1_1MamdaOrderBookFields.html#variable-seqnum)**  |
| MamaFieldDescriptor | **[BOOK_TIME](classWombat_1_1MamdaOrderBookFields.html#variable-book-time)**  |
| MamaFieldDescriptor | **[NUM_LEVELS](classWombat_1_1MamdaOrderBookFields.html#variable-num-levels)**  |
| MamaFieldDescriptor | **[PRICE_LEVELS](classWombat_1_1MamdaOrderBookFields.html#variable-price-levels)**  |
| MamaFieldDescriptor | **[PL_ACTION](classWombat_1_1MamdaOrderBookFields.html#variable-pl-action)**  |
| MamaFieldDescriptor | **[PL_PRICE](classWombat_1_1MamdaOrderBookFields.html#variable-pl-price)**  |
| MamaFieldDescriptor | **[PL_SIDE](classWombat_1_1MamdaOrderBookFields.html#variable-pl-side)**  |
| MamaFieldDescriptor | **[PL_SIZE](classWombat_1_1MamdaOrderBookFields.html#variable-pl-size)**  |
| MamaFieldDescriptor | **[PL_SIZE_CHANGE](classWombat_1_1MamdaOrderBookFields.html#variable-pl-size-change)**  |
| MamaFieldDescriptor | **[PL_TIME](classWombat_1_1MamdaOrderBookFields.html#variable-pl-time)**  |
| MamaFieldDescriptor | **[PL_NUM_ENTRIES](classWombat_1_1MamdaOrderBookFields.html#variable-pl-num-entries)**  |
| MamaFieldDescriptor | **[PL_NUM_ATTACH](classWombat_1_1MamdaOrderBookFields.html#variable-pl-num-attach)**  |
| MamaFieldDescriptor | **[PL_ENTRIES](classWombat_1_1MamdaOrderBookFields.html#variable-pl-entries)**  |
| MamaFieldDescriptor | **[ENTRY_ID](classWombat_1_1MamdaOrderBookFields.html#variable-entry-id)**  |
| MamaFieldDescriptor | **[ENTRY_ACTION](classWombat_1_1MamdaOrderBookFields.html#variable-entry-action)**  |
| MamaFieldDescriptor | **[ENTRY_REASON](classWombat_1_1MamdaOrderBookFields.html#variable-entry-reason)**  |
| MamaFieldDescriptor | **[ENTRY_SIZE](classWombat_1_1MamdaOrderBookFields.html#variable-entry-size)**  |
| MamaFieldDescriptor | **[ENTRY_TIME](classWombat_1_1MamdaOrderBookFields.html#variable-entry-time)**  |
| MamaFieldDescriptor | **[ENTRY_STATUS](classWombat_1_1MamdaOrderBookFields.html#variable-entry-status)**  |
| MamaFieldDescriptor[] | **[PRICE_LEVEL](classWombat_1_1MamdaOrderBookFields.html#variable-price-level)**  |
| MamaFieldDescriptor[] | **[PL_ENTRY](classWombat_1_1MamdaOrderBookFields.html#variable-pl-entry)**  |

## Additional inherited members

**Protected Functions inherited from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| string | **[lookupFieldName](classWombat_1_1MamdaFields.html#function-lookupfieldname)**(NameValueCollection properties, string defaultFieldName) |


## Public Functions Documentation

### function setDictionary

```csharp
static void setDictionary(
    MamaDictionary dictionary,
    NameValueCollection properties
)
```

Set the dictionary for common orderbook fields. Maintains a cache of MamaFieldDescriptors for common orderbook related fields. The 

**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary
  * **properties** A Properties object containing field mappings. (See [MamdaFields](classWombat_1_1MamdaFields.html) for more information


`properties` parameter allows users of the API to map the common dictionary names to something else if they are beig published under different names.


### function getNumLevelFields

```csharp
static int getNumLevelFields()
```

Internal. Returns the number of fixed (non-vector) price level fields. 

**Return**: 

### function getNumEntryFields

```csharp
static int getNumEntryFields()
```

Internal. Returns the number of fixed (non-vector) entry fields. 

**Return**: 

### function getHasVectorFields

```csharp
static bool getHasVectorFields()
```

Internal. Returns whether the dictionary contains vector fields (important when unpacking order book messages). 

**Return**: 

### function getHasFixedLevelFields

```csharp
static bool getHasFixedLevelFields()
```

Internal. Returns whether the dictionary contains fixed price level fields (important when unpacking order book messages). 

**Return**: 

### function isSet

```csharp
static bool isSet()
```


### function reset

```csharp
static void reset()
```


## Public Attributes Documentation

### variable SRC_TIME

```csharp
static MamaFieldDescriptor SRC_TIME = null;
```


### variable ACTIVITY_TIME

```csharp
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable LINE_TIME

```csharp
static MamaFieldDescriptor LINE_TIME = null;
```


### variable PART_ID

```csharp
static MamaFieldDescriptor PART_ID = null;
```


### variable SEQNUM

```csharp
static MamaFieldDescriptor SEQNUM = null;
```


### variable BOOK_TIME

```csharp
static MamaFieldDescriptor BOOK_TIME = null;
```


### variable NUM_LEVELS

```csharp
static MamaFieldDescriptor NUM_LEVELS = null;
```


### variable PRICE_LEVELS

```csharp
static MamaFieldDescriptor PRICE_LEVELS = null;
```


### variable PL_ACTION

```csharp
static MamaFieldDescriptor PL_ACTION = null;
```


### variable PL_PRICE

```csharp
static MamaFieldDescriptor PL_PRICE = null;
```


### variable PL_SIDE

```csharp
static MamaFieldDescriptor PL_SIDE = null;
```


### variable PL_SIZE

```csharp
static MamaFieldDescriptor PL_SIZE = null;
```


### variable PL_SIZE_CHANGE

```csharp
static MamaFieldDescriptor PL_SIZE_CHANGE = null;
```


### variable PL_TIME

```csharp
static MamaFieldDescriptor PL_TIME = null;
```


### variable PL_NUM_ENTRIES

```csharp
static MamaFieldDescriptor PL_NUM_ENTRIES = null;
```


### variable PL_NUM_ATTACH

```csharp
static MamaFieldDescriptor PL_NUM_ATTACH = null;
```


### variable PL_ENTRIES

```csharp
static MamaFieldDescriptor PL_ENTRIES = null;
```


### variable ENTRY_ID

```csharp
static MamaFieldDescriptor ENTRY_ID = null;
```


### variable ENTRY_ACTION

```csharp
static MamaFieldDescriptor ENTRY_ACTION = null;
```


### variable ENTRY_REASON

```csharp
static MamaFieldDescriptor ENTRY_REASON = null;
```


### variable ENTRY_SIZE

```csharp
static MamaFieldDescriptor ENTRY_SIZE = null;
```


### variable ENTRY_TIME

```csharp
static MamaFieldDescriptor ENTRY_TIME = null;
```


### variable ENTRY_STATUS

```csharp
static MamaFieldDescriptor ENTRY_STATUS = null;
```


### variable PRICE_LEVEL

```csharp
static MamaFieldDescriptor[] PRICE_LEVEL = null;
```


### variable PL_ENTRY

```csharp
static MamaFieldDescriptor[] PL_ENTRY = null;
```


-------------------------------

Updated on 2023-03-31 at 15:30:17 +0100