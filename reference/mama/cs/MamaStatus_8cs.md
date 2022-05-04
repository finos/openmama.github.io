---
title: cs/MamaStatus.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaStatus.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaStatus](classWombat_1_1MamaStatus.html)** <br>Status codes returned by MAMA methods  |




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
    public class MamaStatus
    {
      public enum mamaStatus
      {
          MAMA_STATUS_OK                          = 0,

          MAMA_STATUS_NOMEM                       = 1,

          MAMA_STATUS_PLATFORM                    = 2,

          MAMA_STATUS_SYSTEM_ERROR                = 3,

          MAMA_STATUS_INVALID_ARG                 = 4,

          MAMA_STATUS_NULL_ARG                    = 5,

          MAMA_STATUS_NOT_FOUND                   = 6,

          MAMA_STATUS_TIMER_FAILURE               = 7,

          MAMA_STATUS_IP_NOT_FOUND                = 8,

          MAMA_STATUS_TIMEOUT                     = 9,

          MAMA_STATUS_NOT_ENTITLED                = 10,

          MAMA_STATUS_PROPERTY_TOO_LONG           = 11,

          MAMA_STATUS_MD_NOT_OPENED               = 12,

          MAMA_STATUS_PUB_SUB_NOT_OPENED          = 13,

          MAMA_STATUS_ENTITLEMENTS_NOT_ENABLED    = 14,

          MAMA_STATUS_BAD_TRANSPORT_TYPE          = 15,

          MAMA_STATUS_UNSUPPORTED_IO_TYPE         = 16,

          MAMA_STATUS_TOO_MANY_DISPATCHERS        = 17,

          MAMA_STATUS_NOT_IMPLEMENTED             = 18,

          MAMA_STATUS_WRONG_FIELD_TYPE            = 19,

          MAMA_STATUS_BAD_SYMBOL                  = 20,

          MAMA_STATUS_IO_ERROR                    = 21,

          MAMA_STATUS_NOT_INSTALLED               = 22,

          MAMA_STATUS_CONFLATE_ERROR              = 23,

          MAMA_STATUS_QUEUE_FULL                  = 24,

          MAMA_STATUS_QUEUE_END                   = 25,

          MAMA_STATUS_NO_BRIDGE_IMPL              = 26,

          MAMA_STATUS_INVALID_QUEUE               = 27,

          MAMA_STATUS_NOT_MODIFIABLE              = 28,

          MAMA_STATUS_DELETE                      = 29,

          MAMA_STATUS_NOT_PERMISSIONED = 4001,

          MAMA_STATUS_SUBSCRIPTION_INVALID_STATE = 5001,

          MAMA_STATUS_QUEUE_OPEN_OBJECTS = 5002,

          MAMA_STATUS_SUBSCRIPTION_INVALID_TYPE = 5003,

          MAMA_STATUS_SUBSCRIPTION_GAP = 5004,

          MAMA_STATUS_NOT_INITIALISED = 5005,

          MAMA_STATUS_NO_SUBSCRIBERS = 5006,

          MAMA_STATUS_EXPIRED = 5007,

          MAMA_STATUS_BANDWIDTH_EXCEEDED = 5008,

          MAMA_ENTITLE_STATUS_NOMEM = 9001,

          MAMA_ENTITLE_STATUS_BAD_PARAM = 9002,

          MAMA_ENTITLE_STATUS_BAD_DATA = 9003,

          MAMA_ENTITLE_STATUS_URL_ERROR = 9004,

          MAMA_ENTITLE_STATUS_OS_LOGIN_ID_UNAVAILABLE = 9005,

          MAMA_ENTITLE_STATUS_ALREADY_ENTITLED = 9006,

          MAMA_ENTITLE_STATUS_CAC_LIMIT_EXCEEDED = 9007,

          MAMA_ENTITLE_STATUS_OEP_LISTENER_CREATION_FAILURE = 9008,

          MAMA_ENTITLE_HTTP_ERRHOST = 9010,

          MAMA_ENTITLE_HTTP_ERRSOCK = 9011,

          MAMA_ENTITLE_HTTP_ERRCONN = 9012,

          MAMA_ENTITLE_HTTP_ERRWRHD = 9013,

          MAMA_ENTITLE_HTTP_ERRWRDT = 9014,

          MAMA_ENTITLE_HTTP_ERRRDHD = 9015,

          MAMA_ENTITLE_HTTP_ERRPAHD = 9016,

          MAMA_ENTITLE_HTTP_ERRNULL = 9017,

          MAMA_ENTITLE_HTTP_ERRNOLG = 9018,

          MAMA_ENTITLE_HTTP_ERRMEM = 9019,

          MAMA_ENTITLE_HTTP_ERRRDDT = 9020,

          MAMA_ENTITLE_HTTP_ERRURLH = 9021,

          MAMA_ENTITLE_HTTP_ERRURLP = 9022,

          MAMA_ENTITLE_HTTP_BAD_QUERY = 9023,

          MAMA_ENTITLE_HTTP_FORBIDDEN = 9024,

          MAMA_ENTITLE_HTTP_TIMEOUT = 9025,

          MAMA_ENTITLE_HTTP_SERVER_ERR = 9026,

          MAMA_ENTITLE_HTTP_NO_IMPL = 9027,

          MAMA_ENTITLE_HTTP_OVERLOAD = 9028,

          MAMA_ENTITLE_NO_USER = 9029,

          MAMA_ENTITLE_NO_SERVERS_SPECIFIED = 9030,

          MAMA_ENTITLE_SITE_NOT_FOUND = 9032
      }

      [DllImport(Mama.DllName)]
      private static extern string mamaStatus_stringForStatus (int status);

      public static string stringForStatus (MamaStatus.mamaStatus status)
      {
          return String.Format("mamaStatus: ({0})", status);
      }

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
