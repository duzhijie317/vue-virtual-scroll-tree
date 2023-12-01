<template>
  <div class="vue-virtual-scroll-tree" style="height: calc(100vh - 20px)">
    <vue-virtual-scroll-tree
      ref="virtualScrollTree"
      node-key="id"
      :data="treeData"
      :default-expanded-keys="expandedNodeKeyArr"
      scrollToDefaultExpandedKey=""
      :props="props"
      :item-size="26"
      height="calc(100vh - 30px)"
      show-checkbox
    >
    </vue-virtual-scroll-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: "name",
      },
      treeData: [],
      expandedNodeKeyArr: [],
    };
  },
};
</script>

