---
title: Wombat::MamdaLock
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaLock





## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Scheme](classWombat_1_1MamdaLock.html#enum-scheme)** { SHARED, EXCLUSIVE} |
| enum| **[Type](classWombat_1_1MamdaLock.html#enum-type)** { READ, WRITE} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaLock](classWombat_1_1MamdaLock.html#function-mamdalock)**(Scheme scheme, const char * context, int threads =0) |
| | **[~MamdaLock](classWombat_1_1MamdaLock.html#function-~mamdalock)**() |
| bool | **[acquire](classWombat_1_1MamdaLock.html#function-acquire)**(Type type) |
| bool | **[release](classWombat_1_1MamdaLock.html#function-release)**(Type type) |
| const char * | **[type](classWombat_1_1MamdaLock.html#function-type)**(Type type) |
| const char * | **[scheme](classWombat_1_1MamdaLock.html#function-scheme)**(Scheme scheme) |
| bool | **[lockingEnabled](classWombat_1_1MamdaLock.html#function-lockingenabled)**() |

## Public Types Documentation

### enum Scheme

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SHARED | |   |
| EXCLUSIVE | |   |




### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| READ | |   |
| WRITE | |   |




## Public Functions Documentation

### function MamdaLock

```cpp
MamdaLock(
    Scheme scheme,
    const char * context,
    int threads =0
)
```


### function ~MamdaLock

```cpp
~MamdaLock()
```


### function acquire

```cpp
bool acquire(
    Type type
)
```


### function release

```cpp
bool release(
    Type type
)
```


### function type

```cpp
static const char * type(
    Type type
)
```


### function scheme

```cpp
static const char * scheme(
    Scheme scheme
)
```


### function lockingEnabled

```cpp
static inline bool lockingEnabled()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100