<template>
  <div>
    About
    <p>{{msg}}</p>
    <input type="text" placeholder="清除输入内容" style="border: 1px solid darkgray">
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
