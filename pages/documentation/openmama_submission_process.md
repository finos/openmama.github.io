---
title: Submission Process
sidebar: openmama_sidebar
permalink: openmama_submission_process.html
folder: openmama
toc: false
---
All OpenMAMA code submissions **must** be made through GitHub's **Pull Request** feature.

For anyone not familiar with this workflow, a great tutorial example can be seen [here](http://yangsu.github.io/pull-request-tutorial/). 

## Workflow summary

* Fork the OpenMAMA repository to your own user account.
* On your own fork create a feature branch for your changes branching ***from the 'next' branch***. This is important to isolate your changes making the review and acceptance process easier to maintain.
* Commit as many times as you want to your feature branch. 
* Build and test your changes. 
  * The existing **[unit tests](openmama_unit_testing.html) should run cleanly** at least.
  * New tests should be added where appropriate to cover the new changes.
  * Basic pub/sub tests should be run also (see the **[Quick Start Guide](openmama_quick_start_guide_running_openmama_apps.html)** for examples of what to run).
* You may need to keep your local copy of OpenMAMA up to date with that latest changes. See the GitHub FAQ on [Syncing a fork](https://help.github.com/articles/syncing-a-fork/) for details.
* Once you're happy with your changes *and have tested them* open a pull request against the **OpenMAMA/next** branch.
* Once the pull request is submitted **don't develop any unrelated changes on your feature branch!**
  * Any further commits pushed to your fork's branch will automatically be included in the pull request.
  * Pull request branch can be used for corrections/amendments necessary as a result of code review before acceptance into OpenMAMA.
  * Pull requests seen to contain multiple unrelated changes may be rejected or required to be split up into different pull requests (with their own branches).

## New Functionality Testing

If there is some significant new functionality incoming, it is mandatory that this change comes bundled
along with suitable new unit test coverage.

These tests **must** be runnable via the OpenMAMA's project CI environment across all supported platforms.

If further changes are required for CI to work with these new changes across all platforms, those changes
are expected to be made as part of the pull request being raised.

## Commit Messages

All commit messages should begin with a short one line summary of the patch. As noted above, the aim is to keep this line to around 50 characters. It should always begin with an indication to the subsystem which it impacts - for example changes to the OpenMAMA C code should be prefixed with MAMAC, common code changes COMMON etc. 

Following this should be a short but clear description of the change included by the patch. "Fixes bug" is not likely to be accepted, but "Fixed memory leak in queue shutdown code" is better.

```
# Example
MAMAC: Improved cleanup of MamaQueue during shutdown
QPIDMSG: Fix core when pulling tail from msgPool
```

### Description

Following the summary line there should be a single blank line, and then a larger description of the fix which is being committed. This should provide enough information for someone looking at the fix to understand what changes exactly have been made, and the rational for them. If required this should give detailed technical notes of the change, but try to apply common sense - readers of the code will be happy to have some insight into the fix, but most of them won't want to read a short story. 

### Signed-off-by

As noted elsewhere, OpenMAMA follows the signed-off-by approach when accepting code submissions. This basically means that any developer submitting code to the project signs off that they are legally allowed to do so. It also helps track who authored certain lines of code, making it much clearer who to talk to if problems arise. 

As such, each commit message should end with a single "Signed-off-by: " line. Git will generate this for you if you add `-s` to the `git commit` command.

```
Signed-off-by: Damian Maguire <damian@openmama.org>
```

### Don't panic if you haven't done this on your feature branch

If you haven't followed the commit guidelines perfectly on your feature branch, don't worry. If you provide a
summary of what you want to be the "final" pull request submitted, we can squash all your commits on your
feature branch with the commit message that you provide on the ticket instead.

### Complete Example

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
