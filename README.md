# vue-select-tu



[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

一款基于vue的多元图形选择插件

## Table of Contents

- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Security

## Install

```
npm install vue-select-tu
```

## Module

```js
import vueSelectTu from 'vue-select-tu'
Vue.use(vueSelectTu)
```

## Usage

```vue
<vue-select-tu v-model="select"
                   :require="true"
                   :multiple="true"
                   @change="changeData"
                   :imgData="imgData"
                   :label="yourlabel">
    </vue-select-tu>
```

## Definition

| Props          | Description         |  Type   | Dafult                       |
| :------------- | ------------------- | :-----: | ---------------------------- |
| :multiple      | 支持多选,默认false  | Boolean | false                        |
| :imgData       | 数据源;默认         |  Array  | []                           |
| v-model/:model | 图片默认选定值      |  Array  | ["value"],默认选中第一个图片 |
| :require       | 是否为必选          | Boolean | false                        |
| :label         | 表单元素名称        | String  | ""                           |
| :width         | 图片宽度 单位:px    | String  | "150",图片默认150px；        |
| :height        | 图片高度 单位:px    | String  | "100",图片默认100px；        |
| v-on:change    | 选中图片回调methods | method  | Function(val) {}             |

## Example

![](http://mmbiz.qpic.cn/mmbiz_jpg/qRJazDfIbDxZNbejBas5m0GMVTYH3e8VsD5VcA8wuSoNoIv00HyJiaoYabUysHtODzkDqIianudIojnXWrEjQNdQ/0)

```vue
<template>
  <div id="app">
    <vue-select-tu v-model="select"
                   :require="true"
                   :multiple="true"
                   @change="changeData"
                   :imgData="imgData"
                   label="请选择图片:">
    </vue-select-tu>
  </div>
</template>
```

```javascript
<script>
export default {
  name: 'app',
  data() {
    return {
      select: ['1'],
      imgData: [
        {
          name: '流动星空',
          value: '1',
          url:
            'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          alt: '标签1'
        },
        {
          name: '深海蔚蓝',
          value: '2',
          url:
            'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          alt: '标签2'
        },
        {
          name: '黑色商务',
          value: '3',
          url:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          alt: '标签3'
        }
      ]
    }
  },
  methods: {
    // val 为数组
    changeData(val) {
      console.log(val)
    }
  }
}
</script>
```

## Affirm

> ​	demo中部分图片引自网络，如有雷同，请联系本人删除
>

## Maintainers

[@Kyle](https://github.com/MarthaRen/vue-select-tu.git)

## Contributing

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2021/03/25 Kyle
