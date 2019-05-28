---
title: 关于使用vue-antDesign的form总结
date: 2019-04-09 23:06:48
tags:
- vue
categories: 
- web前端
---
写在最前

由于公司的主要产品线SaaS系统的笨重与UI的不统一，导致现在SaaS系统越来越过于笨重。前端技术组长经过考虑在现有的项目中嵌套`iframe`来对于接下来的一些重构模块进行大改版。最新的选型时使用阿里的开源框架`vueAntDesign`来开发接下来的重构模块。于是有幸接触到这个框架，现在对于近期所遇到的关于`ant`的一些`form`的问题做出一些总结。

# `Form` 表单

> 具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

<!-- more -->

## 在`ant`中`form`有三种排列方式

> 水平排列：标签和表单控件水平排列；（默认）
> 垂直排列：标签和表单控件上下垂直排列；
> 行内排列：表单项水平行内排列。

## 使用

> 1、如果使用 `Form.create` 处理表单使其具有自动收集数据并校验的功能，建议使用`jsx`。
> 2、如果不是使用`Vue.use(Form)`形式注册的`Form`组件，你需要自行将$form挂载到Vue原型上。
`Vue.prototype.$form = Form`

已上是官方文档所描述的，你可以使用已上两种方式去初始化`form`。我使用的是前者。具体代码如下

```如何使用form
export default = {
    data() {
        return {
            form: this.$form.createForm(this),
            data: {
                gender: 1
            }
        };
    };
}
```
然后再你的`template`代码中这么写

```如何使用form
<a-form :form="form">
    <a-form-item>
        <a-input>
    </a-form-item>
</a-form>
```

写到这里其实很多已经写过vue项目的小伙伴大概会直接在`data`上新建一个对象，然后来存储相关表单的数据。然后手动去判断每个`input`的`model`数值的规则了吧。但是在`ant`中校验必填与非必填有个很好用的方法那就是`form`对象的`validateFields`方法。这个方法中有个回调方法，回调方法中有两个参数。

* `Function([fieldNames: string[]], [options: object], callback: Function(errors, values))`


若`fieldNames`为空，则校验全部组件。一般我们使用到的就是直接调用第三个方法即可。其中`errors`代表校验规则是否通过，如果通过则不会有任何值，若不通过则会有值。至于`values`则返回你表单所有字段`model`值。你在校验通过之后直接可以来提交表单。

重要的是在我们正常认知中都会手动给到你的`aInput`组件添加一个v-model属性，一旦你申明了`form`对象之后，就不需要再次在你的`aInout`组件中添加该属性了。来看看官方的提示吧。

```
`browser.js?e834:49 Warning: `getFieldDecorator` will override `value`, so please don't set `value and v-model` directly and use `setFieldsValue` to set it.`
```

大致意思就是`getFieldDecorator`方法会重写`v-model`的值，所欲不要设置`aInput`的`v-model`值或者`value`值用以`setFieldsValue`属性来设置该数值就好了。

有了这个提示，其实我们的`aInput`组件中可以这么配置

* v-decorator

代码如下

```如何使用form
<a-form :form="form">
    <a-form-item>
        <a-input
        v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }], initialValue: data.gender}
        ]"
        >
    </a-form-item>
</a-form>
```
正如我前文所写的，在`data`上挂一个`data`对象然后给他一个字段`gender`。利用`v-decorator`中的`initialValue`来设置`aInput`组件的默认值。其中`v-decorator`的第一项是`aInput的ID`。在后期获取`aInput`的数值都是通过它来获取。

* `onValuesChange`

当让我们在初始化值之后当表单提交的时候一定不想去提交初始值。那么可以再创建表单对象的时候。对第二个参数做出一些调整。代码如下

```如何获取form中表单的数据
export default = {
    data() {
        return {
            form: this.$form.createForm(this, {option}),
            data: {
                gender: 1
            }
        };
    };
}
```
如上，在我们初始化表单对象的时候。有第二个`option`参数的。

`option的`选项如下（节选具体请移步 [文档](https://vue.ant.design/components/form-cn/))

- `props` 仅仅支持`Form.create({})(CustomizedForm)`的使用方式，父组件需要映射到表单项上的属性声明(和`vue`组件`props`一致) 
类型`{}`

- `mapPropsToFields` 把父组件的属性映射到表单项上（如：把 `Redux store` 中的值读出），需要对返回值中的表单域数据用 `Form.createFormField` 标记，如果使用$form.createForm创建收集器，你可以将任何数据映射到Field中，不受父组件约束 
类型： `(props) => ({ [fieldName]: FormField { value } })`

- `validateMessages` 默认校验信息，可用于把默认错误信息改为中文等，格式与 `newMessages` 返回值一致 
类型： `Object { [nested.path]: String }`

- `onFieldsChange` 当 `Form.Item` 子节点的值发生改变时触发，可以把对应的值转存到 `Redux store`
类型：`Function(props, fields)`

- `onValuesChange` 任一表单域的值发生改变时的回调 
类型：`(props, values) => void`

如上解释，我们可以使用`onValuesChange`配置项来将变更的数据绑定到我们的`data`上。代码如下

```如何获取form中表单的数据
export default = {
    data() {
        return {
            form: this.$form.createForm(this, {
                onValuesChange: this.dataChange
            }),
            data: {
                gender: 1
            }
        };
    },
    methods() {
        dataChange(props, fields) {
            Object.assign(this.data, fields);
        }
    }
}
```
* 反显数据利用this.form

this.form的方法很多。此处我只介绍setFields方法。

- setFields 设置一组输入控件的值与错误状态。 Function({ [fieldName]: { value: any, errors: [Error] } })

可以使用该方法来回显数据。具体this.form的详细解释清移步 [文档](https://vue.ant.design/components/form-cn/)

