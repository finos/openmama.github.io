---
title: integration/msgutils.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/msgutils.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_MSGUTILS_H__)
#define OPENMAMA_INTEGRATION_MSGUTILS_H__

#include <mama/mama.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
mama_status
msgUtils_getIssueSymbol            (mamaMsg msg, const char** result);

MAMAExpDLL
mama_status
msgUtils_setStatus                 (mamaMsg msg, short status);

MAMAExpDLL
mama_status
msgUtils_msgTotal                  (mamaMsg msg, short* result);

MAMAExpDLL
mama_status 
msgUtils_msgNum                    (mamaMsg msg, short* result);

MAMAExpDLL
mama_status
msgUtils_msgSubscMsgType           (mamaMsg msg, short* result);

MAMAExpDLL
mama_status 
msgUtils_createSubscriptionMessage (mamaSubscription  subscription,
                                    mamaSubscMsgType  subscMsgType,
                                    mamaMsg*          msg,
                                    const char*       issueSymbol);

MAMAExpDLL
mama_status
msgUtils_createSubscribeMsg        (mamaSubscription subsc, mamaMsg* result);

MAMAExpDLL
mama_status
msgUtils_createResubscribeMessage  (mamaMsg* result);

MAMAExpDLL
mama_status
msgUtils_createRefreshMsg          (mamaSubscription subsc, mamaMsg* result);

MAMAExpDLL
mama_status
msgUtils_createTimeoutMsg          (mamaMsg* msg);

MAMAExpDLL
mama_status
msgUtils_createEndOfInitialsMsg    (mamaMsg* msg);

MAMAExpDLL
mama_status
msgUtils_createRecoveryRequestMsg  (mamaSubscription subsc, 
                                    short            reason,
                                    mamaMsg*         result, 
                                    const char*      issueSymbol);

MAMAExpDLL
mama_status
msgUtils_setSubscSubject           (mamaMsg msg, const char* sendSubject);

MAMAExpDLL
mama_status 
msgUtils_createUnsubscribeMsg      (mamaSubscription subsc, mamaMsg* msg);

MAMAExpDLL
mama_status
msgUtils_createDictionarySubscribe (mamaSubscription subscription, 
                                    mamaMsg*         msg);

MAMAExpDLL
mama_status
msgUtils_createSnapshotSubscribe   (mamaSubscription subsc, mamaMsg* msg);

MAMAExpDLL
mama_status
msgUtils_msgTotal                  (mamaMsg msg, short* result);

MAMAExpDLL
mama_status
msgUtils_msgNum                    (mamaMsg msg, short* result);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_MSGUTILS_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
