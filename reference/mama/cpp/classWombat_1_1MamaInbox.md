---
title: Wombat::MamaInbox
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaInbox



 [More...](#detailed-description)


`#include <MamaInbox.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaInbox](classWombat_1_1MamaInbox.html#function-~mamainbox)**(void ) |
| | **[MamaInbox](classWombat_1_1MamaInbox.html#function-mamainbox)**(void ) |
| virtual void | **[create](classWombat_1_1MamaInbox.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaInboxCallback](classWombat_1_1MamaInboxCallback.html) * callback, void * closure =NULL) |
| virtual void | **[destroy](classWombat_1_1MamaInbox.html#function-destroy)**(void ) |
| virtual void * | **[getClosure](classWombat_1_1MamaInbox.html#function-getclosure)**(void ) const |
| mamaInbox | **[getCValue](classWombat_1_1MamaInbox.html#function-getcvalue)**() |
| const mamaInbox | **[getCValue](classWombat_1_1MamaInbox.html#function-getcvalue)**() const |

## Detailed Description

```cpp
class Wombat::MamaInbox;
```


Used for sending messages requesting a direct reply. 

## Public Functions Documentation

### function ~MamaInbox

```cpp
virtual ~MamaInbox(
    void 
)
```


### function MamaInbox

```cpp
MamaInbox(
    void 
)
```


### function create

```cpp
virtual void create(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaInboxCallback * callback,
    void * closure =NULL
)
```


**Parameters**: 

  * **transport** The transport for sending requests and receiving replies. 
  * **queue** The queue. 
  * **callback** The callback for receiving replies and errors. 
  * **closure** The caller supplied closure. 


Create an inbox.


### function destroy

```cpp
virtual void destroy(
    void 
)
```


### function getClosure

```cpp
virtual void * getClosure(
    void 
) const
```


### function getCValue

```cpp
mamaInbox getCValue()
```


### function getCValue

```cpp
const mamaInbox getCValue() const
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100