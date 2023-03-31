---
title: Wombat::MamdaQuoteHandler
summary: MamdaQuoteHandler is an interface for applications that want to have an easy way to handle quote updates. The interface defines callback methods for different types of quote-related events: quotes and closing-quote updates. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteHandler



[MamdaQuoteHandler]() is an interface for applications that want to have an easy way to handle quote updates. The interface defines callback methods for different types of quote-related events: quotes and closing-quote updates. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onQuoteRecap](interfaceWombat_1_1MamdaQuoteHandler.html#function-onquoterecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) recap)<br>Method invoked when the current last-quote information for the security is available. The reason for the invocation may be any of the following:  |
| void | **[onQuoteUpdate](interfaceWombat_1_1MamdaQuoteHandler.html#function-onquoteupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteUpdate](interfaceWombat_1_1MamdaQuoteUpdate.html) update, [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) recap)<br>Method invoked when a quote update arrives.  |
| void | **[onQuoteGap](interfaceWombat_1_1MamdaQuoteHandler.html#function-onquotegap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteGap](interfaceWombat_1_1MamdaQuoteGap.html) gap, [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) recap)<br>Method invoked when a gap in quote updates is discovered.  |
| void | **[onQuoteClosing](interfaceWombat_1_1MamdaQuoteHandler.html#function-onquoteclosing)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) listener, MamaMsg msg, [MamdaQuoteClosing](interfaceWombat_1_1MamdaQuoteClosing.html) closingEvent, [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) recap)<br>Method invoked for a quote closing summary.  |

## Public Functions Documentation

### function onQuoteRecap

```csharp
void onQuoteRecap(
    MamdaSubscription subscription,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteRecap recap
)
```

Method invoked when the current last-quote information for the security is available. The reason for the invocation may be any of the following: 

**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) reference.
  * **listener** The [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) reference.
  * **msg** The MamaMsg that triggered this invocation.
  * **recap** Access to the current value of all fields.




* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onQuoteUpdate

```csharp
void onQuoteUpdate(
    MamdaSubscription subscription,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteUpdate update,
    MamdaQuoteRecap recap
)
```

Method invoked when a quote update arrives. 

**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) reference.
  * **listener** The [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) reference.
  * **msg** The MamaMsg that triggered this invocation.
  * **update** The [MamdaQuoteUpdate](interfaceWombat_1_1MamdaQuoteUpdate.html) event.
  * **recap** Access to the current value of all fields.


### function onQuoteGap

```csharp
void onQuoteGap(
    MamdaSubscription subscription,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteGap gap,
    MamdaQuoteRecap recap
)
```

Method invoked when a gap in quote updates is discovered. 

**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) reference.
  * **listener** The [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) reference.
  * **msg** The MamaMsg that triggered this invocation.
  * **gap** The [MamdaQuoteGap](interfaceWombat_1_1MamdaQuoteGap.html) event.
  * **recap** Access to the current value of all fields.


### function onQuoteClosing

```csharp
void onQuoteClosing(
    MamdaSubscription subscription,
    MamdaQuoteListener listener,
    MamaMsg msg,
    MamdaQuoteClosing closingEvent,
    MamdaQuoteRecap recap
)
```

Method invoked for a quote closing summary. 

**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) reference.
  * **listener** The [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) reference.
  * **msg** The MamaMsg that triggered this invocation.
  * **closingEvent** The [MamdaQuoteClosing](interfaceWombat_1_1MamdaQuoteClosing.html) event.
  * **recap** Access to the current value of all fields.


-------------------------------

Updated on 2023-03-31 at 15:30:13 +0100