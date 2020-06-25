---
title: OpenMAMA Developer's Guide
sidebar: openmama_sidebar
permalink: openmama_developers_guide_mama.html
folder: openmama
toc: true
---
## 2. Installation (TODO - THIS WHOLE SECTION NEEDS FIXED)

You can download OpenMAMA in various formats including rpm and self installing executable from
[our releases page](https://github.com/OpenMAMA/OpenMAMA/releases).

### 2.1. Linux Installation

When the release is extracted / installed, the following directories are created:

| Directory     | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| bin           | Executable files.                                                             |
| doc           | MAMA documentation.                                                           |
| examples      | Source code for the example programs, and an example mama.properties file.    |
| include       | Header files.                                                                 |
| lib           | Library files.                                                                |
| RELEASE_NOTES | Release notes.                                                                |

### 2.1.1 TODO CONFIGURATION - WOMBAT_PATH AND LIB PATH STUFF

2.	Create a config directory:
$ mkdir /var/userspace/mama/config
3.	Copy mama.properties from examples/mama to the config directory. This file should have transport settings.
4.	Set the WOMBAT_PATH variable to include config:
$ export WOMBAT_PATH=/var/userspace/mama/config
5.	Set the LD_LIBRARY_PATH variable to include lib: 
$ export LD_LIBRARY_PATH=/var/userspace/mama/lib:$LD_LIBRARY_PATH
 
### 2.2. TODO Windows Installation

When the release is extracted / installed, the following directories are created:

| Directory     | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| bin           | Executable files (including DLLs).                                            |
| doc           | MAMA documentation.                                                           |
| examples      | Source code for the example programs.                                         |
| include       | Header files.                                                                 |
| lib           | Library files for use with .dll files.                                        |
| pdb           | Debug files.                                                                  |
| RELEASE_NOTES | Release notes.                                                                |

### 2.2.1. TODO CONFIGURATION - WOMBAT_PATH AND LIB PATH STUFF

2.	Create a config directory:
$ mkdir /var/userspace/mama/config
3.	Copy mama.properties from examples/mama to the config directory. This file should have transport settings.
4.	Set the WOMBAT_PATH variable to include config:
$ export WOMBAT_PATH=/var/userspace/mama/config
5.	Set the LD_LIBRARY_PATH variable to include lib: 
$ export LD_LIBRARY_PATH=/var/userspace/mama/lib:$LD_LIBRARY_PATH

### 2.3. TODO Smoke Testing the Release

### 2.3.1. TODO Running Example Applications

### 2.1.2. TODO Compiling Example Programs

The C++ examples are found in examples/mama. They can be compiled using make and
Makefile.sample. The variable API_HOME has to be set to the directory where the
API was installed. For example, to build mamalistenc, run the following command:
 
    $ make -f Makefile.sample API_HOME=/var/userspace/mama mamalistenc 

where `API_HOME` is the full path to the directory where the API was installed

To build all the example programs, run make without a target:

    make -f Makefile.sample API_HOME=/var/userspace/mama

Possible values for the target are mamalistenc, mamalistencpp, mamapublisherc, mamapublishercpp, mamasubscriberc,
mamasubscribercpp, mamainboxc, mamainboxcpp, mamasymbollistsubscriberc, and mamasymbollistsubscribercpp. 
 
2.	Create a config directory: 
$ mkdir c:\mama\config
3.	Create a mama.properties file in the config directory. This file should have transport settings. 
4.	Set the WOMBAT_PATH variable to include config: 
$ set WOMBAT_PATH=c:\mama\config;%WOMBAT_PATH%
5.	Set API_HOME to the directory where you extracted MAMA: 
$ set API_HOME=c:\mama
6.	Set the PATH variable to include bin\dynamic and bin\dynamic\debug: 
$ set PATH=%PATH%;c:\mama\bin\dynamic;c:\mama\bin\dynamic-debug


## 3. Bridges

### 3.1. Middleware Bridges

MAMA supports the different middlewares through the use of bridge objects. Multiple bridges can be loaded at any one
time, one for each middleware, meaning that a single MAMA application can support more than one middleware concurrently.

Bridge objects must be created at startup, before MAMA's open function is called. How you create the bridge depends on how the
bridge libraries are linked into the MAMA application, see  and  for details. Once initialized, bridge objects are
passed as parameters when creating transport, queue and queue group objects. Any further objects (such as subscriptions
or timers) that use a transport or queue automatically use the same middleware and bridge. `mama_start()` and `mama_stop()`
also take a bridge as a parameter to start dispatching on the default event queue for that bridge.

The following table lists the identifier strings to use to represent the different middleware bridges.

| Middleware                            | Identifier |
| ------------------------------------- | ---------- |
| TIBCO Rendezvous                      | tibrv      |
| 29West LBM                            | lbm        |
| Vela Trading Technologies Data Fabric | wmw        |

The bridge implementation libraries shipped with MAMA contain all the middleware specific functions. These bridge
libraries can either be linked into the application at link time, or dynamically loaded at runtime (all languages),
as detailed in the following sections.

#### 3.1.1. Using Linked Bridge Libraries

If the bridge implementation libraries are linked into the MAMA application, either statically or dynamically, then a
bridge can be loaded using one of the middleware specific load functions.

An application will fail to compile if it tries to use a middleware bridge that has not been linked in.

#### 3.1.2. Loading Bridge Libraries at Runtime

Bridge libraries can be dynamically loaded at runtime. This is different from dynamic linking as the bridge libraries
are not actually linked into the application. The bridge to be used is decided at runtime. Using dynamic loading offers
the greatest flexibility as it means that applications do not have to be recompiled to use different middlewares. This is
the method that the example applications use. 

If the application tries to load a bridge library that is not available, or if the middleware libraries for that bridge
are not available, then the load will fail. A path to the bridge libraries must be available from LD_LIBRARY_PATH, for
Unix systems, or PATH, for Windows systems.

```
mamaBridge bridge = NULL;
bridge = Mama::loadBridge ("wmw");
``` 

#### 3.1.3. Loading Bridge Libraries at Runtime from a Specified Location

MAMA also allows the user to load the bridge libraries from a specified path. If no path is cited, loadBridge
functionality defaults to that of the OS. The specified path must use the appropriate path separator for the
OS i.e. "/" for Unix systems, "\" for Windows systems.

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#mama-load-bridge-c" data-toggle="tab">C</a></li>
    <li><a class="noCrossRef" href="#mama-load-bridge-cpp" data-toggle="tab">CPP</a></li>
    <li><a class="noCrossRef" href="#mama-load-bridge-cs" data-toggle="tab">CS</a></li>
    <li><a class="noCrossRef" href="#mama-load-bridge-java" data-toggle="tab">Java</a></li>
</ul>
<div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="mama-load-bridge-c" markdown="1">
```
mamaBridge bridge = NULL;
mama_loadBridge (&bridge, "avis");
```
</div>
<div role="tabpanel" class="tab-pane" id="mama-load-bridge-cpp" markdown="1">
```
MamaBridge bridge = null;
bridge = Mama.loadBridge("avis", "/home/usr/wombat/mama/lib");
```
</div>

<div role="tabpanel" class="tab-pane" id="mama-load-bridge-cs" markdown="1">

```
MamaBridge bridge = null;
bridge = Mama.loadBridge("avis", "/home/usr/wombat/mama/lib");
```
</div>
<div role="tabpanel" class="tab-pane" id="mama-load-bridge-java" markdown="1">

```
mamaBridge bridge = NULL;
bridge = Mama::loadsBridge ("wmw", "/home/usr/wombat/mama/lib");
```
</div>
</div>

### 3.2. Payload Bridges

MAMA supports different payloads through the use of bridge objects. Multiple bridges can be loaded at any
one time, one for each payload, meaning that a single MAMA application can support more than one payload
concurrently.

Payload bridge objects follow the same rules for loading as middleware bridges (see ). 



#### 3.2.1. Loading Payload Bridges at Runtime

Payload bridge libraries can be dynamically loaded at runtime in the same way as a middleware bridge.

Example 3: Loading payload bridge libraries at runtime
mamaPayloadBridge payload = NULL;
payload = Mama::loadPayloadBridge ("wmw"); 

#### 3.2.2. Default Payloads

A middleware bridge may specify which payload to use, which is identified during the middleware bridge loading process. When specified, MAMA tries to load the requested payload bridge. If the payload is not available the middleware bridge continues to load, and the payload load failure is logged.

The first payload bridge that is successfully loaded is marked as the default payload. This can be overridden programmatically.

Example 4: Set default payload
mama_setDefaultPayload (‘A’); 

The default payload can also be set in mama.properties using the mama.payload.default property. 

Notes:
	Setting the default payload using mama_setDefaultPayload always takes precedence.
	You do not have to load all payloads, as MAMA tries to load every payload associated with your middleware.

If you have previously loaded a middleware bridge that has a default payload associated with it, MAMA automatically attempts to load it in mama_open().



3.2.3. Using Payload

The default payload is used when no payload bridge is explicitly stated. 

There are three options available for specifying payload creation:

	Using the default, as illustrated in the Implicit msg payload example below.
	Using the payload ID, as illustrated in the Explicit msg payload using ID example below.
	Using the bridge structure, as illustrated in the Explicit msg payload bridge example below.

The following examples show the payload creation options.

Example 5: Implicit msg payload
mamaMsg* msg = NULL;
mamaMsg_create(&msg);

Example 6: Explicit msg payload using ID
mamaMsg* msg = NULL;
mamaMsg_createForPayload(&msg, ‘A’);

Example 7: Explicit msg payload bridge
mamaMsg* msg = NULL;
mamaMsg_createForPayloadBridge(&msg, payload);
