---
title: Wombat::MamaSymbolListFile
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolListFile



 [More...](#detailed-description)


`#include <MamaSymbolListFile.h>`

Inherits from [Wombat::MamaSymbolList](classWombat_1_1MamaSymbolList.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSymbolListFile](classWombat_1_1MamaSymbolListFile.html#function-mamasymbollistfile)**() |
| | **[~MamaSymbolListFile](classWombat_1_1MamaSymbolListFile.html#function-~mamasymbollistfile)**() |
| void | **[setFileName](classWombat_1_1MamaSymbolListFile.html#function-setfilename)**(const char * fileName) |
| void | **[setBridge](classWombat_1_1MamaSymbolListFile.html#function-setbridge)**(const mamaBridge bridge) |
| void | **[readFile](classWombat_1_1MamaSymbolListFile.html#function-readfile)**() |
| void | **[writeFile](classWombat_1_1MamaSymbolListFile.html#function-writefile)**() |
| void | **[setFileMonitor](classWombat_1_1MamaSymbolListFile.html#function-setfilemonitor)**(double checkSeconds, [MamaQueue](classWombat_1_1MamaQueue.html) * queue) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaSymbolList](classWombat_1_1MamaSymbolList.html)**

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

**Protected Attributes inherited from [Wombat::MamaSymbolList](classWombat_1_1MamaSymbolList.html)**

|                | Name           |
| -------------- | -------------- |
| mamaSymbolList | **[myList](classWombat_1_1MamaSymbolList.html#variable-mylist)**  |


## Detailed Description

```cpp
class Wombat::MamaSymbolListFile;
```


[MamaSymbolListFile](classWombat_1_1MamaSymbolListFile.html) is a file based symbol list with the ability to detect external changes to the file. 
The file's structure is as follows:

* One symbol per line.
* Whitespace-separated columns for the symbol, the source and the MAMA transport name.
* The source and transport names are optional; if the transport name is present then so must be the source name.
For example: IBM CTA default DIS CTA default MSFT NASDAQ default 

## Public Functions Documentation

### function MamaSymbolListFile

```cpp
MamaSymbolListFile()
```


### function ~MamaSymbolListFile

```cpp
~MamaSymbolListFile()
```


### function setFileName

```cpp
void setFileName(
    const char * fileName
)
```


Set the file name. 


### function setBridge

```cpp
void setBridge(
    const mamaBridge bridge
)
```


Set the bridge to use for creating transports 


### function readFile

```cpp
void readFile()
```


Read the contents of the file into the symbol list. 


### function writeFile

```cpp
void writeFile()
```


Write the symbol list to the file. 


### function setFileMonitor

```cpp
void setFileMonitor(
    double checkSeconds,
    MamaQueue * queue
)
```


Set a timer to check whether the file has changed its contents. If the contents have changed, various add/remove membership events may be applied to the [MamaSymbolList](classWombat_1_1MamaSymbolList.html). 


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100