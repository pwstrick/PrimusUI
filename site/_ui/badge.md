---
layout: post
sidebar: ui
title: 微标（component/badge.scss）
sidenav: badge
---

以“ui-badge-”为前缀，默认有三种颜色，尺寸都一样。

在“badge.scss”中有个私有@mixin，**“_badge”**，如果自己要扩展可以引用此@mixin，可控制名字、内边距、圆角以及颜色。

<div class="demo-border">
  <div class="ui-badge-important">important</div>
  <div class="ui-badge-success">success</div>
  <div class="ui-badge-warning">warning</div>
</div>

```html
<div class="ui-badge-important">important</div>
<div class="ui-badge-success">success</div>
<div class="ui-badge-warning">warning</div>
```