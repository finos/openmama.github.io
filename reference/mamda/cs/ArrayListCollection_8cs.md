---
title: Containers/ArrayListCollection.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Containers/ArrayListCollection.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[Wombat::Containers](namespaceWombat_1_1Containers.html)**  |
| **[System](namespaceSystem.html)**  |
| **[System::Collections](namespaceSystem_1_1Collections.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::Containers::ArrayListCollection](classWombat_1_1Containers_1_1ArrayListCollection.html)**  |




## Source code

```csharp
/* $Id$
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

using System;
using System.Collections;

namespace Wombat.Containers
{
    public class ArrayListCollection : Collection
    {
        public ArrayListCollection()
        {
            mItems = new ArrayList();
        }

        #region Collection Members

        public virtual int size()
        {
            return mItems.Count;
        }

        public virtual bool isEmpty()
        {
            return size() == 0;
        }

        public virtual bool contains(object o)
        {
            return mItems.Contains(o);
        }

        public virtual object[] toArray()
        {
            return mItems.ToArray();
        }

        public virtual bool add(object o)
        {
            int count = size();
            mItems.Add(o);
            return count != size();
        }

        public virtual bool remove(object o)
        {
            int count = size();
            mItems.Remove(o);
            return count != size();
        }

        public virtual bool containsAll(Collection c)
        {
            Iterator i = c.iterator();
            while (i.hasNext())
            {
                object val = i.next();
                if (!contains(val))
                    return false;
            }
            return true;
        }

        public virtual bool addAll(Collection c)
        {
            int count = size();
            Iterator i = c.iterator();
            while (i.hasNext())
            {
                object val = i.next();
                add(val);
            }
            return count != size();
        }

        public virtual bool removeAll(Collection c)
        {
            int count = size();
            Iterator i = c.iterator();
            while (i.hasNext())
            {
                object val = i.next();
                remove(val);
            }
            return count != size();
        }

        public virtual bool retainAll(Collection c)
        {
            throw new NotSupportedException();
        }

        public virtual void clear()
        {
            mItems.Clear();
        }

        #endregion

        #region Iterable Members

        public Iterator iterator()
        {
            return new ReadonlyIteratorOverEnumerator(mItems.GetEnumerator());
        }

        #endregion

        private ArrayList mItems;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
