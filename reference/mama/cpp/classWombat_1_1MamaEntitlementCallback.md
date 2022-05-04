---
title: Wombat::MamaEntitlementCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaEntitlementCallback



 [More...](#detailed-description)


`#include <mamacpp.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaEntitlementCallback](classWombat_1_1MamaEntitlementCallback.html#function-~mamaentitlementcallback)**() |
| virtual void | **[onSessionDisconnect](classWombat_1_1MamaEntitlementCallback.html#function-onsessiondisconnect)**(const sessionDisconnectReason reason, const char * userId, const char * host, const char * appName) =0 |
| virtual void | **[onEntitlementUpdate](classWombat_1_1MamaEntitlementCallback.html#function-onentitlementupdate)**() =0 |
| virtual void | **[onEntitlementCheckingSwitch](classWombat_1_1MamaEntitlementCallback.html#function-onentitlementcheckingswitch)**(const int isEntitlementsCheckingDisabled) |

## Detailed Description

```cpp
class Wombat::MamaEntitlementCallback;
```


Callback object passed to Mama::registerEntitlmentCallbacks(). The [onSessionDisconnect()](classWombat_1_1MamaEntitlementCallback.html#function-onsessiondisconnect) method will be invoked when a disconnect request is received from the entitlements server. 

## Public Functions Documentation

### function ~MamaEntitlementCallback

```cpp
inline virtual ~MamaEntitlementCallback()
```


### function onSessionDisconnect

```cpp
virtual void onSessionDisconnect(
    const sessionDisconnectReason reason,
    const char * userId,
    const char * host,
    const char * appName
) =0
```


**Parameters**: 

  * **reason** Reason disconnect request was sent 
  * **userId** ID of user who initiated the disconnection, either by attempting to initiate a new connection or an admin user explicitly issuing a disconnect 
  * **host** Hostname/IP address of the site server or where userId is attempting to connect from 
  * **appName** "site server" or application that userId is using to disconnect (possibly NULL) 


Function invoked when diconnect request is received from the entitlements server 


### function onEntitlementUpdate

```cpp
virtual void onEntitlementUpdate() =0
```


Function invoked after dynamic entitlements update has occurred 


### function onEntitlementCheckingSwitch

```cpp
inline virtual void onEntitlementCheckingSwitch(
    const int isEntitlementsCheckingDisabled
)
```


Function invoked after entitlements checking has been switched, for example, from enabled to disabled. 


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100