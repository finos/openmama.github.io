---
title: com::wombat::mama::MamaRegexChannelFilter
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaRegexChannelFilter





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaRegexChannelFilter](classcom_1_1wombat_1_1mama_1_1MamaRegexChannelFilter.html#function-mamaregexchannelfilter)**() |
| void | **[setDefaultChannel](classcom_1_1wombat_1_1mama_1_1MamaRegexChannelFilter.html#function-setdefaultchannel)**(int channelId) |
| void | **[addRegex](classcom_1_1wombat_1_1mama_1_1MamaRegexChannelFilter.html#function-addregex)**(final String regexStr, final int channelId) |
| int | **[getChannel](classcom_1_1wombat_1_1mama_1_1MamaRegexChannelFilter.html#function-getchannel)**(final String target) |

## Public Functions Documentation

### function MamaRegexChannelFilter

```java
inline MamaRegexChannelFilter()
```


Creates a MAMA regex filter to help filter strings into channels (ints). The channel itself has no special meaning - it's simply a number to produce when each regular expression is matched.

The main use case is for load balancing dispatcher queues according to topic names. 


### function setDefaultChannel

```java
inline void setDefaultChannel(
    int channelId
)
```


**Parameters**: 

  * **channelId** The channel to use when no matches are found 


Sets a default channel to use if no filters produce hits during matching.


### function addRegex

```java
inline void addRegex(
    final String regexStr,
    final int channelId
)
```


**Parameters**: 

  * **regexStr** The regex string to add 
  * **channelId** The channel to route to for this regex 


Adds a regex string and associated integer. During calls to getChannel, the target string will be matched against this regular expression to see which channel matches it.


### function getChannel

```java
inline int getChannel(
    final String target
)
```


**Parameters**: 

  * **target** The string to try matching according to 


Looks up all channel filters to see which channel this target should be routed to.


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100