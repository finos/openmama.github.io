---
title: mama/msg.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/msg.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(MAMACALLTYPE *)(const mamaMsg msg, const mamaMsgField field, void *closure) | **[mamaMsgIteratorCb](msg_8h.html#typedef-mamamsgiteratorcb)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAIgnoreDeprecatedOpen | **[MAMATypeDeprecated](msg_8h.html#function-mamatypedeprecated)**(mamaPayloadType , "mamaPayloadType has been deprecated, use dynamic loading instead!" ) |
| MAMAIgnoreDeprecatedClose MAMAIgnoreDeprecatedOpen MAMAExpDLL const char * | **[mamaPayload_convertToString](msg_8h.html#function-mamapayload-converttostring)**(mamaPayloadType payloadType) |
| MAMAIgnoreDeprecatedClose MAMAExpDLL mama_status | **[mamaMsg_create](msg_8h.html#function-mamamsg-create)**(mamaMsg * msg) |
| MAMAIgnoreDeprecatedOpen | **[MAMAExpDeprecatedDLL](msg_8h.html#function-mamaexpdeprecateddll)**("mamaMsg_createForPayload has been deprecated, use dynamic loading instead!" ) |
| MAMAIgnoreDeprecatedClose MAMAExpDLL mama_status | **[mamaMsg_createForPayloadBridge](msg_8h.html#function-mamamsg-createforpayloadbridge)**(mamaMsg * msg, mamaPayloadBridge payloadBridge) |
| MAMAExpDLL mama_status | **[mamaMsg_createForTemplate](msg_8h.html#function-mamamsg-createfortemplate)**(mamaMsg * msg, mama_u32_t templateId) |
| MAMAExpDLL mama_status | **[mamaMsg_copy](msg_8h.html#function-mamamsg-copy)**(mamaMsg src, mamaMsg * copy) |
| MAMAExpDLL mama_status | **[mamaMsg_getTempCopy](msg_8h.html#function-mamamsg-gettempcopy)**(mamaMsg src, mamaMsg * copy) |
| MAMAExpDLL mama_status | **[mamaMsg_clear](msg_8h.html#function-mamamsg-clear)**(mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaMsg_getSendSubject](msg_8h.html#function-mamamsg-getsendsubject)**(const mamaMsg msg, const char ** subject) |
| MAMAExpDLL mama_status | **[mamaMsg_destroy](msg_8h.html#function-mamamsg-destroy)**(mamaMsg msg) |
| MAMAIgnoreDeprecatedOpen MAMAExpDLL mama_status | **[mamaMsg_getPayloadType](msg_8h.html#function-mamamsg-getpayloadtype)**(mamaMsg msg, mamaPayloadType * payloadType) |
| MAMAIgnoreDeprecatedClose MAMAExpDLL mama_status | **[mamaMsg_getByteSize](msg_8h.html#function-mamamsg-getbytesize)**(const mamaMsg msg, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsg_addBool](msg_8h.html#function-mamamsg-addbool)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_bool_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addChar](msg_8h.html#function-mamamsg-addchar)**(mamaMsg msg, const char * name, mama_fid_t fid, char value) |
| MAMAExpDLL mama_status | **[mamaMsg_addI8](msg_8h.html#function-mamamsg-addi8)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_i8_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addU8](msg_8h.html#function-mamamsg-addu8)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_u8_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addI16](msg_8h.html#function-mamamsg-addi16)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_i16_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addU16](msg_8h.html#function-mamamsg-addu16)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_u16_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addI32](msg_8h.html#function-mamamsg-addi32)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_i32_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addU32](msg_8h.html#function-mamamsg-addu32)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_u32_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addI64](msg_8h.html#function-mamamsg-addi64)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_i64_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addU64](msg_8h.html#function-mamamsg-addu64)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_u64_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addF32](msg_8h.html#function-mamamsg-addf32)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_f32_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addF64](msg_8h.html#function-mamamsg-addf64)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_f64_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_addString](msg_8h.html#function-mamamsg-addstring)**(mamaMsg msg, const char * name, mama_fid_t fid, const char * value) |
| MAMAExpDLL mama_status | **[mamaMsg_addOpaque](msg_8h.html#function-mamamsg-addopaque)**(mamaMsg msg, const char * name, mama_fid_t fid, const void * value, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaMsg_addDateTime](msg_8h.html#function-mamamsg-adddatetime)**(mamaMsg msg, const char * name, mama_fid_t fid, const mamaDateTime value) |
| MAMAExpDLL mama_status | **[mamaMsg_addPrice](msg_8h.html#function-mamamsg-addprice)**(mamaMsg msg, const char * name, mama_fid_t fid, const mamaPrice value) |
| MAMAExpDLL mama_status | **[mamaMsg_addMsg](msg_8h.html#function-mamamsg-addmsg)**(mamaMsg msg, const char * name, mama_fid_t fid, const mamaMsg value) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorBool](msg_8h.html#function-mamamsg-addvectorbool)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_bool_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorChar](msg_8h.html#function-mamamsg-addvectorchar)**(mamaMsg msg, const char * name, mama_fid_t fid, const char value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorI8](msg_8h.html#function-mamamsg-addvectori8)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_i8_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorU8](msg_8h.html#function-mamamsg-addvectoru8)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_u8_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorI16](msg_8h.html#function-mamamsg-addvectori16)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_i16_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorU16](msg_8h.html#function-mamamsg-addvectoru16)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_u16_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorI32](msg_8h.html#function-mamamsg-addvectori32)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_i32_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorU32](msg_8h.html#function-mamamsg-addvectoru32)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_u32_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorI64](msg_8h.html#function-mamamsg-addvectori64)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_i64_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorU64](msg_8h.html#function-mamamsg-addvectoru64)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_u64_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorF32](msg_8h.html#function-mamamsg-addvectorf32)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_f32_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorF64](msg_8h.html#function-mamamsg-addvectorf64)**(mamaMsg msg, const char * name, mama_fid_t fid, const mama_f64_t value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorString](msg_8h.html#function-mamamsg-addvectorstring)**(mamaMsg msg, const char * name, mama_fid_t fid, const char * value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorMsg](msg_8h.html#function-mamamsg-addvectormsg)**(mamaMsg msg, const char * name, mama_fid_t fid, const mamaMsg value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorDateTime](msg_8h.html#function-mamamsg-addvectordatetime)**(mamaMsg msg, const char * name, mama_fid_t fid, const mamaDateTime value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_addVectorPrice](msg_8h.html#function-mamamsg-addvectorprice)**(mamaMsg msg, const char * name, mama_fid_t fid, const mamaPrice value[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateBool](msg_8h.html#function-mamamsg-updatebool)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_bool_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateChar](msg_8h.html#function-mamamsg-updatechar)**(mamaMsg msg, const char * name, mama_fid_t fid, char value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateI8](msg_8h.html#function-mamamsg-updatei8)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_i8_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateU8](msg_8h.html#function-mamamsg-updateu8)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_u8_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateI16](msg_8h.html#function-mamamsg-updatei16)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_i16_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateU16](msg_8h.html#function-mamamsg-updateu16)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_u16_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateI32](msg_8h.html#function-mamamsg-updatei32)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_i32_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateU32](msg_8h.html#function-mamamsg-updateu32)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_u32_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateI64](msg_8h.html#function-mamamsg-updatei64)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_i64_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateU64](msg_8h.html#function-mamamsg-updateu64)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_u64_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateF32](msg_8h.html#function-mamamsg-updatef32)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_f32_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateF64](msg_8h.html#function-mamamsg-updatef64)**(mamaMsg msg, const char * name, mama_fid_t fid, mama_f64_t value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateString](msg_8h.html#function-mamamsg-updatestring)**(mamaMsg msg, const char * name, mama_fid_t fid, const char * value) |
| MAMAExpDLL mama_status | **[mamaMsg_updateOpaque](msg_8h.html#function-mamamsg-updateopaque)**(mamaMsg msg, const char * name, mama_fid_t fid, const void * value, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaMsg_updateDateTime](msg_8h.html#function-mamamsg-updatedatetime)**(mamaMsg msg, const char * name, mama_fid_t fid, const mamaDateTime value) |
| MAMAExpDLL mama_status | **[mamaMsg_updatePrice](msg_8h.html#function-mamamsg-updateprice)**(mamaMsg msg, const char * name, mama_fid_t fid, const mamaPrice value) |
| MAMAExpDLL mama_status | **[mamaMsg_getBool](msg_8h.html#function-mamamsg-getbool)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_bool_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_applyMsg](msg_8h.html#function-mamamsg-applymsg)**(mamaMsg dest, mamaMsg src) |
| MAMAExpDLL mama_status | **[mamaMsg_getNativeMsg](msg_8h.html#function-mamamsg-getnativemsg)**(mamaMsg msg, void ** nativeMsg) |
| MAMAExpDLL mama_status | **[mamaMsg_getReplyHandle](msg_8h.html#function-mamamsg-getreplyhandle)**(mamaMsg msg, mamaMsgReply * replyHandle) |
| MAMAExpDLL mama_status | **[mamaMsg_setReplyHandle](msg_8h.html#function-mamamsg-setreplyhandle)**(mamaMsg msg, mamaMsgReply replyHandle) |
| MAMAExpDLL mama_status | **[mamaMsg_copyReplyHandle](msg_8h.html#function-mamamsg-copyreplyhandle)**(mamaMsgReply src, mamaMsgReply * copy) |
| MAMAExpDLL mama_status | **[mamaMsg_destroyReplyHandle](msg_8h.html#function-mamamsg-destroyreplyhandle)**(mamaMsgReply replyHandle) |
| MAMAExpDLL mama_status | **[mamaMsg_updateSubMsg](msg_8h.html#function-mamamsg-updatesubmsg)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mamaMsg subMsg) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorMsg](msg_8h.html#function-mamamsg-updatevectormsg)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mamaMsg msgList[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorString](msg_8h.html#function-mamamsg-updatevectorstring)**(mamaMsg msg, const char * fname, mama_fid_t fid, const char * strList[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorBool](msg_8h.html#function-mamamsg-updatevectorbool)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_bool_t boolList[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorChar](msg_8h.html#function-mamamsg-updatevectorchar)**(mamaMsg msg, const char * fname, mama_fid_t fid, const char charList[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorI8](msg_8h.html#function-mamamsg-updatevectori8)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_i8_t i8List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorU8](msg_8h.html#function-mamamsg-updatevectoru8)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_u8_t u8List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorI16](msg_8h.html#function-mamamsg-updatevectori16)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_i16_t i16List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorU16](msg_8h.html#function-mamamsg-updatevectoru16)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_u16_t u16List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorI32](msg_8h.html#function-mamamsg-updatevectori32)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_i32_t i32List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorU32](msg_8h.html#function-mamamsg-updatevectoru32)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_u32_t u32List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorI64](msg_8h.html#function-mamamsg-updatevectori64)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_i64_t i64List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorU64](msg_8h.html#function-mamamsg-updatevectoru64)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_u64_t u64List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorF32](msg_8h.html#function-mamamsg-updatevectorf32)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_f32_t f32List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorF64](msg_8h.html#function-mamamsg-updatevectorf64)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mama_f64_t f64List[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorPrice](msg_8h.html#function-mamamsg-updatevectorprice)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mamaPrice priceList[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_updateVectorTime](msg_8h.html#function-mamamsg-updatevectortime)**(mamaMsg msg, const char * fname, mama_fid_t fid, const mamaDateTime timeList[], mama_size_t numElements) |
| MAMAExpDLL mama_status | **[mamaMsg_getChar](msg_8h.html#function-mamamsg-getchar)**(const mamaMsg msg, const char * name, mama_fid_t fid, char * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getI8](msg_8h.html#function-mamamsg-geti8)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_i8_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getU8](msg_8h.html#function-mamamsg-getu8)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_u8_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getI16](msg_8h.html#function-mamamsg-geti16)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_i16_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getU16](msg_8h.html#function-mamamsg-getu16)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_u16_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getI32](msg_8h.html#function-mamamsg-geti32)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_i32_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getU32](msg_8h.html#function-mamamsg-getu32)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getI64](msg_8h.html#function-mamamsg-geti64)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_i64_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getU64](msg_8h.html#function-mamamsg-getu64)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_u64_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getF32](msg_8h.html#function-mamamsg-getf32)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_f32_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getF64](msg_8h.html#function-mamamsg-getf64)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_f64_t * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getString](msg_8h.html#function-mamamsg-getstring)**(const mamaMsg msg, const char * name, mama_fid_t fid, const char ** result) |
| MAMAExpDLL mama_status | **[mamaMsg_getOpaque](msg_8h.html#function-mamamsg-getopaque)**(const mamaMsg msg, const char * name, mama_fid_t fid, const void ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsg_getField](msg_8h.html#function-mamamsg-getfield)**(const mamaMsg msg, const char * name, mama_fid_t fid, mamaMsgField * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getDateTime](msg_8h.html#function-mamamsg-getdatetime)**(const mamaMsg msg, const char * name, mama_fid_t fid, mamaDateTime result) |
| MAMAExpDLL mama_status | **[mamaMsg_getDateTimeMSec](msg_8h.html#function-mamamsg-getdatetimemsec)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_u64_t * milliseconds) |
| MAMAExpDLL mama_status | **[mamaMsg_getDateTimeSeconds](msg_8h.html#function-mamamsg-getdatetimeseconds)**(const mamaMsg msg, const char * name, mama_fid_t fid, mama_f64_t * seconds) |
| MAMAExpDLL mama_status | **[mamaMsg_getPrice](msg_8h.html#function-mamamsg-getprice)**(const mamaMsg msg, const char * name, mama_fid_t fid, mamaPrice result) |
| MAMAExpDLL mama_status | **[mamaMsg_getMsg](msg_8h.html#function-mamamsg-getmsg)**(const mamaMsg msg, const char * name, mama_fid_t fid, mamaMsg * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorBool](msg_8h.html#function-mamamsg-getvectorbool)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_bool_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorChar](msg_8h.html#function-mamamsg-getvectorchar)**(const mamaMsg msg, const char * name, mama_fid_t fid, const char ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorI8](msg_8h.html#function-mamamsg-getvectori8)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_i8_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorU8](msg_8h.html#function-mamamsg-getvectoru8)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_u8_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorI16](msg_8h.html#function-mamamsg-getvectori16)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_i16_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorU16](msg_8h.html#function-mamamsg-getvectoru16)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_u16_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorI32](msg_8h.html#function-mamamsg-getvectori32)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_i32_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorU32](msg_8h.html#function-mamamsg-getvectoru32)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_u32_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorI64](msg_8h.html#function-mamamsg-getvectori64)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_i64_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorU64](msg_8h.html#function-mamamsg-getvectoru64)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_u64_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorF32](msg_8h.html#function-mamamsg-getvectorf32)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_f32_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorF64](msg_8h.html#function-mamamsg-getvectorf64)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mama_f64_t ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorString](msg_8h.html#function-mamamsg-getvectorstring)**(const mamaMsg msg, const char * name, mama_fid_t fid, const char *** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorDateTime](msg_8h.html#function-mamamsg-getvectordatetime)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mamaDateTime ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorPrice](msg_8h.html#function-mamamsg-getvectorprice)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mamaPrice ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getVectorMsg](msg_8h.html#function-mamamsg-getvectormsg)**(const mamaMsg msg, const char * name, mama_fid_t fid, const mamaMsg ** result, mama_size_t * resultLen) |
| MAMAExpDLL mama_status | **[mamaMsg_getNumFields](msg_8h.html#function-mamamsg-getnumfields)**(const mamaMsg msg, mama_size_t * numFields) |
| MAMAExpDLL const char * | **[mamaMsg_toString](msg_8h.html#function-mamamsg-tostring)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsg_toNormalizedString](msg_8h.html#function-mamamsg-tonormalizedstring)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsg_toJsonString](msg_8h.html#function-mamamsg-tojsonstring)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsg_toJsonStringWithDictionary](msg_8h.html#function-mamamsg-tojsonstringwithdictionary)**(const mamaMsg msg, const mamaDictionary dictionary) |
| MAMAIgnoreDeprecatedOpen | **[MAMAExpDeprecatedDLL](msg_8h.html#function-mamaexpdeprecateddll)**("mamaMsg_freeString has been deprecated - memory now managed by bridge" ) const |
| MAMAIgnoreDeprecatedClose MAMAExpDLL mama_status | **[mamaMsg_getEntitleCode](msg_8h.html#function-mamamsg-getentitlecode)**(const mamaMsg msg, mama_i32_t * code) |
| MAMAExpDLL mama_status | **[mamaMsg_getSeqNum](msg_8h.html#function-mamamsg-getseqnum)**(const mamaMsg msg, mama_seqnum_t * seqNum) |
| MAMAExpDLL mamaMsgType | **[mamaMsgType_typeForMsg](msg_8h.html#function-mamamsgtype-typeformsg)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsgType_stringForMsg](msg_8h.html#function-mamamsgtype-stringformsg)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsgType_stringForType](msg_8h.html#function-mamamsgtype-stringfortype)**(const mamaMsgType type) |
| MAMAExpDLL mama_status | **[mamaMsg_getFieldAsString](msg_8h.html#function-mamamsg-getfieldasstring)**(const mamaMsg msg, const char * fieldName, mama_fid_t fid, char * buf, mama_size_t length) |
| MAMAExpDLL mama_status | **[mamaMsg_iterateFields](msg_8h.html#function-mamamsg-iteratefields)**(const mamaMsg msg, mamaMsgIteratorCb callback, const mamaDictionary dict, void * closure) |
| MAMAExpDLL mama_status | **[mamaMsg_getPlatformError](msg_8h.html#function-mamamsg-getplatformerror)**(const mamaMsg msg, void ** error) |
| MAMAExpDLL int | **[mamaMsg_isFromInbox](msg_8h.html#function-mamamsg-isfrominbox)**(const mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaMsg_createFromByteBuffer](msg_8h.html#function-mamamsg-createfrombytebuffer)**(mamaMsg * msg, const void * buffer, mama_size_t bufferLength) |
| MAMAExpDLL mama_status | **[mamaMsg_getByteBuffer](msg_8h.html#function-mamamsg-getbytebuffer)**(const mamaMsg msg, const void ** buffer, mama_size_t * bufferLength) |
| MAMAExpDLL mama_status | **[mamaMsg_detach](msg_8h.html#function-mamamsg-detach)**(mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaMsg_getIsDefinitelyDuplicate](msg_8h.html#function-mamamsg-getisdefinitelyduplicate)**(mamaMsg msg, int * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getIsPossiblyDuplicate](msg_8h.html#function-mamamsg-getispossiblyduplicate)**(mamaMsg msg, int * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getIsPossiblyDelayed](msg_8h.html#function-mamamsg-getispossiblydelayed)**(mamaMsg msg, int * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getIsDefinitelyDelayed](msg_8h.html#function-mamamsg-getisdefinitelydelayed)**(mamaMsg msg, int * result) |
| MAMAExpDLL mama_status | **[mamaMsg_getIsOutOfSequence](msg_8h.html#function-mamamsg-getisoutofsequence)**(mamaMsg msg, int * result) |
| MAMAExpDLL mama_status | **[mamaMsg_setNewBuffer](msg_8h.html#function-mamamsg-setnewbuffer)**(mamaMsg msg, void * buffer, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaMsg_getNativeHandle](msg_8h.html#function-mamamsg-getnativehandle)**(const mamaMsg msg, void ** result) |
| MAMAExpDLL mama_status | **[mamaMsgIterator_create](msg_8h.html#function-mamamsgiterator-create)**(mamaMsgIterator * iterator, mamaDictionary dict) |
| MAMAExpDLL mama_status | **[mamaMsgIterator_associate](msg_8h.html#function-mamamsgiterator-associate)**(mamaMsgIterator iterator, mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaMsgIterator_setDict](msg_8h.html#function-mamamsgiterator-setdict)**(mamaMsgIterator iterator, mamaDictionary dict) |
| MAMAExpDLL mamaMsgField | **[mamaMsgIterator_next](msg_8h.html#function-mamamsgiterator-next)**(mamaMsgIterator iterator) |
| MAMAExpDLL mama_bool_t | **[mamaMsgIterator_hasNext](msg_8h.html#function-mamamsgiterator-hasnext)**(mamaMsgIterator iterator) |
| MAMAExpDLL mamaMsgField | **[mamaMsgIterator_begin](msg_8h.html#function-mamamsgiterator-begin)**(mamaMsgIterator iterator) |
| MAMAExpDLL mamaMsgField | **[mamaMsgIterator_end](msg_8h.html#function-mamamsgiterator-end)**(mamaMsgIterator iterator) |
| MAMAExpDLL mama_status | **[mamaMsgIterator_destroy](msg_8h.html#function-mamamsgiterator-destroy)**(mamaMsgIterator iterator) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| | **[mamaPayloadType](msg_8h.html#variable-mamapayloadtype)**  |
| MAMAIgnoreDeprecatedOpen const char | **[id](msg_8h.html#variable-id)**  |
| MAMAIgnoreDeprecatedOpen const char * | **[msgString](msg_8h.html#variable-msgstring)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ENTITLE_FIELD_NAME](msg_8h.html#define-entitle-field-name)**  |
|  | **[ENTITLE_FIELD_ID](msg_8h.html#define-entitle-field-id)**  |
|  | **[MAMA_PAYLOAD_ID_NULL](msg_8h.html#define-mama-payload-id-null)**  |
|  | **[MAMA_PAYLOAD_ID_UNKNOWN](msg_8h.html#define-mama-payload-id-unknown)**  |

## Types Documentation

### typedef mamaMsgIteratorCb

```cpp
typedef void(MAMACALLTYPE * mamaMsgIteratorCb) (const mamaMsg msg, const mamaMsgField field, void *closure);
```


**Parameters**: 

  * **msg** The message. 
  * **field** The field. 
  * **closure** The closure specified in mamaMsg_iterateFields(). 


Iterator callback method is invoked for each field in the message.



## Functions Documentation

### function MAMATypeDeprecated

```cpp
MAMAIgnoreDeprecatedOpen MAMATypeDeprecated(
    mamaPayloadType ,
    "mamaPayloadType has been deprecated,
    use dynamic loading instead!" 
)
```


Enum to reference the available MAMA message payloads. 


### function mamaPayload_convertToString

```cpp
MAMAIgnoreDeprecatedClose MAMAIgnoreDeprecatedOpen MAMAExpDLL const char * mamaPayload_convertToString(
    mamaPayloadType payloadType
)
```


**Parameters**: 

  * **payloadType** The payloadType to convert. 


Convert a mamaPayloadType value to a string. Do no attempt to free the string result.


### function mamaMsg_create

```cpp
MAMAIgnoreDeprecatedClose MAMAExpDLL mama_status mamaMsg_create(
    mamaMsg * msg
)
```


**Parameters**: 

  * **msg** The location of a mamaMsg where to store the result. 


Create a mamaMsg.


### function MAMAExpDeprecatedDLL

```cpp
MAMAIgnoreDeprecatedOpen MAMAExpDeprecatedDLL(
    "mamaMsg_createForPayload has been deprecated,
    use dynamic loading instead!" 
)
```


**Parameters**: 

  * **msg** The location of a mamaMsg where to store the result. 
  * **id** The identifier of the payload to be used. 


**Deprecated**: 

This has been deprecated in favor of dynamic loading. 

Create a mamaMsg.


### function mamaMsg_createForPayloadBridge

```cpp
MAMAIgnoreDeprecatedClose MAMAExpDLL mama_status mamaMsg_createForPayloadBridge(
    mamaMsg * msg,
    mamaPayloadBridge payloadBridge
)
```


**Parameters**: 

  * **msg** The location of a mamaMsg where to store the result. 
  * **id** The payload bridge to be used. 


Create a mamaMsg.


### function mamaMsg_createForTemplate

```cpp
MAMAExpDLL mama_status mamaMsg_createForTemplate(
    mamaMsg * msg,
    mama_u32_t templateId
)
```


**Parameters**: 

  * **msg** The location of a mamaMsg where to store the result. 
  * **templateID** The wombatMsg to encapsulate. 


Create a mamaMsg for a particular template ID


### function mamaMsg_copy

```cpp
MAMAExpDLL mama_status mamaMsg_copy(
    mamaMsg src,
    mamaMsg * copy
)
```


**Parameters**: 

  * **src** The message to copy. 
  * **copy** A pointer to the destination message. 


Copy a mamaMsg. If mamaMsg_create() has not been called for for the destination message object then this will be done by the function.


### function mamaMsg_getTempCopy

```cpp
MAMAExpDLL mama_status mamaMsg_getTempCopy(
    mamaMsg src,
    mamaMsg * copy
)
```


**Parameters**: 

  * **src** The message to copy. 
  * **copy** A pointer to the destination message. 


Get a temporary copy of the mamaMsg so to be able to modify the content. If the message can be modified directly, the message itself is returned. If the message cannot be modified then only one copy is performed the first time this function is called and then the same copy is returned when this function is called again. The copy is destroyed when the original message is destroyed.


### function mamaMsg_clear

```cpp
MAMAExpDLL mama_status mamaMsg_clear(
    mamaMsg msg
)
```


**Parameters**: 

  * **msg** The mamaMsg to clear. 


Clear a msg. All fields are removed.


### function mamaMsg_getSendSubject

```cpp
MAMAExpDLL mama_status mamaMsg_getSendSubject(
    const mamaMsg msg,
    const char ** subject
)
```


**Parameters**: 

  * **src** The message to copy. 
  * **copy** A pointer to the destination message. 


TIB/RV only. Get the TIB/RV send subject from the message. For other message types MAMA_STATUS_NOT_IMPLEMENTED will be returned.


### function mamaMsg_destroy

```cpp
MAMAExpDLL mama_status mamaMsg_destroy(
    mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


Destroy a message and free any resources associated with it.


### function mamaMsg_getPayloadType

```cpp
MAMAIgnoreDeprecatedOpen MAMAExpDLL mama_status mamaMsg_getPayloadType(
    mamaMsg msg,
    mamaPayloadType * payloadType
)
```


**Parameters**: 

  * **msg** The message. 
  * **payloadType** The payload type. 


Get the type of the message payload.


### function mamaMsg_getByteSize

```cpp
MAMAIgnoreDeprecatedClose MAMAExpDLL mama_status mamaMsg_getByteSize(
    const mamaMsg msg,
    mama_size_t * size
)
```


**Parameters**: 

  * **msg** The MAMA message 
  * **size** (out) The size of the message in bytes 


**Return**: Resulting status of the call 

Get the size of the underlying message in bytes. Only works for tibrvMsg and wombatmsg types.


### function mamaMsg_addBool

```cpp
MAMAExpDLL mama_status mamaMsg_addBool(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_bool_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new bool field.


### function mamaMsg_addChar

```cpp
MAMAExpDLL mama_status mamaMsg_addChar(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    char value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new char field.


### function mamaMsg_addI8

```cpp
MAMAExpDLL mama_status mamaMsg_addI8(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i8_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new 8 bit signed int field.


### function mamaMsg_addU8

```cpp
MAMAExpDLL mama_status mamaMsg_addU8(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u8_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new 8 bit unsigned int field.


### function mamaMsg_addI16

```cpp
MAMAExpDLL mama_status mamaMsg_addI16(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i16_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new 16 bit signed int field.


### function mamaMsg_addU16

```cpp
MAMAExpDLL mama_status mamaMsg_addU16(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u16_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new 16 bit unsigned int field.


### function mamaMsg_addI32

```cpp
MAMAExpDLL mama_status mamaMsg_addI32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i32_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new 32 bit unsigned int field.


### function mamaMsg_addU32

```cpp
MAMAExpDLL mama_status mamaMsg_addU32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u32_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new 32 bit signed int field.


### function mamaMsg_addI64

```cpp
MAMAExpDLL mama_status mamaMsg_addI64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i64_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new I64 field.


### function mamaMsg_addU64

```cpp
MAMAExpDLL mama_status mamaMsg_addU64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u64_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new U64 field.


### function mamaMsg_addF32

```cpp
MAMAExpDLL mama_status mamaMsg_addF32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_f32_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new float (f32) field.


### function mamaMsg_addF64

```cpp
MAMAExpDLL mama_status mamaMsg_addF64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_f64_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a new f64 field.


### function mamaMsg_addString

```cpp
MAMAExpDLL mama_status mamaMsg_addString(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const char * value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a const char * field.


### function mamaMsg_addOpaque

```cpp
MAMAExpDLL mama_status mamaMsg_addOpaque(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const void * value,
    mama_size_t size
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 
  * **size** The size of the opaque in bytes 


Add an opaque field.


### function mamaMsg_addDateTime

```cpp
MAMAExpDLL mama_status mamaMsg_addDateTime(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaDateTime value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a MAMA date/time field.


### function mamaMsg_addPrice

```cpp
MAMAExpDLL mama_status mamaMsg_addPrice(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaPrice value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Add a MAMA price field.


### function mamaMsg_addMsg

```cpp
MAMAExpDLL mama_status mamaMsg_addMsg(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaMsg value
)
```


**Parameters**: 

  * **msg** The message to which the field is being added. 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier 
  * **value** The value of the field


**Return**: mama_status MAMA_STATUS_OK if the function executes successfully 

Add a mamaMsg object to the message.


### function mamaMsg_addVectorBool

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorBool(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_bool_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of booleans. 
  * **numElements** The number of elements in the array. 


Add an array of booleans to the message.


### function mamaMsg_addVectorChar

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorChar(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const char value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of characters. 
  * **numElements** The number of elements in the array. 


Add an array of characters to the message.


### function mamaMsg_addVectorI8

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorI8(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_i8_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of signed 8 bit integers. 
  * **numElements** The number of elements in the array. 


Add an array of signed 8 bit integers to the message.


### function mamaMsg_addVectorU8

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorU8(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_u8_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of unsigned 8 bit integers. 
  * **numElements** The number of elements in the array. 


Add an array of unsigned 8 bit integers to the message.


### function mamaMsg_addVectorI16

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorI16(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_i16_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of signed 16 bit integers. 
  * **numElements** The number of elements in the array. 


Add an array of signed 16 bit integers to the message.


### function mamaMsg_addVectorU16

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorU16(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_u16_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of unsigned 16 bit integers. 
  * **numElements** The number of elements in the array. 


Add an array of unsigned 16 bit integers to the message.


### function mamaMsg_addVectorI32

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorI32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_i32_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of signed 32 bit integers. 
  * **numElements** The number of elements in the array. 


Add an array of signed 32 bit integers to the message.


### function mamaMsg_addVectorU32

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorU32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_u32_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of unsigned 32 bit integers. 
  * **numElements** The number of elements in the array. 


Add an array of unsigned 32 bit integers to the message.


### function mamaMsg_addVectorI64

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorI64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_i64_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of signed 64 bit integers. 
  * **numElements** The number of elements in the array. 


Add an array of signed 64 bit integers to the message.


### function mamaMsg_addVectorU64

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorU64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_u64_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of unsigned 64 bit integers. 
  * **numElements** The number of elements in the array. 


Add an array of unsigned 64 bit integers to the message.


### function mamaMsg_addVectorF32

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorF32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_f32_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of 32 bit floating point numbers. 
  * **numElements** The number of elements in the array. 


Add an array of 32 bit floating point numbers to the message.


### function mamaMsg_addVectorF64

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorF64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_f64_t value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of 64 bit floating point numbers. 
  * **numElements** The number of elements in the array. 


Add an array of 64 bit floating point numbers to the message.


### function mamaMsg_addVectorString

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorString(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const char * value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of strings (char*). 
  * **numElements** The number of elements in the array. 


Add an array of strings (char*) to the message.


### function mamaMsg_addVectorMsg

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorMsg(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaMsg value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message to which the field is being added. 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier 
  * **value[]** The value of the field. 
  * **numElements** The number of elements in the mamaMsg array.


**Return**: mama_status MAMA_STATUS_OK if the function returns successfully. 

Add an array of mamaMsg objects to the message.


### function mamaMsg_addVectorDateTime

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorDateTime(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaDateTime value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of timestamps. 
  * **numElements** The number of elements in the array. 


Add an array of timestamps to the message.


### function mamaMsg_addVectorPrice

```cpp
MAMAExpDLL mama_status mamaMsg_addVectorPrice(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaPrice value[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The mamaMsg 
  * **name** The name identifier for the field (optional). 
  * **fid** The field identifier. 
  * **value[]** Array of values. 
  * **numElements** The number of elements in the array. 


Add an array of prices to the message.


### function mamaMsg_updateBool

```cpp
MAMAExpDLL mama_status mamaMsg_updateBool(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_bool_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing bool field. If the field does not exist it is added.


### function mamaMsg_updateChar

```cpp
MAMAExpDLL mama_status mamaMsg_updateChar(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    char value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing char field. If the field does not exist it is added.


### function mamaMsg_updateI8

```cpp
MAMAExpDLL mama_status mamaMsg_updateI8(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i8_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing I8 field. If the field does not exist it is added.


### function mamaMsg_updateU8

```cpp
MAMAExpDLL mama_status mamaMsg_updateU8(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u8_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing U8 field. If the field does not exist it is added.


### function mamaMsg_updateI16

```cpp
MAMAExpDLL mama_status mamaMsg_updateI16(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i16_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing I16 field. If the field does not exist it is added.


### function mamaMsg_updateU16

```cpp
MAMAExpDLL mama_status mamaMsg_updateU16(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u16_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing U16 field. If the field does not exist it is added.


### function mamaMsg_updateI32

```cpp
MAMAExpDLL mama_status mamaMsg_updateI32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i32_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing I32 field. If the field does not exist it is added.


### function mamaMsg_updateU32

```cpp
MAMAExpDLL mama_status mamaMsg_updateU32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u32_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing U32 field. If the field does not exist it is added.


### function mamaMsg_updateI64

```cpp
MAMAExpDLL mama_status mamaMsg_updateI64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i64_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing I64 field. If the field does not exist it is added.


### function mamaMsg_updateU64

```cpp
MAMAExpDLL mama_status mamaMsg_updateU64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u64_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing U64 field. If the field does not exist it is added.


### function mamaMsg_updateF32

```cpp
MAMAExpDLL mama_status mamaMsg_updateF32(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_f32_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing float field. If the field does not exist it is added.


### function mamaMsg_updateF64

```cpp
MAMAExpDLL mama_status mamaMsg_updateF64(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_f64_t value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing f64 field. If the field does not exist it is added.


### function mamaMsg_updateString

```cpp
MAMAExpDLL mama_status mamaMsg_updateString(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const char * value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The new value. 


Update the value of an existing const char* field. If the field does not exist it is added.


### function mamaMsg_updateOpaque

```cpp
MAMAExpDLL mama_status mamaMsg_updateOpaque(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const void * value,
    mama_size_t size
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 
  * **size** The size of the opaque in bytes 


Update an opaque field.


### function mamaMsg_updateDateTime

```cpp
MAMAExpDLL mama_status mamaMsg_updateDateTime(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaDateTime value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Update a MAMA date/time field.


### function mamaMsg_updatePrice

```cpp
MAMAExpDLL mama_status mamaMsg_updatePrice(
    mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaPrice value
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **value** The value. 


Update a MAMA price field.


### function mamaMsg_getBool

```cpp
MAMAExpDLL mama_status mamaMsg_getBool(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_bool_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get a bool field.


### function mamaMsg_applyMsg

```cpp
MAMAExpDLL mama_status mamaMsg_applyMsg(
    mamaMsg dest,
    mamaMsg src
)
```


**Parameters**: 

  * **dest** The message to update. 
  * **src** The source messages. 


Apply the contents of one message to another as updates.


### function mamaMsg_getNativeMsg

```cpp
MAMAExpDLL mama_status mamaMsg_getNativeMsg(
    mamaMsg msg,
    void ** nativeMsg
)
```


**Parameters**: 

  * **msg** The message 
  * **nativeMsg** The resulting native handle. 


**Return**: mama_status Returns MAMA_STATUS_OK if the call was successful. 

Get the native message structure for the underlying message This function is for internal NYSE Technologies use only.


### function mamaMsg_getReplyHandle

```cpp
MAMAExpDLL mama_status mamaMsg_getReplyHandle(
    mamaMsg msg,
    mamaMsgReply * replyHandle
)
```


**Parameters**: 

  * **msg** The message 
  * **replyHandle** The resulting reply handle. 


**Return**: mama_status Returns MAMA_STATUS_OK if the call was successful. 

Get the reply handle for the message and increments the reference count for the handle.


### function mamaMsg_setReplyHandle

```cpp
MAMAExpDLL mama_status mamaMsg_setReplyHandle(
    mamaMsg msg,
    mamaMsgReply replyHandle
)
```


**Parameters**: 

  * **msg** The message 
  * **replyHandle** The reply handle for this message. 


**Return**: mama_status Returns MAMA_STATUS_OK if the call was successful. 

Set the reply handle for the message and increments the reference count for the handle.


### function mamaMsg_copyReplyHandle

```cpp
MAMAExpDLL mama_status mamaMsg_copyReplyHandle(
    mamaMsgReply src,
    mamaMsgReply * copy
)
```


**Parameters**: 

  * **src** The reply handler to copy. 
  * **copy** A pointer to the destination reply handle. 


**Return**: mama_status Returns MAMA_STATUS_OK if the call was successful. 

Create a new copy of the src reply handle.


### function mamaMsg_destroyReplyHandle

```cpp
MAMAExpDLL mama_status mamaMsg_destroyReplyHandle(
    mamaMsgReply replyHandle
)
```


**Parameters**: 

  * **replyHandle** The reply handle for this message. 


**Return**: mama_status Returns MAMA_STATUS_OK if the call was successful. 

Destroys a reply handle. 


### function mamaMsg_updateSubMsg

```cpp
MAMAExpDLL mama_status mamaMsg_updateSubMsg(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mamaMsg subMsg
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **subMsg** The new value. 


Update a sub-message field.


### function mamaMsg_updateVectorMsg

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorMsg(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mamaMsg msgList[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **msgList** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector message field.


### function mamaMsg_updateVectorString

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorString(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const char * strList[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **strList** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector string field.


### function mamaMsg_updateVectorBool

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorBool(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_bool_t boolList[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **boolList** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector bool field.


### function mamaMsg_updateVectorChar

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorChar(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const char charList[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **charList** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector char field.


### function mamaMsg_updateVectorI8

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorI8(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_i8_t i8List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **i8List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector I8 field.


### function mamaMsg_updateVectorU8

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorU8(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_u8_t u8List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **u8List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector U8 field.


### function mamaMsg_updateVectorI16

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorI16(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_i16_t i16List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **i16List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector I16 field.


### function mamaMsg_updateVectorU16

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorU16(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_u16_t u16List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **u16List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector U16 field.


### function mamaMsg_updateVectorI32

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorI32(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_i32_t i32List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **i32List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector I32 field.


### function mamaMsg_updateVectorU32

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorU32(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_u32_t u32List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **u32List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector U32 field.


### function mamaMsg_updateVectorI64

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorI64(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_i64_t i64List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **i64List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector I64 field.


### function mamaMsg_updateVectorU64

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorU64(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_u64_t u64List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **u64List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector U64 field.


### function mamaMsg_updateVectorF32

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorF32(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_f32_t f32List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **f32List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector F32 field.


### function mamaMsg_updateVectorF64

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorF64(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mama_f64_t f64List[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **f64List** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector F64 field.


### function mamaMsg_updateVectorPrice

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorPrice(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mamaPrice priceList[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **priceList** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector price field.


### function mamaMsg_updateVectorTime

```cpp
MAMAExpDLL mama_status mamaMsg_updateVectorTime(
    mamaMsg msg,
    const char * fname,
    mama_fid_t fid,
    const mamaDateTime timeList[],
    mama_size_t numElements
)
```


**Parameters**: 

  * **msg** The message. 
  * **fname** The name 
  * **fid** The field identifier 
  * **timeList** The new value. 
  * **numElements** the number of elements in the vector 


Update a vector mamaDateTime field.


### function mamaMsg_getChar

```cpp
MAMAExpDLL mama_status mamaMsg_getChar(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    char * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get a char field.


### function mamaMsg_getI8

```cpp
MAMAExpDLL mama_status mamaMsg_getI8(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i8_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get a I8, signed 8 bit integer, field.


### function mamaMsg_getU8

```cpp
MAMAExpDLL mama_status mamaMsg_getU8(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u8_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get an unsigned 8-bit integer field


### function mamaMsg_getI16

```cpp
MAMAExpDLL mama_status mamaMsg_getI16(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i16_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get a I16, signed 16 bit integer, field.


### function mamaMsg_getU16

```cpp
MAMAExpDLL mama_status mamaMsg_getU16(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u16_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get an unsigned 16-bit integer field


### function mamaMsg_getI32

```cpp
MAMAExpDLL mama_status mamaMsg_getI32(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i32_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get a I32, signed 32 bit integer, field.


### function mamaMsg_getU32

```cpp
MAMAExpDLL mama_status mamaMsg_getU32(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u32_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get an unsigned 32-bit integer field


### function mamaMsg_getI64

```cpp
MAMAExpDLL mama_status mamaMsg_getI64(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_i64_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get a I64, signed 64 bit integer, field.


### function mamaMsg_getU64

```cpp
MAMAExpDLL mama_status mamaMsg_getU64(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u64_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get an unsigned 64-bit integer field


### function mamaMsg_getF32

```cpp
MAMAExpDLL mama_status mamaMsg_getF32(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_f32_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **result** (out) The double value. 


Get a float (f32) field.


### function mamaMsg_getF64

```cpp
MAMAExpDLL mama_status mamaMsg_getF64(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_f64_t * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name. 
  * **fid** The field identifier. 
  * **result** (out) The double value. 


Get a f64 field.


### function mamaMsg_getString

```cpp
MAMAExpDLL mama_status mamaMsg_getString(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const char ** result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) the string value. 


Get a const char * field.


### function mamaMsg_getOpaque

```cpp
MAMAExpDLL mama_status mamaMsg_getOpaque(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const void ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** (out) The opaque value. 
  * **size** (out) Length in bytes of the opaque field. 


Get an opaque field.


### function mamaMsg_getField

```cpp
MAMAExpDLL mama_status mamaMsg_getField(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mamaMsgField * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result. The result contains the reusable field object of the mamaMsg object. Applications calling this method will receive the same reusable object for repeated calls on same mamaMsg object. 


Get a MAMA msg field.


### function mamaMsg_getDateTime

```cpp
MAMAExpDLL mama_status mamaMsg_getDateTime(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mamaDateTime result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get a MAMA date/time field.


### function mamaMsg_getDateTimeMSec

```cpp
MAMAExpDLL mama_status mamaMsg_getDateTimeMSec(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_u64_t * milliseconds
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **milliseconds** (out) Pointer to the value in milliseconds 


Get the value of a MAMA date/time field in milliseconds


### function mamaMsg_getDateTimeSeconds

```cpp
MAMAExpDLL mama_status mamaMsg_getDateTimeSeconds(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mama_f64_t * seconds
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **seconds** (out) Pointer to the value in seconds as a double 


Get the value of a MAMA date/time field in seconds as a double


### function mamaMsg_getPrice

```cpp
MAMAExpDLL mama_status mamaMsg_getPrice(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mamaPrice result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The name 
  * **fid** The field identifier 
  * **result** (out) Pointer to the result 


Get a MAMA price field.


### function mamaMsg_getMsg

```cpp
MAMAExpDLL mama_status mamaMsg_getMsg(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    mamaMsg * result
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. result when the method returns.. 


Get a submessage.


### function mamaMsg_getVectorBool

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorBool(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_bool_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of booleans.


### function mamaMsg_getVectorChar

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorChar(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const char ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of chars.


### function mamaMsg_getVectorI8

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorI8(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_i8_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of signed 8 bit integers.


### function mamaMsg_getVectorU8

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorU8(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_u8_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of unsigned 8 bit integers.


### function mamaMsg_getVectorI16

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorI16(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_i16_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of signed 16 bit integers.


### function mamaMsg_getVectorU16

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorU16(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_u16_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of unsigned 16 bit integers.


### function mamaMsg_getVectorI32

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorI32(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_i32_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of signed 32 bit integers.


### function mamaMsg_getVectorU32

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorU32(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_u32_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of unsigned 32 bit integers.


### function mamaMsg_getVectorI64

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorI64(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_i64_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of signed 64 bit integers.


### function mamaMsg_getVectorU64

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorU64(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_u64_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of unsigned 64 bit integers.


### function mamaMsg_getVectorF32

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorF32(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_f32_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of 32 bit floating point numbers.


### function mamaMsg_getVectorF64

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorF64(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mama_f64_t ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of 64 bit floating point numbers.


### function mamaMsg_getVectorString

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorString(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const char *** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of strings (char*).


### function mamaMsg_getVectorDateTime

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorDateTime(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaDateTime ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of timestamps.


### function mamaMsg_getVectorPrice

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorPrice(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaPrice ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of prices.


### function mamaMsg_getVectorMsg

```cpp
MAMAExpDLL mama_status mamaMsg_getVectorMsg(
    const mamaMsg msg,
    const char * name,
    mama_fid_t fid,
    const mamaMsg ** result,
    mama_size_t * resultLen
)
```


**Parameters**: 

  * **msg** The message. 
  * **name** The field name. 
  * **fid** The field identifier. 
  * **result** A pointer to the result. 
  * **resultLen** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of submessages.


### function mamaMsg_getNumFields

```cpp
MAMAExpDLL mama_status mamaMsg_getNumFields(
    const mamaMsg msg,
    mama_size_t * numFields
)
```


**Parameters**: 

  * **msg** The message. 
  * **numFields** (out) The number of fields in the message. 


Returns the total number of fields in the message. Sub-messages count as a single field.


### function mamaMsg_toString

```cpp
MAMAExpDLL const char * mamaMsg_toString(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


**Return**: A string representation of the message. 

Return a const char * representation the message. Memory is owned by the underlying bridge.


### function mamaMsg_toNormalizedString

```cpp
MAMAExpDLL const char * mamaMsg_toNormalizedString(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


**Return**: A string representation of the message. 

Return a const char * representation the message. Memory is owned by the mamaMsg. The string format will be standard across all payload types.


### function mamaMsg_toJsonString

```cpp
MAMAExpDLL const char * mamaMsg_toJsonString(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


**Return**: A json string representation of the message. 

Return a const char * representation the message in JSON format. Memory is owned by the mamaMsg.


### function mamaMsg_toJsonStringWithDictionary

```cpp
MAMAExpDLL const char * mamaMsg_toJsonStringWithDictionary(
    const mamaMsg msg,
    const mamaDictionary dictionary
)
```


**Parameters**: 

  * **msg** The message. 
  * **msg** The dictionary to use when resolving field names. 


**Return**: A json string representation of the message. 

Return a const char * representation the message in JSON format. Memory is owned by the mamaMsg.


### function MAMAExpDeprecatedDLL

```cpp
MAMAIgnoreDeprecatedOpen MAMAExpDeprecatedDLL(
    "mamaMsg_freeString has been deprecated - memory now managed by bridge" 
) const
```


**Parameters**: 

  * **msg** The message. 
  * **msgString** The string allocated by mamaMsg_toString 


Free the memory allocated by mamaMsg_toString [deprecated].


### function mamaMsg_getEntitleCode

```cpp
MAMAIgnoreDeprecatedClose MAMAExpDLL mama_status mamaMsg_getEntitleCode(
    const mamaMsg msg,
    mama_i32_t * code
)
```


**Parameters**: 

  * **msg** The message. 
  * **code** (out) The entitle code 


Get the entitle code for this message. The result defaults to 0 (no entitlement) if the field is not present.


### function mamaMsg_getSeqNum

```cpp
MAMAExpDLL mama_status mamaMsg_getSeqNum(
    const mamaMsg msg,
    mama_seqnum_t * seqNum
)
```


**Parameters**: 

  * **msg** The message. 
  * **code** (out) The sequence number. 


Get the sequence number for this message if available. The result defaults to 0 and MAMA_STATUS_NOT_FOUND retuned if the field is not present.


### function mamaMsgType_typeForMsg

```cpp
MAMAExpDLL mamaMsgType mamaMsgType_typeForMsg(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


**Return**: The type. 

Extract the type from the supplied message.


### function mamaMsgType_stringForMsg

```cpp
MAMAExpDLL const char * mamaMsgType_stringForMsg(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


**Return**: The type name. 

Return the type name.


### function mamaMsgType_stringForType

```cpp
MAMAExpDLL const char * mamaMsgType_stringForType(
    const mamaMsgType type
)
```


**Parameters**: 

  * **type** The message. 


**Return**: The type name. 

Return the type name.


### function mamaMsg_getFieldAsString

```cpp
MAMAExpDLL mama_status mamaMsg_getFieldAsString(
    const mamaMsg msg,
    const char * fieldName,
    mama_fid_t fid,
    char * buf,
    mama_size_t length
)
```


**Parameters**: 

  * **msg** The message. 
  * **fieldName** The field name. 
  * **fid** The field identifier. 
  * **buf** The buffer where the resulting string will be copied. 
  * **length** The length of the caller supplied buffer. 


Convert the value of the specified field to a string. Caller must provide a buffer for the value.


### function mamaMsg_iterateFields

```cpp
MAMAExpDLL mama_status mamaMsg_iterateFields(
    const mamaMsg msg,
    mamaMsgIteratorCb callback,
    const mamaDictionary dict,
    void * closure
)
```


**Parameters**: 

  * **msg** The message. 
  * **callback** The msgIteratorCb to invoke. 
  * **dict** The dictionary. 
  * **closure** The user specified closure passed to the callback. 


Invoke the specified callback for each field in the message.


### function mamaMsg_getPlatformError

```cpp
MAMAExpDLL mama_status mamaMsg_getPlatformError(
    const mamaMsg msg,
    void ** error
)
```


**Parameters**: 

  * **msg** The message. 
  * **error** (out) The platform dependent result. 


Return the middleware specific platform error. When a mamaSubscription_ method returns MAMA_STATUS_PLATFORM the error will be the result from the underlying platform.


### function mamaMsg_isFromInbox

```cpp
MAMAExpDLL int mamaMsg_isFromInbox(
    const mamaMsg msg
)
```


Return true if this message was sent from a client's inbox. 


### function mamaMsg_createFromByteBuffer

```cpp
MAMAExpDLL mama_status mamaMsg_createFromByteBuffer(
    mamaMsg * msg,
    const void * buffer,
    mama_size_t bufferLength
)
```


**Parameters**: 

  * **msg** The mamaMsg object 
  * **buffer** The byte array containing the wire format of the message 
  * **bufferLength** The length, in bytes, of the supplied buffer


**Return**: mama_status The outcome of the operation 

Create a mamaMsg from the provided byte buffer. The application is responsible for destroying the message. In this function a copy of the buffer isn't made and the client must maintain it until after the message has been destroyed using the mamaMsg_destroy function. The function can determine from the buffer whether it is a wombatmsg or the native format for the transport being used.

Any transport differences are detailed below.

rv: The bufferLength parameter is not required.


### function mamaMsg_getByteBuffer

```cpp
MAMAExpDLL mama_status mamaMsg_getByteBuffer(
    const mamaMsg msg,
    const void ** buffer,
    mama_size_t * bufferLength
)
```


**Parameters**: 

  * **msg** The mamaMsg object 
  * **buffer** The byte array containing the message wire format 
  * **bufferLength** The length, in bytes, of the returned buffer


**Return**: mama_status The outcome of the operation 

Return the internal message buffer as an array of bytes which is suitable for writing to a file. Do not modify the returned byte buffer as this is the internal message buffer and remains part of the message until it is destroyed. The buffer will be written to the address supplied by the client. The buffer will contain the wire format of the underlying message implementation but does not contain delivery information such as source, topic etc.


### function mamaMsg_detach

```cpp
MAMAExpDLL mama_status mamaMsg_detach(
    mamaMsg msg
)
```


Normally the Mama API owns incoming mamaMsg objects and they go out of scope when the message callback returns. Calling this method from the message callback transfers ownership, and responsibility for calling mamaMsg_destroy() to the caller. 


### function mamaMsg_getIsDefinitelyDuplicate

```cpp
MAMAExpDLL mama_status mamaMsg_getIsDefinitelyDuplicate(
    mamaMsg msg,
    int * result
)
```


Return true if this message is definitely a duplicate message. This condition will not occur with the current feed handlers. 


### function mamaMsg_getIsPossiblyDuplicate

```cpp
MAMAExpDLL mama_status mamaMsg_getIsPossiblyDuplicate(
    mamaMsg msg,
    int * result
)
```


Return true if this message is possibly a duplicate message. This may occur in the event of a fault tolerant feed handler take over where the feed handler replays messages to prevent gaps. 


### function mamaMsg_getIsPossiblyDelayed

```cpp
MAMAExpDLL mama_status mamaMsg_getIsPossiblyDelayed(
    mamaMsg msg,
    int * result
)
```


Return true if the message is possibly delayed. This condition may be true during a fault-tolerant take over. 


### function mamaMsg_getIsDefinitelyDelayed

```cpp
MAMAExpDLL mama_status mamaMsg_getIsDefinitelyDelayed(
    mamaMsg msg,
    int * result
)
```


Return true if the message is delayed. This condition may be true during a faul tolerant take over. 


### function mamaMsg_getIsOutOfSequence

```cpp
MAMAExpDLL mama_status mamaMsg_getIsOutOfSequence(
    mamaMsg msg,
    int * result
)
```


Return true when the FH sends the message out of sequence. 


### function mamaMsg_setNewBuffer

```cpp
MAMAExpDLL mama_status mamaMsg_setNewBuffer(
    mamaMsg msg,
    void * buffer,
    mama_size_t size
)
```


**Parameters**: 

  * **msg** The mamaMsg that will receive the new buffer. 
  * **buffer** The new buffer to use for this message. 
  * **size** The size of the buffer. 


Set a new buffer for an existing mamaMsg. This approach is faster than creating a new message for buffers as the message can reuse memory allocated during previous use.


### function mamaMsg_getNativeHandle

```cpp
MAMAExpDLL mama_status mamaMsg_getNativeHandle(
    const mamaMsg msg,
    void ** result
)
```


Get the native middleware message handle. This is only intended for internal use. 


### function mamaMsgIterator_create

```cpp
MAMAExpDLL mama_status mamaMsgIterator_create(
    mamaMsgIterator * iterator,
    mamaDictionary dict
)
```


**Parameters**: 

  * **iterator** Pointer to memory to be used for iterator 
  * **dict** The mamaDictionary to be associated with the iterator


**Return**: mama_status The outcome of the operation 

Creates a new iterator for use with a mamaMsg


### function mamaMsgIterator_associate

```cpp
MAMAExpDLL mama_status mamaMsgIterator_associate(
    mamaMsgIterator iterator,
    mamaMsg msg
)
```


**Parameters**: 

  * **msg** The mamaMsg that will use the iterator 
  * **iterator** iterator for use with msg


**Return**: mama_status The outcome of the operation 

Associate an iterator for use with a mamaMsg


### function mamaMsgIterator_setDict

```cpp
MAMAExpDLL mama_status mamaMsgIterator_setDict(
    mamaMsgIterator iterator,
    mamaDictionary dict
)
```


**Parameters**: 

  * **iterator** The iterator that will use the dictionary 
  * **dict** The dictionary to be used


**Return**: mama_status The outcome of the operation. 

Associate a mamaDictionary for use with an iterator


### function mamaMsgIterator_next

```cpp
MAMAExpDLL mamaMsgField mamaMsgIterator_next(
    mamaMsgIterator iterator
)
```


**Parameters**: 

  * **iterator** The iterator being used


**Return**: mamaMsgField The next field in the message 

Return the next field in the mamaMsg


### function mamaMsgIterator_hasNext

```cpp
MAMAExpDLL mama_bool_t mamaMsgIterator_hasNext(
    mamaMsgIterator iterator
)
```


**Parameters**: 

  * **iterator** The iterator being used


**Return**: bool Does the message have another field 

Return whether there is a next next field in the mamaMsg


### function mamaMsgIterator_begin

```cpp
MAMAExpDLL mamaMsgField mamaMsgIterator_begin(
    mamaMsgIterator iterator
)
```


**Parameters**: 

  * **iterator** The iterator being used


**Return**: mamaMsgField The first field in the message 

Set iterator to first field in mamaMsg


### function mamaMsgIterator_end

```cpp
MAMAExpDLL mamaMsgField mamaMsgIterator_end(
    mamaMsgIterator iterator
)
```


**Parameters**: 

  * **iterator** The iterator being used


**Return**: mamaMsgField The last field in the message 

Set iterator to last field in mamaMsg


### function mamaMsgIterator_destroy

```cpp
MAMAExpDLL mama_status mamaMsgIterator_destroy(
    mamaMsgIterator iterator
)
```


**Parameters**: 

  * **iterator** The iterator being destroyed 


Destroy iterator



## Attributes Documentation

### variable mamaPayloadType

```cpp
mamaPayloadType;
```


### variable id

```cpp
MAMAIgnoreDeprecatedOpen const char id;
```


### variable msgString

```cpp
MAMAIgnoreDeprecatedOpen const char * msgString;
```



## Macros Documentation

### define ENTITLE_FIELD_NAME

```cpp
#define ENTITLE_FIELD_NAME "wEntitleCode"
```


### define ENTITLE_FIELD_ID

```cpp
#define ENTITLE_FIELD_ID 496
```


### define MAMA_PAYLOAD_ID_NULL

```cpp
#define MAMA_PAYLOAD_ID_NULL '\0'
```


### define MAMA_PAYLOAD_ID_UNKNOWN

```cpp
#define MAMA_PAYLOAD_ID_UNKNOWN 'U'
```


## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MamaMsgH__
#define MamaMsgH__

#include <mama/types.h>
#include <mama/status.h>
#include <mama/fielddesc.h>
#include <mama/msgtype.h>
#include "wombat/port.h"
#include <stdlib.h>

#define ENTITLE_FIELD_NAME  "wEntitleCode"
#define ENTITLE_FIELD_ID    496

#if defined(__cplusplus)
extern "C" {
#endif

#define MAMA_PAYLOAD_ID_NULL '\0'
#define MAMA_PAYLOAD_ID_UNKNOWN 'U'

struct wombatMsg_;

MAMAIgnoreDeprecatedOpen
MAMATypeDeprecated(mamaPayloadType,
        "mamaPayloadType has been deprecated, use dynamic loading instead!")
typedef enum mamaPayloadType_
{
    MAMA_PAYLOAD_SOLACE     = '1',
    MAMA_PAYLOAD_V5         = '5',
    MAMA_PAYLOAD_AVIS       = 'A',
    MAMA_PAYLOAD_TICK42BLP  = 'B',
    MAMA_PAYLOAD_FAST       = 'F',
    MAMA_PAYLOAD_HMS        = 'H',
    MAMA_PAYLOAD_RAI        = 'I',
    MAMA_PAYLOAD_KWANTUM    = 'K',
    MAMA_PAYLOAD_UMS        = 'L',
    MAMA_PAYLOAD_INRUSH     = 'N',
    MAMA_PAYLOAD_TICK42RMDS = 'P',
    MAMA_PAYLOAD_QPID       = 'Q',
    MAMA_PAYLOAD_TIBRV      = 'R',
    MAMA_PAYLOAD_IBMWFO     = 'S',
    MAMA_PAYLOAD_ACTIV      = 'T',
    MAMA_PAYLOAD_VULCAN     = 'V',
    MAMA_PAYLOAD_WOMBAT_MSG = 'W',
    MAMA_PAYLOAD_EXEGY      = 'X',

/* Unknown Payload */
    MAMA_PAYLOAD_UNKNOWN    = 'U',
    MAMA_PAYLOAD_NULL       = MAMA_PAYLOAD_ID_NULL
} mamaPayloadType;
MAMAIgnoreDeprecatedClose

MAMAIgnoreDeprecatedOpen
MAMAExpDLL
extern const char*
mamaPayload_convertToString (mamaPayloadType payloadType);
MAMAIgnoreDeprecatedClose

MAMAExpDLL
extern mama_status
mamaMsg_create (mamaMsg* msg);

MAMAIgnoreDeprecatedOpen
MAMAExpDeprecatedDLL(
        "mamaMsg_createForPayload has been deprecated, use dynamic loading instead!")
extern mama_status
mamaMsg_createForPayload (mamaMsg* msg, const char id);
MAMAIgnoreDeprecatedClose

MAMAExpDLL
extern mama_status
mamaMsg_createForPayloadBridge (mamaMsg* msg, mamaPayloadBridge payloadBridge);

MAMAExpDLL
extern mama_status
mamaMsg_createForTemplate (mamaMsg* msg, mama_u32_t templateId);

MAMAExpDLL
extern mama_status
mamaMsg_copy (mamaMsg src, mamaMsg *copy);
MAMAExpDLL
extern mama_status
mamaMsg_getTempCopy (mamaMsg src, mamaMsg* copy);

MAMAExpDLL
extern mama_status
mamaMsg_clear (mamaMsg msg);

MAMAExpDLL
mama_status
mamaMsg_getSendSubject (const mamaMsg msg, const char** subject);

MAMAExpDLL
extern mama_status
mamaMsg_destroy (mamaMsg msg);

MAMAIgnoreDeprecatedOpen
MAMAExpDLL
extern mama_status
mamaMsg_getPayloadType (mamaMsg msg, mamaPayloadType* payloadType);
MAMAIgnoreDeprecatedClose

MAMAExpDLL
extern mama_status
mamaMsg_getByteSize (
        const mamaMsg  msg,
        mama_size_t*   size);

MAMAExpDLL
extern mama_status
mamaMsg_addBool(
    mamaMsg         msg,
    const char*     name,
    mama_fid_t      fid,
    mama_bool_t     value);

MAMAExpDLL
extern mama_status
mamaMsg_addChar(
    mamaMsg         msg,
    const char*     name,
    mama_fid_t      fid,
    char            value);

MAMAExpDLL
extern mama_status
mamaMsg_addI8(
    mamaMsg         msg,
    const char*     name,
    mama_fid_t      fid,
    mama_i8_t       value);

MAMAExpDLL
extern mama_status
mamaMsg_addU8(
    mamaMsg         msg,
    const char*     name,
    mama_fid_t      fid,
    mama_u8_t       value);

MAMAExpDLL
extern mama_status
mamaMsg_addI16(
    mamaMsg         msg,
    const char*     name,
    mama_fid_t      fid,
    mama_i16_t      value);

MAMAExpDLL
extern mama_status
mamaMsg_addU16(
    mamaMsg         msg,
    const char*     name,
    mama_fid_t      fid,
    mama_u16_t      value);

MAMAExpDLL
extern mama_status
mamaMsg_addI32(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_i32_t   value);


MAMAExpDLL
extern mama_status
mamaMsg_addU32(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_u32_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_addI64(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_i64_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_addU64(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_u64_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_addF32(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_f32_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_addF64(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_f64_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_addString(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    const char*  value);

MAMAExpDLL
extern mama_status
mamaMsg_addOpaque (
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    const void*  value,
    mama_size_t  size);

MAMAExpDLL
extern mama_status
mamaMsg_addDateTime (
    mamaMsg             msg,
    const char*         name,
    mama_fid_t          fid,
    const mamaDateTime  value);

MAMAExpDLL
extern mama_status
mamaMsg_addPrice (
    mamaMsg             msg,
    const char*         name,
    mama_fid_t          fid,
    const mamaPrice     value);

MAMAExpDLL
extern mama_status
mamaMsg_addMsg(
    mamaMsg       msg,
    const char*   name,
    mama_fid_t    fid,
    const mamaMsg value);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorBool (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_bool_t  value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorChar (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const char         value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorI8 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_i8_t    value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorU8 (
    mamaMsg          msg,
    const char*      name,
    mama_fid_t       fid,
    const mama_u8_t  value[],
    mama_size_t      numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorI16 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_i16_t   value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorU16 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_u16_t   value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorI32 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_i32_t   value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorU32 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_u32_t   value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorI64 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_i64_t   value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorU64 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_u64_t   value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorF32 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_f32_t   value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorF64 (
    mamaMsg            msg,
    const char*        name,
    mama_fid_t         fid,
    const mama_f64_t   value[],
    mama_size_t        numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorString (
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    const char*  value[],
    mama_size_t  numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorMsg(
    mamaMsg         msg,
    const char*     name,
    mama_fid_t      fid,
    const mamaMsg   value[],
    mama_size_t     numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorDateTime (
    mamaMsg             msg,
    const char*         name,
    mama_fid_t          fid,
    const mamaDateTime  value[],
    mama_size_t         numElements);

MAMAExpDLL
extern mama_status
mamaMsg_addVectorPrice (
    mamaMsg             msg,
    const char*         name,
    mama_fid_t          fid,
    const mamaPrice     value[],
    mama_size_t         numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateBool(
        mamaMsg      msg,
        const char*  name,
        mama_fid_t   fid,
        mama_bool_t  value);

MAMAExpDLL
extern mama_status
mamaMsg_updateChar(
        mamaMsg     msg,
        const char* name,
        mama_fid_t  fid,
        char        value);

MAMAExpDLL
extern mama_status
mamaMsg_updateI8(
        mamaMsg     msg,
        const char* name,
        mama_fid_t  fid,
        mama_i8_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateU8(
        mamaMsg      msg,
        const char*  name,
        mama_fid_t   fid,
        mama_u8_t    value);

MAMAExpDLL
extern mama_status
mamaMsg_updateI16(
        mamaMsg      msg,
        const char*  name,
        mama_fid_t   fid,
        mama_i16_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateU16(
        mamaMsg      msg,
        const char*  name,
        mama_fid_t   fid,
        mama_u16_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateI32(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_i32_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateU32(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_u32_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateI64(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_i64_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateU64(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_u64_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateF32(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_f32_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateF64(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    mama_f64_t   value);

MAMAExpDLL
extern mama_status
mamaMsg_updateString(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    const char*  value);

MAMAExpDLL
extern mama_status
mamaMsg_updateOpaque(
    mamaMsg      msg,
    const char*  name,
    mama_fid_t   fid,
    const void*  value,
    mama_size_t  size);

MAMAExpDLL
extern mama_status
mamaMsg_updateDateTime(
    mamaMsg             msg,
    const char*         name,
    mama_fid_t          fid,
    const mamaDateTime  value);

MAMAExpDLL
extern mama_status
mamaMsg_updatePrice(
    mamaMsg             msg,
    const char*         name,
    mama_fid_t          fid,
    const mamaPrice     value);

MAMAExpDLL
extern mama_status
mamaMsg_getBool(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_bool_t*   result);

MAMAExpDLL
extern mama_status
mamaMsg_applyMsg (mamaMsg    dest, mamaMsg    src);

MAMAExpDLL
extern mama_status
mamaMsg_getNativeMsg (mamaMsg msg, void** nativeMsg);

MAMAExpDLL
extern mama_status
mamaMsg_getReplyHandle (mamaMsg msg, mamaMsgReply* replyHandle);

MAMAExpDLL
extern mama_status
mamaMsg_setReplyHandle (mamaMsg msg, mamaMsgReply replyHandle);

MAMAExpDLL
extern mama_status
mamaMsg_copyReplyHandle (mamaMsgReply src, mamaMsgReply* copy);
MAMAExpDLL
extern mama_status
mamaMsg_destroyReplyHandle (mamaMsgReply replyHandle);

MAMAExpDLL
extern mama_status
mamaMsg_updateSubMsg (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mamaMsg         subMsg);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorMsg (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mamaMsg         msgList[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorString (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const char*           strList[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorBool (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_bool_t     boolList[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorChar (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const char            charList[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorI8 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_i8_t       i8List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorU8 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_u8_t       u8List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorI16 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_i16_t      i16List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorU16 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_u16_t      u16List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorI32 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_i32_t      i32List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorU32 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_u32_t      u32List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorI64 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_i64_t      i64List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorU64 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_u64_t      u64List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorF32 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_f32_t       f32List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorF64 (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mama_f64_t       f64List[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorPrice (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mamaPrice       priceList[],
    mama_size_t           numElements);

MAMAExpDLL
extern mama_status
mamaMsg_updateVectorTime (
    mamaMsg               msg,
    const char*           fname,
    mama_fid_t            fid,
    const mamaDateTime    timeList[],
    mama_size_t           numElements);


MAMAExpDLL
extern mama_status
mamaMsg_getChar(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    char*          result);

MAMAExpDLL
extern mama_status
mamaMsg_getI8(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_i8_t*     result);

MAMAExpDLL
extern mama_status
mamaMsg_getU8(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_u8_t*     result);

MAMAExpDLL
extern mama_status
mamaMsg_getI16(
    const mamaMsg   msg,
    const char*     name,
    mama_fid_t      fid,
    mama_i16_t*     result);

MAMAExpDLL
extern mama_status
mamaMsg_getU16(
        const mamaMsg   msg,
        const char*     name,
        mama_fid_t      fid,
        mama_u16_t*     result);

MAMAExpDLL
extern mama_status
mamaMsg_getI32(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_i32_t*    result);

MAMAExpDLL
extern mama_status
mamaMsg_getU32(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_u32_t*    result);


MAMAExpDLL
extern mama_status
mamaMsg_getI64(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_i64_t*    result);

MAMAExpDLL
extern mama_status
mamaMsg_getU64(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_u64_t*    result);

MAMAExpDLL
extern mama_status
mamaMsg_getF32(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_f32_t*    result);

MAMAExpDLL
extern mama_status
mamaMsg_getF64(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_f64_t*    result);

MAMAExpDLL
extern mama_status
mamaMsg_getString(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    const char**   result);

MAMAExpDLL
extern mama_status
mamaMsg_getOpaque(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    const void**   result,
    mama_size_t*   size);


MAMAExpDLL
extern mama_status
mamaMsg_getField(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mamaMsgField*   result);

MAMAExpDLL
extern mama_status
mamaMsg_getDateTime(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mamaDateTime   result);

MAMAExpDLL
extern
mama_status
mamaMsg_getDateTimeMSec(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_u64_t*    milliseconds);

MAMAExpDLL
extern
mama_status
mamaMsg_getDateTimeSeconds(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mama_f64_t*    seconds);

MAMAExpDLL
extern mama_status
mamaMsg_getPrice(
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mamaPrice      result);

MAMAExpDLL
extern mama_status
mamaMsg_getMsg (
    const mamaMsg  msg,
    const char*    name,
    mama_fid_t     fid,
    mamaMsg*       result);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorBool (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_bool_t**  result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorChar (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const char**         result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorI8 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_i8_t**    result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorU8 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_u8_t**    result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorI16 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_i16_t**   result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorU16 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_u16_t**   result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorI32 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_i32_t**   result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorU32 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_u32_t**   result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorI64 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_i64_t**   result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorU64 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_u64_t**   result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorF32 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_f32_t**   result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorF64 (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mama_f64_t**   result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorString (
    const mamaMsg   msg,
    const char*     name,
    mama_fid_t      fid,
    const char***   result,
    mama_size_t*    resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorDateTime (
    const mamaMsg         msg,
    const char*           name,
    mama_fid_t            fid,
    const mamaDateTime**  result,
    mama_size_t*          resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorPrice (
    const mamaMsg         msg,
    const char*           name,
    mama_fid_t            fid,
    const mamaPrice**     result,
    mama_size_t*          resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getVectorMsg (
    const mamaMsg        msg,
    const char*          name,
    mama_fid_t           fid,
    const mamaMsg**      result,
    mama_size_t*         resultLen);

MAMAExpDLL
extern mama_status
mamaMsg_getNumFields(
    const mamaMsg  msg,
    mama_size_t*   numFields);

MAMAExpDLL
extern const char*
mamaMsg_toString(
    const mamaMsg msg);

MAMAExpDLL
extern const char*
mamaMsg_toNormalizedString(
    const mamaMsg msg);

MAMAExpDLL
extern const char*
mamaMsg_toJsonString(
    const mamaMsg msg);

MAMAExpDLL
extern const char*
mamaMsg_toJsonStringWithDictionary(
    const mamaMsg msg,
    const mamaDictionary dictionary);

MAMAIgnoreDeprecatedOpen
MAMAExpDeprecatedDLL(
        "mamaMsg_freeString has been deprecated - memory now managed by bridge")
extern void
mamaMsg_freeString(
    const mamaMsg  msg,
    const char*    msgString );
MAMAIgnoreDeprecatedClose

MAMAExpDLL
extern mama_status
mamaMsg_getEntitleCode(
    const mamaMsg  msg,
    mama_i32_t*    code );

MAMAExpDLL
extern mama_status
mamaMsg_getSeqNum(
    const mamaMsg   msg,
    mama_seqnum_t*  seqNum);

MAMAExpDLL
extern mamaMsgType
mamaMsgType_typeForMsg (const mamaMsg msg);

MAMAExpDLL
extern const char* mamaMsgType_stringForMsg (const mamaMsg msg);

MAMAExpDLL
extern const char* mamaMsgType_stringForType (const mamaMsgType type);

MAMAExpDLL
extern mama_status
mamaMsg_getFieldAsString (
    const mamaMsg  msg,
    const char*    fieldName,
    mama_fid_t     fid,
    char*          buf,
    mama_size_t    length);

typedef void(MAMACALLTYPE *mamaMsgIteratorCb)(const mamaMsg       msg,
                                 const mamaMsgField  field,
                                 void*               closure);

MAMAExpDLL
extern mama_status
mamaMsg_iterateFields (const mamaMsg         msg,
                       mamaMsgIteratorCb     callback,
                       const mamaDictionary  dict,
                       void*                 closure);

MAMAExpDLL
extern mama_status
mamaMsg_getPlatformError (const mamaMsg  msg,
                          void**         error);



MAMAExpDLL
extern int
mamaMsg_isFromInbox (const mamaMsg msg);

MAMAExpDLL
extern mama_status
mamaMsg_createFromByteBuffer (
            mamaMsg*       msg,
            const void*    buffer,
            mama_size_t    bufferLength);


MAMAExpDLL
extern mama_status
mamaMsg_getByteBuffer (const mamaMsg  msg,
                       const void**   buffer,
                       mama_size_t*   bufferLength);

MAMAExpDLL
extern mama_status
mamaMsg_detach (mamaMsg  msg);

MAMAExpDLL
mama_status
mamaMsg_getIsDefinitelyDuplicate (mamaMsg msg, int* result);

MAMAExpDLL
mama_status
mamaMsg_getIsPossiblyDuplicate (mamaMsg msg, int* result);

MAMAExpDLL
mama_status
mamaMsg_getIsPossiblyDelayed (mamaMsg msg, int* result);

MAMAExpDLL
mama_status
mamaMsg_getIsDefinitelyDelayed (mamaMsg msg, int* result);

MAMAExpDLL
mama_status
mamaMsg_getIsOutOfSequence (mamaMsg msg, int* result);

MAMAExpDLL
mama_status
mamaMsg_setNewBuffer (mamaMsg      msg,
                      void*         buffer,
                      mama_size_t   size);

MAMAExpDLL
mama_status
mamaMsg_getNativeHandle (const mamaMsg  msg,
                         void**         result);

MAMAExpDLL
mama_status
mamaMsgIterator_create (mamaMsgIterator* iterator, mamaDictionary dict);
MAMAExpDLL
mama_status mamaMsgIterator_associate (mamaMsgIterator iterator, mamaMsg msg);
MAMAExpDLL
mama_status mamaMsgIterator_setDict (mamaMsgIterator iterator,
                                     mamaDictionary dict);
MAMAExpDLL
mamaMsgField
mamaMsgIterator_next (mamaMsgIterator iterator);

MAMAExpDLL
mama_bool_t
mamaMsgIterator_hasNext (mamaMsgIterator iterator);

MAMAExpDLL
mamaMsgField
mamaMsgIterator_begin (mamaMsgIterator iterator);
MAMAExpDLL
mamaMsgField
mamaMsgIterator_end (mamaMsgIterator iterator);

MAMAExpDLL
mama_status
mamaMsgIterator_destroy (mamaMsgIterator iterator);

#if defined(__cplusplus)
}
#endif

#endif /* MamaMsgH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
