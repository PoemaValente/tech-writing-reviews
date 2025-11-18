---
layout: default
title: Home
---


_A space for thinking about technical writing as both craft and practice. It's where syntax meets soul, and documentation meets real people doing real work._

Here I review the blogs, books, tools, and ideas that are shaping today’s technical writing landscape.  
Each piece looks not only at **what** a resource says, but **how** it influences the everyday realities of technical communicators: the choices we make about structure, language, ethics, and audience.

---

## What I Pay Attention To

In each review, I look closely at four dimensions of strong technical communication:

- **Audience awareness & clarity** — how well a resource meets the knowledge level, expectations, and needs of its readers.  
- **Information architecture** — structure, hierarchy, navigation, and how easily someone can find what matters.  
- **Tone & style** — voice, precision, rhythm, and how the writing feels to move through.  
- **Practical value for working writers** — what a technical writer, editor, or content designer can carry back into their own practice.

---

## Latest posts

Here are the most recent pieces on Syntax and Soul.  
You can also find them in the sidebar under **Recent posts**, or browse everything on the [Reviews]({{ site.baseurl }}/reviews.html) page.

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  <span class="date">{{ post.date | date: "%B %e, %Y" }}</span>
{% endfor %}
