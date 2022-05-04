---
title: com::wombat::mama::MamaMsgQualifier
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaMsgQualifier



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-mamamsgqualifier)**() |
| | **[MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-mamamsgqualifier)**([MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) qualifierFilter) |
| boolean | **[getIsDefinitelyDuplicate](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-getisdefinitelyduplicate)**() |
| boolean | **[getIsPossiblyDuplicate](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-getispossiblyduplicate)**() |
| boolean | **[getIsPossiblyDelayed](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-getispossiblydelayed)**() |
| boolean | **[getIsDefinitelyDelayed](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-getisdefinitelydelayed)**() |
| boolean | **[getIsOutOfSequence](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-getisoutofsequence)**() |
| boolean | **[isValid](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-isvalid)**() |
| void | **[setIsDefinitelyDuplicate](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-setisdefinitelyduplicate)**(boolean value) |
| void | **[setIsPossiblyDuplicate](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-setispossiblyduplicate)**(boolean value) |
| void | **[setIsPossiblyDelayed](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-setispossiblydelayed)**(boolean value) |
| void | **[setIsDefinitelyDelayed](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-setisdefinitelydelayed)**(boolean value) |
| void | **[setOutOfSequence](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-setoutofsequence)**(boolean value) |
| void | **[setInvalid](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-setinvalid)**(boolean value) |
| boolean | **[filter](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#function-filter)**(short value) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final [MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) | **[POSSIBLY_DUPLICATE](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#variable-possibly-duplicate)**  |
| final [MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) | **[DEFINITELY_DUPLICATE](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#variable-definitely-duplicate)**  |
| final [MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) | **[POSSIBLY_DELAYED](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#variable-possibly-delayed)**  |
| final [MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) | **[DEFINITELY_DELAYED](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#variable-definitely-delayed)**  |
| final [MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) | **[OUT_OF_SEQUENCE](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#variable-out-of-sequence)**  |
| final [MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) | **[INVALID](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html#variable-invalid)**  |

## Detailed Description

```java
class com::wombat::mama::MamaMsgQualifier;
```


This class defines bit flags for the [MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) field values. Instances may also be used as a filter. Bits are queried and set using the set and get methods. Static fields exist for each possible bit. 

## Public Functions Documentation

### function MamaMsgQualifier

```java
inline MamaMsgQualifier()
```


### function MamaMsgQualifier

```java
inline MamaMsgQualifier(
    MamaMsgQualifier qualifierFilter
)
```


### function getIsDefinitelyDuplicate

```java
inline boolean getIsDefinitelyDuplicate()
```


**Return**: true is a duplicate. 

Return true if this message is definitely a duplicate message. This condition will not occur with the current feed handlers.


### function getIsPossiblyDuplicate

```java
inline boolean getIsPossiblyDuplicate()
```


**Return**: true if the message may be a duplicate. 

Return true if this message is possibly a duplicate message. This may occur in the event of a fault tolerant feed handler take over where the feed handler replays messages to prevent gaps.


### function getIsPossiblyDelayed

```java
inline boolean getIsPossiblyDelayed()
```


**Return**: true if the message may be delayed. 

Return true if the message is possibly delayed. This condition may be true during a fault-tolerant take over.


### function getIsDefinitelyDelayed

```java
inline boolean getIsDefinitelyDelayed()
```


**Return**: true if the message is delayed 

Return true if the message is delayed. This condition may be true during a fault-tolerant take over.


### function getIsOutOfSequence

```java
inline boolean getIsOutOfSequence()
```


**Return**: true when the FH sends the message out of sequence. 

### function isValid

```java
inline boolean isValid()
```


**Return**: true if this instance is valid 

### function setIsDefinitelyDuplicate

```java
inline void setIsDefinitelyDuplicate(
    boolean value
)
```


**Parameters**: 

  * **value** for the bit . 


Set the definitely duplicate bit.


### function setIsPossiblyDuplicate

```java
inline void setIsPossiblyDuplicate(
    boolean value
)
```


**Parameters**: 

  * **value** for the bit . 


Set the possibly duplicate bit.


### function setIsPossiblyDelayed

```java
inline void setIsPossiblyDelayed(
    boolean value
)
```


**Parameters**: 

  * **value** for the bit . 


Set the possibly delayed bit.


### function setIsDefinitelyDelayed

```java
inline void setIsDefinitelyDelayed(
    boolean value
)
```


**Parameters**: 

  * **value** for the bit . 


Set the possibly delayed bit.


### function setOutOfSequence

```java
inline void setOutOfSequence(
    boolean value
)
```


**Parameters**: 

  * **value** for the bit . 


Set the possibly out of sequence bit.


### function setInvalid

```java
inline void setInvalid(
    boolean value
)
```


**Parameters**: 

  * **value** value to set 


set the invalid bid


### function filter

```java
inline boolean filter(
    short value
)
```


**Parameters**: 

  * **value** The value to filter. 


**Return**: true if there is a match 

Return true if any bits in value match the bits set in this qualifier. 


## Public Attributes Documentation

### variable POSSIBLY_DUPLICATE

```java
static final MamaMsgQualifier POSSIBLY_DUPLICATE = new MamaMsgQualifier ((short) 0x0001);
```


The message is possibly a duplicate. It may be possible to make an absolute determination by comparing wSeqNum and wSrcTime with the values in the previous message. 


### variable DEFINITELY_DUPLICATE

```java
static final MamaMsgQualifier DEFINITELY_DUPLICATE = new MamaMsgQualifier ((short) 0x0002);
```


The message is definitely a duplicate. Current feed handlers do not use this flag. 


### variable POSSIBLY_DELAYED

```java
static final MamaMsgQualifier POSSIBLY_DELAYED = new MamaMsgQualifier ((short) 0x0004);
```


The current message may be delayed. 


### variable DEFINITELY_DELAYED

```java
static final MamaMsgQualifier DEFINITELY_DELAYED = new MamaMsgQualifier ((short) 0x0008);
```


The current message is definitely delayed. This will be true during a fault tolerant takeover. 


### variable OUT_OF_SEQUENCE

```java
static final MamaMsgQualifier OUT_OF_SEQUENCE = new MamaMsgQualifier ((short) 0x0010);
```


The message is out of sequence. 


### variable INVALID

```java
static final MamaMsgQualifier INVALID = new MamaMsgQualifier ((short) 0x1000);
```


This bit is never set by the FH. It is a place holder to make this class more useful. 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100