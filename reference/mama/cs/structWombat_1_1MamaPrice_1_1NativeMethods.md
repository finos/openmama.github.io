---
title: Wombat::MamaPrice::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPrice::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaPrice_create](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-create)**(ref IntPtr nativeHandle) |
| int | **[mamaPrice_copy](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-copy)**(IntPtr dest, IntPtr src) |
| int | **[mamaPrice_destroy](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-destroy)**(IntPtr nativeHandle) |
| int | **[mamaPrice_clear](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-clear)**(IntPtr nativeHandle) |
| int | **[mamaPrice_add](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-add)**(IntPtr dest, IntPtr rhs) |
| int | **[mamaPrice_subtract](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-subtract)**(IntPtr dest, IntPtr rhs) |
| int | **[mamaPrice_equal](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-equal)**(IntPtr lhs, IntPtr rhs) |
| double | **[mamaPrice_compare](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-compare)**(IntPtr lhs, IntPtr rhs) |
| int | **[mamaPrice_setValue](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-setvalue)**(IntPtr nativeHandle, double val) |
| int | **[mamaPrice_setPrecision](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-setprecision)**(IntPtr nativeHandle, int precision) |
| int | **[mamaPrice_setHints](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-sethints)**(IntPtr nativeHandle, byte hints) |
| int | **[mamaPrice_setWithHints](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-setwithhints)**(IntPtr nativeHandle, double val, byte hints) |
| int | **[mamaPrice_setFromString](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-setfromstring)**(IntPtr nativeHandle, string str) |
| int | **[mamaPrice_getValue](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-getvalue)**(IntPtr nativeHandle, ref double val) |
| int | **[mamaPrice_getPrecision](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-getprecision)**(IntPtr nativeHandle, ref int precision) |
| int | **[mamaPrice_getHints](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-gethints)**(IntPtr nativeHandle, ref byte hints) |
| int | **[mamaPrice_getWithHints](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-getwithhints)**(IntPtr nativeHandle, ref double value, ref int precision) |
| int | **[mamaPrice_getAsString](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-getasstring)**(IntPtr nativeHandle, StringBuilder buf, int length) |
| int | **[mamaPrice_negate](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-negate)**(IntPtr nativeHandle) |
| int | **[mamaPrice_isZero](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-iszero)**(IntPtr nativeHandle, ref bool result) |
| int | **[mamaPrice_decimals2Precision](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-decimals2precision)**(int places) |
| int | **[mamaPrice_denom2Precision](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-denom2precision)**(int denominator) |
| int | **[mamaPrice_precision2Decimals](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-precision2decimals)**(int precision) |
| int | **[mamaPrice_precision2Denom](structWombat_1_1MamaPrice_1_1NativeMethods.html#function-mamaprice-precision2denom)**(int precision) |

## Public Functions Documentation

### function mamaPrice_create

```csharp
int mamaPrice_create(
    ref IntPtr nativeHandle
)
```


### function mamaPrice_copy

```csharp
int mamaPrice_copy(
    IntPtr dest,
    IntPtr src
)
```


### function mamaPrice_destroy

```csharp
int mamaPrice_destroy(
    IntPtr nativeHandle
)
```


### function mamaPrice_clear

```csharp
int mamaPrice_clear(
    IntPtr nativeHandle
)
```


### function mamaPrice_add

```csharp
int mamaPrice_add(
    IntPtr dest,
    IntPtr rhs
)
```


### function mamaPrice_subtract

```csharp
int mamaPrice_subtract(
    IntPtr dest,
    IntPtr rhs
)
```


### function mamaPrice_equal

```csharp
int mamaPrice_equal(
    IntPtr lhs,
    IntPtr rhs
)
```


### function mamaPrice_compare

```csharp
double mamaPrice_compare(
    IntPtr lhs,
    IntPtr rhs
)
```


### function mamaPrice_setValue

```csharp
int mamaPrice_setValue(
    IntPtr nativeHandle,
    double val
)
```


### function mamaPrice_setPrecision

```csharp
int mamaPrice_setPrecision(
    IntPtr nativeHandle,
    int precision
)
```


### function mamaPrice_setHints

```csharp
int mamaPrice_setHints(
    IntPtr nativeHandle,
    byte hints
)
```


### function mamaPrice_setWithHints

```csharp
int mamaPrice_setWithHints(
    IntPtr nativeHandle,
    double val,
    byte hints
)
```


### function mamaPrice_setFromString

```csharp
int mamaPrice_setFromString(
    IntPtr nativeHandle,
    string str
)
```


### function mamaPrice_getValue

```csharp
int mamaPrice_getValue(
    IntPtr nativeHandle,
    ref double val
)
```


### function mamaPrice_getPrecision

```csharp
int mamaPrice_getPrecision(
    IntPtr nativeHandle,
    ref int precision
)
```


### function mamaPrice_getHints

```csharp
int mamaPrice_getHints(
    IntPtr nativeHandle,
    ref byte hints
)
```


### function mamaPrice_getWithHints

```csharp
int mamaPrice_getWithHints(
    IntPtr nativeHandle,
    ref double value,
    ref int precision
)
```


### function mamaPrice_getAsString

```csharp
int mamaPrice_getAsString(
    IntPtr nativeHandle,
    StringBuilder buf,
    int length
)
```


### function mamaPrice_negate

```csharp
int mamaPrice_negate(
    IntPtr nativeHandle
)
```


### function mamaPrice_isZero

```csharp
int mamaPrice_isZero(
    IntPtr nativeHandle,
    ref bool result
)
```


### function mamaPrice_decimals2Precision

```csharp
int mamaPrice_decimals2Precision(
    int places
)
```


### function mamaPrice_denom2Precision

```csharp
int mamaPrice_denom2Precision(
    int denominator
)
```


### function mamaPrice_precision2Decimals

```csharp
int mamaPrice_precision2Decimals(
    int precision
)
```


### function mamaPrice_precision2Denom

```csharp
int mamaPrice_precision2Denom(
    int precision
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100