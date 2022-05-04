---
title: com::wombat::mama::MamaSubscriptionState
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSubscriptionState



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[getValue](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#function-getvalue)**() |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#function-tostring)**() |
| [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[getSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#function-getsubscriptionstate)**(int state) |
| [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[parseSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#function-parsesubscriptionstate)**(String state) |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#function-tostring)**(int state) |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#function-tostring)**([MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) state) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_UNKNOWN](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-unknown)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_ALLOCATED](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-allocated)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_SETUP](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-setup)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_ACTIVATING](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-activating)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_ACTIVATED](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-activated)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_DEACTIVATING](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-deactivating)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_DEACTIVATED](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-deactivated)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_DESTROYING](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-destroying)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_DESTROYED](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-destroyed)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_DEALLOCATING](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-deallocating)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_DEALLOCATED](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-deallocated)**  |
| final [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[MAMA_SUBSCRIPTION_REACTIVATING](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html#variable-mama-subscription-reactivating)**  |

## Detailed Description

```java
class com::wombat::mama::MamaSubscriptionState;
```


This class is the java equivalent of the C subscription state enumeration. 

## Public Functions Documentation

### function getValue

```java
inline int getValue()
```


**Return**: The state as an integer. 

Returns the integer representation of the subscription state.


### function toString

```java
inline String toString()
```


**Return**: The string representation. 

This function returns the string representation of the member state.


### function getSubscriptionState

```java
static inline MamaSubscriptionState getSubscriptionState(
    int state
)
```


**Parameters**: 

  * **state** The state. 


**Return**: To return the MamaSusbscriptionState instance. 

This function converts the integer state value to a corresponding [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) object.


### function parseSubscriptionState

```java
static inline MamaSubscriptionState parseSubscriptionState(
    String state
)
```


**Parameters**: 

  * **state** 


**Return**: The corresponding state object or MAMA_SUBSCRIPTION_UNKNOWN if the string isn't recognised. 

This function will return the subscription state corresponding to the supplied string. Note that if the string is not recognised then MAMA_SUBSCRIPTION_UNKNOWN will be returned.


### function toString

```java
static inline String toString(
    int state
)
```


**Parameters**: 

  * **state** The state. 


**Return**: The string representation. 

This function returns the string representation of the state.


### function toString

```java
static inline String toString(
    MamaSubscriptionState state
)
```


**Parameters**: 

  * **state** The state. 


**Return**: The string representation. 

This function returns the string representation of the state.


## Public Attributes Documentation

### variable MAMA_SUBSCRIPTION_UNKNOWN

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_UNKNOWN = new MamaSubscriptionState(0);
```


### variable MAMA_SUBSCRIPTION_ALLOCATED

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_ALLOCATED = new MamaSubscriptionState(1);
```


### variable MAMA_SUBSCRIPTION_SETUP

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_SETUP = new MamaSubscriptionState(2);
```


### variable MAMA_SUBSCRIPTION_ACTIVATING

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_ACTIVATING = new MamaSubscriptionState(3);
```


### variable MAMA_SUBSCRIPTION_ACTIVATED

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_ACTIVATED = new MamaSubscriptionState(4);
```


### variable MAMA_SUBSCRIPTION_DEACTIVATING

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_DEACTIVATING = new MamaSubscriptionState(5);
```


### variable MAMA_SUBSCRIPTION_DEACTIVATED

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_DEACTIVATED = new MamaSubscriptionState(6);
```


### variable MAMA_SUBSCRIPTION_DESTROYING

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_DESTROYING = new MamaSubscriptionState(7);
```


### variable MAMA_SUBSCRIPTION_DESTROYED

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_DESTROYED = new MamaSubscriptionState(8);
```


### variable MAMA_SUBSCRIPTION_DEALLOCATING

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_DEALLOCATING = new MamaSubscriptionState(9);
```


### variable MAMA_SUBSCRIPTION_DEALLOCATED

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_DEALLOCATED = new MamaSubscriptionState(10);
```


### variable MAMA_SUBSCRIPTION_REACTIVATING

```java
static final MamaSubscriptionState MAMA_SUBSCRIPTION_REACTIVATING = new MamaSubscriptionState(11);
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100