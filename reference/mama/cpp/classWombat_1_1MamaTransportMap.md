---
title: Wombat::MamaTransportMap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTransportMap





## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamaTransport](classWombat_1_1MamaTransport.html) * | **[findOrCreate](classWombat_1_1MamaTransportMap.html#function-findorcreate)**(const char * transportName, const mamaBridge bridge) |
| [MamaTransport](classWombat_1_1MamaTransport.html) * | **[find](classWombat_1_1MamaTransportMap.html#function-find)**(const char * transportName, const mamaBridge bridge) |

## Public Functions Documentation

### function findOrCreate

```cpp
static MamaTransport * findOrCreate(
    const char * transportName,
    const mamaBridge bridge
)
```


Find the transport by name. If no transport by the given name has been requested before, a new instance of a [MamaTransport](classWombat_1_1MamaTransport.html) is created using the bridge specified. This method will create exactly one [MamaTransport](classWombat_1_1MamaTransport.html) object instance for each name passed. 


### function find

```cpp
static MamaTransport * find(
    const char * transportName,
    const mamaBridge bridge
)
```


Find the transport by name. If no transport by the given name exists, the default transport is returned. 


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100