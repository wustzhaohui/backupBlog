---
title: 关于for/forEach/map的区别
date: 2019-07-17 23:41:21
tags: 
- javascript
---

前两日被人问到，for/forEach/map有什么区别？

我其实有点一脸蒙蔽的，天天写业务代码我只知道这三种循环都是可以遍历一个数组的。现在用的多的就是map和forEach了，大概因为本人比较懒。使用for的话还要定义一个变量来作为索引，所以...

那究竟这三个循环都有什么不用呢？一起来看看MDN的解释吧

### forEach

> The forEach() method executes a provided function once for each array element. 
翻译：forEach（）方法为每个数组元素执行一次提供的函数。[forEach的MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### map

> The map() method creates a new array with the results of calling a provided function on every element in the calling array.
翻译：map（）方法创建一个新数组，其结果是在调用数组中的每个元素上调用提供的函数。[map的MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### for

> The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.
翻译：for语句创建一个循环，该循环由三个可选表达式组成，括在括号中并用分号分隔，后跟一个在循环中执行的语句（通常是一个块语句）。[for的MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

### 实现一个小需求有一个数组`[1,2,3,4,5,6,7,8,9,0]`需要将它们中的每一项都翻倍。

#### 实现效果

```
let array = [1,2,3,4,5,6,7,8,9,0];

// forEach
console.time("forEach");
array.forEach((item,index) => {
    return array[index] = item * 2;
});
console.timeEnd("forEach"); // 0.612ms
console.log(array);

// map
console.time("map");
let newArray = array.map((item, index) => {
    return item * 2;
});
console.timeEnd("map"); // 0.142ms
console.log(newArray);
console.log(array);

// for
console.time("for");
let array2 = [1,2,3,4,5,6,7,8,9,0];
for (let i = 0; i < array2.length; i++) {
    array2[i] = array2[i] * 2;
}
console.timeEnd("for"); // 0.021ms
console.log(array2);
```

已上三种循环遍历都可以轻松的实现，但是有什么不同呢？

- forEach forEach为每个数组元素执行一次提供的函数。不会改变原数组数据

- map map不会改变原数组，且该方法会将数组中的每一个元素都执行return的方法。不会改变原数组数据

- for for则在一个循环内会改变数组的数据

本来打算在[jsperf](https://jsperf.com/for-foreach-map-run-speed-test)直接运行看到运行速度的，但是这个网站貌似不知道为啥运行之后没有返回结果，于是我就自行谷歌到console提供了时间方法。从上面的打印结果可以看到在三种循环中，for是最快的其次是map在其次才是forEach所以在实际开发中可以尝试不要嫌麻烦使用for来循环遍历，如果嫌麻烦就使用map吧。可以提高我们的代码运行速度给到更好的交互体验。

### [关于console.time()用法](https://developer.mozilla.org/en-US/docs/Web/API/Console/time)

> Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.
翻译：启动一个计时器，您可以使用该计时器跟踪操作所需的时间。您为每个计时器指定一个唯一的名称，并且在给定页面上最多可以运行10,000个计时器。当您使用相同的名称调用console.timeEnd（）时，浏览器将输出自计时器启动以来经过的时间（以毫秒为单位）。

[forEach/map/for的demo](/javascript/基础姿势--01.js)运行可以拷贝代码到浏览器控制台运行尝试，建议使用Chrome浏览器。