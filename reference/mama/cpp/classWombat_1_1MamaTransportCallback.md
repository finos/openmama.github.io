---
title: Wombat::MamaTransportCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransportCallback



 [More...](#detailed-description)


`#include <MamaTransport.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaTransportCallback](classWombat_1_1MamaTransportCallback.html#function-~mamatransportcallback)**() |
| virtual void | **[onDisconnect](classWombat_1_1MamaTransportCallback.html#function-ondisconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const void * platformInfo) |
| virtual void | **[onReconnect](classWombat_1_1MamaTransportCallback.html#function-onreconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const void * platformInfo) |
| virtual void | **[onQuality](classWombat_1_1MamaTransportCallback.html#function-onquality)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, short cause, const void * platformInfo) =0 |
| virtual void | **[onConnect](classWombat_1_1MamaTransportCallback.html#function-onconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const void * platformInfo) |
| virtual void | **[onAccept](classWombat_1_1MamaTransportCallback.html#function-onaccept)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const void * platformInfo) |
| virtual void | **[onAcceptReconnect](classWombat_1_1MamaTransportCallback.html#function-onacceptreconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const void * platformInfo) |
| virtual void | **[onPublisherDisconnect](classWombat_1_1MamaTransportCallback.html#function-onpublisherdisconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const void * platformInfo) |
| virtual void | **[onNamingServiceConnect](classWombat_1_1MamaTransportCallback.html#function-onnamingserviceconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const void * platformInfo) |
| virtual void | **[onNamingServiceDisconnect](classWombat_1_1MamaTransportCallback.html#function-onnamingservicedisconnect)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const void * platformInfo) |

## Detailed Description

```cpp
class Wombat::MamaTransportCallback;
```


Transport callback. 

## Public Functions Documentation

### function ~MamaTransportCallback

```cpp
inline virtual ~MamaTransportCallback()
```


### function onDisconnect

```cpp
inline virtual void onDisconnect(
    MamaTransport * transport,
    const void * platformInfo
)
```


**Parameters**: 

  * **transport** The transport which has disconnected. 
  * **platformInfo** Info associated with the event.


Invoked on a publisher when a subscriber disconnects.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the char* version of the tibrv advisory message. wmw: provides a pointer to a C mamaConnection struct for the event 


### function onReconnect

```cpp
inline virtual void onReconnect(
    MamaTransport * transport,
    const void * platformInfo
)
```


**Parameters**: 

  * **transport** The transport which has reconnected. 
  * **platformInfo** Info associated with the event.


Invoked when the transport reconnects


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the char* version of the tibrv advisory message. wmw: provides a pointer to a C mamaConnection struct for the event 


### function onQuality

```cpp
virtual void onQuality(
    MamaTransport * transport,
    short cause,
    const void * platformInfo
) =0
```


**Parameters**: 

  * **transport** The transport on which the quality has changed. 
  * **cause** The cause of the quality event. 
  * **platformInfo** Info associated with the quality event.


Invoked when the quality of this transport changes.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the char* version of the tibrv advisory message. 


### function onConnect

```cpp
inline virtual void onConnect(
    MamaTransport * transport,
    const void * platformInfo
)
```


**Parameters**: 

  * **transport** The transport which has connected. 
  * **platformInfo** Info associated with the event.


Invoked on the subscriber when the transport connects.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

wmw: provides a pointer to a C mamaConnection struct for the event 


### function onAccept

```cpp
inline virtual void onAccept(
    MamaTransport * transport,
    const void * platformInfo
)
```


**Parameters**: 

  * **transport** The transport which has accepted. 
  * **platformInfo** Info associated with the event.


Invoked on the publisher when the transport accepts a connection.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

wmw: provides a pointer to a C mamaConnection struct for the event 


### function onAcceptReconnect

```cpp
inline virtual void onAcceptReconnect(
    MamaTransport * transport,
    const void * platformInfo
)
```


**Parameters**: 

  * **transport** The transport which has reconnected on 
  * **platformInfo** Info associated with the event.


Invoked on the publisher when the transport accepts a reconnection.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

wmw: provides a pointer to a C mamaConnection struct for the event 


### function onPublisherDisconnect

```cpp
inline virtual void onPublisherDisconnect(
    MamaTransport * transport,
    const void * platformInfo
)
```


**Parameters**: 

  * **transport** The transport which has disconnected on 
  * **platformInfo** Info associated with the event.


Invoked on the subscriber when the transport disconnects from the publisher.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

wmw: provides a pointer to a C mamaConnection struct for the event 


### function onNamingServiceConnect

```cpp
inline virtual void onNamingServiceConnect(
    MamaTransport * transport,
    const void * platformInfo
)
```


**Parameters**: 

  * **transport** The transport which has connected. 
  * **platformInfo** Info associated with the event. 


Invoked on the subscriber when the naming service connects.


### function onNamingServiceDisconnect

```cpp
inline virtual void onNamingServiceDisconnect(
    MamaTransport * transport,
    const void * platformInfo
)
```


**Parameters**: 

  * **transport** The transport which has connected. 
  * **platformInfo** Info associated with the event. 


Invoked on the subscriber when the naming service disconnects.


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100