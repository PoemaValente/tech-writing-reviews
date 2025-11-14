---
layout: default
title: "All Reviews"
permalink: /reviews.html
---

# All Reviews

Browse all my reviews of technical writing resources.

<ul>
  {% assign reviews = site.posts | sort: "date" | reverse %}
  {% for post in reviews %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% if post.rating %} ({{ post.rating }}/5){% endif %}
      {% if post.topic %} – <em>{{ post.topic }}</em>{% endif %}
      <br>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
