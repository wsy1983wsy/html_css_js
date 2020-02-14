<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--给ToDOHeader标签绑定addTodo时间监听-->
      <!--      <ToDoHeader @addTodo="addTodo"/>-->
      <ToDoHeader ref="header"/>
      <ToDoList :todos="todos"/>
      <ToDoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"/>
      <to-do-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeCount}}/ 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeCount > 0" @click="deleteCompleteTodos" slot="delete">清除已完成任务
        </button>
      </to-do-footer>
    </div>
  </div>
</template>
<!--
绑定事件监听----   订阅消息
触发事件------ 发布消息
-->
<script>
import PubSub from 'pubsub-js'
import ToDoHeader from './components/ToDoHeader'
import ToDoList from './components/ToDoList'
import ToDoFooter from './components/ToDoFooter'
import StorageUtil from './util/StorageUtil'

export default {
  name: 'App',
  components: {
    ToDoHeader,
    ToDoList,
    ToDoFooter
  },
  data () {
    return {
      // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      todos:StorageUtil.readTodos()
      //   [
      //   {title: '吃饭', complete: false},
      //   {title: '睡觉', complete: true},
      //   {title: 'coding', complete: false},
      // ]
    }
  },
  mounted () {
    //给ToDoHeader标签绑定addTodo时间监听
    this.$refs.header.$on('addTodo', this.addTodo)
    // 订阅消息
    PubSub.subscribe('deleteTodo', (msg, data) => {
      this.deleteTodo(data)
    })
  },
  methods: {
    addTodo (todo) {
      this.todos.push(todo)
    },
    deleteTodo (index) {
      console.log('deleteTodo', index)
      this.todos.splice(index, 1)
    },
    // 删除所有选中的todo
    deleteCompleteTodos () {
      console.log('deleteCompleteTodos')
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全选/全不选
    selectAll (select) {
      this.todos.forEach(todo => todo.complete = select)
    }
  },
  watch: {
    todos: {
      deep: true, // 深度监视
      handler: function (value) {
        // 将todos最新值的json数据，保存到localstorage
        // window.localStorage.setItem('todos_key', JSON.stringify(value))
        StorageUtil.saveTodos(value)
      }
    }
  },
  computed: {
    completeCount () {
      let compeleted = this.todos.filter(todo => todo.complete)
      return compeleted.length
    },
    isAllCheck: {
      get () {
        return this.completeCount === this.todos.length && this.todos.length > 0
      },
      set (value) {
        if (value) {
          this.selectAll(true)
        } else {
          this.selectAll(false)
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
