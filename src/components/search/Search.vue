<template>
  <div class="search">
    <img src="~@/assets/img/search.png" alt="">
    <input type="text" v-model="search">
  </div>
</template>
<script>
  export default {
    name: "Search",
    data(){
      return{
        search:''
      }
    }
  }
</script>

<style scoped>
  .search {
    display: flex;
    background-color: #fff;
    /*margin: 15px;*/
    border-radius: 5px;
    border: 1px solid var(--color-border);
    position: fixed;
    top:15px;
    left: 15px;
    right: 15px;
  }

  .search img {
    width: 44px;
    height: 44px;
    padding: 5px;
  }
  .search input{
    width: 100%;
    font-size: 20px;
    border: none;
    outline: none;
    margin: 0 5px 0 5px;
  }
</style>
