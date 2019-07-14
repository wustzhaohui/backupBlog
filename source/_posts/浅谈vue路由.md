---
title: 浅谈vue路由
date: 2019-03-11 15:52:24
tags:
- vue
- vue-router
categories: 
- web前端
---

# 什么是`vueRouter`？

## 以下是引用`vueRouter`官方解释

> Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：
> - 嵌套的路由/视图表
> - 模块化的、基于组件的路由配置
> - 路由参数、查询、通配符
> - 基于 `Vue.js` 过渡系统的视图过渡效果
> - 细粒度的导航控制
> - 带有自动激活的 `CSS class` 的链接
> - HTML5 历史模式或 hash 模式，在 IE9 中自动降级
> - 自定义的滚动条行为

<!-- more -->

## 如何使用？

### 安装

`npm  i vue-router`

### 使用

- 在入口文件引用vue-router

```安装VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
```

- 添加到Vue引用

*前提是你已经引入了Vue*

`Vue.use(VueRouter)`

- 你可以在入口文件来直接引用你的页面格式如下

* 官网写法

```路由文件
import index from ${path};
const index = resolve => require([${path}], resolve); // 异步写法，推荐提高性能
// path为你的页面/组件地址
const router = new VueRouter({
    [{
        name: 'index',
        path: '/index',
        component: index
    }]
});
```
* 你可以这么写

自定义一个`routers.js`文件

```如下写法
import index from `${path}`;
const index = resolve => require([${path}], resolve); // 异步写法，推荐提高性能
export default [
    {
        name: 'index',
        path: '/index',
        component: index
    }
];
```
然后在入口文件中去引入即可

* 最后在Vue实例上去使用即可

```使用vueRouter
    new Vue({
      router
    }).$mount('#app');
```
### vue-router路由传参

- `params`

可以直接在路由的`path`属性上去添加你需要的参数。比如前文我们写到的`index`页面可以值么写

```
{
    name: 'index',
    path: '/index/:id' // id非必填直接在id后加?
}
```

在路由跳转的时候有两种写法。如下

```params路由跳转写法
// 写法1
this.$router.push({
    name: 'index',
    params: {
        id: 1234567
    }
});

// 写法2
this.$router.push(`/index/${id}`)
```

这么以来，当你通过路由访问`/index`页面的时候，可以直接在该页面通过`this.$router.params.id`来访问路由的参数

*这里需要注意的是，id为必填字符，如果不填写则找不到该路由。如果想非必填可以在参数后面加一个问号[?]*

- `query`

`query`的参数传递就是在hash地址后面直接追加`?`，这个是在浏览器看到的最终结果是`?`和`&`组合的参数。但是在传递的时候写法相对固定。如下

```query的参数传递
this.$router.push({
    name: 'index',
    query: {
        id: 111111
    }
})
```

query的写法只能这么写，不能像`params`一样去直接在`url`中手动拼接字符串。

那么在页面读取的时候也相对来说方便`this.$route.query.id`就可以访问到刚刚页面传递的`id`啦

- `*`通配符路由

> 当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由 { path: '*' } 通常用于客户端 404 错误。
>当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数

### 路由嵌套

> 实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：
>
>```
    /user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
>```

vueRouter可以很简单的表达这个关系

- 配置代码如下

```嵌套路由代码js
import member from '@coponent/member'
import profile from '@coponent/profile'
{
    path: '/member',
    component: member,
    children: [
        {
            path: 'profile',
            coponent: profile
        }
        // ...其他子集路由
    ]
}

```

```嵌套路由html
// 根路由页面
<template>
<div>
<router-view></router-view> // 用来访问子集路由
</div> // 如果有多层嵌套那么需要我们在路由配置页面多次嵌套配置
</template>
```

> *要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。*

官网说到，以`/`开头的路径会被认为是跟路径，所以所有的子集路径的`path`属性都不要添加`/`。

- 访问

例如访问上面配置的代码的话可以直接这么写

```多级路由嵌套访问
this.$router.push('/member') // 访问根
this.$router.push('/member/profile') // 访问嵌套
```

这种路由的配置使用场景在于，有时候我们需要几个页面共用一个头或者底部

### 路由跳转

上文中已经很详细的介绍过了路由跳转，本部分介绍下其他方式。

可以直接使用`router-link`来创建`a`标签的形式来实现跳转

```router-link
<router-link :to="..."></router-link>
```

还有其他的vueRouter的相关使用可以去[VueRouter](https://router.vuejs.org/zh/)官网查看
