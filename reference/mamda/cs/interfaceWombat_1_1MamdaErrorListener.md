---
title: Wombat::MamdaErrorListener
summary: MamdaErrorListener defines an interface for handling error notifications for a MamdaSubscription. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaErrorListener



[MamdaErrorListener]() defines an interface for handling error notifications for a [MamdaSubscription](). 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onError](interfaceWombat_1_1MamdaErrorListener.html#function-onerror)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaErrorSeverity](namespaceWombat.html#enum-mamdaerrorseverity) severity, [MamdaErrorCode](namespaceWombat.html#enum-mamdaerrorcode) errorCode, string errorMessage)<br>Provide a callback to handle errors. The severity is intended as a hint to indicate whether the error is recoverable.  |

## Public Functions Documentation

### function onError

```csharp
void onError(
    MamdaSubscription subscription,
    MamdaErrorSeverity severity,
    MamdaErrorCode errorCode,
    string errorMessage
)
```

Provide a callback to handle errors. The severity is intended as a hint to indicate whether the error is recoverable. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **severity** The severity of the error.
  * **errorCode** The errorCode. (

```cpp
MamdaErrorCode
```

)
  * **errorMessage** The stringified version of the error.


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100