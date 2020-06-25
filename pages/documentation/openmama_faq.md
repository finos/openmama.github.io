---
title: Frequently Asked Questions
sidebar: openmama_sidebar
permalink: openmama_faq.html
folder: openmama
toc: false
---
### Is OpenMama 2.x wire compatible with 1.x?

Yes. The wire level protocols are defined by the middlewares and message formats that OpenMAMA supports. If you are using the the underlying libraries, e.g. Avis, then OpenMAMA will be backwards compatible.

### What component / function provides the parsed values from mama.properties?

**_mama_open()_** by default attempts to load properties from `$WOMBAT_PATH/mama.properties`. 

**_mama_openWithProperties(path, filename)_**initializes OpenMAMA reading the properties from path/filename rather than $WOMBAT_PATH/mama.properties.

**_mama_getProperty(const char* name)_** returns the property value given the property name. 

**_mama_setProperty(...)_** alows applications to set/modify properties prgramatically.

**_mama_setPropertiesFromFile(path, filename)_** loads additional properties from the specfied file.

`common/c_cpp/src/c/property.h` defines the low level interface for manipulating property files. It uses the flex grammar defined in `common/.../c/properties.l` to parse properties files.

### How does my bridge access configuration in mama.properties?

Bridges should use _mama_getProperty()_ to access properties. Bridges should prefix all properties with `"mama.<bridge_name>"`. The canonical form is `"mama.<bridge_name>.<category>.[<name>].property"`. The optional name allows for multiple `"named"` configurations. For example, `mama.some_middleware.transport.my_transport.broker_address=127.0.0.1` defines the broker address for a transported named `"my_transport" on some_middleware`.

### Do I have to parse the strings myself, or can I provide just the components I need such as the final token that identifies the actual setting I need?

The properties parser only knows how to parse the file into name value pairs so bridges need to interpret the resulting value strings. There are a few helper functions like _strtobool()_ in `common/.../c/wombat/strutils.h`; however it might be nice to start building a well defined library of property parsers/validators standard types (IP addresses, integers, comma delimited lists, etc.).

### How / where do I define the configuration parameters that are settable in mama.properties?

I suggest that you create `properties.h` file for your bridge with macros for all your properties and a `properties.c` file with functions to read and interpret them.

### Does OpenMAMA come with an out-of-the-box encoding for message payload, or is this supposed to be provided by the bridge?

Currently the Avis message and Qpid proton message payloads are the only open source payload implementations. Since payloads are not dependent on middlewares, it should be possible to use these payloads with other middleware bridges. 

There are of course other potential FOSS payload implementations, with one interesting possibility being [Google Protocol Buffers](http://developers.google.com/protocol-buffers/).

### Does OpenMAMA come with the messaging engine that manages the event loop, queues, queue monitoring, quality of service detection, etc. or does that all (or some of it) have to be provided by the bridge implementation?

MAMA currently contains default implementations for queues and timers, contained within the of **_OpenMAMA common_** libraries. We have also considered adding a default implementation for IO Events, as well as certain other core functionality, which is likely to be based on that implemented within the Qpid Proton bridge. Since most applications do not use IO Events, implementing them is optional.

### How do I clean the build?  I noticed that there are object files all over the place next to my source files. How do I get rid of these?

In most instances, `scons -c` should clean up the entire build. Failing that you can use `git clean -f` but be careful as this will delete files that aren't tracked! use `git clean` to check what would be deleted.

### Have we considered separating bridges from the OpenMAMA project? Related: how do we configure OpenMAMA to build with multiple bridges, or one bridge but not another?

We have considered the ability to build out of tree middleware and payload bridges, and this should indeed be possible, though at present we do not provide a SConstruct/SConscript which provides the ability. 

Building multiple in tree middleware bridges is as simple as passing a comma separated list to the _middleware_ argument of a scons line. For example, the following will build the Qpid Proton and Avis middleware and payload bridges:

```
scons middleware=avis,qpid
```

### Is OpenMAMA intended to be interoperable with systems such as JMS or STOMP?

The short answer is no, it's not intended be interoperable with JMS nor STOMP. Longer answer is a bit more complicated...

OpenMAMA fulfils much the same role as JMS, in that it's an API which abstracts underlying messaging technologies. OpenMAMA comes from a slightly different angle though in that it's built for performance, is cross language and has a history within market data. If both OpenMAMA and a JMS used the same underlying payloads and transport, e.g. an AMQP implementation, then it's possible that they could interoperate. It would need to be tested though as not all bindings for AMQP (for example) will use it in exactly the same way.

### What is a typical use case for OpenMAMA?

Credit: Les Spiro (lspiro@tick42.com):

> OpenMama can be used for more than this, but (in my opinion) the typical use case is publishing market data, for example prices for financial instruments (e.g Vodafone or IBM) from stock exchanges like (London Stock Exchange or New York Stock Exchange).
>
> 1. A publisher with multiple subscribers (can be 100's subscribers to one publisher, obviously it can be 1 to 1).
> 2. Named streams being published, and (usually) all subscribers will see the same data for a given stream. The price for Vodafone via a stream name like VOD.LN is a typical stream name.
> 3. Data is published using Image/Update semantics, so an initial image with all fields (typically several hundred can be a lot more) is sent to a client subscribing to a new stream. After the initial image, update messages are sent which only contain those fields that have changed (updates are typically small in range 10-50 fields)
> 4. Potentially fast moving data. Update rates (for a stream of anywhere from 10 to a few hundred updates per second - can be higher). A subscriber can expect to be processing many thousands of updates/second. 10k/second is quite a high load for a single subscriber, I would say 50k updates / second is a high load, although there are applications that process more.
> 5. All update streams have a state to indicate if the data is available and up to date or not (not live might mean stream does not exist, or there is a temporary problem in the stream).
> 6. Updates can be dropped, provided the state of the Stream is correctly updated. If a problem occurs (for example overload of updates or subscriber needs to restart) most OpenMama application just discard any pending queues, request a new image and start to process the updates. There are exceptions to this (TCA and tick recording s/w) and they often struggle to recover updates that were sent during restarts.>
>There are loads of exceptions to the above, Subscribers and Publishers can communicate using private channels, there are tick replay mechanisms etc, but I think this gives an accurate feel for the area that OpenMAMA was developed for.
