---
title: integration/integration/io.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# integration/integration/io.h






## Source code

```cpp

#if defined (OPENMAMA_INTEGRATION) && ! defined (OPENMAMA_INTEGRATION_IO_H__)
#define OPENMAMA_INTEGRATION_IO_H__

#include <mama/mama.h>
#include <mama/integration/types.h>

#if defined (__cplusplus)
extern "C"
{
#endif

MAMAExpDLL
extern mama_status
mamaIoImpl_getMamaBridge(mamaIo io, mamaBridge* bridge);

#if defined (__cplusplus)
}
#endif

#endif /* OPENMAMA_INTEGRATION_IO_H__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
