---
title: mama/MamaFieldCacheChar.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaFieldCacheChar.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaFieldCacheChar](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheChar.html)**  |




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

public class MamaFieldCacheChar extends MamaFieldCacheField
{
    private char mValue;
    
    public MamaFieldCacheChar (MamaFieldDescriptor desc)
    {
        super(desc,MamaFieldDescriptor.CHAR);
        mValue = '\0';
    }
    
    public MamaFieldCacheChar (int fid, String name, boolean trackModState)
    {
        super(fid,MamaFieldDescriptor.CHAR,name,trackModState);
        mValue = '\0';
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
        message.addChar(name, mDesc.getFid (), mValue);
    }

    public MamaFieldCacheField copy ()
    {
        MamaFieldCacheChar result = new MamaFieldCacheChar (
            mDesc.getFid (),
            mDesc.getName (),
            mTrackModState);
        result.mValue = mValue;
        return result;
    }

    public void apply(MamaMsgField msgField)
    {
        mValue = msgField.getChar ();
    }
    
    public void set (char value)
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
    
    public boolean isEqual (char value)
    {     
        return value == mValue;      
    }
    
    public char get ()
    {
        return (mValue != '\0') ? mValue : '\0';
    }
    
    public void get (char result)
    {
        result = mValue;
    }
   
    public String getAsString()
    {
        return (mValue != '\0') ? new Character(mValue).toString() : "\0";    
    }

    public void apply (MamaFieldCacheField value)
    {
        mValue = ((MamaFieldCacheChar)value).mValue;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:45 +0100
