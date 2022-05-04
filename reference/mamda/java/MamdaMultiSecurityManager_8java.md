---
title: mamda/MamdaMultiSecurityManager.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaMultiSecurityManager.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaMultiSecurityManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html)**  |




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

package com.wombat.mamda;

import java.util.*;
import java.util.logging.Logger;

import com.wombat.mama.MamaMsg;
import com.wombat.mama.MamaMsgType;
import com.wombat.mama.MamaBoolean;

public class MamdaMultiSecurityManager implements MamdaMsgListener
{
    private static Logger mLogger =
              Logger.getLogger(MamdaMultiSecurityManager.class.getName());

    /* Map containing a list of listeners for each security. 
      Keyed on the symbol */
    private Map     mListeners                    =   null;

    /* List of MultiSecurityHandlers for creation callback notification */
    private List    mHandlers                     =   null;

    /* Group symbol subscribed to */
    private String  mSymbol                       =   null;

    public MamdaMultiSecurityManager (String symbol)
    {
        this.mListeners                    =   new HashMap ();
        this.mHandlers                     =   new ArrayList ();
        this.mSymbol                       =   symbol;
    }
    
    public void addHandler (MamdaMultiSecurityHandler  handler)
    {
        mHandlers.add (handler);
    }

    public void addListener (MamdaMsgListener  listener,
                             String            symbol)
    {
        ((ArrayList)mListeners.get(symbol)).add(listener);
    }

    public void onMsg (final MamdaSubscription subscription,
                       final MamaMsg           msg,
                       final short             msgType)
    {
    
        mLogger.fine("MamdaMultiSecurityManager: got msg type " +
                       msgType);
        try
        {
            String symbol = msg.getString (MamdaCommonFields.ISSUE_SYMBOL);
            if(symbol == null)
            {
                return;
            }
            // First handle the message internally. I.e. create listener
            // lists, notify handlers etc.
            switch (msgType)
            {
                case MamaMsgType.TYPE_INITIAL:
                case MamaMsgType.TYPE_RECAP:
                    handleFullImage (subscription, msg, msgType, symbol);
                    break;
                case MamaMsgType.TYPE_END_OF_INITIALS:/*Don't forward.*/
                    return;
                default:
                    break;
            }
            // Now pass to other listeners (if any)
            forwardMsg (subscription, msg, msgType, symbol);
        }
        catch (MamdaDataException ex)
        {
            mLogger.fine ("MamdaMultiSecurityManager: " +
                           "caught MamdaDataException:" + ex.getMessage());
        }
    }

    /*
    * Process initial images. This is most likely when we will be 
    * notify of the creation of a new security.
    */
    private void handleFullImage (MamdaSubscription subscription,
                                  MamaMsg           msg,
                                  short             msgType,
                                  String            symbol)
    {
        mLogger.fine ("MamdaMultiSecurityManager: full image for "
                + symbol);

        if(!mListeners.containsKey (symbol))
        {
            checkSecurityCreateNotify (subscription,symbol);
        }
    }

    private void checkSecurityCreateNotify (MamdaSubscription subscription,
                                            String            symbol)
    {
        mListeners.put(symbol,new ArrayList());
        Iterator itr = mHandlers.iterator ();
        while (itr.hasNext ())
        {
            MamdaMultiSecurityHandler handler =
                (MamdaMultiSecurityHandler)itr.next ();
            handler.onSecurityCreate (subscription, this, symbol);
        }
    }

    private void forwardMsg (MamdaSubscription  subscription,
                             MamaMsg            msg,
                             short              msgType,
                             String             symbol)
    {
        ArrayList securityListeners = (ArrayList)mListeners.get(symbol);
        if ((securityListeners != null)&&(securityListeners.size() > 0))
        {
            forwardMsg (securityListeners, subscription,
                        msg, msgType);
        }
        else
        {
            /*Needed for new symbols created intraday*/
            checkSecurityCreateNotify (subscription,symbol);
        }
    }

    /*
    * Generic method for dispatching messages to instances of
    * MamaMsgListeners.
    */
    private void forwardMsg (
            List                listeners,
            MamdaSubscription   subscription,
            MamaMsg             msg,
            short               msgType)
    {
        Iterator itr  = listeners.iterator ();
        while (itr.hasNext ())
        {
            MamdaMsgListener listener = (MamdaMsgListener)itr.next ();
            listener.onMsg (subscription, msg, msgType);
        }
    }

}//end class
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
