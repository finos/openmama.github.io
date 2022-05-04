---
title: cs/MamdaConcreteSecurityStatusRecap.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaConcreteSecurityStatusRecap.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaConcreteSecurityStatusRecap](classWombat_1_1MamdaConcreteSecurityStatusRecap.html)**  |




## Source code

```csharp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

using System;

namespace Wombat
{
    public class MamdaConcreteSecurityStatusRecap : MamdaSecurityStatusRecap
    {
        public void clear()
        {
            mSecurityStatus              = 0;
            mSecurityStatusEnum          = MamdaSecurityStatus.mamdaSecurityStatus.SECURITY_STATUS_NONE;
            mSecurityStatusQualifier     = 0;
            mSecurityStatusQualifierEnum = MamdaSecurityStatusQual.mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_NONE;
            mSecurityStatusStr           = null;
            mShortSaleCircuitBreaker     = ' ';
            mSecurityStatusQualifierStr  = null;
            mActTime                     = DateTime.MinValue;
            mSrcTime                     = DateTime.MinValue;
            mReason                      = null;
        }

        public long getSecurityStatus()
        {
            return mSecurityStatus;
        }

        public MamdaFieldState getSecurityStatusFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSecurityStatus(long securityStatus)
        {
            mSecurityStatus = securityStatus;
        }

        public long getSecurityStatusQualifier()
        {
            return mSecurityStatusQualifier;
        }

        public MamdaFieldState getSecurityStatusQualifierFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSecurityStatusQualifier(long secQualifier)
        {
            mSecurityStatusQualifier = secQualifier;
        }

        public MamdaSecurityStatus.mamdaSecurityStatus getSecurityStatusEnum()
        {
            return mSecurityStatusEnum;
        }

        public MamdaFieldState getSecurityStatusEnumFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSecurityStatusEnum(MamdaSecurityStatus.mamdaSecurityStatus secStatus)
        {
            mSecurityStatusEnum = secStatus;
        }

        public MamdaSecurityStatusQual.mamdaSecurityStatusQual getSecurityStatusQualifierEnum()
        {
            return mSecurityStatusQualifierEnum;
        }

        public MamdaFieldState getSecurityStatusQualifierEnumFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSecurityStatusQualifierEnum(MamdaSecurityStatusQual.mamdaSecurityStatusQual secStatusQual)
        {
            mSecurityStatusQualifierEnum = secStatusQual;
        }

        public string getSecurityStatusStr()
        {
            return mSecurityStatusStr;
        }

        public MamdaFieldState getSecurityStatusStrFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public char getShortSaleCircuitBreaker()
        {
            return mShortSaleCircuitBreaker;
        }

        public void setShortSaleCircuitBreaker(char shortSaleCircuitBreaker)
        {
            mShortSaleCircuitBreaker = shortSaleCircuitBreaker;
        }

        public MamdaFieldState getShortSaleCircuitBreakerFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public string getSecurityStatusOrigStr()
        {
            return mSecurityStatusOrigStr;
        }

        public MamdaFieldState getSecurityStatusOrigStrFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSecurityStatusOrigStr(string securityStatusOrigStr)
        {
            if (securityStatusOrigStr != null)
                mSecurityStatusOrigStr = securityStatusOrigStr;
        }

        public void setSecurityStatusStr(string securityStatusStr)
        {
            if (securityStatusStr != null)
                mSecurityStatusStr = securityStatusStr;
        }

        public string getSecurityStatusQualifierStr()
        {

            return mSecurityStatusQualifierStr;
        }

        public MamdaFieldState getSecurityStatusQualifierStrFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSecurityStatusQualifierStr (
            String securityStatusQualifierStr)
        {
            if (securityStatusQualifierStr != null)
                mSecurityStatusQualifierStr = securityStatusQualifierStr;
        }

        public string getReason()
        {
            return mReason;
        }

        public MamdaFieldState getReasonFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setReason (
            string reason)
        {
            if (reason != null)
                mReason = reason;
        }

        public DateTime getActivityTime()
        {
            return mActTime;
        }

        public MamdaFieldState getActivityTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setActivityTime(DateTime actTime)
        {
            if (actTime != DateTime.MinValue)
                mActTime = actTime;
        }

        public void setSrcTime(DateTime srcTime)
        {
            if (srcTime != DateTime.MinValue)
                mSrcTime = srcTime;
        }

        public DateTime getSrcTime()
        {
            return mSrcTime ;
        }

        public MamdaFieldState getSrcTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }
        public DateTime getLuldTime()
        {
            return mLuldTime;
        }

        public MamdaFieldState getLuldTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public char getLuldIndicator()
        {
            return mLuldIndicator;
        }

        public MamdaFieldState getLuldIndicatorFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public MamaPrice getLuldHighLimit()
        {
            return mLuldHighLimit;
        }

        public MamdaFieldState getLuldHighLimitFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public MamaPrice getLuldLowLimit()
        {
            return mLuldLowLimit;
        }

        public MamdaFieldState getLuldLowLimitFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }


        public void setLuldTime(DateTime luldTime)
        {
            if (luldTime != DateTime.MinValue)
                mLuldTime = luldTime;
        }


        public void setLuldIndicator(char luldIndicator)
        {
            mLuldIndicator = luldIndicator;
        }


        public void setLuldHighLimit(MamaPrice luldHighLimit)
        {
            mLuldHighLimit.copy(luldHighLimit);
        }


        public void setLuldLowLimit(MamaPrice luldLowLimit)
        {
            mLuldLowLimit.copy(luldLowLimit);
        }

        private long mSecurityStatus;
        private long mSecurityStatusQualifier;
        private MamdaSecurityStatus.mamdaSecurityStatus mSecurityStatusEnum;
        private MamdaSecurityStatusQual.mamdaSecurityStatusQual mSecurityStatusQualifierEnum;
        private string mSecurityStatusStr;
        private char mShortSaleCircuitBreaker;
        private string mSecurityStatusOrigStr;
        private string mSecurityStatusQualifierStr;
        private DateTime mActTime = DateTime.MinValue;
        private DateTime mSrcTime = DateTime.MinValue;
        private string mReason = null;
        private DateTime mLuldTime = DateTime.MinValue;
        private char mLuldIndicator = ' ';
        private MamaPrice mLuldHighLimit = new MamaPrice();
        private MamaPrice mLuldLowLimit = new MamaPrice();
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
