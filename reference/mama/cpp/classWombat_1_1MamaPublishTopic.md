---
title: Wombat::MamaPublishTopic
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPublishTopic





## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaPublishTopic](classWombat_1_1MamaPublishTopic.html#function-mamapublishtopic)**() |
| void | **[set](classWombat_1_1MamaPublishTopic.html#function-set)**(mamaPublishTopic * pubInfo) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const char * | **[mSymbol](classWombat_1_1MamaPublishTopic.html#variable-msymbol)**  |
| [MamaDQPublisher](classWombat_1_1MamaDQPublisher.html) * | **[mPub](classWombat_1_1MamaPublishTopic.html#variable-mpub)**  |
| void * | **[mCache](classWombat_1_1MamaPublishTopic.html#variable-mcache)**  |

## Friends

|                | Name           |
| -------------- | -------------- |
| struct | **[MamaDQPublisherManagerImpl](classWombat_1_1MamaPublishTopic.html#friend-mamadqpublishermanagerimpl)**  |

## Protected Functions Documentation

### function MamaPublishTopic

```cpp
inline MamaPublishTopic()
```


### function set

```cpp
void set(
    mamaPublishTopic * pubInfo
)
```


## Public Attributes Documentation

### variable mSymbol

```cpp
const char * mSymbol;
```


### variable mPub

```cpp
MamaDQPublisher * mPub;
```


### variable mCache

```cpp
void * mCache;
```


## Friends

### friend MamaDQPublisherManagerImpl

```cpp
friend struct MamaDQPublisherManagerImpl(
    MamaDQPublisherManagerImpl 
);
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100