---
title: com::wombat::mamda::MamdaFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaFields



 [More...](#detailed-description)

Inherited by [com.wombat.mamda.MamdaAuctionFields](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html), [com.wombat.mamda.MamdaCommonFields](classcom_1_1wombat_1_1mamda_1_1MamdaCommonFields.html), [com.wombat.mamda.MamdaFundamentalFields](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html), [com.wombat.mamda.MamdaOrderImbalanceFields](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html), [com.wombat.mamda.MamdaQuoteFields](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteFields.html), [com.wombat.mamda.MamdaSecurityStatusFields](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusFields.html), [com.wombat.mamda.MamdaTradeFields](classcom_1_1wombat_1_1mamda_1_1MamdaTradeFields.html), [com.wombat.mamda.options.MamdaOptionFields](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionFields.html), [com.wombat.mamda.orderbook.MamdaOrderBookFields](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookFields.html)

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| String | **[lookupFieldName](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html#function-lookupfieldname)**(Properties properties, String defaultFieldName) |

## Detailed Description

```java
class com::wombat::mamda::MamdaFields;
```


Common base class for all the MamdaXXXFields classes.

Each of the subclasses maintains a cache of relevant MamaFieldDescriptors obtained from the MamaDictionary using the fields standard name. If the dictionary is being published with non standard field name mappings users can pass a `Properties` object to the corresponding `setDictionary()` method which contains field mappings. 

 Each mapping should have the following format:

 mamda.field.[common field name]=[mapped field name] e.g.

 mamda.field.wTradePrice=myMappedTradePrice where myMappedTradePrice is the name of the field under which the trade price is being published by the feedhandlers and which is being published by the dictionary to describe the trade price field. 

## Protected Functions Documentation

### function lookupFieldName

```java
static inline String lookupFieldName(
    Properties properties,
    String defaultFieldName
)
```


Look up a given field name mapping from the Properties object. If no map exists, then the default field name is return. 


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100