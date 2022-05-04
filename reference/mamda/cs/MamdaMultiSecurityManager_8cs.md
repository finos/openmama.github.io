---
title: cs/MamdaMultiSecurityManager.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaMultiSecurityManager.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html)** <br>[MamdaMultiSecurityManager]() is a class that manages updates on a group symbol which provides a single subscription to multiple different securities. Developers are notified of each element available for the group and can choose which elements they wish to provide handling for (e.g. based on wildcards).  |




## Source code

```csharp
/* $Id: MamdaMultiSecurityManager.cs,v 1.2.32.5 2012/08/24 16:12:11 clintonmcdowell Exp $
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
using Wombat.Containers;

namespace Wombat
{
    public class MamdaMultiSecurityManager : MamdaMsgListener
    {
        public MamdaMultiSecurityManager(string symbol)
        {
            mListeners = new HashMap();
            mHandlers = new ArrayList();
            mSymbol = symbol;
        }

        public void addHandler(MamdaMultiSecurityHandler handler)
        {
            mHandlers.Add(handler);
        }

        public void addListener(
            MamdaMsgListener  listener,
            string            symbol)
        {
            ((ArrayList)mListeners.valueOf(symbol)).Add(listener);
        }

        public void onMsg(
            MamdaSubscription subscription,
            MamaMsg           msg,
            mamaMsgType       msgType)
        {
            try
            {
                string symbol = msg.getString(MamdaCommonFields.ISSUE_SYMBOL);
                if(symbol == null)
                {
                    return;
                }
                // First handle the message internally. i.e. create listener
                // lists, notify handlers etc.
                switch (msgType)
                {
                    case mamaMsgType.MAMA_MSG_TYPE_INITIAL:
                    case mamaMsgType.MAMA_MSG_TYPE_RECAP:
                        handleFullImage(subscription, msg, msgType, symbol);
                        break;
                    case mamaMsgType.MAMA_MSG_TYPE_END_OF_INITIALS:/*Don't forward.*/
                        return;
                    default:
                        break;
                }
                // Now pass to other listeners (if any)
                forwardMsg(subscription, msg, msgType, symbol);
            }
            catch (MamdaDataException)
            {
            }
        }

        private void handleFullImage(
            MamdaSubscription subscription,
            MamaMsg           msg,
            mamaMsgType       msgType,
            string            symbol)
        {
            if(!mListeners.containsKey(symbol))
            {
                checkSecurityCreateNotify(subscription, symbol);
            }
        }

        private void checkSecurityCreateNotify(
            MamdaSubscription subscription,
            string            symbol)
        {
            mListeners.put(symbol, new ArrayList());
            foreach (MamdaMultiSecurityHandler handler in mHandlers)
            {
                handler.onSecurityCreate(subscription, this, symbol);
            }
        }

        private void forwardMsg(
            MamdaSubscription  subscription,
            MamaMsg            msg,
            mamaMsgType        msgType,
            String             symbol)
        {
            ArrayList securityListeners = (ArrayList)mListeners.valueOf(symbol);
            if ((securityListeners != null) && (securityListeners.Count > 0))
            {
                forwardMsg(
                    securityListeners,
                    subscription,
                    msg,
                    msgType);
            }
            else
            {
                /*Needed for new symbols created intraday*/
                checkSecurityCreateNotify(subscription, symbol);
            }
        }

        private void forwardMsg(
            ArrayList           listeners,
            MamdaSubscription   subscription,
            MamaMsg             msg,
            mamaMsgType         msgType)
        {
            foreach (MamdaMsgListener listener in listeners)
            {
                listener.onMsg(subscription, msg, msgType);
            }
        }

        /*Map containing a list of listeners for each security.
          Keyed on the symbol*/
        private Map mListeners;

        /*List of MultiSecurityHandlers for creation callback notification*/
        private ArrayList mHandlers;

        /*Group symbol subscribed to*/
        private string mSymbol;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
