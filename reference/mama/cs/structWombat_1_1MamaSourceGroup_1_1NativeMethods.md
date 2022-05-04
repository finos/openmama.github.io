---
title: Wombat::MamaSourceGroup::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroup::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaSourceGroup_create](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-create)**(ref IntPtr sourceGroup, string groupName) |
| int | **[mamaSourceGroup_getName](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-getname)**(IntPtr sourceGroup, ref IntPtr groupName) |
| int | **[mamaSourceGroup_findSource](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-findsource)**(IntPtr sourceGroup, string sourceName, ref IntPtr source) |
| int | **[mamaSourceGroup_addSource](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-addsource)**(IntPtr sourceGroup, IntPtr source, uint weight) |
| int | **[mamaSourceGroup_addSourceWithName](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-addsourcewithname)**(IntPtr sourceGroup, IntPtr source, string sourceName, uint weight) |
| int | **[mamaSourceGroup_setSourceWeight](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-setsourceweight)**(IntPtr sourceGroup, string sourceName, uint weight) |
| int | **[mamaSourceGroup_reevaluate](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-reevaluate)**(IntPtr sourceGroup, ref byte changedStates) |
| int | **[mamaSourceGroup_iterateSources](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-iteratesources)**(IntPtr sourceGroup, MamaSourceGroupIterateDelegate mCallback, IntPtr closure) |
| int | **[mamaSourceGroup_getTopWeightSource](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-gettopweightsource)**(IntPtr sourceGroup, ref IntPtr topWeightSource) |
| int | **[mamaSourceGroup_registerStageChangeCallback](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-registerstagechangecallback)**(IntPtr sourceGroup, MamaSourceGroupOnStateChangeDelegate mCallback, ref IntPtr registrationCookie, IntPtr closure) |
| int | **[mamaSourceGroup_unregisterStateChangeCallback](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-unregisterstatechangecallback)**(IntPtr sourceGroup, IntPtr registrationCookie) |
| int | **[mamaSourceGroup_destroy](structWombat_1_1MamaSourceGroup_1_1NativeMethods.html#function-mamasourcegroup-destroy)**(IntPtr sourceGroup) |

## Public Functions Documentation

### function mamaSourceGroup_create

```csharp
int mamaSourceGroup_create(
    ref IntPtr sourceGroup,
    string groupName
)
```


### function mamaSourceGroup_getName

```csharp
int mamaSourceGroup_getName(
    IntPtr sourceGroup,
    ref IntPtr groupName
)
```


### function mamaSourceGroup_findSource

```csharp
int mamaSourceGroup_findSource(
    IntPtr sourceGroup,
    string sourceName,
    ref IntPtr source
)
```


### function mamaSourceGroup_addSource

```csharp
int mamaSourceGroup_addSource(
    IntPtr sourceGroup,
    IntPtr source,
    uint weight
)
```


### function mamaSourceGroup_addSourceWithName

```csharp
int mamaSourceGroup_addSourceWithName(
    IntPtr sourceGroup,
    IntPtr source,
    string sourceName,
    uint weight
)
```


### function mamaSourceGroup_setSourceWeight

```csharp
int mamaSourceGroup_setSourceWeight(
    IntPtr sourceGroup,
    string sourceName,
    uint weight
)
```


### function mamaSourceGroup_reevaluate

```csharp
int mamaSourceGroup_reevaluate(
    IntPtr sourceGroup,
    ref byte changedStates
)
```


### function mamaSourceGroup_iterateSources

```csharp
int mamaSourceGroup_iterateSources(
    IntPtr sourceGroup,
    MamaSourceGroupIterateDelegate mCallback,
    IntPtr closure
)
```


### function mamaSourceGroup_getTopWeightSource

```csharp
int mamaSourceGroup_getTopWeightSource(
    IntPtr sourceGroup,
    ref IntPtr topWeightSource
)
```


### function mamaSourceGroup_registerStageChangeCallback

```csharp
int mamaSourceGroup_registerStageChangeCallback(
    IntPtr sourceGroup,
    MamaSourceGroupOnStateChangeDelegate mCallback,
    ref IntPtr registrationCookie,
    IntPtr closure
)
```


### function mamaSourceGroup_unregisterStateChangeCallback

```csharp
int mamaSourceGroup_unregisterStateChangeCallback(
    IntPtr sourceGroup,
    IntPtr registrationCookie
)
```


### function mamaSourceGroup_destroy

```csharp
int mamaSourceGroup_destroy(
    IntPtr sourceGroup
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100