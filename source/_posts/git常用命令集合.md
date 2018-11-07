---
title: git常用命令集合
date: 2018-11-06 17:52:27
tags: 
- git  
categories:
- git
---

# 最简单的推送代码到远程仓库的方法

```git初始化
[git init](https://note.youdao.com/)        // 初始化版本库，生成.git文件
git add .       // 添加该文件夹到本地仓库，add后可以直接写文件名称加文件格式
git commit -m 'my first commit'   // 将添加的文件推送到本地仓库，推送备注为 'my first commit'

// 目前为止，已经将文件推送到本地的仓库中。

git remote add master 你的远程地址   //添加你的远程仓库地址
git push -u origin master //第一次推送
git push origin master  //第一次推送之后可以直接使用该命令进行文件提交

// 在完成该命令之后会弹出需要登录你自己的git账户，同事需要在远程添加密钥验证，要不然本地文件无法通过验证无法提交
```  

# 获取代码更新&&拉取代码(以下所有名称无需添加引号)

```git克隆仓库
git clone '仓库地址'  //从远程仓库克隆代码到本地
git remote // 为了便于管理，Git要求每个远程主机都必须指定一个主机名。
git remmote -v //查看远程主机名名称
git remote show origin //显示主机名未origin的详细信息
git remote add origin //添加远程主机名
git remote rm origin //删除远程主机名
git remote rename origin newname //修改主机名

git fetch origin //获取远程主机名为origin的所有分支更新
git fetch origin master //获取主机名未origin的master更新

git branch -a //查看所有远程分支更新
git branch //查看本地分支

git fetch origin master  // 获取远程分支上主机名为origin上的master分支的更新
git pull origin master:master  // 将远程主机名为origin的分支master与本地分支合并
git pull origin newBranch   //推送本地分支到远程主机为master上
git pull origin master   //将远程主机名为ORIGIN的MASTER分支合并到当前分支

git checkout -b newBrach origin/master //在主机名为'origin'的'master'分支创建本地新的分支
git merge origin/master  //将主机名为origin的分支master与新建的分支合并
git checkout master //切换本地分支到master
```  

# 一些实用的git命令

```常用命令
git status  //查看当前文件的状态 如果有文件改变则会显示出来哪些改变
git diff -m  //查看哪些文件修改，修改了哪些地方
git log // 查看git提交版本
git reset --hard commitCode // 回滚代码到指定版本，版本号未纯字符串
git reset versionCode filepathname // 指定文件至某个版本
git reset HEAD filepathname // 撤销选中，与git add . 相反
git checkout . // 丢弃本地所有修改
```  
