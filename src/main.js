import Vue from 'vue'
import App from './App.vue'
import  VueRouter from "vue-router"

import Mint from 'mint-ui';
Vue.use(Mint);

import  router  from "../src/assets/js/router.js"
Vue.use(VueRouter)
//导播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
