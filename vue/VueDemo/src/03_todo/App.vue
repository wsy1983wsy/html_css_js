<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--给ToDOHeader标签绑定addTodo时间监听-->
      <!--      <ToDoHeader @addTodo="addTodo"/>-->
      <ToDoHeader ref="header"/>
      <ToDoList :todos="todos" :deleteTodo="deleteTodo"/>
      <ToDoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
import ToDoHeader from './components/ToDoHeader'
import ToDoList from './components/ToDoList'
import ToDoFooter from './components/ToDoFooter'

export default {
  name: 'App',
  components: {
    ToDoHeader,
    ToDoList,
    ToDoFooter
  },
  data () {
    return {
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
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
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  }

}
</script>

<style scoped>

</style>
