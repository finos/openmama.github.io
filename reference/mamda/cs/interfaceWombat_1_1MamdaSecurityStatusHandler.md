---
title: Wombat::MamdaSecurityStatusHandler
summary: MamdaSecurityStatusHandler is an interface for applications that want to have an easy way to handle security status updates. The interface defines callback methods for status update and recap events. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecurityStatusHandler



[MamdaSecurityStatusHandler]() is an interface for applications that want to have an easy way to handle security status updates. The interface defines callback methods for status update and recap events. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSecurityStatusRecap](interfaceWombat_1_1MamdaSecurityStatusHandler.html#function-onsecuritystatusrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaSecurityStatusListener](classWombat_1_1MamdaSecurityStatusListener.html) listener, MamaMsg msg, [MamdaSecurityStatusRecap](interfaceWombat_1_1MamdaSecurityStatusRecap.html) recap)<br>Method invoked when the current security status information for the security is available. The reason for the invocation may be any of the following:  |
| void | **[onSecurityStatusUpdate](interfaceWombat_1_1MamdaSecurityStatusHandler.html#function-onsecuritystatusupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaSecurityStatusListener](classWombat_1_1MamdaSecurityStatusListener.html) listener, MamaMsg msg, [MamdaSecurityStatusUpdate](interfaceWombat_1_1MamdaSecurityStatusUpdate.html) update, [MamdaSecurityStatusRecap](interfaceWombat_1_1MamdaSecurityStatusRecap.html) recap)<br>Method invoked when the current security status information has changed.  |

## Public Functions Documentation

### function onSecurityStatusRecap

```csharp
void onSecurityStatusRecap(
    MamdaSubscription subscription,
    MamdaSecurityStatusListener listener,
    MamaMsg msg,
    MamdaSecurityStatusRecap recap
)
```

Method invoked when the current security status information for the security is available. The reason for the invocation may be any of the following: 

**Parameters**: 

  * **subscription** 
  * **listener** 
  * **msg** The MamaMsg that triggered this invocation.
  * **recap** 




* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)


### function onSecurityStatusUpdate

```csharp
void onSecurityStatusUpdate(
    MamdaSubscription subscription,
    MamdaSecurityStatusListener listener,
    MamaMsg msg,
    MamdaSecurityStatusUpdate update,
    MamdaSecurityStatusRecap recap
)
```

Method invoked when the current security status information has changed. 

**Parameters**: 

  * **subscription** 
  * **listener** 
  * **msg** The MamaMsg that triggered this invocation.
  * **update** 
  * **recap** 


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100