---
title: Bridge Developer FAQ
sidebar: openmama_sidebar
permalink: openmama_bridge_developer_faq.html
folder: openmama
toc: false
---
## How does my bridge access configuration in mama.properties?

Bridges should use `mama_getProperty()` to access properties. Bridges should prefix all properties with `mama.<bridge_name>`.

The canonical form is `mama.<bridge_name>.<category>.[<name>].property`. The optional name allows for multiple `named` configurations. 

For example, `mama.some_middleware.transport.my_transport.broker_address=127.0.0.1` defines the broker address for a transported named `my_transport` on `some_middleware`.

## Where does responsibility for destroying memory lie within bridges?

As a general rule of thumb, whichever component has allocated memory is also responsible for destroying it. This means:

1. If you create a MAMA message (and then do whatever else with it - add as sub / vector message etc), you still own the memory for that MAMA message and are responsible for destroying it even after adding it to another message.
2. If you receive a MAMA message from the wire which has just been deserialized, that encapsulating MAMA Message still owns all memory for all associated sub messages and destroying a sub message in this scenario from the calling application would be illegal.

In #1, the application created the subMsg so the application needs to clean it up.
In #2, the deserialize functions in the parent mamaMsg create any subMsgs provided to the caller, so the parent mamaMsg is responsible for cleaning up that memory when it's destroyed.

## What is the expected behaviour of the message iterators?

The behaviour of the message iterators within OpenMAMA can be somewhat confusing, and is unfortunately a legacy behaviour. 

For bridge developers, the main area of concern is the C level iterators - the C++ level handles the oddity internally, so is not a concern for bridges. At the C level, there are two important cases - `begin` and the first call to `next`.

For a call to `begin`, the iterator should point to a position before the first element (something akin to a guard point prior to the first value). If dereferenced, the iterator should return the first element. A subsequent call to `next` should then step through to the first element, returning it again. 

For an example of code which handles these cases, check out the `qpidmsgPayloadIter_begin` code (in mama/c_cpp/src/c/payload/qpidmsg/iterator.c).

## What's the best way of ensuring my bridge performs as expected?

Running against the unit tests is likely to shake out the majority of common bugs, and we try and keep them updated as we hit different edge cases. If you can pass those, you should be reasonably confident in core behaviour. 

Similarly, if you can run through the suite of applicable example applications, and they display expected behaviour, that should be a reasonably solid indicator that everything is behaving as it should.

## Is Field ID 0 a valid FID?

FID 0 is actually used to denote 'No fid' - the FID equivalent of passing NULL in place of a string.

## What should `mamaMsg_getByteBuffer()` return?

A call to `mamaMsg_getByteBuffer()` will return you the binary data representing a message on the wire, in the format that is native to the payload OpenMAMA is abstracting. This can be useful in a number of circumstances, but isn't really leveraging the abstraction OpenMAMA provides. If there is support for the underlying payload in OpenMAMA, then you will be able to use the MamaMsg methods to iterate over or to random access the field/value values in a message. This means that a common interface can be used to access messages encoded in any format, allowing application developers to concentrate on writing applications, not dealing with particular protocols, which may change.

## What is the recommended course of action to take in the middleware bridge if a send should fail?

If none of the existing OpenMAMA error codes map to the error that occurs at the bridge level, then the general "platform error" should be used. You can log an error at the bridge level with more info, but there is no real programmatic way currently of asking for for info.

## Are all sends expected to be blocking sends from the application’s perspective?

Sends are generally considered to be blocking, as it's currently considered a platform error if they would block.

Adding explicit support for non-blocking sends would be a nice feature to add. At the OpenMAMA level this wouldn't require too much more than a new MAMA_STATUS code. To protect existing applications though the default behaviour be kept as blocking though, with a middleware specific config option to override, and documentation and examples added on how to handle the condition i.e. retry or drop.

## Can you separate the middleware from the payload?

The payload and middleware *are* already separate entities and it is quite possible to support multiple payloads on a single middleware.
OpenMama does currently support this, though there may be specific middleware restrictions that tie a middleware to a particular payload which are detailed below.

The middleware bridge call getDefaultPayloadId() can pass back a number of payload identifiers showing all the supported payloads. This is primary used for implicit loading of payload shared libraries.

The first one is used as the default but this can be changed programmatically at the API level. A default payload type is needed to use in the case where a payload is not specified at the API level when creating a MamaMsg.

The difficult part is separating the middleware bridgeMsg functionality from the payloadMsg functionality:

* The bridgemsg is the addressing information, i.e. Is it a request or a response? Is there a response address?
* The payloadmsg is the actual message contents.

In Avis because the bridgemsg information was built into the message contents the two became tightly coupled. In other middlewares which are more payload agnostic then this is not the case.

The other thing that is important is that if different payloads are supported by different middlewares then there must be a way to differentiate based on the received data. i.e. is a received message of type payload A or type payload B?

The mechanism for doing this is a hint parameter in mamaMsgImpl_setMsgBuffer() - the 4th parameter identifies the payload type so that the correct payload bridge is associated with the MamaMsg.

If the 4th parameter is not provided the payload type then OpenMAMA uses the first character of the data pointer as the identifier. This identifier value is defined by the enum values in mamaPayloadType.

E.g. for the Qpid Proton bridge:

    MAMA_PAYLOAD_QPID     = 'Q'

So if the middleware bridge does not explicitly tell us the payload type by passing MAMA_PAYLOAD_QPID in the hint parameter in mamaMsgImpl_setMsgBuffer() then we'll look at the first character in the buffer. If it's 'Q' then we identify it as a Qpid Proton payload and select the correct payload bridge to access the data.

## Can OpenMama support multiple symbols published over a single topic?  Would there be any complications (on the caching mechanism, for example) if a group topic model were followed?

OpenMAMA has the concept of group subscriptions, where multiple symbols are sent down a single subscription - this is actually a different subscription type on the client side. The publisher needs to send an initial for each symbol within the group before the 10 second timeout elapses. The specific symbol within the group is communicated using the wIssueSymbol reserved field. Each symbol has a separate context and has its own sequence numbers and gap detection.
