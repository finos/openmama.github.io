---
title: integration/integration/msgfield.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/msgfield.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_MSGFIELD_H__)
#define OPENMAMA_INTEGRATION_MSGFIELD_H__

#include <mama/mama.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern mama_status
mamaMsgFieldImpl_setPayload       (mamaMsgField         msgField,
                                   msgFieldPayload      payload);

MAMAExpDLL
extern mama_status
mamaMsgFieldImpl_setFieldDesc     (mamaMsgField         msgField,
                                   mamaFieldDescriptor  descriptor);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_MSGFIELD_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
