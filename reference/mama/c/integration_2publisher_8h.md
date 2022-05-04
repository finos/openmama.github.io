---
title: integration/integration/publisher.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/publisher.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_PUBLISHER_H__)
#define OPENMAMA_INTEGRATION_PUBLISHER_H__

#include <mama/mama.h>
#include <mama/integration/types.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern mama_status
mamaPublisherImpl_createByIndex (mamaPublisher*    result,
                                 mamaTransport     tport,
                                 int               tportIndex,
                                 mamaQueue         queue,
                                 mamaPublisherCallbacks* cb,
                                 const char*       symbol,
                                 const char*       source,
                                 const char*       root,
                                 void*             closure);

MAMAExpDLL
extern mama_status
mamaPublisherImpl_sendFromInboxByIndex (mamaPublisher publisher,
                                        int           tportIndex,
                                        mamaInbox     inbox,
                                        mamaMsg       msg);

MAMAExpDLL
extern mama_status
mamaPublisherImpl_clearTransport (mamaPublisher publisher);

MAMAExpDLL
extern mamaTransport
mamaPublisherImpl_getTransportImpl (mamaPublisher publisher);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_PUBLISHER_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
