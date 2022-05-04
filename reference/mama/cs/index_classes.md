---
title: Classes
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Classes




* **namespace [System](namespaceSystem.html)** 
* **namespace [System::Collections](namespaceSystem_1_1Collections.html)** 
* **namespace [System::Collections::Generic](namespaceSystem_1_1Collections_1_1Generic.html)** 
* **namespace [System::Diagnostics](namespaceSystem_1_1Diagnostics.html)** 
* **namespace [System::IO](namespaceSystem_1_1IO.html)** 
* **namespace [System::Reflection](namespaceSystem_1_1Reflection.html)** 
* **namespace [System::Runtime::CompilerServices](namespaceSystem_1_1Runtime_1_1CompilerServices.html)** 
* **namespace [System::Runtime::InteropServices](namespaceSystem_1_1Runtime_1_1InteropServices.html)** 
* **namespace [System::Runtime::Serialization](namespaceSystem_1_1Runtime_1_1Serialization.html)** 
* **namespace [System::Text](namespaceSystem_1_1Text.html)** 
* **namespace [System::Threading](namespaceSystem_1_1Threading.html)** 
* **namespace [Wombat](namespaceWombat.html)** 
    * **interface [ISourceManager](interfaceWombat_1_1ISourceManager.html)** <br>A container of [MamaSource]() objects. Because each [MamaSource]() can contain sub-sources (and so on), [MamaSource]() is also a source manager and implements this interface. 
    * **class [Mama](classWombat_1_1Mama.html)** <br>MAMA - Middleware Agnostic Messaging API 
        * **struct [NativeMethods](structWombat_1_1Mama_1_1NativeMethods.html)** 
        * **class [StartBackgroundCallbackForwarder](classWombat_1_1Mama_1_1StartBackgroundCallbackForwarder.html)** <br>This class is used for forward callback events from the native mama_startBackground function to the client's of this class. 
    * **class [MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)** <br>The basic subscription supports publish / subscribe. This class can be disposed or the deallocate function called to reduce time during finalization. Note that the deallocate function will attempt to destroy the subscription if this has not already been done whereas dispose will only de-allocate the memory. 
        * **class [MamaBasicSubscriptionImpl](classWombat_1_1MamaBasicSubscription_1_1MamaBasicSubscriptionImpl.html)** <br>This impl will perform the work of invoking user supplied callbacks, it is held to ensure that the user can destroy and recreate the parent subscription during the callbacks. 
        * **struct [NativeMethods](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html)** 
            * **struct [SubscriptionCallbacks](structWombat_1_1MamaBasicSubscription_1_1NativeMethods_1_1SubscriptionCallbacks.html)** 
    * **interface [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html)** <br>This interface should be implemented by clients wish to create a MAMA Basic subscription, it contains callback functions that will be invoked whenever specific events occur. 
    * **class [MamaBridge](classWombat_1_1MamaBridge.html)** 
        * **struct [NativeMethods](structWombat_1_1MamaBridge_1_1NativeMethods.html)** 
    * **class [MamaBridgeFtMember](classWombat_1_1MamaBridgeFtMember.html)** <br>A member of a MAMA fault tolerance bridge group 
    * **class [MamaCallbackStore](classWombat_1_1MamaCallbackStore.html)** <br>This class is used to store MamaCallbackWrapper objects, it provides synchronized access so can be used from any thread. 
    * **class [MamaCallbackWrapper](classWombat_1_1MamaCallbackWrapper.html)** <br>This class wraps a native callback function allowing the managed callback object, the closure and the delegate to be maintained while the code operates inside the native environment. Without this the managed object will be garbage collected resulting in a crash whenever the callback is eventually made from the native layer. 
    * **class [MamaClientProfile](classWombat_1_1MamaClientProfile.html)** <br>A class containing various information about the MAMA client 
        * **struct [NativeMethods](structWombat_1_1MamaClientProfile_1_1NativeMethods.html)** 
    * **class [MamaDictionary](classWombat_1_1MamaDictionary.html)** <br>Maps field identifiers (FIDs) to human-readable strings 
        * **class [CallbackForwarder](classWombat_1_1MamaDictionary_1_1CallbackForwarder.html)** 
        * **struct [Callbacks](structWombat_1_1MamaDictionary_1_1Callbacks.html)** 
        * **struct [NativeMethods](structWombat_1_1MamaDictionary_1_1NativeMethods.html)** 
    * **interface [MamaDictionaryCallback](interfaceWombat_1_1MamaDictionaryCallback.html)** <br>Collection of callbacks associated with MamaDictionaries 
    * **class [MamaException](classWombat_1_1MamaException.html)** <br>Provides a MAMA API-specific exception which captures the status code of the last MAMA API call and a textual description of the error. 
    * **class [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html)** <br>A class that describes a field in a [MamaMsg]()
        * **struct [NativeMethods](structWombat_1_1MamaFieldDescriptor_1_1NativeMethods.html)** 
    * **class [MamaFtMember](classWombat_1_1MamaFtMember.html)** <br>A member of a MAMA fault tolerance group 
        * **class [CallbackForwarder](classWombat_1_1MamaFtMember_1_1CallbackForwarder.html)** 
        * **struct [NativeMethods](structWombat_1_1MamaFtMember_1_1NativeMethods.html)** 
    * **interface [MamaFtMemberCallback](interfaceWombat_1_1MamaFtMemberCallback.html)** <br>Callback interface to receive notifications regarding Fault Tolerance events 
    * **class [MamaInbox](classWombat_1_1MamaInbox.html)** <br>A class for processing point-to-point messaging 
        * **class [MamaInboxImpl](classWombat_1_1MamaInbox_1_1MamaInboxImpl.html)** <br>This impl will perform the work of invoking user supplied callbacks, it is held to ensure that the user can destroy and recreate the parent inbox during the callbacks. 
        * **struct [NativeMethods](structWombat_1_1MamaInbox_1_1NativeMethods.html)** 
    * **interface [MamaInboxCallback](interfaceWombat_1_1MamaInboxCallback.html)** <br>Provides an object-oriented callback interface for a [MamaInbox](classWombat_1_1MamaInbox.html) response to a p2p message being received or when an error is encountered during p2p messaging 
    * **class [MamaIo](classWombat_1_1MamaIo.html)** <br>I/O handler 
        * **struct [NativeMethods](structWombat_1_1MamaIo_1_1NativeMethods.html)** 
    * **interface [MamaIoCallback](interfaceWombat_1_1MamaIoCallback.html)** <br>Callback interface invoked by the MamIo handler. 
    * **interface [MamaLogFileCallback](interfaceWombat_1_1MamaLogFileCallback.html)** <br>Callbacks associated with logging 
    * **interface [MamaLogFileCallback2](interfaceWombat_1_1MamaLogFileCallback2.html)** <br>Callbacks associated with logging 
    * **class [MamaMsg](classWombat_1_1MamaMsg.html)** <br>Class which encapsulates the messages used in the MAMA infrastructure 
        * **class [CallbackForwarder](classWombat_1_1MamaMsg_1_1CallbackForwarder.html)** 
        * **struct [NativeMethods](structWombat_1_1MamaMsg_1_1NativeMethods.html)** 
    * **class [MamaMsgField](classWombat_1_1MamaMsgField.html)** <br>Class that represents a field in a [MamaMsg](classWombat_1_1MamaMsg.html)
        * **struct [NativeMethods](structWombat_1_1MamaMsgField_1_1NativeMethods.html)** 
    * **interface [MamaMsgFieldIterator](interfaceWombat_1_1MamaMsgFieldIterator.html)** <br>Callbacks for iterating through the fields of a message 
    * **class [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html)** <br>Class for iterating through the fields in a [MamaMsg](classWombat_1_1MamaMsg.html)
        * **struct [NativeMethods](structWombat_1_1MamaMsgIterator_1_1NativeMethods.html)** 
    * **class [MamaMulticastFtMember](classWombat_1_1MamaMulticastFtMember.html)** <br>A member of a MAMA fault tolerance multicast group 
    * **class [MamaPayloadBridge](classWombat_1_1MamaPayloadBridge.html)** 
        * **struct [NativeMethods](structWombat_1_1MamaPayloadBridge_1_1NativeMethods.html)** 
    * **class [MamaPrice](classWombat_1_1MamaPrice.html)** <br>A class for manipulating monetary prices 
        * **struct [NativeMethods](structWombat_1_1MamaPrice_1_1NativeMethods.html)** 
    * **class [MamaPublisher](classWombat_1_1MamaPublisher.html)** <br>The [MamaPublisher]() class publishes messages to basic or market data subscriptions depending on the underlying transport 
        * **struct [NativeMethods](structWombat_1_1MamaPublisher_1_1NativeMethods.html)** 
            * **struct [PublisherCallbacks](structWombat_1_1MamaPublisher_1_1NativeMethods_1_1PublisherCallbacks.html)** 
    * **interface [MamaPublisherCallback](interfaceWombat_1_1MamaPublisherCallback.html)** <br>Callbacks at the publisher level. 
    * **class [MamaQueue](classWombat_1_1MamaQueue.html)** <br>MamaQueues allow applications to dispatch events in order with multiple threads. 
        * **class [EnqueueCallbackForwarder](classWombat_1_1MamaQueue_1_1EnqueueCallbackForwarder.html)** 
        * **class [EnqueueEventForwarder](classWombat_1_1MamaQueue_1_1EnqueueEventForwarder.html)** <br>This class is used to forward messages from the enqueueEvent function to the instance of the MamaQueueCallback class that the client originally supplied. Note that multiple events may be enqueued before any of them are processed. To avoid the managed objects being collected references are stored in a Dictionary object. These are then removed whenever the relevant callback fires. 
        * **struct [NativeMethods](structWombat_1_1MamaQueue_1_1NativeMethods.html)** 
        * **class [WatermarkCallbackForwarder](classWombat_1_1MamaQueue_1_1WatermarkCallbackForwarder.html)** 
        * **struct [WatermarkCallbacks](structWombat_1_1MamaQueue_1_1WatermarkCallbacks.html)** 
    * **interface [MamaQueueEnqueueCallback](interfaceWombat_1_1MamaQueueEnqueueCallback.html)** <br>Callbacks associated with MamaQueues 
    * **interface [MamaQueueEventCallback](interfaceWombat_1_1MamaQueueEventCallback.html)** <br>Callbacks associated with MamaQueues 
    * **class [MamaQueueGroup](classWombat_1_1MamaQueueGroup.html)** <br>A class for distributing events across multiple queues in a round robin fashion. 
        * **class [MamaQueueThread](classWombat_1_1MamaQueueGroup_1_1MamaQueueThread.html)** <br>This class provides a MAMA queue as well as a thread to process it. 
    * **interface [MamaQueueMonitorCallback](interfaceWombat_1_1MamaQueueMonitorCallback.html)** 
    * **class [MamaReservedFields](classWombat_1_1MamaReservedFields.html)** <br>Maintains a cache of common field descriptors. 
    * **interface [MamaSendCompleteCallback](interfaceWombat_1_1MamaSendCompleteCallback.html)** <br>Provides an object-oriented callback interface for [MamaPublisher](classWombat_1_1MamaPublisher.html)'s sendWithThrottle and sendFromInboxWithThrottle methods 
    * **class [MamaSource](classWombat_1_1MamaSource.html)** <br>A [MamaSource]() maintains information about a data source, including the quality of the data coming from that source 
        * **struct [NativeMethods](structWombat_1_1MamaSource_1_1NativeMethods.html)** 
    * **class [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html)** <br>A [MamaSourceGroup]() monitors a set of [MamaSource](classWombat_1_1MamaSource.html)s that presumably provide a duplicate set of data. 
        * **class [Cookie](classWombat_1_1MamaSourceGroup_1_1Cookie.html)** 
        * **class [Enumerator](classWombat_1_1MamaSourceGroup_1_1Enumerator.html)** 
        * **struct [NativeMethods](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html)** 
        * **interface [StateChangedRegistration](interfaceWombat_1_1MamaSourceGroup_1_1StateChangedRegistration.html)** <br>Encapsulates a registration of a state-change mCallback for a particular source mGroup 
    * **class [MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html)** <br>A [MamaSourceGroupManager]() monitors a set of [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html)s 
        * **struct [NativeMethods](structWombat_1_1MamaSourceGroupManager_1_1NativeMethods.html)** 
    * **class [MamaSourceManager](classWombat_1_1MamaSourceManager.html)** <br>A [MamaSourceManager]() maintains information about a set of data sources, including the quality of the data coming from those sources. 
        * **struct [NativeMethods](structWombat_1_1MamaSourceManager_1_1NativeMethods.html)** 
    * **interface [MamaSourceStateChangeCallback](interfaceWombat_1_1MamaSourceStateChangeCallback.html)** <br>Applications can register with [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) to receive state change notifications when the state of sources within the group has changed. 
    * **interface [MamaStartBackgroundCallback](interfaceWombat_1_1MamaStartBackgroundCallback.html)** <br>This interface defines a callback function that is used when starting mama with the mama_startBackground function. 
    * **class [MamaStatus](classWombat_1_1MamaStatus.html)** <br>Status codes returned by MAMA methods 
    * **class [MamaSubscription](classWombat_1_1MamaSubscription.html)** <br>Subscription class, derives from a basic subscription. 
        * **class [MamaBasicCallbackAdapter](classWombat_1_1MamaSubscription_1_1MamaBasicCallbackAdapter.html)** <br>This adapter provides translation between the [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) and [MamaSubscriptionCallback]() types. 
        * **class [MamaSubscriptionImpl](classWombat_1_1MamaSubscription_1_1MamaSubscriptionImpl.html)** <br>This impl will perform the work of invoking user supplied callbacks, it is held to ensure that the user can destroy and recreate the parent subscription during the callbacks. Note that this class derives from the MamaBasicSubscriptionImpl so that the static callback functions in the [MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) class can be re-used. However as the [MamaSubscriptionCallback]() interface is a separate type, (it cannot be derived from [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) as the type of the subscription passed to the callback functions would be incorrect), overloads must be provided for all the Invoke methods. 
        * **struct [SubscriptionNativeMethods](structWombat_1_1MamaSubscription_1_1SubscriptionNativeMethods.html)** 
    * **interface [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html)** <br>This interface should be implemented by clients wish to create a MAMA subscription, it contains callback functions that will be invoked whenever specific events occur. 
    * **interface [MamaSymbolMapCallback](interfaceWombat_1_1MamaSymbolMapCallback.html)** 
    * **class [MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html)** <br>A file-based symbol mapper 
        * **struct [NativeMethods](structWombat_1_1MamaSymbolMapFile_1_1NativeMethods.html)** 
    * **class [MamaTimer](classWombat_1_1MamaTimer.html)** <br>A repeating timer 
        * **class [MamaTimerImpl](classWombat_1_1MamaTimer_1_1MamaTimerImpl.html)** <br>This impl will perform the work of invoking user supplied callbacks, it is held to ensure that the user can destroy and recreate the parent timer during the callbacks. 
        * **struct [NativeMethods](structWombat_1_1MamaTimer_1_1NativeMethods.html)** 
    * **interface [MamaTimerCallback](interfaceWombat_1_1MamaTimerCallback.html)** <br>Prototype for callback invoked by timer. 
    * **class [MamaTransport](classWombat_1_1MamaTransport.html)** <br>The underpinning object in any MAMA application 
        * **class [CallbackForwarder](classWombat_1_1MamaTransport_1_1CallbackForwarder.html)** 
        * **class [CallbackForwarderSymbolMap](classWombat_1_1MamaTransport_1_1CallbackForwarderSymbolMap.html)** 
        * **struct [NativeMethods](structWombat_1_1MamaTransport_1_1NativeMethods.html)** 
        * **class [TopicCallbackForwarder](classWombat_1_1MamaTransport_1_1TopicCallbackForwarder.html)** 
    * **interface [MamaTransportCallback](interfaceWombat_1_1MamaTransportCallback.html)** <br>Callbacks associated with MamaTransports 
    * **interface [MamaTransportTopicCallback](interfaceWombat_1_1MamaTransportTopicCallback.html)** <br>Callbacks at the topic level associated with MamaTransports 
    * **class [MamaVersion](classWombat_1_1MamaVersion.html)** <br>MAMA version information 
    * **class [MamaWeightedSource](classWombat_1_1MamaWeightedSource.html)** <br>Encapsulates both a source object and its weight in a source group 
    * **class [MamaWrapper](classWombat_1_1MamaWrapper.html)** <br>Base class for all wrapped native objects. Provides common facilities to the base classes. 
    * **struct [NullableBool](structWombat_1_1NullableBool.html)** <br>Modelled after Nullable<T> in C# 2.0 
    * **struct [NullableInt](structWombat_1_1NullableInt.html)** <br>Modelled after Nullable<T> in C# 2.0 
    * **struct [NullableLong](structWombat_1_1NullableLong.html)** <br>Modelled after Nullable<T> in C# 2.0 



-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
