<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'

export default {
  name: 'Main',
  data () {
    return {
      firstView: true,
      loading: false,
      users: null,
      errorMsg: ''
    }
  },
  mounted () {
    // 订阅消息
    PubSub.subscribe('search', (msg, searchKey) => {
      const url = `https://api.github.com/search/repositories?q=${searchKey}`
      // 更新状态（请求中)
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ''
      // 发ajax请求
      axios.get(url)
        .then(response => {
          // 成功 更新状态（成功）
          const result = response.data
          console.log(result)
          let users = result.items.map(item => {
            return {
              url: item.html_url,
              avatar_url: item.owner.avatar_url,
              name: item.name
            }
          })
          this.loading = false
          this.users = users
        }).catch(error => {
        // 失败 更新状态（失败）
        this.loading = false
        this.errorMsg = '请求失败: ' + error
      })
    })
  },
}
</script>

<style scoped>

</style>
