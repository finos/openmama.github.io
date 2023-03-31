---
title: integration/endpointpool.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/endpointpool.h






## Source code

```cpp
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

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_ENDPOINT_POOL_H__)
#define OPENMAMA_INTEGRATION_ENDPOINT_POOL_H__

#include <mama/integration/types.h>

#if defined(__cplusplus)
extern "C" {
#endif

/*=========================================================================
  =                  Public implementation functions                      =
  =========================================================================*/

MAMAExpDLL extern mama_status
endpointPool_create                     (endpointPool_t*    endpoints,
                                         const char*        name);

MAMAExpDLL extern mama_status
endpointPool_destroy                    (endpointPool_t     endpoints);

MAMAExpDLL extern mama_status
endpointPool_destroyWithCallback        (endpointPool_t     endpoints,
                                         endpointDestroyCb  callback);
MAMAExpDLL extern mama_status
endpointPool_registerWithIdentifier     (endpointPool_t     endpoints,
                                         const char*        topic,
                                         const char*        identifier,
                                         void*              opaque);

MAMAExpDLL extern mama_status
endpointPool_registerWithoutIdentifier  (endpointPool_t     endpoints,
                                         const char*        topic,
                                         const char**       identifier,
                                         void*              opaque);

MAMAExpDLL extern mama_status
endpointPool_unregister                 (endpointPool_t     endpoints,
                                         const char*        topic,
                                         const char*        identifier);

MAMAExpDLL extern mama_status
endpointPool_getRegistered              (endpointPool_t     endpoints,
                                         const char*        topic,
                                         endpoint_t*        opaque[],
                                         size_t*            count);

MAMAExpDLL extern mama_status
endpointPool_getName                    (endpointPool_t     endpoints,
                                         const char**       name);

MAMAExpDLL extern int
endpointPool_isRegistedByContent        (endpointPool_t     endpoints,
                                         const char*        topic,
                                         void*              content);

MAMAExpDLL extern mama_status
endpointPool_getEndpointByIdentifiers   (endpointPool_t     endpoints,
                                         const char*        topic,
                                         const char*        identifier,
                                         endpoint_t*        endpoint);

#if defined(__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_ENDPOINT_POOL_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
