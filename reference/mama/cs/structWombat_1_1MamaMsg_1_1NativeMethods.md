---
title: Wombat::MamaMsg::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsg::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaMsg_iterateFields](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-iteratefields)**(IntPtr msg, CallbackForwarder.MamaMessageIteratorDelegate callback, IntPtr dict, IntPtr closure) |
| int | **[mamaMsg_create](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-create)**(ref IntPtr mamaMsg) |
| int | **[mamaMsg_createForPayload](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-createforpayload)**(ref IntPtr mamaMsg, [mamaPayloadType](namespaceWombat.html#enum-mamapayloadtype) id) |
| int | **[mamaMsg_createForPayload](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-createforpayload)**(ref IntPtr mamaMsg, char id) |
| int | **[mamaMsg_createForPayloadBridge](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-createforpayloadbridge)**(ref IntPtr mamaMsg, IntPtr mamaPayloadBridge) |
| int | **[mamaMsg_copy](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-copy)**(IntPtr mamaMsgSrc, ref IntPtr mamaMsgCopy) |
| int | **[mamaMsg_clear](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-clear)**(IntPtr mamaMsg) |
| int | **[mamaMsg_destroy](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-destroy)**(IntPtr mamaMsg) |
| int | **[mamaMsg_getByteSize](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getbytesize)**(IntPtr mamaMsg, ref int size) |
| int | **[mamaMsg_addBool](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addbool)**(IntPtr mamaMsg, string name, ushort fid, bool val) |
| int | **[mamaMsg_addChar](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addchar)**(IntPtr mamaMsg, string name, ushort fid, char val) |
| int | **[mamaMsg_addI8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addi8)**(IntPtr mamaMsg, string name, ushort fid, sbyte val) |
| int | **[mamaMsg_addU8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addu8)**(IntPtr mamaMsg, string name, ushort fid, byte val) |
| int | **[mamaMsg_addI16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addi16)**(IntPtr mamaMsg, string name, ushort fid, short val) |
| int | **[mamaMsg_addU16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addu16)**(IntPtr mamaMsg, string name, ushort fid, ushort val) |
| int | **[mamaMsg_addI32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addi32)**(IntPtr mamaMsg, string name, ushort fid, int val) |
| int | **[mamaMsg_addU32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addu32)**(IntPtr mamaMsg, string name, ushort fid, uint val) |
| int | **[mamaMsg_addI64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addi64)**(IntPtr mamaMsg, string name, ushort fid, long val) |
| int | **[mamaMsg_addU64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addu64)**(IntPtr mamaMsg, string name, ushort fid, ulong val) |
| int | **[mamaMsg_addF32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addf32)**(IntPtr mamaMsg, string name, ushort fid, float val) |
| int | **[mamaMsg_addF64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addf64)**(IntPtr mamaMsg, string name, ushort fid, double val) |
| int | **[mamaMsg_addString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addstring)**(IntPtr mamaMsg, string name, ushort fid, string val) |
| int | **[mamaMsg_addOpaque](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addopaque)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int size) |
| int | **[mamaMsg_addDateTime](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-adddatetime)**(IntPtr mamaMsg, string name, ushort fid, ref ulong val) |
| int | **[mamaMsg_addPrice](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addprice)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val) |
| int | **[mamaMsg_addMsg](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addmsg)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val) |
| int | **[mamaMsg_addVectorBool](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectorbool)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorChar](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectorchar)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorI8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectori8)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorU8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectoru8)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorI16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectori16)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorU16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectoru16)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorI32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectori32)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorU32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectoru32)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorI64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectori64)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorU64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectoru64)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorF32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectorf32)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorF64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectorf64)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectorstring)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorMsg](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectormsg)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorDateTime](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectordatetime)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_addVectorPrice](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-addvectorprice)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateBool](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatebool)**(IntPtr mamaMsg, string name, ushort fid, bool val) |
| int | **[mamaMsg_updateChar](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatechar)**(IntPtr mamaMsg, string name, ushort fid, char val) |
| int | **[mamaMsg_updateI8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatei8)**(IntPtr mamaMsg, string name, ushort fid, sbyte val) |
| int | **[mamaMsg_updateU8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updateu8)**(IntPtr mamaMsg, string name, ushort fid, byte val) |
| int | **[mamaMsg_updateI16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatei16)**(IntPtr mamaMsg, string name, ushort fid, short val) |
| int | **[mamaMsg_updateU16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updateu16)**(IntPtr mamaMsg, string name, ushort fid, ushort val) |
| int | **[mamaMsg_updateI32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatei32)**(IntPtr mamaMsg, string name, ushort fid, int val) |
| int | **[mamaMsg_updateU32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updateu32)**(IntPtr mamaMsg, string name, ushort fid, uint val) |
| int | **[mamaMsg_updateI64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatei64)**(IntPtr mamaMsg, string name, ushort fid, long val) |
| int | **[mamaMsg_updateU64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updateu64)**(IntPtr mamaMsg, string name, ushort fid, ulong val) |
| int | **[mamaMsg_updateF32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatef32)**(IntPtr mamaMsg, string name, ushort fid, float val) |
| int | **[mamaMsg_updateF64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatef64)**(IntPtr mamaMsg, string name, ushort fid, double val) |
| int | **[mamaMsg_updateString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatestring)**(IntPtr mamaMsg, string name, ushort fid, string val) |
| int | **[mamaMsg_updateOpaque](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updateopaque)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int size) |
| int | **[mamaMsg_updateDateTime](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatedatetime)**(IntPtr mamaMsg, string name, ushort fid, ref ulong val) |
| int | **[mamaMsg_updatePrice](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updateprice)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val) |
| int | **[mamaMsg_updateVectorBool](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectorbool)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorChar](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectorchar)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorI8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectori8)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorU8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectoru8)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorI16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectori16)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorU16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectoru16)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorI32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectori32)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorU32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectoru32)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorI64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectori64)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorU64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectoru64)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorF32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectorf32)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorF64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectorf64)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectorstring)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorDateTime](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectordatetime)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorPrice](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectorprice)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_updateVectorMsg](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-updatevectormsg)**(IntPtr mamaMsg, string name, ushort fid, IntPtr val, int numElements) |
| int | **[mamaMsg_getBool](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getbool)**(IntPtr mamaMsg, string name, ushort fid, ref bool result) |
| int | **[mamaMsg_getChar](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getchar)**(IntPtr mamaMsg, string name, ushort fid, ref char result) |
| int | **[mamaMsg_getI8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-geti8)**(IntPtr mamaMsg, string name, ushort fid, ref sbyte result) |
| int | **[mamaMsg_getU8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getu8)**(IntPtr mamaMsg, string name, ushort fid, ref byte result) |
| int | **[mamaMsg_getI16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-geti16)**(IntPtr mamaMsg, string name, ushort fid, ref short result) |
| int | **[mamaMsg_getU16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getu16)**(IntPtr mamaMsg, string name, ushort fid, ref ushort result) |
| int | **[mamaMsg_getI32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-geti32)**(IntPtr mamaMsg, string name, ushort fid, ref int result) |
| int | **[mamaMsg_getU32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getu32)**(IntPtr mamaMsg, string name, ushort fid, ref uint result) |
| int | **[mamaMsg_getI64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-geti64)**(IntPtr mamaMsg, string name, ushort fid, ref long result) |
| int | **[mamaMsg_getU64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getu64)**(IntPtr mamaMsg, string name, ushort fid, ref ulong result) |
| int | **[mamaMsg_getF32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getf32)**(IntPtr mamaMsg, string name, ushort fid, ref float result) |
| int | **[mamaMsg_getF64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getf64)**(IntPtr mamaMsg, string name, ushort fid, ref double result) |
| int | **[mamaMsg_getString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getstring)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result) |
| int | **[mamaMsg_getOpaque](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getopaque)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint size) |
| int | **[mamaMsg_getField](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getfield)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result) |
| int | **[mamaMsg_getDateTime](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getdatetime)**(IntPtr mamaMsg, string name, ushort fid, ref ulong result) |
| int | **[mamaMsg_getDateTimeMSec](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getdatetimemsec)**(IntPtr mamaMsg, string name, ushort fid, ref ulong result) |
| int | **[mamaMsg_getDateTimeSeconds](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getdatetimeseconds)**(IntPtr mamaMsg, string name, ushort fid, ref double result) |
| int | **[mamaMsg_getPrice](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getprice)**(IntPtr mamaMsg, string name, ushort fid, IntPtr result) |
| int | **[mamaMsg_getMsg](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getmsg)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result) |
| int | **[mamaMsg_getVectorBool](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectorbool)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorChar](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectorchar)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorI8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectori8)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorU8](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectoru8)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorI16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectori16)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorU16](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectoru16)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorI32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectori32)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorU32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectoru32)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorI64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectori64)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorU64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectoru64)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorF32](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectorf32)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorF64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectorf64)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectorstring)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorDateTime](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectordatetime)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorPrice](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectorprice)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getVectorMsg](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getvectormsg)**(IntPtr mamaMsg, string name, ushort fid, ref IntPtr result, ref uint resultLen) |
| int | **[mamaMsg_getNumFields](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getnumfields)**(IntPtr mamaMsg, ref int numFields) |
| IntPtr | **[mamaMsg_toString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-tostring)**(IntPtr mamaMsg) |
| IntPtr | **[mamaMsg_toJsonString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-tojsonstring)**(IntPtr mamaMsg) |
| IntPtr | **[mamaMsg_toJsonStringWithDictionary](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-tojsonstringwithdictionary)**(IntPtr mamaMsg, IntPtr dictionary) |
| IntPtr | **[mamaMsg_toNormalizedString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-tonormalizedstring)**(IntPtr mamaMsg) |
| int | **[mamaMsg_getEntitleCode](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getentitlecode)**(IntPtr mamaMsg, ref int code) |
| int | **[mamaMsg_getPayloadType](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getpayloadtype)**(IntPtr mamaMsg, ref [mamaPayloadType](namespaceWombat.html#enum-mamapayloadtype) payload) |
| int | **[mamaMsg_getSeqNum](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getseqnum)**(IntPtr mamaMsg, ref uint seqNum) |
| int | **[mamaMsgType_typeForMsg](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsgtype-typeformsg)**(IntPtr mamaMsg) |
| IntPtr | **[mamaMsgType_stringForMsg](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsgtype-stringformsg)**(IntPtr mamaMsg) |
| IntPtr | **[mamaMsgType_stringForType](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsgtype-stringfortype)**(int type) |
| IntPtr | **[mamaStatus_stringForStatus](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamastatus-stringforstatus)**(int type) |
| int | **[mamaMsg_getFieldAsString](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getfieldasstring)**(IntPtr mamaMsg, string fieldName, ushort fid, StringBuilder buf, int length) |
| int | **[mamaMsg_isFromInbox](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-isfrominbox)**(IntPtr mamaMsg) |
| int | **[mamaMsg_detach](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-detach)**(IntPtr mamaMsg) |
| int | **[mamaDateTime_setEpochTimeMilliseconds](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamadatetime-setepochtimemilliseconds)**(ref ulong dateTime, ulong milliseconds) |
| int | **[mamaDateTime_setEpochTimeF64](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamadatetime-setepochtimef64)**(ref ulong dateTime, double seconds) |
| int | **[mamaDateTime_getEpochTimeMilliseconds](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamadatetime-getepochtimemilliseconds)**(ref ulong dateTime, ref ulong milliseconds) |
| int | **[mamaDateTime_getEpochTimeSeconds](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamadatetime-getepochtimeseconds)**(ref ulong dateTime, ref double seconds) |
| int | **[mamaPrice_create](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamaprice-create)**(ref IntPtr nativeHandle) |
| int | **[mamaPrice_destroy](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamaprice-destroy)**(IntPtr nativeHandle) |
| IntPtr | **[mamaMsgIterator_begin](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsgiterator-begin)**(IntPtr mamaMsgIterator) |
| IntPtr | **[mamaMsgIterator_end](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsgiterator-end)**(IntPtr mamaMsgIterator) |
| IntPtr | **[mamaMsgIterator_associate](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsgiterator-associate)**(IntPtr nativeHandle, IntPtr mamaMsgIterator) |
| int | **[mamaMsg_getByteBuffer](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-getbytebuffer)**(IntPtr nativeHandle, ref IntPtr array, ref int size) |
| int | **[mamaMsg_createFromByteBuffer](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-createfrombytebuffer)**(ref IntPtr nativeHandle, IntPtr array, int size) |
| int | **[mamaMsg_createForBridgeFromByteBuffer](structWombat_1_1MamaMsg_1_1NativeMethods.html#function-mamamsg-createforbridgefrombytebuffer)**(ref IntPtr nativeHandle, IntPtr array, int size, IntPtr nativeBridgeHandle) |

## Public Functions Documentation

### function mamaMsg_iterateFields

```csharp
int mamaMsg_iterateFields(
    IntPtr msg,
    CallbackForwarder.MamaMessageIteratorDelegate callback,
    IntPtr dict,
    IntPtr closure
)
```


### function mamaMsg_create

```csharp
int mamaMsg_create(
    ref IntPtr mamaMsg
)
```


### function mamaMsg_createForPayload

```csharp
int mamaMsg_createForPayload(
    ref IntPtr mamaMsg,
    mamaPayloadType id
)
```


### function mamaMsg_createForPayload

```csharp
int mamaMsg_createForPayload(
    ref IntPtr mamaMsg,
    char id
)
```


### function mamaMsg_createForPayloadBridge

```csharp
int mamaMsg_createForPayloadBridge(
    ref IntPtr mamaMsg,
    IntPtr mamaPayloadBridge
)
```


### function mamaMsg_copy

```csharp
int mamaMsg_copy(
    IntPtr mamaMsgSrc,
    ref IntPtr mamaMsgCopy
)
```


### function mamaMsg_clear

```csharp
int mamaMsg_clear(
    IntPtr mamaMsg
)
```


### function mamaMsg_destroy

```csharp
int mamaMsg_destroy(
    IntPtr mamaMsg
)
```


### function mamaMsg_getByteSize

```csharp
int mamaMsg_getByteSize(
    IntPtr mamaMsg,
    ref int size
)
```


### function mamaMsg_addBool

```csharp
int mamaMsg_addBool(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    bool val
)
```


### function mamaMsg_addChar

```csharp
int mamaMsg_addChar(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    char val
)
```


### function mamaMsg_addI8

```csharp
int mamaMsg_addI8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    sbyte val
)
```


### function mamaMsg_addU8

```csharp
int mamaMsg_addU8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    byte val
)
```


### function mamaMsg_addI16

```csharp
int mamaMsg_addI16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    short val
)
```


### function mamaMsg_addU16

```csharp
int mamaMsg_addU16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ushort val
)
```


### function mamaMsg_addI32

```csharp
int mamaMsg_addI32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    int val
)
```


### function mamaMsg_addU32

```csharp
int mamaMsg_addU32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    uint val
)
```


### function mamaMsg_addI64

```csharp
int mamaMsg_addI64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    long val
)
```


### function mamaMsg_addU64

```csharp
int mamaMsg_addU64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ulong val
)
```


### function mamaMsg_addF32

```csharp
int mamaMsg_addF32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    float val
)
```


### function mamaMsg_addF64

```csharp
int mamaMsg_addF64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    double val
)
```


### function mamaMsg_addString

```csharp
int mamaMsg_addString(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    string val
)
```


### function mamaMsg_addOpaque

```csharp
int mamaMsg_addOpaque(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int size
)
```


### function mamaMsg_addDateTime

```csharp
int mamaMsg_addDateTime(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref ulong val
)
```


### function mamaMsg_addPrice

```csharp
int mamaMsg_addPrice(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val
)
```


### function mamaMsg_addMsg

```csharp
int mamaMsg_addMsg(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val
)
```


### function mamaMsg_addVectorBool

```csharp
int mamaMsg_addVectorBool(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorChar

```csharp
int mamaMsg_addVectorChar(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorI8

```csharp
int mamaMsg_addVectorI8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorU8

```csharp
int mamaMsg_addVectorU8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorI16

```csharp
int mamaMsg_addVectorI16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorU16

```csharp
int mamaMsg_addVectorU16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorI32

```csharp
int mamaMsg_addVectorI32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorU32

```csharp
int mamaMsg_addVectorU32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorI64

```csharp
int mamaMsg_addVectorI64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorU64

```csharp
int mamaMsg_addVectorU64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorF32

```csharp
int mamaMsg_addVectorF32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorF64

```csharp
int mamaMsg_addVectorF64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorString

```csharp
int mamaMsg_addVectorString(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorMsg

```csharp
int mamaMsg_addVectorMsg(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorDateTime

```csharp
int mamaMsg_addVectorDateTime(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_addVectorPrice

```csharp
int mamaMsg_addVectorPrice(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateBool

```csharp
int mamaMsg_updateBool(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    bool val
)
```


### function mamaMsg_updateChar

```csharp
int mamaMsg_updateChar(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    char val
)
```


### function mamaMsg_updateI8

```csharp
int mamaMsg_updateI8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    sbyte val
)
```


### function mamaMsg_updateU8

```csharp
int mamaMsg_updateU8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    byte val
)
```


### function mamaMsg_updateI16

```csharp
int mamaMsg_updateI16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    short val
)
```


### function mamaMsg_updateU16

```csharp
int mamaMsg_updateU16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ushort val
)
```


### function mamaMsg_updateI32

```csharp
int mamaMsg_updateI32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    int val
)
```


### function mamaMsg_updateU32

```csharp
int mamaMsg_updateU32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    uint val
)
```


### function mamaMsg_updateI64

```csharp
int mamaMsg_updateI64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    long val
)
```


### function mamaMsg_updateU64

```csharp
int mamaMsg_updateU64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ulong val
)
```


### function mamaMsg_updateF32

```csharp
int mamaMsg_updateF32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    float val
)
```


### function mamaMsg_updateF64

```csharp
int mamaMsg_updateF64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    double val
)
```


### function mamaMsg_updateString

```csharp
int mamaMsg_updateString(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    string val
)
```


### function mamaMsg_updateOpaque

```csharp
int mamaMsg_updateOpaque(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int size
)
```


### function mamaMsg_updateDateTime

```csharp
int mamaMsg_updateDateTime(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref ulong val
)
```


### function mamaMsg_updatePrice

```csharp
int mamaMsg_updatePrice(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val
)
```


### function mamaMsg_updateVectorBool

```csharp
int mamaMsg_updateVectorBool(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorChar

```csharp
int mamaMsg_updateVectorChar(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorI8

```csharp
int mamaMsg_updateVectorI8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorU8

```csharp
int mamaMsg_updateVectorU8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorI16

```csharp
int mamaMsg_updateVectorI16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorU16

```csharp
int mamaMsg_updateVectorU16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorI32

```csharp
int mamaMsg_updateVectorI32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorU32

```csharp
int mamaMsg_updateVectorU32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorI64

```csharp
int mamaMsg_updateVectorI64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorU64

```csharp
int mamaMsg_updateVectorU64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorF32

```csharp
int mamaMsg_updateVectorF32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorF64

```csharp
int mamaMsg_updateVectorF64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorString

```csharp
int mamaMsg_updateVectorString(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorDateTime

```csharp
int mamaMsg_updateVectorDateTime(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorPrice

```csharp
int mamaMsg_updateVectorPrice(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_updateVectorMsg

```csharp
int mamaMsg_updateVectorMsg(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr val,
    int numElements
)
```


### function mamaMsg_getBool

```csharp
int mamaMsg_getBool(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref bool result
)
```


### function mamaMsg_getChar

```csharp
int mamaMsg_getChar(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref char result
)
```


### function mamaMsg_getI8

```csharp
int mamaMsg_getI8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref sbyte result
)
```


### function mamaMsg_getU8

```csharp
int mamaMsg_getU8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref byte result
)
```


### function mamaMsg_getI16

```csharp
int mamaMsg_getI16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref short result
)
```


### function mamaMsg_getU16

```csharp
int mamaMsg_getU16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref ushort result
)
```


### function mamaMsg_getI32

```csharp
int mamaMsg_getI32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref int result
)
```


### function mamaMsg_getU32

```csharp
int mamaMsg_getU32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref uint result
)
```


### function mamaMsg_getI64

```csharp
int mamaMsg_getI64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref long result
)
```


### function mamaMsg_getU64

```csharp
int mamaMsg_getU64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref ulong result
)
```


### function mamaMsg_getF32

```csharp
int mamaMsg_getF32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref float result
)
```


### function mamaMsg_getF64

```csharp
int mamaMsg_getF64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref double result
)
```


### function mamaMsg_getString

```csharp
int mamaMsg_getString(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result
)
```


### function mamaMsg_getOpaque

```csharp
int mamaMsg_getOpaque(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint size
)
```


### function mamaMsg_getField

```csharp
int mamaMsg_getField(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result
)
```


### function mamaMsg_getDateTime

```csharp
int mamaMsg_getDateTime(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref ulong result
)
```


### function mamaMsg_getDateTimeMSec

```csharp
int mamaMsg_getDateTimeMSec(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref ulong result
)
```


### function mamaMsg_getDateTimeSeconds

```csharp
int mamaMsg_getDateTimeSeconds(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref double result
)
```


### function mamaMsg_getPrice

```csharp
int mamaMsg_getPrice(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    IntPtr result
)
```


### function mamaMsg_getMsg

```csharp
int mamaMsg_getMsg(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result
)
```


### function mamaMsg_getVectorBool

```csharp
int mamaMsg_getVectorBool(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorChar

```csharp
int mamaMsg_getVectorChar(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorI8

```csharp
int mamaMsg_getVectorI8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorU8

```csharp
int mamaMsg_getVectorU8(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorI16

```csharp
int mamaMsg_getVectorI16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorU16

```csharp
int mamaMsg_getVectorU16(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorI32

```csharp
int mamaMsg_getVectorI32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorU32

```csharp
int mamaMsg_getVectorU32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorI64

```csharp
int mamaMsg_getVectorI64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorU64

```csharp
int mamaMsg_getVectorU64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorF32

```csharp
int mamaMsg_getVectorF32(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorF64

```csharp
int mamaMsg_getVectorF64(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorString

```csharp
int mamaMsg_getVectorString(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorDateTime

```csharp
int mamaMsg_getVectorDateTime(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorPrice

```csharp
int mamaMsg_getVectorPrice(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getVectorMsg

```csharp
int mamaMsg_getVectorMsg(
    IntPtr mamaMsg,
    string name,
    ushort fid,
    ref IntPtr result,
    ref uint resultLen
)
```


### function mamaMsg_getNumFields

```csharp
int mamaMsg_getNumFields(
    IntPtr mamaMsg,
    ref int numFields
)
```


### function mamaMsg_toString

```csharp
IntPtr mamaMsg_toString(
    IntPtr mamaMsg
)
```


### function mamaMsg_toJsonString

```csharp
IntPtr mamaMsg_toJsonString(
    IntPtr mamaMsg
)
```


### function mamaMsg_toJsonStringWithDictionary

```csharp
IntPtr mamaMsg_toJsonStringWithDictionary(
    IntPtr mamaMsg,
    IntPtr dictionary
)
```


### function mamaMsg_toNormalizedString

```csharp
IntPtr mamaMsg_toNormalizedString(
    IntPtr mamaMsg
)
```


### function mamaMsg_getEntitleCode

```csharp
int mamaMsg_getEntitleCode(
    IntPtr mamaMsg,
    ref int code
)
```


### function mamaMsg_getPayloadType

```csharp
int mamaMsg_getPayloadType(
    IntPtr mamaMsg,
    ref mamaPayloadType payload
)
```


### function mamaMsg_getSeqNum

```csharp
int mamaMsg_getSeqNum(
    IntPtr mamaMsg,
    ref uint seqNum
)
```


### function mamaMsgType_typeForMsg

```csharp
int mamaMsgType_typeForMsg(
    IntPtr mamaMsg
)
```


### function mamaMsgType_stringForMsg

```csharp
IntPtr mamaMsgType_stringForMsg(
    IntPtr mamaMsg
)
```


### function mamaMsgType_stringForType

```csharp
IntPtr mamaMsgType_stringForType(
    int type
)
```


### function mamaStatus_stringForStatus

```csharp
IntPtr mamaStatus_stringForStatus(
    int type
)
```


### function mamaMsg_getFieldAsString

```csharp
int mamaMsg_getFieldAsString(
    IntPtr mamaMsg,
    string fieldName,
    ushort fid,
    StringBuilder buf,
    int length
)
```


### function mamaMsg_isFromInbox

```csharp
int mamaMsg_isFromInbox(
    IntPtr mamaMsg
)
```


### function mamaMsg_detach

```csharp
int mamaMsg_detach(
    IntPtr mamaMsg
)
```


### function mamaDateTime_setEpochTimeMilliseconds

```csharp
int mamaDateTime_setEpochTimeMilliseconds(
    ref ulong dateTime,
    ulong milliseconds
)
```


### function mamaDateTime_setEpochTimeF64

```csharp
int mamaDateTime_setEpochTimeF64(
    ref ulong dateTime,
    double seconds
)
```


### function mamaDateTime_getEpochTimeMilliseconds

```csharp
int mamaDateTime_getEpochTimeMilliseconds(
    ref ulong dateTime,
    ref ulong milliseconds
)
```


### function mamaDateTime_getEpochTimeSeconds

```csharp
int mamaDateTime_getEpochTimeSeconds(
    ref ulong dateTime,
    ref double seconds
)
```


### function mamaPrice_create

```csharp
int mamaPrice_create(
    ref IntPtr nativeHandle
)
```


### function mamaPrice_destroy

```csharp
int mamaPrice_destroy(
    IntPtr nativeHandle
)
```


### function mamaMsgIterator_begin

```csharp
IntPtr mamaMsgIterator_begin(
    IntPtr mamaMsgIterator
)
```


### function mamaMsgIterator_end

```csharp
IntPtr mamaMsgIterator_end(
    IntPtr mamaMsgIterator
)
```


### function mamaMsgIterator_associate

```csharp
IntPtr mamaMsgIterator_associate(
    IntPtr nativeHandle,
    IntPtr mamaMsgIterator
)
```


### function mamaMsg_getByteBuffer

```csharp
int mamaMsg_getByteBuffer(
    IntPtr nativeHandle,
    ref IntPtr array,
    ref int size
)
```


### function mamaMsg_createFromByteBuffer

```csharp
int mamaMsg_createFromByteBuffer(
    ref IntPtr nativeHandle,
    IntPtr array,
    int size
)
```


### function mamaMsg_createForBridgeFromByteBuffer

```csharp
int mamaMsg_createForBridgeFromByteBuffer(
    ref IntPtr nativeHandle,
    IntPtr array,
    int size,
    IntPtr nativeBridgeHandle
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100