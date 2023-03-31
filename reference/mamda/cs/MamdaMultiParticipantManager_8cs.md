---
title: cs/MamdaMultiParticipantManager.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaMultiParticipantManager.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html)** <br>[MamdaMultiParticipantManager]() is a class that manages updates on a consolidated basis for securities that may be traded on multiple exchanges and which may have a national best bid and offer. Developers are notified of each element available for the consolidated security, including the national best bid and offer, and each regional exchange (Market Maker). Developers can pick and choose which elements they wish to provide handling for (e.g., BBO-only, certain regional exchanges, etc.).  |




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
using Wombat.Containers;

namespace Wombat
{
    public class MamdaMultiParticipantManager : MamdaMsgListener
    {
        public MamdaMultiParticipantManager(string symbol)
        {
            mNotifiedConsolidatedCreate   =   false;
            mConsolidatedListeners        =   new ArrayList();
            mParticipants                 =   new HashMap();
            mHandlers                     =   new ArrayList();
            mSymbol                       =   symbol;
            mIsPrimaryParticipant         =   new NullableBool(true);
        }

        public void addHandler(MamdaMultiParticipantHandler handler)
        {
            mHandlers.Add(handler);
        }

        public void addConsolidatedListener(MamdaMsgListener listener)
        {
            mConsolidatedListeners.Add(listener);
        }

        public void addParticipantListener(
            MamdaMsgListener  listener,
            string            partId)
        {
            ParticipantInfo  participantInfo = getParticipantInfo(partId);
            participantInfo.mParticipantListeners.Add(listener);
        }

        public void onMsg(
            MamdaSubscription subscription,
            MamaMsg           msg,
            mamaMsgType       msgType)
        {
            string partId = getPartId(msg);
            // First handle the message internally. I.e. create listener
            // lists, notify handlers etc.
            switch (msgType)
            {
                case mamaMsgType.MAMA_MSG_TYPE_INITIAL:
                case mamaMsgType.MAMA_MSG_TYPE_RECAP:
                    handleFullImage(subscription, msg, msgType, partId);
                    break;
                case mamaMsgType.MAMA_MSG_TYPE_END_OF_INITIALS:/*Don't forward.*/
                    return;
                default:
                    break;
            }
            // Now pass to other listerners (if any)
            forwardMsg(subscription, msg, msgType, partId);
        }

        private void handleFullImage(
            MamdaSubscription subscription,
            MamaMsg           msg,
            mamaMsgType       msgType,
            string            partId)
        {
            if (partId == null) /*This is a consolidated initial*/
            {
                checkConsolidatedCreateNotify(subscription);
            }
            else /*This is a participant initial*/
            {
                ParticipantInfo partInfo = getParticipantInfo(partId);
                checkParticipantCreateNotify(subscription, partId, partInfo);
            }
        }

        private ParticipantInfo getParticipantInfo(string partId)
        {
            ParticipantInfo partInfo = (ParticipantInfo)mParticipants.valueOf(partId);
            if (partInfo == null)
            {
                partInfo = new ParticipantInfo();
                mParticipants.put(partId, partInfo);
            }
            return partInfo;
        }

        private void checkParticipantCreateNotify(
            MamdaSubscription subscription,
            string            partId,
            ParticipantInfo   partInfo)
        {
            /*
               Check if we need to notify of participant creation. A user may have
               added a listener up front so the PartInfo will exist but we will
               not have already notified them of the first update for this
               participant.
             */
            if (!partInfo.mNotifiedPartCreate)
            {
                foreach (MamdaMultiParticipantHandler handler in mHandlers)
                {
                    handler.onParticipantCreate(subscription, this, partId, mIsPrimaryParticipant);
                }
                partInfo.mNotifiedPartCreate = true;
            }
        }

        private void checkConsolidatedCreateNotify(MamdaSubscription subscription)
        {
            if (!mNotifiedConsolidatedCreate)
            {
                /*Only invoke handler onCreate if no listeners have been
                 * registered*/
                foreach (MamdaMultiParticipantHandler handler in mHandlers)
                {
                    handler.onConsolidatedCreate(subscription, this);
                }
                mNotifiedConsolidatedCreate = true;
            }
        }

        private void forwardMsg(
            MamdaSubscription  subscription,
            MamaMsg            msg,
            mamaMsgType        msgType,
            String             partId)
        {
            if (partId == null) /*Participant message*/
            {
                /* We may not have an entry for this partId at this stage as
                   we may not be receiving initial values for the subscription. */
                ParticipantInfo partInfo = getParticipantInfo(partId);

                /* Need to check if we have notified. We may well not be receiving
                 * initials*/
                checkParticipantCreateNotify(subscription, partId, partInfo);

                /* We may have a ParticipantInfo entry for the partId but there is
                   still no guarantee that any listeners have been registered.
                   This is quite acceptable as users may not be interested in all
                   participants. */
                if (partInfo.mParticipantListeners.Count > 0)
                {
                    forwardMsg(partInfo.mParticipantListeners, subscription, msg, msgType);
                }
            }
            else /*Consolidated message*/
            {
                /* We may not have notified the user that a consolidated message
                   has arrived. If not using initials this can be the case.*/
                checkConsolidatedCreateNotify(subscription);

                /* Forward the message if we have any listeners*/
                if (mConsolidatedListeners.Count > 0)
                {
                    forwardMsg(mConsolidatedListeners, subscription, msg, msgType);
                }
            }
        }

        private void forwardMsg (
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

        private string getPartId(MamaMsg msg)
        {
            string partId = null;
            string symbol = null;

            if (msg.tryString(MamdaCommonFields.PART_ID, ref partId))
            {
                if (partId != String.Empty)
                    return partId;
            }

            if (!msg.tryString(MamdaCommonFields.ISSUE_SYMBOL, ref symbol))
            {
                if (!msg.tryString(MamdaCommonFields.INDEX_SYMBOL, ref symbol))
                {
                    if (!msg.tryString(MamdaCommonFields.SYMBOL, ref symbol))
                    {
                        return null;
                    }
                }
            }


            int lastDotIndex = symbol.LastIndexOf('.');
            if (lastDotIndex != -1)
            {
                lastDotIndex++;
                if (lastDotIndex != symbol.Length)
                {
                    return symbol.Substring(lastDotIndex);
                }
            }

            return null;
        }

        private class ParticipantInfo
        {
            /*The list of listeners for this participant*/
            public ArrayList mParticipantListeners = new ArrayList();
            /*Whether we have notified the handler via a
             call to onParticipantCreate*/
            public bool mNotifiedPartCreate = false;
        }

        private bool      mNotifiedConsolidatedCreate    =   false;
        /*List of registered listeners for consolidated updates*/
        private ArrayList mConsolidatedListeners         =   null;
        /*Map of registered participants. Keyed on the participant Id*/
        private Map       mParticipants                  =   null;
        /*List of MultiParticipantHandlers for creation callback notification*/
        private ArrayList mHandlers                      =   null;
        private string    mSymbol                        =   null;

        /*Not currently used...*/
        private NullableBool mIsPrimaryParticipant       = new NullableBool();
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
