---
title: Wombat::MamaSourceGroup::StateChangedRegistration
summary: Encapsulates a registration of a state-change mCallback for a particular source mGroup 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroup::StateChangedRegistration



Encapsulates a registration of a state-change mCallback for a particular source mGroup 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[unregister](interfaceWombat_1_1MamaSourceGroup_1_1StateChangedRegistration.html#function-unregister)**()<br>Remove interest in callbacks when the state of sources within a mGroup change.  |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) | **[SourceGroup](interfaceWombat_1_1MamaSourceGroup_1_1StateChangedRegistration.html#property-sourcegroup)** <br>Returns the source mGroup which the mCallback object is observing.  |
| [MamaSourceStateChangeCallback](interfaceWombat_1_1MamaSourceStateChangeCallback.html) | **[SourceStateChangeCallback](interfaceWombat_1_1MamaSourceGroup_1_1StateChangedRegistration.html#property-sourcestatechangecallback)** <br>Returns the observing mCallback  |

## Public Functions Documentation

### function unregister

```csharp
void unregister()
```

Remove interest in callbacks when the state of sources within a mGroup change. 

## Public Property Documentation

### property SourceGroup

```csharp
MamaSourceGroup SourceGroup;
```

Returns the source mGroup which the mCallback object is observing. 

### property SourceStateChangeCallback

```csharp
MamaSourceStateChangeCallback SourceStateChangeCallback;
```

Returns the observing mCallback 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100