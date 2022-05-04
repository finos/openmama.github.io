---
title: Wombat
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat



## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::ISourceManager](interfaceWombat_1_1ISourceManager.html)** <br>A container of [MamaSource]() objects. Because each [MamaSource]() can contain sub-sources (and so on), [MamaSource]() is also a source manager and implements this interface.  |
| class | **[Wombat::Mama](classWombat_1_1Mama.html)** <br>MAMA - Middleware Agnostic Messaging API  |
| class | **[Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)** <br>The basic subscription supports publish / subscribe. This class can be disposed or the deallocate function called to reduce time during finalization. Note that the deallocate function will attempt to destroy the subscription if this has not already been done whereas dispose will only de-allocate the memory.  |
| interface | **[Wombat::MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html)** <br>This interface should be implemented by clients wish to create a MAMA Basic subscription, it contains callback functions that will be invoked whenever specific events occur.  |
| class | **[Wombat::MamaBridge](classWombat_1_1MamaBridge.html)**  |
| class | **[Wombat::MamaBridgeFtMember](classWombat_1_1MamaBridgeFtMember.html)** <br>A member of a MAMA fault tolerance bridge group  |
| class | **[Wombat::MamaClientProfile](classWombat_1_1MamaClientProfile.html)** <br>A class containing various information about the MAMA client  |
| class | **[Wombat::MamaDictionary](classWombat_1_1MamaDictionary.html)** <br>Maps field identifiers (FIDs) to human-readable strings  |
| interface | **[Wombat::MamaDictionaryCallback](interfaceWombat_1_1MamaDictionaryCallback.html)** <br>Collection of callbacks associated with MamaDictionaries  |
| class | **[Wombat::MamaException](classWombat_1_1MamaException.html)** <br>Provides a MAMA API-specific exception which captures the status code of the last MAMA API call and a textual description of the error.  |
| class | **[Wombat::MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html)** <br>A class that describes a field in a [MamaMsg]() |
| class | **[Wombat::MamaFtMember](classWombat_1_1MamaFtMember.html)** <br>A member of a MAMA fault tolerance group  |
| interface | **[Wombat::MamaFtMemberCallback](interfaceWombat_1_1MamaFtMemberCallback.html)** <br>Callback interface to receive notifications regarding Fault Tolerance events  |
| class | **[Wombat::MamaInbox](classWombat_1_1MamaInbox.html)** <br>A class for processing point-to-point messaging  |
| interface | **[Wombat::MamaInboxCallback](interfaceWombat_1_1MamaInboxCallback.html)** <br>Provides an object-oriented callback interface for a [MamaInbox](classWombat_1_1MamaInbox.html) response to a p2p message being received or when an error is encountered during p2p messaging  |
| class | **[Wombat::MamaIo](classWombat_1_1MamaIo.html)** <br>I/O handler  |
| interface | **[Wombat::MamaIoCallback](interfaceWombat_1_1MamaIoCallback.html)** <br>Callback interface invoked by the MamIo handler.  |
| interface | **[Wombat::MamaLogFileCallback](interfaceWombat_1_1MamaLogFileCallback.html)** <br>Callbacks associated with logging  |
| interface | **[Wombat::MamaLogFileCallback2](interfaceWombat_1_1MamaLogFileCallback2.html)** <br>Callbacks associated with logging  |
| class | **[Wombat::MamaMsg](classWombat_1_1MamaMsg.html)** <br>Class which encapsulates the messages used in the MAMA infrastructure  |
| class | **[Wombat::MamaMsgField](classWombat_1_1MamaMsgField.html)** <br>Class that represents a field in a [MamaMsg](classWombat_1_1MamaMsg.html) |
| interface | **[Wombat::MamaMsgFieldIterator](interfaceWombat_1_1MamaMsgFieldIterator.html)** <br>Callbacks for iterating through the fields of a message  |
| class | **[Wombat::MamaMsgIterator](classWombat_1_1MamaMsgIterator.html)** <br>Class for iterating through the fields in a [MamaMsg](classWombat_1_1MamaMsg.html) |
| class | **[Wombat::MamaMulticastFtMember](classWombat_1_1MamaMulticastFtMember.html)** <br>A member of a MAMA fault tolerance multicast group  |
| class | **[Wombat::MamaPayloadBridge](classWombat_1_1MamaPayloadBridge.html)**  |
| class | **[Wombat::MamaPrice](classWombat_1_1MamaPrice.html)** <br>A class for manipulating monetary prices  |
| class | **[Wombat::MamaPublisher](classWombat_1_1MamaPublisher.html)** <br>The [MamaPublisher]() class publishes messages to basic or market data subscriptions depending on the underlying transport  |
| interface | **[Wombat::MamaPublisherCallback](interfaceWombat_1_1MamaPublisherCallback.html)** <br>Callbacks at the publisher level.  |
| class | **[Wombat::MamaQueue](classWombat_1_1MamaQueue.html)** <br>MamaQueues allow applications to dispatch events in order with multiple threads.  |
| interface | **[Wombat::MamaQueueEnqueueCallback](interfaceWombat_1_1MamaQueueEnqueueCallback.html)** <br>Callbacks associated with MamaQueues  |
| interface | **[Wombat::MamaQueueEventCallback](interfaceWombat_1_1MamaQueueEventCallback.html)** <br>Callbacks associated with MamaQueues  |
| class | **[Wombat::MamaQueueGroup](classWombat_1_1MamaQueueGroup.html)** <br>A class for distributing events across multiple queues in a round robin fashion.  |
| interface | **[Wombat::MamaQueueMonitorCallback](interfaceWombat_1_1MamaQueueMonitorCallback.html)**  |
| class | **[Wombat::MamaReservedFields](classWombat_1_1MamaReservedFields.html)** <br>Maintains a cache of common field descriptors.  |
| interface | **[Wombat::MamaSendCompleteCallback](interfaceWombat_1_1MamaSendCompleteCallback.html)** <br>Provides an object-oriented callback interface for [MamaPublisher](classWombat_1_1MamaPublisher.html)'s sendWithThrottle and sendFromInboxWithThrottle methods  |
| class | **[Wombat::MamaSource](classWombat_1_1MamaSource.html)** <br>A [MamaSource]() maintains information about a data source, including the quality of the data coming from that source  |
| class | **[Wombat::MamaSourceGroup](classWombat_1_1MamaSourceGroup.html)** <br>A [MamaSourceGroup]() monitors a set of [MamaSource](classWombat_1_1MamaSource.html)s that presumably provide a duplicate set of data.  |
| class | **[Wombat::MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html)** <br>A [MamaSourceGroupManager]() monitors a set of [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html)s  |
| class | **[Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)** <br>A [MamaSourceManager]() maintains information about a set of data sources, including the quality of the data coming from those sources.  |
| interface | **[Wombat::MamaSourceStateChangeCallback](interfaceWombat_1_1MamaSourceStateChangeCallback.html)** <br>Applications can register with [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) to receive state change notifications when the state of sources within the group has changed.  |
| interface | **[Wombat::MamaStartBackgroundCallback](interfaceWombat_1_1MamaStartBackgroundCallback.html)** <br>This interface defines a callback function that is used when starting mama with the mama_startBackground function.  |
| class | **[Wombat::MamaStatus](classWombat_1_1MamaStatus.html)** <br>Status codes returned by MAMA methods  |
| class | **[Wombat::MamaSubscription](classWombat_1_1MamaSubscription.html)** <br>Subscription class, derives from a basic subscription.  |
| interface | **[Wombat::MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html)** <br>This interface should be implemented by clients wish to create a MAMA subscription, it contains callback functions that will be invoked whenever specific events occur.  |
| interface | **[Wombat::MamaSymbolMapCallback](interfaceWombat_1_1MamaSymbolMapCallback.html)**  |
| class | **[Wombat::MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html)** <br>A file-based symbol mapper  |
| class | **[Wombat::MamaTimer](classWombat_1_1MamaTimer.html)** <br>A repeating timer  |
| interface | **[Wombat::MamaTimerCallback](interfaceWombat_1_1MamaTimerCallback.html)** <br>Prototype for callback invoked by timer.  |
| class | **[Wombat::MamaTransport](classWombat_1_1MamaTransport.html)** <br>The underpinning object in any MAMA application  |
| interface | **[Wombat::MamaTransportCallback](interfaceWombat_1_1MamaTransportCallback.html)** <br>Callbacks associated with MamaTransports  |
| interface | **[Wombat::MamaTransportTopicCallback](interfaceWombat_1_1MamaTransportTopicCallback.html)** <br>Callbacks at the topic level associated with MamaTransports  |
| class | **[Wombat::MamaVersion](classWombat_1_1MamaVersion.html)** <br>MAMA version information  |
| class | **[Wombat::MamaWeightedSource](classWombat_1_1MamaWeightedSource.html)** <br>Encapsulates both a source object and its weight in a source group  |
| class | **[Wombat::MamaWrapper](classWombat_1_1MamaWrapper.html)** <br>Base class for all wrapped native objects. Provides common facilities to the base classes.  |
| struct | **[Wombat::NullableBool](structWombat_1_1NullableBool.html)** <br>Modelled after Nullable<T> in C# 2.0  |
| struct | **[Wombat::NullableInt](structWombat_1_1NullableInt.html)** <br>Modelled after Nullable<T> in C# 2.0  |
| struct | **[Wombat::NullableLong](structWombat_1_1NullableLong.html)** <br>Modelled after Nullable<T> in C# 2.0  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[MamaLogLevel](namespaceWombat.html#enum-mamaloglevel)** { MAMA_LOG_LEVEL_OFF = 0, MAMA_LOG_LEVEL_SEVERE = 1, MAMA_LOG_LEVEL_ERROR = 2, MAMA_LOG_LEVEL_WARN = 3, MAMA_LOG_LEVEL_NORMAL = 4, MAMA_LOG_LEVEL_FINE = 5, MAMA_LOG_LEVEL_FINER = 6, MAMA_LOG_LEVEL_FINEST = 7}<br>Level of logging within MAMA  |
| enum class| **[MamaLogFilePolicy](namespaceWombat.html#enum-mamalogfilepolicy)** { LOGFILE_UNBOUNDED = 1, LOGFILE_ROLL = 2, LOGFILE_OVERWRITE = 3, LOGFILE_USER = 4}<br>Logging policy within MAMA  |
| enum class| **[mamaFtState](namespaceWombat.html#enum-mamaftstate)** { MAMA_FT_STATE_STANDBY = 0, MAMA_FT_STATE_ACTIVE = 1, MAMA_FT_STATE_UNKNOWN = 99} |
| enum class| **[mamaFtType](namespaceWombat.html#enum-mamafttype)** { MAMA_FT_TYPE_MULTICAST = 1, MAMA_FT_TYPE_BRIDGE = 2, MAMA_FT_TYPE_MAX = 3} |
| enum class| **[mamaIoType](namespaceWombat.html#enum-mamaiotype)** { MAMA_IO_READ, MAMA_IO_WRITE, MAMA_IO_CONNECT, MAMA_IO_ACCEPT, MAMA_IO_CLOSE, MAMA_IO_ERROR, MAMA_IO_EXCEPT}<br>IO Types. Not all implementations support all mamaIoTypes.  |
| enum class| **[mamaPayloadType](namespaceWombat.html#enum-mamapayloadtype)** { MAMA_PAYLOAD_SOLACE = '1', MAMA_PAYLOAD_V5 = '5', MAMA_PAYLOAD_AVIS = 'A', MAMA_PAYLOAD_TICK42BLP = 'B', MAMA_PAYLOAD_FAST = 'F', MAMA_PAYLOAD_RAI = 'I', MAMA_PAYLOAD_KWANTUM = 'K', MAMA_PAYLOAD_UMS = 'L', MAMA_PAYLOAD_INRUSH = 'N', MAMA_PAYLOAD_TICK42RMDS = 'P', MAMA_PAYLOAD_QPID = 'Q', MAMA_PAYLOAD_TIBRV = 'R', MAMA_PAYLOAD_IBMWFO = 'S', MAMA_PAYLOAD_ACTIV = 'T', MAMA_PAYLOAD_VULCAN = 'V', MAMA_PAYLOAD_WOMBAT_MSG = 'W', MAMA_PAYLOAD_EXEGY = 'X', MAMA_PAYLOAD_UNKNOWN = 'U'}<br>Definition of payload types.  |
| enum class| **[mamaMsgType](namespaceWombat.html#enum-mamamsgtype)** { MAMA_MSG_TYPE_UPDATE =   0, MAMA_MSG_TYPE_INITIAL =   1, MAMA_MSG_TYPE_CANCEL =   2, MAMA_MSG_TYPE_ERROR =   3, MAMA_MSG_TYPE_CORRECTION =   4, MAMA_MSG_TYPE_CLOSING =   5, MAMA_MSG_TYPE_RECAP =   6, MAMA_MSG_TYPE_DELETE =   7, MAMA_MSG_TYPE_EXPIRE =   8, MAMA_MSG_TYPE_SNAPSHOT =   9, MAMA_MSG_TYPE_PREOPENING =   12, MAMA_MSG_TYPE_QUOTE =   13, MAMA_MSG_TYPE_TRADE =   14, MAMA_MSG_TYPE_ORDER =   15, MAMA_MSG_TYPE_BOOK_INITIAL =   16, MAMA_MSG_TYPE_BOOK_UPDATE =   17, MAMA_MSG_TYPE_BOOK_CLEAR =   18, MAMA_MSG_TYPE_BOOK_RECAP =   19, MAMA_MSG_TYPE_BOOK_SNAPSHOT =   20, MAMA_MSG_TYPE_NOT_PERMISSIONED =   21, MAMA_MSG_TYPE_NOT_FOUND =   22, MAMA_MSG_TYPE_END_OF_INITIALS =   23, MAMA_MSG_TYPE_WOMBAT_REQUEST =   24, MAMA_MSG_TYPE_WOMBAT_CALC =   25, MAMA_MSG_TYPE_SEC_STATUS =   26, MAMA_MSG_TYPE_DDICT_SNAPSHOT =   50, MAMA_MSG_TYPE_MISC =   100, MAMA_MSG_TYPE_TIBRV =   101, MAMA_MSG_TYPE_FEATURE_SET =   150, MAMA_MSG_TYPE_SYNC_REQUEST =   170, MAMA_MSG_TYPE_REFRESH =   171, MAMA_MSG_TYPE_WORLD_VIEW =   172, MAMA_MSG_TYPE_NEWS_QUERY =   173, MAMA_MSG_TYPE_NULL =   175, MAMA_MSG_TYPE_ENTITLEMENTS_REFRESH =   176, MAMA_MSG_TYPE_UNKNOWN =   199}<br>Enum representing the message type  |
| enum class| **[mamaMsgStatus](namespaceWombat.html#enum-mamamsgstatus)** { MAMA_MSG_STATUS_OK =   0, MAMA_MSG_STATUS_LINE_DOWN =   1, MAMA_MSG_STATUS_NO_SUBSCRIBERS =   2, MAMA_MSG_STATUS_BAD_SYMBOL =   3, MAMA_MSG_STATUS_EXPIRED =   4, MAMA_MSG_STATUS_TIMEOUT =   5, MAMA_MSG_STATUS_MISC =   6, MAMA_MSG_STATUS_STALE =   7, MAMA_MSG_STATUS_PLATFORM_STATUS =   8, MAMA_MSG_STATUS_TIBRV_STATUS =   8, MAMA_MSG_STATUS_NOT_ENTITLED =   9, MAMA_MSG_STATUS_NOT_FOUND =   10, MAMA_MSG_STATUS_POSSIBLY_STALE =   11, MAMA_MSG_STATUS_NOT_PERMISSIONED =   12, MAMA_MSG_STATUS_TOPIC_CHANGE =   13, MAMA_MSG_STATUS_BANDWIDTH_EXCEEDED =   14, MAMA_MSG_STATUS_DUPLICATE =   15, MAMA_MSG_STATUS_UNKNOWN =   99}<br>Represents the status of a [MamaMsg]() |
| enum class| **[mamaFieldType](namespaceWombat.html#enum-mamafieldtype)** { MAMA_FIELD_TYPE_MSG =   1, MAMA_FIELD_TYPE_OPAQUE =   7, MAMA_FIELD_TYPE_STRING =   8, MAMA_FIELD_TYPE_BOOL =   9, MAMA_FIELD_TYPE_CHAR =   10, MAMA_FIELD_TYPE_I8 =   14, MAMA_FIELD_TYPE_U8 =   15, MAMA_FIELD_TYPE_I16 =   16, MAMA_FIELD_TYPE_U16 =   17, MAMA_FIELD_TYPE_I32 =   18, MAMA_FIELD_TYPE_U32 =   19, MAMA_FIELD_TYPE_I64 =   20, MAMA_FIELD_TYPE_U64 =   21, MAMA_FIELD_TYPE_F32 =   24, MAMA_FIELD_TYPE_F64 =   25, MAMA_FIELD_TYPE_TIME =   26, MAMA_FIELD_TYPE_PRICE =   27, MAMA_FIELD_TYPE_VECTOR_I8 =   34, MAMA_FIELD_TYPE_VECTOR_U8 =   35, MAMA_FIELD_TYPE_VECTOR_I16 =   36, MAMA_FIELD_TYPE_VECTOR_U16 =   37, MAMA_FIELD_TYPE_VECTOR_I32 =   38, MAMA_FIELD_TYPE_VECTOR_U32 =   39, MAMA_FIELD_TYPE_VECTOR_I64 =   40, MAMA_FIELD_TYPE_VECTOR_U64 =   41, MAMA_FIELD_TYPE_VECTOR_F32 =   44, MAMA_FIELD_TYPE_VECTOR_F64 =   45, MAMA_FIELD_TYPE_VECTOR_STRING =   46, MAMA_FIELD_TYPE_VECTOR_MSG =   47, MAMA_FIELD_TYPE_VECTOR_TIME =   48, MAMA_FIELD_TYPE_VECTOR_PRICE =   49, MAMA_FIELD_TYPE_QUANTITY =	50, MAMA_FIELD_TYPE_COLLECTION =   99, MAMA_FIELD_TYPE_UNKNOWN =   100}<br>Represents the types of fields that can be contained in a [MamaMsg]() |
| enum class| **[mamaPricePrecision](namespaceWombat.html#enum-mamapriceprecision)** { MAMA_PRICE_PREC_UNKNOWN = 0, MAMA_PRICE_PREC_10 = 1, MAMA_PRICE_PREC_100 = 2, MAMA_PRICE_PREC_1000 = 3, MAMA_PRICE_PREC_10000 = 4, MAMA_PRICE_PREC_100000 = 5, MAMA_PRICE_PREC_1000000 = 6, MAMA_PRICE_PREC_10000000 = 7, MAMA_PRICE_PREC_100000000 = 8, MAMA_PRICE_PREC_1000000000 = 9, MAMA_PRICE_PREC_10000000000 = 10, MAMA_PRICE_PREC_100000000000 = 11, MAMA_PRICE_PREC_1000000000000 = 12, MAMA_PRICE_PREC_10000000000000 = 13, MAMA_PRICE_PREC_100000000000000 = 14, MAMA_PRICE_PREC_1000000000000000 = 15, MAMA_PRICE_PREC_INT = 16, MAMA_PRICE_PREC_DIV_2 = 17, MAMA_PRICE_PREC_DIV_4 = 18, MAMA_PRICE_PREC_DIV_8 = 19, MAMA_PRICE_PREC_DIV_16 = 20, MAMA_PRICE_PREC_DIV_32 = 21, MAMA_PRICE_PREC_DIV_64 = 22, MAMA_PRICE_PREC_DIV_128 = 23, MAMA_PRICE_PREC_DIV_256 = 24, MAMA_PRICE_PREC_DIV_512 = 25, MAMA_PRICE_PREC_TICK_32 = 26, MAMA_PRICE_PREC_HALF_32 = 27, MAMA_PRICE_PREC_QUARTER_32 = 28, MAMA_PRICE_PREC_TICK_64 = 29, MAMA_PRICE_PREC_HALF_64 = 30, MAMA_PRICE_PREC_10000000000000000 = 31, MAMA_PRICE_PREC_CENTS = MAMA_PRICE_PREC_100, MAMA_PRICE_PREC_PENNIES = MAMA_PRICE_PREC_100}<br>Enum defining how decimals are represented for the price. PREC_10 to PREC_10000000000 represent decimal places. PREC_DIV_2, _4, etc. represent fractional 1/2's, 1/4's, etc. TICK_32, HALF_32, etc. are for feeds that send prices in 1/32's and half 1/32's.  |
| enum class| **[mamaSourceState](namespaceWombat.html#enum-mamasourcestate)** { MAMA_SOURCE_STATE_OFF = 0, MAMA_SOURCE_STATE_OK = 1, MAMA_SOURCE_STATE_UNKNOWN = 99}<br>The state of a source in a [MamaSourceGroup]() |
| enum class| **[mamaServiceLevel](namespaceWombat.html#enum-mamaservicelevel)** { MAMA_SERVICE_LEVEL_REAL_TIME = 0, MAMA_SERVICE_LEVEL_SNAPSHOT = 1, MAMA_SERVICE_LEVEL_REPEATING_SNAPSHOT = 2, MAMA_SERVICE_LEVEL_CONFLATED = 5, MAMA_SERVICE_LEVEL_UNKNOWN = 99}<br>An enumeration that represents the service level (a) requested by a subscribing application, or (b) provided by the publisher.  |
| enum class| **[mamaSubscriptionType](namespaceWombat.html#enum-mamasubscriptiontype)** { MAMA_SUBSC_TYPE_NORMAL = 0, MAMA_SUBSC_TYPE_GROUP = 1, MAMA_SUBSC_TYPE_BOOK = 2, MAMA_SUBSC_TYPE_BASIC = 3, MAMA_SUBSC_TYPE_DICTIONARY = 4, MAMA_SUBSC_TYPE_SYMBOL_LIST = 5}<br>mamaSubscriptionType  |
| enum class| **[mamaQuality](namespaceWombat.html#enum-mamaquality)** { MAMA_QUALITY_OK, MAMA_QUALITY_MAYBE_STALE, MAMA_QUALITY_STALE, MAMA_QUALITY_PARTIAL_STALE, MAMA_QUALITY_FORCED_STALE, MAMA_QUALITY_DUPLICATE, MAMA_QUALITY_UNKNOWN}<br>Represents the data quality of the subscription and is passed by the MamaBasicSubscription.onQuality callback function.  |
| enum class| **[mamaSubscriptionState](namespaceWombat.html#enum-mamasubscriptionstate)** { MAMA_SUBSCRIPTION_UNKNOWN = 0, MAMA_SUBSCRIPTION_ALLOCATED = 1, MAMA_SUBSCRIPTION_SETUP = 2, MAMA_SUBSCRIPTION_ACTIVATING = 3, MAMA_SUBSCRIPTION_ACTIVATED = 4, MAMA_SUBSCRIPTION_DEACTIVATING = 5, MAMA_SUBSCRIPTION_DEACTIVATED = 6, MAMA_SUBSCRIPTION_DESTROYING = 7, MAMA_SUBSCRIPTION_DESTROYED = 8, MAMA_SUBSCRIPTION_DEALLOCATING = 9, MAMA_SUBSCRIPTION_DEALLOCATED = 10} |

## Types Documentation

### enum MamaLogLevel

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_LOG_LEVEL_OFF | 0| No logging   |
| MAMA_LOG_LEVEL_SEVERE | 1| Severe log level   |
| MAMA_LOG_LEVEL_ERROR | 2| Error log level   |
| MAMA_LOG_LEVEL_WARN | 3| Error log level   |
| MAMA_LOG_LEVEL_NORMAL | 4| Standard log level   |
| MAMA_LOG_LEVEL_FINE | 5| Fine log level   |
| MAMA_LOG_LEVEL_FINER | 6| Finer log level   |
| MAMA_LOG_LEVEL_FINEST | 7| Finest log level   |



Level of logging within MAMA 

### enum MamaLogFilePolicy

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| LOGFILE_UNBOUNDED | 1| Unbounded log size   |
| LOGFILE_ROLL | 2| Roll logfiles on max size   |
| LOGFILE_OVERWRITE | 3| Overwrite logfile on max size   |
| LOGFILE_USER | 4| Call user implementation on max size   |



Logging policy within MAMA 

### enum mamaFtState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_FT_STATE_STANDBY | 0|   |
| MAMA_FT_STATE_ACTIVE | 1|   |
| MAMA_FT_STATE_UNKNOWN | 99|   |




### enum mamaFtType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_FT_TYPE_MULTICAST | 1|   |
| MAMA_FT_TYPE_BRIDGE | 2|   |
| MAMA_FT_TYPE_MAX | 3|   |




### enum mamaIoType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_IO_READ | | the socket is readable   |
| MAMA_IO_WRITE | | the socket is writeable   |
| MAMA_IO_CONNECT | | the socket is connected   |
| MAMA_IO_ACCEPT | | the socket accepted a connection   |
| MAMA_IO_CLOSE | | the socket was closed   |
| MAMA_IO_ERROR | | an error occurred   |
| MAMA_IO_EXCEPT | | An exceptional event like out of band data occurred   |



IO Types. Not all implementations support all mamaIoTypes. 

### enum mamaPayloadType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_PAYLOAD_SOLACE | '1'| Solace Message   |
| MAMA_PAYLOAD_V5 | '5'| V5 Message   |
| MAMA_PAYLOAD_AVIS | 'A'| AVIS Message   |
| MAMA_PAYLOAD_TICK42BLP | 'B'| Tick42 BLP Message   |
| MAMA_PAYLOAD_FAST | 'F'| FAST Message   |
| MAMA_PAYLOAD_RAI | 'I'| RAI Message   |
| MAMA_PAYLOAD_KWANTUM | 'K'| KWANTUM Message   |
| MAMA_PAYLOAD_UMS | 'L'| UMS Message   |
| MAMA_PAYLOAD_INRUSH | 'N'| Inrush Message   |
| MAMA_PAYLOAD_TICK42RMDS | 'P'| Tick42 RMDS Message   |
| MAMA_PAYLOAD_QPID | 'Q'| QPID Message   |
| MAMA_PAYLOAD_TIBRV | 'R'| TIBRV Message   |
| MAMA_PAYLOAD_IBMWFO | 'S'| IBMWFO Message   |
| MAMA_PAYLOAD_ACTIV | 'T'| ACTIV Message   |
| MAMA_PAYLOAD_VULCAN | 'V'| Vulcan Message   |
| MAMA_PAYLOAD_WOMBAT_MSG | 'W'| [Wombat](namespaceWombat.html) Message   |
| MAMA_PAYLOAD_EXEGY | 'X'| Exegy Message   |
| MAMA_PAYLOAD_UNKNOWN | 'U'| Unknown Type   |



Definition of payload types. 

### enum mamaMsgType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_MSG_TYPE_UPDATE |   0| General update (includes, funds). For direct feeds, the handler sends more specific message types for stocks and order books; however, aggregated feeds will send MAMA_MSG_TYPE_UPDATE for stocks and order books as well.   |
| MAMA_MSG_TYPE_INITIAL |   1| Initial value. The initial image (full record) for normal subscriptions. The initial value is the first message (several messages for multi-part initial values) to arrive with all of the information in the cache. Multi-part initial values only occur on [Mama]() for TIBRV. If the requiresInitial parameter to createSubscription is 0, no initial value is sent.   |
| MAMA_MSG_TYPE_CANCEL |   2| Trade cancel   |
| MAMA_MSG_TYPE_ERROR |   3| An error occurred   |
| MAMA_MSG_TYPE_CORRECTION |   4| Trade correction   |
| MAMA_MSG_TYPE_CLOSING |   5| Closing summary   |
| MAMA_MSG_TYPE_RECAP |   6| Refresh/recap of some/all fields. When the client detects a sequence number gap, it requests a recap from the feed handler. The feed handler may also send recaps in the event of a correction or other event that requires publishing the full record.   |
| MAMA_MSG_TYPE_DELETE |   7| The symbol was deleted from the feed handler cache. The feed handler will not send any more updates for the symbol.   |
| MAMA_MSG_TYPE_EXPIRE |   8| Expired option or future   |
| MAMA_MSG_TYPE_SNAPSHOT |   9| A snapshot is the same as an initial value; however, the client will not receive any subsequent updates. Clients request snapshots by creating snapshot subscriptions.   |
| MAMA_MSG_TYPE_PREOPENING |   12| Pre-opening summary (e.g. morning "roll")   |
| MAMA_MSG_TYPE_QUOTE |   13| Quote updates   |
| MAMA_MSG_TYPE_TRADE |   14| Trade updates   |
| MAMA_MSG_TYPE_ORDER |   15| Order updates   |
| MAMA_MSG_TYPE_BOOK_INITIAL |   16| Order book initial value. This message is sent rather than MAMA_MSG_TYPE_INITIAL for order books.   |
| MAMA_MSG_TYPE_BOOK_UPDATE |   17| Order book update. Sent for order books rather than MAMA_MSG_TYPE_UPDATE   |
| MAMA_MSG_TYPE_BOOK_CLEAR |   18| Order book clear. All the entries should be removed from the book   |
| MAMA_MSG_TYPE_BOOK_RECAP |   19| Order book recap. Sent rather than MAMA_MSG_TYPE_RECAP for order books   |
| MAMA_MSG_TYPE_BOOK_SNAPSHOT |   20| Order book recap. Sent rather than MAMA_MSG_TYPE_SNAPSHOT for order books   |
| MAMA_MSG_TYPE_NOT_PERMISSIONED |   21| Not permissioned on the feed   |
| MAMA_MSG_TYPE_NOT_FOUND |   22| The symbols was not found but may show up later. This indicates that the symbol is not currently in the feed handler's cache, but may get added later. The feed handler must be configured with OrderBookNotFoundAction and RecordNotFoundAction set to not_found to enable this behaviour.   |
| MAMA_MSG_TYPE_END_OF_INITIALS |   23| End of group of initial values. Marks the last initial value for group subscriptions.   |
| MAMA_MSG_TYPE_WOMBAT_REQUEST |   24| A service request   |
| MAMA_MSG_TYPE_WOMBAT_CALC |   25| A calculated result   |
| MAMA_MSG_TYPE_SEC_STATUS |   26| A Security Status update   |
| MAMA_MSG_TYPE_DDICT_SNAPSHOT |   50| Data dictionary. This message contains the data dictionary   |
| MAMA_MSG_TYPE_MISC |   100| Miscellaneous   |
| MAMA_MSG_TYPE_TIBRV |   101| Returned if an RV error is encountered. The MsgStatus will be the tibrv_status   |
| MAMA_MSG_TYPE_FEATURE_SET |   150| The set of features and related params for a particular publisher This is an internal message type, it does not need to be processed by MAMA applications   |
| MAMA_MSG_TYPE_SYNC_REQUEST |   170| Subscription synchronization request This is an internal message type, it does not need to be processed by MAMA applications   |
| MAMA_MSG_TYPE_REFRESH |   171| Subscription refresh This is an internal message type, it does not need to be processed by MAMA applications   |
| MAMA_MSG_TYPE_WORLD_VIEW |   172| Worldview message This is an internal message type, it does not need to be processed by MAMA applications   |
| MAMA_MSG_TYPE_NEWS_QUERY |   173| A News Query message   |
| MAMA_MSG_TYPE_NULL |   175| A "keepalive" message This is an internal message type, it does not need to be processed by MAMA applications   |
| MAMA_MSG_TYPE_ENTITLEMENTS_REFRESH |   176| An Entitlements Refresh message   |
| MAMA_MSG_TYPE_UNKNOWN |   199| Unknown message type This is an internal message type, it does not need to be processed by MAMA applications   |



Enum representing the message type 

### enum mamaMsgStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_MSG_STATUS_OK |   0| All's well   |
| MAMA_MSG_STATUS_LINE_DOWN |   1| The feed handler has detected a Line Down   |
| MAMA_MSG_STATUS_NO_SUBSCRIBERS |   2| The feed handler does not have any subscribers to the subject   |
| MAMA_MSG_STATUS_BAD_SYMBOL |   3| The symbol does not exist   |
| MAMA_MSG_STATUS_EXPIRED |   4| Expired   |
| MAMA_MSG_STATUS_TIMEOUT |   5| A time out occurred   |
| MAMA_MSG_STATUS_MISC |   6| Miscellaneous status. Not an error   |
| MAMA_MSG_STATUS_STALE |   7| The subject is stale. Messages may have been dropped   |
| MAMA_MSG_STATUS_PLATFORM_STATUS |   8| Tibrv status / Middleware error status   |
| MAMA_MSG_STATUS_TIBRV_STATUS |   8|   |
| MAMA_MSG_STATUS_NOT_ENTITLED |   9| Not entitled to a subject   |
| MAMA_MSG_STATUS_NOT_FOUND |   10| Not found   |
| MAMA_MSG_STATUS_POSSIBLY_STALE |   11| Messages may have been dropped   |
| MAMA_MSG_STATUS_NOT_PERMISSIONED |   12| Not permissioned for the subject   |
| MAMA_MSG_STATUS_TOPIC_CHANGE |   13| Topic renamed   |
| MAMA_MSG_STATUS_BANDWIDTH_EXCEEDED |   14| Bandwidth exceeded   |
| MAMA_MSG_STATUS_DUPLICATE |   15| Message with duplicate sequence number   |
| MAMA_MSG_STATUS_UNKNOWN |   99| Unknown status   |



Represents the status of a [MamaMsg]()

### enum mamaFieldType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_FIELD_TYPE_MSG |   1| [MamaMsg]()  |
| MAMA_FIELD_TYPE_OPAQUE |   7| Binary data   |
| MAMA_FIELD_TYPE_STRING |   8| String   |
| MAMA_FIELD_TYPE_BOOL |   9| Boolean   |
| MAMA_FIELD_TYPE_CHAR |   10| Character   |
| MAMA_FIELD_TYPE_I8 |   14| Signed 8-bit int   |
| MAMA_FIELD_TYPE_U8 |   15| Unsigned byte   |
| MAMA_FIELD_TYPE_I16 |   16| Signed 16-bit int   |
| MAMA_FIELD_TYPE_U16 |   17| Unsigned 16-bit int   |
| MAMA_FIELD_TYPE_I32 |   18| Signed 32-bit int   |
| MAMA_FIELD_TYPE_U32 |   19| unsigned 32-bit int   |
| MAMA_FIELD_TYPE_I64 |   20| Signed 64-bit int   |
| MAMA_FIELD_TYPE_U64 |   21| Unsigned 64-bit int   |
| MAMA_FIELD_TYPE_F32 |   24| 32-bit float   |
| MAMA_FIELD_TYPE_F64 |   25| 64-bit float   |
| MAMA_FIELD_TYPE_TIME |   26| 64-bit MAMA time   |
| MAMA_FIELD_TYPE_PRICE |   27| 72-bit MAMA price   |
| MAMA_FIELD_TYPE_VECTOR_I8 |   34| Array of I8s   |
| MAMA_FIELD_TYPE_VECTOR_U8 |   35| Array of U8s   |
| MAMA_FIELD_TYPE_VECTOR_I16 |   36| Array of I16s   |
| MAMA_FIELD_TYPE_VECTOR_U16 |   37| Array of U16s   |
| MAMA_FIELD_TYPE_VECTOR_I32 |   38| Array of I32s   |
| MAMA_FIELD_TYPE_VECTOR_U32 |   39| Array of U32s   |
| MAMA_FIELD_TYPE_VECTOR_I64 |   40| Array of I64s   |
| MAMA_FIELD_TYPE_VECTOR_U64 |   41| Array of U64s   |
| MAMA_FIELD_TYPE_VECTOR_F32 |   44| Array of F32s   |
| MAMA_FIELD_TYPE_VECTOR_F64 |   45| Array of F64s   |
| MAMA_FIELD_TYPE_VECTOR_STRING |   46| Array of strings   |
| MAMA_FIELD_TYPE_VECTOR_MSG |   47| Array of MamaMsgs   |
| MAMA_FIELD_TYPE_VECTOR_TIME |   48| Array of MamaTimes   |
| MAMA_FIELD_TYPE_VECTOR_PRICE |   49| Array of MamaPrices   |
| MAMA_FIELD_TYPE_QUANTITY | =	50|   |
| MAMA_FIELD_TYPE_COLLECTION |   99|   |
| MAMA_FIELD_TYPE_UNKNOWN |   100| Unknown type   |



Represents the types of fields that can be contained in a [MamaMsg]()

### enum mamaPricePrecision

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_PRICE_PREC_UNKNOWN | 0|   |
| MAMA_PRICE_PREC_10 | 1|   |
| MAMA_PRICE_PREC_100 | 2|   |
| MAMA_PRICE_PREC_1000 | 3|   |
| MAMA_PRICE_PREC_10000 | 4|   |
| MAMA_PRICE_PREC_100000 | 5|   |
| MAMA_PRICE_PREC_1000000 | 6|   |
| MAMA_PRICE_PREC_10000000 | 7|   |
| MAMA_PRICE_PREC_100000000 | 8|   |
| MAMA_PRICE_PREC_1000000000 | 9|   |
| MAMA_PRICE_PREC_10000000000 | 10|   |
| MAMA_PRICE_PREC_100000000000 | 11|   |
| MAMA_PRICE_PREC_1000000000000 | 12|   |
| MAMA_PRICE_PREC_10000000000000 | 13|   |
| MAMA_PRICE_PREC_100000000000000 | 14|   |
| MAMA_PRICE_PREC_1000000000000000 | 15|   |
| MAMA_PRICE_PREC_INT | 16|   |
| MAMA_PRICE_PREC_DIV_2 | 17|   |
| MAMA_PRICE_PREC_DIV_4 | 18|   |
| MAMA_PRICE_PREC_DIV_8 | 19|   |
| MAMA_PRICE_PREC_DIV_16 | 20|   |
| MAMA_PRICE_PREC_DIV_32 | 21|   |
| MAMA_PRICE_PREC_DIV_64 | 22|   |
| MAMA_PRICE_PREC_DIV_128 | 23|   |
| MAMA_PRICE_PREC_DIV_256 | 24|   |
| MAMA_PRICE_PREC_DIV_512 | 25|   |
| MAMA_PRICE_PREC_TICK_32 | 26|   |
| MAMA_PRICE_PREC_HALF_32 | 27|   |
| MAMA_PRICE_PREC_QUARTER_32 | 28|   |
| MAMA_PRICE_PREC_TICK_64 | 29|   |
| MAMA_PRICE_PREC_HALF_64 | 30|   |
| MAMA_PRICE_PREC_10000000000000000 | 31|   |
| MAMA_PRICE_PREC_CENTS | MAMA_PRICE_PREC_100|   |
| MAMA_PRICE_PREC_PENNIES | MAMA_PRICE_PREC_100|   |



Enum defining how decimals are represented for the price. PREC_10 to PREC_10000000000 represent decimal places. PREC_DIV_2, _4, etc. represent fractional 1/2's, 1/4's, etc. TICK_32, HALF_32, etc. are for feeds that send prices in 1/32's and half 1/32's. 

### enum mamaSourceState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SOURCE_STATE_OFF | 0|  

```
    </summary> 
``` |
| MAMA_SOURCE_STATE_OK | 1|  

```
    </summary> 
``` |
| MAMA_SOURCE_STATE_UNKNOWN | 99|  

```
    </summary> 
``` |



The state of a source in a [MamaSourceGroup]()

### enum mamaServiceLevel

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SERVICE_LEVEL_REAL_TIME | 0| Real time updates   |
| MAMA_SERVICE_LEVEL_SNAPSHOT | 1| Single snapshot image only   |
| MAMA_SERVICE_LEVEL_REPEATING_SNAPSHOT | 2| Repeating snapshot image. When creating subscriptions, the serviceLevelOpt parameter should be set to the number of milliseconds representing the interval between snapshots. The first snapshot will be obtained within some random period between zero and the interval. Only one snapshot request will be allowed to be outstanding at a time.   |
| MAMA_SERVICE_LEVEL_CONFLATED | 5| Conflated updates (future)   |
| MAMA_SERVICE_LEVEL_UNKNOWN | 99| Unknown level   |



An enumeration that represents the service level (a) requested by a subscribing application, or (b) provided by the publisher. 

In the future, the service level provided to the application might change dynamically, depending upon infrastructure capacity. So, even though the requested service level is "real
time", if service deteriorates for any reason, the subscription may automatically switch to a conflated level (after notifying the application of the switch). 


### enum mamaSubscriptionType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SUBSC_TYPE_NORMAL | 0|   |
| MAMA_SUBSC_TYPE_GROUP | 1|   |
| MAMA_SUBSC_TYPE_BOOK | 2|   |
| MAMA_SUBSC_TYPE_BASIC | 3| No Market data   |
| MAMA_SUBSC_TYPE_DICTIONARY | 4|   |
| MAMA_SUBSC_TYPE_SYMBOL_LIST | 5|   |



mamaSubscriptionType 

### enum mamaQuality

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_QUALITY_OK | |   |
| MAMA_QUALITY_MAYBE_STALE | |   |
| MAMA_QUALITY_STALE | |   |
| MAMA_QUALITY_PARTIAL_STALE | |   |
| MAMA_QUALITY_FORCED_STALE | |   |
| MAMA_QUALITY_DUPLICATE | |   |
| MAMA_QUALITY_UNKNOWN | |   |



Represents the data quality of the subscription and is passed by the MamaBasicSubscription.onQuality callback function. 

### enum mamaSubscriptionState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SUBSCRIPTION_UNKNOWN | 0|   |
| MAMA_SUBSCRIPTION_ALLOCATED | 1|   |
| MAMA_SUBSCRIPTION_SETUP | 2|   |
| MAMA_SUBSCRIPTION_ACTIVATING | 3|   |
| MAMA_SUBSCRIPTION_ACTIVATED | 4|   |
| MAMA_SUBSCRIPTION_DEACTIVATING | 5|   |
| MAMA_SUBSCRIPTION_DEACTIVATED | 6|   |
| MAMA_SUBSCRIPTION_DESTROYING | 7|   |
| MAMA_SUBSCRIPTION_DESTROYED | 8|   |
| MAMA_SUBSCRIPTION_DEALLOCATING | 9|   |
| MAMA_SUBSCRIPTION_DEALLOCATED | 10|   |




The enumeration describes the state of the subsubscription at any time. The state can be obtained by calling the mamaSubscription_getState function. A string representation of this state can be obtained by calling the mamaSubscription_stringForState function. 







-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100