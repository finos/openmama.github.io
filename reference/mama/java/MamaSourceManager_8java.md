---
title: mama/MamaSourceManager.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSourceManager.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaSourceManager](classcom_1_1wombat_1_1mama_1_1MamaSourceManager.html)**  |




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

public class MamaSourceManager
{
    private MamaQuality mamaQuality;
    private Map         mySourceMap;
    public MamaSourceManager ()
    {
        mySourceMap = Collections.synchronizedMap(new HashMap());
    }
    
    private MamaSource createSource (final String sourceName)
    {
        if (mySourceMap.containsKey(sourceName))
        {
            return (MamaSource)mySourceMap.get(sourceName);
        }
        MamaSource mamaSource = new MamaSource ();
        mamaSource.setId (sourceName);
        mySourceMap.put (sourceName, mamaSource);
        return mamaSource;
    }
    public MamaSource findOrCreateSource (final String sourceName)
    {
        return createSource (sourceName);
    }
    
    public  MamaSource findSource (final String sourceName)
    {
        MamaSource  temp = null;
        if (mySourceMap.containsKey (sourceName))
        {
            temp = (MamaSource)mySourceMap.get (sourceName);
            return temp;
        }
        return temp;
    }
    public void addSource (MamaSource mamaSource)
    {
        final String name = mamaSource.getId();
        addSource (mamaSource,name);
    }
    
    public void addSource (MamaSource mamaSource, 
                          final String sourceName)
    {
        if (mySourceMap.containsKey (sourceName))
        {
            throw new MamaException ("MamaSourceManager:addSource - " +
                                     "Duplicate source found !!!!");
        }
        mamaSource.setMappedId (sourceName);
        mySourceMap.put (sourceName,mamaSource);
    }
    
    public int getSize ()
    {
        return mySourceMap.size();
    }
    
    public Iterator sourceIterator ()
    {
        return new MamaSourceManagerIterator(this);
    }

    public void destroy()
    {
        if (mySourceMap != null)
            mySourceMap.clear();
    }

    private class MamaSourceManagerIterator implements Iterator
    {
        private MamaSourceManager mySourceManager = null;
        private Iterator myIterator = null;
        
        public MamaSourceManagerIterator (
            MamaSourceManager sourceManager)
        {
            if (sourceManager == null)
            {
                throw new NullPointerException ("MamaSourceManagerIterator : "+
                                                "Nullpointer exception " +
                                                " in construction");
            }
            mySourceManager = sourceManager;
            myIterator = mySourceManager.mySourceMap.
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
            /*what if I am interested in keys ?*/
            Map.Entry pairs = (Map.Entry)myIterator.next();
            MamaSource mamaSource =
                (MamaSource)pairs.getValue();
            return mamaSource; 
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
