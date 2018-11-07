---
title: 本篇是概述我如何一步步搭建一个hexo博客的路程
date: 2018-11-01 22:13:00
tags: 
- hexo  
categories:  
- hexo
---

*之前就一直知道在github可以搭建自己的博客，从今年年初就说要自己搭建下。然后定期更新下博客，谁能想到我这半年这么忙。于是在本周终于自己把博客搭建完成，开始书写自己的博客啦*

# 创建`git`博客前你需要知道一些基本概念

## 创建一个自己的博客前你需要了解些什么呢？默认看这篇博客的小伙伴们对于下列的事情已经有所了解啦

* 有自己的一个`git`账号

* [git](https://git-scm.com/downloads)的本地安装，具体你的电脑是 ```MacOs&Windows```自己去官网下载适合自己系统版本的```git```安装

* `git`仓库有所了解

* 了解 `node`,了解下[hexo](https://hexo.io/zh-cn/docs/)

## 创建自己的 `username.github.io` 分支

* 当我们去挂网注册完成一个`git`账号之后呢，现在我们就可以登陆到自己的账户了。点击右上角你的头像旁边的那个三角。然乎在下拉之后选择`Your repositories`。你是不是找到了它，使劲的点击然后进入到你的仓库列表。

![登陆之后的图片](/images/img-01.png)
![点击创建一个分支](/images/img-02.png)

* 点击进入到这个列表页面之后呢，你需要点击左上角的`New`，然后根据提示创建一个名字为 `[username].github.io`的仓库。

![创建仓库](/images/img-03.png)

* 创建完成点击最下面的 `Creat repository`。欧克。完工了。等待一会儿就可以通过访问`[username].github.io`来访问刚刚你创建的博客了。

![创建仓库](/images/img-04.png)

* ok创建完成了这时候你就可以访问你自己的博客了呢。 地址就是 `username.github.io`你会发现，并不好看。所以接下来就来介H绍下

# 其实到现在为止，可以说你的博客已经可以访问啦。现在你可以去编写`html`文件来直接显示啦，但是我们会觉得每次都编`HTML`文件会很麻烦。接下来就来介绍一个`node`下的神器啦。

## 在创建一个hexo项目前，你需要了解一些基本概念。

* 什么是`node`?

`node`是什么呢？借用[官网](https://nodejs.org/zh-cn/)的话来说

> Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。

我自己理解的`node`就是一个环境。就像是在`windowss`上运行`Java`代码的话，你必须要安装`jdk`环境一样。具体详解，可以自行[谷歌](https://www.google.com/)一下。

* 什么是`hexo`?

我不开发`hexo`,我只是是`hexo`的搬运工。[官网链接](https://hexo.io/zh-cn/docs/)

> Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

正如官网所说，`hexo`是一个快速，简洁且高效的博客框架。我们可以利用这个框架来书写博客然后直接将编译后的文件上传到你的`github.io`仓库来完成部署。

* 安装`node`和`hexo`

首先需要在电脑端安装`node`，本文更新到此的时间是18年11月。现在`node`[官网](https://nodejs.org/zh-cn/)的下载页面如此。
![node官网下载页](/images/img-05.png)
![node官网下载页](/images/img-06.png)
![node官网下载页](/images/img-07.png)
![node官网下载页](/images/img-08.png)

点击**其他下载**，选择其他版本。为什么不推荐大家下载`10.13.0`版本呢，因为`node`下的更新会很频繁，最好下载最好用的最稳定的版本。
点击下载完成之后呢，就像是正常安装软件一样。点击一步步安装就好了。在安装完成之后。`win + r`输入`cmd`然后再控制台输入`node -v`。如果显示如下提示，就说明你的`node`安装成功啦。具体显示的可能是你选择版本，当前本机我安装的是`v8.9.1`，所以显示的就是这个版本。
![node版本](/images/img-09.png)

接下来我们安装`hexo`，再刚刚查询本机`node`版本的`dos`下运行如下命令。`npm install -g hexo-cli` 具体其他系统版本如何安装请移步[hexo官网](https://hexo.io/zh-cn/docs/)

至此`hexo`安装完成了。

## 如何书写一个博客文章并发布到我的`github.io`仓库呢？

* 在本地的任意磁盘新建一个文件夹。暂且将这个文件夹的名字叫做`demoBlog`

* 然后打开该文件夹。在空白处按住`shift`同时点击右键，选择**在此打开Powershell窗口**

* 唤醒`cmde`之后呢。现在你看到的样子如下图

![node官网下载页](/images/img-10.png)

* 在此依次输入下如下命令

```hexo初始化
hexo init
hexo install
```  

运行完成之后，你新建的文件夹结构变成了如下图一番

![文件夹目录](/images/img-11.png)

* 点击`_config.yml`文件 [官方配置文档](https://hexo.io/zh-cn/docs/configuration)

拉到最下面，将`deploy`改为如下

![node官网下载页](/images/img-12.png)

其中`repo`为你的`github`仓库地址

## 最后可以预览以及推到远程git仓库来预览

* 本地预览输入如下命令

```本地预览
hexo s
```  

* 远程推送输入如下命令

```推送到远程
hexo clean
hexo g
hexo d
```  