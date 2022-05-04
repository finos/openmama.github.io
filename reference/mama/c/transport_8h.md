---
title: mama/transport.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/transport.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaTransportEvent](transport_8h.html#enum-mamatransportevent)** { MAMA_TRANSPORT_CONNECT, MAMA_TRANSPORT_CONNECT_FAILED, MAMA_TRANSPORT_RECONNECT, MAMA_TRANSPORT_DISCONNECT, MAMA_TRANSPORT_ACCEPT, MAMA_TRANSPORT_ACCEPT_RECONNECT, MAMA_TRANSPORT_PUBLISHER_DISCONNECT, MAMA_TRANSPORT_QUALITY, MAMA_TRANSPORT_NAMING_SERVICE_CONNECT, MAMA_TRANSPORT_NAMING_SERVICE_DISCONNECT, MAMA_TRANSPORT_WRITE_QUEUE_HIGH_WATER_MARK, MAMA_TRANSPORT_WRITE_QUEUE_LOW_WATER_MARK} |
| enum| **[mamaTransportTopicEvent](transport_8h.html#enum-mamatransporttopicevent)** { MAMA_TRANSPORT_TOPIC_SUBSCRIBED, MAMA_TRANSPORT_TOPIC_UNSUBSCRIBED, MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR, MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_NOT_ENTITLED, MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_BAD_SYMBOL} |
| enum| **[tportLbScheme](transport_8h.html#enum-tportlbscheme)** { TPORT_LB_SCHEME_STATIC, TPORT_LB_SCHEME_ROUND_ROBIN, TPORT_LB_SCHEME_API, TPORT_LB_SCHEME_LIBRARY} |
| enum| **[mamaThrottleInstance](transport_8h.html#enum-mamathrottleinstance)** { MAMA_THROTTLE_DEFAULT = 0, MAMA_THROTTLE_INITIAL = 1, MAMA_THROTTLE_RECAP = 2} |
| typedef void(MAMACALLTYPE *)(mamaTransport tport, mamaTransportEvent, short cause, const void *platformInfo, void *closure) | **[mamaTransportCB](transport_8h.html#typedef-mamatransportcb)**  |
| typedef void(MAMACALLTYPE *)(mamaTransport tport, mamaTransportTopicEvent event, const char *topic, const void *platformInfo, void *closure) | **[mamaTransportTopicCB](transport_8h.html#typedef-mamatransporttopiccb)**  |
| typedef void(*)(int numTransports, int *transportIndex) | **[mamaTransportLbInitialCB](transport_8h.html#typedef-mamatransportlbinitialcb)**  |
| typedef void(*)(int curTransportIndex, int numTransports, const char *source, const char *symbol, int *nextTransportIndex) | **[mamaTransportLbCB](transport_8h.html#typedef-mamatransportlbcb)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const MAMAExpDLL char * | **[mamaTransportTopicEvent_toString](transport_8h.html#function-mamatransporttopicevent-tostring)**(mamaTransportTopicEvent event) |
| const MAMAExpDLL char * | **[mamaTransportEvent_toString](transport_8h.html#function-mamatransportevent-tostring)**(mamaTransportEvent event) |
| MAMAExpDLL mama_status | **[mamaTransport_setTransportCallback](transport_8h.html#function-mamatransport-settransportcallback)**(mamaTransport transport, mamaTransportCB callback, void * closure) |
| MAMAExpDLL mama_status | **[mamaTransport_setTransportTopicCallback](transport_8h.html#function-mamatransport-settransporttopiccallback)**(mamaTransport transport, mamaTransportTopicCB callback, void * closure) |
| MAMAExpDLL mama_status | **[mamaTransport_setTransportCallbackQueue](transport_8h.html#function-mamatransport-settransportcallbackqueue)**(mamaTransport transport, mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaTransport_getTransportCallbackQueue](transport_8h.html#function-mamatransport-gettransportcallbackqueue)**(mamaTransport transport, mamaQueue * queue) |
| MAMAExpDLL mama_status | **[mamaTransport_setWriteQueueWatermarks](transport_8h.html#function-mamatransport-setwritequeuewatermarks)**(mamaTransport transport, uint32_t highWater, uint32_t lowWater) |
| MAMAExpDLL mama_status | **[mamaTransport_allocate](transport_8h.html#function-mamatransport-allocate)**(mamaTransport * result) |
| MAMAExpDLL mama_status | **[mamaTransport_create](transport_8h.html#function-mamatransport-create)**(mamaTransport transport, const char * name, mamaBridge bridgeImpl) |
| MAMAExpDLL mama_status | **[mamaTransport_setName](transport_8h.html#function-mamatransport-setname)**(mamaTransport transport, const char * name) |
| MAMAExpDLL mama_status | **[mamaTransport_getName](transport_8h.html#function-mamatransport-getname)**(mamaTransport transport, const char ** result) |
| const MAMAExpDLL char * | **[mamaTransport_getMiddleware](transport_8h.html#function-mamatransport-getmiddleware)**(mamaTransport transport) |
| MAMAExpDLL mama_status | **[mamaTransport_getOutboundThrottle](transport_8h.html#function-mamatransport-getoutboundthrottle)**(mamaTransport transport, mamaThrottleInstance instance, double * result) |
| MAMAExpDLL void | **[mamaTransport_disableRefresh](transport_8h.html#function-mamatransport-disablerefresh)**(mamaTransport transport, uint8_t disable) |
| MAMAExpDLL mama_status | **[mamaTransport_setOutboundThrottle](transport_8h.html#function-mamatransport-setoutboundthrottle)**(mamaTransport transport, mamaThrottleInstance instance, double outboundThrottle) |
| MAMAExpDLL void | **[mamaTransport_setSymbolMapFunc](transport_8h.html#function-mamatransport-setsymbolmapfunc)**(mamaTransport transport, mamaSymbolMapFunc mapFunc, void * closure) |
| MAMAExpDLL mamaSymbolMapFunc | **[mamaTransport_getSymbolMapFunc](transport_8h.html#function-mamatransport-getsymbolmapfunc)**(mamaTransport transport) |
| MAMAExpDLL void * | **[mamaTransport_getSymbolMapFuncClosure](transport_8h.html#function-mamatransport-getsymbolmapfuncclosure)**(mamaTransport transport) |
| MAMAExpDLL mama_status | **[mamaTransport_setDescription](transport_8h.html#function-mamatransport-setdescription)**(mamaTransport transport, const char * description) |
| MAMAExpDLL mama_status | **[mamaTransport_getDescription](transport_8h.html#function-mamatransport-getdescription)**(mamaTransport transport, const char ** description) |
| MAMAExpDLL mama_status | **[mamaTransport_setInvokeQualityForAllSubscs](transport_8h.html#function-mamatransport-setinvokequalityforallsubscs)**(mamaTransport transport, int invokeQualityForAllSubscs) |
| MAMAExpDLL mama_status | **[mamaTransport_getInvokeQualityForAllSubscs](transport_8h.html#function-mamatransport-getinvokequalityforallsubscs)**(const mamaTransport transport, int * invokeQualityForAllSubscs) |
| MAMAExpDLL mama_status | **[mamaTransport_getQuality](transport_8h.html#function-mamatransport-getquality)**(const mamaTransport transport, mamaQuality * quality) |
| MAMAExpDLL mama_status | **[mamaTransport_destroy](transport_8h.html#function-mamatransport-destroy)**(mamaTransport transport) |
| MAMAExpDLL mama_status | **[mamaTransport_findConnection](transport_8h.html#function-mamatransport-findconnection)**(mamaTransport transport, mamaConnection * result, const char * ipAddress, uint16_t port) |
| MAMAExpDLL mama_status | **[mamaTransport_getAllConnections](transport_8h.html#function-mamatransport-getallconnections)**(mamaTransport transport, mamaConnection ** result, uint32_t * len) |
| MAMAExpDLL mama_status | **[mamaTransport_getAllConnectionsForTopic](transport_8h.html#function-mamatransport-getallconnectionsfortopic)**(mamaTransport transport, const char * topic, mamaConnection ** result, uint32_t * len) |
| MAMAExpDLL mama_status | **[mamaTransport_freeAllConnections](transport_8h.html#function-mamatransport-freeallconnections)**(mamaTransport transport, mamaConnection * result, uint32_t len) |
| MAMAExpDLL mama_status | **[mamaTransport_getAllServerConnections](transport_8h.html#function-mamatransport-getallserverconnections)**(mamaTransport transport, mamaServerConnection ** result, uint32_t * len) |
| MAMAExpDLL mama_status | **[mamaTransport_freeAllServerConnections](transport_8h.html#function-mamatransport-freeallserverconnections)**(mamaTransport transport, mamaServerConnection * result, uint32_t len) |
| MAMAExpDLL mama_status | **[mamaTransport_setLbInitialCallback](transport_8h.html#function-mamatransport-setlbinitialcallback)**(mamaTransport transport, mamaTransportLbInitialCB callback) |
| MAMAExpDLL mama_status | **[mamaTransport_setLbCallback](transport_8h.html#function-mamatransport-setlbcallback)**(mamaTransport transport, mamaTransportLbCB callback) |
| MAMAExpDLL mama_status | **[mamaTransport_requestConflation](transport_8h.html#function-mamatransport-requestconflation)**(mamaTransport transport) |
| MAMAExpDLL mama_status | **[mamaTransport_requestEndConflation](transport_8h.html#function-mamatransport-requestendconflation)**(mamaTransport transport) |
| MAMAExpDLL mama_status | **[mamaTransport_setDeactivateSubscriptionOnError](transport_8h.html#function-mamatransport-setdeactivatesubscriptiononerror)**(mamaTransport transport, int deactivate) |
| MAMAExpDLL int | **[mamaTransport_getDeactivateSubscriptionOnError](transport_8h.html#function-mamatransport-getdeactivatesubscriptiononerror)**(mamaTransport transport) |
| MAMAExpDLL mama_status | **[mamaTransport_getNativeTransport](transport_8h.html#function-mamatransport-getnativetransport)**(mamaTransport transport, int index, void ** nativeTport) |
| MAMAExpDLL mama_status | **[mamaTransport_getNativeTransportNamingCtx](transport_8h.html#function-mamatransport-getnativetransportnamingctx)**(mamaTransport transport, int index, void ** nativeTportNamingCtx) |
| MAMAExpDLL mamaStatsCollector | **[mamaTransport_getStatsCollector](transport_8h.html#function-mamatransport-getstatscollector)**(mamaTransport transport) |
| MAMAExpDLL mama_status | **[mamaTransport_getClosure](transport_8h.html#function-mamatransport-getclosure)**(mamaTransport transport, void ** closure) |
| MAMAExpDLL mama_status | **[mamaTransport_setClosure](transport_8h.html#function-mamatransport-setclosure)**(mamaTransport transport, void * closure) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DQ_PLUGIN_PROPERTY](transport_8h.html#define-dq-plugin-property)**  |

## Types Documentation

### enum mamaTransportEvent

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_TRANSPORT_CONNECT | |   |
| MAMA_TRANSPORT_CONNECT_FAILED | |   |
| MAMA_TRANSPORT_RECONNECT | |   |
| MAMA_TRANSPORT_DISCONNECT | |   |
| MAMA_TRANSPORT_ACCEPT | |   |
| MAMA_TRANSPORT_ACCEPT_RECONNECT | |   |
| MAMA_TRANSPORT_PUBLISHER_DISCONNECT | |   |
| MAMA_TRANSPORT_QUALITY | |   |
| MAMA_TRANSPORT_NAMING_SERVICE_CONNECT | |   |
| MAMA_TRANSPORT_NAMING_SERVICE_DISCONNECT | |   |
| MAMA_TRANSPORT_WRITE_QUEUE_HIGH_WATER_MARK | |   |
| MAMA_TRANSPORT_WRITE_QUEUE_LOW_WATER_MARK | |   |




MAMA passes this enumeration as a parameter to the mamaTransportCB if a client installs one. The values passed depend on the underlying middleware:

All Middleware: MAMA_TRANSPORT_QUALITY is passed when an the underlying transport detects an event that may affect data quality. Depending on the event, MAMA may also mark subscriptions as STALE or MAYBE_STALE.

TIBRV: TIBRV invokes the callback with MAMA_TRANSPORT_DISCONNECT when the transport disconnects from the RV daemon and MAMA_TRANSPORT_RECONNECT when it reestablishes a connection to the daemon.

Wombat Middleware: For Wombat Middleware MAMA distinguishes between connections established from a transport to another transport and connections established by the transport from another transport. In general MAMA applications establish connection from a MAMA transport to a feed handler (publisher); however, they may also accept connections from other MAMA clients. Applications subscribe to topics and publisher messages over all connections. When a transport successfully connects to another transport (i.e. a feed handler) the mamaTransportCallback receives MAMA_TRANSPORT_CONNECT if the connection succeeds immediately otherwise it receives a MAMA_TRANSPORT_RECONNECT if it subsequently succeeds. Wombat Middleware transports may be configured to retry failed connections. When a connection that a transport establishes to another transport (the publisher by convention) and the connection is lost the mamaTranpsortCallback receives the MAMA_TRANSPORT_PUBLISHER_DISCONNECT event. When a transport accepts a connection from a remote transport (the subscriber by convention) it receives either a MAMA_TRANSPORT_ACCEPT or MAMA_TRANSPORT_ACCEPT_RECONNECT event indicating that the remote client is connecting or reconnecting. When the client disconnects MAMA passes the MAMA_TRANSPORT_DISCONNECT value. 


### enum mamaTransportTopicEvent

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_TRANSPORT_TOPIC_SUBSCRIBED | |   |
| MAMA_TRANSPORT_TOPIC_UNSUBSCRIBED | |   |
| MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR | |   |
| MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_NOT_ENTITLED | |   |
| MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_BAD_SYMBOL | |   |




MAMA passes this enumeration as a parameter to the mamaTransportTopicCB if a client installs one. Wombat Middleware: For connection based transports an event is invoked when a client makes a subscription to a topic on a transport or unsubscribes from a topic on a transport. 


### enum tportLbScheme

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TPORT_LB_SCHEME_STATIC | |   |
| TPORT_LB_SCHEME_ROUND_ROBIN | |   |
| TPORT_LB_SCHEME_API | |   |
| TPORT_LB_SCHEME_LIBRARY | |   |




Enum to represent the different load balancing schemes available. TPORT_LB_SCHEME_STATIC - keep the same lb sub tport for each subscription. TPORT_LB_SCHEME_ROUND_ROBIN - round robin between the members of the lb group for each subscription TPORT_LB_SCHEME_API - let the user defined load balancing callback(s) decide. TPORT_LB_SCHEME_LIBRARY - use the load balancing in a external library 


### enum mamaThrottleInstance

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_THROTTLE_DEFAULT | 0|   |
| MAMA_THROTTLE_INITIAL | 1|   |
| MAMA_THROTTLE_RECAP | 2|   |




Enum to determine to which throttle a call applies. Currently, the the default throttle, used by the publisher, and the initial value request throttle are the same. Mama sends recap requests on a separate throttle. 


### typedef mamaTransportCB

```cpp
typedef void(MAMACALLTYPE * mamaTransportCB) (mamaTransport tport, mamaTransportEvent, short cause, const void *platformInfo, void *closure);
```


**Parameters**: 

  * **tport** The transport associated with the transport event 
  * **mamaTransportEvent** The transport event 
  * **cause** The cause of the transport event 
  * **platformInfo** Info associated with the transport event 
  * **closure** The closure argument to pass to the callback whenever it is invoked.


Invoked when transport disconnects, reconnects, or has a data quality event.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the char* version of the tibrv advisory message. wmw: provides a pointer to a mamaConnection struct for the event 


### typedef mamaTransportTopicCB

```cpp
typedef void(MAMACALLTYPE * mamaTransportTopicCB) (mamaTransport tport, mamaTransportTopicEvent event, const char *topic, const void *platformInfo, void *closure);
```


**Parameters**: 

  * **tport** The transport associated with the transport topic event 
  * **mamaTransportTopicEvent** The transport topic event 
  * **topic** The topic being subscribed or unsubscribed to or has a publish event 
  * **platformInfo** Info associated with the transport topicevent 
  * **closure** The closure argument to pass to the callback whenever it is invoked.


Invoked when topic is subscribed ot unsubcribed or has a publish event on that transport.


The platformInfo is supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

wmw: provides a pointer to a mamaConnection struct for the event 


### typedef mamaTransportLbInitialCB

```cpp
typedef void(* mamaTransportLbInitialCB) (int numTransports, int *transportIndex);
```


### typedef mamaTransportLbCB

```cpp
typedef void(* mamaTransportLbCB) (int curTransportIndex, int numTransports, const char *source, const char *symbol, int *nextTransportIndex);
```



## Functions Documentation

### function mamaTransportTopicEvent_toString

```cpp
const MAMAExpDLL char * mamaTransportTopicEvent_toString(
    mamaTransportTopicEvent event
)
```


Return a text description of the transport topic event. 


### function mamaTransportEvent_toString

```cpp
const MAMAExpDLL char * mamaTransportEvent_toString(
    mamaTransportEvent event
)
```


Return a text description of the transport event. 


### function mamaTransport_setTransportCallback

```cpp
MAMAExpDLL mama_status mamaTransport_setTransportCallback(
    mamaTransport transport,
    mamaTransportCB callback,
    void * closure
)
```


Set the transport callback. It receives advisories when a transport disconnects or reconnects. Passing NULL removes the callback. 


### function mamaTransport_setTransportTopicCallback

```cpp
MAMAExpDLL mama_status mamaTransport_setTransportTopicCallback(
    mamaTransport transport,
    mamaTransportTopicCB callback,
    void * closure
)
```


Set the transport topic callback. It receives advisories when a client subscribes or unsubscribes to a topic on the transport 


### function mamaTransport_setTransportCallbackQueue

```cpp
MAMAExpDLL mama_status mamaTransport_setTransportCallbackQueue(
    mamaTransport transport,
    mamaQueue queue
)
```


Set the queue used by bridges for transport callbacks (transport and topic). 


### function mamaTransport_getTransportCallbackQueue

```cpp
MAMAExpDLL mama_status mamaTransport_getTransportCallbackQueue(
    mamaTransport transport,
    mamaQueue * queue
)
```


Get the queue used by bridges for transport callbacks (transport and topic). 


### function mamaTransport_setWriteQueueWatermarks

```cpp
MAMAExpDLL mama_status mamaTransport_setWriteQueueWatermarks(
    mamaTransport transport,
    uint32_t highWater,
    uint32_t lowWater
)
```


Set the transport write queue high and low water mark values. The MAMA_TRANSPORT_WRITE_QUEUE_HIGH_WATER_MARK and MAMA_TRANSPORT_WRITE_QUEUE_HIGH_WATER_MARK events will be delivered though the transport callback when the respective number of items are outstanding on a clients write queue. 


### function mamaTransport_allocate

```cpp
MAMAExpDLL mama_status mamaTransport_allocate(
    mamaTransport * result
)
```


**Parameters**: 

  * **result** The address to where the transport will be written. 


Allocate a transport structure. Do not free this memory, use mamaTransport_destroy() instead. The transport is not created until mamaTransport_create() is called. Any transport properties should be set after calling allocate() and prior to calling create()


### function mamaTransport_create

```cpp
MAMAExpDLL mama_status mamaTransport_create(
    mamaTransport transport,
    const char * name,
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **transport** The previously allocated transport. 
  * **name** The name of the transport in the mama.properties file. 
  * **bridgeImpl** The middleware for which the transport is being created. 


Create a previously allocated transport. Platform specific parameters are read from the properties file _mama.properties_. The properties file is located in the WOMBAT_PATH directory. The parameters are dependent on the underlying messaging transport. 

TIBRV: transports support the following: mama.tibrv.transport.name.service, mama.tibrv.transport.name.network, and mama.tibrv.transport.name.daemon. These correspond to the parameters for tibrvTransport_Create(). 

LBM: See the example mama.properties supplied with the release.


### function mamaTransport_setName

```cpp
MAMAExpDLL mama_status mamaTransport_setName(
    mamaTransport transport,
    const char * name
)
```


**Parameters**: 

  * **transport** The transport from which the name is being obtained. 
  * **name** The name of the transport in the mama.properties file. 


Set the transport name. This can be used to set the name without calling mamaTransport_create()


### function mamaTransport_getName

```cpp
MAMAExpDLL mama_status mamaTransport_getName(
    mamaTransport transport,
    const char ** result
)
```


**Parameters**: 

  * **transport** The transport from which the name is being obtained. 
  * **result** Pointer to the transport name string. 


Get the transport name. This the name that was passed to the mamaTransport_create() or mamaTransport_setName() function.


### function mamaTransport_getMiddleware

```cpp
const MAMAExpDLL char * mamaTransport_getMiddleware(
    mamaTransport transport
)
```


### function mamaTransport_getOutboundThrottle

```cpp
MAMAExpDLL mama_status mamaTransport_getOutboundThrottle(
    mamaTransport transport,
    mamaThrottleInstance instance,
    double * result
)
```


**Parameters**: 

  * **transport** the transport. 
  * **instance** the instance 
  * **result** Pointer to the resulting value in messages/second. 


Get the outbound throttle rate. This the rate at which the transport sends outbound messages to the feed handlers. It is also the rate at which new subscriptions are created. Its purpose is to avoid flooding the network with requests.


### function mamaTransport_disableRefresh

```cpp
MAMAExpDLL void mamaTransport_disableRefresh(
    mamaTransport transport,
    uint8_t disable
)
```


**Parameters**: 

  * **transport** the transport instance 
  * **disable** t/f. 


Disable Refreshing.


### function mamaTransport_setOutboundThrottle

```cpp
MAMAExpDLL mama_status mamaTransport_setOutboundThrottle(
    mamaTransport transport,
    mamaThrottleInstance instance,
    double outboundThrottle
)
```


**Parameters**: 

  * **transport** the transport. 
  * **instance** the instance 
  * **outboundThrottle** the rate in messages/second. 


Set the throttle rate.


### function mamaTransport_setSymbolMapFunc

```cpp
MAMAExpDLL void mamaTransport_setSymbolMapFunc(
    mamaTransport transport,
    mamaSymbolMapFunc mapFunc,
    void * closure
)
```


**Parameters**: 

  * **transport** The transport. 
  * **mapFunc** The symbol mapping function. 
  * **closure** The closure argument to pass to mappingFunc whenever it is invoked. 


Set the symbol mapping function for a mamaTransport.


### function mamaTransport_getSymbolMapFunc

```cpp
MAMAExpDLL mamaSymbolMapFunc mamaTransport_getSymbolMapFunc(
    mamaTransport transport
)
```


**Parameters**: 

  * **transport** The transport. 


**Return**: The symbol mapping function (could be NULL). 

Return the symbol mapping function for a mamaTransport.


### function mamaTransport_getSymbolMapFuncClosure

```cpp
MAMAExpDLL void * mamaTransport_getSymbolMapFuncClosure(
    mamaTransport transport
)
```


**Parameters**: 

  * **transport** The transport. 


**Return**: The symbol mapping function closure (could be NULL). 

Return the symbol mapping function closure for a mamaTransport.


### function mamaTransport_setDescription

```cpp
MAMAExpDLL mama_status mamaTransport_setDescription(
    mamaTransport transport,
    const char * description
)
```


**Parameters**: 

  * **transport** The transport. 
  * **description** The description for the transport. This will be copied. 


Set the description for this transport. If the underlying middleware supports the concept of a description the values will be passed on. Otherwise MAMA will maintain the description internally.


### function mamaTransport_getDescription

```cpp
MAMAExpDLL mama_status mamaTransport_getDescription(
    mamaTransport transport,
    const char ** description
)
```


**Parameters**: 

  * **transport** The transport 
  * **description** The address to where the description will be written. 


Get the description attribute for the specified transport. Note that a copy of the description is not returned. Do not change or free this memory.


### function mamaTransport_setInvokeQualityForAllSubscs

```cpp
MAMAExpDLL mama_status mamaTransport_setInvokeQualityForAllSubscs(
    mamaTransport transport,
    int invokeQualityForAllSubscs
)
```


**Parameters**: 

  * **transport** The transport 
  * **invokeQualityForAllSubscs** Whether to invoke quality callback for all subscriptions 


Set whether to invoke the quality callback for all subscriptions whenever a data quality event occurs (the default), or whether to invoke the quality callback only when data subsequently arrives for a subscription.

If set to true, an onQuality callback will be invoked for a subscription whenever a data quality event occurs on the transport, even in between updates for that description. If set to false, the onQuality callback will not be called when the data quality event occurs on the transport. However, it will still be invoked when an update arrives for the subscription.


### function mamaTransport_getInvokeQualityForAllSubscs

```cpp
MAMAExpDLL mama_status mamaTransport_getInvokeQualityForAllSubscs(
    const mamaTransport transport,
    int * invokeQualityForAllSubscs
)
```


**Parameters**: 

  * **transport** The transport 
  * **invokeQualityForAllSubscs** Whether transport has been set to invoke quality callback for all subscriptions 


Get whether the transport has been set to invoke the quality callback for all subscriptions whenever a data quality event occurs.


### function mamaTransport_getQuality

```cpp
MAMAExpDLL mama_status mamaTransport_getQuality(
    const mamaTransport transport,
    mamaQuality * quality
)
```


**Parameters**: 

  * **transport** The transport 
  * **quality** The quality of data for the transport 


Get the quality of data for the transport.

Currently only implemented for the Tibco RV middleware. Other middlewares always return STATUS_OK


### function mamaTransport_destroy

```cpp
MAMAExpDLL mama_status mamaTransport_destroy(
    mamaTransport transport
)
```


**Parameters**: 

  * **transport** the transport. 


Destroy the transport.


### function mamaTransport_findConnection

```cpp
MAMAExpDLL mama_status mamaTransport_findConnection(
    mamaTransport transport,
    mamaConnection * result,
    const char * ipAddress,
    uint16_t port
)
```


Find a connection with specified IP Address and Port. If the port is 0, the call returns the first connection with the specified IP Address. If a connection is not found the method returns MAMA_STATUS_NOT_FOUND and *result == NULL. The caller is responsible for calling mamaConnection_free().

For middleware that does not provide access to per-connection information (non WMW middleware), the method returns MAMA_STATUS_NOT_IMPL. 


### function mamaTransport_getAllConnections

```cpp
MAMAExpDLL mama_status mamaTransport_getAllConnections(
    mamaTransport transport,
    mamaConnection ** result,
    uint32_t * len
)
```


Return a list of all clients connected to this transport. The result and len must be passed to mamaTransport_freeAllConnections() to free resources allocated by this function. 


### function mamaTransport_getAllConnectionsForTopic

```cpp
MAMAExpDLL mama_status mamaTransport_getAllConnectionsForTopic(
    mamaTransport transport,
    const char * topic,
    mamaConnection ** result,
    uint32_t * len
)
```


Return a list of all clients connected to this transport for a topic. The result and len must be passed to mamaTransport_freeAllConnections() to free resources allocated by this function. 


### function mamaTransport_freeAllConnections

```cpp
MAMAExpDLL mama_status mamaTransport_freeAllConnections(
    mamaTransport transport,
    mamaConnection * result,
    uint32_t len
)
```


Free resources allocated by mamaTransport_getAllConnections(). 


### function mamaTransport_getAllServerConnections

```cpp
MAMAExpDLL mama_status mamaTransport_getAllServerConnections(
    mamaTransport transport,
    mamaServerConnection ** result,
    uint32_t * len
)
```


Return a list of all servers connected to this transport. The result and len must be passed to mamaTransport_freeAllServerConnections() to free resources allocated by this function. 


### function mamaTransport_freeAllServerConnections

```cpp
MAMAExpDLL mama_status mamaTransport_freeAllServerConnections(
    mamaTransport transport,
    mamaServerConnection * result,
    uint32_t len
)
```


Free resources allocated by mamaTransport_getAllServerConnections(). 


### function mamaTransport_setLbInitialCallback

```cpp
MAMAExpDLL mama_status mamaTransport_setLbInitialCallback(
    mamaTransport transport,
    mamaTransportLbInitialCB callback
)
```


Set the callback which will decide which member of the load balancing group to use initially. If no callback is set then one will be chosen at random. 


### function mamaTransport_setLbCallback

```cpp
MAMAExpDLL mama_status mamaTransport_setLbCallback(
    mamaTransport transport,
    mamaTransportLbCB callback
)
```


Set the callback which will allocate the next member of the load balancing group to use. The callback, if set, will be invoked for each new subscription. If no callback is set then the currently selected member the same one will be used for all subscriptions 


### function mamaTransport_requestConflation

```cpp
MAMAExpDLL mama_status mamaTransport_requestConflation(
    mamaTransport transport
)
```


Request that publishers conflate incoming messages. Publishers that support conflation (currently only Wombat TCP middleware) will enable conflation for this transport if possible. 


### function mamaTransport_requestEndConflation

```cpp
MAMAExpDLL mama_status mamaTransport_requestEndConflation(
    mamaTransport transport
)
```


Request that publishers stop conflating incoming messages for this transport. Publishers that support conflation (currently only Wombat TCP middleware) will stop conflating messages if possible. Note that the publisher may continue to send conflated messages at its discretion. 


### function mamaTransport_setDeactivateSubscriptionOnError

```cpp
MAMAExpDLL mama_status mamaTransport_setDeactivateSubscriptionOnError(
    mamaTransport transport,
    int deactivate
)
```


### function mamaTransport_getDeactivateSubscriptionOnError

```cpp
MAMAExpDLL int mamaTransport_getDeactivateSubscriptionOnError(
    mamaTransport transport
)
```


### function mamaTransport_getNativeTransport

```cpp
MAMAExpDLL mama_status mamaTransport_getNativeTransport(
    mamaTransport transport,
    int index,
    void ** nativeTport
)
```


Return a pointer tothe underlying native transport. Applications should avoid this method if possible as it may result in non-portable, middleware specific code. Callers must cast the nativeTport to the appropriate type (ie. tibrvTransport*).

Only implemented for TIBRV. 


### function mamaTransport_getNativeTransportNamingCtx

```cpp
MAMAExpDLL mama_status mamaTransport_getNativeTransportNamingCtx(
    mamaTransport transport,
    int index,
    void ** nativeTportNamingCtx
)
```


Return a pointer to the underlying native naming context the transport is using. Applications should avoid this method if possible as it may result in non-portable, middleware specific code. Callers must cast the native naming context to the appropriate type (ie. wmwns*).

Only implemented for WMW version 5 and above. 


### function mamaTransport_getStatsCollector

```cpp
MAMAExpDLL mamaStatsCollector mamaTransport_getStatsCollector(
    mamaTransport transport
)
```


### function mamaTransport_getClosure

```cpp
MAMAExpDLL mama_status mamaTransport_getClosure(
    mamaTransport transport,
    void ** closure
)
```


**Parameters**: 

  * **transport** The transport. 
  * **closure** holds the result. 


Return the closure.


### function mamaTransport_setClosure

```cpp
MAMAExpDLL mama_status mamaTransport_setClosure(
    mamaTransport transport,
    void * closure
)
```


**Parameters**: 

  * **transport** The transport. 
  * **closure** holds the closure to be added. 


Set a closure.




## Macros Documentation

### define DQ_PLUGIN_PROPERTY

```cpp
#define DQ_PLUGIN_PROPERTY "dq_plugin"
```


## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MamaTransportH__
#define MamaTransportH__

#if defined(__cplusplus)
extern "C" {
#endif

#include "mama/types.h"
#include "mama/status.h"
#include "mama/subscription.h"
#include "mama/msg.h"
#include "mama/symbolmap.h"
#include "mama/quality.h"

#define DQ_PLUGIN_PROPERTY "dq_plugin"

typedef enum
{
    MAMA_TRANSPORT_CONNECT,
    MAMA_TRANSPORT_CONNECT_FAILED,
    MAMA_TRANSPORT_RECONNECT,
    MAMA_TRANSPORT_DISCONNECT,
    MAMA_TRANSPORT_ACCEPT,
    MAMA_TRANSPORT_ACCEPT_RECONNECT,
    MAMA_TRANSPORT_PUBLISHER_DISCONNECT,
    MAMA_TRANSPORT_QUALITY,
    MAMA_TRANSPORT_NAMING_SERVICE_CONNECT,
    MAMA_TRANSPORT_NAMING_SERVICE_DISCONNECT,
    MAMA_TRANSPORT_WRITE_QUEUE_HIGH_WATER_MARK,
    MAMA_TRANSPORT_WRITE_QUEUE_LOW_WATER_MARK
} mamaTransportEvent;

typedef enum
{
    MAMA_TRANSPORT_TOPIC_SUBSCRIBED,
    MAMA_TRANSPORT_TOPIC_UNSUBSCRIBED,
    MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR,              /* onError: default error */
    MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_NOT_ENTITLED, /* onError: not entitled */
    MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_BAD_SYMBOL    /* onError: bad symbol */
} mamaTransportTopicEvent;

typedef enum
{
    TPORT_LB_SCHEME_STATIC,
    TPORT_LB_SCHEME_ROUND_ROBIN,
    TPORT_LB_SCHEME_API,
    TPORT_LB_SCHEME_LIBRARY
} tportLbScheme;

typedef void (MAMACALLTYPE *mamaTransportCB)(mamaTransport tport,
                                             mamaTransportEvent,
                                             short cause,
                                             const void* platformInfo,
                                             void *closure);

typedef void (MAMACALLTYPE *mamaTransportTopicCB)(mamaTransport tport,
                                                  mamaTransportTopicEvent event,
                                                  const char* topic,
                                                  const void* platformInfo,
                                                  void *closure);



typedef void (*mamaTransportLbInitialCB)(int  numTransports,
                                         int* transportIndex);

typedef void (*mamaTransportLbCB)(int         curTransportIndex,
                                  int         numTransports,
                                  const char* source,
                                  const char* symbol,
                                  int*        nextTransportIndex);


MAMAExpDLL
extern const char*
mamaTransportTopicEvent_toString (mamaTransportTopicEvent event);

MAMAExpDLL
extern const char*
mamaTransportEvent_toString (mamaTransportEvent event);

MAMAExpDLL
extern mama_status
mamaTransport_setTransportCallback (mamaTransport   transport,
                                    mamaTransportCB callback,
                                    void*           closure);

MAMAExpDLL
extern mama_status
mamaTransport_setTransportTopicCallback (mamaTransport transport,
                                         mamaTransportTopicCB callback,
                                         void* closure);

MAMAExpDLL
extern mama_status
mamaTransport_setTransportCallbackQueue (mamaTransport transport, mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaTransport_getTransportCallbackQueue (mamaTransport transport, mamaQueue* queue);

MAMAExpDLL
extern mama_status
mamaTransport_setWriteQueueWatermarks (mamaTransport transport,
                                       uint32_t      highWater,
                                       uint32_t      lowWater);

MAMAExpDLL
extern mama_status
mamaTransport_allocate (mamaTransport* result);

MAMAExpDLL
extern mama_status
mamaTransport_create (mamaTransport transport,
                      const char*   name,
                      mamaBridge    bridgeImpl);

MAMAExpDLL
extern mama_status
mamaTransport_setName (mamaTransport transport,
                       const char*   name);


MAMAExpDLL
extern mama_status
mamaTransport_getName (mamaTransport transport,
                       const char**  result);

MAMAExpDLL
const char *
mamaTransport_getMiddleware (mamaTransport transport);

typedef enum
{
    MAMA_THROTTLE_DEFAULT = 0,
    MAMA_THROTTLE_INITIAL = 1,
    MAMA_THROTTLE_RECAP   = 2
} mamaThrottleInstance;

MAMAExpDLL
extern mama_status
mamaTransport_getOutboundThrottle (mamaTransport transport,
                                   mamaThrottleInstance instance,
                                   double *result);

MAMAExpDLL
extern void
mamaTransport_disableRefresh (mamaTransport transport,
                                uint8_t disable);

MAMAExpDLL
extern mama_status
mamaTransport_setOutboundThrottle (mamaTransport transport,
                                   mamaThrottleInstance instance,
                                   double outboundThrottle);

MAMAExpDLL
extern void
mamaTransport_setSymbolMapFunc (mamaTransport      transport,
                                mamaSymbolMapFunc  mapFunc,
                                void*              closure);

MAMAExpDLL
extern mamaSymbolMapFunc
mamaTransport_getSymbolMapFunc (mamaTransport  transport);

MAMAExpDLL
extern void*
mamaTransport_getSymbolMapFuncClosure (mamaTransport  transport);

MAMAExpDLL
extern mama_status
mamaTransport_setDescription (mamaTransport transport, const char* description);

MAMAExpDLL
extern mama_status
mamaTransport_getDescription (mamaTransport transport, const char** description);

MAMAExpDLL
extern mama_status
mamaTransport_setInvokeQualityForAllSubscs (
                                      mamaTransport transport,
                                      int           invokeQualityForAllSubscs);

MAMAExpDLL
extern mama_status
mamaTransport_getInvokeQualityForAllSubscs (
                                const mamaTransport transport,
                                int*                invokeQualityForAllSubscs);

MAMAExpDLL
extern mama_status
mamaTransport_getQuality (const mamaTransport transport,
                          mamaQuality*        quality);

MAMAExpDLL
extern mama_status
mamaTransport_destroy (mamaTransport transport);

MAMAExpDLL
extern mama_status
mamaTransport_findConnection (mamaTransport   transport,
                              mamaConnection* result,
                              const char*     ipAddress,
                              uint16_t        port);

MAMAExpDLL
extern mama_status
mamaTransport_getAllConnections (mamaTransport    transport,
                                 mamaConnection** result,
                                 uint32_t*        len);


MAMAExpDLL
extern mama_status
mamaTransport_getAllConnectionsForTopic (mamaTransport    transport,
                                         const char*      topic,
                                         mamaConnection** result,
                                         uint32_t*        len);
MAMAExpDLL
extern mama_status
mamaTransport_freeAllConnections (mamaTransport   transport,
                                  mamaConnection* result,
                                  uint32_t        len);

MAMAExpDLL
extern mama_status
mamaTransport_getAllServerConnections (mamaTransport          transport,
                                       mamaServerConnection** result,
                                       uint32_t*              len);

MAMAExpDLL
extern mama_status
mamaTransport_freeAllServerConnections (mamaTransport         transport,
                                        mamaServerConnection* result,
                                        uint32_t              len);

MAMAExpDLL
extern mama_status
mamaTransport_setLbInitialCallback (mamaTransport            transport,
                                    mamaTransportLbInitialCB callback);

MAMAExpDLL
extern mama_status
mamaTransport_setLbCallback (mamaTransport     transport,
                             mamaTransportLbCB callback);

MAMAExpDLL
extern mama_status
mamaTransport_requestConflation (mamaTransport transport);

MAMAExpDLL
extern mama_status
mamaTransport_requestEndConflation (mamaTransport transport);

MAMAExpDLL
extern mama_status
mamaTransport_setDeactivateSubscriptionOnError (mamaTransport transport,
                                                    int deactivate);


MAMAExpDLL
extern int
mamaTransport_getDeactivateSubscriptionOnError (mamaTransport transport);

MAMAExpDLL
extern mama_status
mamaTransport_getNativeTransport (mamaTransport transport,
                                  int index,
                                  void** nativeTport);

MAMAExpDLL
extern mama_status
mamaTransport_getNativeTransportNamingCtx (mamaTransport transport,
                                           int index,
                                           void** nativeTportNamingCtx);

MAMAExpDLL
extern mamaStatsCollector
mamaTransport_getStatsCollector (mamaTransport transport);

MAMAExpDLL
extern mama_status
mamaTransport_getClosure (mamaTransport transport,
                          void**        closure);

MAMAExpDLL
extern mama_status
mamaTransport_setClosure (mamaTransport transport,
                          void*         closure);

#if defined(__cplusplus)
}
#endif

#endif /* MamaTransportH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
