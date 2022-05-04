---
title: Wombat::MamdaAuctionListener::MamdaAuctionCache
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionListener::MamdaAuctionCache





## Public Attributes

|                | Name           |
| -------------- | -------------- |
| string | **[mSymbol](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-msymbol)**  |
| string | **[mPartId](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-mpartid)**  |
| DateTime | **[mSrcTime](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-msrctime)**  |
| DateTime | **[mActTime](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-macttime)**  |
| DateTime | **[mLineTime](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-mlinetime)**  |
| DateTime | **[mSendTime](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-msendtime)**  |
| DateTime | **[mEventTime](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-meventtime)**  |
| long | **[mEventSeqNum](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-meventseqnum)**  |
| MamaPrice | **[mUncrossPrice](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-muncrossprice)**  |
| double | **[mUncrossVolume](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-muncrossvolume)**  |
| string | **[mUncrossPriceIndStr](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-muncrosspriceindstr)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mSymbolFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-msymbolfieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mPartIdFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-mpartidfieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mSrcTimeFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-msrctimefieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mActTimeFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-macttimefieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mLineTimeFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-mlinetimefieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mSendTimeFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-msendtimefieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mEventTimeFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-meventtimefieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mEventSeqNumFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-meventseqnumfieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mUncrossPriceFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-muncrosspricefieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mUncrossVolumeFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-muncrossvolumefieldstate)**  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[mUncrossPriceIndStrFieldState](classWombat_1_1MamdaAuctionListener_1_1MamdaAuctionCache.html#variable-muncrosspriceindstrfieldstate)**  |

## Public Attributes Documentation

### variable mSymbol

```csharp
string mSymbol;
```


### variable mPartId

```csharp
string mPartId;
```


### variable mSrcTime

```csharp
DateTime mSrcTime = DateTime.MinValue;
```


### variable mActTime

```csharp
DateTime mActTime = DateTime.MinValue;
```


### variable mLineTime

```csharp
DateTime mLineTime = DateTime.MinValue;
```


### variable mSendTime

```csharp
DateTime mSendTime = DateTime.MinValue;
```


### variable mEventTime

```csharp
DateTime mEventTime = DateTime.MinValue;
```


### variable mEventSeqNum

```csharp
long mEventSeqNum;
```


### variable mUncrossPrice

```csharp
MamaPrice mUncrossPrice = new MamaPrice();
```


### variable mUncrossVolume

```csharp
double mUncrossVolume;
```


### variable mUncrossPriceIndStr

```csharp
string mUncrossPriceIndStr;
```


### variable mSymbolFieldState

```csharp
MamdaFieldState mSymbolFieldState = new MamdaFieldState();
```


### variable mPartIdFieldState

```csharp
MamdaFieldState mPartIdFieldState = new MamdaFieldState();
```


### variable mSrcTimeFieldState

```csharp
MamdaFieldState mSrcTimeFieldState = new MamdaFieldState();
```


### variable mActTimeFieldState

```csharp
MamdaFieldState mActTimeFieldState = new MamdaFieldState();
```


### variable mLineTimeFieldState

```csharp
MamdaFieldState mLineTimeFieldState = new MamdaFieldState();
```


### variable mSendTimeFieldState

```csharp
MamdaFieldState mSendTimeFieldState = new MamdaFieldState();
```


### variable mEventTimeFieldState

```csharp
MamdaFieldState mEventTimeFieldState = new MamdaFieldState();
```


### variable mEventSeqNumFieldState

```csharp
MamdaFieldState mEventSeqNumFieldState = new MamdaFieldState();
```


### variable mUncrossPriceFieldState

```csharp
MamdaFieldState mUncrossPriceFieldState = new MamdaFieldState();
```


### variable mUncrossVolumeFieldState

```csharp
MamdaFieldState mUncrossVolumeFieldState = new MamdaFieldState();
```


### variable mUncrossPriceIndStrFieldState

```csharp
MamdaFieldState mUncrossPriceIndStrFieldState = new MamdaFieldState();
```


-------------------------------

Updated on 2022-05-04 at 07:54:10 +0100