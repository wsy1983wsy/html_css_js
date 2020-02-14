import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import './index.css'

// 声明使用插件
// 给vm对象和组件对象添加一个属性$http
Vue.use(VueResource)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
