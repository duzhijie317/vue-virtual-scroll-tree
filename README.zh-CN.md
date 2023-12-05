[![npm](https://img.shields.io/npm/v/@duzhijie/vue-virtual-scroll-tree.svg)](https://www.npmjs.com/package/@duzhijie/vue-virtual-scroll-tree)
[![vue2](https://img.shields.io/badge/vue-2.6+-brightgreen.svg)](https://vuejs.org/)
[![last commit](https://img.shields.io/github/last-commit/duzhijie317/vue-virtual-scroll-tree.svg)](https://www.npmjs.com/package/@duzhijie/vue-virtual-scroll-tree)
[![NPM downloads](https://img.shields.io/npm/dm/@duzhijie/vue-virtual-scroll-tree.svg?style=flat)](https://npmjs.org/package/@duzhijie/vue-virtual-scroll-tree)
[![license](https://img.shields.io/npm/l/@duzhijievue-virtual-scroll-tree.svg?maxAge=2592000)](http://www.opensource.org/licenses/mit-license.php)

# @duzhijie/vue-virtual-scroll-tree

## 介绍

基于[element-ui](https://element.eleme.cn/#/zh-CN/component/tree)(License:MIT)中的tree功能，结合[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)(License:MIT)所做的树组件。

## 支持虚拟滚动


## 安装

```
npm install @duzhijie/vue-virtual-scroll-tree
```

或

```
yarn add @duzhijie/vue-virtual-scroll-tree
```

## 引入

### 全局引入

在 `main.js` 文件中引入：

```JS
import Vue from "vue";
import VueVirtualScrollTree from "@duzhijie/vue-virtual-scroll-tree";

Vue.use(VueVirtualScrollTree)
```

### 组件引入

在组件中引入：

```JS
import VueVirtualScrollTree from "@duzhijie/vue-virtual-scroll-tree";
// 样式文件，可以根据需要自定义样式或主题
import "@duzhijie/vue-virtual-scroll-tree/src/assets/index.scss"

export default {
  components: {
    VueVirtualScrollTree
  }
}
```

## 使用:

:warning: 在使用虚拟滚动时，必须设置 `node-key`。

**来自[element-ui 官方文档](https://element.eleme.cn/#/zh-CN/component/tree)**<br />
**需要使用虚拟滚动时，增加 `height` 属性即可，如：**
```html
<vue-virtual-scroll-tree :data="data" height="calc(100vh - 20px)" :props="defaultProps" @node-click="handleNodeClick"></vue-virtual-scroll-tree>
```

**[快速查看示例和api](./element-ui-tree.zh-CN.md)**


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
