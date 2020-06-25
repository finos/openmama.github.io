---
title: RFC for OpenMAMA Source Discovery
sidebar: openmama_sidebar
permalink: openmama_rfc_source_discovery.html
folder: openmama
toc: true
---


## Definition of the Problem

Some messaging middle-wares allow for clients to obtain data on available Publishers (Sources). OpenMAMA does not include any support for clients to obtain this information if it is available. Currently, for clients to know which sources they need to work with, they must be provided with this information via command line arguments or configuration items.

## High Level Requirements

The MAMA API should provide a mechanism to allow clients to obtain information on the names of available sources. If further information on capabilities is available, this should be made available also. All currently supported OpenMAMA language bindings should be extended to support source discovery. Source information will be made available in a message (one message per source that is discovered) with appropriate names and FID's. The message will be delivered to the "onMsg()" call-back function (setup in the Source Discovery object) and will be in the following form:

* Source names should be returned in a field of type MAMA_FIELD_TYPE_STRING
* Source ID's (if present) should be returned as a field of MAMA_FIELD_TYPE_U64
* Support for any additional 'capabilities' information should be returned as a MAMA_FIELD_TYPE_STRING per capability item, such as:
    * Source state ("ONLINE" or "OFFLINE")
    * Source 'data' state ("OK" or "SUSPECT")
    * Quality of Service "Timeliness" ("BEST", "DELAYED", "UNSPECIFIED")
    * Quality of Service "Rate" ("BEST", "FILTERED", "UNSPECIFIED")
    * Data Dictionary name (example: "MARKETDATA", "UNKNOWN", etc.)

In addition, appropriate FID's and name strings for the above message format will be added to the properties file so they may be configured by end users or bridge developers.

## Design Approaches Considered

The source/publisher information could be obtained via a subscription in a similar way as the Data Dictionary is currently supported. However, the Data Dictionary subscription is a snapshot subscription as the data doesn't really change very often. As sources could be on or off-line for various reasons, a more dynamic approach is appropriate and will provide clients with updates to properly reflect the current state of a source.

The dynamic approach described here requires the Source Discovery API to send a 'Source Discovery Request' message to the bridge and does not use OpenMAMA subscriptions. It involves adding, as a minimum, the following C functions (all return 'mama_status'):
* `mamaSourceDiscovery_create(mamaSourceDiscovery* srcdisc, mamaSourceDiscoveryCallbackSet srcCbs, mamaQueue queue, mamaTransport tport)`

	This call will create a source discovery object and send a message to the bridge (with a topic of "MAMA_SOURCE_DISCOVERY_TOPIC") to request source discovery. If a bridge does not support this feature, it must return an appropriate 'mama_status' value (not equal to MAMA_STATUS_OK), which in-turn is returned by this function.

* `mamaSourceDiscovery_destroy(mamaSourceDiscovery srcdisc)`

	This call will destroy the source discovery object.

* `mamaSourceDiscovery_setMsgCallback(mamaSourceDiscovery srcdisc, mamaSourceDiscovery_msgCallback cb)`

	This call will setup the call-back function 'cb' as the 'onMsg' handler for the source discovery object.

* `mamaSourceDiscovery_setErrorCallback(mamaSourceDiscovery srcdisc, mamaSourceDiscovery_errorCallback cb)`

	This call will setup the call-back function 'cb' as the 'onError' handler for the source discovery object.

* `mamaSourceDiscovery_setClosure(mamaSourceDiscovery srcdisc, void *closure)`

	This call will setup the 'closure' for the source discovery object.

In addition to the above methods, Source Discovery requires two call-back methods, one to handle any errors and the other to handle the per source messages sent from the bridge:
* `void onError(mamaSourceDiscovery srcdisc, const char *errorStr, void *closure)`
* `void onMsg(mamaSourceDiscovery srcdisc, mamaMsg mMsg, void closure)`

### Pros for Dynamic Updates Approach
* Any updates to the data will be sent to clients after the initial image

### Cons for Dynamic Updates Approach
* Changes to bridge implementation/properties required

## Changes Required for C API

The largest change to the C API will involve the creation of a new source discovery module and its associated data structures and methods. The Source Discovery object and methods will be implemented in this new module and are listed at the start of the 'Design Approaches Considered' section.

### Code Changes

* Create new files `mama/c_cpp/src/c/sourcediscovery.c`, `mama/c_cpp/src/c/mama/sourcediscovery.h` and `mama/c_cpp/src/c/sourcediscoveryimpl.h`
* Add typedef for `mamaSourceDiscoveryImpl_` to `mama/c_cpp/src/c/mama/types.h`

### Interface Changes

No changes necessary other than new interfaces for Source Discovery.

### Internal data structure changes

No changes necessary other than new structure for Source Discovery.

### Unit Testing Required

To fully unit test this implementation, a number of mock objects will be required to mimic the expected responses from a bridge that fully supports source discovery.

### Integration Testing Required

Due to the need for bridges to support this feature, full integration testing of this implementation will be somewhat tricky. Tests can be added to verify that the default bridge (QPID) does not support source discovery. Fully testing this feature will require a bridge that has full source discovery support (a reference or test bridge).

## Changes Required for C++ API

### Code Changes

Create new C++ class for Source Discovery.

### Interface Changes

As this is built on top of the C layer, no additional changes are required.

### Internal data structure changes

As this is built on top of the C layer, no additional changes are required.

### Unit Testing Required

It is assumed that the mock objects used for testing the C-API can be reused to verify the operation of the source discovery C++ class.

### Integration Testing Required

As C-API.

## Changes Required for C# API

### Code Changes

Create new C# class for Source Discovery.

### Interface Changes

As this is built on top of the C layer, no additional changes are required.

### Internal data structure changes

As this is built on top of the C layer, no additional changes are required.

### Unit Testing Required

As C-API.

### Integration Testing Required

As C-API.

## Changes Required for Java API

### Code Changes

Create new Java class for Source Discovery.

### Interface Changes

As this is built on top of the C layer, no additional changes are required.

### Internal data structure changes

As this is built on top of the C layer, no additional changes are required.

### Unit Testing Required

As C-API.

### Integration Testing Required

As C-API.

## Impact of Resulting Changes

### Impact to Application Users

New methods become available (as documented above) for client code that requires to implement source discovery. To aid in encoding/decoding source discovery messages, the following properties will be available via the properties file:

	mama.sourcediscovery.source.name=SourceName
	mama.sourcediscovery.source.fid=10001
	mama.sourcediscovery.sourceid.name=SourceID
	mama.sourcediscovery.sourceid.fid=10002
	mama.sourcediscovery.sourcestate.name=SourceState
	mama.sourcediscovery.sourcestate.fid=10003
	mama.sourcediscovery.sourcedatastate.name=SourceDataState
	mama.sourcediscovery.sourcedatastate.fid=10004
	mama.sourcediscovery.sourceqosrate.name=SourceQoSRate
	mama.sourcediscovery.sourceqosrate.fid=10005
	mama.sourcediscovery.sourceqostimeliness.name=SourceQoSTimeliness
	mama.sourcediscovery.sourceqostimeliness.fid=10006
	mama.sourcediscovery.sourcedatadict.name=SourceDataDict
	mama.sourcediscovery.sourcedatadict.fid=10007

### Impact to Bridge Developers

This change makes it possible for Bridge Developers to support source discovery if the middleware supports it. A property that takes the following form should be included in the properties file for the appropriate bridge transport and set either true or false to show if Source Discovery is supported.

`mama.<bridge-name>.transport.<transport-name>.sourcediscovery.supported=true`

The bridge publisher function `<middleware>BridgeMamaPublisher_sendFromInboxByIndex()` should be modified to detect receiving the Source Discovery Topic and to decode the "sourcediscovery.supported" property. It should then either:
* return MAMA_STATUS_NOT_IMPLETED (or another more appropriate error status) if the bridge does not support this feature
* perform operations necessary to provide support and return MAMA_STATUS_OK

Example changes:

    if (topic == MAMA_SOURCE_DISCOVERY_TOPIC)
    {
        ...
        BOOL srcDiscSupported = <get-property>("sourcediscovery.supported");
        if (srcDiscSupported)
        {
            /* Do necessary middleware operations/subscriptions here */
            return MAMA_STATUS_OK;
        }
        else
            return MAMA_STATUS_NOT_IMPLEMENTED;
    }


### Impact to Internal API Components
No other internal API components should be impacted by these changes.

