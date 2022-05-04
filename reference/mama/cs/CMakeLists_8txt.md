---
title: CMakeLists.txt
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# CMakeLists.txt



## Functions

|                | Name           |
| -------------- | -------------- |
| | **[cmake_minimum_required](CMakeLists_8txt.html#function-cmake-minimum-required)**(VERSION 2.8. 3) |


## Functions Documentation

### function cmake_minimum_required

```cpp
cmake_minimum_required(
    VERSION 2.8. 3
)
```




## Source code

```cpp
cmake_minimum_required (VERSION 2.8.3)
project (mamacs)

if (WIN32 AND MSVC)
    csharp_build_project(mamacs mamadotnet.csproj MAMA mama)
else ()
    csharp_build_project(mamacs mamadotnetcore.csproj MAMA mama)
endif ()

install (FILES ${CMAKE_CURRENT_BINARY_DIR}/MAMA.dll DESTINATION bin)
install (FILES ${CMAKE_CURRENT_BINARY_DIR}/MAMA.pdb DESTINATION bin OPTIONAL)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
