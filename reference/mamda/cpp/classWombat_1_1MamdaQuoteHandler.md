---
title: Wombat::MamdaQuoteHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteHandler



 [More...](#detailed-description)


`#include <MamdaQuoteHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onQuoteRecap](classWombat_1_1MamdaQuoteHandler.html#function-onquoterecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) & listener, const MamaMsg & msg, const [MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html) & recap) =0 |
| virtual void | **[onQuoteUpdate](classWombat_1_1MamdaQuoteHandler.html#function-onquoteupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) & listener, const MamaMsg & msg, const [MamdaQuoteUpdate](classWombat_1_1MamdaQuoteUpdate.html) & quote, const [MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html) & recap) =0 |
| virtual void | **[onQuoteGap](classWombat_1_1MamdaQuoteHandler.html#function-onquotegap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) & listener, const MamaMsg & msg, const [MamdaQuoteGap](classWombat_1_1MamdaQuoteGap.html) & event, const [MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html) & recap) =0 |
| virtual void | **[onQuoteClosing](classWombat_1_1MamdaQuoteHandler.html#function-onquoteclosing)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) & listener, const MamaMsg & msg, const [MamdaQuoteClosing](classWombat_1_1MamdaQuoteClosing.html) & event, const [MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html) & recap) =0 |
| virtual void | **[onQuoteOutOfSequence](classWombat_1_1MamdaQuoteHandler.html#function-onquoteoutofsequence)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) & listener, const MamaMsg & msg, const [MamdaQuoteOutOfSequence](classWombat_1_1MamdaQuoteOutOfSequence.html) & event, const [MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html) & recap) =0 |
| virtual void | **[onQuotePossiblyDuplicate](classWombat_1_1MamdaQuoteHandler.html#function-onquotepossiblyduplicate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) & listener, const MamaMsg & msg, const [MamdaQuotePossiblyDuplicate](classWombat_1_1MamdaQuotePossiblyDuplicate.html) & event, const [MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html) & recap) =0 |
| virtual | **[~MamdaQuoteHandler](classWombat_1_1MamdaQuoteHandler.html#function-~mamdaquotehandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaQuoteHandler;
```


[MamdaQuoteHandler](classWombat_1_1MamdaQuoteHandler.html) is an interface for applications that want to have an easy way to handle quote updates. The interface defines callback methods for different types of quote-related events: quotes and closing-quote updates. 

## Public Functions Documentation

### function onQuoteRecap

```cpp
virtual void onQuoteRecap(
    MamdaSubscription * subscription,
    MamdaQuoteListener & listener,
    const MamaMsg & msg,
    const MamdaQuoteRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **recap** Access to the full quote recap details. 


Method invoked when the current last-quote information for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onQuoteUpdate

```cpp
virtual void onQuoteUpdate(
    MamdaSubscription * subscription,
    MamdaQuoteListener & listener,
    const MamaMsg & msg,
    const MamdaQuoteUpdate & quote,
    const MamdaQuoteRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **quote** Access to the quote update details. 
  * **recap** Access to the full quote details. 


Method invoked when a quote is reported.


### function onQuoteGap

```cpp
virtual void onQuoteGap(
    MamdaSubscription * subscription,
    MamdaQuoteListener & listener,
    const MamaMsg & msg,
    const MamdaQuoteGap & event,
    const MamdaQuoteRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the quote gap event details. 
  * **recap** Access to the full quote details. 


Method invoked when a gap in quote reports is discovered.


### function onQuoteClosing

```cpp
virtual void onQuoteClosing(
    MamdaSubscription * subscription,
    MamdaQuoteListener & listener,
    const MamaMsg & msg,
    const MamdaQuoteClosing & event,
    const MamdaQuoteRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the closing quote details. 
  * **recap** Access to the full quote details. 


Method invoked for a closing report.


### function onQuoteOutOfSequence

```cpp
virtual void onQuoteOutOfSequence(
    MamdaSubscription * subscription,
    MamdaQuoteListener & listener,
    const MamaMsg & msg,
    const MamdaQuoteOutOfSequence & event,
    const MamdaQuoteRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the callback. 
  * **listener** The quote listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** The possibly out of sequence event object. 
  * **recap** The recap object. 


Method invoked for a message marked as out of sequence. Listener must be configured to check the Msg Qualifier, i.e., call `setControlProcessingByMsgQual()` on listener passing a value of true.


### function onQuotePossiblyDuplicate

```cpp
virtual void onQuotePossiblyDuplicate(
    MamdaSubscription * subscription,
    MamdaQuoteListener & listener,
    const MamaMsg & msg,
    const MamdaQuotePossiblyDuplicate & event,
    const MamdaQuoteRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. 
  * **listener** The quote listener. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** The possibly duplicate event object. 
  * **recap** The recap object. 


Method invoked for a message which is marked as possibly duplicate Listener must be configured to check the Msg Qualifier, i.e., call `setControlProcessingByMsgQual` on listener passing a value of true.


### function ~MamdaQuoteHandler

```cpp
inline virtual ~MamdaQuoteHandler()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100