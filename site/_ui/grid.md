---
layout: post
sidebar: ui
title: 网格（base/grid.scss）
sidenav: grid
---

flex的相关属性有多个版本，为达到同一个功能，就需要使用多个不同版本的属性。

人工书写会比较费事，gulp中有一个插件可以实现自动匹配，叫“[autoprefixer](https://npm.taobao.org/package/autoprefixer){:target="_blank"}”

# 一、基础属性（basic）

##### **1）.ui-flex**

将某个标签加上这个属性后，这个标签就是一个弹性框了，内部的标签可以设置弹性属性。

```javascript
<section class="ui-flex">
    //......
</section>
```

##### **2）.ui-flex-row与.ui-flex-column**

水平排列与纵向排列，弹性布局默认是水平排列的，
使用到了属性“[flex-direction](http://css.doyoe.com/properties/flex/flex-direction.htm){:target="_blank"}”。

<div class="demo-border">
  <section class="ui-flex ui-flex-row">
    <div class="ui-col-1">1</div>
    <div class="ui-col-2">2</div>
    <div class="ui-col-3">3</div>
    <div class="ui-col-4">4</div>
    <div class="ui-col-5">5</div>
  </section>
</div>

<div class="demo-border">
  <section class="ui-flex ui-flex-column">
    <div class="ui-col-1">1</div>
    <div class="ui-col-1">2</div>
    <div class="ui-col-1">3</div>
  </section>
</div>

```javascript
<section class="ui-flex ui-flex-row">
  //水平排列
</section>
<section class="ui-flex ui-flex-column">
  //纵向排列
</section>
```

# 二、对齐方式（align）

##### **1）.ui-flex-columns-center**

“[align-content](http://css.doyoe.com/properties/flex/align-content.htm){:target="_blank"}:center”，
多行垂直居中存在兼容性问题，Android中UC与微信等浏览器不支持换行，WebView支持。

##### **2）.ui-flex-column-center**

单行垂直居中“[align-items](http://css.doyoe.com/properties/flex/align-items.htm){:target="_blank"}:center;”。

<div class="demo-border">
    <section class="ui-flex ui-flex-column-center h100">
      <div class="ui-col-1">1</div>
      <div class="ui-col-1">2</div>
    </section>
</div>

```javascript
<section class="ui-flex ui-flex-column-center">
  //....
</section>
```

##### **3）.ui-flex-column-baseline**

单行基线对齐“align-items:baseline;”，当不同大小的字体在同一行上，可以简单的让字体对齐。

##### **4）.ui-flex-column-end**

单行侧轴对齐“align-items:flex-end;”。

如果当前是水平排列，那么侧轴就是纵轴。

如果当前是纵向排列，那么侧轴就是横轴。

##### **5）.ui-flex-row-center**

“[justify-content](http://css.doyoe.com/properties/flex/justify-content.htm){:target="_blank"}: center”，
向行中间位置对齐，这个对齐会受排列方向的影响。

第一个效果是水平排列，这里的行是横轴，效果就是水平居中；

第二张效果是纵向排列，这里的行是纵轴，效果就是垂直居中。

<div class="demo-border">
  <section class="ui-flex ui-flex-row-center h100">
    <div class="ui-width-10 h40">水平排列</div>
    <div class="ui-width-10 h40">水平排列</div>
  </section>
</div>
<div class="demo-border">
  <section class="ui-flex ui-flex-column ui-flex-row-center h150">
    <div class="ui-width-10 h40">纵向排列</div>
    <div class="ui-width-10 h40">纵向排列</div>
  </section>
</div>

```javascript
<section class="ui-flex ui-flex-row-center">
  //水平居中
</section>
<section class="ui-flex ui-flex-column ui-flex-row-center">
  //垂直居中
</section>
```

##### **6）.ui-flex-row-between**

“justify-content: space-between”，向行两边位置对齐，同样也会受到排列方向的影响。

<div class="demo-border">
  <section class="ui-flex ui-flex-row-between h100">
    <div class="ui-width-10 h40">水平排列</div>
    <div class="ui-width-10 h40">水平排列</div>
  </section>
</div>
<div class="demo-border">
  <section class="ui-flex ui-flex-column ui-flex-row-between h150">
    <div class="ui-width-10 h40">纵向排列</div>
    <div class="ui-width-10 h40">纵向排列</div>
  </section>
</div>

# 三、空间设置（col）

空间属性，也就是“[flex](http://css.doyoe.com/properties/flex/flex.htm){:target="_blank"}”，
总共分了12种空间。以“ui-col”开头，后面跟数字。

<div class="demo-border">
  <section class="ui-flex">
    <div class="ui-col-1">1</div>
    <div class="ui-col-2">2</div>
    <div class="ui-col-3">3</div>
    <div class="ui-col-4">4</div>
    <div class="ui-col-5">5</div>
    <div class="ui-col-6">6</div>
  </section>
</div>

```javascript
<section class="ui-flex">
  <div class="ui-col-1">1</div>
  <div class="ui-col-2">2</div>
  ....
</section>
```

# 四、百分比宽度分配（width）

分配了24种百分比宽度（width）、偏移量（margin-left）、右边距（right）和左边距（left）。

前缀分别是“ui-width-”、“ui-offset-”、“ui-pull-”和“ui-push-”，同样后面跟的是数字。

<div class="demo-border">
  <section class="ui-flex">
    <div class="ui-width-1">1</div>
    <div class="ui-width-2 ui-offset-1">2</div>
    <div class="ui-width-3 ui-offset-1">3</div>
    <div class="ui-width-4 ui-offset-1">4</div>
    <div class="ui-width-5 ui-offset-1">5</div>
    <div class="ui-width-6 ui-offset-1">6</div>
  </section>
</div>

```javascript
<section class="ui-flex">
  <div class="ui-width-1">1</div>
  <div class="ui-width-2 ui-offset-1">2</div>
  .....
</section>
```
在有些浏览器中，行内元素使用弹性布局会有问题，可先设置为块元素。

以“ui-width-db”为前缀的就是默认设置为块级元素了，其它都一样，后面也是跟数字。

# 五、流布局（float）

流布局就是将元素布局用“float”实现，与上面百分比宽度一样，也是用“ui-width-”作为前缀，偏移、边距也一样。

不同的是容器使用了“ui-fluid”类。

<div class="demo-border">
  <section class="ui-fluid">
    <div class="ui-width-1">1</div>
    <div class="ui-width-2 ui-offset-1">2</div>
    <div class="ui-width-3 ui-offset-1">3</div>
    <div class="ui-width-4 ui-offset-1">4</div>
    <div class="ui-width-5 ui-offset-1">5</div>
  </section>
</div>