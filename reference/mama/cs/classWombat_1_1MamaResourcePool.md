---
title: Wombat::MamaResourcePool
summary: A MamaResourcePool is a convenience wrapper to allow easy subscription and management of OpenMAMA related resources 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaResourcePool



A [MamaResourcePool]() is a convenience wrapper to allow easy subscription and management of OpenMAMA related resources 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[destroy](classWombat_1_1MamaResourcePool.html#function-destroy)**() |
| [MamaSubscription](classWombat_1_1MamaSubscription.html) | **[createSubscriptionFromUri](classWombat_1_1MamaResourcePool.html#function-createsubscriptionfromuri)**(string uri, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callbacks, object closure) |
| [MamaSubscription](classWombat_1_1MamaSubscription.html) | **[createSubscriptionFromComponents](classWombat_1_1MamaResourcePool.html#function-createsubscriptionfromcomponents)**(string transportName, string sourceName, string topicName, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callbacks, object closure) |
| [MamaSubscription](classWombat_1_1MamaSubscription.html) | **[createSubscriptionFromTopicWithSource](classWombat_1_1MamaResourcePool.html#function-createsubscriptionfromtopicwithsource)**(string sourceName, string topicName, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callbacks, object closure) |
| [MamaSubscription](classWombat_1_1MamaSubscription.html) | **[createSubscriptionFromTopic](classWombat_1_1MamaResourcePool.html#function-createsubscriptionfromtopic)**(string topicName, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callbacks, object closure) |
| [MamaTransport](classWombat_1_1MamaTransport.html) | **[createTransportFromName](classWombat_1_1MamaResourcePool.html#function-createtransportfromname)**(string transportName) |
| void | **[destroySubscription](classWombat_1_1MamaResourcePool.html#function-destroysubscription)**([MamaSubscription](classWombat_1_1MamaSubscription.html) subscription) |
| | **[MamaResourcePool](classWombat_1_1MamaResourcePool.html#function-mamaresourcepool)**(string name) |

## Public Functions Documentation

### function destroy

```csharp
void destroy()
```


Destroys a MAMA resource pool and all subscriptions, transports etc that were created using it. 


### function createSubscriptionFromUri

```csharp
MamaSubscription createSubscriptionFromUri(
    string uri,
    MamaSubscriptionCallback callbacks,
    object closure
)
```


**Parameters**: 

  * **uri** A url string in "bridge://transport/source/topic?param=1" format 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A pointer to a mama subscription object, or NULL on failure 

Creates a MAMA Subscription using the given uri which is expected to be a null terminated string in "bridge://transport/source/topic?param=1" format.


### function createSubscriptionFromComponents

```csharp
MamaSubscription createSubscriptionFromComponents(
    string transportName,
    string sourceName,
    string topicName,
    MamaSubscriptionCallback callbacks,
    object closure
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

```csharp
MamaSubscription createSubscriptionFromTopicWithSource(
    string sourceName,
    string topicName,
    MamaSubscriptionCallback callbacks,
    object closure
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

```csharp
MamaSubscription createSubscriptionFromTopic(
    string topicName,
    MamaSubscriptionCallback callbacks,
    object closure
)
```


**Parameters**: 

  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A pointer to a mama subscription object, or NULL on failure 

Creates a MAMA Subscription using the given topic the default resource pool's subscribing source (default_source_sub).


### function createTransportFromName

```csharp
MamaTransport createTransportFromName(
    string transportName
)
```


**Parameters**: 

  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A pointer to a mama subscription object, or NULL on failure 

Creates a MAMA Subscription using the given topic the default resource pool's subscribing source (default_source_sub).


### function destroySubscription

```csharp
void destroySubscription(
    MamaSubscription subscription
)
```


**Parameters**: 

  * **subscription** The subscription to destroy 


Destroys the given subscription and removes it from the resource pool asynchronously. There may be further callbacks after calling this function since this event is enqueued on the subscription's thread, so for any closure related shutdown code, cleanup should be performed in the subscription's onDestroy callback.


### function MamaResourcePool

```csharp
MamaResourcePool(
    string name
)
```


**Parameters**: 

  * **name** The name of the MAMA resource pool in configuration 


Creates a MAMA resource pool to manage subscription lifecycles on behalf of the application calling it.


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100