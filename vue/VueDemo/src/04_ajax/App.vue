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
    console.log('mounted')
    // 发ajax请求获取数据
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    this.$http.get(url)
      .then(response => {
        console.log(response)
        let result = response.data
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }, error => {
        alert('请求失败')
      })
  }
}
</script>

<style scoped>

</style>
