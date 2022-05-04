---
title: Wombat::MamaStat
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaStat





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaStat](classWombat_1_1MamaStat.html#function-mamastat)**(void ) |
| virtual | **[~MamaStat](classWombat_1_1MamaStat.html#function-~mamastat)**(void ) |
| virtual void | **[create](classWombat_1_1MamaStat.html#function-create)**([MamaStatsCollector](classWombat_1_1MamaStatsCollector.html) * statsCollector, int lockable, const char * name, mama_fid_t fid) |
| virtual void | **[increment](classWombat_1_1MamaStat.html#function-increment)**() |
| virtual void | **[decrement](classWombat_1_1MamaStat.html#function-decrement)**() |
| virtual void | **[reset](classWombat_1_1MamaStat.html#function-reset)**() |
| virtual void | **[setLog](classWombat_1_1MamaStat.html#function-setlog)**(int log) |
| virtual void | **[setPublish](classWombat_1_1MamaStat.html#function-setpublish)**(int publish) |
| virtual void | **[destroy](classWombat_1_1MamaStat.html#function-destroy)**(void ) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaStat](classWombat_1_1MamaStat.html#function-mamastat)**(MamaStatImpl * ) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| MamaStatImpl * | **[mSimpl](classWombat_1_1MamaStat.html#variable-msimpl)**  |

## Public Functions Documentation

### function MamaStat

```cpp
MamaStat(
    void 
)
```


### function ~MamaStat

```cpp
virtual ~MamaStat(
    void 
)
```


### function create

```cpp
virtual void create(
    MamaStatsCollector * statsCollector,
    int lockable,
    const char * name,
    mama_fid_t fid
)
```


### function increment

```cpp
virtual void increment()
```


### function decrement

```cpp
virtual void decrement()
```


### function reset

```cpp
virtual void reset()
```


### function setLog

```cpp
virtual void setLog(
    int log
)
```


### function setPublish

```cpp
virtual void setPublish(
    int publish
)
```


### function destroy

```cpp
virtual void destroy(
    void 
)
```


## Protected Functions Documentation

### function MamaStat

```cpp
MamaStat(
    MamaStatImpl * 
)
```


## Protected Attributes Documentation

### variable mSimpl

```cpp
MamaStatImpl * mSimpl;
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100