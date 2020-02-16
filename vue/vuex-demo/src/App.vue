<template>
  <div class="container">
    <p>click {{$store.state.count}} times ,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="reduce">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    computed: {
      evenOrOdd() {
        return this.$store.getters.evenOrOdd;
      }
    },
    methods: {
      increment() {
        // 通知vuex去增加
        // 触发增加事件
        this.$store.dispatch('increment')
      },
      reduce() {

        this.$store.dispatch('reduce')
      },
      incrementIfOdd() {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync() {
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>

<style>

</style>
