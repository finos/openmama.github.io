---
title: Contributing to OpenMAMA Documentation
sidebar: openmama_sidebar
permalink: openmama_contribute_documentation.html
folder: openmama
toc: false
---

The OpenMAMA documentation project has been designed using github pages for a few key reasons:

* It defragments all existing technical documentation and puts it in one place
* It allows documentation to be hosted natively using github's infrastructure
* It allows changes to be made by third parties using existing pull request style mechanisms
* Aspiring contributors can write their own changes and test them locally before submitting

This page aims to empower you to getting started with contributing documentation with minimal fuss and most of
the documentation is taken from the official documentation theme's website.

## Submitting Changes

For any changes you may want to make, you are best to preview locally before submitting and run your own copy of the website.
Don't worry there are no databases etc. involved so setup is fairly straightforward.

### Fork the reposotory

First things first you're recommended to fork the repository on github. If you don't already have a github
account, you'll need to create one, then navigate to [https://github.com/finos/openmama.github.io](https://github.com/finos/openmama.github.io)
and press the `Fork` button to fork your own copy of the repo. This will give you your own independent copy of the repository which you
can do what you like with. You are also recommended to run `git checkout -b descriptive-branch-name-for-your-changes` to ensure any
changes that you contribute back are done from an isolated feature branch.

### Clone your fork of the reposotory

Locally, clone the repository *from your fork*. (`git clone https://github.com/yourusername/openmama.github.io.git`)

### Install Jekyll and run the Site Locally

For instructions on how to run the site locally, please refer to [the main website repository's documentation](https://github.com/finos/openmama.github.io).

### Commit your changes

Once you are happy, perform the usual git add / commit / push to push your changes back to your **own forked repository**.

### Create pull request

Once you're happy, navigate to [https://github.com/finos/openmama.github.io](https://github.com/finos/openmama.github.io)
and you should be presented with an invitation to create a pull request which will lead you to a form which you can fill in
detailing the nature of the change. Once this pull request is approved and merged, it will automatically update the live site!