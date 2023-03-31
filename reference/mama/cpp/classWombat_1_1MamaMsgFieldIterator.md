---
title: Wombat::MamaMsgFieldIterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsgFieldIterator



 [More...](#detailed-description)


`#include <MamaMsgFieldIterator.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaMsgFieldIterator](classWombat_1_1MamaMsgFieldIterator.html#function-~mamamsgfielditerator)**() |
| virtual void | **[onField](classWombat_1_1MamaMsgFieldIterator.html#function-onfield)**(const [MamaMsg](classWombat_1_1MamaMsg.html) & msg, const [MamaMsgField](classWombat_1_1MamaMsgField.html) & field, void * closure) =0 |

## Detailed Description

```cpp
class Wombat::MamaMsgFieldIterator;
```


Callback class for iterating over all fields in a message. This is necessary because some messaging implementations do not provide efficient indexed access to fields. 

## Public Functions Documentation

### function ~MamaMsgFieldIterator

```cpp
inline virtual ~MamaMsgFieldIterator()
```


### function onField

```cpp
virtual void onField(
    const MamaMsg & msg,
    const MamaMsgField & field,
    void * closure
) =0
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100