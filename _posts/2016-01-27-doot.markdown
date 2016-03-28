---
layout: post
title:  "A third post"
date:   2016-03-27 01:03:20 -0500
categories: jekyll update
cover_url: /assets/home/print.jpg
short_title: "Print"
---
This post is will walk you through some important parts of making your own wearable textiles that glitter. To start you'll need a few things.

This tutorial is made with the [FLORA](https://www.adafruit.com/products/659?gclid=CKWw_tX868kCFYUWHwodw54CPQ) from Adafruit.

```
An image that shows all of the items and where to buy them.
```

To start there are a few important things to know about what we're working on. To make this dress we'll need to create a pretty elaborate circuit. This can be a challenge for a few


You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Here's some code for

{% highlight java %}
int led = 10;   // Look at your flora, this number corresponds
                // to the positive pin you're connected to.
int brightness =  0;  // start with no brightness
int fadeAmount = 5;   // adjust this number to taste
int delayIncr = 15;   // how long to wait between light incr/decr

// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
}

void loop() {

    analogWrite(led, brightness);
    brightness = brightness + fadeAmount;

    if (brightness == 0 || brightness == 255) {
      fadeAmount = -fadeAmount;
    }

    delay(delayIncr);
}
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
