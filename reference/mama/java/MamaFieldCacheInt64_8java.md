---
title: mama/MamaFieldCacheInt64.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaFieldCacheInt64.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaFieldCacheInt64](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheInt64.html)**  |




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

public class MamaFieldCacheInt64 extends MamaFieldCacheField
{
    private long mValue;
    
    public MamaFieldCacheInt64 (MamaFieldDescriptor desc)
    {
        super(desc,MamaFieldDescriptor.I64);
        mValue = 0;
    }
    
    public MamaFieldCacheInt64 (int fid, String name, boolean trackModState)
    {
        super(fid,MamaFieldDescriptor.I64,name,trackModState);
        mValue = 0;
    }

    public MamaFieldCacheField copy ()
    {
        MamaFieldCacheInt64 result = new MamaFieldCacheInt64 (
            mDesc.getFid (),
            mDesc.getName (),
            mTrackModState);
        result.mValue = mValue;
        return result;
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
        message.addI64(name, mDesc.getFid (), mValue);
    }

    public void apply(MamaMsgField msgField)
    {
        mValue = msgField.getI64 ();
    }
    
    public void set (long value)
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
    
    public boolean isEqual (long value)
    {     
        return value == mValue;      
    }
    
    public long get ()
    {
        return mValue;
    }
    
    public void get (long result)
    {
        result = mValue;
    }
   
    public String getAsString ()
    {
        return new Long(mValue).toString();    
    }

    public void apply (MamaFieldCacheField value)
    {
        mValue = ((MamaFieldCacheInt64)value).mValue;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:45 +0100
