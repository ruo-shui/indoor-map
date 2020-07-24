<template>
  <div class="floor" ref="floor">
    <div class="floorItem"
         @click="floorClick(index,item)"
         :class="{active:index===currentIndex}"
         v-for="(item,index) in floor">{{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "FloorSwitch",
    data() {
      return {
        floor: ["F7G","F7", "F6", "F5", "F4", "F3", "F2", "F1","B1"],
        currentIndex: 7
      }
    },
    methods: {
      scrollBottom() {
        this.$refs.floor.scrollTo(0, 36 * 5)
      },
      floorClick(index,item) {
        this.currentIndex = index
        this.$emit('itemClick',item)
      }
    },
    mounted() {
      this.scrollBottom()
    }
  }
</script>

<style scoped>
  .floor {
    position: fixed;
    right: 10px;
    top: 200px;
    width: 36px;
    height: calc(36px * 5);
    overflow-y: scroll;
    border-top: 1px solid var(--color-border);
    box-sizing: content-box;
  }

  .floor::-webkit-scrollbar {
    display: none;
  }

  .floor .floorItem {
    width: 36px;
    height: 36px;
    background-color: #fff;
    border: 1px solid var(--color-border);
    border-top: none;
    text-align: center;
    line-height: 36px;
  }

  .floor .active {
    background-color: #4187ff;
    color:#fff
  }
</style>
