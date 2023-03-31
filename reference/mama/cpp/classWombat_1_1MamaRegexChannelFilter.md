---
title: Wombat::MamaRegexChannelFilter
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaRegexChannelFilter





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaRegexChannelFilter](classWombat_1_1MamaRegexChannelFilter.html#function-mamaregexchannelfilter)**() |
| void | **[setDefaultChannel](classWombat_1_1MamaRegexChannelFilter.html#function-setdefaultchannel)**(int channelId) |
| void | **[addRegex](classWombat_1_1MamaRegexChannelFilter.html#function-addregex)**(const char * regexStr, int channelId) |
| int | **[getChannel](classWombat_1_1MamaRegexChannelFilter.html#function-getchannel)**(const char * target) |

## Public Functions Documentation

### function MamaRegexChannelFilter

```cpp
inline MamaRegexChannelFilter()
```


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA regex filter to help filter strings into channels (ints). The channel itself has no special meaning - it's simply a number to produce when each regular expression is matched.

The main use case is for load balancing dispatcher queues according to topic names.


### function setDefaultChannel

```cpp
inline void setDefaultChannel(
    int channelId
)
```


**Parameters**: 

  * **channel** The channel to use when no matches are found 


**Return**: A mama_status value to reflect if this operation was successful. 

Sets a default channel to use if no filters produce hits during matching. 


### function addRegex

```cpp
inline void addRegex(
    const char * regexStr,
    int channelId
)
```


**Parameters**: 

  * **regex** The regex string to add 
  * **channel** The channel to route to for this regex


**Return**: A mama_status value to reflect if this operation was successful. 

Adds a regex string and associated integer. During calls to getChannel, the target string will be matched against this regular expression to see which channel matches it.


### function getChannel

```cpp
inline int getChannel(
    const char * target
)
```


**Parameters**: 

  * **target** The string to try matching according to


**Return**: A mama_status value to reflect if this operation was successful. 

Looks up all channel filters to see which channel this target should be routed to.


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100