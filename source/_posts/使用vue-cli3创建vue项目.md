---
title: 如何在项目中使用vue?
date: 2019-06-26 23:11:37
tags: 
- vue  
categories:
- web前端
---

其实官网的脚手架的功能已经趋近与傻瓜式了，而且只要是熟读官网的教程其实可以完美的创建一个项目。我自己在创建该项目的时候遇到了一些小问题。诸如配置px转rem的时候，引入的vant组件库的单位异常的奇怪，不过后来在vant官网的教程中得到了答案。现在记录如下...

使用vue来编写前端其实有蛮多,诸如[vue文档官网](https://cn.vuejs.org/v2/guide/installation.html#CDN)介绍到的。

> 直接用 `script` 引入
> 对于制作原型或学习，你可以这样使用最新版本：
> <script src="https://cdn.jsdelivr.net/npm/vue"></script>
> CDN引用
> 对于制作原型或学习，你可以这样使用最新版本：
> `<script src="https://cdn.jsdelivr.net/npm/vue"></script>`
> 对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：
> `<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>`
> NPM
> 在用 Vue 构建大型应用时推荐使用 NPM 安装[1]。NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。同时 Vue 也提供配套工具来开发单文件组件。
> 最新稳定版 `npm install vue`

*注意：已上的引用总结为2019年7月14日访问vue文档官网*

vue官网还有一种介绍到的就是使用`cli`引用[官网的cli](https://cli.vuejs.org/zh/)介绍来使用vue，你也可以来访问[cli源码](https://github.com/vuejs/vue-cli)来一探究竟

#### 使用script标签引入的vue使用方法

使用这种方式就是最简单的一种方案，本人写了有一个[小的demo](/html/textareaAutoHeight.html),本demo只是展示了如何进行双向数据绑定和触发事件。至于vue的其他功能，诸如组件建议直接去[vue文档](https://cn.vuejs.org/v2/guide/)查看文档

#### 使用vue/cli搭建项目

- 首先安装vue/cli

```
// 使用npm管理包
npm install -g @vue/cli
// 使用yarn管理包
yarn global add @vue/cli
```

*注意在mac上可能会出现没有权限安装失败，在运行上面的命令的时候建议添加`sudo`然后输入系统登录密码*

安装完成可以在终端输入`vue --version`查看安装的版本，如果成功会出现版本号

- 创建一个项目

可以使用`vue create hello-world`来创建一个项目，在你的终端中运行上面提到的命令

在创建过程中会询问你一些是否需要安装的事项，其实一般情况下直接选择`default`就好了,在`default`情况下是默认安装babel和eslint的。

![新建项目之后的文件夹结构](/images/vue:cli/文件夹结构.png)

其中public文件夹下为你部署到服务器之后的跟目录。你可以存放静态文件，这个文件夹的文件不会被编译和打包。

src文件夹目录就复杂点

assets 文件夹为存放网站的诸如网站的静态展示文件，诸如背景图片等等。参与打包
components 文件夹存放组件文件以xx.vue结尾
app.vue为第一个vue页面
main.js为[入口文件](https://webpack.docschina.org/concepts/#%E5%85%A5%E5%8F%A3-entry-)

.gitignore 为git不追踪文件（夹）配置文件
babel.config.js babel的配置文件
package.json 该文件详细介绍[点击这里](https://docs.npmjs.com/files/package.json)
README.md 该文件为进入git首页看到的介绍，其中一般都会写文档。诸如改下项目怎么打包/开发环境如何启动之类的

你可以在终端中定位到根目录运行`yarn serve`来运行该项目，可以在本地调试起来了。运行起来之后终端如图

![新建项目之后的文件夹结构](/images/vue:cli/终端图.png)

出现如上图所示就说明你的项目已经跑起来了，可以自己在src目录新建一个pages文件然后编写自己的页面。

该项目是没有添加vue-router的，故需要我们自行安装。具体操作请查看我之前写过的文档

[关于项目中的vue-router如何使用](/2019/03/11/浅谈vue路由/)