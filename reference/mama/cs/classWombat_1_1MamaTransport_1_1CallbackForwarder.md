---
title: Wombat::MamaTransport::CallbackForwarder
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransport::CallbackForwarder





## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[TransportCallbackDelegate](classWombat_1_1MamaTransport_1_1CallbackForwarder.html#function-transportcallbackdelegate)**(IntPtr transport, int transportEvent, short cause, IntPtr opaque, IntPtr closure) |
| void | **[OnTransportCallback](classWombat_1_1MamaTransport_1_1CallbackForwarder.html#function-ontransportcallback)**(IntPtr transport, int transportEvent, short cause, IntPtr opaque, IntPtr closure) |
| | **[CallbackForwarder](classWombat_1_1MamaTransport_1_1CallbackForwarder.html#function-callbackforwarder)**([MamaTransport](classWombat_1_1MamaTransport.html) target, [MamaTransportCallback](interfaceWombat_1_1MamaTransportCallback.html) callback) |

## Public Functions Documentation

### function TransportCallbackDelegate

```csharp
delegate void TransportCallbackDelegate(
    IntPtr transport,
    int transportEvent,
    short cause,
    IntPtr opaque,
    IntPtr closure
)
```


### function OnTransportCallback

```csharp
void OnTransportCallback(
    IntPtr transport,
    int transportEvent,
    short cause,
    IntPtr opaque,
    IntPtr closure
)
```


### function CallbackForwarder

```csharp
CallbackForwarder(
    MamaTransport target,
    MamaTransportCallback callback
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100