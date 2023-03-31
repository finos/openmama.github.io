---
title: mama/regexchannelfilter.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/regexchannelfilter.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaRegexChannelFilter_create](regexchannelfilter_8h.html#function-mamaregexchannelfilter-create)**(mamaRegexChannelFilter * filter) |
| MAMAExpDLL mama_status | **[mamaRegexChannelFilter_destroy](regexchannelfilter_8h.html#function-mamaregexchannelfilter-destroy)**(mamaRegexChannelFilter filter) |
| MAMAExpDLL mama_status | **[mamaRegexChannelFilter_setDefaultChannel](regexchannelfilter_8h.html#function-mamaregexchannelfilter-setdefaultchannel)**(mamaRegexChannelFilter filter, int channel) |
| MAMAExpDLL mama_status | **[mamaRegexChannelFilter_addRegex](regexchannelfilter_8h.html#function-mamaregexchannelfilter-addregex)**(mamaRegexChannelFilter filter, const char * regex, int channel) |
| MAMAExpDLL mama_status | **[mamaRegexChannelFilter_getChannel](regexchannelfilter_8h.html#function-mamaregexchannelfilter-getchannel)**(mamaRegexChannelFilter filter, const char * target, int * channel) |


## Functions Documentation

### function mamaRegexChannelFilter_create

```cpp
MAMAExpDLL mama_status mamaRegexChannelFilter_create(
    mamaRegexChannelFilter * filter
)
```


**Parameters**: 

  * **filter** A pointer to populate with the newly allocated filter. 


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA regex filter to help filter strings into channels (ints). The channel itself has no special meaning - it's simply a number to produce when each regular expression is matched.

The main use case is for load balancing dispatcher queues according to topic names.


### function mamaRegexChannelFilter_destroy

```cpp
MAMAExpDLL mama_status mamaRegexChannelFilter_destroy(
    mamaRegexChannelFilter filter
)
```


**Return**: A mama_status value to reflect if this operation was successful. 

Destroys a MAMA regex filter and all underlying resources


### function mamaRegexChannelFilter_setDefaultChannel

```cpp
MAMAExpDLL mama_status mamaRegexChannelFilter_setDefaultChannel(
    mamaRegexChannelFilter filter,
    int channel
)
```


**Parameters**: 

  * **filter** The filter to operate on 
  * **channel** The channel to use when no matches are found 


**Return**: A mama_status value to reflect if this operation was successful. 

Sets a default channel to use if no filters produce hits during matching. 


### function mamaRegexChannelFilter_addRegex

```cpp
MAMAExpDLL mama_status mamaRegexChannelFilter_addRegex(
    mamaRegexChannelFilter filter,
    const char * regex,
    int channel
)
```


**Parameters**: 

  * **filter** The filter to operate on 
  * **regex** The regex string to add 
  * **channel** The channel to route to for this regex


**Return**: A mama_status value to reflect if this operation was successful. 

Adds a regex string and associated integer. During calls to getChannel, the target string will be matched against this regular expression to see which channel matches it.


### function mamaRegexChannelFilter_getChannel

```cpp
MAMAExpDLL mama_status mamaRegexChannelFilter_getChannel(
    mamaRegexChannelFilter filter,
    const char * target,
    int * channel
)
```


**Parameters**: 

  * **filter** The filter to operate on 
  * **target** The string to try matching according to 
  * **channel** Will be populated with the channel which should be used


**Return**: A mama_status value to reflect if this operation was successful. 

Looks up all channel filters to see which channel this target should be routed to.




## Source code

```cpp
#ifndef MamaRegexChannelFilterH__
#define MamaRegexChannelFilterH__

#if defined(__cplusplus)
extern "C"
{
#endif

#include <mama/config.h>
#include <mama/status.h>
#include <mama/types.h>


MAMAExpDLL
extern mama_status
mamaRegexChannelFilter_create (
    mamaRegexChannelFilter* filter
);


MAMAExpDLL
extern mama_status
mamaRegexChannelFilter_destroy (
    mamaRegexChannelFilter filter
);


MAMAExpDLL
extern mama_status
mamaRegexChannelFilter_setDefaultChannel (
    mamaRegexChannelFilter filter,
    int channel
);


MAMAExpDLL
extern mama_status
mamaRegexChannelFilter_addRegex(
    mamaRegexChannelFilter filter,
    const char* regex,
    int channel
);


MAMAExpDLL
extern mama_status
mamaRegexChannelFilter_getChannel (
    mamaRegexChannelFilter filter,
    const char* target,
    int* channel
);

#if defined(__cplusplus)
}
#endif

#endif /* MamaRegexChannelFilterH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
