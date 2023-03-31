---
title: Wombat::MamaWeightedSource
summary: Encapsulates both a source object and its weight in a source group 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaWeightedSource



Encapsulates both a source object and its weight in a source group 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| implicit | **[operator MamaSource](classWombat_1_1MamaWeightedSource.html#function-operator-mamasource)**([MamaWeightedSource](classWombat_1_1MamaWeightedSource.html) weightedSource)<br>Provides an implicit cast to [MamaSource](classWombat_1_1MamaSource.html) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| [MamaSource](classWombat_1_1MamaSource.html) | **[Source](classWombat_1_1MamaWeightedSource.html#property-source)** <br>Returns the source object  |
| uint | **[weight](classWombat_1_1MamaWeightedSource.html#property-weight)** <br>Returns the source's weight in the source group  |
| int | **[weightClsCompliant](classWombat_1_1MamaWeightedSource.html#property-weightclscompliant)** <br>CLS compliant version of weight  |

## Public Functions Documentation

### function operator MamaSource

```csharp
static implicit operator MamaSource(
    MamaWeightedSource weightedSource
)
```

Provides an implicit cast to [MamaSource](classWombat_1_1MamaSource.html)

## Public Property Documentation

### property Source

```csharp
MamaSource Source;
```

Returns the source object 

### property weight

```csharp
uint weight;
```

Returns the source's weight in the source group 

### property weightClsCompliant

```csharp
int weightClsCompliant;
```

CLS compliant version of weight 

-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100