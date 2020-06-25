---
title: Commit Guidelines
sidebar: openmama_sidebar
permalink: openmama_commit_guidelines.html
folder: openmama
toc: false
---
When submitting a patch to the OpenMAMA project, it is important that it be accompanied by a detailed description of the proposed fix, including all pertinent information. The following discussion outlines our guidelines for creating an appropriate commit message. As an added bonus, following these guidelines will also make the process of generating patches much easier, as git's built in "format-patch" command will do all the hard work for you. 

If you're familiar with other Open Source projects, you may be aware of the 50/72 standard (as described [here](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html here)).

# Summary
All commit messages should begin with a short one line summary of the patch. As noted above, the aim is to keep this line to around 50 characters. It should always begin with an indication to the subsystem which it impacts - for example changes to the OpenMAMA C code should be prefixed with MAMAC, common code changes COMMON etc. 

Following this should be a short but clear description of the change included by the patch. "Fixes bug" is not likely to be accepted, but "Fixed memory leak in queue shutdown code" is better.

```
# Example
MAMAC: Improved cleanup of MamaQueue during shutdown
QPIDMSG: Fix core when pulling tail from msgPool
```

# Description
Following the summary line there should be a single blank line, and then a larger description of the fix which is being committed. This should provide enough information for someone looking at the fix to understand what changes exactly have been made, and the rational for them. If required this should give detailed technical notes of the change, but try to apply common sense - readers of the code will be happy to have some insight into the fix, but most of them won't want to read a short story. 

# Signed-off-by
As noted elsewhere, OpenMAMA follows the signed-off-by approach when accepting code submissions. This basically means that any developer submitting code to the project signs off that they are legally allowed to do so. It also helps track who authored certain lines of code, making it much clearer who to talk to if problems arise. 

As such, each commit message should end with a single "Signed-off-by: " line. 

```
Signed-off-by: Damian Maguire <damian@openmama.org>
```

# Complete Example

```
QPIDMSG: Removing memmove from msg critical path

Improving the performance of the setByteBuffer call within payload.c
by removing an unnecessary memmove call. Instead we replace it by 
allocating a buffer which is a single byte larger, and then passing
this start of this buffer offset by this byte to the subsequent 
underlying proton call. This forces Proton to write the data already
shifted, so we have no need to move it again. 

Signed-off-by: Damian Maguire <damian@openmama.org>
```