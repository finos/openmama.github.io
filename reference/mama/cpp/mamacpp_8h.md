---
title: mama/mamacpp.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/mamacpp.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaLogFileCallback](classWombat_1_1MamaLogFileCallback.html)**  |
| class | **[Wombat::MamaStartCallback](classWombat_1_1MamaStartCallback.html)**  |
| class | **[Wombat::MamaEntitlementCallback](classWombat_1_1MamaEntitlementCallback.html)**  |
| class | **[Wombat::Mama](classWombat_1_1Mama.html)**  |




## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MAMA_CPP_H__
#define MAMA_CPP_H__

#include <stdio.h>
#include <cstring>

#include <mama/mama.h>
#include <mama/MamaBridgeCallback.h>
#include <mama/MamaMsg.h>
#include <mama/MamaQueueGroup.h>
#include <mama/MamaBasicSubscription.h>
#include <mama/MamaBasicSubscriptionCallback.h>
#include <mama/MamaBasicWildCardSubscription.h>
#include <mama/MamaBasicWildCardSubscriptionCallback.h>
#include <mama/MamaSubscription.h>
#include <mama/MamaSubscriptionCallback.h>
#include <mama/MamaTransport.h>
#include <mama/MamaPublisher.h>
#include <mama/MamaPublisherCallback.h>
#include <mama/MamaInboxCallback.h>
#include <mama/MamaInbox.h>
#include <mama/MamaQueue.h>
#include <mama/MamaQueueEnqueueCallback.h>
#include <mama/MamaQueueMonitorCallback.h>
#include <mama/MamaQueueEventCallback.h>
#include <mama/MamaDispatcher.h>
#include <mama/MamaTimerCallback.h>
#include <mama/MamaTimer.h>
#include <mama/MamaIoCallback.h>
#include <mama/MamaIo.h>
#include <mama/MamaDictionaryCallback.h>
#include <mama/MamaDictionary.h>
#include <mama/MamaFieldDescriptor.h>
#include <mama/MamaDateTime.h>
#include <mama/MamaPrice.h>
#include <mama/MamaMsgFieldIterator.h>
#include <mama/MamaMsgField.h>
#include <mama/MamaStatus.h>
#include <mama/MamaSymbolMap.h>
#include <mama/MamaSymbolMapFile.h>
#include <mama/MamaLogFile.h>
#include <mama/MamaSymbolSourceCallback.h>
#include <mama/MamaSymbolSource.h>
#include <mama/MamaMsgQual.h>
#include <mama/msgstatus.h>
#include <mama/types.h>
#include <mama/MamaSendCompleteCallback.h>
#include <mama/MamaSource.h>
#include <mama/MamaSourceManager.h>
#include <mama/MamaSourceGroup.h>
#include <mama/MamaSourceGroupManager.h>
#include <mama/MamaStatsCollector.h>


namespace Wombat
{
class MAMACPPExpDLL MamaLogFileCallback
{
public:
    virtual ~MamaLogFileCallback () {}
    virtual void onLogSizeExceeded () = 0;
};

class MAMACPPExpDLL MamaStartCallback
{
public:
    virtual ~MamaStartCallback () {};
    virtual void onStartComplete (MamaStatus status) = 0;
};

class MAMACPPExpDLL MamaEntitlementCallback
{
public:
    virtual ~MamaEntitlementCallback () {};
    virtual void
    onSessionDisconnect (const sessionDisconnectReason reason,
                         const char* userId,
                         const char* host,
                         const char* appName) = 0;

    virtual void
    onEntitlementUpdate () = 0;

    virtual void
    onEntitlementCheckingSwitch (const int isEntitlementsCheckingDisabled) {};
};

class MAMACPPExpDLL Mama
{
public:

    static mamaBridge loadBridge (const char* middleware);


    static mamaBridge loadBridge (const char* middleware, const char* path);
    
    static mamaPayloadBridge loadPayloadBridge (const char* payload);

    static mamaBridge getMiddlewareBridge (const char* middleware);

    static mamaPayloadBridge getPayloadBridge (const char* payload);

    static const char* getVersion (mamaBridge bridgeImpl);

    static void open ();

    static unsigned int openCount ();

    static unsigned int openCount (const char*   path,
                                   const char*   filename);

    static void open (const char*   path,
                      const char*   filename);

    static void registerEntitlementCallbacks (MamaEntitlementCallback* callback);

    static void setProperty (const char* name, const char* value);

    static const char * getProperty (const char* name);

    static void close ();

    static unsigned int closeCount ();

    static void start (mamaBridge bridgeImpl);

    static void startBackground (mamaBridge bridgeImpl,
                                 MamaStartCallback* callback);

    static void stop (mamaBridge bridgeImpl);


    static void stopAll (void);

    static void enableLogging (
        MamaLogLevel    level,
        FILE*           logFile);

    static void logToFile (
        const char*     file,
        MamaLogLevel    level);

    static void disableLogging (void);

    static void setLogLevel (MamaLogLevel level);

    static MamaLogLevel getLogLevel (void);

    static void setLogSize (unsigned long size);

    static void setNumLogFiles(int numFiles);

    static void setLogFilePolicy(mamaLogFilePolicy policy);

    static void setAppendToLogFile(bool append);

    static bool loggingToFile(void);

    static void setLogSizeCb(MamaLogFileCallback* callback);

    static void setApplicationName (const char* applicationName);

    static void setApplicationClassName (const char* className);

    static MamaQueue* getDefaultEventQueue (mamaBridge bridgeImpl);

    template <typename T>
    static void deleteObject (T* object);

    static void setBridgeCallback (mamaBridge bridge, MamaBridgeCallback* callback);

    static void addStatsCollector (MamaStatsCollector* statsCollector);

    static void removeStatsCollector (MamaStatsCollector* statsCollector);


private:
    Mama (void) {}
};

} /* namespace Wombat */
#endif // MAMA_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
