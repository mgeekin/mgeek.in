---
layout: page
title: blog
topmenu: true
order: 4
---

{% for p in site.pages %}
{%if p.submenu %}
<ul>
{% if page.title == p.submenutype %}
<li><a href="{{p.url}}">{{p.title}}</a></li>
{%endif%}
</ul>
{%endif%}
{%endfor%}