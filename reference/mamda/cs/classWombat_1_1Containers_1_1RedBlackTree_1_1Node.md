---
title: Wombat::Containers::RedBlackTree::Node
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Containers::RedBlackTree::Node





Inherits from [Wombat.Containers.MapEntry](interfaceWombat_1_1Containers_1_1MapEntry.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Node](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#function-node)**(object key, object value) |
| object | **[getKey](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#function-getkey)**() |
| object | **[getValue](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#function-getvalue)**() |
| object | **[setValue](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#function-setvalue)**(object value) |
| bool | **[IsRed](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#function-isred)**(Node node) |
| bool | **[IsBlack](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#function-isblack)**(Node node) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| object | **[Key](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#property-key)**  |
| object | **[Value](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#property-value)**  |
| Node | **[Left](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#property-left)**  |
| Node | **[Right](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#property-right)**  |
| NodeColor | **[Color](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#property-color)**  |
| Node? | **[this[bool direction]](classWombat_1_1Containers_1_1RedBlackTree_1_1Node.html#property-this[bool-direction])**  |

## Public Functions Documentation

### function Node

```csharp
Node(
    object key,
    object value
)
```


### function getKey

```csharp
object getKey()
```


### function getValue

```csharp
object getValue()
```


### function setValue

```csharp
object setValue(
    object value
)
```


### function IsRed

```csharp
static bool IsRed(
    Node node
)
```


### function IsBlack

```csharp
static bool IsBlack(
    Node node
)
```


## Public Property Documentation

### property Key

```csharp
object Key;
```


### property Value

```csharp
object Value;
```


### property Left

```csharp
Node Left;
```


### property Right

```csharp
Node Right;
```


### property Color

```csharp
NodeColor Color;
```


### property this[bool direction]

```csharp
Node? this[bool direction];
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100