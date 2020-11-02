<template lang="pug">
.overview overview
    .top-list
        .top-item.number
            p 设备总数
            p {{ overview.number }}
        .top-item.amount
            p 设备总金额
            p {{ overview.amount | money }}
    .echarts-list
        
        echarts-dom.left(ref="states")
        echarts-dom.right(ref="categroy")

</template>

<script>
var echarts = require("echarts");
import EchartsDom from "@/components/Echarts.vue";
export default {
  data() {
    return {
      overview: {}
    };
  },
  components: {
    EchartsDom
  },
  filters: {
    money(val) {
      if (!val) return val;
      val = String(val);
      if (val.indexOf(".") === -1) {
        val += ".00";
      }
      let arr = val.split(".");
      let left = arr[0];
      left = left.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      return left + "." + arr[1];
    }
  },
  methods: {
    getChartData() {
      Promise.all([
        this.$http.get("/equipment/status-overview"),
        this.$http.get("/equipment/category-overview")
      ]).then(rsp => {
        const statusData = rsp[0].data.data;
        const categoryData = rsp[1].data.data;
        this.init(statusData, categoryData);
      });
    },
    init(statusData, categoryData) {
      const data1 = statusData.value.map((item, index) => {
        return {
          value: item,
          name: statusData.label[index]
        };
      });

      this.$refs.states.draw({
        title: {
          text: "设备状态汇总"
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: data1
          }
        ],
        label: {
          formatter: "{b}: {c}"
        }
      });

      this.$refs.categroy.draw({
        title: {
          text: "设备分类汇总"
        },
        xAxis: {
          type: "category",
          data: categoryData.label,
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: categoryData.value,
            type: "bar"
          }
        ]
      });
    }
  },
  created() {
    this.$http.get("/equipment/overview").then(({ data }) => {
      if (data.code === 0) {
        this.overview = data.data;
      }
    });
  },
  mounted() {
    this.getChartData();
    window.addEventListener("resize", this.resizeChart);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeChart);
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
