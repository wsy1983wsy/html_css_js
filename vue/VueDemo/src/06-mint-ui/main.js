import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'

Vue.component(Button.name, Button)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
