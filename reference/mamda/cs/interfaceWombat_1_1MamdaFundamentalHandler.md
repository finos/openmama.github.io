---
title: Wombat::MamdaFundamentalHandler
summary: MamdaFundamentalHandler is an interface for applications that want to have an easy way to access fundamental equity pricing/analysis attributes, indicators and ratios. The interface defines a single callback methods for for receiving updates on fundamental data. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFundamentalHandler



[MamdaFundamentalHandler]() is an interface for applications that want to have an easy way to access fundamental equity pricing/analysis attributes, indicators and ratios. The interface defines a single callback methods for for receiving updates on fundamental data. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onFundamentals](interfaceWombat_1_1MamdaFundamentalHandler.html#function-onfundamentals)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html) listener, MamaMsg msg, [MamdaFundamentals](interfaceWombat_1_1MamdaFundamentals.html) fundamentals)<br>Access to data from updates containing fundamental data. Method invoked when one or more of the Fundamental fields have been updated by one of the following market data events:  |

## Public Functions Documentation

### function onFundamentals

```csharp
void onFundamentals(
    MamdaSubscription subscription,
    MamdaFundamentalListener listener,
    MamaMsg msg,
    MamdaFundamentals fundamentals
)
```

Access to data from updates containing fundamental data. Method invoked when one or more of the Fundamental fields have been updated by one of the following market data events: 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **fundamentals** Access to the fundamental details in the update.




* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* Generic update..


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100