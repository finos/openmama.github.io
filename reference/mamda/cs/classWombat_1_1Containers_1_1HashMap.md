---
title: Wombat::Containers::HashMap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Containers::HashMap





Inherits from [Wombat.Containers.Map](interfaceWombat_1_1Containers_1_1Map.html), ICloneable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[HashMap](classWombat_1_1Containers_1_1HashMap.html#function-hashmap)**(int initialCapacity, float loadFactor) |
| | **[HashMap](classWombat_1_1Containers_1_1HashMap.html#function-hashmap)**(int initialCapacity) |
| | **[HashMap](classWombat_1_1Containers_1_1HashMap.html#function-hashmap)**() |
| | **[HashMap](classWombat_1_1Containers_1_1HashMap.html#function-hashmap)**([HashMap](classWombat_1_1Containers_1_1HashMap.html) m) |
| int | **[size](classWombat_1_1Containers_1_1HashMap.html#function-size)**() |
| bool | **[isEmpty](classWombat_1_1Containers_1_1HashMap.html#function-isempty)**() |
| bool | **[containsKey](classWombat_1_1Containers_1_1HashMap.html#function-containskey)**(object key) |
| bool | **[containsValue](classWombat_1_1Containers_1_1HashMap.html#function-containsvalue)**(object value) |
| object | **[valueOf](classWombat_1_1Containers_1_1HashMap.html#function-valueof)**(object key) |
| object | **[put](classWombat_1_1Containers_1_1HashMap.html#function-put)**(object key, object value) |
| object | **[remove](classWombat_1_1Containers_1_1HashMap.html#function-remove)**(object key) |
| void | **[putAll](classWombat_1_1Containers_1_1HashMap.html#function-putall)**([Map](interfaceWombat_1_1Containers_1_1Map.html) m) |
| void | **[clear](classWombat_1_1Containers_1_1HashMap.html#function-clear)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[keySet](classWombat_1_1Containers_1_1HashMap.html#function-keyset)**() |
| [Collection](interfaceWombat_1_1Containers_1_1Collection.html) | **[values](classWombat_1_1Containers_1_1HashMap.html#function-values)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[entrySet](classWombat_1_1Containers_1_1HashMap.html#function-entryset)**() |
| object | **[Clone](classWombat_1_1Containers_1_1HashMap.html#function-clone)**()<br>Creates a _deep_ copy of this [HashMap](classWombat_1_1Containers_1_1HashMap.html) instance  |

## Public Functions Documentation

### function HashMap

```csharp
HashMap(
    int initialCapacity,
    float loadFactor
)
```


### function HashMap

```csharp
HashMap(
    int initialCapacity
)
```


### function HashMap

```csharp
HashMap()
```


### function HashMap

```csharp
HashMap(
    HashMap m
)
```


### function size

```csharp
int size()
```


**Reimplements**: [Wombat::Containers::Map::size](interfaceWombat_1_1Containers_1_1Map.html#function-size)


### function isEmpty

```csharp
bool isEmpty()
```


**Reimplements**: [Wombat::Containers::Map::isEmpty](interfaceWombat_1_1Containers_1_1Map.html#function-isempty)


### function containsKey

```csharp
bool containsKey(
    object key
)
```


**Reimplements**: [Wombat::Containers::Map::containsKey](interfaceWombat_1_1Containers_1_1Map.html#function-containskey)


### function containsValue

```csharp
bool containsValue(
    object value
)
```


**Reimplements**: [Wombat::Containers::Map::containsValue](interfaceWombat_1_1Containers_1_1Map.html#function-containsvalue)


### function valueOf

```csharp
object valueOf(
    object key
)
```


**Reimplements**: [Wombat::Containers::Map::valueOf](interfaceWombat_1_1Containers_1_1Map.html#function-valueof)


### function put

```csharp
object put(
    object key,
    object value
)
```


**Reimplements**: [Wombat::Containers::Map::put](interfaceWombat_1_1Containers_1_1Map.html#function-put)


### function remove

```csharp
object remove(
    object key
)
```


**Reimplements**: [Wombat::Containers::Map::remove](interfaceWombat_1_1Containers_1_1Map.html#function-remove)


### function putAll

```csharp
void putAll(
    Map m
)
```


**Reimplements**: [Wombat::Containers::Map::putAll](interfaceWombat_1_1Containers_1_1Map.html#function-putall)


### function clear

```csharp
void clear()
```


**Reimplements**: [Wombat::Containers::Map::clear](interfaceWombat_1_1Containers_1_1Map.html#function-clear)


### function keySet

```csharp
Set keySet()
```


**Reimplements**: [Wombat::Containers::Map::keySet](interfaceWombat_1_1Containers_1_1Map.html#function-keyset)


### function values

```csharp
Collection values()
```


**Reimplements**: [Wombat::Containers::Map::values](interfaceWombat_1_1Containers_1_1Map.html#function-values)


### function entrySet

```csharp
Set entrySet()
```


**Reimplements**: [Wombat::Containers::Map::entrySet](interfaceWombat_1_1Containers_1_1Map.html#function-entryset)


### function Clone

```csharp
object Clone()
```

Creates a _deep_ copy of this [HashMap](classWombat_1_1Containers_1_1HashMap.html) instance 

**Return**: 

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100