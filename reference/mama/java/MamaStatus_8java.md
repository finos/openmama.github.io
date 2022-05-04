---
title: mama/MamaStatus.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaStatus.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaStatus](classcom_1_1wombat_1_1mama_1_1MamaStatus.html)**  |




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

public class MamaStatus
{
    public static final short MAMA_STATUS_OK                          = 0;
    public static final short MAMA_STATUS_NOMEM                       = 1;
    public static final short MAMA_STATUS_PLATFORM                    = 2;
    public static final short MAMA_STATUS_SYSTEM_ERROR                = 3;
    public static final short MAMA_STATUS_INVALID_ARG                 = 4;
    public static final short MAMA_STATUS_NULL_ARG                    = 5;
    public static final short MAMA_STATUS_NOT_FOUND                   = 6;
    public static final short MAMA_STATUS_TIMER_FAILURE               = 7;
    public static final short MAMA_STATUS_IP_NOT_FOUND                = 8;
    public static final short MAMA_STATUS_TIMEOUT                     = 9;
    public static final short MAMA_STATUS_NOT_ENTITLED                = 10;
    public static final short MAMA_STATUS_PROPERTY_TOO_LONG           = 11;
    public static final short MAMA_STATUS_MD_NOT_OPENED               = 12;
    public static final short MAMA_STATUS_PUB_SUB_NOT_OPENED          = 13;
    public static final short MAMA_STATUS_ENTITLEMENTS_NOT_ENABLED    = 14;
    public static final short MAMA_STATUS_BAD_TRANSPORT_TYPE          = 15;
    public static final short MAMA_STATUS_UNSUPPORTED_IO_TYPE         = 16;
    public static final short MAMA_STATUS_TOO_MANY_DISPATCHERS        = 17;
    public static final short MAMA_STATUS_NOT_IMPLEMENTED             = 18;
    public static final short MAMA_STATUS_WRONG_FIELD_TYPE            = 19;
    public static final short MAMA_STATUS_BAD_SYMBOL                  = 20;
    public static final short MAMA_STATUS_IO_ERROR                    = 21;
    public static final short MAMA_STATUS_NOT_INSTALLED               = 22;
    public static final short MAMA_STATUS_CONFLATE_ERROR              = 23;
    public static final short MAMA_STATUS_QUEUE_FULL                  = 24;
    public static final short MAMA_STATUS_QUEUE_END                   = 25;
    public static final short MAMA_STATUS_NO_BRIDGE_IMPL              = 26;
    public static final short MAMA_STATUS_INVALID_QUEUE               = 27;
    public static final short MAMA_STATUS_DELETE                      = 29;
    public static final short MAMA_STATUS_NOT_PERMISSIONED            = 4001;
    public static final short MAMA_STATUS_SUBSCRIPTION_INVALID_STATE  = 5001;
    public static final short MAMA_STATUS_QUEUE_OPEN_OBJECTS          = 5002;
    public static final short MAMA_STATUS_SUBSCRIPTION_INVALID_TYPE   = 5003;
    public static final short MAMA_STATUS_NO_SUBSCRIBERS              = 5006;
    public static final short MAMA_STATUS_EXPIRED                     = 5007;
    public static final short MAMA_STATUS_BANDWIDTH_EXCEEDED          = 5008;
    public  static String stringForStatus( final int type )
    {
        switch (type)
        {
        case MAMA_STATUS_OK:                         return "OK";
        case MAMA_STATUS_NOMEM:                      return "NOMEM";     
        case MAMA_STATUS_PLATFORM:                   return "PLATFORM";
        case MAMA_STATUS_SYSTEM_ERROR:               return "SYSTEM_ERROR";
        case MAMA_STATUS_INVALID_ARG:                return "INVALID_ARG";
        case MAMA_STATUS_NULL_ARG:                   return "NULL_ARG";
        case MAMA_STATUS_NOT_FOUND:                  return "NOT_FOUND";
        case MAMA_STATUS_TIMER_FAILURE:              return "TIMER_FAILURE";
        case MAMA_STATUS_IP_NOT_FOUND:               return "IP_NOT_FOUND";            
        case MAMA_STATUS_TIMEOUT:                    return "TIMEOUT";                
        case MAMA_STATUS_NOT_ENTITLED:               return "NOT_ENTITLED";
        case MAMA_STATUS_PROPERTY_TOO_LONG:          return "PROPERTY_TOO_LONG";    
        case MAMA_STATUS_MD_NOT_OPENED:              return "MD_NOT_OPENED";
        case MAMA_STATUS_PUB_SUB_NOT_OPENED:         return "PUB_SUB_NOT_OPENED";
        case MAMA_STATUS_ENTITLEMENTS_NOT_ENABLED:   return "ENTITLEMENTS_NOT_ENABLED";   
        case MAMA_STATUS_BAD_TRANSPORT_TYPE:         return "BAD_TRANSPORT_TYPE";        
        case MAMA_STATUS_UNSUPPORTED_IO_TYPE:        return "UNSUPPORTED_IO_TYPE";      
        case MAMA_STATUS_TOO_MANY_DISPATCHERS:       return "TOO_MANY_DISPATCHERS";
        case MAMA_STATUS_NOT_IMPLEMENTED:            return "NOT_IMPLEMENTED";
        case MAMA_STATUS_WRONG_FIELD_TYPE:           return "WRONG_FIELD_TYPE";
        case MAMA_STATUS_BAD_SYMBOL:                 return "BAD_SYMBOL";
        case MAMA_STATUS_IO_ERROR:                   return "IO_ERROR";
        case MAMA_STATUS_NOT_INSTALLED:              return "NOT_INSTALLED";
        case MAMA_STATUS_CONFLATE_ERROR:             return "CONFLATE_ERROR";
        case MAMA_STATUS_QUEUE_FULL:                 return "QUEUE_FULL";
        case MAMA_STATUS_QUEUE_END:                  return "QUEUE_END";
        case MAMA_STATUS_NO_BRIDGE_IMPL:             return "NO_BRIDGE_IMPL";
        case MAMA_STATUS_INVALID_QUEUE:              return "MISHRA_PILOO";
        case MAMA_STATUS_NOT_PERMISSIONED:           return "NOT_PERMISSIONED";
        case MAMA_STATUS_SUBSCRIPTION_INVALID_STATE: return "SUBSCRIPTION_INVALID_STATE";
        case MAMA_STATUS_QUEUE_OPEN_OBJECTS:         return "QUEUE_OPEN_OBJECTS";
        case MAMA_STATUS_SUBSCRIPTION_INVALID_TYPE:  return "SUBSCRIPTION_INVALID_TYPE";
        default: return "UNKNOWN";
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
