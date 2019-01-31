---
title: 如何在Mac上安装JDK(记录笔记)
date: 2019-01-31 17:14:26
tags:
categories: 
- Java
---
# Mac上的Java的JDk安装以及环境变量的配置

## 安装流程

- 下载`JDK`的`Dmg`文件并安装
- 配置环境变量

### 下载`JDK`的安装包

[点击此处跳转下载页面](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)

![下载页面](/images/java/WX20190131-172706.png)

如上图所示，可以直接下载安装包然后傻瓜安装。也可以下载压缩包然后压缩安装（建议直接下载安装文件安装）

### 配置环境变量
<!-- more -->
配置完成之后你会发现当你执行`java`或`javac`的时候并没有出现你想要的结果。这时候你需要去配置环境变量

- 打开终端输入如下命令

```打开.bash_profile文件配置java的全局变量
vi ~/.bash_profile
```

- 然后编辑按`i`输入如下命令
```jdk配置环境变量
JAVA_HOME=/Library/Java/javaVirtualMachines/jdk1.8.8_131.jdk/Contents/Home
  
PATH=$JAVA_HOME/bin:$PATH

CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

export JAVA_HOME  PATH CLASSPATH
```
这里需要注意下： 在‘=’前后都不能有空格，在最后`export`的时候如果按照如上代码去保存会报`export 'JAVA_HOME=/Library/Java/javaVirtualMachines/jdk1.8.8_131.jdk/Contents/Home' not a valid identifier`

正确写法
```jdk环境变量正确写法
JAVA_HOME=/Library/Java/javaVirtualMachines/jdk1.8.8_131.jdk/Contents/Home
  
PATH=$JAVA_HOME/bin:$PATH

CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

export JAVA_HOME PATH CLASSPATH
```

注意最后的`export`时`JAVA_HOME`后不能有多余的空格

### 检测是否安装成功

在终端输入如下命令
```检测是否安装成功java
java -version
```
如果成功则会如下显示

![安装成功图片](/images/java/1548927872297.jpg)