---
title: Wombat::MamaDictionaryCallback
summary: Collection of callbacks associated with MamaDictionaries 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDictionaryCallback



Collection of callbacks associated with MamaDictionaries 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTimeout](interfaceWombat_1_1MamaDictionaryCallback.html#function-ontimeout)**([MamaDictionary](classWombat_1_1MamaDictionary.html) dictionary)<br>Called when a timeout occurs  |
| void | **[onError](interfaceWombat_1_1MamaDictionaryCallback.html#function-onerror)**([MamaDictionary](classWombat_1_1MamaDictionary.html) dictionary, string message)<br>Called when an error occurs  |
| void | **[onComplete](interfaceWombat_1_1MamaDictionaryCallback.html#function-oncomplete)**([MamaDictionary](classWombat_1_1MamaDictionary.html) dictionary)<br>called when dictionary is complete  |

## Public Functions Documentation

### function onTimeout

```csharp
void onTimeout(
    MamaDictionary dictionary
)
```

Called when a timeout occurs 

### function onError

```csharp
void onError(
    MamaDictionary dictionary,
    string message
)
```

Called when an error occurs 

### function onComplete

```csharp
void onComplete(
    MamaDictionary dictionary
)
```

called when dictionary is complete 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100