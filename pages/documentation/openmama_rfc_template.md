---
title: RFC for XXXX
sidebar: openmama_sidebar
permalink: openmama_rfc_template.html
folder: openmama
toc: true
---

## Definition of the Problem

Define the problem at a fairly high level assuming the reader knows nothing about the feature
you're adding, but knows OpenMAMA very well.

## High Level Requirements

Detail requirements in this section - you may find that a diagram or list of bullets will help
light the way here. Be sure to keep all documentation succinct and unambiguous here.

## Summaries of Design Approaches Considered

You may only present only one choice if the solution is obvious and leave this section out,
but where there are many possible solutions, this is a good chance to explain why your
particular option was chosen, and to demonstrate to the community that more than one option
was considered.

### Choice X Description

Repeat this section to taste. Summary detail of this choice. Do not go into low level
implementation detail if it can be avoided. Even for the chosen option.

#### Pros of Choice X Description

Brief description of the pros of this choice. Most likely bullet points.

#### Cons of Choice X Description

Brief description of the cons of this choice. Most likely bullet points.

## Recommended Design Approach

Include detailed summary description of the choice taken and explain the rationale behind it. 

### Component X

Repeat this section to taste. Detail related changes. E.g. a component may be a specific language or flow.

#### Interface Changes

Detail any changes required to the interface or any new interfaces being introduced. Provide examples.

#### Internal Data Structure Changes

Any changes to underlying data structures (particularly shared ones) should be detailed here.

#### Unit Testing Required

If the component is unit testable, specify the details here. No specific method names required - simply a list of
the general things you plan on unit testing (e.g. null conditions, boundary tests).

#### Integration Testing Required

If the component changes behaviour in how it interacts with other components, detail what has changed here (e.g. 
wire format has changed, need to test backwards compatibility)

## Impact of Resulting Changes

Refer to [this](https://github.com/OpenMAMA/OpenMAMA/wiki/OpenMAMA-Versioning) when considering this section.

### Impact to Application Users

If application interface is changed, document it here and justify the impact is worth the improvement.

### Impact to Bridge Developers

If the bridge interface is changed, document it here and justify the impact is worth the improvement.

### Impact to Internal API Components

If any internal interface is changed, document it here and justify the impact is worth the improvement.
