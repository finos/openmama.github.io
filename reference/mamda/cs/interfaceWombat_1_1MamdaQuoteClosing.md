---
title: Wombat::MamdaQuoteClosing
summary: MamdaQuoteClosing is an interface that provides access to quote closing related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteClosing



[MamdaQuoteClosing]() is an interface that provides access to quote closing related fields. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getBidPrice](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidprice)**()<br>Get the closing bid price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidpricefieldstate)**()<br>Get the field state  |
| long | **[getBidSize](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidsize)**()<br>Get the closing bid size.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizeFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidsizefieldstate)**()<br>Get the field state  |
| string | **[getBidPartId](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidpartid)**()<br>Get the closing bid participant identifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPartIdFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidpartidfieldstate)**()<br>Get the field state  |
| MamaPrice | **[getAskPrice](interfaceWombat_1_1MamdaQuoteClosing.html#function-getaskprice)**()<br>Get the closing ask price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getaskpricefieldstate)**()<br>Get the field state  |
| long | **[getAskSize](interfaceWombat_1_1MamdaQuoteClosing.html#function-getasksize)**()<br>Get the closing ask size.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizeFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getasksizefieldstate)**()<br>Get the field state  |
| string | **[getAskPartId](interfaceWombat_1_1MamdaQuoteClosing.html#function-getaskpartid)**()<br>Get the closing ask participant identifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPartIdFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getaskpartidfieldstate)**()<br>Get the field state  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)**()<br>Returns the source time.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| long | **[getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |


## Public Functions Documentation

### function getBidPrice

```csharp
MamaPrice getBidPrice()
```

Get the closing bid price. 

**Return**: Today's closing bid price, after the market has closed and the stock has traded today.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprice)


### function getBidPriceFieldState

```csharp
MamdaFieldState getBidPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)


### function getBidSize

```csharp
long getBidSize()
```

Get the closing bid size. 

**Return**: Today's closing bid size, after the market has closed and the stock has traded today.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSize](classWombat_1_1MamdaQuoteListener.html#function-getbidsize)


### function getBidSizeFieldState

```csharp
MamdaFieldState getBidSizeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)


### function getBidPartId

```csharp
string getBidPartId()
```

Get the closing bid participant identifier. 

**Return**: Today's closing bid participant identifier, after the market has closed and the stock has traded today.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPartId](classWombat_1_1MamdaQuoteListener.html#function-getbidpartid)


### function getBidPartIdFieldState

```csharp
MamdaFieldState getBidPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)


### function getAskPrice

```csharp
MamaPrice getAskPrice()
```

Get the closing ask price. 

**Return**: Today's closing ask price, after the market has closed and the stock has traded today.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprice)


### function getAskPriceFieldState

```csharp
MamdaFieldState getAskPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)


### function getAskSize

```csharp
long getAskSize()
```

Get the closing ask size. 

**Return**: Today's closing ask size, after the market has closed and the stock has traded today.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSize](classWombat_1_1MamdaQuoteListener.html#function-getasksize)


### function getAskSizeFieldState

```csharp
MamdaFieldState getAskSizeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizefieldstate)


### function getAskPartId

```csharp
string getAskPartId()
```

Get the closing ask participant identifier. 

**Return**: Today's closing ask participant identifier, after the market has closed and the stock has traded today.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPartId](classWombat_1_1MamdaQuoteListener.html#function-getaskpartid)


### function getAskPartIdFieldState

```csharp
MamdaFieldState getAskPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100