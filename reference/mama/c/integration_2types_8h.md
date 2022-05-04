---
title: integration/integration/types.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/types.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_TYPES_H__)
#define OPENMAMA_INTEGRATION_TYPES_H__

#include <mama/mama.h>
#include "list.h"

#if defined (__cplusplus)
extern "C"
{
#endif

typedef struct  publisherBridge_*   publisherBridge;

typedef int (MAMACALLTYPE *pollStatCb) (void* closure);

typedef void (*collectorPollStatCb) (mamaStatsCollector statsCollector, void* closure);

typedef struct  subscriptonBridge_* subscriptionBridge;

/* For Wildcard subscriptions. The wc_transport type is likely only available
 * for LDMA/RDMA WDF transports. It is a subscription to every message on the
 * transport that bypasses the naming service. Other implementations may
 * ingore this.
 */
typedef enum
{
    wc_none      = 0,   /* Not wildcard subsc */
    wc_transport = 1,   /* "Transport" wildcard */
    wc_wildcard  = 2    /* normal wildcard */

} wildCardType;

typedef struct  timerBridge_*       timerBridge;

typedef struct  msgBridge_*         msgBridge;
typedef void*                       msgPayload;
typedef void*                       msgFieldPayload;
typedef void*                       msgPayloadIter;

typedef struct  inboxBridge_*       inboxBridge;
typedef struct  ioBridge_*          ioBridge;

/* Opaque types dereferenced in the implementation */
typedef void* endpoint_t;
typedef void* endpointPool_t;


typedef struct  wombatThrottle_*    wombatThrottle;
typedef struct  actionHandle*       wombatThrottleAction;
typedef struct  transportBridge_*   transportBridge;

typedef void (*throttleCb)(void *closure1, void *closure2 );

typedef void (*endpointDestroyCb)(endpoint_t endpoint);

typedef mama_status (*conflateProcessCb) (mamaConflationManager mgr, 
                                          mamaMsg               msg,
                                          const char*           topic);

typedef struct  queueBridge_*       queueBridge;

/* This typedef is used when locking and unlocking the queue. */
typedef void * mamaQueueLockHandle;

typedef mamaMsg (*conflateGetMsgCb) (mamaConflationManager mgr); 

typedef struct imageReqImpl_* imageRequest;
typedef struct SubjectContext_ SubjectContext;

typedef enum dqState_
{

    DQ_STATE_OK = 0,
    DQ_STATE_NOT_ESTABLISHED  = 1,

    DQ_STATE_WAITING_FOR_RECAP = 2,
    DQ_STATE_POSSIBLY_STALE    = 3,
    DQ_STATE_DUPLICATE         = 4,

    DQ_STATE_STALE_NO_RECAP    = 5,

    DQ_STATE_WAITING_FOR_RECAP_AFTER_FT    = 6
} dqState;
    
typedef struct 
{
    mama_seqnum_t mSeqNum;
    dqState       mDQState;

    mamaMsg*      mCache;
    int           mCurCacheIdx;
    int           mCacheSize;
    imageRequest  mRecapRequest;
    mama_u64_t    mSenderId;

    uint8_t       mDoNotForward;
    mama_bool_t   mSetCacheMsgStale;
} mamaDqContext;

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_TYPES_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
