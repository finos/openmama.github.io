---
title: integration/integration/subscription.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/subscription.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_SUBSCRIPTION_H__)
#define OPENMAMA_INTEGRATION_SUBSCRIPTION_H__

#include <mama/mama.h>
#include <mama/integration/types.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern mamaBridge
mamaSubscription_getBridgeImpl(
    mamaSubscription subscription);

MAMAExpDLL
extern subscriptionBridge
mamaSubscription_getSubscriptionBridge(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_getExpectingInitial(
    mamaSubscription subscription,
    int *expectingInitial);

MAMAExpDLL
extern mama_status
mamaSubscription_getTransportIndex(
    mamaSubscription subscription,
    int *tportIndex);

MAMAExpDLL
extern wildCardType
mamaSubscription_getWildCardType(
    mamaSubscription subscription);

MAMAExpDLL
extern int
mamaSubscription_isTportDisconnected(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_processErr(
    mamaSubscription subscription,
    int deactivate);

MAMAExpDLL
extern mama_status
mamaSubscription_processMsg(
    mamaSubscription subscription,
    mamaMsg message);

MAMAExpDLL
extern mama_status
mamaSubscription_processWildCardMsg(
    mamaSubscription subscription,
    mamaMsg msg,
    const char *topic,
    void *topicClosure);

MAMAExpDLL
extern mama_status
mamaSubscription_processTportMsg(
    mamaSubscription subscription,
    mamaMsg msg,
    void *topicClosure);

MAMAExpDLL
extern mama_status
mamaSubscription_setPossiblyStale(
    mamaSubscription subscription);

MAMAExpDLL
extern mama_status
mamaSubscription_setTransportIndex(
    mamaSubscription subscription,
    int tportIndex);

MAMAExpDLL
extern mama_status
mamaSubscription_setupBasic(
    mamaSubscription          subscription,
    mamaTransport             transport,
    mamaQueue                 queue,
    const mamaMsgCallbacks*   callbacks,
    const char*               source,
    const char*               symbol,
    void*                     closure);

MAMAExpDLL
int mamaSubscriptionImpl_registerReference(
    mamaSubscription          subscription);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_SUBSCRIPTION_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
