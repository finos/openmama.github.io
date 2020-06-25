---
title: Release Process
sidebar: openmama_sidebar
permalink: openmama_release_process.html
folder: openmama
toc: true
---
The following document describes the release process OpenMAMA has adopted for point (6.1.x) and minor version releases (6.x.0). The contents '''do not''' apply to major releases, which will have their own release plan and schedule. 

## Deciding on a New Release

In general OpenMAMA will target a new release every 3-6 months, dependent on the changes which have been implemented in the interim. The decision will be made by the maintainer, in conjunction with discussion in the community. Implementation of significant functionality will likely decrease the release interval.

## Notification

Once a new release has been planned, a notification will be sent to the OpenMAMA Developers mailing list, which will inform users of the intended release, the version number, the contents of the release, and the release plan. This will also include indicative timing for the various stages of the release.

## Release Branch

Once a release has been announced, the release manager shall prepare the initial release candidate. Typically this will involve branching from the HEAD of the next branch, though branching from an earlier point may be considered if appropriate. The release branch shall be named for the intended release number (not for the release candidate number):

    git checkout next
    git checkout -b OpenMAMA-<RELEASE-NUMBER>
    git push -u origin OpenMAMA-<RELEASE-NUMBER>

Once the release branch has been made, the following files should all be checked to indicate the new release version:

* `mama/VERSION.scons`
* `mama/c_cpp/src/c/generateMamaSourceFiles.bat`
* `mama/jni/build.xml`
* `mama/dotnet/src/cs/MamaVersion.cs`
* `mamda/VERSION.scons`
* `mamda/c_cpp/src/cpp/generateMamdaVersion.bat`
* `mamda/java/build.xml`

You can then commit and push these changes;

    git commit -s -a -m "Updated version information to 6.2.1"
    git push -u origin OpenMAMA-<RELEASE-NUMBER>

The release branch should then be tagged as the first release candidate - RC1:

    git checkout OpenMAMA-<RELEASE-NUMBER>
    git tag OpenMAMA-<RELEASE-NUMBER>-rc1
    git push origin OpenMAMA-<RELEASE-NUMBER>-rc1

## Release Artifacts

Once the tagging is complete, the standard release artifacts should be prepared and uploaded to the OpenMAMA website.

**Note:** We're aiming to move much of this process to the CI environment following the next release, which will remove much of the manual process for preparing a release.

### Linux RPM

The Linux RPM's can be built using a standard RPM build script and SPEC file, which reside in the OpenMAMA git repository under the 'release_scripts' directory.

```
$ ./openmama-rpm.sh -v <RELEASE-NUMBER><-rcX if rc build>
```

This command creates a full build environment, clones the OpenMAMA repo, checks out the appropriate branch, then proceeds with the rpmbuild. Once this has been completed, it uses the mock command to generate new RPM's for various platforms, within a CHROOT (which ensures the subsequent RPM's are cleanly generated without any missing dependencies).

Once this is complete, all binary and source RPM's, along with a source tarball and x86_64 binary tarball, should all be available within the distribution folder.

### Windows Dynamic Build

The OpenMAMA dynamic build can now be generated on a Windows platform by calling the standard scons script. You should also remove cached entries in `omama.conf` for x86 dependencies between building the 32-bit and 64-bit versions.

```
scons with_testtools=y product=mamdajni buildtype=dynamic prefix=#openmama-<VERSION><rcX if rc build>.win.x86 target_arch=x86 vsver=14.0
scons with_testtools=y product=mamdajni buildtype=dynamic prefix=#openmama-<VERSION><rcX if rc build>.win.x64 target_arch=x86_64 vsver=14.0
```

Then zip up the results in a zip file with the same name as the prefix directory.

## Test Period

The test period for OpenMAMA releases will generally be around two weeks, though this may be extended for particularly large or complex releases. 

Once the release artifacts have been prepared, the test period will begin. An email should be sent by the release manager to the list indicating the location of the test builds, and instructions for those accessing through git. A brief overview of the targeted test areas should also be included.

If the release contains specific functionality which the release manager would like to see tested, they should indicate this now, including specific details of tests which need to be run. 

### Raising Issues 

If during the process one of the testers determines that there is an issue, this should be raised as a GitHub issue.  

An effort should then be made to check if this is a regression in behaviour, or an existing bug. Regressions will always be considered blockers for release, and thus must be fixed. Existing bugs may block the release if they have a significant severity. Once those bugs have been assessed, appropriate changes may be implemented to resolve them.

### Release Candidates 

Should a number of changes be required during the testing of an RC, the release manager may decide to produce a new Release candidate. This will follow the same process as that documented above, whereby the release branch will be tagged, and new artifacts will be generated. A notice will then be sent to the lists indicating the availability of the new artifacts and their location. Testing will then continue on this release candidate.

```
git checkout OpenMAMA-<RELEASE-NUMBER>
git tag OpenMAMA-<RELEASE-NUMBER>-rc<x>
git push origin OpenMAMA-<RELEASE-NUMBER>-rc<x>
```

## Release

Once the test period has been completed, and existing issues have either been resolved, or categorised as non-blocking, the release manager will prepare for the final release. 

The first stage is to gain community and maintainer sign-off. Therefore, and email will be sent to the developer mailing list asking for last feedback, and requesting maintainer approval. If both agree that the release is good, the release process shall continue.

### Release Process 
The first step following acceptance is to merge the release branch into the next and master branches, and tag the merge as the release:

#### Updating master branch

In a fresh clone to avoid any strange state, checkout the master branch, merge in the release branch and fix any merge issues. Also ensure that the release versions are correct, then you can go ahead and push it up to master.

```
git checkout master
git merge origin/OpenMAMA-<RELEASE-NUMBER>
git push origin master
```
Now, don't add the tag yet - wait until CI completes in case any hot fixes are required. Once CI completes successfully and any required hotfixes have been added, then we need to generate the various release artifacts, following the process above.

Once release artifacts have been confirmed as sane with these changes, it's time to cut the release.

```
git tag OpenMAMA-<RELEASE-NUMBER>-release
git push origin OpenMAMA-<RELEASE-NUMBER>-release
```

### Updating the next branch

Now we want to update the next branch to ensure that all the merge conflicts that have been corrected can safely merge with next too.

```
git checkout next
git merge origin/master
git push origin next
```

Once the artifacts have been created and uploaded to the OpenMAMA website, the site itself should be updated:

* Scroll pane should be updated with the latest release.
* Buttons should be updated to point.
* Blog announcing the release should be written.
* Documentation should be updated with latest versions of docs.
* New release should be added to releases page, including links to associated artifacts. 
* Packages page should be updated.

## Release Announcement 

Once everything else has been prepared, the release announcement should be made. This should go to the OpenMAMA Users, Dev and Announcements mailing list, and should contain an overview of the changes, a link to the announcement blog post, and a link to the releases page.

An announcement for the release should also be added to the OpenMAMA Twitter account.
