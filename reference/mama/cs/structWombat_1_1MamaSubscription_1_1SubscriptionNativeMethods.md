---
title: Wombat::MamaSubscription::SubscriptionNativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSubscription::SubscriptionNativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaSubscription_activate](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-activate)**(IntPtr subscription) |
| int | **[mamaSubscription_deactivate](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-deactivate)**(IntPtr subscription) |
| int | **[mamaSubscription_getPreIntitialCacheSize](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-getpreintitialcachesize)**(IntPtr subscription, ref int cacheSize) |
| int | **[mamaSubscription_getReceivedInitial](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-getreceivedinitial)**(IntPtr nativeHandle, ref int receivedInitial) |
| int | **[mamaSubscription_getSource](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-getsource)**(IntPtr subscription, ref IntPtr symbol) |
| int | **[mamaSubscription_setPreIntitialCacheSize](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-setpreintitialcachesize)**(IntPtr subscription, int cacheSize) |
| int | **[mamaSubscription_setRecoverGaps](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-setrecovergaps)**(IntPtr nativeHandle, int recoverGaps) |
| int | **[mamaSubscription_setRequiresInitial](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-setrequiresinitial)**(IntPtr nativeHandle, int requiresInitial) |
| int | **[mamaSubscription_setRetries](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-setretries)**(IntPtr nativeHandle, int retries) |
| int | **[mamaSubscription_setServiceLevel](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-setservicelevel)**(IntPtr nativeHandle, int serviceLevel, int serviceLevelOpt) |
| int | **[mamaSubscription_setSubscriptionType](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-setsubscriptiontype)**(IntPtr nativeHandle, int type) |
| int | **[mamaSubscription_setTimeout](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-settimeout)**(IntPtr nativeHandle, double timeout) |
| int | **[mamaSubscription_setup](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-setup)**(IntPtr subscription, IntPtr queue, ref [MamaBasicSubscription.NativeMethods.SubscriptionCallbacks](structWombat_1_1MamaBasicSubscription_1_1NativeMethods_1_1SubscriptionCallbacks.html) callbacks, IntPtr source, string symbol, IntPtr closure) |
| int | **[mamaSubscription_setup2](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html#function-mamasubscription-setup2)**(IntPtr subscription, IntPtr transport, IntPtr queue, ref [MamaBasicSubscription.NativeMethods.SubscriptionCallbacks](structWombat_1_1MamaBasicSubscription_1_1NativeMethods_1_1SubscriptionCallbacks.html) callbacks, string sourceName, string symbol, IntPtr closure) |

## Public Functions Documentation

### function mamaSubscription_activate

```csharp
int mamaSubscription_activate(
    IntPtr subscription
)
```


### function mamaSubscription_deactivate

```csharp
int mamaSubscription_deactivate(
    IntPtr subscription
)
```


### function mamaSubscription_getPreIntitialCacheSize

```csharp
int mamaSubscription_getPreIntitialCacheSize(
    IntPtr subscription,
    ref int cacheSize
)
```


### function mamaSubscription_getReceivedInitial

```csharp
int mamaSubscription_getReceivedInitial(
    IntPtr nativeHandle,
    ref int receivedInitial
)
```


### function mamaSubscription_getSource

```csharp
int mamaSubscription_getSource(
    IntPtr subscription,
    ref IntPtr symbol
)
```


### function mamaSubscription_setPreIntitialCacheSize

```csharp
int mamaSubscription_setPreIntitialCacheSize(
    IntPtr subscription,
    int cacheSize
)
```


### function mamaSubscription_setRecoverGaps

```csharp
int mamaSubscription_setRecoverGaps(
    IntPtr nativeHandle,
    int recoverGaps
)
```


### function mamaSubscription_setRequiresInitial

```csharp
int mamaSubscription_setRequiresInitial(
    IntPtr nativeHandle,
    int requiresInitial
)
```


### function mamaSubscription_setRetries

```csharp
int mamaSubscription_setRetries(
    IntPtr nativeHandle,
    int retries
)
```


### function mamaSubscription_setServiceLevel

```csharp
int mamaSubscription_setServiceLevel(
    IntPtr nativeHandle,
    int serviceLevel,
    int serviceLevelOpt
)
```


### function mamaSubscription_setSubscriptionType

```csharp
int mamaSubscription_setSubscriptionType(
    IntPtr nativeHandle,
    int type
)
```


### function mamaSubscription_setTimeout

```csharp
int mamaSubscription_setTimeout(
    IntPtr nativeHandle,
    double timeout
)
```


### function mamaSubscription_setup

```csharp
int mamaSubscription_setup(
    IntPtr subscription,
    IntPtr queue,
    ref MamaBasicSubscription.NativeMethods.SubscriptionCallbacks callbacks,
    IntPtr source,
    string symbol,
    IntPtr closure
)
```


### function mamaSubscription_setup2

```csharp
int mamaSubscription_setup2(
    IntPtr subscription,
    IntPtr transport,
    IntPtr queue,
    ref MamaBasicSubscription.NativeMethods.SubscriptionCallbacks callbacks,
    string sourceName,
    string symbol,
    IntPtr closure
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100