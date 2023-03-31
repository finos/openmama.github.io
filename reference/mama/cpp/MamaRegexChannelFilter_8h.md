---
title: mama/MamaRegexChannelFilter.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaRegexChannelFilter.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaRegexChannelFilter](classWombat_1_1MamaRegexChannelFilter.html)**  |




## Source code

```cpp
#ifndef OPENMAMA_MAMAREGEXCHANNELFILTER_H
#define OPENMAMA_MAMAREGEXCHANNELFILTER_H

#include <vector>
#include <regex>

// LIBC regex is only a last resort for older compilers. Regex support in C++11
// was basically a no-op prior to gcc 4.9 hence this fallback to support
// CentOS 7.
#ifdef REQUIRES_LIBC_REGEX
#include "regex.h"
#endif

namespace Wombat
{
class MamaRegexChannelFilter
{
  public:
    MamaRegexChannelFilter() : mDefaultChannelId(0)
    {
    }

    void setDefaultChannel (int channelId) {
        mDefaultChannelId = channelId;
    }

    void addRegex (const char* regexStr, int channelId) {
#ifndef REQUIRES_LIBC_REGEX
        mFilters.emplace_back(std::regex(regexStr), channelId);
#else
        regex_t re;
        regcomp(&re, regexStr, REG_EXTENDED);
        mFilters.emplace_back(re, channelId);
#endif
    }

    int getChannel (const char* target)
    {
        for (const auto& pair : mFilters)
        {
#ifndef REQUIRES_LIBC_REGEX
            if (std::regex_search(target, pair.first))
#else
            if (0 == regexec(&pair.first, target, 0, NULL, 0))
#endif
            {
                return pair.second;
            }
        }
        return mDefaultChannelId;
    }

  private:
#ifndef REQUIRES_LIBC_REGEX
    std::vector<std::pair<std::regex, int>> mFilters;
#else
    std::vector<std::pair<regex_t, int>> mFilters;
#endif
    int mDefaultChannelId;
};
}

#endif // OPENMAMA_MAMAREGEXCHANNELFILTER_H
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
