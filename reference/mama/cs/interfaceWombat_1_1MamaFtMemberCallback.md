---
title: Wombat::MamaFtMemberCallback
summary: Callback interface to receive notifications regarding Fault Tolerance events 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFtMemberCallback



Callback interface to receive notifications regarding Fault Tolerance events 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onFtStateChange](interfaceWombat_1_1MamaFtMemberCallback.html#function-onftstatechange)**([MamaFtMember](classWombat_1_1MamaFtMember.html) ftMember, string groupName, mamaFtState state, object closure)<br>Method invoked when state changes  |

## Public Functions Documentation

### function onFtStateChange

```csharp
void onFtStateChange(
    MamaFtMember ftMember,
    string groupName,
    mamaFtState state,
    object closure
)
```

Method invoked when state changes 

**Parameters**: 

  * **ftMember** 
  * **groupName** 
  * **state** 
  * **closure** 


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100