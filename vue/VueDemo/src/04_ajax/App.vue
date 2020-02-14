<template>
  <div>
    <div v-if="!repoUrl"></div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      repoName: '',
      repoUrl: ''
    }
  },
  mounted () {
    //发ajax请求获取数据
  }
}
</script>

<style scoped>

</style>
