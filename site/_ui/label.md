---
layout: post
sidebar: ui
title: 标签（component/label.scss）
sidenav: label
---

以“ui-label-”为前缀，默认有三种颜色，尺寸都一样。

在“label.scss”中有个私有@mixin，**“_label”**，如果自己要扩展可以引用此@mixin，可控制名字、内边距、边框宽度以及颜色。

<div class="demo-border">
  <div class="ui-label-important">important</div>
  <div class="ui-label-success">success</div>
  <div class="ui-label-warning">warning</div>
</div>

```html
<div class="ui-label-important">important</div>
<div class="ui-label-success">success</div>
<div class="ui-label-warning">warning</div>
```