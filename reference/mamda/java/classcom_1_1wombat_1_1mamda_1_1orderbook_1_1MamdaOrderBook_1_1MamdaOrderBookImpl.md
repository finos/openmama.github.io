---
title: com::wombat::mamda::orderbook::MamdaOrderBook::MamdaOrderBookImpl
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBook::MamdaOrderBookImpl





## Public Functions

|                | Name           |
| -------------- | -------------- |
| abstract boolean | **[isReadOnly](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-isreadonly)**() |
| void | **[setSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setsymbol)**(String symbol) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getsymbol)**() |
| void | **[setPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setpartid)**(String PartId) |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getpartid)**() |
| boolean | **[hasPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-haspartid)**() |
| MamaDateTime | **[getBookTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getbooktime)**() |
| void | **[setBookTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setbooktime)**(MamaDateTime value) |
| void | **[setSourceDerivative](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setsourcederivative)**(MamaSourceDerivative value) |
| MamaSourceDerivative | **[getSourceDerivative](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getsourcederivative)**() |
| MamaSource | **[getSource](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getsource)**() |
| void | **[setQuality](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setquality)**(short quality) |
| short | **[getQuality](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getquality)**() |
| void | **[setClosure](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setclosure)**(Object closure) |
| Object | **[getClosure](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getclosure)**() |
| void | **[setIsConsistent](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setisconsistent)**(boolean isConsistent) |
| boolean | **[getIsConsistent](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getisconsistent)**() |
| abstract void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-clear)**() |
| abstract [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[findOrCreateLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-findorcreatelevel)**(double price, char side) |
| abstract [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[findLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-findlevel)**(double price, char side) |
| abstract [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getMarketOrdersSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getmarketordersside)**(char side) |
| abstract [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getOrCreateMarketOrdersSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getorcreatemarketordersside)**(char side) |
| abstract void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-apply)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) deltaBook) |
| abstract void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-apply)**([MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| abstract void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-apply)**([MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| abstract void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-apply)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| abstract void | **[copy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-copy)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| abstract long | **[getTotalNumLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-gettotalnumlevels)**() |
| abstract int | **[getNumBidLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getnumbidlevels)**() |
| abstract int | **[getNumAskLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getnumasklevels)**() |
| abstract [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getLevelAtPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getlevelatprice)**(double price, char side) |
| abstract [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getLevelAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getlevelatposition)**(long pos, char side) |
| abstract [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getEntryAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getentryatposition)**(long pos, char side) |
| abstract void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-addentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, double price, char side, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| abstract void | **[addLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-addlevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| abstract void | **[updateLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-updatelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| abstract void | **[deleteLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-deletelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| abstract void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-updateentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, double size, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| abstract void | **[deleteEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-deleteentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| abstract void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-addentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| abstract void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-updateentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| abstract void | **[deleteEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-deleteentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| abstract void | **[addEntriesFromBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-addentriesfrombook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book, [MamdaOrderBookEntryFilter](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryFilter.html) filter, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| abstract void | **[addPriceLevelsFromBookAsEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-addpricelevelsfrombookasentries)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book, String source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| abstract void | **[deleteEntriesFromSource](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-deleteentriesfromsource)**(MamaSource source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| abstract void | **[generateDeltaMsgs](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-generatedeltamsgs)**(boolean publish) |
| abstract void | **[addDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-adddelta)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level, double plDeltaSize, char plAction, char entryAction) |
| abstract void | **[detach](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-detach)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| abstract Iterator | **[bidIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-biditerator)**() |
| abstract Iterator | **[askIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-askiterator)**() |
| void | **[assertEqual](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-assertequal)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) rhs) |
| boolean | **[populateDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-populatedelta)**(MamaMsg msg) |
| void | **[populateRecap](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-populaterecap)**(MamaMsg msg, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) mBook) |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-dump)**() |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-dump)**(OutputStream outputStream) |
| boolean | **[equals](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-equals)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) obj) |
| abstract void | **[setAsDeltaDifference](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setasdeltadifference)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) lhs, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) rhs) |
| abstract void | **[setAsDeltaDeleted](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setasdeltadeleted)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) bookToDelete) |
| abstract boolean | **[reevaluate](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-reevaluate)**() |
| void | **[setNeedsReevaluation](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setneedsreevaluation)**(boolean need) |
| boolean | **[getNeedsReevaluation](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getneedsreevaluation)**() |
| void | **[setCheckSourceState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-setchecksourcestate)**(boolean check) |
| boolean | **[getCheckSourceState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-getchecksourcestate)**() |
| Iterator | **[bidEntryIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-bidentryiterator)**() |
| Iterator | **[askEntryIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#function-askentryiterator)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[mPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mprice)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| String | **[mSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-msymbol)**  |
| String | **[mPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mpartid)**  |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[parent](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-parent)**  |
| boolean | **[mIsConsistent](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-misconsistent)**  |
| MamaDateTime | **[mBookTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mbooktime)**  |
| MamaSourceDerivative | **[mSourceDeriv](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-msourcederiv)**  |
| short | **[mQuality](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mquality)**  |
| Object | **[mClosure](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mclosure)**  |
| boolean | **[mCheckVisibility](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mcheckvisibility)**  |
| boolean | **[mNeedsReevaluation](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mneedsreevaluation)**  |
| boolean | **[mHasPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mhaspartid)**  |
| boolean | **[mGenerateDeltas](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mgeneratedeltas)**  |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[mBidMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mbidmarketorders)**  |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[mAskMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-maskmarketorders)**  |
| int | **[mCurrentDeltaCount](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mcurrentdeltacount)**  |
| [MamdaOrderBookConcreteSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html) | **[mPublishSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mpublishsimpledelta)**  |
| [MamdaOrderbookConcreteComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html) | **[mPublishComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mpublishcomplexdelta)**  |
| MamdaOrderBookWriter | **[mWriter](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-mwriter)**  |
| MamaPrice | **[tmpPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookImpl.html#variable-tmpprice)**  |

## Public Functions Documentation

### function isReadOnly

```java
abstract boolean isReadOnly()
```


### function setSymbol

```java
inline void setSymbol(
    String symbol
)
```


### function getSymbol

```java
inline String getSymbol()
```


### function setPartId

```java
inline void setPartId(
    String PartId
)
```


### function getPartId

```java
inline String getPartId()
```


### function hasPartId

```java
inline boolean hasPartId()
```


### function getBookTime

```java
inline MamaDateTime getBookTime()
```


### function setBookTime

```java
inline void setBookTime(
    MamaDateTime value
)
```


### function setSourceDerivative

```java
inline void setSourceDerivative(
    MamaSourceDerivative value
)
```


### function getSourceDerivative

```java
inline MamaSourceDerivative getSourceDerivative()
```


### function getSource

```java
inline MamaSource getSource()
```


### function setQuality

```java
inline void setQuality(
    short quality
)
```


### function getQuality

```java
inline short getQuality()
```


### function setClosure

```java
inline void setClosure(
    Object closure
)
```


### function getClosure

```java
inline Object getClosure()
```


### function setIsConsistent

```java
inline void setIsConsistent(
    boolean isConsistent
)
```


### function getIsConsistent

```java
inline boolean getIsConsistent()
```


### function clear

```java
abstract void clear()
```


### function findOrCreateLevel

```java
abstract MamdaOrderBookPriceLevel findOrCreateLevel(
    double price,
    char side
)
```


### function findLevel

```java
abstract MamdaOrderBookPriceLevel findLevel(
    double price,
    char side
)
```


### function getMarketOrdersSide

```java
abstract MamdaOrderBookPriceLevel getMarketOrdersSide(
    char side
)
```


### function getOrCreateMarketOrdersSide

```java
abstract MamdaOrderBookPriceLevel getOrCreateMarketOrdersSide(
    char side
)
```


### function apply

```java
abstract void apply(
    MamdaOrderBook deltaBook
)
```


### function apply

```java
abstract void apply(
    MamdaOrderBookBasicDelta delta
)
```


### function apply

```java
abstract void apply(
    MamdaBookAtomicLevel level
)
```


### function apply

```java
abstract void apply(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function copy

```java
abstract void copy(
    MamdaOrderBook book
)
```


### function getTotalNumLevels

```java
abstract long getTotalNumLevels()
```


### function getNumBidLevels

```java
abstract int getNumBidLevels()
```


### function getNumAskLevels

```java
abstract int getNumAskLevels()
```


### function getLevelAtPrice

```java
abstract MamdaOrderBookPriceLevel getLevelAtPrice(
    double price,
    char side
)
```


### function getLevelAtPosition

```java
abstract MamdaOrderBookPriceLevel getLevelAtPosition(
    long pos,
    char side
)
```


### function getEntryAtPosition

```java
abstract MamdaOrderBookEntry getEntryAtPosition(
    long pos,
    char side
)
```


### function addEntry

```java
abstract void addEntry(
    MamdaOrderBookEntry entry,
    double price,
    char side,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
)
```


### function addLevel

```java
abstract void addLevel(
    MamdaOrderBookPriceLevel level
)
```


### function updateLevel

```java
abstract void updateLevel(
    MamdaOrderBookPriceLevel level
)
```


### function deleteLevel

```java
abstract void deleteLevel(
    MamdaOrderBookPriceLevel level
)
```


### function updateEntry

```java
abstract void updateEntry(
    MamdaOrderBookEntry entry,
    double size,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
)
```


### function deleteEntry

```java
abstract void deleteEntry(
    MamdaOrderBookEntry entry,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
)
```


### function addEntry

```java
abstract void addEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function updateEntry

```java
abstract void updateEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function deleteEntry

```java
abstract void deleteEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function addEntriesFromBook

```java
abstract void addEntriesFromBook(
    MamdaOrderBook book,
    MamdaOrderBookEntryFilter filter,
    MamdaOrderBookBasicDeltaList delta
)
```


### function addPriceLevelsFromBookAsEntries

```java
abstract void addPriceLevelsFromBookAsEntries(
    MamdaOrderBook book,
    String source,
    MamdaOrderBookBasicDeltaList delta
)
```


### function deleteEntriesFromSource

```java
abstract void deleteEntriesFromSource(
    MamaSource source,
    MamdaOrderBookBasicDeltaList delta
)
```


### function generateDeltaMsgs

```java
abstract void generateDeltaMsgs(
    boolean publish
)
```


### function addDelta

```java
abstract void addDelta(
    MamdaOrderBookEntry entry,
    MamdaOrderBookPriceLevel level,
    double plDeltaSize,
    char plAction,
    char entryAction
)
```


### function detach

```java
abstract void detach(
    MamdaOrderBookPriceLevel level
)
```


### function bidIterator

```java
abstract Iterator bidIterator()
```


### function askIterator

```java
abstract Iterator askIterator()
```


### function assertEqual

```java
inline void assertEqual(
    MamdaOrderBook rhs
)
```


### function populateDelta

```java
inline boolean populateDelta(
    MamaMsg msg
)
```


### function populateRecap

```java
inline void populateRecap(
    MamaMsg msg,
    MamdaOrderBook mBook
)
```


### function dump

```java
inline void dump()
```


### function dump

```java
inline void dump(
    OutputStream outputStream
)
```


### function equals

```java
inline boolean equals(
    MamdaOrderBook obj
)
```


### function setAsDeltaDifference

```java
abstract void setAsDeltaDifference(
    MamdaOrderBook lhs,
    MamdaOrderBook rhs
)
```


### function setAsDeltaDeleted

```java
abstract void setAsDeltaDeleted(
    MamdaOrderBook bookToDelete
)
```


### function reevaluate

```java
abstract boolean reevaluate()
```


### function setNeedsReevaluation

```java
inline void setNeedsReevaluation(
    boolean need
)
```


### function getNeedsReevaluation

```java
inline boolean getNeedsReevaluation()
```


### function setCheckSourceState

```java
inline void setCheckSourceState(
    boolean check
)
```


### function getCheckSourceState

```java
inline boolean getCheckSourceState()
```


### function bidEntryIterator

```java
inline Iterator bidEntryIterator()
```


### function askEntryIterator

```java
inline Iterator askEntryIterator()
```


## Public Attributes Documentation

### variable mPrice

```java
MamaPrice mPrice = new MamaPrice ();
```


## Protected Attributes Documentation

### variable mSymbol

```java
String mSymbol = "";
```


### variable mPartId

```java
String mPartId = "";
```


### variable parent

```java
MamdaOrderBook parent;
```


### variable mIsConsistent

```java
boolean mIsConsistent = true;
```


### variable mBookTime

```java
MamaDateTime mBookTime = null;
```


### variable mSourceDeriv

```java
MamaSourceDerivative mSourceDeriv;
```


### variable mQuality

```java
short mQuality = MamaQuality.QUALITY_UNKNOWN;
```


### variable mClosure

```java
Object mClosure = null;
```


### variable mCheckVisibility

```java
boolean mCheckVisibility = false;
```


### variable mNeedsReevaluation

```java
boolean mNeedsReevaluation = false;
```


### variable mHasPartId

```java
boolean mHasPartId = false;
```


### variable mGenerateDeltas

```java
boolean mGenerateDeltas = false;
```


### variable mBidMarketOrders

```java
MamdaOrderBookPriceLevel mBidMarketOrders = null;
```


### variable mAskMarketOrders

```java
MamdaOrderBookPriceLevel mAskMarketOrders = null;
```


### variable mCurrentDeltaCount

```java
int mCurrentDeltaCount = 0;
```


### variable mPublishSimpleDelta

```java
MamdaOrderBookConcreteSimpleDelta mPublishSimpleDelta = null;
```


### variable mPublishComplexDelta

```java
MamdaOrderbookConcreteComplexDelta mPublishComplexDelta = null;
```


### variable mWriter

```java
MamdaOrderBookWriter mWriter = null;
```


### variable tmpPrice

```java
MamaPrice tmpPrice = new MamaPrice();
```


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100