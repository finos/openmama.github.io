---
title: com::wombat::mama::MamaMdDataType
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaMdDataType





## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#function-tostring)**() |
| int | **[getValue](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#function-getvalue)**() |
| boolean | **[equals](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#function-equals)**([MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) appDataType) |
| String | **[valueToString](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#function-valuetostring)**(int value) |
| [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[enumObjectForValue](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#function-enumobjectforvalue)**(int value) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final int | **[STANDARD_VALUE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-standard-value)**  |
| final [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[STANDARD](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-standard)**  |
| final int | **[ORDER_BOOK_VALUE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-order-book-value)**  |
| final [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[ORDER_BOOK](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-order-book)**  |
| final int | **[NEWS_STORY_VALUE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-news-story-value)**  |
| final [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[NEWS_STORY](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-news-story)**  |
| final int | **[WORLDVIEW_VALUE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-worldview-value)**  |
| final [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[WORLDVIEW](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-worldview)**  |
| final int | **[PROPERTY_VALUE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-property-value)**  |
| final [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[PROPERTY](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-property)**  |
| final int | **[USAGE_LOG_VALUE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-usage-log-value)**  |
| final [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[USAGE_LOG](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-usage-log)**  |
| final int | **[NEWS_QUERY_VALUE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-news-query-value)**  |
| final [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[NEWS_QUERY](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-news-query)**  |
| final int | **[TEMPLATE_VALUE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-template-value)**  |
| final [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[TEMPLATE](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html#variable-template)**  |

## Public Functions Documentation

### function toString

```java
inline String toString()
```


**Return**: Name for the type. 

Returns the stringified name for the enumerated type.


### function getValue

```java
inline int getValue()
```


**Return**: The integer type. 

Returns the integer value for the type. This value can be used in switch statements against the public XXX_VALUE static members of the class.


### function equals

```java
inline boolean equals(
    MamaMdDataType appDataType
)
```


**Parameters**: 

  * **appDataType** The object to check equality against. 


**Return**: Whether the two objects are equal. 

Compare the two types for equality. Returns true if the integer value of both types is equal. Otherwise returns false.


### function valueToString

```java
static inline String valueToString(
    int value
)
```


**Parameters**: 

  * **value** The int value for a [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html). 


**Return**: The string name value of the specified [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) integer value. 

Utility method for mapping type integer values to corresponding string values.

Returns "UNKNOWN" is the int type value is not recognised.


### function enumObjectForValue

```java
static inline MamaMdDataType enumObjectForValue(
    int value
)
```


**Parameters**: 

  * **value** Int value for a [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html). 


**Return**: Instance of a [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) if a mapping exists. 

Return an instance of a [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) corresponding to the specified integer value. Returns null if the integer value is not recognised.


## Public Attributes Documentation

### variable STANDARD_VALUE

```java
static final int STANDARD_VALUE = 0;
```


### variable STANDARD

```java
static final MamaMdDataType STANDARD = new MamaMdDataType
                             (valueToString (STANDARD_VALUE), STANDARD_VALUE);
```


### variable ORDER_BOOK_VALUE

```java
static final int ORDER_BOOK_VALUE = 1;
```


### variable ORDER_BOOK

```java
static final MamaMdDataType ORDER_BOOK = new MamaMdDataType
                             (valueToString (ORDER_BOOK_VALUE), ORDER_BOOK_VALUE);
```


### variable NEWS_STORY_VALUE

```java
static final int NEWS_STORY_VALUE = 2;
```


### variable NEWS_STORY

```java
static final MamaMdDataType NEWS_STORY = new MamaMdDataType
                             (valueToString (NEWS_STORY_VALUE), NEWS_STORY_VALUE);
```


### variable WORLDVIEW_VALUE

```java
static final int WORLDVIEW_VALUE = 3;
```


### variable WORLDVIEW

```java
static final MamaMdDataType WORLDVIEW = new MamaMdDataType
                             (valueToString (WORLDVIEW_VALUE), WORLDVIEW_VALUE);
```


### variable PROPERTY_VALUE

```java
static final int PROPERTY_VALUE = 4;
```


### variable PROPERTY

```java
static final MamaMdDataType PROPERTY = new MamaMdDataType
                             (valueToString (PROPERTY_VALUE), PROPERTY_VALUE);
```


### variable USAGE_LOG_VALUE

```java
static final int USAGE_LOG_VALUE = 5;
```


### variable USAGE_LOG

```java
static final MamaMdDataType USAGE_LOG = new MamaMdDataType
                             (valueToString (USAGE_LOG_VALUE), USAGE_LOG_VALUE);
```


### variable NEWS_QUERY_VALUE

```java
static final int NEWS_QUERY_VALUE = 6;
```


### variable NEWS_QUERY

```java
static final MamaMdDataType NEWS_QUERY = new MamaMdDataType
                             (valueToString (NEWS_QUERY_VALUE), NEWS_QUERY_VALUE);
```


### variable TEMPLATE_VALUE

```java
static final int TEMPLATE_VALUE = 7;
```


### variable TEMPLATE

```java
static final MamaMdDataType TEMPLATE = new MamaMdDataType
                             (valueToString (TEMPLATE_VALUE), TEMPLATE_VALUE);
```


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100