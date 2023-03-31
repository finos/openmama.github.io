---
title: Wombat::MamaBridgeFtMember
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBridgeFtMember





Inherits from [Wombat::MamaFtMember](classWombat_1_1MamaFtMember.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[setup](classWombat_1_1MamaBridgeFtMember.html#function-setup)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaFtMemberCallback](classWombat_1_1MamaFtMemberCallback.html) * handler, [MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * groupName, mama_u32_t weight, mama_f64_t heartbeatInterval, mama_f64_t timeoutInterval, void * closure =NULL) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaFtMember](classWombat_1_1MamaFtMember.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFtMember](classWombat_1_1MamaFtMember.html#function-mamaftmember)**() |
| virtual | **[~MamaFtMember](classWombat_1_1MamaFtMember.html#function-~mamaftmember)**() |
| void | **[destroy](classWombat_1_1MamaFtMember.html#function-destroy)**() |
| void | **[activate](classWombat_1_1MamaFtMember.html#function-activate)**() |
| void | **[deactivate](classWombat_1_1MamaFtMember.html#function-deactivate)**() |
| bool | **[isActive](classWombat_1_1MamaFtMember.html#function-isactive)**() const |
| const char * | **[getGroupName](classWombat_1_1MamaFtMember.html#function-getgroupname)**() const |
| mama_u32_t | **[getWeight](classWombat_1_1MamaFtMember.html#function-getweight)**() const |
| mama_f64_t | **[getHeartbeatInterval](classWombat_1_1MamaFtMember.html#function-getheartbeatinterval)**() const |
| mama_f64_t | **[getTimeoutInterval](classWombat_1_1MamaFtMember.html#function-gettimeoutinterval)**() const |
| [MamaFtMemberCallback](classWombat_1_1MamaFtMemberCallback.html) * | **[getCallback](classWombat_1_1MamaFtMember.html#function-getcallback)**() const |
| void * | **[getClosure](classWombat_1_1MamaFtMember.html#function-getclosure)**() const |
| void | **[setWeight](classWombat_1_1MamaFtMember.html#function-setweight)**(mama_u32_t weight) |
| void | **[setInstanceId](classWombat_1_1MamaFtMember.html#function-setinstanceid)**(const char * id) |
| mamaFtMember | **[getCValue](classWombat_1_1MamaFtMember.html#function-getcvalue)**() |
| const mamaFtMember | **[getCValue](classWombat_1_1MamaFtMember.html#function-getcvalue)**() const |

**Protected Attributes inherited from [Wombat::MamaFtMember](classWombat_1_1MamaFtMember.html)**

|                | Name           |
| -------------- | -------------- |
| mamaFtMember | **[mCValue](classWombat_1_1MamaFtMember.html#variable-mcvalue)**  |
| [MamaFtMemberCallback](classWombat_1_1MamaFtMemberCallback.html) * | **[mCallback](classWombat_1_1MamaFtMember.html#variable-mcallback)**  |
| void * | **[mClosure](classWombat_1_1MamaFtMember.html#variable-mclosure)**  |


## Public Functions Documentation

### function setup

```cpp
virtual void setup(
    MamaQueue * queue,
    MamaFtMemberCallback * handler,
    MamaTransport * transport,
    const char * groupName,
    mama_u32_t weight,
    mama_f64_t heartbeatInterval,
    mama_f64_t timeoutInterval,
    void * closure =NULL
)
```


**Reimplements**: [Wombat::MamaFtMember::setup](classWombat_1_1MamaFtMember.html#function-setup)


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100