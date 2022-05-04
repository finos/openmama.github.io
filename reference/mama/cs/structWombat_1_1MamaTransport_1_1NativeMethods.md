---
title: Wombat::MamaTransport::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransport::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaTransport_allocate](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-allocate)**(ref IntPtr result) |
| int | **[mamaTransport_create](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-create)**(IntPtr transport, string name, IntPtr bridgeImpl) |
| int | **[mamaTransport_getOutboundThrottle](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-getoutboundthrottle)**(IntPtr transport, [MamaThrottleInstance](classWombat_1_1MamaTransport.html#enum-mamathrottleinstance) instance, ref double result) |
| int | **[mamaTransport_setOutboundThrottle](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-setoutboundthrottle)**(IntPtr transport, [MamaThrottleInstance](classWombat_1_1MamaTransport.html#enum-mamathrottleinstance) instance, double outboundThrottle) |
| int | **[mamaTransport_destroy](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-destroy)**(IntPtr transport) |
| int | **[mamaTransport_setTransportCallback](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-settransportcallback)**(IntPtr transport, CallbackForwarder.TransportCallbackDelegate callback, IntPtr closure) |
| int | **[mamaTransport_setTransportTopicCallback](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-settransporttopiccallback)**(IntPtr transport, TopicCallbackForwarder.TransportTopicCallbackDelegate callback, IntPtr closure) |
| void | **[mamaTransport_setSymbolMapFunc](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-setsymbolmapfunc)**(IntPtr transport, CallbackForwarderSymbolMap.SymbolMapFuncCallback callback, IntPtr closure) |
| int | **[mamaTransport_requestConflation](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-requestconflation)**(IntPtr transport) |
| int | **[mamaTransport_requestEndConflation](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-requestendconflation)**(IntPtr transport) |
| int | **[mamaTransport_getNativeTransport](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-getnativetransport)**(IntPtr nativeHandle, int index, ref IntPtr val) |
| int | **[mamaTransport_getQuality](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-getquality)**(IntPtr transport, ref [MamaQuality](classWombat_1_1MamaTransport.html#enum-mamaquality) qual) |
| int | **[mamaTransport_getName](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-getname)**(IntPtr transport, ref IntPtr ret) |
| int | **[mamaTransport_getTransportCallbackQueue](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-gettransportcallbackqueue)**(IntPtr nativeHandle, ref IntPtr val) |
| int | **[mamaTransport_setTransportCallbackQueue](structWombat_1_1MamaTransport_1_1NativeMethods.html#function-mamatransport-settransportcallbackqueue)**(IntPtr nativeHandle, IntPtr val) |

## Public Functions Documentation

### function mamaTransport_allocate

```csharp
int mamaTransport_allocate(
    ref IntPtr result
)
```


### function mamaTransport_create

```csharp
int mamaTransport_create(
    IntPtr transport,
    string name,
    IntPtr bridgeImpl
)
```


### function mamaTransport_getOutboundThrottle

```csharp
int mamaTransport_getOutboundThrottle(
    IntPtr transport,
    MamaThrottleInstance instance,
    ref double result
)
```


### function mamaTransport_setOutboundThrottle

```csharp
int mamaTransport_setOutboundThrottle(
    IntPtr transport,
    MamaThrottleInstance instance,
    double outboundThrottle
)
```


### function mamaTransport_destroy

```csharp
int mamaTransport_destroy(
    IntPtr transport
)
```


### function mamaTransport_setTransportCallback

```csharp
int mamaTransport_setTransportCallback(
    IntPtr transport,
    CallbackForwarder.TransportCallbackDelegate callback,
    IntPtr closure
)
```


### function mamaTransport_setTransportTopicCallback

```csharp
int mamaTransport_setTransportTopicCallback(
    IntPtr transport,
    TopicCallbackForwarder.TransportTopicCallbackDelegate callback,
    IntPtr closure
)
```


### function mamaTransport_setSymbolMapFunc

```csharp
void mamaTransport_setSymbolMapFunc(
    IntPtr transport,
    CallbackForwarderSymbolMap.SymbolMapFuncCallback callback,
    IntPtr closure
)
```


### function mamaTransport_requestConflation

```csharp
int mamaTransport_requestConflation(
    IntPtr transport
)
```


### function mamaTransport_requestEndConflation

```csharp
int mamaTransport_requestEndConflation(
    IntPtr transport
)
```


### function mamaTransport_getNativeTransport

```csharp
int mamaTransport_getNativeTransport(
    IntPtr nativeHandle,
    int index,
    ref IntPtr val
)
```


### function mamaTransport_getQuality

```csharp
int mamaTransport_getQuality(
    IntPtr transport,
    ref MamaQuality qual
)
```


### function mamaTransport_getName

```csharp
int mamaTransport_getName(
    IntPtr transport,
    ref IntPtr ret
)
```


### function mamaTransport_getTransportCallbackQueue

```csharp
int mamaTransport_getTransportCallbackQueue(
    IntPtr nativeHandle,
    ref IntPtr val
)
```


### function mamaTransport_setTransportCallbackQueue

```csharp
int mamaTransport_setTransportCallbackQueue(
    IntPtr nativeHandle,
    IntPtr val
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100