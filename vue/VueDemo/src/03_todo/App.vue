<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader/>
      <ToDoList :todos="todos"/>
      <ToDoFooter/>
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
      todos: [
        {title: '吃饭', complete: false},
        {title: '睡觉', complete: true},
        {title: 'coding', complete: false},
      ]
    }
  }
}
</script>

<style scoped>

</style>
