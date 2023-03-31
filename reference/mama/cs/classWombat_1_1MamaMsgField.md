---
title: Wombat::MamaMsgField
summary: Class that represents a field in a MamaMsg
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsgField



Class that represents a field in a [MamaMsg](classWombat_1_1MamaMsg.html)

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaMsgField](classWombat_1_1MamaMsgField.html#function-mamamsgfield)**() |
| void | **[destroy](classWombat_1_1MamaMsgField.html#function-destroy)**()<br>Destroy the [MamaMsg](classWombat_1_1MamaMsg.html) |
| [mamaFieldType](namespaceWombat.html#enum-mamafieldtype) | **[getType](classWombat_1_1MamaMsgField.html#function-gettype)**()<br>Get the field type for this field.  |
| [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[getDescriptor](classWombat_1_1MamaMsgField.html#function-getdescriptor)**()<br>Get the field descriptor for this field.  |
| string | **[getAsString](classWombat_1_1MamaMsgField.html#function-getasstring)**()<br>Convert the value of the specified field to a string. ( up to 255 characters )  |
| int | **[getFid](classWombat_1_1MamaMsgField.html#function-getfid)**()<br>Get the field ID for this field.  |
| string | **[getName](classWombat_1_1MamaMsgField.html#function-getname)**()<br>Get the field name for this field.  |
| string | **[getTypeName](classWombat_1_1MamaMsgField.html#function-gettypename)**()<br>Get the type name for this field. This is a human readable representation of the type.  |
| bool | **[getBool](classWombat_1_1MamaMsgField.html#function-getbool)**()<br>Get a bool field.  |
| char | **[getChar](classWombat_1_1MamaMsgField.html#function-getchar)**()<br>Get a character field.  |
| sbyte | **[getI8](classWombat_1_1MamaMsgField.html#function-geti8)**()<br>Get a I8, signed 8 bit integer, field.  |
| byte | **[getU8](classWombat_1_1MamaMsgField.html#function-getu8)**()<br>Get a U8, unsigned 8 bit integer, field.  |
| short | **[getI16](classWombat_1_1MamaMsgField.html#function-geti16)**()<br>Get a I16, signed 16 bit integer, field.  |
| ushort | **[getU16](classWombat_1_1MamaMsgField.html#function-getu16)**()<br>Get a U16, unsigned 16 bit integer, field.  |
| int | **[getI32](classWombat_1_1MamaMsgField.html#function-geti32)**()<br>Get a I32, signed 32 bit integer, field.  |
| uint | **[getU32](classWombat_1_1MamaMsgField.html#function-getu32)**()<br>Get a U32, unsigned 32 bit integer, field.  |
| long | **[getI64](classWombat_1_1MamaMsgField.html#function-geti64)**()<br>Get a I64, signed 64 bit integer, field.  |
| ulong | **[getU64](classWombat_1_1MamaMsgField.html#function-getu64)**()<br>Get a U64, unsigned 64 bit integer, field.  |
| float | **[getF32](classWombat_1_1MamaMsgField.html#function-getf32)**()<br>Get a F32, floating point 32 bit integer, field.  |
| double | **[getF64](classWombat_1_1MamaMsgField.html#function-getf64)**()<br>Get a F64, floating point 64 bit integer, field.  |
| string | **[getString](classWombat_1_1MamaMsgField.html#function-getstring)**()<br>Get a string field.  |
| byte[] | **[getOpaque](classWombat_1_1MamaMsgField.html#function-getopaque)**()<br>Get an opaque field.  |
| DateTime | **[getDateTime](classWombat_1_1MamaMsgField.html#function-getdatetime)**()<br>Get a MAMA date/time field.  |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[getPrice](classWombat_1_1MamaMsgField.html#function-getprice)**()<br>Get a MAMA price field.  |
| [MamaMsg](classWombat_1_1MamaMsg.html) | **[getMsg](classWombat_1_1MamaMsgField.html#function-getmsg)**()<br>Get a [MamaMsg](classWombat_1_1MamaMsg.html) field  |
| bool[] | **[getVectorBool](classWombat_1_1MamaMsgField.html#function-getvectorbool)**()<br>Get a vector of booleans.  |
| char[] | **[getVectorChar](classWombat_1_1MamaMsgField.html#function-getvectorchar)**()<br>Get a vector of characters.  |
| sbyte[] | **[getVectorI8](classWombat_1_1MamaMsgField.html#function-getvectori8)**()<br>Get a vector of signed 8 bit integers.  |
| byte[] | **[getVectorU8](classWombat_1_1MamaMsgField.html#function-getvectoru8)**()<br>Get a vector of unsigned 8 bit integers.  |
| short[] | **[getVectorI16](classWombat_1_1MamaMsgField.html#function-getvectori16)**()<br>Get a vector of signed 16 bit integers.  |
| ushort[] | **[getVectorU16](classWombat_1_1MamaMsgField.html#function-getvectoru16)**()<br>Get a vector of unsigned 16 bit integers.  |
| int[] | **[getVectorI32](classWombat_1_1MamaMsgField.html#function-getvectori32)**()<br>Get a vector of signed 32 bit integers.  |
| uint[] | **[getVectorU32](classWombat_1_1MamaMsgField.html#function-getvectoru32)**()<br>Get a vector of unsigned 32 bit integers.  |
| long[] | **[getVectorI64](classWombat_1_1MamaMsgField.html#function-getvectori64)**()<br>Get a vector of signed 64 bit integers.  |
| ulong[] | **[getVectorU64](classWombat_1_1MamaMsgField.html#function-getvectoru64)**()<br>Get a vector of unsigned 64 bit integers.  |
| float[] | **[getVectorF32](classWombat_1_1MamaMsgField.html#function-getvectorf32)**()<br>Get a vector of 32 bit floating point numbers.  |
| double[] | **[getVectorF64](classWombat_1_1MamaMsgField.html#function-getvectorf64)**()<br>Get a vector of 64 bit floating point numbers.  |
| string[] | **[getVectorString](classWombat_1_1MamaMsgField.html#function-getvectorstring)**()<br>Get a vector of strings  |
| [MamaMsg](classWombat_1_1MamaMsg.html)[] | **[getVectorMsg](classWombat_1_1MamaMsgField.html#function-getvectormsg)**()<br>Get a vector of submessages.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaMsgField.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]() |

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


## Public Functions Documentation

### function MamaMsgField

```csharp
MamaMsgField()
```


### function destroy

```csharp
void destroy()
```

Destroy the [MamaMsg](classWombat_1_1MamaMsg.html)

### function getType

```csharp
mamaFieldType getType()
```

Get the field type for this field. 

**Return**: 

### function getDescriptor

```csharp
MamaFieldDescriptor getDescriptor()
```

Get the field descriptor for this field. 

**Return**: 

### function getAsString

```csharp
string getAsString()
```

Convert the value of the specified field to a string. ( up to 255 characters ) 

**Return**: 

### function getFid

```csharp
int getFid()
```

Get the field ID for this field. 

### function getName

```csharp
string getName()
```

Get the field name for this field. 

### function getTypeName

```csharp
string getTypeName()
```

Get the type name for this field. This is a human readable representation of the type. 

### function getBool

```csharp
bool getBool()
```

Get a bool field. 

### function getChar

```csharp
char getChar()
```

Get a character field. 

### function getI8

```csharp
sbyte getI8()
```

Get a I8, signed 8 bit integer, field. 

### function getU8

```csharp
byte getU8()
```

Get a U8, unsigned 8 bit integer, field. 

### function getI16

```csharp
short getI16()
```

Get a I16, signed 16 bit integer, field. 

### function getU16

```csharp
ushort getU16()
```

Get a U16, unsigned 16 bit integer, field. 

### function getI32

```csharp
int getI32()
```

Get a I32, signed 32 bit integer, field. 

### function getU32

```csharp
uint getU32()
```

Get a U32, unsigned 32 bit integer, field. 

### function getI64

```csharp
long getI64()
```

Get a I64, signed 64 bit integer, field. 

### function getU64

```csharp
ulong getU64()
```

Get a U64, unsigned 64 bit integer, field. 

### function getF32

```csharp
float getF32()
```

Get a F32, floating point 32 bit integer, field. 

### function getF64

```csharp
double getF64()
```

Get a F64, floating point 64 bit integer, field. 

### function getString

```csharp
string getString()
```

Get a string field. 

### function getOpaque

```csharp
byte[] getOpaque()
```

Get an opaque field. 

### function getDateTime

```csharp
DateTime getDateTime()
```

Get a MAMA date/time field. 

### function getPrice

```csharp
MamaPrice getPrice()
```

Get a MAMA price field. 

### function getMsg

```csharp
MamaMsg getMsg()
```

Get a [MamaMsg](classWombat_1_1MamaMsg.html) field 

### function getVectorBool

```csharp
bool[] getVectorBool()
```

Get a vector of booleans. 

### function getVectorChar

```csharp
char[] getVectorChar()
```

Get a vector of characters. 

### function getVectorI8

```csharp
sbyte[] getVectorI8()
```

Get a vector of signed 8 bit integers. 

### function getVectorU8

```csharp
byte[] getVectorU8()
```

Get a vector of unsigned 8 bit integers. 

### function getVectorI16

```csharp
short[] getVectorI16()
```

Get a vector of signed 16 bit integers. 

### function getVectorU16

```csharp
ushort[] getVectorU16()
```

Get a vector of unsigned 16 bit integers. 

### function getVectorI32

```csharp
int[] getVectorI32()
```

Get a vector of signed 32 bit integers. 

### function getVectorU32

```csharp
uint[] getVectorU32()
```

Get a vector of unsigned 32 bit integers. 

### function getVectorI64

```csharp
long[] getVectorI64()
```

Get a vector of signed 64 bit integers. 

### function getVectorU64

```csharp
ulong[] getVectorU64()
```

Get a vector of unsigned 64 bit integers. 

### function getVectorF32

```csharp
float[] getVectorF32()
```

Get a vector of 32 bit floating point numbers. 

### function getVectorF64

```csharp
double[] getVectorF64()
```

Get a vector of 64 bit floating point numbers. 

### function getVectorString

```csharp
string[] getVectorString()
```

Get a vector of strings 

**Return**: Arrat if strings. 

### function getVectorMsg

```csharp
MamaMsg[] getVectorMsg()
```

Get a vector of submessages. 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]()

**Return**: MAMA Status code

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100