---
layout: post
sidebar: ui
title: 布局（base/layout.scss）
sidenav: layout
---

# 一、占位（placeholder）

<div class="demo-border">
  <div class="ui-placeholder-wrap">
    <div class="ui-placeholder" style="z-index:1">
      <p>相对居中</p>
      <p>默认高宽比为31.25%</p>
      <p>重写需覆盖padding-top属性</p>
    </div>
  </div>
</div>

```javascript
<div class="ui-placeholder-wrap">
  <div class="ui-placeholder">
    <p>相对居中</p>
    <p>默认高宽比为31.25%</p>
    <p>重写需覆盖padding-top属性</p>
  </div>
</div>
```

# 二、留白（whitespace）

留白也就是内边距，分了6档，5px、10px、15px、20px、25px以及30px。

有三种展现方式，全、左右（lr）或上下（tb）内边距。

<div class="demo-border">
  <section class="ui-whitespace-xxl">
    <div>内留白30px</div>
  </section>
  <section class="ui-whitespace-xl">
    <div>内留白25px</div>
  </section>
  <section class="ui-whitespace-lg">
    <div>内留白20px</div>
  </section>
  <section class="ui-whitespace">
    <div>内留白15px</div>
  </section>
  <section class="ui-whitespace-sm">
    <div>内留白10px</div>
  </section>
  <section class="ui-whitespace-xs">
    <div>内留白5px</div>
  </section>
  <section class="ui-whitespace-xs-lr">
    <div>左右内留白5px</div>
  </section>
  <section class="ui-whitespace-xs-tb">
    <div>上下内留白5px</div>
  </section>
</div>

```javascript
<section class="ui-whitespace-xxl">
  <div>内留白30px</div>
</section>
<section class="ui-whitespace-xl">
  <div>内留白25px</div>
</section>
<section class="ui-whitespace-lg">
  <div>内留白20px</div>
</section>
<section class="ui-whitespace">
  <div>内留白15px</div>
</section>
<section class="ui-whitespace-sm">
  <div>内留白10px</div>
</section>
<section class="ui-whitespace-xs">
  <div>内留白5px</div>
</section>
<section class="ui-whitespace-xs-lr">
  <div>左右内留白5px</div>
</section>
<section class="ui-whitespace-xs-tb">
  <div>上下内留白5px</div>
</section>
```

# 三、对齐（justify）

##### **1）一行对齐（one）**

<div class="demo-border">
  <ul class="ui-justify">
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
  </ul>
</div>

```javascript
<ul class="ui-justify">
  <li>
    <div class="demo-img"></div>
  </li>
  <li>
    ......
  </li>
</ul>
```

##### **2）多行对齐（multi）**

多行对齐与上面一样，也是引入“ui-justify”即可。

<div class="demo-border">
  <ul class="ui-justify">
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
  </ul>
</div>

##### **3）弹性布局对齐（flex）**

弹性布局是引入“ui-justify-flex”类。

<div class="demo-border">
  <ul class="ui-flex ui-justify-flex">
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
    <li>
      <div class="demo-img"></div>
    </li>
  </ul>
</div>

```javascript
<ul class="ui-flex ui-justify-flex">
  <li>
    <div class="demo-img"></div>
  </li>
  <li>
    ......
  </li>
</ul>
```