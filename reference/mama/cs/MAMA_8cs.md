---
title: cs/MAMA.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MAMA.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::IO](namespaceSystem_1_1IO.html)**  |
| **[System::Runtime::InteropServices](namespaceSystem_1_1Runtime_1_1InteropServices.html)**  |
| **[System::Threading](namespaceSystem_1_1Threading.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::Mama](classWombat_1_1Mama.html)** <br>MAMA - Middleware Agnostic Messaging API  |




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
using System.IO;
using System.Runtime.InteropServices;
using System.Threading;

namespace Wombat
{
    #region Public Enumerations

    public enum MamaLogLevel
    {
        MAMA_LOG_LEVEL_OFF = 0,
        MAMA_LOG_LEVEL_SEVERE = 1,
        MAMA_LOG_LEVEL_ERROR = 2,
        MAMA_LOG_LEVEL_WARN = 3,
        MAMA_LOG_LEVEL_NORMAL = 4,
        MAMA_LOG_LEVEL_FINE   = 5,
        MAMA_LOG_LEVEL_FINER  = 6,
        MAMA_LOG_LEVEL_FINEST = 7
    }

    public enum MamaLogFilePolicy
    {
        LOGFILE_UNBOUNDED = 1,
        LOGFILE_ROLL = 2,
        LOGFILE_OVERWRITE = 3,
        LOGFILE_USER = 4
    }

    #endregion

    public class Mama
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Internal Delegates

        internal delegate void LogFileCallbackDelegate(
            int level,
            [MarshalAs(UnmanagedType.LPStr)]
                string message);

        internal delegate void LogSizeCallbackDelegate();

        #endregion

        /* ************************************************************** */
        #region Private Member Variables


        private static MamaCallbackWrapper<MamaLogFileCallback2, LogFileCallbackDelegate> m_logFileCbWrapper;

        private static MamaCallbackWrapper<MamaLogFileCallback, LogSizeCallbackDelegate> m_logSizeCbWrapper;

        #endregion

        #endregion


        public static void setLogCallback(MamaLogFileCallback2 callback)
        {
            // Dispose the old callback wrapper
            if (m_logFileCbWrapper != null)
            {
                ((IDisposable)m_logFileCbWrapper).Dispose();
                m_logFileCbWrapper = null;
            }

            // Null is allowed to clear the callback
            if (callback == null)
            {
                // Call the native function with null
                MamaWrapper.CheckResultCode(NativeMethods.mama_setLogCallback2(null));
            }

            else
            {
                // Create a new callback wrapper
                m_logFileCbWrapper = new MamaCallbackWrapper<MamaLogFileCallback2, LogFileCallbackDelegate>(
                        callback,
                        null,
                        new LogFileCallbackDelegate(onNativeLogCallback));

                // Call the native function
                MamaWrapper.CheckResultCode(NativeMethods.mama_setLogCallback2((LogFileCallbackDelegate)m_logFileCbWrapper.NativeDelegate));
            }
        }

        public static void setLogSizeCb(MamaLogFileCallback callback)
        {
            // Dispose the old callback wrapper
            if (m_logSizeCbWrapper != null)
            {
                ((IDisposable)m_logSizeCbWrapper).Dispose();
                m_logSizeCbWrapper = null;
            }

            // Null is allowed to clear the callback
            if (callback == null)
            {
                // Call the native function with null
                MamaWrapper.CheckResultCode(NativeMethods.mama_setLogSizeCb(null));
            }

            else
            {
                // Create a new callback wrapper
                m_logSizeCbWrapper = new MamaCallbackWrapper<MamaLogFileCallback, LogSizeCallbackDelegate>(
                        callback,
                        null,
                        new LogSizeCallbackDelegate(onNativeLogSizeExceeded));

                // Call the native function
                MamaWrapper.CheckResultCode(NativeMethods.mama_setLogSizeCb((LogSizeCallbackDelegate)m_logSizeCbWrapper.NativeDelegate));
            }
        }

        public static void onNativeLogCallback(int level, string message)
        {
            // Get the callback from the static member variable
            MamaLogFileCallback2 callback = (MamaLogFileCallback2)m_logFileCbWrapper.Callback;
            if (callback != null)
            {
                // Invoke the delegate
                callback.onLog((MamaLogLevel)level, message);
            }
        }

        private static void onNativeLogSizeExceeded()
        {
            // Get the callback from the static member variable
            MamaLogFileCallback callback = (MamaLogFileCallback)m_logSizeCbWrapper.Callback;
            if (callback != null)
            {
                // Invoke the delegate
                callback.onLogSizeExceeded();
            }
        }

#if _GNU
        public const string DllName = "mama";
#elif DEBUG
        public const string DllName = "libmamacmdd.dll";
#else
        public const string DllName = "libmamacmd.dll";
#endif

        public static MamaBridge loadBridge (string middleware)
        {
            return new MamaBridge (middleware);
        }


        public static MamaBridge loadBridge (string middleware, string path)
        {
            return new MamaBridge (middleware, path);
        }

        public static MamaPayloadBridge loadPayloadBridge (string payload)
        {
            return new MamaPayloadBridge (payload);
        }

        public static void open ()
        {
            initGetVersionWrapper();
            MamaWrapper.CheckResultCode(NativeMethods.mama_open());
            Interlocked.Increment(ref mMamaopen);
        }

        public static void openWithProperties (string path, string filename)
        {
            initGetVersionWrapper();
            MamaWrapper.CheckResultCode (NativeMethods.mama_openWithProperties (path, filename));
            Interlocked.Increment(ref mMamaopen);
        }

        public static void setProperty (string name, string value)
        {
            MamaWrapper.CheckResultCode (NativeMethods.mama_setProperty (name, value));
        }

        public static string getProperty (string name)
        {
            return Marshal.PtrToStringAnsi(NativeMethods.mama_getProperty (name));
        }

        public static string getVersion (MamaBridge bridgeImpl)
        {
            return MamaVersion.MAMADOTNET_VERSION + " (" + Marshal.PtrToStringAnsi(NativeMethods.mama_getVersion (bridgeImpl.NativeHandle)) + ")";
        }

        private static string getVersion (IntPtr bridgeImpl)
        {
            return MamaVersion.MAMADOTNET_VERSION + " (" + Marshal.PtrToStringAnsi(NativeMethods.mama_getVersion (bridgeImpl)) + ")";
        }

        public static void start(MamaBridge bridgeImpl)
        {
            MamaWrapper.CheckResultCode(NativeMethods.mama_start(bridgeImpl.NativeHandle));
        }

        public static void close ()
        {
            try
            {
                MamaWrapper.CheckResultCode(NativeMethods.mama_close());
            }

            finally
            {
                /* Decrement the ref count even if something went wrong or there will be crashes
                 * when the various objects are finalized.
                 * The objects will only destroy the native objects if MAMA is still open.
                 */
                Interlocked.Decrement(ref mMamaopen);
            }
        }

        public static void startBackground(MamaBridge bridgeImpl, MamaStartBackgroundCallback callback)
        {
            // Allocate a fowarder object
            mStartBackgroundCallbackForwarder = new StartBackgroundCallbackForwarder(callback);
            mStartBackgroundShimCallback = new StartBackgroundCallbackForwarder.StartBackgroundCompleteDelegate(mStartBackgroundCallbackForwarder.onStartBackgroundCompleted);

            // Call the native function
            MamaWrapper.CheckResultCode(NativeMethods.mama_startBackground(bridgeImpl.NativeHandle, mStartBackgroundShimCallback));
        }


        public static bool opened
        {
            get
            {
                return (mMamaopen > 0);
            }
        }

        public static void stop (MamaBridge bridgeImpl)
        {
            MamaWrapper.CheckResultCode(NativeMethods.mama_stop(bridgeImpl.NativeHandle));
        }

        public static void enableLogging (MamaLogLevel level)
        {
            // Check for a valid enumeration value
            if (!Enum.IsDefined(typeof(MamaLogLevel), (int)level))
            {
                throw new ArgumentOutOfRangeException("level");
            }
            MamaWrapper.CheckResultCode(NativeMethods.mama_enableLogging(IntPtr.Zero, (int)level));
        }

        public static void logToFile(string fileName, MamaLogLevel level)
        {
            // Check the arguments
            if ((fileName == null) || (fileName == string.Empty))
            {
                throw new ArgumentNullException("fileName");
            }

            // Check for invalid characters in the file name
            if (fileName.IndexOfAny(Path.GetInvalidPathChars()) != -1)
            {
                throw new ArgumentOutOfRangeException(fileName, "The file or path contains invalid characters");
            }

            // Check for a valid enumeration value
            if (!Enum.IsDefined(typeof(MamaLogLevel), (int)level))
            {
                throw new ArgumentOutOfRangeException("level");
            }

            // Call the native function
            MamaWrapper.CheckResultCode(NativeMethods.mama_logToFile(fileName, (int)level));
        }

        public static void disableLogging()
        {
            MamaWrapper.CheckResultCode(NativeMethods.mama_disableLogging());
        }

        public static void logDestroy()
        {
            NativeMethods.mama_logDestroy();
        }

        public static void setLogLevel(MamaLogLevel level)
        {
            // Check for a valid enumeration value
            if (!Enum.IsDefined(typeof(MamaLogLevel), (int)level))
            {
                throw new ArgumentOutOfRangeException("level");
            }

            MamaWrapper.CheckResultCode(NativeMethods.mama_setLogLevel((int)level));
        }

        public static MamaLogLevel getLogLevel()
        {
            return (MamaLogLevel)NativeMethods.mama_getLogLevel();
        }

        public static void setLogSize(ulong size)
        {
            // Check the argument
            if (size == 0)
            {
                throw new ArgumentOutOfRangeException("size");
            }

            MamaWrapper.CheckResultCode(NativeMethods.mama_setLogSize(size));
        }

        public static void setNumLogFiles(int numFiles)
        {
            // Check the argument
            if (numFiles < 1)
            {
                throw new ArgumentOutOfRangeException("numFiles");
            }

            MamaWrapper.CheckResultCode(NativeMethods.mama_setNumLogFiles(numFiles));
        }

        public static void setLogFilePolicy(MamaLogFilePolicy policy)
        {
            MamaWrapper.CheckResultCode(NativeMethods.mama_setLogFilePolicy((int)policy));
        }

        public static void setAppendToLogFile(bool append)
        {
            int appendC = 0;
            if(append)
                appendC = 1;

            MamaWrapper.CheckResultCode(NativeMethods.mama_setAppendToLogFile(appendC));
        }

        public static bool loggingToFile()
        {
            int loggingToFile = NativeMethods.mama_loggingToFile();
            if(0 == loggingToFile)
                return false;
            else
                return true;
        }

        public static void log(MamaLogLevel level, string text)
        {
            // Check for a valid enumeration value
            if (!Enum.IsDefined(typeof(MamaLogLevel), (int)level))
            {
                throw new ArgumentOutOfRangeException("level");
            }

            // If null has been passed for the text then use a blank string
            if (text == null)
            {
                NativeMethods.mama_log2((int)level, string.Empty);
            }

            else
            {
                NativeMethods.mama_log2((int)level, text);
            }
        }

        public static void defaultLogFunction(MamaLogLevel level, string text)
        {
            // Check the arguments
            if ((text == null) || (text == string.Empty))
            {
                throw new ArgumentNullException("text");
            }

            // Check for a valid enumeration value
            if (!Enum.IsDefined(typeof(MamaLogLevel), (int)level))
            {
                throw new ArgumentOutOfRangeException("level");
            }

            // Call the native method
            NativeMethods.mama_logDefault2((int)level, text);
        }



        public static void setDefaultQueueHighWatermark (int highWatermark)
        {

        }

        public static void setDefaultQueueLowWatermark (int lowWatermark)
        {

        }

        public static MamaQueue getDefaultEventQueue (MamaBridge bridgeImpl)
        {
            IntPtr queuePtr = IntPtr.Zero;
            int code = NativeMethods.mama_getDefaultEventQueue (bridgeImpl.NativeHandle, ref queuePtr);
            MamaWrapper.CheckResultCode(code);
            return new MamaQueue (queuePtr);
        }

        #region Implementation details


        // For WAM, allows the C-layer to call up to the wrapper so we can get
        // the wrapper version in addition to the C version
        private delegate string wrapperGetVersion(IntPtr bridgeImpl);
        private static wrapperGetVersion wrapperVersionGetter = new wrapperGetVersion(getVersion);
        private static void initGetVersionWrapper()
        {
            NativeMethods.mama_setWrapperGetVersion(wrapperVersionGetter);
        }

        private class StartBackgroundCallbackForwarder
        {
            private MamaStartBackgroundCallback mCallback;

            public delegate void StartBackgroundCompleteDelegate(MamaStatus.mamaStatus status);

            public StartBackgroundCallbackForwarder(MamaStartBackgroundCallback callback)
            {
                // Save arguments in member variables
                mCallback = callback;
            }

            internal void onStartBackgroundCompleted(MamaStatus.mamaStatus status)
            {
                // Invoke the callback function
                if (mCallback != null)
                {
                    // Create a new mama status using the data passed in
                    mCallback.onStartComplete(status);
                }
            }

        }

        // Interop API
        private struct NativeMethods
        {
            // export definitions
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_open();
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_openWithProperties(string path, string filename);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_setProperty (string name, string value);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mama_getProperty (string name);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mama_getVersion (IntPtr bridgeImpl);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_close();
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_start (IntPtr bridgeImpl);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_startBackground(IntPtr bridgeImpl, StartBackgroundCallbackForwarder.StartBackgroundCompleteDelegate callback);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_stop (IntPtr bridgeImpl);
            [DllImport(DllName, CallingConvention=CallingConvention.Cdecl)]
            public static extern int mama_enableLogging (IntPtr f, int level);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_logToFile(string fileName, int level);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_disableLogging();
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern void mama_logDestroy();
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_setLogLevel(int level);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_getLogLevel();
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_setLogSize(ulong size);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_setNumLogFiles(int numFiles);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_setLogFilePolicy(int policy);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_setAppendToLogFile(int append);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_loggingToFile();
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_setLogSizeCb(LogSizeCallbackDelegate callback);
            [DllImport(DllName, CallingConvention = CallingConvention.StdCall)]
            public static extern void mama_log2(int level, string txt);
            [DllImport(DllName, CallingConvention = CallingConvention.StdCall)]
            public static extern void mama_logDefault2(int level, string txt);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern void mama_setWrapperGetVersion(wrapperGetVersion getVer);
            [DllImport(DllName, CallingConvention=CallingConvention.Cdecl)]
            public static extern int mama_getDefaultEventQueue (IntPtr bridgeImpl, ref IntPtr queuePtr);
            [DllImport(DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_setLogCallback2(LogFileCallbackDelegate callback);
        }

        // Static variables used to dispatch callback events from mama_startbackground.
        private static StartBackgroundCallbackForwarder mStartBackgroundCallbackForwarder;
        private static StartBackgroundCallbackForwarder.StartBackgroundCompleteDelegate mStartBackgroundShimCallback;

        private static int mMamaopen = 0;

#endregion // Implementation details
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
