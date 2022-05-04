---
title: Wombat::MamaTransport
summary: The underpinning object in any MAMA application 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransport



The underpinning object in any MAMA application  [More...](#detailed-description)

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[MamaThrottleInstance](classWombat_1_1MamaTransport.html#enum-mamathrottleinstance)** { MAMA_THROTTLE_DEFAULT = 0, MAMA_THROTTLE_INITIAL = 1, MAMA_THROTTLE_RECAP = 2}<br>Enum to determine to which throttle a call applies. Currently, the the default throttle, used by the publisher, and the initial value request throttle are the same. [Mama](classWombat_1_1Mama.html) sends recap requests on a separate throttle.  |
| enum class int | **[MamaQuality](classWombat_1_1MamaTransport.html#enum-mamaquality)** { MAMA_QUALITY_OK = 0, MAMA_QUALITY_MAYBE_STALE = 1, MAMA_QUALITY_STALE = 2, MAMA_QUALITY_PARTIAL_STALE = 3, MAMA_QUALITY_FORCED_STALE = 4, MAMA_QUALITY_DUPLICATE = 5, MAMA_QUALITY_UNKNOWN = 99}<br>Enum to specify the Quality value supplied by the onQuality callback.  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaTransport](classWombat_1_1MamaTransport.html#function-mamatransport)**()<br>Allocate a transport structure. You need to call [destroy()]() when the class is no more needed The transport is not created until [create()]() is called. Any transport properties should be set prior to calling [create()]() |
| IntPtr | **[getNativeTransport](classWombat_1_1MamaTransport.html#function-getnativetransport)**() |
| void | **[create](classWombat_1_1MamaTransport.html#function-create)**(string name, [MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl)<br>Create a previously allocated transport. Platform specific parameters are read from the properties file mama.properties. The properties file is located in the WOMBAT_PATH directory. The parameters are dependent on the underlying messaging transport. TIBRV transports support the following: mama.tibrv.transport.name.service, mama.tibrv.transport.name.network, and mama.tibrv.transport.name.daemon. These correspond to the parameters for tibrvTransport_Create(). LBM: See the example mama.properties supplied with the release.  |
| double | **[getOutboundThrottle](classWombat_1_1MamaTransport.html#function-getoutboundthrottle)**([MamaThrottleInstance](classWombat_1_1MamaTransport.html#enum-mamathrottleinstance) instance)<br>Get the outbound throttle rate. This the rate at which the transport sends outbound messages to the feed handlers. It is also the rate at which new subscriptions are created. Its purpose is to avoid flooding the network with requests.  |
| void | **[setOutboundThrottle](classWombat_1_1MamaTransport.html#function-setoutboundthrottle)**([MamaThrottleInstance](classWombat_1_1MamaTransport.html#enum-mamathrottleinstance) instance, double outboundThrottle)<br>Set the throttle rate.  |
| void | **[setSymbolMapFunc](classWombat_1_1MamaTransport.html#function-setsymbolmapfunc)**([MamaSymbolMapCallback](interfaceWombat_1_1MamaSymbolMapCallback.html) callback, object closure)<br>Set the symbol mapping function for a [MamaTransport](classWombat_1_1MamaTransport.html).  |
| [MamaSymbolMapCallback](interfaceWombat_1_1MamaSymbolMapCallback.html) | **[getSymbolMapFunc](classWombat_1_1MamaTransport.html#function-getsymbolmapfunc)**()<br>Return the symbol mapping function for a [MamaTransport](classWombat_1_1MamaTransport.html).  |
| object | **[getSymbolMapFuncClosure](classWombat_1_1MamaTransport.html#function-getsymbolmapfuncclosure)**()<br>Return the symbol mapping function closure for a [MamaTransport](classWombat_1_1MamaTransport.html).  |
| void | **[requestConflation](classWombat_1_1MamaTransport.html#function-requestconflation)**()<br>Request conflation for a [MamaTransport](classWombat_1_1MamaTransport.html). Currently only available for WMW.  |
| void | **[requestEndConflation](classWombat_1_1MamaTransport.html#function-requestendconflation)**()<br>Request an end to conflation for a [MamaTransport](classWombat_1_1MamaTransport.html). Currently only available for WMW.  |
| void | **[destroy](classWombat_1_1MamaTransport.html#function-destroy)**() |
| void | **[setTransportCallback](classWombat_1_1MamaTransport.html#function-settransportcallback)**([MamaTransportCallback](interfaceWombat_1_1MamaTransportCallback.html) callback)<br>Set the transport callback. It receives advisories when a transport disconnects or reconnects. Passing NULL removes the callback.  |
| void | **[setTransportTopicCallback](classWombat_1_1MamaTransport.html#function-settransporttopiccallback)**([MamaTransportTopicCallback](interfaceWombat_1_1MamaTransportTopicCallback.html) callback)<br>Set the transport topic callback. It receives advisories when subjects sub or unsub, or when publisher events occur. Passing NULL removes the callback.  |
| string | **[getName](classWombat_1_1MamaTransport.html#function-getname)**()<br>Get the name of the transport.  |
| void | **[setTransportCallbackQueue](classWombat_1_1MamaTransport.html#function-settransportcallbackqueue)**([MamaQueue](classWombat_1_1MamaQueue.html) queue)<br>Set a queue for transport callbacks (transport and topic). If this is not set the default queue will be used.  |
| [MamaQueue](classWombat_1_1MamaQueue.html) | **[getTransportCallbackQueue](classWombat_1_1MamaTransport.html#function-gettransportcallbackqueue)**()<br>Set a queue for transport callbacks (transport and topic). If this is not set the default queue will be used.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override void | **[OnDispose](classWombat_1_1MamaTransport.html#function-ondispose)**() |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaTransport.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| [MamaQuality](classWombat_1_1MamaTransport.html#enum-mamaquality) | **[Quality](classWombat_1_1MamaTransport.html#property-quality)** <br>Accessor methods for the quality associated with a [MamaTransport](classWombat_1_1MamaTransport.html).  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Detailed Description

```csharp
class Wombat::MamaTransport;
```

The underpinning object in any MAMA application 

The mamaTransport defines the network protocol level parameters over which MAMA distributes data. Transports effectively provide scope for data identifying the underlying protocols and their values for data delivery. It is an isolated communication channel for data traffic. Transports specify the communication channels to use for making subscriptions and publishing data through the API. 

## Public Types Documentation

### enum MamaThrottleInstance

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_THROTTLE_DEFAULT | 0|   |
| MAMA_THROTTLE_INITIAL | 1|   |
| MAMA_THROTTLE_RECAP | 2|   |



Enum to determine to which throttle a call applies. Currently, the the default throttle, used by the publisher, and the initial value request throttle are the same. [Mama](classWombat_1_1Mama.html) sends recap requests on a separate throttle. 

### enum MamaQuality

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_QUALITY_OK | 0|   |
| MAMA_QUALITY_MAYBE_STALE | 1|   |
| MAMA_QUALITY_STALE | 2|   |
| MAMA_QUALITY_PARTIAL_STALE | 3|   |
| MAMA_QUALITY_FORCED_STALE | 4|   |
| MAMA_QUALITY_DUPLICATE | 5|   |
| MAMA_QUALITY_UNKNOWN | 99|   |



Enum to specify the Quality value supplied by the onQuality callback. 

## Public Functions Documentation

### function MamaTransport

```csharp
MamaTransport()
```

Allocate a transport structure. You need to call [destroy()]() when the class is no more needed The transport is not created until [create()]() is called. Any transport properties should be set prior to calling [create()]()

### function getNativeTransport

```csharp
IntPtr getNativeTransport()
```


### function create

```csharp
void create(
    string name,
    MamaBridge bridgeImpl
)
```

Create a previously allocated transport. Platform specific parameters are read from the properties file mama.properties. The properties file is located in the WOMBAT_PATH directory. The parameters are dependent on the underlying messaging transport. TIBRV transports support the following: mama.tibrv.transport.name.service, mama.tibrv.transport.name.network, and mama.tibrv.transport.name.daemon. These correspond to the parameters for tibrvTransport_Create(). LBM: See the example mama.properties supplied with the release. 

**Parameters**: 

  * **name** 
  * **bridgeImpl** 


### function getOutboundThrottle

```csharp
double getOutboundThrottle(
    MamaThrottleInstance instance
)
```

Get the outbound throttle rate. This the rate at which the transport sends outbound messages to the feed handlers. It is also the rate at which new subscriptions are created. Its purpose is to avoid flooding the network with requests. 

### function setOutboundThrottle

```csharp
void setOutboundThrottle(
    MamaThrottleInstance instance,
    double outboundThrottle
)
```

Set the throttle rate. 

### function setSymbolMapFunc

```csharp
void setSymbolMapFunc(
    MamaSymbolMapCallback callback,
    object closure
)
```

Set the symbol mapping function for a [MamaTransport](classWombat_1_1MamaTransport.html). 

**Parameters**: 

  * **callback** 
  * **closure** 


### function getSymbolMapFunc

```csharp
MamaSymbolMapCallback getSymbolMapFunc()
```

Return the symbol mapping function for a [MamaTransport](classWombat_1_1MamaTransport.html). 

### function getSymbolMapFuncClosure

```csharp
object getSymbolMapFuncClosure()
```

Return the symbol mapping function closure for a [MamaTransport](classWombat_1_1MamaTransport.html). 

### function requestConflation

```csharp
void requestConflation()
```

Request conflation for a [MamaTransport](classWombat_1_1MamaTransport.html). Currently only available for WMW. 

### function requestEndConflation

```csharp
void requestEndConflation()
```

Request an end to conflation for a [MamaTransport](classWombat_1_1MamaTransport.html). Currently only available for WMW. 

### function destroy

```csharp
void destroy()
```


### function setTransportCallback

```csharp
void setTransportCallback(
    MamaTransportCallback callback
)
```

Set the transport callback. It receives advisories when a transport disconnects or reconnects. Passing NULL removes the callback. 

**Parameters**: 

  * **callback** 


### function setTransportTopicCallback

```csharp
void setTransportTopicCallback(
    MamaTransportTopicCallback callback
)
```

Set the transport topic callback. It receives advisories when subjects sub or unsub, or when publisher events occur. Passing NULL removes the callback. 

**Parameters**: 

  * **callback** 


### function getName

```csharp
string getName()
```

Get the name of the transport. 

### function setTransportCallbackQueue

```csharp
void setTransportCallbackQueue(
    MamaQueue queue
)
```

Set a queue for transport callbacks (transport and topic). If this is not set the default queue will be used. 

### function getTransportCallbackQueue

```csharp
MamaQueue getTransportCallbackQueue()
```

Set a queue for transport callbacks (transport and topic). If this is not set the default queue will be used. 

## Protected Functions Documentation

### function OnDispose

```csharp
virtual override void OnDispose()
```


**Reimplements**: [Wombat::MamaWrapper::OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)


### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]()

**Return**: MAMA Status code

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


## Public Property Documentation

### property Quality

```csharp
MamaQuality Quality;
```

Accessor methods for the quality associated with a [MamaTransport](classWombat_1_1MamaTransport.html). 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100