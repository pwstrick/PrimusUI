---
layout: post
sidebar: ui
title: 表单（component/form.scss）
sidenav: form
---

表单的容器将是一个**“form”**标签，给这个标签赋样式**“.ui-form”**，简单的结构如下：

```html
<form action="#" class="ui-form">
  <ul>
    <li class="ui-form-item">
      <label>输入框</label>
      <section class="ui-control">
        <input type="text" placeholder="正常的情况" />
      </section>
    </li>
  </ul>
</form>
```

每个**“li”**都要被赋**“ui-form-item”**样式，左边有说明的就用**“label”**包裹，控件部分用样式**“ui-control”**包裹。

**“ui-form-item”**内可以控制左、右、中对齐，分别是**“tl”**、**“tr”**以及**“td”**。

与列表一样，也可以与[网格](grid.html)、[边框](border.html)、[布局](layout.html)等结合使用。

# 一、普通控件（normal）

##### **1）展示（show）**

展示就是没有控件，直接将文字显示出来，下面直接用了个**“p”**标签。

<div class="demo-border">
  <form action="#" class="ui-form">
    <ul>
      <li class="ui-flex ui-form-item">
        <label>展示项</label>
        <section class="ui-control ui-col-1">
          <p class="tr">445331199401055317</p>
        </section>
      </li>
    </ul>
  </form>
</div>

```html
<li class="ui-flex ui-form-item">
  <label>展示项</label>
  <section class="ui-control ui-col-1">
    <p class="tr">445331199401055317</p>
  </section>
</li>
```

##### **2）输入框或多选（input，textarea）**

<div class="demo-border">
  <form action="#" class="ui-form">
    <ul>
      <li class="ui-flex ui-form-item ui-border-b ui-flex-column-center">
        <label>输入框</label>
        <section class="ui-control ui-col-1">
          <input type="text" placeholder="正常的情况" />
        </section>
      </li>
      <li class="ui-flex ui-form-item ui-border-b">
        <label>多选框</label>
        <section class="ui-control ui-col-1">
          <textarea placeholder="多选的情况" rows="2" cols="10" class="tr"></textarea>
        </section>
      </li>
    </ul>
  </form>
</div>

大部分代码都差不多，只是**“p”**标签变成了**“input”**或**“textarea”**，还有就是在弹性布局中会有些对齐方式。

例如下面的“[ui-flex-column-center](grid.html#ui-flex-column-center)”样式，还涉及了弹性布局的空间设置“[ui-col-1](grid.html#col)”。

列表中很多会有间隔线，可以用边框样式中的“[ui-border-b](border.html)”实现。

```html
<li class="ui-flex ui-form-item ui-border-b ui-flex-column-center">
  <label>输入框</label>
  <section class="ui-control ui-col-1">
    <input type="text" placeholder="正常的情况" />
  </section>
</li>
<li class="ui-flex ui-form-item ui-border-b">
  <label>多选框</label>
  <section class="ui-control ui-col-1">
    <textarea placeholder="多选的情况" rows="2" cols="10" class="tr"></textarea>
  </section>
</li>
```

##### **3）颜色行（color）**

默认设置了两种颜色，错误的红色，以及正确的绿色，在“form.scss”中有个私有@mixin**“_form”**，可以自定义颜色。

只需要在**“li”**标签上赋**“ui-form-error”**或**“ui-form-success”**即可。

<div class="demo-border">
  <form action="#" class="ui-form">
    <ul>
      <li class="ui-flex ui-form-item ui-border-b ui-flex-column-center ui-form-error">
        <label>错误框</label>
        <section class="ui-control ui-col-1">
          <input type="text" placeholder="错误的情况" />
        </section>
      </li>
      <li class="ui-flex ui-form-item ui-border-b ui-flex-column-center ui-form-success">
        <label>正确框</label>
        <section class="ui-control ui-col-1">
          <input type="text" placeholder="正确的情况" />
        </section>
      </li>
    </ul>
  </form>
</div>

```html
<li class="ui-form-item ui-form-error">
  <label>错误框</label>
  <section class="ui-control">
    <input type="text" placeholder="错误的情况" />
  </section>
</li>
<li class="ui-form-item ui-form-success">
  <label>正确框</label>
  <section class="ui-control">
    <input type="text" placeholder="正确的情况" />
  </section>
</li>
```

##### **4）按钮与输入框混排（mixed）**

需要在**“li”**中添加个样式**“ui-form-item-btn”**。

<div class="demo-border">
  <form action="#" class="ui-form">
    <ul>
      <li class="ui-flex ui-form-item ui-form-item-btn ui-border-b">
        <label>按钮与输入框</label>
        <section class="ui-control ui-col-1 ui-flex ui-flex-row-between">
          <input type="text" placeholder="请输入手机号码" />
          <button type="button" class="ui-width-8">发送短信</button>
        </section>
      </li>
    </ul>
  </form>
</div>

```html
<li class="ui-flex ui-form-item ui-form-item-btn ui-border-b">
  <label>加按钮</label>
  <section class="ui-control ui-col-1 ui-flex ui-flex-row-between">
    <input type="text" placeholder="请输入手机号码" />
    <button type="button" class="ui-width-8">发送短信</button>
  </section>
</li>
```

# 二、单选框（radio）

单选框的样式是单独放在“component/radio.scss”中。

有个私有@mixin**“_radio”**，可以控制宽度，右与下的外边距。

单选框内的宽度高度等单位都是px，为了精确。

**“ui-radio”**内的单选框是**“inline-block”**标签，而**“ui-radio-row”**内的单选框是**“block”**标签。

<div class="demo-border">
  <form action="#" class="ui-form">
    <ul>
      <li class="ui-flex ui-form-item">
        <label>一行单选框</label>
        <section class="ui-control ui-col-1 tr">
          <label class="ui-radio">
             <input type="radio" name="radio1"><span>男</span>
          </label>
          <label class="ui-radio">
             <input type="radio" name="radio1"><span>女</span>
           </label>
        </section>
      </li>
      <li class="ui-flex ui-form-item">
        <label>多行单选框</label>
        <section class="ui-control ui-col-1 tr">
          <label class="ui-radio ui-radio-row">
             <input type="radio" name="radio2"><span>男</span>
          </label>
          <label class="ui-radio ui-radio-row">
             <input type="radio" name="radio2"><span>女</span>
          </label>
        </section>
      </li>
    </ul>
  </form>
</div>

```html
<li class="ui-flex ui-form-item">
  <label>一行单选框</label>
  <section class="ui-control ui-col-1 tr">
    <label class="ui-radio">
       <input type="radio" name="radio1"><span>男</span>
    </label>
    <label class="ui-radio">
       <input type="radio" name="radio1"><span>女</span>
    </label>
  </section>
</li>
<li class="ui-flex ui-form-item">
  <label>多行单选框</label>
  <section class="ui-control ui-col-1 tr">
    <label class="ui-radio ui-radio-row">
       <input type="radio" name="radio2"><span>男</span>
    </label>
    <label class="ui-radio ui-radio-row">
       <input type="radio" name="radio2"><span>女</span>
    </label>
  </section>
</li>
```

# 三、多选框（checkbox）

多选框的样式是单独放在“component/checkbox.scss”中。

有个私有@mixin**“_checkbox”**，可以控制宽度，右与下的外边距。

多选框内的宽度高度等单位都是px，为了精确。

**“ui-checkbox”**内的多选框是**“inline-block”**标签，而**“ui-checkbox-row”**内的多选框是**“block”**标签。

<div class="demo-border">
  <form action="#" class="ui-form">
    <ul>
      <li class="ui-flex ui-form-item">
        <label>多选框</label>
        <section class="ui-control ui-col-1 tr">
          <label class="ui-checkbox">
                            <input type="checkbox" name="checkbox1"><span>多选框一</span>
          </label>
          <label class="ui-checkbox">
                            <input type="checkbox" name="checkbox1"><span>多选框二</span>
          </label>
        </section>
      </li>
      <li class="ui-flex ui-form-item">
        <label>多选框</label>
        <section class="ui-control ui-col-1 tr">
          <label class="ui-checkbox ui-checkbox-row">
                            <input type="checkbox" name="checkbox2"><span>多选框一</span>
          </label>
          <label class="ui-checkbox ui-checkbox-row">
                            <input type="checkbox" name="checkbox2"><span>多选框二</span>
          </label>
        </section>
      </li>
    </ul>
  </form>
</div>

代码与上面的单选框相似，只是**“radio”**变成了**“checkbox”**。

```html
<li class="ui-flex ui-form-item">
  <label>多选框</label>
  <section class="ui-control ui-col-1 tr">
    <label class="ui-checkbox">
        <input type="checkbox" name="checkbox1"><span>多选框一</span>
    </label>
    <label class="ui-checkbox">
        <input type="checkbox" name="checkbox1"><span>多选框二</span>
    </label>
  </section>
</li>
<li class="ui-flex ui-form-item">
  <label>多选框</label>
  <section class="ui-control ui-col-1 tr">
    <label class="ui-checkbox ui-checkbox-row">
        <input type="checkbox" name="checkbox2"><span>多选框一</span>
    </label>
    <label class="ui-checkbox ui-checkbox-row">
        <input type="checkbox" name="checkbox2"><span>多选框二</span>
    </label>
  </section>
</li>
```

# 四、开关（switch）

开关的样式是单独放在“component/switch.scss”中。

有个私有@mixin**“_switchDpr”**，可以控制宽度和高度。

主要的画圆、画框等操作是在另外一个私有@mixin**“_switch”**中，**“_switchDpr”**内部是在调用**“_switch”**。

<div class="demo-border">
  <form action="#" class="ui-form">
    <ul>
      <li class="ui-flex ui-form-item">
        <label>开关项</label>
        <section class="ui-control ui-col-1 tr">
          <label class="ui-switch">
            <input type="checkbox"/>
          </label>
        </section>
      </li>
    </ul>
  </form>
</div>

下面的代码就是给**“label”**加了个样式**“ui-switch”**后就会有开关效果。

```html
<ul>
  <li class="ui-flex ui-form-item">
    <label>开关项</label>
    <section class="ui-control ui-col-1 tr">
      <label class="ui-switch">
        <input type="checkbox"/>
      </label>
    </section>
  </li>
</ul>
```
