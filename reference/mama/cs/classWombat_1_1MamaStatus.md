---
title: Wombat::MamaStatus
summary: Status codes returned by MAMA methods 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaStatus



Status codes returned by MAMA methods 

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus)** { MAMA_STATUS_OK = 0, MAMA_STATUS_NOMEM = 1, MAMA_STATUS_PLATFORM = 2, MAMA_STATUS_SYSTEM_ERROR = 3, MAMA_STATUS_INVALID_ARG = 4, MAMA_STATUS_NULL_ARG = 5, MAMA_STATUS_NOT_FOUND = 6, MAMA_STATUS_TIMER_FAILURE = 7, MAMA_STATUS_IP_NOT_FOUND = 8, MAMA_STATUS_TIMEOUT = 9, MAMA_STATUS_NOT_ENTITLED = 10, MAMA_STATUS_PROPERTY_TOO_LONG = 11, MAMA_STATUS_MD_NOT_OPENED = 12, MAMA_STATUS_PUB_SUB_NOT_OPENED = 13, MAMA_STATUS_ENTITLEMENTS_NOT_ENABLED = 14, MAMA_STATUS_BAD_TRANSPORT_TYPE = 15, MAMA_STATUS_UNSUPPORTED_IO_TYPE = 16, MAMA_STATUS_TOO_MANY_DISPATCHERS = 17, MAMA_STATUS_NOT_IMPLEMENTED = 18, MAMA_STATUS_WRONG_FIELD_TYPE = 19, MAMA_STATUS_BAD_SYMBOL = 20, MAMA_STATUS_IO_ERROR = 21, MAMA_STATUS_NOT_INSTALLED = 22, MAMA_STATUS_CONFLATE_ERROR = 23, MAMA_STATUS_QUEUE_FULL = 24, MAMA_STATUS_QUEUE_END = 25, MAMA_STATUS_NO_BRIDGE_IMPL = 26, MAMA_STATUS_INVALID_QUEUE = 27, MAMA_STATUS_NOT_MODIFIABLE = 28, MAMA_STATUS_DELETE = 29, MAMA_STATUS_NOT_PERMISSIONED = 4001, MAMA_STATUS_SUBSCRIPTION_INVALID_STATE = 5001, MAMA_STATUS_QUEUE_OPEN_OBJECTS = 5002, MAMA_STATUS_SUBSCRIPTION_INVALID_TYPE = 5003, MAMA_STATUS_SUBSCRIPTION_GAP = 5004, MAMA_STATUS_NOT_INITIALISED = 5005, MAMA_STATUS_NO_SUBSCRIBERS = 5006, MAMA_STATUS_EXPIRED = 5007, MAMA_STATUS_BANDWIDTH_EXCEEDED = 5008, MAMA_ENTITLE_STATUS_NOMEM = 9001, MAMA_ENTITLE_STATUS_BAD_PARAM = 9002, MAMA_ENTITLE_STATUS_BAD_DATA = 9003, MAMA_ENTITLE_STATUS_URL_ERROR = 9004, MAMA_ENTITLE_STATUS_OS_LOGIN_ID_UNAVAILABLE = 9005, MAMA_ENTITLE_STATUS_ALREADY_ENTITLED = 9006, MAMA_ENTITLE_STATUS_CAC_LIMIT_EXCEEDED = 9007, MAMA_ENTITLE_STATUS_OEP_LISTENER_CREATION_FAILURE = 9008, MAMA_ENTITLE_HTTP_ERRHOST = 9010, MAMA_ENTITLE_HTTP_ERRSOCK = 9011, MAMA_ENTITLE_HTTP_ERRCONN = 9012, MAMA_ENTITLE_HTTP_ERRWRHD = 9013, MAMA_ENTITLE_HTTP_ERRWRDT = 9014, MAMA_ENTITLE_HTTP_ERRRDHD = 9015, MAMA_ENTITLE_HTTP_ERRPAHD = 9016, MAMA_ENTITLE_HTTP_ERRNULL = 9017, MAMA_ENTITLE_HTTP_ERRNOLG = 9018, MAMA_ENTITLE_HTTP_ERRMEM = 9019, MAMA_ENTITLE_HTTP_ERRRDDT = 9020, MAMA_ENTITLE_HTTP_ERRURLH = 9021, MAMA_ENTITLE_HTTP_ERRURLP = 9022, MAMA_ENTITLE_HTTP_BAD_QUERY = 9023, MAMA_ENTITLE_HTTP_FORBIDDEN = 9024, MAMA_ENTITLE_HTTP_TIMEOUT = 9025, MAMA_ENTITLE_HTTP_SERVER_ERR = 9026, MAMA_ENTITLE_HTTP_NO_IMPL = 9027, MAMA_ENTITLE_HTTP_OVERLOAD = 9028, MAMA_ENTITLE_NO_USER = 9029, MAMA_ENTITLE_NO_SERVERS_SPECIFIED = 9030, MAMA_ENTITLE_SITE_NOT_FOUND = 9032}<br>Represents the completion status of a MAMA method call  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| string | **[stringForStatus](classWombat_1_1MamaStatus.html#function-stringforstatus)**([MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status)<br>Return status code as a string  |

## Public Types Documentation

### enum mamaStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_STATUS_OK | 0| Everything OK   |
| MAMA_STATUS_NOMEM | 1| System error, out of memory   |
| MAMA_STATUS_PLATFORM | 2| Messaging platform specific error   |
| MAMA_STATUS_SYSTEM_ERROR | 3| General system error   |
| MAMA_STATUS_INVALID_ARG | 4| One or more arguments were invalid   |
| MAMA_STATUS_NULL_ARG | 5| A NULL argument was unexpectedly encountered   |
| MAMA_STATUS_NOT_FOUND | 6| The requested item was not found   |
| MAMA_STATUS_TIMER_FAILURE | 7| Timer-related error   |
| MAMA_STATUS_IP_NOT_FOUND | 8| IP address not found   |
| MAMA_STATUS_TIMEOUT | 9| A timeout occurred while waiting for a response   |
| MAMA_STATUS_NOT_ENTITLED | 10| Client is not entitled for the symbol   |
| MAMA_STATUS_PROPERTY_TOO_LONG | 11| Property value exceeds the maximum allowed length   |
| MAMA_STATUS_MD_NOT_OPENED | 12| MD not opened   |
| MAMA_STATUS_PUB_SUB_NOT_OPENED | 13| Publish/Subscribe not opened   |
| MAMA_STATUS_ENTITLEMENTS_NOT_ENABLED | 14| Entitlements not enabled   |
| MAMA_STATUS_BAD_TRANSPORT_TYPE | 15| Bad transport type   |
| MAMA_STATUS_UNSUPPORTED_IO_TYPE | 16| IO type is not supported on the middleware   |
| MAMA_STATUS_TOO_MANY_DISPATCHERS | 17| Maximum number of dispatchers per queue was exceeded   |
| MAMA_STATUS_NOT_IMPLEMENTED | 18| The desired feature is not implemented   |
| MAMA_STATUS_WRONG_FIELD_TYPE | 19| Incompatible field types   |
| MAMA_STATUS_BAD_SYMBOL | 20| Invalid symbol   |
| MAMA_STATUS_IO_ERROR | 21| I/O error   |
| MAMA_STATUS_NOT_INSTALLED | 22| Not installed   |
| MAMA_STATUS_CONFLATE_ERROR | 23| Conflation error   |
| MAMA_STATUS_QUEUE_FULL | 24| Event dispatch queue full   |
| MAMA_STATUS_QUEUE_END | 25| End of event queue reached   |
| MAMA_STATUS_NO_BRIDGE_IMPL | 26| No bridge   |
| MAMA_STATUS_INVALID_QUEUE | 27| Invalid queue   |
| MAMA_STATUS_NOT_MODIFIABLE | 28| Not Modifiable   |
| MAMA_STATUS_DELETE | 29| Symbol deleted   |
| MAMA_STATUS_NOT_PERMISSIONED | 4001| Not permissioned for the subject.   |
| MAMA_STATUS_SUBSCRIPTION_INVALID_STATE | 5001| Subscription is in an invalid state.   |
| MAMA_STATUS_QUEUE_OPEN_OBJECTS | 5002| Queue has open objects.   |
| MAMA_STATUS_SUBSCRIPTION_INVALID_TYPE | 5003| The function isn't supported for this type of subscription.   |
| MAMA_STATUS_SUBSCRIPTION_GAP | 5004| The underlying transport saw a gap.   |
| MAMA_STATUS_NOT_INITIALISED | 5005| A resource has not been initialised.   |
| MAMA_STATUS_NO_SUBSCRIBERS | 5006| A symbol does not have any subscribers.   |
| MAMA_STATUS_EXPIRED | 5007| A symbol has expired.   |
| MAMA_STATUS_BANDWIDTH_EXCEEDED | 5008| The application's bandwidth limit has been exceeded.   |
| MAMA_ENTITLE_STATUS_NOMEM | 9001| Entitlements: Out of memory.   |
| MAMA_ENTITLE_STATUS_BAD_PARAM | 9002| Entitlements: Invalid parameter.   |
| MAMA_ENTITLE_STATUS_BAD_DATA | 9003| Entitlements: The XML returned from entitlement server was invalid.   |
| MAMA_ENTITLE_STATUS_URL_ERROR | 9004| Entitlements: Invalid URL.   |
| MAMA_ENTITLE_STATUS_OS_LOGIN_ID_UNAVAILABLE | 9005| Entitlements: Unable to determine OS ID of account process is running under.   |
| MAMA_ENTITLE_STATUS_ALREADY_ENTITLED | 9006| Entitlements: When an attempt is made to get entitlements after a successful attempt has already been made   |
| MAMA_ENTITLE_STATUS_CAC_LIMIT_EXCEEDED | 9007| Entitlements: A user has exceeded concurrent access limit   |
| MAMA_ENTITLE_STATUS_OEP_LISTENER_CREATION_FAILURE | 9008| Entitlements: Failed to create OEP listener that processes inbound messages from site server. Required for concurrent access control and/or dynamic entitlements update.   |
| MAMA_ENTITLE_HTTP_ERRHOST | 9010| Entitlements: No such host.   |
| MAMA_ENTITLE_HTTP_ERRSOCK | 9011| Entitlements: Can't create socket.   |
| MAMA_ENTITLE_HTTP_ERRCONN | 9012| Entitlements: Can't connect to host.   |
| MAMA_ENTITLE_HTTP_ERRWRHD | 9013| Entitlements: Write error on socket while writing header.   |
| MAMA_ENTITLE_HTTP_ERRWRDT | 9014| Entitlements: Write error on socket while writing data.   |
| MAMA_ENTITLE_HTTP_ERRRDHD | 9015| Entitlements: Read error on socket while reading result.   |
| MAMA_ENTITLE_HTTP_ERRPAHD | 9016| Entitlements: Invalid answer from data server.   |
| MAMA_ENTITLE_HTTP_ERRNULL | 9017| Entitlements: Null data pointer.   |
| MAMA_ENTITLE_HTTP_ERRNOLG | 9018| Entitlements: No/Bad length in header.   |
| MAMA_ENTITLE_HTTP_ERRMEM | 9019| Entitlements: Can't allocate memory.   |
| MAMA_ENTITLE_HTTP_ERRRDDT | 9020| Entitlements: Read error while reading data.   |
| MAMA_ENTITLE_HTTP_ERRURLH | 9021| Entitlements: Invalid url - must start with '[http://'](http://').   |
| MAMA_ENTITLE_HTTP_ERRURLP | 9022| Entitlements: Invalid port in url.   |
| MAMA_ENTITLE_HTTP_BAD_QUERY | 9023| Entitlements: Invalid QUERY HTTP RESULT 400.   |
| MAMA_ENTITLE_HTTP_FORBIDDEN | 9024| Entitlements: FORBIDDEN HTTP RESULT 403.   |
| MAMA_ENTITLE_HTTP_TIMEOUT | 9025| Entitlements: Request Timeout HTTP RESULT 403.   |
| MAMA_ENTITLE_HTTP_SERVER_ERR | 9026| Entitlements: Server Error HTTP RESULT 500.   |
| MAMA_ENTITLE_HTTP_NO_IMPL | 9027| Entitlements: Not Implemented HTTP RESULT 501.   |
| MAMA_ENTITLE_HTTP_OVERLOAD | 9028| Entitlements: Overloaded HTTP RESULT 503.   |
| MAMA_ENTITLE_NO_USER | 9029| Entitlements: No user specified.   |
| MAMA_ENTITLE_NO_SERVERS_SPECIFIED | 9030| Entitlements: No servers specified.   |
| MAMA_ENTITLE_SITE_NOT_FOUND | 9032| Entitlements: No site specified.   |



Represents the completion status of a MAMA method call 

## Public Functions Documentation

### function stringForStatus

```csharp
static string stringForStatus(
    MamaStatus.mamaStatus status
)
```

Return status code as a string 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100