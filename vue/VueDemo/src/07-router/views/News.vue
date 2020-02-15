<template>
  <ul>
    <li v-for="(newsInfo,index) in news" :key="index">{{newsInfo}}</li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      news: ['new1', 'new2', 'new3', 'new4']
    }
  }
}
</script>

<style scoped>

</style>
