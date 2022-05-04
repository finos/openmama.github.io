---
title: Wombat::MamaBasicSubscription::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBasicSubscription::NativeMethods





## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[SubscriptionCallbacks](structWombat_1_1MamaBasicSubscription_1_1NativeMethods_1_1SubscriptionCallbacks.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaSubscription_allocate](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html#function-mamasubscription-allocate)**(ref IntPtr result) |
| int | **[mamaSubscription_createBasic](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html#function-mamasubscription-createbasic)**(IntPtr nativeHandle, IntPtr transport, IntPtr queue, ref [SubscriptionCallbacks](structWombat_1_1MamaBasicSubscription_1_1NativeMethods_1_1SubscriptionCallbacks.html) callbacks, string symbol, IntPtr closure) |
| int | **[mamaSubscription_deallocate](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html#function-mamasubscription-deallocate)**(IntPtr nativeHandle) |
| int | **[mamaSubscription_destroy](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html#function-mamasubscription-destroy)**(IntPtr nativeHandle) |
| int | **[mamaSubscription_destroyEx](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html#function-mamasubscription-destroyex)**(IntPtr nativeHandle) |
| int | **[mamaSubscription_getState](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html#function-mamasubscription-getstate)**(IntPtr nativeHandle, ref int state) |
| int | **[mamaSubscription_getSubscSymbol](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html#function-mamasubscription-getsubscsymbol)**(IntPtr subscription, ref IntPtr symbol) |

## Public Functions Documentation

### function mamaSubscription_allocate

```csharp
int mamaSubscription_allocate(
    ref IntPtr result
)
```


### function mamaSubscription_createBasic

```csharp
int mamaSubscription_createBasic(
    IntPtr nativeHandle,
    IntPtr transport,
    IntPtr queue,
    ref SubscriptionCallbacks callbacks,
    string symbol,
    IntPtr closure
)
```


### function mamaSubscription_deallocate

```csharp
int mamaSubscription_deallocate(
    IntPtr nativeHandle
)
```


### function mamaSubscription_destroy

```csharp
int mamaSubscription_destroy(
    IntPtr nativeHandle
)
```


### function mamaSubscription_destroyEx

```csharp
int mamaSubscription_destroyEx(
    IntPtr nativeHandle
)
```


### function mamaSubscription_getState

```csharp
int mamaSubscription_getState(
    IntPtr nativeHandle,
    ref int state
)
```


### function mamaSubscription_getSubscSymbol

```csharp
int mamaSubscription_getSubscSymbol(
    IntPtr subscription,
    ref IntPtr symbol
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100