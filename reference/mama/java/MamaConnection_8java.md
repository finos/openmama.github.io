---
title: mama/MamaConnection.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaConnection.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaConnection](classcom_1_1wombat_1_1mama_1_1MamaConnection.html)**  |




## Source code

```java
/* $Id:
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

/*
* Wrapper class for the native C connection structure
*/

public class MamaConnection
{
    
static
{
    initIDs();
}

/*A long value containing a pointer to the underlying C connection structure*/
private long    connectionPointer_i   =   0;

public MamaConnection (MamaTransport transport,
                       String        ipAddress,
                       int           port, 
                       int           maxQueueSize, 
                       int           curQueueSize, 
                       int           msgCount,    
                       int           bytesSent,  
                       String        userName,      
                       String        appName)
{
    create( transport, 
            ipAddress, 
            port, 
            maxQueueSize, 
            curQueueSize, 
            msgCount, 
            bytesSent, 
            userName, 
            appName);
}

/* This private constructor is used to initialize the object reference 
   in transport callbacks without actually creating an underlying C
   structure */
MamaConnection ()
{}

private native void create ( MamaTransport transport,
                             String        ipAddress,
                             int           port,
                             int           maxQueueSize,
                             int           curQueueSize,
                             int           msgCount,
                             int           bytesSent,
                             String        userName,
                             String        appName);

public native void destroy (); 

public native MamaTransport getTransport ();

public native String getIpAddress ();

public native int getPort ();

public native String getUserName (); 

public native String getAppName ();

public native int getMaxQueueSize ();

public native int getQueueSize ();

public native int getMsgCount (); 

public native int getBytesSent (); 

public native String toString ();

public native boolean isIntercepted ();

private static native void initIDs ();

}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
