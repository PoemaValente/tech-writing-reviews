---
layout: default
title: "Home"
---

Welcome! This is my space for reviewing **technical writing resources**: blogs, books, tools, and courses.

I focus on:

- Audience awareness and clarity
- Information architecture
- Style and tone
- Practical usefulness for working technical writers

## Latest reviews

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% if post.topic %} – <em>{{ post.topic }}</em>{% endif %}
      <br>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
