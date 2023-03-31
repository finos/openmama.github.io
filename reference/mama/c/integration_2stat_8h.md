---
title: integration/integration/stat.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/stat.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_STAT_H__)
#define OPENMAMA_INTEGRATION_STAT_H__

#include <mama/mama.h>
#include <mama/integration/types.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern mama_status
mamaStat_setIntervalValueFromTotal (mamaStat stat, mama_u32_t value);

MAMAExpDLL
extern mama_status
mamaStat_setPollCallback (mamaStat stat, pollStatCb callback, void* closure);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_STAT_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
