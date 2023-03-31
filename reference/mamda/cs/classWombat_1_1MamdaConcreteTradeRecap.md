---
title: Wombat::MamdaConcreteTradeRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaConcreteTradeRecap





Inherits from [Wombat.MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html), [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaConcreteTradeRecap](classWombat_1_1MamdaConcreteTradeRecap.html#function-mamdaconcretetraderecap)**() |
| void | **[clear](classWombat_1_1MamdaConcreteTradeRecap.html#function-clear)**()<br>Clear the recap data  |
| string | **[getSymbol](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsymbol)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsymbolfieldstate)**() |
| void | **[setSymbol](classWombat_1_1MamdaConcreteTradeRecap.html#function-setsymbol)**(string symbol) |
| string | **[getPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getpartid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getpartidfieldstate)**() |
| void | **[setPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setpartid)**(string partId) |
| long | **[getAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getaccvolume)**()<br>Total volume of shares traded in a security at the time it is disseminated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAccVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getaccvolumefieldstate)**()<br>Get the field state  |
| void | **[setAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setaccvolume)**(long accVolume) |
| void | **[setAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setaccvolume)**(double accVolume) |
| long | **[getOffExAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexaccvolume)**()<br>Total volume of shares traded off exchange in a security at the time it is disseminated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExAccVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexaccvolumefieldstate)**()<br>Get the field state  |
| void | **[setOffExAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setoffexaccvolume)**(long offExAccVolume) |
| void | **[setOffExAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setoffexaccvolume)**(double offExAccVolume) |
| long | **[getOnExAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexaccvolume)**()<br>Total volume of shares traded on exchange in a security at the time it is disseminated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExAccVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexaccvolumefieldstate)**()<br>Get the field state  |
| void | **[setOnExAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setonexaccvolume)**(long onExAccVolume) |
| void | **[setOnExAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setonexaccvolume)**(double onExAccVolume) |
| DateTime | **[getActivityTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getactivitytime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| void | **[setActTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-setacttime)**(DateTime actTime) |
| DateTime | **[getLineTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlinetime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlinetimefieldstate)**() |
| void | **[setLineTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlinetime)**(DateTime lineTime) |
| DateTime | **[getSendTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsendtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsendtimefieldstate)**() |
| void | **[setSendTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-setsendtime)**(DateTime sendTime) |
| string | **[getPubId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getpubid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getpubidfieldstate)**() |
| void | **[setPubId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setpubid)**(string pubId) |
| long | **[getBlockCount](classWombat_1_1MamdaConcreteTradeRecap.html#function-getblockcount)**()<br>The number of block trades (at least 10,000 shares) today.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockCountFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getblockcountfieldstate)**()<br>Get the field state  |
| void | **[setBlockCount](classWombat_1_1MamdaConcreteTradeRecap.html#function-setblockcount)**(long blockCount) |
| long | **[getBlockVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getblockvolume)**()<br>Total volume of block trades today.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getblockvolumefieldstate)**()<br>Get the field state  |
| void | **[setBlockVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setblockvolume)**(long blockVolume) |
| void | **[setBlockVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setblockvolume)**(double blockVolume) |
| MamaPrice | **[getClosePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcloseprice)**()<br>Today's closing price. The closing price field is populated when official closing prices are sent by the feed after the session close.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getClosePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getclosepricefieldstate)**()<br>Get the field state  |
| void | **[setClosePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcloseprice)**(MamaPrice closePrice) |
| string | **[getCorrCondStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrcondstr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrCondStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrcondstrfieldstate)**() |
| void | **[setCorrCondStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrcondstr)**(string corrCondStr) |
| string | **[getCorrPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrpartid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPartIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrpartidfieldstate)**() |
| void | **[setCorrPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrpartid)**(string corrPartId) |
| MamaPrice | **[getCorrPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrpricefieldstate)**() |
| void | **[setCorrPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrprice)**(MamaPrice corrPrice) |
| string | **[getCorrQualStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrqualstr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrqualstrfieldstate)**() |
| void | **[setCorrQualStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrqualstr)**(string corrQualStr) |
| string | **[getCorrQualNativeStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrqualnativestr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualNativeStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrqualnativestrfieldstate)**() |
| void | **[setCorrQualNativeStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrqualnativestr)**(string corrQualNativeStr) |
| long | **[getCorrSellersSaleDays](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrsellerssaledays)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrSellersSaleDaysFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrsellerssaledaysfieldstate)**() |
| void | **[setCorrSellersSaleDays](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrsellerssaledays)**(long corrSellersSaleDays) |
| char | **[getCorrStopStockInd](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrstopstockind)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrStopStockIndFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrstopstockindfieldstate)**() |
| void | **[setCorrStopStockInd](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrstopstockind)**(char corrStopStockInd) |
| DateTime | **[getCancelTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcanceltime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCancelTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcanceltimefieldstate)**() |
| void | **[setCancelTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcanceltime)**(DateTime cancelTime) |
| long | **[getCorrVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrvolume)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrvolumefieldstate)**() |
| void | **[setCorrVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrvolume)**(long corrVolume) |
| void | **[setCorrVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrvolume)**(double corrVolume) |
| long | **[getEventSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| void | **[setEventSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-seteventseqnum)**(long eventSeqNum) |
| DateTime | **[getEventTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |
| void | **[setEventTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-seteventtime)**(DateTime eventTime) |
| MamaPrice | **[getHighPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-gethighprice)**()<br>Highest price paid for security during the trading day.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gethighpricefieldstate)**()<br>Get the field state  |
| void | **[setHighPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-sethighprice)**(MamaPrice highPrice) |
| string | **[getLastPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastpartid)**()<br>Trade participant ID. This is typically an exchange ID, sometimes a market maker ID.  |
| string | **[getTradeId](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeid)**() |
| string | **[getCorrTradeId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrtradeid)**() |
| string | **[getOrigTradeId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigtradeid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPartIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastpartidfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeidfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigTradeIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigtradeidfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrTradeIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcorrtradeidfieldstate)**() |
| void | **[setLastPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlastpartid)**(string lastPartId) |
| void | **[setTradeId](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradeid)**(string tradeId) |
| void | **[setOrigTradeId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigtradeid)**(string origTradeId) |
| void | **[setCorrTradeId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcorrtradeid)**(string corrTradeId) |
| MamaPrice | **[getLastPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastprice)**()<br>Monetary value of an individual share of the security at the time of the trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastpricefieldstate)**()<br>Get the field state  |
| void | **[setLastPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlastprice)**(MamaPrice lastPrice) |
| DateTime | **[getLastTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlasttime)**()<br>Time corresponding to the last trade, as reported by the feed The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlasttimefieldstate)**()<br>Get the field state  |
| void | **[setLastTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlasttime)**(DateTime lastTime) |
| DateTime | **[getTradeDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradedate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDateFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradedatefieldstate)**()<br>Get the field state  |
| void | **[setTradeDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradedate)**(DateTime tradeDate) |
| MamaPrice | **[getIrregPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregprice)**()<br>Monetary value of an individual share of the security at the time of the last irregular trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregpricefieldstate)**()<br>Get the field state  |
| void | **[setIrregPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setirregprice)**(MamaPrice irregPrice) |
| long | **[getIrregVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregvolume)**()<br>Number of shares traded in a single transaction for an individual security.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregvolumefieldstate)**()<br>Get the field state  |
| void | **[setIrregVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setirregvolume)**(long irregVolume) |
| void | **[setIrregVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setirregvolume)**(double irregVolume) |
| string | **[getIrregPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregpartid)**()<br>Trade participant ID for the last irregular trade. This is typically an exchange ID, sometimes a market maker ID.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPartIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregpartidfieldstate)**()<br>Get the field state  |
| void | **[setIrregPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setirregpartid)**(string irregPartId) |
| DateTime | **[getIrregTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregtime)**()<br>Time corresponding to the last irregular trade, as reported by the feed The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregtimefieldstate)**()<br>Get the field state  |
| void | **[setIrregTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-setirregtime)**(DateTime irregTime) |
| long | **[getLastVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastvolume)**()<br>Number of shares traded in a single transaction for an individual security.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastvolumefieldstate)**()<br>Get the field state  |
| void | **[setLastVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlastvolume)**(long lastVolume) |
| void | **[setLastVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlastvolume)**(double lastVolume) |
| MamaPrice | **[getLowPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlowprice)**()<br>Lowest price paid for security during the trading day.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlowpricefieldstate)**()<br>Get the field state  |
| void | **[setLowPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlowprice)**(MamaPrice lowPrice) |
| MamaPrice | **[getNetChange](classWombat_1_1MamdaConcreteTradeRecap.html#function-getnetchange)**()<br>Get the change in price compared with the previous closing price  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNetChangeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getnetchangefieldstate)**()<br>Get the field state  |
| void | **[setNetChange](classWombat_1_1MamdaConcreteTradeRecap.html#function-setnetchange)**(MamaPrice netChange) |
| MamaPrice | **[getOpenPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getopenprice)**()<br>The price of the first qualifying trade in the security during the current trading day.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOpenPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getopenpricefieldstate)**()<br>Get the field state  |
| void | **[setOpenPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setopenprice)**(MamaPrice openPrice) |
| string | **[getOrigCondStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigcondstr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigCondStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigcondstrfieldstate)**() |
| void | **[setOrigCondStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigcondstr)**(string origCondStr) |
| string | **[getOrigPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigpartid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPartIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigpartidfieldstate)**() |
| void | **[setOrigPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigpartid)**(string origPartId) |
| MamaPrice | **[getOrigPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigpricefieldstate)**() |
| void | **[setOrigPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigprice)**(MamaPrice origPrice) |
| string | **[getOrigQualStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigqualstr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigqualstrfieldstate)**() |
| void | **[setOrigQualStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigqualstr)**(string origQualStr) |
| string | **[getOrigQualNativeStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigqualnativestr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualNativeStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigqualnativestrfieldstate)**() |
| void | **[setOrigQualNativeStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigqualnativestr)**(string origQualNativeStr) |
| long | **[getOrigSellersSaleDays](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigsellerssaledays)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSellersSaleDaysFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigsellerssaledaysfieldstate)**() |
| void | **[setOrigSellersSaleDays](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigsellerssaledays)**(long origSellersSaleDays) |
| char | **[getOrigStopStockInd](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigstopstockind)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigStopStockIndFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigstopstockindfieldstate)**() |
| void | **[setOrigStopStockInd](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigstopstockind)**(char origStopStockInd) |
| long | **[getOrigSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigseqnumfieldstate)**() |
| void | **[setOrigSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigseqnum)**(long origSeqNum) |
| long | **[getOrigVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigvolume)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorigvolumefieldstate)**() |
| void | **[setOrigVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigvolume)**(long origVolume) |
| void | **[setOrigVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorigvolume)**(double origVolume) |
| double | **[getPctChange](classWombat_1_1MamdaConcreteTradeRecap.html#function-getpctchange)**()<br>Change in price as a percentage.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPctChangeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getpctchangefieldstate)**()<br>Get the field state  |
| void | **[setPctChange](classWombat_1_1MamdaConcreteTradeRecap.html#function-setpctchange)**(double pctChange) |
| DateTime | **[getPrevCloseDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-getprevclosedate)**()<br>Date corresponding to PrevClosePrice. [getPrevClosePrice()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevCloseDateFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getprevclosedatefieldstate)**()<br>Get the field state  |
| void | **[setPrevCloseDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-setprevclosedate)**(DateTime prevCloseDate) |
| MamaPrice | **[getAdjPrevClose](classWombat_1_1MamdaConcreteTradeRecap.html#function-getadjprevclose)**()<br>The previous close price adjusted by corporate actions, such as dividends and stock splits on the ex-date. [getPrevClosePrice()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAdjPrevCloseFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getadjprevclosefieldstate)**()<br>Get the field state  |
| void | **[setAdjPrevClose](classWombat_1_1MamdaConcreteTradeRecap.html#function-setadjprevclose)**(MamaPrice adjPrevClose) |
| MamaPrice | **[getPrevClosePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getprevcloseprice)**()<br>The last qualifying trade price on the previous trading day. This field may be copied from the close price field during the morning "roll" of records in the feedhandler, or it may be obtained from a secondary source, or it may be explicitly sent by the feed prior to the opening of trading for the current day.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevClosePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getprevclosepricefieldstate)**()<br>Get the field state  |
| void | **[setPrevClosePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setprevcloseprice)**(MamaPrice prevClosePrice) |
| long | **[getSellersSaleDays](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsellerssaledays)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSellersSaleDaysFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsellerssaledaysfieldstate)**() |
| void | **[setSellersSaleDays](classWombat_1_1MamdaConcreteTradeRecap.html#function-setsellerssaledays)**(long sellersSaleDays) |
| char | **[getStopStockInd](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstopstockind)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStopStockIndFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstopstockindfieldstate)**() |
| void | **[setStopStockInd](classWombat_1_1MamdaConcreteTradeRecap.html#function-setstopstockind)**(char stopStockInd) |
| DateTime | **[getSrcTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsrctime)**()<br>Returns the source time.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| void | **[setSrcTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-setsrctime)**(DateTime srcTime) |
| double | **[getStdDev](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddev)**()<br>Standard deviation of last trade price of a security at the time it is disseminated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevfieldstate)**()<br>Get the field state  |
| void | **[setStdDev](classWombat_1_1MamdaConcreteTradeRecap.html#function-setstddev)**(double stdDev) |
| double | **[getStdDevSum](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevsum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevsumfieldstate)**()<br>Get the field state  |
| void | **[setStdDevSum](classWombat_1_1MamdaConcreteTradeRecap.html#function-setstddevsum)**(double stdDevSum) |
| double | **[getStdDevSumSquares](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevsumsquares)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumSquaresFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevsumsquaresfieldstate)**()<br>Get the field state  |
| void | **[setStdDevSumSquares](classWombat_1_1MamdaConcreteTradeRecap.html#function-setstddevsumsquares)**(double stdDevSumSquares) |
| long | **[getOrderId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorderid)**()<br>Get the order id, if available.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrderIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorderidfieldstate)**()<br>Get the field state  |
| void | **[setOrderId](classWombat_1_1MamdaConcreteTradeRecap.html#function-setorderid)**(long orderId) |
| MamaPrice | **[getSettlePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettleprice)**()<br>Future's / Options settlement price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettlePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettlepricefieldstate)**()<br>Get the field state  |
| void | **[setSettlePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setsettleprice)**(MamaPrice settlePrice) |
| DateTime | **[getSettleDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettledate)**()<br>Date corresponding to SettlePrice. [getSettlePrice()](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettleprice) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettleDateFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettledatefieldstate)**()<br>Get the field state  |
| void | **[setSettleDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-setsettledate)**(DateTime settleDate) |
| char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaConcreteTradeRecap.html#function-getshortsalecircuitbreaker)**()<br>getShortSaleCircuitBreaker Returns the ShortSaleCircuitBreaker  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Returns the FieldState, always MODIFIED.  |
| void | **[setShortSaleCircuitBreaker](classWombat_1_1MamdaConcreteTradeRecap.html#function-setshortsalecircuitbreaker)**(char shortSaleCircuitBreaker)<br>Set the shortSaleCircuitBreaker  |
| double | **[getTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettotalvalue)**()<br>Total value of all shares traded in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalValueFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettotalvaluefieldstate)**()<br>Get the field state  |
| void | **[setTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-settotalvalue)**(double totalValue) |
| double | **[getOffExTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffextotalvalue)**()<br>Total value of all shares traded off exchange in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExTotalValueFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffextotalvaluefieldstate)**()<br>Get the field state  |
| void | **[setOffExTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-setoffextotalvalue)**(double offExTotalValue) |
| double | **[getOnExTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonextotalvalue)**()<br>Total value of all shares traded on exchange in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExTotalValueFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonextotalvaluefieldstate)**()<br>Get the field state  |
| void | **[setOnExTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-setonextotalvalue)**(double onExTotalValue) |
| string | **[getTradeCondStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradecondstr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeCondStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradecondstrfieldstate)**() |
| void | **[setTradeCondStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradecondstr)**(string tradeCondStr) |
| long | **[getTradeCount](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradecount)**()<br>The number of trades today.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeCountFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradecountfieldstate)**()<br>Get the field state  |
| void | **[setTradeCount](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradecount)**(long tradeCount) |
| string | **[getTradeUnits](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeunits)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeUnitsFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeunitsfieldstate)**()<br>Get the field state  |
| void | **[setTradeUnits](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradeunits)**(string tradeUnits) |
| long | **[getLastSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastseqnumfieldstate)**()<br>Get the field state  |
| void | **[setLastSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlastseqnum)**(long lastSeqNum) |
| long | **[getHighSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-gethighseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gethighseqnumfieldstate)**()<br>Get the field state  |
| void | **[setHighSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-sethighseqnum)**(long highSeqNum) |
| long | **[getLowSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlowseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlowseqnumfieldstate)**()<br>Get the field state  |
| void | **[setLowSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-setlowseqnum)**(long lowSeqNum) |
| long | **[getTotalVolumeSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettotalvolumeseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalVolumeSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettotalvolumeseqnumfieldstate)**()<br>Get the field state  |
| void | **[setTotalVolumeSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-settotalvolumeseqnum)**(long totalVolumeSeqNum) |
| string | **[getCurrencyCode](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcurrencycode)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCurrencyCodeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcurrencycodefieldstate)**()<br>Get the field state  |
| void | **[setCurrencyCode](classWombat_1_1MamdaConcreteTradeRecap.html#function-setcurrencycode)**(string currencyCode) |
| string | **[getTradeDirection](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradedirection)**()<br>Trade tick direction. 0 : No direction is currently known/available.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDirectionFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradedirectionfieldstate)**()<br>Get the field state  |
| void | **[setTradeDirection](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradedirection)**(string tradeDirection) |
| string | **[getSide](classWombat_1_1MamdaConcreteTradeRecap.html#function-getside)**()<br>Returns the Aggressor side or TradeSide  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSideFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsidefieldstate)**()<br>Get the field state  |
| void | **[setSide](classWombat_1_1MamdaConcreteTradeRecap.html#function-setside)**(string tradeSide) |
| string | **[getTradePartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradepartid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePartIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradepartidfieldstate)**() |
| void | **[setTradePartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradepartid)**(string tradePartId) |
| MamaPrice | **[getTradePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradepricefieldstate)**() |
| void | **[setTradePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradeprice)**(MamaPrice tradePrice) |
| string | **[getTradeQualStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradequalstr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradequalstrfieldstate)**() |
| void | **[setTradeQualStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradequalstr)**(string tradeQualStr) |
| string | **[getTradeQualNativeStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradequalnativestr)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualNativeStrFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradequalnativestrfieldstate)**() |
| void | **[setTradeQualNativeStr](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradequalnativestr)**(string tradeQualNativeStr) |
| long | **[getTradeVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradevolume)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradevolumefieldstate)**() |
| void | **[setTradeVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradevolume)**(long tradeVolume) |
| void | **[setTradeVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradevolume)**(double tradeVolume) |
| double | **[getVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-getvwap)**()<br>Volume-weighted average price of a security at the time it is disseminated. Equivalent to dividing total value by total volume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVwapFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getvwapfieldstate)**()<br>Get the field state  |
| void | **[setVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-setvwap)**(double vwap) |
| double | **[getOffExVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexvwap)**()<br>Volume-weighted average off exchange price of a security at the time it is disseminated. Equivalent to dividing total value by total volume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExVwapFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexvwapfieldstate)**()<br>Get the field state  |
| void | **[setOffExVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-setoffexvwap)**(double offExVwap) |
| double | **[getOnExVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexvwap)**()<br>Volume-weighted average on exchange price of a security at the time it is disseminated. Equivalent to dividing total value by total volume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExVwapFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexvwapfieldstate)**()<br>Get the field state  |
| void | **[setOnExVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-setonexvwap)**(double onExVwap) |
| bool | **[IsIrregular](classWombat_1_1MamdaConcreteTradeRecap.html#function-isirregular)**() |
| void | **[setIsIrregular](classWombat_1_1MamdaConcreteTradeRecap.html#function-setisirregular)**(bool isIrregular) |
| bool | **[IsCancel](classWombat_1_1MamdaConcreteTradeRecap.html#function-iscancel)**() |
| void | **[setIsCancel](classWombat_1_1MamdaConcreteTradeRecap.html#function-setiscancel)**(bool isCancel) |
| string | **[getTradeExecVenue](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeexecvenue)**()<br>Trade execution venue. Unknown OnExchange OnExchangeOffBook OffExchange  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeExecVenueFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeexecvenuefieldstate)**()<br>Get the field state  |
| void | **[setTradeExecVenue](classWombat_1_1MamdaConcreteTradeRecap.html#function-settradeexecvenue)**(string tradeExecVenue) |
| MamaPrice | **[getOffExchangeTradePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexchangetradeprice)**()<br>Monetary value of an individual off exchange share of the security at the time of the trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExchangeTradePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexchangetradepricefieldstate)**()<br>Get the field state  |
| void | **[setOffExchangeTradePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setoffexchangetradeprice)**(MamaPrice offExTradePrice) |
| MamaPrice | **[getOnExchangeTradePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexchangetradeprice)**()<br>Monetary value of an individual off exchange share of the security at the time of the trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExchangeTradePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexchangetradepricefieldstate)**()<br>Get the field state  |
| void | **[setOnExchangeTradePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-setonexchangetradeprice)**(MamaPrice onExTradePrice) |

## Public Functions Documentation

### function MamdaConcreteTradeRecap

```csharp
MamdaConcreteTradeRecap()
```


### function clear

```csharp
void clear()
```

Clear the recap data 

### function getSymbol

```csharp
string getSymbol()
```


### function getSymbolFieldState

```csharp
MamdaFieldState getSymbolFieldState()
```


### function setSymbol

```csharp
void setSymbol(
    string symbol
)
```


### function getPartId

```csharp
string getPartId()
```


### function getPartIdFieldState

```csharp
MamdaFieldState getPartIdFieldState()
```


### function setPartId

```csharp
void setPartId(
    string partId
)
```


### function getAccVolume

```csharp
long getAccVolume()
```

Total volume of shares traded in a security at the time it is disseminated. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getaccvolume)


### function getAccVolumeFieldState

```csharp
MamdaFieldState getAccVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getaccvolumefieldstate)


### function setAccVolume

```csharp
void setAccVolume(
    long accVolume
)
```


### function setAccVolume

```csharp
void setAccVolume(
    double accVolume
)
```


### function getOffExAccVolume

```csharp
long getOffExAccVolume()
```

Total volume of shares traded off exchange in a security at the time it is disseminated. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolume)


### function getOffExAccVolumeFieldState

```csharp
MamdaFieldState getOffExAccVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolumefieldstate)


### function setOffExAccVolume

```csharp
void setOffExAccVolume(
    long offExAccVolume
)
```


### function setOffExAccVolume

```csharp
void setOffExAccVolume(
    double offExAccVolume
)
```


### function getOnExAccVolume

```csharp
long getOnExAccVolume()
```

Total volume of shares traded on exchange in a security at the time it is disseminated. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexaccvolume)


### function getOnExAccVolumeFieldState

```csharp
MamdaFieldState getOnExAccVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexaccvolumefieldstate)


### function setOnExAccVolume

```csharp
void setOnExAccVolume(
    long onExAccVolume
)
```


### function setOnExAccVolume

```csharp
void setOnExAccVolume(
    double onExAccVolume
)
```


### function getActivityTime

```csharp
DateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated.

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

Returns the field state. 

**Return**: Activity time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


### function setActTime

```csharp
void setActTime(
    DateTime actTime
)
```


### function getLineTime

```csharp
DateTime getLineTime()
```


### function getLineTimeFieldState

```csharp
MamdaFieldState getLineTimeFieldState()
```


### function setLineTime

```csharp
void setLineTime(
    DateTime lineTime
)
```


### function getSendTime

```csharp
DateTime getSendTime()
```


### function getSendTimeFieldState

```csharp
MamdaFieldState getSendTimeFieldState()
```


### function setSendTime

```csharp
void setSendTime(
    DateTime sendTime
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


### function setPubId

```csharp
void setPubId(
    string pubId
)
```


### function getBlockCount

```csharp
long getBlockCount()
```

The number of block trades (at least 10,000 shares) today. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockCount](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockcount)


### function getBlockCountFieldState

```csharp
MamdaFieldState getBlockCountFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockCountFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockcountfieldstate)


### function setBlockCount

```csharp
void setBlockCount(
    long blockCount
)
```


### function getBlockVolume

```csharp
long getBlockVolume()
```

Total volume of block trades today. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockvolume)


### function getBlockVolumeFieldState

```csharp
MamdaFieldState getBlockVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockvolumefieldstate)


### function setBlockVolume

```csharp
void setBlockVolume(
    long blockVolume
)
```


### function setBlockVolume

```csharp
void setBlockVolume(
    double blockVolume
)
```


### function getClosePrice

```csharp
MamaPrice getClosePrice()
```

Today's closing price. The closing price field is populated when official closing prices are sent by the feed after the session close. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getClosePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getcloseprice)


### function getClosePriceFieldState

```csharp
MamdaFieldState getClosePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getClosePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getclosepricefieldstate)


### function setClosePrice

```csharp
void setClosePrice(
    MamaPrice closePrice
)
```


### function getCorrCondStr

```csharp
string getCorrCondStr()
```


### function getCorrCondStrFieldState

```csharp
MamdaFieldState getCorrCondStrFieldState()
```


### function setCorrCondStr

```csharp
void setCorrCondStr(
    string corrCondStr
)
```


### function getCorrPartId

```csharp
string getCorrPartId()
```


### function getCorrPartIdFieldState

```csharp
MamdaFieldState getCorrPartIdFieldState()
```


### function setCorrPartId

```csharp
void setCorrPartId(
    string corrPartId
)
```


### function getCorrPrice

```csharp
MamaPrice getCorrPrice()
```


### function getCorrPriceFieldState

```csharp
MamdaFieldState getCorrPriceFieldState()
```


### function setCorrPrice

```csharp
void setCorrPrice(
    MamaPrice corrPrice
)
```


### function getCorrQualStr

```csharp
string getCorrQualStr()
```


### function getCorrQualStrFieldState

```csharp
MamdaFieldState getCorrQualStrFieldState()
```


### function setCorrQualStr

```csharp
void setCorrQualStr(
    string corrQualStr
)
```


### function getCorrQualNativeStr

```csharp
string getCorrQualNativeStr()
```


### function getCorrQualNativeStrFieldState

```csharp
MamdaFieldState getCorrQualNativeStrFieldState()
```


### function setCorrQualNativeStr

```csharp
void setCorrQualNativeStr(
    string corrQualNativeStr
)
```


### function getCorrSellersSaleDays

```csharp
long getCorrSellersSaleDays()
```


### function getCorrSellersSaleDaysFieldState

```csharp
MamdaFieldState getCorrSellersSaleDaysFieldState()
```


### function setCorrSellersSaleDays

```csharp
void setCorrSellersSaleDays(
    long corrSellersSaleDays
)
```


### function getCorrStopStockInd

```csharp
char getCorrStopStockInd()
```


### function getCorrStopStockIndFieldState

```csharp
MamdaFieldState getCorrStopStockIndFieldState()
```


### function setCorrStopStockInd

```csharp
void setCorrStopStockInd(
    char corrStopStockInd
)
```


### function getCancelTime

```csharp
DateTime getCancelTime()
```


### function getCancelTimeFieldState

```csharp
MamdaFieldState getCancelTimeFieldState()
```


### function setCancelTime

```csharp
void setCancelTime(
    DateTime cancelTime
)
```


### function getCorrVolume

```csharp
long getCorrVolume()
```


### function getCorrVolumeFieldState

```csharp
MamdaFieldState getCorrVolumeFieldState()
```


### function setCorrVolume

```csharp
void setCorrVolume(
    long corrVolume
)
```


### function setCorrVolume

```csharp
void setCorrVolume(
    double corrVolume
)
```


### function getEventSeqNum

```csharp
long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number.

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

Returns the field state. 

**Return**: Source sequence number Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


### function setEventSeqNum

```csharp
void setEventSeqNum(
    long eventSeqNum
)
```


### function getEventTime

```csharp
DateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

Returns the field state. 

**Return**: Event Time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function setEventTime

```csharp
void setEventTime(
    DateTime eventTime
)
```


### function getHighPrice

```csharp
MamaPrice getHighPrice()
```

Highest price paid for security during the trading day. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getHighPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighprice)


### function getHighPriceFieldState

```csharp
MamdaFieldState getHighPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getHighPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighpricefieldstate)


### function setHighPrice

```csharp
void setHighPrice(
    MamaPrice highPrice
)
```


### function getLastPartId

```csharp
string getLastPartId()
```

Trade participant ID. This is typically an exchange ID, sometimes a market maker ID. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPartId](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpartid)


### function getTradeId

```csharp
string getTradeId()
```


### function getCorrTradeId

```csharp
string getCorrTradeId()
```


### function getOrigTradeId

```csharp
string getOrigTradeId()
```


### function getLastPartIdFieldState

```csharp
MamdaFieldState getLastPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPartIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpartidfieldstate)


### function getTradeIdFieldState

```csharp
MamdaFieldState getTradeIdFieldState()
```


### function getOrigTradeIdFieldState

```csharp
MamdaFieldState getOrigTradeIdFieldState()
```


### function getCorrTradeIdFieldState

```csharp
MamdaFieldState getCorrTradeIdFieldState()
```


### function setLastPartId

```csharp
void setLastPartId(
    string lastPartId
)
```


### function setTradeId

```csharp
void setTradeId(
    string tradeId
)
```


### function setOrigTradeId

```csharp
void setOrigTradeId(
    string origTradeId
)
```


### function setCorrTradeId

```csharp
void setCorrTradeId(
    string corrTradeId
)
```


### function getLastPrice

```csharp
MamaPrice getLastPrice()
```

Monetary value of an individual share of the security at the time of the trade. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastprice)


### function getLastPriceFieldState

```csharp
MamdaFieldState getLastPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpricefieldstate)


### function setLastPrice

```csharp
void setLastPrice(
    MamaPrice lastPrice
)
```


### function getLastTime

```csharp
DateTime getLastTime()
```

Time corresponding to the last trade, as reported by the feed The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastTime](interfaceWombat_1_1MamdaTradeRecap.html#function-getlasttime)


### function getLastTimeFieldState

```csharp
MamdaFieldState getLastTimeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getLastTimeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlasttimefieldstate)


### function setLastTime

```csharp
void setLastTime(
    DateTime lastTime
)
```


### function getTradeDate

```csharp
DateTime getTradeDate()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDate](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedate)


### function getTradeDateFieldState

```csharp
MamdaFieldState getTradeDateFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedatefieldstate)


### function setTradeDate

```csharp
void setTradeDate(
    DateTime tradeDate
)
```


### function getIrregPrice

```csharp
MamaPrice getIrregPrice()
```

Monetary value of an individual share of the security at the time of the last irregular trade. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregprice)


### function getIrregPriceFieldState

```csharp
MamdaFieldState getIrregPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpricefieldstate)


### function setIrregPrice

```csharp
void setIrregPrice(
    MamaPrice irregPrice
)
```


### function getIrregVolume

```csharp
long getIrregVolume()
```

Number of shares traded in a single transaction for an individual security. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregvolume)


### function getIrregVolumeFieldState

```csharp
MamdaFieldState getIrregVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregvolumefieldstate)


### function setIrregVolume

```csharp
void setIrregVolume(
    long irregVolume
)
```


### function setIrregVolume

```csharp
void setIrregVolume(
    double irregVolume
)
```


### function getIrregPartId

```csharp
string getIrregPartId()
```

Trade participant ID for the last irregular trade. This is typically an exchange ID, sometimes a market maker ID. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPartId](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpartid)


### function getIrregPartIdFieldState

```csharp
MamdaFieldState getIrregPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPartIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpartidfieldstate)


### function setIrregPartId

```csharp
void setIrregPartId(
    string irregPartId
)
```


### function getIrregTime

```csharp
DateTime getIrregTime()
```

Time corresponding to the last irregular trade, as reported by the feed The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregTime](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregtime)


### function getIrregTimeFieldState

```csharp
MamdaFieldState getIrregTimeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregTimeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregtimefieldstate)


### function setIrregTime

```csharp
void setIrregTime(
    DateTime irregTime
)
```


### function getLastVolume

```csharp
long getLastVolume()
```

Number of shares traded in a single transaction for an individual security. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastvolume)


### function getLastVolumeFieldState

```csharp
MamdaFieldState getLastVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getLastVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastvolumefieldstate)


### function setLastVolume

```csharp
void setLastVolume(
    long lastVolume
)
```


### function setLastVolume

```csharp
void setLastVolume(
    double lastVolume
)
```


### function getLowPrice

```csharp
MamaPrice getLowPrice()
```

Lowest price paid for security during the trading day. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getLowPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowprice)


### function getLowPriceFieldState

```csharp
MamdaFieldState getLowPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getLowPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowpricefieldstate)


### function setLowPrice

```csharp
void setLowPrice(
    MamaPrice lowPrice
)
```


### function getNetChange

```csharp
MamaPrice getNetChange()
```

Get the change in price compared with the previous closing price 

**Return**: Change in price compared with the previous closing price (i.e. previous closing price - trade price).

**Reimplements**: [Wombat::MamdaTradeRecap::getNetChange](interfaceWombat_1_1MamdaTradeRecap.html#function-getnetchange)


### function getNetChangeFieldState

```csharp
MamdaFieldState getNetChangeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getNetChangeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getnetchangefieldstate)


### function setNetChange

```csharp
void setNetChange(
    MamaPrice netChange
)
```


### function getOpenPrice

```csharp
MamaPrice getOpenPrice()
```

The price of the first qualifying trade in the security during the current trading day. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOpenPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getopenprice)


### function getOpenPriceFieldState

```csharp
MamdaFieldState getOpenPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOpenPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getopenpricefieldstate)


### function setOpenPrice

```csharp
void setOpenPrice(
    MamaPrice openPrice
)
```


### function getOrigCondStr

```csharp
string getOrigCondStr()
```


### function getOrigCondStrFieldState

```csharp
MamdaFieldState getOrigCondStrFieldState()
```


### function setOrigCondStr

```csharp
void setOrigCondStr(
    string origCondStr
)
```


### function getOrigPartId

```csharp
string getOrigPartId()
```


### function getOrigPartIdFieldState

```csharp
MamdaFieldState getOrigPartIdFieldState()
```


### function setOrigPartId

```csharp
void setOrigPartId(
    string origPartId
)
```


### function getOrigPrice

```csharp
MamaPrice getOrigPrice()
```


### function getOrigPriceFieldState

```csharp
MamdaFieldState getOrigPriceFieldState()
```


### function setOrigPrice

```csharp
void setOrigPrice(
    MamaPrice origPrice
)
```


### function getOrigQualStr

```csharp
string getOrigQualStr()
```


### function getOrigQualStrFieldState

```csharp
MamdaFieldState getOrigQualStrFieldState()
```


### function setOrigQualStr

```csharp
void setOrigQualStr(
    string origQualStr
)
```


### function getOrigQualNativeStr

```csharp
string getOrigQualNativeStr()
```


### function getOrigQualNativeStrFieldState

```csharp
MamdaFieldState getOrigQualNativeStrFieldState()
```


### function setOrigQualNativeStr

```csharp
void setOrigQualNativeStr(
    string origQualNativeStr
)
```


### function getOrigSellersSaleDays

```csharp
long getOrigSellersSaleDays()
```


### function getOrigSellersSaleDaysFieldState

```csharp
MamdaFieldState getOrigSellersSaleDaysFieldState()
```


### function setOrigSellersSaleDays

```csharp
void setOrigSellersSaleDays(
    long origSellersSaleDays
)
```


### function getOrigStopStockInd

```csharp
char getOrigStopStockInd()
```


### function getOrigStopStockIndFieldState

```csharp
MamdaFieldState getOrigStopStockIndFieldState()
```


### function setOrigStopStockInd

```csharp
void setOrigStopStockInd(
    char origStopStockInd
)
```


### function getOrigSeqNum

```csharp
long getOrigSeqNum()
```


### function getOrigSeqNumFieldState

```csharp
MamdaFieldState getOrigSeqNumFieldState()
```


### function setOrigSeqNum

```csharp
void setOrigSeqNum(
    long origSeqNum
)
```


### function getOrigVolume

```csharp
long getOrigVolume()
```


### function getOrigVolumeFieldState

```csharp
MamdaFieldState getOrigVolumeFieldState()
```


### function setOrigVolume

```csharp
void setOrigVolume(
    long origVolume
)
```


### function setOrigVolume

```csharp
void setOrigVolume(
    double origVolume
)
```


### function getPctChange

```csharp
double getPctChange()
```

Change in price as a percentage. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getPctChange](interfaceWombat_1_1MamdaTradeRecap.html#function-getpctchange)


### function getPctChangeFieldState

```csharp
MamdaFieldState getPctChangeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getPctChangeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getpctchangefieldstate)


### function setPctChange

```csharp
void setPctChange(
    double pctChange
)
```


### function getPrevCloseDate

```csharp
DateTime getPrevCloseDate()
```

Date corresponding to PrevClosePrice. [getPrevClosePrice()]()

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevCloseDate](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosedate)


### function getPrevCloseDateFieldState

```csharp
MamdaFieldState getPrevCloseDateFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevCloseDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosedatefieldstate)


### function setPrevCloseDate

```csharp
void setPrevCloseDate(
    DateTime prevCloseDate
)
```


### function getAdjPrevClose

```csharp
MamaPrice getAdjPrevClose()
```

The previous close price adjusted by corporate actions, such as dividends and stock splits on the ex-date. [getPrevClosePrice()]()

**Return**: The adjusted previous closing price.

**Reimplements**: [Wombat::MamdaTradeRecap::getAdjPrevClose](interfaceWombat_1_1MamdaTradeRecap.html#function-getadjprevclose)


### function getAdjPrevCloseFieldState

```csharp
MamdaFieldState getAdjPrevCloseFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getAdjPrevCloseFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getadjprevclosefieldstate)


### function setAdjPrevClose

```csharp
void setAdjPrevClose(
    MamaPrice adjPrevClose
)
```


### function getPrevClosePrice

```csharp
MamaPrice getPrevClosePrice()
```

The last qualifying trade price on the previous trading day. This field may be copied from the close price field during the morning "roll" of records in the feedhandler, or it may be obtained from a secondary source, or it may be explicitly sent by the feed prior to the opening of trading for the current day. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevClosePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice)


### function getPrevClosePriceFieldState

```csharp
MamdaFieldState getPrevClosePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevClosePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosepricefieldstate)


### function setPrevClosePrice

```csharp
void setPrevClosePrice(
    MamaPrice prevClosePrice
)
```


### function getSellersSaleDays

```csharp
long getSellersSaleDays()
```


### function getSellersSaleDaysFieldState

```csharp
MamdaFieldState getSellersSaleDaysFieldState()
```


### function setSellersSaleDays

```csharp
void setSellersSaleDays(
    long sellersSaleDays
)
```


### function getStopStockInd

```csharp
char getStopStockInd()
```


### function getStopStockIndFieldState

```csharp
MamdaFieldState getStopStockIndFieldState()
```


### function setStopStockInd

```csharp
void setStopStockInd(
    char stopStockInd
)
```


### function getSrcTime

```csharp
DateTime getSrcTime()
```

Returns the source time. 

**Return**: Source time. Typically, the exchange generated feed

* time stamp. This is often the same as the "event time",
* because many feeds do not distinguish between the actual event
* time and when the exchange sent the message.

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

Returns the field state. 

**Return**: Source time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


### function setSrcTime

```csharp
void setSrcTime(
    DateTime srcTime
)
```


### function getStdDev

```csharp
double getStdDev()
```

Standard deviation of last trade price of a security at the time it is disseminated. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDev](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddev)


### function getStdDevFieldState

```csharp
MamdaFieldState getStdDevFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevfieldstate)


### function setStdDev

```csharp
void setStdDev(
    double stdDev
)
```


### function getStdDevSum

```csharp
double getStdDevSum()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSum](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsum)


### function getStdDevSumFieldState

```csharp
MamdaFieldState getStdDevSumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumfieldstate)


### function setStdDevSum

```csharp
void setStdDevSum(
    double stdDevSum
)
```


### function getStdDevSumSquares

```csharp
double getStdDevSumSquares()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumSquares](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquares)


### function getStdDevSumSquaresFieldState

```csharp
MamdaFieldState getStdDevSumSquaresFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumSquaresFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquaresfieldstate)


### function setStdDevSumSquares

```csharp
void setStdDevSumSquares(
    double stdDevSumSquares
)
```


### function getOrderId

```csharp
long getOrderId()
```

Get the order id, if available. 

**Return**: The trade message unique order id number (if available).

**Reimplements**: [Wombat::MamdaTradeRecap::getOrderId](interfaceWombat_1_1MamdaTradeRecap.html#function-getorderid)


### function getOrderIdFieldState

```csharp
MamdaFieldState getOrderIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOrderIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getorderidfieldstate)


### function setOrderId

```csharp
void setOrderId(
    long orderId
)
```


### function getSettlePrice

```csharp
MamaPrice getSettlePrice()
```

Future's / Options settlement price. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getSettlePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettleprice)


### function getSettlePriceFieldState

```csharp
MamdaFieldState getSettlePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getSettlePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettlepricefieldstate)


### function setSettlePrice

```csharp
void setSettlePrice(
    MamaPrice settlePrice
)
```


### function getSettleDate

```csharp
DateTime getSettleDate()
```

Date corresponding to SettlePrice. [getSettlePrice()](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettleprice)

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getSettleDate](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettledate)


### function getSettleDateFieldState

```csharp
MamdaFieldState getSettleDateFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getSettleDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettledatefieldstate)


### function setSettleDate

```csharp
void setSettleDate(
    DateTime settleDate
)
```


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

getShortSaleCircuitBreaker Returns the ShortSaleCircuitBreaker 

**Return**: the ShortSaleCircuitBreaker

**Reimplements**: [Wombat::MamdaTradeRecap::getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreaker)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Returns the FieldState, always MODIFIED. 

**Return**: the FieldState

**Reimplements**: [Wombat::MamdaTradeRecap::getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function setShortSaleCircuitBreaker

```csharp
void setShortSaleCircuitBreaker(
    char shortSaleCircuitBreaker
)
```

Set the shortSaleCircuitBreaker 

**Parameters**: 

  * **shortSaleCircuitBreaker** 


### function getTotalValue

```csharp
double getTotalValue()
```

Total value of all shares traded in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvalue)


### function getTotalValueFieldState

```csharp
MamdaFieldState getTotalValueFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvaluefieldstate)


### function setTotalValue

```csharp
void setTotalValue(
    double totalValue
)
```


### function getOffExTotalValue

```csharp
double getOffExTotalValue()
```

Total value of all shares traded off exchange in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffextotalvalue)


### function getOffExTotalValueFieldState

```csharp
MamdaFieldState getOffExTotalValueFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffextotalvaluefieldstate)


### function setOffExTotalValue

```csharp
void setOffExTotalValue(
    double offExTotalValue
)
```


### function getOnExTotalValue

```csharp
double getOnExTotalValue()
```

Total value of all shares traded on exchange in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-getonextotalvalue)


### function getOnExTotalValueFieldState

```csharp
MamdaFieldState getOnExTotalValueFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonextotalvaluefieldstate)


### function setOnExTotalValue

```csharp
void setOnExTotalValue(
    double onExTotalValue
)
```


### function getTradeCondStr

```csharp
string getTradeCondStr()
```


### function getTradeCondStrFieldState

```csharp
MamdaFieldState getTradeCondStrFieldState()
```


### function setTradeCondStr

```csharp
void setTradeCondStr(
    string tradeCondStr
)
```


### function getTradeCount

```csharp
long getTradeCount()
```

The number of trades today. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeCount](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradecount)


### function getTradeCountFieldState

```csharp
MamdaFieldState getTradeCountFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeCountFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradecountfieldstate)


### function setTradeCount

```csharp
void setTradeCount(
    long tradeCount
)
```


### function getTradeUnits

```csharp
string getTradeUnits()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getTradeUnits](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeunits)


### function getTradeUnitsFieldState

```csharp
MamdaFieldState getTradeUnitsFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeUnitsFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeunitsfieldstate)


### function setTradeUnits

```csharp
void setTradeUnits(
    string tradeUnits
)
```


### function getLastSeqNum

```csharp
long getLastSeqNum()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getLastSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastseqnum)


### function getLastSeqNumFieldState

```csharp
MamdaFieldState getLastSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getLastSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastseqnumfieldstate)


### function setLastSeqNum

```csharp
void setLastSeqNum(
    long lastSeqNum
)
```


### function getHighSeqNum

```csharp
long getHighSeqNum()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getHighSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighseqnum)


### function getHighSeqNumFieldState

```csharp
MamdaFieldState getHighSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getHighSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighseqnumfieldstate)


### function setHighSeqNum

```csharp
void setHighSeqNum(
    long highSeqNum
)
```


### function getLowSeqNum

```csharp
long getLowSeqNum()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getLowSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowseqnum)


### function getLowSeqNumFieldState

```csharp
MamdaFieldState getLowSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getLowSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowseqnumfieldstate)


### function setLowSeqNum

```csharp
void setLowSeqNum(
    long lowSeqNum
)
```


### function getTotalVolumeSeqNum

```csharp
long getTotalVolumeSeqNum()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getTotalVolumeSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnum)


### function getTotalVolumeSeqNumFieldState

```csharp
MamdaFieldState getTotalVolumeSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalVolumeSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnumfieldstate)


### function setTotalVolumeSeqNum

```csharp
void setTotalVolumeSeqNum(
    long totalVolumeSeqNum
)
```


### function getCurrencyCode

```csharp
string getCurrencyCode()
```


**Reimplements**: [Wombat::MamdaTradeRecap::getCurrencyCode](interfaceWombat_1_1MamdaTradeRecap.html#function-getcurrencycode)


### function getCurrencyCodeFieldState

```csharp
MamdaFieldState getCurrencyCodeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getCurrencyCodeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getcurrencycodefieldstate)


### function setCurrencyCode

```csharp
void setCurrencyCode(
    string currencyCode
)
```


### function getTradeDirection

```csharp
string getTradeDirection()
```

Trade tick direction. 0 : No direction is currently known/available. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDirection](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedirection)




* : Up tick.
* : Down tick. 0+ : Unchanged; Previous move was up tick. 0- : Unchanged; Previous move was down tick. NA : Not applicable. (If it is meaningful to have such a value for some exchanges.)


### function getTradeDirectionFieldState

```csharp
MamdaFieldState getTradeDirectionFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDirectionFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedirectionfieldstate)


### function setTradeDirection

```csharp
void setTradeDirection(
    string tradeDirection
)
```


### function getSide

```csharp
string getSide()
```

Returns the Aggressor side or TradeSide 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getSide](interfaceWombat_1_1MamdaTradeRecap.html#function-getside)


AggressorSide: 0 : No AggressorSide is currently known/available. 1 or B : Buy 2 or S : Sell

TradeSide: TRADE_SIDE_UNKNOWN TRADE_SIDE_BUY TRADE_SIDE_SELL


### function getSideFieldState

```csharp
MamdaFieldState getSideFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getSideFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsidefieldstate)


### function setSide

```csharp
void setSide(
    string tradeSide
)
```


### function getTradePartId

```csharp
string getTradePartId()
```


### function getTradePartIdFieldState

```csharp
MamdaFieldState getTradePartIdFieldState()
```


### function setTradePartId

```csharp
void setTradePartId(
    string tradePartId
)
```


### function getTradePrice

```csharp
MamaPrice getTradePrice()
```


### function getTradePriceFieldState

```csharp
MamdaFieldState getTradePriceFieldState()
```


### function setTradePrice

```csharp
void setTradePrice(
    MamaPrice tradePrice
)
```


### function getTradeQualStr

```csharp
string getTradeQualStr()
```


### function getTradeQualStrFieldState

```csharp
MamdaFieldState getTradeQualStrFieldState()
```


### function setTradeQualStr

```csharp
void setTradeQualStr(
    string tradeQualStr
)
```


### function getTradeQualNativeStr

```csharp
string getTradeQualNativeStr()
```


### function getTradeQualNativeStrFieldState

```csharp
MamdaFieldState getTradeQualNativeStrFieldState()
```


### function setTradeQualNativeStr

```csharp
void setTradeQualNativeStr(
    string tradeQualNativeStr
)
```


### function getTradeVolume

```csharp
long getTradeVolume()
```


### function getTradeVolumeFieldState

```csharp
MamdaFieldState getTradeVolumeFieldState()
```


### function setTradeVolume

```csharp
void setTradeVolume(
    long tradeVolume
)
```


### function setTradeVolume

```csharp
void setTradeVolume(
    double tradeVolume
)
```


### function getVwap

```csharp
double getVwap()
```

Volume-weighted average price of a security at the time it is disseminated. Equivalent to dividing total value by total volume. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getvwap)


### function getVwapFieldState

```csharp
MamdaFieldState getVwapFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getvwapfieldstate)


### function setVwap

```csharp
void setVwap(
    double vwap
)
```


### function getOffExVwap

```csharp
double getOffExVwap()
```

Volume-weighted average off exchange price of a security at the time it is disseminated. Equivalent to dividing total value by total volume. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexvwap)


### function getOffExVwapFieldState

```csharp
MamdaFieldState getOffExVwapFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexvwapfieldstate)


### function setOffExVwap

```csharp
void setOffExVwap(
    double offExVwap
)
```


### function getOnExVwap

```csharp
double getOnExVwap()
```

Volume-weighted average on exchange price of a security at the time it is disseminated. Equivalent to dividing total value by total volume. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexvwap)


### function getOnExVwapFieldState

```csharp
MamdaFieldState getOnExVwapFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexvwapfieldstate)


### function setOnExVwap

```csharp
void setOnExVwap(
    double onExVwap
)
```


### function IsIrregular

```csharp
bool IsIrregular()
```


### function setIsIrregular

```csharp
void setIsIrregular(
    bool isIrregular
)
```


### function IsCancel

```csharp
bool IsCancel()
```


### function setIsCancel

```csharp
void setIsCancel(
    bool isCancel
)
```


### function getTradeExecVenue

```csharp
string getTradeExecVenue()
```

Trade execution venue. Unknown OnExchange OnExchangeOffBook OffExchange 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeExecVenue](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeexecvenue)


### function getTradeExecVenueFieldState

```csharp
MamdaFieldState getTradeExecVenueFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeExecVenueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeexecvenuefieldstate)


### function setTradeExecVenue

```csharp
void setTradeExecVenue(
    string tradeExecVenue
)
```


### function getOffExchangeTradePrice

```csharp
MamaPrice getOffExchangeTradePrice()
```

Monetary value of an individual off exchange share of the security at the time of the trade. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExchangeTradePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradeprice)


### function getOffExchangeTradePriceFieldState

```csharp
MamdaFieldState getOffExchangeTradePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExchangeTradePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradepricefieldstate)


### function setOffExchangeTradePrice

```csharp
void setOffExchangeTradePrice(
    MamaPrice offExTradePrice
)
```


### function getOnExchangeTradePrice

```csharp
MamaPrice getOnExchangeTradePrice()
```

Monetary value of an individual off exchange share of the security at the time of the trade. 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExchangeTradePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexchangetradeprice)


### function getOnExchangeTradePriceFieldState

```csharp
MamdaFieldState getOnExchangeTradePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExchangeTradePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexchangetradepricefieldstate)


### function setOnExchangeTradePrice

```csharp
void setOnExchangeTradePrice(
    MamaPrice onExTradePrice
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100