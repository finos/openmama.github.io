---
title: Wombat::MamaPublisher::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPublisher::NativeMethods





## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[PublisherCallbacks](structWombat_1_1MamaPublisher_1_1NativeMethods_1_1PublisherCallbacks.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaPublisher_create](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-create)**(ref IntPtr result, IntPtr tport, string symbol, string source, string root) |
| int | **[mamaPublisher_createWithCallbacks](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-createwithcallbacks)**(ref IntPtr result, IntPtr tport, IntPtr queue, string symbol, string source, string root, ref [PublisherCallbacks](structWombat_1_1MamaPublisher_1_1NativeMethods_1_1PublisherCallbacks.html) callbacks, IntPtr closure) |
| int | **[mamaPublisher_send](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-send)**(IntPtr publisher, IntPtr msg) |
| int | **[mamaPublisher_sendWithThrottle](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-sendwiththrottle)**(IntPtr publisher, IntPtr msg, MamaThrottledSendCompleteDelegate sendCompleteCallback, IntPtr closure) |
| int | **[mamaPublisher_sendFromInboxWithThrottle](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-sendfrominboxwiththrottle)**(IntPtr publisher, IntPtr inbox, IntPtr msg, MamaThrottledSendCompleteDelegate sendCompleteCallback, IntPtr closure) |
| int | **[mamaPublisher_sendFromInbox](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-sendfrominbox)**(IntPtr publisher, IntPtr inbox, IntPtr msg) |
| int | **[mamaPublisher_sendReplyToInbox](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-sendreplytoinbox)**(IntPtr publisher, IntPtr request, IntPtr reply) |
| int | **[mamaPublisher_destroy](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-destroy)**(IntPtr publisher) |
| int | **[mamaPublisher_getTransport](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-gettransport)**(IntPtr publisher, ref IntPtr result) |
| int | **[mamaPublisher_getRoot](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-getroot)**(IntPtr publisher, ref IntPtr ret) |
| int | **[mamaPublisher_getSource](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-getsource)**(IntPtr publisher, ref IntPtr ret) |
| int | **[mamaPublisher_getSymbol](structWombat_1_1MamaPublisher_1_1NativeMethods.html#function-mamapublisher-getsymbol)**(IntPtr publisher, ref IntPtr ret) |

## Public Functions Documentation

### function mamaPublisher_create

```csharp
int mamaPublisher_create(
    ref IntPtr result,
    IntPtr tport,
    string symbol,
    string source,
    string root
)
```


### function mamaPublisher_createWithCallbacks

```csharp
int mamaPublisher_createWithCallbacks(
    ref IntPtr result,
    IntPtr tport,
    IntPtr queue,
    string symbol,
    string source,
    string root,
    ref PublisherCallbacks callbacks,
    IntPtr closure
)
```


### function mamaPublisher_send

```csharp
int mamaPublisher_send(
    IntPtr publisher,
    IntPtr msg
)
```


### function mamaPublisher_sendWithThrottle

```csharp
int mamaPublisher_sendWithThrottle(
    IntPtr publisher,
    IntPtr msg,
    MamaThrottledSendCompleteDelegate sendCompleteCallback,
    IntPtr closure
)
```


### function mamaPublisher_sendFromInboxWithThrottle

```csharp
int mamaPublisher_sendFromInboxWithThrottle(
    IntPtr publisher,
    IntPtr inbox,
    IntPtr msg,
    MamaThrottledSendCompleteDelegate sendCompleteCallback,
    IntPtr closure
)
```


### function mamaPublisher_sendFromInbox

```csharp
int mamaPublisher_sendFromInbox(
    IntPtr publisher,
    IntPtr inbox,
    IntPtr msg
)
```


### function mamaPublisher_sendReplyToInbox

```csharp
int mamaPublisher_sendReplyToInbox(
    IntPtr publisher,
    IntPtr request,
    IntPtr reply
)
```


### function mamaPublisher_destroy

```csharp
int mamaPublisher_destroy(
    IntPtr publisher
)
```


### function mamaPublisher_getTransport

```csharp
int mamaPublisher_getTransport(
    IntPtr publisher,
    ref IntPtr result
)
```


### function mamaPublisher_getRoot

```csharp
int mamaPublisher_getRoot(
    IntPtr publisher,
    ref IntPtr ret
)
```


### function mamaPublisher_getSource

```csharp
int mamaPublisher_getSource(
    IntPtr publisher,
    ref IntPtr ret
)
```


### function mamaPublisher_getSymbol

```csharp
int mamaPublisher_getSymbol(
    IntPtr publisher,
    ref IntPtr ret
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100