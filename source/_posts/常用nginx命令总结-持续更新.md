---
title: 常用nginx命令总结(持续更新)
date: 2019-05-27 22:54:14
tags:
- Nginx
categories: 
- 后端开发
---

之前一直都是在我的`github`上访问我的博客，使用的是`hexo`工具来搭建的。可是毕竟是在国内，所以访问博客地址的时候回超级慢。正好在去年双十二在阿里云买了自己的服务器，于是乎就想着在我的服务器上去启动一个Nginx来访问，提高速度。我的服务器是默认安装的`Ubantu`，于是我就开始了在`Ubantu`上的折腾。

# 安装Nginx

登陆你的服务器之后，直接使用apt-get安装nginx。输入以下命令
```
sudo apt-get install nginx
```
安装完成之后，需要启动下。（直接输入``nginx）默认是启动了80端口。在阿里云后台设置一个对外的端口区间。可以直接在你的本地浏览器输入IP + 端口号就可以访问了。如果出现`command not found`可以尝试自己在`/usr/local/bin`下配置软连接（不知道如何添加软连接的可以自行谷歌）

# Linux下关于Nginx目录解释

当你安装完成之后，可以尝试在终端中输入`whereis nginx`你会得到如下图所示的两个目录

![关于nginx的目录](/images/1559027311889.jpg)

其中`/usr/sbin/nginx`目录为nginx的主程序
其中`/etc/nginx`目录存放nginx的配置文件
其中`/usr/share/nginx`目录存放静态文件

## 主要讲解关于配置文件目录下的结构

如下图点开`/etc/nginx`下目录结构如下

![关于nginx的目录](/images/WX20190528-151623.png)
*紫色为文件夹*

至此可以将`sites-available`文件夹下的文件复制至`conf.d`文件夹，然后更改其文件名称为`nginx.conf`。至此，你就可以去尝试启动Nginx了


# 常用Nginx命令列表

## 启动

```
nginx
```

## 测试配置文件是否有语法错误

```
nginx -t
```

## 重启Nginx

```
nginx -s reopen
```

## 重新加载Nginx配置文件然后再重启

```
nginx -s reload
```

## 强制停止Nginx

```
nginx -s stop
```

## 优雅的停止Nginx（处理完成请求再停止）

```
nginx -s quit
```

## 指定配置文件启动Nginx

```
nginx -c </path/to/config>
```

eg:
```
nginx -c /etc/nginx/conf.d/nginx.conf

// 如果不确定自己的配置文件语法是否正确可以尝试运行监测配置文件
nginx -t -c /etc/nginx/conf.d/nginx.conf
```