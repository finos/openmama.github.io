---
title: com::wombat::mama::MamaSubscriptionType
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSubscriptionType



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| short | **[getValue](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#function-getvalue)**() |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#function-tostring)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[NORMAL](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-normal)**  |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[GROUP](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-group)**  |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[BOOK](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-book)**  |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[BASIC](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-basic)**  |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[DICTIONARY](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-dictionary)**  |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[SYMBOL_LIST](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-symbol-list)**  |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[SYMBOL_LIST_NORMAL](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-symbol-list-normal)**  |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[SYMBOL_LIST_GROUP](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-symbol-list-group)**  |
| final [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[SYMBOL_LIST_BOOK](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html#variable-symbol-list-book)**  |

## Detailed Description

```java
class com::wombat::mama::MamaSubscriptionType;
```


Subscription request type of a MAMA subscription. Some types of subscriptions require special handling inside MAMA or by the publisher. 

## Public Functions Documentation

### function getValue

```java
inline short getValue()
```


### function toString

```java
inline String toString()
```


## Public Attributes Documentation

### variable NORMAL

```java
static final MamaSubscriptionType NORMAL =
    new MamaSubscriptionType ((short)0, "NORMAL");
```


### variable GROUP

```java
static final MamaSubscriptionType GROUP = 
    new MamaSubscriptionType ((short)1,"GROUP");
```


### variable BOOK

```java
static final MamaSubscriptionType BOOK = 
    new MamaSubscriptionType ((short)2,"BOOK");
```


### variable BASIC

```java
static final MamaSubscriptionType BASIC = 
    new MamaSubscriptionType ((short)3,"BASIC");
```


### variable DICTIONARY

```java
static final MamaSubscriptionType DICTIONARY =
    new MamaSubscriptionType ((short)4, "DICTIONARY");
```


### variable SYMBOL_LIST

```java
static final MamaSubscriptionType SYMBOL_LIST = 
    new MamaSubscriptionType ((short)5,"SYMBOL_LIST");
```


### variable SYMBOL_LIST_NORMAL

```java
static final MamaSubscriptionType SYMBOL_LIST_NORMAL = 
    new MamaSubscriptionType ((short)6,"NORMAL_SYMBOL_LIST");
```


### variable SYMBOL_LIST_GROUP

```java
static final MamaSubscriptionType SYMBOL_LIST_GROUP =
    new MamaSubscriptionType ((short)7,"GROUP_SYMBOL_LIST");
```


### variable SYMBOL_LIST_BOOK

```java
static final MamaSubscriptionType SYMBOL_LIST_BOOK =
    new MamaSubscriptionType ((short)8,"BOOK_SYMBOL_LIST");
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100