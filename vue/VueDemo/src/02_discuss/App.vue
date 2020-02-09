<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add/>
      <List/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'

export default {
  name: 'App',
  components: {
    Add,
    List
  }
}
</script>

<style scoped>

</style>
