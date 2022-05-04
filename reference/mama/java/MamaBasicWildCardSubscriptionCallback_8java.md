---
title: mama/MamaBasicWildCardSubscriptionCallback.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaBasicWildCardSubscriptionCallback.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mama::MamaBasicWildCardSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaBasicWildCardSubscriptionCallback.html)**  |




## Source code

```java
package com.wombat.mama;

/* $Id$ */

public interface MamaBasicWildCardSubscriptionCallback
{
    void onCreate (MamaBasicSubscription subscription);

    void onError(MamaBasicSubscription subscription,
                 short wombatStatus,
                 int platformError,
                 String subject);

    void onMsg (MamaBasicSubscription subscription, MamaMsg msg, String topic);

    void onDestroy(MamaBasicSubscription subscription);
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
