<template>
    <div class="content">
        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple">图标</div></el-col>
            <el-col :span="20">
                <div class="grid-content bg-purple">
                    <el-row>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-dropdown trigger="click">
                                    <span class="el-dropdown-link">
                                        <i class="el-icon-s-fold el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <div class="left">左侧面板</div>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-input
                                    placeholder="请输入内容"
                                    prefix-icon="el-icon-search"
                                    v-model="input2"
                                ></el-input>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span>欢迎登陆xx</span>
                                <el-popover
                                    placement="bottom"
                                    title="标题"
                                    width="200"
                                    trigger="click"
                                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                                >
                                    <el-button slot="reference">
                                        <i class="el-icon-s-check el-icon--right"></i>
                                    </el-button>
                                </el-popover>

                                <i class="el-icon-s-custom el-icon--right"></i>
                                <span>退出</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <div class="mian">主体</div>
                    <div class="chart-box" id="chart" style="width: 600px;height:400px;"></div>
                    <el-table
                        :data="tableData"
                        style="width: 100%"
                        :default-sort="{ prop: 'date', order: 'descending' }"
                    >
                        <el-table-column
                            prop="date"
                            label="日期"
                            sortable
                            width="180"
                        ></el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            sortable
                            width="180"
                        ></el-table-column>
                        <el-table-column
                            prop="address"
                            label="地址"
                            :formatter="formatter"
                        ></el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import HomeContent from "@/components/home-content.vue";
import echarts from "echarts";
export default {
    name: "Home",
    data() {
        return {
            input2: "",
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
        };
    },
    components: {
        // HomeContent,
    },
    methods: {
        // formatter(row, column) {
        //     return row.address;
        // },
    },
    mounted() {
        this.$nextTick(() => {
            var myChart = echarts.init(document.getElementById("chart"));
            let option = {
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: "line",
                        areaStyle: {},
                    },
                ],
            };

            myChart.setOption(option);
        });
    },
};
</script>
<style lang="sass"></style>
