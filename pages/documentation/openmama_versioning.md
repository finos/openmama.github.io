---
title: Version Convention
sidebar: openmama_sidebar
permalink: openmama_versioning.html
folder: openmama
toc: false
---

## Version Format

The structure of the version numbering is similar to [semantic versioning](https://semver.org):

`[MAJOR].[MINOR].[PATCH]`

However in the OpenMAMA project, some of these segments have additional special meaning when it comes to compatibility. Details are listed below.

### Major Version

When the `MAJOR` number increments, this represents a non-backwards compatible change in the *application's interface*. This includes:
* Deprecation of a public MAMA API method
* Backwards incompatible changes for MAMA applications including methods and public data structures
* New enforced changes for MAMA application behaviour such as order of loading or initialization methods

### Minor Version

When the `MINOR` number increments, this represents a backwards incompatible change in the *MAMA payload bridge's, middleware bridge's or plugin interface*. This includes:
* Deprecation of a private MAMA API method known to be used by MAMA bridges and plugins
* Backwards incompatible interface changes for bridges and plugins including methods and public data structures
* New enforced changes to the MAMA bridge or plugin behaviour such as order of loading or initialization methods

### Patch / Release Version

When the `PATCH` number increments, that represents a standard OpenMAMA Maintenance release. It may contain:
* Backwards compatible interface changes for both bridges and applications
* Bugfixes
* Enhancements

Note that the release may also be suffixed by additional descriptive strings such as "rcX".

## Legacy Versions Prior to OpenMAMA 6.1.x

Before OpenMAMA 6.1.x was released, there was a bit of confusion around what the versioning represented. That formed a pretty large part of why we converged on this standard. The table below lists all equivalent versions as they were released by both Vela and OpenMAMA prior to OpenMAMA 6.1.x

| Version Information     | Modern Normalized Version |
| ----------------------- | ------------------------- |
| OpenMAMA 2.2.x          |                     6.0.x |
| OpenMAMA 2.3.x          |                     6.0.x |
| OpenMAMA 6.0.x (x < 7)  |                     6.0.x |
| OpenMAMA 2.4.x          |                     6.1.x |
| OpenMAMA 6.0.x (x >= 7) |                     6.1.x |
| OpenMAMA 6.1.x          |                     6.1.x |
| OpenMAMA 6.y.x (future) |                     6.y.x |
