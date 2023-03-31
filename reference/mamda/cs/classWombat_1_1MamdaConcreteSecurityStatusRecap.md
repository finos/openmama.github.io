---
title: Wombat::MamdaConcreteSecurityStatusRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaConcreteSecurityStatusRecap





Inherits from [Wombat.MamdaSecurityStatusRecap](interfaceWombat_1_1MamdaSecurityStatusRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[clear](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-clear)**()<br>Clear the recap data  |
| long | **[getSecurityStatus](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatus)**()<br>Returns the security status [MamdaSecurityStatusUpdate.getSecurityStatus()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setSecurityStatus](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setsecuritystatus)**(long securityStatus)<br>Set the security status [MamdaSecurityStatusUpdate.getSecurityStatus()]() |
| long | **[getSecurityStatusQualifier](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusqualifier)**()<br>Returns the security [MamdaSecurityStatusUpdate.getSecurityStatus()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusqualifierfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setSecurityStatusQualifier](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setsecuritystatusqualifier)**(long secQualifier)<br>[MamdaSecurityStatusUpdate.getSecurityStatus()]() |
| [MamdaSecurityStatus.mamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html#enum-mamdasecuritystatus) | **[getSecurityStatusEnum](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusenum)**()<br>[MamdaSecurityStatusUpdate.getSecurityStatusEnum()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusEnumFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusenumfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setSecurityStatusEnum](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setsecuritystatusenum)**([MamdaSecurityStatus.mamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html#enum-mamdasecuritystatus) secStatus)<br>[MamdaSecurityStatusUpdate.getSecurityStatusEnum()]() |
| MamdaSecurityStatusQual.mamdaSecurityStatusQual | **[getSecurityStatusQualifierEnum](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusqualifierenum)**()<br>[MamdaSecurityStatusUpdate.getSecurityStatusQualifierEnum()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierEnumFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusqualifierenumfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setSecurityStatusQualifierEnum](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setsecuritystatusqualifierenum)**(MamdaSecurityStatusQual.mamdaSecurityStatusQual secStatusQual)<br>[MamdaSecurityStatusUpdate.getSecurityStatusQualifierEnum()]() |
| string | **[getSecurityStatusStr](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusstr)**()<br>Returns the security status string [MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusStrFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusstrfieldstate)**()<br>Returns Field State, always MODIFIED  |
| char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getshortsalecircuitbreaker)**()<br>Returns the short sale CircuitBreaker [MamdaSecurityStatusUpdate.getShortSaleCircuitBreaker()]() |
| void | **[setShortSaleCircuitBreaker](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setshortsalecircuitbreaker)**(char shortSaleCircuitBreaker)<br>Set the short sale Circuit Breaker. [MamdaSecurityStatusUpdate.getShortSaleCircuitBreakerFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Returns Field State, always MODIFIED  |
| string | **[getSecurityStatusOrigStr](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusorigstr)**()<br>Return the native security status qualifier  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusOrigStrFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusorigstrfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setSecurityStatusOrigStr](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setsecuritystatusorigstr)**(string securityStatusOrigStr) |
| void | **[setSecurityStatusStr](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setsecuritystatusstr)**(string securityStatusStr)<br>Set the security status string [MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]() |
| string | **[getSecurityStatusQualifierStr](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusqualifierstr)**()<br>Returns the security status qualifier string [MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierStrFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsecuritystatusqualifierstrfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setSecurityStatusQualifierStr](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setsecuritystatusqualifierstr)**(String securityStatusQualifierStr)<br>Set the security status qualifier string [MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]() |
| string | **[getReason](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getreason)**()<br>[MamdaSecurityStatusUpdate.getReason()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getReasonFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getreasonfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setReason](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setreason)**(string reason) |
| DateTime | **[getActivityTime](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getactivitytime)**()<br>[MamdaBasicRecap.getActivityTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytime) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getactivitytimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setActivityTime](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setactivitytime)**(DateTime actTime) |
| void | **[setSrcTime](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setsrctime)**(DateTime srcTime) |
| DateTime | **[getSrcTime](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsrctime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getsrctimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| DateTime | **[getLuldTime](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getluldtime)**()<br>Returns the security status Luld Time  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldTimeFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getluldtimefieldstate)**()<br>Returns Field State, always MODIFIED  |
| char | **[getLuldIndicator](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getluldindicator)**()<br>Returns the security status Luld Indicator  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldIndicatorFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getluldindicatorfieldstate)**()<br>Returns Field State, always MODIFIED  |
| MamaPrice | **[getLuldHighLimit](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getluldhighlimit)**()<br>Returns the security status Luld High Limit  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldHighLimitFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getluldhighlimitfieldstate)**()<br>Returns Field State, always MODIFIED  |
| MamaPrice | **[getLuldLowLimit](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getluldlowlimit)**()<br>Returns the security status Luld LowLimit  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldLowLimitFieldState](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-getluldlowlimitfieldstate)**()<br>Returns Field State, always MODIFIED  |
| void | **[setLuldTime](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setluldtime)**(DateTime luldTime)<br>Set the Limit Up Limit Down Time  |
| void | **[setLuldIndicator](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setluldindicator)**(char luldIndicator)<br>Set the Limit Up Limit Down Indicator  |
| void | **[setLuldHighLimit](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setluldhighlimit)**(MamaPrice luldHighLimit)<br>Set the Limit Up Limit Down High Limit  |
| void | **[setLuldLowLimit](classWombat_1_1MamdaConcreteSecurityStatusRecap.html#function-setluldlowlimit)**(MamaPrice luldLowLimit)<br>Set the Limit Up Limit Down Low Limit  |

## Public Functions Documentation

### function clear

```csharp
void clear()
```

Clear the recap data 

### function getSecurityStatus

```csharp
long getSecurityStatus()
```

Returns the security status [MamdaSecurityStatusUpdate.getSecurityStatus()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatus](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatus)


### function getSecurityStatusFieldState

```csharp
MamdaFieldState getSecurityStatusFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusfieldstate)


### function setSecurityStatus

```csharp
void setSecurityStatus(
    long securityStatus
)
```

Set the security status [MamdaSecurityStatusUpdate.getSecurityStatus()]()

**Parameters**: 

  * **securityStatus** 


### function getSecurityStatusQualifier

```csharp
long getSecurityStatusQualifier()
```

Returns the security [MamdaSecurityStatusUpdate.getSecurityStatus()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifier](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifier)


### function getSecurityStatusQualifierFieldState

```csharp
MamdaFieldState getSecurityStatusQualifierFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierfieldstate)


### function setSecurityStatusQualifier

```csharp
void setSecurityStatusQualifier(
    long secQualifier
)
```

[MamdaSecurityStatusUpdate.getSecurityStatus()]()

**Parameters**: 

  * **secQualifier** 


### function getSecurityStatusEnum

```csharp
MamdaSecurityStatus.mamdaSecurityStatus getSecurityStatusEnum()
```

[MamdaSecurityStatusUpdate.getSecurityStatusEnum()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusEnum](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusenum)


### function getSecurityStatusEnumFieldState

```csharp
MamdaFieldState getSecurityStatusEnumFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusEnumFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusenumfieldstate)


### function setSecurityStatusEnum

```csharp
void setSecurityStatusEnum(
    MamdaSecurityStatus.mamdaSecurityStatus secStatus
)
```

[MamdaSecurityStatusUpdate.getSecurityStatusEnum()]()

**Return**: 

### function getSecurityStatusQualifierEnum

```csharp
MamdaSecurityStatusQual.mamdaSecurityStatusQual getSecurityStatusQualifierEnum()
```

[MamdaSecurityStatusUpdate.getSecurityStatusQualifierEnum()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierEnum](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierenum)


### function getSecurityStatusQualifierEnumFieldState

```csharp
MamdaFieldState getSecurityStatusQualifierEnumFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierEnumFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierenumfieldstate)


### function setSecurityStatusQualifierEnum

```csharp
void setSecurityStatusQualifierEnum(
    MamdaSecurityStatusQual.mamdaSecurityStatusQual secStatusQual
)
```

[MamdaSecurityStatusUpdate.getSecurityStatusQualifierEnum()]()

**Parameters**: 

  * **secStatusQual** 


### function getSecurityStatusStr

```csharp
string getSecurityStatusStr()
```

Returns the security status string [MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusStr](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusstr)


### function getSecurityStatusStrFieldState

```csharp
MamdaFieldState getSecurityStatusStrFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusStrFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusstrfieldstate)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

Returns the short sale CircuitBreaker [MamdaSecurityStatusUpdate.getShortSaleCircuitBreaker()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getshortsalecircuitbreaker)


### function setShortSaleCircuitBreaker

```csharp
void setShortSaleCircuitBreaker(
    char shortSaleCircuitBreaker
)
```

Set the short sale Circuit Breaker. [MamdaSecurityStatusUpdate.getShortSaleCircuitBreakerFieldState()]()

**Parameters**: 

  * **shortSaleCircuitBreaker** 


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function getSecurityStatusOrigStr

```csharp
string getSecurityStatusOrigStr()
```

Return the native security status qualifier 

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusOrigStr](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusorigstr)


### function getSecurityStatusOrigStrFieldState

```csharp
MamdaFieldState getSecurityStatusOrigStrFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusOrigStrFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusorigstrfieldstate)


### function setSecurityStatusOrigStr

```csharp
void setSecurityStatusOrigStr(
    string securityStatusOrigStr
)
```


### function setSecurityStatusStr

```csharp
void setSecurityStatusStr(
    string securityStatusStr
)
```

Set the security status string [MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]()

**Parameters**: 

  * **securityStatusStr** 


### function getSecurityStatusQualifierStr

```csharp
string getSecurityStatusQualifierStr()
```

Returns the security status qualifier string [MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierStr](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierstr)


### function getSecurityStatusQualifierStrFieldState

```csharp
MamdaFieldState getSecurityStatusQualifierStrFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getSecurityStatusQualifierStrFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierstrfieldstate)


### function setSecurityStatusQualifierStr

```csharp
void setSecurityStatusQualifierStr(
    String securityStatusQualifierStr
)
```

Set the security status qualifier string [MamdaSecurityStatusUpdate.getSecurityStatusQualifier()]()

**Parameters**: 

  * **securityStatusQualifierStr** 


**Return**: 


summary> Returns the security status reason [MamdaSecurityStatusRecap.getReason()](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getreason)


### function getReason

```csharp
string getReason()
```

[MamdaSecurityStatusUpdate.getReason()]()

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getReason](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getreason)


### function getReasonFieldState

```csharp
MamdaFieldState getReasonFieldState()
```

Returns Field State, always MODIFIED 

**Parameters**: 

  * **reason** 


**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getReasonFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getreasonfieldstate)



summary> Set the security status reason [MamdaSecurityStatusRecap.getReason()](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getreason)


### function setReason

```csharp
void setReason(
    string reason
)
```


### function getActivityTime

```csharp
DateTime getActivityTime()
```

[MamdaBasicRecap.getActivityTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytime)

**Return**: 

### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function setActivityTime

```csharp
void setActivityTime(
    DateTime actTime
)
```


**Parameters**: 

  * **actTime** 


### function setSrcTime

```csharp
void setSrcTime(
    DateTime srcTime
)
```


### function getSrcTime

```csharp
DateTime getSrcTime()
```


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

### function getLuldTime

```csharp
DateTime getLuldTime()
```

Returns the security status Luld Time 

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldTime](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldtime)


### function getLuldTimeFieldState

```csharp
MamdaFieldState getLuldTimeFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldTimeFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldtimefieldstate)


### function getLuldIndicator

```csharp
char getLuldIndicator()
```

Returns the security status Luld Indicator 

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldIndicator](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldindicator)


### function getLuldIndicatorFieldState

```csharp
MamdaFieldState getLuldIndicatorFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldIndicatorFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldindicatorfieldstate)


### function getLuldHighLimit

```csharp
MamaPrice getLuldHighLimit()
```

Returns the security status Luld High Limit 

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldHighLimit](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldhighlimit)


### function getLuldHighLimitFieldState

```csharp
MamdaFieldState getLuldHighLimitFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldHighLimitFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldhighlimitfieldstate)


### function getLuldLowLimit

```csharp
MamaPrice getLuldLowLimit()
```

Returns the security status Luld LowLimit 

**Return**: 

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldLowLimit](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldlowlimit)


### function getLuldLowLimitFieldState

```csharp
MamdaFieldState getLuldLowLimitFieldState()
```

Returns Field State, always MODIFIED 

**Return**: Field State MODIFIED

**Reimplements**: [Wombat::MamdaSecurityStatusRecap::getLuldLowLimitFieldState](interfaceWombat_1_1MamdaSecurityStatusRecap.html#function-getluldlowlimitfieldstate)


### function setLuldTime

```csharp
void setLuldTime(
    DateTime luldTime
)
```

Set the Limit Up Limit Down Time 

**Parameters**: 

  * **luldTime** 


### function setLuldIndicator

```csharp
void setLuldIndicator(
    char luldIndicator
)
```

Set the Limit Up Limit Down Indicator 

**Parameters**: 

  * **luldIndicator** 


### function setLuldHighLimit

```csharp
void setLuldHighLimit(
    MamaPrice luldHighLimit
)
```

Set the Limit Up Limit Down High Limit 

**Parameters**: 

  * **luldHighLimit** 


### function setLuldLowLimit

```csharp
void setLuldLowLimit(
    MamaPrice luldLowLimit
)
```

Set the Limit Up Limit Down Low Limit 

**Parameters**: 

  * **luldLowLimit** 


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100