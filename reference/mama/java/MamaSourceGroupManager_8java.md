---
title: mama/MamaSourceGroupManager.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSourceGroupManager.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaSourceGroupManager](classcom_1_1wombat_1_1mama_1_1MamaSourceGroupManager.html)**  |




## Source code

```java
/* $Id:
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

package com.wombat.mama;
import java.util.*;

public class MamaSourceGroupManager
{
    private Map myGroupMap = null;
    public MamaSourceGroupManager ()
    {
        myGroupMap = Collections.synchronizedMap (new HashMap());
    }
    private MamaSourceGroup createSourceGroup (final String name)
    {
        MamaSourceGroup temp = null;
        if (!myGroupMap.containsKey (name))
        {
            //create a new one
            temp = new MamaSourceGroup (name);
            myGroupMap.put (name, temp);
            return temp;
        }
        else
        {
            return (MamaSourceGroup)myGroupMap.get (name);
        }
    }

    public MamaSourceGroup findOrCreateSourceGroup (final String key)
    {
        return createSourceGroup (key);
    }
    public MamaSourceGroup findSourceGroup (final String key)
    {
        MamaSourceGroup temp = null;
        if (myGroupMap.containsKey (key))
        {
            temp = (MamaSourceGroup)myGroupMap.get (key);
            return temp;
        }
        return temp;
    }
    public void addSourceGroup (MamaSourceGroup sourceGroup)
    {
        //get the name to check if it is valid
        String groupName;
        if ((groupName = sourceGroup.getName ()) == null )
        {
            throw new NullPointerException ("MamaSourceGroupManager:" +
                                            " addSourceGroup Could not"+
                                            " get name for source group");
        }
        if (myGroupMap.containsKey (groupName))
        {
            throw new NullPointerException ("MamaSourceGroupManager: "+
                                            " addSourceGroup Duplicate"+ 
                                            " source group [" +groupName+"]");
        }
        myGroupMap.put (groupName, sourceGroup);
    }
    
    public Iterator sourceGroupIterator ()
    {
        return new SourceGroupManagerIterator (this);
    }

    public void destroy()
    {
        if (myGroupMap != null)
            myGroupMap.clear();
    }

    private class SourceGroupManagerIterator implements Iterator
    {
        private
        MamaSourceGroupManager mySourceGroupManger = null;
        private Iterator myIterator = null;
        public SourceGroupManagerIterator 
        (MamaSourceGroupManager groupManager)
        {
            if (groupManager == null)
            {
                throw new NullPointerException ("SourceGroupManagerIterator :" +
                                                "Nullpointer Exception "+
                                                "in constructor");
            }
            mySourceGroupManger = groupManager;
            myIterator = mySourceGroupManger.myGroupMap.
                entrySet().iterator();
        }
        public boolean hasNext ()
        {
            return myIterator.hasNext();
        }
        public void remove ()
        {
            myIterator.remove();
        }
        public Object next ()
        {
            /*what if I am interested in keys?*/
            Map.Entry pairs = (Map.Entry)myIterator.next();
            MamaSourceGroup sourceGroup = 
                (MamaSourceGroup) pairs.getValue();
            return sourceGroup;
        }
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
