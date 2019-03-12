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
import index from ${path}
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
import index from `${path}`
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
}).$mount('#app')
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
这么以来，当你通过路由访问`/index`页面的时候，可以直接在该页面通过`this.$router.params.id`来访问路由的参数

*这里需要注意的是，id为必填字符，如果不填写则找不到该路由。如果想非必填可以在参数后面加一个问号`?`*
