<template lang="pug">
.echarts
    .contetn(ref="echart")
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {
      myChart: null
    };
  },
  methods: {
    init() {
      this.myChart = echarts.init(this.$refs.echart);
    },
    draw(option) {
      this.myChart.setOption(option);
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.dispose();
    }
  }
};
</script>

<style lang="sass">
.contetn
    height: 500px
</style>
