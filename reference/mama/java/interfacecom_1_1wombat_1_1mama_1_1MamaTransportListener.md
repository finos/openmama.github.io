---
title: com::wombat::mama::MamaTransportListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaTransportListener





## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onDisconnect](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-ondisconnect)**(short cause, final Object platformInfo) |
| void | **[onReconnect](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-onreconnect)**(short cause, final Object platformInfo) |
| void | **[onQuality](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-onquality)**(short cause, final Object platformInfo) |
| void | **[onConnect](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-onconnect)**(short cause, final Object platformInfo) |
| void | **[onAccept](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-onaccept)**(short cause, final Object platformInfo) |
| void | **[onAcceptReconnect](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-onacceptreconnect)**(short cause, final Object platformInfo) |
| void | **[onPublisherDisconnect](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-onpublisherdisconnect)**(short cause, final Object platformInfo) |
| void | **[onNamingServiceConnect](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-onnamingserviceconnect)**(short cause, final Object platformInfo) |
| void | **[onNamingServiceDisconnect](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html#function-onnamingservicedisconnect)**(short cause, final Object platformInfo) |

## Public Functions Documentation

### function onDisconnect

```java
void onDisconnect(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the transport disconnection 
  * **platformInfo** Info associated with the transport disconnection


Invoked when transport disconnects.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware (JNI only) 


### function onReconnect

```java
void onReconnect(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the transport reconnection 
  * **platformInfo** Info associated with the transport reconnection


Invoked when transport reconnects.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware 


### function onQuality

```java
void onQuality(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the data quality event 
  * **platformInfo** Info associated with the data quality event


Invoked on data quality event.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the String object version of the tibrv advisory message Wombat Middleware 


### function onConnect

```java
void onConnect(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the transport connection 
  * **platformInfo** Info associated with the transport connection


Invoked on the subscriber when the transport connects.


The following middlewares are supported:

Wombat Middleware 


### function onAccept

```java
void onAccept(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the transport connection 
  * **platformInfo** Info associated with the transport connection


Invoked on the publisher when the transport accepts a connection.


The following middlewares are supported:

Wombat Middleware 


### function onAcceptReconnect

```java
void onAcceptReconnect(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the reconnection 
  * **platformInfo** Info associated with the reconnection


Invoked on the publisher when the transport accepts a reconnection.


The following middlewares are supported:

Wombat Middleware 


### function onPublisherDisconnect

```java
void onPublisherDisconnect(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the disconnection 
  * **platformInfo** Info associated with the disconnection


Invoked on the subscriber when the transport disconnects from the publisher.


The following middlewares are supported:

Wombat Middleware 


### function onNamingServiceConnect

```java
void onNamingServiceConnect(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the connection 
  * **platformInfo** Info associated with the connection


Invoked on the subscriber on connection to the naming service.


The following middlewares are supported:

Wombat Middleware 


### function onNamingServiceDisconnect

```java
void onNamingServiceDisconnect(
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **cause** The cause of the disconnection 
  * **platformInfo** Info associated with the disconnection


Invoked on the subscriber on disconnection to the naming service.


The following middlewares are supported:

Wombat Middleware 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100