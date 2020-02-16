/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 创建vm

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  store // 所有的属性都多了一个$store属性
})

