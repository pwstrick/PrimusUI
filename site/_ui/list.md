---
layout: post
sidebar: ui
title: 列表（component/list.scss）
sidenav: list
---

列表中有使用**“flex”**弹性布局，也会用到**“block”**传统布局，结合[网格](grid.html)、[边框](border.html)、[布局](layout.html)等样式，就能实现各种列表效果。

列表效果的标签是用**“ul”**和**“li”**。先给**“ul”**赋**“ui-list”**，默认**“li”**内是**“flex”**布局。

# 一、传统布局（block）

给**“ul”**赋**“ui-list-block”**，**“li”**内就是**“block”**，传统的布局。

给**“li”**赋**“active”**样式，就是按下的效果。

<div class="demo-border">
  <ul class="ui-list ui-list-block">
    <li>
      <h3>1.h3标题标题标题</h3>
      <h6>h6内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</h6>
    </li>
    <li class="active">
      <h3>1.按下的效果</h3>
      <h6>h6内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</h6>
    </li>
  </ul>
</div>

```html
<ul class="ui-list ui-list-block">
  <li>
    <h3>1.h3标题标题标题</h3>
    <h6>h6内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</h6>
  </li>
  <li class="active">
    <h3>1.按下的效果</h3>
    <h6>h6内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</h6>
  </li>
</ul>
```

# 二、多列布局（multi）

在**“li”**内可以有两列，三列甚至更多，下面演示的是弹性布局的情况。

如果是传统布局，就需要**“float”**浮动实现。

<div class="demo-border">
  <ul class="ui-list">
    <li class="ui-flex-column-center">
      <div class="ui-col-1">
        <h4>设置了上下居中的效果</h4>
        <p>设置了上下居中的效果</p>
      </div>
      <div>使用中</div>
    </li>
  </ul>
</div>

上面实现的两列垂直居中，使用到了网格中的“[ui-flex-column-center](grid.html#ui-flex-column-center)”样式。

```html
<ul class="ui-list">
  <li class="ui-flex-column-center">
    <div class="ui-col-1">
      <h4>设置了上下居中的效果</h4>
      <p>设置了上下居中的效果</p>
    </div>
    <div>使用中</div>
  </li>
</ul>
```

# 三、箭头列表（arrow）

给**“ul”**赋**“ui-list-link”**样式，下面的**“li”**都会显示一个箭头。

<div class="demo-border">
  <ul class="ui-list ui-list-link">
    <li class="ui-flex-column-center">
      <div class="ui-col-1">
        <h4 class="ui-nowrap">生日</h4>
        <p>设置了上下居中的效果</p>
      </div>
    </li>
  </ul>
</div>

```html
<ul class="ui-list ui-list-link">
  <li class="ui-flex-column-center">
    <div class="ui-col-1">
      <h4 class="ui-nowrap">生日</h4>
      <p>设置了上下居中的效果</p>
    </div>
  </li>
</ul>
```

# 四、图文混排（img）

给包裹图片的容器加个**“ui-list-img”**样式。

这个样式默认会将图片变为块级元素，并且设置为100%宽度，并配置了外边距。

<div class="demo-border">
  <ul class="ui-list ui-list-link">
    <li>
      <div class="ui-width-10 ui-list-img">
        <img src="{{site.baseurl}}/assets/images/ui-demo1.jpg" />
      </div>
      <h4 class="ui-nowrap ui-col-1">性别</h4>
    </li>
  </ul>
</div>

```html
<ul class="ui-list ui-list-link">
  <li>
    <div class="ui-width-10 ui-list-img">
      <img src="assets/images/ui-demo1.jpg" />
    </div>
    <h4 class="ui-nowrap ui-col-1">性别</h4>
  </li>
</ul>
```

# 五、加载效果（loading）

加载样式其实是在**“component/loading.scss”**中，一个独立的CSS。

用最朴素的实现方式，设置border为3px，将border-top设置为透明，圆角设置为100%，变成一个圆。

最后用CSS3动画旋转360°。

<div class="demo-border">
  <div class="ui-loading-wrap">
    <p>加载中</p>
    <i class="ui-loading"></i>
  </div>
</div>