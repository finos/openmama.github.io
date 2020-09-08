---
title: IDE Integration
sidebar: openmama_sidebar
permalink: openmama_ide_integration.html
folder: openmama
toc: true
---

## IDE Integration for OpenMAMA

We recommend that any new projects are set up in the same way as our tutorial examples are set up.

This general approach means that it is in fact the build system rather than the IDE which manages much of how things are
set up for building and you get portability for free. Decoupling the IDE from the build system means you
can support many IDEs simply by using a standardized build system.

This means that for new projects, we suggest using:

* [Cmake](https://cmake.org) for C / C++ projects (regardless of operating system being used)
* [Gradle](https://gradle.org) for Java projects
* [Csproj files](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new) for C# projects

### C / C++ IDEs Supporting CMake

As an example of the IDEs which will automatically work with your buildsystem if you use cmake projects:

* Microsoft Visual Studio 2017+
* Visual Studio Code
* CLion
* Eclipse
* NetBeans
* Code::Blocks
* Others...

### Java IDEs Supporting Gradle

As an example of the IDEs which will automatically work with your buildsystem if you use gradle projects:

* Visual Studio Code
* IntelliJ
* Eclipse
* NetBeans
* Others...

### C# IDEs Supporting .csproj

This format is so ubiquitous with the target platform that this goes without saying, but as an example of the
IDEs which will automatically work with your buildsystem if you use CMake projects:

* Microsoft Visual Studio
* Visual Studio Code
* MonoDevelop
* Rider / ReSharper
* Others...

## Example IDE Integration: Visual Studio Code

For the sake of using freely available cross platform software, this example will set up using Visual Studio Code as the
proposed IDE for all languages. For a build system, we will use CMake for C / C++ code, Gradle for Java code, and Visual Studio
for C# code.

This solution suggests installing:

* [Visual Studio Code](https://code.visualstudio.com) for the main IDE, along with:
    * [Visual Studio Code Extensions for C / C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools){:target="_blank"} and [Visual Studio Code Extension for Cmake](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)
    * [Visual Studio Code Extensions for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack){:target="_blank"}
    * [Visual Studio Code Extensions for C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp){:target="_blank"}
    * [Visual Studio Code Remote Development Extensions](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) (if you plan on developing on a remote machine like the demo environment or a remote server)

### C / C++

After completing this, if you open a folder containing a CMakeLists.txt file with the correct OPENMAMA_ROOT etc set up,
you will get a prompt like this:

![C Project IDE Confirmation](assets/images/ide/c_project_ide_confirm.png)

After agreeing to this and letting intellisense do its thing, autocomplete etc becomes available:

![C Project Autocomplete](assets/images/ide/c_project_ide_autocomplete.png)

### Java

Opening a folder containg a gradle project will provide a prompt like this:

![Java Project IDE Confirmation](assets/images/ide/java_project_ide_confirm.png)

Which leads to autocomplete working:

![Java Project Autocomplete](assets/images/ide/java_project_ide_autocomplete.png)

### C#

Opening a folder containing a csproj file will pop up a prompt like this:

![CS Project IDE Confirmation](assets/images/ide/cs_project_ide_confirm.png)

Which leads to autocomplete working:

![CS Project Autocomplete](assets/images/ide/cs_project_ide_autocomplete.png)