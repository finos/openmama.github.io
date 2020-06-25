---
title: Contributing to OpenMAMA Documentation
sidebar: openmama_sidebar
permalink: openmama_contribute_documentation.html
folder: openmama
toc: false
---

The OpenMAMA documentation project has been designed using github pages for a few key reasons:

1. It defragments all existing technical documentation and puts it in one place
2. It allows documentation to be hosted natively using github's infrastructure
3. It allows changes to be made by third parties using existing pull request style mechanisms
4. We really liked [Tom Johnson's documentation theme for jekyll](http://idratherbewriting.com/documentation-theme-jekyll/)
5. Aspiring contributors can write their own changes and test them locally before submitting

This page aims to empower you to getting started with contributing documentation with minimal fuss and most of
the documentation is taken from the official documentation theme's website.

## 1. Small Changes

For small changes, simply click the `Edit me` button that you'll find on any page. You'll be asked to make changes which github will change
into a pull request for you. Alternatively if you have write access to the repository, you can push it straight
into the master branch.

## 2. Large Changes

For larger changes you may want to preview locally before submitting. If that's the case, this section is for you.

### 2.1. Fork the reposotory

First things first you're recommended to fork the repository on github. If you don't already have a github
account, you'll need to create one, then navigate to [https://github.com/OpenMAMA/openmama.github.io](https://github.com/OpenMAMA/openmama.github.io)
and press the `Fork` button to fork your own copy of the repo. This will give you your own independent copy of the repository which you
can do what you like with. You are also recommended to run `git checkout -b descriptive-branch-name-for-your-changes` to ensure any
changes that you contribute back are done from an isolated feature branch.

### 2.2. Clone the reposotory

Locally, clone the repository *from your fork*. (`git clone https://github.com/yourusername/openmama.github.io.git`)

### 2.3. Install Ruby and Development Kit

Install [ruby and the ruby development kit](http://rubyinstaller.org/downloads/) following instructions from that link and add ruby to
your default `PATH` environment variable.

### 2.3. Install Prerequisites

Now open up a command prompt (on either linux or windows) and navigate to the location of the checked out clone of `github.openmama.io`.
Once you're inside, run the following commands:

```
gem install jekyll bundler
bundle update
```
This will install jekyll and bundler, and use bundler to resolve dependencies for this repository.
If you're getting issues with SSL when trying to do this, see [this stack overflow article](http://stackoverflow.com/questions/20399531/how-to-tell-gem-command-not-to-use-ssl).

### 2.4. Make your changes

See [this link](https://github.com/tomjohnson1492/documentation-theme-jekyll) for details on how to make changes to the documentation.

### 2.5. Preview your changes

You can run the following to run jekyll as a server on the localhost, so that navigating to https://localhost:4000 will take you to a preview of
your documentation changes:

```
bundle exec jekyll serve
```

### 2.6. Commit your changes

Once you are happy, perform the usual git add / commit / push to push your changes back to your own fork repository.

### 2.7. Create pull request

Once you're happy, navigate to [https://github.com/OpenMAMA/openmama.github.io](https://github.com/OpenMAMA/openmama.github.io)
and you should be presented with an invitation to create a pull request which will lead you to a form which you can fill in
detailing the nature of the change.

### 2.8. Wait for us to read :)

It may take us a little time to review and approve the change. Once we have reviewed and any suggested changes have been
made, it'll get submitted to the main repository and the page will live update!