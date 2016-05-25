---
layout: post
sidebar: ui
title: 表格（component/table.scss）
sidenav: table
---

表格中的相邻边会被合并，单元格内横向和纵向的间距设为了0，**“td，th”**中已做自动换行。

# 一、默认无边框（default）

默认是给“table”元素赋**“.table”**类，**“th，td，caption”**可以控制向左、向右或居中对齐。

<div class="demo-border">
  <table class="table">
    <caption class="tc">无边框</caption>
    <thead>
      <tr>
        <th>栏目一</th>
        <th>栏目二</th>
        <th>栏目三</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tl">左对齐</td>
        <td class="tc">居中对齐</td>
        <td class="tr">右对齐</td>
      </tr>
      <tr>
        <td>内容一</td>
        <td>内容二</td>
        <td>内容三</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  <caption class="tc">无边框</caption>
  <thead>
    <tr>
      <th>栏目一</th>
      <th>栏目二</th>
      <th>栏目三</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tl">左对齐</td>
      <td class="tc">居中对齐</td>
      <td class="tr">右对齐</td>
    </tr>
  </tbody>
</table>
```

# 二、有边框（border）

只要给“table”多加一个样式**“table-bordered”**即可。

<div class="demo-border">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>栏目一</th>
        <th>栏目二</th>
        <th>栏目三</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>内容一</td>
        <td>内容二</td>
        <td>内容三</td>
      </tr>
      <tr>
        <td>内容一</td>
        <td>内容二</td>
        <td>内容三</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-bordered">
  //...
</table>
```

# 三、行的颜色（color）

默认有四种颜色，红、黄、蓝、绿。

<div class="demo-border">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>栏目一</th>
        <th>栏目二</th>
        <th>栏目三</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>success</td>
        <td>success</td>
        <td>success</td>
      </tr>
      <tr class="info">
        <td>info</td>
        <td>info</td>
        <td>info</td>
      </tr>
      <tr class="important">
        <td>important</td>
        <td>important</td>
        <td>important</td>
      </tr>
      <tr class="warning">
        <td>warning</td>
        <td>warning</td>
        <td>warning</td>
      </tr>
      <tr>
        <td>default</td>
        <td>default</td>
        <td>default</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-bordered">
  <tbody>
    <tr class="success">
      <td>success</td>
      <td>success</td>
      <td>success</td>
    </tr>
    <tr class="info">
      <td>info</td>
      <td>info</td>
      <td>info</td>
    </tr>
    <tr class="important">
      <td>important</td>
      <td>important</td>
      <td>important</td>
    </tr>
    <tr class="warning">
      <td>warning</td>
      <td>warning</td>
      <td>warning</td>
    </tr>
    <tr>
      <td>default</td>
      <td>default</td>
      <td>default</td>
    </tr>
  </tbody>
</table>
```