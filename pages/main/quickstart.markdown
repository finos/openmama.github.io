---
layout: documentation
title: Quick Start
permalink: /quickstart.html
toc: true
---

## Scope

In this quick start guide, we'll be getting you set up with an OpenMAMA development environment, and subscribe
to a Market Data Publisher.

## Installing OpenMAMA

Depending on your target environment, we have many options for [installing OpenMAMA](openmama_installing). The
easiest one for this task would be to connect to a running instance of the [AWS AMI](path/to/aws/ami){:target="_blank"}
or vagrant box since it already contains a running publisher you can subscribe to, but we'll also document how to run your
own here.

## Getting Ready to Code

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

{% capture project_build_c %}
{% highlight shell %}
$ cd OpenMAMA/tutorials/c/01-quickstart
$ mkdir build
$ cd build
$ cmake -DOPENMAMA_ROOT=/path/to/openmama/installation ..
$ cmake --build .
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

{% capture project_build_cpp %}
{% highlight shell %}
$ cd OpenMAMA/tutorials/cpp/01-quickstart
$ mkdir build
$ cd build
$ cmake -DOPENMAMA_ROOT=/path/to/openmama/installation ..
$ cmake --build .
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
$ cd OpenMAMA/tutorials/java/01-quickstart
$ ./gradlew run
Starting a Gradle Daemon, 3 incompatible and 1 stopped Daemons could not be reused,
use --status for details

> Task :run
This is an OpenMAMA market data subscriber which assumes an
OpenMAMA compatible data source is available to connect to and is
configured in mama.properties.

For more information, see http://openmama.org/quickstart.html

Usage: java -jar 01-quickstart.jar -s [symbol] [arguments]

Arguments:
        -m [middleware] Middleware bridge to load. Default: [qpid]
        -S [source]     Source name (prefix) to use. Default: [OM]
        -t [transport]  Transport from mama.properties to use. Default: [sub]
        -B              Disables dictionary request
        -I              Prevents an intial from being requested

BUILD SUCCESSFUL in 4s
2 actionable tasks: 2 executed
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

{% highlight batch %}
> cd OpenMAMA\tutorials\csharp\01-quickstart
> dotnet run
This is an OpenMAMA market data subscriber which assumes an
OpenMAMA compatible data source is available to connect to and is
configured in mama.properties.

For more information, see http://openmama.org/quickstart.html

Usage: dotnet run -s [symbol] [arguments]

Arguments:
        -m [middleware] Middleware bridge to load. Default: [qpid]
        -S [source]     Source name (prefix) to use. Default: [OM]
        -t [transport]  Transport from mama.properties to use. Default: [sub]
        -B              Disables dictionary request
        -I              Prevents an intial from being requested
{% endhighlight %}

{% endcapture %}

{% include tabbed-panel.html
    id="project_build"
    tabs=site.data.tabpanels.languages.names
    headings=site.data.tabpanels.languages.headings
    csharp=project_build_csharp
    java=project_build_java
    c=project_build_c
    cpp=project_build_cpp %}

## Consuming Market Data

OK so now you have a working application, you can go ahead and connect to market data! Note that if your data is provided
by a proprietary solution, you may need to contact them to acquire their OpenMAMA integration libraries and drop them into
`$OPENMAMA_ROOT/lib` or alternatively include them in your system's runtime linker library path.

### Running a Market Data Publisher

If you don't already have a Market Data publisher to subscribe to, you can run your own using Qpid along with our test market data.

```
$ git clone https://github.com/OpenMAMA/OpenMAMA-testdata.git /opt/openmama/data
$ export PATH=/opt/openmama/bin:$PATH
$ export LD_LIBRARY_PATH=/opt/openmama/lib:$PATH
$ export WOMBAT_PATH=/opt/openmama/config
$ capturereplayc -dictionary /opt/openmama/data/dictionaries/data.dict -m qpid -S OM -tport pub \
    -f /opt/openmama/data/playbacks/openmama_utpcasheuro_capture.5000.10.qpid.mplay -v -v -v -v
```

Note that regardless of the language being used, the C capture replay tool may be used here since the protocols are the same.

If you are using our demo environment, this service will already be running.

### Running your Market Data Subscriber

Now that your environment is up and running, you can begin consuming market data!

```
$ export WOMBAT_PATH=/opt/openmama/config
$ export LD_LIBRARY_PATH=/opt/openmama/lib
$ ./quickstart -m qpid -S OM -t sub -s DE000CM95AU4.EUR.XPAR \
      -d /home/fquinn/SourceExternal/cascadium/OpenMAMA-testdata/dictionaries/data.dict
```

Note that to connect to other middlewares, you can simply drop the third party libraries you need
into `/opt/openmama/lib`, configure / use another transport from `mama.properties` and that's it -
no code changes or even a recompile required!

## Application Code

Go ahead and open up the code in your favourite text editor and have a look through the code. There's really not much to getting up and
running... if you're not at a developer box at the moment, the code is detailed below:

{% capture project_example_csharp %}
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Ffquinner%2FOpenMAMA%2Fblob%2Ffeature%2Fdemo-environment%2Ftutorials%2Fcsharp%2F01-quickstart%2FProgram.cs&style=github&showBorder=on&showLineNumbers=off&showFileMeta=on"></script>
{% endcapture %}

{% capture project_example_java %}
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Ffquinner%2FOpenMAMA%2Fblob%2Ffeature%2Fdemo-environment%2Ftutorials%2Fjava%2F01-quickstart%2Fsrc%2Fmain%2Fjava%2Fquickstart%2FApp.java&style=github&showBorder=on&showLineNumbers=off&showFileMeta=on"></script>
{% endcapture %}

{% capture project_example_c %}
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Ffquinner%2FOpenMAMA%2Fblob%2Ffeature%2Fdemo-environment%2Ftutorials%2Fc%2F01-quickstart%2Fquickstart.c&style=github&showBorder=on&showLineNumbers=off&showFileMeta=on"></script>
{% endcapture %}

{% capture project_example_cpp %}
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Ffquinner%2FOpenMAMA%2Fblob%2Ffeature%2Fdemo-environment%2Ftutorials%2Fcpp%2F01-quickstart%2Fquickstart.cpp&style=github&showBorder=on&showLineNumbers=off&showFileMeta=on"></script>
{% endcapture %}

{% include tabbed-panel.html
    id="project_example"
    tabs=site.data.tabpanels.languages.names
    headings=site.data.tabpanels.languages.headings
    csharp=project_example_csharp
    java=project_example_java
    c=project_example_c
    cpp=project_example_cpp %}