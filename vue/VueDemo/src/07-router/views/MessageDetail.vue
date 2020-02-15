<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MessageDetail',
  data () {
    return {
      messageDetail: {
        id: '',
        title: '',
        content: ''
      }
    }
  },
  mounted () {
    setTimeout(() => {
      const messageDetails = [
        {id: 1, title: 'Message1', content: 'message content00111....'},
        {id: 2, title: 'Message2', content: 'message content00222....'},
        {id: 3, title: 'Message3', content: 'message content00333....'}
      ]
      this.messageDetails = messageDetails
      const id = this.$route.params.id * 1
      this.messageDetail = messageDetails.find(detail => detail.id === id)
    }, 100)
  },
  watch:{
    $route:function (value) {
      const id = this.$route.params.id * 1
      this.messageDetail = this.messageDetails.find(detail => detail.id === id)
    }
  }
}
</script>

<style scoped>

</style>
