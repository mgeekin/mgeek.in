---
layout: page
title: Sitemap
---

## Posts  

<ul class="list-group">
    {% for post in site.posts %}
    
    <li class="list-group"><a href="{{ siteurl }}{{site.baseurl}}{{ post.url }}">{{ post.title }}</a></li>
    <br>
    
    {% endfor %}
</ul>


<div class="row p-5">


</div>
## Pages

<ul class="list-group">
{% for post in site.pages %}

<li class="list-group"><a href="{{ siteurl }}{{site.baseurl}}{{ post.url }}">{{ post.title }}</a></li>
<br>

{% endfor %}
</ul>
<hr>
<div class="row p-5">


</div>

