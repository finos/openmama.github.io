---
title: Wombat::MamdaConcreteQuoteRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaConcreteQuoteRecap





Inherits from [Wombat.MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html), [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaConcreteQuoteRecap](classWombat_1_1MamdaConcreteQuoteRecap.html#function-mamdaconcretequoterecap)**() |
| void | **[clear](classWombat_1_1MamdaConcreteQuoteRecap.html#function-clear)**()<br>Clear the recap data  |
| void | **[setSymbol](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setsymbol)**(string symbol) |
| string | **[getSymbol](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsymbol)**()<br>Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsymbolfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setpartid)**(string partId) |
| string | **[getPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getpartid)**()<br>Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getpartidfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setSrcTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setsrctime)**(DateTime srcTime) |
| DateTime | **[getSrcTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsrctime)**()<br>Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsrctimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setActivityTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setactivitytime)**(DateTime activityTime) |
| DateTime | **[getActivityTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getactivitytime)**()<br>Activity time. A feed handler generated time stamp representing when the data item was last updated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getactivitytimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setLineTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setlinetime)**(DateTime lineTime) |
| DateTime | **[getLineTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getlinetime)**()<br>Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getlinetimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setSendTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setsendtime)**(DateTime sendTime) |
| DateTime | **[getSendTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsendtime)**()<br>Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsendtimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setPubId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setpubid)**(string pubId) |
| string | **[getPubId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getpubid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubIdFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getpubidfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidprice)**(MamaPrice bidPrice) |
| MamaPrice | **[getBidPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidprice)**()<br>Get the bid price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidpricefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidSize](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidsize)**(long bidSize) |
| long | **[getBidSize](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidsize)**()<br>Get the bid size.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidsizefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidSize](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidsize)**(double bidSize) |
| void | **[setBidDepth](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbiddepth)**(double bidDepth) |
| double | **[getBidDepth](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbiddepth)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidDepthFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbiddepthfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidpartid)**(string partId) |
| string | **[getBidPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidpartid)**()<br>Get the bid participant identifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPartIdFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidpartidfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidClosePrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidcloseprice)**(MamaPrice bidClosePrice) |
| MamaPrice | **[getBidClosePrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidcloseprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidClosePriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidclosepricefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidCloseDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidclosedate)**(DateTime bidCloseDate) |
| DateTime | **[getBidCloseDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidclosedate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidCloseDateFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidclosedatefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidPrevClosePrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidprevcloseprice)**(MamaPrice bidPrevClosePrice) |
| MamaPrice | **[getBidPrevClosePrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidprevcloseprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPrevClosePriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidprevclosepricefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidPrevCloseDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidprevclosedate)**(DateTime bidPrevCloseDate) |
| DateTime | **[getBidPrevCloseDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidprevclosedate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPrevCloseDateFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidprevclosedatefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidHigh](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidhigh)**(MamaPrice bidHigh) |
| MamaPrice | **[getBidHigh](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidhigh)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidHighFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidhighfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setBidLow](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidlow)**(MamaPrice bidLow) |
| MamaPrice | **[getBidLow](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidlow)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[FieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-fieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskprice)**(MamaPrice askPrice) |
| MamaPrice | **[getAskPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskprice)**()<br>Get the ask price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskpricefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setQuoteMidPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setquotemidprice)**(MamaPrice midPrice) |
| MamaPrice | **[getQuoteMidPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotemidprice)**()<br>Get the quote mid price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteMidPriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotemidpricefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskSize](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setasksize)**(long askSize) |
| long | **[getAskSize](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasksize)**()<br>Get the ask size.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasksizefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskSize](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setasksize)**(double askSize) |
| void | **[setAskDepth](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskdepth)**(double askDepth) |
| double | **[getAskDepth](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskdepth)**() |
| void | **[setAskPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskpartid)**(string askPartId) |
| string | **[getAskPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskpartid)**()<br>Get the ask participant identifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPartIdFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskpartidfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskClosePrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskcloseprice)**(MamaPrice askClosePrice) |
| MamaPrice | **[getAskClosePrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskcloseprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskClosePriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskclosepricefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskCloseDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskclosedate)**(DateTime askCloseDate) |
| DateTime | **[getAskCloseDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskclosedate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskCloseDateFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskclosedatefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskPrevClosePrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskprevcloseprice)**(MamaPrice askPrevClosePrice) |
| MamaPrice | **[getAskPrevClosePrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskprevcloseprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPrevClosePriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskprevclosepricefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskPrevCloseDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskprevclosedate)**(DateTime askPrevCloseDate) |
| DateTime | **[getAskPrevCloseDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskprevclosedate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPrevCloseDateFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskprevclosedatefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskHigh](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskhigh)**(MamaPrice askHigh) |
| MamaPrice | **[getAskHigh](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskhigh)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskHighFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskhighfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setAskLow](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setasklow)**(MamaPrice askLow) |
| MamaPrice | **[getAskLow](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasklow)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskLowFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasklowfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setEventSeqNum](classWombat_1_1MamdaConcreteQuoteRecap.html#function-seteventseqnum)**(long eventSeqNum) |
| long | **[getEventSeqNum](classWombat_1_1MamdaConcreteQuoteRecap.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-geteventseqnumfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setEventTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-seteventtime)**(DateTime eventTime) |
| DateTime | **[getEventTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-geteventtimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setQuoteDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setquotedate)**(DateTime quoteDate) |
| DateTime | **[getQuoteDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotedate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteDateFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotedatefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setQuoteQual](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setquotequal)**(string quoteQualStr) |
| string | **[getQuoteQual](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotequal)**()<br>Get the normalized quote qualifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotequalfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setQuoteQualNative](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setquotequalnative)**(string quoteQualNative) |
| string | **[getQuoteQualNative](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotequalnative)**()<br>[MamdaQuoteUpdate.getQuoteQualNative()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualNativeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotequalnativefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setTmpQuoteCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-settmpquotecount)**(long quoteCount) |
| long | **[getTmpQuoteCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-gettmpquotecount)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTmpQuoteCountFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-gettmpquotecountfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setQuoteCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setquotecount)**(long quoteCount) |
| long | **[getQuoteCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotecount)**()<br>Get the quote count.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteCountFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotecountfieldstate)**()<br>Returns Field State, always MODIFIED  |
| char | **[getShortSaleBidTick](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getshortsalebidtick)**()<br>[MamdaQuoteUpdate.getShortSaleBidTick()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleBidTickFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getshortsalebidtickfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setShortSaleBidTick](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setshortsalebidtick)**(char shortSaleBidTick) |
| char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getshortsalecircuitbreaker)**()<br>[MamdaQuoteUpdate.getShortSaleCircuitBreaker()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setShortSaleCircuitBreaker](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setshortsalecircuitbreaker)**(char shortSaleCircuitBreaker) |
| void | **[setAskTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setasktime)**(DateTime askTime) |
| void | **[setBidTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidtime)**(DateTime bidTime) |
| void | **[setAskIndicator](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskindicator)**(string askIndicator) |
| void | **[setBidIndicator](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidindicator)**(string bidIndicator) |
| void | **[setAskUpdateCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskupdatecount)**(long askUpdateCount) |
| void | **[setBidUpdateCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidupdatecount)**(long bidUpdateCount) |
| void | **[setAskYield](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setaskyield)**(double askYield) |
| void | **[setBidYield](classWombat_1_1MamdaConcreteQuoteRecap.html#function-setbidyield)**(double bidYield) |
| DateTime | **[getAskTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasktime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasktimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| DateTime | **[getBidTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidtimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| string | **[getAskIndicator](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskindicator)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskIndicatorFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskindicatorfieldstate)**()<br>Returns Field State, always MODIFIED  |
| string | **[getBidIndicator](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidindicator)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidIndicatorFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidindicatorfieldstate)**()<br>Returns Field State, always MODIFIED  |
| long | **[getAskUpdateCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskupdatecount)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskUpdateCountFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskupdatecountfieldstate)**()<br>Returns Field State, always MODIFIED  |
| long | **[getBidUpdateCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidupdatecount)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidUpdateCountFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidupdatecountfieldstate)**()<br>Returns Field State, always MODIFIED  |
| double | **[getAskYield](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskyield)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskYieldFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskyieldfieldstate)**()<br>Returns Field State, always MODIFIED  |
| double | **[getBidYield](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidyield)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidYieldFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidyieldfieldstate)**()<br>Returns Field State, always MODIFIED  |

## Public Functions Documentation

### function MamdaConcreteQuoteRecap

```csharp
MamdaConcreteQuoteRecap()
```


### function clear

```csharp
void clear()
```

Clear the recap data 

### function setSymbol

```csharp
void setSymbol(
    string symbol
)
```


### function getSymbol

```csharp
string getSymbol()
```

Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [Wombat::MamdaBasicRecap::getSymbol](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbol)


### function getSymbolFieldState

```csharp
MamdaFieldState getSymbolFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaBasicRecap::getSymbolFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


### function setPartId

```csharp
void setPartId(
    string partId
)
```


### function getPartId

```csharp
string getPartId()
```

Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [Wombat::MamdaBasicRecap::getPartId](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartid)


### function getPartIdFieldState

```csharp
MamdaFieldState getPartIdFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaBasicRecap::getPartIdFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


### function setSrcTime

```csharp
void setSrcTime(
    DateTime srcTime
)
```


### function getSrcTime

```csharp
DateTime getSrcTime()
```

Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicRecap::getSrcTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctime)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaBasicRecap::getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)


### function setActivityTime

```csharp
void setActivityTime(
    DateTime activityTime
)
```


### function getActivityTime

```csharp
DateTime getActivityTime()
```

Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getActivityTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytime)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaBasicRecap::getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)


### function setLineTime

```csharp
void setLineTime(
    DateTime lineTime
)
```


### function getLineTime

```csharp
DateTime getLineTime()
```

Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [Wombat::MamdaBasicRecap::getLineTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetime)


### function getLineTimeFieldState

```csharp
MamdaFieldState getLineTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaBasicRecap::getLineTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


### function setSendTime

```csharp
void setSendTime(
    DateTime sendTime
)
```


### function getSendTime

```csharp
DateTime getSendTime()
```

Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplements**: [Wombat::MamdaBasicRecap::getSendTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtime)


### function getSendTimeFieldState

```csharp
MamdaFieldState getSendTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaBasicRecap::getSendTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


### function setPubId

```csharp
void setPubId(
    string pubId
)
```


### function getPubId

```csharp
string getPubId()
```


### function getPubIdFieldState

```csharp
MamdaFieldState getPubIdFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setBidPrice

```csharp
void setBidPrice(
    MamaPrice bidPrice
)
```


### function getBidPrice

```csharp
MamaPrice getBidPrice()
```

Get the bid price. 

**Return**: Bid price. The highest price that the representative party/group is willing to pay to buy the security. For most feeds, this size is represented in round lots.

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidPrice](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidprice)


### function getBidPriceFieldState

```csharp
MamdaFieldState getBidPriceFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidPriceFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidpricefieldstate)


### function setBidSize

```csharp
void setBidSize(
    long bidSize
)
```


### function getBidSize

```csharp
long getBidSize()
```

Get the bid size. 

**Return**: Total share size available for the current bid price.

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidSize](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidsize)


### function getBidSizeFieldState

```csharp
MamdaFieldState getBidSizeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidSizeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidsizefieldstate)


### function setBidSize

```csharp
void setBidSize(
    double bidSize
)
```


### function setBidDepth

```csharp
void setBidDepth(
    double bidDepth
)
```


### function getBidDepth

```csharp
double getBidDepth()
```


### function getBidDepthFieldState

```csharp
MamdaFieldState getBidDepthFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setBidPartId

```csharp
void setBidPartId(
    string partId
)
```


### function getBidPartId

```csharp
string getBidPartId()
```

Get the bid participant identifier. 

**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the bid price field.

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidPartId](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidpartid)


### function getBidPartIdFieldState

```csharp
MamdaFieldState getBidPartIdFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidPartIdFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidpartidfieldstate)


### function setBidClosePrice

```csharp
void setBidClosePrice(
    MamaPrice bidClosePrice
)
```


### function getBidClosePrice

```csharp
MamaPrice getBidClosePrice()
```


### function getBidClosePriceFieldState

```csharp
MamdaFieldState getBidClosePriceFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setBidCloseDate

```csharp
void setBidCloseDate(
    DateTime bidCloseDate
)
```


### function getBidCloseDate

```csharp
DateTime getBidCloseDate()
```


### function getBidCloseDateFieldState

```csharp
MamdaFieldState getBidCloseDateFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setBidPrevClosePrice

```csharp
void setBidPrevClosePrice(
    MamaPrice bidPrevClosePrice
)
```


### function getBidPrevClosePrice

```csharp
MamaPrice getBidPrevClosePrice()
```


### function getBidPrevClosePriceFieldState

```csharp
MamdaFieldState getBidPrevClosePriceFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setBidPrevCloseDate

```csharp
void setBidPrevCloseDate(
    DateTime bidPrevCloseDate
)
```


### function getBidPrevCloseDate

```csharp
DateTime getBidPrevCloseDate()
```


### function getBidPrevCloseDateFieldState

```csharp
MamdaFieldState getBidPrevCloseDateFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setBidHigh

```csharp
void setBidHigh(
    MamaPrice bidHigh
)
```


### function getBidHigh

```csharp
MamaPrice getBidHigh()
```


### function getBidHighFieldState

```csharp
MamdaFieldState getBidHighFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setBidLow

```csharp
void setBidLow(
    MamaPrice bidLow
)
```


### function getBidLow

```csharp
MamaPrice getBidLow()
```


### function FieldState

```csharp
MamdaFieldState FieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setAskPrice

```csharp
void setAskPrice(
    MamaPrice askPrice
)
```


### function getAskPrice

```csharp
MamaPrice getAskPrice()
```

Get the ask price. 

**Return**: Ask price. The lowest price that the representative party/group is willing to take to sell the security. For most feeds, this size is represented in round lots.

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskPrice](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskprice)


### function getAskPriceFieldState

```csharp
MamdaFieldState getAskPriceFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskPriceFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskpricefieldstate)


### function setQuoteMidPrice

```csharp
void setQuoteMidPrice(
    MamaPrice midPrice
)
```


### function getQuoteMidPrice

```csharp
MamaPrice getQuoteMidPrice()
```

Get the quote mid price. 

**Return**: The mid price of the current quote. Usually, this is the average of the bid and ask prices, but some exchanges provide this field explicitly.

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteMidPrice](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotemidprice)


### function getQuoteMidPriceFieldState

```csharp
MamdaFieldState getQuoteMidPriceFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setAskSize

```csharp
void setAskSize(
    long askSize
)
```


### function getAskSize

```csharp
long getAskSize()
```

Get the ask size. 

**Return**: Total share size available for the current ask price.

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskSize](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasksize)




Note: many feeds provide this size in terms of round lots. [Wombat](namespaceWombat.html) may change the behavior of this in the future to represent the exact number of shares. 


### function getAskSizeFieldState

```csharp
MamdaFieldState getAskSizeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskSizeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasksizefieldstate)


### function setAskSize

```csharp
void setAskSize(
    double askSize
)
```


### function setAskDepth

```csharp
void setAskDepth(
    double askDepth
)
```


### function getAskDepth

```csharp
double getAskDepth()
```


### function setAskPartId

```csharp
void setAskPartId(
    string askPartId
)
```


### function getAskPartId

```csharp
string getAskPartId()
```

Get the ask participant identifier. 

**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the ask price field.

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskPartId](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskpartid)


### function getAskPartIdFieldState

```csharp
MamdaFieldState getAskPartIdFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskPartIdFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskpartidfieldstate)


### function setAskClosePrice

```csharp
void setAskClosePrice(
    MamaPrice askClosePrice
)
```


### function getAskClosePrice

```csharp
MamaPrice getAskClosePrice()
```


### function getAskClosePriceFieldState

```csharp
MamdaFieldState getAskClosePriceFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setAskCloseDate

```csharp
void setAskCloseDate(
    DateTime askCloseDate
)
```


### function getAskCloseDate

```csharp
DateTime getAskCloseDate()
```


### function getAskCloseDateFieldState

```csharp
MamdaFieldState getAskCloseDateFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setAskPrevClosePrice

```csharp
void setAskPrevClosePrice(
    MamaPrice askPrevClosePrice
)
```


### function getAskPrevClosePrice

```csharp
MamaPrice getAskPrevClosePrice()
```


### function getAskPrevClosePriceFieldState

```csharp
MamdaFieldState getAskPrevClosePriceFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setAskPrevCloseDate

```csharp
void setAskPrevCloseDate(
    DateTime askPrevCloseDate
)
```


### function getAskPrevCloseDate

```csharp
DateTime getAskPrevCloseDate()
```


### function getAskPrevCloseDateFieldState

```csharp
MamdaFieldState getAskPrevCloseDateFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setAskHigh

```csharp
void setAskHigh(
    MamaPrice askHigh
)
```


### function getAskHigh

```csharp
MamaPrice getAskHigh()
```


### function getAskHighFieldState

```csharp
MamdaFieldState getAskHighFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setAskLow

```csharp
void setAskLow(
    MamaPrice askLow
)
```


### function getAskLow

```csharp
MamaPrice getAskLow()
```


### function getAskLowFieldState

```csharp
MamdaFieldState getAskLowFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setEventSeqNum

```csharp
void setEventSeqNum(
    long eventSeqNum
)
```


### function getEventSeqNum

```csharp
long getEventSeqNum()
```


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setEventTime

```csharp
void setEventTime(
    DateTime eventTime
)
```


### function getEventTime

```csharp
DateTime getEventTime()
```


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setQuoteDate

```csharp
void setQuoteDate(
    DateTime quoteDate
)
```


### function getQuoteDate

```csharp
DateTime getQuoteDate()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteDate](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotedate)


### function getQuoteDateFieldState

```csharp
MamdaFieldState getQuoteDateFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteDateFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotedatefieldstate)


### function setQuoteQual

```csharp
void setQuoteQual(
    string quoteQualStr
)
```


### function getQuoteQual

```csharp
string getQuoteQual()
```

Get the normalized quote qualifier. 

**Return**: A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character. [MamdaQuoteUpdate.getQuoteQual](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getquotequal)

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQual](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequal)


### function getQuoteQualFieldState

```csharp
MamdaFieldState getQuoteQualFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQualFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalfieldstate)


### function setQuoteQualNative

```csharp
void setQuoteQualNative(
    string quoteQualNative
)
```


### function getQuoteQualNative

```csharp
string getQuoteQualNative()
```

[MamdaQuoteUpdate.getQuoteQualNative()]()

**Return**: 

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQualNative](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalnative)


### function getQuoteQualNativeFieldState

```csharp
MamdaFieldState getQuoteQualNativeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQualNativeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalnativefieldstate)


### function setTmpQuoteCount

```csharp
void setTmpQuoteCount(
    long quoteCount
)
```


### function getTmpQuoteCount

```csharp
long getTmpQuoteCount()
```


### function getTmpQuoteCountFieldState

```csharp
MamdaFieldState getTmpQuoteCountFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setQuoteCount

```csharp
void setQuoteCount(
    long quoteCount
)
```


### function getQuoteCount

```csharp
long getQuoteCount()
```

Get the quote count. 

**Return**: The number of quotes generated for this security during the current trading session.

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotecount)


### function getQuoteCountFieldState

```csharp
MamdaFieldState getQuoteCountFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotecountfieldstate)


### function getShortSaleBidTick

```csharp
char getShortSaleBidTick()
```

[MamdaQuoteUpdate.getShortSaleBidTick()]()

**Return**: 

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleBidTick](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalebidtick)


### function getShortSaleBidTickFieldState

```csharp
MamdaFieldState getShortSaleBidTickFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleBidTickFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalebidtickfieldstate)


### function setShortSaleBidTick

```csharp
void setShortSaleBidTick(
    char shortSaleBidTick
)
```


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

[MamdaQuoteUpdate.getShortSaleCircuitBreaker()]()

**Return**: 

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreaker)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function setShortSaleCircuitBreaker

```csharp
void setShortSaleCircuitBreaker(
    char shortSaleCircuitBreaker
)
```


### function setAskTime

```csharp
void setAskTime(
    DateTime askTime
)
```


### function setBidTime

```csharp
void setBidTime(
    DateTime bidTime
)
```


### function setAskIndicator

```csharp
void setAskIndicator(
    string askIndicator
)
```


### function setBidIndicator

```csharp
void setBidIndicator(
    string bidIndicator
)
```


### function setAskUpdateCount

```csharp
void setAskUpdateCount(
    long askUpdateCount
)
```


### function setBidUpdateCount

```csharp
void setBidUpdateCount(
    long bidUpdateCount
)
```


### function setAskYield

```csharp
void setAskYield(
    double askYield
)
```


### function setBidYield

```csharp
void setBidYield(
    double bidYield
)
```


### function getAskTime

```csharp
DateTime getAskTime()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskTime](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasktime)


### function getAskTimeFieldState

```csharp
MamdaFieldState getAskTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskTimeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasktimefieldstate)


### function getBidTime

```csharp
DateTime getBidTime()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidTime](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidtime)


### function getBidTimeFieldState

```csharp
MamdaFieldState getBidTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidTimeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidtimefieldstate)


### function getAskIndicator

```csharp
string getAskIndicator()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskIndicator](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskindicator)


### function getAskIndicatorFieldState

```csharp
MamdaFieldState getAskIndicatorFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskIndicatorFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskindicatorfieldstate)


### function getBidIndicator

```csharp
string getBidIndicator()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidIndicator](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidindicator)


### function getBidIndicatorFieldState

```csharp
MamdaFieldState getBidIndicatorFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidIndicatorFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidindicatorfieldstate)


### function getAskUpdateCount

```csharp
long getAskUpdateCount()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskUpdateCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskupdatecount)


### function getAskUpdateCountFieldState

```csharp
MamdaFieldState getAskUpdateCountFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskUpdateCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskupdatecountfieldstate)


### function getBidUpdateCount

```csharp
long getBidUpdateCount()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidUpdateCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidupdatecount)


### function getBidUpdateCountFieldState

```csharp
MamdaFieldState getBidUpdateCountFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidUpdateCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidupdatecountfieldstate)


### function getAskYield

```csharp
double getAskYield()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskYield](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskyield)


### function getAskYieldFieldState

```csharp
MamdaFieldState getAskYieldFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getAskYieldFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskyieldfieldstate)


### function getBidYield

```csharp
double getBidYield()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidYield](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidyield)


### function getBidYieldFieldState

```csharp
MamdaFieldState getBidYieldFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaQuoteRecap::getBidYieldFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidyieldfieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100