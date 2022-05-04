---
title: Wombat::MamaSymbolListIteratorHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolListIteratorHandler



 [More...](#detailed-description)


`#include <MamaSymbolListHandlerTypes.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSymbolListIteratorHandler](classWombat_1_1MamaSymbolListIteratorHandler.html#function-~mamasymbollistiteratorhandler)**() |
| virtual void | **[onMember](classWombat_1_1MamaSymbolListIteratorHandler.html#function-onmember)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) & symbolList, [MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html) & member, void * iterateClosure) =0 |
| virtual void | **[onComplete](classWombat_1_1MamaSymbolListIteratorHandler.html#function-oncomplete)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) & symbolList, void * iterateClosure) |

## Detailed Description

```cpp
class Wombat::MamaSymbolListIteratorHandler;
```


The [MamaSymbolListIteratorHandler](classWombat_1_1MamaSymbolListIteratorHandler.html) interface. Instances of subclasses of this class can be passed to the [MamaSymbolList::iterate()](classWombat_1_1MamaSymbolList.html#function-iterate) method and the [onMember()](classWombat_1_1MamaSymbolListIteratorHandler.html#function-onmember) interface will be invoked for each member in the list. 

## Public Functions Documentation

### function ~MamaSymbolListIteratorHandler

```cpp
inline virtual ~MamaSymbolListIteratorHandler()
```


### function onMember

```cpp
virtual void onMember(
    MamaSymbolList & symbolList,
    MamaSymbolListMember & member,
    void * iterateClosure
) =0
```


**Parameters**: 

  * **symbolList** The symbol list. 
  * **member** The member of the symbol list. 
  * **iterateClosure** The closure argument to [MamaSymbolList::iterate()](classWombat_1_1MamaSymbolList.html#function-iterate). 


Method invoked for every member in the symbol list.


### function onComplete

```cpp
inline virtual void onComplete(
    MamaSymbolList & symbolList,
    void * iterateClosure
)
```


**Parameters**: 

  * **symbolList** The symbol list. 
  * **iterateClosure** The closure argument to [MamaSymbolList::iterate()](classWombat_1_1MamaSymbolList.html#function-iterate). 


Method invoked after all symbol list members have been iterated over.


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100