---
title: Wombat::MamaMsg
summary: Class which encapsulates the messages used in the MAMA infrastructure 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsg



Class which encapsulates the messages used in the MAMA infrastructure 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaMsg](classWombat_1_1MamaMsg.html#function-mamamsg)**()<br>Create a msg using the default payload.  |
| | **[MamaMsg](classWombat_1_1MamaMsg.html#function-mamamsg)**([mamaPayloadType](namespaceWombat.html#enum-mamapayloadtype) payloadId)<br>NOTE: This function has been deprecated in line with the deprecation of the mamaPayloadType enum. Create a msg using the payload specified. The payload ID to create the message for |
| | **[MamaMsg](classWombat_1_1MamaMsg.html#function-mamamsg)**(char payloadId)<br>Create a msg using the payload specified. Char identifying the payload to create the msg for |
| | **[MamaMsg](classWombat_1_1MamaMsg.html#function-mamamsg)**([MamaPayloadBridge](classWombat_1_1MamaPayloadBridge.html) payloadBridge)<br>Create a msg using the payload bridge specified.  |
| | **[MamaMsg](classWombat_1_1MamaMsg.html#function-mamamsg)**([MamaMsg](classWombat_1_1MamaMsg.html) mamaMsgSrc)<br>Create a deep copy of a message.  |
| void | **[getByteBuffer](classWombat_1_1MamaMsg.html#function-getbytebuffer)**(ref byte[] byteBuffer, ref int size) |
| void | **[createFromBuffer](classWombat_1_1MamaMsg.html#function-createfrombuffer)**(byte[] byteBuffer, int size) |
| void | **[createForBridgeFromBuffer](classWombat_1_1MamaMsg.html#function-createforbridgefrombuffer)**(byte[] byteBuffer, int size, [MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl) |
| [MamaMsg](classWombat_1_1MamaMsg.html) | **[detach](classWombat_1_1MamaMsg.html#function-detach)**() |
| [mamaMsgType](namespaceWombat.html#enum-mamamsgtype) | **[getType](classWombat_1_1MamaMsg.html#function-gettype)**()<br>Extract the type  |
| [mamaMsgStatus](namespaceWombat.html#enum-mamamsgstatus) | **[getStatus](classWombat_1_1MamaMsg.html#function-getstatus)**()<br>Return the status  |
| [mamaPayloadType](namespaceWombat.html#enum-mamapayloadtype) | **[getPayloadType](classWombat_1_1MamaMsg.html#function-getpayloadtype)**() |
| void | **[iterateFields](classWombat_1_1MamaMsg.html#function-iteratefields)**([MamaMsgFieldIterator](interfaceWombat_1_1MamaMsgFieldIterator.html) iterator, [MamaDictionary](classWombat_1_1MamaDictionary.html) dictionary, object closure)<br>Invoke the specified callback for each field in the message.  |
| void | **[clear](classWombat_1_1MamaMsg.html#function-clear)**()<br>Clear a msg. All fields are removed.  |
| void | **[destroy](classWombat_1_1MamaMsg.html#function-destroy)**()<br>Destroy a message and free any resources associated with it.  |
| int | **[getByteSize](classWombat_1_1MamaMsg.html#function-getbytesize)**()<br>Get the size of the underlying message in bytes. Only works for tibrvMsg and wombatmsg types.  |
| void | **[addBool](classWombat_1_1MamaMsg.html#function-addbool)**(string name, ushort fid, bool val)<br>Add a new bool field.  |
| void | **[addChar](classWombat_1_1MamaMsg.html#function-addchar)**(string name, ushort fid, char val)<br>Add a new char field.  |
| void | **[addI8](classWombat_1_1MamaMsg.html#function-addi8)**(string name, ushort fid, sbyte val)<br>Add a new 8 bit signed int field.  |
| void | **[addU8](classWombat_1_1MamaMsg.html#function-addu8)**(string name, ushort fid, byte val)<br>Add a new 8 bit unsigned int field.  |
| void | **[addI16](classWombat_1_1MamaMsg.html#function-addi16)**(string name, ushort fid, short val)<br>Add a new 16 bit signed int field.  |
| void | **[addU16](classWombat_1_1MamaMsg.html#function-addu16)**(string name, ushort fid, ushort val)<br>Add a new 16 bit unsigned int field.  |
| void | **[addI32](classWombat_1_1MamaMsg.html#function-addi32)**(string name, ushort fid, int val)<br>Add a new 32 bit unsigned int field.  |
| void | **[addU32](classWombat_1_1MamaMsg.html#function-addu32)**(string name, ushort fid, uint val)<br>Add a new 32 bit signed int field.  |
| void | **[addI64](classWombat_1_1MamaMsg.html#function-addi64)**(string name, ushort fid, long val)<br>Add a new I64 field.  |
| void | **[addU64](classWombat_1_1MamaMsg.html#function-addu64)**(string name, ushort fid, ulong val)<br>Add a new U64 field.  |
| void | **[addF32](classWombat_1_1MamaMsg.html#function-addf32)**(string name, ushort fid, float val)<br>Add a new float (f32) field.  |
| void | **[addF64](classWombat_1_1MamaMsg.html#function-addf64)**(string name, ushort fid, double val)<br>Add a new f64 field.  |
| void | **[addString](classWombat_1_1MamaMsg.html#function-addstring)**(string name, ushort fid, string val)<br>Add a string field.  |
| void | **[addOpaque](classWombat_1_1MamaMsg.html#function-addopaque)**(string name, ushort fid, byte[] val)<br>Add an opaque field.  |
| void | **[addDateTime](classWombat_1_1MamaMsg.html#function-adddatetime)**(string name, ushort fid, DateTime val)<br>Add a MAMA date/time field.  |
| void | **[addPrice](classWombat_1_1MamaMsg.html#function-addprice)**(string name, ushort fid, [MamaPrice](classWombat_1_1MamaPrice.html) val)<br>Add a MAMA price field.  |
| void | **[addMsg](classWombat_1_1MamaMsg.html#function-addmsg)**(string name, ushort fid, [MamaMsg](classWombat_1_1MamaMsg.html) val)<br>Add a [MamaMsg](classWombat_1_1MamaMsg.html) to the msg  |
| void | **[addVectorBool](classWombat_1_1MamaMsg.html#function-addvectorbool)**(string name, ushort fid, bool[] val)<br>Add an array of booleans to the message.  |
| void | **[addVectorChar](classWombat_1_1MamaMsg.html#function-addvectorchar)**(string name, ushort fid, char[] val)<br>Add an array of characters to the message.  |
| void | **[addVectorI8](classWombat_1_1MamaMsg.html#function-addvectori8)**(string name, ushort fid, sbyte[] val)<br>Add an array of signed 8 bit integers to the message.  |
| void | **[addVectorU8](classWombat_1_1MamaMsg.html#function-addvectoru8)**(string name, ushort fid, byte[] val)<br>Add an array of unsigned 8 bit integers to the message.  |
| void | **[addVectorI16](classWombat_1_1MamaMsg.html#function-addvectori16)**(string name, ushort fid, short[] val)<br>Add an array of signed 16 bit integers to the message.  |
| void | **[addVectorU16](classWombat_1_1MamaMsg.html#function-addvectoru16)**(string name, ushort fid, ushort[] val)<br>Add an array of unsigned 16 bit integers to the message.  |
| void | **[addVectorI32](classWombat_1_1MamaMsg.html#function-addvectori32)**(string name, ushort fid, int[] val)<br>Add an array of signed 32 bit integers to the message.  |
| void | **[addVectorU32](classWombat_1_1MamaMsg.html#function-addvectoru32)**(string name, ushort fid, uint[] val)<br>Add an array of unsigned 32 bit integers to the message.  |
| void | **[addVectorI64](classWombat_1_1MamaMsg.html#function-addvectori64)**(string name, ushort fid, long[] val)<br>Add an array of signed 64 bit integers to the message.  |
| void | **[addVectorU64](classWombat_1_1MamaMsg.html#function-addvectoru64)**(string name, ushort fid, ulong[] val)<br>Add an array of unsigned 64 bit integers to the message.  |
| void | **[addVectorF32](classWombat_1_1MamaMsg.html#function-addvectorf32)**(string name, ushort fid, float[] val)<br>Add an array of 32 bit floating point numbers to the message.  |
| void | **[addVectorF64](classWombat_1_1MamaMsg.html#function-addvectorf64)**(string name, ushort fid, double[] val)<br>Add an array of 64 bit floating point numbers to the message.  |
| void | **[addVectorDateTime](classWombat_1_1MamaMsg.html#function-addvectordatetime)**(string name, ushort fid, DateTime[] val)<br>Add an array of timestamps to the message.  |
| void | **[updateBool](classWombat_1_1MamaMsg.html#function-updatebool)**(string name, ushort fid, bool val)<br>Update the value of an existing bool field. If the field does not exist it is added.  |
| void | **[updateChar](classWombat_1_1MamaMsg.html#function-updatechar)**(string name, ushort fid, char val)<br>Update the value of an existing char field. If the field does not exist it is added.  |
| void | **[updateI8](classWombat_1_1MamaMsg.html#function-updatei8)**(string name, ushort fid, sbyte val)<br>Update the value of an existing I8 field. If the field does not exist it is added.  |
| void | **[updateU8](classWombat_1_1MamaMsg.html#function-updateu8)**(string name, ushort fid, byte val)<br>Update the value of an existing U8 field. If the field does not exist it is added.  |
| void | **[updateI16](classWombat_1_1MamaMsg.html#function-updatei16)**(string name, ushort fid, short val)<br>Update the value of an existing I16 field. If the field does not exist it is added.  |
| void | **[updateU16](classWombat_1_1MamaMsg.html#function-updateu16)**(string name, ushort fid, ushort val)<br>Update the value of an existing U16 field. If the field does not exist it is added.  |
| void | **[updateI32](classWombat_1_1MamaMsg.html#function-updatei32)**(string name, ushort fid, int val)<br>Update the value of an existing I32 field. If the field does not exist it is added.  |
| void | **[updateU32](classWombat_1_1MamaMsg.html#function-updateu32)**(string name, ushort fid, uint val)<br>Update the value of an existing U32 field. If the field does not exist it is added.  |
| void | **[updateI64](classWombat_1_1MamaMsg.html#function-updatei64)**(string name, ushort fid, long val)<br>Update the value of an existing I64 field. If the field does not exist it is added.  |
| void | **[updateU64](classWombat_1_1MamaMsg.html#function-updateu64)**(string name, ushort fid, ulong val)<br>Update the value of an existing U64 field. If the field does not exist it is added.  |
| void | **[updateF32](classWombat_1_1MamaMsg.html#function-updatef32)**(string name, ushort fid, float val)<br>Update the value of an existing float field. If the field does not exist it is added.  |
| void | **[updateF64](classWombat_1_1MamaMsg.html#function-updatef64)**(string name, ushort fid, double val)<br>Update the value of an existing f64 field. If the field does not exist it is added.  |
| void | **[updateString](classWombat_1_1MamaMsg.html#function-updatestring)**(string name, ushort fid, string val)<br>Update the value of an existing string field. If the field does not exist it is added.  |
| void | **[updateOpaque](classWombat_1_1MamaMsg.html#function-updateopaque)**(string name, ushort fid, byte[] val)<br>Update an opaque field.  |
| void | **[updateDateTime](classWombat_1_1MamaMsg.html#function-updatedatetime)**(string name, ushort fid, DateTime val)<br>Update a MAMA date/time field.  |
| void | **[updatePrice](classWombat_1_1MamaMsg.html#function-updateprice)**(string name, ushort fid, [MamaPrice](classWombat_1_1MamaPrice.html) val)<br>Update a MAMA price field.  |
| void | **[updateVectorBool](classWombat_1_1MamaMsg.html#function-updatevectorbool)**(string name, ushort fid, bool[] val)<br>Update an array of booleans.  |
| void | **[updateVectorChar](classWombat_1_1MamaMsg.html#function-updatevectorchar)**(string name, ushort fid, char[] val)<br>Update an array of characters.  |
| void | **[updateVectorI8](classWombat_1_1MamaMsg.html#function-updatevectori8)**(string name, ushort fid, sbyte[] val)<br>Update an array of signed 8 bit integers.  |
| void | **[updateVectorU8](classWombat_1_1MamaMsg.html#function-updatevectoru8)**(string name, ushort fid, byte[] val)<br>Update an array of unsigned 8 bit integers.  |
| void | **[updateVectorI16](classWombat_1_1MamaMsg.html#function-updatevectori16)**(string name, ushort fid, short[] val)<br>Update an array of signed 16 bit integers.  |
| void | **[updateVectorU16](classWombat_1_1MamaMsg.html#function-updatevectoru16)**(string name, ushort fid, ushort[] val)<br>Update an array of unsigned 16 bit integers.  |
| void | **[updateVectorI32](classWombat_1_1MamaMsg.html#function-updatevectori32)**(string name, ushort fid, int[] val)<br>Update an array of signed 32 bit integers.  |
| void | **[updateVectorU32](classWombat_1_1MamaMsg.html#function-updatevectoru32)**(string name, ushort fid, uint[] val)<br>Update an array of unsigned 32 bit integers.  |
| void | **[updateVectorI64](classWombat_1_1MamaMsg.html#function-updatevectori64)**(string name, ushort fid, long[] val)<br>Update an array of signed 64 bit integers.  |
| void | **[updateVectorU64](classWombat_1_1MamaMsg.html#function-updatevectoru64)**(string name, ushort fid, ulong[] val)<br>Update an array of unsigned 64 bit integers.  |
| void | **[updateVectorF32](classWombat_1_1MamaMsg.html#function-updatevectorf32)**(string name, ushort fid, float[] val)<br>Update an array of 32 bit floating point numbers.  |
| void | **[updateVectorF64](classWombat_1_1MamaMsg.html#function-updatevectorf64)**(string name, ushort fid, double[] val)<br>Update an array of 64 bit floating point numbers.  |
| void | **[updateVectorDateTime](classWombat_1_1MamaMsg.html#function-updatevectordatetime)**(string name, ushort fid, DateTime[] val)<br>Update an array of timestamps.  |
| bool | **[getBool](classWombat_1_1MamaMsg.html#function-getbool)**(string name, ushort fid)<br>Get a bool field.  |
| bool | **[getBool](classWombat_1_1MamaMsg.html#function-getbool)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a bool field.  |
| bool | **[getBool](classWombat_1_1MamaMsg.html#function-getbool)**(string name, ushort fid, bool valueIfMissing)<br>Get a bool field.  |
| bool | **[getBool](classWombat_1_1MamaMsg.html#function-getbool)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, bool valueIfMissing)<br>Get a bool field.  |
| char | **[getChar](classWombat_1_1MamaMsg.html#function-getchar)**(string name, ushort fid)<br>Get a char field.  |
| char | **[getChar](classWombat_1_1MamaMsg.html#function-getchar)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a char field.  |
| char | **[getChar](classWombat_1_1MamaMsg.html#function-getchar)**(string name, ushort fid, char valueIfMissing)<br>Get a char field.  |
| char | **[getChar](classWombat_1_1MamaMsg.html#function-getchar)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, char valueIfMissing)<br>Get a char field.  |
| sbyte | **[getI8](classWombat_1_1MamaMsg.html#function-geti8)**(string name, ushort fid)<br>Get a I8, signed 8 bit integer, field.  |
| sbyte | **[getI8](classWombat_1_1MamaMsg.html#function-geti8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a I8, signed 8 bit integer, field.  |
| sbyte | **[getI8](classWombat_1_1MamaMsg.html#function-geti8)**(string name, ushort fid, sbyte valueIfMissing)<br>Get a I8, signed 8 bit integer, field.  |
| sbyte | **[getI8](classWombat_1_1MamaMsg.html#function-geti8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, sbyte valueIfMissing)<br>Get a I8, signed 8 bit integer, field.  |
| byte | **[getU8](classWombat_1_1MamaMsg.html#function-getu8)**(string name, ushort fid)<br>Get a U8, unsigned 8 bit integer, field.  |
| byte | **[getU8](classWombat_1_1MamaMsg.html#function-getu8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a U8, unsigned 8 bit integer, field.  |
| byte | **[getU8](classWombat_1_1MamaMsg.html#function-getu8)**(string name, ushort fid, byte valueIfMissing)<br>Get a U8, unsigned 8 bit integer, field.  |
| byte | **[getU8](classWombat_1_1MamaMsg.html#function-getu8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, byte valueIfMissing)<br>Get a U8, unsigned 8 bit integer, field.  |
| short | **[getI16](classWombat_1_1MamaMsg.html#function-geti16)**(string name, ushort fid)<br>Get a I16, signed 16 bit integer, field.  |
| short | **[getI16](classWombat_1_1MamaMsg.html#function-geti16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a I16, signed 16 bit integer, field.  |
| short | **[getI16](classWombat_1_1MamaMsg.html#function-geti16)**(string name, ushort fid, short valueIfMissing)<br>Get a I16, signed 16 bit integer, field.  |
| short | **[getI16](classWombat_1_1MamaMsg.html#function-geti16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, short valueIfMissing)<br>Get a I16, signed 16 bit integer, field.  |
| ushort | **[getU16](classWombat_1_1MamaMsg.html#function-getu16)**(string name, ushort fid)<br>Get a U16, unsigned 16 bit integer, field.  |
| ushort | **[getU16](classWombat_1_1MamaMsg.html#function-getu16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a U16, unsigned 16 bit integer, field.  |
| ushort | **[getU16](classWombat_1_1MamaMsg.html#function-getu16)**(string name, ushort fid, ushort valueIfMissing)<br>Get a U16, unsigned 16 bit integer, field.  |
| ushort | **[getU16](classWombat_1_1MamaMsg.html#function-getu16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ushort valueIfMissing)<br>Get a U16, unsigned 16 bit integer, field.  |
| int | **[getI32](classWombat_1_1MamaMsg.html#function-geti32)**(string name, ushort fid)<br>Get a I32, signed 32 bit integer, field.  |
| int | **[getI32](classWombat_1_1MamaMsg.html#function-geti32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a I32, signed 32 bit integer, field.  |
| int | **[getI32](classWombat_1_1MamaMsg.html#function-geti32)**(string name, ushort fid, int valueIfMissing)<br>Get a I32, signed 32 bit integer, field.  |
| int | **[getI32](classWombat_1_1MamaMsg.html#function-geti32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, int valueIfMissing)<br>Get a I32, signed 32 bit integer, field.  |
| uint | **[getU32](classWombat_1_1MamaMsg.html#function-getu32)**(string name, ushort fid)<br>Get a U32, unsigned 32 bit integer, field.  |
| uint | **[getU32](classWombat_1_1MamaMsg.html#function-getu32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a U32, unsigned 32 bit integer, field.  |
| uint | **[getU32](classWombat_1_1MamaMsg.html#function-getu32)**(string name, ushort fid, uint valueIfMissing)<br>Get a U32, unsigned 32 bit integer, field.  |
| uint | **[getU32](classWombat_1_1MamaMsg.html#function-getu32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, uint valueIfMissing)<br>Get a U32, unsigned 32 bit integer, field.  |
| long | **[getI64](classWombat_1_1MamaMsg.html#function-geti64)**(string name, ushort fid)<br>Get a I64, signed 64 bit integer, field.  |
| long | **[getI64](classWombat_1_1MamaMsg.html#function-geti64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a I64, signed 64 bit integer, field.  |
| long | **[getI64](classWombat_1_1MamaMsg.html#function-geti64)**(string name, ushort fid, long valueIfMissing)<br>Get a I64, signed 64 bit integer, field.  |
| long | **[getI64](classWombat_1_1MamaMsg.html#function-geti64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, long valueIfMissing)<br>Get a I64, signed 64 bit integer, field.  |
| ulong | **[getU64](classWombat_1_1MamaMsg.html#function-getu64)**(string name, ushort fid)<br>Get a U64, unsigned 64 bit integer, field.  |
| ulong | **[getU64](classWombat_1_1MamaMsg.html#function-getu64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a U64, unsigned 64 bit integer, field.  |
| ulong | **[getU64](classWombat_1_1MamaMsg.html#function-getu64)**(string name, ushort fid, ulong valueIfMissing)<br>Get a U64, unsigned 64 bit integer, field.  |
| ulong | **[getU64](classWombat_1_1MamaMsg.html#function-getu64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ulong valueIfMissing)<br>Get a U64, unsigned 64 bit integer, field.  |
| float | **[getF32](classWombat_1_1MamaMsg.html#function-getf32)**(string name, ushort fid)<br>Get a float (f32) field.  |
| float | **[getF32](classWombat_1_1MamaMsg.html#function-getf32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a float (f32) field.  |
| float | **[getF32](classWombat_1_1MamaMsg.html#function-getf32)**(string name, ushort fid, float valueIfMissing)<br>Get a float (f32) field.  |
| float | **[getF32](classWombat_1_1MamaMsg.html#function-getf32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, float valueIfMissing)<br>Get a float (f32) field.  |
| double | **[getF64](classWombat_1_1MamaMsg.html#function-getf64)**(string name, ushort fid)<br>Get a F64 field.  |
| double | **[getF64](classWombat_1_1MamaMsg.html#function-getf64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a F64 field.  |
| double | **[getF64](classWombat_1_1MamaMsg.html#function-getf64)**(string name, ushort fid, double valueIfMissing)<br>Get a F64 field.  |
| double | **[getF64](classWombat_1_1MamaMsg.html#function-getf64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, double valueIfMissing)<br>Get a F64 field.  |
| string | **[getString](classWombat_1_1MamaMsg.html#function-getstring)**(string name, ushort fid)<br>Get a string field.  |
| bool | **[tryStringAnsi](classWombat_1_1MamaMsg.html#function-trystringansi)**(string name, ushort fid, ref IntPtr result) |
| bool | **[tryStringAnsi](classWombat_1_1MamaMsg.html#function-trystringansi)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref IntPtr result) |
| string | **[getString](classWombat_1_1MamaMsg.html#function-getstring)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a string field.  |
| string | **[getString](classWombat_1_1MamaMsg.html#function-getstring)**(string name, ushort fid, string valueIfMissing)<br>Get a string field.  |
| string | **[getString](classWombat_1_1MamaMsg.html#function-getstring)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, string valueIfMissing)<br>Get a string field.  |
| byte[] | **[getOpaque](classWombat_1_1MamaMsg.html#function-getopaque)**(string name, ushort fid)<br>Get an opaque field.  |
| byte[] | **[getOpaque](classWombat_1_1MamaMsg.html#function-getopaque)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a opaque field.  |
| byte[] | **[getOpaque](classWombat_1_1MamaMsg.html#function-getopaque)**(string name, ushort fid, byte[] valueIfMissing)<br>Get a opaque field.  |
| byte[] | **[getOpaque](classWombat_1_1MamaMsg.html#function-getopaque)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, byte[] valueIfMissing)<br>Get a opaque field.  |
| DateTime | **[getDateTime](classWombat_1_1MamaMsg.html#function-getdatetime)**(string name, ushort fid)<br>Get a MAMA date/time field.  |
| DateTime | **[getDateTime](classWombat_1_1MamaMsg.html#function-getdatetime)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a MAMA date/time field.  |
| DateTime | **[getDateTime](classWombat_1_1MamaMsg.html#function-getdatetime)**(string name, ushort fid, DateTime valueIfMissing)<br>Get a MAMA date/time field.  |
| DateTime | **[getDateTime](classWombat_1_1MamaMsg.html#function-getdatetime)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, DateTime valueIfMissing)<br>Get a MAMA date/time field.  |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[getPrice](classWombat_1_1MamaMsg.html#function-getprice)**(string name, ushort fid)<br>Get a MAMA price field.  |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[getPrice](classWombat_1_1MamaMsg.html#function-getprice)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a MAMA price field.  |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[getPrice](classWombat_1_1MamaMsg.html#function-getprice)**(string name, ushort fid, [MamaPrice](classWombat_1_1MamaPrice.html) valueIfMissing)<br>Get a MAMA price field.  |
| [MamaPrice](classWombat_1_1MamaPrice.html) | **[getPrice](classWombat_1_1MamaMsg.html#function-getprice)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, [MamaPrice](classWombat_1_1MamaPrice.html) valueIfMissing)<br>Get a MAMA price field.  |
| [MamaMsg](classWombat_1_1MamaMsg.html) | **[getMsg](classWombat_1_1MamaMsg.html#function-getmsg)**(string name, ushort fid)<br>Get a submessage.  |
| [MamaMsg](classWombat_1_1MamaMsg.html) | **[getMsg](classWombat_1_1MamaMsg.html#function-getmsg)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a submessage.  |
| [MamaMsg](classWombat_1_1MamaMsg.html) | **[getMsg](classWombat_1_1MamaMsg.html#function-getmsg)**(string name, ushort fid, [MamaMsg](classWombat_1_1MamaMsg.html) valueIfMissing)<br>Get a submessage.  |
| [MamaMsg](classWombat_1_1MamaMsg.html) | **[getMsg](classWombat_1_1MamaMsg.html#function-getmsg)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, [MamaMsg](classWombat_1_1MamaMsg.html) valueIfMissing)<br>Get a submessage.  |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) | **[getField](classWombat_1_1MamaMsg.html#function-getfield)**(string name, ushort fid)<br>Get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object.  |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) | **[getField](classWombat_1_1MamaMsg.html#function-getfield)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object.  |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) | **[getField](classWombat_1_1MamaMsg.html#function-getfield)**(string name, ushort fid, [MamaMsgField](classWombat_1_1MamaMsgField.html) valueIfMissing)<br>Get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object.  |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) | **[getField](classWombat_1_1MamaMsg.html#function-getfield)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, [MamaMsgField](classWombat_1_1MamaMsgField.html) valueIfMissing)<br>Get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object.  |
| bool[] | **[getVectorBool](classWombat_1_1MamaMsg.html#function-getvectorbool)**(string name, ushort fid)<br>Get a vector of booleans.  |
| bool[] | **[getVectorBool](classWombat_1_1MamaMsg.html#function-getvectorbool)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of booleans.  |
| bool[] | **[getVectorBool](classWombat_1_1MamaMsg.html#function-getvectorbool)**(string name, ushort fid, bool[] valueIfMissing)<br>Get a vector of booleans.  |
| bool[] | **[getVectorBool](classWombat_1_1MamaMsg.html#function-getvectorbool)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, bool[] valueIfMissing)<br>Get a vector of booleans.  |
| char[] | **[getVectorChar](classWombat_1_1MamaMsg.html#function-getvectorchar)**(string name, ushort fid)<br>Get a vector of chars.  |
| char[] | **[getVectorChar](classWombat_1_1MamaMsg.html#function-getvectorchar)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of chars.  |
| char[] | **[getVectorChar](classWombat_1_1MamaMsg.html#function-getvectorchar)**(string name, ushort fid, char[] valueIfMissing)<br>Get a vector of chars.  |
| char[] | **[getVectorChar](classWombat_1_1MamaMsg.html#function-getvectorchar)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, char[] valueIfMissing)<br>Get a vector of chars.  |
| sbyte[] | **[getVectorI8](classWombat_1_1MamaMsg.html#function-getvectori8)**(string name, ushort fid)<br>Get a vector of signed 8 bit integers.  |
| sbyte[] | **[getVectorI8](classWombat_1_1MamaMsg.html#function-getvectori8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of signed 8 bit integers.  |
| sbyte[] | **[getVectorI8](classWombat_1_1MamaMsg.html#function-getvectori8)**(string name, ushort fid, sbyte[] valueIfMissing)<br>Get a vector of signed 8 bit integers.  |
| sbyte[] | **[getVectorI8](classWombat_1_1MamaMsg.html#function-getvectori8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, sbyte[] valueIfMissing)<br>Get a vector of signed 8 bit integers.  |
| byte[] | **[getVectorU8](classWombat_1_1MamaMsg.html#function-getvectoru8)**(string name, ushort fid)<br>Get a vector of unsigned 8 bit integers.  |
| byte[] | **[getVectorU8](classWombat_1_1MamaMsg.html#function-getvectoru8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of unsigned 8 bit integers.  |
| byte[] | **[getVectorU8](classWombat_1_1MamaMsg.html#function-getvectoru8)**(string name, ushort fid, byte[] valueIfMissing)<br>Get a vector of unsigned 8 bit integers.  |
| byte[] | **[getVectorU8](classWombat_1_1MamaMsg.html#function-getvectoru8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, byte[] valueIfMissing)<br>Get a vector of unsigned 8 bit integers.  |
| short[] | **[getVectorI16](classWombat_1_1MamaMsg.html#function-getvectori16)**(string name, ushort fid)<br>Get a vector of signed 16 bit integers.  |
| short[] | **[getVectorI16](classWombat_1_1MamaMsg.html#function-getvectori16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of signed 16 bit integers.  |
| short[] | **[getVectorI16](classWombat_1_1MamaMsg.html#function-getvectori16)**(string name, ushort fid, short[] valueIfMissing)<br>Get a vector of signed 16 bit integers.  |
| short[] | **[getVectorI16](classWombat_1_1MamaMsg.html#function-getvectori16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, short[] valueIfMissing)<br>Get a vector of signed 16 bit integers.  |
| ushort[] | **[getVectorU16](classWombat_1_1MamaMsg.html#function-getvectoru16)**(string name, ushort fid)<br>Get a vector of unsigned 16 bit integers.  |
| ushort[] | **[getVectorU16](classWombat_1_1MamaMsg.html#function-getvectoru16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of unsigned 16 bit integers.  |
| ushort[] | **[getVectorU16](classWombat_1_1MamaMsg.html#function-getvectoru16)**(string name, ushort fid, ushort[] valueIfMissing)<br>Get a vector of unsigned 16 bit integers.  |
| ushort[] | **[getVectorU16](classWombat_1_1MamaMsg.html#function-getvectoru16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ushort[] valueIfMissing)<br>Get a vector of unsigned 16 bit integers.  |
| int[] | **[getVectorI32](classWombat_1_1MamaMsg.html#function-getvectori32)**(string name, ushort fid)<br>Get a vector of signed 32 bit integers.  |
| int[] | **[getVectorI32](classWombat_1_1MamaMsg.html#function-getvectori32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of signed 32 bit integers.  |
| int[] | **[getVectorI32](classWombat_1_1MamaMsg.html#function-getvectori32)**(string name, ushort fid, int[] valueIfMissing)<br>Get a vector of signed 32 bit integers.  |
| int[] | **[getVectorI32](classWombat_1_1MamaMsg.html#function-getvectori32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, int[] valueIfMissing)<br>Get a vector of signed 32 bit integers.  |
| uint[] | **[getVectorU32](classWombat_1_1MamaMsg.html#function-getvectoru32)**(string name, ushort fid)<br>Get a vector of unsigned 32 bit integers.  |
| uint[] | **[getVectorU32](classWombat_1_1MamaMsg.html#function-getvectoru32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of unsigned 32 bit integers.  |
| uint[] | **[getVectorU32](classWombat_1_1MamaMsg.html#function-getvectoru32)**(string name, ushort fid, uint[] valueIfMissing)<br>Get a vector of unsigned 32 bit integers.  |
| uint[] | **[getVectorU32](classWombat_1_1MamaMsg.html#function-getvectoru32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, uint[] valueIfMissing)<br>Get a vector of unsigned 32 bit integers.  |
| long[] | **[getVectorI64](classWombat_1_1MamaMsg.html#function-getvectori64)**(string name, ushort fid)<br>Get a vector of signed 64 bit integers.  |
| long[] | **[getVectorI64](classWombat_1_1MamaMsg.html#function-getvectori64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of signed 64 bit integers.  |
| long[] | **[getVectorI64](classWombat_1_1MamaMsg.html#function-getvectori64)**(string name, ushort fid, long[] valueIfMissing)<br>Get a vector of signed 64 bit integers.  |
| long[] | **[getVectorI64](classWombat_1_1MamaMsg.html#function-getvectori64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, long[] valueIfMissing)<br>Get a vector of signed 64 bit integers.  |
| ulong[] | **[getVectorU64](classWombat_1_1MamaMsg.html#function-getvectoru64)**(string name, ushort fid)<br>Get a vector of unsigned 64 bit integers.  |
| ulong[] | **[getVectorU64](classWombat_1_1MamaMsg.html#function-getvectoru64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of unsigned 64 bit integers.  |
| ulong[] | **[getVectorU64](classWombat_1_1MamaMsg.html#function-getvectoru64)**(string name, ushort fid, ulong[] valueIfMissing)<br>Get a vector of unsigned 64 bit integers.  |
| ulong[] | **[getVectorU64](classWombat_1_1MamaMsg.html#function-getvectoru64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ulong[] valueIfMissing)<br>Get a vector of unsigned 64 bit integers.  |
| float[] | **[getVectorF32](classWombat_1_1MamaMsg.html#function-getvectorf32)**(string name, ushort fid)<br>Get a vector of 32 bit floating point numbers.  |
| float[] | **[getVectorF32](classWombat_1_1MamaMsg.html#function-getvectorf32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of 32 bit floating point numbers.  |
| float[] | **[getVectorF32](classWombat_1_1MamaMsg.html#function-getvectorf32)**(string name, ushort fid, float[] valueIfMissing)<br>Get a vector of 32 bit floating point numbers.  |
| float[] | **[getVectorF32](classWombat_1_1MamaMsg.html#function-getvectorf32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, float[] valueIfMissing)<br>Get a vector of 32 bit floating point numbers.  |
| double[] | **[getVectorF64](classWombat_1_1MamaMsg.html#function-getvectorf64)**(string name, ushort fid)<br>Get a vector of 64 bit floating point numbers.  |
| double[] | **[getVectorF64](classWombat_1_1MamaMsg.html#function-getvectorf64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of 64 bit floating point numbers.  |
| double[] | **[getVectorF64](classWombat_1_1MamaMsg.html#function-getvectorf64)**(string name, ushort fid, double[] valueIfMissing)<br>Get a vector of 64 bit floating point numbers.  |
| double[] | **[getVectorF64](classWombat_1_1MamaMsg.html#function-getvectorf64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, double[] valueIfMissing)<br>Get a vector of 64 bit floating point numbers.  |
| string[] | **[getVectorString](classWombat_1_1MamaMsg.html#function-getvectorstring)**(string name, ushort fid)<br>Get a vector of strings (char*).  |
| string[] | **[getVectorString](classWombat_1_1MamaMsg.html#function-getvectorstring)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of strings (char*).  |
| string[] | **[getVectorString](classWombat_1_1MamaMsg.html#function-getvectorstring)**(string name, ushort fid, string[] valueIfMissing)<br>Get a vector of strings (char*).  |
| string[] | **[getVectorString](classWombat_1_1MamaMsg.html#function-getvectorstring)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, string[] valueIfMissing)<br>Get a vector of strings (char*).  |
| DateTime[] | **[getVectorDateTime](classWombat_1_1MamaMsg.html#function-getvectordatetime)**(string name, ushort fid)<br>Get a vector of timestamps.  |
| DateTime[] | **[getVectorDateTime](classWombat_1_1MamaMsg.html#function-getvectordatetime)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of timestamps.  |
| DateTime[] | **[getVectorDateTime](classWombat_1_1MamaMsg.html#function-getvectordatetime)**(string name, ushort fid, DateTime[] valueIfMissing)<br>Get a vector of timestamps.  |
| DateTime[] | **[getVectorDateTime](classWombat_1_1MamaMsg.html#function-getvectordatetime)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, DateTime[] valueIfMissing)<br>Get a vector of timestamps.  |
| [MamaPrice](classWombat_1_1MamaPrice.html)[] | **[getVectorPrice](classWombat_1_1MamaMsg.html#function-getvectorprice)**(string name, ushort fid)<br>Get a vector of prices.  |
| [MamaPrice](classWombat_1_1MamaPrice.html)[] | **[getVectorPrice](classWombat_1_1MamaMsg.html#function-getvectorprice)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of prices.  |
| [MamaPrice](classWombat_1_1MamaPrice.html)[] | **[getVectorPrice](classWombat_1_1MamaMsg.html#function-getvectorprice)**(string name, ushort fid, [MamaPrice](classWombat_1_1MamaPrice.html)[] valueIfMissing)<br>Get a vector of prices.  |
| [MamaPrice](classWombat_1_1MamaPrice.html)[] | **[getVectorPrice](classWombat_1_1MamaMsg.html#function-getvectorprice)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, [MamaPrice](classWombat_1_1MamaPrice.html)[] valueIfMissing)<br>Get a vector of prices.  |
| [MamaMsg](classWombat_1_1MamaMsg.html)[] | **[getVectorMsg](classWombat_1_1MamaMsg.html#function-getvectormsg)**(string name, ushort fid)<br>Get a vector of submessages.  |
| [MamaMsg](classWombat_1_1MamaMsg.html)[] | **[getVectorMsg](classWombat_1_1MamaMsg.html#function-getvectormsg)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor)<br>Get a vector of submessages.  |
| [MamaMsg](classWombat_1_1MamaMsg.html)[] | **[getVectorMsg](classWombat_1_1MamaMsg.html#function-getvectormsg)**(string name, ushort fid, [MamaMsg](classWombat_1_1MamaMsg.html)[] valueIfMissing)<br>Get a vector of submessages.  |
| [MamaMsg](classWombat_1_1MamaMsg.html)[] | **[getVectorMsg](classWombat_1_1MamaMsg.html#function-getvectormsg)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, [MamaMsg](classWombat_1_1MamaMsg.html)[] valueIfMissing)<br>Get a vector of submessages.  |
| bool | **[tryBool](classWombat_1_1MamaMsg.html#function-trybool)**(string name, ushort fid, ref bool result)<br>Try to get a bool field.  |
| bool | **[tryBool](classWombat_1_1MamaMsg.html#function-trybool)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref bool result)<br>Try to get a bool field.  |
| bool | **[tryChar](classWombat_1_1MamaMsg.html#function-trychar)**(string name, ushort fid, ref char result)<br>Try to get a char field.  |
| bool | **[tryChar](classWombat_1_1MamaMsg.html#function-trychar)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref char result)<br>Try to get a char field.  |
| bool | **[tryI8](classWombat_1_1MamaMsg.html#function-tryi8)**(string name, ushort fid, ref sbyte result)<br>Try to get a I8, signed 8 bit integer, field.  |
| bool | **[tryI8](classWombat_1_1MamaMsg.html#function-tryi8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref sbyte result)<br>Try to get a I8, signed 8 bit integer, field.  |
| bool | **[tryU8](classWombat_1_1MamaMsg.html#function-tryu8)**(string name, ushort fid, ref byte result)<br>Try to get a I8, signed 8 bit integer, field.  |
| bool | **[tryU8](classWombat_1_1MamaMsg.html#function-tryu8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref byte result)<br>Try to get a I8, signed 8 bit integer, field.  |
| bool | **[tryI16](classWombat_1_1MamaMsg.html#function-tryi16)**(string name, ushort fid, ref short result)<br>Try to get a I16, signed 16 bit integer, field.  |
| bool | **[tryI16](classWombat_1_1MamaMsg.html#function-tryi16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref short result)<br>Try to get a I16, signed 16 bit integer, field.  |
| bool | **[tryU16](classWombat_1_1MamaMsg.html#function-tryu16)**(string name, ushort fid, ref ushort result)<br>Try to get a U16, unsigned 16 bit integer, field.  |
| bool | **[tryU16](classWombat_1_1MamaMsg.html#function-tryu16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref ushort result)<br>Try to get a U16, unsigned 16 bit integer, field.  |
| bool | **[tryU32](classWombat_1_1MamaMsg.html#function-tryu32)**(string name, ushort fid, ref uint result)<br>Try to get a U32, unsigned 32 bit integer, field.  |
| bool | **[tryU32](classWombat_1_1MamaMsg.html#function-tryu32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref uint result)<br>Try to get a U32, unsigned 32 bit integer, field.  |
| bool | **[tryI32](classWombat_1_1MamaMsg.html#function-tryi32)**(string name, ushort fid, ref int result)<br>Try to get a I32, signed 32 bit integer, field.  |
| bool | **[tryI32](classWombat_1_1MamaMsg.html#function-tryi32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref int result)<br>Try to get a I32, signed 32 bit integer, field.  |
| bool | **[tryI64](classWombat_1_1MamaMsg.html#function-tryi64)**(string name, ushort fid, ref long result)<br><overloads>Try to get a signed 64-bit integer field</overloads>  |
| bool | **[tryI64](classWombat_1_1MamaMsg.html#function-tryi64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref long result) |
| bool | **[tryU64](classWombat_1_1MamaMsg.html#function-tryu64)**(string name, ushort fid, ref ulong result)<br>Try to get a U64, unsigned 64 bit integer, field.  |
| bool | **[tryU64](classWombat_1_1MamaMsg.html#function-tryu64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref ulong result)<br>Try to get a U64, unsigned 64 bit integer, field.  |
| bool | **[tryF32](classWombat_1_1MamaMsg.html#function-tryf32)**(string name, ushort fid, ref float result)<br>Try to get a float (f32) field.  |
| bool | **[tryF32](classWombat_1_1MamaMsg.html#function-tryf32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref float result)<br>Try to get a float (f32) field.  |
| bool | **[tryF64](classWombat_1_1MamaMsg.html#function-tryf64)**(string name, ushort fid, ref double result)<br>Try to get a f64 field.  |
| bool | **[tryF64](classWombat_1_1MamaMsg.html#function-tryf64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref double result)<br>Try to get a f64 field.  |
| bool | **[tryString](classWombat_1_1MamaMsg.html#function-trystring)**(string name, ushort fid, ref string result)<br>Try to get a string field.  |
| bool | **[tryString](classWombat_1_1MamaMsg.html#function-trystring)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref string result)<br>Try to get a string field.  |
| bool | **[tryOpaque](classWombat_1_1MamaMsg.html#function-tryopaque)**(string name, ushort fid, ref byte[] result)<br>Try to get an opaque field.  |
| bool | **[tryOpaque](classWombat_1_1MamaMsg.html#function-tryopaque)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref byte[] result)<br>Try to get an opaque field.  |
| bool | **[tryDateTime](classWombat_1_1MamaMsg.html#function-trydatetime)**(string name, ushort fid, ref DateTime result) |
| bool | **[tryDateTime](classWombat_1_1MamaMsg.html#function-trydatetime)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref DateTime result) |
| bool | **[tryPrice](classWombat_1_1MamaMsg.html#function-tryprice)**(string name, ushort fid, ref [MamaPrice](classWombat_1_1MamaPrice.html) result)<br>Try to get a MAMA price field.  |
| bool | **[tryPrice](classWombat_1_1MamaMsg.html#function-tryprice)**(string name, ushort fid, [MamaPrice](classWombat_1_1MamaPrice.html) result) |
| bool | **[tryPrice](classWombat_1_1MamaMsg.html#function-tryprice)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref [MamaPrice](classWombat_1_1MamaPrice.html) result)<br>Try to get a MAMA price field.  |
| bool | **[tryMsg](classWombat_1_1MamaMsg.html#function-trymsg)**(string name, ushort fid, ref [MamaMsg](classWombat_1_1MamaMsg.html) result)<br>Try to get a submessage.  |
| bool | **[tryMsg](classWombat_1_1MamaMsg.html#function-trymsg)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref [MamaMsg](classWombat_1_1MamaMsg.html) result)<br>Try to get a submessage.  |
| bool | **[tryVectorBool](classWombat_1_1MamaMsg.html#function-tryvectorbool)**(string name, ushort fid, ref bool[] result)<br>Try to get a vector of booleans.  |
| bool | **[tryVectorBool](classWombat_1_1MamaMsg.html#function-tryvectorbool)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref bool[] result)<br>Try to get a vector of booleans.  |
| bool | **[tryVectorChar](classWombat_1_1MamaMsg.html#function-tryvectorchar)**(string name, ushort fid, ref char[] result)<br>Try to get a vector of chars.  |
| bool | **[tryVectorChar](classWombat_1_1MamaMsg.html#function-tryvectorchar)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref char[] result)<br>Try to get a vector of chars.  |
| bool | **[tryVectorI8](classWombat_1_1MamaMsg.html#function-tryvectori8)**(string name, ushort fid, ref sbyte[] result)<br>Try to get a vector of signed 8 bit integers.  |
| bool | **[tryVectorI8](classWombat_1_1MamaMsg.html#function-tryvectori8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref sbyte[] result)<br>Try to get a vector of signed 8 bit integers.  |
| bool | **[tryVectorU8](classWombat_1_1MamaMsg.html#function-tryvectoru8)**(string name, ushort fid, ref byte[] result)<br>Try to get a vector of unsigned 8 bit integers.  |
| bool | **[tryVectorU8](classWombat_1_1MamaMsg.html#function-tryvectoru8)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref byte[] result)<br>Try to get a vector of unsigned 8 bit integers.  |
| bool | **[tryVectorI16](classWombat_1_1MamaMsg.html#function-tryvectori16)**(string name, ushort fid, ref short[] result)<br>Try to get a vector of signed 16 bit integers.  |
| bool | **[tryVectorI16](classWombat_1_1MamaMsg.html#function-tryvectori16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref short[] result)<br>Try to get a vector of signed 16 bit integers.  |
| bool | **[tryVectorU16](classWombat_1_1MamaMsg.html#function-tryvectoru16)**(string name, ushort fid, ref ushort[] result)<br>Try to get a vector of unsigned 16 bit integers.  |
| bool | **[tryVectorU16](classWombat_1_1MamaMsg.html#function-tryvectoru16)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref ushort[] result)<br>Try to get a vector of unsigned 16 bit integers.  |
| bool | **[tryVectorI32](classWombat_1_1MamaMsg.html#function-tryvectori32)**(string name, ushort fid, ref int[] result)<br>Try to get a vector of signed 32 bit integers.  |
| bool | **[tryVectorI32](classWombat_1_1MamaMsg.html#function-tryvectori32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref int[] result)<br>Try to get a vector of signed 32 bit integers.  |
| bool | **[tryVectorU32](classWombat_1_1MamaMsg.html#function-tryvectoru32)**(string name, ushort fid, ref uint[] result)<br>Try to get a vector of unsigned 32 bit integers.  |
| bool | **[tryVectorU32](classWombat_1_1MamaMsg.html#function-tryvectoru32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref uint[] result)<br>Try to get a vector of unsigned 32 bit integers.  |
| bool | **[tryVectorI64](classWombat_1_1MamaMsg.html#function-tryvectori64)**(string name, ushort fid, ref long[] result)<br>Try get a vector of signed 64 bit integers.  |
| bool | **[tryVectorI64](classWombat_1_1MamaMsg.html#function-tryvectori64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref long[] result)<br>Try get a vector of signed 64 bit integers.  |
| bool | **[tryVectorU64](classWombat_1_1MamaMsg.html#function-tryvectoru64)**(string name, ushort fid, ref ulong[] result)<br>Try to get a vector of unsigned 64 bit integers.  |
| bool | **[tryVectorU64](classWombat_1_1MamaMsg.html#function-tryvectoru64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref ulong[] result)<br>Try to get a vector of unsigned 64 bit integers.  |
| bool | **[tryVectorF32](classWombat_1_1MamaMsg.html#function-tryvectorf32)**(string name, ushort fid, ref float[] result)<br>Try to get a vector of 32 bit floating point numbers.  |
| bool | **[tryVectorF32](classWombat_1_1MamaMsg.html#function-tryvectorf32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref float[] result)<br>Try to get a vector of 32 bit floating point numbers.  |
| bool | **[tryVectorF64](classWombat_1_1MamaMsg.html#function-tryvectorf64)**(string name, ushort fid, ref double[] result)<br>Try to get a vector of 64 bit floating point numbers.  |
| bool | **[tryVectorF64](classWombat_1_1MamaMsg.html#function-tryvectorf64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref double[] result)<br>Try to get a vector of 64 bit floating point numbers.  |
| bool | **[tryVectorString](classWombat_1_1MamaMsg.html#function-tryvectorstring)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref string[] result)<br>Try to get a vector of strings (char*).  |
| bool | **[tryVectorDateTime](classWombat_1_1MamaMsg.html#function-tryvectordatetime)**(string name, ushort fid, ref DateTime[] result)<br>Try to get a vector of timestamps.  |
| bool | **[tryVectorDateTime](classWombat_1_1MamaMsg.html#function-tryvectordatetime)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref DateTime[] result)<br>Try to get a vector of timestamps.  |
| bool | **[tryVectorPrice](classWombat_1_1MamaMsg.html#function-tryvectorprice)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref [MamaPrice](classWombat_1_1MamaPrice.html)[] result)<br>Try to get a vector of prices.  |
| bool | **[tryVectorMsg](classWombat_1_1MamaMsg.html#function-tryvectormsg)**(string name, ushort fid, ref [MamaMsg](classWombat_1_1MamaMsg.html)[] result) |
| bool | **[tryVectorMsg](classWombat_1_1MamaMsg.html#function-tryvectormsg)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref [MamaMsg](classWombat_1_1MamaMsg.html)[] result) |
| bool | **[tryField](classWombat_1_1MamaMsg.html#function-tryfield)**(string name, ushort fid, ref [MamaMsgField](classWombat_1_1MamaMsgField.html) result)<br>Try to get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object.  |
| bool | **[tryField](classWombat_1_1MamaMsg.html#function-tryfield)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref [MamaMsgField](classWombat_1_1MamaMsgField.html) result)<br>Try to get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object.  |
| bool | **[tryI32](classWombat_1_1MamaMsg.html#function-tryi32)**(string name, ushort fid, ref [NullableInt](structWombat_1_1NullableInt.html) result)<br><overloads>Try to get a signed 32-bit integer field</overloads>  |
| bool | **[tryI32](classWombat_1_1MamaMsg.html#function-tryi32)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref [NullableInt](structWombat_1_1NullableInt.html) result) |
| bool | **[tryI64](classWombat_1_1MamaMsg.html#function-tryi64)**(string name, ushort fid, ref [NullableLong](structWombat_1_1NullableLong.html) result)<br><overloads>Try to get a signed 64-bit integer field</overloads>  |
| bool | **[tryI64](classWombat_1_1MamaMsg.html#function-tryi64)**([MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) descriptor, ref [NullableLong](structWombat_1_1NullableLong.html) result) |
| int | **[getNumFields](classWombat_1_1MamaMsg.html#function-getnumfields)**()<br>Returns the total number of fields in the message. Sub-messages count as a single field.  |
| override string | **[ToString](classWombat_1_1MamaMsg.html#function-tostring)**()<br>Return a string representation the message.  |
| string | **[ToJsonString](classWombat_1_1MamaMsg.html#function-tojsonstring)**()<br>Return a json string representation the message.  |
| string | **[ToJsonString](classWombat_1_1MamaMsg.html#function-tojsonstring)**([MamaDictionary](classWombat_1_1MamaDictionary.html) dictionary)<br>Return a json string representation the message.  |
| string | **[ToNormalizedString](classWombat_1_1MamaMsg.html#function-tonormalizedstring)**()<br>Return a normalized string representation the message.  |
| int | **[getEntitleCode](classWombat_1_1MamaMsg.html#function-getentitlecode)**()<br>Get the entitle code for this message. The result defaults to 0 (no entitlement) if the field is not present.  |
| uint | **[getSeqNum](classWombat_1_1MamaMsg.html#function-getseqnum)**()<br>Return the sequence  |
| [mamaMsgType](namespaceWombat.html#enum-mamamsgtype) | **[typeForMsg](classWombat_1_1MamaMsg.html#function-typeformsg)**()<br>Extract the type from the supplied message.  |
| string | **[stringForMsg](classWombat_1_1MamaMsg.html#function-stringformsg)**()<br>Return the string for this message  |
| string | **[stringForType](classWombat_1_1MamaMsg.html#function-stringfortype)**([mamaMsgType](namespaceWombat.html#enum-mamamsgtype) type)<br>Return the type name.  |
| string | **[stringForStatus](classWombat_1_1MamaMsg.html#function-stringforstatus)**([mamaMsgStatus](namespaceWombat.html#enum-mamamsgstatus) type)<br>Return the status string  |
| string | **[getFieldAsString](classWombat_1_1MamaMsg.html#function-getfieldasstring)**(string name, ushort fid)<br>Return the field value as string  |
| void | **[begin](classWombat_1_1MamaMsg.html#function-begin)**(ref [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) iterator) |
| void | **[end](classWombat_1_1MamaMsg.html#function-end)**(ref [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) iterator) |
| void | **[addVectorString](classWombat_1_1MamaMsg.html#function-addvectorstring)**(string name, ushort fid, string[] val)<br>Add an array of strings (char*) to the message.  |
| void | **[addVectorPrice](classWombat_1_1MamaMsg.html#function-addvectorprice)**(string name, ushort fid, [MamaPrice](classWombat_1_1MamaPrice.html)[] val)<br>Add an array of prices to the message.  |
| void | **[addVectorMsg](classWombat_1_1MamaMsg.html#function-addvectormsg)**(string name, ushort fid, [MamaMsg](classWombat_1_1MamaMsg.html)[] val)<br>Add an array of nativeHandle objects to the message.  |
| void | **[updateVectorString](classWombat_1_1MamaMsg.html#function-updatevectorstring)**(string name, ushort fid, string[] val)<br>Update an array of strings (char*).  |
| void | **[updateVectorPrice](classWombat_1_1MamaMsg.html#function-updatevectorprice)**(string name, ushort fid, [MamaPrice](classWombat_1_1MamaPrice.html)[] val)<br>Update an array of prices.  |
| void | **[updateVectorMsg](classWombat_1_1MamaMsg.html#function-updatevectormsg)**(string name, ushort fid, [MamaMsg](classWombat_1_1MamaMsg.html)[] val)<br>Update an array of nativeHandle objects.  |
| bool | **[tryVectorString](classWombat_1_1MamaMsg.html#function-tryvectorstring)**(string name, ushort fid, ref string[] result)<br>Try to get a vector of strings (char*).  |
| bool | **[tryVectorPrice](classWombat_1_1MamaMsg.html#function-tryvectorprice)**(string name, ushort fid, ref [MamaPrice](classWombat_1_1MamaPrice.html)[] result)<br>Try to get a vector of prices.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override void | **[OnDispose](classWombat_1_1MamaMsg.html#function-ondispose)**() |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaMsg.html#function-destroynativepeer)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[isFromInbox](classWombat_1_1MamaMsg.html#property-isfrominbox)**  |

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

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Public Functions Documentation

### function MamaMsg

```csharp
MamaMsg()
```

Create a msg using the default payload. 

### function MamaMsg

```csharp
MamaMsg(
    mamaPayloadType payloadId
)
```

NOTE: This function has been deprecated in line with the deprecation of the mamaPayloadType enum. Create a msg using the payload specified. The payload ID to create the message for

### function MamaMsg

```csharp
MamaMsg(
    char payloadId
)
```

Create a msg using the payload specified. Char identifying the payload to create the msg for

### function MamaMsg

```csharp
MamaMsg(
    MamaPayloadBridge payloadBridge
)
```

Create a msg using the payload bridge specified. 

**Parameters**: 

  * **payloadBridge** The payload bridge to create the message for


### function MamaMsg

```csharp
MamaMsg(
    MamaMsg mamaMsgSrc
)
```

Create a deep copy of a message. 

### function getByteBuffer

```csharp
void getByteBuffer(
    ref byte[] byteBuffer,
    ref int size
)
```


### function createFromBuffer

```csharp
void createFromBuffer(
    byte[] byteBuffer,
    int size
)
```


### function createForBridgeFromBuffer

```csharp
void createForBridgeFromBuffer(
    byte[] byteBuffer,
    int size,
    MamaBridge bridgeImpl
)
```


### function detach

```csharp
MamaMsg detach()
```


### function getType

```csharp
mamaMsgType getType()
```

Extract the type 

**Return**: 

### function getStatus

```csharp
mamaMsgStatus getStatus()
```

Return the status 

**Return**: 


summary> Return the payload type /summary> 


### function getPayloadType

```csharp
mamaPayloadType getPayloadType()
```


### function iterateFields

```csharp
void iterateFields(
    MamaMsgFieldIterator iterator,
    MamaDictionary dictionary,
    object closure
)
```

Invoke the specified callback for each field in the message. 

**Parameters**: 

  * **iterator** 
  * **dictionary** 
  * **closure** 


### function clear

```csharp
void clear()
```

Clear a msg. All fields are removed. 

### function destroy

```csharp
void destroy()
```

Destroy a message and free any resources associated with it. 

### function getByteSize

```csharp
int getByteSize()
```

Get the size of the underlying message in bytes. Only works for tibrvMsg and wombatmsg types. 

### function addBool

```csharp
void addBool(
    string name,
    ushort fid,
    bool val
)
```

Add a new bool field. 

### function addChar

```csharp
void addChar(
    string name,
    ushort fid,
    char val
)
```

Add a new char field. 

### function addI8

```csharp
void addI8(
    string name,
    ushort fid,
    sbyte val
)
```

Add a new 8 bit signed int field. 

### function addU8

```csharp
void addU8(
    string name,
    ushort fid,
    byte val
)
```

Add a new 8 bit unsigned int field. 

### function addI16

```csharp
void addI16(
    string name,
    ushort fid,
    short val
)
```

Add a new 16 bit signed int field. 

### function addU16

```csharp
void addU16(
    string name,
    ushort fid,
    ushort val
)
```

Add a new 16 bit unsigned int field. 

### function addI32

```csharp
void addI32(
    string name,
    ushort fid,
    int val
)
```

Add a new 32 bit unsigned int field. 

### function addU32

```csharp
void addU32(
    string name,
    ushort fid,
    uint val
)
```

Add a new 32 bit signed int field. 

### function addI64

```csharp
void addI64(
    string name,
    ushort fid,
    long val
)
```

Add a new I64 field. 

### function addU64

```csharp
void addU64(
    string name,
    ushort fid,
    ulong val
)
```

Add a new U64 field. 

### function addF32

```csharp
void addF32(
    string name,
    ushort fid,
    float val
)
```

Add a new float (f32) field. 

### function addF64

```csharp
void addF64(
    string name,
    ushort fid,
    double val
)
```

Add a new f64 field. 

### function addString

```csharp
void addString(
    string name,
    ushort fid,
    string val
)
```

Add a string field. 

### function addOpaque

```csharp
void addOpaque(
    string name,
    ushort fid,
    byte[] val
)
```

Add an opaque field. 

### function addDateTime

```csharp
void addDateTime(
    string name,
    ushort fid,
    DateTime val
)
```

Add a MAMA date/time field. 

### function addPrice

```csharp
void addPrice(
    string name,
    ushort fid,
    MamaPrice val
)
```

Add a MAMA price field. 

### function addMsg

```csharp
void addMsg(
    string name,
    ushort fid,
    MamaMsg val
)
```

Add a [MamaMsg](classWombat_1_1MamaMsg.html) to the msg 

### function addVectorBool

```csharp
void addVectorBool(
    string name,
    ushort fid,
    bool[] val
)
```

Add an array of booleans to the message. 

### function addVectorChar

```csharp
void addVectorChar(
    string name,
    ushort fid,
    char[] val
)
```

Add an array of characters to the message. 

### function addVectorI8

```csharp
void addVectorI8(
    string name,
    ushort fid,
    sbyte[] val
)
```

Add an array of signed 8 bit integers to the message. 

### function addVectorU8

```csharp
void addVectorU8(
    string name,
    ushort fid,
    byte[] val
)
```

Add an array of unsigned 8 bit integers to the message. 

### function addVectorI16

```csharp
void addVectorI16(
    string name,
    ushort fid,
    short[] val
)
```

Add an array of signed 16 bit integers to the message. 

### function addVectorU16

```csharp
void addVectorU16(
    string name,
    ushort fid,
    ushort[] val
)
```

Add an array of unsigned 16 bit integers to the message. 

### function addVectorI32

```csharp
void addVectorI32(
    string name,
    ushort fid,
    int[] val
)
```

Add an array of signed 32 bit integers to the message. 

### function addVectorU32

```csharp
void addVectorU32(
    string name,
    ushort fid,
    uint[] val
)
```

Add an array of unsigned 32 bit integers to the message. 

### function addVectorI64

```csharp
void addVectorI64(
    string name,
    ushort fid,
    long[] val
)
```

Add an array of signed 64 bit integers to the message. 

### function addVectorU64

```csharp
void addVectorU64(
    string name,
    ushort fid,
    ulong[] val
)
```

Add an array of unsigned 64 bit integers to the message. 

### function addVectorF32

```csharp
void addVectorF32(
    string name,
    ushort fid,
    float[] val
)
```

Add an array of 32 bit floating point numbers to the message. 

### function addVectorF64

```csharp
void addVectorF64(
    string name,
    ushort fid,
    double[] val
)
```

Add an array of 64 bit floating point numbers to the message. 

### function addVectorDateTime

```csharp
void addVectorDateTime(
    string name,
    ushort fid,
    DateTime[] val
)
```

Add an array of timestamps to the message. 

### function updateBool

```csharp
void updateBool(
    string name,
    ushort fid,
    bool val
)
```

Update the value of an existing bool field. If the field does not exist it is added. 

### function updateChar

```csharp
void updateChar(
    string name,
    ushort fid,
    char val
)
```

Update the value of an existing char field. If the field does not exist it is added. 

### function updateI8

```csharp
void updateI8(
    string name,
    ushort fid,
    sbyte val
)
```

Update the value of an existing I8 field. If the field does not exist it is added. 

### function updateU8

```csharp
void updateU8(
    string name,
    ushort fid,
    byte val
)
```

Update the value of an existing U8 field. If the field does not exist it is added. 

### function updateI16

```csharp
void updateI16(
    string name,
    ushort fid,
    short val
)
```

Update the value of an existing I16 field. If the field does not exist it is added. 

### function updateU16

```csharp
void updateU16(
    string name,
    ushort fid,
    ushort val
)
```

Update the value of an existing U16 field. If the field does not exist it is added. 

### function updateI32

```csharp
void updateI32(
    string name,
    ushort fid,
    int val
)
```

Update the value of an existing I32 field. If the field does not exist it is added. 

### function updateU32

```csharp
void updateU32(
    string name,
    ushort fid,
    uint val
)
```

Update the value of an existing U32 field. If the field does not exist it is added. 

### function updateI64

```csharp
void updateI64(
    string name,
    ushort fid,
    long val
)
```

Update the value of an existing I64 field. If the field does not exist it is added. 

### function updateU64

```csharp
void updateU64(
    string name,
    ushort fid,
    ulong val
)
```

Update the value of an existing U64 field. If the field does not exist it is added. 

### function updateF32

```csharp
void updateF32(
    string name,
    ushort fid,
    float val
)
```

Update the value of an existing float field. If the field does not exist it is added. 

### function updateF64

```csharp
void updateF64(
    string name,
    ushort fid,
    double val
)
```

Update the value of an existing f64 field. If the field does not exist it is added. 

### function updateString

```csharp
void updateString(
    string name,
    ushort fid,
    string val
)
```

Update the value of an existing string field. If the field does not exist it is added. 

### function updateOpaque

```csharp
void updateOpaque(
    string name,
    ushort fid,
    byte[] val
)
```

Update an opaque field. 

### function updateDateTime

```csharp
void updateDateTime(
    string name,
    ushort fid,
    DateTime val
)
```

Update a MAMA date/time field. 

### function updatePrice

```csharp
void updatePrice(
    string name,
    ushort fid,
    MamaPrice val
)
```

Update a MAMA price field. 

### function updateVectorBool

```csharp
void updateVectorBool(
    string name,
    ushort fid,
    bool[] val
)
```

Update an array of booleans. 

### function updateVectorChar

```csharp
void updateVectorChar(
    string name,
    ushort fid,
    char[] val
)
```

Update an array of characters. 

### function updateVectorI8

```csharp
void updateVectorI8(
    string name,
    ushort fid,
    sbyte[] val
)
```

Update an array of signed 8 bit integers. 

### function updateVectorU8

```csharp
void updateVectorU8(
    string name,
    ushort fid,
    byte[] val
)
```

Update an array of unsigned 8 bit integers. 

### function updateVectorI16

```csharp
void updateVectorI16(
    string name,
    ushort fid,
    short[] val
)
```

Update an array of signed 16 bit integers. 

### function updateVectorU16

```csharp
void updateVectorU16(
    string name,
    ushort fid,
    ushort[] val
)
```

Update an array of unsigned 16 bit integers. 

### function updateVectorI32

```csharp
void updateVectorI32(
    string name,
    ushort fid,
    int[] val
)
```

Update an array of signed 32 bit integers. 

### function updateVectorU32

```csharp
void updateVectorU32(
    string name,
    ushort fid,
    uint[] val
)
```

Update an array of unsigned 32 bit integers. 

### function updateVectorI64

```csharp
void updateVectorI64(
    string name,
    ushort fid,
    long[] val
)
```

Update an array of signed 64 bit integers. 

### function updateVectorU64

```csharp
void updateVectorU64(
    string name,
    ushort fid,
    ulong[] val
)
```

Update an array of unsigned 64 bit integers. 

### function updateVectorF32

```csharp
void updateVectorF32(
    string name,
    ushort fid,
    float[] val
)
```

Update an array of 32 bit floating point numbers. 

### function updateVectorF64

```csharp
void updateVectorF64(
    string name,
    ushort fid,
    double[] val
)
```

Update an array of 64 bit floating point numbers. 

### function updateVectorDateTime

```csharp
void updateVectorDateTime(
    string name,
    ushort fid,
    DateTime[] val
)
```

Update an array of timestamps. 

### function getBool

```csharp
bool getBool(
    string name,
    ushort fid
)
```

Get a bool field. 

### function getBool

```csharp
bool getBool(
    MamaFieldDescriptor descriptor
)
```

Get a bool field. 

### function getBool

```csharp
bool getBool(
    string name,
    ushort fid,
    bool valueIfMissing
)
```

Get a bool field. 

### function getBool

```csharp
bool getBool(
    MamaFieldDescriptor descriptor,
    bool valueIfMissing
)
```

Get a bool field. 

### function getChar

```csharp
char getChar(
    string name,
    ushort fid
)
```

Get a char field. 

### function getChar

```csharp
char getChar(
    MamaFieldDescriptor descriptor
)
```

Get a char field. 

### function getChar

```csharp
char getChar(
    string name,
    ushort fid,
    char valueIfMissing
)
```

Get a char field. 

### function getChar

```csharp
char getChar(
    MamaFieldDescriptor descriptor,
    char valueIfMissing
)
```

Get a char field. 

### function getI8

```csharp
sbyte getI8(
    string name,
    ushort fid
)
```

Get a I8, signed 8 bit integer, field. 

### function getI8

```csharp
sbyte getI8(
    MamaFieldDescriptor descriptor
)
```

Get a I8, signed 8 bit integer, field. 

### function getI8

```csharp
sbyte getI8(
    string name,
    ushort fid,
    sbyte valueIfMissing
)
```

Get a I8, signed 8 bit integer, field. 

### function getI8

```csharp
sbyte getI8(
    MamaFieldDescriptor descriptor,
    sbyte valueIfMissing
)
```

Get a I8, signed 8 bit integer, field. 

### function getU8

```csharp
byte getU8(
    string name,
    ushort fid
)
```

Get a U8, unsigned 8 bit integer, field. 

### function getU8

```csharp
byte getU8(
    MamaFieldDescriptor descriptor
)
```

Get a U8, unsigned 8 bit integer, field. 

### function getU8

```csharp
byte getU8(
    string name,
    ushort fid,
    byte valueIfMissing
)
```

Get a U8, unsigned 8 bit integer, field. 

### function getU8

```csharp
byte getU8(
    MamaFieldDescriptor descriptor,
    byte valueIfMissing
)
```

Get a U8, unsigned 8 bit integer, field. 

### function getI16

```csharp
short getI16(
    string name,
    ushort fid
)
```

Get a I16, signed 16 bit integer, field. 

### function getI16

```csharp
short getI16(
    MamaFieldDescriptor descriptor
)
```

Get a I16, signed 16 bit integer, field. 

### function getI16

```csharp
short getI16(
    string name,
    ushort fid,
    short valueIfMissing
)
```

Get a I16, signed 16 bit integer, field. 

### function getI16

```csharp
short getI16(
    MamaFieldDescriptor descriptor,
    short valueIfMissing
)
```

Get a I16, signed 16 bit integer, field. 

### function getU16

```csharp
ushort getU16(
    string name,
    ushort fid
)
```

Get a U16, unsigned 16 bit integer, field. 

### function getU16

```csharp
ushort getU16(
    MamaFieldDescriptor descriptor
)
```

Get a U16, unsigned 16 bit integer, field. 

### function getU16

```csharp
ushort getU16(
    string name,
    ushort fid,
    ushort valueIfMissing
)
```

Get a U16, unsigned 16 bit integer, field. 

### function getU16

```csharp
ushort getU16(
    MamaFieldDescriptor descriptor,
    ushort valueIfMissing
)
```

Get a U16, unsigned 16 bit integer, field. 

### function getI32

```csharp
int getI32(
    string name,
    ushort fid
)
```

Get a I32, signed 32 bit integer, field. 

### function getI32

```csharp
int getI32(
    MamaFieldDescriptor descriptor
)
```

Get a I32, signed 32 bit integer, field. 

### function getI32

```csharp
int getI32(
    string name,
    ushort fid,
    int valueIfMissing
)
```

Get a I32, signed 32 bit integer, field. 

### function getI32

```csharp
int getI32(
    MamaFieldDescriptor descriptor,
    int valueIfMissing
)
```

Get a I32, signed 32 bit integer, field. 

### function getU32

```csharp
uint getU32(
    string name,
    ushort fid
)
```

Get a U32, unsigned 32 bit integer, field. 

### function getU32

```csharp
uint getU32(
    MamaFieldDescriptor descriptor
)
```

Get a U32, unsigned 32 bit integer, field. 

### function getU32

```csharp
uint getU32(
    string name,
    ushort fid,
    uint valueIfMissing
)
```

Get a U32, unsigned 32 bit integer, field. 

### function getU32

```csharp
uint getU32(
    MamaFieldDescriptor descriptor,
    uint valueIfMissing
)
```

Get a U32, unsigned 32 bit integer, field. 

### function getI64

```csharp
long getI64(
    string name,
    ushort fid
)
```

Get a I64, signed 64 bit integer, field. 

### function getI64

```csharp
long getI64(
    MamaFieldDescriptor descriptor
)
```

Get a I64, signed 64 bit integer, field. 

### function getI64

```csharp
long getI64(
    string name,
    ushort fid,
    long valueIfMissing
)
```

Get a I64, signed 64 bit integer, field. 

### function getI64

```csharp
long getI64(
    MamaFieldDescriptor descriptor,
    long valueIfMissing
)
```

Get a I64, signed 64 bit integer, field. 

### function getU64

```csharp
ulong getU64(
    string name,
    ushort fid
)
```

Get a U64, unsigned 64 bit integer, field. 

### function getU64

```csharp
ulong getU64(
    MamaFieldDescriptor descriptor
)
```

Get a U64, unsigned 64 bit integer, field. 

### function getU64

```csharp
ulong getU64(
    string name,
    ushort fid,
    ulong valueIfMissing
)
```

Get a U64, unsigned 64 bit integer, field. 

### function getU64

```csharp
ulong getU64(
    MamaFieldDescriptor descriptor,
    ulong valueIfMissing
)
```

Get a U64, unsigned 64 bit integer, field. 

### function getF32

```csharp
float getF32(
    string name,
    ushort fid
)
```

Get a float (f32) field. 

### function getF32

```csharp
float getF32(
    MamaFieldDescriptor descriptor
)
```

Get a float (f32) field. 

### function getF32

```csharp
float getF32(
    string name,
    ushort fid,
    float valueIfMissing
)
```

Get a float (f32) field. 

### function getF32

```csharp
float getF32(
    MamaFieldDescriptor descriptor,
    float valueIfMissing
)
```

Get a float (f32) field. 

### function getF64

```csharp
double getF64(
    string name,
    ushort fid
)
```

Get a F64 field. 

### function getF64

```csharp
double getF64(
    MamaFieldDescriptor descriptor
)
```

Get a F64 field. 

### function getF64

```csharp
double getF64(
    string name,
    ushort fid,
    double valueIfMissing
)
```

Get a F64 field. 

### function getF64

```csharp
double getF64(
    MamaFieldDescriptor descriptor,
    double valueIfMissing
)
```

Get a F64 field. 

### function getString

```csharp
string getString(
    string name,
    ushort fid
)
```

Get a string field. 

### function tryStringAnsi

```csharp
bool tryStringAnsi(
    string name,
    ushort fid,
    ref IntPtr result
)
```


### function tryStringAnsi

```csharp
bool tryStringAnsi(
    MamaFieldDescriptor descriptor,
    ref IntPtr result
)
```


### function getString

```csharp
string getString(
    MamaFieldDescriptor descriptor
)
```

Get a string field. 

### function getString

```csharp
string getString(
    string name,
    ushort fid,
    string valueIfMissing
)
```

Get a string field. 

### function getString

```csharp
string getString(
    MamaFieldDescriptor descriptor,
    string valueIfMissing
)
```

Get a string field. 

### function getOpaque

```csharp
byte[] getOpaque(
    string name,
    ushort fid
)
```

Get an opaque field. 

### function getOpaque

```csharp
byte[] getOpaque(
    MamaFieldDescriptor descriptor
)
```

Get a opaque field. 

### function getOpaque

```csharp
byte[] getOpaque(
    string name,
    ushort fid,
    byte[] valueIfMissing
)
```

Get a opaque field. 

### function getOpaque

```csharp
byte[] getOpaque(
    MamaFieldDescriptor descriptor,
    byte[] valueIfMissing
)
```

Get a opaque field. 

### function getDateTime

```csharp
DateTime getDateTime(
    string name,
    ushort fid
)
```

Get a MAMA date/time field. 

### function getDateTime

```csharp
DateTime getDateTime(
    MamaFieldDescriptor descriptor
)
```

Get a MAMA date/time field. 

### function getDateTime

```csharp
DateTime getDateTime(
    string name,
    ushort fid,
    DateTime valueIfMissing
)
```

Get a MAMA date/time field. 

### function getDateTime

```csharp
DateTime getDateTime(
    MamaFieldDescriptor descriptor,
    DateTime valueIfMissing
)
```

Get a MAMA date/time field. 

### function getPrice

```csharp
MamaPrice getPrice(
    string name,
    ushort fid
)
```

Get a MAMA price field. 

### function getPrice

```csharp
MamaPrice getPrice(
    MamaFieldDescriptor descriptor
)
```

Get a MAMA price field. 

### function getPrice

```csharp
MamaPrice getPrice(
    string name,
    ushort fid,
    MamaPrice valueIfMissing
)
```

Get a MAMA price field. 

### function getPrice

```csharp
MamaPrice getPrice(
    MamaFieldDescriptor descriptor,
    MamaPrice valueIfMissing
)
```

Get a MAMA price field. 

### function getMsg

```csharp
MamaMsg getMsg(
    string name,
    ushort fid
)
```

Get a submessage. 

### function getMsg

```csharp
MamaMsg getMsg(
    MamaFieldDescriptor descriptor
)
```

Get a submessage. 

### function getMsg

```csharp
MamaMsg getMsg(
    string name,
    ushort fid,
    MamaMsg valueIfMissing
)
```

Get a submessage. 

**Parameters**: 

  * **name** 
  * **fid** 
  * **valueIfMissing** 


**Return**: 

### function getMsg

```csharp
MamaMsg getMsg(
    MamaFieldDescriptor descriptor,
    MamaMsg valueIfMissing
)
```

Get a submessage. 

**Parameters**: 

  * **descriptor** 
  * **valueIfMissing** 


**Return**: 

### function getField

```csharp
MamaMsgField getField(
    string name,
    ushort fid
)
```

Get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object. 

### function getField

```csharp
MamaMsgField getField(
    MamaFieldDescriptor descriptor
)
```

Get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object. 

### function getField

```csharp
MamaMsgField getField(
    string name,
    ushort fid,
    MamaMsgField valueIfMissing
)
```

Get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object. 

### function getField

```csharp
MamaMsgField getField(
    MamaFieldDescriptor descriptor,
    MamaMsgField valueIfMissing
)
```

Get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object. 

### function getVectorBool

```csharp
bool[] getVectorBool(
    string name,
    ushort fid
)
```

Get a vector of booleans. 

### function getVectorBool

```csharp
bool[] getVectorBool(
    MamaFieldDescriptor descriptor
)
```

Get a vector of booleans. 

### function getVectorBool

```csharp
bool[] getVectorBool(
    string name,
    ushort fid,
    bool[] valueIfMissing
)
```

Get a vector of booleans. 

### function getVectorBool

```csharp
bool[] getVectorBool(
    MamaFieldDescriptor descriptor,
    bool[] valueIfMissing
)
```

Get a vector of booleans. 

### function getVectorChar

```csharp
char[] getVectorChar(
    string name,
    ushort fid
)
```

Get a vector of chars. 

### function getVectorChar

```csharp
char[] getVectorChar(
    MamaFieldDescriptor descriptor
)
```

Get a vector of chars. 

### function getVectorChar

```csharp
char[] getVectorChar(
    string name,
    ushort fid,
    char[] valueIfMissing
)
```

Get a vector of chars. 

### function getVectorChar

```csharp
char[] getVectorChar(
    MamaFieldDescriptor descriptor,
    char[] valueIfMissing
)
```

Get a vector of chars. 

### function getVectorI8

```csharp
sbyte[] getVectorI8(
    string name,
    ushort fid
)
```

Get a vector of signed 8 bit integers. 

### function getVectorI8

```csharp
sbyte[] getVectorI8(
    MamaFieldDescriptor descriptor
)
```

Get a vector of signed 8 bit integers. 

### function getVectorI8

```csharp
sbyte[] getVectorI8(
    string name,
    ushort fid,
    sbyte[] valueIfMissing
)
```

Get a vector of signed 8 bit integers. 

### function getVectorI8

```csharp
sbyte[] getVectorI8(
    MamaFieldDescriptor descriptor,
    sbyte[] valueIfMissing
)
```

Get a vector of signed 8 bit integers. 

### function getVectorU8

```csharp
byte[] getVectorU8(
    string name,
    ushort fid
)
```

Get a vector of unsigned 8 bit integers. 

### function getVectorU8

```csharp
byte[] getVectorU8(
    MamaFieldDescriptor descriptor
)
```

Get a vector of unsigned 8 bit integers. 

### function getVectorU8

```csharp
byte[] getVectorU8(
    string name,
    ushort fid,
    byte[] valueIfMissing
)
```

Get a vector of unsigned 8 bit integers. 

### function getVectorU8

```csharp
byte[] getVectorU8(
    MamaFieldDescriptor descriptor,
    byte[] valueIfMissing
)
```

Get a vector of unsigned 8 bit integers. 

### function getVectorI16

```csharp
short[] getVectorI16(
    string name,
    ushort fid
)
```

Get a vector of signed 16 bit integers. 

### function getVectorI16

```csharp
short[] getVectorI16(
    MamaFieldDescriptor descriptor
)
```

Get a vector of signed 16 bit integers. 

### function getVectorI16

```csharp
short[] getVectorI16(
    string name,
    ushort fid,
    short[] valueIfMissing
)
```

Get a vector of signed 16 bit integers. 

### function getVectorI16

```csharp
short[] getVectorI16(
    MamaFieldDescriptor descriptor,
    short[] valueIfMissing
)
```

Get a vector of signed 16 bit integers. 

### function getVectorU16

```csharp
ushort[] getVectorU16(
    string name,
    ushort fid
)
```

Get a vector of unsigned 16 bit integers. 

### function getVectorU16

```csharp
ushort[] getVectorU16(
    MamaFieldDescriptor descriptor
)
```

Get a vector of unsigned 16 bit integers. 

### function getVectorU16

```csharp
ushort[] getVectorU16(
    string name,
    ushort fid,
    ushort[] valueIfMissing
)
```

Get a vector of unsigned 16 bit integers. 

### function getVectorU16

```csharp
ushort[] getVectorU16(
    MamaFieldDescriptor descriptor,
    ushort[] valueIfMissing
)
```

Get a vector of unsigned 16 bit integers. 

### function getVectorI32

```csharp
int[] getVectorI32(
    string name,
    ushort fid
)
```

Get a vector of signed 32 bit integers. 

### function getVectorI32

```csharp
int[] getVectorI32(
    MamaFieldDescriptor descriptor
)
```

Get a vector of signed 32 bit integers. 

### function getVectorI32

```csharp
int[] getVectorI32(
    string name,
    ushort fid,
    int[] valueIfMissing
)
```

Get a vector of signed 32 bit integers. 

### function getVectorI32

```csharp
int[] getVectorI32(
    MamaFieldDescriptor descriptor,
    int[] valueIfMissing
)
```

Get a vector of signed 32 bit integers. 

### function getVectorU32

```csharp
uint[] getVectorU32(
    string name,
    ushort fid
)
```

Get a vector of unsigned 32 bit integers. 

### function getVectorU32

```csharp
uint[] getVectorU32(
    MamaFieldDescriptor descriptor
)
```

Get a vector of unsigned 32 bit integers. 

### function getVectorU32

```csharp
uint[] getVectorU32(
    string name,
    ushort fid,
    uint[] valueIfMissing
)
```

Get a vector of unsigned 32 bit integers. 

### function getVectorU32

```csharp
uint[] getVectorU32(
    MamaFieldDescriptor descriptor,
    uint[] valueIfMissing
)
```

Get a vector of unsigned 32 bit integers. 

### function getVectorI64

```csharp
long[] getVectorI64(
    string name,
    ushort fid
)
```

Get a vector of signed 64 bit integers. 

### function getVectorI64

```csharp
long[] getVectorI64(
    MamaFieldDescriptor descriptor
)
```

Get a vector of signed 64 bit integers. 

### function getVectorI64

```csharp
long[] getVectorI64(
    string name,
    ushort fid,
    long[] valueIfMissing
)
```

Get a vector of signed 64 bit integers. 

### function getVectorI64

```csharp
long[] getVectorI64(
    MamaFieldDescriptor descriptor,
    long[] valueIfMissing
)
```

Get a vector of signed 64 bit integers. 

### function getVectorU64

```csharp
ulong[] getVectorU64(
    string name,
    ushort fid
)
```

Get a vector of unsigned 64 bit integers. 

### function getVectorU64

```csharp
ulong[] getVectorU64(
    MamaFieldDescriptor descriptor
)
```

Get a vector of unsigned 64 bit integers. 

### function getVectorU64

```csharp
ulong[] getVectorU64(
    string name,
    ushort fid,
    ulong[] valueIfMissing
)
```

Get a vector of unsigned 64 bit integers. 

### function getVectorU64

```csharp
ulong[] getVectorU64(
    MamaFieldDescriptor descriptor,
    ulong[] valueIfMissing
)
```

Get a vector of unsigned 64 bit integers. 

### function getVectorF32

```csharp
float[] getVectorF32(
    string name,
    ushort fid
)
```

Get a vector of 32 bit floating point numbers. 

### function getVectorF32

```csharp
float[] getVectorF32(
    MamaFieldDescriptor descriptor
)
```

Get a vector of 32 bit floating point numbers. 

### function getVectorF32

```csharp
float[] getVectorF32(
    string name,
    ushort fid,
    float[] valueIfMissing
)
```

Get a vector of 32 bit floating point numbers. 

### function getVectorF32

```csharp
float[] getVectorF32(
    MamaFieldDescriptor descriptor,
    float[] valueIfMissing
)
```

Get a vector of 32 bit floating point numbers. 

### function getVectorF64

```csharp
double[] getVectorF64(
    string name,
    ushort fid
)
```

Get a vector of 64 bit floating point numbers. 

### function getVectorF64

```csharp
double[] getVectorF64(
    MamaFieldDescriptor descriptor
)
```

Get a vector of 64 bit floating point numbers. 

### function getVectorF64

```csharp
double[] getVectorF64(
    string name,
    ushort fid,
    double[] valueIfMissing
)
```

Get a vector of 64 bit floating point numbers. 

### function getVectorF64

```csharp
double[] getVectorF64(
    MamaFieldDescriptor descriptor,
    double[] valueIfMissing
)
```

Get a vector of 64 bit floating point numbers. 

### function getVectorString

```csharp
string[] getVectorString(
    string name,
    ushort fid
)
```

Get a vector of strings (char*). 

**Parameters**: 

  * **fid** The field id, can be 0 if the name is specified and field names are turned on. 
  * **name** The field name, can be null or blank if the field Id is supplied. 


**Exceptions**: 

  * **[MamaException](classWombat_1_1MamaException.html)** Thrown if the vector could not be found. 


### function getVectorString

```csharp
string[] getVectorString(
    MamaFieldDescriptor descriptor
)
```

Get a vector of strings (char*). 

### function getVectorString

```csharp
string[] getVectorString(
    string name,
    ushort fid,
    string[] valueIfMissing
)
```

Get a vector of strings (char*). 

### function getVectorString

```csharp
string[] getVectorString(
    MamaFieldDescriptor descriptor,
    string[] valueIfMissing
)
```

Get a vector of strings (char*). 

### function getVectorDateTime

```csharp
DateTime[] getVectorDateTime(
    string name,
    ushort fid
)
```

Get a vector of timestamps. 

### function getVectorDateTime

```csharp
DateTime[] getVectorDateTime(
    MamaFieldDescriptor descriptor
)
```

Get a vector of timestamps. 

### function getVectorDateTime

```csharp
DateTime[] getVectorDateTime(
    string name,
    ushort fid,
    DateTime[] valueIfMissing
)
```

Get a vector of timestamps. 

### function getVectorDateTime

```csharp
DateTime[] getVectorDateTime(
    MamaFieldDescriptor descriptor,
    DateTime[] valueIfMissing
)
```

Get a vector of timestamps. 

### function getVectorPrice

```csharp
MamaPrice[] getVectorPrice(
    string name,
    ushort fid
)
```

Get a vector of prices. 

### function getVectorPrice

```csharp
MamaPrice[] getVectorPrice(
    MamaFieldDescriptor descriptor
)
```

Get a vector of prices. 

### function getVectorPrice

```csharp
MamaPrice[] getVectorPrice(
    string name,
    ushort fid,
    MamaPrice[] valueIfMissing
)
```

Get a vector of prices. 

### function getVectorPrice

```csharp
MamaPrice[] getVectorPrice(
    MamaFieldDescriptor descriptor,
    MamaPrice[] valueIfMissing
)
```

Get a vector of prices. 

### function getVectorMsg

```csharp
MamaMsg[] getVectorMsg(
    string name,
    ushort fid
)
```

Get a vector of submessages. 

### function getVectorMsg

```csharp
MamaMsg[] getVectorMsg(
    MamaFieldDescriptor descriptor
)
```

Get a vector of submessages. 

### function getVectorMsg

```csharp
MamaMsg[] getVectorMsg(
    string name,
    ushort fid,
    MamaMsg[] valueIfMissing
)
```

Get a vector of submessages. 

**Parameters**: 

  * **name** 
  * **fid** 
  * **valueIfMissing** 


**Return**: 

### function getVectorMsg

```csharp
MamaMsg[] getVectorMsg(
    MamaFieldDescriptor descriptor,
    MamaMsg[] valueIfMissing
)
```

Get a vector of submessages. 

**Parameters**: 

  * **descriptor** 
  * **valueIfMissing** 


**Return**: 

### function tryBool

```csharp
bool tryBool(
    string name,
    ushort fid,
    ref bool result
)
```

Try to get a bool field. 

### function tryBool

```csharp
bool tryBool(
    MamaFieldDescriptor descriptor,
    ref bool result
)
```

Try to get a bool field. 

### function tryChar

```csharp
bool tryChar(
    string name,
    ushort fid,
    ref char result
)
```

Try to get a char field. 

### function tryChar

```csharp
bool tryChar(
    MamaFieldDescriptor descriptor,
    ref char result
)
```

Try to get a char field. 

### function tryI8

```csharp
bool tryI8(
    string name,
    ushort fid,
    ref sbyte result
)
```

Try to get a I8, signed 8 bit integer, field. 

### function tryI8

```csharp
bool tryI8(
    MamaFieldDescriptor descriptor,
    ref sbyte result
)
```

Try to get a I8, signed 8 bit integer, field. 

### function tryU8

```csharp
bool tryU8(
    string name,
    ushort fid,
    ref byte result
)
```

Try to get a I8, signed 8 bit integer, field. 

### function tryU8

```csharp
bool tryU8(
    MamaFieldDescriptor descriptor,
    ref byte result
)
```

Try to get a I8, signed 8 bit integer, field. 

### function tryI16

```csharp
bool tryI16(
    string name,
    ushort fid,
    ref short result
)
```

Try to get a I16, signed 16 bit integer, field. 

### function tryI16

```csharp
bool tryI16(
    MamaFieldDescriptor descriptor,
    ref short result
)
```

Try to get a I16, signed 16 bit integer, field. 

### function tryU16

```csharp
bool tryU16(
    string name,
    ushort fid,
    ref ushort result
)
```

Try to get a U16, unsigned 16 bit integer, field. 

### function tryU16

```csharp
bool tryU16(
    MamaFieldDescriptor descriptor,
    ref ushort result
)
```

Try to get a U16, unsigned 16 bit integer, field. 

### function tryU32

```csharp
bool tryU32(
    string name,
    ushort fid,
    ref uint result
)
```

Try to get a U32, unsigned 32 bit integer, field. 

### function tryU32

```csharp
bool tryU32(
    MamaFieldDescriptor descriptor,
    ref uint result
)
```

Try to get a U32, unsigned 32 bit integer, field. 

### function tryI32

```csharp
bool tryI32(
    string name,
    ushort fid,
    ref int result
)
```

Try to get a I32, signed 32 bit integer, field. 

**Parameters**: 

  * **name** 
  * **fid** 
  * **result** 


**Return**: 

### function tryI32

```csharp
bool tryI32(
    MamaFieldDescriptor descriptor,
    ref int result
)
```

Try to get a I32, signed 32 bit integer, field. 

**Parameters**: 

  * **descriptor** 
  * **result** 


**Return**: 

### function tryI64

```csharp
bool tryI64(
    string name,
    ushort fid,
    ref long result
)
```

<overloads>Try to get a signed 64-bit integer field</overloads> 

### function tryI64

```csharp
bool tryI64(
    MamaFieldDescriptor descriptor,
    ref long result
)
```


### function tryU64

```csharp
bool tryU64(
    string name,
    ushort fid,
    ref ulong result
)
```

Try to get a U64, unsigned 64 bit integer, field. 

### function tryU64

```csharp
bool tryU64(
    MamaFieldDescriptor descriptor,
    ref ulong result
)
```

Try to get a U64, unsigned 64 bit integer, field. 

### function tryF32

```csharp
bool tryF32(
    string name,
    ushort fid,
    ref float result
)
```

Try to get a float (f32) field. 

### function tryF32

```csharp
bool tryF32(
    MamaFieldDescriptor descriptor,
    ref float result
)
```

Try to get a float (f32) field. 

### function tryF64

```csharp
bool tryF64(
    string name,
    ushort fid,
    ref double result
)
```

Try to get a f64 field. 

### function tryF64

```csharp
bool tryF64(
    MamaFieldDescriptor descriptor,
    ref double result
)
```

Try to get a f64 field. 

### function tryString

```csharp
bool tryString(
    string name,
    ushort fid,
    ref string result
)
```

Try to get a string field. 

### function tryString

```csharp
bool tryString(
    MamaFieldDescriptor descriptor,
    ref string result
)
```

Try to get a string field. 

### function tryOpaque

```csharp
bool tryOpaque(
    string name,
    ushort fid,
    ref byte[] result
)
```

Try to get an opaque field. 

### function tryOpaque

```csharp
bool tryOpaque(
    MamaFieldDescriptor descriptor,
    ref byte[] result
)
```

Try to get an opaque field. 

### function tryDateTime

```csharp
bool tryDateTime(
    string name,
    ushort fid,
    ref DateTime result
)
```


<overloads> Try to get a DateTime object </overloads> 


### function tryDateTime

```csharp
bool tryDateTime(
    MamaFieldDescriptor descriptor,
    ref DateTime result
)
```


### function tryPrice

```csharp
bool tryPrice(
    string name,
    ushort fid,
    ref MamaPrice result
)
```

Try to get a MAMA price field. 

### function tryPrice

```csharp
bool tryPrice(
    string name,
    ushort fid,
    MamaPrice result
)
```


Try to get a MAMA price field.


### function tryPrice

```csharp
bool tryPrice(
    MamaFieldDescriptor descriptor,
    ref MamaPrice result
)
```

Try to get a MAMA price field. 

### function tryMsg

```csharp
bool tryMsg(
    string name,
    ushort fid,
    ref MamaMsg result
)
```

Try to get a submessage. 

### function tryMsg

```csharp
bool tryMsg(
    MamaFieldDescriptor descriptor,
    ref MamaMsg result
)
```

Try to get a submessage. 

### function tryVectorBool

```csharp
bool tryVectorBool(
    string name,
    ushort fid,
    ref bool[] result
)
```

Try to get a vector of booleans. 

### function tryVectorBool

```csharp
bool tryVectorBool(
    MamaFieldDescriptor descriptor,
    ref bool[] result
)
```

Try to get a vector of booleans. 

### function tryVectorChar

```csharp
bool tryVectorChar(
    string name,
    ushort fid,
    ref char[] result
)
```

Try to get a vector of chars. 

### function tryVectorChar

```csharp
bool tryVectorChar(
    MamaFieldDescriptor descriptor,
    ref char[] result
)
```

Try to get a vector of chars. 

### function tryVectorI8

```csharp
bool tryVectorI8(
    string name,
    ushort fid,
    ref sbyte[] result
)
```

Try to get a vector of signed 8 bit integers. 

### function tryVectorI8

```csharp
bool tryVectorI8(
    MamaFieldDescriptor descriptor,
    ref sbyte[] result
)
```

Try to get a vector of signed 8 bit integers. 

### function tryVectorU8

```csharp
bool tryVectorU8(
    string name,
    ushort fid,
    ref byte[] result
)
```

Try to get a vector of unsigned 8 bit integers. 

### function tryVectorU8

```csharp
bool tryVectorU8(
    MamaFieldDescriptor descriptor,
    ref byte[] result
)
```

Try to get a vector of unsigned 8 bit integers. 

### function tryVectorI16

```csharp
bool tryVectorI16(
    string name,
    ushort fid,
    ref short[] result
)
```

Try to get a vector of signed 16 bit integers. 

### function tryVectorI16

```csharp
bool tryVectorI16(
    MamaFieldDescriptor descriptor,
    ref short[] result
)
```

Try to get a vector of signed 16 bit integers. 

### function tryVectorU16

```csharp
bool tryVectorU16(
    string name,
    ushort fid,
    ref ushort[] result
)
```

Try to get a vector of unsigned 16 bit integers. 

### function tryVectorU16

```csharp
bool tryVectorU16(
    MamaFieldDescriptor descriptor,
    ref ushort[] result
)
```

Try to get a vector of unsigned 16 bit integers. 

### function tryVectorI32

```csharp
bool tryVectorI32(
    string name,
    ushort fid,
    ref int[] result
)
```

Try to get a vector of signed 32 bit integers. 

### function tryVectorI32

```csharp
bool tryVectorI32(
    MamaFieldDescriptor descriptor,
    ref int[] result
)
```

Try to get a vector of signed 32 bit integers. 

### function tryVectorU32

```csharp
bool tryVectorU32(
    string name,
    ushort fid,
    ref uint[] result
)
```

Try to get a vector of unsigned 32 bit integers. 

### function tryVectorU32

```csharp
bool tryVectorU32(
    MamaFieldDescriptor descriptor,
    ref uint[] result
)
```

Try to get a vector of unsigned 32 bit integers. 

### function tryVectorI64

```csharp
bool tryVectorI64(
    string name,
    ushort fid,
    ref long[] result
)
```

Try get a vector of signed 64 bit integers. 

### function tryVectorI64

```csharp
bool tryVectorI64(
    MamaFieldDescriptor descriptor,
    ref long[] result
)
```

Try get a vector of signed 64 bit integers. 

### function tryVectorU64

```csharp
bool tryVectorU64(
    string name,
    ushort fid,
    ref ulong[] result
)
```

Try to get a vector of unsigned 64 bit integers. 

### function tryVectorU64

```csharp
bool tryVectorU64(
    MamaFieldDescriptor descriptor,
    ref ulong[] result
)
```

Try to get a vector of unsigned 64 bit integers. 

### function tryVectorF32

```csharp
bool tryVectorF32(
    string name,
    ushort fid,
    ref float[] result
)
```

Try to get a vector of 32 bit floating point numbers. 

### function tryVectorF32

```csharp
bool tryVectorF32(
    MamaFieldDescriptor descriptor,
    ref float[] result
)
```

Try to get a vector of 32 bit floating point numbers. 

### function tryVectorF64

```csharp
bool tryVectorF64(
    string name,
    ushort fid,
    ref double[] result
)
```

Try to get a vector of 64 bit floating point numbers. 

### function tryVectorF64

```csharp
bool tryVectorF64(
    MamaFieldDescriptor descriptor,
    ref double[] result
)
```

Try to get a vector of 64 bit floating point numbers. 

### function tryVectorString

```csharp
bool tryVectorString(
    MamaFieldDescriptor descriptor,
    ref string[] result
)
```

Try to get a vector of strings (char*). 

### function tryVectorDateTime

```csharp
bool tryVectorDateTime(
    string name,
    ushort fid,
    ref DateTime[] result
)
```

Try to get a vector of timestamps. 

### function tryVectorDateTime

```csharp
bool tryVectorDateTime(
    MamaFieldDescriptor descriptor,
    ref DateTime[] result
)
```

Try to get a vector of timestamps. 

### function tryVectorPrice

```csharp
bool tryVectorPrice(
    MamaFieldDescriptor descriptor,
    ref MamaPrice[] result
)
```

Try to get a vector of prices. 

### function tryVectorMsg

```csharp
bool tryVectorMsg(
    string name,
    ushort fid,
    ref MamaMsg[] result
)
```


<overloads> Try to get a vector of messages </overloads> 


### function tryVectorMsg

```csharp
bool tryVectorMsg(
    MamaFieldDescriptor descriptor,
    ref MamaMsg[] result
)
```


### function tryField

```csharp
bool tryField(
    string name,
    ushort fid,
    ref MamaMsgField result
)
```

Try to get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object. 

### function tryField

```csharp
bool tryField(
    MamaFieldDescriptor descriptor,
    ref MamaMsgField result
)
```

Try to get a MAMA msg field. The result contains the reusable field object of the nativeHandle object. Applications calling this method will receive the same reusable object for repeated calls on same nativeHandle object. 

### function tryI32

```csharp
bool tryI32(
    string name,
    ushort fid,
    ref NullableInt result
)
```

<overloads>Try to get a signed 32-bit integer field</overloads> 

### function tryI32

```csharp
bool tryI32(
    MamaFieldDescriptor descriptor,
    ref NullableInt result
)
```


### function tryI64

```csharp
bool tryI64(
    string name,
    ushort fid,
    ref NullableLong result
)
```

<overloads>Try to get a signed 64-bit integer field</overloads> 

### function tryI64

```csharp
bool tryI64(
    MamaFieldDescriptor descriptor,
    ref NullableLong result
)
```


### function getNumFields

```csharp
int getNumFields()
```

Returns the total number of fields in the message. Sub-messages count as a single field. 

### function ToString

```csharp
override string ToString()
```

Return a string representation the message. 

### function ToJsonString

```csharp
string ToJsonString()
```

Return a json string representation the message. 

### function ToJsonString

```csharp
string ToJsonString(
    MamaDictionary dictionary
)
```

Return a json string representation the message. 

### function ToNormalizedString

```csharp
string ToNormalizedString()
```

Return a normalized string representation the message. 

### function getEntitleCode

```csharp
int getEntitleCode()
```

Get the entitle code for this message. The result defaults to 0 (no entitlement) if the field is not present. 

### function getSeqNum

```csharp
uint getSeqNum()
```

Return the sequence 

**Return**: 

### function typeForMsg

```csharp
mamaMsgType typeForMsg()
```

Extract the type from the supplied message. 

### function stringForMsg

```csharp
string stringForMsg()
```

Return the string for this message 

### function stringForType

```csharp
string stringForType(
    mamaMsgType type
)
```

Return the type name. 

### function stringForStatus

```csharp
string stringForStatus(
    mamaMsgStatus type
)
```

Return the status string 

### function getFieldAsString

```csharp
string getFieldAsString(
    string name,
    ushort fid
)
```

Return the field value as string 

### function begin

```csharp
void begin(
    ref MamaMsgIterator iterator
)
```


### function end

```csharp
void end(
    ref MamaMsgIterator iterator
)
```


### function addVectorString

```csharp
void addVectorString(
    string name,
    ushort fid,
    string[] val
)
```

Add an array of strings (char*) to the message. 

**Parameters**: 

  * **fid** The field id, can be 0 if the name is specified and field names are turned on. 
  * **name** The field name, can be null or blank if the field Id is supplied. 
  * **val** The array of strings to add. 


**Exceptions**: 

  * **ArgumentNullException** Throw if the string array is null. 
  * **ArgumentOutOfRangeException** Throw if there are no items in the string array. 


### function addVectorPrice

```csharp
void addVectorPrice(
    string name,
    ushort fid,
    MamaPrice[] val
)
```

Add an array of prices to the message. 

**Parameters**: 

  * **fid** The field id, can be 0 if the name is specified and field names are turned on. 
  * **name** The field name, can be null or blank if the field Id is supplied. 
  * **val** The array of messages to add. 


**Exceptions**: 

  * **ArgumentNullException** Throw if the message array is null. 
  * **ArgumentOutOfRangeException** Throw if there are no items in the message array. 


### function addVectorMsg

```csharp
void addVectorMsg(
    string name,
    ushort fid,
    MamaMsg[] val
)
```

Add an array of nativeHandle objects to the message. 

**Parameters**: 

  * **fid** The field id, can be 0 if the name is specified and field names are turned on. 
  * **name** The field name, can be null or blank if the field Id is supplied. 
  * **val** The array of messages to add. 


**Exceptions**: 

  * **ArgumentNullException** Throw if the message array is null. 
  * **ArgumentOutOfRangeException** Throw if there are no items in the message array. 


### function updateVectorString

```csharp
void updateVectorString(
    string name,
    ushort fid,
    string[] val
)
```

Update an array of strings (char*). 

**Parameters**: 

  * **name** The field name, can be null or blank if the field Id is supplied.
  * **fid** 
  * **val** The array of strings to add.


**Exceptions**: 

  * **ArgumentNullException** Throw if the string array is null. 
  * **ArgumentOutOfRangeException** Throw if there are no items in the string array. 


### function updateVectorPrice

```csharp
void updateVectorPrice(
    string name,
    ushort fid,
    MamaPrice[] val
)
```

Update an array of prices. 

**Parameters**: 

  * **fid** The field id, can be 0 if the name is specified and field names are turned on. 
  * **name** The field name, can be null or blank if the field Id is supplied. 
  * **val** The array of messages to add. 


**Exceptions**: 

  * **ArgumentNullException** Throw if the message array is null. 
  * **ArgumentOutOfRangeException** Throw if there are no items in the message array. 


### function updateVectorMsg

```csharp
void updateVectorMsg(
    string name,
    ushort fid,
    MamaMsg[] val
)
```

Update an array of nativeHandle objects. 

**Parameters**: 

  * **fid** The field id, can be 0 if the name is specified and field names are turned on. 
  * **name** The field name, can be null or blank if the field Id is supplied. 
  * **val** The array of messages to add. 


**Exceptions**: 

  * **ArgumentNullException** Throw if the message array is null. 
  * **ArgumentOutOfRangeException** Throw if there are no items in the message array. 


### function tryVectorString

```csharp
bool tryVectorString(
    string name,
    ushort fid,
    ref string[] result
)
```

Try to get a vector of strings (char*). 

**Parameters**: 

  * **fid** The field id, can be 0 if the name is specified and field names are turned on. 
  * **name** The field name, can be null or blank if the field Id is supplied. 
  * **result** To return the array of strings. 


**Return**: false if the field could not be found. Note that true is returned if an empty array is returned. 

### function tryVectorPrice

```csharp
bool tryVectorPrice(
    string name,
    ushort fid,
    ref MamaPrice[] result
)
```

Try to get a vector of prices. 

**Parameters**: 

  * **fid** The field id, can be 0 if the name is specified and field names are turned on. 
  * **name** The field name, can be null or blank if the field Id is supplied. 
  * **result** To return the array of prices. 


**Return**: false if the field could not be found. Note that true is returned if an empty array is returned. 

## Protected Functions Documentation

### function OnDispose

```csharp
virtual override void OnDispose()
```


**Reimplements**: [Wombat::MamaWrapper::OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)


### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```


**Return**: 

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


## Public Property Documentation

### property isFromInbox

```csharp
bool isFromInbox;
```


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100