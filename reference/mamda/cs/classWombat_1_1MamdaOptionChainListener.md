---
title: Wombat::MamdaOptionChainListener
summary: MamdaOptionChainListener is a class that specializes in handling and managing option chain updates. Developers provide their own implementation of the MamdaOptionChainHandler interface and will be delivered notifications for various types of options-related events. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionChainListener



[MamdaOptionChainListener]() is a class that specializes in handling and managing option chain updates. Developers provide their own implementation of the [MamdaOptionChainHandler](interfaceWombat_1_1MamdaOptionChainHandler.html) interface and will be delivered notifications for various types of options-related events. 

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaOptionSeriesUpdate](interfaceWombat_1_1MamdaOptionSeriesUpdate.html), [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html#function-mamdaoptionchainlistener)**(string underlyingSymbol)<br>Create a specialized option chain listener. This listener handles option chain updates.  |
| | **[MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html#function-mamdaoptionchainlistener)**([MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) chain)<br>Create a specialized option chain listener. This listener handles option chain updates.  |
| void | **[addHandler](classWombat_1_1MamdaOptionChainListener.html#function-addhandler)**([MamdaOptionChainHandler](interfaceWombat_1_1MamdaOptionChainHandler.html) handler)<br>Add a specialized option chain handler.  |
| [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) | **[getOptionChain](classWombat_1_1MamdaOptionChainListener.html#function-getoptionchain)**()<br>Return the option chain associated with this listener.  |
| void | **[onMsg](classWombat_1_1MamdaOptionChainListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Implementation of MamdaListener interface.  |
| DateTime | **[getSrcTime](classWombat_1_1MamdaOptionChainListener.html#function-getsrctime)**()<br>Returns the source time.  |
| DateTime | **[getActivityTime](classWombat_1_1MamdaOptionChainListener.html#function-getactivitytime)**() |
| long | **[getEventSeqNum](classWombat_1_1MamdaOptionChainListener.html#function-geteventseqnum)**() |
| DateTime | **[getEventTime](classWombat_1_1MamdaOptionChainListener.html#function-geteventtime)**() |
| [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) | **[getOptionContract](classWombat_1_1MamdaOptionChainListener.html#function-getoptioncontract)**()<br>Get the option contract to which the most recent event applies.  |
| MamdaOptionAction | **[getOptionAction](classWombat_1_1MamdaOptionChainListener.html#function-getoptionaction)**()<br>Get the most recent action.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaOptionChainListener.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaOptionChainListener.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaOptionChainListener.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaOptionChainListener.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOptionContractFieldState](classWombat_1_1MamdaOptionChainListener.html#function-getoptioncontractfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOptionActionFieldState](classWombat_1_1MamdaOptionChainListener.html#function-getoptionactionfieldstate)**() |
| string | **[getFieldAsString](classWombat_1_1MamdaOptionChainListener.html#function-getfieldasstring)**(MamaMsgField field) |

## Public Functions Documentation

### function MamdaOptionChainListener

```csharp
MamdaOptionChainListener(
    string underlyingSymbol
)
```

Create a specialized option chain listener. This listener handles option chain updates. 

**Parameters**: 

  * **underlyingSymbol** 


### function MamdaOptionChainListener

```csharp
MamdaOptionChainListener(
    MamdaOptionChain chain
)
```

Create a specialized option chain listener. This listener handles option chain updates. 

**Parameters**: 

  * **chain** 


### function addHandler

```csharp
void addHandler(
    MamdaOptionChainHandler handler
)
```

Add a specialized option chain handler. 

**Parameters**: 

  * **handler** 


### function getOptionChain

```csharp
MamdaOptionChain getOptionChain()
```

Return the option chain associated with this listener. 

**Return**: 

### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```

Implementation of MamdaListener interface. 

**Parameters**: 

  * **subscription** 
  * **msg** 
  * **msgType** 


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)


### function getSrcTime

```csharp
DateTime getSrcTime()
```

Returns the source time. 

**Return**: Source time. Typically, the exchange generated feed

* time stamp. This is often the same as the "event time",
* because many feeds do not distinguish between the actual event
* time and when the exchange sent the message.

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)


### function getActivityTime

```csharp
DateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated.

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getEventSeqNum

```csharp
long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number.

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventTime

```csharp
DateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)


### function getOptionContract

```csharp
MamdaOptionContract getOptionContract()
```

Get the option contract to which the most recent event applies. 

**Return**: The option contract to which the most recent event applies. If the contract is new, it will have already been added to the chain. If it is being removed, it will have already been removed from the chain. 

**Reimplements**: [Wombat::MamdaOptionSeriesUpdate::getOptionContract](interfaceWombat_1_1MamdaOptionSeriesUpdate.html#function-getoptioncontract)


### function getOptionAction

```csharp
MamdaOptionAction getOptionAction()
```

Get the most recent action. 

**Return**: The action related to the last series update message.

**Reimplements**: [Wombat::MamdaOptionSeriesUpdate::getOptionAction](interfaceWombat_1_1MamdaOptionSeriesUpdate.html#function-getoptionaction)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

Returns the field state. 

**Return**: Source time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

Returns the field state. 

**Return**: Activity time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

Returns the field state. 

**Return**: Source sequence number Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

Returns the field state. 

**Return**: Event Time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function getOptionContractFieldState

```csharp
MamdaFieldState getOptionContractFieldState()
```


### function getOptionActionFieldState

```csharp
MamdaFieldState getOptionActionFieldState()
```


### function getFieldAsString

```csharp
string getFieldAsString(
    MamaMsgField field
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100