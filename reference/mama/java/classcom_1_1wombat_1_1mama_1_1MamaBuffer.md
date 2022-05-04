---
title: com::wombat::mama::MamaBuffer
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaBuffer



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html#function-mamabuffer)**() |
| void | **[grow](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html#function-grow)**(int length) |
| byte[] | **[array](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html#function-array)**() |
| int | **[limit](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html#function-limit)**() |
| void | **[limit](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html#function-limit)**(int length) |
| CharBuffer | **[asCharBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html#function-ascharbuffer)**() |
| ByteBuffer | **[asByteBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html#function-asbytebuffer)**() |

## Detailed Description

```java
class com::wombat::mama::MamaBuffer;
```


[Mama](classcom_1_1wombat_1_1mama_1_1Mama.html) Assignable Buffer. The default is a ByteBuffer but can also returned as a CharBuffer. 

## Public Functions Documentation

### function MamaBuffer

```java
inline MamaBuffer()
```


### function grow

```java
inline void grow(
    int length
)
```


### function array

```java
inline byte[] array()
```


### function limit

```java
inline int limit()
```


### function limit

```java
inline void limit(
    int length
)
```


### function asCharBuffer

```java
inline CharBuffer asCharBuffer()
```


### function asByteBuffer

```java
inline ByteBuffer asByteBuffer()
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100