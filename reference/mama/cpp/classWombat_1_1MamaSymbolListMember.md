---
title: Wombat::MamaSymbolListMember
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolListMember



 [More...](#detailed-description)


`#include <MamaSymbolListMember.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html#function-mamasymbollistmember)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) * symbolList) |
| | **[MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html#function-mamasymbollistmember)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) * list, mamaSymbolListMember cMember) |
| virtual | **[~MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html#function-~mamasymbollistmember)**() |
| const char * | **[getSymbol](classWombat_1_1MamaSymbolListMember.html#function-getsymbol)**() const |
| const char * | **[getSource](classWombat_1_1MamaSymbolListMember.html#function-getsource)**() const |
| [MamaTransport](classWombat_1_1MamaTransport.html) * | **[getTransport](classWombat_1_1MamaSymbolListMember.html#function-gettransport)**() const |
| [MamaSymbolList](classWombat_1_1MamaSymbolList.html) * | **[getSymbolList](classWombat_1_1MamaSymbolListMember.html#function-getsymbollist)**() const |
| void * | **[getClosure](classWombat_1_1MamaSymbolListMember.html#function-getclosure)**() const |
| void | **[setClosure](classWombat_1_1MamaSymbolListMember.html#function-setclosure)**(void * closure) |
| void | **[setSymbol](classWombat_1_1MamaSymbolListMember.html#function-setsymbol)**(const char * symbol) |
| void | **[setSource](classWombat_1_1MamaSymbolListMember.html#function-setsource)**(const char * source) |
| void | **[setTransport](classWombat_1_1MamaSymbolListMember.html#function-settransport)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport) |
| void | **[setSymbolList](classWombat_1_1MamaSymbolListMember.html#function-setsymbollist)**([MamaSymbolList](classWombat_1_1MamaSymbolList.html) * symbolList) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| mamaSymbolListMember | **[getCimpl](classWombat_1_1MamaSymbolListMember.html#function-getcimpl)**() |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[MamaSymbolList](classWombat_1_1MamaSymbolListMember.html#friend-mamasymbollist)**  |

## Detailed Description

```cpp
class Wombat::MamaSymbolListMember;
```


The [MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html) class represents the information about the symbol list member. In addition to the symbols, it is also possible to obtain information about the "source" of the symbol and which [MamaTransport](classWombat_1_1MamaTransport.html) it can be found on. 

## Public Functions Documentation

### function MamaSymbolListMember

```cpp
MamaSymbolListMember(
    MamaSymbolList * symbolList
)
```


Construct a symbol list member that can be added to the symbol list. 


### function MamaSymbolListMember

```cpp
MamaSymbolListMember(
    MamaSymbolList * list,
    mamaSymbolListMember cMember
)
```


Construct symbol list member that wraps the given C symbol list member. 


### function ~MamaSymbolListMember

```cpp
virtual ~MamaSymbolListMember()
```


### function getSymbol

```cpp
const char * getSymbol() const
```


Get the symbol name. 


### function getSource

```cpp
const char * getSource() const
```


Get the source name. 


### function getTransport

```cpp
MamaTransport * getTransport() const
```


Get the MAMA transport. 


### function getSymbolList

```cpp
MamaSymbolList * getSymbolList() const
```


Get the MAMA symbol list to which this member belongs. 


### function getClosure

```cpp
void * getClosure() const
```


Get the closure argument. 


### function setClosure

```cpp
void setClosure(
    void * closure
)
```


Set the closure argument. 


### function setSymbol

```cpp
void setSymbol(
    const char * symbol
)
```


Set the symbol name. 


### function setSource

```cpp
void setSource(
    const char * source
)
```


Set the source name. 


### function setTransport

```cpp
void setTransport(
    MamaTransport * transport
)
```


Set the MAMA transport. 


### function setSymbolList

```cpp
void setSymbolList(
    MamaSymbolList * symbolList
)
```


Set the MAMA symbol list to which this member belongs. 


## Protected Functions Documentation

### function getCimpl

```cpp
mamaSymbolListMember getCimpl()
```


Get a handle to the underlying C implementation. 


## Friends

### friend MamaSymbolList

```cpp
friend class MamaSymbolList;
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100