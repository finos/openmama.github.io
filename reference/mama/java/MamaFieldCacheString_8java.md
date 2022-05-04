---
title: mama/MamaFieldCacheString.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaFieldCacheString.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaFieldCacheString](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheString.html)**  |




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


public class MamaFieldCacheString extends MamaFieldCacheField
{
    private String mValue;
    
    public MamaFieldCacheString (MamaFieldDescriptor desc)
    {
        super(desc,MamaFieldDescriptor.STRING);
        mValue = null;
    }
    
    public MamaFieldCacheString (int fid, String name, boolean trackModState)
    {
        super(fid,MamaFieldDescriptor.STRING,name,trackModState);
        mValue=null;
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
        message.addString(name, mDesc.getFid (), mValue);
    }

    public MamaFieldCacheField copy ()
    {
        MamaFieldCacheString result = new MamaFieldCacheString (
            mDesc.getFid (),
            mDesc.getName (),
            mTrackModState);
        result.mValue = mValue;
        return result;
    }

    public void apply (MamaMsgField msgField)
    {
        mValue = msgField.getString ();
    }

    public void set (String value)
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
     public String get()
     {
        return (mValue != null) ? mValue : null;
     }
     
     public void get (String result)
     {
        result = mValue;
     }
     
    public boolean isEqual(String value)
    {
        if (mValue == null)
        {
            return (value == null);
        }
        else
        {
            return (value != null) ? mValue.equals(value) : false;
        }
    }
    
    public String getAsString ()
    {
        return (mValue != null) ? mValue : "null";
    }

    public void apply (MamaFieldCacheField value)
    {
        mValue = ((MamaFieldCacheString)value).mValue;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
