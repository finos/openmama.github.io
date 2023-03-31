---
title: Wombat::MamaRegexChannelFilter
summary: A MamaResourcePool is a convenience wrapper to allow easy subscription and management of OpenMAMA related resources 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaRegexChannelFilter



A [MamaResourcePool]() is a convenience wrapper to allow easy subscription and management of OpenMAMA related resources 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaRegexChannelFilter](classWombat_1_1MamaRegexChannelFilter.html#function-mamaregexchannelfilter)**()<br>Creates a MAMA regex filter to help filter strings into channels (ints). The channel itself has no special meaning - it's simply a number to produce when each regular expression is matched.  |
| void | **[setDefaultChannel](classWombat_1_1MamaRegexChannelFilter.html#function-setdefaultchannel)**(int channelId)<br>Sets a default channel to use if no filters produce hits during matching.  |
| void | **[addRegex](classWombat_1_1MamaRegexChannelFilter.html#function-addregex)**(string regexStr, int channelId)<br>Adds a regex string and associated integer. During calls to getChannel, the target string will be matched against this regular expression to see which channel matches it.  |
| int | **[getChannel](classWombat_1_1MamaRegexChannelFilter.html#function-getchannel)**(string target)<br>Looks up all channel filters to see which channel this target should be routed to.  |

## Public Functions Documentation

### function MamaRegexChannelFilter

```csharp
MamaRegexChannelFilter()
```

Creates a MAMA regex filter to help filter strings into channels (ints). The channel itself has no special meaning - it's simply a number to produce when each regular expression is matched. 

### function setDefaultChannel

```csharp
void setDefaultChannel(
    int channelId
)
```

Sets a default channel to use if no filters produce hits during matching. 

### function addRegex

```csharp
void addRegex(
    string regexStr,
    int channelId
)
```

Adds a regex string and associated integer. During calls to getChannel, the target string will be matched against this regular expression to see which channel matches it. 

### function getChannel

```csharp
int getChannel(
    string target
)
```

Looks up all channel filters to see which channel this target should be routed to. 

-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100