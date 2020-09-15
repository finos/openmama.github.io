---
title: Quick Start with OpenMAMA Example Apps
sidebar: openmama_sidebar
permalink: openmama_quick_start_guide_running_openmama_apps.html
folder: openmama
toc: true
---

The following quick start guide details the fastest route to getting OpenMAMA up and running. 

It does make some assumptions about your environment, mainly that you're working in an environment that supports RPM installations (RHEL/CentOS 6). We're hoping to expand these instructions to include Debian and Ubuntu based systems, as well as producing RPMs targeted at recent Fedora releases. 

We also assume that you're using *bash* rather than a more esoteric shell. The odds are most people are anyway, so we'll assume this to be true going forward.

## Installing OpenMAMA
The first step is to grab an [OpenMAMA downloads page](http://www.openmama.org/downloads/releases) website e.g. for RedHat/CentOS 6:

| Platform        | Arch   |RPM                                                                                                              |
| --------------- | ------ |---------------------------------------------------------------------------------------------------------------- |
| RHEL 6/Centos 6 | x86_64 |[openmama-2.3.3-1.el6_.x86_64.rpm](http://www.openmama.org/sites/default/files/openmama-2.3.3-1.el6_.x86_64.rpm) |

Note that if packages aren't available for your distro {{base}} you can [build and install OpenMAMA from source](openmama_build_instructions).

Once you have an appropriate OpenMAMA RPM for your system, you will need to install it. Depending on your platform you will likely issue one of two commands. For systems which support ***yum*** the appropriate command will generally be:

<code>
sudo yum install openmama-2.3.0-1.el6_.<platform>.rpm
</code>

For systems which use pure RPM, the command becomes:

<code>
sudo rpm -iVh openmama-2.3.0-1.el6_.<platform>.rpm
</code>

This will also potentially install a number of dependencies required by OpenMAMA, including libuuid, the QPID Proton messaging layer (libqpid-proton) and libevent. 

***Note:*** OpenMAMA may be installed on systems which use Yum with the same rpm command listed above, however we recommend the use of yum to ensure that dependencies are properly tracked and managed using the simpler interface.

***Note:*** In order to resolve a number of the dependencies, the RPM requires that Centos and Red Hat repos have access to the Fedora EPEL Repo. Check out the [instructions](http://fedoraproject.org/wiki/EPEL/FAQ#How_can_I_install_the_packages_from_the_EPEL_software_repository.3F) on making them available.

## Removing OpenMAMA

Removing OpenMAMA from your system should be straight forward, assuming you've added it using the standard **yum** or **rpm** commands. 

To remove using yum:

<code>
sudo yum remove openmama
</code> 

To remove using rpm:

<code>
sudo rpm -e openmama-2.3.0-1.el6_.<platform>.rpm
</code>

## OpenMAMA Directories

At present the OpenMAMA RPM will install everything under **/opt/openmama**. You should now be able to 'cd' into that directory and see the following directory structure:

|_dir_   |_contents_                                                           |
|--------|---------------------------------------------------------------------|
|bin     |The binaries for various OpenMAMA example applications.              |
|lib     |The prebuilt shared libraries for OpenMAMA and MAMDA.                |
|config  |The configuration files used by OpenMAMA.                            |
|examples|The source code of the example applications.                         |
|data    |Test data files for use with the capturereplay example applications. |

## Running OpenMAMA

### Publishing and Subscribing
Once you have OpenMAMA installed, you'll want to see it in action. For this we're going to make use of the QPID Proton middleware bridge, which comes bundled with the OpenMAMA RPM (the libraries should also be installed with the RPM - if they aren't check out the [Proton Website](http://qpid.apache.org/proton/index.html) for more information).

#### Pub/Sub Example
We've tried to ensure the sample configuration works on as many platforms as possible, so you should be able to get up and running using the following steps:

First, open two separate terminal instances, and cd into the /opt/openmama directory. In the first run the following:

```bash
cd /opt/openmama

source profile.openmama

mamapublisherc -tport pub -m qpid
```

Then in the second run:

```bash
cd /opt/openmama

source profile.openmama

mamasubscriberc -tport sub -m qpid
```

With a bit of luck you should see the following in your two terminals:

```
[damian@openmama openmama]$ mamapublisherc -tport pub -m qpid
Starting Publisher with:
   topic:              MAMA_TOPIC
   inbound topic:      MAMA_INBOUND_TOPIC
   interval            0.500000
   transport:          pub
2013-12-19 09:56:36: 
********************************************************************************
Note: This build of the MAMA API is not enforcing entitlement checks.
Please see the Licensing file for details
**********************************************************************************

CONNECTION ERROR connection aborted
Created inbound subscription.
Publishing message 0 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,0},{PublisherTopic,10002,MAMA_TOPIC\}\}
Publishing message 1 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,1},{PublisherTopic,10002,MAMA_TOPIC\}\}
Publishing message 2 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,2},{PublisherTopic,10002,MAMA_TOPIC\}\}
Publishing message 3 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,3},{PublisherTopic,10002,MAMA_TOPIC\}\}
Publishing message 4 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,4},{PublisherTopic,10002,MAMA_TOPIC\}\}
Publishing message 5 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,5},{PublisherTopic,10002,MAMA_TOPIC\}\}
Publishing message 6 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,6},{PublisherTopic,10002,MAMA_TOPIC\}\}
Publishing message 7 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,7},{PublisherTopic,10002,MAMA_TOPIC\}\}
Publishing message 8 to MAMA_TOPIC. msg=(\{\{MdMsgStatus,2,0},{MdSeqNum,10,8},{PublisherTopic,10002,MAMA_TOPIC\}\}
```

```
[damian@openmama openmama]$ mamasubscriberc -m qpid -tport sub 
Starting Subscriber with:
 topic:              MAMA_TOPIC
   transport:          sub

2013-12-19 09:56:38: 
********************************************************************************
Note: This build of the MAMA API is not enforcing entitlement checks.
Please see the Licensing file for details
**********************************************************************************

mamasubscriberc: Created inbound subscription.
mamasubscriberc: Recieved msg.
             MdMsgStatus     2                  I32                    0
                MdSeqNum    10                  I32                    5
          PublisherTopic 10002               STRING           MAMA_TOPIC

mamasubscriberc: Recieved msg.
             MdMsgStatus     2                  I32                    0
                MdSeqNum    10                  I32                    6
          PublisherTopic 10002               STRING           MAMA_TOPIC

mamasubscriberc: Recieved msg.
             MdMsgStatus     2                  I32                    0
                MdSeqNum    10                  I32                    7
          PublisherTopic 10002               STRING           MAMA_TOPIC

mamasubscriberc: Recieved msg.
             MdMsgStatus     2                  I32                    0
                MdSeqNum    10                  I32                    8
          PublisherTopic 10002               STRING           MAMA_TOPIC
```

#### Pub/Sub Explanation 
Now that we've gotten some data flowing between our servers, it makes sense to understand exactly what's happening in the above example. 

A typical OpenMAMA environment will consist of at least two processes, the first sending messages out (the publisher) and the second receiving them (the subscriber). This distinction isn't always as clear cut, but for our purposes it will suffice. So, in each of our terminals we create one of each type of process. The first thing we do however is to source the profile.openmama file. This does a number of things to setup the environment in which the applications run, primarily by setting a number of environment variables to appropriate values. These include the following:

* <code>$PATH</code> - We add the 'bin' directory to the PATH variable, so our test applications can easily be found by the shell.
* <code>$LD_LIBRARY_PATH</code> - We then add the 'lib' directory to the LD_LIBRARY_PATH. This basically ensures that Linux looks for our libraries in the appropriate place when starting up applications which use OpenMAMA. 
* <code>$WOMBAT_PATH</code> - The WOMBAT_PATH variable is then set to point to the examples directory. This is where OpenMAMA will look to find it's configuration file, mama.properties. There are other ways to pass in configuration, but this is the standard approach used by OpenMAMA, and the example applications. 

##### mama.properties
If you look within the **examples/mama.properties** file, you'll see it contains a number of lines of configuration. These are the basic options which should be enough to get up and running with most of our bridges. As you get more familiar with OpenMAMA however, you'll likely wish to change and develop these parameters. 

An example [[mama.properties|Qpid-Bridge#example-configuration-for-mamaproperties]] configuration for Qpid can be found on the [[Qpid Bridge]] page.

##### Publishers

Now that we've had a look at the configuration options, the command lines for the example applications should make a lot more sense. The first application we start is mamapublisherc, which is a simple test data publisher. Into it, we pass the name of the middleware via the **-m** option, in our case "qpid" meaning we'll be using the QPID proton bridge libraries. We then pass in a transport name, via the **-tport** option. You'll recall from the discussion of mama.properties that the transport specifies the properties of a specific connection, so we're looking to use those properties which set the parameters we want for our publisher. Thus we use the **pub** transport. This give us our command line:

<code>
mamapublisherc -m qpid -tport pub
</code>

The publisher in this case is a basic publisher, sending messages out at a preset interval, on a pre-determined symbol. This will continue until we terminate the application (typically with a "ctrl-c").

##### Subscribers

The command line for our basic subscriber is almost identical to the publisher, expect in this case we pass in a different transport. As the current QPID Proton bridge is a point-to-point implementation, the transport we choose must be complementary (so the parameters should be matching). As a result we choose the "sub" transport from our properties file, giving a command line of:

<code>
mamasubscriberc -m qpid -tport sub
</code>

The subscriber in this instance is making a connection to the publisher, and registering it's interest in the same test topic as that of the publisher.

### Market Data 

Now that we have the basic publishing and subscribing working, we can move on to a more advanced example of market data publishing. In order to do so, we're going to again start with our publisher application. In a typical environment this would most likely be something like a feedhandler or other data distributer, however for this example we'll be working with the capturereplayc binary, and the sample market data which comes with the RPM. If you haven't already done so, before proceeding to the next section you should return to your terminal and kill both the mamapublisher and mamasubscriber applications (by selecting the terminal and pressing ctrl-c).

#### capturereplayc

The capturereplayc sample application is a simple market data publisher, which reads data from OpenMAMA playback formatted files, and publishes that data across a transport. It also handles dictionary requests, and can be used to publish book data to be read by OpenMAMDA applications. The command line for capturereplayc is fairly straight forward, with the following help text:

<pre>
[damian@openmama openmama]$ capturereplayc -h
 capturereplay - Sample application demonstrates how to publish mama messages, and
 respond to requests from a client inbox.

 It accepts the following command line arguments:
      [-S source]       The source name to use for publisher Default is WOMBAT.
      [-i interval]     The interval between messages .Default in  0.5.
      [-f filename]     The capture filename
      [-m middleware]   The middleware to use for publisher [wmw/lbm/qpid]. Default is wmw.
      [-tport name]     The transport parameters to be used from mama.properties. Default is pub
      [-dictionary]     The dictionary file which is sent in response to client requests. Required.
      [-q]              Quiet mode. Suppress output.
</pre> 

For the purposes of this example, we will pass in a source (-S TEST), a middleware (-m qpid), a transport (-tport pub), and the location of both the dictionary file used by the data and the OpenMAMA playback data itself (-dictionary data/data.dict -f data/openmama_utpcasheuro_capture.5000.10.qpid.mplay).

When we start executing the application, you should see a series of "....." characters displayed. This is a pre-processing step conducted by the application reading through the playback data. When the dots have finished advancing, the application should be ready to accept subscriptions. For a more detailed view of what the application is doing during this stage, you may pass multiple '-v' arguments, which will increase the verbosity of the application logging. The application command line should now be:

<code>
capturereplayc -S TEST -m qpid -tport pub  -dictionary data/data.dict -f data/openmama_utpcasheuro_capture.5000.10.qpid.mplay
</code>

The output from the command should look as follows:

<pre>
<nowiki>
[damian@openmama openmama]$ capturereplayc -S TEST -m qpid -tport pub  -dictionary data/data.dict -f data/openmama_utpcasheuro_capture.5000.10.qpid.mplay
2013-12-19 10:41:34: 
********************************************************************************
Note: This build of the MAMA API is not enforcing entitlement checks.
Please see the Licensing file for details
**********************************************************************************
CONNECTION ERROR connection aborted
...........
</nowiki>
</pre>

### mamalistenc 
Now that we have our publisher ready and active, we can set up our client applications. For most users of OpenMAMA, the first and most common client application utilized is mamalistenc. This is a very full featured client app, with a wide variety of command line options and functionality available. For this example however, we're going to use a fairly simple set of these features. The requisite help text is as follows:

<pre>
[damian@openmama openmama]$ mamalistenc --help
Example Mama API market data subscriber.

Usage: mamalistenc -S symbolNameSpace [-s symbol | -f symbolFile]
                  [-tport transportName] [-dict_tport transportName]
                  [-d dictSymbolNameSpace] [-vDgE?IL1qWB] [-DF fileName]
                  [-hw highWaterMark] [-lw lowWaterMark]
                  [-threads numThreads] [-r throttleRate]
                  [-t subscriptionTimeout] [-version (requires -m)] [-m middleware]

Options:
...
-m                The middleware to use [wmw/lbm/tibrv]. Default is wmw.
...
-S, -source, -SN  The symbol name space for the data.
-s                An individual symbol to subscribe to.
                  Can be passed multiple times.
...
-tport            The name of the transport being used. Corresponds to entries in the mama.properties file.
-v                Increase the level of logging verbosity. Pass up to 4 times.
...
-?, --help        Print this usage information and exit.

 Examples:

 1. Subscribe to the MSFT BBO from the NASDAQ UTP feed. Feed running with a
    symbol namespace of "NASDAQ". Middleware is WombatTCP:

    mamalistenc -S NASDAQ -s MSFT -tport tport_name -m wmw
...
</pre>

From the above it should be fairly clear what command line options we're going to specify: a middleware (-m qpid), a transport (-tport sub), a source which matches that of the publisher (-S TEST) and a symbol to subscribe to, in this case one we know exists in the data (-s DE000CM95AU4.EUR.XPAR)

Putting this all together we get the full command line:

<code>
mamalistenc -m qpid -tport sub -S TEST -s DE000CM95AU4.EUR.XPAR
</code>

When we run the command, we should see output like the following (I've removed some of the output to make it a bit clearer):

<pre>
<nowiki>
[damian@openmama openmama]$ mamalistenc -tport sub -m qpid -S TEST -s DE000CM95AU4.EUR.XPAR 
2013-12-19 10:59:20: 
********************************************************************************
Note: This build of the MAMA API is not enforcing entitlement checks.
Please see the Licensing file for details
**********************************************************************************
Type CTRL-C to exit.
Created subscription: source=[TEST], symbol=[DE000CM95AU4.EUR.XPAR]
DE000CM95AU4.EUR.XPAR.TEST.DE000CM95AU4.EUR.XPAR Type: INITIAL Status OK 
  MdMsgType            |    1 |            U8 | 1
  MdMsgStatus          |    2 |            U8 | 0
  MdSeqNum             |   10 |           U32 | 1
  MamaAppMsgType       |   18 |            U8 | 100
  MamaSenderId         |   20 |           U64 | 18446744069414626310
  wPubId               |  495 |        STRING | utpcasheuro_prod
  wIssueSymbol         |  305 |        STRING | DE000CM95AU4.EUR.XPAR
  wEntitleCode         |  496 |           I32 | 30870
  wDisplayHint         | 1195 |           I32 | 0
  wInstrumentType      |  298 |        STRING | Warrant
  wOrderBookId         | 4022 |        STRING | 227424
  wExchangeId          | 3474 |        STRING | 1
  wAdjPrevClose        |  520 |           F64 | 0.000000
  wPrevVolume          |  438 |           I64 | 0
                       | 3321 |        STRING | 25
  wInstTypeOrig        | 1101 |        STRING | 303
  wLotSize             |  324 |           I64 | 1
  wMarketCategory      | 1168 |          CHAR | G
  wDescription         |  258 |        STRING | GOLD  2256TPIOPENZ
  wCountry             | 1048 |        STRING | DEU
  wMnemonic            | 4527 |        STRING | 4084Z
...
  MamaSendTime         |   16 |        STRING | 21:30:12.231
DE000CM95AU4.EUR.XPAR.TEST.DE000CM95AU4.EUR.XPAR Type: UPDATE Status OK 
  MdMsgType            |    1 |            U8 | 0
  MdMsgStatus          |    2 |            U8 | 0
  MdSeqNum             |   10 |           U32 | 2
  MamaAppMsgType       |   18 |            U8 | 0
  MamaSenderId         |   20 |           U64 | 18446744069414626310
  wPubId               |  495 |        STRING | utpcasheuro_prod
  wIssueSymbol         |  305 |        STRING | DE000CM95AU4.EUR.XPAR
  wEntitleCode         |  496 |           I32 | 30870
  wDisplayHint         | 1195 |           I32 | 0
  wInstrumentType      |  298 |        STRING | Warrant
  wOrderBookId         | 4022 |        STRING | 227424
  wExchangeId          | 3474 |        STRING | 1
...
  MamaSendTime         |   16 |        STRING | 21:38:36.321
DE000CM95AU4.EUR.XPAR.TEST.DE000CM95AU4.EUR.XPAR Type: UPDATE Status OK 
  MdMsgType            |    1 |            U8 | 0
  MdMsgStatus          |    2 |            U8 | 0
  MdSeqNum             |   10 |           U32 | 3
  MamaAppMsgType       |   18 |            U8 | 0
  MamaSenderId         |   20 |           U64 | 18446744069414626310
  wIssueSymbol         |  305 |        STRING | DE000CM95AU4.EUR.XPAR
  wEntitleCode         |  496 |           I32 | 30870
  wAdjPrevClose        |  520 |           F64 | 5.970000
  wSeqNum              |  498 |           I32 | 10761
  wLineTime            | 1174 |        STRING | 07:16:29.193
  wSrcTime             |  465 |        STRING | 07:16:28.943
  MamaSendTime         |   16 |        STRING | 21:38:49.918
</nowiki>
</pre>

#####Explanation
Hopefully the process here all seems straight forward, but this simplicity masks some complexity performed by MAMA under the hood. When the capturereplayc application starts, it begins by initializing MAMA and loading the required middleware bridge. It then sets up a series of publishers for each symbol found in the playback data, then creates a connection on the transport passed to it (what form this connection takes is managed by the loaded middleware bridge, and should be opaque to the user). This connection then waits for requests for data to be sent to it. 

The mamalistenc application then starts up, initializing MAMA and loading the bridge in the same way as capturereplayc. It then makes a request on it's transport for the dictionary, which defines the field IDs (fids), names and data types which will be sent by the subsequent data. The publisher sends this back to the client, which then proceeds to make requests for the symbols passed to it. If the publisher recognizes the symbol requested, it proceeds to read data from the playback file, constructs an initial (essentially a list of all the fields available for a symbol, and their current state), sending it, then publishes each update for that symbol as it finds them in the file.

When these reach the mamalistenc client application, it proceeds to unpack the message from the middleware format, then iterates the data contained, writing the full message to the screen, and using the data contained in the dictionary to determine the field names and types of data contained within them. This output is what we finally see available above.

#### bookticker

As mentioned above, capturereplayc also allows us to make subscriptions to orderbook data using the MAMDA example applications. We're going to make use of one such application, bookticker, to demonstrate the functionality. As above, checking the help text for bookticker results in the following:

<pre>
[damian@openmama openmama]$ bookticker --help
Usage: bookticker [-S source] -s symbol [-s symbol ...]
 [-threads x] [-deltas] (For showing Deltas) [-e] (For showing Entries)
[-k] (process market orders) [-tport] [-dict_tport] 
</pre>

Using the same process as mamalistenc, we decide the command line arguments we're going to use: qpid middleware (-m qpid), transport (-tport sub), source (-S TEST), and symbol (-s bPTBIZJYE0064.EUR.ENXL). Note the lower case 'b' at the start of the symbol, which denotes that this symbol contains orderbook data. Putting this all together we get the following command line:

<code>
bookticker -m qpid -S TEST -tport sub -s bPTBIZJYE0064.EUR.ENXL
</code>  

We'll need to stop the previous mamalistenc application if it's still running (easily achieved by pressing ctrl-c), then execute the command above. The resulting output should look like:

<pre>
<nowiki>
[damian@openmama openmama]$ bookticker -m qpid -S TEST -tport sub -s bPTBIZJYE0064.EUR.ENXL
2013-12-19 11:48:38: 
********************************************************************************
Note: This build of the MAMA API is not enforcing entitlement checks.
Please see the Licensing file for details
**********************************************************************************
MamdaOrderBook strict checking is on
RECAP!!!  (seq# 1)
Book for: bPTBIZJYE0064.EUR.ENXL
        Time     Num    Size   Price Act | Act Price   Size    Num       Time  

COMPLEX DELTA!!!  (seq# 2)
Book for: bPTBIZJYE0064.EUR.ENXL
        Time     Num    Size   Price Act | Act Price   Size    Num       Time  
   06:12:59.379    1     107   12.10  A  |  A  12.67   100     1      06:12:59.379   
   06:12:59.379    1     248   12.05  A  |  A  13.20   502     1      06:12:59.379   

COMPLEX DELTA!!!  (seq# 3)
Book for: bPTBIZJYE0064.EUR.ENXL
        Time     Num    Size   Price Act | Act Price   Size    Num       Time  
   09:36:39.437    1   50000   12.63  A  |  A  12.67   100     1      06:12:59.379   
   06:12:59.379    1     107   12.10  A  |  A  12.68   50000   1      09:36:39.437   
   06:12:59.379    1     248   12.05  A  |  A  13.20   502     1      06:12:59.379   

COMPLEX DELTA!!!  (seq# 4)
Book for: bPTBIZJYE0064.EUR.ENXL
        Time     Num    Size   Price Act | Act Price   Size    Num       Time  
   09:55:57.726    1   50000   12.62  A  |  A  12.67   100     1      06:12:59.379   
   06:12:59.379    1     107   12.10  A  |  A  12.68   50000   1      09:36:39.437   
   06:12:59.379    1     248   12.05  A  |  A  13.20   502     1      06:12:59.379  
</nowiki>
</pre>

What you see output is a representation of the current state of the order book as maintained by MAMDA. As updates flow in, the book is updated, and levels will be added, removed and altered. Again, the otherwise simple commands hide a reasonable level of complexity which is managed by OpenMAMA under the hood.

## What Next?
So, now you've had OpenMAMA up and running, and skipped through a reasonable range of the example applications, the question is where to go from here. At this stage I would take a look at some of the example application code, and start reading up on some of the other documentation. Checking out the code walk through for [mamalistencpp walkthrough](http://www.openmama.org/example-walk-through website) will give you a feel for what it takes to write a relatively complete OpenMAMA application, and checking out the contents of the examples folder should demonstrate the breadth of functionality available. 
