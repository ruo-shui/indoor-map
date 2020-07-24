<template>
    <div id="index">
      <indoor-map></indoor-map>
      <search></search>
      <icon></icon>
      <navigation></navigation>
    </div>
</template>

<script>
  import Search from "@/components/search/Search"
  import Icon from "@/components/icon/Icon"
  import FloorSwitch from "@/components/floorSwitch/FloorSwitch"
  import Navigation from "@/components/navigation/Navigation"
  import IndoorMap from "@/components/indoorMap/IndoorMap"

  export default {
    name: "Index",
    components:{
      Search,
      Icon,
      FloorSwitch,
      Navigation,
      IndoorMap
    }
  }
</script>

<style scoped>
  #index{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
</style>
