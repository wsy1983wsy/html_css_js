<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader/>
      <ToDoList/>
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
  }
}
</script>

<style scoped>

</style>
