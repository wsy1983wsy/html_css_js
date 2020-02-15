<template>
  <ul>
    <li v-for="(msg,index) in msgs" :key="msg.id">
      <a href="??/msg.id">{{msg.title}}</a>


    </li>
  </ul>
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
    }, 1000)
  }
}
</script>

<style scoped>

</style>
