import VueVirtualScrollTree from "./src/components/vue-virtual-scroll-tree.vue";

VueVirtualScrollTree.install = function(Vue) {
    Vue.component(VueVirtualScrollTree.name, VueVirtualScrollTree);
};

export default VueVirtualScrollTree;
