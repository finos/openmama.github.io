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

## Getting Ready to Code

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
    * [Visual Studio Code Remote Development Extensions](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) (if you plan on developing on a remote machine like the demo environment or a remote server)


## Setting up an OpenMAMA project

We have a number of ready-made OpenMAMA projects ready for you to grab from the
[OpenMAMA repository tutorials folder here](https://github.com/fquinner/OpenMAMA/tree/feature/demo-environment/tutorials).
You can download these with:

```
git clone https://github.com/OpenMAMA/OpenMAMA
```

Then they will be available for each language in `OpenMAMA/tutorials`. If you want to view the code, you may navigate
your IDE to that directory. The projects are standard for each language so most IDEs should automatically import them.

## Build and Run Your OpenMAMA project

Now that you have your ready made projects available, you can get building from the command line, or alternatively
you can defer to your IDE of choice if you prefer. Note that the default install
location for OpenMAMA packages (`OPENMAMA_ROOT`) on Linux is `/opt/openmama`:

{% capture project_build_c_cpp %}
{% highlight shell %}
cd /path/to/01-quickstart
mkdir build
cd build
cmake -DOPENMAMA_ROOT=/path/to/openmama/installation ..
cmake --build .
{% endhighlight %}

<p>This will create a <code>quickstart</code> executable relative to the build directory. Its location will
vary depending on the platform, but that's it ready to execute, but the OS will need to know where to find
OpenMAMA at runtime too, so before running:</p>

On Windows:

{% highlight batch %}
set PATH=C:\path\to\openmama\bin:%PATH%
{% endhighlight %}

On Linux:

{% highlight shell %}
export LD_LIBRARY_PATH=/path/to/openmama/install/lib:$LD_LIBRARY_PATH
{% endhighlight %}

On Mac:

{% highlight shell %}
export DYLD_LIBRARY_PATH=/path/to/openmama/install/lib:$DYLD_LIBRARY_PATH
{% endhighlight %}

Then you're ready to run:

{% highlight shell %}
$ ./quickstart
This is an OpenMAMA market data subscriber which assumes an
OpenMAMA compatible data source is available to connect to and is
configured in mama.properties.

For more information, see http://openmama.org/quickstart.html

Usage: ./quickstart -s [symbol] [arguments]

Arguments:
        -m [middleware] Middleware bridge to load. Default: [qpid]
        -S [source]     Source name (prefix) to use. Default: [OM]
        -t [transport]  Transport from mama.properties to use. Default: [sub]
        -B              Disables dictionary request
        -I              Prevents an intial from being requested
{% endhighlight %}

{% endcapture %}

{% capture project_build_java %}

<p>On Java, you can pretty much run this out of the box, but the OS will need to know where to find
OpenMAMA at runtime too, so before running:</p>

On Windows:

{% highlight batch %}
set PATH=C:\path\to\openmama\bin:%PATH%
{% endhighlight %}

On Linux:

{% highlight shell %}
export LD_LIBRARY_PATH=/path/to/openmama/install/lib:$LD_LIBRARY_PATH
{% endhighlight %}

On Mac:

{% highlight shell %}
export DYLD_LIBRARY_PATH=/path/to/openmama/install/lib:$DYLD_LIBRARY_PATH
{% endhighlight %}

Then you're ready to run:

{% highlight shell %}
cd /path/to/01-quickstart
./gradlew run
{% endhighlight %}

{% endcapture %}

{% capture project_build_csharp %}

<p>On .NET, you can pretty much run this out of the box, but the OS will need to know where to find
OpenMAMA at runtime too, so before running:</p>

On Windows:

{% highlight batch %}
set OPENMAMA_ROOT=/path/to/openmama/install
set PATH=%OPENMAMA_ROOT%\bin:%PATH%
{% endhighlight %}

On Linux:

{% highlight shell %}
export OPENMAMA_ROOT=/path/to/openmama/install
export LD_LIBRARY_PATH=$OPENMAMA_ROOT/lib:$LD_LIBRARY_PATH
{% endhighlight %}

Then you're ready to run:

{% highlight shell %}
cd /path/to/01-quickstart
dotnet run
{% endhighlight %}

{% endcapture %}

{% include tabbed-panel.html
    id="project_build"
    tabs=site.data.tabpanels.languages.names
    headings=site.data.tabpanels.languages.headings
    csharp=project_build_csharp
    java=project_build_java
    c=project_build_c_cpp
    cpp=project_build_c_cpp %}

## Consuming Market Data

OK so now you have a working application, you can go ahead and connect to market data! Note that if your data is provided
by a proprietary solution, you may need to contact them to acquire their OpenMAMA integration libraries and drop them into
`$OPENMAMA_ROOT/lib` or alternatively include them in your system's runtime linker library path.

### Running a Market Data Publisher

If you don't already have a Market Data publisher to subscribe to, you can run your own using Qpid along with our test market data.

```
test -d /opt/openmama/data || git clone https://github.com/OpenMAMA/OpenMAMA-testdata.git /opt/openmama/data
export PATH=/opt/openmama/bin:$PATH
export LD_LIBRARY_PATH=/opt/openmama/lib:$PATH
capturereplayc -dictionary /opt/openmama/data/dictionaries/data.dict -m qpid -S OM -tport demo_pub \
    -f /opt/openmama/data/playbacks/openmama_utpcasheuro_capture.5000.10.qpid.mplay -v -v -v -v
```

Note that regardless of the language being used, the C capture replay tool may be used here since the protocols are the same.

If you are using our demo environment, this service will already be running.

### Running your Market Data Subscriber

Now that your environment is up and running, you can begin consuming market data!

    export WOMBAT_PATH=/opt/openmama/config
    export LD_LIBRARY_PATH=/opt/openmama/lib
    ./quickstart -m qpid -S OM -t sub -s DE000CM95AU4.EUR.XPAR \
        -d /home/fquinn/SourceExternal/cascadium/OpenMAMA-testdata/dictionaries/data.dict