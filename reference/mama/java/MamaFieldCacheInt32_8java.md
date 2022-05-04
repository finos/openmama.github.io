---
title: mama/MamaFieldCacheInt32.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaFieldCacheInt32.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaFieldCacheInt32](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt32.html)**  |




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

public class MamaFieldCacheInt32 extends MamaFieldCacheField
{
    private int mValue;
    
    public MamaFieldCacheInt32 (MamaFieldDescriptor desc)
    {
        super(desc,MamaFieldDescriptor.I32);
        mValue = 0;
    }
    
    public MamaFieldCacheInt32 (int fid, String name, boolean trackModState)
    {
        super(fid,MamaFieldDescriptor.I32,name,trackModState);
        mValue = 0;
    }

    /*  Description :   This function will add the contents of the cache field
     *                  to the supplied message.
     *  Arguments   :   fieldName   [I] True to add the field name to the message.
     *                  message     [I] The message where the field will be added.
     */
    public void addToMessage(boolean fieldName, MamaMsg message)
    {
        // Check to see if field names should be added
        String name = null;
        if (fieldName)
        {
            // Get the field name from the descriptor
            name = mDesc.getName();
        }

        // Add the value
        message.addI32(name, mDesc.getFid (), mValue);
    }

    public MamaFieldCacheField copy ()
    {
        MamaFieldCacheInt32 result = new MamaFieldCacheInt32 (
            mDesc.getFid (),
            mDesc.getName (),
            mTrackModState);
        result.mValue = mValue;
        return result;
    }

    public void apply(MamaMsgField msgField)
    {
        mValue = msgField.getI32 ();
    }
    
    public void set (int value)
    {
        if (mTrackModState)
        {
            if (mValue == value)
            {
                if (isModified())
                    setModState (MamaFieldCacheField.MOD_STATE_TOUCHED);
                return;
            }
            else
            {
                setModState (MamaFieldCacheField.MOD_STATE_MODIFIED);
                // Drop through to assignment.               
            }            
        }
        mValue = value;
    }
    
    public boolean isEqual (int value)
    {     
        return value == mValue;      
    }
    
    public int get ()
    {
        return mValue;
    }
    
    public void get (int result)
    {
        result = mValue;
    }
   
    public String getAsString ()
    {
        return new Integer(mValue).toString();    
    }

    public void apply (MamaFieldCacheField value)
    {
        mValue = ((MamaFieldCacheInt32)value).mValue;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
