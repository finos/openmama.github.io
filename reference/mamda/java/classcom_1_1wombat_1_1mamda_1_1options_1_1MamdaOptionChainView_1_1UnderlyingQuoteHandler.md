---
title: com::wombat::mamda::options::MamdaOptionChainView::UnderlyingQuoteHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionChainView::UnderlyingQuoteHandler





Inherits from [com.wombat.mamda.MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onQuoteRecap](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingQuoteHandler.html#function-onquoterecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteUpdate](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingQuoteHandler.html#function-onquoteupdate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html) event, [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteGap](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingQuoteHandler.html#function-onquotegap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html) event, [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteClosing](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingQuoteHandler.html#function-onquoteclosing)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html) event, [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |

## Public Functions Documentation

### function onQuoteRecap

```java
inline void onQuoteRecap(
    MamdaSubscription sub,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteRecap recap
)
```


### function onQuoteUpdate

```java
inline void onQuoteUpdate(
    MamdaSubscription sub,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteUpdate event,
    MamdaQuoteRecap recap
)
```


### function onQuoteGap

```java
inline void onQuoteGap(
    MamdaSubscription sub,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteGap event,
    MamdaQuoteRecap recap
)
```


### function onQuoteClosing

```java
inline void onQuoteClosing(
    MamdaSubscription sub,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteClosing event,
    MamdaQuoteRecap recap
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100