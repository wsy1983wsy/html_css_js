<template>
  <div>
    <ul>
      <li v-for="(msg,index) in msgs" :key="msg.id">
        <router-link :to="`/home/msg/detail/${msg.id}`">{{msg.title}}</router-link>
        <button @click="pushShow(msg.id)">push查看</button>
        <button @click="replaceShow(msg.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      msgs: []
    }
  },
  mounted () {
    // 模拟ajax请求，从服务器获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: 'message01',
        },
        {
          id: 2,
          title: 'message02',
        },
        {
          id: 3,
          title: 'message03',
        }
      ]
      this.msgs = messages
    }, 100)
  },
  methods: {
    pushShow (id) {
      this.$router.push(`/home/msg/detail/${id}`)
    },
    replaceShow (id) {
      this.$router.replace(`/home/msg/detail/${id}`)
    },
  }
}
</script>

<style scoped>

</style>
