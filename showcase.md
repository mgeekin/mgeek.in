---
layout: page
title: showcase
topmenu: true
order: 3
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