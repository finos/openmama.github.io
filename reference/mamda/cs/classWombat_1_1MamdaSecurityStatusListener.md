---
title: Wombat::MamdaSecurityStatusListener
summary: MamdaSecurityStatusListener is a class that specializes in handling security status updates. Developers provide their own implementation of the MamdaSecurityStatusHandler interface and will be delivered notifications for security status updates. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecurityStatusListener



[MamdaSecurityStatusListener]() is a class that specializes in handling security status updates. Developers provide their own implementation of the [MamdaSecurityStatusHandler](interfaceWombat_1_1MamdaSecurityStatusHandler.html) interface and will be delivered notifications for security status updates.  [More...](#detailed-description)

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaSecurityStatusRecap](interfaceWombat_1_1MamdaSecurityStatusRecap.html), [Wombat.MamdaSecurityStatusUpdate](interfaceWombat_1_1MamdaSecurityStatusUpdate.html)

## Protected Classes

|                | Name           |
| -------------- | -------------- |
| class | **[MamdaSecurityStatusCache](classWombat_1_1MamdaSecurityStatusListener_1_1MamdaSecurityStatusCache.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSecurityStatusListener](classWombat_1_1MamdaSecurityStatusListener.html#function-mamdasecuritystatuslistener)**()<br>Create a specialized trade listener. This listener handles trade reports, trade recaps, trade errors/cancels, trade corrections, and trade gap notifications.  |
| void | **[addHandler](classWombat_1_1MamdaSecurityStatusListener.html#function-addhandler)**([MamdaSecurityStatusHandler](interfaceWombat_1_1MamdaSecurityStatusHandler.html) handler)<br>Add a specialized trade handler. Currently, only one handler can (and must) be registered.  |
| void | **[populateRecap](classWombat_1_1MamdaSecurityStatusListener.html#function-populaterecap)**([MamdaConcreteSecurityStatusRecap](classWombat_1_1MamdaConcreteSecurityStatusRecap.html) recap) |
| DateTime | **[getSrcTime](classWombat_1_1MamdaSecurityStatusListener.html#function-getsrctime)**() |
| DateTime | **[getActivityTime](classWombat_1_1MamdaSecurityStatusListener.html#function-getactivitytime)**() |
| long | **[getEventSeqNum](classWombat_1_1MamdaSecurityStatusListener.html#function-geteventseqnum)**() |
| DateTime | **[getEventTime](classWombat_1_1MamdaSecurityStatusListener.html#function-geteventtime)**() |
| long | **[getSecurityStatus](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatus)**()<br>[MamdaSecurityStatusUpdate.getSecurityStatus()]() |
| long | **[getSecurityStatusQualifier](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifier)**()<br>[MamdaSecurityStatusUpdate.getSecurityStatus()]() |
| [MamdaSecurityStatus.mamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html#enum-mamdasecuritystatus) | **[getSecurityStatusEnum](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusenum)**()<br>[MamdaSecurityStatusUpdate.getSecurityStatusEnum()]() |
| MamdaSecurityStatusQual.mamdaSecurityStatusQual | **[getSecurityStatusQualifierEnum](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierenum)**()<br>[MamdaSecurityStatusUpdate.getSecurityStatusQualifierEnum()]() |
| string | **[getSecurityStatusStr](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusstr)**()<br>[MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]() |
| char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaSecurityStatusListener.html#function-getshortsalecircuitbreaker)**()<br>[MamdaSecurityStatusUpdate.getShortSaleCircuitBreaker()]() |
| string | **[getSecurityStatusQualifierStr](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierstr)**()<br>[MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]() |
| string | **[getSecurityStatusOrigStr](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusorigstr)**()<br>Return the native security status qualifier  |
| string | **[getReason](classWombat_1_1MamdaSecurityStatusListener.html#function-getreason)**()<br>[MamdaSecurityStatusUpdate.getReason()]() |
| DateTime | **[getLuldTime](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldtime)**()<br>[MamdaSecurityStatusUpdate.getLuldTime()]() |
| char | **[getLuldIndicator](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldindicator)**()<br>[MamdaSecurityStatusUpdate.getLuldIndicator()]() |
| MamaPrice | **[getLuldHighLimit](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldhighlimit)**()<br>[MamdaSecurityStatusUpdate.getLuldHighLimit()]() |
| MamaPrice | **[getLuldLowLimit](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldlowlimit)**()<br>[MamdaSecurityStatusUpdate.getLuldLowLimit()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsrctimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getactivitytimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-geteventseqnumfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-geteventtimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getshortsalecircuitbreakerfieldstate)**()<br>[MamdaSecurityStatusUpdate.getShortSaleCircuitBreakerFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusEnumFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusenumfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierEnumFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierenumfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusStrFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusstrfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierStrFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierstrfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusOrigStrFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusorigstrfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getReasonFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getreasonfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldTimeFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldtimefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldIndicatorFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldindicatorfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldHighLimitFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldhighlimitfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldLowLimitFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldlowlimitfieldstate)**()<br>Get the field state  |
| void | **[onMsg](classWombat_1_1MamdaSecurityStatusListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Implementation of MamdaListener interface.  |
| string | **[getFieldAsString](classWombat_1_1MamdaSecurityStatusListener.html#function-getfieldasstring)**(MamaMsgField field) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[clearCache](classWombat_1_1MamdaSecurityStatusListener.html#function-clearcache)**([MamdaSecurityStatusCache](classWombat_1_1MamdaSecurityStatusListener_1_1MamdaSecurityStatusCache.html) cache) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| readonly [MamdaSecurityStatusCache](classWombat_1_1MamdaSecurityStatusListener_1_1MamdaSecurityStatusCache.html) | **[mSecurityStatusCache](classWombat_1_1MamdaSecurityStatusListener.html#variable-msecuritystatuscache)**  |

## Detailed Description

```csharp
class Wombat::MamdaSecurityStatusListener;
```

[MamdaSecurityStatusListener]() is a class that specializes in handling security status updates. Developers provide their own implementation of the [MamdaSecurityStatusHandler](interfaceWombat_1_1MamdaSecurityStatusHandler.html) interface and will be delivered notifications for security status updates. 

Note: The [MamdaSecurityStatusListener](classWombat_1_1MamdaSecurityStatusListener.html) class caches some field values. Among other reasons, caching of these fields makes it possible to provide complete certain callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaSecurityStatusListener

```csharp
MamdaSecurityStatusListener()
```

Create a specialized trade listener. This listener handles trade reports, trade recaps, trade errors/cancels, trade corrections, and trade gap notifications. 

### function addHandler

```csharp
void addHandler(
    MamdaSecurityStatusHandler handler
)
```

Add a specialized trade handler. Currently, only one handler can (and must) be registered. 

### function populateRecap

```csharp
void populateRecap(
    MamdaConcreteSecurityStatusRecap recap
)
```


### function getSrcTime

```csharp
DateTime getSrcTime()
```


### function getActivityTime

```csharp
DateTime getActivityTime()
```


### function getEventSeqNum

```csharp
long getEventSeqNum()
```


### function getEventTime

```csharp
DateTime getEventTime()
```


### function getSecurityStatus

```csharp
long getSecurityStatus()
```

[MamdaSecurityStatusUpdate.getSecurityStatus()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatus](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatus)


### function getSecurityStatusQualifier

```csharp
long getSecurityStatusQualifier()
```

[MamdaSecurityStatusUpdate.getSecurityStatus()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifier](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifier)


### function getSecurityStatusEnum

```csharp
MamdaSecurityStatus.mamdaSecurityStatus getSecurityStatusEnum()
```

[MamdaSecurityStatusUpdate.getSecurityStatusEnum()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusEnum](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusenum)


### function getSecurityStatusQualifierEnum

```csharp
MamdaSecurityStatusQual.mamdaSecurityStatusQual getSecurityStatusQualifierEnum()
```

[MamdaSecurityStatusUpdate.getSecurityStatusQualifierEnum()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierEnum](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierenum)


### function getSecurityStatusStr

```csharp
string getSecurityStatusStr()
```

[MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusStr](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusstr)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

[MamdaSecurityStatusUpdate.getShortSaleCircuitBreaker()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getshortsalecircuitbreaker)


### function getSecurityStatusQualifierStr

```csharp
string getSecurityStatusQualifierStr()
```

[MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierStr](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierstr)


### function getSecurityStatusOrigStr

```csharp
string getSecurityStatusOrigStr()
```

Return the native security status qualifier 

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusOrigStr](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusorigstr)


### function getReason

```csharp
string getReason()
```

[MamdaSecurityStatusUpdate.getReason()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getReason](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getreason)


### function getLuldTime

```csharp
DateTime getLuldTime()
```

[MamdaSecurityStatusUpdate.getLuldTime()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldTime](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldtime)


### function getLuldIndicator

```csharp
char getLuldIndicator()
```

[MamdaSecurityStatusUpdate.getLuldIndicator()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldIndicator](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldindicator)


### function getLuldHighLimit

```csharp
MamaPrice getLuldHighLimit()
```

[MamdaSecurityStatusUpdate.getLuldHighLimit()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldHighLimit](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldhighlimit)


### function getLuldLowLimit

```csharp
MamaPrice getLuldLowLimit()
```

[MamdaSecurityStatusUpdate.getLuldLowLimit()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldLowLimit](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldlowlimit)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```


### function getSecurityStatusFieldState

```csharp
MamdaFieldState getSecurityStatusFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusfieldstate)


### function getSecurityStatusQualifierFieldState

```csharp
MamdaFieldState getSecurityStatusQualifierFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierfieldstate)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

[MamdaSecurityStatusUpdate.getShortSaleCircuitBreakerFieldState()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function getSecurityStatusEnumFieldState

```csharp
MamdaFieldState getSecurityStatusEnumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusEnumFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusenumfieldstate)


### function getSecurityStatusQualifierEnumFieldState

```csharp
MamdaFieldState getSecurityStatusQualifierEnumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierEnumFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierenumfieldstate)


### function getSecurityStatusStrFieldState

```csharp
MamdaFieldState getSecurityStatusStrFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusStrFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusstrfieldstate)


### function getSecurityStatusQualifierStrFieldState

```csharp
MamdaFieldState getSecurityStatusQualifierStrFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierStrFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierstrfieldstate)


### function getSecurityStatusOrigStrFieldState

```csharp
MamdaFieldState getSecurityStatusOrigStrFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusOrigStrFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusorigstrfieldstate)


### function getReasonFieldState

```csharp
MamdaFieldState getReasonFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getReasonFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getreasonfieldstate)


### function getLuldTimeFieldState

```csharp
MamdaFieldState getLuldTimeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldTimeFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldtimefieldstate)


### function getLuldIndicatorFieldState

```csharp
MamdaFieldState getLuldIndicatorFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldIndicatorFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldindicatorfieldstate)


### function getLuldHighLimitFieldState

```csharp
MamdaFieldState getLuldHighLimitFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldHighLimitFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldhighlimitfieldstate)


### function getLuldLowLimitFieldState

```csharp
MamdaFieldState getLuldLowLimitFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldLowLimitFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldlowlimitfieldstate)


### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```

Implementation of MamdaListener interface. 

**Reimplements**: [Wombat::MamdaMsgListener::onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)


### function getFieldAsString

```csharp
string getFieldAsString(
    MamaMsgField field
)
```


## Protected Functions Documentation

### function clearCache

```csharp
static void clearCache(
    MamdaSecurityStatusCache cache
)
```


## Protected Attributes Documentation

### variable mSecurityStatusCache

```csharp
readonly MamdaSecurityStatusCache mSecurityStatusCache = new MamdaSecurityStatusCache();
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100