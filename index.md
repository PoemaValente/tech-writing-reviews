---
layout: default
title: Home
---

_A place to think about technical writing as craft and practice. This is where syntax meets soul, and documentation meets people doing actual work._

Here, I discuss blogs, books, tools, and ideas impacting today’s technical writers. Each piece considers not only what a resource says, but also how it contributes to the day-to-day lives of technical communicators: the decisions we make about structure, language, ethics, and audience.

---

## What I Pay Attention To

In every review, I focus on four aspects of excellent technical communication:

- **Audience awareness and clarity** — how interesting and easy to understand the resources are  
- **Information architecture** — structure, hierarchy, navigation, and how easily someone can find what matters  
- **Tone and style** — voice, precision, rhythm, and how the writing feels to move through  
- **Practical value for working writers** — what a technical writer, editor, or content designer can carry back into their own practice  

---

## Latest posts

Here are the most recent pieces on *Syntax and Soul*.  
You can also find them in the sidebar under **Recent posts**, or browse everything on the [Reviews]({{ site.baseurl }}/reviews.html) page.

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  <span class="date">{{ post.date | date: "%B %e, %Y" }}</span>
{% endfor %
