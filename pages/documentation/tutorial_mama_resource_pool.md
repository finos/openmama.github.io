---
title: Using MAMA Resource Pool
sidebar: openmama_sidebar
permalink: tutorial_mama_resource_pool.html
folder: openmama
toc: false
---
This tutorial assumes you have the [same environment set up in the quickstart guide](quickstart.html), and offers a way to write a similar application, but this
time using the MAMA Resource Pool.

The MAMA Resource pool is a way to manage resources which would otherwise need to be created manually along with their dependencies. It provides optimization out of
the box and encourages configuration rather than code to configure behaviour for things like sources and transports.

It also manages some of the more tricky aspects of managing an OpenMAMA application such as setup, shutdown and cleanup in a thread safe manner.

## Creating a Resource Pool

The first thing that we should do when using a mama resource pool is to create an instance. This can be done by simply creating an instance by name:

{% capture snippet_c %}
{% highlight c %}
mamaResourcePool pool;
mamaResourcePool_create (&pool, "default");
{% endhighlight %}
{% endcapture %}

{% capture snippet_cpp %}
{% highlight cpp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_csharp %}
{% highlight csharp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_java %}
{% highlight java %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% include tabbed-panel.html id="snippet-tut-2-mrp-create" tabs=site.data.tabpanels.languages.names headings=site.data.tabpanels.languages.headings csharp=snippet_csharp java=snippet_java c=snippet_c cpp=snippet_cpp %}

This will create a new MAMA resource pool with the name "default" and will inherit all the default
properties for the MAMA resource pool with that name from configuration `mama.resource_pool.<pool name>.<property>`, e.g.:

```properties
# The number of threads / queues to use in the pool's queue group per bridge
mama.resource_pool.default.queues=4

# List of bridges to load
mama.resource_pool.default.bridges=qpid, nng

# List of options to use when creating a subscription in this pool
mama.resource_pool.default.options.retries = 5
mama.resource_pool.default.options.timeout = 1
```

After this is done, you can set up your dictionary the same as in the quickstart
guide.

## Setting up Event Handlers

Then you can set callback handlers as normal
before creating a subscription. Note that
when using the resource pool, only the `onMsg` callback is mandatory:

{% capture snippet_c %}
{% highlight c %}

static void MAMACALLTYPE
subscriptionOnMsg  (mamaSubscription    subscription,
                    mamaMsg             msg,
                    void*               closure,
                    void*               itemClosure) {
    fprintf (stdout,
             "Message Received: %s\n",
             mamaMsg_toJsonStringWithDictionary (msg, closure));
}

// This is a set of callbacks which we'll NULL set here
mamaMsgCallbacks callbacks;
memset(&callbacks, 0, sizeof(callbacks));

// Only the onMsg callback is mandatory in mamaResourcePool
callbacks.onMsg = subscriptionOnMsg;
{% endhighlight %}
{% endcapture %}

{% capture snippet_cpp %}
{% highlight cpp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_csharp %}
{% highlight csharp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_java %}
{% highlight java %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% include tabbed-panel.html id="snippet-tut-2-mrp-callback-create" tabs=site.data.tabpanels.languages.names headings=site.data.tabpanels.languages.headings csharp=snippet_csharp java=snippet_java c=snippet_c cpp=snippet_cpp %}

## Subscribing to Market Data

Next you can create your subscription using any of the mamaResourcePool calls assuming that:

* Your publisher is up and available
* The bridge that you require is configured in the MAMA Resource pool's `bridges` property

All you need to do is call one of the `creatSubscription` calls:

{% capture snippet_c %}
{% highlight c %}
mamaSubscription subscription;
const char* transportName = "sub";
const char* sourceName = "OM";
const char* symbolName = "DE000CM95AU4.EUR.XPAR";
mamaResourcePool_createSubscriptionFromComponents (
        pool,
        &subscription,
        transportName,
        sourceName,
        symbolName,
        callbacks,
        dictionary);
{% endhighlight %}
{% endcapture %}

{% capture snippet_cpp %}
{% highlight cpp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_csharp %}
{% highlight csharp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_java %}
{% highlight java %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% include tabbed-panel.html id="snippet-tut-2-mrp-create-subscription" tabs=site.data.tabpanels.languages.names headings=site.data.tabpanels.languages.headings csharp=snippet_csharp java=snippet_java c=snippet_c cpp=snippet_cpp %}

And that creates the subscription... but it is not yet activated. This is deliberate so that you can apply further mamaSubscription API calls if you want before activating it:

{% capture snippet_c %}
{% highlight c %}
// Set further MAMA Subscription properties
mamaSubscription_setRequiresInitial (subscription, requiresInitial);

// Activate the subscription
mamaSubscription_activate (subscription);
{% endhighlight %}
{% endcapture %}

{% capture snippet_cpp %}
{% highlight cpp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_csharp %}
{% highlight csharp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_java %}
{% highlight java %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% include tabbed-panel.html id="snippet-tut-2-mrp-create-subscription" tabs=site.data.tabpanels.languages.names headings=site.data.tabpanels.languages.headings csharp=snippet_csharp java=snippet_java c=snippet_c cpp=snippet_cpp %}

In our tutorial example. this then calls MAMA's `startAll` function to begin dispatching events for this subscription, and will then unblock when MAMA is interrupted.

Note it is also possible to destroy an individual subscription during normal operation as well using MAMA Resource Pool's `destroySubscription` method.

## Cleaning Up

After the application is ready to shut down, cleanup is as simple as:

{% capture snippet_c %}
{% highlight c %}
// Clean up connection on termination
mamaResourcePool_destroy (pool);
{% endhighlight %}
{% endcapture %}

{% capture snippet_cpp %}
{% highlight cpp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_csharp %}
{% highlight csharp %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% capture snippet_java %}
{% highlight java %}
// TODO: Not yet implemented
{% endhighlight %}
{% endcapture %}

{% include tabbed-panel.html id="snippet-tut-2-mrp-destroy" tabs=site.data.tabpanels.languages.names headings=site.data.tabpanels.languages.headings csharp=snippet_csharp java=snippet_java c=snippet_c cpp=snippet_cpp %}

Which will clean up not only the MAMA Resource Pool but also all underlying transports, queues and subscriptions in a thread safe manner so you can safely call MAMA's `close` function.

*Note that if using the pool, any transports, sources and subscriptions using MAMA Resource Pool should be exclusively destroyed by MAMA Resource Pool. Attempting to also destroy in your own application can lead to a double destroy and undefined behaviour.*

## Complete Example Code

For complete functioning example code, please see:

{% capture snippet_c %}
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Ffquinner%2FOpenMAMA%2Fblob%2Ffeature%2Fmama-resource-pool%2Ftutorials%2Fc%2F02-resourcepool%2Fresourcepool.c&style=github&showBorder=on&showLineNumbers=off&showFileMeta=on"></script>
{% endcapture %}

{% capture snippet_cpp %}
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Ffquinner%2FOpenMAMA%2Fblob%2Ffeature%2Fmama-resource-pool%2Ftutorials%2Fcpp%2F02-resourcepool%2Fresourcepool.cpp&style=github&showBorder=on&showLineNumbers=off&showFileMeta=on"></script>
{% endcapture %}

{% capture snippet_csharp %}
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Ffquinner%2FOpenMAMA%2Fblob%2Ffeature%2Fmama-resource-pool%2F%2Fcsharp%2F02-resourcepool%2FProgram.cs&style=github&showBorder=on&showLineNumbers=off&showFileMeta=on"></script>
{% endcapture %}

{% capture snippet_java %}
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Ffquinner%2FOpenMAMA%2Fblob%2Ffeature%2Fmama-resource-pool%2F%2Fjava%2F02-resourcepool%2Fsrc%2Fmain%2Fjava%2Fresourcepool%2FApp.java&style=github&showBorder=on&showLineNumbers=off&showFileMeta=on"></script>
{% endcapture %}

{% include tabbed-panel.html id="snippet-tut-2-example" tabs=site.data.tabpanels.languages.names headings=site.data.tabpanels.languages.headings csharp=snippet_csharp java=snippet_java c=snippet_c cpp=snippet_cpp %}