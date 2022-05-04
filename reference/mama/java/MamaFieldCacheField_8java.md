---
title: mama/MamaFieldCacheField.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaFieldCacheField.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html)**  |




## Source code

```java
//--------------------------------------------------------------------------
// Copyright (c) 1999-2006 Wombat Financial Software Inc., of Incline
// Village, NV.  All rights reserved.
//
// This software and documentation constitute an unpublished work and
// contain valuable trade secrets and proprietary information belonging
// to Wombat.  None of this material may be copied, duplicated or
// disclosed without the express written permission of Wombat.
//
// WOMBAT EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES CONCERNING THIS
// SOFTWARE AND DOCUMENTATION, INCLUDING ANY WARRANTIES OF
// MERCHANTABILITY AND/OR FITNESS FOR ANY PARTICULAR PURPOSE, AND
// WARRANTIES OF PERFORMANCE, AND ANY WARRANTY THAT MIGHT OTHERWISE ARISE
// FROM COURSE OF DEALING OR USAGE OF TRADE. NO WARRANTY IS EITHER
// EXPRESS OR IMPLIED WITH RESPECT TO THE USE OF THE SOFTWARE OR
// DOCUMENTATION.
//
// Under no circumstances shall Wombat be liable for incidental, special,
// indirect, direct or consequential damages or loss of profits,
// interruption of business, or related expenses which may arise from use
// of software or documentation, including but not limited to those
// resulting from defects in software and/or documentation, or loss or
// inaccuracy of data of any kind.
//
//----------------------------------------------------------------------------


package com.wombat.mama;

public abstract class MamaFieldCacheField implements MamaFieldCacheReadOnlyField
{
    public static final short MOD_STATE_NOT_MODIFIED = 1;
    public static final short MOD_STATE_MODIFIED = 2;
    public static final short MOD_STATE_TOUCHED = 3;

    protected short               mType;
    protected MamaFieldDescriptor mDesc;
    protected short               mModState;
    protected boolean             mTrackModState;
    protected boolean             mLocalDescriptorCopy;

    public MamaFieldCacheField(MamaFieldDescriptor desc,
                               short type)
    {
        mDesc = desc;
        mModState = MamaFieldCacheField.MOD_STATE_MODIFIED;
            
        mTrackModState = false;
        mLocalDescriptorCopy = false;
        
        if ((desc!=null) && (type == MamaFieldDescriptor.UNKNOWN))
            mType = desc.getType();
        else
            mType = type;
        if (mDesc!=null)
            mTrackModState = mDesc.getTrackModState();
    }
    
    public MamaFieldCacheField (int      fid,
                                short    type,
                                String   name,
                                boolean  trackModState)
    {
        this(new MamaFieldDescriptor (fid, type, name,null), type);
        mTrackModState = trackModState;
        mLocalDescriptorCopy = true;        
    }

    public abstract MamaFieldCacheField copy ();

    /*  Description :   This function will add the contents of the cache field
     *                  to the supplied message.
     *  Arguments   :   fieldName   [I] True to add the field name to the message.
     *                  message     [I] The message where the field will be added.
     */
    public abstract void addToMessage(boolean fieldName, MamaMsg message);

    public abstract void apply (MamaMsgField msgField);

    public abstract String getAsString ();

    public void setDescriptor (MamaFieldDescriptor desc)
    {
        if (mDesc!=null)
            mTrackModState = mDesc.getTrackModState();
        mDesc = desc; 
    }

    public MamaFieldDescriptor getDescriptor() { return mDesc; }

    public short getType() { return mType; }


    public void setTrackModState (boolean state)
    {
        mTrackModState = state;
    }

    public boolean getTrackModState ()
    {
        return mTrackModState;
    }


   public void setModState (short  state) 
    { 
        if (mTrackModState)
            mModState = state; 
    }

    public void clearModState () 
    { 
        if (mTrackModState)
            mModState = MamaFieldCacheField.MOD_STATE_NOT_MODIFIED; 
    }

    public short getModState ()  { return mModState; }

    public boolean isUnmodified () { return mModState == MamaFieldCacheField.MOD_STATE_NOT_MODIFIED; }

    public boolean isModified ()  { return mModState == MamaFieldCacheField.MOD_STATE_MODIFIED; }

    public boolean isTouched () { return mModState == MamaFieldCacheField.MOD_STATE_TOUCHED; }

    public void  touch () 
    {
        if (mTrackModState)
        {
            if (!isModified())
                setModState (MamaFieldCacheField.MOD_STATE_TOUCHED);
        }
    }

    public abstract void apply (MamaFieldCacheField value);
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
