---
layout: post
sidebar: ui
title: 按钮（component/button.scss）
sidenav: button
---

按钮分为三种状态，普通、按下、无效。其中无效可以用样式“.disabled”或设置按钮属性“disabled”。

有个私有的@mixin**“_btn-active”**可以自定义按下样式，按钮通用的样式写在占位选择器**“%btn”**中。

这些都可以继承后自定义。

# 一、尺寸（size）

在“button.scss”中，有个私有@mixin**“_btnSize”**，控制着尺寸，字体，display属性。

##### **1）普通小按钮（small）**

默认小按钮宽高是110*50，字体是26px，圆角是6px。

<div class="demo-border">
  <button class="ui-btn-sm">确定</button>
  <button class="ui-btn-sm active">确定</button>
  <button class="ui-btn-sm disabled">取消</button>
  <button class="ui-btn-sm" disabled>取消</button>
</div>

```html
<button class="ui-btn-sm">确定</button>
<button class="ui-btn-sm active">确定</button>
<button class="ui-btn-sm disabled">取消</button>
<button class="ui-btn-sm" disabled>取消</button>
```

##### **2）普通按钮（normal）**

普通按钮是110*60，其中宽度设置的是“min-width”，字体30px，圆角是6px。

CSS类与上面的类似，只是**“ui-btn-sm”**换成**“ui-btn”**。

<div class="demo-border">
  <button class="ui-btn">确定</button>
  <button class="ui-btn active">确定</button>
  <button class="ui-btn disabled">取消</button>
  <button class="ui-btn" disabled>取消</button>
</div>

##### **3）大按钮（large）**

大按钮宽度是100%，高度是88px，字体36px，圆角是10px。

CSS类与上面的类似，只是**“ui-btn-sm”**换成**“ui-btn-lg”**。

<div class="demo-border">
  <button class="ui-btn-lg">确定</button>
  <button class="ui-btn-lg active">确定</button>
  <button class="ui-btn-lg disabled">取消</button>
  <button class="ui-btn-lg" disabled>取消</button>
</div>

# 二、颜色（color）

默认有两种颜色，蓝色和红色，CSS类分别是**“ui-btn-primary”**和**“ui-btn-danger”**，带颜色后边框就会去除。

##### **1）蓝色（primary）**

<div class="demo-border">
  <button class="ui-btn ui-btn-primary">确定</button>
  <button class="ui-btn ui-btn-primary active">确定</button>
  <button class="ui-btn ui-btn-primary disabled">取消</button>
</div>

```html
<button class="ui-btn ui-btn-primary">确定</button>
<button class="ui-btn ui-btn-primary active">确定</button>
<button class="ui-btn ui-btn-primary disabled">取消</button>
```

##### **2）红色（danger）**

<div class="demo-border">
  <button class="ui-btn ui-btn-danger">确定</button>
  <button class="ui-btn ui-btn-danger active">确定</button>
  <button class="ui-btn ui-btn-danger disabled">取消</button>
</div>

# 三、进度条按钮（progress）

这个按钮比较特殊，在按钮内多加了几个**“span”**，实现进度条效果。

<div class="demo-border">
  <button class="ui-btn-sm ui-btn-progress disabled"><span>50%</span><span class="ui-btn-inner" style="width:50%"><span>50%</span></span></button>
  <button class="ui-btn ui-btn-progress disabled"><span>50%</span><span class="ui-btn-inner" style="width:50%"><span>50%</span></span></button>
</div>