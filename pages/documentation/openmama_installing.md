---
title: Installing OpenMAMA
sidebar: openmama_sidebar
permalink: openmama_installing.html
folder: openmama
toc: true
---

To install OpenMAMA, we have packages available for all supported platforms which either include,
or automatically install their dependencies.

### Linux

For Linux users, you can either download and extract the packaged release from our [github releases](https://github.com/OpenMAMA/OpenMAMA/releases){:target="_blank"} page, or alternatively (and more conveniently), you can install via cloudsmith (which has the main advantage that
you can use your package manager's upgrade mechanism to keep up to date):

#### Ubuntu

```bash
curl -1sLf https://dl.cloudsmith.io/public/openmama/openmama/cfg/setup/bash.deb.sh | sudo -E bash
```

And if you want easy access to some third party plugins as well:

```bash
curl -1sLf https://dl.cloudsmith.io/public/openmama/openmama-thirdparty/cfg/setup/bash.deb.sh | sudo -E bash
```

#### Fedora / CentOS

```bash
curl -1sLf https://dl.cloudsmith.io/public/openmama/openmama/cfg/setup/bash.rpm.sh | sudo -E bash
```

And if you want easy access to some third party plugins as well:

```bash
curl -1sLf https://dl.cloudsmith.io/public/openmama/openmama-thirdparty/cfg/setup/bash.rpm.sh | sudo -E bash
```

#### Other Distros

Building is fairly straightforward these days, so if you want to build OpenMAMA on a platform that is not supported,
please refer to our [documentation for building OpenMAMA from source](openmama_build_instructions.html).

### Windows

#### Vcpkg

If you have internet access on the target machine, vcpkg is easily the most convenient way to install OpenMAMA.

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

#### Compiled Binaries

You may download and extract the latest release from our [github releases](https://github.com/OpenMAMA/OpenMAMA/releases){:target="_blank"}.
It includes all bindings and a copy of the Qpid bridge ready to use.

### Docker

If you don't really want to install anything and simply want to kick the tyres on the API within a container, we have an OpenMAMA
docker image that you may use which includes an OpenMAMA install in `/opt/openmama` and build tools for Linux:

```
docker pull openmama/openmama
docker network create openmama-net-quickstart
docker run --net=openmama-net-quickstart --name openmama-quickstart -it openmama/openmama:latest bash
```

You can then point your favourite IDE to use this docker environment as your build system for your own OpenMAMA based apps.

### Vagrant

If you want to use Vagrant to create your own build environment complete with all dependencies installed, you can refer to our
[vagrant box](https://app.vagrantup.com/openmama/boxes/openmama-demo) which is an implementation of our
[Portable Demo Environment](openmama_portable_demo_environment) which is ready to use out of the box.

### AWS Prebuilt AMI

We have an AWS AMI available on the marketplace which you're free to use to kick the tyres on OpenMAMA. It contains
a pre-built version of the [Portable Demo Environment](openmama_portable_demo_environment) ready for use.

### Private / Public Cloud Hosted

Please see our documentation on running a [Portable Demo Environment](openmama_portable_demo_environment).

### Building from Source

Please see our documentation on [Building OpenMAMA from Source](openmama_build_instructions.html).