---
title: mama/resourcepool.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/resourcepool.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaResourcePool_create](resourcepool_8h.html#function-mamaresourcepool-create)**(mamaResourcePool * resourcePool, const char * name) |
| MAMAExpDLL mama_status | **[mamaResourcePool_destroy](resourcepool_8h.html#function-mamaresourcepool-destroy)**(mamaResourcePool resourcePool) |
| MAMAExpDLL mama_status | **[mamaResourcePool_createSubscriptionFromUri](resourcepool_8h.html#function-mamaresourcepool-createsubscriptionfromuri)**(mamaResourcePool resourcePool, mamaSubscription * subscription, const char * uri, [mamaMsgCallbacks](structmamaMsgCallbacks__.html) callbacks, void * closure) |
| MAMAExpDLL mama_status | **[mamaResourcePool_createSubscriptionFromComponents](resourcepool_8h.html#function-mamaresourcepool-createsubscriptionfromcomponents)**(mamaResourcePool resourcePool, mamaSubscription * subscription, const char * transportName, const char * sourceName, const char * topicName, [mamaMsgCallbacks](structmamaMsgCallbacks__.html) callbacks, void * closure) |
| MAMAExpDLL mama_status | **[mamaResourcePool_createSubscriptionFromTopicWithSource](resourcepool_8h.html#function-mamaresourcepool-createsubscriptionfromtopicwithsource)**(mamaResourcePool resourcePool, mamaSubscription * subscription, const char * sourceName, const char * topicName, [mamaMsgCallbacks](structmamaMsgCallbacks__.html) callbacks, void * closure) |
| MAMAExpDLL mama_status | **[mamaResourcePool_createSubscriptionFromTopic](resourcepool_8h.html#function-mamaresourcepool-createsubscriptionfromtopic)**(mamaResourcePool resourcePool, mamaSubscription * subscription, const char * topicName, [mamaMsgCallbacks](structmamaMsgCallbacks__.html) callbacks, void * closure) |
| MAMAExpDLL mama_status | **[mamaResourcePool_createTransportFromName](resourcepool_8h.html#function-mamaresourcepool-createtransportfromname)**(mamaResourcePool resourcePool, mamaTransport * transport, const char * transportName) |
| MAMAExpDLL mama_status | **[mamaResourcePool_destroySubscription](resourcepool_8h.html#function-mamaresourcepool-destroysubscription)**(mamaResourcePool resourcePool, mamaSubscription subscription) |


## Functions Documentation

### function mamaResourcePool_create

```cpp
MAMAExpDLL mama_status mamaResourcePool_create(
    mamaResourcePool * resourcePool,
    const char * name
)
```


**Parameters**: 

  * **resourcePool** A pointer to populate with the newly allocated pool. 
  * **name** The name of the MAMA resource pool in configuration 


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA resource pool to manage subscription lifecycles on behalf of the application calling it.


### function mamaResourcePool_destroy

```cpp
MAMAExpDLL mama_status mamaResourcePool_destroy(
    mamaResourcePool resourcePool
)
```


**Parameters**: 

  * **resourcePool** A reference to the mama resource pool to destroy 


**Return**: A mama_status value to reflect if this operation was successful. 

Destroys a MAMA resource pool and all subscriptions, transports etc that were created using it.


### function mamaResourcePool_createSubscriptionFromUri

```cpp
MAMAExpDLL mama_status mamaResourcePool_createSubscriptionFromUri(
    mamaResourcePool resourcePool,
    mamaSubscription * subscription,
    const char * uri,
    mamaMsgCallbacks callbacks,
    void * closure
)
```


**Parameters**: 

  * **resourcePool** A reference to the mama resource pool to use 
  * **subscription** A pointer which this function will populate with any newly created subscriptions. 
  * **uri** A url string in "bridge://transport/source/topic?param=1" format 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA Subscription using the given uri which is expected to be a null terminated string in "bridge://transport/source/topic?param=1" format.


### function mamaResourcePool_createSubscriptionFromComponents

```cpp
MAMAExpDLL mama_status mamaResourcePool_createSubscriptionFromComponents(
    mamaResourcePool resourcePool,
    mamaSubscription * subscription,
    const char * transportName,
    const char * sourceName,
    const char * topicName,
    mamaMsgCallbacks callbacks,
    void * closure
)
```


**Parameters**: 

  * **resourcePool** A reference to the mama resource pool to use 
  * **subscription** A pointer which this function will populate with any newly created subscriptions. 
  * **transportName** The name of the transport to use. If it has not yet been used, it will be created in the process here. 
  * **sourceName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA Subscription using the given components which are referenced by name.


### function mamaResourcePool_createSubscriptionFromTopicWithSource

```cpp
MAMAExpDLL mama_status mamaResourcePool_createSubscriptionFromTopicWithSource(
    mamaResourcePool resourcePool,
    mamaSubscription * subscription,
    const char * sourceName,
    const char * topicName,
    mamaMsgCallbacks callbacks,
    void * closure
)
```


**Parameters**: 

  * **resourcePool** A reference to the mama resource pool to use 
  * **subscription** A pointer which this function will populate with any newly created subscriptions. 
  * **sourceName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA Subscription using the given topic and source and the default resource pool's subscribing transport (default_transport_sub).


### function mamaResourcePool_createSubscriptionFromTopic

```cpp
MAMAExpDLL mama_status mamaResourcePool_createSubscriptionFromTopic(
    mamaResourcePool resourcePool,
    mamaSubscription * subscription,
    const char * topicName,
    mamaMsgCallbacks callbacks,
    void * closure
)
```


**Parameters**: 

  * **resourcePool** A reference to the mama resource pool to use 
  * **subscription** A pointer which this function will populate with any newly created subscriptions. 
  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA Subscription using the given topic the default resource pool's subscribing source (default_source_sub).


### function mamaResourcePool_createTransportFromName

```cpp
MAMAExpDLL mama_status mamaResourcePool_createTransportFromName(
    mamaResourcePool resourcePool,
    mamaTransport * transport,
    const char * transportName
)
```


**Parameters**: 

  * **resourcePool** A reference to the mama resource pool to use 
  * **subscription** A pointer which this function will populate with any newly created subscriptions. 
  * **topicName** The name of the source to use. If it has not yet been used, it will be created in the process here. 
  * **callbacks** A list of mama message callbacks to invoke during the subscription's life cycle 
  * **closure** An opaque object to point to your callbacks 


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA Subscription using the given topic the default resource pool's subscribing source (default_source_sub).


### function mamaResourcePool_destroySubscription

```cpp
MAMAExpDLL mama_status mamaResourcePool_destroySubscription(
    mamaResourcePool resourcePool,
    mamaSubscription subscription
)
```


**Parameters**: 

  * **resourcePool** A reference to the mama resource pool to use 
  * **subscription** The subscription to destroy 


**Return**: A mama_status value to reflect if this operation was successful. 

Destroys the given subscription and removes it from the resource pool asynchronously. There may be further callbacks after calling this function since this event is enqueued on the subscription's thread, so for any closure related shutdown code, cleanup should be performed in the subscription's onDestroy callback.




## Source code

```cpp
#ifndef MamaResourcePoolH__
#define MamaResourcePoolH__

#if defined(__cplusplus)
extern "C"
{
#endif

#include <mama/config.h>
#include <mama/status.h>
#include <mama/types.h>
#include <mama/subscription.h>


MAMAExpDLL
extern mama_status
mamaResourcePool_create (
    mamaResourcePool* resourcePool,
    const char* name
);


MAMAExpDLL
extern mama_status
mamaResourcePool_destroy (
    mamaResourcePool resourcePool
);


MAMAExpDLL
extern mama_status
mamaResourcePool_createSubscriptionFromUri (
    mamaResourcePool resourcePool,
    mamaSubscription* subscription,
    const char* uri,
    mamaMsgCallbacks callbacks,
    void* closure
);


MAMAExpDLL
extern mama_status
mamaResourcePool_createSubscriptionFromComponents (
    mamaResourcePool resourcePool,
    mamaSubscription* subscription,
    const char* transportName,
    const char* sourceName,
    const char* topicName,
    mamaMsgCallbacks callbacks,
    void* closure
);


MAMAExpDLL
extern mama_status
mamaResourcePool_createSubscriptionFromTopicWithSource (
    mamaResourcePool resourcePool,
    mamaSubscription* subscription,
    const char* sourceName,
    const char* topicName,
    mamaMsgCallbacks callbacks,
    void* closure
);


MAMAExpDLL
extern mama_status
mamaResourcePool_createSubscriptionFromTopic (
    mamaResourcePool resourcePool,
    mamaSubscription* subscription,
    const char* topicName,
    mamaMsgCallbacks callbacks,
    void* closure
);


MAMAExpDLL
extern mama_status
mamaResourcePool_createTransportFromName (
    mamaResourcePool resourcePool,
    mamaTransport* transport,
    const char* transportName
);


MAMAExpDLL
extern mama_status
mamaResourcePool_destroySubscription (
    mamaResourcePool resourcePool,
    mamaSubscription subscription
);

#if defined(__cplusplus)
}
#endif

#endif /* MamaResourcePoolH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
