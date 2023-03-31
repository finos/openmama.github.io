---
title: Wombat::MamaStatsCollector
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaStatsCollector





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaStatsCollector](classWombat_1_1MamaStatsCollector.html#function-mamastatscollector)**(void ) |
| virtual | **[~MamaStatsCollector](classWombat_1_1MamaStatsCollector.html#function-~mamastatscollector)**(void ) |
| virtual void | **[create](classWombat_1_1MamaStatsCollector.html#function-create)**(mamaStatsCollectorType type, const char * name, const char * middleware) |
| virtual void | **[incrementStat](classWombat_1_1MamaStatsCollector.html#function-incrementstat)**(mama_fid_t identifier) |
| virtual void | **[setName](classWombat_1_1MamaStatsCollector.html#function-setname)**(const char * name) |
| virtual void | **[setLog](classWombat_1_1MamaStatsCollector.html#function-setlog)**(int log) |
| virtual void | **[setPublish](classWombat_1_1MamaStatsCollector.html#function-setpublish)**(int publish) |
| virtual void | **[destroy](classWombat_1_1MamaStatsCollector.html#function-destroy)**(void ) |
| virtual mamaStatsCollector | **[getStatsCollector](classWombat_1_1MamaStatsCollector.html#function-getstatscollector)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaStatsCollector](classWombat_1_1MamaStatsCollector.html#function-mamastatscollector)**(MamaStatsCollectorImpl * ) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| MamaStatsCollectorImpl * | **[mSimpl](classWombat_1_1MamaStatsCollector.html#variable-msimpl)**  |

## Public Functions Documentation

### function MamaStatsCollector

```cpp
MamaStatsCollector(
    void 
)
```


### function ~MamaStatsCollector

```cpp
virtual ~MamaStatsCollector(
    void 
)
```


### function create

```cpp
virtual void create(
    mamaStatsCollectorType type,
    const char * name,
    const char * middleware
)
```


### function incrementStat

```cpp
virtual void incrementStat(
    mama_fid_t identifier
)
```


### function setName

```cpp
virtual void setName(
    const char * name
)
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


### function getStatsCollector

```cpp
virtual mamaStatsCollector getStatsCollector()
```


## Protected Functions Documentation

### function MamaStatsCollector

```cpp
MamaStatsCollector(
    MamaStatsCollectorImpl * 
)
```


## Protected Attributes Documentation

### variable mSimpl

```cpp
MamaStatsCollectorImpl * mSimpl;
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100