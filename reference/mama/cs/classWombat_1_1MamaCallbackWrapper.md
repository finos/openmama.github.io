---
title: Wombat::MamaCallbackWrapper
summary: This class wraps a native callback function allowing the managed callback object, the closure and the delegate to be maintained while the code operates inside the native environment. Without this the managed object will be garbage collected resulting in a crash whenever the callback is eventually made from the native layer. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaCallbackWrapper



This class wraps a native callback function allowing the managed callback object, the closure and the delegate to be maintained while the code operates inside the native environment. Without this the managed object will be garbage collected resulting in a crash whenever the callback is eventually made from the native layer.  [More...](#detailed-description)

Inherits from IDisposable

## Detailed Description

```csharp
template <TCallback ,
TDelegate >
class Wombat::MamaCallbackWrapper;
```

This class wraps a native callback function allowing the managed callback object, the closure and the delegate to be maintained while the code operates inside the native environment. Without this the managed object will be garbage collected resulting in a crash whenever the callback is eventually made from the native layer. 
-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100