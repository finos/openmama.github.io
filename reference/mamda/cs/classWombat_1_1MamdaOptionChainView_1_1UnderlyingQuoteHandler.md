---
title: Wombat::MamdaOptionChainView::UnderlyingQuoteHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionChainView::UnderlyingQuoteHandler





Inherits from [Wombat.MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onQuoteRecap](classWombat_1_1MamdaOptionChainView_1_1UnderlyingQuoteHandler.html#function-onquoterecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteUpdate](classWombat_1_1MamdaOptionChainView_1_1UnderlyingQuoteHandler.html#function-onquoteupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteUpdate](interfaceWombat_1_1MamdaQuoteUpdate.html) updateEvent, [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteGap](classWombat_1_1MamdaOptionChainView_1_1UnderlyingQuoteHandler.html#function-onquotegap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteGap](interfaceWombat_1_1MamdaQuoteGap.html) gapEvent, [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteClosing](classWombat_1_1MamdaOptionChainView_1_1UnderlyingQuoteHandler.html#function-onquoteclosing)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteClosing](interfaceWombat_1_1MamdaQuoteClosing.html) closingEvent, [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) recap) |

## Public Functions Documentation

### function onQuoteRecap

```csharp
void onQuoteRecap(
    MamdaSubscription sub,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteRecap recap
)
```


### function onQuoteUpdate

```csharp
void onQuoteUpdate(
    MamdaSubscription sub,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteUpdate updateEvent,
    MamdaQuoteRecap recap
)
```


### function onQuoteGap

```csharp
void onQuoteGap(
    MamdaSubscription sub,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteGap gapEvent,
    MamdaQuoteRecap recap
)
```


### function onQuoteClosing

```csharp
void onQuoteClosing(
    MamdaSubscription sub,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteClosing closingEvent,
    MamdaQuoteRecap recap
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100