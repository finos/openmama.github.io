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

**[OpenMAMA Overview](https://www.slideshare.net/OpenMAMA/openmama-overview "OpenMAMA Overview") **from **[OpenMAMA](https://www.slideshare.net/OpenMAMA)**

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

What is OpenMAMDA?
------------------

OpenMAMDA (Open Middleware Agnostic Market Data API) is a framework running on top of OpenMAMA which provides a market data specific API abstracting quotes, trades, order books, option chains and more, and which provides significant functionality to simplify development of trading applications. As an extension of the core OpenMAMA functionality, OpenMAMDA is developed and maintained as part of the main project, utilizing the same governance structures, development process and resources as OpenMAMA. 

What problems does OpenMAMDA solve today?
-----------------------------------------

Developing applications to work with market data is hard - a developer must gain a firm grasp of different data types they will be manipulating, and the variations within the data sources, even when such details are irrelevant to the application they wish to write. OpenMAMDA removes this burden and complexity from your applications, providing a consistent and efficient implementation of intricate market data structures, with a clean and concise market data model (and in the future, support for ad hoc models as well).

OpenMAMDA long term vision and working group scope
--------------------------------------------------

As a standard abstraction library for messaging, OpenMAMA integrates inter-process communication (IPC) under a single API allowing real time inter-operation between applications over a variety of transports; however, the absence of a standard representation for content diminishes much of the value of open communication. To realize the goal of an open platform for the financial services community where participants and their systems communicate seamlessly, and are agnostic as to the data source, requires an open data model to standardize content and the corresponding API to support the data model.

Long Term Objectives
--------------------

As the effort progresses, we envision the working group splitting into two sub-groups: one focusing on specifying and formalizing the data model itself, and the second, on defining an architecture and implementation approach for OpenMAMDA as the reference implementation for the data model. The second group will also address a potential tool chain that allows extensions of the data model and the integration of extensions into OpenMAMDA. Each group will focus on distinct tasks and work closely with one another to ensure that both reach their corresponding objectives. Although the OpenMAMDA and Open Data Model Technical Working Group is still in its infancy, initial discussions identified several goals for both the Data Model and OpenMAMDA:

-   Open Data Model
    -   Include all asset classes
    -   Suitable for market data across regions
    -   Support for customization and extension
    -   Applicable across multiple product sets
    -   Correctly handle all data types: real time, cached, conflated, computed, etc.
-   OpenMAMDA
    -   Full support for the Vela Data Model
    -   Additional support multiple "pluggable" data models that can extend the Open Data Model, or provide alternative data models.
    -   Implement a flexible event model supporting n-to-m mappings of incoming messages to API events
    -   Ability to trigger API events based on message contents (if a messages contains fields x, y and z raise event A.

Our early discussions clearly demonstrated the complexity of the problem caused by the wide variety of semantic information which exists between venues . For example, it is very difficult to normalize security statuses across multiple venues and regions. Moreover, different exchanges and data providers convey market events with different messages, message types or sequences of messages. The temporal and stateful nature of market data further complicates developing a comprehensive market data model and API. Caching, conflation, computed fields, and reference data muddy the waters further. In the face of these complex issues the working group plans to inform and narrow the scope of its long term analysis by defining short term achievable goals and experiments.

Near Term Objectives
--------------------

In order to determine the effort required to adapt OpenMAMDA to a different data model an analysis task is ongoing whereby we plan to pass market data from an Exegy ticker plant through OpenMAMA into OpenMAMDA to test the feasibility of modifying the current version of OpenMAMDA to normalize and process the data properly. This analysis will expose how much of the current "data model' is hard coded into MAMDA and identify some of the challenges we might face in reinventing OpenMAMDA to work with multiple data models.

The working group is also looking at various binary representations for the data model that might be suitable for efficient use within OpenMAMDA. At the same time, we are trying to explore some possible binary representations of the data itself within OpenMAMDA to determine if they are flexible and high performance enough to meet our requirements.

We are also investigating the feasibility of setting up an OpenMAMDA and Open Data Model lab where we can test and evaluate various approaches and solutions. This environment will ideally provide market data from a variety of sources as well as well has OpenMAMA based solutions from various vendors.

Tick42, in parallel, is exploring technology to produce a tool chain that can take a data model definition and produce a publisher to subscriber demo over the OpenMama API, with data model specific classes to carry events. The idea would be that this tool chain could run over multiple bridges, including bridges that are feed handlers rather than middleware adapters.

To participate in the OpenMAMDA and Open Data Model working group please join the mailing list at: <http://lists.openmama.org/mailman/listinfo>