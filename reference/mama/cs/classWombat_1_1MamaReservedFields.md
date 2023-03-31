---
title: Wombat::MamaReservedFields
summary: Maintains a cache of common field descriptors. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaReservedFields



Maintains a cache of common field descriptors. 

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[MsgStatus](classWombat_1_1MamaReservedFields.html#variable-msgstatus)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[SeqNum](classWombat_1_1MamaReservedFields.html#variable-seqnum)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[MsgNum](classWombat_1_1MamaReservedFields.html#variable-msgnum)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[MsgTotal](classWombat_1_1MamaReservedFields.html#variable-msgtotal)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[AppMsgType](classWombat_1_1MamaReservedFields.html#variable-appmsgtype)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[MsgType](classWombat_1_1MamaReservedFields.html#variable-msgtype)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[SenderId](classWombat_1_1MamaReservedFields.html#variable-senderid)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[SendTime](classWombat_1_1MamaReservedFields.html#variable-sendtime)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[SymbolList](classWombat_1_1MamaReservedFields.html#variable-symbollist)**  |
| readonly [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[EntitleCode](classWombat_1_1MamaReservedFields.html#variable-entitlecode)**  |

## Public Attributes Documentation

### variable MsgStatus

```csharp
static readonly MamaFieldDescriptor MsgStatus = new MamaFieldDescriptor(2, mamaFieldType.MAMA_FIELD_TYPE_I32, "MdMsgStatus");
```


### variable SeqNum

```csharp
static readonly MamaFieldDescriptor SeqNum = new MamaFieldDescriptor(10, mamaFieldType.MAMA_FIELD_TYPE_I64, "MdSeqNum");
```


### variable MsgNum

```csharp
static readonly MamaFieldDescriptor MsgNum = new MamaFieldDescriptor(7, mamaFieldType.MAMA_FIELD_TYPE_I32, "MdMsgNum");
```


### variable MsgTotal

```csharp
static readonly MamaFieldDescriptor MsgTotal = new MamaFieldDescriptor(8, mamaFieldType.MAMA_FIELD_TYPE_I32, "MdMsgTotal");
```


### variable AppMsgType

```csharp
static readonly MamaFieldDescriptor AppMsgType = new MamaFieldDescriptor(18, mamaFieldType.MAMA_FIELD_TYPE_I32, "MamaAppMsgType");
```


### variable MsgType

```csharp
static readonly MamaFieldDescriptor MsgType = new MamaFieldDescriptor(1, mamaFieldType.MAMA_FIELD_TYPE_I32, "MdMsgType");
```


### variable SenderId

```csharp
static readonly MamaFieldDescriptor SenderId = new MamaFieldDescriptor(20,mamaFieldType.MAMA_FIELD_TYPE_U64,"MamaSenderId");
```


### variable SendTime

```csharp
static readonly MamaFieldDescriptor SendTime =  new MamaFieldDescriptor(16, mamaFieldType.MAMA_FIELD_TYPE_TIME, "MamaSendTime");
```


### variable SymbolList

```csharp
static readonly MamaFieldDescriptor SymbolList = new MamaFieldDescriptor(81, mamaFieldType.MAMA_FIELD_TYPE_STRING, "MamaSymbolList");
```


### variable EntitleCode

```csharp
static readonly MamaFieldDescriptor EntitleCode = new MamaFieldDescriptor(496, mamaFieldType.MAMA_FIELD_TYPE_I32, "wEntitleCode");
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100