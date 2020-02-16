/**
 * vuex的核心惯性力模块：store
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象
const state = {
  count: 0
}
// 包含多个更新state函数的对象
const mutations = {
  // 增加的mutation
  INCREMENT(state) {
    state.count++
  },
  // 减少的mutation
  REDUCE(state) {
    state.count--
  }
}
// 对应事件回调函数
const actions = {
  // 增加的action
  increment({commit}) {
    // 提交增加的mutation
    commit('INCREMENT')
  },
  reduce({commit}) {
    commit('REDUCE')
  },
  incrementIfOdd({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({commit, state}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 100)
  }
}
// 包含多个getter计算属性的对象
const getters = {
  evenOrOdd(state) { // 不需要调用，只需要读取作为属性值
    if (state.count % 2 === 0) {
      return '偶数'
    } else {
      return '奇数'
    }
  }
}
export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新state函数的对象
  actions, // 对应事件回调函数
  getters // 包含多个getter计算属性的对象
})
