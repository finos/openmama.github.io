---
title: bridge/base.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# bridge/base.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_BRIDGE_BASE_H__)
#define OPENMAMA_INTEGRATION_BRIDGE_BASE_H__

#include <mama/mama.h>
#include <mama/io.h>
#include <mama/integration/types.h>

/* Message types */
typedef enum baseMsgType_
{
    BASE_MSG_PUB_SUB        =               0x00,
    BASE_MSG_INBOX_REQUEST,
    BASE_MSG_INBOX_RESPONSE,
    BASE_MSG_SUB_REQUEST,
    BASE_MSG_TERMINATE      =               0xff
} baseMsgType;

typedef void (MAMACALLTYPE *baseQueueClosureCleanup)(void* closure);

#if defined (__cplusplus)
extern "C"
{
#endif


/*=========================================================================
 =                    Functions for the bridge                           =
 =========================================================================*/

MAMAExpBridgeDLL
extern void
baseBridge_createImpl (mamaBridge* result);

MAMAExpBridgeDLL
extern mama_status
baseBridge_init (mamaBridge bridgeImpl);

MAMAExpBridgeDLL
extern mama_status
baseBridge_open (mamaBridge bridgeImpl);

MAMAExpBridgeDLL
extern mama_status
baseBridge_close (mamaBridge bridgeImpl);

MAMAExpBridgeDLL
extern mama_status
baseBridge_start (mamaQueue defaultEventQueue);

MAMAExpBridgeDLL
extern mama_status
baseBridge_stop (mamaQueue defaultEventQueue);

MAMAExpBridgeDLL
extern const char*
baseBridge_getVersion (void);

MAMAExpBridgeDLL
extern const char*
baseBridge_getName (void);

MAMAExpBridgeDLL
mama_status
baseBridge_getDefaultPayloadId (char*** name, char** id);


/*=========================================================================
  =                    Functions for the mamaQueue                        =
  =========================================================================*/

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_create (queueBridge *queue, mamaQueue parent);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_create_usingNative (queueBridge *queue, mamaQueue parent,
                                        void* nativeQueue);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_destroy (queueBridge queue);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_getEventCount (queueBridge queue, size_t* count);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_dispatch (queueBridge queue);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_timedDispatch (queueBridge queue, uint64_t timeout);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_dispatchEvent (queueBridge queue);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_enqueueEvent (queueBridge        queue,
                                  mamaQueueEnqueueCB callback,
                                  void*              closure);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_stopDispatch (queueBridge queue);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_setEnqueueCallback (queueBridge        queue,
                                        mamaQueueEnqueueCB callback,
                                        void*              closure);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_removeEnqueueCallback (queueBridge queue);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_getNativeHandle (queueBridge queue,
                                     void**      nativeHandle);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_setHighWatermark (queueBridge queue,
                                      size_t      highWatermark);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaQueue_setLowWatermark (queueBridge queue,
                                     size_t      lowWatermark);


/*=========================================================================
  =                    Functions for the mamaTransport                    =
  =========================================================================*/

MAMAExpBridgeDLL
extern int
baseBridgeMamaTransport_isValid (transportBridge transport);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_destroy (transportBridge transport);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_create (transportBridge* result,
                                const char*      name,
                                mamaTransport    parent);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_forceClientDisconnect (
        transportBridge* transports,
        int              numTransports,
        const char*      ipAddress,
        uint16_t         port);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_findConnection (transportBridge* transports,
                                        int              numTransports,
                                        mamaConnection*  result,
                                        const char*      ipAddress,
                                        uint16_t         port);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_getAllConnections (transportBridge* transports,
                                           int              numTransports,
                                           mamaConnection** result,
                                           uint32_t*        len);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_getAllConnectionsForTopic (transportBridge* transports,
                                                   int              numTransports,
                                                   const char*      topic,
                                                   mamaConnection** result,
                                                   uint32_t*        len);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_requestConflation (transportBridge* transports,
                                           int              numTransports);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_requestEndConflation (transportBridge* transports,
                                              int              numTransports);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_getAllServerConnections (
        transportBridge*       transports,
        int                    numTransports,
        mamaServerConnection** result,
        uint32_t*              len);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_freeAllServerConnections (
        transportBridge*        transports,
        int                     numTransports,
        mamaServerConnection*   connections,
        uint32_t                len);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_freeAllConnections (transportBridge* transports,
                                            int              numTransports,
                                            mamaConnection*  connections,
                                            uint32_t         len);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_getNumLoadBalanceAttributes (
        const char* name,
        int*        numLoadBalanceAttributes);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_getLoadBalanceSharedObjectName (
        const char*  name,
        const char** loadBalanceSharedObjectName);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_getLoadBalanceScheme (
        const char*    name,
        tportLbScheme* scheme);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_sendMsgToConnection (
        transportBridge transport,
        mamaConnection  connection,
        mamaMsg         msg,
        const char*     topic);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_isConnectionIntercepted (
        mamaConnection connection,
        uint8_t* result);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_installConnectConflateMgr (
        transportBridge       transport,
        mamaConflationManager mgr,
        mamaConnection        connection,
        conflateProcessCb     processCb,
        conflateGetMsgCb      msgCb);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_uninstallConnectConflateMgr (
        transportBridge       transport,
        mamaConflationManager mgr,
        mamaConnection        connection);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_startConnectionConflation (
        transportBridge        transport,
        mamaConflationManager  mgr,
        mamaConnection         connection);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_getNativeTransport (transportBridge transport,
                                            void**          result);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTransport_getNativeTransportNamingCtx (transportBridge transport,
                                                     void**          result);


/*=========================================================================
  =                    Functions for the mamaSubscription                 =
  =========================================================================*/

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaSubscription_create
        (subscriptionBridge* subscriber,
         const char*         source,
         const char*         symbol,
         mamaTransport       transport,
         mamaQueue           queue,
         mamaMsgCallbacks    callback,
         mamaSubscription    subscription,
         void*               closure );

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaSubscription_createWildCard (
        subscriptionBridge* subsc_,
        const char*         source,
        const char*         symbol,
        mamaTransport       transport,
        mamaQueue           queue,
        mamaMsgCallbacks    callback,
        mamaSubscription    subscription,
        void*               closure );

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaSubscription_mute (subscriptionBridge subscriber);

MAMAExpBridgeDLL
extern  mama_status
baseBridgeMamaSubscription_destroy (subscriptionBridge subscriber);

MAMAExpBridgeDLL
extern int
baseBridgeMamaSubscription_isValid (subscriptionBridge bridge);

MAMAExpBridgeDLL
extern int
baseBridgeMamaSubscription_hasWildcards (subscriptionBridge subscriber);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaSubscription_getPlatformError (subscriptionBridge subsc,
                                             void** error);

MAMAExpBridgeDLL
extern int
baseBridgeMamaSubscription_isTportDisconnected (subscriptionBridge subsc);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaSubscription_setTopicClosure (subscriptionBridge subsc,
                                            void* closure);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaSubscription_muteCurrentTopic (subscriptionBridge subsc);


/*=========================================================================
  =                    Functions for the mamaTimer                        =
  =========================================================================*/

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTimer_create (timerBridge* timer,
                            void*        nativeQueueHandle,
                            mamaTimerCb  action,
                            mamaTimerCb  onTimerDestroyed,
                            mama_f64_t   interval,
                            mamaTimer    parent,
                            void*        closure);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTimer_destroy (timerBridge timer);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTimer_reset (timerBridge timer);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTimer_setInterval (timerBridge timer, mama_f64_t interval);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaTimer_getInterval (timerBridge timer, mama_f64_t* interval);


/*=========================================================================
  =                    Functions for the mamaIo                           =
  =========================================================================*/

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaIo_create (ioBridge*       result,
                         void*           nativeQueueHandle,
                         uint32_t        descriptor,
                         mamaIoCb        action,
                         mamaIoType      ioType,
                         mamaIo          parent,
                         void*           closure);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaIo_getDescriptor (ioBridge io, uint32_t* result);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaIo_destroy (ioBridge io);


/*=========================================================================
  =                    Functions for the mamaPublisher                    =
  =========================================================================*/

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaPublisher_createByIndex (
        publisherBridge*  result,
        mamaTransport     tport,
        int               tportIndex,
        const char*       topic,
        const char*       source,
        const char*       root,
        mamaPublisher     parent);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaPublisher_destroy (publisherBridge publisher);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaPublisher_send (publisherBridge publisher, mamaMsg msg);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaPublisher_sendReplyToInbox (publisherBridge publisher,
                                          mamaMsg         request,
                                          mamaMsg         reply);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaPublisher_sendReplyToInboxHandle (publisherBridge publisher,
                                                void*           wmwReply,
                                                mamaMsg         reply);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaPublisher_sendFromInboxByIndex (publisherBridge   publisher,
                                              int               tportIndex,
                                              mamaInbox         inbox,
                                              mamaMsg           msg);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaPublisher_sendFromInbox (publisherBridge publisher,
                                       mamaInbox       inbox,
                                       mamaMsg         msg);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaPublisher_setUserCallbacks (publisherBridge         publisher,
                                          mamaQueue               queue,
                                          mamaPublisherCallbacks* cb,
                                          void*                   closure);


/*=========================================================================
  =                    Functions for the mamaInbox                        =
  =========================================================================*/

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaInbox_create (
        inboxBridge*                bridge,
        mamaTransport               tport,
        mamaQueue                   queue,
        mamaInboxMsgCallback        msgCB,
        mamaInboxErrorCallback      errorCB,
        mamaInboxDestroyCallback    onInboxDestroyed,
        void*                       closure,
        mamaInbox                   parent);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaInbox_createByIndex (
        inboxBridge*                bridge,
        mamaTransport               tport,
        int                         tportIndex,
        mamaQueue                   queue,
        mamaInboxMsgCallback        msgCB,
        mamaInboxErrorCallback      errorCB,
        mamaInboxDestroyCallback    onInboxDestroyed,
        void*                       closure,
        mamaInbox                   parent);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaInbox_destroy (inboxBridge inbox);


/*=========================================================================
  =                    Functions for the msgBridge                        =
  =========================================================================*/

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_create (msgBridge* msg, mamaMsg parent);

MAMAExpBridgeDLL
extern int
baseBridgeMamaMsg_isFromInbox (msgBridge msg);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_destroy (msgBridge msg, int destroyMsg);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_destroyMiddlewareMsg (msgBridge msg);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_detach (msgBridge msg);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_getPlatformError (msgBridge msg, void** error);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_setSendSubject (msgBridge   msg,
                                  const char* symbol,
                                  const char* subject);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_getNativeHandle (msgBridge msg, void** result);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_duplicateReplyHandle (msgBridge msg, void** result);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_copyReplyHandle (void* src, void** dest);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_setReplyHandle (msgBridge msg, void* handle);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_setReplyHandleAndIncrement (msgBridge msg, void* handle);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsg_destroyReplyHandle (void* handle);

MAMAExpBridgeDLL
extern const char*
baseBridgeMamaInboxImpl_getReplySubject (inboxBridge inbox);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaIoImpl_start (void* closure);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaIoImpl_stop  (void* closure);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_isValid                 (msgBridge    msg,
                                               uint8_t*     result);
MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_setMsgType              (msgBridge    msg,
                                               baseMsgType  type);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getMsgType              (msgBridge    msg,
                                               baseMsgType* type);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_setInboxName            (msgBridge    msg,
                                               const char*  value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getInboxName            (msgBridge    msg,
                                               char**       value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_setReplyTo              (msgBridge    msg,
                                               const char*  value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getReplyTo              (msgBridge    msg,
                                               char**       value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_setTargetSubject        (msgBridge    msg,
                                               const char*  value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getTargetSubject        (msgBridge    msg,
                                               char**       value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_setDestination          (msgBridge    msg,
                                               const char*  value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getDestination          (msgBridge    msg,
                                               char**       value);
MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getPayloadSize (msgBridge    msg,
                                      size_t*      size);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_setPayloadSize (msgBridge    msg,
                                      size_t       size);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getSendSubject          (msgBridge    msg,
                                               char**       value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgReplyHandleImpl_getInboxName (void*       replyHandle,
                                               char**      value);
MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaIoImpl_start (void* closure);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaIoImpl_stop  (void* closure);
MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgReplyHandleImpl_setInboxName (void*       replyHandle,
                                               const char* value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getReplyHandle (msgBridge    msg,
                                      void**       replyHandle);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgReplyHandleImpl_getReplyTo   (void*       replyHandle,
                                               char**      value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgReplyHandleImpl_setReplyTo   (void*       replyHandle,
                                               const char* value);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_createMsgOnly           (msgBridge*  msg);

MAMAExpBridgeDLL
extern void
baseBridgeMamaQueueImpl_setClosure (queueBridge              queue,
                                    void*                    closure,
                                    baseQueueClosureCleanup  callback);
MAMAExpBridgeDLL
extern void*
baseBridgeMamaQueueImpl_getClosure (queueBridge              queue);

MAMAExpBridgeDLL
extern mama_status
baseBridgeMamaMsgImpl_getSerializationBuffer (msgBridge    msg,
                                              void**       buffer,
                                              size_t       size);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_BRIDGE_BASE_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
