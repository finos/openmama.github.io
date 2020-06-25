---
title: Coding Standards
sidebar: openmama_sidebar
permalink: openmama_coding_standards.html
folder: openmama
toc: true
---

The OpenMAMA codebase has been around for the better part of a decade now, and it hasn't always had the love and attention that it should have. The following guide is an effort at developing a consistent style guide for *new* code submitted to the project. Over time we will aim to migrate the existing code to conform to these guidelines as well.

**Note**: *If you're altering code within a pre-existing file, aim for consistency with the rest of the file rather than slavishly following these guidelines.*

If you're looking for an easy introduction to contribution to OpenMAMA, we're always welcoming patches that address formatting issues. Just make sure any changes you make don't impact the functionality in the process.

## Naming

### Files

When adding a new file to OpenMAMA, the following convention should be adhered to:

* For files added to the C API, the name should be:
 * Short, ideally a single word describing the construct which the file provides an interface around (for example `queue.c` clearly provides the interface to the OpenMAMA queue implementation). 
 * All lower case, and without any form of word separators (no underscores, no camelcase, no hypens etc).

```
/* Bad */
mamaCodec.c
DQPublisherManager.c
payload_bridge.c

/* Better */
queue.c
dqpublishermanager.c
```

* For certain portability functions within the common libraries, it may be acceptable to begin with an initial lower case 'w', followed by a short descriptive phrase for the interface within the file, with a the initial character capitalised.
* For files added to the C++ API, the name should be:
 * A short descriptive name the same as the class held within the file.
 * Always preceded with the word `>Mama`.
 * In camel case, with the initial 'M' capitalised.

```
/* Bad */
msg.cpp

/* Better */
MamaMsg.cpp
```

* Header files should generally share the name of the implementation file they relate to, though note that not all implementation files need to have header files, nor should all header files be public.
 * Public header files should reside in the appropriate sub-directory|under `wombat` for common headers, under `mama` for MAMA headers, and under `mamda` for MAMDA headers. 
 * Private implementation headers should reside within the main implementation directory. 

* **DO NOT** give two files the same name without only case differences. OpenMAMA must operate on platforms which operate case-insensitive file systems, so this will not work.

### C 

* All variables should use lower initial camel case (e.g. `variableName`);
```c
/* Bad */
const char* StatsLogMiddlewareName    = "qpid";
const char* stats_log_middleware_name = "qpid";

/* Better */
const char* statsLogMiddlewareName = "qpid";
```
* Client facing API methods should follow the convention:
```
mama<module>_<camelCaseMethodName> (<args>)
```
* Where:
 * `mama` may also be replaced with `mamda` where appropriate.
 * `module` is the upper case initialed name of the OpenMAMA module for which the method is attached|for example, mamaBridge, mamaQueue, mamaMsg etc.
 * `camelCaseMethodName` is a descriptive name for the action performed by the function.
* Internal functions should ideally follow a similar convention, with the addition of the `Impl` following the module name. Any internal functions required within a single source file should be declared as static, and no `impl` methods should be declared within the public API headers.

```c
/* Bad */
getMamaMsgSymbol (mamaMsg msg);

/* Better */
mamaMsg_getSymbol (mamaMsg msg);

/* Bad internal function name */
sortMsgFields (mamaMsg msg);

/* Better */
mamaMsgImpl_sortFields (mamaMsg msg);
```

### C++
* All variables should use `CamelCase` capitalisation **except** class members which should start with a lower case 'm' e.g. `mSenderId`.
* All OpenMAMA C++ code lives within the `Wombat` namespace.
* C++ class names should follow their C module counterparts, with the following convention: `Mama<module>`
* Public API methods should be named to correspond with their underlying C counterparts, removing the `mama<Module>_` prefix.

```c
/* For functions operating on the underlying mamaMsg structure
 *|mama_status mamaMsg_create (mamaMsg* msg);
 *|mama_status mamaMsg_getSymbol (mamaMsg msg, const char** symbol);
 */
namespace Wombat {

class MamaMsg {

public:
    MamaMsg ();
    ~MamaMsg ();

    mama_status getSymbol (const char** symbol);

private:
    mamaMsg mMsg;
}
}
```

## Comments

Everyone understands the need for comments in code, and contributions to OpenMAMA are no exception. Particular care should be taken to provide comments for any new methods introduced, around classes (in C++, Java or C# code), or around constructs which may not be easily understood at a first glance. All comments should be written in plain English, which also means using correct spelling and grammar.

One of the most important things to pay attention to when writing good code comments is that your comment should describe what the intention of the code is, **not** exactly what the code does. Describing the details of a while loop is unlikely to be of much use to many developers. Describing that a piece of code iterates a message, pulls out individual fields and displays them to a screen is helpful, while also demonstrating that you understand the problem you're trying to solve.  

### Comment Formatting

The style of comments should match the standard used by whichever language you're working with 
* C++ style comments (`//`) for C++ code
* Java style comments (`//` and `/* */`) for Java code
* C# style comments (`///`) for C# code

The main area to be wary is with C code, and code which may be `#included` in C source files. For portability reasons, these should use the old style of C comments only, i.e. `/* ... */`. Care needs to be taken to avoid nesting C style comments, which may cause additional problems.

### File Headers

New files in OpenMAMA should all begin with the standard file header:

```
/* OpenMAMA: The open middleware agnostic messaging API
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
```

## Includes

Following the license header, a minimal set of includes should be added. These should be in the following order:

* Local/private includes 
* Common includes
* MAMA/MAMDA includes
* System includes

This list should be **minimal** - larger includes have a performance impact at compile time. If you don't [need it](http://llvm.org/docs/CodingStandards.html#minimal-list-of-includes), don't include it.

### Include Convention

In most instances, the preferred include style is the use of 

```c
#include <stuff.h>
```
over

```c
#include "stuff.h"
```
## Indentation and Spacing

There are numerous discussions to be had around indentation and spacing of source code. Rather than throwing your hat into the ring with your favourite style, please assume we've already heard all the arguments, and have come to decide on those listed below for some sane reason. Even if it's not the case, it will certainly make everyone feel better. 

### Indentation

Indentation should be in 4 character blocks at all times. There should be ***no tabs*** in code. 
* If your editor of choice uses tabs, configure it to expand them to 4 spaces. 
* If your editor of choice expands tabs to 8 spaces, configure it to expand them to 4 spaces.
* If your editor of choice doesn't allow you configure tab expansion to 4 spaces, use vim instead :)

```c
/* Bad (Mixed width indentation, tabs and spaces */
int main (int argc, char** argv)
{

    mama_status status  = MAMA_STATUS_OK; 
        mamaBridge  bridge  = NULL;
        status = mama_loadBridge (&bridge, "qpid");

    if (MAMA_STATUS_OK != status)
        {
        mama_log (MAMA_LOG_LEVEL_ERROR, "Failed";
        }
}

/* Better (consistent, 4 spaces instead of tabs) */
int main (int argc, char** argv)
{
    mama_status status  = MAMA_STATUS_OK; 
    mamaBridge  bridge  = NULL;

    status = mama_loadBridge (&bridge, "qpid");

    if (MAMA_STATUS_OK != status)
    {
        mama_log (MAMA_LOG_LEVEL_ERROR, "Failed";
    }
}
```

### Line Width

All lines should be no wider than 80 characters, except for two exceptions:
* Where extending beyond 80 characters significantly improves readability over breaking a line into chunks.
* Where you're dealing with user visible strings (such as logging), thus allowing users to grep for the line within the code. 

Where a function call and arguments can fit on a single line, do so.

Where providing all function arguments will place over 80 character limit:
* If space permits, newline seperate *each* argument, aligning each argument vertically with the first
* If space does not permit, open bracket on function calling line and newline separate each argument with an indentation of 8 characters from the start of the function name

```c
/* if possible to fit within 80 chars */
mama_status mamaQueue_create (mamaQueue* queue,
                              mamaBridge bridgeImpl)

/* If not able to fit within 80 chars */
mama_status mamaQueue_create (
        mamaQueue* queue,
        mamaBridge bridgeImpl)
```


### Spacing

There should be a single space between each function name or keyword and the opening bracket of it's parameter list. At the same time, do not add spaces inside the brackets of a parameter list.

```c
/* Bad */
mamaSubscription_allocate(&gSubscription);
mamaSubscription_allocate( &gSubscription );
mamaSubscription_allocate ( &gSubscription );

/* Better */
mamaSubscription_allocate (&gSubscriptionList[howMany]);
```

Spaces also belong after the following keywords, and before their opening brackets or braces:

`if, switch, case, for, do, while`

Spaces should also be added around most binary and ternary operators as well, but aren't required for most unary operators. As always, a little bit of common sense should be used for these.

### Alignment

* Where it makes code easier to read, align declarations vertically.

```c
int         number = 0;
mama_status status = MAMA_STATUS_OK;
```

### Line Endings

Regardless of what platform you develop for, you should always use Linux style new-line characters. Mixing line endings makes the patch submission and merge process significantly more difficult, and causes bloat within patch files. If we see a patch which contains Windows or Mac style new-lines they will be rejected, so don't do it. 

Also, try and avoid trailing whitespace at the end of lines (git will warn you if you do this as well).

### Braces

Braces in OpenMAMA always belong on the next line, in the style commonly referred to as Allman style. Use it, adhere to it, believe it. 

Braces are always required, even when an if or while is followed by a single statement.

```c
/* Bad */
if (MAMA_STATUS_OK == status)
   mamaMsg_create (&msg);
else
{
   mama_log (MAMA_LOG_LEVEL_ERROR, "Failed to allocate");
   return status;
}

/* Better */
if (MAMA_STATUS_OK == status)
{
   mamaMsg_create (&msg);
}
else
{
   mama_log (MAMA_LOG_LEVEL_ERROR, "Failed to allocate");
   return status;
}
```


#### Case Statements

There is often some variation around the use of braces to wrap individual case statements in a switch statement. Within OpenMAMA, we prefer that all case statements are wrapped in braces. While this may seem unnecessary it helps ensure consistency, and reduce the risk of the particularly nefarious bugs which result from incorrect scoping of variables in case fall through.

## Conditionals

Conditionals should always be short, clear and consistent. Within the existing OpenMAMA codebase we don't always do this well, but all new code should. This means following a few simple guidelines:
* ***Do not*** rely on operator precedence rules|always enclose separate conditions in brackets.

```c
/* Bad */
if (i++ * i / 60 <= i << 4 * 12 + 256)

/* Better (ish) */
if (((i * (++i))/60) <= (((i << 4) * 12) + 256))
```

* ***Do*** place constants at the left hand side of equality comparisons. *Of course you would never make the mistake of missing that second '=', but consistency makes it easier to avoid those sorts of problems. Right?*

```c
/* Bad|very unfortuate assignment */
if (checkVar = NULL)

/* Better|Compiler error */
if (NULL = checkVar)
```

* ***Do*** leverage short circuiting where it makes sense, particularly if it's possible to avoid an expensive check by evaluating an inexpensive one first.

```c
/* Bad|we do the expensive check first, when msg may well be NULL anyway */
if (mamaMsg_expensiveCheck (msg) || NULL == msg)

/* Better|NULL check is faster, and if it's true we eliminate the need for the expensive check */
if (NULL == msg || mamaMsg_expensiveCheck (msg))
```

# Variable Initialization

Initialize all variables before they're used. It's important, so do it. And if you don't believe us, listen to Scott Meyers, who has it as item 4 in his Effective C++ book.

> The best way to deal with this seemingly indeterminate state of affairs is to always initialize your objects before you use them.

In general this means initialize the variable as soon as you declare it, or as near as is possible. In C++ this also means ensuring constructors handle initialization for all the main data members. 

## Standards

OpenMAMA's C and C++ code is generally standards compliant with C++ 98, and C99, less a couple of exceptions noted in the Portability section below.

### C/C++ 11 

While we would love to see OpenMAMA begin to use more advanced features implemented in the C and C++ 11 standards, at present the range of platforms it intends to support means that we cannot guarantee the ability to build against a compiler which supports those features. Please don't submit code which uses these features, as it will be rejected. At some point we may determine a roadmap to move towards C++11, but at present this isn't something we're considering.  
 
## Portability

The OpenMAMA libraries are intended to be portable across a wide range of operating systems, and as a result any code contributed to the project needs to take this into account. Unfortunately this is occasionally non-trivial, and as such certain guidelines must be followed.

* Firstly, any platform specific code should be contained within the portability interface in OpenMAMA's common codebase (port.h), and corresponding interfaces should be developed for each supported operating system. ***No*** platform specific code should appear anywhere else in the code base. 
* While the OpenMAMA C code is generally C99 compliant, certain compiler vendors are not (this means you, Microsoft). This means there are a number of dos and don'ts for writing portable C code.
 * Use C style comments only (so `/* ... */`, not `//... `).
 * Variables must be declared at the beginning of a block (immediately after an opening brace), and may not appear after other statements. This also means you shouldn't declare them within the conditional of a `for` loop.
 * Casting from a `void*` to another pointer type must be performed explicitly. 

## Compiler Warnings

Compiler warnings mean you're doing something the compiler doesn't like. Do not ignore them, and do not attempt to suppress them. While some of the OpenMAMA code produces warnings, a large proportion now runs against GCC with `-pedantic -Werror`. This is the bench mark you should be aiming for with your code. 

If you believe a warning is invalid in a particular context, it can't be massaged away by simple code refactoring, and the ramifications of ignoring it are well understood, it may be fine to ignore it for a specific file. This should only happen with the support of other core developers, so don't feel like you can ignore warnings and still have your code committed. 

### Static Analysis

There is currently an effort being made to enable OpenMAMA to be built with the Clang static analysis toolset. When complete we will update documentation with instructions for running the static analysis build, and checking the output. 

### Valgrind, Helgrind and Friends

As with static analysis, we're currently attempting to improve the process around use of tools such as Valgrind. We still recommend that ***all*** code is run under Valgrind to ensure that no new leaks are introduced. However, when documentation has been completed, you may expect to be asked more often to provide evidence that your code has been checked with a range of Valgrind toolsets.

## Other Topics

### Logging

Logging within OpenMAMA is an important consideration,

We recommend the following interpretations of the various available levels:

|**Level**|**Description**                                                                                                                                                                                                         |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SEVERE |Reserved for critical errors which are completely unrecoverable.                                                                                                                                                          |
|ERROR  |Used for log messages when an error state has been observed by OpenMAMA. Depending on where such errors occur, the program may or may not be recoverable.                                                                 |
|WARN   |Used for logging when OpenMAMA has noticed a issue during processing, but where it does not have to stop processing to deal with it.                                                                                      |
|NORMAL |Used for standard logging from the library. Typically such logging is informational, and limited to startup and initialization. Should never be used for logging within functions which occur on OpenMAMA's critical path.|
|FINE   |Generally used for logging detailed logging of events which happen quite rarely, such as during startup and shutdown.                                                                                                     |
|FINER  |Used for detailed logging within functions which can occur frequently, but which are not triggered on the critical message path (for example, during creation of subscriptions).                                          |
|FINEST |Used for detailed logging within functions which are triggered with a '''very''' high frequency. For example, those functions which occur during the processing of every message.                                         |

Additionally, any logging which is performed at the FINEST logging level should be protected with a guard, since calling the log function can itself be quite a resource intensive process.

```c
/* Function triggered for every message received */
mama_status mamaMsg_onMsg (mamaMsg msg)
{
    /* Bad -set to normal level, and no guard */
    mama_log (MAMA_LOG_LEVEL_FINEST,
              "mamaMsg_onMsg (): Triggering log for message [%s]", 
              mamaMsg_toString (msg));

    /* Better|uses FINEST and has a guard */
    if (mama_getLogLevel >= MAMA_LOG_LEVEL_FINEST)
    {
        mama_log (MAMA_LOG_LEVEL_FINEST,
                  "mamaMsg_onMsg (): Tiggering finest log for [%s])",
                  mamaMsg_toString (msg));
    }
    return MAMA_STATUS_OK;
}
```

### Parameter Checking

Certain OpenMAMA functions, particularly those which are part of the public interface, must check their function parameters before proceeding with processing. Typically there are three outcomes of these checks. 

* All parameters are valid, so processing proceeds.
* One or more parameters are `NULL` when they must be populated. In this case, the function should return `MAMA_STATUS_NULL_ARG`.
* One or more parameters are not `NULL`, but contain an invalid value. In this case, the function should return `MAMA_STATUS_INVALID_ARG`.

```c
mama_status mamaMsg_processMsgString (mamaMsg msg, const char* string)
{
    /* If either msg or string are NULL */
    if (NULL == msg || NULL == string)
    {
        return MAMA_STATUS_NULL_ARG;
    }

    /* If the length of the string is less than 3, it is an invalid argument. */
    if (strlen (string) <= 3)
    {
        return MAMA_STATUS_INVALID_ARG;
    }

    /* Otherwise, continue processing... */
}
```