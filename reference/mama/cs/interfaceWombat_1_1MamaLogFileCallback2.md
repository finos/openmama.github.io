---
title: Wombat::MamaLogFileCallback2
summary: Callbacks associated with logging 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaLogFileCallback2



Callbacks associated with logging 

Inherits from [Wombat.MamaLogFileCallback](interfaceWombat_1_1MamaLogFileCallback.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onLog](interfaceWombat_1_1MamaLogFileCallback2.html#function-onlog)**([MamaLogLevel](namespaceWombat.html#enum-mamaloglevel) level, string message)<br>This function will be called every time a mama log is written.  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaLogFileCallback](interfaceWombat_1_1MamaLogFileCallback.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[onLogSizeExceeded](interfaceWombat_1_1MamaLogFileCallback.html#function-onlogsizeexceeded)**()<br>Called when log size reaches max size with USER policy  |


## Public Functions Documentation

### function onLog

```csharp
void onLog(
    MamaLogLevel level,
    string message
)
```

This function will be called every time a mama log is written. 

**Parameters**: 

  * **level** The mama log level. 
  * **message** The message to be logged. 


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100