---
title: com::wombat::mama::MamaResourcePool
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaResourcePool





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaResourcePool](classcom_1_1wombat_1_1mama_1_1MamaResourcePool.html#function-mamaresourcepool)**(final String name) |
| synchronized void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaResourcePool.html#function-destroy)**() |
| synchronized [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) | **[createSubscriptionFromUri](classcom_1_1wombat_1_1mama_1_1MamaResourcePool.html#function-createsubscriptionfromuri)**(final String uri, final [MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html) callbacks, final Object closure) |
| synchronized [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) | **[createSubscriptionFromComponents](classcom_1_1wombat_1_1mama_1_1MamaResourcePool.html#function-createsubscriptionfromcomponents)**(final String transportName, final String sourceName, final String topicName, final [MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html) callbacks, final Object closure) |
| synchronized [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) | **[createSubscriptionFromTopicWithSource](classcom_1_1wombat_1_1mama_1_1MamaResourcePool.html#function-createsubscriptionfromtopicwithsource)**(final String sourceName, final String topicName, final [MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html) callbacks, final Object closure) |
| synchronized [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) | **[createSubscriptionFromTopic](classcom_1_1wombat_1_1mama_1_1MamaResourcePool.html#function-createsubscriptionfromtopic)**(final String topicName, final [MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html) callbacks, final Object closure) |
| synchronized [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) | **[createTransportFromName](classcom_1_1wombat_1_1mama_1_1MamaResourcePool.html#function-createtransportfromname)**(final String transportName) |
| synchronized void | **[destroySubscription](classcom_1_1wombat_1_1mama_1_1MamaResourcePool.html#function-destroysubscription)**(final [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |

## Public Functions Documentation

### function MamaResourcePool

```java
inline MamaResourcePool(
    final String name
)
```


**Parameters**: 

  * **name** The name of the MAMA resource pool in configuration 


Creates a MAMA resource pool to manage subscription lifecycles on behalf of the application calling it.


### function destroy

```java
inline synchronized void destroy()
```


Destroys a MAMA resource pool and all subscriptions, transports etc that were created using it. 


### function createSubscriptionFromUri

```java
inline synchronized MamaSubscription createSubscriptionFromUri(
    final String uri,
    final MamaSubscriptionCallback callbacks,
    final Object closure
)
```


**Parameters**: 

  * **uri** A url string in "bridge://transport/source/topic?param=1" format 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A pointer to a mama subscription object, or NULL on failure 

Creates a MAMA Subscription using the given uri which is expected to be a null terminated string in "bridge://transport/source/topic?param=1" format.


### function createSubscriptionFromComponents

```java
inline synchronized MamaSubscription createSubscriptionFromComponents(
    final String transportName,
    final String sourceName,
    final String topicName,
    final MamaSubscriptionCallback callbacks,
    final Object closure
)
```


**Parameters**: 

  * **transportName** The name of the transport to use. If it has not yet been used, it will be created in the process here. 
  * **sourceName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A pointer to a mama subscription object, or NULL on failure 

Creates a MAMA Subscription using the given components which are referenced by name.


### function createSubscriptionFromTopicWithSource

```java
inline synchronized MamaSubscription createSubscriptionFromTopicWithSource(
    final String sourceName,
    final String topicName,
    final MamaSubscriptionCallback callbacks,
    final Object closure
)
```


**Parameters**: 

  * **sourceName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A pointer to a mama subscription object, or NULL on failure 

Creates a MAMA Subscription using the given topic and source and the default resource pool's subscribing transport (default_transport_sub).


### function createSubscriptionFromTopic

```java
inline synchronized MamaSubscription createSubscriptionFromTopic(
    final String topicName,
    final MamaSubscriptionCallback callbacks,
    final Object closure
)
```


**Parameters**: 

  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A pointer to a mama subscription object, or NULL on failure 

Creates a MAMA Subscription using the given topic the default resource pool's subscribing source (default_source_sub).


### function createTransportFromName

```java
inline synchronized MamaTransport createTransportFromName(
    final String transportName
)
```


**Parameters**: 

  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A pointer to a mama subscription object, or NULL on failure 

Creates a MAMA Subscription using the given topic the default resource pool's subscribing source (default_source_sub).


### function destroySubscription

```java
inline synchronized void destroySubscription(
    final MamaSubscription subscription
)
```


**Parameters**: 

  * **subscription** The subscription to destroy 


Destroys the given subscription and removes it from the resource pool asynchronously. There may be further callbacks after calling this function since this event is enqueued on the subscription's thread, so for any closure related shutdown code, cleanup should be performed in the subscription's onDestroy callback.


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100