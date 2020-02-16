/*
接收组件通知，触发mutation调用，间接导致状态修改的
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-types'
import StorageUtil from "../utils/storageUtils"

export default {
  addTodo({commit}, todo) {
    // 提交对mutation的请求
    commit(ADD_TODO, {todo})
  },
  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  selectAll({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },
  deleteCompleteTodos({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },
  reqTodos({commit}) {
    setTimeout(() => {
      const todos = StorageUtil.readTodos()
      commit(RECEIVE_TODOS, {todos})
    }, 1000);
  }

}
