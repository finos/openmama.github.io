---
title: Wombat::MamaLogFile
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaLogFile



 [More...](#detailed-description)


`#include <MamaLogFile.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setMaxSize](classWombat_1_1MamaLogFile.html#function-setmaxsize)**(unsigned long newMax) |
| void | **[setNumBackups](classWombat_1_1MamaLogFile.html#function-setnumbackups)**(unsigned int newNum) |
| void | **[setAppendMode](classWombat_1_1MamaLogFile.html#function-setappendmode)**(bool append) |
| void | **[enableLogging](classWombat_1_1MamaLogFile.html#function-enablelogging)**(const char * file, MamaLogLevel level) |
| void | **[disableLogging](classWombat_1_1MamaLogFile.html#function-disablelogging)**(void ) |
| bool | **[loggingToFile](classWombat_1_1MamaLogFile.html#function-loggingtofile)**(void ) |
| void | **[rollFiles](classWombat_1_1MamaLogFile.html#function-rollfiles)**() |

## Detailed Description

```cpp
class Wombat::MamaLogFile;
```


**See**: [MamaLogFile](classWombat_1_1MamaLogFile.html)

The `[MamaLogFile](classWombat_1_1MamaLogFile.html)` class provides a single interface for the configuration and control of `[Mama](classWombat_1_1Mama.html)` logging activity. The `[MamaLogFile](classWombat_1_1MamaLogFile.html)` class expands upon the existing logging capabilities of `[Mama](classWombat_1_1Mama.html)` providing the ability to set log file size and configure the number of log files maintained.

## Public Functions Documentation

### function setMaxSize

```cpp
static void setMaxSize(
    unsigned long newMax
)
```


**Parameters**: 

  * **newMax** log file size. 


Set the Size of the log files. Has no effect if log file is not successfully created via a call to MamaLogFile::enableLogging(...).


### function setNumBackups

```cpp
static void setNumBackups(
    unsigned int newNum
)
```


**Parameters**: 

  * **newNum** number of log files to be maintained. 


Set the number of log files to be maintained. Has no effect if log file is not successfully created via a call to MamaLogFile::enableLogging(...).


### function setAppendMode

```cpp
static void setAppendMode(
    bool append
)
```


**Parameters**: 

  * **append** append mode (on or off) 


Set the open method for the logfile. 'true' will keep any existing data in the file 'false' will overwrite any existing data in the file 


### function enableLogging

```cpp
static void enableLogging(
    const char * file,
    MamaLogLevel level
)
```


**Parameters**: 

  * **file** log file name 
  * **level** mama log level 


Enable logging. Will set log level and attempt to open a file of the named provided. If a file could not be created or parameter file is NULL mama log output is re-directed to stderr.


### function disableLogging

```cpp
static void disableLogging(
    void 
)
```


Disable logging. 


### function loggingToFile

```cpp
static bool loggingToFile(
    void 
)
```


Return true if currently logging to file (via [MamaLogFile](classWombat_1_1MamaLogFile.html)). Return false if not logging to file (via [MamaLogFile](classWombat_1_1MamaLogFile.html)). 


### function rollFiles

```cpp
static void rollFiles()
```


Perform a log file rolling. 


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100