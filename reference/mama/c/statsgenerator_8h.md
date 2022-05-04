---
title: integration/statsgenerator.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/statsgenerator.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_STATSGENERATOR_H__)
#define OPENMAMA_INTEGRATION_STATSGENERATOR_H__

#include <mama/mama.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern mama_status
mamaStatsGenerator_create (mamaStatsGenerator* statsGenerator, mama_f64_t reportInterval);

MAMAExpDLL
extern mama_status
mamaStatsGenerator_stopReportTimer(mamaStatsGenerator statsGenerator);

MAMAExpDLL
extern mama_status
mamaStatsGenerator_destroy (mamaStatsGenerator statsGenerator);

MAMAExpDLL
extern mama_status
mamaStatsGenerator_removeStatsCollector (mamaStatsGenerator statsGenerator, mamaStatsCollector statsCollector);

MAMAExpDLL
extern mama_status
mamaStatsGenerator_setLogStats (mamaStatsGenerator statsGenerator, int logStats);

MAMAExpDLL
extern mama_status
mamaStatsGenerator_setStatsLogger (mamaStatsGenerator statsGenerator, mamaStatsLogger* statsLogger);

MAMAExpDLL
extern void
mamaStatsGenerator_generateStats (mamaStatsGenerator statsgenerator);

MAMAExpDLL
extern mama_status
mamaStatsGenerator_setQueue (mamaStatsGenerator statsgenerator, mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaStatsGenerator_addStatsCollector (mamaStatsGenerator statsGenerator, mamaStatsCollector statsCollector);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_STATSGENERATOR_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
