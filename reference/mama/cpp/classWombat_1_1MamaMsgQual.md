---
title: Wombat::MamaMsgQual
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsgQual



 [More...](#detailed-description)


`#include <MamaMsgQual.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaMsgQual](classWombat_1_1MamaMsgQual.html#function-mamamsgqual)**() |
| | **[MamaMsgQual](classWombat_1_1MamaMsgQual.html#function-mamamsgqual)**(mama_u16_t value) |
| | **[MamaMsgQual](classWombat_1_1MamaMsgQual.html#function-mamamsgqual)**(const [MamaMsgQual](classWombat_1_1MamaMsgQual.html) & copy) |
| | **[~MamaMsgQual](classWombat_1_1MamaMsgQual.html#function-~mamamsgqual)**() |
| [MamaMsgQual](classWombat_1_1MamaMsgQual.html) & | **[operator=](classWombat_1_1MamaMsgQual.html#function-operator=)**(const [MamaMsgQual](classWombat_1_1MamaMsgQual.html) & rhs) |
| bool | **[operator==](classWombat_1_1MamaMsgQual.html#function-operator==)**(const [MamaMsgQual](classWombat_1_1MamaMsgQual.html) & rhs) const |
| bool | **[operator==](classWombat_1_1MamaMsgQual.html#function-operator==)**(mama_u16_t rhs) const |
| bool | **[operator!=](classWombat_1_1MamaMsgQual.html#function-operator!=)**(const [MamaMsgQual](classWombat_1_1MamaMsgQual.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaMsgQual.html#function-operator!=)**(mama_u16_t rhs) const |
| void | **[clear](classWombat_1_1MamaMsgQual.html#function-clear)**() |
| void | **[setValue](classWombat_1_1MamaMsgQual.html#function-setvalue)**(mama_u16_t value) |
| void | **[setIsDefinatelyDuplicate](classWombat_1_1MamaMsgQual.html#function-setisdefinatelyduplicate)**(bool tf) |
| void | **[setIsPossiblyDuplicate](classWombat_1_1MamaMsgQual.html#function-setispossiblyduplicate)**(bool tf) |
| void | **[setIsDefinatelyDelayed](classWombat_1_1MamaMsgQual.html#function-setisdefinatelydelayed)**(bool tf) |
| void | **[setIsPossiblyDelayed](classWombat_1_1MamaMsgQual.html#function-setispossiblydelayed)**(bool tf) |
| void | **[setIsOutOfSequence](classWombat_1_1MamaMsgQual.html#function-setisoutofsequence)**(bool tf) |
| mama_u16_t | **[getValue](classWombat_1_1MamaMsgQual.html#function-getvalue)**() const |
| bool | **[getIsDefinatelyDuplicate](classWombat_1_1MamaMsgQual.html#function-getisdefinatelyduplicate)**() const |
| bool | **[getIsPossiblyDuplicate](classWombat_1_1MamaMsgQual.html#function-getispossiblyduplicate)**() const |
| bool | **[getIsDefinatelyDelayed](classWombat_1_1MamaMsgQual.html#function-getisdefinatelydelayed)**() const |
| bool | **[getIsPossiblyDelayed](classWombat_1_1MamaMsgQual.html#function-getispossiblydelayed)**() const |
| bool | **[getIsOutOfSequence](classWombat_1_1MamaMsgQual.html#function-getisoutofsequence)**() const |
| void | **[getAsString](classWombat_1_1MamaMsgQual.html#function-getasstring)**(char * result, mama_size_t maxLen) const |
| const char * | **[getAsString](classWombat_1_1MamaMsgQual.html#function-getasstring)**() const |
| void | **[getAsString](classWombat_1_1MamaMsgQual.html#function-getasstring)**(const mama_u16_t & value, char * result, mama_size_t maxLen) |

## Detailed Description

```cpp
class Wombat::MamaMsgQual;
```


The [MamaMsgQual](classWombat_1_1MamaMsgQual.html) class is a wrapper/utility class which provides useful interrogation, comparison and manipulation facilities for the [Mama](classWombat_1_1Mama.html) Message Qualifier data field (wMsgQual) which is a "bit-map" used to convey duplicate, delayed and out-of-sequence information about messages 

## Public Functions Documentation

### function MamaMsgQual

```cpp
MamaMsgQual()
```


### function MamaMsgQual

```cpp
MamaMsgQual(
    mama_u16_t value
)
```


### function MamaMsgQual

```cpp
MamaMsgQual(
    const MamaMsgQual & copy
)
```


### function ~MamaMsgQual

```cpp
~MamaMsgQual()
```


### function operator=

```cpp
MamaMsgQual & operator=(
    const MamaMsgQual & rhs
)
```


### function operator==

```cpp
bool operator==(
    const MamaMsgQual & rhs
) const
```


### function operator==

```cpp
bool operator==(
    mama_u16_t rhs
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const MamaMsgQual & rhs
) const
```


### function operator!=

```cpp
inline bool operator!=(
    mama_u16_t rhs
) const
```


### function clear

```cpp
void clear()
```


### function setValue

```cpp
void setValue(
    mama_u16_t value
)
```


### function setIsDefinatelyDuplicate

```cpp
void setIsDefinatelyDuplicate(
    bool tf
)
```


### function setIsPossiblyDuplicate

```cpp
void setIsPossiblyDuplicate(
    bool tf
)
```


### function setIsDefinatelyDelayed

```cpp
void setIsDefinatelyDelayed(
    bool tf
)
```


### function setIsPossiblyDelayed

```cpp
void setIsPossiblyDelayed(
    bool tf
)
```


### function setIsOutOfSequence

```cpp
void setIsOutOfSequence(
    bool tf
)
```


### function getValue

```cpp
mama_u16_t getValue() const
```


### function getIsDefinatelyDuplicate

```cpp
bool getIsDefinatelyDuplicate() const
```


### function getIsPossiblyDuplicate

```cpp
bool getIsPossiblyDuplicate() const
```


### function getIsDefinatelyDelayed

```cpp
bool getIsDefinatelyDelayed() const
```


### function getIsPossiblyDelayed

```cpp
bool getIsPossiblyDelayed() const
```


### function getIsOutOfSequence

```cpp
bool getIsOutOfSequence() const
```


### function getAsString

```cpp
void getAsString(
    char * result,
    mama_size_t maxLen
) const
```


### function getAsString

```cpp
const char * getAsString() const
```


Return a string representation of the message qualifier. 

 Note that the alternative getAsString() method is more efficient because this method must allocate a temporary buffer (automatically destroyed upon object destruction). 


### function getAsString

```cpp
static void getAsString(
    const mama_u16_t & value,
    char * result,
    mama_size_t maxLen
)
```


Static helper function to convert from the raw 16bit integer representation directly to a colon delimited string of conditions. 


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100