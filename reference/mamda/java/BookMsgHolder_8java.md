---
title: orderbook/BookMsgHolder.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/BookMsgHolder.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::BookMsgHolder](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1BookMsgHolder.html)**  |




## Source code

```java
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2012 NYSE Technologies, Inc.
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

package com.wombat.mamda.orderbook;

import com.wombat.mama.*;

public class BookMsgHolder
{    
    public MamaMsg[]   mMsgVector     = null;
    int                mMsgVectorSize = 0;

    public  void  grow (int  newSize)
    {
        if (mMsgVectorSize >= newSize) return;
            MamaMsg[] newVector = new MamaMsg[newSize];

        if (null != mMsgVector )
        {
            for(int i=0;i<mMsgVectorSize; i++)            
            newVector[i] = mMsgVector[i];
        }

        for (int i= mMsgVectorSize; i<newSize; i++)            
            newVector[i] = new MamaMsg();             

        mMsgVector     = newVector;  
        mMsgVectorSize = newSize;
    }   

    public  void clear()
    {
        if (mMsgVector != null)
        {
            for(int i=0;i<mMsgVectorSize; i++)
            {
                if(mMsgVector[i] != null)
                    mMsgVector[i].clear();
            }
        }
    }

    public  void print()
    {
        if (mMsgVector != null)
        {
            for(int i=0; i<mMsgVectorSize; i++)
            {
                System.out.println("\n mMsgVector " + i +"="+mMsgVector[i].toString() +"\n"); 
            } 
        }
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100
