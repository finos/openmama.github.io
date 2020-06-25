---
title: Development Process
sidebar: openmama_sidebar
permalink: openmama_development_process.html
folder: openmama
toc: true
---
The following document details the development process adhered to by the OpenMAMA project, including outlining the release strategy employed by the project, and providing an overview of the steps which will be followed when a new release is prepared. It assumes readers will be familiar with the [Git](http://git-scm.com/) source control system, in particular it's branching and tag management tools.

## Repository Branches

### Main Branches 

The development process followed by OpenMAMA is inspired by a number of those already followed by other open source communities, and as such should be familiar to developers who have experience of other projects. Our core repository contains two primary branches - **master** and **next** - which contain the latest release and development code respectively. 

#### master

The HEAD of the master branch is considered the current production release of the OpenMAMA project - this code is considered stable, feature complete, and has undergone some community testing to resolve any outstanding issues. 

#### next 

The HEAD of the next branch is considered the current development state of the OpenMAMA project. This code contains all the most recent accepted patches, but may not have undergone any significant testing. It is against next that contributors to OpenMAMA should be developing their code. 

### Transient Branches

#### Release Branch

In addition to the master and next branches, we will also have a series of transient "release" branches. These will be created when it is decided that a new OpenMAMA release is required. The decision to create a new release will be taken by the maintainer, in conjunction with the rest of the OpenMAMA community. Such branches should be generally considered stable, and have no partially implemented functionality. 

Release branches are always derived from the next branch, and have their names beginning with `release-` followed by the version number of the release, in the form `<major>.<minor>.<revision>`. 

#### Hot Fix Branch

Should a critical issue impacting production OpenMAMA installations be uncovered, a hot-fix may be required. Hot-fixes begin as independent branches, derived from the master branch, and named `hotfix-<major>.<minor>.<revision><fix>`. Thus a number of hot fixes may be created for a single release. When a fix has been completed, the hot fix branch is merged back into master, and if appropriate pulled into development as well.

#### Feature Branch

When nearing completion, the submission of some larger pieces of functionality may trigger the creation of a "feature" branch. Such branches will be created from the current HEAD of the next branch, and will allow contributors to review and test major pieces of functionality prior to final acceptance. The lifetime of a feature branch will be determined by the duration of the acceptance process, and periodic updates may be applied (including the incorporation of any changes which have been applied to next). When accepted by the maintainer, the feature branch will be merged into next, and no subsequent changes will be allowed to it. 

Feature branches follow a more general naming convention than release or hot-fix branches, but must always begin `feature-` followed by a short descriptive name for the feature.

Click here for further information regarding the [[Feature branch process]].

## Development Process

The following steps outline the process followed by the OpenMAMA maintainers for development, code submission, acceptance, and subsequent release. 

### Feature Development & Code Submission 

**Note:** We understand that most developers have their own process and approach for developing code, so the following is by no means the expected behaviour for all OpenMAMA contributors. It is included here as a guide for those who are new to git, and who may wish to understand how some members of the community approach development. 

When developing new functionality, the first step is to checkout a clean version of the OpenMAMA repository, or to update your current repo with the latest changes. 

The preferred way to obtain OpenMAMA is to fork the GitHub Repository, then clone a copy of your fork using:

    git clone https://github.com/<YourUserNameHere>/OpenMAMA.git

At this stage a new 'feature branch' may be created, where the core feature development will be created. The reason for the creation of a separate branch is that it allows for increased flexibility, should a rollback be required, or should the feature be deemed no longer necessary. New branches are created as follows:

    git checkout -b myfeaturebranch

Changes can subsequently be made, then committed to the feature branch (following the [[Submission Process]]). Should the change be particularly long-running, it may be necessary to pick up new changes from the next branch, and move these to the feature branch.

```
git checkout next  // Switch to the next branch to pull the latest changes
git pull      // Pull the most recent changes from the origin
git checkout myfeaturebranch // Checkout the feature branch.
git merge next  // Merge in the changes from next into the feature branch. 
```

At this point it may be necessary to resolve any merge conflicts which have arisen between your local changes and those from the main next branch. 

When you have completed feature development, the next stage is to merge your current branch into a pull request branch. 

```
git checkout -b pull_req_branch origin/next     // Checkout the branch 
git cherry-pick sha_of_commit         //cherry-pick changes across to pull req branch (repeat as necessary).
```

At this point you should  open a pull request for review and merging into `next`.

### Review & Acceptance

When your changes have been submitted, they will be picked up by the maintainers of the subsystems which your code impacts. They will then review the code, and provide any necessary feedback, again in accordance with the [[Submission Process]]. Assuming the code has been accepted, it will then be merged into next branch of the main repository.

The commit message attached should be the same as the summary added when you submitted your patch. Your Signed-off-by line will also be appended to the message (though all commits will be registered as having been completed by one of the maintainers). If you don't include a signed-off-by line, or a commit message, your patch will not be accepted into OpenMAMA. 

### Release

As the project progresses, and certain features are implements, the maintainers may decide that it is an appropriate time to release a new stable version of OpenMAMA. There are a wide array of variables impacting the decision to create a new release, including the current state of the code base, outstanding features, time since last release etc. However, any decision to create a new release will be made in conjunction with the community. 

When the decision has been made, a new release branch will be created in the main repository.

```
git checkout -b release-2.3.0
```

Changes will then be made to the branch in order to fix bugs, or tidy code only - new functionality should not be implemented on the release branch, but may be pulled from next if deemed appropriate. 

### Merge into Master

When it is determined that a release is *complete*, the release branch will be merged into the master branch (using the --no-ff flag to ensure a complete commit object is created for the merge), and the commit tagged as a release.  

```
git checkout master
git merge --no-ff release-2.3.0
git tag 2.3.0
```

Changes from the release branch may then also be merged back into the next branch as required.

```
git checkout next
git merge --no-ff release-2.3.0
```

At this point the release branch will then be removed from the codebase. 

```
git branch -d release-2.3.0
```

### Hot Fixes

Should an event occur that requires the implementation of a hot-fix outside the standard release process, a new hot-fix branch will be created from master. This branch will be used for the testing an verification of submitted hot-fix patches. 

```
git checkout master
git checkout -b hotfix-2.3.1
```

When the fix is accepted, it will then be merged into the master branch, and if required also ported into next:

```
git checkout master
git merge --no-ff hotfix-2.3.1
git tag -a 2.3.1
git checkout next
git merge --no-ff hotfix-2.3.1
```

When the code has been successfully merged, the hot-fix branch can then be deleted. 

```
git branch -d hotfix-2.3.1
```

## Reference 

A large amount of the process indicated here has been explained more clearly (with pictures) in this [excellent article](http://nvie.com/posts/a-successful-git-branching-model/)
