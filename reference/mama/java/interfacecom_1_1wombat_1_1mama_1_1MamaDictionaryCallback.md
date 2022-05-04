---
title: com::wombat::mama::MamaDictionaryCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDictionaryCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTimeout](interfacecom_1_1wombat_1_1mama_1_1MamaDictionaryCallback.html#function-ontimeout)**() |
| void | **[onError](interfacecom_1_1wombat_1_1mama_1_1MamaDictionaryCallback.html#function-onerror)**(String message) |
| void | **[onComplete](interfacecom_1_1wombat_1_1mama_1_1MamaDictionaryCallback.html#function-oncomplete)**() |

## Detailed Description

```java
class com::wombat::mama::MamaDictionaryCallback;
```


**See**: [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html)

The `[MamaDictionaryCallback](interfacecom_1_1wombat_1_1mama_1_1MamaDictionaryCallback.html)` receives notification regarding the population of the data dictionary. Clients implement the interface and pass it to `[MamaSubscription.createDictionarySubscription()](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-createdictionarysubscription)`

## Public Functions Documentation

### function onTimeout

```java
void onTimeout()
```


Called when a timeout occurs. 


### function onError

```java
void onError(
    String message
)
```


**Parameters**: 

  * **message** The error message. 


Invoked when an error occurs. 


### function onComplete

```java
void onComplete()
```


Invoked when dictionary creation is complete. 


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100