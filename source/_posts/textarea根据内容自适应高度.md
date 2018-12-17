---
title: textarea根据内容自适应高度
date: 2018-12-18 00:03:25
tags:
- javascript
categories: 
- web前端
---

# 事出有因

这两天遇到设计给到一个稿子，是一个图文展示页面的编辑页面。大概稿子的样子是上面一个文本编辑，紧接着一个图片的编辑。

起初看到这个东西就觉得蛮好做的，结果第一版做出来发现交互太差劲了。`textarea`标签倒是好用，可以直接绑定`v-model`。但是吧，它的高度不能随着内容的增加而自己伸缩，像是`div`那样。

于是乎我就去谷歌了一下，找了好多的方法。但是我都不太喜欢，毕竟觉得这么小的一个功能点为啥要写辣么多的`js`。于是乎就接着找，在知乎找到了一个实现方法。

<!-- more -->

# 实现思路

实现方法有很多，我的实现思路就是利用css的遮盖。利用`div`的自适应高度来实现`textarea`的自适应高度。

## 下面是实现的div布局

```实现布局
    <div class="textarea-con">
        <div class="textarea-opacity common" id="contain"></div>
        <textarea class="textarea common" id="textarea"></textarea>
    </div>
```

## 下面是实现的css布局

```实现css
    .textarea-con{
        position: relative;
    }
    .textarea{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: #fff;
        overflow: hidden;
        resize: none;
        padding: 0;
        min-height: 30px;
    }
    .textarea-opacity{
        position: relative;
        z-index: -1;        
    }
    .common{
        line-height: 16px;
        font-size: 14px;
    }
```

## 下面是实现的`js`代码

```实现的js代码
    var contain = document.getElementById('contain');
    var textarea = document.getElementById('textarea');
    textarea.addEventListener('input', function() {
        contain.innerHTML = this.value;
    });
```

# 注意事项

- 要充分理解css的定位
- 注意实现的过程不是去改变`textarea`的高度而是依附`div`的高度去自适应
- 有些小伙伴可能会想其实`div`可以直接有个属性`contentEditable="true"`，是的这个属性可以解决一些事情。但是对于绑定数据不凡便的。尤其是现在都是双向绑定框架的情况下。
- 此例子是原生`js`实现的，在`Vue`或者`angular`下更加简单，直接把`textarea`的`model`给到`div`当作内容就好了。

# `html`的小栗子

[实现的一个小demo](/html/textareaAutoHeight.html)