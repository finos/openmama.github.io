---
title: Wombat::MamaTransportTopicEventCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransportTopicEventCallback



 [More...](#detailed-description)


`#include <MamaTransport.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaTransportTopicEventCallback](classWombat_1_1MamaTransportTopicEventCallback.html#function-~mamatransporttopiceventcallback)**() |
| virtual void | **[onTopicSubscribe](classWombat_1_1MamaTransportTopicEventCallback.html#function-ontopicsubscribe)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * topic, const void * platformInfo) |
| virtual void | **[onTopicUnsubscribe](classWombat_1_1MamaTransportTopicEventCallback.html#function-ontopicunsubscribe)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * topic, const void * platformInfo) |
| virtual void | **[onTopicPublishError](classWombat_1_1MamaTransportTopicEventCallback.html#function-ontopicpublisherror)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * topic, const void * platformInfo) |
| virtual void | **[onTopicPublishErrorNotEntitled](classWombat_1_1MamaTransportTopicEventCallback.html#function-ontopicpublisherrornotentitled)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * topic, const void * platformInfo) |
| virtual void | **[onTopicPublishErrorBadSymbol](classWombat_1_1MamaTransportTopicEventCallback.html#function-ontopicpublisherrorbadsymbol)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * topic, const void * platformInfo) |

## Detailed Description

```cpp
class Wombat::MamaTransportTopicEventCallback;
```


TransportTopicEvent callback 

## Public Functions Documentation

### function ~MamaTransportTopicEventCallback

```cpp
inline virtual ~MamaTransportTopicEventCallback()
```


### function onTopicSubscribe

```cpp
inline virtual void onTopicSubscribe(
    MamaTransport * transport,
    const char * topic,
    const void * platformInfo
)
```


Invoked when a topic is subscribed to. 


### function onTopicUnsubscribe

```cpp
inline virtual void onTopicUnsubscribe(
    MamaTransport * transport,
    const char * topic,
    const void * platformInfo
)
```


### function onTopicPublishError

```cpp
inline virtual void onTopicPublishError(
    MamaTransport * transport,
    const char * topic,
    const void * platformInfo
)
```


### function onTopicPublishErrorNotEntitled

```cpp
inline virtual void onTopicPublishErrorNotEntitled(
    MamaTransport * transport,
    const char * topic,
    const void * platformInfo
)
```


### function onTopicPublishErrorBadSymbol

```cpp
inline virtual void onTopicPublishErrorBadSymbol(
    MamaTransport * transport,
    const char * topic,
    const void * platformInfo
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100