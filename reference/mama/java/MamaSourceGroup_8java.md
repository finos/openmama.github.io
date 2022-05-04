---
title: mama/MamaSourceGroup.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSourceGroup.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |
| **[java::util](namespacejava_1_1util.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaSourceGroup](classcom_1_1wombat_1_1mama_1_1MamaSourceGroup.html)**  |




## Source code

```java
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

package com.wombat.mama;
import java.io.*;
import java.util.*;
import java.util.logging.*;

public class MamaSourceGroup implements MamaSourceGroupListener
{
    private String               myGroupName;
    private Map                  myGroupMap;
    private Set                  myTopWeightSet;
    private MamaSourceContainer  myTopWeightSource; 
                                                    
    private ArrayList            myStateChangeListeners;
    private Logger               logger =      
    Logger.getLogger(MamaSourceGroup.class.getName());

    private long                 myTopWeight;
    private boolean              myHasChangedState;

    public MamaSourceGroup (String name)
    {
        /*Stores all registered mamaSource objects keyed on name*/
        myGroupMap = Collections.synchronizedMap (new HashMap());
        /*Set containing the current top weighted source objects*/
        myTopWeightSet = Collections.synchronizedSet (new HashSet());
        this.myGroupName = name;
        /*Used to store information on each 
          registered state change callback*/
        myStateChangeListeners = new ArrayList (1);
        myTopWeightSource = null;
        
    }
    public void enableLogging (Level level)
    {
        logger.setLevel (level);
    }
    public void disableLogging ()
    {
        logger.setLevel (Level.WARNING);
    }

    public  String getName ()
    {
        return this.myGroupName;
    }
    public MamaSource findSource (final String sourceName)
    {
        MamaSource          source          = null;
        MamaSourceContainer sourceContainer = null;
        if (null == sourceName)
        {
            throw new NullPointerException ("Identifier name cannot be null");
        }
        if ((sourceContainer = findSourceContainer (sourceName)) != null)
        {
            source = sourceContainer.mySource;
            return source;
        }
        return source;
    }

    public void addSource (MamaSource source, long weight)
    {
        String sourceId;
        if (null == source)
        {
            throw new NullPointerException ("addSource ():MamaSource equals null");
        }
        if ((sourceId = source.getId()) != null)
        {
            addSourceWithName (source,
                               sourceId,
                               weight);
        }
        else
        {
            logger.severe("MamaSource does not have a set Id "+
                          "- Failed to add source");
        }
    }
    public void addSourceWithName (MamaSource source, String sourceName,
                                   long weight)
    {
        MamaSource          existingSource  = null;
        MamaSourceContainer sourceContainer = null;
        if (source == null || sourceName == null)
        {
            throw new NullPointerException ("Error: sourcename can not " +
                                            "be null");
        }

        logger.fine ("Looking for source " +sourceName + " in group " +
                     getName());
        /*Do we already have a source registered with this key?*/
        existingSource = findSource (sourceName);
        if (existingSource != null && (existingSource.getId().
                                       compareTo(sourceName) == 0))
        {
            throw new NullPointerException ("Duplication key for MamaSources found");
        }
        /*Create the container for the source and its weight*/
        sourceContainer = new MamaSourceContainer ();
        if (null == sourceContainer)
        {
            throw new NullPointerException ("Object sourceContainer not created " +
                                            "Applcation requires more memory to " +
                                             "proceed");
        }

        sourceContainer.mySource = source;
        sourceContainer.myWeight = weight;

        logger.fine ("Adding source "+ sourceName+ " to group " + getName ());

        myGroupMap.put (sourceName, sourceContainer);
    }

    public void setSourceWeight (String sourceName,long weight)
    {
        MamaSourceContainer sourceContainer = null;

        logger.info ("Setting weight to " +weight+ " for source " + sourceName);

        if ((sourceContainer=findSourceContainer (sourceName)) != null)
        {
            sourceContainer.myWeight = weight;
        }
    }
 
    public boolean reevaluate ()

    {
        boolean hasChangedState = false;
        reevaluateTopWeight ();
                
        logger.info (getName()+" group re-evaluate. Determine if stage" +
                     " has changed");
        hasChangedState = reevaluateSourceState ();
        /*If the state has changed notify all registered callbacks*/
        if (hasChangedState)
        {
           
            logger.log (Level.INFO, getName()+ " State has" +
                        " changed for group. Notify "+
                        " registered listeners.");
            notifyStateChangeListeners ();
        }
        return hasChangedState;
    }

    private boolean reevaluateSourceState ()
    {
        boolean hasChangedState = false;
        logger.fine (getName()+" group re-evaluate. Determine if stage" +
                     " has changed");
        /*Now iterate to change the status of the sources if necessary*/
        Iterator mapIterator = myGroupMap.entrySet().iterator();
        while (mapIterator.hasNext())
        {
            Map.Entry pairs = (Map.Entry)mapIterator.next();

            MamaSourceContainer container =
                (MamaSourceContainer)pairs.getValue();

            if (myTopWeightSet.contains(container))
            {
                MamaSourceState sourceState = container.mySource.getState();
                /*We may already be in a state of OK*/
                if (sourceState!=MamaSourceState.OK)
                {
                    container.mySource.setState(MamaSourceState.OK);
                    hasChangedState = true;
                }
            }
            else /*Not top weighted  - status should be off*/
            {
                MamaSourceState sourceState = container.mySource.getState();
                /*We may alredy be in an OFF state*/
                if (sourceState != MamaSourceState.OFF)
                {
                    container.mySource.setState(MamaSourceState.OFF);
                    hasChangedState = true;
                }
            }
        }
        return hasChangedState;
    }

    private void reevaluateTopWeight ()
    {
        long    myTopWeight     = 0;
        /*First iterate to determine which 
          is the top weighted source*/
        Iterator mapIterator = myGroupMap.entrySet().iterator();
        while (mapIterator.hasNext())
        {
            Map.Entry pairs = (Map.Entry)mapIterator.next();

            MamaSourceContainer container =
                (MamaSourceContainer)pairs.getValue();
            if (container.myWeight > myTopWeight)
            {
                //clear the and add the top weight set
                myTopWeight = container.myWeight;
                myTopWeightSet.clear();
                myTopWeightSet.add (container);

                myTopWeightSource = container;
            }
            else if (container.myWeight == myTopWeight)
            {
                myTopWeightSet.add (container);
            }
        }
    } 
    
    public MamaSource getTopWeightSource ()
    {
        MamaSource topWeight = null;
        if ( null != myTopWeightSource)
        {
            topWeight = myTopWeightSource.mySource;
            return topWeight;
        }
        return topWeight;
    }

    private MamaSourceContainer findSourceContainer (
        final String sourceName)
    {
        MamaSourceContainer  foundSourceContainer  = null;
        if (myGroupMap.containsKey (sourceName))
        {
            foundSourceContainer = (MamaSourceContainer)
                myGroupMap.get (sourceName);
            return foundSourceContainer;
        }
        else
        {
            logger.log (Level.FINER,"Source name not found " +
                         this.getName());
            return foundSourceContainer;
        }
    }
    public void registerStateChangeListener (
        MamaSourceStateChangeListener event)
    {
        myStateChangeListeners.add (event);
    }
    public void unregisterStateChangeListener (
        MamaSourceStateChangeListener event)
    {
        myStateChangeListeners.remove (event);
    }

    private void notifyStateChangeListeners()
    {
        for (Iterator it = myStateChangeListeners.iterator ();
             it.hasNext (); )
        {
            MamaSourceStateChangeListener evt
                = (MamaSourceStateChangeListener) it.next ();
            evt.onStateChanged (this,myTopWeightSource.mySource,evt);
        }
    }

    public Iterator sourceIterator ()
    {
        return new MamaSourceGroupIterator (this);
    }

    private class MamaSourceContainer
    {
        public long       myWeight;
        public MamaSource mySource;
    }

    private class MamaSourceGroupIterator implements Iterator
    {
        private MamaSourceGroup mySourceGroup = null;
        private Iterator myIterator           = null;
        public MamaSourceGroupIterator (MamaSourceGroup sourceGroup)
        {
            if (sourceGroup == null)
            {
                throw new NullPointerException ("MamaSourceGroupIterator:"+
                                                "Nullpointer Exception !!!");
            }
            mySourceGroup = sourceGroup;
            myIterator = mySourceGroup.myGroupMap.
                entrySet().iterator();
        }
        public boolean hasNext ()
        {
            if (myIterator != null)
            {
                return myIterator.hasNext();
            }
            return false;
        }
        public void remove ()
        {
            myIterator.remove();
        }
        public Object next ()
        {
            /*what if I am interested in keys?*/
            Map.Entry pairs = (Map.Entry)myIterator.next();
            MamaSource mamaSource =
                (MamaSource)((MamaSourceContainer)pairs.
                             getValue()).mySource;
            return mamaSource; 
        }
    }

}
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
