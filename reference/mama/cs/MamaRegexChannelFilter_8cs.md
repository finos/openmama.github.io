---
title: cs/MamaRegexChannelFilter.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaRegexChannelFilter.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::Text::RegularExpressions](namespaceSystem_1_1Text_1_1RegularExpressions.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaRegexChannelFilter](classWombat_1_1MamaRegexChannelFilter.html)** <br>A [MamaResourcePool]() is a convenience wrapper to allow easy subscription and management of OpenMAMA related resources  |




## Source code

```csharp

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;

namespace Wombat
{
    public class MamaRegexChannelFilter
    {
        private int mDefaultChannelId = 0;

        private Dictionary<Regex, int> mFilters;

        public MamaRegexChannelFilter ()
        {
            mFilters = new Dictionary<Regex, int>();
        }

        public void setDefaultChannel(int channelId)
        {
            mDefaultChannelId = channelId;
        }

        public void addRegex (string regexStr, int channelId)
        {
            mFilters.Add(new Regex(regexStr), channelId);
        }

        public int getChannel (string target)
        {
            foreach (KeyValuePair<Regex, int> kv in mFilters)
            {
                if (kv.Key.IsMatch(target))
                {
                    return kv.Value;
                }
            }
            return mDefaultChannelId;
        }

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:34 +0100
