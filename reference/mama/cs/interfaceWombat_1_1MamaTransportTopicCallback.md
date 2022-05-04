---
title: Wombat::MamaTransportTopicCallback
summary: Callbacks at the topic level associated with MamaTransports 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransportTopicCallback



Callbacks at the topic level associated with MamaTransports  [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTopicSubscribe](interfaceWombat_1_1MamaTransportTopicCallback.html#function-ontopicsubscribe)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, string topic, Object platformInfo)<br>See interface remarks for details  |
| void | **[onTopicUnsubscribe](interfaceWombat_1_1MamaTransportTopicCallback.html#function-ontopicunsubscribe)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, string topic, Object platformInfo)<br>See interface remarks for details  |
| void | **[onTopicPublishError](interfaceWombat_1_1MamaTransportTopicCallback.html#function-ontopicpublisherror)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, string topic, Object platformInfo)<br>See interface remarks for details  |
| void | **[onTopicPublishErrorNotEntitled](interfaceWombat_1_1MamaTransportTopicCallback.html#function-ontopicpublisherrornotentitled)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, string topic, Object platformInfo)<br>See interface remarks for details  |
| void | **[onTopicPublishErrorBadSymbol](interfaceWombat_1_1MamaTransportTopicCallback.html#function-ontopicpublisherrorbadsymbol)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, string topic, Object platformInfo)<br>See interface remarks for details  |

## Detailed Description

```csharp
class Wombat::MamaTransportTopicCallback;
```

Callbacks at the topic level associated with MamaTransports 

These are topic-specific callbacks from the transport. They are for sub/unsub, and for publisher events. 

## Public Functions Documentation

### function onTopicSubscribe

```csharp
void onTopicSubscribe(
    MamaTransport transport,
    string topic,
    Object platformInfo
)
```

See interface remarks for details 

### function onTopicUnsubscribe

```csharp
void onTopicUnsubscribe(
    MamaTransport transport,
    string topic,
    Object platformInfo
)
```

See interface remarks for details 

### function onTopicPublishError

```csharp
void onTopicPublishError(
    MamaTransport transport,
    string topic,
    Object platformInfo
)
```

See interface remarks for details 

### function onTopicPublishErrorNotEntitled

```csharp
void onTopicPublishErrorNotEntitled(
    MamaTransport transport,
    string topic,
    Object platformInfo
)
```

See interface remarks for details 

### function onTopicPublishErrorBadSymbol

```csharp
void onTopicPublishErrorBadSymbol(
    MamaTransport transport,
    string topic,
    Object platformInfo
)
```

See interface remarks for details 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100