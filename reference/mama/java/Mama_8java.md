---
title: mama/Mama.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/Mama.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |
| **[java::util::logging](namespacejava_1_1util_1_1logging.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::Mama](classcom_1_1wombat_1_1mama_1_1Mama.html)**  |




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
import java.util.logging.*;
import java.net.InetAddress;
import java.util.Date;
import java.text.DateFormat;

import com.wombat.mama.MamaQueueGroup;

public class Mama
{
    private final static String MAMA_JNI_LIBRARY_NAME = "mamajni";

    private static InetAddress  myInetAddress       = null;
    private static String       myIpAddress         = null;
    private static String       myHostName          = null;
    private static String       myUserName          = null;
    private static Handler      myLogHandler        = new ConsoleHandler();
    private static final DateFormat myDateFormat =
        DateFormat.getDateTimeInstance (DateFormat.SHORT, DateFormat.MEDIUM);
    
    /*
      Static initialiser which loads the shared library
      providing the implementation for each of the native
      methods.
    */
    static
    {
        /*Load the library containing the JNI C impl*/
        System.loadLibrary(MAMA_JNI_LIBRARY_NAME);

        try
        {
            /*
                Load required of the classes. This will force their
                static initializer blocks to be called.
            */
            Class.forName("com.wombat.mama.MamaDictionary");
            Class.forName("com.wombat.mama.MamaMsg");
            Class.forName("com.wombat.mama.MamaMsgField");
            Class.forName("com.wombat.mama.MamaBasicSubscription");
            Class.forName("com.wombat.mama.MamaBridge");
            Class.forName("com.wombat.mama.MamaQueue");
        }
        catch(Exception ex)
        {
            /*We throw a runtime exception - this is a show stopper*/
            throw new MamaException(ex);
        }

         initIDs();
    }

    public static native MamaBridge loadBridge (String middleware, String path);

    public static MamaBridge loadBridge (String middleware)
    {
        return loadBridge (middleware, null);
    }

    public static native MamaPayloadBridge loadPayloadBridge (String name);

    public static native MamaQueue getDefaultQueue (MamaBridge bridge);
    
    /*Client applications cannot create instances*/
    private Mama() {};

    public static native void open ();

    public static native void open (String path, String filename);

    public static native void start (MamaBridge bridge);

    public static native void startBackground (MamaBridge bridge, MamaStartBackgroundCallback callback);

    public static native void stop (MamaBridge bridge);

    public static native void close();

    /* */
    public static void enableLogging (Level level)
    {
        /* Enable C logging */
        setCLogLevel(level);

        /* Enable Java logging */
        myLogHandler.setLevel (level);

        Logger globalLogger = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
        removeHandlers (globalLogger);
        globalLogger.addHandler (myLogHandler);
        globalLogger.setLevel (level);

        final Logger logger = Logger.getLogger ("com.wombat");
        logger.setLevel (level);

        removeHandlers (logger);
        logger.addHandler (myLogHandler);

        // Make the output easier for humans to parse.
        myLogHandler.setFormatter( new Formatter()
        {
            public String format( LogRecord record )
            {
                return myDateFormat.format( new Date() ) + " : " +
                    record.getLoggerName() + " : " + record.getMessage() + "\n";
            }
        } );
    }

    private static class LogCallbackWrapper
    {
        private MamaLogFileCallback2 mLogCallback;

        public LogCallbackWrapper()
        {
            // Initialise member variables
            mLogCallback = null;
        }

        public LogCallbackWrapper(MamaLogFileCallback2 logCallback)
        {
            // Save arguments in member variables
            mLogCallback = logCallback;
        }

        public void setLogCallback(MamaLogFileCallback2 logCallback)
        {
            // Save arguments in member variables
            mLogCallback = logCallback;
        }

        public void onNativeLogCallback(int level, String message)
        {
            // Create the java log level class
            MamaLogLevel logLevel = MamaLogLevel.getMamaLogLevel(level);

            // Invoke the original callback
            mLogCallback.onLog(logLevel, message);
        }
    }

    private static LogCallbackWrapper mLogWrapper = new LogCallbackWrapper();

    private static native void setNativeLogCallback(Object callback);

    public static void setLogCallback(MamaLogFileCallback2 callback)  throws IllegalArgumentException
    {
        // Check the argument
        if(callback == null)
        {
            throw new IllegalArgumentException();
        }

        // Set the log callback wrapper as the native callback
        mLogWrapper.setLogCallback(callback);

        // Call the native function setting this as the callback class
        setNativeLogCallback(mLogWrapper);
    }

    private static native void log (int level, String message);

    public static void log(MamaLogLevel level, String message)
    {
        // Call the overload with the integer value for the log level
        Mama.log(level.getValue(), message);
    }
    
    public static void enableLogging (Level level, String file)
        throws FileNotFoundException
    {
        logToFile(file, level);
    }

    public static void logToFile (String file, Level level)
        throws FileNotFoundException
    {
        if ( (null == file) || (file.length() == 0) )
        {
            enableLogging(level);
        }
        else
        {
            if (0 != logToFile( file, getMamaLogLevelForLevel(level).getValue() ))
            {
                throw new FileNotFoundException("Could not create file: "+ file);
            }

            myLogHandler = new MamaLogHandler();
            myLogHandler.setLevel( level );

            Logger globalLogger = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
            removeHandlers (globalLogger);
            globalLogger.addHandler( myLogHandler );
            globalLogger.setLevel( level );

            final Logger logger = Logger.getLogger( "com.wombat" );
            logger.setLevel( level );
            removeHandlers (logger);
            logger.addHandler( myLogHandler );
        }
    }

    public static void disableLogging()
    {
        /*Disable C logger*/
        if (0 != _disableLogging())
        {
            throw new MamaException("Error disabling logging");
        }

        /*Disable Java logger*/
        myLogHandler.setLevel (Level.OFF);
    }

    public static Level getLogLevel ()
    {
        return MamaLogLevel.getLevel( MamaLogLevel.getMamaLogLevel(_getLogLevel()) );
    }

    public static void setLogLevel (Level level)
    {
        setCLogLevel(level);
        myLogHandler.setLevel(level);
    }

    private static void setCLogLevel (Level level)
    {
        setMamaLogLevel( getMamaLogLevelForLevel(level).getValue() );
    }

    public static void setLogFilePolicy(MamaLogFilePolicy policy)
    {
        setLogFilePolicy(policy.getValue());
    }

    private static void removeHandlers (Logger logger)
    {
        Handler[] handlers = logger.getHandlers();
        if(handlers!=null)
        {
            for (int i=0;i<handlers.length;i++)
            {
                logger.removeHandler(handlers[i]);
            }
        }
    }

    public static native String getProperty(String name);

    public static native void setProperty (String name, String value);

    private static native int logToFile(String file, int mamaLevel);

    private static native int _disableLogging();

    private static native int _getLogLevel();

    private static native void setMamaLogLevel(int mamalevel);

    private static native void setLogFilePolicy(int policy);

    public static native void setLogSize(long size);

    public static native void setNumLogFiles(int numFiles);

    public static native void setAppendToLogFile(boolean append);

    public static native boolean loggingToFile();

    public static native void setLogSizeCb(MamaLogFileCallback callback);

    public static MamaLogLevel getMamaLogLevelForLevel(Level level)
    {
        return MamaLogLevel.getMamaLogLevel(level);
    }

    /*
         Returns a MamaLogLevel which corresponds to a java Level
         Required by the C API for setting log levels.
    */
    public static int getMamaLevelForLevel(Level level)
    {
        int mamaLevel = 0;

        if(null!=level)
        {
            if(level.equals(Level.FINEST))
            {
                mamaLevel = 7;
            }
            else if(level.equals(Level.FINER))
            {
                mamaLevel = 6;
            }
            else if(level.equals(Level.FINE))
            {
                mamaLevel = 5;
            }
            else if(level.equals(Level.CONFIG)  ||
                    level.equals(Level.INFO))
            {
                mamaLevel = 4;
            }
            else if(level.equals(Level.WARNING))
            {
                mamaLevel = 3;
            }
            else if(level.equals(Level.SEVERE))
            {
                mamaLevel = 1;
            }
            else if(level.equals(Level.OFF))
            {
                mamaLevel = 0;
            }
            else /*Should all be covered but just in case*/
            {
                mamaLevel = 4;
            }
        }
        return mamaLevel;
    }

    public static native void setApplicationName (String applicationName);

    public static native void setApplicationClassName (String applicationClassName);

    public static native String getApplicationName ();

    public static native String getApplicationClassName ();

    public static native String getCUserName ();

    public static native String getCHostName ();
    
    public static String getUserName ()
    {
        if (myUserName == null)
            myUserName = getCUserName ();

        return (myUserName);
    }

    public static String getHostName ()
    {
        if (myHostName == null)
            myHostName = getCHostName();

        return myHostName;
    }

    public static String getIpAddress ()
    {
         if (myIpAddress == null)
         {

            if (myInetAddress == null)
            {
                try
                {
                    myInetAddress = InetAddress.getLocalHost();
                }
                catch (java.net.UnknownHostException exception)
                {
                    throw new MamaException("Error getting IP address");
                }
            }

            myIpAddress = myInetAddress.getHostAddress();
        }
        return myIpAddress;
    }

    public static String getVersion (MamaBridge bridge)
    {
        Package pkg = Mama.class.getPackage ();
        if( pkg != null )
        {
            return "mamajni " + pkg.getImplementationVersion () +" ( "+
                getCVersion(bridge) + " )";
        }
        return null;
    }

    private static native String getCVersion (MamaBridge bridge);

    public static native int getLastErrorCode ();

    public static String getLastErrorText ()
    {
        return MamaError.toString(getLastErrorCode());
    }

    /*Used to cache ids for callback methods/fields*/
    private static native void initIDs();
}/*End Class*/
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
