<template>
  <div>
    <img src="./assets/logo.png" alt="" class="logo">
    <!--使用组件-->
    <HelloWorld/>
  </div>
</template>

<script>
// 1. 引入组件
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  // 映射组件标签
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .logo {
    width: 200px;
    height: 200px;
  }
</style>
