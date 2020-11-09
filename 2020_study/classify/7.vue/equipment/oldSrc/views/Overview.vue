<template lang="pug">
.overview-wrapper
    h1.title 系统概览
    .top-list
        .top-item.number
            p 设备总数
            p {{ overview.number }}
        .top-item.amount
            p 设备总金额
            p {{ overview.amount | money }}
    .chart-list.clear-fix
        chart-box.chart.status-overview(ref="status")
        chart-box.chart.category-overview(ref="category")
</template>

<script>
import axios from 'axios';
import ChartBox from '@/components/ChartBox.vue';

export default {
    components: { ChartBox },
    data() {
        return {
            overview: {}
        }
    },
    created() {
        axios.get('/equipment/overview').then(({ data }) => {
            if (data.code === 0) {
                this.overview = data.data;
            }
        });
    },
    mounted() {
        this.getChartData();
        window.addEventListener('resize', this.resizeChart);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeChart);
    },
    methods: {
        resizeChart() {
            this.$refs.status.resize();
            this.$refs.category.resize();
        },
        getChartData () {
            Promise.all([
                axios.get('/equipment/status-overview'),
                axios.get('/equipment/category-overview')
            ]).then(rsp => {
                const statusData = rsp[0].data.data;
                const categoryData = rsp[1].data.data;
                this.initEcharts(statusData, categoryData);
            });
        },
        initEcharts(statusData, categoryData) {
            const data1 = statusData.value.map((item, index) => {
                return {
                    value: item,
                    name: statusData.label[index]
                }
            });

            this.$refs.status.draw({
                title: {
                    text: '设备状态汇总',
                    left: 'center',
                    textStyle: {
                        color: '#666',
                        fontSize: 20,
                        lineHeight: 40
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: data1
                    }
                ],
                label: {
                    formatter: '{b}: {c}'
                }
            });

            this.$refs.category.draw({
                title: {
                    text: '设备分类汇总',
                    left: 'center',
                    textStyle: {
                        color: '#666',
                        fontSize: 20,
                        lineHeight: 40
                    }
                },
                xAxis: {
                    type: 'category',
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
                    type: 'value'
                },
                series: [{
                    data: categoryData.value,
                    type: 'bar'
                }],
            });
        }
    },
    filters: {
        money(val) {
            if (!val) return val;
            val = String(val);
            if (val.indexOf('.') === -1) {
                val += '.00';
            }
            let arr = val.split('.');
            let left = arr[0];
            left = left.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
            return left + '.' + arr[1];
        }
    }
};
</script>

<style lang="sass">
.overview-wrapper
    .top-item
        box-sizing: border-box
        display: inline-flex
        flex-direction: column
        justify-content: center
        min-width: 220px
        height: 100px
        padding: 0 30px 0 90px
        border-radius: 8px
        &.number
            color: #AB7DF6
            margin-right: 30px
            background: rgba(171, 125, 246, .2) url(~@/assets/img/icon1.png) no-repeat 30px center
        &.amount
            color: #81C926
            background: rgba(129, 201, 38, .2) url(~@/assets/img/icon2.png) no-repeat 30px center
        p
            line-height: 1.2em
            text-align: center
            font-size: 16px
            white-space: nowrap
            &:last-child
                font-size: 36px
                font-weight: bold
    .chart-list
        margin-top: 36px
        .chart
            float: left
            height: 420px
            margin-right: 3%
            background: #f3f3f3
            border-radius: 8px
        .status-overview
            width: 35%
        .category-overview
            width: 55%
</style>
