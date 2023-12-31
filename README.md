[![npm](https://img.shields.io/npm/v/el-virtual-scroll-tree.svg)](https://www.npmjs.com/package/el-virtual-scroll-tree)
[![vue2](https://img.shields.io/badge/vue-2.6+-brightgreen.svg)](https://vuejs.org/)
[![last commit](https://img.shields.io/github/last-commit/duzhijie317/vue-virtual-scroll-tree.svg)](https://www.npmjs.com/package/el-virtual-scroll-tree)
[![NPM downloads](https://img.shields.io/npm/dm/el-virtual-scroll-tree.svg?style=flat)](https://npmjs.org/package/@duzhijie/el-virtual-scroll-tree)
[![license](https://img.shields.io/npm/l/el-virtual-scroll-tree.svg?maxAge=2592000)](http://www.opensource.org/licenses/mit-license.php)

# el-virtual-scroll-tree
vue2.x virtual scrolling tree component .

### author：duzhijie 杜智杰

connection: 363305622@qq.com / duzhijie317@gmail.com

## Introduction

Based on the tree style and function extracted from [element-ui](https://element.eleme.cn/#/en-US/component/tree)(License:MIT), combined with [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)(License:MIT) tree component.

## Large data volume supports virtual scrolling

## Install

```
npm install el-virtual-scroll-tree
```

or

```
yarn add el-virtual-scroll-tree
```

## Mount

### mount with global

Import in the `main.js` file:

```JS
import Vue from "vue";
import ElVirtualScrollTree from "el-virtual-scroll-tree";
// Style file, you can customize the style or theme according to your needs
import "el-virtual-scroll-tree/src/assets/index.scss"

Vue.use(ElVirtualScrollTree)
```

### mount with component

Import in the component：

```JS
import VUeVirtualScrollTree from "el-virtual-scroll-tree";
// Style file, you can customize the style or theme according to your needs
import "el-virtual-scroll-tree/src/assets/index.scss"

export default {
  components: {
    ElVirtualScrollTree
  }
}
```

## Props

```JS
data: Array

emptyText:  String

renderAfterExpand: Boolean

nodeKey: String

checkStrictly: Boolean

defaultExpandAll: Boolean

expandOnClickNode: Boolean

checkOnClickNode: Boolean

checkDescendants: Boolean

itemSize: Number

gridItems: Number

autoExpandParent: Boolean

defaultCheckedKeys: Array

defaultExpandedKeys: Array

scrollToDefaultExpandedKey: [String, Number]

currentNodeKey: [String, Number]

renderContent: Function

showCheckbox: Boolean

draggable: Boolean

allowDrag: Function

allowDrop: Function

props: {
  children: "children",
  label: "label",
  disabled: "disabled"
}
lazy: Boolean

highlightCurrent: Boolean

load: Function

filterNodeMethod: Function

accordion: Boolean

indent: Number

iconClass: String

height:  [String, Number]

extraLine: Number

keeps: Number
```

## Usage:

:warning: When using virtual scrolling, `node-key` must be set

```html
<template>
  <div class="vue-virtual-scroll-tree" style="height:calc(100vh - 20px)">
  <!-- Just remove the height parameter when not using virtual scrolling -->
    <vue-virtual-scroll-tree
      ref="veTree"
      node-key="id"
      height="calc(100vh - 20px)"
      :data="treeData"
      :props="props"
    ></vue-virtual-scroll-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: "name",
        children: "children"
      },
      treeData: []
    };
  },
};
</script>

```

## Change SCSS variables in the project
By creating a new style file, such as: `vue-virtual-scroll-tree-var.scss`, write the following content：

```JS
/* Change theme color variable */
$--color-primary: #ea5404;

/* Change the icon font path variable, required */
$--font-path: "~vue-virtual-scroll-tree/src/assets/fonts";

@import "vue-virtual-scroll-tree/src/assets/index.scss";
```
:warning: It should be noted that it is necessary to override the font path variable, and assign it to the relative path where the icon icon in el-virtual-scroll-tree is located.

Then directly import the above style files in `main.js`：
```JS
import Vue from 'vue'
import ElVirtualScrollTree from "el-virtual-scroll-tree";
import "./css/vue-virtual-scroll-tree-var.scss"

Vue.use(ElVirtualScrollTree)
```

## Other properties and methods

**From [element-ui official document](https://element.eleme.cn/#/en-US/component/tree)**<br />
**When you need to use virtual scrolling, just add the `height` property, such as:**
```html
<vue-virtual-scroll-tree :data="data" height="calc(100vh - 20px)" :props="defaultProps" @node-click="handleNodeClick"></vue-virtual-scroll-tree>
```

**[Quick view of examples and api](./element-ui-tree.md)**


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
