---
title: Wombat
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat



## Namespaces

| Name           |
| -------------- |
| **[Wombat::Containers](namespaceWombat_1_1Containers.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaAuctionFields](classWombat_1_1MamdaAuctionFields.html)** <br>Cache of common Quote related field descriptors. This is required to be populated if using the [MamdaQuoteListener]().  |
| interface | **[Wombat::MamdaAuctionHandler](interfaceWombat_1_1MamdaAuctionHandler.html)** <br>[MamdaAuctionHandler]() is an interface for applications that want to have an easy way to handle Auction updates. The interface defines callback methods for different types of Auction-related events:  |
| class | **[Wombat::MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html)** <br>[MamdaAuctionListener]() is a class that specializes in handling Auction updates. Developers provide their own implementation of the [MamdaAuctionHandler](interfaceWombat_1_1MamdaAuctionHandler.html) interface and will be delivered notifications for Auctions and Auction closing prices. An obvious application for this MAMDA class is any kind of Auction tick capture application.  |
| interface | **[Wombat::MamdaAuctionRecap](interfaceWombat_1_1MamdaAuctionRecap.html)** <br>[MamdaAuctionRecap]() is an interface that provides access to Auction related fields.  |
| interface | **[Wombat::MamdaAuctionUpdate](interfaceWombat_1_1MamdaAuctionUpdate.html)** <br>[MamdaAuctionUpdate]() is an interface that provides access to fields related to quote updates.  |
| interface | **[Wombat::MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)** <br>[MamdaBasicEvent]() is a superclass interface that provides access to common event related fields. Events types include trades, quotes, order book updates, closing summaries, etc. See the individual subclasses for specific information about each event type.  |
| interface | **[Wombat::MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)** <br>[MamdaBasicRecap]() is an interface that provides access to common recap-related fields.  |
| class | **[Wombat::MamdaCommonFields](classWombat_1_1MamdaCommonFields.html)** <br>Maintains a cache of common update field descriptors.  |
| class | **[Wombat::MamdaConcreteOrderImbalanceRecap](classWombat_1_1MamdaConcreteOrderImbalanceRecap.html)**  |
| class | **[Wombat::MamdaConcreteQuoteRecap](classWombat_1_1MamdaConcreteQuoteRecap.html)**  |
| class | **[Wombat::MamdaConcreteSecurityStatusRecap](classWombat_1_1MamdaConcreteSecurityStatusRecap.html)**  |
| class | **[Wombat::MamdaConcreteTradeRecap](classWombat_1_1MamdaConcreteTradeRecap.html)**  |
| class | **[Wombat::MamdaDataException](classWombat_1_1MamdaDataException.html)** <br>MAMDA data exceptions.  |
| class | **[Wombat::MamdaErrorCodes](classWombat_1_1MamdaErrorCodes.html)** <br>Helper class to transform error codes into their textual description and to map mamaMsgStatus codes to [MamdaErrorCodes]() |
| interface | **[Wombat::MamdaErrorListener](interfaceWombat_1_1MamdaErrorListener.html)** <br>[MamdaErrorListener]() defines an interface for handling error notifications for a [MamdaSubscription]().  |
| class | **[Wombat::MamdaErrorSeverities](classWombat_1_1MamdaErrorSeverities.html)** <br>Helper class  |
| class | **[Wombat::MamdaFields](classWombat_1_1MamdaFields.html)** <br>Common base class for all the MamdaXXXFields classes.  |
| class | **[Wombat::MamdaFundamentalFields](classWombat_1_1MamdaFundamentalFields.html)** <br>Maintains a cache of common fundamental field descriptors.  |
| interface | **[Wombat::MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html)** <br>[MamdaFundamentalHandler]() is an interface for applications that want to have an easy way to access fundamental equity pricing/analysis attributes, indicators and ratios. The interface defines a single callback methods for for receiving updates on fundamental data.  |
| class | **[Wombat::MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html)** <br>[MamdaFundamentalListener]() is a class that specializes in handling fundamental equity pricing/analysis attributes, indicators and ratios. Developers provide their own implementation of the [MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html) interface and will be delivered notifications for updates in the fundamental data. An obvious application for this MAMDA class is any kind of pricing analysis application.  |
| interface | **[Wombat::MamdaFundamentals](interfaceWombat_1_1MamdaFundamentals.html)** <br>[MamdaFundamentals]() is an interface that provides access to the fundamental equity pricing/analysis attributes, indicators and ratios.  |
| interface | **[Wombat::MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html)** <br>[MamdaMsgListener]() defines an interface for handling normal messages for a [MamdaSubscription]().  |
| interface | **[Wombat::MamdaMultiParticipantHandler](interfaceWombat_1_1MamdaMultiParticipantHandler.html)** <br>The [MamdaMultiParticipantHandler]() class is an interface that allows a developer to be notified dynamically when new partipant updates are received on the underlying subscription. This is useful for handling information such as NYSE, AMEX and NASDAQ listed securities (including NQDS). Access to consolidated information (i.e., best bid and offer and consolidated trade info) is also available.  |
| class | **[Wombat::MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html)** <br>[MamdaMultiParticipantManager]() is a class that manages updates on a consolidated basis for securities that may be traded on multiple exchanges and which may have a national best bid and offer. Developers are notified of each element available for the consolidated security, including the national best bid and offer, and each regional exchange (Market Maker). Developers can pick and choose which elements they wish to provide handling for (e.g., BBO-only, certain regional exchanges, etc.).  |
| interface | **[Wombat::MamdaMultiSecurityHandler](interfaceWombat_1_1MamdaMultiSecurityHandler.html)** <br>[MamdaMultiSecurityHandler]() is an interface that allows a developer to be notified dynamically when new security updates are received on a group subscription.  |
| class | **[Wombat::MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html)** <br>[MamdaMultiSecurityManager]() is a class that manages updates on a group symbol which provides a single subscription to multiple different securities. Developers are notified of each element available for the group and can choose which elements they wish to provide handling for (e.g. based on wildcards).  |
| class | **[Wombat::MamdaOrderImbalanceFields](classWombat_1_1MamdaOrderImbalanceFields.html)** <br>Utility cache of  |
| interface | **[Wombat::MamdaOrderImbalanceHandler](interfaceWombat_1_1MamdaOrderImbalanceHandler.html)** <br>[MamdaOrderImbalanceHandler]() is an interface for applications that want to have an easy way to handle order imbalance updates. The interface defines callback methods for different types of order-imbalance events:  |
| class | **[Wombat::MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html)** <br>A [MamdaOrderImbalanceListener]() is class that specializes in handling imbalance order updates. An imbalance order occurs when too many orders of a particular type - either buy, sell or limit - for listed securities and not enough of the other, matching orders are received by an exchange. Developers provide their own implementation of the [MamdaOrderImbalanceHandler](interfaceWombat_1_1MamdaOrderImbalanceHandler.html) interface and will be delivered notifications for imbalance updates.  |
| interface | **[Wombat::MamdaOrderImbalanceRecap](interfaceWombat_1_1MamdaOrderImbalanceRecap.html)** <br>[MamdaOrderImbalanceRecap]() is an interface that provides access to order imbalance related fields.  |
| class | **[Wombat::MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html)**  |
| class | **[Wombat::MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html)**  |
| interface | **[Wombat::MamdaQuoteClosing](interfaceWombat_1_1MamdaQuoteClosing.html)** <br>[MamdaQuoteClosing]() is an interface that provides access to quote closing related fields.  |
| class | **[Wombat::MamdaQuoteFields](classWombat_1_1MamdaQuoteFields.html)** <br>Cache of common Quote related field descriptors. This is required to be populated if using the [MamdaQuoteListener]().  |
| interface | **[Wombat::MamdaQuoteGap](interfaceWombat_1_1MamdaQuoteGap.html)** <br>[MamdaQuoteGap]() is an interface that provides access to fields related to gap in quote reporting.  |
| interface | **[Wombat::MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html)** <br>[MamdaQuoteHandler]() is an interface for applications that want to have an easy way to handle quote updates. The interface defines callback methods for different types of quote-related events: quotes and closing-quote updates.  |
| class | **[Wombat::MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html)** <br>[MamdaQuoteListener]() is a class that specializes in handling quote updates. Developers provide their own implementation of the [MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html) interface and will be delivered notifications for quotes and quote closing prices. An obvious application for this MAMDA class is any kind of quote tick capture application.  |
| interface | **[Wombat::MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html)** <br>[MamdaQuoteRecap]() is an interface that provides access to quote related fields.  |
| interface | **[Wombat::MamdaQuoteUpdate](interfaceWombat_1_1MamdaQuoteUpdate.html)** <br>[MamdaQuoteUpdate]() is an interface that provides access to fields related to quote updates.  |
| class | **[Wombat::MamdaResourceContainer](classWombat_1_1MamdaResourceContainer.html)**  |
| class | **[Wombat::MamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html)** <br>Security Status values  |
| class | **[Wombat::MamdaSecurityStatusFields](classWombat_1_1MamdaSecurityStatusFields.html)** <br>Maintains a cache of common security status related FieldDescriptors.  |
| interface | **[Wombat::MamdaSecurityStatusHandler](interfaceWombat_1_1MamdaSecurityStatusHandler.html)** <br>[MamdaSecurityStatusHandler]() is an interface for applications that want to have an easy way to handle security status updates. The interface defines callback methods for status update and recap events.  |
| class | **[Wombat::MamdaSecurityStatusListener](classWombat_1_1MamdaSecurityStatusListener.html)** <br>[MamdaSecurityStatusListener]() is a class that specializes in handling security status updates. Developers provide their own implementation of the [MamdaSecurityStatusHandler](interfaceWombat_1_1MamdaSecurityStatusHandler.html) interface and will be delivered notifications for security status updates.  |
| class | **[Wombat::MamdaSecurityStatusQual](classWombat_1_1MamdaSecurityStatusQual.html)**  |
| interface | **[Wombat::MamdaSecurityStatusRecap](interfaceWombat_1_1MamdaSecurityStatusRecap.html)** <br>[MamdaSecurityStatusRecap]() is an interface that provides access to security status related fields.  |
| interface | **[Wombat::MamdaSecurityStatusUpdate](interfaceWombat_1_1MamdaSecurityStatusUpdate.html)** <br>[MamdaSecurityStatusUpdate]() is an interface that provides access to security status related fields.  |
| interface | **[Wombat::MamdaStaleListener](interfaceWombat_1_1MamdaStaleListener.html)** <br>[MamdaStaleListener]() defines an interface for handling changes in quality of the subscription through notifications for a [MamdaSubscription]().  |
| class | **[Wombat::MamdaSubscription](classWombat_1_1MamdaSubscription.html)** <br>A [MamdaSubscription]() is used to register interest in a particular symbol and source. A MamaTransport is required to actually activate the subscription.  |
| interface | **[Wombat::MamdaTradeCancelOrError](interfaceWombat_1_1MamdaTradeCancelOrError.html)** <br>[MamdaTradeCancelOrError]() is an interface that provides access to fields related to trade cancellations and errors.  |
| interface | **[Wombat::MamdaTradeClosing](interfaceWombat_1_1MamdaTradeClosing.html)** <br>[MamdaTradeClosing]() is an interface that provides access to fields related to trade closing reports. There is no need to provide access to total volume, open/high/low, etc., since these fields are also available in the recap interface passed along with closing messages.  |
| interface | **[Wombat::MamdaTradeCorrection](interfaceWombat_1_1MamdaTradeCorrection.html)** <br>[MamdaTradeCorrection]() is an interface that provides access to fields related to trade corrections.  |
| class | **[Wombat::MamdaTradeFields](classWombat_1_1MamdaTradeFields.html)** <br>Cache of common trade related field descriptors. This is required to be populated if using the [MamdaTradeListener]().  |
| interface | **[Wombat::MamdaTradeGap](interfaceWombat_1_1MamdaTradeGap.html)** <br>[MamdaTradeGap]() is an interface that provides access to fields related to gap in trade reporting.  |
| interface | **[Wombat::MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html)** <br>[MamdaTradeHandler]() is an interface for applications that want to have an easy way to handle trade updates. The interface defines callback methods for different types of trade-related events: trades, errors/cancels, corrections, recaps and closing reports.  |
| class | **[Wombat::MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)** <br>[MamdaTradeListener]() is a class that specializes in handling trade updates. Developers provide their own implementation of the [MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html) interface and will be delivered notifications for trades, trade cancels/error/corrections, and trade closing prices. An obvious application for this MAMDA class is any kind of trade tick capture application.  |
| interface | **[Wombat::MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html)** <br>[MamdaTradeRecap]() is an interface that provides access to trade related fields.  |
| interface | **[Wombat::MamdaTradeReport](interfaceWombat_1_1MamdaTradeReport.html)** <br>[MamdaTradeReport]() is an interface that provides access to fields related to a trade report. This class is used for all trade reports, whether those trades qualify as regular or irregular trades. (A regular trade generally qualifies to update the official last price and intraday high/low prices.)  |
| class | **[Wombat::MamdaTradeSide](classWombat_1_1MamdaTradeSide.html)**  |
| class | **[Wombat::MamdaUncrossPriceInd](classWombat_1_1MamdaUncrossPriceInd.html)** <br>Security Status values  |
| class | **[Wombat::MamdaOptionChain](classWombat_1_1MamdaOptionChain.html)** <br>[MamdaOptionChain]() is a specialized class to represent market data option chains. The class has capabilities to store the current state of an entire option chain, or a subset of the chain.  |
| interface | **[Wombat::MamdaOptionChainHandler](interfaceWombat_1_1MamdaOptionChainHandler.html)**  |
| class | **[Wombat::MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html)** <br>[MamdaOptionChainListener]() is a class that specializes in handling and managing option chain updates. Developers provide their own implementation of the [MamdaOptionChainHandler](interfaceWombat_1_1MamdaOptionChainHandler.html) interface and will be delivered notifications for various types of options-related events.  |
| class | **[Wombat::MamdaOptionChainView](classWombat_1_1MamdaOptionChainView.html)** <br>A class that represents a "view" of a subset of an option chain. The view can be restricted to a percentage or number of strike prices around "the money" as well as to a maximum number of days into the future. The view will be adjusted to include strike prices within the range as the underlying price moves. This means that the range of strike prices will change over time. In order to avoid a "jitter" in the range of strike prices when the underlying price hovers right on the edge of a range boundary, the class also provides a "jitter margin" as some percentage of the underyling price (default is 0.5%).  |
| interface | **[Wombat::MamdaOptionChainViewRangeHandler](interfaceWombat_1_1MamdaOptionChainViewRangeHandler.html)** <br>Interface to handle change in a [MamdaOptionChainView](classWombat_1_1MamdaOptionChainView.html) range.  |
| class | **[Wombat::MamdaOptionContract](classWombat_1_1MamdaOptionContract.html)** <br>A class that represents a single option contract. Instances of this object are typically created by the [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html). Applications may attach a custom object to each instance of [MamdaOptionContract]().  |
| class | **[Wombat::MamdaOptionContractSet](classWombat_1_1MamdaOptionContractSet.html)** <br>A class that represents a set of option contracts at a given strike price.  |
| class | **[Wombat::MamdaOptionExchangeUtils](classWombat_1_1MamdaOptionExchangeUtils.html)** <br>A class with static utility functions for dealing with exchanges.  |
| class | **[Wombat::MamdaOptionExpirationDateSet](classWombat_1_1MamdaOptionExpirationDateSet.html)** <br>A class that represents a set of expiration dates, each of which contains a set of strike prices ([MamdaOptionStrikeSet]()), each of which contains a set of option contracts ([MamdaOptionContractSet](classWombat_1_1MamdaOptionContractSet.html)), each of which contains exchange-specific contracts. To access a set of strike prices for a given expiration date, use the get method (inherited from TreeMap).  |
| class | **[Wombat::MamdaOptionExpirationStrikes](classWombat_1_1MamdaOptionExpirationStrikes.html)** <br>A class that represents a set of strike prices at a particlar expiration date. Each strike price of which contains a set of option contracts, each of which contains exchange-specific contracts. To access a contract set for a given strike price, use the get method (inherited from TreeMap).  |
| class | **[Wombat::MamdaOptionFields](classWombat_1_1MamdaOptionFields.html)** <br>Maintains a cache of common options related field descriptors.  |
| interface | **[Wombat::MamdaOptionSeriesUpdate](interfaceWombat_1_1MamdaOptionSeriesUpdate.html)** <br>[MamdaOptionSeriesUpdate]() is an interface that provides access to fields related to option series update events. Update events include adds/removes of contracts to the chain.  |
| class | **[Wombat::MamdaOptionStrikeSet](classWombat_1_1MamdaOptionStrikeSet.html)** <br>A class that represents the call and put contract sets at a given strike price.  |
| class | **[Wombat::MamdaOptionUnderlying](classWombat_1_1MamdaOptionUnderlying.html)** <br>A class that represents the underlying for an option chain. Instances of this object are typically created by the [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html). Applications may attach a custom object to each instance of [MamdaOptionUnderlying]().  |
| class | **[Wombat::SimpleDateFormat](classWombat_1_1SimpleDateFormat.html)** <br>Wraps a date formatting settings  |
| interface | **[Wombat::MamdaBookAtomicBookHandler](interfaceWombat_1_1MamdaBookAtomicBookHandler.html)**  |
| interface | **[Wombat::MamdaBookAtomicGap](interfaceWombat_1_1MamdaBookAtomicGap.html)**  |
| interface | **[Wombat::MamdaBookAtomicLevel](interfaceWombat_1_1MamdaBookAtomicLevel.html)**  |
| interface | **[Wombat::MamdaBookAtomicLevelEntry](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html)**  |
| interface | **[Wombat::MamdaBookAtomicLevelEntryHandler](interfaceWombat_1_1MamdaBookAtomicLevelEntryHandler.html)**  |
| interface | **[Wombat::MamdaBookAtomicLevelHandler](interfaceWombat_1_1MamdaBookAtomicLevelHandler.html)**  |
| class | **[Wombat::MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html)**  |
| class | **[Wombat::MamdaOrderBook](classWombat_1_1MamdaOrderBook.html)** <br>[MamdaOrderBook]() is a class that provides order book functionality, including iterators over price levels and entries within price levels.  |
| class | **[Wombat::MamdaOrderBookChecker](classWombat_1_1MamdaOrderBookChecker.html)** <br>TODOC:  |
| interface | **[Wombat::MamdaOrderBookCheckerHandler](interfaceWombat_1_1MamdaOrderBookCheckerHandler.html)** <br>[MamdaOrderBookCheckerHandler]() is an interface for applications that want to handle the results of the [MamdaOrderBookChecker](classWombat_1_1MamdaOrderBookChecker.html). Callback interfaces are provided for correct and erroneous checks.  |
| class | **[Wombat::MamdaOrderBookCheckType](classWombat_1_1MamdaOrderBookCheckType.html)**  |
| interface | **[Wombat::MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html)** <br>[MamdaOrderBookDelta]() is an interface that provides access to order book delta related fields.  |
| class | **[Wombat::MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html)** <br>[MamdaOrderBookEntry]() is a class that provides/implements order book functionality.  |
| class | **[Wombat::MamdaOrderBookException](classWombat_1_1MamdaOrderBookException.html)** <br>[MamdaOrderBookException]() gets thrown when there is an inconsistency in the order book.  |
| class | **[Wombat::MamdaOrderBookFields](classWombat_1_1MamdaOrderBookFields.html)** <br>Maintains a cache of common orderbook related field descriptors.  |
| interface | **[Wombat::MamdaOrderBookGap](interfaceWombat_1_1MamdaOrderBookGap.html)** <br>[MamdaOrderBookGap]() is an interface that provides access to fields related to gap in orderBook reporting.  |
| interface | **[Wombat::MamdaOrderBookHandler](interfaceWombat_1_1MamdaOrderBookHandler.html)** <br>Process updates on the order book. Concrete instances of this interface are passed to the  |
| class | **[Wombat::MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html)** <br>[MamdaOrderBookListener]() is a class that specializes in handling order book updates. Developers provide their own implementation of the [MamdaOrderBookHandler](interfaceWombat_1_1MamdaOrderBookHandler.html) interface and will be delivered notifications for order book recaps and deltas. Notifications for order book deltas include the delta itself as well as the full order book with deltas applied. An obvious application for this MAMDA class is any kind of program trading application that looks at depth of book.  |
| class | **[Wombat::MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html)**  |
| interface | **[Wombat::MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html)** <br>[MamdaOrderBookRecap]() is an interface that provides access to order book related fields.  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[MamdaErrorCode](namespaceWombat.html#enum-mamdaerrorcode)** { MAMDA_NO_ERROR = 0, MAMDA_ERROR_LINE_DOWN = 1, MAMDA_ERROR_NO_SUBSCRIBERS = 2, MAMDA_ERROR_BAD_SYMBOL = 3, MAMDA_ERROR_EXPIRED = 4, MAMDA_ERROR_TIMEOUT = 5, MAMDA_ERROR_MISC = 6, MAMDA_ERROR_STALE = 7, MAMDA_ERROR_PLATFORM_STATUS = 8, MAMDA_ERROR_NOT_ENTITLED = 9, MAMDA_ERROR_NOT_FOUND = 10, MAMDA_ERROR_POSSIBLY_STALE = 11, MAMDA_ERROR_NOT_PERMISSIONED = 12, MAMDA_ERROR_TOPIC_CHANGE = 13, MAMDA_ERROR_BANDWIDTH_EXCEEDED = 14, MAMDA_ERROR_DELETE = 15, MAMDA_ERROR_EXCEPTION = 999}<br>MamdaErrorCode defines MAMDA error codes.  |
| enum class| **[MamdaErrorSeverity](namespaceWombat.html#enum-mamdaerrorseverity)** { MAMDA_SEVERITY_OK = 0, MAMDA_SEVERITY_LOW = 1, MAMDA_SEVERITY_HIGH = 2}<br>MamdaErrorSeverity defines MAMDA error severities. The severity is a hint that can be used to determine what action to take (e.g., destroy the subscription).  |
| enum class| **[MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate)** { NOT_INITIALISED = 0, NOT_MODIFIED = 1, MODIFIED = 2}<br>MamdaFieldState defines the state of Mamda fields  |
| enum class| **[MamdaQuality](namespaceWombat.html#enum-mamdaquality)** { MAMDA_QUALITY_OK = 0, MAMDA_QUALITY_STALE = 1, MAMDA_QUALITY_MAYBE_STALE = 2}<br>MamdaQuality defines MAMDA quality codes.  |
| enum class short | **[MamdaOptionAtTheMoneyCompareType](namespaceWombat.html#enum-mamdaoptionatthemoneycomparetype)** { MID_QUOTE = 0, BID = 1, ASK = 2, LAST_TRADE = 3} |
| enum class byte | **[MamdaOptionAction](namespaceWombat.html#enum-mamdaoptionaction)** { Unknown = (byte)' ', Add = (byte)'A', Delete = (byte)'D'} |

## Types Documentation

### enum MamdaErrorCode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMDA_NO_ERROR | 0| never sent   |
| MAMDA_ERROR_LINE_DOWN | 1| The feed handler has detected a Line Down.   |
| MAMDA_ERROR_NO_SUBSCRIBERS | 2| The feed handler does not have any subscribers to the subject   |
| MAMDA_ERROR_BAD_SYMBOL | 3| The symbol does not exist   |
| MAMDA_ERROR_EXPIRED | 4| Expired   |
| MAMDA_ERROR_TIMEOUT | 5| A time out occurred   |
| MAMDA_ERROR_MISC | 6| Miscellaneous status. Not an error   |
| MAMDA_ERROR_STALE | 7| The subject is stale. Messages may have been dropped   |
| MAMDA_ERROR_PLATFORM_STATUS | 8| Error in the underlying messaging API   |
| MAMDA_ERROR_NOT_ENTITLED | 9| Not entitled to a subject   |
| MAMDA_ERROR_NOT_FOUND | 10| Not found   |
| MAMDA_ERROR_POSSIBLY_STALE | 11| Messages may have been dropped   |
| MAMDA_ERROR_NOT_PERMISSIONED | 12| Not permissioned for the subject   |
| MAMDA_ERROR_TOPIC_CHANGE | 13| Topic renamed   |
| MAMDA_ERROR_BANDWIDTH_EXCEEDED | 14| Bandwidth exceeded   |
| MAMDA_ERROR_DELETE | 15| Symbol deleted   |
| MAMDA_ERROR_EXCEPTION | 999|   |



MamdaErrorCode defines MAMDA error codes. 

### enum MamdaErrorSeverity

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMDA_SEVERITY_OK | 0| never sent   |
| MAMDA_SEVERITY_LOW | 1| low severity   |
| MAMDA_SEVERITY_HIGH | 2| high severity   |



MamdaErrorSeverity defines MAMDA error severities. The severity is a hint that can be used to determine what action to take (e.g., destroy the subscription). 

### enum MamdaFieldState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NOT_INITIALISED | 0| The Field has never been updated by the source, e.g. by data from the feed handler   |
| NOT_MODIFIED | 1| The Field has been updated before, but not updated in the last tick   |
| MODIFIED | 2| Field updated in the last tick   |



MamdaFieldState defines the state of Mamda fields 

### enum MamdaQuality

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMDA_QUALITY_OK | 0|   |
| MAMDA_QUALITY_STALE | 1|   |
| MAMDA_QUALITY_MAYBE_STALE | 2|   |



MamdaQuality defines MAMDA quality codes. 

### enum MamdaOptionAtTheMoneyCompareType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MID_QUOTE | 0|   |
| BID | 1|   |
| ASK | 2|   |
| LAST_TRADE | 3|   |




### enum MamdaOptionAction

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | (byte)' '|   |
| Add | (byte)'A'|   |
| Delete | (byte)'D'|   |









-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100