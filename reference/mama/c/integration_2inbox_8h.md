---
title: integration/integration/inbox.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/inbox.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_INBOX_H__)
#define OPENMAMA_INTEGRATION_INBOX_H__

#include <mama/mama.h>
#include <mama/integration/types.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL 
extern inboxBridge
mamaInboxImpl_getInboxBridge (mamaInbox inbox);

MAMAExpDLL 
extern mama_status 
mamaInbox_createByIndex (mamaInbox*             inbox,
                         mamaTransport          tport,
                         int                    tportIndex,
                         mamaQueue              queue,
                         mamaInboxMsgCallback   msgCB,
                         mamaInboxErrorCallback errorCB,
                         void*                  closure);

MAMAExpDLL 
extern mama_status 
mamaInbox_createByIndex2 (mamaInbox*             inbox,
                         mamaTransport          tport,
                         int                    tportIndex,
                         mamaQueue              queue,
                         mamaInboxMsgCallback   msgCB,
                         mamaInboxErrorCallback errorCB,
                         mamaInboxDestroyCallback onInboxDestroyed,
                         void*                  closure);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_INBOX_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
