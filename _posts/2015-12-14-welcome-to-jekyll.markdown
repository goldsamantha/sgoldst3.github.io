---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-12-14 01:03:20 -0500
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight java %}
// Pin D7 has an LED connected on FLORA.
// give it a name:
int led = 10;
int led2 = 6;
int led3 = 9;   // variable names are hard yo!
int brightness =  0;
int fadeAmount = 5;
int brightness2 = 255;
int fadeAmount2 = -10;

int delayIncr = 15;

// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(led2, OUTPUT);     
}

void loop() {

    analogWrite(led, brightness);
    analogWrite(led2, brightness);
    analogWrite(led3, brightness2);

    brightness = brightness + fadeAmount;
    brightness2 = brightness2 + fadeAmount2;

    if (brightness == 0 || brightness == 255) {
      fadeAmount = -fadeAmount;
    }

    if (brightness2 < 0){
      fadeAmount2 = -fadeAmount2;
      brightness2 = 0;

    }
    else if (brightness2 > 255) {
      fadeAmount2 = -fadeAmount2;
      brightness2 = 255;
    }


    delay(40);
}
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
