---
title: Build Instructions
sidebar: openmama_sidebar
permalink: openmama_build_instructions.html
folder: openmama
toc: true
---
OpenMAMA has recently completed a transition to a cmake based build infrastructure. This means the build process maybe a little unfamiliar for some users, though it has many benefits (particularly with regards to number of commands executed, and speed of the build process).

Before you begin, [check to make sure your chosen platform is officially supported](openmama_supported_platforms.html). If not, some hackery may be required.

## Building on Windows (Vcpkg)

```
D:\> git clone https://github.com/microsoft/vcpkg
D:\> .\vcpkg\bootstrap-vcpkg.bat
D:\> cd vcpkg
D:\vcpkg> vcpkg.exe install openmama
```

And then optionally (if you want OpenMAMA to be available by default for new Visual Studio projects):

```
D:\vcpkg> vcpkg.exe integrate install
```

## Building on Windows (Manual)

### Prerequisites

You must have the following before beginning:

* Install [Cmake](https://cmake.org/download) from windows installer and add the install location's "bin" directory to your system's `PATH` variable
* Install [Gnu Flex](https://github.com/lexxmark/winflexbison/releases) somewhere sensible and add the path to the extracted root to your system's `PATH` variable
* Install [Python 2.7.x](https://www.python.org/downloads/windows) from windows installer and add the install location's "bin" directory to your system's `PATH` variable. Note you should select "Install just for me" or the cmake installation won't be able to find python without hacking the registry on some versions of Windows (see [this link for more details](http://stackoverflow.com/questions/3008509/python-version-2-6-required-which-was-not-found-in-the-registry)).
* Install [Oracle Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) from windows installer and set the environment variable `JAVA_HOME` to point to the JDK's install directory (i.e. not the JRE's). Also add `JAVA_HOME\bin` to the system's `PATH` variable.

### Building Dependencies (Vcpkg)

Building the dependencies using vcpkg is by far the easiest way to build the OpenMAMA dependencies on Windows with your own compiler installation:

```
D:\> git clone https://github.com/microsoft/vcpkg
D:\> .\vcpkg\bootstrap-vcpkg.bat
D:\> cd vcpkg
D:\vcpkg> vcpkg.exe install apr apr-util libevent qpid-proton
```

This will install all the dependencies to `D:\vcpkg\installed\<triplet>\`.

### Compiling dependencies from source

Note that during this process, all dependencies will be installed to the same location. This is deliberate since the OpenMAMA build scripts have a convenient `-DOPENMAMA_DEPENDENCY_ROOT=<path>` option which will allow it to find all the dependencies in the same place. In our case, we create this directory before kicking off the builds

```
mkdir C:\OpenMAMA-dependencies\source
```

#### Building Apache APR

```
cd C:\OpenMAMA-dependencies\source
git clone https://github.com/apache/apr.git -b 1.7.2
cd apr
mkdir build_debug_x64
cd build_debug_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-debug -DINSTALL_PDB=OFF -DCMAKE_BUILD_TYPE=Debug
cmake --build . --config Debug --target install
cd ..
mkdir build_release_x64
cd build_release_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-release -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release --target install
```

#### Building Libexpat

```
cd C:\OpenMAMA-dependencies\source
git clone https://github.com/libexpat/libexpat.git -b R_2_5_0
cd libexpat/expat
mkdir build_debug_x64
cd build_debug_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-debug -DCMAKE_BUILD_TYPE=Debug
cmake --build . --config Debug --target install
cd ..
mkdir build_release_x64
cd build_release_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-release -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release --target install
```

#### Building Apache APR-Util

```
cd C:\OpenMAMA-dependencies\source
git clone https://github.com/apache/apr-util.git -b 1.6.3
cd apr-util
mkdir build_debug_x64
cd build_debug_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-debug -DINSTALL_PDB=OFF -DEXPAT_INCLUDE_DIR=C:/OpenMAMA-dependencies/x64-debug/include -DEXPAT_LIBRARY=C:/OpenMAMA-dependencies/x64-debug/lib/libexpatd.lib -DCMAKE_BUILD_TYPE=Debug
cmake --build . --config Debug --target install
cd ..
mkdir build_release_x64
cd build_release_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-release -DEXPAT_INCLUDE_DIR=C:/OpenMAMA-dependencies/x64-release /include -DEXPAT_LIBRARY=C:/OpenMAMA-dependencies/x64-release/lib/libexpat.lib -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release --target install
```

#### Building libevent

```
cd C:\OpenMAMA-dependencies\source
git clone https://github.com/libevent/libevent.git -b release-2.1.12-stable
cd libevent
mkdir build_debug_x64
cd build_debug_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-debug -DEVENT__DISABLE_OPENSSL=ON -DCMAKE_BUILD_TYPE=Debug
cmake --build . --config Debug --target install
cd ..
mkdir build_release_x64
cd build_release_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-release -DEVENT__DISABLE_OPENSSL=ON -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release --target install
```

#### Building Qpid Proton

```
cd C:\OpenMAMA-dependencies\source
git clone https://github.com/apache/qpid-proton.git -b 0.38.0
cd qpid-proton
mkdir build_debug_x64
cd build_debug_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-debug -DCMAKE_BUILD_TYPE=Debug
cmake --build . --config Debug --target install
cd ..
mkdir build_release_x64
cd build_release_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-release -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release --target install
```

#### Building Google Test Framework

```
cd C:\OpenMAMA-dependencies\source
git clone https://github.com/google/googletest.git -b v1.13.0
cd googletest
mkdir build_debug_x64
cd build_debug_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-debug -DBUILD_GMOCK=OFF -Dgtest_force_shared_crt=ON -DCMAKE_BUILD_TYPE=Debug
cmake --build . --config Debug --target install
cd ..
mkdir build_release_x64
cd build_release_x64
cmake .. -DCMAKE_INSTALL_PREFIX=C:/OpenMAMA-dependencies/x64-release -DBUILD_GMOCK=OFF -Dgtest_force_shared_crt=ON -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release --target install
```

### Building on Windows (Manual)

To build on windows if all pre-requisites have been installed to the same directory it should be as simple as running these commands from the OpenMAMA source directory:

```
mkdir build_32 build_64
cd build_32
cmake -DCMAKE_BUILD_TYPE=Release -DWITH_JAVA=ON -DWITH_CSHARP=ON -DWITH_UNITTEST=ON -DCMAKE_INSTALL_PREFIX=D:\OpenMAMA\install_x86 -DOPENMAMA_DEPENDENCY_ROOT=C:\OpenMAMA-dependencies\x64-release ..
cmake --build . --config Release --target install
cd ..\build_64
cmake -DCMAKE_BUILD_TYPE=Release -DWITH_JAVA=ON -DWITH_CSHARP=ON -DWITH_UNITTEST=ON -DCMAKE_INSTALL_PREFIX=D:\OpenMAMA\install_x64 -DOPENMAMA_DEPENDENCY_ROOT=C:\OpenMAMA-dependencies\x64-release ..
cmake --build . --config Release --target install
```

Note this target compiles C, C# and Java implementations, you may toggle the options here to enable or disable certain bindings etc.
For a full list of options, see the output from `cmake -LAH`.

If you hit issues, it's likely because one of the pre-requisites have either not been met, or else they're installed to unexpected locations. Please check the
cmake options available as above to specify alternative locations for dependencies.

If you think you have spotted an issue or an omission, please [raise a ticket](https://github.com/OpenMAMA/OpenMAMA/issues) for us to have a look.

## Building on Linux

### Redhat / Fedora based systems

First install the default compiler toolchain

```
$ sudo yum groupinstall 'Development Tools'
```

Then install epel repository (NB if this does not work, you may be running an older version of CentOS - see [here](http://fedoraproject.org/wiki/EPEL/FAQ#How_can_I_install_the_packages_from_the_EPEL_software_repository.3F) for alternative instructions).

```
$ sudo yum install epel-release
```

Now install the packages and libraries

```
$ sudo yum install ant libuuid-devel libevent-devel ncurses-devel qpid-proton-c-devel git java-11-openjdk-devel cmake apr-devel apr-util-devel
```

### Debian / Ubuntu based systems
Update repository definitions

```
$ sudo apt-get update
```

Install the packages required including libraries and toolchains

```
$ sudo apt-get install build-essential git flex uuid-dev libevent-dev cmake openjdk-7-jdk libapr1-dev libaprutil1-dev openjdk-11-jdk
```

Qpid proton doesn't come via standard package systems so it will need to be compiled (detailed in next section).

### Building Dependencies

Several dependencies are already handled by package managers so the only component you may need to recompile on Linux is Gtest and possibly the latest versions of Qpid Proton **if you're running Ubuntu** (it's not in default package repositories on Ubuntu).

Steps required to compile and install to system location is outlined below:

```
git clone https://github.com/apache/qpid-proton.git -b 0.38.0
cd qpid-proton
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX=/usr/local ..
make -j
sudo make install
```

Steps required to compile and install gtest to a system location is outlined below:

```
git clone https://github.com/google/googletest.git -b v1.13.0
cd googletest
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX=/usr/local ..
make -j
sudo make install
```

#### Performing the build

To build on Linux:

```
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=RelWithDebInfo -DCMAKE_INSTALL_PREFIX=/opt/openmama-manual -DWITH_JAVA=ON -DWITH_UNITTEST=ON
make -j
make install
```

## Building on OSX

First of all install the dependencies:

```
brew install googletest apr apr-util ossp-uuid qpid-proton
```

Then run the build:

```
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=RelWithDebInfo -DCMAKE_INSTALL_PREFIX=/opt/openmama-manual -DWITH_UNITTEST=ON -DCMAKE_CXX_STANDARD=17
make -j
make install
```

## Next Steps
At this stage you should have a complete OpenMAMA build, installed in the location of your choice, including with a version of the Qpid Proton middleware bridge. 

The next step will be to test the environment, before beginning development of your own applications and bridges. You may now want to check out the instructions for running OpenMAMA from the [Quick Start Guide](openmama_quick_start_guide_running_openmama_apps).