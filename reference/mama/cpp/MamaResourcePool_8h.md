---
title: mama/MamaResourcePool.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaResourcePool.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaResourcePool](classWombat_1_1MamaResourcePool.html)**  |




## Source code

```cpp
#ifndef MAMA_RESOURCE_POOL_CPP_H__
#define MAMA_RESOURCE_POOL_CPP_H__

#include <mama/config.h>
#include <mama/status.h>
#include <mama/MamaSubscription.h>
#include <mama/MamaTransport.h>
#include <string>

namespace Wombat
{
    class MamaSubscription;
    class MamaTransport;
    class MamaResourcePoolImpl;

    class MAMACPPExpDLL MamaResourcePool
    {
    public:
        explicit MamaResourcePool (const char* name);

        ~MamaResourcePool ();

        MamaSubscription* createSubscriptionFromUri (
            const char* uri,
            MamaSubscriptionCallback* callbacks,
            void* closure = nullptr
        );

        MamaSubscription* createSubscriptionFromComponents (
            const char* transportName,
            const char* sourceName,
            const char* topicName,
            MamaSubscriptionCallback* callbacks,
            void* closure = nullptr
        );

        MamaSubscription* createSubscriptionFromTopicWithSource (
            const char* sourceName,
            const char* topicName,
            MamaSubscriptionCallback* callbacks,
            void* closure = nullptr
        );

        MamaSubscription* createSubscriptionFromTopic (
            const char* topicName,
            MamaSubscriptionCallback* callbacks,
            void* closure = nullptr
        );

        MamaTransport* createTransportFromName (
            const char* transportName
        );

        void destroySubscription (
            MamaSubscription* subscription
        );
    private:
        // No non-explicit constructors enabled by default
        MamaResourcePool(const MamaResourcePool& other);
        MamaResourcePool(MamaResourcePool&& other);
        MamaResourcePool& operator=(const MamaResourcePool& other);
        MamaResourcePool& operator=(MamaResourcePool&& other);
        MamaResourcePoolImpl* mPimpl;
    };

} // namespace Wombat


#endif // MAMA_RESOURCE_POOL_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
