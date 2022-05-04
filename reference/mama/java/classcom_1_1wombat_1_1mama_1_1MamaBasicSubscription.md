---
title: com::wombat::mama::MamaBasicSubscription
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaBasicSubscription





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-mamabasicsubscription)**() |
| void | **[createBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-createbasicsubscription)**(final [MamaBasicSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaBasicSubscriptionCallback.html) callback, final [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, final [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, final String topic, final Object closure) |
| void | **[createBasicWildCardSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-createbasicwildcardsubscription)**(final [MamaBasicWildCardSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaBasicWildCardSubscriptionCallback.html) callback, final [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, final [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, final String source, final String topic, final Object closure) |
| Object | **[getClosure](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-getclosure)**() |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-getpointerval)**() |
| [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[getState](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-getstate)**() |
| native void | **[deallocate](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-deallocate)**() |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-destroy)**() |
| native void | **[destroyEx](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-destroyex)**() |
| native String | **[getSymbol](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-getsymbol)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[finalize](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html#function-finalize)**() |

## Public Functions Documentation

### function MamaBasicSubscription

```java
inline MamaBasicSubscription()
```


The constructor allocates the underlying C subscription. 


### function createBasicSubscription

```java
inline void createBasicSubscription(
    final MamaBasicSubscriptionCallback callback,
    final MamaTransport transport,
    final MamaQueue queue,
    final String topic,
    final Object closure
)
```


**Parameters**: 

  * **callback** The object implementing the callback functions. 
  * **transport** The [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html). 
  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **topic** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription. 


Create a basic subscription without marketdata semantics.


### function createBasicWildCardSubscription

```java
inline void createBasicWildCardSubscription(
    final MamaBasicWildCardSubscriptionCallback callback,
    final MamaTransport transport,
    final MamaQueue queue,
    final String source,
    final String topic,
    final Object closure
)
```


### function getClosure

```java
inline Object getClosure()
```


**Return**: The closure object. 

This function returns the closure supplied to the createSubscription function.


### function getPointerVal

```java
inline long getPointerVal()
```


**Return**: The pointer. 

This function returns the pointer to the underlying C subscription. 


### function getState

```java
inline MamaSubscriptionState getState()
```


**Return**: The [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) that represents the current state of the subscription. 

This function returns the current state of the subscription as one of the [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) instances, see this class for more information.


### function deallocate

```java
native void deallocate()
```


De-allocates the underlying C subscription. This can be used to reduce time during finalization. 


### function destroy

```java
native void destroy()
```


This function will destroy the subscription, it must be called from the same thread that is processing the queue for the subscription. Use destroyEx to destroy the subscription from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received. 


### function destroyEx

```java
native void destroyEx()
```


This function will destroy the subscription and can be called from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received. To destroy from the dispatching thread the destroy function should be used in preference. 


### function getSymbol

```java
native String getSymbol()
```


**Return**: The symbol. 

This function returns the symbol subscribed to.


## Protected Functions Documentation

### function finalize

```java
inline void finalize()
```


**Exceptions**: 

  * **Throwable** A [MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html) will be thrown if the underlying subscription could not be de-allocated. 


The finalizer deallocates the underlying C subscritpion. 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100