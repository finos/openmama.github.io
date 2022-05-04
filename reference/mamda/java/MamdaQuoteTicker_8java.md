---
title: examples/MamdaQuoteTicker.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# examples/MamdaQuoteTicker.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::examples](namespacecom_1_1wombat_1_1mamda_1_1examples.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::examples::MamdaQuoteTicker](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaQuoteTicker.html)**  |




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

package com.wombat.mamda.examples;

import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import java.util.Iterator;
import com.wombat.mamda.*;
import com.wombat.mama.Mama;
import com.wombat.mama.MamaBridge;
import com.wombat.mama.MamaSource;
import com.wombat.mama.MamaMsg;
import com.wombat.mama.MamaTransport;
import com.wombat.mama.MamaDictionary;
import com.wombat.mama.MamaDictionaryCallback;
import com.wombat.mama.MamaSubscription;

public class MamdaQuoteTicker
{
    private static MamaBridge               mBridge                 = null;
    private static Logger theLogger = Logger.getLogger( "com.wombat.mamda.examples" );
    /*Controls the output from the example - distinct from API logging*/
    private static int                      mQuietModeLevel         = 0;
    private static String                   mDictTransportName      = null;
    
    private static MamaDictionary buildDataDictionary (MamaTransport transport, 
                                                       String        dictSource)
        throws InterruptedException
    {
        final boolean gotDict[] = {false};
        MamaDictionaryCallback dictionaryCallback =
            new MamaDictionaryCallback ()
        {
            public void onTimeout ()
            {
                System.err.println
                    ("Timed out waiting for dictionary");
                System.exit (1);
            }

            public void onError (final String s)
            {
                System.err.println ("Error getting dictionary: " + s);
                System.exit(1);
            }

            public synchronized void onComplete ()
            {
                gotDict[0] = true;
                Mama.stop (mBridge);
                notifyAll ();
            }
        };

        synchronized (dictionaryCallback)
        {
            MamaSubscription  subscription = new MamaSubscription ();
            MamaSource        mDictSource  = new MamaSource ();
            mDictSource.setTransport       (transport);
            mDictSource.setSymbolNamespace (dictSource);
            
            MamaDictionary   dictionary   = 
                    subscription.createDictionarySubscription (
                                    dictionaryCallback,
                                    Mama.getDefaultQueue (mBridge),
                                    mDictSource);

            Mama.start (mBridge);
            if (!gotDict[0]) dictionaryCallback.wait (30000);
            if (!gotDict[0])
            {
                System.err.println ("Timed out waiting for dictionary.");
                System.exit (0);
            }
            return dictionary;
        }
    }
    
    public static void main (final String[] args)
    {
        MamaTransport        transport      = null;
        MamaTransport        mDictTransport = null;
        MamaDictionary       dictionary     = null;
        CommandLineProcessor options        = new CommandLineProcessor (args);

        Level level = options.getLogLevel ();
        if (level != null)
        {
            theLogger.setLevel (level);
            Mama.enableLogging (level);
        }
        theLogger.info ("Source: " + options.getSource());

        try
        {
            // Initialize MAMDA   
            mBridge = options.getBridge();
            Mama.open ();
            transport = new MamaTransport ();
            transport.create (options.getTransport (), mBridge);
            
            mDictTransportName = options.getDictTransport();

            if (mDictTransportName != null)
            {
                mDictTransport = new MamaTransport ();
                mDictTransport.create (mDictTransportName, mBridge);
            }
            else 
            {
                mDictTransport = transport;
            }

            // Get the Data dictionary.....
            dictionary = buildDataDictionary(mDictTransport,options.getDictSource());
            
            MamdaQuoteFields.setDictionary  (dictionary, null);
            MamdaCommonFields.setDictionary (dictionary, null);
            
            for (Iterator iterator = options.getSymbolList ().iterator ();
                 iterator.hasNext ();
                )
            {
                final String symbol = (String)iterator.next ();

                MamdaSubscription  aSubscription  = new MamdaSubscription ();
                MamdaQuoteListener aQuoteListener = new MamdaQuoteListener ();
                QuoteTicker        aTicker        = new QuoteTicker ();

                aQuoteListener.addHandler      (aTicker);
                aSubscription.addMsgListener   (aQuoteListener);
                aSubscription.addStaleListener (aTicker);
                aSubscription.addErrorListener (aTicker);

                aSubscription.create (transport,
                                      Mama.getDefaultQueue (mBridge),
                                      options.getSource (),
                                      symbol,
                                      null);

                theLogger.fine ("Subscribed to: " + symbol);
            }
            
            Mama.start (mBridge);
            synchronized (MamdaQuoteTicker.class)
            {
                MamdaQuoteTicker.class.wait ();
            }
        }
        catch (Exception e)
        {
            e.printStackTrace ();
            System.exit (1);
        }
    }

    private static class QuoteTicker implements MamdaQuoteHandler,
                                                MamdaStaleListener,
                                                MamdaErrorListener
    {
        public void onQuoteRecap (
            final MamdaSubscription   sub,
            final MamdaQuoteListener  listener,
            final MamaMsg             msg,
            final MamdaQuoteRecap     recap)
        {
            System.out.println ("Quote Recap (" + sub.getSymbol () + ")");
        }

        public void onQuoteUpdate (
            final MamdaSubscription   sub,
            final MamdaQuoteListener  listener,
            final MamaMsg             msg,
            final MamdaQuoteUpdate    event,
            final MamdaQuoteRecap     recap)
        {
            System.out.println ("Quote ("  + sub.getSymbol()        +
                                ":"        + recap.getQuoteCount()  +
                                "):  "     + event.getBidPrice()    +
                                " "        + event.getBidSize()     +
                                " X "      + event.getAskSize()     +
                                " "        + event.getAskPrice()    +
                                " (seq#: " + event.getEventSeqNum() +
                                "; time: " + event.getEventTime()   +
                                "; qual: " + event.getQuoteQual()   + ")");
        }

        public void onQuoteGap (
            final MamdaSubscription   sub,
            final MamdaQuoteListener  listener,
            final MamaMsg             msg,
            final MamdaQuoteGap       event,
            final MamdaQuoteRecap     recap)
        {
            System.out.println ("Quote gap (" + event.getBeginGapSeqNum() +
                               "-" + event.getEndGapSeqNum() + ")");
        }

        public void onQuoteClosing (
            final MamdaSubscription   sub,
            final MamdaQuoteListener  listener,
            final MamaMsg             msg,
            final MamdaQuoteClosing   event,
            final MamdaQuoteRecap     recap)
        {
            System.out.println ("Quote closing (" + sub.getSymbol ()  + ")");
        }

        public void onStale (
            MamdaSubscription   subscription,
            short               quality)
        {
            System.out.println ("Stale (" + subscription.getSymbol() + ")");
        }

        public void onError (
            MamdaSubscription   subscription,
            short               severity,
            short               errorCode,
            String              errorStr)
        {
            System.out.println ("Error (" + subscription.getSymbol() + ")");
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
