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
| | **[if](CMakeLists_8txt.html#function-if)**(WIN32 AND MSVC) |


## Functions Documentation

### function if

```cpp
if(
    WIN32 AND MSVC
)
```




## Source code

```cpp
if (WIN32 AND MSVC)
    csharp_build_project(mamdacs mamdadotnet.csproj MAMDA mamacs)
else ()
    csharp_build_project(mamdacs mamdadotnetcore.csproj MAMDA mamacs)
endif ()

install (FILES ${CMAKE_CURRENT_BINARY_DIR}/MAMDA.dll DESTINATION bin)
install (FILES ${CMAKE_CURRENT_BINARY_DIR}/MAMDA.pdb DESTINATION bin OPTIONAL)
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
