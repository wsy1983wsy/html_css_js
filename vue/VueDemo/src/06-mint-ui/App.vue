<template>
  <div>
    <mt-button style="width: 100%" @click.native="handleClick" type="primary">button</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  name: 'App',
  methods: {
    handleClick () {
      Toast('123')
    }
  }
}
</script>

<style scoped>

</style>
