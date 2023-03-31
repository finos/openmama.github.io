---
title: mama/MamaSourceDerivative.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSourceDerivative.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaSourceDerivative](classcom_1_1wombat_1_1mama_1_1MamaSourceDerivative.html)**  |




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

import java.util.Iterator;

public class MamaSourceDerivative extends MamaSource
{
    private MamaSource myBaseSource;

    public MamaSourceDerivative (MamaSource baseSource)
    {
        myBaseSource = baseSource;
        setId        (baseSource.getId());
        setDisplayId (baseSource.getDisplayId());
        Iterator i = baseSource.sourceIterator ();
        while (i.hasNext ())
        {
            MamaSource            subBaseSource = (MamaSource) i.next ();
            MamaSourceDerivative  subDerivative =
                new MamaSourceDerivative (subBaseSource);
            subDerivative.setParent    (this);
            addSource (subDerivative, subBaseSource.getMappedId());
        }
    }

    public MamaSource getBaseSource ()
    {
        return myBaseSource;
    }

    public MamaSourceState getState ()
    {
        MamaSourceState state =  super.getState ();
        return state==MamaSourceState.UKNOWN ? myBaseSource.getState () : state;
    }

    public short getQuality ()
    {
        short quality = super.getQuality ();
        return quality==MamaQuality.QUALITY_UNKNOWN ? myBaseSource.getQuality ()
                                                    : quality;
    }

    public MamaSourceDerivative findSourceDerivative (final String sourceName)
    {
        return (MamaSourceDerivative) findSource (sourceName);
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
