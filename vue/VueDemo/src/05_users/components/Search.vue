<template>

  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchKey"/>
      <button @click="handleSearch">Search</button>
    </div>
  </section>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  name: 'Search',
  data () {
    return {
      searchKey: ''
    }
  },
  methods: {
    handleSearch () {
      const searchKey = this.searchKey.trim()
      if (searchKey) {
        //发布消息
        PubSub.publish('search', searchKey)
      }

    }
  }
}
</script>

<style scoped>

</style>
