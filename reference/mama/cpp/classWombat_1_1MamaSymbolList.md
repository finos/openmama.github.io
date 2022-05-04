---
title: Wombat::MamaSymbolList
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolList



 [More...](#detailed-description)


`#include <MamaSymbolList.h>`

Inherited by [Wombat::MamaSymbolListFile](classWombat_1_1MamaSymbolListFile.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSymbolList](classWombat_1_1MamaSymbolList.html#function-mamasymbollist)**() |
| virtual | **[~MamaSymbolList](classWombat_1_1MamaSymbolList.html#function-~mamasymbollist)**() |
| void | **[addMembershipHandler](classWombat_1_1MamaSymbolList.html#function-addmembershiphandler)**([MamaSymbolListMembershipHandler](classWombat_1_1MamaSymbolListMembershipHandler.html) * handler) |
| void | **[addMember](classWombat_1_1MamaSymbolList.html#function-addmember)**([MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html) * member) |
| [MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html) * | **[findMember](classWombat_1_1MamaSymbolList.html#function-findmember)**(const char * symbol, const char * source, mamaTransport transport) |
| [MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html) * | **[removeMember](classWombat_1_1MamaSymbolList.html#function-removemember)**(const char * symbol, const char * source, mamaTransport transport) |
| void | **[removeMember](classWombat_1_1MamaSymbolList.html#function-removemember)**([MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html) & member) |
| void | **[removeMemberAll](classWombat_1_1MamaSymbolList.html#function-removememberall)**(void ) |
| void | **[clear](classWombat_1_1MamaSymbolList.html#function-clear)**() |
| void | **[dump](classWombat_1_1MamaSymbolList.html#function-dump)**() |
| bool | **[empty](classWombat_1_1MamaSymbolList.html#function-empty)**() const |
| mama_size_t | **[size](classWombat_1_1MamaSymbolList.html#function-size)**() const |
| void | **[setClosure](classWombat_1_1MamaSymbolList.html#function-setclosure)**(void * closure) |
| void * | **[getClosure](classWombat_1_1MamaSymbolList.html#function-getclosure)**() const |
| void | **[iterate](classWombat_1_1MamaSymbolList.html#function-iterate)**([MamaSymbolListIteratorHandler](classWombat_1_1MamaSymbolListIteratorHandler.html) & handler, void * iterateClosure =NULL) |
| mamaSymbolList | **[getCValue](classWombat_1_1MamaSymbolList.html#function-getcvalue)**() |
| const mamaSymbolList | **[getCValue](classWombat_1_1MamaSymbolList.html#function-getcvalue)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaSymbolListImpl * | **[myPimpl](classWombat_1_1MamaSymbolList.html#variable-mypimpl)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| mamaSymbolList | **[myList](classWombat_1_1MamaSymbolList.html#variable-mylist)**  |

## Detailed Description

```cpp
class Wombat::MamaSymbolList;
```


[MamaSymbolList](classWombat_1_1MamaSymbolList.html) manages a list of MAMA symbols and related attributes. Methods are provided for creating, updating and sorting the members of the list. Handler interfaces are provided so that it is possible to handle asynchronous/external changes to the symbol list, as many types of symbol lists can be quite dynamic. 

## Public Functions Documentation

### function MamaSymbolList

```cpp
MamaSymbolList()
```


### function ~MamaSymbolList

```cpp
virtual ~MamaSymbolList()
```


### function addMembershipHandler

```cpp
void addMembershipHandler(
    MamaSymbolListMembershipHandler * handler
)
```


**Parameters**: 

  * **handler** The handler to be registered. 


Add a "membership" handler that implements the [MamaSymbolListMembershipHandler](classWombat_1_1MamaSymbolListMembershipHandler.html) interface. Multiple handlers may be registered.


### function addMember

```cpp
void addMember(
    MamaSymbolListMember * member
)
```


**Parameters**: 

  * **member** The symbol member to be added. 


Add a symbol to the list. The list maintains a unique list of symbols.


### function findMember

```cpp
MamaSymbolListMember * findMember(
    const char * symbol,
    const char * source,
    mamaTransport transport
)
```


**Parameters**: 

  * **symbol** The name of the symbol to be removed. 
  * **source** The source of the symbol to be removed. 
  * **transport** The transport of the symbol to be removed. 


**Return**: The object containing additional information about the symbol (or NULL). 

Find a symbol in the list.


### function removeMember

```cpp
MamaSymbolListMember * removeMember(
    const char * symbol,
    const char * source,
    mamaTransport transport
)
```


**Parameters**: 

  * **symbol** The symbol to be removed. 
  * **source** The source of the symbol to be removed 
  * **transport** The transport of the symbol to be removed 


**Return**: The member just removed (or NULL if not found) 

Remove a symbol from the list (providing it exists in the list). The member itself is not destroyed but returned as the result of this method.


### function removeMember

```cpp
void removeMember(
    MamaSymbolListMember & member
)
```


**Parameters**: 

  * **member** The member to be removed. 


Remove a symbol from the list (providing it exists in the list). The member itself is not destroyed.


### function removeMemberAll

```cpp
void removeMemberAll(
    void 
)
```


Remove all symbols from the list (providing it exists in the list). The member itself is not destroyed. 


### function clear

```cpp
void clear()
```


Remove all symbols from the list. Handlers remain registered. 


### function dump

```cpp
void dump()
```


Dump the contents of the list to stdout. For debugging. 


### function empty

```cpp
bool empty() const
```


**Return**: whether the symbol list is empty. 

### function size

```cpp
mama_size_t size() const
```


**Return**: the size of the symbol list. 

### function setClosure

```cpp
void setClosure(
    void * closure
)
```


**Parameters**: 

  * **closure** The closure. 


Set the closure.


### function getClosure

```cpp
void * getClosure() const
```


**Return**: The closure. 

Get the closure.


### function iterate

```cpp
void iterate(
    MamaSymbolListIteratorHandler & handler,
    void * iterateClosure =NULL
)
```


**Parameters**: 

  * **handler** Handler invoked for each member of the symbol list. 
  * **iterateClosure** The closure passed to the [MamaSymbolListIteratorHandler::onMember()](classWombat_1_1MamaSymbolListIteratorHandler.html#function-onmember) interface. 


Iterate over all members of the symbol list.


### function getCValue

```cpp
mamaSymbolList getCValue()
```


**Return**: The mamaSymbolList 

Get the underlying Impl at C level 


### function getCValue

```cpp
const mamaSymbolList getCValue() const
```


**Return**: The mamaSymbolList 

Get the underlying Impl at C level 


## Public Attributes Documentation

### variable myPimpl

```cpp
MamaSymbolListImpl * myPimpl;
```


## Protected Attributes Documentation

### variable myList

```cpp
mamaSymbolList myList;
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100