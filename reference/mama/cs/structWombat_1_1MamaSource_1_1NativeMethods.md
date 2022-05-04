---
title: Wombat::MamaSource::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSource::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaSource_create](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-create)**(ref IntPtr source) |
| int | **[mamaSource_destroy](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-destroy)**(IntPtr source) |
| int | **[mamaSource_clear](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-clear)**(IntPtr source) |
| int | **[mamaSource_setId](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-setid)**(IntPtr source, string id) |
| int | **[mamaSource_setMappedId](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-setmappedid)**(IntPtr source, string id) |
| int | **[mamaSource_setDisplayId](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-setdisplayid)**(IntPtr source, string id) |
| int | **[mamaSource_setQuality](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-setquality)**(IntPtr source, int quality) |
| int | **[mamaSource_setState](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-setstate)**(IntPtr source, int sourceState) |
| int | **[mamaSource_setParent](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-setparent)**(IntPtr source, IntPtr parent) |
| int | **[mamaSource_setSymbolNamespace](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-setsymbolnamespace)**(IntPtr source, string symbolNamespace) |
| int | **[mamaSource_setTransportName](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-settransportname)**(IntPtr source, string transportName) |
| int | **[mamaSource_setTransport](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-settransport)**(IntPtr source, IntPtr transport) |
| int | **[mamaSource_setSymbology](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-setsymbology)**(IntPtr source, IntPtr symbology) |
| int | **[mamaSource_getId](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getid)**(IntPtr source, ref IntPtr id) |
| int | **[mamaSource_getMappedId](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getmappedid)**(IntPtr source, ref IntPtr id) |
| int | **[mamaSource_getDisplayId](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getdisplayid)**(IntPtr source, ref IntPtr id) |
| int | **[mamaSource_getQuality](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getquality)**(IntPtr source, ref int quality) |
| int | **[mamaSource_getState](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getstate)**(IntPtr source, ref int state) |
| IntPtr | **[mamaSource_getStateAsString](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getstateasstring)**(IntPtr source) |
| int | **[mamaSource_getParent](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getparent)**(IntPtr source, ref IntPtr parent) |
| int | **[mamaSource_getSymbolNamespace](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getsymbolnamespace)**(IntPtr source, ref IntPtr symbolNamespace) |
| int | **[mamaSource_getTransportName](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-gettransportname)**(IntPtr source, ref IntPtr transportName) |
| int | **[mamaSource_getTransport](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-gettransport)**(IntPtr source, ref IntPtr transport) |
| int | **[mamaSource_getSymbology](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getsymbology)**(IntPtr source, ref IntPtr symbology) |
| int | **[mamaSource_getSubSourceManager](structWombat_1_1MamaSource_1_1NativeMethods.html#function-mamasource-getsubsourcemanager)**(IntPtr source, ref IntPtr subSourceManager) |

## Public Functions Documentation

### function mamaSource_create

```csharp
int mamaSource_create(
    ref IntPtr source
)
```


### function mamaSource_destroy

```csharp
int mamaSource_destroy(
    IntPtr source
)
```


### function mamaSource_clear

```csharp
int mamaSource_clear(
    IntPtr source
)
```


### function mamaSource_setId

```csharp
int mamaSource_setId(
    IntPtr source,
    string id
)
```


### function mamaSource_setMappedId

```csharp
int mamaSource_setMappedId(
    IntPtr source,
    string id
)
```


### function mamaSource_setDisplayId

```csharp
int mamaSource_setDisplayId(
    IntPtr source,
    string id
)
```


### function mamaSource_setQuality

```csharp
int mamaSource_setQuality(
    IntPtr source,
    int quality
)
```


### function mamaSource_setState

```csharp
int mamaSource_setState(
    IntPtr source,
    int sourceState
)
```


### function mamaSource_setParent

```csharp
int mamaSource_setParent(
    IntPtr source,
    IntPtr parent
)
```


### function mamaSource_setSymbolNamespace

```csharp
int mamaSource_setSymbolNamespace(
    IntPtr source,
    string symbolNamespace
)
```


### function mamaSource_setTransportName

```csharp
int mamaSource_setTransportName(
    IntPtr source,
    string transportName
)
```


### function mamaSource_setTransport

```csharp
int mamaSource_setTransport(
    IntPtr source,
    IntPtr transport
)
```


### function mamaSource_setSymbology

```csharp
int mamaSource_setSymbology(
    IntPtr source,
    IntPtr symbology
)
```


### function mamaSource_getId

```csharp
int mamaSource_getId(
    IntPtr source,
    ref IntPtr id
)
```


### function mamaSource_getMappedId

```csharp
int mamaSource_getMappedId(
    IntPtr source,
    ref IntPtr id
)
```


### function mamaSource_getDisplayId

```csharp
int mamaSource_getDisplayId(
    IntPtr source,
    ref IntPtr id
)
```


### function mamaSource_getQuality

```csharp
int mamaSource_getQuality(
    IntPtr source,
    ref int quality
)
```


### function mamaSource_getState

```csharp
int mamaSource_getState(
    IntPtr source,
    ref int state
)
```


### function mamaSource_getStateAsString

```csharp
IntPtr mamaSource_getStateAsString(
    IntPtr source
)
```


### function mamaSource_getParent

```csharp
int mamaSource_getParent(
    IntPtr source,
    ref IntPtr parent
)
```


### function mamaSource_getSymbolNamespace

```csharp
int mamaSource_getSymbolNamespace(
    IntPtr source,
    ref IntPtr symbolNamespace
)
```


### function mamaSource_getTransportName

```csharp
int mamaSource_getTransportName(
    IntPtr source,
    ref IntPtr transportName
)
```


### function mamaSource_getTransport

```csharp
int mamaSource_getTransport(
    IntPtr source,
    ref IntPtr transport
)
```


### function mamaSource_getSymbology

```csharp
int mamaSource_getSymbology(
    IntPtr source,
    ref IntPtr symbology
)
```


### function mamaSource_getSubSourceManager

```csharp
int mamaSource_getSubSourceManager(
    IntPtr source,
    ref IntPtr subSourceManager
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100