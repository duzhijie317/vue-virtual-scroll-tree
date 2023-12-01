# vue-virtual-scroll-tree

## 介绍

基于[element-ui](https://element.eleme.cn/#/zh-CN/component/tree)(License:MIT)中的tree功能，结合[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)(License:MIT)所做的树组件。

## 支持虚拟滚动


## 安装

```
npm install vue-virtual-scroll-tree
```

或

```
yarn add vue-virtual-scroll-tree
```

## 引入

### 全局引入

在 `main.js` 文件中引入：

```JS
import Vue from "vue";
import VueVirtualScrollTree from "vue-virtual-scroll-tree";

Vue.use(VueVirtualScrollTree)
```

### 组件引入

在组件中引入：

```JS
import VueVirtualScrollTree from "vue-virtual-scroll-tree";
// 样式文件，可以根据需要自定义样式或主题
import "vue-virtual-scroll-tree/src/assets/index.scss"

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
