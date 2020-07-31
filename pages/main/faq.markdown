---
layout: page
title: Frequently Asked Questions
permalink: /faq.html
toc: true
---

What is the OpenMAMA project?
-----------------------------

OpenMAMA is an open source project hosted at the Linux Foundation. OpenMAMA provides a high performance Middleware
Agnostic Messaging API that interfaces with a **variety of properietary and open source message oriented middleware**
systems. It specializes in supporting paradigms specific to Market Data applications, and provides the **low
latency, high throughput** performance profile expected from such applications.

Why is it important?
--------------------

In high level terms of its functional highlights:

* It is a **vendor neutral** platform driven by those at the forefront of innovation in the financial services community.
* It enables companies to protect their technology investments and **removes the friction** in implementing new trading technology solutions.
* It removes vendor lock-in at middleware, payload and API levels. This enables users to **embrace new middlewares**
  and applications as the market moves.
* It helps organizations **reduce time-to-market** for event driven applications and improves their messaging
  middleware technology.

What are examples of solutions or services that can be implemented with OpenMAMA?
---------------------------------------------------------------------------------

There are a number of disparate services out there that use OpenMAMA. There is a good chance you have already used a system
which is powered by OpenMAMA somewhere along the chain if you have consumed Market Data. A typical stack often involves:

* **Market data publishing** data like quotes and trades and implement other services over an industry standard platform.
* Use of **various commercial and open source middlewares and payload bridges** throughout the stack depending on the
  environment (e.g. using RDMA for algorithmic applications, multicast for internal distribution, TCP for WAN etc).
* Market data application developers can write applications that publish and consume market data and may use that to
  **make trading decisions**, capture data etc.
* Value added services such as **entitlements** and **audit trails** are often bolted on to the offering.

Why is the project hosted at the Linux Foundation?
--------------------------------------------------

[The Linux Foundation](http://www.linuxfoundation.org/) provides a **neutral home** for the industry, and the open
source community to collaborate on OpenMAMA.

What does the Linux Foundation hope to achieve with the OpenMAMA Project?
-------------------------------------------------------------------------

The project facilitates collaboration between various companies and open source developers to advance the implementation
of an open source messaging platform. It is a one of a kind project, the first open standard and open source solution
for the community.

How is OpenMAMA different from similar open source and commercial software?
---------------------------------------------------------------------------

Today there is no common open source API that connects multiple middleware transports to applications across multiple
development platforms. OpenMAMA, unlike many other messaging APIs, focuses on the requirement for high throughput and
low latency messaging. OpenMAMA is open source and vendor neutral. It is backed by a community of users and developers
from numerous financial institutions, market data vendors, and technology firms.

Why do companies use OpenMAMA? What are the technical advantages of adopting it?
--------------------------------------------------------------------------------

OpenMAMA offers an open standard to lower cost and increase efficiency for all players. It prevents vendor lock-in and
**enables users to develop solutions without committing to a specific messaging platform**. OpenMAMA is truly agnostic -
applications which are written with OpenMAMA can be run on mulitiple messaging soulutons without any changes in the code
or even recompiling. OpenMAMA is fast, scalable, supports multiple platforms and languages.

What are the economic benefits of OpenMAMA?
-------------------------------------------

Adopting OpenMAMA:

* Reduces time to market and removes friction for companies who rely on messaging infrastructures
* Allows companies that use multiple middlewares to develop their applications to a single standardized API
* Eliminates the need to "wrap the wrapper" to avoid vendor lock in
* Reduces time to market with a single messaging API and value added features

Under which open source license is OpenMAMA made available?
-----------------------------------------------------------

OpenMAMA is licensed under the terms of the GNU Lesser General Public License version 2.1. You can view the full LGPLv2
license here: <http://www.gnu.org/licenses/lgpl-2.1.html>

What were the motivations for choosing that specific license?
-------------------------------------------------------------

LGPLv2 is an open source license that is more permissive than GPL. It provides more flexibility for both the users and
developers of the code. It enables businesses to use the code for commercial applications and in return these commercial
applications contribute back to the open source making the code richer in functionality and better in quality for all.
The commercial portion of applications that use OpenMAMA remain proprietary under the LGPLv2 while changes to the
OpenMAMA API are open source.

What is the governance model of the project?
--------------------------------------------

Please refer to [the Governance section here](about#governance).

How to get involved?
--------------------

For developers who want to get involved, the best way is just to dive in with the examples and
[get in touch with the community](support)

For companies that wish to participate in the OpenMAMA project can do so by signing the OpenMAMA Steering Committee
application form and by joining the Linux Foundation as a member - details available from
<http://www.linuxfoundation.org/about/join/corporate>.

Is there a contributor agreement for OpenMAMA?
----------------------------------------------

The OpenMAMA project does not require a contributor agreement. The OpenMAMA project will neither require nor accept
copyright assignments for code contributions to avoid extra bureaucracy or other obstacles discouraging contributions.

Who are the current participants in the project?
------------------------------------------------

Please see the [current members of the OpenMAMA Steering Committee](about#openmama-steering-committee-members), as well
as other [supporting organizations](about#supporting-organizations).

How does the roadmap get defined?
---------------------------------

The OpenMAMA project accepts new requirements and new feature requests from its members and from the open source
community through the mailing lists and issue tracking system. Roadmap items get defined and prioritized based on need,
available resources and other factors and passed to the Steering Committee for approval. Once approved, the Technical
Group continues working on the implementation of the defined roadmap items.

Who can we contact for further questions regarding the OpenMAMA project?
------------------------------------------------------------------------

For questions related to:

* Joining OpenMAMA as a Corporate - <info@linuxfoundation.org>
* OpenMAMA Trademark - <trademarks@linuxfoundation.org>
* OpenMAMA Compliance - <compliance@openmama.org>
* General Help - <https://gitter.im/OpenMAMA/OpenMAMA>
* Other inquiries - <info@openmama.org>

Where are the OpenMAMA trademark guidelines made available?
-----------------------------------------------------------

The Linux Foundation is the owner of the OpenMAMA trademark. Please consult: Linux Foundation trademark policy and
guidelines, or email <trademarks@linuxfoundation.org>.

Can ISVs/OSVs use the OpenMAMA logo?
-----------------------------------------------------------

The OpenMAMA mark and logo may be used in accordance with the Linux Foundation Trademark Usage Guidelines in
association with a product that has fulfilled all validation requirements of the OpenMAMA Compliance Program
for that product and for the specific version and release of OpenMAMA that is indicated.

The objective of the OpenMAMA Compliance Program is to avoid confusion and to preserve the value of the OpenMAMA mark
and to clearly and consistently communicate what is and what is not OpenMAMA in the marketplace. We believe that
preservation of the mark is important for the benefit of the entire OpenMAMA community.

ISVs / OSVs will be allowed to use the OpenMAMA mark and/or logo if:

-   They pass the OpenMAMA validation tests, and
-   They plan on using the mark and/or the logo in accordance with the Linux Foundation Trademark Usage Guidelines.

Are there any validation test suites available for OpenMAMA based stacks?
-------------------------------------------------------------------------

The OpenMAMA project will provide a suite of validation tests.

Is compliance mandatory?
------------------------

The OpenMAMA Compliance Program is only mandatory for products that claim to use OpenMAMA. Since the OpenMAMA source
code is open source, anyone can use it to build any kind of product, however should you claim or imply your product
runs or is compatible with OpenMAMA you must meet certain compliance criteria. If a company wishes to use the OpenMAMA
name or Logo with their product, they must first demonstrate that the product is in compliance and adhere to the
compliance process.
