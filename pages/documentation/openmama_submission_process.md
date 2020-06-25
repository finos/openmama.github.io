---
title: Submission Process
sidebar: openmama_sidebar
permalink: openmama_submission_process.html
folder: openmama
toc: false
---
Going forward, the preferred method for submitting code to OpenMAMA will be through GitHub's *pull request* feature.

For anyone not familiar with this workflow, a great tutorial example can be seen [here](http://yangsu.github.io/pull-request-tutorial/). 

## Workflow summary
* Fork the OpenMAMA repository to your own user account.
* On your own fork create a feature branch for your changes branching ***from the 'next' branch***. This is important to isolate your changes making the review and acceptance process easier to maintain.
* Commit as many times as you want to your feature branch. 
* Build and test your changes. 
 * The **[unit tests](openmama_unit_testing.html) should run cleanly** at least. 
 * Basic pub/sub tests should be run also (see the **[Quick Start Guide](openmama_quick_start_guide_running_openmama_apps.html)** for examples of what to run).
* You may need to keep your local copy of OpenMAMA up to date with that latest changes. See the GitHub FAQ on [Syncing a fork](https://help.github.com/articles/syncing-a-fork/) for details.
* Once you're happy with your changes *and have tested them* open a pull request against the **OpenMAMA/next** branch.
* Once the pull request is sent **don't develop any further changes on your feature branch!**
 * Any further commits pushed to your fork's branch will automatically be included in the pull request.
 * Pull request branch can be used for corrections/amendments necessary as a result of code review before acceptance into OpenMAMA.
 * Pull requests seen to contain multiple unrelated changes may be rejected or required to be split up into different pull requests (with their own branches).

## NOTES
* All development **must be against the OpenMAMA::next branch**. This means that:
 * Your feature branch must originate from HEAD of <tt>next</tt>.
 * Your pull request must be raised against <tt>OpenMAMA::next</tt> 
* Your changes should be tested by **running the unit tests** at a bare minimum before opening the pull request.
