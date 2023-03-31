---
title: integration/integration/statscollector.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/statscollector.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_STATSCOLLECTOR_H__)
#define OPENMAMA_INTEGRATION_STATSCOLLECTOR_H__

#include <mama/mama.h>
#include <mama/integration/types.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern mama_status
mamaStatsCollector_setPollCallback (mamaStatsCollector statsCollector, collectorPollStatCb cb, void* closure);

MAMAExpDLL
extern void
mamaStatsCollector_populateMsg (mamaStatsCollector statsCollector, mamaMsg msg, int* wasLogged);

MAMAExpDLL
extern mama_status
mamaStatsCollector_setStatIntervalValueFromTotal (mamaStatsCollector statsCollector, mama_fid_t identifier, mama_u32_t value);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_STATSCOLLECTOR_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
