---
title: Wombat::MamaDictionaryCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDictionaryCallback



 [More...](#detailed-description)


`#include <MamaDictionaryCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaDictionaryCallback](classWombat_1_1MamaDictionaryCallback.html#function-~mamadictionarycallback)**(void ) |
| virtual void | **[onTimeout](classWombat_1_1MamaDictionaryCallback.html#function-ontimeout)**(void ) |
| virtual void | **[onError](classWombat_1_1MamaDictionaryCallback.html#function-onerror)**(const char * message) |
| virtual void | **[onComplete](classWombat_1_1MamaDictionaryCallback.html#function-oncomplete)**(void ) |

## Detailed Description

```cpp
class Wombat::MamaDictionaryCallback;
```


**See**: 

  * [MamaDictionary](classWombat_1_1MamaDictionary.html)
  * Mama::createDictionarySubscription 


The `WombatDictionaryCallback` receives notification regarding the population of the data dictionary. Clients implement the interface and pass it to `Mama.createDictionarySubscription`

## Public Functions Documentation

### function ~MamaDictionaryCallback

```cpp
inline virtual ~MamaDictionaryCallback(
    void 
)
```


### function onTimeout

```cpp
inline virtual void onTimeout(
    void 
)
```


Called when a timeout occurs. 


### function onError

```cpp
inline virtual void onError(
    const char * message
)
```


**Parameters**: 

  * **message** The error message. 


Invoked when an error occurs. 


### function onComplete

```cpp
inline virtual void onComplete(
    void 
)
```


Invoked when dictionary creation is complete. 


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100