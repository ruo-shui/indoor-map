<template>
    <div class="icon">
      <icon-item class="icon-item" @iconClick="switchIcon">
        <img src="~@/assets/img/2D.png" alt="" v-show="isActive">
        <img src="~@/assets/img/3D.png" alt="" v-show="!isActive">
      </icon-item>
      <icon-item class="icon-item"><img src="~@/assets/img/location.png" alt=""></icon-item>
      <icon-item class="icon-item" @iconClick="switchNav"><img src="~@/assets/img/path.png" alt=""></icon-item>
    </div>
</template>

<script>
  import IconItem from "./IconItem"
  
  export default {
    name: "Icon",
    components:{
      IconItem
    },
    data(){
      return{
        isActive:true
      }
    },
    methods:{
      switchIcon(){
        this.isActive = !this.isActive
      },
      switchNav(){
        this.$store.commit('switchNav')
      }
    }
  }
</script>

<style scoped>
  .icon{
    position: fixed;
    top:150px
  }
  .icon .icon-item{
    margin: 15px 10px;
    box-shadow: 2px 2px 2px var(--color-border);
  }
</style>
