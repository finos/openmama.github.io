---
title: Wombat::MamdaQuoteListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteListener



 [More...](#detailed-description)


`#include <MamdaQuoteListener.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html), [Wombat::MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html), [Wombat::MamdaQuoteUpdate](classWombat_1_1MamdaQuoteUpdate.html), [Wombat::MamdaQuoteGap](classWombat_1_1MamdaQuoteGap.html), [Wombat::MamdaQuoteClosing](classWombat_1_1MamdaQuoteClosing.html), [Wombat::MamdaQuoteOutOfSequence](classWombat_1_1MamdaQuoteOutOfSequence.html), [Wombat::MamdaQuotePossiblyDuplicate](classWombat_1_1MamdaQuotePossiblyDuplicate.html), [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html), [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html#function-mamdaquotelistener)**() |
| virtual | **[~MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html#function-~mamdaquotelistener)**() |
| void | **[addHandler](classWombat_1_1MamdaQuoteListener.html#function-addhandler)**([MamdaQuoteHandler](classWombat_1_1MamdaQuoteHandler.html) * handler) |
| void | **[processPosDupAndOutOfSeqAsTransient](classWombat_1_1MamdaQuoteListener.html#function-processposdupandoutofseqastransient)**(bool tf) |
| void | **[resolvePossiblyDuplicate](classWombat_1_1MamdaQuoteListener.html#function-resolvepossiblyduplicate)**(bool tf) |
| void | **[usePosDupAndOutOfSeqHandlers](classWombat_1_1MamdaQuoteListener.html#function-useposdupandoutofseqhandlers)**(bool tf) |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaQuoteListener.html#function-getsymbol)**() const |
| virtual const char * | **[getPartId](classWombat_1_1MamdaQuoteListener.html#function-getpartid)**() const |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaQuoteListener.html#function-getsrctime)**() const |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaQuoteListener.html#function-getactivitytime)**() const |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaQuoteListener.html#function-getlinetime)**() const |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaQuoteListener.html#function-getsendtime)**() const |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaQuoteListener.html#function-getmsgqual)**() const |
| const char * | **[getPubId](classWombat_1_1MamdaQuoteListener.html#function-getpubid)**() const |
| virtual const MamaPrice & | **[getBidPrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprice)**() const |
| virtual mama_quantity_t | **[getBidSize](classWombat_1_1MamdaQuoteListener.html#function-getbidsize)**() const |
| virtual mama_quantity_t | **[getBidDepth](classWombat_1_1MamdaQuoteListener.html#function-getbiddepth)**() const |
| virtual const char * | **[getBidPartId](classWombat_1_1MamdaQuoteListener.html#function-getbidpartid)**() const |
| virtual const MamaPrice & | **[getBidClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getbidcloseprice)**() const |
| virtual const MamaDateTime & | **[getBidCloseDate](classWombat_1_1MamdaQuoteListener.html#function-getbidclosedate)**() const |
| virtual const MamaPrice & | **[getBidPrevClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprevcloseprice)**() const |
| virtual const MamaDateTime & | **[getBidPrevCloseDate](classWombat_1_1MamdaQuoteListener.html#function-getbidprevclosedate)**() const |
| virtual const MamaPrice & | **[getBidHigh](classWombat_1_1MamdaQuoteListener.html#function-getbidhigh)**() const |
| virtual const MamaPrice & | **[getBidLow](classWombat_1_1MamdaQuoteListener.html#function-getbidlow)**() const |
| virtual const MamaPrice & | **[getAskPrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprice)**() const |
| virtual mama_quantity_t | **[getAskSize](classWombat_1_1MamdaQuoteListener.html#function-getasksize)**() const |
| virtual mama_quantity_t | **[getAskDepth](classWombat_1_1MamdaQuoteListener.html#function-getaskdepth)**() const |
| virtual const char * | **[getAskPartId](classWombat_1_1MamdaQuoteListener.html#function-getaskpartid)**() const |
| virtual const MamaPrice & | **[getAskClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getaskcloseprice)**() const |
| virtual const MamaDateTime & | **[getAskCloseDate](classWombat_1_1MamdaQuoteListener.html#function-getaskclosedate)**() const |
| virtual const MamaPrice & | **[getAskPrevClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprevcloseprice)**() const |
| virtual const MamaDateTime & | **[getAskPrevCloseDate](classWombat_1_1MamdaQuoteListener.html#function-getaskprevclosedate)**() const |
| virtual const MamaPrice & | **[getAskHigh](classWombat_1_1MamdaQuoteListener.html#function-getaskhigh)**() const |
| virtual const MamaPrice & | **[getAskLow](classWombat_1_1MamdaQuoteListener.html#function-getasklow)**() const |
| virtual const MamaPrice & | **[getQuoteMidPrice](classWombat_1_1MamdaQuoteListener.html#function-getquotemidprice)**() const |
| virtual mama_u32_t | **[getQuoteCount](classWombat_1_1MamdaQuoteListener.html#function-getquotecount)**() const |
| virtual const char * | **[getQuoteQualStr](classWombat_1_1MamdaQuoteListener.html#function-getquotequalstr)**() const |
| virtual const char * | **[getQuoteQualNative](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnative)**() const |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaQuoteListener.html#function-geteventseqnum)**() const |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaQuoteListener.html#function-geteventtime)**() const |
| virtual const MamaDateTime & | **[getQuoteDate](classWombat_1_1MamdaQuoteListener.html#function-getquotedate)**() const |
| virtual mama_seqnum_t | **[getBeginGapSeqNum](classWombat_1_1MamdaQuoteListener.html#function-getbegingapseqnum)**() const |
| virtual mama_seqnum_t | **[getEndGapSeqNum](classWombat_1_1MamdaQuoteListener.html#function-getendgapseqnum)**() const |
| virtual char | **[getShortSaleBidTick](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtick)**() const |
| virtual const MamaDateTime & | **[getAskTime](classWombat_1_1MamdaQuoteListener.html#function-getasktime)**() const |
| virtual const MamaDateTime & | **[getBidTime](classWombat_1_1MamdaQuoteListener.html#function-getbidtime)**() const |
| virtual const char * | **[getAskIndicator](classWombat_1_1MamdaQuoteListener.html#function-getaskindicator)**() const |
| virtual const char * | **[getBidIndicator](classWombat_1_1MamdaQuoteListener.html#function-getbidindicator)**() const |
| virtual mama_u32_t | **[getAskUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecount)**() const |
| virtual mama_u32_t | **[getBidUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecount)**() const |
| virtual double | **[getAskYield](classWombat_1_1MamdaQuoteListener.html#function-getaskyield)**() const |
| virtual double | **[getBidYield](classWombat_1_1MamdaQuoteListener.html#function-getbidyield)**() const |
| virtual const char * | **[getAskSizesList](classWombat_1_1MamdaQuoteListener.html#function-getasksizeslist)**() const |
| virtual const char * | **[getBidSizesList](classWombat_1_1MamdaQuoteListener.html#function-getbidsizeslist)**() const |
| virtual char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreaker)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsymbolfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsrctimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getlinetimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsendtimefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getpubidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaQuoteListener.html#function-getmsgqualfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubIdModified](classWombat_1_1MamdaQuoteListener.html#function-getpubidmodified)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidDepthFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbiddepthfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidclosepricefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidCloseDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidclosedatefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPrevClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidprevclosepricefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPrevCloseDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidprevclosedatefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidHighFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidhighfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidLowFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidlowfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskDepthFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskdepthfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskclosepricefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskCloseDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskclosedatefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPrevClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskprevclosepricefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPrevCloseDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskprevclosedatefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskHighFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskhighfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskLowFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasklowfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteMidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotemidpricefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotecountfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualStrFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalstrfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualNativeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnativefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-geteventseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-geteventtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotedatefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBeginGapSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbegingapseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEndGapSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-getendgapseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleBidTickFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtickfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasktimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskindicatorfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidindicatorfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecountfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecountfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskyieldfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidyieldfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizesListFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizeslistfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizesListFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizeslistfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreakerfieldstate)**() const |
| virtual void | **[onMsg](classWombat_1_1MamdaQuoteListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |
| void | **[assertEqual](classWombat_1_1MamdaQuoteListener.html#function-assertequal)**([MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) * listener) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

**Public Functions inherited from [Wombat::MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html#function-~mamdaquoterecap)**() |

**Public Functions inherited from [Wombat::MamdaQuoteUpdate](classWombat_1_1MamdaQuoteUpdate.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaQuoteUpdate](classWombat_1_1MamdaQuoteUpdate.html#function-~mamdaquoteupdate)**() |

**Public Functions inherited from [Wombat::MamdaQuoteGap](classWombat_1_1MamdaQuoteGap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaQuoteGap](classWombat_1_1MamdaQuoteGap.html#function-~mamdaquotegap)**() |

**Public Functions inherited from [Wombat::MamdaQuoteClosing](classWombat_1_1MamdaQuoteClosing.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaQuoteClosing](classWombat_1_1MamdaQuoteClosing.html#function-~mamdaquoteclosing)**() |

**Public Functions inherited from [Wombat::MamdaQuoteOutOfSequence](classWombat_1_1MamdaQuoteOutOfSequence.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaQuoteOutOfSequence](classWombat_1_1MamdaQuoteOutOfSequence.html#function-~mamdaquoteoutofsequence)**() |

**Public Functions inherited from [Wombat::MamdaQuotePossiblyDuplicate](classWombat_1_1MamdaQuotePossiblyDuplicate.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaQuotePossiblyDuplicate](classWombat_1_1MamdaQuotePossiblyDuplicate.html#function-~mamdaquotepossiblyduplicate)**() |

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |


## Detailed Description

```cpp
class Wombat::MamdaQuoteListener;
```


[MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) is a class that specializes in handling quote updates. Developers provide their own implementation of the [MamdaQuoteHandler](classWombat_1_1MamdaQuoteHandler.html) interface and will be delivered notifications for quotes and quote closing prices. An obvious application for this MAMDA class is any kind of quote tick capture application.

Note: The [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) class caches quote-related field values. Among other reasons, caching of these fields makes it possible to provide complete quote-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields.

[MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) should initialize the [MamdaQuoteFields](classWombat_1_1MamdaQuoteFields.html) class prior to receiving the first message by calling MamdaQuoteFields::setDictionary() with a valid dictionary object which contains Quote related fields. 

## Public Functions Documentation

### function MamdaQuoteListener

```cpp
MamdaQuoteListener()
```


### function ~MamdaQuoteListener

```cpp
virtual ~MamdaQuoteListener()
```


### function addHandler

```cpp
void addHandler(
    MamdaQuoteHandler * handler
)
```


### function processPosDupAndOutOfSeqAsTransient

```cpp
void processPosDupAndOutOfSeqAsTransient(
    bool tf
)
```


### function resolvePossiblyDuplicate

```cpp
void resolvePossiblyDuplicate(
    bool tf
)
```


### function usePosDupAndOutOfSeqHandlers

```cpp
void usePosDupAndOutOfSeqHandlers(
    bool tf
)
```


### function getSymbol

```cpp
virtual const char * getSymbol() const
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSymbol](classWombat_1_1MamdaBasicEvent.html#function-getsymbol)


Get the instruments string symbol.


### function getPartId

```cpp
virtual const char * getPartId() const
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [Wombat::MamdaBasicEvent::getPartId](classWombat_1_1MamdaBasicEvent.html#function-getpartid)


Get the participant identifier.


### function getSrcTime

```cpp
virtual const MamaDateTime & getSrcTime() const
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](classWombat_1_1MamdaBasicEvent.html#function-getsrctime)


Get the source time.


### function getActivityTime

```cpp
virtual const MamaDateTime & getActivityTime() const
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](classWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


Get the activity time.


### function getLineTime

```cpp
virtual const MamaDateTime & getLineTime() const
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [Wombat::MamdaBasicEvent::getLineTime](classWombat_1_1MamdaBasicEvent.html#function-getlinetime)


Get the line time.


### function getSendTime

```cpp
virtual const MamaDateTime & getSendTime() const
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplements**: [Wombat::MamdaBasicEvent::getSendTime](classWombat_1_1MamdaBasicEvent.html#function-getsendtime)


Get the send time.


### function getMsgQual

```cpp
virtual const MamaMsgQual & getMsgQual() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)


Get the message qualifier.


### function getPubId

```cpp
const char * getPubId() const
```


### function getBidPrice

```cpp
virtual const MamaPrice & getBidPrice() const
```


**Return**: Bid price. The highest price that the representative party/group is willing to pay to buy the security. For most feeds, this size is represented in round lots. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getBidPrice](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidprice)


Get the quote bid price.


### function getBidSize

```cpp
virtual mama_quantity_t getBidSize() const
```


**Return**: Total share size available for the current bid price. Note: many feeds provide this size in terms of round lots. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getBidSize](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidsize)


Get the quote bid size.


### function getBidDepth

```cpp
virtual mama_quantity_t getBidDepth() const
```


**Return**: The total size available at the current best bid price. Only supported by some exchanges. The total size may differ from the "best" size in that the total may be aggregated from multiple sources. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getBidDepth](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbiddepth)


Get the quote bid depth.


### function getBidPartId

```cpp
virtual const char * getBidPartId() const
```


**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the bid price field. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getBidPartId](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidpartid)


Get the quote bid participant identifier.`


### function getBidClosePrice

```cpp
virtual const MamaPrice & getBidClosePrice() const
```


**Return**: Today's closing bid price, after the market has closed and the stock has traded today. 

**Reimplements**: [Wombat::MamdaQuoteClosing::getBidClosePrice](classWombat_1_1MamdaQuoteClosing.html#function-getbidcloseprice)


Get the closing bid price.


### function getBidCloseDate

```cpp
virtual const MamaDateTime & getBidCloseDate() const
```


**Return**: Date of the BidClosePrice, if that value is non-zero. This is always the most recent day that the market was open, including today. This is different to BidPrevCloseDate. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidCloseDate](classWombat_1_1MamdaQuoteRecap.html#function-getbidclosedate)


Get the bid closing date.


### function getBidPrevClosePrice

```cpp
virtual const MamaPrice & getBidPrevClosePrice() const
```


**Return**: The previous closing price, prior to any trade today. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidPrevClosePrice](classWombat_1_1MamdaQuoteRecap.html#function-getbidprevcloseprice)


Get the previous bid closing price.


### function getBidPrevCloseDate

```cpp
virtual const MamaDateTime & getBidPrevCloseDate() const
```


**Return**: Date of the previous closing price, prior to any trade today. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidPrevCloseDate](classWombat_1_1MamdaQuoteRecap.html#function-getbidprevclosedate)


Get the previous bid closing date.


### function getBidHigh

```cpp
virtual const MamaPrice & getBidHigh() const
```


**Return**: High bid price. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidHigh](classWombat_1_1MamdaQuoteRecap.html#function-getbidhigh)


Get the high bid price for the day.


### function getBidLow

```cpp
virtual const MamaPrice & getBidLow() const
```


**Return**: Low bid price. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidLow](classWombat_1_1MamdaQuoteRecap.html#function-getbidlow)


Get the low bid price for the day.


### function getAskPrice

```cpp
virtual const MamaPrice & getAskPrice() const
```


**Return**: Ask price. The lowest price that the representative party/group is willing to take to sell the security. For most feeds, this size is represented in round lots. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getAskPrice](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskprice)


Get the quote ask price.


### function getAskSize

```cpp
virtual mama_quantity_t getAskSize() const
```


**Return**: Total share size available for the current ask price. Note: many feeds provide this size in terms of round lots. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getAskSize](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getasksize)


Get the quote ask size.


### function getAskDepth

```cpp
virtual mama_quantity_t getAskDepth() const
```


**Return**: The total size available at the current best ask price. Only supported by some exchanges. The total size may differ from the "best" size in that the total may be aggregated from multiple sources. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getAskDepth](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskdepth)


Get the quote ask depth.


### function getAskPartId

```cpp
virtual const char * getAskPartId() const
```


**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the ask price field. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getAskPartId](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskpartid)


Get the quote ask participant identifier.


### function getAskClosePrice

```cpp
virtual const MamaPrice & getAskClosePrice() const
```


**Return**: Today's closing ask price, after the market has closed and the stock has traded today. 

**Reimplements**: [Wombat::MamdaQuoteClosing::getAskClosePrice](classWombat_1_1MamdaQuoteClosing.html#function-getaskcloseprice)


Get the closing ask price.


### function getAskCloseDate

```cpp
virtual const MamaDateTime & getAskCloseDate() const
```


**Return**: Date of the AskClosePrice, if that value is non-zero. This is always the most recent day that the market was open, including today. This is different to AskPrevCloseDate. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskCloseDate](classWombat_1_1MamdaQuoteRecap.html#function-getaskclosedate)


Get the ask quote closing date.


### function getAskPrevClosePrice

```cpp
virtual const MamaPrice & getAskPrevClosePrice() const
```


**Return**: The previous closing price, prior to any trade today. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskPrevClosePrice](classWombat_1_1MamdaQuoteRecap.html#function-getaskprevcloseprice)


Get the previous ask closing price.


### function getAskPrevCloseDate

```cpp
virtual const MamaDateTime & getAskPrevCloseDate() const
```


**Return**: Date of previous closing price, prior to any trade today. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskPrevCloseDate](classWombat_1_1MamdaQuoteRecap.html#function-getaskprevclosedate)


Get the previous ask closing date.


### function getAskHigh

```cpp
virtual const MamaPrice & getAskHigh() const
```


**Return**: High ask price. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskHigh](classWombat_1_1MamdaQuoteRecap.html#function-getaskhigh)


Get the high ask price for the day.


### function getAskLow

```cpp
virtual const MamaPrice & getAskLow() const
```


**Return**: Low ask price. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskLow](classWombat_1_1MamdaQuoteRecap.html#function-getasklow)


Get the low ask price for the day.


### function getQuoteMidPrice

```cpp
virtual const MamaPrice & getQuoteMidPrice() const
```


**Return**: The mid price of the current quote. Usually, this is the average of the bid and ask prices, but some exchanges provide this field explicitly (e.g. LSE). 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getQuoteMidPrice](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getquotemidprice)


Get the quote mid price.


### function getQuoteCount

```cpp
virtual mama_u32_t getQuoteCount() const
```


**Return**: The number of quotes generated for this security during the current trading session. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteCount](classWombat_1_1MamdaQuoteRecap.html#function-getquotecount)


Get the quote count.


### function getQuoteQualStr

```cpp
virtual const char * getQuoteQualStr() const
```


**Return**: A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character.

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getQuoteQualStr](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getquotequalstr)


Get the quote qualifiers.


| **Value** | **Meaning** |
|  -------- | -------- |
| Normal  | Regular quote; no special condition   |
| DepthAsk  | Depth on ask side   |
| DepthBid  | Depth on bid side   |
| Fast  | Fast trading   |
| NonFirm  | Non-firm quote   |
| Rotation  | ?   |
| Auto  | Automatic trade   |
| Inactive  | ?   |
| SpecBid  | Specialist bid   |
| SpecAsk  | Specialist ask   |
| Locked  | Locked market - Bid is equal to Ask for OTCBB issues (Recaps only)   |
| Crossed  | Crossed market - Bid is greater than Ask for OTCBB (Recaps only)   |
| Synd  | Syndicate bid   |
| PreSynd  | Pre-syndicate bid   |
| Penalty  | Penalty bid   |
| UnsolBid  | Unsolicited bid   |
| UnsolAsk  | Unsolicited ask   |
| UnsolQuote  | Unsolicited quote   |
| Firm  | ?   |
| RangeInd  | ?   |
| XpressBid  | NYSE LiquidityQuote Xpress bid indicator   |
| XpressAsk  | NYSE LiquidityQuote Xpress ask indicator   |


### function getQuoteQualNative

```cpp
virtual const char * getQuoteQualNative() const
```


**See**: getQuoteQual. 

**Return**: Native quote qualifier (a.k.a. "quote condition"). Feed-specific quote qualifier code(s). This field is provided primarily for completeness and/or troubleshooting. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQualNative](classWombat_1_1MamdaQuoteRecap.html#function-getquotequalnative)


Get the native feed quote qualifier. 


### function getEventSeqNum

```cpp
virtual mama_seqnum_t getEventSeqNum() const
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


Get the event sequence number.


### function getEventTime

```cpp
virtual const MamaDateTime & getEventTime() const
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](classWombat_1_1MamdaBasicEvent.html#function-geteventtime)


Get the event time.


### function getQuoteDate

```cpp
virtual const MamaDateTime & getQuoteDate() const
```


**Return**: The quote date. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteDate](classWombat_1_1MamdaQuoteRecap.html#function-getquotedate)


Get the quote date.


### function getBeginGapSeqNum

```cpp
virtual mama_seqnum_t getBeginGapSeqNum() const
```


**Return**: The start gap sequence number. 

**Reimplements**: [Wombat::MamdaQuoteGap::getBeginGapSeqNum](classWombat_1_1MamdaQuoteGap.html#function-getbegingapseqnum)


The starting sequence number of detected missing quotes based on the quote count.


### function getEndGapSeqNum

```cpp
virtual mama_seqnum_t getEndGapSeqNum() const
```


**Return**: The end gap sequence number. 

**Reimplements**: [Wombat::MamdaQuoteGap::getEndGapSeqNum](classWombat_1_1MamdaQuoteGap.html#function-getendgapseqnum)


The end sequence number of detected missing quotes based on the quote count.


### function getShortSaleBidTick

```cpp
virtual char getShortSaleBidTick() const
```


**Return**: The tick bid indicator. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleBidTick](classWombat_1_1MamdaQuoteRecap.html#function-getshortsalebidtick)


NASDAQ Bid Tick Indicator for Short Sale Rule Compliance. National Bid Tick Indicator based on changes to the bid price of the National Best Bid or Offer (National BBO).


| **Value** | **Meaning** |
|  -------- | -------- |
| U  | Up Tick. The current Best Bid Price price is higher than the previous Best Bid Price for the given NNM security.   |
| D  | Down Tick. The current Best Bid Price price is lower than the previous Best Bid Price for the given NNM security.   |
| N  | No Tick. The NASD Short Sale Rule does not apply to issue (i.e. NASDAQ SmallCap listed security).   |
| Z  | Unset - default value within the API   |


### function getAskTime

```cpp
virtual const MamaDateTime & getAskTime() const
```


**Return**: The quote ask time. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskTime](classWombat_1_1MamdaQuoteRecap.html#function-getasktime)


Get the quote ask time.


### function getBidTime

```cpp
virtual const MamaDateTime & getBidTime() const
```


**Return**: The quote bid time. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidTime](classWombat_1_1MamdaQuoteRecap.html#function-getbidtime)


Get the quote bid time.


### function getAskIndicator

```cpp
virtual const char * getAskIndicator() const
```


**Return**: The quote ask indicator. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskIndicator](classWombat_1_1MamdaQuoteRecap.html#function-getaskindicator)


Get the quote ask indicator.


### function getBidIndicator

```cpp
virtual const char * getBidIndicator() const
```


**Return**: The quote bid indicator. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidIndicator](classWombat_1_1MamdaQuoteRecap.html#function-getbidindicator)


Get the quote bid indicator.


### function getAskUpdateCount

```cpp
virtual mama_u32_t getAskUpdateCount() const
```


**Return**: The quote ask update count. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskUpdateCount](classWombat_1_1MamdaQuoteRecap.html#function-getaskupdatecount)


Get the quote ask update count.


### function getBidUpdateCount

```cpp
virtual mama_u32_t getBidUpdateCount() const
```


**Return**: The quote bid update count. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidUpdateCount](classWombat_1_1MamdaQuoteRecap.html#function-getbidupdatecount)


Get the quote bid update count.


### function getAskYield

```cpp
virtual double getAskYield() const
```


**Return**: The quote ask yield. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskYield](classWombat_1_1MamdaQuoteRecap.html#function-getaskyield)


Get the quote ask yield.


### function getBidYield

```cpp
virtual double getBidYield() const
```


**Return**: The quote bid yield. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidYield](classWombat_1_1MamdaQuoteRecap.html#function-getbidyield)


Get the quote bid yield.


### function getAskSizesList

```cpp
virtual const char * getAskSizesList() const
```


**Return**: The ask sizes list. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskSizesList](classWombat_1_1MamdaQuoteRecap.html#function-getasksizeslist)


Get the ask sizes list.


### function getBidSizesList

```cpp
virtual const char * getBidSizesList() const
```


**Return**: The bid sizes list. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidSizesList](classWombat_1_1MamdaQuoteRecap.html#function-getbidsizeslist)


Get the bid sizes list.


### function getShortSaleCircuitBreaker

```cpp
virtual char getShortSaleCircuitBreaker() const
```


**Return**: ShortSaleCircuitBreaker 

* return values: 
* Blank: Short Sale Restriction Not in Effect. 
* A: Short Sale Restriction Activiated. 
* C: Short Sale Restriction Continued. 
* D: Sale Restriction Deactivated. 
* E: Sale Restriction in Effect. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleCircuitBreaker](classWombat_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreaker)


get the ShortSaleCircuitBreaker 


### function getSymbolFieldState

```cpp
virtual MamdaFieldState getSymbolFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSymbolFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsymbolfieldstate)


Get the string symbol field state


### function getBidPriceFieldState

```cpp
virtual MamdaFieldState getBidPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getBidPriceFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidpricefieldstate)


Get the quote bid yield fieldState


### function getBidSizeFieldState

```cpp
virtual MamdaFieldState getBidSizeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getBidSizeFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidsizefieldstate)


Get the quote bid yield fieldState


### function getPartIdFieldState

```cpp
virtual MamdaFieldState getPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getPartIdFieldState](classWombat_1_1MamdaBasicEvent.html#function-getpartidfieldstate)


Get the participant identifier field state.


### function getSrcTimeFieldState

```cpp
virtual MamdaFieldState getSrcTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


Get the source time field state


### function getActivityTimeFieldState

```cpp
virtual MamdaFieldState getActivityTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


Get the activity time field state


### function getLineTimeFieldState

```cpp
virtual MamdaFieldState getLineTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getLineTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getlinetimefieldstate)


Get the line time of the update.


### function getSendTimeFieldState

```cpp
virtual MamdaFieldState getSendTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSendTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsendtimefieldstate)


Get the send time field state


### function getPubIdFieldState

```cpp
MamdaFieldState getPubIdFieldState() const
```


### function getMsgQualFieldState

```cpp
virtual MamdaFieldState getMsgQualFieldState() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)


Get the message qualifier field state.


### function getPubIdModified

```cpp
MamdaFieldState getPubIdModified() const
```


### function getBidDepthFieldState

```cpp
virtual MamdaFieldState getBidDepthFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getBidDepthFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbiddepthfieldstate)


Get the quote bid yield fieldState


### function getBidPartIdFieldState

```cpp
virtual MamdaFieldState getBidPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getBidPartIdFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidpartidfieldstate)


Get the quote bid yield fieldState


### function getBidClosePriceFieldState

```cpp
virtual MamdaFieldState getBidClosePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteClosing::getBidClosePriceFieldState](classWombat_1_1MamdaQuoteClosing.html#function-getbidclosepricefieldstate)


Get the closing bid price field state


### function getBidCloseDateFieldState

```cpp
MamdaFieldState getBidCloseDateFieldState() const
```


### function getBidPrevClosePriceFieldState

```cpp
MamdaFieldState getBidPrevClosePriceFieldState() const
```


### function getBidPrevCloseDateFieldState

```cpp
MamdaFieldState getBidPrevCloseDateFieldState() const
```


### function getBidHighFieldState

```cpp
MamdaFieldState getBidHighFieldState() const
```


### function getBidLowFieldState

```cpp
MamdaFieldState getBidLowFieldState() const
```


### function getAskPriceFieldState

```cpp
virtual MamdaFieldState getAskPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getAskPriceFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskpricefieldstate)


Get the quote bid yield fieldState


### function getAskSizeFieldState

```cpp
virtual MamdaFieldState getAskSizeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getAskSizeFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getasksizefieldstate)


Get the quote bid yield fieldState


### function getAskDepthFieldState

```cpp
virtual MamdaFieldState getAskDepthFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getAskDepthFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskdepthfieldstate)


Get the quote bid yield fieldState


### function getAskPartIdFieldState

```cpp
virtual MamdaFieldState getAskPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getAskPartIdFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskpartidfieldstate)


Get the quote bid yield fieldState


### function getAskClosePriceFieldState

```cpp
virtual MamdaFieldState getAskClosePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteClosing::getAskClosePriceFieldState](classWombat_1_1MamdaQuoteClosing.html#function-getaskclosepricefieldstate)


Get the closing bid price field state


### function getAskCloseDateFieldState

```cpp
MamdaFieldState getAskCloseDateFieldState() const
```


### function getAskPrevClosePriceFieldState

```cpp
MamdaFieldState getAskPrevClosePriceFieldState() const
```


### function getAskPrevCloseDateFieldState

```cpp
MamdaFieldState getAskPrevCloseDateFieldState() const
```


### function getAskHighFieldState

```cpp
MamdaFieldState getAskHighFieldState() const
```


### function getAskLowFieldState

```cpp
MamdaFieldState getAskLowFieldState() const
```


### function getQuoteMidPriceFieldState

```cpp
virtual MamdaFieldState getQuoteMidPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getQuoteMidPriceFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getquotemidpricefieldstate)


Get the quote bid yield fieldState


### function getQuoteCountFieldState

```cpp
MamdaFieldState getQuoteCountFieldState() const
```


### function getQuoteQualStrFieldState

```cpp
virtual MamdaFieldState getQuoteQualStrFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteOutOfSequence::getQuoteQualStrFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getquotequalstrfieldstate)


Get the quote bid yield fieldState


### function getQuoteQualNativeFieldState

```cpp
virtual MamdaFieldState getQuoteQualNativeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQualNativeFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getquotequalnativefieldstate)


Get the native feed quote qualifier fieldState


### function getEventSeqNumFieldState

```cpp
virtual MamdaFieldState getEventSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


Get the event sequence number field state. 


### function getEventTimeFieldState

```cpp
virtual MamdaFieldState getEventTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


Get the event time field state.


### function getQuoteDateFieldState

```cpp
virtual MamdaFieldState getQuoteDateFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteDateFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getquotedatefieldstate)


Get the quote date fieldState


### function getBeginGapSeqNumFieldState

```cpp
virtual MamdaFieldState getBeginGapSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteGap::getBeginGapSeqNumFieldState](classWombat_1_1MamdaQuoteGap.html#function-getbegingapseqnumfieldstate)


Get the quote bid yield fieldState


### function getEndGapSeqNumFieldState

```cpp
virtual MamdaFieldState getEndGapSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteGap::getEndGapSeqNumFieldState](classWombat_1_1MamdaQuoteGap.html#function-getendgapseqnumfieldstate)


Get the quote bid yield fieldState


### function getShortSaleBidTickFieldState

```cpp
virtual MamdaFieldState getShortSaleBidTickFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleBidTickFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getshortsalebidtickfieldstate)


Get the short sale bid tick fieldState


### function getAskTimeFieldState

```cpp
virtual MamdaFieldState getAskTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskTimeFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getasktimefieldstate)


Get the quote ask time fieldState


### function getBidTimeFieldState

```cpp
virtual MamdaFieldState getBidTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidTimeFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getbidtimefieldstate)


Get the quote bid time fieldState


### function getAskIndicatorFieldState

```cpp
virtual MamdaFieldState getAskIndicatorFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskIndicatorFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getaskindicatorfieldstate)


Get the quote ask indicator fieldState


### function getBidIndicatorFieldState

```cpp
virtual MamdaFieldState getBidIndicatorFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidIndicatorFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getbidindicatorfieldstate)


Get the quote bid indicator fieldState


### function getAskUpdateCountFieldState

```cpp
virtual MamdaFieldState getAskUpdateCountFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskUpdateCountFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getaskupdatecountfieldstate)


Get the quote ask update count fieldState


### function getBidUpdateCountFieldState

```cpp
virtual MamdaFieldState getBidUpdateCountFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidUpdateCountFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getbidupdatecountfieldstate)


Get the quote bid update count fieldState


### function getAskYieldFieldState

```cpp
virtual MamdaFieldState getAskYieldFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskYieldFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getaskyieldfieldstate)


Get the quote ask yield fieldState


### function getBidYieldFieldState

```cpp
virtual MamdaFieldState getBidYieldFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidYieldFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getbidyieldfieldstate)


Get the quote bid yield fieldState


### function getAskSizesListFieldState

```cpp
virtual MamdaFieldState getAskSizesListFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskSizesListFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getasksizeslistfieldstate)


Get the ask sizes list fieldState


### function getBidSizesListFieldState

```cpp
virtual MamdaFieldState getBidSizesListFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidSizesListFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getbidsizeslistfieldstate)


Get the bid sizes list fieldState


### function getShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getShortSaleCircuitBreakerFieldState() const
```


**Return**: The ShortSaleCircuitBreaker Field State. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
)
```


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


### function assertEqual

```cpp
void assertEqual(
    MamdaQuoteListener * listener
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100