---
title: cs/MamaSourceGroup.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaSourceGroup.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSourceGroup](classWombat_1_1MamaSourceGroup.html)** <br>A [MamaSourceGroup]() monitors a set of [MamaSource](classWombat_1_1MamaSource.html)s that presumably provide a duplicate set of data.  |
| interface | **[Wombat::MamaSourceGroup::StateChangedRegistration](interfaceWombat_1_1MamaSourceGroup_1_1StateChangedRegistration.html)** <br>Encapsulates a registration of a state-change mCallback for a particular source mGroup  |




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
using System.Runtime.InteropServices;

namespace Wombat
{
    public class MamaSourceGroup : MamaWrapper, IEnumerable
    {
        public MamaSourceGroup(string groupName) : base()
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (groupName == null)
            {
                throw new ArgumentNullException("groupName", groupName);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            int code = NativeMethods.mamaSourceGroup_create(ref nativeHandle, groupName);
            CheckResultCode(code);
        }

        internal MamaSourceGroup(IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            int code = NativeMethods.mamaSourceGroup_destroy(nativeHandle);
            return (MamaStatus.mamaStatus)code;
        }

        public void destroy()
        {
            Dispose();
        }

        public string name
        {
            get
            {
                EnsurePeerCreated();
                IntPtr value = IntPtr.Zero;
                int code = NativeMethods.mamaSourceGroup_getName(nativeHandle, ref value);
                CheckResultCode(code);
                return Marshal.PtrToStringAnsi(value);
            }
        }

        public MamaSource find(string sourceName)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (sourceName == null)
            {
                throw new ArgumentNullException("sourceName", sourceName);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            IntPtr value = IntPtr.Zero;
            int code = NativeMethods.mamaSourceGroup_findSource(nativeHandle, sourceName, ref value);
            CheckResultCode(code);
            if (value != IntPtr.Zero)
            {
                return new MamaSource(value);
            }
            else
            {
                return null;
            }
        }

        public void add(
            MamaSource source,
            uint weight)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (source == null)
            {
                throw new ArgumentNullException("source", source);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            int code = NativeMethods.mamaSourceGroup_addSource(nativeHandle, source.NativeHandle, weight);
            CheckResultCode(code);
            GC.KeepAlive(source);
        }

        public void add(
            MamaSource source,
            int weight)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (weight < 0)
            {
                throw new ArgumentOutOfRangeException("weight", weight);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            add(source, (uint)weight);
        }

        public void add(
            string sourceName,
            uint weight,
            MamaSource source)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (sourceName == null)
            {
                throw new ArgumentNullException("sourceName", sourceName);
            }
            if (source == null)
            {
                throw new ArgumentNullException("source", source);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            int code = NativeMethods.mamaSourceGroup_addSourceWithName(nativeHandle, source.NativeHandle, sourceName, weight);
            CheckResultCode(code);
            GC.KeepAlive(source);
        }

        public void add(
            string sourceName,
            int weight,
            MamaSource source)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (weight < 0)
            {
                throw new ArgumentOutOfRangeException("weight", weight);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            add(sourceName, (uint)weight, source);
        }

        public void setWeight(
            string sourceName,
            uint weight)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (sourceName == null)
            {
                throw new ArgumentNullException("sourceName", sourceName);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            int code = NativeMethods.mamaSourceGroup_setSourceWeight(nativeHandle, sourceName, weight);
            CheckResultCode(code);
        }

        public void setWeight(
            string sourceName,
            int weight)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (weight < 0)
            {
                throw new ArgumentOutOfRangeException("weight", weight);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            setWeight(sourceName, (uint)weight);
        }

        public uint size
        {
            get
            {
                EnsurePeerCreated();
                uint value = 0;
                foreach (MamaWeightedSource source in this)
                {
                    //source;
                    ++value;
                }
                return value;
            }
        }

        public int sizeClsCompliant
        {
            get
            {
                return (int)(long)size;
            }
        }

        public StateChangedRegistration registerStateChangeCallback(MamaSourceStateChangeCallback mCallback)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (mCallback == null)
            {
                throw new ArgumentNullException("mCallback");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            IntPtr cookieKey = new IntPtr(mNextKey);
            IntPtr regCookie = IntPtr.Zero;
            int code = NativeMethods.mamaSourceGroup_registerStageChangeCallback(
                nativeHandle,
                new MamaSourceGroupOnStateChangeDelegate(onStateChange),
                ref regCookie,
                cookieKey);
            CheckResultCode(code);
            StateChangedRegistration reg = new Cookie(this, mCallback, regCookie, cookieKey);
            GC.KeepAlive(mCallback);
            mRegistrations[mNextKey] = reg;
            ++mNextKey;
            return reg;
        }

        public bool reevaluate()
        {
            EnsurePeerCreated();
            byte changedState = 0;
            int code = NativeMethods.mamaSourceGroup_reevaluate(nativeHandle, ref changedState);
            CheckResultCode(code);
            return changedState != 0;
        }

        public MamaSource topWeightSource
        {
            get
            {
                EnsurePeerCreated();
                IntPtr mHandle = IntPtr.Zero;
                int code = NativeMethods.mamaSourceGroup_getTopWeightSource(nativeHandle, ref mHandle);
                CheckResultCode(code);
                return new MamaSource(mHandle);
            }
        }

        public interface StateChangedRegistration
        {
            void unregister();
            MamaSourceGroup SourceGroup { get; }
            MamaSourceStateChangeCallback SourceStateChangeCallback { get; }
        }

        public IEnumerator GetEnumerator()
        {
            return new Enumerator(this);
        }

        #region Implementation details

        private sealed class Enumerator : IEnumerator
        {
            public Enumerator(MamaSourceGroup that)
            {
                mMamaSourceGroup = that;
                mItems = new ArrayList();
                mGroupIteratorDelegate = new MamaSourceGroupIterateDelegate(this.onIterate);

                int code = NativeMethods.mamaSourceGroup_iterateSources(
                    mMamaSourceGroup.NativeHandle,
                    mGroupIteratorDelegate,
                    IntPtr.Zero);
                MamaWrapper.CheckResultCode(code);
                mIndex = 0;
                GC.KeepAlive(this);
            }
            public void Reset()
            {
                mIndex = 0;
            }
            public object Current
            {
                get
                {
                    if (mIndex >= mItems.Count)
                    {
                        throw new InvalidOperationException();
                    }
                    return mItems[mIndex];
                }
            }
            public bool MoveNext()
            {
                if (mIndex < mItems.Count - 1)
                {
                    ++mIndex;
                    return true;
                }
                return false;
            }

            // the mCallback implementation
            private void onIterate(IntPtr sourceGroup, IntPtr source, uint weight, IntPtr closure)
            {
                MamaSource ms = new MamaSource(source);
                MamaWeightedSource ws = new MamaWeightedSource(ms, weight);
                mItems.Add(ws);
                GC.KeepAlive(ms);
                GC.KeepAlive(ws);
            }

            private MamaSourceGroup mMamaSourceGroup;
            private ArrayList mItems;
            private int mIndex;
            private MamaSourceGroupIterateDelegate mGroupIteratorDelegate;
        }

        // registration cookie wrapper
        private sealed class Cookie : StateChangedRegistration
        {
            public Cookie(
                MamaSourceGroup mGroup,
                MamaSourceStateChangeCallback mCallback,
                IntPtr registrationHandle,
                IntPtr mKey)
            {
                this.mGroup = mGroup;
                this.mCallback = mCallback;
                this.mHandle = registrationHandle;
                this.mKey = mKey;
            }

            public void unregister()
            {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (mHandle == IntPtr.Zero)
                {
                    throw new InvalidOperationException("Already unregistered");
                }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (mHandle != IntPtr.Zero)
                {
                    mGroup.EnsurePeerCreated();
                    int code = NativeMethods.mamaSourceGroup_unregisterStateChangeCallback(mGroup.NativeHandle, mHandle);
                    MamaStatus.mamaStatus status = (MamaStatus.mamaStatus)code;
                    if (status != MamaStatus.mamaStatus.MAMA_STATUS_OK)
                    {
                        throw new MamaException(status);
                    }
                    mGroup.mRegistrations.Remove(mKey.ToInt32());
                    mHandle = IntPtr.Zero;
                    mKey = IntPtr.Zero;
                }
            }

            public MamaSourceGroup SourceGroup
            {
                get
                {
                    return mGroup;
                }
            }

            public MamaSourceStateChangeCallback SourceStateChangeCallback
            {
                get
                {
                    return mCallback;
                }
            }

            public int Key
            {
                get
                {
                    return mKey.ToInt32();
                }
            }

            private MamaSourceGroup mGroup;
            private MamaSourceStateChangeCallback mCallback;
            private IntPtr mHandle;
            private IntPtr mKey;
        }

        // C-like callbacks used in the interop calls

        private delegate void MamaSourceGroupIterateDelegate(
            IntPtr sourceGroup,
            IntPtr source,
            uint weight,
            IntPtr closure);

        private delegate void MamaSourceGroupOnStateChangeDelegate(
            IntPtr sourceGroup,
            IntPtr topWeightSource,
            IntPtr closure);

        private void onStateChange(IntPtr sourceGroup, IntPtr topWeightSource, IntPtr closure)
        {
            int mKey = closure.ToInt32();
            Cookie cookie = mRegistrations[mKey] as Cookie;
            if (cookie != null && cookie.Key != 0)
            {
                MamaSourceStateChangeCallback mCallback = cookie.SourceStateChangeCallback;
                if (mCallback != null)
                {
                    mCallback.onStateChanged(this, new MamaSource(topWeightSource));
                }
            }
        }

        // Interop API
        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_create(
                ref IntPtr sourceGroup,
                [MarshalAs(UnmanagedType.LPStr)] string groupName);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_getName(
                IntPtr sourceGroup,
                ref IntPtr groupName);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_findSource(
                IntPtr sourceGroup,
                [MarshalAs(UnmanagedType.LPStr)] string sourceName,
                ref IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_addSource(
                IntPtr sourceGroup,
                IntPtr source,
                uint weight);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_addSourceWithName(
                IntPtr sourceGroup,
                IntPtr source,
                [MarshalAs(UnmanagedType.LPStr)] string sourceName,
                uint weight);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_setSourceWeight(
                IntPtr sourceGroup,
                [MarshalAs(UnmanagedType.LPStr)] string sourceName,
                uint weight);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_reevaluate(
                IntPtr sourceGroup,
                ref byte changedStates);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_iterateSources(
                IntPtr sourceGroup,
                MamaSourceGroupIterateDelegate mCallback,
                IntPtr closure);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_getTopWeightSource(
                IntPtr sourceGroup,
                ref IntPtr topWeightSource);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_registerStageChangeCallback(
                IntPtr sourceGroup,
                MamaSourceGroupOnStateChangeDelegate mCallback,
                ref IntPtr registrationCookie,
                IntPtr closure);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_unregisterStateChangeCallback(
                IntPtr sourceGroup,
                IntPtr registrationCookie);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroup_destroy(IntPtr sourceGroup);
        }

        internal Hashtable mRegistrations = new Hashtable();
        private int mNextKey = 1;

        #endregion Implementation details

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:34 +0100
