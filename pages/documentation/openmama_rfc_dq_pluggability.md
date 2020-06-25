---
title: RFC for DQ Pluggability
sidebar: openmama_sidebar
permalink: openmama_rfc_dq_pluggability.html
folder: openmama
toc: true
---

# DQ Pluggability

## Definition of the Problem

This request is so that DQ might be pluggable in OpenMAMA. 
This means that default functionality can be used, overwritten with the user's own functionality, or disabled altogether. 
This functionality can be configured on a per transport basis, so each transport can have its own data quality functions to allow transports consuming data from different sources to execute different DQ logic for each source.
Users will be able to provide their own functionality by providing a shared object and referring to it in a properties file.

## High Level Requirements

- Move existing DQ functionality into a dedicated dqstrategyplugin.c file which may be compiled and included separately as a shared object

- Configure OpenMAMA to search for a user's own DQ plugin

- Enable OpenMAMA to call DQ functions which may be the default functions, or the User's own

- Configure OpenMAMA to load default functionality unless specified.  Alternatively, DQ functionality can be configured to be disabled entirely

- Configure transports so that they each can have DQ plugins attached to themselves. 


### Description of proposed solution

The proposal is, firstly, that we should firstly move the existing DQ functionality from its respective locations and place it inside of a dedicated file. 
This is so that this functionality can be loaded separately and therefore loading this functionality can be omitted if a user wants to use their own DQ functionality.
We then need to implement a check for a property so that the plugin loading functionality will load default DQ behaviour unless specified by a disabling line in a properties file.
We need to add calls to the dq plugin hooks where the functionality used to reside so that this functionality is still fired, or the replacement of the functionality is.
Finally, we need to implement a check in the transport files so that when transports are initialised, they can check for DQ plugins specified for them.


## Summaries of Design Approaches Considered

### Option A
Have DQ plugins be loaded in the same way as normal plugins, using the mama.plugin.name_X to load the plugin into the global array in plugin.c.  Each transport will have a configuration property specifying which plugin to use.

The advantage of this approach is that it fits in neatly with the existing plugin implementation.

The disadvantages are that plugin developers will be also be responsible for writing a mechanism to filter out transports/subscriptions on their plugin and that doing this on a per message basis will have a performance impact. 

### Option B

Each transport will have a configuration property specifying which plugin to use, with a global default also configurable.  Make the transport creation code responsible for loading in transport specific plugins, and storing these in an array belonging to the transport rather than globally.  Transport specific plugin hooks will be added and so whenever these hooks are fired only code belonging to plugins associated with the transport are fired.

The advantage of this approach is that it simplifies DQ plugin creation as no additional filtering is required, as well as avoiding any performance impact of doing so.

The disadvantage is that it pollutes the plugin mechanism somewhat by introducing the concept of transport specific plugin hooks which may, in some cases as more plugins and hooks are developed, need to be fired alongside global plugin hooks.

## Recommended Design Approach 

### Plugin changes

The functionality that exists to find and load plugins in OpenMAMA will need to undergo a change for it to register whether DQ has been disabled in a property. This should take the form of a property check and then a call to mama_loadplugin to load the default dqstrategy shared object.

Secondly, the plugin file should also allow for a global DQ plugin to be set, which overrides the Default provided DQ plugin, and which can be overwritten by a transport specific DQ plugin.

Lastly, the plugin.c file will need to register and fire the new hooks that could exist in the default file or the user's own file.
This would entail defining new functions to fire these hooks, and registering these functions through calls to REGISTER_OPTIONAL_PLUGIN_FUNCTION.

### Transport Changes

On creating a transport, the transport will look for properties which specify DQ plugins intended for it. These will be identifiable through 
the property name, and if it finds a respective plugin, it will be loaded into an array stored by this transport.
If this is not found, the transport then checks to see if DQ has been disabled altogether, and depending on this will choose whether to use the default DQ plugin and load it into the array.

### DQ Functionality changes

DQ strategy functionality should be moved to a dedicated file, dqstrategyplugin.c. This should mostly encompass DQ functionality
that is currently in dqstrategy.c. Most of the functions should be moved into appropriate hook functions, so that this DQ functionality can be
called at the correct time. Other functionality can simply exist as static functions to be used by these hook functions.

The functions: 

    dqContext_fillGap

    handleFTTakeover

    dqStrategy_checkSeqNum

    handleStaleData

    dqContext_applyPreInitialCache

will be moved from dqstrategy.c into dqstrategyplugin.c.  The existing dqContext and dqStrategy structures will remain in dqstrategy.c so that plugin developers may make use of them. 

The following hooks will be added:

### initHook

Prototype:

    mama_status dqstrategyMamaPlugin_initHook (mamaPluginInfo* pluginInfo)

### transportPostCreateHook

Prototype:

    mama_status dqstrategyMamaPlugin_transportPostCreateHook (mamaPluginInfo pluginInfo)

### transportEventHook 
This hook would take functionality to set the quality of subscriptions as maybe stale, depending on the type of message received.

Prototype:

    mama_status dqstrategyMamaPlugin_transportEventHook(mamaPluginInfo pluginInfo,
                                                        mamaTransport  transport,
                                                        int            setStale)

### subscriptionPostCreateHook 
This hook would initialise a dqStrategy and dqContext

Prototype:

    mama_status dqstrategyMamaPlugin_subscriptionPostCreateHook (mamaPluginInfo   pluginInfo,
                                                                 mamaSubscription subscription)

### subscriptionpreMsgHook 
This hook would take functionality from listenermsgcallback, and will be used to call dqStrategy_checkSeqNum() and other mechanisms such as processPointToPointMessage. 

Prototype: 

    mama_status dqstrategyMamaPlugin_subscriptionPreMsgHook(mamaPluginInfo    pluginInfo,
                                                            mamaSubscription  subscription,
                                                            int               msgType,
                                                            mamaMsg           msg)

### shutdownHook

Prototype:

    mama_status dqstrategyMamaPlugin_shutdownHook (mamaPluginInfo pluginInfo)

### Language support

All of the current DQ and plugin functionality is implemented in the C layer, so only the C API will need to be changed

#### Unit Testing Required

Unit testing should be perfectly feasable for mainly revolving around dqstrategyplugin file, so testing that the hook functions work
as intended, and that functions called by these hooks also work as intended.

#### Integration Testing Required

This changes should require a great deal of testing to ensure that the new changes fit with the old system. This is due
to how fundamental the changes are, as DQ functionality is embedded in message handling throughout.

### Impact to Application Users

When not using custom DQ functionality the changes will have no impact.  The default DQ plugin will be loaded and will operate as before.

The impact to application users is such that they can use properties to manipulate DQ functionality.
This iwll be using a property to disable it altogether, as it will be on by default, or by using a property
to replace the default functionality with their own custom plugin. 
The ability to plug in their own DQ functionality is the second big change as this will allow the user
to implement hook functions and have application do what they need it to do with regards to DQ.

### Impact to Internal API Components

The impact is such that dqstrategy functions will be moved over, as well as processPointToPointMessage from 
listenermsgcallback, no other API components should undergo large changes.
