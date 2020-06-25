---
title: Process for RFCs on the OpenMAMA Project
sidebar: openmama_sidebar
permalink: openmama_rfc_process.html
folder: openmama
toc: true
---

## High Level Summary

In summary, the OpenMAMA project subscribes to the following RFC process for major pieces of work:

![State Diagram](images/openmama_rfc_review_process.png)

## Pre-requisites for raising an RFC

There are several recommended pre-requisites which should be considered before creating an RFC.

### Talk to the community

Before going to the efforts associated with raising an RFC, it's a good idea to solicit feedback
from the community. The best way to do this is to send an email to the OpenMAMA Developer mailing
list. **You could find that a RFC isn't even required and that a simple pull request containing
your suggested changes would be sufficient.**

Once an RFC becomes code, it becomes the project as a whole's responsibility to maintain **all**
related changes, so buy-in from the community to support these major changes should be
established **upfront**.

### Think it through

It's easy to get into the realm of documenting things before thinking it through, then realising
that you need to backpedal and retro-fit changes because there were elements that you hadn't
considered upfront. Before proceeding, have a skim through the <openmama_rfc_template.html> which
will give you an idea of the bases you'll need to cover and the detail required upfront.

## Raising and Writing an RFC

Before writing an RFC, it's best to get up and running with a local jekyll server to allow
you to preview all changes before submitting to github. 

1. Fork the documentation repository by clicking the Fork button above the [openmama.github.io](https://github.com/OpenMAMA/openmama.github.io) repository

2. Clone a copy of your fork to your local machine: `git clone https://github.com/your-github-username/openmama.github.io.git`

3. Set up jekyll for local previews (optional but recommended) - see [our contribution documentation](openmama_contribute_documentation.html)

4. Create your RFC page (copy and paste `pages/openmama/openmama_rfc_template.md` to `pages/openmama/openmama_rfc_your_summary_description.md`)

5. Fill in the RFC Template

6. Do git add / commit / push etc to create a pull request for the project maintainer to approve

7. Once the submission is approved, notify the mailing list of the new RFC and invite participation from the community

## Process for an in-flight RFC

Once an RFC has been raised, it is in the review process. The project maintainer will then respond with a deadline for the RFC after which point
if no further changes are required, the matter will be considered closed. Under normal circumstances, this will last for 2 weeks,
but if significant changes are required, this may be extended at the discretion of the project maintainer.

Once the deadline has expired and no further changes are required, the RFC is considered approved / closed and the contributor is free to begin
work. The Closed RFC entry will then be updated with details on the resulting pull request / commit when it's submitted.

### How to provide RFC Feedback

How you would need to provide feedback depends on the nature of your contribution:

#### Suggestion

This is easily the preferred way to provide feedback for an RFC document. If you have a criticism about an element in a document, then
you are encouraged to not just point out the error, but to submit suggestions to correct this. You can do so by clicking on the Edit
link on an RFC and making changes through github. This can then be submitted through the GUI back to the page in the form of a pull
request which can then be accepted if the suggested change is correct.

#### Discussion

If your feedback is really around clarification or questioning of an item in the document, your best way to provide feedback is via the original
mailing list thread created by the proposer. This is linked to in the final RFC documentation and is a good way to ensure that all related
feedback is provided in full visibility of all interested parties. 