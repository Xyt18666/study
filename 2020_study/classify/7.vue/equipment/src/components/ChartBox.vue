<template>
<div class="chart-box" ref="chart"></div>
</template>

<script>
import echarts from 'echarts';

export default {
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        if (this.chart) this.chart.dispose();
    },
    methods: {
        // 图表组件内部的初始化echarts实例
        init() {
            this.chart = echarts.init(this.$refs.chart);
        },
        // 父组件通过this.$refs调用draw可以画图
        draw(option) {
            if (!this.chart) this.init();
            this.chart.setOption(option);
        },
        // 窗口resize时，需要手动调用图表的动态缩放方法
        resize() {
            if (this.chart) this.chart.resize();
        }
    }
};
</script>

<style>

</style>
