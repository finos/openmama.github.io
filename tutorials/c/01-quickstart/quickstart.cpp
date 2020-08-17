#include <stdio.h>
#include <mama/mama.h>

typedef struct dictionaryClosure {
    mamaBridge bridge;
    mama_status status;
} dictionaryClosure;

void MAMACALLTYPE
timeoutCb (mamaDictionary dict, void *closure)
{
    dictionaryClosure* dc = (dictionaryClosure*) closure;
    printf("TIMEOUT CALLBACK\n");
    dc->status = MAMA_STATUS_TIMEOUT;
    mama_stop(dc->bridge);
}

void MAMACALLTYPE
errorCb (mamaDictionary dict, const char *errMsg, void *closure)
{
    dictionaryClosure* dc = (dictionaryClosure*) closure;
    printf("ERROR CALLBACK\n");
    dc->status = MAMA_STATUS_PLATFORM;
    mama_stop(dc->bridge);
}

void MAMACALLTYPE
completeCb (mamaDictionary dict, void *closure)
{
    dictionaryClosure* dc = (dictionaryClosure*) closure;
    printf("COMPLETE CALLBACK\n");
    dc->status = MAMA_STATUS_OK;
    mama_stop(dc->bridge);
}

void MAMACALLTYPE
subscriptionOnCreate (mamaSubscription subscription, void* closure) {

}

static void MAMACALLTYPE
subscriptionOnError (mamaSubscription subscription,
                     mama_status      status,
                     void*            platformError,
                     const char*      subject,
                     void*            closure) {

}

void MAMACALLTYPE
subscriptionOnMsg  (mamaSubscription subscription,
                    mamaMsg msg,
                    void *closure,
                    void *itemClosure) {
    printf("Received a message: %s\n", mamaMsg_toJsonStringWithDictionary(msg, (mamaDictionary)closure));
}

void MAMACALLTYPE
subscriptionOnQuality (mamaSubscription subsc,
                       mamaQuality      quality,
                       const char*      symbol,
                       short            cause,
                       const void*      platformInfo,
                       void*            closure) {

}

int main(int argc, char* argv[])
{
    printf("Loading OpenMAMA...\n");
    //mama_setLogLevel(MAMA_LOG_LEVEL_FINEST);

    mamaBridge bridge;
    mama_loadBridge(&bridge, "qpid");
    mama_open();

    mamaDictionaryCallbackSet dictionaryCallback {};
    dictionaryClosure dc {};
    dc.bridge = bridge;
    dictionaryCallback.onComplete = completeCb;
    dictionaryCallback.onTimeout  = timeoutCb;
    dictionaryCallback.onError    = errorCb;

    mamaQueue queue;
    mama_getDefaultEventQueue(bridge, &queue);

    printf("MAMA QUEUE = %p", queue);

    mamaTransport transport;
    mamaTransport_allocate(&transport);
    mamaTransport_create(transport, "sub", bridge);

    mamaSource dictSource;
    mamaSource_create (&dictSource);
    mamaSource_setTransport (dictSource, transport);
    mamaSource_setSymbolNamespace (dictSource, "WOMBAT");

    mamaDictionary dictionary;
    mama_status status = mama_createDictionary (
            &dictionary,
            queue,
            dictionaryCallback,
            dictSource,
            10.0,
            3,
            &dc
    );
    mama_start (bridge);

    printf("Attempt to retrieve dictionary returned: %s\n", mamaStatus_stringForStatus(dc.status));
    if (dc.status != MAMA_STATUS_OK) {
        exit(1);
    }

    mamaSource source;
    mamaSource_create(&source);
    mamaSource_setSymbolNamespace(source, "OM");
    mamaSource_setTransport(source, transport);

    mamaSubscription subscription;
    mamaSubscription_allocate(&subscription);

    mamaMsgCallbacks callbacks {};
    callbacks.onCreate  = subscriptionOnCreate;
    callbacks.onError   = subscriptionOnError;
    callbacks.onMsg     = subscriptionOnMsg;
    callbacks.onQuality = subscriptionOnQuality;
    mamaSubscription_create(
            subscription,
            queue,
            &callbacks,
            source,
            "DE000CM95AU4.EUR.XPAR",
            dictionary
    );

    mamaSubscription_activate(subscription);

    mama_start(bridge);
    mama_close();
}
