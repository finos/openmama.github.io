---
title: Wombat::MamaTransport::TopicCallbackForwarder
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransport::TopicCallbackForwarder





## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[TransportTopicCallbackDelegate](classWombat_1_1MamaTransport_1_1TopicCallbackForwarder.html#function-transporttopiccallbackdelegate)**(IntPtr transport, int transportEvent, string topic, IntPtr opaque, IntPtr closure) |
| void | **[OnTransportTopicCallback](classWombat_1_1MamaTransport_1_1TopicCallbackForwarder.html#function-ontransporttopiccallback)**(IntPtr transport, int transportEvent, string topic, IntPtr opaque, IntPtr closure) |
| | **[TopicCallbackForwarder](classWombat_1_1MamaTransport_1_1TopicCallbackForwarder.html#function-topiccallbackforwarder)**([MamaTransport](classWombat_1_1MamaTransport.html) target, [MamaTransportTopicCallback](interfaceWombat_1_1MamaTransportTopicCallback.html) callback) |

## Public Functions Documentation

### function TransportTopicCallbackDelegate

```csharp
delegate void TransportTopicCallbackDelegate(
    IntPtr transport,
    int transportEvent,
    string topic,
    IntPtr opaque,
    IntPtr closure
)
```


### function OnTransportTopicCallback

```csharp
void OnTransportTopicCallback(
    IntPtr transport,
    int transportEvent,
    string topic,
    IntPtr opaque,
    IntPtr closure
)
```


### function TopicCallbackForwarder

```csharp
TopicCallbackForwarder(
    MamaTransport target,
    MamaTransportTopicCallback callback
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100