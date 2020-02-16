/*
包含n个基于state的getter计算属性方法的对象模块
 */
export default {
  // 总数量
  totalSize(state) {
    console.log("state", state)
    if (!state.todos || state.todos === undefined) {
      return 0;
    }
    return state.todos.length;
  },
  //完成的数量
  completeSize(state) {
    if (!state.todos || state.todos === undefined) {
      return 0;
    }
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },
  //  判断是否全部选中
  isAllSelect(state, getters) {
    return getters.totalSize === getters.completeSize && getters.totalSize > 0
  }
}
