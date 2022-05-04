---
title: cs/MamaTransport.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaTransport.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaTransport](classWombat_1_1MamaTransport.html)** <br>The underpinning object in any MAMA application  |




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
using System.Runtime.InteropServices;

namespace Wombat
{
    public class MamaTransport : MamaWrapper
    {
        public enum MamaThrottleInstance
        {
            MAMA_THROTTLE_DEFAULT = 0,
            MAMA_THROTTLE_INITIAL = 1,
            MAMA_THROTTLE_RECAP = 2
        }

        public enum MamaQuality : int
        {
            MAMA_QUALITY_OK            = 0,
            MAMA_QUALITY_MAYBE_STALE   = 1,
            MAMA_QUALITY_STALE         = 2,
            MAMA_QUALITY_PARTIAL_STALE = 3,
            MAMA_QUALITY_FORCED_STALE  = 4,
            MAMA_QUALITY_DUPLICATE     = 5,
            MAMA_QUALITY_UNKNOWN       = 99
        }

      public MamaTransport() : base()
      {
          int code = NativeMethods.mamaTransport_allocate(ref nativeHandle);
          CheckResultCode(code);
      }

        internal MamaTransport(IntPtr transport) : base(transport)
        {
        }

        public IntPtr getNativeTransport ()
        {
            IntPtr val = IntPtr.Zero;
            int code =  NativeMethods.mamaTransport_getNativeTransport (nativeHandle, 0, ref val);
            CheckResultCode(code);
            return val;
        }

      public void create(string name, MamaBridge bridgeImpl)
      {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
          if (name == null)
          {
            throw new ArgumentNullException("name");
          }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
          EnsurePeerCreated();
          int code = NativeMethods.mamaTransport_create(nativeHandle, name, bridgeImpl.NativeHandle);
          CheckResultCode(code);
      }

        public double getOutboundThrottle(MamaThrottleInstance instance)
        {
            double ret = 0;
            int code = NativeMethods.mamaTransport_getOutboundThrottle(nativeHandle, instance, ref ret);
            CheckResultCode(code);

            return ret;
        }

        public void setOutboundThrottle(MamaThrottleInstance instance, double outboundThrottle)
        {
            int code = NativeMethods.mamaTransport_setOutboundThrottle(nativeHandle, instance, outboundThrottle);
            CheckResultCode(code);
        }

        public void setSymbolMapFunc(MamaSymbolMapCallback callback, object closure)
        {
            EnsurePeerCreated();
            mCallbackForwarderSymbolMap = new CallbackForwarderSymbolMap(this, callback, closure);
            mShimCallbackSymbolMap = new CallbackForwarderSymbolMap.SymbolMapFuncCallback(mCallbackForwarderSymbolMap.OnSymbolMapFunc);
            NativeMethods.mamaTransport_setSymbolMapFunc(nativeHandle, mShimCallbackSymbolMap, IntPtr.Zero);
        }

        public MamaSymbolMapCallback getSymbolMapFunc()
        {
            return mCallbackForwarderSymbolMap.GetCallback();
        }

        public object getSymbolMapFuncClosure()
        {
            return mCallbackForwarderSymbolMap.GetClosure();
        }

        public MamaQuality Quality
        {
            get
            {
                MamaQuality qual = MamaQuality.MAMA_QUALITY_UNKNOWN;
                int code = MamaTransport.NativeMethods.mamaTransport_getQuality(nativeHandle,
                                                                                ref qual);
                CheckResultCode(code);

                return qual;
            }
        }

        public void requestConflation()
        {
            int code = NativeMethods.mamaTransport_requestConflation(nativeHandle);
            CheckResultCode(code);
        }

        public void requestEndConflation()
        {
            int code = NativeMethods.mamaTransport_requestEndConflation(nativeHandle);
            CheckResultCode(code);
        }

        protected override void OnDispose()
        {
            if (nativeHandle != IntPtr.Zero && mCallback != null)
            {
                setTransportCallback(null);
            }
            base.OnDispose();
        }

        public void destroy()
        {
            Dispose();
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return (MamaStatus.mamaStatus)NativeMethods.mamaTransport_destroy(nativeHandle);
        }

      public void setTransportCallback(MamaTransportCallback callback)
      {
          EnsurePeerCreated();
          if (callback == null)
          {
              mCallbackForwarder = null;
              mCallback = null;
          }
          else
          {
              mCallbackForwarder = new CallbackForwarder(this, callback);
              mCallback = new CallbackForwarder.TransportCallbackDelegate(mCallbackForwarder.OnTransportCallback);
          }
          int code = NativeMethods.mamaTransport_setTransportCallback(nativeHandle, mCallback, nativeHandle);
          CheckResultCode(code);
          GC.KeepAlive(callback);
      }

      public void setTransportTopicCallback(MamaTransportTopicCallback callback)
      {
          EnsurePeerCreated();
          if (callback == null)
          {
              mTopicCallbackForwarder = null;
              mTopicCallback = null;
          }
          else
          {
              mTopicCallbackForwarder = new TopicCallbackForwarder(this, callback);
              mTopicCallback = new TopicCallbackForwarder.TransportTopicCallbackDelegate(mTopicCallbackForwarder.OnTransportTopicCallback);
          }
          int code = NativeMethods.mamaTransport_setTransportTopicCallback(nativeHandle, mTopicCallback, nativeHandle);
          CheckResultCode(code);
          GC.KeepAlive(callback);
      }

      public string getName()
      {
        // Get the symbol from the native layer
          IntPtr ret = IntPtr.Zero;
          CheckResultCode(NativeMethods.mamaTransport_getName(nativeHandle, ref ret));

          // Convert to an ANSI string
          return Marshal.PtrToStringAnsi(ret);
      }

      public void setTransportCallbackQueue(MamaQueue queue)
      {
          int code = NativeMethods.mamaTransport_setTransportCallbackQueue(nativeHandle, queue.NativeHandle);
          CheckResultCode(code);
          GC.KeepAlive(queue);
      }

      public MamaQueue getTransportCallbackQueue()
      {
          IntPtr queuePtr = IntPtr.Zero;
          int code = NativeMethods.mamaTransport_getTransportCallbackQueue(nativeHandle, ref queuePtr);
          CheckResultCode(code);
          return new MamaQueue(queuePtr);
      }

      #region Implementation details

        // Interop bridge
        private sealed class CallbackForwarder
        {
            private enum mamaTransportEvent : int
            {
                // enums need to be ordered as in transport.c
                MAMA_TRANSPORT_CONNECT                   = 0,
                MAMA_TRANSPORT_CONNECT_FAILED            = 1,
                MAMA_TRANSPORT_RECONNECT                 = 2,
                MAMA_TRANSPORT_DISCONNECT                = 3,
                MAMA_TRANSPORT_ACCEPT                    = 4,
                MAMA_TRANSPORT_ACCEPT_RECONNECT          = 5,
                MAMA_TRANSPORT_PUBLISHER_DISCONNECT      = 6,
                MAMA_TRANSPORT_QUALITY                   = 7,
                MAMA_TRANSPORT_NAMING_SERVICE_CONNECT    = 8,
                MAMA_TRANSPORT_NAMING_SERVICE_DISCONNECT = 9
            }

            private MamaTransportCallback mCallback;
            private MamaTransport mTarget;

            public delegate void TransportCallbackDelegate(
                IntPtr transport,
                int transportEvent,
                short cause,
                IntPtr opaque,
                IntPtr closure);

            public void OnTransportCallback(
                IntPtr transport,
                int transportEvent,
                short cause,
                IntPtr opaque,
                IntPtr closure)
            {
                if (mCallback != null)
                {
                    switch ((mamaTransportEvent)transportEvent)
                    {
                        case mamaTransportEvent.MAMA_TRANSPORT_RECONNECT :
                            mCallback.onReconnect(mTarget);
                            break;
                        case mamaTransportEvent.MAMA_TRANSPORT_DISCONNECT :
                            mCallback.onDisconnect(mTarget);
                            break;
                        case mamaTransportEvent.MAMA_TRANSPORT_QUALITY :
                            mCallback.onQuality(mTarget);
                            break;
                        case mamaTransportEvent.MAMA_TRANSPORT_CONNECT :
                            mCallback.onConnect(mTarget);
                            break;
                        case mamaTransportEvent.MAMA_TRANSPORT_ACCEPT :
                            mCallback.onAcceptConnect(mTarget);
                            break;
                        case mamaTransportEvent.MAMA_TRANSPORT_ACCEPT_RECONNECT :
                            mCallback.onAcceptReconnect(mTarget);
                            break;
                        case mamaTransportEvent.MAMA_TRANSPORT_PUBLISHER_DISCONNECT :
                            mCallback.onPublisherDisconnect(mTarget);
                            break;
                        case mamaTransportEvent.MAMA_TRANSPORT_NAMING_SERVICE_CONNECT :
                            mCallback.onNamingServiceConnect(mTarget);
                            break;
                        case mamaTransportEvent.MAMA_TRANSPORT_NAMING_SERVICE_DISCONNECT :
                            mCallback.onNamingServiceDisconnect(mTarget);
                            break;
                        default: break;
                    }
                }
            }

            public CallbackForwarder(MamaTransport target, MamaTransportCallback callback)
            {
                this.mTarget = target;
                this.mCallback = callback;
            }
        }

        // Interop bridge
        private sealed class TopicCallbackForwarder
        {
            private enum mamaTransportTopicEvent : int
            {
                // enums need to be ordered as in transport.c
                MAMA_TRANSPORT_TOPIC_SUBSCRIBED = 0,
                MAMA_TRANSPORT_TOPIC_UNSUBSCRIBED = 1,
                MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR = 2,
                MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_NOT_ENTITLED = 3,
                MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_BAD_SYMBOL = 4
            }

            private MamaTransportTopicCallback mCallback;
            private MamaTransport mTarget;

            public delegate void TransportTopicCallbackDelegate(
                IntPtr transport,
                int transportEvent,
                string topic,
                IntPtr opaque,
                IntPtr closure);

            public void OnTransportTopicCallback(
                IntPtr transport,
                int transportEvent,
                string topic,
                IntPtr opaque,
                IntPtr closure)
            {
                if (mCallback != null)
                {
                    switch ((mamaTransportTopicEvent) transportEvent)
                    {
                        case mamaTransportTopicEvent.MAMA_TRANSPORT_TOPIC_SUBSCRIBED:
                            mCallback.onTopicSubscribe(mTarget, topic, opaque);
                            break;
                        case mamaTransportTopicEvent.MAMA_TRANSPORT_TOPIC_UNSUBSCRIBED:
                            mCallback.onTopicUnsubscribe(mTarget, topic, opaque);
                            break;
                        case mamaTransportTopicEvent.MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR:
                            mCallback.onTopicPublishError(mTarget, topic, opaque);
                            break;
                        case mamaTransportTopicEvent.MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_NOT_ENTITLED:
                            mCallback.onTopicPublishErrorNotEntitled(mTarget, topic, opaque);
                            break;
                        case mamaTransportTopicEvent.MAMA_TRANSPORT_TOPIC_PUBLISH_ERROR_BAD_SYMBOL:
                            mCallback.onTopicPublishErrorBadSymbol(mTarget, topic, opaque);
                            break;
                        default: break;
                    }
                }
            }

            public TopicCallbackForwarder(MamaTransport target, MamaTransportTopicCallback callback)
            {
                this.mTarget = target;
                this.mCallback = callback;
            }
        }

        // Interop bridge for symbol map
        private sealed class CallbackForwarderSymbolMap
        {
            public delegate int SymbolMapFuncCallback(IntPtr closure, IntPtr result, string symbol, int maxLen);

            public CallbackForwarderSymbolMap(MamaTransport sender, MamaSymbolMapCallback callback, object closure)
            {
                mCallback = callback;
                mClosure = closure;
            }

            public MamaSymbolMapCallback GetCallback()
            {
                return mCallback;
            }

            public object GetClosure()
            {
                return mClosure;
            }

            internal int OnSymbolMapFunc(
                IntPtr closure,
                IntPtr result,
                string symbol,
                int maxLen)
            {
                if (mCallback != null)
                {
                    string resultString = null;
                    int code = mCallback.SymbolMapFunc(mClosure, ref resultString, symbol, maxLen);

                    // Copy resultString to result, adding null character at end.
                    Char[] chars = resultString.ToCharArray();
                    Byte[] bytes = System.Text.Encoding.ASCII.GetBytes (chars);
                    int numBytes = resultString.Length < maxLen ? resultString.Length + 1 : maxLen;
                    Byte[] resultBytes = new Byte[numBytes];
                    for (int i = 0; i < numBytes-1; i++)
                    {
                        resultBytes[i] = bytes[i];
                    }
                    resultBytes[numBytes-1] = (byte)0;
                    Marshal.Copy(resultBytes, 0, result, numBytes);
                    return code;
                }
                return 0;
            }

            private MamaSymbolMapCallback mCallback;
            private object mClosure;
        }

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_allocate(ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_create(
                IntPtr transport,
                [MarshalAs(UnmanagedType.LPStr)]
                string name,
                IntPtr bridgeImpl);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_getOutboundThrottle(IntPtr transport,
                MamaThrottleInstance instance,
                ref double result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_setOutboundThrottle(IntPtr transport,
                MamaThrottleInstance instance,
                double outboundThrottle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_destroy(IntPtr transport);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_setTransportCallback (IntPtr transport,
                CallbackForwarder.TransportCallbackDelegate callback,
                IntPtr closure);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_setTransportTopicCallback(IntPtr transport,
                TopicCallbackForwarder.TransportTopicCallbackDelegate callback,
                IntPtr closure);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern void mamaTransport_setSymbolMapFunc(IntPtr transport,
                CallbackForwarderSymbolMap.SymbolMapFuncCallback callback,
                IntPtr closure);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_requestConflation(IntPtr transport);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_requestEndConflation(IntPtr transport);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_getNativeTransport (IntPtr nativeHandle, int index, ref IntPtr val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_getQuality(IntPtr transport, ref MamaQuality qual);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_getName(IntPtr transport, ref IntPtr ret);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_getTransportCallbackQueue(IntPtr nativeHandle, ref IntPtr val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTransport_setTransportCallbackQueue(IntPtr nativeHandle, IntPtr val);
        }

        // state
        private CallbackForwarder mCallbackForwarder;
        private CallbackForwarder.TransportCallbackDelegate mCallback;

        private TopicCallbackForwarder mTopicCallbackForwarder;
        private TopicCallbackForwarder.TransportTopicCallbackDelegate mTopicCallback;

        private CallbackForwarderSymbolMap mCallbackForwarderSymbolMap;
        private CallbackForwarderSymbolMap.SymbolMapFuncCallback mShimCallbackSymbolMap;

        #endregion // Implementation details

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
