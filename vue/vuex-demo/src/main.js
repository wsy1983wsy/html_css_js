/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'

// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

