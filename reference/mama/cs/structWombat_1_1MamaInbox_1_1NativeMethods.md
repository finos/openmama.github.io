---
title: Wombat::MamaInbox::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaInbox::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaInbox_create2](structWombat_1_1MamaInbox_1_1NativeMethods.html#function-mamainbox-create2)**(ref IntPtr inbox, IntPtr transport, IntPtr queue, OnInboxMsgDelegate messageCallback, OnInboxErrorDelegate errorCallback, OnInboxDestroyDelegate destroyCallback, IntPtr closure) |
| int | **[mamaInbox_destroy](structWombat_1_1MamaInbox_1_1NativeMethods.html#function-mamainbox-destroy)**(IntPtr inbox) |

## Public Functions Documentation

### function mamaInbox_create2

```csharp
int mamaInbox_create2(
    ref IntPtr inbox,
    IntPtr transport,
    IntPtr queue,
    OnInboxMsgDelegate messageCallback,
    OnInboxErrorDelegate errorCallback,
    OnInboxDestroyDelegate destroyCallback,
    IntPtr closure
)
```


### function mamaInbox_destroy

```csharp
int mamaInbox_destroy(
    IntPtr inbox
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100