---
title: What is OpenMAMA?
permalink: what_is_openmama.html
---

About OpenMAMA
--------------

-   OpenMAMA is an open source project that provides a high performance middleware agnostic messaging API that interfaces with a variety of message oriented middleware systems
-   Licensed under the LGPL 2.1 license
-   Hosted at The Linux Foundation in a neutral environment that encourages collaboration
-   Follows open source development methods and processes
-   Includes open and accessible mailing lists, source code repository, and bug tracking systems
-   Participation is open to any developer, corporation or entity, provided that they abide by the terms of the project, and the LGPL 2.1

Why is OpenMAMA important?
--------------------------

OpenMAMA:

-   Enables users to embrace new middleware technologies and applications as the market innovates
-   Independent from middleware technologies
-   Helps organizations speed up their time-to-market for event driven applications and improve their messaging middleware technology
-   High potential for market penetration outside of the financial sector, towards other sectors such as Telecommunication, High Performance Computing, Web Services and Logistics

{% include openmama-slides.html %}

**[OpenMAMA Overview](http://www.slideshare.net/OpenMAMA/openmama-overview "OpenMAMA Overview") **from **[OpenMAMA](http://www.slideshare.net/OpenMAMA)**

You can download the presentation by clicking here

Why is having a common messaging API important?
-----------------------------------------------

A common middleware agnostic messaging API provides several advantages:

-   It allows developers to bring applications to market more easily and rapidly, within any industry-standard middleware environment, irrespective of the network infrastructure.
-   It ensures high performance both in terms of throughput and message latency.
-   It provides commonality at API level but freedom to differentiate both at lower and higher stacks (ie. middleware technology and applications).

How OpenMAMA Works
------------------

OpenMama uses a common publish/subscribe idiom (pub/sub). In this messaging pattern the messages are not sent directly to the receivers, but published to a topic. Subscribers express interest in one or more topics, and receive only messages that interest them. This decoupling of publishers and subscribers allows for greater scalability.