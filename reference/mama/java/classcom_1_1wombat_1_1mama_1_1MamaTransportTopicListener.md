---
title: com::wombat::mama::MamaTransportTopicListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaTransportTopicListener





## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTopicSubscribe](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicsubscribe)**(String topic, final Object platformInfo) |
| void | **[onTopicUnsubscribe](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicunsubscribe)**(String topic, final Object platformInfo) |
| void | **[onTopicPublishError](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicpublisherror)**(String topic, final Object platformInfo) |
| void | **[onTopicPublishErrorNotEntitled](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicpublisherrornotentitled)**(String topic, final Object platformInfo) |
| void | **[onTopicPublishErrorBadSymbol](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicpublisherrorbadsymbol)**(String topic, final Object platformInfo) |
| void | **[onTopicSubscribe](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicsubscribe)**(short cause, final Object platformInfo) |
| void | **[onTopicUnsubscribe](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicunsubscribe)**(short cause, final Object platformInfo) |

## Public Functions Documentation

### function onTopicSubscribe

```java
inline void onTopicSubscribe(
    String topic,
    final Object platformInfo
)
```


**Parameters**: 

  * **topic** The topic of the topic subscription 
  * **platformInfo** Info associated with the topic subscription


Invoked when a topic is subscribed to


The topic and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware 


### function onTopicUnsubscribe

```java
inline void onTopicUnsubscribe(
    String topic,
    final Object platformInfo
)
```


**Parameters**: 

  * **topic** The topic of the topic unsubscription 
  * **platformInfo** Info associated with the topic unsubscription


Invoked when a topic is unsubscribed to


The topic and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware 


### function onTopicPublishError

```java
inline void onTopicPublishError(
    String topic,
    final Object platformInfo
)
```


**Parameters**: 

  * **topic** The topic of the error 
  * **platformInfo** Info associated with the error


Invoked when a topic has a publish error


The topic and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware 


### function onTopicPublishErrorNotEntitled

```java
inline void onTopicPublishErrorNotEntitled(
    String topic,
    final Object platformInfo
)
```


**Parameters**: 

  * **topic** The topic of the entitlements error 
  * **platformInfo** Info associated with the entitlements error


Invoked when a topic has a publish entitlements error


The topic and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware 


### function onTopicPublishErrorBadSymbol

```java
inline void onTopicPublishErrorBadSymbol(
    String topic,
    final Object platformInfo
)
```


**Parameters**: 

  * **topic** The topic of the bad symbol error 
  * **platformInfo** Info associated with the bad symbol error


Invoked when a topic has a publish bad symbol error


The topic and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware 


### function onTopicSubscribe

```java
inline void onTopicSubscribe(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the topic subscription 
  * **platformInfo** Info associated with the topic subscription


**Deprecated**: 

use [onTopicSubscribe(String topic, final Object platformInfo)](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicsubscribe) instead. 

Invoked when a topic is subscribed to


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware


### function onTopicUnsubscribe

```java
inline void onTopicUnsubscribe(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the topic unsubscription 
  * **platformInfo** Info associated with the topic unsubscription


**Deprecated**: 

use [onTopicUnsubscribe(String topic, final Object platformInfo)](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html#function-ontopicunsubscribe) instead. 

Invoked when a topic is unsubscribed to


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100