<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
  import Index from "./views/index/Index"

  export default {
    name: 'App',
    components: {
      Index
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
