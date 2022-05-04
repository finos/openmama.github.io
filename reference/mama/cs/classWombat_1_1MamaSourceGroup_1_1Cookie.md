---
title: Wombat::MamaSourceGroup::Cookie
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroup::Cookie





Inherits from [Wombat.MamaSourceGroup.StateChangedRegistration](interfaceWombat_1_1MamaSourceGroup_1_1StateChangedRegistration.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Cookie](classWombat_1_1MamaSourceGroup_1_1Cookie.html#function-cookie)**([MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) mGroup, [MamaSourceStateChangeCallback](interfaceWombat_1_1MamaSourceStateChangeCallback.html) mCallback, IntPtr registrationHandle, IntPtr mKey) |
| void | **[unregister](classWombat_1_1MamaSourceGroup_1_1Cookie.html#function-unregister)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) | **[SourceGroup](classWombat_1_1MamaSourceGroup_1_1Cookie.html#property-sourcegroup)**  |
| [MamaSourceStateChangeCallback](interfaceWombat_1_1MamaSourceStateChangeCallback.html) | **[SourceStateChangeCallback](classWombat_1_1MamaSourceGroup_1_1Cookie.html#property-sourcestatechangecallback)**  |
| int | **[Key](classWombat_1_1MamaSourceGroup_1_1Cookie.html#property-key)**  |

## Public Functions Documentation

### function Cookie

```csharp
Cookie(
    MamaSourceGroup mGroup,
    MamaSourceStateChangeCallback mCallback,
    IntPtr registrationHandle,
    IntPtr mKey
)
```


### function unregister

```csharp
void unregister()
```


## Public Property Documentation

### property SourceGroup

```csharp
MamaSourceGroup SourceGroup;
```


### property SourceStateChangeCallback

```csharp
MamaSourceStateChangeCallback SourceStateChangeCallback;
```


### property Key

```csharp
int Key;
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100