---
title: Wombat::MamaClientProfile::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaClientProfile::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaClientProfile_create](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-create)**(ref IntPtr profile) |
| int | **[mamaClientProfile_createNoCopyData](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-createnocopydata)**(IntPtr profile) |
| int | **[mamaClientProfile_getCopyData](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-getcopydata)**(IntPtr profile, ref bool copyData) |
| int | **[mamaClientProfile_destroy](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-destroy)**(IntPtr profile) |
| int | **[mamaClientProfile_clear](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-clear)**(IntPtr profile) |
| int | **[mamaClientProfile_setInterfaceVersion](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-setinterfaceversion)**(IntPtr profile, byte id) |
| int | **[mamaClientProfile_getInterfaceVersion](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-getinterfaceversion)**(IntPtr profile, ref byte id) |
| int | **[mamaClientProfile_setUserName](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-setusername)**(IntPtr profile, string userName) |
| int | **[mamaClientProfile_getUserName](structWombat_1_1MamaClientProfile_1_1NativeMethods.html#function-mamaclientprofile-getusername)**(IntPtr profile, ref IntPtr userName) |

## Public Functions Documentation

### function mamaClientProfile_create

```csharp
int mamaClientProfile_create(
    ref IntPtr profile
)
```


### function mamaClientProfile_createNoCopyData

```csharp
int mamaClientProfile_createNoCopyData(
    IntPtr profile
)
```


### function mamaClientProfile_getCopyData

```csharp
int mamaClientProfile_getCopyData(
    IntPtr profile,
    ref bool copyData
)
```


### function mamaClientProfile_destroy

```csharp
int mamaClientProfile_destroy(
    IntPtr profile
)
```


### function mamaClientProfile_clear

```csharp
int mamaClientProfile_clear(
    IntPtr profile
)
```


### function mamaClientProfile_setInterfaceVersion

```csharp
int mamaClientProfile_setInterfaceVersion(
    IntPtr profile,
    byte id
)
```


### function mamaClientProfile_getInterfaceVersion

```csharp
int mamaClientProfile_getInterfaceVersion(
    IntPtr profile,
    ref byte id
)
```


### function mamaClientProfile_setUserName

```csharp
int mamaClientProfile_setUserName(
    IntPtr profile,
    string userName
)
```


### function mamaClientProfile_getUserName

```csharp
int mamaClientProfile_getUserName(
    IntPtr profile,
    ref IntPtr userName
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100