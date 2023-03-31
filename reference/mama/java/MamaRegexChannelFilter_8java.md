---
title: mama/MamaRegexChannelFilter.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaRegexChannelFilter.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaRegexChannelFilter](classcom_1_1wombat_1_1mama_1_1MamaRegexChannelFilter.html)**  |




## Source code

```java
package com.wombat.mama;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

public class MamaRegexChannelFilter
{
    private int mDefaultChannelId = 0;

    private final Map<Pattern, Integer> mFilters = new HashMap<>();

    public MamaRegexChannelFilter ()
    {
    }

    public void setDefaultChannel(int channelId)
    {
        mDefaultChannelId = channelId;
    }

    public void addRegex (final String regexStr, final int channelId)
    {
        mFilters.put(Pattern.compile(regexStr), channelId);
    }

    public int getChannel (final String target)
    {
        for (Map.Entry<Pattern, Integer> entry : mFilters.entrySet()) {
            if (entry.getKey().matcher(target).find()) {
                return entry.getValue();
            }
        }
        return mDefaultChannelId;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
