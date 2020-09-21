---
title: Portable Demo Environment
sidebar: openmama_sidebar
permalink: openmama_portable_demo_environment.html
folder: openmama
toc: true
---

The portable demo environment is effectively an out of the box sandbox which contains a working
OpenMAMA installation and configuration as well as a market data publisher constantly running
locally using qpid. It is designed to let you get up and running with an OpenMAMA development
environment with zero fuss by allowing you to use our existing AMI or even our vagrant box
which you can then remote develop on using an IDE like Visual Studio Code.

It also contains an upstream connection to the OpenMAMA cloudsmith repositories for streamlined
upgrades to the latest versions of OpenMAMA and a selection of any free and non-free plugins
which third parties have opted to host there.

## Getting Up and Running

The first thing you'll need to do is get your hands on the demo environment. We have a variety of
options available depending on which resources are available to you.

### Running with AWS

To run an AWS instance of the demo environment, we recommend selecting an instance type which has at least
2GB of RAM.

Note all our images are based on the official CentOS images as hosted on [their website](https://www.centos.org/download/aws-images/)
rather than the third party ones hosted on AWS, so they can be extended without licensing fears.

AMIs are region specific, so you'll need to identify the appropriate region **in which you want to
launch your instance** to get started:

| Region      | Architecture           | AMI ID                 | Launch Instance Wizard
| ----------- | ---------------------- | ---------------------- |-----------------------------
| eu-west-2   | x86_64                 | ami-0b1cbf3fc035ad795  | [Launch New Instance](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-0b1cbf3fc035ad795)
| us-east-1   | x86_64                 | ami-0a03b5b0b1d8bd1e4  | [Launch New Instance](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0a03b5b0b1d8bd1e4)
| us-east-2   | x86_64                 | ami-04bca522bc2d4083e  | [Launch New Instance](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-04bca522bc2d4083e)

Alternatively you can search for it under **Community AMIs** by searching for OpenMAMA, the image
is named the `OpenMAMA Portable Demo Environment (CentOS 8 x86_64)`. The default instance username is `centos`.

### Running with Vagrant

We have a vagrant option available on the official
[Vagrant box repository](https://app.vagrantup.com/openmama/boxes/openmama-demo) -
we have documentation there on how to install and we have providers for most VM types.

### Running on Bare Metal / Virtual Machine

The demo environment targets a CentOS 8 install, so if you have a base CentOS installation
ready, you can turn it into an OpenMAMA portable demo environment simply by running our
ansible script on it.

First of all install git and ansible if they aren't already installed:

    sudo dnf install -y epel-release
    sudo dnf install -y git ansible

Then grab the latest copy of the OpenMAMA code and run the ansible playbook we manage there.

    git clone https://github.com/OpenMAMA/OpenMAMA.git
    sudo ansible-playbook --connection=local -i localhost, OpenMAMA/ansible/demo-provision.yml

And that's it - next time you log in you should get the usual prompts etc.

## Connecting an IDE for Remote Development

The demo environment comes with an SSH server running on port 22. Remote development is available
in many IDEs such as CLion, Jetbrains tools and Netbeans. We have some documentation available for
[setting up Visual Studio Code](openmama_ide_integration) but the process will be similar for other
IDEs.

## Tour of Contents

The demo kit contains everything you need to get up and running with an OpenMAMA development environment,
and is ready to extend with any third party libraries available or even your own!

### Market Data Publisher Service (qpid)

We have a constantly running Qpid market data publisher running on repeat which is using the `pub` transport
as defined in `/opt/openmama/config/mama.properties`. It uses the data dictionary (field ID to field name / 
data type reference data) from `/opt/openmama/data/dictionaries/data.dict` and the playback data from
`/opt/openmama/data/playbacks/openmama_utpcasheuro_capture.5000.10.qpid.mplay`.

It is managed via a standard systemd service so you can use `systemctl` commands to manage it:

```
$ systemctl status openmama-capturereplay
● openmama-capturereplay.service - OpenMAMA Capture Replay utility for producing OpenMAMA output data
   Loaded: loaded (/etc/systemd/system/openmama-capturereplay.service; enabled; vendor preset: disabl
   Active: active (running) since Mon 2020-09-14 17:46:28 UTC; 20min ago
 Main PID: 12526 (capturereplayc)
    Tasks: 4 (limit: 11481)
   Memory: 4.9M
   CGroup: /system.slice/openmama-capturereplay.service
           └─12526 /opt/openmama/bin/capturereplayc -S OM -f /opt/openmama/data/playbacks/openmama_u
```

### OpenMAMA Installation

We have a complete OpenMAMA installation in `/opt/openmama` including bindings for:

* C
* C++
* Java
* C# (.NET core)

So you have everything you need to get up and running with the target language of your choice.

We also have `WOMBAT_PATH`, `LD_LIBRARY_PATH` etc already set up so it should simply be a case of
compiling and running your code!

### Code and Quick Start Apps

The package includes a complete copy of the OpenMAMA repository in `~/OpenMAMA`. To update it, you can
simply do a git pull (since the code may have changed since the demo environment was created):

    cd ~/OpenMAMA
    git pull

Then we host a series of quick start guides available in `~/OpenMAMA/tutorials` after you log in for the first time
which is taken from our `tutorials` folder from our main repo. You have different projects available depending on
your platform:

* `c/01-quickstart` (cmake project for C)
* `cpp/01-quickstart` (cmake project for C++)
* `csharp/01-quickstart` (`.csproj` project for C#)
* `java/01-quickstart` (gradle project for Java)

At this point you may want to head over / return to the `quickstart` guide to get more information on how to get
up and running with these projects!

### Adding Additional Bridges and Libraries

Your middleware bridge provider should be able to provide you with configuration files and libraries to let you
get up and running with OpenMAMA. Typically it's as simple as:

* Adding their recommended OpenMAMA configuration to `/opt/openmama/config/mama.properties`
* Dropping their compiled libraries into `/opt/openmama/lib`

Some vendors are even already available in our third party repository which is already configured in the portable
demo environment. Simply try

    dnf search openmama