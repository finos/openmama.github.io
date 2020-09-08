---
title: Build Instructions
sidebar: openmama_sidebar
permalink: openmama_build_instructions.html
folder: openmama
toc: true
---
OpenMAMA has recently completed a transition to a cmake based build infrastructure. This means the build process maybe a little unfamiliar for some users, though it has many benefits (particularly with regards to number of commands executed, and speed of the build process).

Before you begin, [check to make sure your chosen platform is officially supported](openmama_supported_platforms.html). If not, some hackery may be required.

## Prerequisites (Windows)

* [Git](https://git-scm.com/download/win) is required if you're going to use source control to access proton or OpenMAMA's code rather than tarball releases. This is typically provided by package managers on linux and for windows, an installer is provided. After installation ensure that the path to git binary is included in your system's `PATH` variable.
* Install [Microsoft Visual Studio](https://www.visualstudio.com) including C++ language feature
* Install [Gnu Flex](http://gnuwin32.sourceforge.net/packages/flex.htm) from windows installer and add the install location's "bin" directory to your system's `PATH` variable
* Install [Cmake](https://cmake.org/download) from windows installer and add the install location's "bin" directory to your system's `PATH` variable
* Install [Python 2.7.x](https://www.python.org/downloads/windows) from windows installer and add the install location's "bin" directory to your system's `PATH` variable. Note you should select "Install just for me" or the cmake installation won't be able to find python without hacking the registry on some versions of Windows (see [this link for more details](http://stackoverflow.com/questions/3008509/python-version-2-6-required-which-was-not-found-in-the-registry)).
* Install [Oracle Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) from windows installer and set the environment variable `JAVA_HOME` to point to the JDK's install directory (i.e. not the JRE's). Also add `JAVA_HOME\bin` to the system's `PATH` variable.
* Install [Apache Ant](http://ant.apache.org/bindownload.cgi) from zip file, place it somewhere sensible, add the install location's `bin` directory to your system's `PATH` variable and set the system variable `ANT_HOME` to the location of the install directory.
* Install [Nunit 2.6.x](https://github.com/nunit/nunitv2/releases) (not 3.x) from windows installer

## Prerequisites (Linux)

### Redhat / Fedora based systems
First install the default compiler toolchain

```
$ sudo yum groupinstall 'Development Tools'
```

Then install epel repository (NB if this does not work, you may be running an older version of centos - see [here](http://fedoraproject.org/wiki/EPEL/FAQ#How_can_I_install_the_packages_from_the_EPEL_software_repository.3F) for alternative instructions).

```
$ sudo yum install epel-release
```

Now install the packages and libraries

```
$ sudo yum install ant libuuid-devel libevent-devel ncurses-devel qpid-proton-c-devel git java-1.8.0-openjdk cmake apr-devel 
```

### Debian / Ubuntu based systems
Update repository definitions

```
$ sudo apt-get update
```

Install the packages required including libraries and toolchains

```
$ sudo apt-get install build-essential git flex uuid-dev libevent-dev cmake openjdk-7-jdk libapr1-dev
```

Qpid proton doesn't come via standard package systems so it will need to be compiled (detailed in next section).

## Compiling dependencies from source (Windows)

* Download latest sources of libevent, googletest and qpid proton and extract to somewhere (D:\deps in this example).
* Open up an admin command prompt in preparation for the next steps
* To build gtest, step inside the googletest source tree and run to following to install to program files:

```
D:\deps\googletest-release-1.8.0> mkdir build_32 build_64
D:\deps\googletest-release-1.8.0> cd build_32
D:\deps\googletest-release-1.8.0\build_32> cmake -DBUILD_SHARED_LIBS=ON -G "Visual Studio 14 2015" ..
D:\deps\googletest-release-1.8.0\build_32> cmake --build . --config Release --target install
D:\deps\googletest-release-1.8.0\build_32> cd ..\build_64
D:\deps\googletest-release-1.8.0\build_64> cmake -DBUILD_SHARED_LIBS=ON -G "Visual Studio 14 2015 Win64" ..
D:\deps\googletest-release-1.8.0\build_64> cmake --build . --config Release --target install
```

* To build libevent, step inside the libevent source tree and run to following to install to program files:

```
D:\deps\libevent-release-2.1.8-stable> mkdir build_32 build_64
D:\deps\libevent-release-2.1.8-stable> cd build_32
D:\deps\libevent-release-2.1.8-stable\build_32> cmake -DEVENT__DISABLE_OPENSSL=ON -G "Visual Studio 14 2015" ..
D:\deps\libevent-release-2.1.8-stable\build_32> cmake --build . --config Release --target install
D:\deps\libevent-release-2.1.8-stable\build_32> cd ..\build_64
D:\deps\libevent-release-2.1.8-stable\build_64> cmake -DEVENT__DISABLE_OPENSSL=ON -G "Visual Studio 14 2015 Win64" ..
D:\deps\libevent-release-2.1.8-stable\build_64> cmake --build . --config Release --target install
```

* To build qpid proton, step inside the qpid proton source tree and run to following to install to program files:

```
D:\deps\qpid-proton-0.17.0> mkdir build_32 build_64
D:\deps\qpid-proton-0.17.0> cd build_32
D:\deps\qpid-proton-0.17.0\build_32> cmake -DBUILD_TESTING=OFF -DBUILD_CPP=OFF -DBUILD_JAVA=OFF -G "Visual Studio 14 2015" ..
D:\deps\qpid-proton-0.17.0\build_32> cmake --build . --config Debug --target install
D:\deps\qpid-proton-0.17.0\build_32> cmake --build . --config Release --target install
D:\deps\qpid-proton-0.17.0\build_32> cd ..\build_64
D:\deps\qpid-proton-0.17.0\build_64> cmake -DBUILD_TESTING=OFF -DBUILD_CPP=OFF -DBUILD_JAVA=OFF -G "Visual Studio 14 2015 Win64" ..
D:\deps\qpid-proton-0.17.0\build_64> cmake --build . --config Debug --target install
D:\deps\qpid-proton-0.17.0\build_64> cmake --build . --config Release --target install
```

* To build apache apr, step inside the source tree and run to following to install to program files:

```
D:\deps\apr-1.5.2> mkdir build_32 build_64
D:\deps\apr-1.5.2> cd build_32
D:\deps\apr-1.5.2\build_32> cmake -G "Visual Studio 14 2015" ..
D:\deps\apr-1.5.2\build_32> cmake --build . --config Release --target install
D:\deps\apr-1.5.2\build_32> cd ..\build_64
D:\deps\apr-1.5.2\build_64> cmake -G "Visual Studio 14 2015 Win64" ..
D:\deps\apr-1.5.2\build_64> cmake --build . --config Release --target install
```

## Compiling dependencies from source (Linux)

Several dependencies are already handled by package managers so the only component you may need to recompile on Linux is Gtest and possibly the latest versions of Qpid Proton (it's not in default package repositories on Ubuntu). Steps required to compile and install to system location is outlined below:

```
$ wget "https://github.com/apache/qpid-proton/archive/0.17.0.zip"
$ unzip 0.17.0.zip
$ cd qpid-proton-0.17.0
$ mkdir build
$ cd build
$ cmake -DBUILD_TESTING=OFF -DBUILD_CPP=OFF -DBUILD_JAVA=OFF -DSSL_IMPL=none -DSASL_IMPL=none -DCMAKE_INSTALL_PREFIX=/usr ..
$ make
$ sudo make install
```

Steps required to compile and install gtest to a system location is outlined below:

```
$ wget "https://github.com/google/googletest/archive/release-1.8.0.zip"
$ unzip release-1.8.0.zip
$ cd googletest-release-1.8.0
$ mkdir build
$ cd build
$ cmake -DCMAKE_INSTALL_PREFIX=/usr ..
$ make
$ sudo make install
```

## Building OpenMAMA
The OpenMAMA build system is based on cmake which provides the best cross-IDE support.

These steps assume you have already gotten the source somewhere either with a git clone or a source download of the latest release.

### Building on Windows (Vcpkg)

```
D:\> git clone https://github.com/microsoft/vcpkg
D:\> .\vcpkg\bootstrap-vcpkg.bat
D:\> cd vcpkg
D:\vcpkg> vcpkg.exe install openmama:x86-windows openmama:x64-windows
```

And then optionally (if you want OpenMAMA to be available by default for new Visual Studio projects):

```
D:\vcpkg> vcpkg.exe integrate install
```

### Building on Windows (Manual)

To build on windows if all pre-requisites have been installed to system directories, it should be as simple as running this on the command line:

```
D:\OpenMAMA> mkdir build_32 build_64
D:\OpenMAMA> cd build_32
D:\OpenMAMA> cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DWITH_JAVA=ON -DWITH_CSHARP=ON -DWITH_UNITTEST=ON -DCMAKE_INSTALL_PREFIX=D:\OpenMAMA\install_32 -G "Visual Studio 14 2015" ..
D:\OpenMAMA> cmake --build . --config Release --target install
D:\OpenMAMA> cd ..\build_64
D:\OpenMAMA> cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DWITH_JAVA=ON -DWITH_CSHARP=ON -DWITH_UNITTEST=ON -DCMAKE_INSTALL_PREFIX=D:\OpenMAMA\install_64 -G "Visual Studio 14 2015 Win64" ..
D:\OpenMAMA> cmake --build . --config Release --target install
```

Note this target compiles C, C# and Java implementations, you may toggle the options here to enable or disable certain bindings etc.
For a full list of options, see the output from `cmake -LAH`.

If you hit issues, it's likely because one of the pre-requisites have either not been met, or else they're installed to non-system default locations. Please check the
cmake options available as above to specify alternative locations for dependencies.

If you think you have spotted an issue or an omission, please [raise a ticket](https://github.com/OpenMAMA/OpenMAMA/issues) for us to have a look.

### Building on Linux

To build on Linux:

```
$ mkdir build
$ cd build
$ cmake .. -DCMAKE_BUILD_TYPE=RelWithDebInfo -DCMAKE_INSTALL_PREFIX=/opt/openmama-manual -DWITH_JAVA=ON -DWITH_UNITTEST=ON
$ make -j
$ make install
```

## Cleaning the Build

Sometimes you will want to rebuild the entire source tree from scratch, or get rid of some of the other build artifacts. In order to do so, simply delete the
entire contents of the cmake build directory.

It is possible that some files may linger at this point, in which case you may want to leverage git to clean up. Be careful using this as
**any untracked changes may be lost!**. To check which files will be cleaned up with git use:

```
git clean
```

And to carry out the deletion:

```
git clean -f
```

## Next Steps
At this stage you should have a complete OpenMAMA build, installed in the location of your choice, including with a version of the Qpid Proton middleware bridge. 

The next step will be to test the environment, before beginning development of your own applications and bridges. You may now want to check out the instructions for running OpenMAMA from the [Quick Start Guide](openmama_quick_start_guide_running_openmama_apps.md).