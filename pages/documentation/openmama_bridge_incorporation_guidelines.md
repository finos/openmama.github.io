---
title: Bridge Incorporation Guidelines
sidebar: openmama_sidebar
permalink: openmama_bridge_incorporation_guidelines.html
folder: openmama
toc: false
---
The purpose of this document is to clarify the process by which a newly developed bridge may be incorporated into OpenMAMA. This includes both the actual code changes required as well as the submission process.

# Submission Guidelines

* Enumeration requests are submitted to the OpenMAMA-Dev mailing list. This request should contain the enum and enum value requested, and in the case of middleware requests, the string also.
* Along with the information above, a short description of the intended use of the enumeration should also be included. It remains the right of the code maintainer to deallocate enumerations and make corresponding changes to the OpenMAMA source code if it is felt that the intention of the allocation was not that of participation in the OpenMAMA community.
* After receiving a reply confirming the allocation of enumerations, a patch must be submitted (see [[Submission Process]]) which makes the changes to OpenMAMA source code implementing the enumerations allocated.
* This patch submission must be completed within a month of receiving the confirmation of the enumeration allocation. If this is not the case the enumeration will be come available for allocation to the next request submitted to the mailing list.

# Code Integration

## Middleware 

Currently, bridge enumerations are allocated on a first come first served basis although in the future it is intended that middleware bridges will be loaded dynamically, making the enumerations deprecated. The currently allocated enumerations are shown below.

|*Enum*                      |*Enum Value*|*String*   |
|:---------------------------|:-----------|:----------|
|MAMA_MIDDLEWARE_WMW         |0           | wmw       |
|MAMA_MIDDLEWARE_LBM         |1           |lbm        |
|MAMA_MIDDLEWARE_TIBRV       |2           |tibrv      |
|MAMA_MIDDLEWARE_AVIS        |3           |avis       |
|MAMA_MIDDLEWARE_TICK42BLP   |4           |tick42blp  |
|MAMA_MIDDLEWARE_SOLACE      |5           |solace     |
|MAMA_MIDDLEWARE_RAI         |6           |rai        |
|MAMA_MIDDLEWARE_QPID        |7           |qpid       |
|MAMA_MIDDLEWARE_EXEGY       |8           |exegy      |
|MAMA_MIDDLEWARE_IBMWFO      |9           |ibmwfo     |
|MAMA_MIDDLEWARE_ACTIV       |10          |activ      |
|MAMA_MIDDLEWARE_TICK42RMDS  |11          |tick42rmds |
|MAMA_MIDDLEWARE_UMS         |12          |ums        |
|MAMA_MIDDLEWARE_VULCAN      |13          |vulcan     |
|MAMA_MIDDLEWARE_INRUSH      |14          |inrush     |
|MAMA_MIDDLEWARE_LBMKOMODO   |15          |lbmkomodo  |
|MAMA_MIDDLEWARE_UMDSKOMODO  |16          |umdskomodo |
|MAMA_MIDDLEWARE_MAX         |17          |N/A        |
|MAMA_MIDDLEWARE_UNKNOWN     |99          |unknown    |


### Required Middleware Changes 

*Note:* The example changes below have deliberately limited lists of current enums. This is intentional to improve readability. Please consult the full table of enums above to check if the enum you wish is available.

In order to incorporate a middleware bridge into OpenMAMA, it must be allocated an enumeration. This is done through the modification of middleware.h and middleware.c:

**middleware.h changes**:

```diff
typedef enum mamaMiddleware_ { 
MAMA_MIDDLEWARE_WMW = 0; 

MAMA_MIDDLEWARE_LBM = 1; 

MAMA_MIDDLEWARE_TIBRV =3; 

...
+ MAMA_MIDDLEWARE_<NEW> = 10; 

MAMA_MIDDLEWARE_MAX = 11; 

MAMA_MIDDLEWARE_UNKNOWN = 99; 

} mamaMiddleware;
```

As shown above, the chosen enumeration must be added to typedef enum mamaMiddleware_ and MAMA_MIDDLEWARE_MAX incremented. In a similar manner the bridge being added must also be included in mamaMiddleware_convertFromString and mamaMiddleware_convertToString in middleware.c (see diff below). Please note that it is preferred that the string used for a new middleware be less than 10 characters and in block capitals.

**middleware.c changes**:

```diff
mamaMiddleware mamaMiddleware_convertFromString (const char* str) 
{ 
if (!str) 
    return MAMA_MIDDLEWARE_UNKNOWN; 

if (strcasecmp (str, "wmw") == 0) 
    return MAMA_MIDDLEWARE_WMW; 

if (strcasecmp (str, "lbm") == 0) 
    return MAMA_MIDDLEWARE_LBM; 

if (strcasecmp (str, "tibrv") == 0) 
    return MAMA_MIDDLEWARE_TIBRV; 

if (strcasecmp (str, "avis") == 0) 
    return MAMA_MIDDLEWARE_AVIS; 
...

+ if (strcasecmp (str, "<new>") == 0)
+   return MAMA_MIDDLEWARE_<NEW>;

return MAMA_MIDDLEWARE_UNKNOWN; 

const char* mamaMiddleware_convertToString (mamaMiddleware middleware) { 

switch (middleware) { 
    case MAMA_MIDDLEWARE_WMW: 
        return "wmw"; 
    case MAMA_MIDDLEWARE_LBM:
        return "lbm"; 
    case MAMA_MIDDLEWARE_TIBRV:
        return "tibrv"; 
    case MAMA_MIDDLEWARE_AVIS: 
        return "AVIS"; 
...
+    case MAMA_MIDDLEWARE_<NEW>: 
+        return "<MIDDLEWARE>";
    default: 
        return "unknown"; 
    }
}
```

# Payload 

Again, the payload enumerations are allocated on a first come first served basis . The currently allocated payload enumerations are shown below:

|*Enum*                  |*Enum Value*  |
|:-----------------------|:-------------|
|MAMA_PAYLOAD_SOLACE     |1             |
|MAMA_PAYLOAD_V5         |5             |
|MAMA_PAYLOAD_AVIS       |A             |
|MAMA_PAYLOAD_TICK42BLP  |B             |
|MAMA_PAYLOAD_FAST       |F             |
|MAMA_PAYLOAD_RAI        |I             |
|MAMA_PAYLOAD_KWANTUM    |K             |
|MAMA_PAYLOAD_UMS        |L             |
|MAMA_PAYLOAD_INRUSH     |N             |
|MAMA_PAYLOAD_TICK42RMDS |P             |
|MAMA_PAYLOAD_QPID       |Q             |
|MAMA_PAYLOAD_TIBRV      |R             |
|MAMA_PAYLOAD_IBMWFO     |S             |
|MAMA_PAYLOAD_ACTIV      |T             |
|MAMA_PAYLOAD_VULCAN     |V             |
|MAMA_PAYLOAD_WOMBAT_MSG |W             |
|MAMA_PAYLOAD_EXEGY      |X             |
|MAMA_PAYLOAD_UNKNOWN    |U             |


## Required Payload Changes

*Note:* The example changes below have deliberately limited lists of current enums. This is intentional to improve readability. Please consult the full table of enums above to check if the enum you wish is available.

In a manner similar to that of middleware bridges, payload enumerations are set through modification of msg.h and msg.c: Again, the chosen payload enumeration must be added to msg.h as shown above and the new payload added to mamaPayload_convertToString within msg.c.


**msg.h changes:**

```diff
typedef enum mamaPayloadType_ { 
    MAMA_PAYLOAD_WOMBAT_MSG = ’W’,
    MAMA_PAYLOAD_TIBRV = 'R',
    MAMA_PAYLOAD_FAST = 'F',
    ... 
+    MAMA_PAYLOAD_<NEW> = '<M>', 
    MAMA_PAYLOAD_UNKNOWN = 'U'
} mamaPayloadType;
```

**msg.c changes:**

```diff
const char* 
mamaPayload_convertToString (mamaPayloadType payloadType) { 
    switch (payloadType) { 
        case MAMA_PAYLOAD_WOMBAT_MSG: 
            return "WombatMsg"; 
        case MAMA_PAYLOAD_TIBRV: 
            return "TIBRV"; 
        case MAMA_PAYLOAD_FAST: 
            return "FAST";
...
+        case MAMA_PAYLOAD_<NEW>: 
+            return "<PAYLOAD>"; 
        default: 
            return "unknown"; 
    } 
}
```
Once these changes are made and committed to your local Git repository, you will need to submit them. For information on submitting changes to OpenMAMA see [[here|Submission Process]].
