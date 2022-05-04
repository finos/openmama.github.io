---
title: integration/bridge.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/bridge.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_BRIDGE_H__)
#define OPENMAMA_INTEGRATION_BRIDGE_H__

#include <mama/mama.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern int
mamaBridgeImpl_getDefaultQueueTimeout(void);

MAMAExpDLL
extern mama_status
mamaBridgeImpl_setClosure (mamaBridge bridgeImpl, void* closure);

MAMAExpDLL
extern mama_status
mamaBridgeImpl_setCppCallback (mamaBridge bridgeImpl, void* cppCallback);

MAMAExpDLL
extern mama_status
mamaBridgeImpl_getClosure (mamaBridge bridgeImpl, void** closure);

MAMAExpDLL
mama_status
mamaBridgeImpl_getInternalEventQueue (mamaBridge bridgeImpl, mamaQueue* internalQueue);

MAMAExpDLL
mama_status
mamaBridgeImpl_stopInternalEventQueue (mamaBridge bridgeImpl);

MAMAExpDLL
extern mama_status
mamaBridgeImpl_setReadOnlyProperty (mamaBridge bridgeImpl, const char* property, const char* value);

MAMAExpDLL
extern mama_bool_t
mamaBridgeImpl_areEntitlementsDeferred (mamaBridge bridgeImpl);

MAMAExpDLL
const char*
mamaBridgeImpl_getMetaProperty (mamaBridge bridgeImpl, const char* property);

MAMAExpDLL
extern void
mamaBridgeImpl_populateBridgeMetaData (mamaBridge bridgeImpl);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_BRIDGE_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
