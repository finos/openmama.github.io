---
title: Middleware Agnostic Messaging API (MAMA) C API
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Middleware Agnostic Messaging API (MAMA) C API



Middleware Agnostic Messaging API. The Middleware Agnostic Messaging (MAMA) API provides an abstraction layer over various messaging middleware platforms. In particular, MAMA adds market data semantics to messaging platforms that would otherwise be too limited for use as a market data distribution middleware. Features that MAMA adds to any messaging middleware are:

* Subscription management (initial values, throttling).
* Entitlements/permissioning
* Data quality.
The goal of MAMA is to maximize application portability. Once an application has been ported to MAMA, it should never have to be ported to another market data messaging API again. Many firms have invested time in building and maintaining their own abstraction APIs - and they should be commended for that. We hope that even those firms will see the benefit in migrating to MAMA and thereby reducing costs further and, as more third party firms migrate applications to MAMA (and MAMDA, see below), benefit even more from this compatibility.

MAMA currently supports the following middleware platforms:

* Wombat TCP Middleware (see [http://wombatfs.com](http://wombatfs.com))
* 29West Latency Busters Messaging (see [http://29west.com](http://29west.com))
* Tibco TIB/RV versions 6 and 7 (see [http://tibco.com](http://tibco.com))
A higher level market data API is also available: the Middleware Agnostic Market Data API (MAMDA). While MAMA provides a field-based abstraction to market data, MAMDA provides smart, specialized data types to deal with specific market data events, such as trades, quotes, order books, etc. MAMDA is particularly suitable for applications such as program trading and tick capture systems, where context is important. MAMA is more suited to applications that don't care about the meaning of fields, such as a simple, field-based market data display application. 

-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
