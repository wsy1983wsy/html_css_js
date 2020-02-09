<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  // 配置对象（与Vue一致）
  data () {
    // 必须写函数
    return {
      msg: 'Hello Vue Component'
    }
  }
}
</script>

<style scoped>
  p {
    color: yellowgreen;
  }
</style>
