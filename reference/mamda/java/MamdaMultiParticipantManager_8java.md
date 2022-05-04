---
title: mamda/MamdaMultiParticipantManager.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaMultiParticipantManager.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html)**  |




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

import com.wombat.mama.*;

public class MamdaMultiParticipantManager implements MamdaMsgListener
{
    private static Logger mLogger =
              Logger.getLogger(MamdaMultiParticipantManager.class.getName());

    private boolean mNotifiedConsolidatedCreate    =   false;
    /* List of registered listeners for consolidated updates */
    private List    mConsolidatedListeners         =   null;
    /* Map of registered participants. Keyed on the participant Id */
    private Map     mParticipants                  =   null;
    /* List of MultiParticipantHandlers for creation callback notification */
    private List    mHandlers                      =   null;
    private String  mSymbol                        =   null;

    /* Not currently used... */
    private MamaBoolean mIsPrimaryParticipant = null;

    MamaString tempPartID = new MamaString();
    MamaString tempSymbol = new MamaString();
        
    public MamdaMultiParticipantManager (String symbol)
    {
        this.mNotifiedConsolidatedCreate   =   false;
        this.mConsolidatedListeners        =   new ArrayList ();
        this.mParticipants                 =   new HashMap ();
        this.mHandlers                     =   new ArrayList ();
        this.mSymbol                       =   symbol;
        this.mIsPrimaryParticipant         =   new MamaBoolean (true);
    }
    
    public void addHandler (MamdaMultiParticipantHandler  handler)
    {
        mHandlers.add (handler);
    }

    public void addConsolidatedListener (MamdaMsgListener  listener)
    {
        mConsolidatedListeners.add (listener);
    }

    public void addParticipantListener (MamdaMsgListener  listener,
                                        String            partId)
    {
        ParticipantInfo  participantInfo = getParticipantInfo (partId);
        participantInfo.mParticipantListeners.add (listener);
    }

    public void onMsg (final MamdaSubscription subscription,
                       final MamaMsg           msg,
                       final short             msgType)
    {
        mLogger.fine("MamdaMultiParticipantManager: got msg type " +
                       msgType);
        try
        {
            switch (msgType)
            {
                case MamaMsgType.TYPE_INITIAL:
                case MamaMsgType.TYPE_RECAP:
                    // First handle the message internally. I.e. create listener
                    // lists, notify handlers etc.
                    handleFullImage (subscription, msg, msgType, getPartId (msg));
                    break;
                case MamaMsgType.TYPE_END_OF_INITIALS:/*Don't forward.*/
                    return;
                default:
                    break;
            }

            // Now pass to other listerners (if any)
            forwardMsg (subscription, msg, msgType, getPartId (msg));
        }
        catch (MamdaDataException ex)
        {
            mLogger.fine ("MamdaMultiParticipantManager: " +
                           "caught MamdaDataException:" + ex.getMessage());
        }
    }

    /*
    * Process initial images. This is most likely when we will be 
    * notify of consolidate/participant creation.
    */
    private void handleFullImage (MamdaSubscription subscription,
                                  MamaMsg           msg,
                                  short             msgType,
                                  String            partId)
    {
        mLogger.fine ("MamdaMultiParticipantManager: full image for "
                + subscription.getSymbol () + "(" + partId + ")");

        if (null == partId)/*This is a consolidated initial*/
        {
             checkConsolidatedCreateNotify(subscription);
        }
        else /*This is a participant initial*/
        {
            ParticipantInfo partInfo = getParticipantInfo (partId);
            checkParticipantCreateNotify (subscription,partId,partInfo);
        }
    }

    /*
    * Returns the participant info object for the specified participant.
    * If the info object is not already in the map one will be created and
    * added to the map.
    */
    private ParticipantInfo getParticipantInfo (String partId)
    {
        ParticipantInfo partInfo = (ParticipantInfo)mParticipants.get (partId);
        if (null == partInfo)
        {
            partInfo = new ParticipantInfo ();
            this.mParticipants.put (partId, partInfo);
        }
        return partInfo;
    }
    
    private void checkParticipantCreateNotify (MamdaSubscription subscription,
                                               String            partId,
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
            Iterator itr = mHandlers.iterator ();
            while (itr.hasNext ())
            {
                MamdaMultiParticipantHandler handler =
                    (MamdaMultiParticipantHandler)itr.next ();
                handler.onParticipantCreate (subscription, this,
                                             partId, mIsPrimaryParticipant);
            }
            partInfo.mNotifiedPartCreate = true;
        }
    }

    /*
    * Checks whether we need to notify registered handlers of the fist
    * consolidated update for this symbol
    */
    private void checkConsolidatedCreateNotify (MamdaSubscription    subscription)
    {
        if (!mNotifiedConsolidatedCreate)
        {
            /*Only invoke handler onCreate if no listeners have been
             * registered*/
            Iterator itr = mHandlers.iterator ();
            while (itr.hasNext ())
            {
                MamdaMultiParticipantHandler handler =
                    (MamdaMultiParticipantHandler)itr.next ();
                handler.onConsolidatedCreate (subscription, this);
            }
            mNotifiedConsolidatedCreate = true;
        }
    }
    
    private void forwardMsg (MamdaSubscription  subscription,
                             MamaMsg            msg,
                             short              msgType,
                             String             partId)
    {
        if (null!=partId) /*Participant message*/
        {
            /* We may not have an entry for this partId at this stage as
               we may not be receiving initial values for the subscription. */
            ParticipantInfo partInfo = getParticipantInfo (partId);

            /* Need to check if we have notified. We may well not be receiving
             * initials*/
            checkParticipantCreateNotify (subscription, partId, partInfo);

            /* We may have a ParticipantInfo entry for the partId but there is
               still no guarantee that any listeners have been registered. 
               This is quite acceptable as users may not be interested in all
               participants. */
            if (0 != partInfo.mParticipantListeners.size())
            {
                forwardMsg (partInfo.mParticipantListeners, subscription,
                            msg, msgType);
            }
        }
        else /*Consolidated message*/
        {
            /* We may not have notified the user that a consolidated message
               has arrived. If not using initials this can be the case.*/
            checkConsolidatedCreateNotify (subscription);

            /* Forward the message if we have any listeners*/
            if (0!=mConsolidatedListeners.size ())
            {   
                forwardMsg (mConsolidatedListeners,
                            subscription, msg, msgType);
            }
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

    /*
    * Get the participant Id from the message.
    *
    * @param msg The MamaMsg instance
    * @return String The participant id if it exists or null if this is a
    *                consolidated symbol
    * @throws MamdaDataException If the symbol contains a dot but the part id
    *                            cannot be extracted.
    */
    private String getPartId (MamaMsg msg)
    {
        tempPartID.setValue(null);
        tempSymbol.setValue(null);
        if (msg.tryString (MamdaCommonFields.PART_ID, tempPartID))
        {
            if (!tempPartID.getValue().equals(""))
            {
                return tempPartID.getValue();
            }
        }
        
        if (!msg.tryString (MamdaCommonFields.ISSUE_SYMBOL, tempSymbol))
        {
            if (!msg.tryString (MamdaCommonFields.INDEX_SYMBOL, tempSymbol))
            {
                if (!msg.tryString (MamdaCommonFields.SYMBOL, tempSymbol))
                {
                    mLogger.finest ("MamdaMultiParticipantManager: " +
                                    "getPartId failed to extract participant ID: no symbol.");
                    return null;
                }
            }
        }
        
        int lastDotIndex = tempSymbol.getValue().lastIndexOf ('.');
        if (lastDotIndex!=-1)
        {
            lastDotIndex++;
            if (lastDotIndex != tempSymbol.getValue().length ())
            {
                return  tempSymbol.getValue().substring (lastDotIndex);
            }
        }

        mLogger.finest ("MamdaMultiParticipantManager: " +
                        "getPartId() failed to extract participant ID: no dot.");
        return null;
    }

    /*
       This container class is used to store per-participant state
       information.
    */
    private class ParticipantInfo
    {
        /*The list of listeners for this participant*/
        public List mParticipantListeners     = new ArrayList ();
        /*Whether we have notified the handler via a
         call to onParticipantCreate*/
        public boolean mNotifiedPartCreate    = false;
    }

}//end class
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
