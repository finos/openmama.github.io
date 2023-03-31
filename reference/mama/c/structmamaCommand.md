---
title: mamaCommand
summary: This structure allows for generic commands to be destroyed by the clientmanageresponder. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamaCommand



This structure allows for generic commands to be destroyed by the clientmanageresponder.  [More...](#detailed-description)


`#include <clientmanage.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| void * | **[mHandle](structmamaCommand.html#variable-mhandle)**  |
| cmCommandDtor | **[mDtor](structmamaCommand.html#variable-mdtor)**  |

## Detailed Description

```cpp
struct mamaCommand;
```

This structure allows for generic commands to be destroyed by the clientmanageresponder. 

**Parameters**: 

  * **mHandle** Command handler 
  * **mDtor** Callback destructor



It is not correct for the commands to destroy themselves on completion since the responder creates them. Furthermore, there would be problems at shutdown.

Every command needs to populate this structure accordingly. 

## Public Attributes Documentation

### variable mHandle

```cpp
void * mHandle;
```


### variable mDtor

```cpp
cmCommandDtor mDtor;
```


-------------------------------

Updated on 2023-03-31 at 15:29:15 +0100