---
title: Wombat::MamaMsg
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsg



 [More...](#detailed-description)


`#include <MamaMsg.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~MamaMsg](classWombat_1_1MamaMsg.html#function-~mamamsg)**() |
| | **[MamaMsg](classWombat_1_1MamaMsg.html#function-mamamsg)**(void ) |
| | **[MamaMsg](classWombat_1_1MamaMsg.html#function-mamamsg)**(const [MamaMsg](classWombat_1_1MamaMsg.html) & mm) |
| void | **[create](classWombat_1_1MamaMsg.html#function-create)**(void ) |
| | **[MAMADeprecated](classWombat_1_1MamaMsg.html#function-mamadeprecated)**("createForPayload has been deprecated, use dynamic loading instead!" ) const |
| void | **[createForPayloadBridge](classWombat_1_1MamaMsg.html#function-createforpayloadbridge)**(mamaPayloadBridge payloadBridge) |
| void | **[createFromBuffer](classWombat_1_1MamaMsg.html#function-createfrombuffer)**(const void * buffer, size_t bufferLength) |
| void | **[copy](classWombat_1_1MamaMsg.html#function-copy)**(const [MamaMsg](classWombat_1_1MamaMsg.html) & rhs) |
| [MamaMsg](classWombat_1_1MamaMsg.html) * | **[getTempCopy](classWombat_1_1MamaMsg.html#function-gettempcopy)**() |
| void | **[applyMsg](classWombat_1_1MamaMsg.html#function-applymsg)**(const [MamaMsg](classWombat_1_1MamaMsg.html) & msg) |
| void | **[clear](classWombat_1_1MamaMsg.html#function-clear)**(void ) |
| size_t | **[getNumFields](classWombat_1_1MamaMsg.html#function-getnumfields)**(void ) const |
| size_t | **[getByteSize](classWombat_1_1MamaMsg.html#function-getbytesize)**(void ) const |
| bool | **[getBoolean](classWombat_1_1MamaMsg.html#function-getboolean)**(const char * name, mama_fid_t fid) const |
| bool | **[getBoolean](classWombat_1_1MamaMsg.html#function-getboolean)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| char | **[getChar](classWombat_1_1MamaMsg.html#function-getchar)**(const char * name, mama_fid_t fid) const |
| char | **[getChar](classWombat_1_1MamaMsg.html#function-getchar)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_i8_t | **[getI8](classWombat_1_1MamaMsg.html#function-geti8)**(const char * name, mama_fid_t fid) const |
| mama_i8_t | **[getI8](classWombat_1_1MamaMsg.html#function-geti8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_u8_t | **[getU8](classWombat_1_1MamaMsg.html#function-getu8)**(const char * name, mama_fid_t fid) const |
| mama_u8_t | **[getU8](classWombat_1_1MamaMsg.html#function-getu8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_i16_t | **[getI16](classWombat_1_1MamaMsg.html#function-geti16)**(const char * name, mama_fid_t fid) const |
| mama_i16_t | **[getI16](classWombat_1_1MamaMsg.html#function-geti16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_u16_t | **[getU16](classWombat_1_1MamaMsg.html#function-getu16)**(const char * name, mama_fid_t fid) const |
| mama_u16_t | **[getU16](classWombat_1_1MamaMsg.html#function-getu16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_i32_t | **[getI32](classWombat_1_1MamaMsg.html#function-geti32)**(const char * name, mama_fid_t fid) const |
| mama_i32_t | **[getI32](classWombat_1_1MamaMsg.html#function-geti32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_u32_t | **[getU32](classWombat_1_1MamaMsg.html#function-getu32)**(const char * name, mama_fid_t fid) const |
| mama_u32_t | **[getU32](classWombat_1_1MamaMsg.html#function-getu32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_i64_t | **[getI64](classWombat_1_1MamaMsg.html#function-geti64)**(const char * name, mama_fid_t fid) const |
| mama_i64_t | **[getI64](classWombat_1_1MamaMsg.html#function-geti64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_u64_t | **[getU64](classWombat_1_1MamaMsg.html#function-getu64)**(const char * name, mama_fid_t fid) const |
| mama_u64_t | **[getU64](classWombat_1_1MamaMsg.html#function-getu64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_f32_t | **[getF32](classWombat_1_1MamaMsg.html#function-getf32)**(const char * name, mama_fid_t fid) const |
| mama_f32_t | **[getF32](classWombat_1_1MamaMsg.html#function-getf32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| mama_f64_t | **[getF64](classWombat_1_1MamaMsg.html#function-getf64)**(const char * name, mama_fid_t fid) const |
| mama_f64_t | **[getF64](classWombat_1_1MamaMsg.html#function-getf64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| const char * | **[getString](classWombat_1_1MamaMsg.html#function-getstring)**(const char * name, mama_fid_t fid) const |
| const char * | **[getString](classWombat_1_1MamaMsg.html#function-getstring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| const void * | **[getOpaque](classWombat_1_1MamaMsg.html#function-getopaque)**(const char * name, mama_fid_t fid, size_t & size) const |
| const void * | **[getOpaque](classWombat_1_1MamaMsg.html#function-getopaque)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & size) const |
| void | **[getDateTime](classWombat_1_1MamaMsg.html#function-getdatetime)**(const char * name, mama_fid_t fid, [MamaDateTime](classWombat_1_1MamaDateTime.html) & result) const |
| void | **[getDateTime](classWombat_1_1MamaMsg.html#function-getdatetime)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, [MamaDateTime](classWombat_1_1MamaDateTime.html) & result) const |
| void | **[getPrice](classWombat_1_1MamaMsg.html#function-getprice)**(const char * name, mama_fid_t fid, [MamaPrice](classWombat_1_1MamaPrice.html) & result) const |
| void | **[getPrice](classWombat_1_1MamaMsg.html#function-getprice)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, [MamaPrice](classWombat_1_1MamaPrice.html) & result) const |
| const [MamaMsg](classWombat_1_1MamaMsg.html) * | **[getMsg](classWombat_1_1MamaMsg.html#function-getmsg)**(const char * name, mama_fid_t fid) const |
| const [MamaMsg](classWombat_1_1MamaMsg.html) * | **[getMsg](classWombat_1_1MamaMsg.html#function-getmsg)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| const char * | **[getVectorChar](classWombat_1_1MamaMsg.html#function-getvectorchar)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const char * | **[getVectorChar](classWombat_1_1MamaMsg.html#function-getvectorchar)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_i8_t * | **[getVectorI8](classWombat_1_1MamaMsg.html#function-getvectori8)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_i8_t * | **[getVectorI8](classWombat_1_1MamaMsg.html#function-getvectori8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_u8_t * | **[getVectorU8](classWombat_1_1MamaMsg.html#function-getvectoru8)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_u8_t * | **[getVectorU8](classWombat_1_1MamaMsg.html#function-getvectoru8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_i16_t * | **[getVectorI16](classWombat_1_1MamaMsg.html#function-getvectori16)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_i16_t * | **[getVectorI16](classWombat_1_1MamaMsg.html#function-getvectori16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_u16_t * | **[getVectorU16](classWombat_1_1MamaMsg.html#function-getvectoru16)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_u16_t * | **[getVectorU16](classWombat_1_1MamaMsg.html#function-getvectoru16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_i32_t * | **[getVectorI32](classWombat_1_1MamaMsg.html#function-getvectori32)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_i32_t * | **[getVectorI32](classWombat_1_1MamaMsg.html#function-getvectori32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_u32_t * | **[getVectorU32](classWombat_1_1MamaMsg.html#function-getvectoru32)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_u32_t * | **[getVectorU32](classWombat_1_1MamaMsg.html#function-getvectoru32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_i64_t * | **[getVectorI64](classWombat_1_1MamaMsg.html#function-getvectori64)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_i64_t * | **[getVectorI64](classWombat_1_1MamaMsg.html#function-getvectori64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_u64_t * | **[getVectorU64](classWombat_1_1MamaMsg.html#function-getvectoru64)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_u64_t * | **[getVectorU64](classWombat_1_1MamaMsg.html#function-getvectoru64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_f32_t * | **[getVectorF32](classWombat_1_1MamaMsg.html#function-getvectorf32)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_f32_t * | **[getVectorF32](classWombat_1_1MamaMsg.html#function-getvectorf32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const mama_f64_t * | **[getVectorF64](classWombat_1_1MamaMsg.html#function-getvectorf64)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const mama_f64_t * | **[getVectorF64](classWombat_1_1MamaMsg.html#function-getvectorf64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const [MamaMsg](classWombat_1_1MamaMsg.html) ** | **[getVectorMsg](classWombat_1_1MamaMsg.html#function-getvectormsg)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const [MamaMsg](classWombat_1_1MamaMsg.html) ** | **[getVectorMsg](classWombat_1_1MamaMsg.html#function-getvectormsg)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| const char ** | **[getVectorString](classWombat_1_1MamaMsg.html#function-getvectorstring)**(const char * name, mama_fid_t fid, size_t & resultLen) const |
| const char ** | **[getVectorString](classWombat_1_1MamaMsg.html#function-getvectorstring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, size_t & resultLen) const |
| bool | **[tryBoolean](classWombat_1_1MamaMsg.html#function-tryboolean)**(const char * name, mama_fid_t fid, bool & result) const |
| bool | **[tryBoolean](classWombat_1_1MamaMsg.html#function-tryboolean)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, bool & result) const |
| bool | **[tryChar](classWombat_1_1MamaMsg.html#function-trychar)**(const char * name, mama_fid_t fid, char & result) const |
| bool | **[tryChar](classWombat_1_1MamaMsg.html#function-trychar)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, char & result) const |
| bool | **[tryI8](classWombat_1_1MamaMsg.html#function-tryi8)**(const char * name, mama_fid_t fid, mama_i8_t & result) const |
| bool | **[tryI8](classWombat_1_1MamaMsg.html#function-tryi8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_i8_t & result) const |
| bool | **[tryU8](classWombat_1_1MamaMsg.html#function-tryu8)**(const char * name, mama_fid_t fid, mama_u8_t & result) const |
| bool | **[tryU8](classWombat_1_1MamaMsg.html#function-tryu8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_u8_t & result) const |
| bool | **[tryI16](classWombat_1_1MamaMsg.html#function-tryi16)**(const char * name, mama_fid_t fid, mama_i16_t & result) const |
| bool | **[tryI16](classWombat_1_1MamaMsg.html#function-tryi16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_i16_t & result) const |
| bool | **[tryU16](classWombat_1_1MamaMsg.html#function-tryu16)**(const char * name, mama_fid_t fid, mama_u16_t & result) const |
| bool | **[tryU16](classWombat_1_1MamaMsg.html#function-tryu16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_u16_t & result) const |
| bool | **[tryI32](classWombat_1_1MamaMsg.html#function-tryi32)**(const char * name, mama_fid_t fid, mama_i32_t & result) const |
| bool | **[tryI32](classWombat_1_1MamaMsg.html#function-tryi32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_i32_t & result) const |
| bool | **[tryU32](classWombat_1_1MamaMsg.html#function-tryu32)**(const char * name, mama_fid_t fid, mama_u32_t & result) const |
| bool | **[tryU32](classWombat_1_1MamaMsg.html#function-tryu32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_u32_t & result) const |
| bool | **[tryI64](classWombat_1_1MamaMsg.html#function-tryi64)**(const char * name, mama_fid_t fid, mama_i64_t & result) const |
| bool | **[tryI64](classWombat_1_1MamaMsg.html#function-tryi64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_i64_t & result) const |
| bool | **[tryU64](classWombat_1_1MamaMsg.html#function-tryu64)**(const char * name, mama_fid_t fid, mama_u64_t & result) const |
| bool | **[tryU64](classWombat_1_1MamaMsg.html#function-tryu64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_u64_t & result) const |
| bool | **[tryF32](classWombat_1_1MamaMsg.html#function-tryf32)**(const char * name, mama_fid_t fid, mama_f32_t & result) const |
| bool | **[tryF32](classWombat_1_1MamaMsg.html#function-tryf32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_f32_t & result) const |
| bool | **[tryF64](classWombat_1_1MamaMsg.html#function-tryf64)**(const char * name, mama_fid_t fid, mama_f64_t & result) const |
| bool | **[tryF64](classWombat_1_1MamaMsg.html#function-tryf64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, mama_f64_t & result) const |
| bool | **[tryString](classWombat_1_1MamaMsg.html#function-trystring)**(const char * name, mama_fid_t fid, const char *& result) const |
| bool | **[tryString](classWombat_1_1MamaMsg.html#function-trystring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, const char *& result) const |
| bool | **[tryDateTime](classWombat_1_1MamaMsg.html#function-trydatetime)**(const char * name, mama_fid_t fid, [MamaDateTime](classWombat_1_1MamaDateTime.html) & result) const |
| bool | **[tryDateTime](classWombat_1_1MamaMsg.html#function-trydatetime)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, [MamaDateTime](classWombat_1_1MamaDateTime.html) & result) const |
| bool | **[tryPrice](classWombat_1_1MamaMsg.html#function-tryprice)**(const char * name, mama_fid_t fid, [MamaPrice](classWombat_1_1MamaPrice.html) & result) const |
| bool | **[tryPrice](classWombat_1_1MamaMsg.html#function-tryprice)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, [MamaPrice](classWombat_1_1MamaPrice.html) & result) const |
| bool | **[tryMsg](classWombat_1_1MamaMsg.html#function-trymsg)**(const char * name, mama_fid_t fid, const [MamaMsg](classWombat_1_1MamaMsg.html) *& result) const |
| bool | **[tryMsg](classWombat_1_1MamaMsg.html#function-trymsg)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, const [MamaMsg](classWombat_1_1MamaMsg.html) *& result) const |
| bool | **[tryOpaque](classWombat_1_1MamaMsg.html#function-tryopaque)**(const char * name, mama_fid_t fid, const void *& result, size_t & size) const |
| bool | **[tryOpaque](classWombat_1_1MamaMsg.html#function-tryopaque)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * field, const void *& result, size_t & size) const |
| bool | **[tryVectorChar](classWombat_1_1MamaMsg.html#function-tryvectorchar)**(const char * name, mama_fid_t fid, const char *& result, size_t & resultLen) const |
| bool | **[tryVectorChar](classWombat_1_1MamaMsg.html#function-tryvectorchar)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const char *& result, size_t & resultLen) const |
| bool | **[tryVectorI8](classWombat_1_1MamaMsg.html#function-tryvectori8)**(const char * name, mama_fid_t fid, const mama_i8_t *& result, size_t & resultLen) const |
| bool | **[tryVectorI8](classWombat_1_1MamaMsg.html#function-tryvectori8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i8_t *& result, size_t & resultLen) const |
| bool | **[tryVectorU8](classWombat_1_1MamaMsg.html#function-tryvectoru8)**(const char * name, mama_fid_t fid, const mama_u8_t *& result, size_t & resultLen) const |
| bool | **[tryVectorU8](classWombat_1_1MamaMsg.html#function-tryvectoru8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u8_t *& result, size_t & resultLen) const |
| bool | **[tryVectorI16](classWombat_1_1MamaMsg.html#function-tryvectori16)**(const char * name, mama_fid_t fid, const mama_i16_t *& result, size_t & resultLen) const |
| bool | **[tryVectorI16](classWombat_1_1MamaMsg.html#function-tryvectori16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i16_t *& result, size_t & resultLen) const |
| bool | **[tryVectorU16](classWombat_1_1MamaMsg.html#function-tryvectoru16)**(const char * name, mama_fid_t fid, const mama_u16_t *& result, size_t & resultLen) const |
| bool | **[tryVectorU16](classWombat_1_1MamaMsg.html#function-tryvectoru16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u16_t *& result, size_t & resultLen) const |
| bool | **[tryVectorI32](classWombat_1_1MamaMsg.html#function-tryvectori32)**(const char * name, mama_fid_t fid, const mama_i32_t *& result, size_t & resultLen) const |
| bool | **[tryVectorI32](classWombat_1_1MamaMsg.html#function-tryvectori32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i32_t *& result, size_t & resultLen) const |
| bool | **[tryVectorU32](classWombat_1_1MamaMsg.html#function-tryvectoru32)**(const char * name, mama_fid_t fid, const mama_u32_t *& result, size_t & resultLen) const |
| bool | **[tryVectorU32](classWombat_1_1MamaMsg.html#function-tryvectoru32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u32_t *& result, size_t & resultLen) const |
| bool | **[tryVectorI64](classWombat_1_1MamaMsg.html#function-tryvectori64)**(const char * name, mama_fid_t fid, const mama_i64_t *& result, size_t & resultLen) const |
| bool | **[tryVectorI64](classWombat_1_1MamaMsg.html#function-tryvectori64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i64_t *& result, size_t & resultLen) const |
| bool | **[tryVectorU64](classWombat_1_1MamaMsg.html#function-tryvectoru64)**(const char * name, mama_fid_t fid, const mama_u64_t *& result, size_t & resultLen) const |
| bool | **[tryVectorU64](classWombat_1_1MamaMsg.html#function-tryvectoru64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u64_t *& result, size_t & resultLen) const |
| bool | **[tryVectorF32](classWombat_1_1MamaMsg.html#function-tryvectorf32)**(const char * name, mama_fid_t fid, const mama_f32_t *& result, size_t & resultLen) const |
| bool | **[tryVectorF32](classWombat_1_1MamaMsg.html#function-tryvectorf32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_f32_t *& result, size_t & resultLen) const |
| bool | **[tryVectorF64](classWombat_1_1MamaMsg.html#function-tryvectorf64)**(const char * name, mama_fid_t fid, const mama_f64_t *& result, size_t & resultLen) const |
| bool | **[tryVectorF64](classWombat_1_1MamaMsg.html#function-tryvectorf64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_f64_t *& result, size_t & resultLen) const |
| bool | **[tryVectorString](classWombat_1_1MamaMsg.html#function-tryvectorstring)**(const char * name, mama_fid_t fid, const char **& result, size_t & resultLen) const |
| bool | **[tryVectorString](classWombat_1_1MamaMsg.html#function-tryvectorstring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const char **& result, size_t & resultLen) const |
| bool | **[tryVectorMsg](classWombat_1_1MamaMsg.html#function-tryvectormsg)**(const char * name, mama_fid_t fid, const [MamaMsg](classWombat_1_1MamaMsg.html) **& result, size_t & resultLen) const |
| bool | **[tryVectorMsg](classWombat_1_1MamaMsg.html#function-tryvectormsg)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const [MamaMsg](classWombat_1_1MamaMsg.html) **& result, size_t & resultLen) const |
| void | **[addBoolean](classWombat_1_1MamaMsg.html#function-addboolean)**(const char * name, mama_fid_t fid, bool value) |
| void | **[addBoolean](classWombat_1_1MamaMsg.html#function-addboolean)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, bool value) |
| void | **[addChar](classWombat_1_1MamaMsg.html#function-addchar)**(const char * name, mama_fid_t fid, char value) |
| void | **[addChar](classWombat_1_1MamaMsg.html#function-addchar)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, char value) |
| void | **[addI8](classWombat_1_1MamaMsg.html#function-addi8)**(const char * name, mama_fid_t fid, mama_i8_t value) |
| void | **[addI8](classWombat_1_1MamaMsg.html#function-addi8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_i8_t value) |
| void | **[addI16](classWombat_1_1MamaMsg.html#function-addi16)**(const char * name, mama_fid_t fid, mama_i16_t value) |
| void | **[addI16](classWombat_1_1MamaMsg.html#function-addi16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_i16_t value) |
| void | **[addI32](classWombat_1_1MamaMsg.html#function-addi32)**(const char * name, mama_fid_t fid, mama_i32_t value) |
| void | **[addI32](classWombat_1_1MamaMsg.html#function-addi32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_i32_t value) |
| void | **[addI64](classWombat_1_1MamaMsg.html#function-addi64)**(const char * name, mama_fid_t fid, mama_i64_t value) |
| void | **[addI64](classWombat_1_1MamaMsg.html#function-addi64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_i64_t value) |
| void | **[addU8](classWombat_1_1MamaMsg.html#function-addu8)**(const char * name, mama_fid_t fid, mama_u8_t value) |
| void | **[addU8](classWombat_1_1MamaMsg.html#function-addu8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_u8_t value) |
| void | **[addU16](classWombat_1_1MamaMsg.html#function-addu16)**(const char * name, mama_fid_t fid, mama_u16_t value) |
| void | **[addU16](classWombat_1_1MamaMsg.html#function-addu16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_u16_t value) |
| void | **[addU32](classWombat_1_1MamaMsg.html#function-addu32)**(const char * name, mama_fid_t fid, mama_u32_t value) |
| void | **[addU32](classWombat_1_1MamaMsg.html#function-addu32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_u32_t value) |
| void | **[addU64](classWombat_1_1MamaMsg.html#function-addu64)**(const char * name, mama_fid_t fid, mama_u64_t value) |
| void | **[addU64](classWombat_1_1MamaMsg.html#function-addu64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_u64_t value) |
| void | **[addF32](classWombat_1_1MamaMsg.html#function-addf32)**(const char * name, mama_fid_t fid, mama_f32_t value) |
| void | **[addF32](classWombat_1_1MamaMsg.html#function-addf32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_f32_t value) |
| void | **[addF64](classWombat_1_1MamaMsg.html#function-addf64)**(const char * name, mama_fid_t fid, mama_f64_t value) |
| void | **[addF64](classWombat_1_1MamaMsg.html#function-addf64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, mama_f64_t value) |
| void | **[addString](classWombat_1_1MamaMsg.html#function-addstring)**(const char * name, mama_fid_t fid, const char * value) |
| void | **[addString](classWombat_1_1MamaMsg.html#function-addstring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const char * value) |
| void | **[addDateTime](classWombat_1_1MamaMsg.html#function-adddatetime)**(const char * name, mama_fid_t fid, const [MamaDateTime](classWombat_1_1MamaDateTime.html) & value) |
| void | **[addDateTime](classWombat_1_1MamaMsg.html#function-adddatetime)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const [MamaDateTime](classWombat_1_1MamaDateTime.html) & value) |
| void | **[addPrice](classWombat_1_1MamaMsg.html#function-addprice)**(const char * name, mama_fid_t fid, const [MamaPrice](classWombat_1_1MamaPrice.html) & value) |
| void | **[addPrice](classWombat_1_1MamaMsg.html#function-addprice)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const [MamaPrice](classWombat_1_1MamaPrice.html) & value) |
| void | **[addOpaque](classWombat_1_1MamaMsg.html#function-addopaque)**(const char * name, mama_fid_t fid, const void * value, size_t size) |
| void | **[addOpaque](classWombat_1_1MamaMsg.html#function-addopaque)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const void * value, size_t size) |
| void | **[addMsg](classWombat_1_1MamaMsg.html#function-addmsg)**(const char * name, mama_fid_t fid, [MamaMsg](classWombat_1_1MamaMsg.html) * value) |
| void | **[addMsg](classWombat_1_1MamaMsg.html#function-addmsg)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, [MamaMsg](classWombat_1_1MamaMsg.html) * value) |
| void | **[addVectorChar](classWombat_1_1MamaMsg.html#function-addvectorchar)**(const char * name, mama_fid_t fid, const char vectorValues[], size_t vectorLen) |
| void | **[addVectorChar](classWombat_1_1MamaMsg.html#function-addvectorchar)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const char vectorValues[], size_t vectorLen) |
| void | **[addVectorI8](classWombat_1_1MamaMsg.html#function-addvectori8)**(const char * name, mama_fid_t fid, const mama_i8_t vectorValues[], size_t vectorLen) |
| void | **[addVectorI8](classWombat_1_1MamaMsg.html#function-addvectori8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i8_t vectorValues[], size_t vectorLen) |
| void | **[addVectorU8](classWombat_1_1MamaMsg.html#function-addvectoru8)**(const char * name, mama_fid_t fid, const mama_u8_t vectorValues[], size_t vectorLen) |
| void | **[addVectorU8](classWombat_1_1MamaMsg.html#function-addvectoru8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u8_t vectorValues[], size_t vectorLen) |
| void | **[addVectorI16](classWombat_1_1MamaMsg.html#function-addvectori16)**(const char * name, mama_fid_t fid, const mama_i16_t vectorValues[], size_t vectorLen) |
| void | **[addVectorI16](classWombat_1_1MamaMsg.html#function-addvectori16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i16_t vectorValues[], size_t vectorLen) |
| void | **[addVectorU16](classWombat_1_1MamaMsg.html#function-addvectoru16)**(const char * name, mama_fid_t fid, const mama_u16_t vectorValues[], size_t vectorLen) |
| void | **[addVectorU16](classWombat_1_1MamaMsg.html#function-addvectoru16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u16_t vectorValues[], size_t vectorLen) |
| void | **[addVectorI32](classWombat_1_1MamaMsg.html#function-addvectori32)**(const char * name, mama_fid_t fid, const mama_i32_t vectorValues[], size_t vectorLen) |
| void | **[addVectorI32](classWombat_1_1MamaMsg.html#function-addvectori32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i32_t vectorValues[], size_t vectorLen) |
| void | **[addVectorU32](classWombat_1_1MamaMsg.html#function-addvectoru32)**(const char * name, mama_fid_t fid, const mama_u32_t vectorValues[], size_t vectorLen) |
| void | **[addVectorU32](classWombat_1_1MamaMsg.html#function-addvectoru32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u32_t vectorValues[], size_t vectorLen) |
| void | **[addVectorI64](classWombat_1_1MamaMsg.html#function-addvectori64)**(const char * name, mama_fid_t fid, const mama_i64_t vectorValues[], size_t vectorLen) |
| void | **[addVectorI64](classWombat_1_1MamaMsg.html#function-addvectori64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i64_t vectorValues[], size_t vectorLen) |
| void | **[addVectorU64](classWombat_1_1MamaMsg.html#function-addvectoru64)**(const char * name, mama_fid_t fid, const mama_u64_t vectorValues[], size_t vectorLen) |
| void | **[addVectorU64](classWombat_1_1MamaMsg.html#function-addvectoru64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u64_t vectorValues[], size_t vectorLen) |
| void | **[addVectorF32](classWombat_1_1MamaMsg.html#function-addvectorf32)**(const char * name, mama_fid_t fid, const mama_f32_t vectorValues[], size_t vectorLen) |
| void | **[addVectorF32](classWombat_1_1MamaMsg.html#function-addvectorf32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_f32_t vectorValues[], size_t vectorLen) |
| void | **[addVectorF64](classWombat_1_1MamaMsg.html#function-addvectorf64)**(const char * name, mama_fid_t fid, const mama_f64_t vectorValues[], size_t vectorLen) |
| void | **[addVectorF64](classWombat_1_1MamaMsg.html#function-addvectorf64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_f64_t vectorValues[], size_t vectorLen) |
| void | **[addVectorString](classWombat_1_1MamaMsg.html#function-addvectorstring)**(const char * name, mama_fid_t fid, const char * vectorValues[], size_t vectorLen) |
| void | **[addVectorString](classWombat_1_1MamaMsg.html#function-addvectorstring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const char * vectorValues[], size_t vectorLen) |
| void | **[addVectorMsg](classWombat_1_1MamaMsg.html#function-addvectormsg)**(const char * name, mama_fid_t fid, [MamaMsg](classWombat_1_1MamaMsg.html) * vectorValues[], size_t vectorLen) |
| void | **[addVectorMsg](classWombat_1_1MamaMsg.html#function-addvectormsg)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, [MamaMsg](classWombat_1_1MamaMsg.html) * vectorValues[], size_t vectorLen) |
| void | **[updateBoolean](classWombat_1_1MamaMsg.html#function-updateboolean)**(const char * name, mama_fid_t fid, bool value) |
| void | **[updateBoolean](classWombat_1_1MamaMsg.html#function-updateboolean)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, bool value) |
| void | **[updateChar](classWombat_1_1MamaMsg.html#function-updatechar)**(const char * name, mama_fid_t fid, const char value) |
| void | **[updateChar](classWombat_1_1MamaMsg.html#function-updatechar)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const char value) |
| void | **[updateI8](classWombat_1_1MamaMsg.html#function-updatei8)**(const char * name, mama_fid_t fid, const mama_i8_t value) |
| void | **[updateI8](classWombat_1_1MamaMsg.html#function-updatei8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i8_t value) |
| void | **[updateU8](classWombat_1_1MamaMsg.html#function-updateu8)**(const char * name, mama_fid_t fid, const mama_u8_t value) |
| void | **[updateU8](classWombat_1_1MamaMsg.html#function-updateu8)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u8_t value) |
| void | **[updateI16](classWombat_1_1MamaMsg.html#function-updatei16)**(const char * name, mama_fid_t fid, const mama_i16_t value) |
| void | **[updateI16](classWombat_1_1MamaMsg.html#function-updatei16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i16_t value) |
| void | **[updateU16](classWombat_1_1MamaMsg.html#function-updateu16)**(const char * name, mama_fid_t fid, const mama_u16_t value) |
| void | **[updateU16](classWombat_1_1MamaMsg.html#function-updateu16)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u16_t value) |
| void | **[updateI32](classWombat_1_1MamaMsg.html#function-updatei32)**(const char * name, mama_fid_t fid, const mama_i32_t value) |
| void | **[updateI32](classWombat_1_1MamaMsg.html#function-updatei32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i32_t value) |
| void | **[updateU32](classWombat_1_1MamaMsg.html#function-updateu32)**(const char * name, mama_fid_t fid, const mama_u32_t value) |
| void | **[updateU32](classWombat_1_1MamaMsg.html#function-updateu32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u32_t value) |
| void | **[updateI64](classWombat_1_1MamaMsg.html#function-updatei64)**(const char * name, mama_fid_t fid, const mama_i64_t value) |
| void | **[updateI64](classWombat_1_1MamaMsg.html#function-updatei64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_i64_t value) |
| void | **[updateU64](classWombat_1_1MamaMsg.html#function-updateu64)**(const char * name, mama_fid_t fid, const mama_u64_t value) |
| void | **[updateU64](classWombat_1_1MamaMsg.html#function-updateu64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_u64_t value) |
| void | **[updateF32](classWombat_1_1MamaMsg.html#function-updatef32)**(const char * name, mama_fid_t fid, const mama_f32_t value) |
| void | **[updateF32](classWombat_1_1MamaMsg.html#function-updatef32)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_f32_t value) |
| void | **[updateF64](classWombat_1_1MamaMsg.html#function-updatef64)**(const char * name, mama_fid_t fid, const mama_f64_t value) |
| void | **[updateF64](classWombat_1_1MamaMsg.html#function-updatef64)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const mama_f64_t value) |
| void | **[updateString](classWombat_1_1MamaMsg.html#function-updatestring)**(const char * name, mama_fid_t fid, const char * value) |
| void | **[updateString](classWombat_1_1MamaMsg.html#function-updatestring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const char * value) |
| void | **[updateOpaque](classWombat_1_1MamaMsg.html#function-updateopaque)**(const char * name, mama_fid_t fid, const void * value, size_t size) |
| void | **[updateOpaque](classWombat_1_1MamaMsg.html#function-updateopaque)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const void * value, size_t size) |
| void | **[updateDateTime](classWombat_1_1MamaMsg.html#function-updatedatetime)**(const char * name, mama_fid_t fid, const [MamaDateTime](classWombat_1_1MamaDateTime.html) & value) |
| void | **[updateDateTime](classWombat_1_1MamaMsg.html#function-updatedatetime)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const [MamaDateTime](classWombat_1_1MamaDateTime.html) & value) |
| void | **[updatePrice](classWombat_1_1MamaMsg.html#function-updateprice)**(const char * name, mama_fid_t fid, const [MamaPrice](classWombat_1_1MamaPrice.html) & value) |
| void | **[updatePrice](classWombat_1_1MamaMsg.html#function-updateprice)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, const [MamaPrice](classWombat_1_1MamaPrice.html) & value) |
| mamaMsgType | **[getType](classWombat_1_1MamaMsg.html#function-gettype)**(void ) const |
| const char * | **[getMsgTypeName](classWombat_1_1MamaMsg.html#function-getmsgtypename)**(void ) const |
| mamaMsgStatus | **[getStatus](classWombat_1_1MamaMsg.html#function-getstatus)**(void ) const |
| const char * | **[getMsgStatusString](classWombat_1_1MamaMsg.html#function-getmsgstatusstring)**(void ) const |
| void | **[iterateFields](classWombat_1_1MamaMsg.html#function-iteratefields)**([MamaMsgFieldIterator](classWombat_1_1MamaMsgFieldIterator.html) & iterator, const [MamaDictionary](classWombat_1_1MamaDictionary.html) * dictionary, void * closure) const |
| const char * | **[toString](classWombat_1_1MamaMsg.html#function-tostring)**() const |
| const char * | **[toJsonString](classWombat_1_1MamaMsg.html#function-tojsonstring)**() const |
| const char * | **[toJsonString](classWombat_1_1MamaMsg.html#function-tojsonstring)**(const [MamaDictionary](classWombat_1_1MamaDictionary.html) * dictionary) const |
| const char * | **[toNormalizedString](classWombat_1_1MamaMsg.html#function-tonormalizedstring)**() const |
| void | **[getFieldAsString](classWombat_1_1MamaMsg.html#function-getfieldasstring)**(const char * name, mama_fid_t fid, char * result, size_t maxResultLen) const |
| void | **[getFieldAsString](classWombat_1_1MamaMsg.html#function-getfieldasstring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, char * result, size_t maxResultLen) const |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) * | **[getField](classWombat_1_1MamaMsg.html#function-getfield)**(const char * name, mama_fid_t fid) const |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) * | **[getField](classWombat_1_1MamaMsg.html#function-getfield)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| bool | **[tryField](classWombat_1_1MamaMsg.html#function-tryfield)**(const char * name, mama_fid_t fid) const |
| bool | **[tryField](classWombat_1_1MamaMsg.html#function-tryfield)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc) const |
| bool | **[tryField](classWombat_1_1MamaMsg.html#function-tryfield)**(const char * name, mama_fid_t fid, [MamaMsgField](classWombat_1_1MamaMsgField.html) * result) const |
| bool | **[tryField](classWombat_1_1MamaMsg.html#function-tryfield)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, [MamaMsgField](classWombat_1_1MamaMsgField.html) * result) const |
| bool | **[tryFieldAsString](classWombat_1_1MamaMsg.html#function-tryfieldasstring)**(const char * name, mama_fid_t fid, char * result, size_t maxResultLen) const |
| bool | **[tryFieldAsString](classWombat_1_1MamaMsg.html#function-tryfieldasstring)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * fieldDesc, char * result, size_t maxResultLen) const |
| void | **[getByteBuffer](classWombat_1_1MamaMsg.html#function-getbytebuffer)**(const void *& buffer, size_t & bufferLength) const |
| [MamaMsg](classWombat_1_1MamaMsg.html) * | **[detach](classWombat_1_1MamaMsg.html#function-detach)**(void ) |
| bool | **[isFromInbox](classWombat_1_1MamaMsg.html#function-isfrominbox)**(void ) const |
| mama_seqnum_t | **[getSeqNum](classWombat_1_1MamaMsg.html#function-getseqnum)**(void ) const |
| bool | **[getIsDefinitelyDuplicate](classWombat_1_1MamaMsg.html#function-getisdefinitelyduplicate)**(void ) const |
| bool | **[getIsPossiblyDuplicate](classWombat_1_1MamaMsg.html#function-getispossiblyduplicate)**(void ) const |
| bool | **[getIsPossiblyDelayed](classWombat_1_1MamaMsg.html#function-getispossiblydelayed)**(void ) const |
| bool | **[getIsDefinitelyDelayed](classWombat_1_1MamaMsg.html#function-getisdefinitelydelayed)**(void ) const |
| bool | **[getIsOutOfSequence](classWombat_1_1MamaMsg.html#function-getisoutofsequence)**(void ) const |
| bool | **[setNewBuffer](classWombat_1_1MamaMsg.html#function-setnewbuffer)**(void * buffer, mama_size_t size) |
| void * | **[getNativeHandle](classWombat_1_1MamaMsg.html#function-getnativehandle)**(void ) const |
| void | **[createFromMsg](classWombat_1_1MamaMsg.html#function-createfrommsg)**(mamaMsg msg, bool destroyMsg =false) const |
| void | **[setMsg](classWombat_1_1MamaMsg.html#function-setmsg)**(mamaMsg msg) |
| const mamaMsg & | **[getUnderlyingMsg](classWombat_1_1MamaMsg.html#function-getunderlyingmsg)**(void ) const |
| mamaMsg | **[getUnderlyingMsg](classWombat_1_1MamaMsg.html#function-getunderlyingmsg)**(void ) |
| MAMAIgnoreDeprecatedOpen mamaPayloadType | **[getPayloadType](classWombat_1_1MamaMsg.html#function-getpayloadtype)**(void ) const |
| MAMAIgnoreDeprecatedClose void * | **[getNativeMsg](classWombat_1_1MamaMsg.html#function-getnativemsg)**(void ) |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) & | **[begin](classWombat_1_1MamaMsg.html#function-begin)**([MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) & theIterator) const |
| mamaMsgReply | **[getReplyHandle](classWombat_1_1MamaMsg.html#function-getreplyhandle)**(void ) const |
| void | **[destroyReplyHandle](classWombat_1_1MamaMsg.html#function-destroyreplyhandle)**(mamaMsgReply replyHandle) |

## Detailed Description

```cpp
class Wombat::MamaMsg;
```


**Author**: Michael Schonberg 

MAMA message representation.

Field identifiers must be greater than 0. A field identifier of 0 indicates that there is no unique FID and multiple fields with the same name may have FID == 0.

Field lookup proceeds in the following manner similar to TIBRV.

* If the fid supplied is non-zero, search for a field with the specified fid and return the field if it exists (the name is not validated). Otherwise throw a STATUS_NOT_FOUND exception.
* If the fid supplied is 0, return the first field encountered with the supplied name or throw a STATUS_NOT_FOUND exception if no such field exists.
Get methods for numeric values may result in loss of information through either rounding or truncation when a larger data type is accessed as a smaller one. The result may be the same as the result of casting the larger value to the smaller. For example calling `getShort` for an integer field with a value greater than `Short.MAX_VALUE` might return `Short.MIN_VALUE`. It is also valid to throw a `ClassCastException` or other appropriate `RuntimeException`.

Since some message implementations may not natively support all data types, the behaviour may vary substantially. In creating and accessing messages the API's assume that the underlying values are stored in the smallest possible fields, and accesses them accordingly. For this reason the minimal requirement is that the methods for accessing and creating fields support the full range of values appropriate for their type. How they deal with larger values should be irrelevant.

## Public Functions Documentation

### function ~MamaMsg

```cpp
~MamaMsg()
```


### function MamaMsg

```cpp
MamaMsg(
    void 
)
```


### function MamaMsg

```cpp
MamaMsg(
    const MamaMsg & mm
)
```


### function create

```cpp
void create(
    void 
)
```


Create the actual underlying wire format message. This method will create a an underlying message native to the middleware being used. Tibrv: RV message LBM: Wombat Message TCP: Wombat Message 


### function MAMADeprecated

```cpp
MAMADeprecated(
    "createForPayload has been deprecated,
    use dynamic loading instead!" 
) const
```


**Parameters**: 

  * **id** The identifier of the payload to be used. 


**Deprecated**: 

This has been deprecated in favor of dynamic loading. 

Create a mamaMsg.


### function createForPayloadBridge

```cpp
void createForPayloadBridge(
    mamaPayloadBridge payloadBridge
)
```


**Parameters**: 

  * **id** The payload bridge to be used. 


Create a mamaMsg.


### function createFromBuffer

```cpp
void createFromBuffer(
    const void * buffer,
    size_t bufferLength
)
```


**Parameters**: 

  * **buffer** The byte array containing the wire format of the message 
  * **bufferLength** The length, in bytes, of the supplied buffer


**Return**: mama_status The outcome of the operation 

Create a [MamaMsg](classWombat_1_1MamaMsg.html) from the provided byte buffer. The application is responsible for destroying the message. In all cases the buffer is copied as the message is constructed.

Any transport differences are detailed below.

rv: The bufferLength parameter is not required.

Note: wombatmsg format is not currently supported on tibrv transports. At the moment a buffer containing the wire format for each of these transports is expected to be passed to the function.


### function copy

```cpp
void copy(
    const MamaMsg & rhs
)
```


Copy the message from another, severing all links to the original message 


### function getTempCopy

```cpp
MamaMsg * getTempCopy()
```


**Return**: The message copy. 

Get a temporary copy of the mamaMsg so to be able to modify the content. If the message can be modified directly, the message itself is returned. If the message cannot be modified then only one copy is performed the first time this method is called and then the same copy is returned when this method is called again. The copy has the same life time of the original message.


### function applyMsg

```cpp
void applyMsg(
    const MamaMsg & msg
)
```


### function clear

```cpp
void clear(
    void 
)
```


Clear the message. All fields are removed. 


### function getNumFields

```cpp
size_t getNumFields(
    void 
) const
```


**Return**: The number of fields in the message. 

Returns the total number of fields in the message. Sub-messages count as a single field.


### function getByteSize

```cpp
size_t getByteSize(
    void 
) const
```


**Return**: The number of bytes in the message 

Get the message size in bytes. Supported with the following transports: tibrv LBT


### function getBoolean

```cpp
bool getBoolean(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get a boolean field. 


### function getBoolean

```cpp
bool getBoolean(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get a boolean field. 


### function getChar

```cpp
char getChar(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get a char field. 


### function getChar

```cpp
char getChar(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get a char field. 


### function getI8

```cpp
mama_i8_t getI8(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get an I8 field. 


### function getI8

```cpp
mama_i8_t getI8(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get a I8 field. 


### function getU8

```cpp
mama_u8_t getU8(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get a U8 field. 


### function getU8

```cpp
mama_u8_t getU8(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get a U8 field. 


### function getI16

```cpp
mama_i16_t getI16(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get an I16 field. 


### function getI16

```cpp
mama_i16_t getI16(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get an I16 field. 


### function getU16

```cpp
mama_u16_t getU16(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get a U16 field. 


### function getU16

```cpp
mama_u16_t getU16(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get an U16 field. 


### function getI32

```cpp
mama_i32_t getI32(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get an I32 field. 


### function getI32

```cpp
mama_i32_t getI32(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get a I32 field. 


### function getU32

```cpp
mama_u32_t getU32(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get a U32 field. 


### function getU32

```cpp
mama_u32_t getU32(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get a U32 field. 


### function getI64

```cpp
mama_i64_t getI64(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier. 


**Return**: The field value as a long. 

Get a I64 field.


### function getI64

```cpp
mama_i64_t getI64(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get a I64 field. 


### function getU64

```cpp
mama_u64_t getU64(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name 
  * **fid** The field identifier 


**Return**: The integer value. 

Get a U64 field. 


### function getU64

```cpp
mama_u64_t getU64(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The integer value. 

Get a U64 field. 


### function getF32

```cpp
mama_f32_t getF32(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name. 
  * **fid** The field identifier. 


**Return**: The double value. 

Get a f32 field.


### function getF32

```cpp
mama_f32_t getF32(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The double value. 

Get a f32 field. 


### function getF64

```cpp
mama_f64_t getF64(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The name. 
  * **fid** The field identifier. 


**Return**: The double value. 

Get a f64 field.


### function getF64

```cpp
mama_f64_t getF64(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The double value. 

Get a f64 field. 


### function getString

```cpp
const char * getString(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 


**Return**: The string value. The return value points to the string inside the mamaMsg object. This piece of memory is owned by the object and does not need to be explicitly freed. 

Get a const char* field 


### function getString

```cpp
const char * getString(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** Pointer to the field descriptor 


**Return**: The string value. The return value points to the string inside the mamaMsg object. This piece of memory is owned by the object and does not need to be explicitly freed. 

Get a const char* field 


### function getOpaque

```cpp
const void * getOpaque(
    const char * name,
    mama_fid_t fid,
    size_t & size
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **size** The opaque size in bytes. 


**Return**: the string value. 

Get an opaque field. 


### function getOpaque

```cpp
const void * getOpaque(
    const MamaFieldDescriptor * fieldDesc,
    size_t & size
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **size** The opaque size in bytes. 


**Return**: The double value. 

Get a const char* field. 


### function getDateTime

```cpp
void getDateTime(
    const char * name,
    mama_fid_t fid,
    MamaDateTime & result
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) the date/time. 


Get a [MamaDateTime](classWombat_1_1MamaDateTime.html) field. 


### function getDateTime

```cpp
void getDateTime(
    const MamaFieldDescriptor * fieldDesc,
    MamaDateTime & result
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) the date/time. 


Get a [MamaDateTime](classWombat_1_1MamaDateTime.html) field. 


### function getPrice

```cpp
void getPrice(
    const char * name,
    mama_fid_t fid,
    MamaPrice & result
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) the date/time. 


Get a [MamaPrice](classWombat_1_1MamaPrice.html) field. 


### function getPrice

```cpp
void getPrice(
    const MamaFieldDescriptor * fieldDesc,
    MamaPrice & result
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) the date/time. 


Get a [MamaPrice](classWombat_1_1MamaPrice.html) field. 


### function getMsg

```cpp
const MamaMsg * getMsg(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 


**Return**: The submessage. 

Get a submessage field. 


### function getMsg

```cpp
const MamaMsg * getMsg(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


**Return**: The vector. 

Get a submessage field. 


### function getVectorChar

```cpp
const char * getVectorChar(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of characters. (Note: prefer using string fields or opaque fields over a vector of characters.) 


### function getVectorChar

```cpp
const char * getVectorChar(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of characters. (Note: prefer using string fields or opaque fields over a vector of characters.) 


### function getVectorI8

```cpp
const mama_i8_t * getVectorI8(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of signed 8-bit integers. 


### function getVectorI8

```cpp
const mama_i8_t * getVectorI8(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of signed 8-bit integers. or opaque fields over a vector of characters.) 


### function getVectorU8

```cpp
const mama_u8_t * getVectorU8(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of unsigned 8-bit integers. 


### function getVectorU8

```cpp
const mama_u8_t * getVectorU8(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of unsigned 8-bit integers. or opaque fields over a vector of characters.) 


### function getVectorI16

```cpp
const mama_i16_t * getVectorI16(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of signed 16-bit integers. 


### function getVectorI16

```cpp
const mama_i16_t * getVectorI16(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of signed 16-bit integers. or opaque fields over a vector of characters.) 


### function getVectorU16

```cpp
const mama_u16_t * getVectorU16(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of unsigned 16-bit integers. 


### function getVectorU16

```cpp
const mama_u16_t * getVectorU16(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of unsigned 16-bit integers. or opaque fields over a vector of characters.) 


### function getVectorI32

```cpp
const mama_i32_t * getVectorI32(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of signed 32-bit integers. 


### function getVectorI32

```cpp
const mama_i32_t * getVectorI32(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of signed 32-bit integers. or opaque fields over a vector of characters.) 


### function getVectorU32

```cpp
const mama_u32_t * getVectorU32(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of unsigned 32-bit integers. 


### function getVectorU32

```cpp
const mama_u32_t * getVectorU32(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of unsigned 32-bit integers. or opaque fields over a vector of characters.) 


### function getVectorI64

```cpp
const mama_i64_t * getVectorI64(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of signed 64-bit integers. 


### function getVectorI64

```cpp
const mama_i64_t * getVectorI64(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of signed 64-bit integers. or opaque fields over a vector of characters.) 


### function getVectorU64

```cpp
const mama_u64_t * getVectorU64(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of unsigned 64-bit integers. 


### function getVectorU64

```cpp
const mama_u64_t * getVectorU64(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of unsigned 64-bit integers. or opaque fields over a vector of characters.) 


### function getVectorF32

```cpp
const mama_f32_t * getVectorF32(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of 32-bit floating point numbers. 


### function getVectorF32

```cpp
const mama_f32_t * getVectorF32(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of 32-bit floating point numbers. or opaque fields over a vector of characters.) 


### function getVectorF64

```cpp
const mama_f64_t * getVectorF64(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of 64-bit floating point numbers. 


### function getVectorF64

```cpp
const mama_f64_t * getVectorF64(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of 64-bit floating point numbers. or opaque fields over a vector of characters.) 


### function getVectorMsg

```cpp
const MamaMsg ** getVectorMsg(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of submessages field. 


### function getVectorMsg

```cpp
const MamaMsg ** getVectorMsg(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of submessages. 


### function getVectorString

```cpp
const char ** getVectorString(
    const char * name,
    mama_fid_t fid,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of strings field. The vector is deleted with the message and overwritten by subsequent calls to getVectorString.


### function getVectorString

```cpp
const char ** getVectorString(
    const MamaFieldDescriptor * fieldDesc,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **resultLen** (out) the size of the vector. 


**Return**: The vector. 

Get a vector of submessages. The vector is deleted with the message and overwritten by subsequent calls to getVectorString.


### function tryBoolean

```cpp
bool tryBoolean(
    const char * name,
    mama_fid_t fid,
    bool & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get a boolean field. 


### function tryBoolean

```cpp
bool tryBoolean(
    const MamaFieldDescriptor * field,
    bool & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get a boolean field. 


### function tryChar

```cpp
bool tryChar(
    const char * name,
    mama_fid_t fid,
    char & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get a char field. 


### function tryChar

```cpp
bool tryChar(
    const MamaFieldDescriptor * field,
    char & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get a char field. 


### function tryI8

```cpp
bool tryI8(
    const char * name,
    mama_fid_t fid,
    mama_i8_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get an unsigned 8 bit integer field. 


### function tryI8

```cpp
bool tryI8(
    const MamaFieldDescriptor * field,
    mama_i8_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get an unsigned 8 bit field. 


### function tryU8

```cpp
bool tryU8(
    const char * name,
    mama_fid_t fid,
    mama_u8_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get an unsigned 8 bit integer field. 


### function tryU8

```cpp
bool tryU8(
    const MamaFieldDescriptor * field,
    mama_u8_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get an unsigned 8 bit field. 


### function tryI16

```cpp
bool tryI16(
    const char * name,
    mama_fid_t fid,
    mama_i16_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get a signed 16 bit integer field. 


### function tryI16

```cpp
bool tryI16(
    const MamaFieldDescriptor * field,
    mama_i16_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get a signed 16 bit field. 


### function tryU16

```cpp
bool tryU16(
    const char * name,
    mama_fid_t fid,
    mama_u16_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get an unsigned 16 bit integer field. 


### function tryU16

```cpp
bool tryU16(
    const MamaFieldDescriptor * field,
    mama_u16_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get an unsigned 16 bit field. 


### function tryI32

```cpp
bool tryI32(
    const char * name,
    mama_fid_t fid,
    mama_i32_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get a signed 32 bit integer field. 


### function tryI32

```cpp
bool tryI32(
    const MamaFieldDescriptor * field,
    mama_i32_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get a signed 32 bit integer field. 


### function tryU32

```cpp
bool tryU32(
    const char * name,
    mama_fid_t fid,
    mama_u32_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get an unsigned 32 bit integer field. 


### function tryU32

```cpp
bool tryU32(
    const MamaFieldDescriptor * field,
    mama_u32_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get an unsigned 32 bit integer field. 


### function tryI64

```cpp
bool tryI64(
    const char * name,
    mama_fid_t fid,
    mama_i64_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get a signed 64 bit field. 


### function tryI64

```cpp
bool tryI64(
    const MamaFieldDescriptor * field,
    mama_i64_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get a signed 64 bit field. 


### function tryU64

```cpp
bool tryU64(
    const char * name,
    mama_fid_t fid,
    mama_u64_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get an unsigned 64 bit field. 


### function tryU64

```cpp
bool tryU64(
    const MamaFieldDescriptor * field,
    mama_u64_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get an unsigned 64 bit field. 


### function tryF32

```cpp
bool tryF32(
    const char * name,
    mama_fid_t fid,
    mama_f32_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get a f32 field.


### function tryF32

```cpp
bool tryF32(
    const MamaFieldDescriptor * field,
    mama_f32_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get a f32 field.


### function tryF64

```cpp
bool tryF64(
    const char * name,
    mama_fid_t fid,
    mama_f64_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get a f64 field.


### function tryF64

```cpp
bool tryF64(
    const MamaFieldDescriptor * field,
    mama_f64_t & result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get a f64 field.


### function tryString

```cpp
bool tryString(
    const char * name,
    mama_fid_t fid,
    const char *& result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 


**Return**: Whether the field was present. 

Try to get a string field. 


### function tryString

```cpp
bool tryString(
    const MamaFieldDescriptor * field,
    const char *& result
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 


**Return**: Whether the field was present. 

Try to get a string field. 


### function tryDateTime

```cpp
bool tryDateTime(
    const char * name,
    mama_fid_t fid,
    MamaDateTime & result
) const
```


**Parameters**: 

  * **name** The field name 
  * **fid** The field identifier 
  * **result** The result (not modified if field not present) const 


**Return**: Whether the field was present. 

Try to get a date/time field. 


### function tryDateTime

```cpp
bool tryDateTime(
    const MamaFieldDescriptor * field,
    MamaDateTime & result
) const
```


**Parameters**: 

  * **field** The field to try 
  * **result** The result (not modified if field not present) const 


**Return**: Whether the field was present. 

Try to get a date/time field. 


### function tryPrice

```cpp
bool tryPrice(
    const char * name,
    mama_fid_t fid,
    MamaPrice & result
) const
```


**Parameters**: 

  * **name** The field name 
  * **fid** The field identifier 
  * **result** The result (not modified if field not present) const 


**Return**: Whether the field was present. 

Try to get a price field. 


### function tryPrice

```cpp
bool tryPrice(
    const MamaFieldDescriptor * field,
    MamaPrice & result
) const
```


**Parameters**: 

  * **field** The field to try 
  * **result** The result (not modified if field not present) const 


**Return**: Whether the field was present. 

Try to get a price field. 


### function tryMsg

```cpp
bool tryMsg(
    const char * name,
    mama_fid_t fid,
    const MamaMsg *& result
) const
```


**Parameters**: 

  * **name** The field name 
  * **fid** The field identifier 
  * **result** The result 


**Return**: Whether the field was present. 

Try to get a submessage field. 


### function tryMsg

```cpp
bool tryMsg(
    const MamaFieldDescriptor * field,
    const MamaMsg *& result
) const
```


**Parameters**: 

  * **field** The field to try 
  * **result** The result 


**Return**: Whether the field was present. 

Try to get a submessage field. 


### function tryOpaque

```cpp
bool tryOpaque(
    const char * name,
    mama_fid_t fid,
    const void *& result,
    size_t & size
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **name** The field name 
  * **fid** The field identifier 
  * **size** (out) The size of the opaque in bytes. 


**Return**: Whether the field was present. 

Try to get a string field. 


### function tryOpaque

```cpp
bool tryOpaque(
    const MamaFieldDescriptor * field,
    const void *& result,
    size_t & size
) const
```


**Parameters**: 

  * **result** The result (not modified if field not present) const 
  * **field** The field to try 
  * **size** (out) The size of the opaque in bytes. 


**Return**: Whether the field was present. 

Try to get a string field. 


### function tryVectorChar

```cpp
bool tryVectorChar(
    const char * name,
    mama_fid_t fid,
    const char *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of characters. (Note: prefer using string fields or opaque fields over a vector of characters.) 


### function tryVectorChar

```cpp
bool tryVectorChar(
    const MamaFieldDescriptor * fieldDesc,
    const char *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of characters. (Note: prefer using string fields or opaque fields over a vector of characters.) 


### function tryVectorI8

```cpp
bool tryVectorI8(
    const char * name,
    mama_fid_t fid,
    const mama_i8_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of signed 8-bit integers. 


### function tryVectorI8

```cpp
bool tryVectorI8(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i8_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of signed 8-bit integers. or opaque fields over a vector of characters.) 


### function tryVectorU8

```cpp
bool tryVectorU8(
    const char * name,
    mama_fid_t fid,
    const mama_u8_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of unsigned 8-bit integers. 


### function tryVectorU8

```cpp
bool tryVectorU8(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u8_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of unsigned 8-bit integers. or opaque fields over a vector of characters.) 


### function tryVectorI16

```cpp
bool tryVectorI16(
    const char * name,
    mama_fid_t fid,
    const mama_i16_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of signed 16-bit integers. 


### function tryVectorI16

```cpp
bool tryVectorI16(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i16_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of signed 16-bit integers. or opaque fields over a vector of characters.) 


### function tryVectorU16

```cpp
bool tryVectorU16(
    const char * name,
    mama_fid_t fid,
    const mama_u16_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of unsigned 16-bit integers. 


### function tryVectorU16

```cpp
bool tryVectorU16(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u16_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of unsigned 16-bit integers. or opaque fields over a vector of characters.) 


### function tryVectorI32

```cpp
bool tryVectorI32(
    const char * name,
    mama_fid_t fid,
    const mama_i32_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of signed 32-bit integers. 


### function tryVectorI32

```cpp
bool tryVectorI32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i32_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of signed 32-bit integers. or opaque fields over a vector of characters.) 


### function tryVectorU32

```cpp
bool tryVectorU32(
    const char * name,
    mama_fid_t fid,
    const mama_u32_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of unsigned 32-bit integers. 


### function tryVectorU32

```cpp
bool tryVectorU32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u32_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of unsigned 32-bit integers. or opaque fields over a vector of characters.) 


### function tryVectorI64

```cpp
bool tryVectorI64(
    const char * name,
    mama_fid_t fid,
    const mama_i64_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of signed 64-bit integers. 


### function tryVectorI64

```cpp
bool tryVectorI64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i64_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of signed 64-bit integers. or opaque fields over a vector of characters.) 


### function tryVectorU64

```cpp
bool tryVectorU64(
    const char * name,
    mama_fid_t fid,
    const mama_u64_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of unsigned 64-bit integers. 


### function tryVectorU64

```cpp
bool tryVectorU64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u64_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of unsigned 64-bit integers. or opaque fields over a vector of characters.) 


### function tryVectorF32

```cpp
bool tryVectorF32(
    const char * name,
    mama_fid_t fid,
    const mama_f32_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of 32-bit floating point numbers. 


### function tryVectorF32

```cpp
bool tryVectorF32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_f32_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of 32-bit floating point numbers. or opaque fields over a vector of characters.) 


### function tryVectorF64

```cpp
bool tryVectorF64(
    const char * name,
    mama_fid_t fid,
    const mama_f64_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of 64-bit floating point numbers. 


### function tryVectorF64

```cpp
bool tryVectorF64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_f64_t *& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of 64-bit floating point numbers. or opaque fields over a vector of characters.) 


### function tryVectorString

```cpp
bool tryVectorString(
    const char * name,
    mama_fid_t fid,
    const char **& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of strings. 


### function tryVectorString

```cpp
bool tryVectorString(
    const MamaFieldDescriptor * fieldDesc,
    const char **& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of strings 


### function tryVectorMsg

```cpp
bool tryVectorMsg(
    const char * name,
    mama_fid_t fid,
    const MamaMsg **& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of submessages field. 


### function tryVectorMsg

```cpp
bool tryVectorMsg(
    const MamaFieldDescriptor * fieldDesc,
    const MamaMsg **& result,
    size_t & resultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** (out) The vector. 
  * **resultLen** (out) The size of the vector. 


**Return**: Whether the field was present. 

Try to get a vector of submessages. 


### function addBoolean

```cpp
void addBoolean(
    const char * name,
    mama_fid_t fid,
    bool value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new boolean field.


### function addBoolean

```cpp
void addBoolean(
    const MamaFieldDescriptor * fieldDesc,
    bool value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new boolean field.


### function addChar

```cpp
void addChar(
    const char * name,
    mama_fid_t fid,
    char value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new char field.


### function addChar

```cpp
void addChar(
    const MamaFieldDescriptor * fieldDesc,
    char value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new char field.


### function addI8

```cpp
void addI8(
    const char * name,
    mama_fid_t fid,
    mama_i8_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new I8 field.


### function addI8

```cpp
void addI8(
    const MamaFieldDescriptor * fieldDesc,
    mama_i8_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new I8 field.


### function addI16

```cpp
void addI16(
    const char * name,
    mama_fid_t fid,
    mama_i16_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new I16 field.


### function addI16

```cpp
void addI16(
    const MamaFieldDescriptor * fieldDesc,
    mama_i16_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new I16 field.


### function addI32

```cpp
void addI32(
    const char * name,
    mama_fid_t fid,
    mama_i32_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new I32 field.


### function addI32

```cpp
void addI32(
    const MamaFieldDescriptor * fieldDesc,
    mama_i32_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new I32 field.


### function addI64

```cpp
void addI64(
    const char * name,
    mama_fid_t fid,
    mama_i64_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new I64 field.


### function addI64

```cpp
void addI64(
    const MamaFieldDescriptor * fieldDesc,
    mama_i64_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new I64 field.


### function addU8

```cpp
void addU8(
    const char * name,
    mama_fid_t fid,
    mama_u8_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new byte (U8) const field.


### function addU8

```cpp
void addU8(
    const MamaFieldDescriptor * fieldDesc,
    mama_u8_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new U8 field.


### function addU16

```cpp
void addU16(
    const char * name,
    mama_fid_t fid,
    mama_u16_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new short (U16) const field.


### function addU16

```cpp
void addU16(
    const MamaFieldDescriptor * fieldDesc,
    mama_u16_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new U16 field.


### function addU32

```cpp
void addU32(
    const char * name,
    mama_fid_t fid,
    mama_u32_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new int (U32) const field.


### function addU32

```cpp
void addU32(
    const MamaFieldDescriptor * fieldDesc,
    mama_u32_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new U32 field.


### function addU64

```cpp
void addU64(
    const char * name,
    mama_fid_t fid,
    mama_u64_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new int (U64) const field.


### function addU64

```cpp
void addU64(
    const MamaFieldDescriptor * fieldDesc,
    mama_u64_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new U64 field.


### function addF32

```cpp
void addF32(
    const char * name,
    mama_fid_t fid,
    mama_f32_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new F32 field.


### function addF32

```cpp
void addF32(
    const MamaFieldDescriptor * fieldDesc,
    mama_f32_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new F32 field.


### function addF64

```cpp
void addF64(
    const char * name,
    mama_fid_t fid,
    mama_f64_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a new F64 field.


### function addF64

```cpp
void addF64(
    const MamaFieldDescriptor * fieldDesc,
    mama_f64_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new F64 field.


### function addString

```cpp
void addString(
    const char * name,
    mama_fid_t fid,
    const char * value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 


Add a const char* field.


### function addString

```cpp
void addString(
    const MamaFieldDescriptor * fieldDesc,
    const char * value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new const char* field.


### function addDateTime

```cpp
void addDateTime(
    const char * name,
    mama_fid_t fid,
    const MamaDateTime & value
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a date/time field.


### function addDateTime

```cpp
void addDateTime(
    const MamaFieldDescriptor * fieldDesc,
    const MamaDateTime & value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new date/time field.


### function addPrice

```cpp
void addPrice(
    const char * name,
    mama_fid_t fid,
    const MamaPrice & value
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a price field.


### function addPrice

```cpp
void addPrice(
    const MamaFieldDescriptor * fieldDesc,
    const MamaPrice & value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 


Add a new price field.


### function addOpaque

```cpp
void addOpaque(
    const char * name,
    mama_fid_t fid,
    const void * value,
    size_t size
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The value. 
  * **fid** The field identifier. 
  * **size** the size of the opaque field, in bytes 


Add an opaque field


### function addOpaque

```cpp
void addOpaque(
    const MamaFieldDescriptor * fieldDesc,
    const void * value,
    size_t size
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The value. 
  * **size** the size of the opaque field, in bytes 


Add an opaque field


### function addMsg

```cpp
void addMsg(
    const char * name,
    mama_fid_t fid,
    MamaMsg * value
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **value** the value to add 


Add a [MamaMsg](classWombat_1_1MamaMsg.html) object 


### function addMsg

```cpp
void addMsg(
    const MamaFieldDescriptor * fieldDesc,
    MamaMsg * value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** the value to add 


Add a [MamaMsg](classWombat_1_1MamaMsg.html) object 


### function addVectorChar

```cpp
void addVectorChar(
    const char * name,
    mama_fid_t fid,
    const char vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of characters. (Note: prefer using string fields or opaque fields over a vector of characters.) 


### function addVectorChar

```cpp
void addVectorChar(
    const MamaFieldDescriptor * fieldDesc,
    const char vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of characters. (Note: prefer using string fields or opaque fields over a vector of characters.) 


### function addVectorI8

```cpp
void addVectorI8(
    const char * name,
    mama_fid_t fid,
    const mama_i8_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of signed 8-bit integers. 


### function addVectorI8

```cpp
void addVectorI8(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i8_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of signed 8-bit integers. 


### function addVectorU8

```cpp
void addVectorU8(
    const char * name,
    mama_fid_t fid,
    const mama_u8_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 8-bit integers. 


### function addVectorU8

```cpp
void addVectorU8(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u8_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 8-bit integers. 


### function addVectorI16

```cpp
void addVectorI16(
    const char * name,
    mama_fid_t fid,
    const mama_i16_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of signed 16-bit integers. 


### function addVectorI16

```cpp
void addVectorI16(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i16_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of signed 16-bit integers. 


### function addVectorU16

```cpp
void addVectorU16(
    const char * name,
    mama_fid_t fid,
    const mama_u16_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 16-bit integers. 


### function addVectorU16

```cpp
void addVectorU16(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u16_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 16-bit integers. 


### function addVectorI32

```cpp
void addVectorI32(
    const char * name,
    mama_fid_t fid,
    const mama_i32_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of signed 32-bit integers. 


### function addVectorI32

```cpp
void addVectorI32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i32_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of signed 32-bit integers. 


### function addVectorU32

```cpp
void addVectorU32(
    const char * name,
    mama_fid_t fid,
    const mama_u32_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 32-bit integers. 


### function addVectorU32

```cpp
void addVectorU32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u32_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 32-bit integers. 


### function addVectorI64

```cpp
void addVectorI64(
    const char * name,
    mama_fid_t fid,
    const mama_i64_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of signed 64-bit integers. 


### function addVectorI64

```cpp
void addVectorI64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i64_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of signed 64-bit integers. 


### function addVectorU64

```cpp
void addVectorU64(
    const char * name,
    mama_fid_t fid,
    const mama_u64_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 64-bit integers. 


### function addVectorU64

```cpp
void addVectorU64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u64_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 64-bit integers. 


### function addVectorF32

```cpp
void addVectorF32(
    const char * name,
    mama_fid_t fid,
    const mama_f32_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of 32-bit floating point numbers. 


### function addVectorF32

```cpp
void addVectorF32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_f32_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 32-bit integers. 


### function addVectorF64

```cpp
void addVectorF64(
    const char * name,
    mama_fid_t fid,
    const mama_f64_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of 64-bit floating point numbers. 


### function addVectorF64

```cpp
void addVectorF64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_f64_t vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of unsigned 64-bit integers. 


### function addVectorString

```cpp
void addVectorString(
    const char * name,
    mama_fid_t fid,
    const char * vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of strings. 


### function addVectorString

```cpp
void addVectorString(
    const MamaFieldDescriptor * fieldDesc,
    const char * vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of strings. 


### function addVectorMsg

```cpp
void addVectorMsg(
    const char * name,
    mama_fid_t fid,
    MamaMsg * vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of [MamaMsg](classWombat_1_1MamaMsg.html) objects. 


### function addVectorMsg

```cpp
void addVectorMsg(
    const MamaFieldDescriptor * fieldDesc,
    MamaMsg * vectorValues[],
    size_t vectorLen
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **vectorValues** The vector values. 
  * **vectorLen** The size of the vector. 


Add a vector of [MamaMsg](classWombat_1_1MamaMsg.html) objects. 


### function updateBoolean

```cpp
void updateBoolean(
    const char * name,
    mama_fid_t fid,
    bool value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing boolean field. If the field does not exist it is added.


### function updateBoolean

```cpp
void updateBoolean(
    const MamaFieldDescriptor * fieldDesc,
    bool value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing boolean field. If the field does not exist it is added.


### function updateChar

```cpp
void updateChar(
    const char * name,
    mama_fid_t fid,
    const char value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing char field. If the field does not exist it is added.


### function updateChar

```cpp
void updateChar(
    const MamaFieldDescriptor * fieldDesc,
    const char value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing char field. If the field does not exist it is added.


### function updateI8

```cpp
void updateI8(
    const char * name,
    mama_fid_t fid,
    const mama_i8_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing byte field. If the field does not exist it is added.


### function updateI8

```cpp
void updateI8(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i8_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing byte field. If the field does not exist it is added.


### function updateU8

```cpp
void updateU8(
    const char * name,
    mama_fid_t fid,
    const mama_u8_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing U8 field. If the field does not exist it is added.


### function updateU8

```cpp
void updateU8(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u8_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing U8 field. If the field does not exist it is added.


### function updateI16

```cpp
void updateI16(
    const char * name,
    mama_fid_t fid,
    const mama_i16_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing short field. If the field does not exist it is added.


### function updateI16

```cpp
void updateI16(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i16_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing short field. If the field does not exist it is added.


### function updateU16

```cpp
void updateU16(
    const char * name,
    mama_fid_t fid,
    const mama_u16_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing U16 field. If the field does not exist it is added.


### function updateU16

```cpp
void updateU16(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u16_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing U16 field. If the field does not exist it is added.


### function updateI32

```cpp
void updateI32(
    const char * name,
    mama_fid_t fid,
    const mama_i32_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing integer field. If the field does not exist it is added.


### function updateI32

```cpp
void updateI32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i32_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing integer field. If the field does not exist it is added.


### function updateU32

```cpp
void updateU32(
    const char * name,
    mama_fid_t fid,
    const mama_u32_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing U32 field. If the field does not exist it is added.


### function updateU32

```cpp
void updateU32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u32_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing U32 field. If the field does not exist it is added.


### function updateI64

```cpp
void updateI64(
    const char * name,
    mama_fid_t fid,
    const mama_i64_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing long field. If the field does not exist it is added.


### function updateI64

```cpp
void updateI64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_i64_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing long field. If the field does not exist it is added.


### function updateU64

```cpp
void updateU64(
    const char * name,
    mama_fid_t fid,
    const mama_u64_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing U64 field. If the field does not exist it is added.


### function updateU64

```cpp
void updateU64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_u64_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing U64 field. If the field does not exist it is added.


### function updateF32

```cpp
void updateF32(
    const char * name,
    mama_fid_t fid,
    const mama_f32_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing F32 field. If the field does not exist it is added.


### function updateF32

```cpp
void updateF32(
    const MamaFieldDescriptor * fieldDesc,
    const mama_f32_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing F32 field. If the field does not exist it is added.


### function updateF64

```cpp
void updateF64(
    const char * name,
    mama_fid_t fid,
    const mama_f64_t value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing F64 field. If the field does not exist it is added.


### function updateF64

```cpp
void updateF64(
    const MamaFieldDescriptor * fieldDesc,
    const mama_f64_t value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing F64 field. If the field does not exist it is added.


### function updateString

```cpp
void updateString(
    const char * name,
    mama_fid_t fid,
    const char * value
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 


Update the value of an existing const char* field. If the field does not exist it is added.


### function updateString

```cpp
void updateString(
    const MamaFieldDescriptor * fieldDesc,
    const char * value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing string field. If the field does not exist it is added.


### function updateOpaque

```cpp
void updateOpaque(
    const char * name,
    mama_fid_t fid,
    const void * value,
    size_t size
)
```


**Parameters**: 

  * **name** The name. 
  * **value** The new value. 
  * **fid** The field identifier. 
  * **size** The size of the opaque in bytes 


Update the value of an existing opaque field. If the field does not exist it is added.


### function updateOpaque

```cpp
void updateOpaque(
    const MamaFieldDescriptor * fieldDesc,
    const void * value,
    size_t size
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 
  * **size** The size of the opaque in bytes 


Update the value of an existing opaque field. If the field does not exist it is added.


### function updateDateTime

```cpp
void updateDateTime(
    const char * name,
    mama_fid_t fid,
    const MamaDateTime & value
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **value** The value. 


Update a date/time field. If the field does not exist it is added.


### function updateDateTime

```cpp
void updateDateTime(
    const MamaFieldDescriptor * fieldDesc,
    const MamaDateTime & value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing date/time field. If the field does not exist it is added.


### function updatePrice

```cpp
void updatePrice(
    const char * name,
    mama_fid_t fid,
    const MamaPrice & value
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **value** The value. 


Update a price field. If the field does not exist it is added.


### function updatePrice

```cpp
void updatePrice(
    const MamaFieldDescriptor * fieldDesc,
    const MamaPrice & value
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **value** The new value. 


Update the value of an existing price field. If the field does not exist it is added.


### function getType

```cpp
mamaMsgType getType(
    void 
) const
```


Get the message type. 


### function getMsgTypeName

```cpp
const char * getMsgTypeName(
    void 
) const
```


Get a human readable type name. 


### function getStatus

```cpp
mamaMsgStatus getStatus(
    void 
) const
```


Get the msg status. 


### function getMsgStatusString

```cpp
const char * getMsgStatusString(
    void 
) const
```


Get human readable message status. 


### function iterateFields

```cpp
void iterateFields(
    MamaMsgFieldIterator & iterator,
    const MamaDictionary * dictionary,
    void * closure
) const
```


Iterate over all the fields. 


### function toString

```cpp
const char * toString() const
```


**Return**: A string representation of the message. 

Return a const char * representation the message. The memory allocated by this method gets freed upon destroying the message or invoking [toString()](classWombat_1_1MamaMsg.html#function-tostring) again.


### function toJsonString

```cpp
const char * toJsonString() const
```


**Return**: A string representation of the message. 

Return a const char * json representation the message. The memory allocated by this method gets freed upon destroying the message or invoking [toString()](classWombat_1_1MamaMsg.html#function-tostring) again.


### function toJsonString

```cpp
const char * toJsonString(
    const MamaDictionary * dictionary
) const
```


**Return**: A string representation of the message. 

Return a const char * json representation the message. The memory allocated by this method gets freed upon destroying the message or invoking [toString()](classWombat_1_1MamaMsg.html#function-tostring) again.


### function toNormalizedString

```cpp
const char * toNormalizedString() const
```


**Return**: A string representation of the message. 

Return a const char * normalized representation the message. The memory allocated by this method gets freed upon destroying the message or invoking [toString()](classWombat_1_1MamaMsg.html#function-tostring) again.


### function getFieldAsString

```cpp
void getFieldAsString(
    const char * name,
    mama_fid_t fid,
    char * result,
    size_t maxResultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** Buffer to put result. 
  * **maxResultLen** Maximum size of buffer to put result. 


Obtain a string representation the field with the given fid. 


### function getFieldAsString

```cpp
void getFieldAsString(
    const MamaFieldDescriptor * fieldDesc,
    char * result,
    size_t maxResultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** Buffer to put result. 
  * **maxResultLen** Maximum size of buffer to put result. 


Obtain a string representation the field with the given fid. 


### function getField

```cpp
MamaMsgField * getField(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 


Obtain a the mamaMsgField with the given fid. 


### function getField

```cpp
MamaMsgField * getField(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


Obtain a the mamaMsgField with the given fid. 


### function tryField

```cpp
bool tryField(
    const char * name,
    mama_fid_t fid
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 


Test for the presence of the [MamaMsgField](classWombat_1_1MamaMsgField.html) with the given fid. This method does not return the field. 


### function tryField

```cpp
bool tryField(
    const MamaFieldDescriptor * fieldDesc
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 


Test for the presence of the [MamaMsgField](classWombat_1_1MamaMsgField.html) with the given field descriptor. This method does not return the field. 


### function tryField

```cpp
bool tryField(
    const char * name,
    mama_fid_t fid,
    MamaMsgField * result
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** The result (not modified if field not present) 


Try to obtain the [MamaMsgField](classWombat_1_1MamaMsgField.html) with the given fid. 


### function tryField

```cpp
bool tryField(
    const MamaFieldDescriptor * fieldDesc,
    MamaMsgField * result
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** The result (not modified if field not present) 


Try to obtain the [MamaMsgField](classWombat_1_1MamaMsgField.html) with the given field descriptor. 


### function tryFieldAsString

```cpp
bool tryFieldAsString(
    const char * name,
    mama_fid_t fid,
    char * result,
    size_t maxResultLen
) const
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** Buffer to put result. 
  * **maxResultLen** Maximum size of buffer to put result. 


**Return**: Whether the field was present. 

Try to obtain a string representation the field with the given fid. 


### function tryFieldAsString

```cpp
bool tryFieldAsString(
    const MamaFieldDescriptor * fieldDesc,
    char * result,
    size_t maxResultLen
) const
```


**Parameters**: 

  * **fieldDesc** The field descriptor 
  * **result** Buffer to put result. 
  * **maxResultLen** Maximum size of buffer to put result. 


**Return**: Whether the field was present. 

Try to obtain a string representation the field with the given fid. 


### function getByteBuffer

```cpp
void getByteBuffer(
    const void *& buffer,
    size_t & bufferLength
) const
```


**Parameters**: 

  * **buffer** The byte array containing the buffer 
  * **bufferLength** The length, in bytes of the returned buffer 


Get the underlying message as an array of bytes. The buffer still belongs to the underlying message so no attempt should be made to modify it.


### function detach

```cpp
MamaMsg * detach(
    void 
)
```


Normally the [Mama](classWombat_1_1Mama.html) API owns incoming mamaMsg objects and they go out of scope and are freed when the message callback returns. Calling this method from the message callback creates a new C++ wrapper for the underlying message and transfers responsibility for calling destroy() to the caller.

The caller must also delete the pointer returned by [detach()](classWombat_1_1MamaMsg.html#function-detach). Note that calling "delete msg.detach()" invokes destroy() so calling destroy is not necessary if the application calls delete. 


### function isFromInbox

```cpp
bool isFromInbox(
    void 
) const
```


Whether this message is the result of a request needing a response. 


### function getSeqNum

```cpp
mama_seqnum_t getSeqNum(
    void 
) const
```


### function getIsDefinitelyDuplicate

```cpp
bool getIsDefinitelyDuplicate(
    void 
) const
```


Return true if this message is definitely a duplicate message. This condition will not occur with the current feed handlers. 


### function getIsPossiblyDuplicate

```cpp
bool getIsPossiblyDuplicate(
    void 
) const
```


Return true if this message is possibly a duplicate message. This may occur in the event of a fault tolerant feed handler take over where the feed handler replays messages to prevent gaps. 


### function getIsPossiblyDelayed

```cpp
bool getIsPossiblyDelayed(
    void 
) const
```


Return true if the message is possibly delayed. This condition may be true during a fault-tolerant takeover. 


### function getIsDefinitelyDelayed

```cpp
bool getIsDefinitelyDelayed(
    void 
) const
```


Return true if the message is delayed. This condition may be true during a fault-tolerant takeover. 


### function getIsOutOfSequence

```cpp
bool getIsOutOfSequence(
    void 
) const
```


Return true when the FH sends the message out of sequence. 


### function setNewBuffer

```cpp
bool setNewBuffer(
    void * buffer,
    mama_size_t size
)
```


**Parameters**: 

  * **buffer** the new byte buffer 
  * **size** size of buffer 


**Return**: status 

Sets a new for an existing mamaMsg using the provided byte buffer. The application is responsible for destroying the message.


### function getNativeHandle

```cpp
void * getNativeHandle(
    void 
) const
```


Return the native middleware message handle. This is only intended for Wombat internal use. 


### function createFromMsg

```cpp
void createFromMsg(
    mamaMsg msg,
    bool destroyMsg =false
) const
```


Create the message from an existing mamaMsg 


### function setMsg

```cpp
void setMsg(
    mamaMsg msg
)
```


Set the message to a different underlying C message. Can be called multiple times on a single [MamaMsg](classWombat_1_1MamaMsg.html)


### function getUnderlyingMsg

```cpp
const mamaMsg & getUnderlyingMsg(
    void 
) const
```


Return const reference to underlying mamaMsg 


### function getUnderlyingMsg

```cpp
mamaMsg getUnderlyingMsg(
    void 
)
```


Return the underlying mamaMsg (non const) 


### function getPayloadType

```cpp
MAMAIgnoreDeprecatedOpen mamaPayloadType getPayloadType(
    void 
) const
```


**Return**: payloadType The payload type. 

Return the type of the payload message (wombat message or, if using a non-wombat message payload, RV or FAST message).


### function getNativeMsg

```cpp
MAMAIgnoreDeprecatedClose void * getNativeMsg(
    void 
)
```


**Return**: nativeMsg The resulting native handle. 

Get the native message structure for the underlying message 


### function begin

```cpp
MamaMsgField & begin(
    MamaMsgIterator & theIterator
) const
```


**Parameters**: 

  * **theiterator** iterator to be used 


**Return**: first [MamaMsgField](classWombat_1_1MamaMsgField.html)

Sets a iterator to be used with existing mamaMsg. The iterator is set to the first [MamaMsgField](classWombat_1_1MamaMsgField.html) of the mamaMsg


### function getReplyHandle

```cpp
mamaMsgReply getReplyHandle(
    void 
) const
```


Get a copy of the reply Handle 


### function destroyReplyHandle

```cpp
static void destroyReplyHandle(
    mamaMsgReply replyHandle
)
```


Destroy a copied reply Handle 


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100