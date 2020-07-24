<template>
  <div class="indoorMap">
    <div id="map"></div>
    <floor-switch @itemClick="getCurrentData"></floor-switch>
  </div>
</template>

<script>
  import FloorSwitch from "@/components/floorSwitch/FloorSwitch"

  import getMap from '@/network/map'
  import L from 'leaflet'

  export default {
    name: "IndoorMap",
    components: {
      FloorSwitch
    },
    data() {
      return {
        map: {},
        data: {}
      }
    },
    methods: {
      //创建地图
      mapCreat() {
        this.map = new L.Map("map", {
          center: [23.13471918584834, 113.32151234149934],
          //zoom: 18,
          zoomSnap: 0.1,
          maxZoom: 23,
          minZoom: 17,
          //地理围栏
          maxBounds: ([[23.132846036559536, 113.31956015729906], [23.13665645841917, 113.32355572080614]]),
          zoomControl: false
        })
        //使地图zoom适应手机显示
        this.map.fitBounds([[23.13565645841917, 113.32255572080614], [23.133846036559536, 113.32056015729906]], {
          paddingTopLeft: [10, 10],
          paddingBottomRight: [10, 10]
        })
      },
      //添加数据
      addLayer(data){
        this.map.eachLayer(layer => {
          layer.remove()
        })
        L.geoJSON(data.waiKuanMian,{
          style(){
            return {
              fillColor: "#ffffff",
              color: "#fdf9f2",
              weight: 2,
              fillOpacity: 0.8
            }
          }
        }).addTo(this.map)
        L.geoJSON(data.louKongMian,{
          style() {
            return {
              fillColor: "#e6e6e6",
              color: "#919191",
              weight: 1,
              fillOpacity: 0.8
            }
          }
        }).addTo(this.map)
        L.geoJSON(data.danYuanMian,{
          style() {
            return {
              fillColor: "#feebcd",
              color: "#919191",
              weight: 1,
              fillOpacity: 0.8
            }
          }
        }).addTo(this.map)
      },
      //楼层切换
      getCurrentData(item) {
        let url = 'zhengjia' + item + '.json'
        getMap(url).then(res => {
          this.data = res
        })
      }
    },
    created() {
      //获取数据
      getMap('zhengjiaF1.json').then(res => {
        this.data = res
      })
    },
    mounted() {
      this.mapCreat()
    },
    watch: {
      //监听数据变化创建地图
      data(val) {
        this.addLayer(val)
      }
    }
  }
</script>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
    /*background-color: green;*/
    position: fixed;
    left: 0;
    top: 0;
    /*z-index: -1;*/
  }
</style>
