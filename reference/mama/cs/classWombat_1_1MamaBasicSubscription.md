---
title: Wombat::MamaBasicSubscription
summary: The basic subscription supports publish / subscribe. This class can be disposed or the deallocate function called to reduce time during finalization. Note that the deallocate function will attempt to destroy the subscription if this has not already been done whereas dispose will only de-allocate the memory. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBasicSubscription



The basic subscription supports publish / subscribe. This class can be disposed or the deallocate function called to reduce time during finalization. Note that the deallocate function will attempt to destroy the subscription if this has not already been done whereas dispose will only de-allocate the memory. 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

Inherited by [Wombat.MamaSubscription](classWombat_1_1MamaSubscription.html)

## Protected Classes

|                | Name           |
| -------------- | -------------- |
| class | **[MamaBasicSubscriptionImpl](classWombat_1_1MamaBasicSubscription_1_1MamaBasicSubscriptionImpl.html)** <br>This impl will perform the work of invoking user supplied callbacks, it is held to ensure that the user can destroy and recreate the parent subscription during the callbacks.  |
| struct | **[NativeMethods](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html#function-mamabasicsubscription)**()<br>Constructor constructs a new basic subscription including creating the underlying native subscription.  |
| void | **[createBasic](classWombat_1_1MamaBasicSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) callback, string symbol)<br>This function will create the basic subscription without marketdata semantics. To pass a closure use the overload.  |
| void | **[createBasic](classWombat_1_1MamaBasicSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) callback, string symbol, object closure)<br>This function will create the basic subscription without marketdata semantics.  |
| void | **[deallocate](classWombat_1_1MamaBasicSubscription.html#function-deallocate)**()<br>Free the memory for a mamaSubscription which was allocated via a call to constructor. This function will call [destroy()]() if the subscription has not already been destroyed. Calling this function will reduce time during finalization.  |
| void | **[destroy](classWombat_1_1MamaBasicSubscription.html#function-destroy)**()<br>This function will destroy the subscription, it must be called from the same thread that is processing the queue for the subscription. Use destroyEx to destroy the subscription from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received.  |
| void | **[destroyEx](classWombat_1_1MamaBasicSubscription.html#function-destroyex)**()<br>Destroy the subscription. This function is another option to destroy the resources associated with the subscription It will schedule the [destroy()](classWombat_1_1MamaBasicSubscription.html#function-destroy) of the subscription on the queue on which it dispatches. This function does not free the memory associated with the subscription. create() can be called again after this function has been called. After the Subscription is effectively destroyed, the OnDestroy callback will be triggered for it.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[OnSubscriptionCreateDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptioncreatedelegate)**(IntPtr nativeHandle, IntPtr closure)<br>This delegate describes that native callback function that is invoked whenever the subscription has been created.  |
| delegate void | **[OnSubscriptionDestroyDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptiondestroydelegate)**(IntPtr nativeHandle, IntPtr closure)<br>This delegate describes the native function invoked whenever the subscription has been either destroyed or deactivated.  |
| delegate void | **[OnSubscriptionErrorDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptionerrordelegate)**(IntPtr nativeHandle, int status, IntPtr platformError, string subject, IntPtr closure)<br>This delegate describes the native function invoked if an error occurs during prior to subscription creation or if the subscription receives a message for an un-entitled subject. If the status is MAMA_MSG_STATUS_NOT_ENTITTLED the subject parameter is the specific unentitled subject. If the subscription subject contains wildcards, the subscription may still receive messages for other entitled subjects. Note wildcard subscriptions are not supported on all platforms.  |
| delegate void | **[OnSubscriptionGapDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptiongapdelegate)**(IntPtr nativeHandle, IntPtr closure)<br>This delegate describes the native function invoked when a sequence number gap is detected. At this point the topic is considered stale and the subscription will not receive further messages until the feed handler satisfies a recap request.  |
| delegate void | **[OnSubscriptionMessageDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptionmessagedelegate)**(IntPtr nativeHandle, IntPtr msg, IntPtr closure, IntPtr itemClosure)<br>This delegate describes the native function that is invoked whenever a message arrives.  |
| delegate void | **[OnSubscriptionQualityDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptionqualitydelegate)**(IntPtr nativeHandle, int quality, string symbol, short cause, string platforminfo, IntPtr closure)<br>This delegate describes the native function invoked to indicate a data quality event.  |
| delegate void | **[OnSubscriptionRecapRequestDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptionrecaprequestdelegate)**(IntPtr nativeHandle, IntPtr closure)<br>This delegate describes the native function invoked when a recap is requested upon detecting a sequence number gap.  |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaBasicSubscription.html#function-destroynativepeer)**()<br>This will be called by the base class to de-allocate the native subscription. [MamaWrapper.DestroyNativePeer]() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| [mamaSubscriptionState](namespaceWombat.html#enum-mamasubscriptionstate) | **[State](classWombat_1_1MamaBasicSubscription.html#property-state)** <br>This read only property returns the current state of the subscription, this function should be used in preference to the mamaSubscription_isActive or mamaSubscription_isValid functions. function is thread-safe. The state will be one of the mamaSubscriptionState enumeration values.  |
| object | **[subscClosure](classWombat_1_1MamaBasicSubscription.html#property-subscclosure)** <br>Read only property returns the closure passed to the create function.  |
| [MamaQueue](classWombat_1_1MamaQueue.html) | **[subscQueue](classWombat_1_1MamaBasicSubscription.html#property-subscqueue)** <br>Read only property returns the queue.  |
| string | **[subscSymbol](classWombat_1_1MamaBasicSubscription.html#property-subscsymbol)** <br>Read only property returns the symbol for this subscription.  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| object | **[mClosure](classWombat_1_1MamaBasicSubscription.html#variable-mclosure)** <br>The closure passed to the create function. This member is declared as protected as there is a public read only property to access it.  |
| [MamaQueue](classWombat_1_1MamaQueue.html) | **[mQueue](classWombat_1_1MamaBasicSubscription.html#variable-mqueue)** <br>The queue passed to the create function. This member is declared as protected as there is a public read only property to access it.  |
| [MamaTransport](classWombat_1_1MamaTransport.html) | **[mTransport](classWombat_1_1MamaBasicSubscription.html#variable-mtransport)** <br>The transport passed to the create function. This member is declared as protected as there is a public read only property to access it.  |
| [NativeMethods.SubscriptionCallbacks](structWombat_1_1MamaBasicSubscription_1_1NativeMethods_1_1SubscriptionCallbacks.html) | **[mCallbackDelegates](classWombat_1_1MamaBasicSubscription.html#variable-mcallbackdelegates)** <br>This structure holds all of the callback delegates, it is initialised in the static constructor.  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Public Functions Documentation

### function MamaBasicSubscription

```csharp
MamaBasicSubscription()
```

Constructor constructs a new basic subscription including creating the underlying native subscription. 

### function createBasic

```csharp
void createBasic(
    MamaTransport transport,
    MamaQueue queue,
    MamaBasicSubscriptionCallback callback,
    string symbol
)
```

This function will create the basic subscription without marketdata semantics. To pass a closure use the overload. 

**Parameters**: 

  * **transport** The [MamaTransport](classWombat_1_1MamaTransport.html). 
  * **queue** The [MamaQueue](classWombat_1_1MamaQueue.html). 
  * **callback** Provide callback function implementations to be informed of events on the subscription. 
  * **symbol** The symbol to subscribe to. 


### function createBasic

```csharp
void createBasic(
    MamaTransport transport,
    MamaQueue queue,
    MamaBasicSubscriptionCallback callback,
    string symbol,
    object closure
)
```

This function will create the basic subscription without marketdata semantics. 

**Parameters**: 

  * **transport** The [MamaTransport](classWombat_1_1MamaTransport.html). 
  * **queue** The [MamaQueue](classWombat_1_1MamaQueue.html). 
  * **callback** Provide callback function implementations to be informed of events on the subscription. 
  * **symbol** The symbol to subscribe to. 
  * **closure** The closure that will be passed back with the callback functions. 


### function deallocate

```csharp
void deallocate()
```

Free the memory for a mamaSubscription which was allocated via a call to constructor. This function will call [destroy()]() if the subscription has not already been destroyed. Calling this function will reduce time during finalization. 

### function destroy

```csharp
void destroy()
```

This function will destroy the subscription, it must be called from the same thread that is processing the queue for the subscription. Use destroyEx to destroy the subscription from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received. 

### function destroyEx

```csharp
void destroyEx()
```

Destroy the subscription. This function is another option to destroy the resources associated with the subscription It will schedule the [destroy()](classWombat_1_1MamaBasicSubscription.html#function-destroy) of the subscription on the queue on which it dispatches. This function does not free the memory associated with the subscription. create() can be called again after this function has been called. After the Subscription is effectively destroyed, the OnDestroy callback will be triggered for it. 

This function can be called from any thread, as opposed to [destroy()](classWombat_1_1MamaBasicSubscription.html#function-destroy).


## Protected Functions Documentation

### function OnSubscriptionCreateDelegate

```csharp
delegate void OnSubscriptionCreateDelegate(
    IntPtr nativeHandle,
    IntPtr closure
)
```

This delegate describes that native callback function that is invoked whenever the subscription has been created. 

**Parameters**: 

  * **nativeHandle** The native subscription. 
  * **closure** The native closure passed to the create function. 


### function OnSubscriptionDestroyDelegate

```csharp
delegate void OnSubscriptionDestroyDelegate(
    IntPtr nativeHandle,
    IntPtr closure
)
```

This delegate describes the native function invoked whenever the subscription has been either destroyed or deactivated. 

**Parameters**: 

  * **nativeHandle** The native subscription. 
  * **closure** The native closure passed to the create function. 


### function OnSubscriptionErrorDelegate

```csharp
delegate void OnSubscriptionErrorDelegate(
    IntPtr nativeHandle,
    int status,
    IntPtr platformError,
    string subject,
    IntPtr closure
)
```

This delegate describes the native function invoked if an error occurs during prior to subscription creation or if the subscription receives a message for an un-entitled subject. If the status is MAMA_MSG_STATUS_NOT_ENTITTLED the subject parameter is the specific unentitled subject. If the subscription subject contains wildcards, the subscription may still receive messages for other entitled subjects. Note wildcard subscriptions are not supported on all platforms. 

**Parameters**: 

  * **nativeHandle** The native subscription. 
  * **status** The associated error code. 
  * **platformError** Platform specific error information. 
  * **subject** The subject for NOT_ENTITLED errors. 
  * **closure** The native closure passed to the create function. 


### function OnSubscriptionGapDelegate

```csharp
delegate void OnSubscriptionGapDelegate(
    IntPtr nativeHandle,
    IntPtr closure
)
```

This delegate describes the native function invoked when a sequence number gap is detected. At this point the topic is considered stale and the subscription will not receive further messages until the feed handler satisfies a recap request. 

**Parameters**: 

  * **nativeHandle** The native subscription. 
  * **closure** The native closure passed to the create function. 


### function OnSubscriptionMessageDelegate

```csharp
delegate void OnSubscriptionMessageDelegate(
    IntPtr nativeHandle,
    IntPtr msg,
    IntPtr closure,
    IntPtr itemClosure
)
```

This delegate describes the native function that is invoked whenever a message arrives. 

**Parameters**: 

  * **nativeHandle** The native subscription. 
  * **msg** The native mama message. 
  * **closure** The native closure passed to the create function. 
  * **itemClosure** The item closure for the subscription can be set with setItemClosure, note that setItemClosure is not provided in the C# implementation. 


### function OnSubscriptionQualityDelegate

```csharp
delegate void OnSubscriptionQualityDelegate(
    IntPtr nativeHandle,
    int quality,
    string symbol,
    short cause,
    string platforminfo,
    IntPtr closure
)
```

This delegate describes the native function invoked to indicate a data quality event. 

**Parameters**: 

  * **nativeHandle** The native subscription. 
  * **quality** The new quality. 
  * **symbol** The symbol. 
  * **cause** The cause of the data quality event. 
  * **platforminfo** Info associated with the data quality event. 
  * **closure** The native closure passed to the create function. 


### function OnSubscriptionRecapRequestDelegate

```csharp
delegate void OnSubscriptionRecapRequestDelegate(
    IntPtr nativeHandle,
    IntPtr closure
)
```

This delegate describes the native function invoked when a recap is requested upon detecting a sequence number gap. 

**Parameters**: 

  * **nativeHandle** The native subscription. 
  * **closure** The native closure passed to the create function. 


### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

This will be called by the base class to de-allocate the native subscription. [MamaWrapper.DestroyNativePeer]()

**Return**: MAMA Status code. 

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


## Public Property Documentation

### property State

```csharp
mamaSubscriptionState State;
```

This read only property returns the current state of the subscription, this function should be used in preference to the mamaSubscription_isActive or mamaSubscription_isValid functions. function is thread-safe. The state will be one of the mamaSubscriptionState enumeration values. 

### property subscClosure

```csharp
object subscClosure;
```

Read only property returns the closure passed to the create function. 

### property subscQueue

```csharp
MamaQueue subscQueue;
```

Read only property returns the queue. 

### property subscSymbol

```csharp
string subscSymbol;
```

Read only property returns the symbol for this subscription. 

## Protected Attributes Documentation

### variable mClosure

```csharp
object mClosure;
```

The closure passed to the create function. This member is declared as protected as there is a public read only property to access it. 

### variable mQueue

```csharp
MamaQueue mQueue;
```

The queue passed to the create function. This member is declared as protected as there is a public read only property to access it. 

### variable mTransport

```csharp
MamaTransport mTransport;
```

The transport passed to the create function. This member is declared as protected as there is a public read only property to access it. 

### variable mCallbackDelegates

```csharp
static NativeMethods.SubscriptionCallbacks mCallbackDelegates;
```

This structure holds all of the callback delegates, it is initialised in the static constructor. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100