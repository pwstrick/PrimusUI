---
layout: post
sidebar: ui
title: 边框（base/border.scss）
sidenav: border
---

在Retina屏会出现1px的问题，在这段代码中会做些处理。

边框样式包括全边框，左、右、上、下单边框，左右、上下双边框，以及圆角边框。

<div class="demo-border">
  <section class="demo-block">
    <div class="ui-border ui-border-block">1px边框</div>
  </section>
  <section class="demo-block">
    <div class="ui-border-t ui-border-block">1px上边框</div>
  </section>
  <section class="demo-block">
    <div class="ui-border-b ui-border-block">1px下边框</div>
  </section>
  <section class="demo-block">
    <div class="ui-border-l ui-border-block">1px左边框</div>
  </section>
  <section class="demo-block">
    <div class="ui-border-r ui-border-block">1px右边框</div>
  </section>
  <section class="demo-block">
    <div class="ui-border-lr ui-border-block">1px左右边框</div>
  </section>
  <section class="demo-block">
    <div class="ui-border-tb ui-border-block">1px上下边框</div>
  </section>
  <section class="demo-block">
    <div class="ui-border-radius ui-border-block">1px圆角</div>
  </section>
</div>

```html
<div class="ui-border">1px边框</div>
<div class="ui-border-t">1px上边框</div>
<div class="ui-border-b">1px下边框</div>
<div class="ui-border-l">1px左边框</div>
<div class="ui-border-r">1px右边框</div>
<div class="ui-border-lr">1px左右边框</div>
<div class="ui-border-tb">1px上下边框</div>
<div class="ui-border-radius">1px圆角</div>
```