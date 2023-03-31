---
title: com::wombat::mama::MamaThrottleInstance
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaThrottleInstance



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#function-tostring)**() |
| int | **[getValue](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#function-getvalue)**() |
| boolean | **[equals](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#function-equals)**([MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) throttleInstance) |
| String | **[valueToString](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#function-valuetostring)**(int value) |
| [MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) | **[enumObjectForValue](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#function-enumobjectforvalue)**(int value) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final int | **[DEFAULT_THROTTLE_VALUE](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#variable-default-throttle-value)**  |
| final [MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) | **[DEFAULT_THROTTLE](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#variable-default-throttle)**  |
| final int | **[INITIAL_THROTTLE_VALUE](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#variable-initial-throttle-value)**  |
| final [MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) | **[INITIAL_THROTTLE](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#variable-initial-throttle)**  |
| final int | **[RECAP_THROTTLE_VALUE](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#variable-recap-throttle-value)**  |
| final [MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) | **[RECAP_THROTTLE](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html#variable-recap-throttle)**  |

## Detailed Description

```java
class com::wombat::mama::MamaThrottleInstance;
```


This class provides an enumeration of types and methods for MAMA throttle instance. Used with setOutboundThrottle and getOutboundThrottle in the JNI version of the API.

Enum to determine into which throttle a call applies. Currently the default throttle, used by the publisher, and the initial value request throttle are the same. [Mama](classcom_1_1wombat_1_1mama_1_1Mama.html) sends recap requests on a separate throttle. 

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
    MamaThrottleInstance throttleInstance
)
```


**Parameters**: 

  * **throttleInstance** The object to check equality against. 


**Return**: Whether the two objects are equal. 

Compare the two types for equality. Returns true if the integer value of both types is equal. Otherwise returns false.


### function valueToString

```java
static inline String valueToString(
    int value
)
```


**Parameters**: 

  * **value** The int value for a [MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html). 


**Return**: The string name value of the specified [MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) integer value. 

Utility method for mapping type integer values to corresponding string values.

Returns "UNKNOWN" is the int type value is not recognised.


### function enumObjectForValue

```java
static inline MamaThrottleInstance enumObjectForValue(
    int value
)
```


**Parameters**: 

  * **value** Int value for a [MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html). 


**Return**: Instance of a [MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html) if a mapping exists. 

Return an instance of a [MamaMdMsgType](classcom_1_1wombat_1_1mama_1_1MamaMdMsgType.html) corresponding to the specified integer value. Returns null if the integer value is not recognised.


## Public Attributes Documentation

### variable DEFAULT_THROTTLE_VALUE

```java
static final int DEFAULT_THROTTLE_VALUE = 0;
```


The default throttle queue 


### variable DEFAULT_THROTTLE

```java
static final MamaThrottleInstance DEFAULT_THROTTLE = 
            new MamaThrottleInstance (valueToString (DEFAULT_THROTTLE_VALUE), 
                                      DEFAULT_THROTTLE_VALUE);
```


### variable INITIAL_THROTTLE_VALUE

```java
static final int INITIAL_THROTTLE_VALUE = 1;
```


The initial value throttle queue 


### variable INITIAL_THROTTLE

```java
static final MamaThrottleInstance INITIAL_THROTTLE = 
            new MamaThrottleInstance (valueToString (INITIAL_THROTTLE_VALUE), 
                                      INITIAL_THROTTLE_VALUE);
```


### variable RECAP_THROTTLE_VALUE

```java
static final int RECAP_THROTTLE_VALUE = 2;
```


The recap throttle queue 


### variable RECAP_THROTTLE

```java
static final MamaThrottleInstance RECAP_THROTTLE = 
            new MamaThrottleInstance (valueToString (RECAP_THROTTLE_VALUE), 
                                      RECAP_THROTTLE_VALUE);
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100