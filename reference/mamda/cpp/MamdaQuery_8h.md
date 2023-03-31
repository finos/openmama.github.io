---
title: mamda/MamdaQuery.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaQuery.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaQuery](classWombat_1_1MamdaQuery.html)**  |
| class | **[Wombat::MamdaOrQuery](classWombat_1_1MamdaOrQuery.html)**  |
| class | **[Wombat::MamdaAndQuery](classWombat_1_1MamdaAndQuery.html)**  |
| class | **[Wombat::MamdaEqualsQuery](classWombat_1_1MamdaEqualsQuery.html)**  |
| class | **[Wombat::MamdaDateQuery](classWombat_1_1MamdaDateQuery.html)**  |
| class | **[Wombat::MamdaContainsAllQuery](classWombat_1_1MamdaContainsAllQuery.html)**  |
| class | **[Wombat::MamdaContainsQuery](classWombat_1_1MamdaContainsQuery.html)**  |




## Source code

```cpp
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

#ifndef MamdaUtilsH
#define MamdaUtilsH

#include <mamda/MamdaConfig.h>

namespace Wombat
{

    class MamdaNewsQueryHandler;
    class MamaDateTime;
    class MamdaSubscription;

    class MAMDAExpDLL MamdaQuery
    {

    public:
        virtual bool getXML   (char *result) = 0;

        bool         getQuery (char *&result);
        virtual int  getDepth () = 0;

        struct QueryImpl;
        struct CondImpl;
        struct QueryInfoImpl;

        void setSubscriptionInfo (MamdaSubscription* subscInfo);
        MamdaSubscription* getSubscriptionInfo ();

    protected:
        MamdaQuery (); 

    private:
        QueryInfoImpl&  mInfoImpl;
    };


    class MAMDAExpDLL MamdaOrQuery : public MamdaQuery
    {
    public:
        MamdaOrQuery  (MamdaQuery* query1, MamdaQuery* query2);
        
        bool getXML   (char*       result);
        int  getDepth ();
        void addQuery (MamdaQuery* query1);
        
    private:
        QueryImpl&  mImpl;
    };


    class MAMDAExpDLL MamdaAndQuery : public MamdaQuery
    {
    public:
        MamdaAndQuery (MamdaQuery* query1, MamdaQuery* query2);
        
        bool getXML   (char*       result);
        int  getDepth ();
        void addQuery (MamdaQuery* query1);
            
    private:
        QueryImpl&  mImpl;
    };


    class MAMDAExpDLL MamdaEqualsQuery : public MamdaQuery
    {
    public:
        MamdaEqualsQuery (const char* field, const char* val);
        MamdaEqualsQuery (const char* field, double      val);
        MamdaEqualsQuery (const char* field, int         val);
        MamdaEqualsQuery (const char* field, bool        val);

        bool addItem     (const char* item);
        bool addItem     (double      item);
        bool addItem     (int         item);
        bool addItem     (bool        item);

        bool getXML      (char*       result);
        int  getDepth    ();

    private:
        CondImpl&  mImpl;
    };


    class MAMDAExpDLL MamdaDateQuery : public MamdaQuery
    {
    public:
        MamdaDateQuery (MamaDateTime& start, 
                        MamaDateTime& end);

        bool getXML    (char *result);
        int  getDepth  ();
        
    private:
        CondImpl&  mImpl;
    };


    class MAMDAExpDLL MamdaContainsAllQuery : public MamdaQuery
    {
    public:
        MamdaContainsAllQuery (const char *field, const char* item);
        MamdaContainsAllQuery (const char *field, double      item);
        MamdaContainsAllQuery (const char *field, int         item);
        
        bool addItem          (const char* item);
        bool addItem          (double      item);
        bool addItem          (int         item);

        bool getXML           (char* result);
        int  getDepth         ();

    private:
        CondImpl&  mImpl;
    };


    class MAMDAExpDLL MamdaContainsQuery : public MamdaQuery
    {
    public:
        MamdaContainsQuery (const char* field, const char*  item);
        MamdaContainsQuery (const char* field, const double item);
        MamdaContainsQuery (const char* field, int          item);
        
        bool addItem       (const char* item);
        bool addItem       (double      item);
        bool addItem       (int         item);
        bool addItem       (bool        item);

        bool getXML        (char* result);
        int  getDepth      ();
        
    private:
        CondImpl&  mImpl;
    };

} //namespace

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
