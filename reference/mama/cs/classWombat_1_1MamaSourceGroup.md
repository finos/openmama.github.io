---
title: Wombat::MamaSourceGroup
summary: A MamaSourceGroup monitors a set of MamaSources that presumably provide a duplicate set of data. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroup



A [MamaSourceGroup]() monitors a set of [MamaSource](classWombat_1_1MamaSource.html)s that presumably provide a duplicate set of data.  [More...](#detailed-description)

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IEnumerable

## Public Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[StateChangedRegistration](interfaceWombat_1_1MamaSourceGroup_1_1StateChangedRegistration.html)** <br>Encapsulates a registration of a state-change mCallback for a particular source mGroup  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceGroup](classWombat_1_1MamaSourceGroup.html#function-mamasourcegroup)**(string groupName)<br>Constructs **and** creates a new source mGroup object. M:Wombat.MamaWrapper.::ctor |
| void | **[destroy](classWombat_1_1MamaSourceGroup.html#function-destroy)**()<br>Destroy the source. A synonym to the [MamaWrapper.Dispose]() method.  |
| [MamaSource](classWombat_1_1MamaSource.html) | **[find](classWombat_1_1MamaSourceGroup.html#function-find)**(string sourceName)<br>Find a source with the given name in the mGroup.  |
| void | **[add](classWombat_1_1MamaSourceGroup.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) source, uint weight)<br>Add a mamaSource to the specified mGroup with the specified weighting.  |
| void | **[add](classWombat_1_1MamaSourceGroup.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) source, int weight)<br>CLS compliant version of add(MamaSource, UInt32)  |
| void | **[add](classWombat_1_1MamaSourceGroup.html#function-add)**(string sourceName, uint weight, [MamaSource](classWombat_1_1MamaSource.html) source)<br>Add a mamaSource to the specified mGroup with the specified weighting and string name identifier.  |
| void | **[add](classWombat_1_1MamaSourceGroup.html#function-add)**(string sourceName, int weight, [MamaSource](classWombat_1_1MamaSource.html) source)<br>CLS compliant version of add(System.String, UInt32, [MamaSource](classWombat_1_1MamaSource.html))  |
| void | **[setWeight](classWombat_1_1MamaSourceGroup.html#function-setweight)**(string sourceName, uint weight)<br>Set the weight for an existing mamaSource in the specified mGroup.  |
| void | **[setWeight](classWombat_1_1MamaSourceGroup.html#function-setweight)**(string sourceName, int weight)<br>CLS compliant version of setWeight(System.String, UInt32)  |
| [StateChangedRegistration](interfaceWombat_1_1MamaSourceGroup_1_1StateChangedRegistration.html) | **[registerStateChangeCallback](classWombat_1_1MamaSourceGroup.html#function-registerstatechangecallback)**([MamaSourceStateChangeCallback](interfaceWombat_1_1MamaSourceStateChangeCallback.html) mCallback)<br>The mCallback interface registered here will receive a mCallback whenever the state of sources in the mGroup changes.  |
| bool | **[reevaluate](classWombat_1_1MamaSourceGroup.html#function-reevaluate)**()<br>Re-evaluate the mGroup by checking all of the relative weights and changing the state of each [MamaSource](classWombat_1_1MamaSource.html) in the mGroup as appropriate.  |
| IEnumerator | **[GetEnumerator](classWombat_1_1MamaSourceGroup.html#function-getenumerator)**()<br>Provides an enumerator over the sources in the source mGroup  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaSourceGroup.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| string | **[name](classWombat_1_1MamaSourceGroup.html#property-name)** <br>Return the name string identifier for the specified source mGroup.  |
| uint | **[size](classWombat_1_1MamaSourceGroup.html#property-size)** <br>Returns the number of sources in this source mGroup  |
| int | **[sizeClsCompliant](classWombat_1_1MamaSourceGroup.html#property-sizeclscompliant)** <br>CLS compliant version of size  |
| [MamaSource](classWombat_1_1MamaSource.html) | **[topWeightSource](classWombat_1_1MamaSourceGroup.html#property-topweightsource)** <br>Return the top weighted source for this source mGroup.  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Detailed Description

```csharp
class Wombat::MamaSourceGroup;
```

A [MamaSourceGroup]() monitors a set of [MamaSource](classWombat_1_1MamaSource.html)s that presumably provide a duplicate set of data. 

Each member of the mGroup is given a priority and the member with the highest priority is given the state [mamaSourceState.MAMA_SOURCE_STATE_OK](namespaceWombat.html#enumvalue-mama-source-state-ok) the other members of the mGroup are given the state [mamaSourceState.MAMA_SOURCE_STATE_OFF](namespaceWombat.html#enumvalue-mama-source-state-off)

## Public Functions Documentation

### function MamaSourceGroup

```csharp
MamaSourceGroup(
    string groupName
)
```

Constructs **and** creates a new source mGroup object. M:Wombat.MamaWrapper.::ctor

**Parameters**: 

  * **groupName** The string identifier for the source mGroup.


### function destroy

```csharp
void destroy()
```

Destroy the source. A synonym to the [MamaWrapper.Dispose]() method. 

### function find

```csharp
MamaSource find(
    string sourceName
)
```

Find a source with the given name in the mGroup. 

**Parameters**: 

  * **sourceName** The name identifier for the source being located.


**Return**: The source if found, null otherwise

### function add

```csharp
void add(
    MamaSource source,
    uint weight
)
```

Add a mamaSource to the specified mGroup with the specified weighting. 

**Parameters**: 

  * **source** The mamaSource being added to the mamaSourceGroup.
  * **weight** The weighing to apply to the source being added.


The source id will be used by the mGroup to uniquely identify the source.


### function add

```csharp
void add(
    MamaSource source,
    int weight
)
```

CLS compliant version of add(MamaSource, UInt32) 

### function add

```csharp
void add(
    string sourceName,
    uint weight,
    MamaSource source
)
```

Add a mamaSource to the specified mGroup with the specified weighting and string name identifier. 

**Parameters**: 

  * **sourceName** The unique identifier for this source in this mGroup.
  * **weight** The weighing to apply to the source being added.
  * **source** The mamaSource being added to the mamaSourceGroup.


### function add

```csharp
void add(
    string sourceName,
    int weight,
    MamaSource source
)
```

CLS compliant version of add(System.String, UInt32, [MamaSource](classWombat_1_1MamaSource.html)) 

### function setWeight

```csharp
void setWeight(
    string sourceName,
    uint weight
)
```

Set the weight for an existing mamaSource in the specified mGroup. 

**Parameters**: 

  * **sourceName** The name of the source whose weight is being updated.
  * **weight** The new weight value for the specified source.


### function setWeight

```csharp
void setWeight(
    string sourceName,
    int weight
)
```

CLS compliant version of setWeight(System.String, UInt32) 

### function registerStateChangeCallback

```csharp
StateChangedRegistration registerStateChangeCallback(
    MamaSourceStateChangeCallback mCallback
)
```

The mCallback interface registered here will receive a mCallback whenever the state of sources in the mGroup changes. 

**Parameters**: 

  * **mCallback** The mCallback object


### function reevaluate

```csharp
bool reevaluate()
```

Re-evaluate the mGroup by checking all of the relative weights and changing the state of each [MamaSource](classWombat_1_1MamaSource.html) in the mGroup as appropriate. 

**Return**: Returns true if any states were changed; otherwise false.

### function GetEnumerator

```csharp
IEnumerator GetEnumerator()
```

Provides an enumerator over the sources in the source mGroup 

**Return**: 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


## Public Property Documentation

### property name

```csharp
string name;
```

Return the name string identifier for the specified source mGroup. 

### property size

```csharp
uint size;
```

Returns the number of sources in this source mGroup 

The size is evaluated every time, so cache it before entering a loop


### property sizeClsCompliant

```csharp
int sizeClsCompliant;
```

CLS compliant version of size 

### property topWeightSource

```csharp
MamaSource topWeightSource;
```

Return the top weighted source for this source mGroup. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100