---
title: Unit Testing
sidebar: openmama_sidebar
permalink: openmama_unit_testing.html
folder: openmama
toc: false
---
After the build is complete (built with the `with_unittest` flag set to true, and
`gtest_home` directed to a local gtest installation), a series of extra binaries
can be found in the bin folder of the install.

```
 UnitTestCommonC
 UnitTestMamaC
 UnitTestMamaCPP
 UnitTestMama___________
```

Each runs a subset of the available MAMA unit tests, using the Google test
framework. 
 
The following command line argument is available, as well as the normal Google
test options:

``` 
-m ${MIDDLEWARE}
```

For example: `-m qpid`:

Tests which interact with the underlying payload directly also accept the
following:

```
-p ${PAYLOAD} -i ${PAYLOAD_CHARACTER_IDENTIFIER}
```

For example: `-p qpidmsg -i Q`
