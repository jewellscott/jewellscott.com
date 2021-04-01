---
title: 'Blog'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 20
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Previous'
paginationNextText: 'Next'
paginationAnchor: '#post-list'
---
This is an even more lovely short blurb on the subject, which is going to be longer than the title.