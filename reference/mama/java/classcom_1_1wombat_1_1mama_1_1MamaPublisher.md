---
title: com::wombat::mama::MamaPublisher
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaPublisher





## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-create)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, String topic) |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-create)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, String topic, String source) |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-create)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, String topic, [MamaPublisherCallback](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html) cb, Object closure) |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-create)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, String topic, String source, [MamaPublisherCallback](interfacecom_1_1wombat_1_1mama_1_1MamaPublisherCallback.html) cb, Object closure) |
| Object | **[getClosure](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-getclosure)**() |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-destroy)**() |
| native void | **[destroyEx](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-destroyex)**() |
| void | **[send](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-send)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[sendWithThrottle](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-sendwiththrottle)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[sendWithThrottle](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-sendwiththrottle)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg, [MamaThrottleCallback](interfacecom_1_1wombat_1_1mama_1_1MamaThrottleCallback.html) callback) |
| void | **[sendReplyToInbox](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-sendreplytoinbox)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) request, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) reply) |
| void | **[sendReplyToInboxWithThrottle](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-sendreplytoinboxwiththrottle)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) request, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) reply) |
| void | **[sendFromInbox](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-sendfrominbox)**([MamaInbox](classcom_1_1wombat_1_1mama_1_1MamaInbox.html) inbox, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) | **[getTransport](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-gettransport)**() |
| native String | **[getRoot](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-getroot)**() |
| native String | **[getSource](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-getsource)**() |
| native String | **[getSymbol](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-getsymbol)**() |
| native short | **[getState](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-getstate)**() |
| native String | **[stringForState](classcom_1_1wombat_1_1mama_1_1MamaPublisher.html#function-stringforstate)**(short state) |

## Public Functions Documentation

### function create

```java
inline void create(
    MamaTransport transport,
    String topic
)
```


### function create

```java
inline void create(
    MamaTransport transport,
    String topic,
    String source
)
```


### function create

```java
inline void create(
    MamaTransport transport,
    MamaQueue queue,
    String topic,
    MamaPublisherCallback cb,
    Object closure
)
```


### function create

```java
inline void create(
    MamaTransport transport,
    MamaQueue queue,
    String topic,
    String source,
    MamaPublisherCallback cb,
    Object closure
)
```


### function getClosure

```java
inline Object getClosure()
```


### function destroy

```java
native void destroy()
```


### function destroyEx

```java
native void destroyEx()
```


### function send

```java
inline void send(
    MamaMsg msg
)
```


### function sendWithThrottle

```java
inline void sendWithThrottle(
    MamaMsg msg
)
```


### function sendWithThrottle

```java
inline void sendWithThrottle(
    MamaMsg msg,
    MamaThrottleCallback callback
)
```


### function sendReplyToInbox

```java
inline void sendReplyToInbox(
    MamaMsg request,
    MamaMsg reply
)
```


### function sendReplyToInboxWithThrottle

```java
inline void sendReplyToInboxWithThrottle(
    MamaMsg request,
    MamaMsg reply
)
```


### function sendFromInbox

```java
inline void sendFromInbox(
    MamaInbox inbox,
    MamaMsg msg
)
```


### function getTransport

```java
inline MamaTransport getTransport()
```


### function getRoot

```java
native String getRoot()
```


### function getSource

```java
native String getSource()
```


### function getSymbol

```java
native String getSymbol()
```


### function getState

```java
native short getState()
```


### function stringForState

```java
native String stringForState(
    short state
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100