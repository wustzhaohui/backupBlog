---
title: js引用类型数据深拷贝与浅拷贝
date: 2018-11-06 18:00:48
tags:
- javascript
categories: 
- web前端
---
# js数据类型

* 简单数据类型

    简单的数据类型包括```Undifine,NULL,Bolean,String,Number```。这些数据类型的数据的保存是在堆中存储的。堆中存放的数据是先进先出。*FIFO(first in first out)*

* 引用类型

    引用类型包括Object和Array，引用数据类型是存放在栈中的。栈中存放的数据是先进后出的。*FILO（frist in last out）*  

# 关于js的浅复制和深复制

++只有引用数据类型才会有深复制和浅复制这么一说。由于js的存储都是存地址的，浅复制会导致obj1和obj2指向同一个内存地址。这么一来，如果操作其中的任意一个obj那么就会导致元内存地址的数据更改。所以需要使用到深复制，为复制出的对象开辟一块新的内存地址。这样一来，就会出现原对象与新拷贝的对象在不同的内存地址。从而达到前后对象相互不影响。++

# 浅复制

* 数组的浅复制

```demo
var oldArray = [1,2,3,4,5,6];
var newArray = [];
newArray = oldArray;
newArray[0] = '改变的元素';
console.log(oldArray); // '改变的元素',2,3,4,5,6
console.log(newArray); // '改变的元素',2,3,4,5,6
```  

* 对象的浅复制

```demo
function copyObject(obj){
    var outObj = {};
    for(var item in obj){
        outObj.item = obj[item];
    }
    return outObj;
}

// Object.assign() 将元对象的属性枚举到新的对象，然后返回新的对象

var obj = {
    name:'二货',
    sex:'male',
    age:23
}
var b = {};
Object.assign(b,obj);
if(b === obj)  // true
```  

# 深拷贝

* 数组的concat与slice方法(假装深拷贝)

++concat与slice方法都是浅拷贝一个数组的元素然后复制给一个新的数组。只是如果数组的单个元素是数字，字符串等简单数据类型的时候，原数组的对象不会受新数组的影响。如果数组的项是引用类型数组或对象，则就是浅拷贝。++

```demo
var origin = [1,2,3,4,5];
var copySlice = origin.slice(0);
var copyConcat = origin.concat();
copySlice[0] = 'one';
copyConcat[0] = 'concat';
console.log(origin); // [1,2,3,4,5]

```  

```demo
var origin = [[1,2,3],{name:'lol'}];
var copySlice = origin.slice(0);
var copyConcat = origin.concat();
copySlice[0][0] = 'slice';
copyConcat[1].name = 'concat';
console.log(origin) // [['slice',2,3],{name:'concat'}]
```  

* 深拷贝实现方法JSON.parse和JSON.stringify();

*这种方法使用较为简单，可以满足基本的深拷贝需求，而且能够处理JSON格式能表示的所有数据类型，但是对于正则表达式类型、函数类型等无法进行深拷贝(而且会直接丢失相应的值)。还有一点不好的地方是它会抛弃对象的constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object。同时如果对象中存在循环引用的情况也无法正确处理。*

```demo
//例1
var source = { name:"source", child:{ name:"child" } } 
var target = JSON.parse(JSON.stringify(source));
target.name = "target";  //改变target的name属性
console.log(source.name); //source 
console.log(target.name); //target
target.child.name = "target child"; //改变target的child 
console.log(source.child.name); //child 
console.log(target.child.name); //target child
//例2
var source = { name:function(){console.log(1);}, child:{ name:"child" } } 
var target = JSON.parse(JSON.stringify(source));
console.log(target.name); //undefined
//例3
var source = { name:function(){console.log(1);}, child:new RegExp("e") }
var target = JSON.parse(JSON.stringify(source));
console.log(target.name); //undefined
console.log(target.child); //Object {}
```  
