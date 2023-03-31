---
title: mama/subscription.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/subscription.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[mamaMsgCallbacks_](structmamaMsgCallbacks__.html)**  |
| struct | **[mamaWildCardMsgCallbacks_](structmamaWildCardMsgCallbacks__.html)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[preInitialScheme](subscription_8h.html#enum-preinitialscheme)** { PRE_INITIAL_SCHEME_ON_GAP, PRE_INITIAL_SCHEME_ON_INITIAL} |
| enum| **[mamaSubscriptionState](subscription_8h.html#enum-mamasubscriptionstate)** { MAMA_SUBSCRIPTION_UNKNOWN = 0, MAMA_SUBSCRIPTION_ALLOCATED = 1, MAMA_SUBSCRIPTION_SETUP = 2, MAMA_SUBSCRIPTION_ACTIVATING = 3, MAMA_SUBSCRIPTION_ACTIVATED = 4, MAMA_SUBSCRIPTION_DEACTIVATING = 5, MAMA_SUBSCRIPTION_DEACTIVATED = 6, MAMA_SUBSCRIPTION_DESTROYING = 7, MAMA_SUBSCRIPTION_DESTROYED = 8, MAMA_SUBSCRIPTION_DEALLOCATING = 9, MAMA_SUBSCRIPTION_DEALLOCATED = 10, MAMA_SUBSCRIPTION_REACTIVATING = 11} |
| enum| **[dqStartegyScheme](subscription_8h.html#enum-dqstartegyscheme)** { DQ_SCHEME_DELIVER_ALL, DQ_SCHEME_INGORE_DUPS} |
| enum| **[dqftStrategyScheme](subscription_8h.html#enum-dqftstrategyscheme)** { DQ_FT_DO_NOT_WAIT_FOR_RECAP, DQ_FT_WAIT_FOR_RECAP} |
| typedef void(MAMACALLTYPE *)(mamaSubscription subscription, void *closure) | **[wombat_subscriptionCreateCB](subscription_8h.html#typedef-wombat-subscriptioncreatecb)** <br>Function invoked when subscription creation is complete, and before any calls to `wombat_subscriptionOnMsgCB`.  |
| typedef void(MAMACALLTYPE *)(mamaSubscription subscription, void *closure) | **[wombat_subscriptionDestroyCB](subscription_8h.html#typedef-wombat-subscriptiondestroycb)** <br>Function invoked when a subscription has been completely destroyed, the client can have confidence that no further messages will be placed on the queue for this subscription.  |
| typedef void(MAMACALLTYPE *)(mamaSubscription subscription, mama_status status, void *platformError, const char *subject, void *closure) | **[wombat_subscriptionErrorCB](subscription_8h.html#typedef-wombat-subscriptionerrorcb)** <br>Invoked if an error occurs during prior to subscription creation or if the subscription receives a message for an unentitled subject.  |
| typedef void(MAMACALLTYPE *)(mamaSubscription subscription, void *closure) | **[wombat_subscriptionGapCB](subscription_8h.html#typedef-wombat-subscriptiongapcb)** <br>Function invoked when a sequence number gap is detected.  |
| typedef void(MAMACALLTYPE *)(mamaSubscription subscription, mamaMsg msg, void *closure, void *itemClosure) | **[wombat_subscriptionOnMsgCB](subscription_8h.html#typedef-wombat-subscriptiononmsgcb)** <br>Invoked when a message arrives.  |
| typedef void(MAMACALLTYPE *)(mamaSubscription subscription, mamaQuality quality, const char *symbol, short cause, const void *platformInfo, void *closure) | **[wombat_subscriptionQualityCB](subscription_8h.html#typedef-wombat-subscriptionqualitycb)** <br>Invoked to indicate a data quality event.  |
| typedef void(MAMACALLTYPE *)(mamaSubscription subscription, void *closure) | **[wombat_subscriptionRecapCB](subscription_8h.html#typedef-wombat-subscriptionrecapcb)** <br>Function invoked when a recap is requested upon detecting a sequence number gap.  |
| typedef void(MAMACALLTYPE *)(mamaSubscription subscription, mamaMsg msg, const char *topic, void *closure, void *itemClosure) | **[wombat_subscriptionWildCardOnMsgCB](subscription_8h.html#typedef-wombat-subscriptionwildcardonmsgcb)** <br>Invoked when a message arrives for a wild card subscrption.  |
| typedef struct [mamaMsgCallbacks_](structmamaMsgCallbacks__.html) | **[mamaMsgCallbacks](subscription_8h.html#typedef-mamamsgcallbacks)**  |
| typedef struct [mamaWildCardMsgCallbacks_](structmamaWildCardMsgCallbacks__.html) | **[mamaWildCardMsgCallbacks](subscription_8h.html#typedef-mamawildcardmsgcallbacks)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaSubscription_activate](subscription_8h.html#function-mamasubscription-activate)**(mamaSubscription subscription)<br>Activate a subscription that has been set up by mamaSubscription_setup().  |
| MAMAExpDLL mama_status | **[mamaSubscription_allocate](subscription_8h.html#function-mamasubscription-allocate)**(mamaSubscription * result)<br>Allocate memory for a new subscription.  |
| MAMAExpDLL int | **[mamaSubscription_checkDebugLevel](subscription_8h.html#function-mamasubscription-checkdebuglevel)**(mamaSubscription subscription, MamaLogLevel level)<br>Return whether the debug level for this subscription equals or exceeds some level.  |
| MAMAExpDLL mama_status | **[mamaSubscription_create](subscription_8h.html#function-mamasubscription-create)**(mamaSubscription subscription, mamaQueue queue, const [mamaMsgCallbacks](structmamaMsgCallbacks__.html) * callbacks, mamaSource source, const char * symbol, void * closure)<br>Create and activate subscription. This is effectively a pair of calls to mamaSubscription_setup() and mamaSubscription_activate().  |
| MAMAExpDLL mama_status | **[mamaSubscription_createBasic](subscription_8h.html#function-mamasubscription-createbasic)**(mamaSubscription subscription, mamaTransport transport, mamaQueue queue, const [mamaMsgCallbacks](structmamaMsgCallbacks__.html) * callbacks, const char * symbol, void * closure)<br>Create a basic subscription without marketdata semantics.  |
| MAMAExpDLL mama_status | **[mamaSubscription_createBasicWildCard](subscription_8h.html#function-mamasubscription-createbasicwildcard)**(mamaSubscription subscription, mamaTransport transport, mamaQueue queue, const [mamaWildCardMsgCallbacks](structmamaWildCardMsgCallbacks__.html) * callbacks, const char * source, const char * symbol, void * closure)<br>Create and activate a wildcard subscription that may be actually activated later. Activate the subscription using mamaSubscription_activate().  |
| MAMAExpDLL mama_status | **[mamaSubscription_createSnapshot](subscription_8h.html#function-mamasubscription-createsnapshot)**(mamaSubscription subscription, mamaQueue queue, const [mamaMsgCallbacks](structmamaMsgCallbacks__.html) * callbacks, mamaSource source, const char * symbol, void * closure)<br>Create a snapshot subscription for initial value only (no updates).  |
| MAMAExpDLL mama_status | **[mamaSubscription_deactivate](subscription_8h.html#function-mamasubscription-deactivate)**(mamaSubscription subscription)<br>Deactivate a subscription. The subscription can be reactivated if desired using mamaSubscription_activate().  |
| MAMAExpDLL mama_status | **[mamaSubscription_deallocate](subscription_8h.html#function-mamasubscription-deallocate)**(mamaSubscription subscription)<br>Free the memory for a mamaSubscription which was allocated via a call to `mamaSubscription_allocate()` |
| MAMAExpDLL mama_status | **[mamaSubscription_destroy](subscription_8h.html#function-mamasubscription-destroy)**(mamaSubscription subscription)<br>Destroy the subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_destroyEx](subscription_8h.html#function-mamasubscription-destroyex)**(mamaSubscription subscription)<br>This function will destroy the subscription and can be called from any thread.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getAppDataType](subscription_8h.html#function-mamasubscription-getappdatatype)**(mamaSubscription subscription, uint8_t * appDataType)<br>Retrieve the application-specific data type.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getClosure](subscription_8h.html#function-mamasubscription-getclosure)**(mamaSubscription subscription, void ** closure)<br>Return the closure.  |
| MAMAExpDLL MamaLogLevel | **[mamaSubscription_getDebugLevel](subscription_8h.html#function-mamasubscription-getdebuglevel)**(mamaSubscription subscription)<br>Return the debug level for this subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getItemClosure](subscription_8h.html#function-mamasubscription-getitemclosure)**(mamaSubscription subscription, void ** closure)<br>Return the item closure for the current message for the subscription. See `setItemClosure` for more detail.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getMsgQualifierFilter](subscription_8h.html#function-mamasubscription-getmsgqualifierfilter)**(mamaSubscription subscription, int * ignoreDefinitelyDuplicate, int * ignorePossiblyDuplicate, int * ignoreDefinitelyDelayed, int * ignorePossiblyDelayed, int * ignoreOutOfSequence)<br>Get the filters that discard message according to the message qualifier.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getPlatformError](subscription_8h.html#function-mamasubscription-getplatformerror)**(mamaSubscription subsc, void ** error)<br>Return the middleware-specific platform error.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getPreIntitialCacheSize](subscription_8h.html#function-mamasubscription-getpreintitialcachesize)**(mamaSubscription subscription, int * result)<br>Return the initial value cache size.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getQueue](subscription_8h.html#function-mamasubscription-getqueue)**(mamaSubscription subscription, mamaQueue * queue)<br>Return the `mamaQueue` for this subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getReceivedInitial](subscription_8h.html#function-mamasubscription-getreceivedinitial)**(mamaSubscription subscription, int * receivedInitial)<br>Returns a value of 1 or 0 indicating whether the subscription has received an initial.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getRecoverGaps](subscription_8h.html#function-mamasubscription-getrecovergaps)**(mamaSubscription subscription, int * doesRecover)<br>Whether the specified subscription will attempt to recover from sequence number gaps.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getRequiresInitial](subscription_8h.html#function-mamasubscription-getrequiresinitial)**(mamaSubscription subscription, int * requiresInitial)<br>Returns a value of 1 or 0 indicating whether this subscription is interested in initial values.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getRetries](subscription_8h.html#function-mamasubscription-getretries)**(mamaSubscription subscription, int * retries)<br>Retrieve the retries.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getServiceLevel](subscription_8h.html#function-mamasubscription-getservicelevel)**(mamaSubscription subscription, mamaServiceLevel * serviceLevel)<br>Get the service level for the specified subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getServiceLevelOpt](subscription_8h.html#function-mamasubscription-getservicelevelopt)**(mamaSubscription subscription, long * serviceLevel)<br>Get the service level options for the specified subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getSource](subscription_8h.html#function-mamasubscription-getsource)**(mamaSubscription subscription, const char ** source)<br>Return the source for the specified subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getState](subscription_8h.html#function-mamasubscription-getstate)**(mamaSubscription subscription, mamaSubscriptionState * state)<br>This function will return the current state of the subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getSubscriptionType](subscription_8h.html#function-mamasubscription-getsubscriptiontype)**(mamaSubscription subscription, mamaSubscriptionType * type)<br>Returns the underlying `mamaSubscriptionType` for the specified subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getSubscSymbol](subscription_8h.html#function-mamasubscription-getsubscsymbol)**(mamaSubscription subscription, const char ** symbol)<br>Return the symbol as subscribed to (i.e., as mapped by the mapping function, if any, for the mamaTransport).  |
| MAMAExpDLL mama_status | **[mamaSubscription_getSymbol](subscription_8h.html#function-mamasubscription-getsymbol)**(mamaSubscription subscription, const char ** symbol)<br>Return the symbol as provided by the user (before any symbol mapping).  |
| MAMAExpDLL mama_status | **[mamaSubscription_getTimeout](subscription_8h.html#function-mamasubscription-gettimeout)**(mamaSubscription subscription, double * timeout)<br>Retrieve the timeout.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getRecapTimeout](subscription_8h.html#function-mamasubscription-getrecaptimeout)**(mamaSubscription subscription, double * timeout)<br>Retrieve the recap timeout.  |
| MAMAExpDLL mama_status | **[mamaSubscription_getTransport](subscription_8h.html#function-mamasubscription-gettransport)**(mamaSubscription subscription, mamaTransport * transport)<br>Return the `mamaTransport` for this subscription.  |
| MAMAExpDLL [mamaMsgCallbacks](structmamaMsgCallbacks__.html) * | **[mamaSubscription_getUserCallbacks](subscription_8h.html#function-mamasubscription-getusercallbacks)**(mamaSubscription subscription)<br>Returns a pointer to the `mamaMsgCallbacks` structure.  |
| MAMAExpDLL int | **[mamaSubscription_isActive](subscription_8h.html#function-mamasubscription-isactive)**(mamaSubscription subscription)<br>Returns whether the subscription is active, note that this function has been deprecated, use mamaSubscription_getState instead.  |
| MAMAExpDLL int | **[mamaSubscription_isValid](subscription_8h.html#function-mamasubscription-isvalid)**(mamaSubscription subscription)<br>Return whether the subscription is valid, note that this function has been deprecated, use mamaSubscription_getState instead.  |
| MAMAExpDLL mama_status | **[mamaSubscription_muteCurrentTopic](subscription_8h.html#function-mamasubscription-mutecurrenttopic)**(mamaSubscription subscription)<br>Mute the current topic for wildcard subscriptions. Applications should only invoke this method from the message callback. When invoked for a WMW transport subsription, the subscription will cease receiving calbacks on the current topic.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setAppDataType](subscription_8h.html#function-mamasubscription-setappdatatype)**(mamaSubscription subscription, uint8_t appDataType)<br>Set the application-specific data type.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setDebugLevel](subscription_8h.html#function-mamasubscription-setdebuglevel)**(mamaSubscription subscription, MamaLogLevel level)<br>Set the debug level for this subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setGroupSizeHint](subscription_8h.html#function-mamasubscription-setgroupsizehint)**(mamaSubscription subscription, int groupSizeHint)<br>A hint as to the expected size of size of groups when making group subscriptions.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setItemClosure](subscription_8h.html#function-mamasubscription-setitemclosure)**(mamaSubscription subscription, void * closure)<br>Set the item closure for group subscriptions.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setMsgQualifierFilter](subscription_8h.html#function-mamasubscription-setmsgqualifierfilter)**(mamaSubscription subscription, int ignoreDefinitelyDuplicate, int ignorePossiblyDuplicate, int ignoreDefinitelyDelayed, int ignorePossiblyDelayed, int ignoreOutOfSequence)<br>Set a filter to discard messages.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setPreIntitialCacheSize](subscription_8h.html#function-mamasubscription-setpreintitialcachesize)**(mamaSubscription subscription, int cacheSize)<br>Set the number of messages to cache for each symbol before the initial value arrives.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setRecoverGaps](subscription_8h.html#function-mamasubscription-setrecovergaps)**(mamaSubscription subscription, int doesRecover)<br>Whether a subscription should attempt to recover from sequence number gaps.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setRequiresInitial](subscription_8h.html#function-mamasubscription-setrequiresinitial)**(mamaSubscription subscription, int requiresInitial)<br>Whether an initial value is required for the specified subscription.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setServiceLevel](subscription_8h.html#function-mamasubscription-setservicelevel)**(mamaSubscription subscription, mamaServiceLevel serviceLevel, long serviceLevelOpt)<br>Set the service level. This method must be invoked before createXXX ().  |
| MAMAExpDLL mama_status | **[mamaSubscription_setRetries](subscription_8h.html#function-mamasubscription-setretries)**(mamaSubscription subscription, int retries)<br>Set the number of retries when requesting recaps.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setSubscriptionType](subscription_8h.html#function-mamasubscription-setsubscriptiontype)**(mamaSubscription subscription, mamaSubscriptionType type)<br>Set the subscription type for the subscription being created.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setSymbol](subscription_8h.html#function-mamasubscription-setsymbol)**(mamaSubscription subscription, const char * symbol)<br>Set the symbol (e.g. to change symbol mapping).  |
| MAMAExpDLL mama_status | **[mamaSubscription_setTimeout](subscription_8h.html#function-mamasubscription-settimeout)**(mamaSubscription subscription, double timeout)<br>Set the timeout for this subscription. The timeout is used for requesting initials.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setRecapTimeout](subscription_8h.html#function-mamasubscription-setrecaptimeout)**(mamaSubscription subscription, double timeout)<br>Set the timeout for this subscription. The timeout is used for requesting recaps.  |
| MAMAExpDLL mama_status | **[mamaSubscription_setup](subscription_8h.html#function-mamasubscription-setup)**(mamaSubscription subscription, mamaQueue queue, const [mamaMsgCallbacks](structmamaMsgCallbacks__.html) * callbacks, mamaSource source, const char * symbol, void * closure)<br>Set the parameters for a subscription that may be actually activated later. Activate the subscription using mamaSubscription_activate().  |
| MAMAExpDLL mama_status | **[mamaSubscription_setup2](subscription_8h.html#function-mamasubscription-setup2)**(mamaSubscription subscription, mamaTransport transport, mamaQueue queue, const [mamaMsgCallbacks](structmamaMsgCallbacks__.html) * callbacks, const char * sourceName, const char * symbol, void * closure)<br>Set the parameters for a subscription that may be actually activated later. Activate the subscription using mamaSubscription_activate().  |
| MAMAExpDLL mama_status | **[mamaSubscription_setupBasicWildCard](subscription_8h.html#function-mamasubscription-setupbasicwildcard)**(mamaSubscription subscription, mamaTransport transport, mamaQueue queue, const [mamaWildCardMsgCallbacks](structmamaWildCardMsgCallbacks__.html) * callbacks, const char * source, const char * symbol, void * closure)<br>Set the parameters for a wildcard subscription that may be actually activated later. Activate the subscription using mamaSubscription_activate().  |
| MAMAExpDLL const char * | **[mamaSubscription_stringForState](subscription_8h.html#function-mamasubscription-stringforstate)**(mamaSubscriptionState state)<br>This function will return the string representation of the subscription state. The subscription state can be obtained by calling the mamaSubscription_getState function.  |

## Types Documentation

### enum preInitialScheme

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PRE_INITIAL_SCHEME_ON_GAP | |   |
| PRE_INITIAL_SCHEME_ON_INITIAL | |   |




MAMA can cache messages which arrive prior to an initial value. There are two options in how and when these message are used.

PRE_INITIAL_SCHEME_ON_GAP (default) MAMA waits until the message after the initialvalue and only tries to use the cache if a gap is detected. This reduces the need to recap the subscription.

PRE_INITIAL_SCHEME_ON_INITIAL MAMA checks the pre-initial cache to see if there are any messages which sequentially follow the initial value and pass them to the application. 


### enum mamaSubscriptionState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SUBSCRIPTION_UNKNOWN | 0|  The state of the subscription is unknown. The subscription has been allocated in memory.  |
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
| MAMA_SUBSCRIPTION_REACTIVATING | 11|   |




The enumeration describes the state of the subsubscription at any time. The state can be obtained by calling the mamaSubscription_getState function. A string representation of this state can be obtained by calling the mamaSubscription_stringForState function. 


### enum dqStartegyScheme

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DQ_SCHEME_DELIVER_ALL | |   |
| DQ_SCHEME_INGORE_DUPS | |   |




### enum dqftStrategyScheme

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DQ_FT_DO_NOT_WAIT_FOR_RECAP | |   |
| DQ_FT_WAIT_FOR_RECAP | |   |




### typedef wombat_subscriptionCreateCB

```cpp
typedef void(MAMACALLTYPE * wombat_subscriptionCreateCB) (mamaSubscription subscription, void *closure);
```

Function invoked when subscription creation is complete, and before any calls to `wombat_subscriptionOnMsgCB`. 

**Parameters**: 

  * **subscription** The subscription. 
  * **closure** The closure passed to the mamaSubscription_create function. 


### typedef wombat_subscriptionDestroyCB

```cpp
typedef void(MAMACALLTYPE * wombat_subscriptionDestroyCB) (mamaSubscription subscription, void *closure);
```

Function invoked when a subscription has been completely destroyed, the client can have confidence that no further messages will be placed on the queue for this subscription. 

**Parameters**: 

  * **subscription** the `MamaSubscription`. 
  * **closure** The closure passed to the mamaSubscription_create function. 


### typedef wombat_subscriptionErrorCB

```cpp
typedef void(MAMACALLTYPE * wombat_subscriptionErrorCB) (mamaSubscription subscription, mama_status status, void *platformError, const char *subject, void *closure);
```

Invoked if an error occurs during prior to subscription creation or if the subscription receives a message for an unentitled subject. 

**Parameters**: 

  * **subscription** The subscription. 
  * **status** The error code. 
  * **platformError** Third party, platform specific messaging error. 
  * **subject** The subject for NOT_ENTITLED 
  * **closure** The closure passed to the mamaSubscription_create function. 


If the status is `MAMA_MSG_STATUS_NOT_ENTITTLED` the subject parameter is the specific unentitled subject. If the subscription subject contains wildcards, the subscription may still receive messages for other entitled subjects. Note wildcard subscriptions are not supported on all platforms.


### typedef wombat_subscriptionGapCB

```cpp
typedef void(MAMACALLTYPE * wombat_subscriptionGapCB) (mamaSubscription subscription, void *closure);
```

Function invoked when a sequence number gap is detected. 

**Parameters**: 

  * **subscription** the `MamaSubscription`. 
  * **closure** The closure passed to the mamaSubscription_create function. 


At this point the topic is considered stale and the subscription will not receive further messages until the feed handler satisfies a recap request.


### typedef wombat_subscriptionOnMsgCB

```cpp
typedef void(MAMACALLTYPE * wombat_subscriptionOnMsgCB) (mamaSubscription subscription, mamaMsg msg, void *closure, void *itemClosure);
```

Invoked when a message arrives. 

**Parameters**: 

  * **subscription** the `MamaSubscription`. 
  * **msg** The mamaMsg. 
  * **closure** The closure passed to the mamaSubscription_create function. 
  * **itemClosure** The item closure for the subscription can be set with mamaSubscription_setItemClosure. 


### typedef wombat_subscriptionQualityCB

```cpp
typedef void(MAMACALLTYPE * wombat_subscriptionQualityCB) (mamaSubscription subscription, mamaQuality quality, const char *symbol, short cause, const void *platformInfo, void *closure);
```

Invoked to indicate a data quality event. 

**Parameters**: 

  * **subscription** the `MamaSubscription`. 
  * **quality** The new quality. 
  * **symbol** The symbol. 
  * **cause** The cause of the data quality event. 
  * **platformInfo** Info associated with the data quality event. 
  * **closure** The closure passed to the mamaSubscription_create function.



The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the char* version of the tibrv advisory message. 


### typedef wombat_subscriptionRecapCB

```cpp
typedef void(MAMACALLTYPE * wombat_subscriptionRecapCB) (mamaSubscription subscription, void *closure);
```

Function invoked when a recap is requested upon detecting a sequence number gap. 

**Parameters**: 

  * **subscription** the `MamaSubscription`. 
  * **closure** The closure passed to the mamaSubscription_create function. 


### typedef wombat_subscriptionWildCardOnMsgCB

```cpp
typedef void(MAMACALLTYPE * wombat_subscriptionWildCardOnMsgCB) (mamaSubscription subscription, mamaMsg msg, const char *topic, void *closure, void *itemClosure);
```

Invoked when a message arrives for a wild card subscrption. 

**Parameters**: 

  * **subscription** the `MamaSubscription`. 
  * **msg** The mamaMsg. 
  * **topic** The symbol. 
  * **closure** The closure passed to the mamaSubscription_create function. 
  * **itemClosure** Symbol specific closure. 


### typedef mamaMsgCallbacks

```cpp
typedef struct mamaMsgCallbacks_ mamaMsgCallbacks;
```


A convenience structure for passing the callbacks to the subscription factory methods. 


### typedef mamaWildCardMsgCallbacks

```cpp
typedef struct mamaWildCardMsgCallbacks_ mamaWildCardMsgCallbacks;
```


A convenience structure for passing the callbacks to wild card subscription factory methods. 



## Functions Documentation

### function mamaSubscription_activate

```cpp
MAMAExpDLL mama_status mamaSubscription_activate(
    mamaSubscription subscription
)
```

Activate a subscription that has been set up by mamaSubscription_setup(). 

**Parameters**: 

  * **subscription** The subscription.


**Return**: Mama status code can be one of: MAMA_STATUS_SUBSCRIPTION_INVALID_TYPE - the type of subscription does not support activation. This will be returned if activate is called for a basic subscription. MAMA_STATUS_SUBSCRIPTION_INVALID_STATE - the subscription cannot be activated as it is in the wrong state. MAMA_STATUS_OK. 

Subscription creation actually occurs on the throttle queue. An individual subscription cannot be assumed to be fully created until its onCreate() callback has been successfully invoked. The subscription rate can be governed via the `mamaTransport_setOutboundThrottle ()` function. Any subscription properties should be set prior to calling this function.


### function mamaSubscription_allocate

```cpp
MAMAExpDLL mama_status mamaSubscription_allocate(
    mamaSubscription * result
)
```

Allocate memory for a new subscription. 

**Parameters**: 

  * **result** Where the address of the new subscription will be written.


**Return**: mama_status value can be one of MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

The subscription is not actually created until a call to one of the create() functions is made. Memory must be freed using the `mamaSubscription_deallocate()` function.


### function mamaSubscription_checkDebugLevel

```cpp
MAMAExpDLL int mamaSubscription_checkDebugLevel(
    mamaSubscription subscription,
    MamaLogLevel level
)
```

Return whether the debug level for this subscription equals or exceeds some level. 

**Parameters**: 

  * **subscription** The subscription. 
  * **level** The debug level to check.


**Return**: A mama_status value to reflect whether the level equals or exceeds the set level for this subscription. 

### function mamaSubscription_create

```cpp
MAMAExpDLL mama_status mamaSubscription_create(
    mamaSubscription subscription,
    mamaQueue queue,
    const mamaMsgCallbacks * callbacks,
    mamaSource source,
    const char * symbol,
    void * closure
)
```

Create and activate subscription. This is effectively a pair of calls to mamaSubscription_setup() and mamaSubscription_activate(). 

**Parameters**: 

  * **subscription** The subscription. 
  * **queue** The mama queue. 
  * **callbacks** The mamaMsgCallbacks structure containing the callback functions. 
  * **source** The mamaSource identifying the publisher for this symbol. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription.


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_INVALID_QUEUE MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_createBasic

```cpp
MAMAExpDLL mama_status mamaSubscription_createBasic(
    mamaSubscription subscription,
    mamaTransport transport,
    mamaQueue queue,
    const mamaMsgCallbacks * callbacks,
    const char * symbol,
    void * closure
)
```

Create a basic subscription without marketdata semantics. 

**Parameters**: 

  * **subscription** The subscription. 
  * **transport** The transport to use. Must be a basic transport. 
  * **queue** The mama queue. 
  * **callbacks** The mamaMsgCallbacks structure containing the callback functions. 
  * **symbol** The symbol on which message are being published. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription.


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_INVALID_QUEUE MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_createBasicWildCard

```cpp
MAMAExpDLL mama_status mamaSubscription_createBasicWildCard(
    mamaSubscription subscription,
    mamaTransport transport,
    mamaQueue queue,
    const mamaWildCardMsgCallbacks * callbacks,
    const char * source,
    const char * symbol,
    void * closure
)
```

Create and activate a wildcard subscription that may be actually activated later. Activate the subscription using mamaSubscription_activate(). 

**Parameters**: 

  * **subscription** The subscription. 
  * **transport** The transport to use. 
  * **queue** The mama queue. 
  * **callbacks** The mamaMsgCallbacks structure containing the callback functions. 
  * **source** The source name of the feed handler to provide the subscription. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription.


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_INVALID_QUEUE MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

The topic must be a valid wildcard topic for the underlying middleware.

Applications may set and retireve per-topic closures using mamaSubscription_setItemClosure() however this method is only guaranteed to set the correct closure if called while in the msg callback. It will be the topicClosure argument for subsequent callback invocations for the current topic. The topicClosure argument to the callback is NULL prior to an application setting the closure for the topic.

NOTE: For WMW a source with a NULL symbol parameter creates a "transport" subscription that receives all messages on the transport and bypasses the naming service. A publishing transport can be assigned a name with the publish_name property.


### function mamaSubscription_createSnapshot

```cpp
MAMAExpDLL mama_status mamaSubscription_createSnapshot(
    mamaSubscription subscription,
    mamaQueue queue,
    const mamaMsgCallbacks * callbacks,
    mamaSource source,
    const char * symbol,
    void * closure
)
```

Create a snapshot subscription for initial value only (no updates). 

**Parameters**: 

  * **subscription** The subscription. 
  * **queue** The mama queue. 
  * **callbacks** The mamaMsgCallbacks structure containing the callback functions. 
  * **source** The mamaSource identifying the publisher of data for the specified symbol. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription.


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_INVALID_QUEUE MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function is equivalent to mamaSubscription_create () with svcLevel set to MAMA_SERVICE_LEVEL_SNAPSHOT and default arguments for type, svcLevelOpt, requiresInitial, retries, timeout.


### function mamaSubscription_deactivate

```cpp
MAMAExpDLL mama_status mamaSubscription_deactivate(
    mamaSubscription subscription
)
```

Deactivate a subscription. The subscription can be reactivated if desired using mamaSubscription_activate(). 

**Parameters**: 

  * **subscription** The subscription.


**Return**: mama status code can be one of: MAMA_STATUS_SUBSCRIPTION_INVALID_TYPE - the type of subscription does not support deactivation. This will be returned if deactivate is called for a basic subscription. MAMA_STATUS_SUBSCRIPTION_INVALID_STATE - the subscription cannot be deactivated as it is in the wrong state. MAMA_STATUS_OK. 

Note that the subscription will not be fully deactivated until the onDestroy callback is received.


### function mamaSubscription_deallocate

```cpp
MAMAExpDLL mama_status mamaSubscription_deallocate(
    mamaSubscription subscription
)
```

Free the memory for a mamaSubscription which was allocated via a call to `mamaSubscription_allocate()`

**Parameters**: 

  * **subscription** The subscription to be deallocated.


**Return**: mama status code can be one of: MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATS_NULL_ARG MAMA_STATUS_OK. 

This function will call `mamaSubscription_destroy()` if the subscription has not already been destroyed.


### function mamaSubscription_destroy

```cpp
MAMAExpDLL mama_status mamaSubscription_destroy(
    mamaSubscription subscription
)
```

Destroy the subscription. 

**Parameters**: 

  * **subscription** The subscription.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATUS_OK 

This function must be called to destroy resources associated with the subscription. It sends an unsubscribe to the feed handler for subscription management. This function does not free the memory associated with the subscription. mamaSubscription_create() can be called again after this function has been called. This function must be called from the same thread dispatching on the associated event queue unless both the default queue and dispatch queue are not actively dispatching.


### function mamaSubscription_destroyEx

```cpp
MAMAExpDLL mama_status mamaSubscription_destroyEx(
    mamaSubscription subscription
)
```

This function will destroy the subscription and can be called from any thread. 

**Parameters**: 

  * **subscription** The subscription.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

Note that the subscription will not be fully destroyed until the onDestroy callback is received. To destroy from the dispatching thread the mamaSubscription_destroy function should be used in preference.


### function mamaSubscription_getAppDataType

```cpp
MAMAExpDLL mama_status mamaSubscription_getAppDataType(
    mamaSubscription subscription,
    uint8_t * appDataType
)
```

Retrieve the application-specific data type. 

**Parameters**: 

  * **subscription** The subscription. 
  * **appDataType** A pointer to a uint8_t to hold the value.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getClosure

```cpp
MAMAExpDLL mama_status mamaSubscription_getClosure(
    mamaSubscription subscription,
    void ** closure
)
```

Return the closure. 

**Parameters**: 

  * **subscription** The subscription. 
  * **closure** holds the result.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getDebugLevel

```cpp
MAMAExpDLL MamaLogLevel mamaSubscription_getDebugLevel(
    mamaSubscription subscription
)
```

Return the debug level for this subscription. 

**Parameters**: 

  * **subscription** The subscription.


**Return**: the debug level for this subscription. 

### function mamaSubscription_getItemClosure

```cpp
MAMAExpDLL mama_status mamaSubscription_getItemClosure(
    mamaSubscription subscription,
    void ** closure
)
```

Return the item closure for the current message for the subscription. See `setItemClosure` for more detail. 

**Parameters**: 

  * **subscription** The subscription. 
  * **closure** The address to where the closure should be written.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getMsgQualifierFilter

```cpp
MAMAExpDLL mama_status mamaSubscription_getMsgQualifierFilter(
    mamaSubscription subscription,
    int * ignoreDefinitelyDuplicate,
    int * ignorePossiblyDuplicate,
    int * ignoreDefinitelyDelayed,
    int * ignorePossiblyDelayed,
    int * ignoreOutOfSequence
)
```

Get the filters that discard message according to the message qualifier. 

**Parameters**: 

  * **subscription** The subscription from which the filer is being obtained.
  * **ignoreDefinitelyDuplicate** If true callbacks will not be invoked for messages where MamaMsg::getIsDefinitelyDuplicate returns true.
  * **ignorePossiblyDuplicate** If true callbacks will not be invoked for messages where MamaMsg::getIsPossiblyDuplicate returns true.
  * **ignoreDefinitelyDelayed** If true callbacks will not be invoked for messages where MamaMsg::getIsDefinitelyDelayed returns true.
  * **ignorePossiblyDelayed** If true callbacks will not be invoked for messages where MamaMsg::getIsPossiblyDelayed returns true.
  * **ignoreOutOfSequence** If true callbacks will not be invoked for messages where MamaMsg::getIsOutOfSequence returns true.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getPlatformError

```cpp
MAMAExpDLL mama_status mamaSubscription_getPlatformError(
    mamaSubscription subsc,
    void ** error
)
```

Return the middleware-specific platform error. 

**Parameters**: 

  * **subsc** The subscription. 
  * **error** a pointer to a void pointer to hold the result.


**Return**: mama_status return code can be one of: MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

When a mamaSubscription_method return MAMA_STATUS_PLATFORM the error will be the result from the underlying platform.


### function mamaSubscription_getPreIntitialCacheSize

```cpp
MAMAExpDLL mama_status mamaSubscription_getPreIntitialCacheSize(
    mamaSubscription subscription,
    int * result
)
```

Return the initial value cache size. 

**Parameters**: 

  * **subscription** The subscription. 
  * **result** A pointer to an int for the result.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getQueue

```cpp
MAMAExpDLL mama_status mamaSubscription_getQueue(
    mamaSubscription subscription,
    mamaQueue * queue
)
```

Return the `mamaQueue` for this subscription. 

**Parameters**: 

  * **subscription** The subscription. 
  * **queue** A pointer to hold the queue.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getReceivedInitial

```cpp
MAMAExpDLL mama_status mamaSubscription_getReceivedInitial(
    mamaSubscription subscription,
    int * receivedInitial
)
```

Returns a value of 1 or 0 indicating whether the subscription has received an initial. 

**Parameters**: 

  * **subscription** The subscription 
  * **receivedInitial** Will be 1 if an initial has been recieved else 0.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getRecoverGaps

```cpp
MAMAExpDLL mama_status mamaSubscription_getRecoverGaps(
    mamaSubscription subscription,
    int * doesRecover
)
```

Whether the specified subscription will attempt to recover from sequence number gaps. 

**Parameters**: 

  * **subscription** The subscription 
  * **doesRecover** 0 - does not recover, 1 - does attempt to recover


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getRequiresInitial

```cpp
MAMAExpDLL mama_status mamaSubscription_getRequiresInitial(
    mamaSubscription subscription,
    int * requiresInitial
)
```

Returns a value of 1 or 0 indicating whether this subscription is interested in initial values. 

**Parameters**: 

  * **subscription** The subscription 
  * **requiresInitial** 1 if an initial is required else 0.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getRetries

```cpp
MAMAExpDLL mama_status mamaSubscription_getRetries(
    mamaSubscription subscription,
    int * retries
)
```

Retrieve the retries. 

**Parameters**: 

  * **subscription** The subscription. 
  * **retries** A pointer to a int to hold the value.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getServiceLevel

```cpp
MAMAExpDLL mama_status mamaSubscription_getServiceLevel(
    mamaSubscription subscription,
    mamaServiceLevel * serviceLevel
)
```

Get the service level for the specified subscription. 

**Parameters**: 

  * **subscription** The subscription for which the service level is being obtained. 
  * **serviceLevel** Address to where the service level will be written


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getServiceLevelOpt

```cpp
MAMAExpDLL mama_status mamaSubscription_getServiceLevelOpt(
    mamaSubscription subscription,
    long * serviceLevel
)
```

Get the service level options for the specified subscription. 

**Parameters**: 

  * **subscription** The subscription for which the service level is being obtained. 
  * **serviceLevel** Address to where the service level options will be written


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getSource

```cpp
MAMAExpDLL mama_status mamaSubscription_getSource(
    mamaSubscription subscription,
    const char ** source
)
```

Return the source for the specified subscription. 

**Parameters**: 

  * **subscription** The subscription. 
  * **source** holds the result, (do not free).


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

Note that this function just returns a pointer to the source inside the subscription and does not allocate any memory.


### function mamaSubscription_getState

```cpp
MAMAExpDLL mama_status mamaSubscription_getState(
    mamaSubscription subscription,
    mamaSubscriptionState * state
)
```

This function will return the current state of the subscription. 

**Parameters**: 

  * **subscription** The subscription to return the state for. 
  * **state** To return the state, this can be one of the mamaSubscriptionState enumeration values.


**Return**: mama_status return code can be one of: MAMA_STATUS_OK MAMA_STATUS_NULL_ARG 

This function should be used in preference to the mamaSubscription_isActive or mamaSubscription_isValid functions. This function is thread-safe.


### function mamaSubscription_getSubscriptionType

```cpp
MAMAExpDLL mama_status mamaSubscription_getSubscriptionType(
    mamaSubscription subscription,
    mamaSubscriptionType * type
)
```

Returns the underlying `mamaSubscriptionType` for the specified subscription. 

**Parameters**: 

  * **subscription** The subscription for which the type will be returned. 
  * **type** Address to which the type will be written.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getSubscSymbol

```cpp
MAMAExpDLL mama_status mamaSubscription_getSubscSymbol(
    mamaSubscription subscription,
    const char ** symbol
)
```

Return the symbol as subscribed to (i.e., as mapped by the mapping function, if any, for the mamaTransport). 

**Parameters**: 

  * **subscription** The subscription. 
  * **symbol** holds the result, do not free.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

Note that this function just returns a pointer to the symbol inside the subscription and does not allocate any memory.


### function mamaSubscription_getSymbol

```cpp
MAMAExpDLL mama_status mamaSubscription_getSymbol(
    mamaSubscription subscription,
    const char ** symbol
)
```

Return the symbol as provided by the user (before any symbol mapping). 

**Parameters**: 

  * **subscription** The subscription. 
  * **symbol** holds the result, (do not free).


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

Note that this function just returns a pointer to the symbol inside the subscription and does not allocate any memory.


### function mamaSubscription_getTimeout

```cpp
MAMAExpDLL mama_status mamaSubscription_getTimeout(
    mamaSubscription subscription,
    double * timeout
)
```

Retrieve the timeout. 

**Parameters**: 

  * **subscription** The subscription. 
  * **timeout** A pointer to a double to hold the value.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getRecapTimeout

```cpp
MAMAExpDLL mama_status mamaSubscription_getRecapTimeout(
    mamaSubscription subscription,
    double * timeout
)
```

Retrieve the recap timeout. 

**Parameters**: 

  * **subscription** The subscription. 
  * **timeout** A pointer to a double to hold the value.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getTransport

```cpp
MAMAExpDLL mama_status mamaSubscription_getTransport(
    mamaSubscription subscription,
    mamaTransport * transport
)
```

Return the `mamaTransport` for this subscription. 

**Parameters**: 

  * **subscription** The subscription. 
  * **transport** A pointer to hold the transport.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_getUserCallbacks

```cpp
MAMAExpDLL mamaMsgCallbacks * mamaSubscription_getUserCallbacks(
    mamaSubscription subscription
)
```

Returns a pointer to the `mamaMsgCallbacks` structure. 

**Parameters**: 

  * **subscription** The `mamaSubscription`


**Return**: pointer to the callbacks container structure MAMA_STATUS_OK 

### function mamaSubscription_isActive

```cpp
MAMAExpDLL int mamaSubscription_isActive(
    mamaSubscription subscription
)
```

Returns whether the subscription is active, note that this function has been deprecated, use mamaSubscription_getState instead. 

**Parameters**: 

  * **subscription** The subscription.


**Return**: whether the subscription is active. 

### function mamaSubscription_isValid

```cpp
MAMAExpDLL int mamaSubscription_isValid(
    mamaSubscription subscription
)
```

Return whether the subscription is valid, note that this function has been deprecated, use mamaSubscription_getState instead. 

**Parameters**: 

  * **subscription** The subscription


**Return**: whether the subscription is valid. 

### function mamaSubscription_muteCurrentTopic

```cpp
MAMAExpDLL mama_status mamaSubscription_muteCurrentTopic(
    mamaSubscription subscription
)
```

Mute the current topic for wildcard subscriptions. Applications should only invoke this method from the message callback. When invoked for a WMW transport subsription, the subscription will cease receiving calbacks on the current topic. 

**Parameters**: 

  * **subscription** The subscription


**Return**: mama_status return code can be one of: MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This method only works for WMW "transport" subscriptions which are Wild card subscriptions created with a source of a named publisher, and a NULL topic.


### function mamaSubscription_setAppDataType

```cpp
MAMAExpDLL mama_status mamaSubscription_setAppDataType(
    mamaSubscription subscription,
    uint8_t appDataType
)
```

Set the application-specific data type. 

**Parameters**: 

  * **subscription** The subscription. 
  * **appDataType** The application-specific data type.


**Return**: mama_status return code can be one of: 

```
         MAMA_STATUS_NULL_ARG
         MAMA_STATUS_OK
```

### function mamaSubscription_setDebugLevel

```cpp
MAMAExpDLL mama_status mamaSubscription_setDebugLevel(
    mamaSubscription subscription,
    MamaLogLevel level
)
```

Set the debug level for this subscription. 

**Parameters**: 

  * **subscription** The subscription. 
  * **level** The new debug level.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setGroupSizeHint

```cpp
MAMAExpDLL mama_status mamaSubscription_setGroupSizeHint(
    mamaSubscription subscription,
    int groupSizeHint
)
```

A hint as to the expected size of size of groups when making group subscriptions. 

**Parameters**: 

  * **subscription** The subscription 
  * **groupSizeHint** The size of the groups


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setItemClosure

```cpp
MAMAExpDLL mama_status mamaSubscription_setItemClosure(
    mamaSubscription subscription,
    void * closure
)
```

Set the item closure for group subscriptions. 

**Parameters**: 

  * **subscription** The subscription. 
  * **closure** The new item closure.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

Group subscriptions receive updates for multiple symbols. This method allows calls to set a per-symbol closure which will be passed as the fourth argument to subsequent calls to the onMsg callback. This method may only be called during the onMsg callback.

This method also sets per-topic closures for wildcard subscriptions.

Setting the item closure for a non-group subscription provides a second closure.


### function mamaSubscription_setMsgQualifierFilter

```cpp
MAMAExpDLL mama_status mamaSubscription_setMsgQualifierFilter(
    mamaSubscription subscription,
    int ignoreDefinitelyDuplicate,
    int ignorePossiblyDuplicate,
    int ignoreDefinitelyDelayed,
    int ignorePossiblyDelayed,
    int ignoreOutOfSequence
)
```

Set a filter to discard messages. 

**Parameters**: 

  * **subscription** The subscription on which the filter is being set.
  * **ignoreDefinitelyDuplicate** If true callbacks will not be invoked for messages where MamaMsg::getIsDefinitelyDuplicate returns true.
  * **ignorePossiblyDuplicate** If true callbacks will not be invoked for messages where MamaMsg::getIsPossiblyDuplicate returns true.
  * **ignoreDefinitelyDelayed** If true callbacks will not be invoked for messages where MamaMsg::getIsDefinitelyDelayed returns true.
  * **ignorePossiblyDelayed** If true callbacks will not be invoked for messages where MamaMsg::getIsPossiblyDelayed returns true.
  * **ignoreOutOfSequence** If true callbacks will not be invoked for messages where MamaMsg::getIsOutOfSequence returns true.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setPreIntitialCacheSize

```cpp
MAMAExpDLL mama_status mamaSubscription_setPreIntitialCacheSize(
    mamaSubscription subscription,
    int cacheSize
)
```

Set the number of messages to cache for each symbol before the initial value arrives. 

**Parameters**: 

  * **subscription** The subscription. 
  * **cacheSize** The size of the cache.


**Return**: mama_status value can be one of MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This allows the subscription to recover when the initial value arrives late (after a subsequent trade or quote already arrived).

For group subscription, a separate cache is used for each group member.

The default is 10.


### function mamaSubscription_setRecoverGaps

```cpp
MAMAExpDLL mama_status mamaSubscription_setRecoverGaps(
    mamaSubscription subscription,
    int doesRecover
)
```

Whether a subscription should attempt to recover from sequence number gaps. 

**Parameters**: 

  * **subscription** The subscription 
  * **doesRecover** 0 indicates not to recover. 1 The subscription will attempt to recover via a recap request.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setRequiresInitial

```cpp
MAMAExpDLL mama_status mamaSubscription_setRequiresInitial(
    mamaSubscription subscription,
    int requiresInitial
)
```

Whether an initial value is required for the specified subscription. 

**Parameters**: 

  * **subscription** The subscription 
  * **requiresInitial** [1|0] Whether to request an initial value or not.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This only applies to market data subscriptions and not to basic subscriptions. Default value of 1 indicating that initial values are required.


### function mamaSubscription_setServiceLevel

```cpp
MAMAExpDLL mama_status mamaSubscription_setServiceLevel(
    mamaSubscription subscription,
    mamaServiceLevel serviceLevel,
    long serviceLevelOpt
)
```

Set the service level. This method must be invoked before createXXX (). 

**Parameters**: 

  * **subscription** The subscription for which the service level is being set. 
  * **serviceLevel** The service level of the subscription (real time, snapshot, etc.). The default is MAMA_SERVICE_LEVEL_REAL_TIME. 
  * **serviceLevelOpt** An optional argument for certain service levels. (Defaults to 0 - for future use)


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setRetries

```cpp
MAMAExpDLL mama_status mamaSubscription_setRetries(
    mamaSubscription subscription,
    int retries
)
```

Set the number of retries when requesting recaps. 

**Parameters**: 

  * **subscription** The subscription. 
  * **retries** The number of retries.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setSubscriptionType

```cpp
MAMAExpDLL mama_status mamaSubscription_setSubscriptionType(
    mamaSubscription subscription,
    mamaSubscriptionType type
)
```

Set the subscription type for the subscription being created. 

**Parameters**: 

  * **subscription** The subscription for which the type is being set. 
  * **type** The type of the subscription being created.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

If not called the subscription type defaults to MAMA_SUBSC_TYPE_NORMAL. See `mamaSubscriptionType` enum for valid values.


### function mamaSubscription_setSymbol

```cpp
MAMAExpDLL mama_status mamaSubscription_setSymbol(
    mamaSubscription subscription,
    const char * symbol
)
```

Set the symbol (e.g. to change symbol mapping). 

**Parameters**: 

  * **subscription** The subscription. 
  * **symbol.** 


**Return**: mama_status return code can be one of: MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setTimeout

```cpp
MAMAExpDLL mama_status mamaSubscription_setTimeout(
    mamaSubscription subscription,
    double timeout
)
```

Set the timeout for this subscription. The timeout is used for requesting initials. 

**Parameters**: 

  * **subscription** The subscription. 
  * **timeout** The timeout in seconds.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setRecapTimeout

```cpp
MAMAExpDLL mama_status mamaSubscription_setRecapTimeout(
    mamaSubscription subscription,
    double timeout
)
```

Set the timeout for this subscription. The timeout is used for requesting recaps. 

**Parameters**: 

  * **subscription** The subscription. 
  * **timeout** The timeout in seconds.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setup

```cpp
MAMAExpDLL mama_status mamaSubscription_setup(
    mamaSubscription subscription,
    mamaQueue queue,
    const mamaMsgCallbacks * callbacks,
    mamaSource source,
    const char * symbol,
    void * closure
)
```

Set the parameters for a subscription that may be actually activated later. Activate the subscription using mamaSubscription_activate(). 

**Parameters**: 

  * **subscription** The subscription. 
  * **queue** The mama queue. 
  * **callbacks** The mamaMsgCallbacks structure containing the callback functions. 
  * **source** The MAMA source to use. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription.


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_INVALID_QUEUE MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setup2

```cpp
MAMAExpDLL mama_status mamaSubscription_setup2(
    mamaSubscription subscription,
    mamaTransport transport,
    mamaQueue queue,
    const mamaMsgCallbacks * callbacks,
    const char * sourceName,
    const char * symbol,
    void * closure
)
```

Set the parameters for a subscription that may be actually activated later. Activate the subscription using mamaSubscription_activate(). 

**Parameters**: 

  * **subscription** The subscription. 
  * **transport** The MAMA transport. 
  * **queue** The mama queue. 
  * **callbacks** The mamaMsgCallbacks structure containing the callback functions. 
  * **sourceName** The source name.. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription.


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_INVALID_QUEUE MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaSubscription_setupBasicWildCard

```cpp
MAMAExpDLL mama_status mamaSubscription_setupBasicWildCard(
    mamaSubscription subscription,
    mamaTransport transport,
    mamaQueue queue,
    const mamaWildCardMsgCallbacks * callbacks,
    const char * source,
    const char * symbol,
    void * closure
)
```

Set the parameters for a wildcard subscription that may be actually activated later. Activate the subscription using mamaSubscription_activate(). 

**Parameters**: 

  * **subscription** The subscription. 
  * **transport** The transport to use. 
  * **queue** The mama queue. 
  * **callbacks** The mamaMsgCallbacks structure containing the callback functions. 
  * **source** The source name of the feed handler to provide the subscription. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription.


**Return**: mama_status return code can be one of: MAMA_STATUS_INVALID_ARG MAMA_STATUS_INVALID_QUEUE MAMA_STATUS_SUBSCRIPTION_INVALID_STATE MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

The topic must be a valid wildcard topic for the underlying middleware.

Applications may set and retireve per-topic closures using mamaSubscription_setItemClosure() however this method is only guaranteed to set the correct closure if called while in the msg callback. It will be the topicClosure argument for subsequent callback invocations for the current topic. The topicClosure argument to the callback is NULL prior to an application setting the closure for the topic.


### function mamaSubscription_stringForState

```cpp
MAMAExpDLL const char * mamaSubscription_stringForState(
    mamaSubscriptionState state
)
```

This function will return the string representation of the subscription state. The subscription state can be obtained by calling the mamaSubscription_getState function. 

**Parameters**: 

  * **state** The state to obtain the string representation for.


**Return**: A string representation of the state code or "State not recognised" if it is not recognised. 



## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MamaSubscriptionH__
#define MamaSubscriptionH__

/* *************************************************** */
/* Includes. */
/* *************************************************** */
#include "mama/log.h"
#include "mama/marketdata.h"
#include "mama/msg.h"
#include "mama/quality.h"
#include "mama/servicelevel.h"
#include "mama/status.h"
#include "mama/subscriptiontype.h"
#include "mama/transport.h"
#include "mama/types.h"

#if defined (__cplusplus)
extern "C" {
#endif

/* *************************************************** */
/* Enumerations. */
/* *************************************************** */

typedef enum
{
    PRE_INITIAL_SCHEME_ON_GAP,
    PRE_INITIAL_SCHEME_ON_INITIAL

} preInitialScheme;

typedef enum
{
    MAMA_SUBSCRIPTION_UNKNOWN       = 0,

    MAMA_SUBSCRIPTION_ALLOCATED     = 1,

    /* Initial setup work has been done, mamaSubscription_activate must still be called. Note that this state is only valid
     * for market data subscriptions.
     */
    MAMA_SUBSCRIPTION_SETUP         = 2,

    /* The subscription is now on the throttle queue waiting to be fully activated. */
    MAMA_SUBSCRIPTION_ACTIVATING    = 3,

    /* The subscription is now fully activated and is processing messages. */
    MAMA_SUBSCRIPTION_ACTIVATED     = 4,

    /* The subscription is being de-activated, it will not be fully deactivated until the middleware removal of the listener is complete */
    MAMA_SUBSCRIPTION_DEACTIVATING  = 5,

    /* The subscription has been de-activated, messages are no longer being processed. */
    MAMA_SUBSCRIPTION_DEACTIVATED   = 6,

    /* The subscription is being destroyed, but waiting on deactivation to complete*/
    MAMA_SUBSCRIPTION_DESTROYING    = 7,

    /* The subscription has been fully destroyed. */
    MAMA_SUBSCRIPTION_DESTROYED     = 8,

    /* The subscription is in the process of being de-allocated, but waiting on deactivation to complete*/
    MAMA_SUBSCRIPTION_DEALLOCATING  = 9,

    /* The subscription has been de-allocated. This state is only temporary and exists until such point as the subscription's
     * memory is freed. It is provided so that a log entry will be written out.
     */
    MAMA_SUBSCRIPTION_DEALLOCATED   = 10,

    /* The subscription is being re-activated, it will not be fully reactivated until deactivation complete */
    MAMA_SUBSCRIPTION_REACTIVATING  = 11

} mamaSubscriptionState;

typedef enum
{
    DQ_SCHEME_DELIVER_ALL,
    DQ_SCHEME_INGORE_DUPS
} dqStartegyScheme;


typedef enum
{
    DQ_FT_DO_NOT_WAIT_FOR_RECAP,
    DQ_FT_WAIT_FOR_RECAP
}dqftStrategyScheme;
/* *************************************************** */
/* Type Defines. */
/* *************************************************** */

typedef void (MAMACALLTYPE *wombat_subscriptionCreateCB)(
    mamaSubscription subscription,
    void *closure);

typedef void (MAMACALLTYPE *wombat_subscriptionDestroyCB)(
    mamaSubscription subscription,
    void *closure);

typedef void (MAMACALLTYPE *wombat_subscriptionErrorCB)(
    mamaSubscription subscription,
    mama_status status,
    void *platformError,
    const char *subject,
    void *closure);

typedef void (MAMACALLTYPE *wombat_subscriptionGapCB)(
    mamaSubscription subscription,
    void *closure);

typedef void (MAMACALLTYPE *wombat_subscriptionOnMsgCB)(
    mamaSubscription subscription,
    mamaMsg msg,
    void *closure,
    void *itemClosure);

typedef void (MAMACALLTYPE *wombat_subscriptionQualityCB)(
    mamaSubscription subscription,
    mamaQuality quality,
    const char *symbol,
    short cause,
    const void *platformInfo,
    void *closure);

typedef void (MAMACALLTYPE *wombat_subscriptionRecapCB)(
    mamaSubscription subscription,
    void *closure);

typedef void (MAMACALLTYPE *wombat_subscriptionWildCardOnMsgCB)(
    mamaSubscription subscription,
    mamaMsg msg,
    const char *topic,
    void *closure,
    void *itemClosure);

/* *************************************************** */
/* Structures. */
/* *************************************************** */

typedef struct mamaMsgCallbacks_
{
    wombat_subscriptionCreateCB   onCreate;
    wombat_subscriptionErrorCB    onError;
    wombat_subscriptionOnMsgCB    onMsg;
    wombat_subscriptionQualityCB  onQuality;
    wombat_subscriptionGapCB      onGap;
    wombat_subscriptionRecapCB    onRecapRequest;
    wombat_subscriptionDestroyCB  onDestroy;
} mamaMsgCallbacks;

typedef struct mamaWildCardMsgCallbacks_
{
    wombat_subscriptionCreateCB        onCreate;
    wombat_subscriptionErrorCB         onError;
    wombat_subscriptionWildCardOnMsgCB onMsg;
    wombat_subscriptionDestroyCB       onDestroy;
} mamaWildCardMsgCallbacks;

/* *************************************************** */
/* Public Function Prototypes. */
/* *************************************************** */

MAMAExpDLL
extern mama_status
mamaSubscription_activate(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_allocate(
    mamaSubscription *result);

MAMAExpDLL
extern int
mamaSubscription_checkDebugLevel(
    mamaSubscription subscription,
    MamaLogLevel level);

MAMAExpDLL
extern mama_status
mamaSubscription_create (
    mamaSubscription          subscription,
    mamaQueue                 queue,
    const mamaMsgCallbacks*   callbacks,
    mamaSource                source,
    const char*               symbol,
    void*                     closure);

MAMAExpDLL
extern mama_status
mamaSubscription_createBasic (
    mamaSubscription          subscription,
    mamaTransport             transport,
    mamaQueue                 queue,
    const mamaMsgCallbacks*   callbacks,
    const char*               symbol,
    void*                     closure);

MAMAExpDLL
extern mama_status
mamaSubscription_createBasicWildCard(
    mamaSubscription                 subscription,
    mamaTransport                    transport,
    mamaQueue                        queue,
    const mamaWildCardMsgCallbacks*  callbacks,
    const char*                      source,
    const char*                      symbol,
    void*                            closure);

MAMAExpDLL
extern mama_status
mamaSubscription_createSnapshot(
    mamaSubscription          subscription,
    mamaQueue                 queue,
    const mamaMsgCallbacks*   callbacks,
    mamaSource                source,
    const char*               symbol,
    void*                     closure);

MAMAExpDLL
extern mama_status
mamaSubscription_deactivate(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_deallocate(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_destroy(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_destroyEx(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_getAppDataType (
    mamaSubscription subscription,
    uint8_t *appDataType);

MAMAExpDLL
extern mama_status
mamaSubscription_getClosure(
    mamaSubscription subscription,
    void **closure);

MAMAExpDLL
extern MamaLogLevel
mamaSubscription_getDebugLevel(
    mamaSubscription subscription);


MAMAExpDLL
extern mama_status
mamaSubscription_getItemClosure (
    mamaSubscription subscription,
    void **closure);

MAMAExpDLL
mama_status
mamaSubscription_getMsgQualifierFilter(
    mamaSubscription subscription,
    int *ignoreDefinitelyDuplicate,
    int *ignorePossiblyDuplicate,
    int *ignoreDefinitelyDelayed,
    int *ignorePossiblyDelayed,
    int *ignoreOutOfSequence);

MAMAExpDLL
extern mama_status
mamaSubscription_getPlatformError(
    mamaSubscription subsc,
    void **error);

MAMAExpDLL
extern mama_status
mamaSubscription_getPreIntitialCacheSize(
    mamaSubscription subscription,
    int *result);

MAMAExpDLL
extern mama_status
mamaSubscription_getQueue(
    mamaSubscription subscription,
    mamaQueue *queue);

MAMAExpDLL
extern mama_status
mamaSubscription_getReceivedInitial(
    mamaSubscription subscription,
    int *receivedInitial);

MAMAExpDLL
extern mama_status
mamaSubscription_getRecoverGaps (
    mamaSubscription subscription,
    int *doesRecover);

MAMAExpDLL
extern mama_status
mamaSubscription_getRequiresInitial(
    mamaSubscription subscription,
    int *requiresInitial);

MAMAExpDLL
extern mama_status
mamaSubscription_getRetries(
    mamaSubscription subscription,
    int *retries);

MAMAExpDLL
extern mama_status
mamaSubscription_getServiceLevel(
    mamaSubscription subscription,
    mamaServiceLevel *serviceLevel);

MAMAExpDLL
extern mama_status
mamaSubscription_getServiceLevelOpt(
    mamaSubscription subscription,
    long *serviceLevel);


MAMAExpDLL
extern mama_status
mamaSubscription_getSource(
    mamaSubscription  subscription,
    const char**      source);

MAMAExpDLL
extern mama_status
mamaSubscription_getState(
    mamaSubscription subscription,
    mamaSubscriptionState *state);

MAMAExpDLL
extern mama_status
mamaSubscription_getSubscriptionType(
    mamaSubscription subscription,
    mamaSubscriptionType *type);

MAMAExpDLL
extern mama_status
mamaSubscription_getSubscSymbol(
    mamaSubscription subscription,
    const char **symbol);

MAMAExpDLL
extern mama_status
mamaSubscription_getSymbol(
    mamaSubscription subscription,
    const char **symbol);

MAMAExpDLL
extern mama_status
mamaSubscription_getTimeout(
    mamaSubscription subscription,
    double *timeout);

MAMAExpDLL
extern mama_status
mamaSubscription_getRecapTimeout(
    mamaSubscription subscription,
    double *timeout);

MAMAExpDLL
extern mama_status
mamaSubscription_getTransport (
    mamaSubscription subscription,
    mamaTransport *transport);

MAMAExpDLL
extern mamaMsgCallbacks *
mamaSubscription_getUserCallbacks(
    mamaSubscription subscription);

MAMAExpDLL
extern int
mamaSubscription_isActive (
    mamaSubscription subscription);

MAMAExpDLL
extern int
mamaSubscription_isValid (
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_muteCurrentTopic(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_setAppDataType(
    mamaSubscription subscription,
    uint8_t appDataType);

MAMAExpDLL
extern mama_status
mamaSubscription_setDebugLevel (
    mamaSubscription subscription,
    MamaLogLevel level);

MAMAExpDLL
extern mama_status
mamaSubscription_setGroupSizeHint (
    mamaSubscription subscription,
    int groupSizeHint);

MAMAExpDLL
extern mama_status
mamaSubscription_setItemClosure (
    mamaSubscription subscription,
    void *closure);

MAMAExpDLL
mama_status
mamaSubscription_setMsgQualifierFilter(
    mamaSubscription subscription,
    int ignoreDefinitelyDuplicate,
    int ignorePossiblyDuplicate,
    int ignoreDefinitelyDelayed,
    int ignorePossiblyDelayed,
    int ignoreOutOfSequence);

MAMAExpDLL
extern mama_status
mamaSubscription_setPreIntitialCacheSize(
    mamaSubscription subscription,
    int cacheSize);

MAMAExpDLL
extern mama_status
mamaSubscription_setRecoverGaps (
    mamaSubscription subscription,
    int              doesRecover);

MAMAExpDLL
extern mama_status
mamaSubscription_setRequiresInitial (
    mamaSubscription subscription,
    int requiresInitial);

MAMAExpDLL
extern mama_status
mamaSubscription_setServiceLevel(
    mamaSubscription subscription,
    mamaServiceLevel serviceLevel,
    long serviceLevelOpt);

MAMAExpDLL
extern mama_status
mamaSubscription_setRetries (
    mamaSubscription subscription,
    int retries);

MAMAExpDLL
extern mama_status
mamaSubscription_setSubscriptionType(
    mamaSubscription subscription,
    mamaSubscriptionType type);

MAMAExpDLL
extern mama_status
mamaSubscription_setSymbol (
    mamaSubscription subscription,
    const char *symbol);

MAMAExpDLL
extern mama_status
mamaSubscription_setTimeout (
    mamaSubscription subscription,
    double timeout);

MAMAExpDLL
extern mama_status
mamaSubscription_setRecapTimeout (
    mamaSubscription subscription,
    double timeout);

MAMAExpDLL
extern mama_status
mamaSubscription_setup(
    mamaSubscription          subscription,
    mamaQueue                 queue,
    const mamaMsgCallbacks*   callbacks,
    mamaSource                source,
    const char*               symbol,
    void*                     closure);

MAMAExpDLL
extern mama_status
mamaSubscription_setup2(
    mamaSubscription subscription,
    mamaTransport transport,
    mamaQueue queue,
    const mamaMsgCallbacks *callbacks,
    const char *sourceName,
    const char *symbol,
    void *closure);

MAMAExpDLL
extern mama_status
mamaSubscription_setupBasicWildCard (
    mamaSubscription                 subscription,
    mamaTransport                    transport,
    mamaQueue                        queue,
    const mamaWildCardMsgCallbacks*  callbacks,
    const char*                      source,
    const char*                      symbol,
    void*                            closure);

MAMAExpDLL
extern const char*
mamaSubscription_stringForState(
    mamaSubscriptionState state);

#if defined (__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:17 +0100
