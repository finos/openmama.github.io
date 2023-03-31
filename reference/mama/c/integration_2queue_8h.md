---
title: integration/integration/queue.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/queue.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_QUEUE_H__)
#define OPENMAMA_INTEGRATION_QUEUE_H__

#include <mama/mama.h>
#include <mama/integration/types.h>

#if defined (__cplusplus)
extern "C"
{
#endif

/*
   Decrements the count of open objects against the queue. Note that the
   queue cannot be destroyed until this count is 0.

   @param handle The lock handle returned by mamaQueue_incrementObjectCount.
   @param queue The mamaQueue.
*/
MAMAExpDLL
extern void
mamaQueue_decrementObjectCount(mamaQueueLockHandle *handle, mamaQueue queue);

MAMAExpDLL
extern mamaQueueLockHandle
mamaQueue_incrementObjectCount(mamaQueue queue, void *owner);

/*
   Get the bridge impl associated with the specified queue.
   This will be how other objects gain access to the bridge.

   @param queue A valid mamaQueue object.
   @return A pointer to a valid mamaBridgeImpl object.
*/
MAMAExpDLL
extern mamaBridge
mamaQueueImpl_getBridgeImpl (mamaQueue queue);

/*
   Get the cached mamaMsg which is reused for all incoming messages.

   @param queue The mamaQueue which has cached the message.

   @return The cached mamaMsg.
*/
MAMAExpDLL
extern mamaMsg
mamaQueueImpl_getMsg (mamaQueue queue);

/*
    When detaching a message it must be disassociated from the queue onto
    which is it attached.
*/
MAMAExpDLL
extern mama_status
mamaQueueImpl_detachMsg (mamaQueue queue, mamaMsg msg);

/*
    Will return true if the queue is currently dispatching
*/
MAMAExpDLL
extern int
mamaQueueImpl_isDispatching (mamaQueue queue);

/* Called by the middleware bridge layer when high watermark is exceeded */
MAMAExpDLL
extern mama_status
mamaQueueImpl_highWatermarkExceeded (mamaQueue queue, size_t size);

/* Called by the middleware bridge layer when low watermark is exceeded */
MAMAExpDLL
extern mama_status
mamaQueueImpl_lowWatermarkExceeded (mamaQueue queue, size_t size);

MAMAExpDLL
extern mamaStatsCollector
mamaQueueImpl_getStatsCollector (mamaQueue queue);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_QUEUE_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
