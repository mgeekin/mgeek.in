---
layout: page
title: universal disqus code for jekyll 
submenu: true
submenutype: cheatsheet
submenuindex: 3
comments: true
---

```
<div class="row">
    <div class="container">
        {% if page.comments %}
        <div id="disqus_thread"></div>
        <script>
            var disqus_config = function () {
                this.page.url = '{{ site.url }}{{site.baseurl}}{{page.url}}';
                this.page.identifier = '{{ site.url }}{{site.baseurl}}{{ page.url }}';
            };

            {% assign u1 = site.url | replace: ".", "-" %}
            {% assign u2 = u1 | replace: "https://", "" %}
            {% if site.baseurl ~= "" %}
                {% assign b1 = site.baseurl | replace: ".", "-" | replace: "/", "-" %}
            {% endif %}

            {% assign u3 = u2 | replace: "http://", "" %}
            {% assign disqueurl = u3 | append: b1 %}

            (function () { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://{{ disqueurl }}.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        </script>
        <noscript>Please enable JavaScript to view the
            <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>

        {% endif %}

    </div>
</div>
```