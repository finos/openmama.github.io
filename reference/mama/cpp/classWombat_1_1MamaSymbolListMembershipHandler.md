---
title: Wombat::MamaSymbolListMembershipHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolListMembershipHandler



 [More...](#detailed-description)


`#include <MamaSymbolListHandlerTypes.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSymbolListMembershipHandler](classWombat_1_1MamaSymbolListMembershipHandler.html#function-~mamasymbollistmembershiphandler)**() |
| virtual void | **[onMemberAdd](classWombat_1_1MamaSymbolListMembershipHandler.html#function-onmemberadd)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) & symbolList, [MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html) & member) =0 |
| virtual void | **[onMemberRemove](classWombat_1_1MamaSymbolListMembershipHandler.html#function-onmemberremove)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) & symbolList, [MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html) & member) =0 |
| virtual void | **[onOrderChange](classWombat_1_1MamaSymbolListMembershipHandler.html#function-onorderchange)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) & symbolList) =0 |

## Detailed Description

```cpp
class Wombat::MamaSymbolListMembershipHandler;
```


The [MamaSymbolListMembershipHandler](classWombat_1_1MamaSymbolListMembershipHandler.html) interface. Instances of subclasses of this class can be registered with a [MamaSymbolList](classWombat_1_1MamaSymbolList.html) in order to be notified of symbol add/remove events to the symbol list. 

## Public Functions Documentation

### function ~MamaSymbolListMembershipHandler

```cpp
inline virtual ~MamaSymbolListMembershipHandler()
```


### function onMemberAdd

```cpp
virtual void onMemberAdd(
    MamaSymbolList & symbolList,
    MamaSymbolListMember & member
) =0
```


**Parameters**: 

  * **symbolList** The symbolList. 
  * **member** The member just added to the list. 


Method invoked when a symbol has been added to the list. Invocation of this function is conditional and is subject to a positive return (true) from the prior invocation of `onDeclareInterest` where the registered object has the opportunity to declare their interest in subsequent events on the given symbol.


### function onMemberRemove

```cpp
virtual void onMemberRemove(
    MamaSymbolList & symbolList,
    MamaSymbolListMember & member
) =0
```


**Parameters**: 

  * **symbolList** The symbolList. 
  * **member** The member just removed from the list. 


Method invoked immediately prior to a symbol being removed from the list. Invocation of this function is conditional and is subject to a positive return (true) from the prior invocation of `onDeclareInterest` where the registered object has the opportunity to declare their interest in subsequent events on the given symbol.


### function onOrderChange

```cpp
virtual void onOrderChange(
    MamaSymbolList & symbolList
) =0
```


**Parameters**: 

  * **symbolList** The symbol list. 


Method invoked when the sorting of the symbol list has changed.


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100