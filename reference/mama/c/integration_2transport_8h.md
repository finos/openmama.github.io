---
title: integration/integration/transport.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/transport.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_TRANSPORT_H__)
#define OPENMAMA_INTEGRATION_TRANSPORT_H__

#include <mama/mama.h>
#include <mama/integration/types.h>
#include "list.h"

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern mama_status
mamaTransport_getBridgeTransport(
    mamaTransport     transport,
    transportBridge*  result);

MAMAExpDLL
extern mama_status
mamaTransport_getBridgeTransportByIndex (
    mamaTransport    tport,
    int              tportIndex,
    transportBridge* result);

MAMAExpDLL
extern mama_status
mamaTransport_throttleRemoveForOwner (mamaTransport transport,
                                      mamaThrottleInstance instance,
                                      void *handle);

MAMAExpDLL
extern mama_status
mamaTransport_throttleRemoveFromList (mamaTransport transport,
                                      mamaThrottleInstance instance,
                                      wList list);

MAMAExpDLL
extern mama_status mamaTransport_throttleAction (
    mamaTransport         transport,
    mamaThrottleInstance  instance,
    throttleCb            throttleAction,
    void*                 owner,
    void*                 closure1,
    void*                 closure2,
    int                   immediate,
    wombatThrottleAction* handle);

MAMAExpDLL
extern mama_status mamaTransport_addSubscription(
    mamaTransport     transport,
    mamaSubscription  subscription,
    void**            result);

MAMAExpDLL
extern mama_status
mamaTransport_removeListener(
    mamaTransport     transport,
    void*             handle);

MAMAExpDLL
extern void
mamaTransportImpl_processAdvisory (mamaTransport transport,
                                   short         cause,
                                   const void*   platformInfo);

MAMAExpDLL
extern void
mamaTransportImpl_reconnect (mamaTransport      transport,
                             mamaTransportEvent event,
                             const void*        platformInfo,
                             const void*        connectionInfo);

MAMAExpDLL
extern void
mamaTransportImpl_disconnect (mamaTransport      transport,
                              mamaTransportEvent event,
                              const void*        platformInfo,
                              const void*        connectionInfo);

MAMAExpDLL
extern void
mamaTransportImpl_disconnectNoStale (mamaTransport      transport,
                                     mamaTransportEvent event,
                                     const void*        platformInfo,
                                     const void*        connectionInfo);

MAMAExpDLL
extern void
mamaTransportImpl_setPossiblyStale (mamaTransport      transport,
                                    mamaSubscription   subscription);

MAMAExpDLL
extern void
mamaTransportImpl_getTransportTopicCallback (mamaTransport transport,
                                             mamaTransportTopicCB* callback,
                                             void** closure);

MAMAExpDLL
extern void
mamaTransportImpl_getWriteQueueWatermarks (mamaTransport transport,
                                           uint32_t* high,
                                           uint32_t* low);

MAMAExpDLL
extern void
mamaTransportImpl_resetRefreshForListener (mamaTransport tport, void *handle);

MAMAExpDLL
extern mama_status
mamaTransportImpl_getTopicsAndTypesForSource (mamaTransport tport,
                                              int transportIndex,
                                              const char*   source,
                                              const char*** topics,
                                              mama_i32_t**  types,
                                              int *len);

MAMAExpDLL
extern int
mamaTransportImpl_isPossiblyStale (mamaTransport tport);

MAMAExpDLL
extern void
mamaTransportImpl_unsetAllPossiblyStale (mamaTransport tport);

MAMAExpDLL
extern void
mamaTransportImpl_getAdvisoryCauseAndPlatformInfo (mamaTransport tport,
                                                   short*        cause,
                                                   const void**  platformInfo);
/*
   Get the bridge impl associated with the specified transport.
   This will be how other objects gain access to the bridge.

   @param queue A valid mamaTransport object.
   @return A pointer to a valid mamaBridgeImpl object.
*/
MAMAExpDLL
extern mamaBridge
mamaTransportImpl_getBridgeImpl (mamaTransport transport);

MAMAExpDLL
extern void
mamaTransportImpl_getTransportIndex (mamaTransport tport,
                                     int*          tportIndex);

MAMAExpDLL
extern void
mamaTransportImpl_nextTransportIndex (mamaTransport tport,
                                      const char*   source,
                                      const char*   symbol);

MAMAExpDLL
extern wombatThrottle
mamaTransportImpl_getThrottle (mamaTransport transport,
                               mamaThrottleInstance instance);

MAMAExpDLL
extern mama_status
mamaTransportImpl_isConnectionIntercepted (mamaTransport  transport,
                                           mamaConnection connection,
                                           uint8_t*       result);

MAMAExpDLL
extern mama_status
mamaTransportImpl_installConnectConflateMgr (mamaTransport         transport,
                                             mamaConflationManager mgr,
                                             mamaConnection        connection,
                                             conflateProcessCb     processCb,
                                             conflateGetMsgCb      msgCb);

MAMAExpDLL
extern mama_status
mamaTransportImpl_uninstallConnectConflateMgr (
                                        mamaTransport         transport,
                                        mamaConflationManager mgr,
                                        mamaConnection        connection);

MAMAExpDLL
extern mama_status
mamaTransportImpl_startConnectionConflation (
                                        mamaTransport          transport,
                                        mamaConflationManager  mgr,
                                        mamaConnection         connection);

MAMAExpDLL
extern mama_status
mamaTransportImpl_sendMsgToConnection (mamaTransport   transport,
                                       mamaConnection  connection,
                                       mamaMsg         msg,
                                       const char*     topic);

MAMAExpDLL
extern int
mamaTransportImpl_getGroupSizeHint (mamaTransport transport);

MAMAExpDLL
extern mama_status
mamaTransport_initStats (mamaTransport transport);

MAMAExpDLL extern void mamaTransportImpl_invokeTransportCallback(mamaTransport transport, mamaTransportEvent event, short cause, const void *platformInfo);

MAMAExpDLL extern void mamaTransportImpl_invokeTransportTopicCallback(mamaTransport transport, mamaTransportTopicEvent event, const char* topic, const void *platformInfo);

MAMAExpDLL
mama_status mamaTransportImpl_allocateInternalTransport(mamaTransport *transport);

MAMAExpDLL
extern void
mamaTransportImpl_setAdvisoryCauseAndPlatformInfo(
        mamaTransport transport,
        short cause,
        const void *platformInfo);

MAMAExpDLL
extern mama_status
mamaTransportImpl_forceClientDisconnect (mamaTransport   transport,
                                         const char*     ipAddress,
                                         uint16_t        port);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_TRANSPORT_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
