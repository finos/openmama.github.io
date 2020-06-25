---
layout: documentation
title: Quick Start
permalink: /quickstart.html
toc: true
---
## Synopsis

In this quick start guide, we'll be getting you set up with an OpenMAMA development environment, and subscribe
to a Market Data Publisher (if you don't already have one to connect to).

## Installing OpenMAMA

First of all, you wil need to install OpenMAMA. We have packages available for CentOS, Fedora, Ubuntu and Windows which either include,
or automatically install their dependencies.

### Linux

For Linux users, you can either download and extract the release from our [github releases](https://github.com/OpenMAMA/OpenMAMA/releases){:target="_blank"} page, or alternatively (and more conveniently), you can install via cloudsmith.

```bash
curl -1sLf https://dl.cloudsmith.io/public/openmama/openmama/cfg/setup/bash.deb.sh | sudo -E bash
```

### Windows

For Windows users, you can either download and extract the release from our [github releases](https://github.com/OpenMAMA/OpenMAMA/releases){:target="_blank"} page, or alternatively
you can build OpenMAMA using the [vcpkg](https://github.com/Microsoft/vcpkg){:target="_blank"} system (very useful for automatically setting up paths for your own projects):

```
git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
.\bootstrap-vcpkg.bat
.\vcpkg integrate install
.\vcpkg install openmama
```

### Docker

If you don't really want to install anything and simply want to kick the tyres on the API within a container, we have an OpenMAMA
docker image that you may use which includes an OpenMAMA install in `/opt/openmama` and build tools for Linux:

```
docker pull openmama/openmama
docker network create openmama-net-quickstart
docker run --net=openmama-net-quickstart --name openmama-quickstart -it openmama/openmama:latest bash
```

### Building from Source

I don't think we could in good conscience call this a quickstart guide if we end up getting into building the source code, so for that,
you should refer to [Building From Source](openmama_build_instructions.html).

## Setting up a new project

For the sake of using freely available cross platform software, these examples are set up using Visual Studio Code as the
proposed IDE for all languages. For a build system, we will use CMake for C / C++ code, Gradle for Java code, and Visual Studio
for C# code.

We appreciate that your choice of build environment may deviate from this, so if you'd prefer to set up your own build environment,
this section can be skipped.

To continue, you'll need to install:

* Your compiler of choice and cmake for C / C++:
    * On Redhat / CentOS / Fedora: `yum install gcc cmake`
    * On Ubuntu: `apt install gcc g++ cmake`
    * On Windows: [Visual Studio](https://visualstudio.microsoft.com){:target="_blank"} and [Cmake download](https://cmake.org/download){:target="_blank"}
* For C# (on windows), you'll also need [Visual Studio](https://visualstudio.microsoft.com){:target="_blank"}
* For Java, you'll need to install a JDK (versions may vary):
    * On Redhat / Centos / Fedora: `yum install java-ll-openjdk`
    * On Ubuntu: `apt install openjdk-13-jdk`
    * On Windows: [install from Oracle](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html){:target="_blank"}
* [Visual Studio Code](https://code.visualstudio.com) if you want to use a GUI editor, along with:
    * [Visual Studio Code Extensions for C / C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools){:target="_blank"} and [Visual Studio Code Extension for Cmake](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)
    * [Visual Studio Code Extensions for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack){:target="_blank"}
    * [Visual Studio Code Extensions for C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp){:target="_blank"}

Once you have this set up, it is time to set up your project. Begin by creating a new empty directory
in which to start your project, then:

{% capture project_setup_c_cpp %}
<h4>Create a CMakeLists.txt File</h4>
<p>The first thing you should do is create a <code>CMakeLists.txt</code> file with these contents:</p>
{% highlight cmake %}
cmake_minimum_required(VERSION 3.8)
project ("quickstart")

set(MAMA_ROOT "C:/Users/fquinn/Downloads/openmama-6.3.0.win.x86")

include_directories("${MAMA_ROOT}/include")
link_directories("${MAMA_ROOT}/lib")

add_executable(quickmdsub main.cpp)
target_link_libraries(quickmdsub libmamacmd)
{% endhighlight %}

<hr/>

<h4>Write a Simple Program</h4>

Then we can write some basic code in <code>main.c</code> to call an OpenMAMA function, to verify our build setup is sound:

{% highlight c %}
#include <stdio.h>
#include <mama/mama.h>

int main(int argc, char* argv[])
{
    printf("Loading OpenMAMA...\n");
    mamaBridge bridge;
    mama_loadBridge(&bridge, "qpid");
    mama_open();
    printf("Loaded OpenMAMA...\n");
    mama_close();
    printf("Closed OpenMAMA...\n");
}
{% endhighlight %}

<hr/>

<h4>Build and Run</h4>

{% highlight bash %}
cmake --build . --verbose
{% endhighlight %}

{% endcapture %}

{% capture project_setup_java %}
// TODO
{% endcapture %}

{% capture project_setup_csharp %}
// TODO
{% endcapture %}

-----------------------------------------------------------------------------------------------

{% include tabbed-panel.html
    id="project_setup"
    tabs=site.data.tabpanels.languages.names
    headings=site.data.tabpanels.languages.headings
    csharp=project_setup_csharp
    java=project_setup_java
    c=project_setup_c_cpp
    cpp=project_setup_c_cpp %}

Extensions:

asdasdasd

Now create a basic 

```c
int x = 1;
printf("asdasd");
printf("asdasd");
```

asdasds

{% capture initial_csharp %}
{% highlight csharp %}
public static ThisName operator %(ThisName left, ThisName right) {
	
}
{% endhighlight %}
{% endcapture %}

{% capture initial_c %}
{% highlight c %}
int x = 1;
printf("asdasd");
printf("asdasd");
printf("asdasd");
printf("asdasd");
printf("asdasd");
printf("asdasd");
printf("asdasd");
printf("asdasd");
printf("asdasd");
printf("asdasd");
printf("asdasd");
{% endhighlight %}
{% endcapture %}

{% capture initial_cpp %}
{% highlight cpp %}
int x = 1;
std::out << "asdas" << std::endl;
{% endhighlight %}
{% endcapture %}

{% capture initial_java %}
{% highlight java %}
BufferedWriter out = null;
try {
    out = new BufferedWriter(new FileWriter(”filename”, true));
    out.write(”aString”);
} catch (IOException e) {
    // error processing code
} finally {
    if (out != null) {
        out.close();
    }
}
{% endhighlight %}
{% endcapture %}

{% assign language_tabs = "c|cpp|csharp|java" | split: '|' %}
{% assign language_tab_headings = "C++|C|C#|Java" | split: '|' %}

{% include tabbed-panel.html
    id="initial"
    tabs=site.data.tabpanels.languages.names
    headings=site.data.tabpanels.languages.headings
    csharp=initial_csharp
    java=initial_java
    c=initial_c
    cpp=initial_cpp %}

## Running a Market Data Publisher

If you don't already have a Market Data publisher to subscribe to, you can run your own using Qpid along with our test market data.

```
test -d /opt/openmama/data || git clone https://github.com/OpenMAMA/OpenMAMA-testdata.git /opt/openmama/data
export PATH=/opt/openmama/bin:$PATH
export LD_LIBRARY_PATH=/opt/openmama/lib:$PATH
capturereplayc -dictionary /opt/openmama/data/dictionaries/data.dict -m qpid -S OM -tport demo_pub \
    -f /opt/openmama/data/playbacks/openmama_utpcasheuro_capture.5000.10.qpid.mplay -v -v -v -v
```

Note that regardless of the language being used, the C capture replay tool may be used here since the protocols are the same.