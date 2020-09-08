---
title: Third Party Repository
sidebar: openmama_sidebar
permalink: openmama_contribute_thirdparty.html
folder: openmama
toc: true
---

OpenMAMA maintain a repository of third party plugins on Cloudsmith that are provided as-is.

The idea is to provide a single, central place where Linux users can pull in the latest
versions of third party plugins easily without having to go directly to third parties and
fragment the deployment experience (especially at an early stage when it may not be clear
how to get these third party libraries).

The repository may be found at [https://cloudsmith.io/~openmama/repos/openmama-thirdparty](https://cloudsmith.io/~openmama/repos/openmama-thirdparty)
and contribution to this repository is managed by the OpenMAMA maintainer. If you would
like to contribute your own packages, you are free to submit them for consideration by
raising a github issue.

## Creating an OpenMAMA third party package

The easiest way to create an OpenMAMA third party package is by using a tool called [fpm](https://github.com/jordansissel/fpm)
since it can create packages of many types and can build a package with only a directory.

The OpenMAMA packages expect to be deployed to `/opt/openmama` so your plugins / bridges
should install to `/opt/openmama/lib` (taking care not to overwrite any existing files).

You can create your own package by creating a directory with nothing inside except for
your component libraries and its dependencies, then using fpm to package it up:

    mkdir lib_dir
    cp /your/lib/location/*.so ./lib_dir
    fpm -t deb -s dir -v 0.0.1 -n openmama-yourcomponentname ./assets/=/opt/openmama/lib/

Or using `rpm` instead of `deb` to create an RPM package.
