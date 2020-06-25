---
title: Performance Testing
sidebar: openmama_sidebar
permalink: openmama_performance_testing.html
folder: openmama
toc: true
---
## Introduction

I had initially placed a section on **considerations** at the top, but then I figured everyone
would scroll past it anyway and go straight to the commands to run, so I am taking this opportunity to simply
let you know that it's there, and encourage you to [read it](#considerations). Particularly if you are reasonably new to performance testing
middlewares or market data platforms.

## Prerequisites

This page assumes that you already know how to:

* Ensure clocks are synchronized between all boxes (ptp etc)
* Tune all boxes for the target middleware
* Install OpenMAMA
* Configure OpenMAMA based applications
* Run OpenMAMA based applications from the command line

## Tools

The only tools used here will be the performance tools provided by OpenMAMA. Taskset is provided by Red Hat / CentOS package
managers.  Note that if you are creating your own
build of OpenMAMA from source, you will need to add the `with_testtools=y` parameter to your build command. Specifically
we will be using:

* taskset
* mamaproducerc_v2
* mamaconsumerc_v2

They should be in the `bin` directory of your release. If not, you can grab the latest release of OpenMAMA [here](https://github.com/OpenMAMA/OpenMAMA/releases).

## Test Cases and Commands

Here are a few commands you can run. Note that the producer in an attempt to throttle publish rates with high
resolution will actually pin CPU, so you're advised to use taskset to isolate all commands. Also note that
the following command line parameters and what they do:

| Parameter                              | Works for      | Description                                                 |
| -------------------------------------- | -------------- | ----------------------------------------------------------- |
| -?                                     | all            | Usage text                                                  |
| -tport [transport]                     | all            | This specifies the MAMA Transport to use                    |
| -rt                                    | producer       | This will make producer use CLOCK_REALTIME                  |
| -m [middleware]                        | all            | This is the middleware bridge to use                        |
| -s [symbol]                            | all            | This is the symbol name to use                              |
| -csv [csv file]                        | consumer       | This can be provided to include csv formatted output        |
| -percentiles [99,99.9]                 | consumer       | This will calculate percentile latencies on the client      |

You'll obviously need to replace the values which are provided in our examples with your own values to taste.

Note that by default the consumer measures the time between the `MamaSendTime` (which is injected by the producer into each message)
and the client receive time. Other timestamps are also available - see the help texts for details.

### Pub / Sub Test

Most middlewares perform best under this scenario. The idea is to literally make the publisher go as fast as it
can go using a single topic.

So on the publish side, you run:

```
./mamaproducerc_v2 -tport pub -s A -m qpid -rt
```

And then on the subscribe side, you run:

```
./mamaconsumerc_v2 -tport sub -s A -m qpid
```

### Pub / Sub Test (many topics)

This where cracks may start to appear. The example below will do the same test as above, but with 10,000 symbols
rather than a single topic (you can also use a `-f` parameter to both commands if you have specific symbols in mind):

```
./mamaproducerc_v2 -tport pub -numTopics 10000 -m qpid -rt
```

And then on the subscribe side, you run:

```
./mamaconsumerc_v2 -tport sub -genSyms 10000 -m qpid
```

### Ramp Test

A ramp test is a great way to get a decent handle on what your middleware can do and specifically how it behaves at different data rates
for latency vs throughput. It involves starting with a low rate, then gradually increasing it while observing the receive message rate
and the latency. Also be careful for this test to ensure you spot whether the producer or consumer slowed down first.

This test will run a ramp test where the data rate will increase by 5% (the `-steps` parameter) up to 100% of the target rate (`-target`)
and it will make this increase every 10 seconds (`-stepInterval`).

So on the publish side, you run:

```
./mamaproducerc_v2 -tport pub -numTopics 10000 -m qpid -rt -target 10000 -steps 5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100 -stepInterval 10
```

And then on the subscribe side, you run:

```
./mamaconsumerc_v2 -tport sub -genSyms 10000 -m qpid 
```

### Spike Test

A spike test is useful for deliberately introducing erratic data rates onto the backbone. Note that results should always be taken with
a pinch of salt here though since it's not always guaranteed that the publisher is *capable* of publishing at the required burst rate,
so low latencies may well be caused by publisher not publishing fast enough rather than messages being super fast (e.g. TCP based transport).

This test will publish at a `-target` rate of 10,000 msg/s, but will also run bursts every 10 seconds. By default these will be between a factor
of 5 and 10 times the target rate of publishing, but that can be configured using the `-burstLow` and `-burstHigh` parameters.

```
./mamaproducerc_v2 -tport pub -numTopics 10000 -m qpid -rt  -target 10000 -burst -burstInterval 10
```

And then on the subscribe side, you run:

```
./mamaconsumerc_v2 -tport sub -genSyms 10000 -m qpid
```

## Considerations

Before diving into any performance testing, I recommend going through some general things to consider
when you're getting to grips with whether or not a particular platform can satisfy your performance requirements.

### What is the goal?

Are you going for throughput? Latency? Best compromise of both? Providing a single number which encompasses how well
a particular OpenMAMA stack is performing is generally a really bad idea unless you have a single, narrow use case,
and you're certain that the performance testing in question has satisfied it.

In reality there are many factors in play when you want to carry out performance testing:

* How many clients will you need each application instance to connect to?
* What are the expected data rates?
* Do you have a breaking point in mind for unacceptable latency?
* Do you know what the likely message sizes flying around the network are likely to be?
* How many symbols are likely to be in play?
* How fast can you process each message (e.g. if it takes your application 10us to process a message anyway, there
  may be little benefit to testing beyond 100k msg/s)
* What hardware is available?

It's easy to fall into the trap of thinking "it should be really fast with a latency of zero" without considering
each of the above. Performance testing is always a tradeoff between lab conditions and real world scenarious. Without
being cognescent of the above, you could get really good numbers which in no way translate to a real production scenario.

Now, let's go through these points again and this time consider how this could radically impact performance:

#### How many clients?

Let's say you didn't consider how many clients were expected during your test. You could end up producing numbers which
assumes a single client. Now, if the middleware is multicast based this might not be a big deal since each new client
doesn't place any real load on the publisher. However if the publisher uses tcp, you could find that the number of clients
makes an enormous difference to performance.

#### What are the expected data rates?

There's little point in testing for fantasy scenarious (fantasy low or fantasy high). There's especially little point in
measuring latency while doing this. There are some middlewares which have hard coded batching parameters which would mean
that (for example) at data rates of 1 msg/s you will consistently get latencies of 10ms, but the latency then goes down
when the rates go up and batches start getting filled and flushed quicker. Similarly there are other middlewares which
can start off with very low latencies, but which then will deliberately give ground on latency in order to obtain better
throughput at higher rates. Most middlewares will provide several parameters which can be used to tune this behaviour too.

#### Do you have a breaking point in mind?

What latency would be OK? What is the minimum throughput that you require? Aimlessly picking numbers with various vendors
and comparing them is an interesting scientific experiment but it lacks practical application unless you have specific
measurable targets in mind.

#### Message sizes

Message sizes are a big deal. Especially for middlewares and payloads which have fat enveloping in play where a large number
of messages might cause much more bandwidth on the wire than a fewer number of larger messages. If you have a data source
in mind, start with a typical message size from that as a starting point.

#### How many symbols?

The behaviour here varies wildly across middlewares, but this is probably one of the most frequently overlooked but critical
component. Pumping lots of symbols through a system can cause linked list iteration and cache misses galore depending on
the middleware. Again though, too many gets into the fantasy realm and you can end up benchmarking a ridiculous scenario.

#### How fast can you process each message?

My application is leaking memory! Actually... no it's not... that's the middleware spooling messages for you because you can't
keep up. If you can't process messages any faster than a certain rate, there's little advantage in performance testing larger
rates.

#### Hardware available

Sometimes you have to live within your means. It's possible to have a middleware which will give you
outrageously good numbers, but will demand custom hardware and many cores.