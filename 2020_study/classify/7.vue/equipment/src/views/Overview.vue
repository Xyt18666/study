<template lang="pug">
.overview overview
    .echarts-list
        
        Echarts.left(ref="states")
        Echarts.right(ref="categroy")

</template>

<script>
var echarts = require("echarts");
import Echarts from "@/components/Echarts.vue";
export default {
  components: {
    Echarts
  },
  methods: {
    init() {
      var option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      this.$refs.states.draw(option);
      this.$refs.categroy.draw(option);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="sass">
.overview
    width: 100%
    .echarts-list

        display: flex
        .left
            background: #ccc
            flex: 4 0 
        .right
            background: #ccc
            flex: 6 0 
</style>
