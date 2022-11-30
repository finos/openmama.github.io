---
title: Long Lived Feature Branches
sidebar: openmama_sidebar
permalink: openmama_feature_branch_process.html
folder: openmama
toc: true
---
As part of OpenMAMA's ongoing development, we may occasionally implement large discrete pieces of functionality which will need to be merged into the main repository as a whole (for example, new open source bridges). In these occasions a new feature branch may be created from the current HEAD of next. This branch will act as a staging branch for OpenMAMA users to review the code as a whole, prior to final acceptance into the next branch. 

## Naming
Feature branches follow a more general naming convention than release or hot-fix branches, but must always begin `feature-` followed by a short descriptive name for the feature. For example, `feature-qpid-bridge`

## Ownership 
While working through the acceptance and review process, feature branches will be owned by a nominated sub-maintainer. This will generally be someone who has been close to the development of the feature, either the individual developer responsible, or the technical lead where a team has been involved.

## Changes
Given the nature of feature branches, changes are likely to be more frequent than what would be typically observed on the next branch (for example, fixes for bugs found during wider testing, or as a result of community feedback). As such the patch submission process is slightly modified.

* Firstly, patches do not need to be sent to the entire development mailing list (as would normally be the case); instead they are directed to the sub-maintainer of the feature, and where appropriate the rest of the technical team. 
* Secondly, it is the sub-maintainer who will perform the review and commit process. 
Apart from these differences, the patch process is exactly the same as for a regular main line patch. 

It will also be periodically necessary for the feature branch to pull in changes which have occurred on the next branch. This activity will be performed by the sub-maintainer, at an appropriate interval. 

## Acceptance and Merging to Next
The lifetime of a feature branch will be determined by the duration of the acceptance process.

* The process will begin with the submission of an initial patch or patches which define the feature, followed by the creation of the feature branch. 
* At this point the community will be invited to review and comment on it's implementation, and to test the functionality. 
* Following an initial review period, a meeting will be arranged on the OpenMAMA IRC channel. All interested parties can then engage with the technical team behind the feature, providing feedback and comments. 
* Following the meeting the maintainer and sub-maintainer will review the current status of the feature, and determine if it is ready to be accepted into next. 
* Should they decide it is not, further changes will be made followed by another round of community feedback.     
* When accepted, the feature branch will be merged into next, and will become part of the core OpenMAMA codebase. 
* Responsibility for the code will then revert to the maintainer, who may defer to the sub-maintainer during future code reviews impacting the feature. 
* The sub-maintainer will no-longer have commit rights however, and all patches will need to follow the general patch submission process. 
* At this stage, no subsequent changes will be allowed to the feature branch.
