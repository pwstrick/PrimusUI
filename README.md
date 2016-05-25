## PrimusUI
小身材大用途，响应式页面，专注于移动端，可轻松定做二次开发。

Primus名字取自于《变形金刚》中的元始天尊。

在网上参考了很多个现有的UI库，最终结合自己的理解，整理了这个简单的UI库，每段CSS少则几十行，多则也就一百多行。

<a href="http://pwstrick.github.io/PrimusUI/default.html">在线demo</a>：

<img src="assets/img/demo-qrcode.png" width="150" height="150"/>

项目主页：<a href="http://pwstrick.github.io/PrimusUI">点击查看</a>

在线文档：<a href="http://pwstrick.github.io/PrimusUI/docs/ui/typeface.html">点击查看</a>

## 准备知识
1、CSS开发使用了现在时髦的<a href="http://sass-lang.com/" target="_blank">SASS</a>，CSS预处理器。

2、代码构建工具使用了<a href="http://gulpjs.com/" target="_blank">Gulp</a>，增强工作流程。
先要安装<a href="https://nodejs.org/en/" target="_blank">NodeJS</a>，
在项目中有一个package.json文件，里面记录了依赖包，在当前目录中输入“npm install”可进行包的安装。
（国内用户由于网络问题，需要借助淘宝的
<a href="https://npm.taobao.org/" target="_blank">cnpm</a>。）
如果初次接触，可以参考教程
《<a href="http://www.cnblogs.com/strick/p/5151714.html" target="_blank">自动化构建工具gulp</a>》

3、文档是由Jekyll编译而成，
<a href="http://jekyllrb.com/" target="_blank">Jekyll</a>是一个静态网站生成器。
如果初次接触，可以参考一下教程
《<a href="http://www.cnblogs.com/strick/p/5448570.html" target="_blank">用jekyll制作网站</a>》

4、借助<a href="https://github.com/amfe/lib-flexible" target="_blank">flexible.js</a>，
通过计算html中的font-size（用于计算rem），设置viewport的放大倍数，来实现移动自适应。UI库中除了字体、边框宽度等，大部分是使用rem作为单位，可以引入
（<a href="http://postcss.org/" target="_blank">PostCSS</a>插件中的
“<a href="https://www.npmjs.com/package/px2rem" target="_blank">postcss-px2rem</a>”。），自动计算。

5、浏览器属性兼容是个烦人的事，通过引入PostCSS内的插件
“<a href="https://www.npmjs.com/package/autoprefixer" target="_blank">autoprefixer</a>”，可自动匹配前缀。
第4和第5条的配置写在gulpfile.js中。

## 目录结构
```html
PrimusUI
└─ ─ ─ ─ assets UI库展示页面中使用到的图片等
└─ ─ ─ ─ css SASS编译出来的CSS代码
└─ ─ ─ ─ docs  UI库文档说明，由工具Jekyll编译出来
└─ ─ ─ ─ font  自定义字体
└─ ─ ─ ─ js  JavaScript文件
└─ ─ ─ ─ sass  CSS预处理文件
└─ ─ ─ ─ site  Jekyll源文件
└─ ─ gulpfile.js Gulp配置文件
└─ ─ package.json  Gulp需要的依赖包
└─ ─ open.bat  windows批处理，用于在当前目录中打开dos窗口
└─ ─ *.html  UI库各模块展示页面
```

## CSS特点
1、响应式布局，大量使用rem、弹性属性、百分比属性，可适应移动端多种屏幕。

<img src="assets/img/default.jpg"/>

2、normalize.scss：在流行的重置样式“<a href="https://necolas.github.io/normalize.css/" target="_blank">normalize.css</a>”
的基础上，做出更适合移动端的样式调整。

3、typeface.scss：列举了多种场景的字体颜色与大小，字截断，移动端常用的箭头标记。

<img src="assets/img/typeface.jpg"/>

4、icon.scss：可在第三方<a href="http://www.iconfont.cn/" target="_blank">iconfont</a>
库，按需下载现成的图标，也可在此网站中上传svg文件，自动制成特定图标。

<img src="assets/img/icon.jpg"/>

5、grid.scss：多样化的网格实现，
网格中包括先进的弹性设置(预设了12种宽度)、百分比设置(预设了24种宽度)，左偏移，左移动，右移动(也是24种)。
与PC端的固定宽度不同，移动端屏幕各异，所以不能将每个元素的宽度定死。而弹性宽度或百分比在设置后可自动计算数值。
相比较于传统的float布局，弹性布局更容易控制，尤其是在对齐方式中设置中。

<img src="assets/img/grid.jpg"/>

6、border.scss：有效解决1px边框，在移动端各种屏幕的显示问题。

<img src="assets/img/border.jpg"/>

7、layout.scss：布局样式中预设了6种留白尺寸，轻松实现一行、多行、弹性布局中的两边对齐。

<img src="assets/img/layout.jpg"/>

8、list.scss：结合网格、布局样式，可实现多种不同场景的列表展示，可自定义的Loading（）效果。

<img src="assets/img/list.jpg"/>

9、table.scss：将表格抽象化，将边框、列表颜色等独立一个样式，可与基类样式结合使用。

<img src="assets/img/table.jpg"/>

10、标签（label.scss）、微标（badge.scss）、按钮（button.scss）各自的预编译文件都提供了私有方法，可以根据实际场景扩展。

<img src="assets/img/label.jpg"/>
<img src="assets/img/badge.jpg"/>
<img src="assets/img/button.jpg"/>

11、form.scss：通过CSS3伪元素重新美化了单选框（radio.scss）、多选框（checkbox.scss）、开关项（switch.scss）。
并结合网格、按钮等样式，可布置出多种表单项。

<img src="assets/img/form.jpg"/>

12、在mixin.scss中设置了全局在mixin，在variable.scss配置了全局变量，高可用性。

## 浏览器兼容
Android 2.3+

IOS 4.0+


## 联系我
对zDialog的使用有任何问题,或者发现bug,欢迎给我反馈：
[提交反馈](https://github.com/pwstrick/PrimusUI/issues/new)

## License (MIT)
Copyright (c) 2016 pwstrick

[MIT](https://github.com/pwstrick/PrimusUI/blob/master/LICENSE)