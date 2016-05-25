---
layout: post
sidebar: ui
title: 文本（base/typeface.scss）
sidenav: typeface
---

文本中包括的是与文字相关的样式，包括h1--h6、字体颜色、文字截断、箭头链接等。

# 一、h1--h6

h1--h6中的字体大小如下所示：

```sass
$font-size-h1:44px;
$font-size-h2:40px;
$font-size-h3:36px;
$font-size-h4:32px;
$font-size-h5:28px;
$font-size-h6:24px;
```

默认可以直接使用标签，也可以通过赋CSS类，有六个类名“.h1,.h2,.h3,.h4,.h5,.h6”。

还有个small标签，对应也有个“.small”类，包括在文本标签中，字体为“65%”或“75%”

<div class="demo-border">
  <p class="h1">h1 闲看庭前花开花落</p>
  <h2>h2 闲看庭前花开花落<small>副标题</small></h2>
  <h3>h3 闲看庭前花开花落</h3>
  <h4>h4 闲看庭前花开花落</h4>
  <h5>h5 闲看庭前花开花落</h5>
  <h6>h6 闲看庭前花开花落</h6>
</div>

```html
<p class="h1">h1 闲看庭前花开花落</p>
<h2>h2 闲看庭前花开花落<small>副标题</small></h2>
<h3>h3 闲看庭前花开花落</h3>
<h4>h4 闲看庭前花开花落</h4>
<h5>h5 闲看庭前花开花落</h5>
<h6>h6 闲看庭前花开花落</h6>
```

# 二、字体颜色（color）

字体颜色包括默认、主内容色、次内容色、链接色、高亮色、成功提示色等。

下面的最后一行其实是白色，底色也是白色，所以看不到。

<div class="demo-border">
    <p class="ui-color-default">主要内容色</p>
    <p class="ui-color-info">次要内容色</p>
    <p class="ui-color-muted">不可点击内容色</p>
    <p class="ui-color-warning">警告色</p>
    <p class="ui-color-highlight">高亮内容色</p>
    <em>em标签是高亮色</em>
    <p class="ui-color-feeds">反馈色</p>
    <p class="ui-color-important">重要内容色</p>
    <p class="ui-color-success">成功提示色</p>
    <p><a href="#">链接色</a></p>
    <p class="ui-color-white">白色</p>
</div>

```html
<p class="ui-color-default">主要内容色</p>
<p class="ui-color-info">次要内容色</p>
<p class="ui-color-muted">不可点击内容色</p>
<p class="ui-color-warning">警告色</p>
<p class="ui-color-highlight">高亮内容色</p>
<em>em标签是高亮色</em>
<p class="ui-color-feeds">反馈色</p>
<p class="ui-color-important">重要内容色</p>
<p class="ui-color-success">成功提示色</p>
<p><a href="#">链接色</a></p>
<p class="ui-color-white">白色</p>
```

# 三、文字截断（wrap）

文字截断分为普通截断，以及弹性布局中的截断。

弹性布局出还有个指定行数的截断，使用了webkit的私有属性“[-webkit-line-clamp](http://www.css88.com/webkit/-webkit-line-clamp/){:target="_blank"}”。

<div class="demo-border">
  <p><strong>普通布局文字截断：</strong></p>
  <p class="ui-nowrap">得之不喜、失之不忧、宠辱不惊、去留无意。这样才可能心境平和、淡泊自然。一个看庭前三字，大有躲进小楼成一统，管他春夏秋冬之意，而望天上三字则又显示了放大眼光，不与他人一般见识的博大情怀；一句云卷云舒更有大丈夫能屈能伸的崇高境界。与范仲淹的不以物喜、不以己悲实在是异曲同工，更颇有魏晋人物的旷达风流。</p>
  <p><strong>弹性布局单行文字截断：</strong></p>
  <p class="ui-nowrap-flex">得之不喜、失之不忧、宠辱不惊、去留无意。这样才可能心境平和、淡泊自然。一个看庭前三字，大有躲进小楼成一统，管他春夏秋冬之意，而望天上三字则又显示了放大眼光，不与他人一般见识的博大情怀；一句云卷云舒更有大丈夫能屈能伸的崇高境界。与范仲淹的不以物喜、不以己悲实在是异曲同工，更颇有魏晋人物的旷达风流。</p>
  <p><strong>弹性布局两行文字截断：</strong></p>
  <p class="ui-nowrap-flex-2">一副对联，寥寥数语，却深刻道出了人生对事对物、对名对利应有的态度：得之不喜、失之不忧、宠辱不惊、去留无意。这样才可能心境平和、淡泊自然。一个看庭前三字，大有躲进小楼成一统，管他春夏秋冬之意，而望天上三字则又显示了放大眼光，不与他人一般见识的博大情怀；一句云卷云舒更有大丈夫能屈能伸的崇高境界。与范仲淹的不以物喜、不以己悲实在是异曲同工，更颇有魏晋人物的旷达风流。</p>
</div>

```html
<p class="ui-nowrap">普通布局文字截断</p>
<p class="ui-nowrap-flex">弹性布局单行文字截断</p>
<p class="ui-nowrap-flex-2">弹性布局两行文字截断</p>
```

# 四、箭头链接（arrow）

在很多地方都会引用此样式，在“helper/mixin.scss”中设置了一段通用的@mixin“arrowLink”，可自定义。

<div class="demo-border">
    <div class="ui-arrow-link">
      <p>箭头链接</p>
      <p>箭头链接</p>
    </div>
</div>