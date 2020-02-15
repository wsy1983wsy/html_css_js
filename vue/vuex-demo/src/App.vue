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
  export default {
    name: "App",
    data() {
      return {
        count: 0
      }
    },
    computed: {
      evenOrOdd() {
        if (this.count % 2 == 0) {
          return "偶数"
        } else {
          return "奇数";
        }
      }
    },
    methods: {
      increment() {
        let count = this.count;
        this.count = count + 1;
      },
      reduce() {
        if (this.count <= 0) {
          return;
        }
        let count = this.count;
        this.count = count - 1;
      },
      incrementIfOdd() {
        let count = this.count;
        if (count % 2 == 1) {
          this.count = count + 1;
        }
      },
      incrementAsync() {
        setTimeout(this.increment, 1000);
      }
    }
  }
</script>

<style>

</style>
