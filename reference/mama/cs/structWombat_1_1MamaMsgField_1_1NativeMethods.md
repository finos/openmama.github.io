---
title: Wombat::MamaMsgField::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsgField::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaMsgField_destroy](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-destroy)**(IntPtr nativeHandle) |
| int | **[mamaMsgField_getType](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-gettype)**(IntPtr nativeHandle, ref int result) |
| int | **[mamaMsgField_getDescriptor](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getdescriptor)**(IntPtr nativeHandle, ref IntPtr result) |
| int | **[mamaMsgField_getFid](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getfid)**(IntPtr nativeHandle, ref ushort result) |
| int | **[mamaMsgField_getName](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getname)**(IntPtr nativeHandle, ref IntPtr result) |
| int | **[mamaMsgField_getTypeName](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-gettypename)**(IntPtr nativeHandle, ref IntPtr result) |
| int | **[mamaMsgField_getBool](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getbool)**(IntPtr nativeHandle, ref bool result) |
| int | **[mamaMsgField_getChar](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getchar)**(IntPtr nativeHandle, ref char result) |
| int | **[mamaMsgField_getI8](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-geti8)**(IntPtr nativeHandle, ref sbyte result) |
| int | **[mamaMsgField_getU8](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getu8)**(IntPtr nativeHandle, ref byte result) |
| int | **[mamaMsgField_getI16](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-geti16)**(IntPtr nativeHandle, ref short result) |
| int | **[mamaMsgField_getU16](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getu16)**(IntPtr nativeHandle, ref ushort result) |
| int | **[mamaMsgField_getI32](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-geti32)**(IntPtr nativeHandle, ref int result) |
| int | **[mamaMsgField_getU32](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getu32)**(IntPtr nativeHandle, ref uint result) |
| int | **[mamaMsgField_getI64](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-geti64)**(IntPtr nativeHandle, ref long result) |
| int | **[mamaMsgField_getU64](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getu64)**(IntPtr nativeHandle, ref ulong result) |
| int | **[mamaMsgField_getF32](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getf32)**(IntPtr nativeHandle, ref float result) |
| int | **[mamaMsgField_getF64](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getf64)**(IntPtr nativeHandle, ref double result) |
| int | **[mamaMsgField_getString](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getstring)**(IntPtr nativeHandle, ref IntPtr result) |
| int | **[mamaMsgField_getOpaque](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getopaque)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getDateTime](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getdatetime)**(IntPtr nativeHandle, IntPtr result) |
| int | **[mamaMsgField_getPrice](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getprice)**(IntPtr nativeHandle, IntPtr result) |
| int | **[mamaMsgField_getMsg](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getmsg)**(IntPtr nativeHandle, ref IntPtr result) |
| int | **[mamaMsgField_getVectorBool](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectorbool)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorChar](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectorchar)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorI8](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectori8)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorU8](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectoru8)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorI16](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectori16)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorU16](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectoru16)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorI32](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectori32)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorU32](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectoru32)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorI64](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectori64)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorU64](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectoru64)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorF32](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectorf32)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorF64](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectorf64)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorString](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectorstring)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getVectorMsg](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getvectormsg)**(IntPtr nativeHandle, ref IntPtr result, ref uint size) |
| int | **[mamaMsgField_getAsString](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamamsgfield-getasstring)**(IntPtr nativeHandle, StringBuilder buf, int length) |
| int | **[mamaDateTime_getEpochTimeMilliseconds](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamadatetime-getepochtimemilliseconds)**(IntPtr dateTime_, ref ulong milliseconds) |
| int | **[mamaPrice_destroy](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamaprice-destroy)**(IntPtr nativeHandle) |
| int | **[mamaDateTime_create](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamadatetime-create)**(ref IntPtr dateTime_) |
| int | **[mamaDateTime_clear](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamadatetime-clear)**(IntPtr dateTime_) |
| int | **[mamaDateTime_destroy](structWombat_1_1MamaMsgField_1_1NativeMethods.html#function-mamadatetime-destroy)**(IntPtr dateTime_) |

## Public Functions Documentation

### function mamaMsgField_destroy

```csharp
int mamaMsgField_destroy(
    IntPtr nativeHandle
)
```


### function mamaMsgField_getType

```csharp
int mamaMsgField_getType(
    IntPtr nativeHandle,
    ref int result
)
```


### function mamaMsgField_getDescriptor

```csharp
int mamaMsgField_getDescriptor(
    IntPtr nativeHandle,
    ref IntPtr result
)
```


### function mamaMsgField_getFid

```csharp
int mamaMsgField_getFid(
    IntPtr nativeHandle,
    ref ushort result
)
```


### function mamaMsgField_getName

```csharp
int mamaMsgField_getName(
    IntPtr nativeHandle,
    ref IntPtr result
)
```


### function mamaMsgField_getTypeName

```csharp
int mamaMsgField_getTypeName(
    IntPtr nativeHandle,
    ref IntPtr result
)
```


### function mamaMsgField_getBool

```csharp
int mamaMsgField_getBool(
    IntPtr nativeHandle,
    ref bool result
)
```


### function mamaMsgField_getChar

```csharp
int mamaMsgField_getChar(
    IntPtr nativeHandle,
    ref char result
)
```


### function mamaMsgField_getI8

```csharp
int mamaMsgField_getI8(
    IntPtr nativeHandle,
    ref sbyte result
)
```


### function mamaMsgField_getU8

```csharp
int mamaMsgField_getU8(
    IntPtr nativeHandle,
    ref byte result
)
```


### function mamaMsgField_getI16

```csharp
int mamaMsgField_getI16(
    IntPtr nativeHandle,
    ref short result
)
```


### function mamaMsgField_getU16

```csharp
int mamaMsgField_getU16(
    IntPtr nativeHandle,
    ref ushort result
)
```


### function mamaMsgField_getI32

```csharp
int mamaMsgField_getI32(
    IntPtr nativeHandle,
    ref int result
)
```


### function mamaMsgField_getU32

```csharp
int mamaMsgField_getU32(
    IntPtr nativeHandle,
    ref uint result
)
```


### function mamaMsgField_getI64

```csharp
int mamaMsgField_getI64(
    IntPtr nativeHandle,
    ref long result
)
```


### function mamaMsgField_getU64

```csharp
int mamaMsgField_getU64(
    IntPtr nativeHandle,
    ref ulong result
)
```


### function mamaMsgField_getF32

```csharp
int mamaMsgField_getF32(
    IntPtr nativeHandle,
    ref float result
)
```


### function mamaMsgField_getF64

```csharp
int mamaMsgField_getF64(
    IntPtr nativeHandle,
    ref double result
)
```


### function mamaMsgField_getString

```csharp
int mamaMsgField_getString(
    IntPtr nativeHandle,
    ref IntPtr result
)
```


### function mamaMsgField_getOpaque

```csharp
int mamaMsgField_getOpaque(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getDateTime

```csharp
int mamaMsgField_getDateTime(
    IntPtr nativeHandle,
    IntPtr result
)
```


### function mamaMsgField_getPrice

```csharp
int mamaMsgField_getPrice(
    IntPtr nativeHandle,
    IntPtr result
)
```


### function mamaMsgField_getMsg

```csharp
int mamaMsgField_getMsg(
    IntPtr nativeHandle,
    ref IntPtr result
)
```


### function mamaMsgField_getVectorBool

```csharp
int mamaMsgField_getVectorBool(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorChar

```csharp
int mamaMsgField_getVectorChar(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorI8

```csharp
int mamaMsgField_getVectorI8(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorU8

```csharp
int mamaMsgField_getVectorU8(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorI16

```csharp
int mamaMsgField_getVectorI16(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorU16

```csharp
int mamaMsgField_getVectorU16(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorI32

```csharp
int mamaMsgField_getVectorI32(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorU32

```csharp
int mamaMsgField_getVectorU32(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorI64

```csharp
int mamaMsgField_getVectorI64(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorU64

```csharp
int mamaMsgField_getVectorU64(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorF32

```csharp
int mamaMsgField_getVectorF32(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorF64

```csharp
int mamaMsgField_getVectorF64(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorString

```csharp
int mamaMsgField_getVectorString(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getVectorMsg

```csharp
int mamaMsgField_getVectorMsg(
    IntPtr nativeHandle,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsgField_getAsString

```csharp
int mamaMsgField_getAsString(
    IntPtr nativeHandle,
    StringBuilder buf,
    int length
)
```


### function mamaDateTime_getEpochTimeMilliseconds

```csharp
int mamaDateTime_getEpochTimeMilliseconds(
    IntPtr dateTime_,
    ref ulong milliseconds
)
```


### function mamaPrice_destroy

```csharp
int mamaPrice_destroy(
    IntPtr nativeHandle
)
```


### function mamaDateTime_create

```csharp
int mamaDateTime_create(
    ref IntPtr dateTime_
)
```


### function mamaDateTime_clear

```csharp
int mamaDateTime_clear(
    IntPtr dateTime_
)
```


### function mamaDateTime_destroy

```csharp
int mamaDateTime_destroy(
    IntPtr dateTime_
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100