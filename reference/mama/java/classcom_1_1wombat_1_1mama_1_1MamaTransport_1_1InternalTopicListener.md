---
title: com::wombat::mama::MamaTransport::InternalTopicListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaTransport::InternalTopicListener





Inherits from [com.wombat.mama.MamaTransportTopicListener](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[InternalTopicListener](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-internaltopiclistener)**() |
| void | **[onTopicSubscribe](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-ontopicsubscribe)**(String topic, final Object platformInfo) |
| void | **[onTopicUnsubscribe](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-ontopicunsubscribe)**(String topic, final Object platformInfo) |
| void | **[onTopicSubscribe](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-ontopicsubscribe)**(short cause, final Object platformInfo) |
| void | **[onTopicUnsubscribe](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-ontopicunsubscribe)**(short cause, final Object platformInfo) |
| void | **[onTopicPublishError](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-ontopicpublisherror)**(String topic, final Object platformInfo) |
| void | **[onTopicPublishErrorNotEntitled](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-ontopicpublisherrornotentitled)**(String topic, final Object platformInfo) |
| void | **[onTopicPublishErrorBadSymbol](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-ontopicpublisherrorbadsymbol)**(String topic, final Object platformInfo) |
| void | **[setClientTopicListener](classcom_1_1wombat_1_1mama_1_1MamaTransport_1_1InternalTopicListener.html#function-setclienttopiclistener)**([MamaTransportTopicListener](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html) clientTopicListener) |

## Public Functions Documentation

### function InternalTopicListener

```java
inline void InternalTopicListener()
```


Constructor initialises all member variables. 


### function onTopicSubscribe

```java
inline void onTopicSubscribe(
    String topic,
    final Object platformInfo
)
```


### function onTopicUnsubscribe

```java
inline void onTopicUnsubscribe(
    String topic,
    final Object platformInfo
)
```


### function onTopicSubscribe

```java
inline void onTopicSubscribe(
    short cause,
    final Object platformInfo
)
```


### function onTopicUnsubscribe

```java
inline void onTopicUnsubscribe(
    short cause,
    final Object platformInfo
)
```


### function onTopicPublishError

```java
inline void onTopicPublishError(
    String topic,
    final Object platformInfo
)
```


### function onTopicPublishErrorNotEntitled

```java
inline void onTopicPublishErrorNotEntitled(
    String topic,
    final Object platformInfo
)
```


### function onTopicPublishErrorBadSymbol

```java
inline void onTopicPublishErrorBadSymbol(
    String topic,
    final Object platformInfo
)
```


### function setClientTopicListener

```java
inline void setClientTopicListener(
    MamaTransportTopicListener clientTopicListener
)
```


**Parameters**: 

  * **clientTopicListener** The client topic listener. 


This function will set the client topic listener which will then receive events from the transport.


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100