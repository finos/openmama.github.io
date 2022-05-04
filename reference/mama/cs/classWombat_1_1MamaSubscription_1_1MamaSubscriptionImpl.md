---
title: Wombat::MamaSubscription::MamaSubscriptionImpl
summary: This impl will perform the work of invoking user supplied callbacks, it is held to ensure that the user can destroy and recreate the parent subscription during the callbacks. Note that this class derives from the MamaBasicSubscriptionImpl so that the static callback functions in the MamaBasicSubscription class can be re-used. However as the MamaSubscriptionCallback interface is a separate type, (it cannot be derived from MamaBasicSubscriptionCallback as the type of the subscription passed to the callback functions would be incorrect), overloads must be provided for all the Invoke methods. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSubscription::MamaSubscriptionImpl



This impl will perform the work of invoking user supplied callbacks, it is held to ensure that the user can destroy and recreate the parent subscription during the callbacks. Note that this class derives from the MamaBasicSubscriptionImpl so that the static callback functions in the [MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) class can be re-used. However as the [MamaSubscriptionCallback]() interface is a separate type, (it cannot be derived from [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) as the type of the subscription passed to the callback functions would be incorrect), overloads must be provided for all the Invoke methods. 

Inherits from MamaBasicSubscriptionImpl

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100