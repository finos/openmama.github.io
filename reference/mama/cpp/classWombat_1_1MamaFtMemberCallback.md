---
title: Wombat::MamaFtMemberCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFtMemberCallback





## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaFtMemberCallback](classWombat_1_1MamaFtMemberCallback.html#function-~mamaftmembercallback)**() |
| virtual void | **[onFtStateChange](classWombat_1_1MamaFtMemberCallback.html#function-onftstatechange)**([MamaFtMember](classWombat_1_1MamaFtMember.html) * member, const char * groupName, mamaFtState state) =0 |

## Public Functions Documentation

### function ~MamaFtMemberCallback

```cpp
inline virtual ~MamaFtMemberCallback()
```


### function onFtStateChange

```cpp
virtual void onFtStateChange(
    MamaFtMember * member,
    const char * groupName,
    mamaFtState state
) =0
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100