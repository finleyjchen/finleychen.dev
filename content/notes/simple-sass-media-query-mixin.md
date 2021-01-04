---
title: Simple Sass Media Query Mixin
date: 2020-12-24
path: /simple-sass-media-query-mixin
---

```css
/* breakpoints for media queries */
$narrow: 480px;
$mid: 768px;
$wide: 1000px;

@mixin tablet {
    @media (min-width: $mid) { @content; }
}
@mixin desktop {
    @media (min-width: $wide) { @content; }
}

```