---
title: Wombat::MamdaUncrossPriceInd
summary: Security Status values 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaUncrossPriceInd



Security Status values 

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[mamdaUncrossPriceInd](classWombat_1_1MamdaUncrossPriceInd.html#enum-mamdauncrosspriceind)** { UNCROSS_NONE = 0, UNCROSS_INDICATIVE = 1, UNCROSS_FIRM = 2, UNCROSS_INSUFFICIENT_VOL = 3}<br>An enumeration representing the status of a security such as whether or not it is halted or closed for trading.  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| string | **[toString](classWombat_1_1MamdaUncrossPriceInd.html#function-tostring)**([MamdaUncrossPriceInd.mamdaUncrossPriceInd](classWombat_1_1MamdaUncrossPriceInd.html#enum-mamdauncrosspriceind) priceInd)<br>Convert a [MamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html) to an appropriate, displayable string  |
| [MamdaUncrossPriceInd.mamdaUncrossPriceInd](classWombat_1_1MamdaUncrossPriceInd.html#enum-mamdauncrosspriceind) | **[mamdaAuctionPriceIndFromString](classWombat_1_1MamdaUncrossPriceInd.html#function-mamdaauctionpriceindfromstring)**(string priceInd)<br>Convert a string representation of a security status to the enumeration.  |

## Public Types Documentation

### enum mamdaUncrossPriceInd

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UNCROSS_NONE | 0|   |
| UNCROSS_INDICATIVE | 1|   |
| UNCROSS_FIRM | 2|   |
| UNCROSS_INSUFFICIENT_VOL | 3|   |



An enumeration representing the status of a security such as whether or not it is halted or closed for trading. 

## Public Functions Documentation

### function toString

```csharp
static string toString(
    MamdaUncrossPriceInd.mamdaUncrossPriceInd priceInd
)
```

Convert a [MamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html) to an appropriate, displayable string 

### function mamdaAuctionPriceIndFromString

```csharp
static MamdaUncrossPriceInd.mamdaUncrossPriceInd mamdaAuctionPriceIndFromString(
    string priceInd
)
```

Convert a string representation of a security status to the enumeration. 

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100