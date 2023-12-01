import Vue from 'vue'
import App from './App.vue'

import "./assets/index.scss"

import VueVirtualScrollTree from "./components/vue-virtual-scroll-tree";
Vue.component('VueVirtualScrollTree', VueVirtualScrollTree)

new Vue({
    el: '#app',
    render: h => h(App)
})
