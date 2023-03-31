---
title: com::wombat::mama::MamaMsg
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaMsg



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-mamamsg)**() |
| | **[MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-mamamsg)**(char payloadId) |
| | **[MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-mamamsg)**([MamaPayloadBridge](classcom_1_1wombat_1_1mama_1_1MamaPayloadBridge.html) payloadBridge) |
| [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) | **[getStringAsBuffer](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getstringasbuffer)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) | **[getStringAsBuffer](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getstringasbuffer)**(String name, int fid) |
| boolean | **[tryStringAsBuffer](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trystringasbuffer)**(String name, int fid, [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) mamaBuffer) |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getpointerval)**() |
| Iterator | **[iterator](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-iterator)**([MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dictionary) |
| Iterator | **[iterator](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-iterator)**() |
| native int | **[getNumFields](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getnumfields)**() |
| native boolean | **[getBoolean](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getboolean)**(String name, int fid) |
| boolean | **[getBoolean](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getboolean)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native char | **[getChar](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getchar)**(String name, int fid) |
| char | **[getChar](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getchar)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native byte | **[getI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti8)**(String name, int fid) |
| byte | **[getI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native short | **[getU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu8)**(String name, int fid) |
| short | **[getU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native short | **[getI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti16)**(String name, int fid) |
| short | **[getI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native int | **[getU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu16)**(String name, int fid) |
| int | **[getU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native int | **[getI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti32)**(String name, int fid) |
| int | **[getI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native long | **[getU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu32)**(String name, int fid) |
| long | **[getU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native long | **[getI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti64)**(String name, int fid) |
| long | **[getI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native long | **[getU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu64)**(String name, int fid) |
| long | **[getU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native float | **[getF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getf32)**(String name, int fid) |
| float | **[getF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getf32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native double | **[getF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getf64)**(String name, int fid) |
| double | **[getF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getf64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native String | **[getString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getstring)**(String name, int fid) |
| String | **[getString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getstring)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) | **[getMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getmsg)**(String name, int fid) |
| [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) | **[getMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getmsg)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native byte[] | **[getByteBuffer](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getbytebuffer)**() |
| void | **[createFromByteBuffer](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-createfrombytebuffer)**(byte[] byteArray) |
| void | **[setNewBuffer](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-setnewbuffer)**(byte[] byteArray) |
| native byte[] | **[getOpaque](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getopaque)**(String name, int fid) |
| byte[] | **[getOpaque](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getopaque)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) | **[getDateTime](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getdatetime)**(String name, int fid) |
| [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) | **[getDateTime](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getdatetime)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) | **[getPrice](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getprice)**(String name, int fid) |
| [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) | **[getPrice](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getprice)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[] | **[getArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarraymsg)**(String name, int fid) |
| [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[] | **[getArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarraymsg)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native byte[] | **[getArrayI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi8)**(String name, int fid) |
| byte[] | **[getArrayI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native short[] | **[getArrayU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayu8)**(String name, int fid) |
| short[] | **[getArrayU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayu8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native short[] | **[getArrayI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi16)**(String name, int fid) |
| short[] | **[getArrayI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native int[] | **[getArrayU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayu16)**(String name, int fid) |
| int[] | **[getArrayU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayu16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native int[] | **[getArrayI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi32)**(String name, int fid) |
| int[] | **[getArrayI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native long[] | **[getArrayU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayu32)**(String name, int fid) |
| long[] | **[getArrayU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayu32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native long[] | **[getArrayI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi64)**(String name, int fid) |
| long[] | **[getArrayI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native long[] | **[getArrayU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayu64)**(String name, int fid) |
| long[] | **[getArrayU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayu64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native float[] | **[getArrayF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayf32)**(String name, int fid) |
| float[] | **[getArrayF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayf32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native double[] | **[getArrayF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayf64)**(String name, int fid) |
| double[] | **[getArrayF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayf64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native String[] | **[getArrayString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarraystring)**(String name, int fid) |
| String[] | **[getArrayString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarraystring)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc) |
| native boolean | **[getIsDefinitelyDuplicate](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getisdefinitelyduplicate)**() |
| native boolean | **[getIsPossiblyDuplicate](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getispossiblyduplicate)**() |
| native boolean | **[getIsPossiblyDelayed](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getispossiblydelayed)**() |
| native boolean | **[getIsDefinitelyDelayed](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getisdefinitelydelayed)**() |
| native boolean | **[getIsOutOfSequence](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getisoutofsequence)**() |
| native long | **[getSeqNum](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getseqnum)**() |
| void | **[addBool](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addbool)**(String name, int fid, boolean value) |
| native void | **[addBoolean](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addboolean)**(String name, int fid, boolean value) |
| native void | **[addChar](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addchar)**(String name, int fid, char value) |
| native void | **[addI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addi8)**(String name, int fid, byte value) |
| native void | **[addU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addu8)**(String name, int fid, short value) |
| native void | **[addI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addi16)**(String name, int fid, short value) |
| native void | **[addU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addu16)**(String name, int fid, int value) |
| native void | **[addI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addi32)**(String name, int fid, int value) |
| native void | **[addU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addu32)**(String name, int fid, long value) |
| native void | **[addI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addi64)**(String name, int fid, long value) |
| native void | **[addU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addu64)**(String name, int fid, long value) |
| native void | **[addF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addf32)**(String name, int fid, float value) |
| native void | **[addF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addf64)**(String name, int fid, double value) |
| native void | **[addString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addstring)**(String name, int fid, String value) |
| native void | **[addDateTime](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-adddatetime)**(String name, int fid, [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) value) |
| native void | **[addPrice](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addprice)**(String name, int fid, [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) value) |
| native void | **[addMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addmsg)**(String name, int fid, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) value) |
| native void | **[addOpaque](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addopaque)**(String name, int fid, byte[] value) |
| native void | **[addArrayI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayi8)**(String name, int fid, byte[] value) |
| native void | **[addArrayU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayu8)**(String name, int fid, short[] value) |
| native void | **[addArrayI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayi16)**(String name, int fid, short[] value) |
| native void | **[addArrayU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayu16)**(String name, int fid, int[] value) |
| native void | **[addArrayI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayi32)**(String name, int fid, int[] value) |
| native void | **[addArrayU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayu32)**(String name, int fid, long[] value) |
| native void | **[addArrayI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayi64)**(String name, int fid, long[] value) |
| native void | **[addArrayU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayu64)**(String name, int fid, long[] value) |
| native void | **[addArrayF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayf32)**(String name, int fid, float[] value) |
| native void | **[addArrayF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarrayf64)**(String name, int fid, double[] value) |
| native void | **[addArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarraymsg)**(String name, int fid, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[] value) |
| native void | **[addArrayMsgWithLength](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarraymsgwithlength)**(String name, int fid, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[] value, int length) |
| native void | **[addArrayString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarraystring)**(String name, int fid, String[] value, int length) |
| void | **[addArrayString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-addarraystring)**(String name, int fid, String[] value) |
| native void | **[updateI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatei8)**(String name, int fid, byte value) |
| native void | **[updateU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updateu8)**(String name, int fid, short value) |
| native void | **[updateI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatei16)**(String name, int fid, short value) |
| native void | **[updateU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updateu16)**(String name, int fid, int value) |
| native void | **[updateI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatei32)**(String name, int fid, int value) |
| native void | **[updateU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updateu32)**(String name, int fid, long value) |
| native void | **[updateI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatei64)**(String name, int fid, long value) |
| native void | **[updateU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updateu64)**(String name, int fid, long value) |
| native void | **[updateF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatef32)**(String name, int fid, float value) |
| native void | **[updateF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatef64)**(String name, int fid, double value) |
| native void | **[updateString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatestring)**(String name, int fid, String value) |
| native void | **[updatePrice](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updateprice)**(String name, int fid, [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) value) |
| native void | **[updateBoolean](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updateboolean)**(String name, int fid, boolean value) |
| native void | **[updateChar](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatechar)**(String name, int fid, char value) |
| native void | **[updateDateTime](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatedatetime)**(String name, int fid, [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) value) |
| native void | **[updateArrayI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayi8)**(String name, int fid, byte[] value) |
| native void | **[updateArrayU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayu8)**(String name, int fid, short[] value) |
| native void | **[updateArrayI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayi16)**(String name, int fid, short[] value) |
| native void | **[updateArrayU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayu16)**(String name, int fid, int[] value) |
| native void | **[updateArrayI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayi32)**(String name, int fid, int[] value) |
| native void | **[updateArrayU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayu32)**(String name, int fid, long[] value) |
| native void | **[updateArrayI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayi64)**(String name, int fid, long[] value) |
| native void | **[updateArrayU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayu64)**(String name, int fid, long[] value) |
| native void | **[updateArrayF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayf32)**(String name, int fid, float[] value) |
| native void | **[updateArrayF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-updatearrayf64)**(String name, int fid, double[] value) |
| char | **[getChar](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getchar)**(String name, int fid, char defaultValue) |
| char | **[getChar](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getchar)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, char defaultValue) |
| byte | **[getI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti8)**(String name, int fid, byte defaultValue) |
| byte | **[getI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, byte defaultValue) |
| short | **[getU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu8)**(String name, int fid, short defaultValue) |
| short | **[getU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, short defaultValue) |
| short | **[getI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti16)**(String name, int fid, short defaultValue) |
| short | **[getI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, short defaultValue) |
| int | **[getU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu16)**(String name, int fid, int defaultValue) |
| int | **[getU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, int defaultValue) |
| int | **[getI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti32)**(String name, int fid, int defaultValue) |
| int | **[getI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, int defaultValue) |
| long | **[getU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu32)**(String name, int fid, long defaultValue) |
| long | **[getU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, long defaultValue) |
| long | **[getI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti64)**(String name, int fid, long defaultValue) |
| long | **[getI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-geti64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, long defaultValue) |
| long | **[getU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu64)**(String name, int fid, long defaultValue) |
| long | **[getU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getu64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, long defaultValue) |
| float | **[getF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getf32)**(String name, int fid, float defaultValue) |
| float | **[getF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getf32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, float defaultValue) |
| double | **[getF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getf64)**(String name, int fid, double defaultValue) |
| double | **[getF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getf64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, double defaultValue) |
| String | **[getString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getstring)**(String name, int fid, String defaultValue) |
| String | **[getString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getstring)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, String defaultValue) |
| [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) | **[getPrice](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getprice)**(String name, int fid, [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) defaultValue) |
| [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) | **[getPrice](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getprice)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) defaultValue) |
| [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) | **[getMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getmsg)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) defaultValue) |
| int[] | **[getArrayI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarrayi32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, int[] defaultValue) |
| [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[] | **[getArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getarraymsg)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) fieldDesc, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[] defaultValue) |
| native boolean | **[tryBoolean](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryboolean)**(String name, int fid, [MamaBoolean](classcom_1_1wombat_1_1mama_1_1MamaBoolean.html) result) |
| boolean | **[tryBoolean](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryboolean)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaBoolean](classcom_1_1wombat_1_1mama_1_1MamaBoolean.html) result) |
| native boolean | **[tryChar](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trychar)**(String name, int fid, [MamaChar](classcom_1_1wombat_1_1mama_1_1MamaChar.html) result) |
| boolean | **[tryChar](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trychar)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaChar](classcom_1_1wombat_1_1mama_1_1MamaChar.html) result) |
| native boolean | **[tryI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryi8)**(String name, int fid, [MamaByte](classcom_1_1wombat_1_1mama_1_1MamaByte.html) result) |
| boolean | **[tryI8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryi8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaByte](classcom_1_1wombat_1_1mama_1_1MamaByte.html) result) |
| native boolean | **[tryU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryu8)**(String name, int fid, [MamaShort](classcom_1_1wombat_1_1mama_1_1MamaShort.html) result) |
| boolean | **[tryU8](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryu8)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaShort](classcom_1_1wombat_1_1mama_1_1MamaShort.html) result) |
| native boolean | **[tryI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryi16)**(String name, int fid, [MamaShort](classcom_1_1wombat_1_1mama_1_1MamaShort.html) result) |
| boolean | **[tryI16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryi16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaShort](classcom_1_1wombat_1_1mama_1_1MamaShort.html) result) |
| native boolean | **[tryU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryu16)**(String name, int fid, [MamaInteger](classcom_1_1wombat_1_1mama_1_1MamaInteger.html) result) |
| boolean | **[tryU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryu16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaInteger](classcom_1_1wombat_1_1mama_1_1MamaInteger.html) result) |
| native boolean | **[tryI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryi32)**(String name, int fid, [MamaInteger](classcom_1_1wombat_1_1mama_1_1MamaInteger.html) result) |
| boolean | **[tryI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryi32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaInteger](classcom_1_1wombat_1_1mama_1_1MamaInteger.html) result) |
| native boolean | **[tryU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryu32)**(String name, int fid, [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) result) |
| boolean | **[tryU32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryu32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) result) |
| native boolean | **[tryI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryi64)**(String name, int fid, [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) result) |
| boolean | **[tryI64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryi64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) result) |
| native boolean | **[tryU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryu64)**(String name, int fid, [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) result) |
| boolean | **[tryU64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryu64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) result) |
| native boolean | **[tryF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryf32)**(String name, int fid, [MamaFloat](classcom_1_1wombat_1_1mama_1_1MamaFloat.html) result) |
| boolean | **[tryF32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryf32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaFloat](classcom_1_1wombat_1_1mama_1_1MamaFloat.html) result) |
| native boolean | **[tryF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryf64)**(String name, int fid, [MamaDouble](classcom_1_1wombat_1_1mama_1_1MamaDouble.html) result) |
| boolean | **[tryF64](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryf64)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaDouble](classcom_1_1wombat_1_1mama_1_1MamaDouble.html) result) |
| boolean | **[tryDateTime](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trydatetime)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) result) |
| native boolean | **[tryDateTime](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trydatetime)**(String name, int fid, [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) result) |
| boolean | **[tryPrice](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryprice)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) result) |
| native boolean | **[tryPrice](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryprice)**(String name, int fid, [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) result) |
| native boolean | **[tryString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trystring)**(String name, int fid, [MamaString](classcom_1_1wombat_1_1mama_1_1MamaString.html) result) |
| boolean | **[tryString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trystring)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaString](classcom_1_1wombat_1_1mama_1_1MamaString.html) result) |
| boolean | **[tryOpaque](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryopaque)**(String name, int fid, [MamaOpaque](classcom_1_1wombat_1_1mama_1_1MamaOpaque.html) result) |
| boolean | **[tryOpaque](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryopaque)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaOpaque](classcom_1_1wombat_1_1mama_1_1MamaOpaque.html) result) |
| boolean | **[tryMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trymsg)**(String name, int fid, [MamaMessage](classcom_1_1wombat_1_1mama_1_1MamaMessage.html) result) |
| boolean | **[tryMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-trymsg)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaMessage](classcom_1_1wombat_1_1mama_1_1MamaMessage.html) result) |
| boolean | **[tryArrayI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryarrayi32)**(String name, int fid, [MamaArrayInt](classcom_1_1wombat_1_1mama_1_1MamaArrayInt.html) result) |
| boolean | **[tryArrayI32](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryarrayi32)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaArrayInt](classcom_1_1wombat_1_1mama_1_1MamaArrayInt.html) result) |
| boolean | **[tryArrayU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryarrayu16)**(String name, int fid, [MamaArrayInt](classcom_1_1wombat_1_1mama_1_1MamaArrayInt.html) result) |
| boolean | **[tryArrayU16](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryarrayu16)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaArrayInt](classcom_1_1wombat_1_1mama_1_1MamaArrayInt.html) result) |
| boolean | **[tryArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryarraymsg)**(String name, int fid, [MamaArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaArrayMsg.html) result) |
| boolean | **[tryArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryarraymsg)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaArrayMsg.html) result) |
| boolean | **[tryArrayString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryarraystring)**(String name, int fid, [MamaArrayString](classcom_1_1wombat_1_1mama_1_1MamaArrayString.html) result) |
| boolean | **[tryArrayString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tryarraystring)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaArrayString](classcom_1_1wombat_1_1mama_1_1MamaArrayString.html) result) |
| void | **[iterateFields](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-iteratefields)**([MamaMsgFieldIterator](interfacecom_1_1wombat_1_1mama_1_1MamaMsgFieldIterator.html) iterator, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dictionary, Object closure) |
| native String | **[getFieldAsString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getfieldasstring)**(int fid, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dictionary) |
| native boolean | **[isFromInbox](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-isfrominbox)**() |
| native String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tostring)**() |
| native String | **[toJsonString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tojsonstring)**() |
| String | **[toJsonString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tojsonstring)**([MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dictionary) |
| native String | **[toNormalizedString](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-tonormalizedstring)**() |
| native char | **[getPayloadType](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getpayloadtype)**() |
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-destroy)**() |
| native void | **[clear](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-clear)**() |
| native void | **[copy](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-copy)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) rhs) |
| native [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) | **[detach](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-detach)**() |
| native void | **[apply](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-apply)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) rhs) |
| [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) | **[getField](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getfield)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) field, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dict) |
| [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) | **[getField](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-getfield)**(String fieldName, int fid, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dict) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[finalize](classcom_1_1wombat_1_1mama_1_1MamaMsg.html#function-finalize)**() |

## Detailed Description

```java
class com::wombat::mama::MamaMsg;
```


Wrapper class for the native C mama msg structure.

Field identifiers must be greater than or equal to 0. A field identifier of 0 indicates that there is no unique FID and multiple fields with the same name may have FID == 0. 

Field lookup proceeds in the following manner. 

1. If the fid supplied is non-zero, search for a field with the specified fid and return the field if it exists (the name is not validated). Otherwise return null.  
2. If the fid supplied is 0, return the first field encountered with the supplied name or null if no such field exists.  
Get methods for numeric values may result in loss of information through either rounding or truncation when a larger data type is accessed as a smaller one. The result may be the same as the result of casting the larger value to the smaller. For example calling `getShort` for an integer field with a value greater than `Short.MAX_VALUE` might return `Short.MIN_VALUE`. It is also valid to throw a `ClassCastException` or other appropriate `RuntimeException`. 

Since some message implementations may not natively support all data types, the behaviour may vary substantially. In creating and accessing messages the Wombat APIs assume that the underlying values are stored in the smallest possible fields, and accesses them accordingly. For this reason the minimal requirement is that the methods for accessing and creating fields support the full range of values appropriate for their type. How they deal with larger values should be irrelevant. 

## Public Functions Documentation

### function MamaMsg

```java
inline MamaMsg()
```


The default construction behaviour is to create the underlying C message structure. We need this when users are creating their own messages when using the publishing API. 


### function MamaMsg

```java
inline MamaMsg(
    char payloadId
)
```


**Parameters**: 

  * **payloadId** The identifier of the payload to be used. 


Create a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html).


### function MamaMsg

```java
inline MamaMsg(
    MamaPayloadBridge payloadBridge
)
```


**Parameters**: 

  * **payloadBridge** The [MamaPayloadBridge](classcom_1_1wombat_1_1mama_1_1MamaPayloadBridge.html) to be used 


Create a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html).


### function getStringAsBuffer

```java
inline MamaBuffer getStringAsBuffer(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The field descriptor. 


**Exceptions**: 

  * **WombatException** Thrown if the field descriptor is null. 


**Return**: A [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) containing single byte ASCII characters, to obtain a unicode string call MamaBuffer.asCharBuffer. 

This function will obtain a string from the mama message and return it inside a [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) object without performing any memory allocation that would cause future garbage collection.


### function getStringAsBuffer

```java
inline MamaBuffer getStringAsBuffer(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field Id. 


**Return**: A [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) containing single byte ASCII characters, to obtain a unicode string call MamaBuffer.asCharBuffer. 

This function will obtain a string from the mama message and return it inside a [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) object without performing any memory allocation that would cause future garbage collection.


### function tryStringAsBuffer

```java
inline boolean tryStringAsBuffer(
    String name,
    int fid,
    MamaBuffer mamaBuffer
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field Id. 
  * **mamaBuffer** A [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) that will contain the string if it is present in the message. 


**Return**: Boolean indicating of the field was present in the message or not. 

This function will obtain a string from the mama message and return it inside a [MamaBuffer](classcom_1_1wombat_1_1mama_1_1MamaBuffer.html) object without performing any memory allocation that would cause future garbage collection. If the field is not in the message the function will return FALSE.


### function getPointerVal

```java
inline long getPointerVal()
```


**Return**: The message pointer (Long) 

Return the native message pointer.


### function iterator

```java
inline Iterator iterator(
    MamaDictionary dictionary
)
```


**Parameters**: 

  * **dictionary** The dictionary to use for iterating over the message


**Return**: The message iterator (Iterator) 

Return a iterator for use with this [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)


### function iterator

```java
inline Iterator iterator()
```


**Return**: A message iterator (Iterator) 

Return an iterator for use with this [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)


### function getNumFields

```java
native int getNumFields()
```


**Return**: Number of fields in the message as in int 

Returns the total number of fields in the message.


### function getBoolean

```java
native boolean getBoolean(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a boolean

Returns a Boolean value from the underlying message.


### function getBoolean

```java
inline boolean getBoolean(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a boolean

Returns a Boolean value from the underlying message.


### function getChar

```java
native char getChar(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a char

Returns a Char value from the underlying message.


### function getChar

```java
inline char getChar(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a boolean

Returns a Char value from the underlying message.


### function getI8

```java
native byte getI8(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a byte

Returns an I8 value from the underlying message.


### function getI8

```java
inline byte getI8(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a byte

Returns a Integer (I8) value from the underlying message.


### function getU8

```java
native short getU8(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a short

Returns a U8 value from the underlying message.


### function getU8

```java
inline short getU8(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a short

Returns a Unsigned Integer (U8) value from the underlying message.


### function getI16

```java
native short getI16(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a short

Returns an I16 value from the underlying message.


### function getI16

```java
inline short getI16(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a short

Returns a Integer (U16) value from the underlying message.


### function getU16

```java
native int getU16(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a int

Returns a U16 value from the underlying message.


### function getU16

```java
inline int getU16(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a int

Returns a Unsigned Integer (U16) value from the underlying message.


### function getI32

```java
native int getI32(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a int

Returns an I32 value from the underlying message.


### function getI32

```java
inline int getI32(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a int

Returns a Integer (I32) value from the underlying message.


### function getU32

```java
native long getU32(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a long

Returns a U32 value from the underlying message.


### function getU32

```java
inline long getU32(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a long

Returns a Unsigned Integer (U32) value from the underlying message.


### function getI64

```java
native long getI64(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a long

Returns an I64 value from the underlying message.


### function getI64

```java
inline long getI64(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a long

Returns a Integer (I64) value from the underlying message.


### function getU64

```java
native long getU64(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a long

Returns a U64 value from the underlying message.


### function getU64

```java
inline long getU64(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a long

Returns a Unsigned Integer (U64) value from the underlying message.


### function getF32

```java
native float getF32(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a float

Returns an F32 value from the underlying message.


### function getF32

```java
inline float getF32(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a float

Returns a Float (F32) value from the underlying message.


### function getF64

```java
native double getF64(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a double

Returns an F64 value from the underlying message.


### function getF64

```java
inline double getF64(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a double

Returns a Double (F64) value from the underlying message.


### function getString

```java
native String getString(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a String

Returns a String value from the underlying message.


### function getString

```java
inline String getString(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a string

Returns a String value from the underlying message.


### function getMsg

```java
native MamaMsg getMsg(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: The field value as a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)

Returns a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) value from the underlying message.


### function getMsg

```java
inline MamaMsg getMsg(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)

Returns a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) value from the underlying message.


### function getByteBuffer

```java
native byte[] getByteBuffer()
```


**Return**: The byte array containing the message wire format 

Return the internal message buffer as an array of bytes which is suitable for writing to a file. Note that this is a copy of the bytes in the current buffer.


### function createFromByteBuffer

```java
inline void createFromByteBuffer(
    byte[] byteArray
)
```


**Parameters**: 

  * **byteArray** The byte array containing the wire format of the message 


Create a mamaMsg from the provided byte buffer. This function causes a memory buffer to be allocated that is persisted for the lifetime of the message. Therefore calling this function a second time will cause an error. Instead destroy the message and then re-created it using this function. 


### function setNewBuffer

```java
inline void setNewBuffer(
    byte[] byteArray
)
```


**Parameters**: 

  * **byteArray** The byte array containing the wire format of the message


**Exceptions**: 

  * **WombatException** will be thrown if the byteArray is null 


Set a new buffer for an existing mamaMsg. This approach is faster than creating a new message for buffers as the message can reuse memory allocated during previous use.


### function getOpaque

```java
native byte[] getOpaque(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a byte[] 

Returns a Opaque value from the underlying message.


### function getOpaque

```java
inline byte[] getOpaque(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a byte[]

Returns a Opaque (byte[]) value from the underlying message.


### function getDateTime

```java
inline MamaDateTime getDateTime(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html)

Returns a [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) value from the underlying message.


### function getDateTime

```java
inline MamaDateTime getDateTime(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html)

Returns a [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) value from the underlying message.


### function getPrice

```java
inline MamaPrice getPrice(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html)

Returns a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) value from the underlying message.


### function getPrice

```java
inline MamaPrice getPrice(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html)

Returns a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) value from the underlying message.


### function getArrayMsg

```java
native MamaMsg[] getArrayMsg(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[] 

Returns a Message Array value from the underlying message.


### function getArrayMsg

```java
inline MamaMsg[] getArrayMsg(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[]

Returns a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) Array ([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[]) value from the underlying message.


### function getArrayI8

```java
native byte[] getArrayI8(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a byte[] 

Returns an I8 Array value from the underlying message.


### function getArrayI8

```java
inline byte[] getArrayI8(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a byte[] 

Returns an I8 Array (byte[]) value from the underlying message.


### function getArrayU8

```java
native short[] getArrayU8(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a short[] 

Returns a U8 Array value from the underlying message.


### function getArrayU8

```java
inline short[] getArrayU8(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a short[] 

Returns a U8 Array (short[]) value from the underlying message.


### function getArrayI16

```java
native short[] getArrayI16(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a short[] 

Returns an I16 Array value from the underlying message.


### function getArrayI16

```java
inline short[] getArrayI16(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a short[] 

Returns a I16 Array (short[]) value from the underlying message.


### function getArrayU16

```java
native int[] getArrayU16(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a int[] 

Returns a U16 Array value from the underlying message.


### function getArrayU16

```java
inline int[] getArrayU16(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a int[] 

Returns a U16 Array (int[]) value from the underlying message.


### function getArrayI32

```java
native int[] getArrayI32(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a int[] 

Returns an I32 Array value from the underlying message.


### function getArrayI32

```java
inline int[] getArrayI32(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a int[] 

Returns a I32 Array (int[]) value from the underlying message.


### function getArrayU32

```java
native long[] getArrayU32(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a long[] 

Returns a U32 Array value from the underlying message.


### function getArrayU32

```java
inline long[] getArrayU32(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a long[] 

Returns a U32 Array (long[]) value from the underlying message.


### function getArrayI64

```java
native long[] getArrayI64(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a long[] 

Returns an I64 Array value from the underlying message.


### function getArrayI64

```java
inline long[] getArrayI64(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a long[] 

Returns a I64 Array (long[]) value from the underlying message.


### function getArrayU64

```java
native long[] getArrayU64(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a long[] 

Returns an U64 Array value from the underlying message.


### function getArrayU64

```java
inline long[] getArrayU64(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a long[] 

Returns a U64 Array (long[]) value from the underlying message.


### function getArrayF32

```java
native float[] getArrayF32(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a float[] 

Returns an F32 Array value from the underlying message.


### function getArrayF32

```java
inline float[] getArrayF32(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a float[] 

Returns a F32 Array (float[]) value from the underlying message.


### function getArrayF64

```java
native double[] getArrayF64(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a double[] 

Returns an F64 Array value from the underlying message.


### function getArrayF64

```java
inline double[] getArrayF64(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Return**: The field value as a double[] 

Returns a F32 Array (double[]) value from the underlying message.


### function getArrayString

```java
native String[] getArrayString(
    String name,
    int fid
)
```


**Parameters**: 

  * **name** The name of the field 
  * **fid** The FID of the field


**Return**: The field value as a string[] 

Returns an String Array value from the underlying message.


### function getArrayString

```java
inline String[] getArrayString(
    MamaFieldDescriptor fieldDesc
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) of the message field that you wich to retrieve


**Exceptions**: 

  * **WombatException** will be thrown if the fieldDesc is null 


**Return**: The field value as a string[]

Returns a String Array (string[]) value from the underlying message.


### function getIsDefinitelyDuplicate

```java
native boolean getIsDefinitelyDuplicate()
```


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: Boolean indiciating whether the message is a duplicate

Returns Boolean indiciating whether the underlying message is definitely duplicate.


### function getIsPossiblyDuplicate

```java
native boolean getIsPossiblyDuplicate()
```


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: Boolean indiciating whether the message is a possibly a duplicate

Returns Boolean indiciating whether the underlying message is possibly duplicate.


### function getIsPossiblyDelayed

```java
native boolean getIsPossiblyDelayed()
```


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: Boolean indiciating whether the message is a possibly delayed

Returns Boolean indiciating whether the underlying message is possibly delayed.


### function getIsDefinitelyDelayed

```java
native boolean getIsDefinitelyDelayed()
```


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: Boolean indiciating whether the message is a definitely delayed

Returns Boolean indiciating whether the underlying message is definitely delayed.


### function getIsOutOfSequence

```java
native boolean getIsOutOfSequence()
```


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


**Return**: Boolean indiciating whether the message is out of sequence

Returns Boolean indiciating whether the underlying message is out of sequence.


### function getSeqNum

```java
native long getSeqNum()
```


**Return**: The field value as a long 

Returns the Sequence Number from the underlying message.


### function addBool

```java
inline void addBool(
    String name,
    int fid,
    boolean value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a Boolean value to the underlying message.


### function addBoolean

```java
native void addBoolean(
    String name,
    int fid,
    boolean value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a Boolean value to the underlying message.


### function addChar

```java
native void addChar(
    String name,
    int fid,
    char value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a Char value to the underlying message.


### function addI8

```java
native void addI8(
    String name,
    int fid,
    byte value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an I8 (byte) value to the underlying message.


### function addU8

```java
native void addU8(
    String name,
    int fid,
    short value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an U8 (byte) value to the underlying message.


### function addI16

```java
native void addI16(
    String name,
    int fid,
    short value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an I16 (short) value to the underlying message.


### function addU16

```java
native void addU16(
    String name,
    int fid,
    int value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an U16 (short) value to the underlying message.


### function addI32

```java
native void addI32(
    String name,
    int fid,
    int value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an I32 (int) value to the underlying message.


### function addU32

```java
native void addU32(
    String name,
    int fid,
    long value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an U32 (int) value to the underlying message.


### function addI64

```java
native void addI64(
    String name,
    int fid,
    long value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an I64 (long) value to the underlying message.


### function addU64

```java
native void addU64(
    String name,
    int fid,
    long value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an U64 (long) value to the underlying message.


### function addF32

```java
native void addF32(
    String name,
    int fid,
    float value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an F32 (float) value to the underlying message.


### function addF64

```java
native void addF64(
    String name,
    int fid,
    double value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an F64 (double) value to the underlying message.


### function addString

```java
native void addString(
    String name,
    int fid,
    String value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an String (Java String) value to the underlying message.


### function addDateTime

```java
native void addDateTime(
    String name,
    int fid,
    MamaDateTime value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) value to the underlying message.


### function addPrice

```java
native void addPrice(
    String name,
    int fid,
    MamaPrice value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) value to the underlying message.


### function addMsg

```java
native void addMsg(
    String name,
    int fid,
    MamaMsg value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) value to the underlying message.


### function addOpaque

```java
native void addOpaque(
    String name,
    int fid,
    byte[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an Opaque (byte[]) value to the underlying message.


### function addArrayI8

```java
native void addArrayI8(
    String name,
    int fid,
    byte[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an I8 Array (byte[]) value to the underlying message.


### function addArrayU8

```java
native void addArrayU8(
    String name,
    int fid,
    short[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a U8 Array (short[]) value to the underlying message.


### function addArrayI16

```java
native void addArrayI16(
    String name,
    int fid,
    short[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an I16 Array (short[]) value to the underlying message.


### function addArrayU16

```java
native void addArrayU16(
    String name,
    int fid,
    int[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a U16 Array (int[]) value to the underlying message.


### function addArrayI32

```java
native void addArrayI32(
    String name,
    int fid,
    int[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an I32 Array (int[]) value to the underlying message.


### function addArrayU32

```java
native void addArrayU32(
    String name,
    int fid,
    long[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a U32 Array (long[]) value to the underlying message.


### function addArrayI64

```java
native void addArrayI64(
    String name,
    int fid,
    long[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add an I64 Array (long[]) value to the underlying message.


### function addArrayU64

```java
native void addArrayU64(
    String name,
    int fid,
    long[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a U64 Array (long[]) value to the underlying message.


### function addArrayF32

```java
native void addArrayF32(
    String name,
    int fid,
    float[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a F32 Array (float[]) value to the underlying message.


### function addArrayF64

```java
native void addArrayF64(
    String name,
    int fid,
    double[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a F64 Array (double[]) value to the underlying message.


### function addArrayMsg

```java
native void addArrayMsg(
    String name,
    int fid,
    MamaMsg[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The value to be added to the message


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) Array ([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[]) value to the underlying message.


### function addArrayMsgWithLength

```java
native void addArrayMsgWithLength(
    String name,
    int fid,
    MamaMsg[] value,
    int length
)
```


**Parameters**: 

  * **name** The field name. 
  * **fid** The field id. 
  * **value** The array of messages. 
  * **length** The number of messages to add from the array, if this parameter is outside the array bounds then an exception will be thrown. 


**Exceptions**: 

  * **[com.wombat.mama.MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** 


This function will add a new field containing an array of messages. Unlinke addArrayMsg it will not add the entire array but only the number of messages supplied in the length parameter. 


### function addArrayString

```java
native void addArrayString(
    String name,
    int fid,
    String[] value,
    int length
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The array of strings 
  * **length** The number of strings to add from the string array, if this parameter is outside the array bounds then an exception will be thrown.


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a String Array (String[]) value to the underlying message.


### function addArrayString

```java
inline void addArrayString(
    String name,
    int fid,
    String[] value
)
```


**Parameters**: 

  * **name** The name of the field to be added to the message 
  * **fid** The FID of the field to be added to the message 
  * **value** The array of strings


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Add a String Array (String[]) value to the underlying message.


### function updateI8

```java
native void updateI8(
    String name,
    int fid,
    byte value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an I8 (byte) value in the underlying message.


### function updateU8

```java
native void updateU8(
    String name,
    int fid,
    short value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a U8 (byte) value in the underlying message.


### function updateI16

```java
native void updateI16(
    String name,
    int fid,
    short value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an I16 (short) value in the underlying message.


### function updateU16

```java
native void updateU16(
    String name,
    int fid,
    int value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a U16 (short) value in the underlying message.


### function updateI32

```java
native void updateI32(
    String name,
    int fid,
    int value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an I32 (int) value in the underlying message.


### function updateU32

```java
native void updateU32(
    String name,
    int fid,
    long value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a U32 (int) value in the underlying message.


### function updateI64

```java
native void updateI64(
    String name,
    int fid,
    long value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an I64 (long) value in the underlying message.


### function updateU64

```java
native void updateU64(
    String name,
    int fid,
    long value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a U64 (long) value in the underlying message.


### function updateF32

```java
native void updateF32(
    String name,
    int fid,
    float value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an F32 (float) value in the underlying message.


### function updateF64

```java
native void updateF64(
    String name,
    int fid,
    double value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an F64 (double) value in the underlying message.


### function updateString

```java
native void updateString(
    String name,
    int fid,
    String value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an String (Java String) value in the underlying message.


### function updatePrice

```java
native void updatePrice(
    String name,
    int fid,
    MamaPrice value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) value in the underlying message.


### function updateBoolean

```java
native void updateBoolean(
    String name,
    int fid,
    boolean value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a Boolean value in the underlying message.


### function updateChar

```java
native void updateChar(
    String name,
    int fid,
    char value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an Char value in the underlying message.


### function updateDateTime

```java
native void updateDateTime(
    String name,
    int fid,
    MamaDateTime value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) value in the underlying message.


### function updateArrayI8

```java
native void updateArrayI8(
    String name,
    int fid,
    byte[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an I8 (byte[]) value in the underlying message.


### function updateArrayU8

```java
native void updateArrayU8(
    String name,
    int fid,
    short[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a U8 (short[]) value in the underlying message.


### function updateArrayI16

```java
native void updateArrayI16(
    String name,
    int fid,
    short[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an I16 (short[]) value in the underlying message.


### function updateArrayU16

```java
native void updateArrayU16(
    String name,
    int fid,
    int[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a U16 (int[]) value in the underlying message.


### function updateArrayI32

```java
native void updateArrayI32(
    String name,
    int fid,
    int[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an I32 (int[]) value in the underlying message.


### function updateArrayU32

```java
native void updateArrayU32(
    String name,
    int fid,
    long[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a U32 (long[]) value in the underlying message.


### function updateArrayI64

```java
native void updateArrayI64(
    String name,
    int fid,
    long[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an I64 (long[]) value in the underlying message.


### function updateArrayU64

```java
native void updateArrayU64(
    String name,
    int fid,
    long[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of a U64 (long[]) value in the underlying message.


### function updateArrayF32

```java
native void updateArrayF32(
    String name,
    int fid,
    float[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an F32 (float[]) value in the underlying message.


### function updateArrayF64

```java
native void updateArrayF64(
    String name,
    int fid,
    double[] value
)
```


**Parameters**: 

  * **name** The name of the field to be updated within the message 
  * **fid** The FID of the field to be updated within the message 
  * **value** The new value


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the message pointer does not exist 


Update the value of an F64 (double[]) value in the underlying message.


### function getChar

```java
inline char getChar(
    String name,
    int fid,
    char defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a char 

Return the value of a Char field from the underlying message.


### function getChar

```java
inline char getChar(
    MamaFieldDescriptor fieldDesc,
    char defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a char 

Return the value of a Char field from the underlying message.


### function getI8

```java
inline byte getI8(
    String name,
    int fid,
    byte defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a byte 

Return the value of an I8 field from the underlying message.


### function getI8

```java
inline byte getI8(
    MamaFieldDescriptor fieldDesc,
    byte defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a byte 

Return the value of an I8 field from the underlying message.


### function getU8

```java
inline short getU8(
    String name,
    int fid,
    short defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a short 

Return the value of a U8 field from the underlying message.


### function getU8

```java
inline short getU8(
    MamaFieldDescriptor fieldDesc,
    short defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a short 

Return the value of a U8 field from the underlying message.


### function getI16

```java
inline short getI16(
    String name,
    int fid,
    short defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a short 

Return the value of an I16 field from the underlying message.


### function getI16

```java
inline short getI16(
    MamaFieldDescriptor fieldDesc,
    short defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a short 

Return the value of an I16 field from the underlying message.


### function getU16

```java
inline int getU16(
    String name,
    int fid,
    int defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a int 

Return the value of a U16 field from the underlying message.


### function getU16

```java
inline int getU16(
    MamaFieldDescriptor fieldDesc,
    int defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a int 

Return the value of a U16 field from the underlying message.


### function getI32

```java
inline int getI32(
    String name,
    int fid,
    int defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a int 

Return the value of an I32 field from the underlying message.


### function getI32

```java
inline int getI32(
    MamaFieldDescriptor fieldDesc,
    int defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a int 

Return the value of an I32 field from the underlying message.


### function getU32

```java
inline long getU32(
    String name,
    int fid,
    long defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a long 

Return the value of a U32 field from the underlying message.


### function getU32

```java
inline long getU32(
    MamaFieldDescriptor fieldDesc,
    long defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a long 

Return the value of a U32 field from the underlying message.


### function getI64

```java
inline long getI64(
    String name,
    int fid,
    long defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a long 

Return the value of an I64 field from the underlying message.


### function getI64

```java
inline long getI64(
    MamaFieldDescriptor fieldDesc,
    long defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a long 

Return the value of an I64 field from the underlying message.


### function getU64

```java
inline long getU64(
    String name,
    int fid,
    long defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a long 

Return the value of a U64 field from the underlying message.


### function getU64

```java
inline long getU64(
    MamaFieldDescriptor fieldDesc,
    long defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a long 

Return the value of a U64 field from the underlying message.


### function getF32

```java
inline float getF32(
    String name,
    int fid,
    float defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a float 

Return the value of an F32 field from the underlying message.


### function getF32

```java
inline float getF32(
    MamaFieldDescriptor fieldDesc,
    float defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a float 

Return the value of an F32 field from the underlying message.


### function getF64

```java
inline double getF64(
    String name,
    int fid,
    double defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a double 

Return the value of an F64 field from the underlying message.


### function getF64

```java
inline double getF64(
    MamaFieldDescriptor fieldDesc,
    double defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a double 

Return the value of an F64 field from the underlying message.


### function getString

```java
inline String getString(
    String name,
    int fid,
    String defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a String 

Return the value of a String field from the underlying message.


### function getString

```java
inline String getString(
    MamaFieldDescriptor fieldDesc,
    String defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a String 

Return the value of a String field from the underlying message.


### function getPrice

```java
inline MamaPrice getPrice(
    String name,
    int fid,
    MamaPrice defaultValue
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html)

Return the value of a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) field from the underlying message.


### function getPrice

```java
inline MamaPrice getPrice(
    MamaFieldDescriptor fieldDesc,
    MamaPrice defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html)

Return the value of a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) field from the underlying message.


### function getMsg

```java
inline MamaMsg getMsg(
    MamaFieldDescriptor fieldDesc,
    MamaMsg defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)

Return the value of a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) field from the underlying message.


### function getArrayI32

```java
inline int[] getArrayI32(
    MamaFieldDescriptor fieldDesc,
    int[] defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a int[] 

Return the value of an I32 Array field from the underlying message.


### function getArrayMsg

```java
inline MamaMsg[] getArrayMsg(
    MamaFieldDescriptor fieldDesc,
    MamaMsg[] defaultValue
)
```


**Parameters**: 

  * **fieldDesc** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **defaultValue** The default value to use of no value is present


**Return**: The value as a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html)[] 

Return the value of a [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) Array field from the underlying message.


### function tryBoolean

```java
native boolean tryBoolean(
    String name,
    int fid,
    MamaBoolean result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a Boolean field from the underlying message.


### function tryBoolean

```java
inline boolean tryBoolean(
    MamaFieldDescriptor field,
    MamaBoolean result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaBoolean](classcom_1_1wombat_1_1mama_1_1MamaBoolean.html) field from the underlying message.


### function tryChar

```java
native boolean tryChar(
    String name,
    int fid,
    MamaChar result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaChar](classcom_1_1wombat_1_1mama_1_1MamaChar.html) field from the underlying message.


### function tryChar

```java
inline boolean tryChar(
    MamaFieldDescriptor field,
    MamaChar result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaChar](classcom_1_1wombat_1_1mama_1_1MamaChar.html) field from the underlying message.


### function tryI8

```java
native boolean tryI8(
    String name,
    int fid,
    MamaByte result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaByte](classcom_1_1wombat_1_1mama_1_1MamaByte.html) field from the underlying message.


### function tryI8

```java
inline boolean tryI8(
    MamaFieldDescriptor field,
    MamaByte result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaByte](classcom_1_1wombat_1_1mama_1_1MamaByte.html) field from the underlying message.


### function tryU8

```java
native boolean tryU8(
    String name,
    int fid,
    MamaShort result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaShort](classcom_1_1wombat_1_1mama_1_1MamaShort.html) field from the underlying message.


### function tryU8

```java
inline boolean tryU8(
    MamaFieldDescriptor field,
    MamaShort result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaShort](classcom_1_1wombat_1_1mama_1_1MamaShort.html) field from the underlying message.


### function tryI16

```java
native boolean tryI16(
    String name,
    int fid,
    MamaShort result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaShort](classcom_1_1wombat_1_1mama_1_1MamaShort.html) field from the underlying message.


### function tryI16

```java
inline boolean tryI16(
    MamaFieldDescriptor field,
    MamaShort result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaShort](classcom_1_1wombat_1_1mama_1_1MamaShort.html) field from the underlying message.


### function tryU16

```java
native boolean tryU16(
    String name,
    int fid,
    MamaInteger result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaInteger](classcom_1_1wombat_1_1mama_1_1MamaInteger.html) field from the underlying message.


### function tryU16

```java
inline boolean tryU16(
    MamaFieldDescriptor field,
    MamaInteger result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaInteger](classcom_1_1wombat_1_1mama_1_1MamaInteger.html) field from the underlying message.


### function tryI32

```java
native boolean tryI32(
    String name,
    int fid,
    MamaInteger result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaInteger](classcom_1_1wombat_1_1mama_1_1MamaInteger.html) field from the underlying message.


### function tryI32

```java
inline boolean tryI32(
    MamaFieldDescriptor field,
    MamaInteger result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaInteger](classcom_1_1wombat_1_1mama_1_1MamaInteger.html) field from the underlying message.


### function tryU32

```java
native boolean tryU32(
    String name,
    int fid,
    MamaLong result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) field from the underlying message.


### function tryU32

```java
inline boolean tryU32(
    MamaFieldDescriptor field,
    MamaLong result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) field from the underlying message.


### function tryI64

```java
native boolean tryI64(
    String name,
    int fid,
    MamaLong result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) field from the underlying message.


### function tryI64

```java
inline boolean tryI64(
    MamaFieldDescriptor field,
    MamaLong result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) field from the underlying message.


### function tryU64

```java
native boolean tryU64(
    String name,
    int fid,
    MamaLong result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) field from the underlying message.


### function tryU64

```java
inline boolean tryU64(
    MamaFieldDescriptor field,
    MamaLong result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaLong](classcom_1_1wombat_1_1mama_1_1MamaLong.html) field from the underlying message.


### function tryF32

```java
native boolean tryF32(
    String name,
    int fid,
    MamaFloat result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaFloat](classcom_1_1wombat_1_1mama_1_1MamaFloat.html) field from the underlying message.


### function tryF32

```java
inline boolean tryF32(
    MamaFieldDescriptor field,
    MamaFloat result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaFloat](classcom_1_1wombat_1_1mama_1_1MamaFloat.html) field from the underlying message.


### function tryF64

```java
native boolean tryF64(
    String name,
    int fid,
    MamaDouble result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaDouble](classcom_1_1wombat_1_1mama_1_1MamaDouble.html) field from the underlying message.


### function tryF64

```java
inline boolean tryF64(
    MamaFieldDescriptor field,
    MamaDouble result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaDouble](classcom_1_1wombat_1_1mama_1_1MamaDouble.html) field from the underlying message.


### function tryDateTime

```java
inline boolean tryDateTime(
    MamaFieldDescriptor field,
    MamaDateTime result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) field from the underlying message.


### function tryDateTime

```java
native boolean tryDateTime(
    String name,
    int fid,
    MamaDateTime result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaDateTime](classcom_1_1wombat_1_1mama_1_1MamaDateTime.html) field from the underlying message.


### function tryPrice

```java
inline boolean tryPrice(
    MamaFieldDescriptor field,
    MamaPrice result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) field from the underlying message.


### function tryPrice

```java
native boolean tryPrice(
    String name,
    int fid,
    MamaPrice result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaPrice](classcom_1_1wombat_1_1mama_1_1MamaPrice.html) field from the underlying message.


### function tryString

```java
native boolean tryString(
    String name,
    int fid,
    MamaString result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaString](classcom_1_1wombat_1_1mama_1_1MamaString.html) field from the underlying message.


### function tryString

```java
inline boolean tryString(
    MamaFieldDescriptor field,
    MamaString result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaString](classcom_1_1wombat_1_1mama_1_1MamaString.html) field from the underlying message.


### function tryOpaque

```java
inline boolean tryOpaque(
    String name,
    int fid,
    MamaOpaque result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaOpaque](classcom_1_1wombat_1_1mama_1_1MamaOpaque.html) field from the underlying message.


### function tryOpaque

```java
inline boolean tryOpaque(
    MamaFieldDescriptor field,
    MamaOpaque result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaOpaque](classcom_1_1wombat_1_1mama_1_1MamaOpaque.html) field from the underlying message.


### function tryMsg

```java
inline boolean tryMsg(
    String name,
    int fid,
    MamaMessage result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaMessage](classcom_1_1wombat_1_1mama_1_1MamaMessage.html) field from the underlying message.


### function tryMsg

```java
inline boolean tryMsg(
    MamaFieldDescriptor field,
    MamaMessage result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaMessage](classcom_1_1wombat_1_1mama_1_1MamaMessage.html) field from the underlying message.


### function tryArrayI32

```java
inline boolean tryArrayI32(
    String name,
    int fid,
    MamaArrayInt result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaArrayInt](classcom_1_1wombat_1_1mama_1_1MamaArrayInt.html) field from the underlying message.


### function tryArrayI32

```java
inline boolean tryArrayI32(
    MamaFieldDescriptor field,
    MamaArrayInt result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaArrayInt](classcom_1_1wombat_1_1mama_1_1MamaArrayInt.html) field from the underlying message.


### function tryArrayU16

```java
inline boolean tryArrayU16(
    String name,
    int fid,
    MamaArrayInt result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaArrayInt](classcom_1_1wombat_1_1mama_1_1MamaArrayInt.html) field from the underlying message.


### function tryArrayU16

```java
inline boolean tryArrayU16(
    MamaFieldDescriptor field,
    MamaArrayInt result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaArrayInt](classcom_1_1wombat_1_1mama_1_1MamaArrayInt.html) field from the underlying message.


### function tryArrayMsg

```java
inline boolean tryArrayMsg(
    String name,
    int fid,
    MamaArrayMsg result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaArrayMsg.html) field from the underlying message.


### function tryArrayMsg

```java
inline boolean tryArrayMsg(
    MamaFieldDescriptor field,
    MamaArrayMsg result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaArrayMsg.html) field from the underlying message.


### function tryArrayString

```java
inline boolean tryArrayString(
    String name,
    int fid,
    MamaArrayString result
)
```


**Parameters**: 

  * **name** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Try to get the value of a [MamaArrayString](classcom_1_1wombat_1_1mama_1_1MamaArrayString.html) field from the underlying message.


### function tryArrayString

```java
inline boolean tryArrayString(
    MamaFieldDescriptor field,
    MamaArrayString result
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **result** The result (not modified if field not present)


**Return**: Boolean representing whether the field was present or not 

Return the value of a [MamaArrayMsg](classcom_1_1wombat_1_1mama_1_1MamaArrayMsg.html) field from the underlying message.


### function iterateFields

```java
inline void iterateFields(
    MamaMsgFieldIterator iterator,
    MamaDictionary dictionary,
    Object closure
)
```


**Parameters**: 

  * **iterator** Callback object implementing the [MamaMsgFieldIterator](interfacecom_1_1wombat_1_1mama_1_1MamaMsgFieldIterator.html) interface 
  * **dictionary** Optional [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) object 
  * **closure** Optional user supplied arbitrary closure data which will be passed back in `onField()`


Iterate over all of the fields within the message. The `onField()` method of the `[MamaMsgFieldIterator](interfacecom_1_1wombat_1_1mama_1_1MamaMsgFieldIterator.html)` instance will be invoked for each field in the underlying message.


### function getFieldAsString

```java
native String getFieldAsString(
    int fid,
    MamaDictionary dictionary
)
```


**Parameters**: 

  * **fid** The FID of the field 
  * **dictionary** Optional [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) object


**Return**: Return a String representation the field with the given fid 

Return a String representation of the entire message.


### function isFromInbox

```java
native boolean isFromInbox()
```


**Return**: Boolean indicating whether this message is a p2p request 

Return a String representation of the entire message.


### function toString

```java
native String toString()
```


**Return**: the String representation of the entire message. 

Return a String representation of the entire message.


### function toJsonString

```java
native String toJsonString()
```


**Return**: the String representation of the entire message. 

Return a json String representation of the entire message.


### function toJsonString

```java
inline String toJsonString(
    MamaDictionary dictionary
)
```


**Return**: the String representation of the entire message. 

Return a json String representation of the entire message using field names from the dictionary.


### function toNormalizedString

```java
native String toNormalizedString()
```


**Return**: the String representation of the entire message. 

Return a normalized String representation of the entire message.


### function getPayloadType

```java
native char getPayloadType()
```


**Return**: A [MamaPayloadType](classcom_1_1wombat_1_1mama_1_1MamaPayloadType.html) indicating which message payload is used in the message. 

Return as a character representation of the payload type used in the message.


### function destroy

```java
inline void destroy()
```


Destroy the internal state of the [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) object. Needed for JNI so we know when to free the underlying C strucure. Should only be called if the client app has created the message. i.e. do not call on messages passed in the callbacks as these are managed internal to the MAMA API 


### function clear

```java
native void clear()
```


Clear the message. All fields are removed 


### function copy

```java
native void copy(
    MamaMsg rhs
)
```


**Parameters**: 

  * **rhs** The [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) to be copied 


Create a deep copy of the message.


### function detach

```java
native MamaMsg detach()
```


Detach the message. This will take a deep copy of the [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) and transfer the ownership to the application and it will be the responsibility of the user to destroy. 


### function apply

```java
native void apply(
    MamaMsg rhs
)
```


**Parameters**: 

  * **rhs** The [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) to be used to update the current message 


Update the [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) with the fields of another [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html).


### function getField

```java
inline MamaMsgField getField(
    MamaFieldDescriptor field,
    MamaDictionary dict
)
```


**Parameters**: 

  * **field** The [MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) for the field within the message 
  * **dict** Optional [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) object


**Return**: The [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) or null 

Get a specified field from a message, or null if not found.


### function getField

```java
inline MamaMsgField getField(
    String fieldName,
    int fid,
    MamaDictionary dict
)
```


**Parameters**: 

  * **fieldName** The name of the field within the message 
  * **fid** The FID of the field within the message 
  * **dict** Optional [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) object


**Return**: The [MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) or null 

Get a specified field from a message, or null if not found.


## Protected Functions Documentation

### function finalize

```java
inline void finalize()
```


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100