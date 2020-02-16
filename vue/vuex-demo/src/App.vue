<template>
  <div class="container">
    <p>click {{count}} times ,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="reduce">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: "App",
    computed: {
      ...mapState(['count']), // mapState(['count'])返回值{count(){ return this.$store.state['count']}}
      ...mapGetters(['evenOrOdd'])  // mapGetters(['evenOrOdd'])返回值{evenOrOdd(){ return this.$store.getters['evenOrOdd']}}
    },
    methods: {
      ...mapActions(['increment', 'reduce', 'incrementIfOdd', 'incrementAsync'])
    }
    // methods: {
    // increment() {
    //   // 通知vuex去增加
    //   // 触发增加事件
    //   this.$store.dispatch('increment')
    // },
    // reduce() {
    //
    //   this.$store.dispatch('reduce')
    // },
    // incrementIfOdd() {
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync')
    // }
    // }
  }
</script>

<style>

</style>
