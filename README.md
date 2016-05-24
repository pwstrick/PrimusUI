# PrimusUI
Primus名字取自于《变形金刚》中的元始天尊。

在网上参考了很多个现有的UI库，最终结合自己的理解，整理了这个简单的UI库，每段CSS少则几十行，多则也就一百多行。

# 准备知识
1、CSS开发使用了现在时髦的<a href="http://sass-lang.com/" target="_blank">SASS</a>，CSS预处理器。

2、代码构建工具使用了<a href="http://gulpjs.com/" target="_blank">Gulp</a>，增强工作流程。
如果初次接触，可以参考教程
《<a href="http://www.cnblogs.com/strick/p/5151714.html" target="_blank">前端自动化构建工具gulp记录</a>》

3、文档是由Jekyll编译而成，
<a href="http://jekyllrb.com/" target="_blank">Jekyll</a>是一个静态网站生成器。
如果初次接触，可以参考一下教程
《<a href="http://www.cnblogs.com/strick/p/5448570.html" target="_blank">用jekyll制作网站</a>》

4、借助<a href="https://github.com/amfe/lib-flexible" target="_blank">flexible.js</a>，
计算html中的font-size（用于计算rem），设置viewport的放大倍数

# 目录结构
```html
PrimusUI
  ----assets UI库展示页面中使用到的图片等
  ----css SASS编译出来的CSS代码
  ----docs  UI库文档说明，由工具Jekyll编译出来
  ----font  自定义字体
  ----js  JavaScript文件
  ----sass  CSS预处理文件
  ----site  Jekyll源文件
  --gulpfile.js Gulp配置文件
  --package.json  Gulp需要的包记录
  --open.bat  windows批处理，用于在当前目录中打开dos窗口
  --*.html  UI库各模块展示页面
```
