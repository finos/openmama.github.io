---
title: Qpid Bridge
sidebar: openmama_sidebar
permalink: openmama_qpid_bridge.html
folder: openmama
toc: true
---

## Qpid Proton

The Qpid Middleware Bridge is a fully featured pair of [middleware and payload bridges](openmama_bridge_documentation.html] 
which have been developed to provide support for the [Apache Qpid](http://qpid.apache.org/) message oriented middleware. 
The bridge has been built to take advantage of the [Proton](http://qpid.apache.org/proton/index.html) libraries, which have 
been built by the Qpid team to provide applications full featured support for the AMQP standard.

## Running

### Direct Pub/Sub
Note the mama.properties in the latest OpenMAMA release contains default "pub" and "sub" 
transports that should work out of the box assuming:

* You have an interface on the target machine up and running
* Pub and sub are on the same machine

So you can run by setting up and running the publisher:

```
export LD_LIBRARY_PATH=/path/to/mama/dir/lib:/path/to/proton/dir/lib
export WOMBAT_PATH=/path/to/directory/containing/mama/properties/file
./mamapublisher -tport pub -m qpid
```

Then similarly for the subscriber:

```
export LD_LIBRARY_PATH=/path/to/mama/dir/lib:/path/to/proton/dir/lib
export WOMBAT_PATH=/path/to/directory/containing/mama/properties/file
./mamasubscriber -tport sub -m qpid
```

Which should give you the following output on the subscriber:

```
mamasubscriberc: Recieved msg.
             MdMsgStatus     2                  I32                    0
                MdSeqNum    10                  I32                   94
          PublisherTopic 10002               STRING           MAMA_TOPIC
mamasubscriberc: Recieved msg.
             MdMsgStatus     2                  I32                    0
                MdSeqNum    10                  I32                   95
          PublisherTopic 10002               STRING           MAMA_TOPIC
mamasubscriberc: Recieved msg.
             MdMsgStatus     2                  I32                    0
                MdSeqNum    10                  I32                   96
          PublisherTopic 10002               STRING           MAMA_TOPIC
```

### Using the Qpid Broker
Note the mama.properties in the latest OpenMAMA release contains a default "broker" 
transports that should work out of the box assuming:

* Broker is running on loopback interface
* Broker is running in a mode which allows no authentication and the topic pattern `MAMA.*`. For example with the C++ qpid proton daemon, the command would be: `qpidd --auth no --topic-patterns MAMA.*`

After that, you can run clients and publishers exactly as you would for direct Pub/Sub, except now on both sides, you run with `-tport broker`.

### Market Data Publishing
Note that if you have a market data publisher, it will also support the publishing of 
vectors and Initials / Recaps. Also note that if you want to use mamaMsg_createForPayload(), 
the string to use to create a qpid message is "qpidmsg".

You can of course run across multiple boxes but if you do so, configuration parameters will 
need to be modified as outlined in the following section.

## Configuration 
Configuration options for the Qpid bridge are presently controlled by the mama.properties configuration file. 
There are a number of required properties which control the interfaces via which Proton will connect to other 
applications, as well as additional optional parameters which tune certain aspects of the underlying implementation. 
Parameters either apply to individual transports, and are thus referred to as transport parameters, or 
apply to the bridge as a whole, and thus called bridge parameters. These parameters are described below:

**NB all parameters are defined as `mama.qpid.transport.<parameter>` in `mama.properties`**

<table>
  <tr>
    <th>Parameter</th>
    <th>Requirement</th>
    <th>Content Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`[TPORT_NAME].outgoing_url`</td>
    <td>Required for subscribers - not for publishers.</td>
    <td>A valid AMQP URL</td>
    <td>This is where to send subscription requests to.</td>
  </tr>
  <tr>
    <td>`[TPORT_NAME].incoming_url`</td>
    <td>Required</td>
    <td>A valid AMQP URL</td>
    <td>This is the URL on which you are to listen. For publishers, this is where it expects incoming subscriptions to be made to. For subscribers, this is where to listen for point to point responses. This usually consists of a tilda (~) followed by a host / IP to indicate that this is a point to point listener.</td>
  </tr>
  <tr>
    <td>`[TPORT_NAME].reply_url`</td>
    <td>Required</td>
    <td>A valid AMQP URL</td>
    <td>This is how other nodes on the network can resolve your incoming_url and is usually the equivalent to incoming_url without the tilda character.</td>
  </tr>
  <tr>
    <td>`msg_pool_size`</td>
    <td>Optional</td>
    <td>A positive integer value</td>
    <td>The MAMA qpid bridge allocates a message pool in which to store messages which are waiting to be processed (i.e. while enqueued). This is the size, in messages, of that initial pool.</td>
  </tr>
  <tr>
    <td>`msg_pool_inc_size`</td>
    <td>Optional</td>
    <td>A positive integer value</td>
    <td>The MAMA qpid bridge allocates a message pool in which to store messages which are waiting to be processed (i.e. while enqueued). This is the size in messages by which the pool will increase by each time that the number of nodes in use exceeds the current pool size.</td>
  </tr>
  <tr>
    <td>`recv_block_size`</td>
    <td>Optional</td>
    <td>A positive integer value</td>
    <td>A positive integer value|The MAMA bridge will call pn_messenger_recv which expects a parameter indicating the number of messages which will be received at a time. Lowering this value will decrease latency as it will not wait for the recv block to fill before processing the messages.</td>
  </tr>
</table>

### Example configuration for mama.properties 
```
#################################################################################
## Example MAMA properties for QPID messaging middleware
#################################################################################

## For qpid transports, the following format strings are observed
## %r : Root (only for market data requests, otherwise blank). e.g. _MD
## %S : MAMA Source / Symbol Namespace. e.g. OPENMAMA
## %s : Symbol / Topic. e.g. MSFT
## %u : Transport uuid. e.g. 4542dc20-f1ae-11e3-ac10-0800200c9a66
## Type of qpid proton transport
mama.qpid.transport.broker.type=broker
## This is where we send subscription requests and inbox requests
mama.qpid.transport.broker.outgoing_url=topic://127.0.0.1/MAMA/%r/%S/%s
## This is where we listen for incoming messages
mama.qpid.transport.broker.incoming_url=topic://127.0.0.1/MAMA/%r/%S/%s
## This is where we listen for replies during request / reply
mama.qpid.transport.broker.reply_url=topic://127.0.0.1/MAMA/%u

## Where qpid is going to listen to for data to be pushed to
mama.qpid.transport.pub.incoming_url=amqp://~127.0.0.1:7777
## Where qpid publisher is to send data to once subscription is created
mama.qpid.transport.pub.reply_url=amqp://127.0.0.1:7777

## Source which you are going to consume from
mama.qpid.transport.sub.outgoing_url=amqp://127.0.0.1:7777
## Where qpid is going to listen to for data to be pushed to
mama.qpid.transport.sub.incoming_url=amqp://~127.0.0.1:6666
## Where qpid publisher is to send data to once subscription is created
mama.qpid.transport.sub.reply_url=amqp://127.0.0.1:6666

## The size of the initial qpid message pool of reusable messages
mama.qpid.transport.msg_pool_size=128
## When the message pool is depleted, increment its size in messages by this
mama.qpid.transport.msg_pool_inc_size=128
## This is the receive block side when passed to pn_messenger_recv
mama.qpid.transport.recv_block_size=10
```

## Code for the Qpid Bridge

The OpenMAMA Qpid Bridge consists of two separate components; a middleware bridge, which provides the core messaging functionality, including both publish-subscribe and request-reply messaging, as well as a range of other functionality required for OpenMAMA applications; and a payload bridge, which provides an mechanism for translating between, and encapsulating, the Proton message format which was to be used with OpenMAMA's internal message representation (MamaMsg). 

The full bridge code can be found within the OpenMAMA source, as follows:

```
mama/c_cpp/src/c/
                 payload/qpidmsg
                 bridge/qpid
```

The interface to OpenMAMA is defined by single header files within these directories - 
`qpidpayloadfunctions.h` for the payload, and `qpidbridgefunctions.h`. These headers 
have detailed comments relating to the use of each interface function, as well as 
recommendations for expected behaviour where appropriate. 

The header files are then supplemented by a series of source files, which handle 
the implementation of both the core interface functions, as well as any required 
helper functions. The source has been separated to aid understanding of the 
implementation - logically related functionality is grouped into source files, 
which are named based on the component they support. For example, the payload 
is built of field, iterator and payload sub files, while the bridge itself 
contains, among others, transport, queue and publisher implementation files.
