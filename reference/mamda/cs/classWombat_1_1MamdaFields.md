---
title: Wombat::MamdaFields
summary: Common base class for all the MamdaXXXFields classes. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFields



Common base class for all the MamdaXXXFields classes.  [More...](#detailed-description)

Inherited by [Wombat.MamdaAuctionFields](classWombat_1_1MamdaAuctionFields.html), [Wombat.MamdaCommonFields](classWombat_1_1MamdaCommonFields.html), [Wombat.MamdaFundamentalFields](classWombat_1_1MamdaFundamentalFields.html), [Wombat.MamdaOptionFields](classWombat_1_1MamdaOptionFields.html), [Wombat.MamdaOrderBookFields](classWombat_1_1MamdaOrderBookFields.html), [Wombat.MamdaOrderImbalanceFields](classWombat_1_1MamdaOrderImbalanceFields.html), [Wombat.MamdaQuoteFields](classWombat_1_1MamdaQuoteFields.html), [Wombat.MamdaSecurityStatusFields](classWombat_1_1MamdaSecurityStatusFields.html), [Wombat.MamdaTradeFields](classWombat_1_1MamdaTradeFields.html)

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| string | **[lookupFieldName](classWombat_1_1MamdaFields.html#function-lookupfieldname)**(NameValueCollection properties, string defaultFieldName) |

## Detailed Description

```csharp
class Wombat::MamdaFields;
```

Common base class for all the MamdaXXXFields classes. 

Each of the subclasses maintains a cache of relevant MamaFieldDescriptors obtained from the MamaDictionary using the fields standard name. If the dictionary is being published with non standard field name mappings users can pass a `NameValueCollection` object to the corresponding `setDictionary()` method which contains field mappings. 

 Each mapping should have the following format:

 mamda.field.<common field name>=<mapped field name> e.g.

 mamda.field.wTradePrice=mMappedTradePrice where mMappedTradePrice is the name of the field under which the trade price is being published by the feedhandlers and which is being published by the dictionary to describe the trade price field.

## Protected Functions Documentation

### function lookupFieldName

```csharp
static string lookupFieldName(
    NameValueCollection properties,
    string defaultFieldName
)
```


**Parameters**: 

  * **properties** 
  * **defaultFieldName** 


**Return**: 

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100