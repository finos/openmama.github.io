---
title: integration/integration/mama.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/mama.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_MAMA_H__)
#define OPENMAMA_INTEGRATION_MAMA_H__

#include <wombat/wtable.h>
#include <wombat/property.h>
#include <mama/mama.h>
#include <mama/version.h>

#if defined (__cplusplus)
extern "C"
{
#endif

#define MAMA_PAYLOAD_MAX        UCHAR_MAX
#define MAMA_MAX_MIDDLEWARES    CHAR_MAX
#define MAMA_MAX_ENTITLEMENTS   CHAR_MAX
#define MAX_ENTITLEMENT_BRIDGES CHAR_MAX

/* These are the bare parameters which may be reused in other properties */
#define MAMA_PROP_BARE_ENT_DEFERRED        "entitlements.deferred"
#define MAMA_PROP_BARE_COMPILE_TIME_VER    "compile_version"
#define MAMA_PROP_EXTENDS_BASE_BRIDGE      "extends_base_bridge"

/* These properties will be set by MAMA */
#define MAMA_PROP_MAMA_RUNTIME_VER         "mama.runtime_version"

/* %s = Bridge Name - these properties may be populated by bridge */
#define MAMA_PROP_BRIDGE_ENT_DEFERRED      "mama.%s." MAMA_PROP_BARE_ENT_DEFERRED
#define MAMA_PROP_BRIDGE_COMPILE_TIME_VER  "mama.%s." MAMA_PROP_BARE_COMPILE_TIME_VER

/* Maximum internal property length */
#define MAX_INTERNAL_PROP_LEN   1024

#define MAMA_SET_BRIDGE_COMPILE_TIME_VERSION(bridgeName)                       \
do                                                                             \
{                                                                              \
    char valString[MAX_INTERNAL_PROP_LEN];                                     \
    char propString[MAX_INTERNAL_PROP_LEN];                                    \
                                                                               \
    /* Advise MAMA which version of MAMA the bridge was compiled against */    \
    snprintf (propString,                                                      \
              sizeof(propString),                                              \
              MAMA_PROP_BRIDGE_COMPILE_TIME_VER,                               \
              bridgeName);                                                     \
    /* Advise MAMA which version of MAMA the bridge was compiled against */    \
    snprintf (valString,                                                       \
              sizeof(valString),                                               \
              "%d.%d.%s",                                                      \
              MAMA_VERSION_MAJOR,                                              \
              MAMA_VERSION_MINOR,                                              \
              MAMA_VERSION_RELEASE);                                           \
    mamaInternal_setMetaProperty (                                             \
              propString,                                                      \
              valString);                                                      \
}                                                                              \
while(0)

MAMAExpDLL
extern int
mamaInternal_getCatchCallbackExceptions (void);

MAMAExpDLL
extern wproperty_t
mamaInternal_getProperties (void);

/* Used by the bridges to register themselves with MAMA. Should not
   be called from anywhere else */
MAMAExpDLL
extern void
mamaInternal_registerBridge (mamaBridge     bridge,
                             const char*    middleware);

MAMAExpDLL
const char*
mama_wrapperGetVersion(mamaBridge     bridge);

MAMAExpDLL
extern mamaStatsGenerator
mamaInternal_getStatsGenerator (void);

MAMAExpDLL
extern mamaStatsCollector
mamaInternal_getGlobalStatsCollector (void);

MAMAExpDLL
extern int
mamaInternal_generateLbmStats (void);

MAMAExpDLL
mamaBridge
mamaInternal_findBridge (void);

MAMAExpDLL
mamaPayloadBridge
mamaInternal_findPayload (char id);

MAMAExpDLL
mamaPayloadBridge
mamaInternal_getDefaultPayload (void);

MAMAExpDLL
mama_bool_t
mamaInternal_getAllowMsgModify (void);

MAMAExpDLL
mama_status
mamaInternal_initialiseTable (wtable_t*   table,
                              const char* name,
                              mama_size_t size);

MAMAExpDLL
mama_status
mamaInternal_init (void);

MAMAExpDLL
mama_status
mamaInternal_getPayloadId (const char*       payloadName,
                           mamaPayloadBridge payload,
                           char*             payloadChar);

MAMAExpDLL
mama_i32_t
mamaInternal_getEntitlementBridgeCount (void);

MAMAExpDLL
mama_status
mamaInternal_getEntitlementBridgeByName(mamaEntitlementBridge* entBridge, const char* name);

MAMAExpDLL
const char*
mamaInternal_getMetaProperty (const char* name);

MAMAExpDLL
mama_status
mamaInternal_setMetaProperty (const char* name, const char* value);

/* ************************************************************************* */
/* Callbacks. */
/* ************************************************************************* */

MAMAExpDLL
void MAMACALLTYPE mamaImpl_entitlementDisconnectCallback(
                            const  sessionDisconnectReason reason,
                            const  char * const            userId,
                            const  char * const            host,
                            const  char * const            appName);
MAMAExpDLL
void MAMACALLTYPE mamaImpl_entitlementUpdatedCallback (void);

MAMAExpDLL
void MAMACALLTYPE mamaImpl_entitlementCheckingSwitchCallback (
                            int isEntitlementsCheckingDisabled);

MAMAExpDLL
mama_status
mamaImpl_setDefaultEventQueue (mamaBridge bridgeImpl,
                               mamaQueue defaultQueue);

MAMAExpDLL
extern long int
mamaImpl_getParameterAsLong (
    long defaultVal,
    long minimum,
    long maximum,
    const char* format, ...);

MAMAExpDLL
extern const char*
mamaImpl_getParameter (
    const char* defaultVal,
    const char* format, ...);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_MAMA_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
