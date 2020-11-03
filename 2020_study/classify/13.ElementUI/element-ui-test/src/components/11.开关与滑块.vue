<template>
    <div class="conter">
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        <el-switch
            style="display: block"
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费"
        ></el-switch>
        <el-tooltip :content="'Switch value: ' + value2" placement="top">
            <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="100"
                inactive-value="0"
            ></el-switch>
        </el-tooltip>
        <p>----------------------------------------</p>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="value22"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">隐藏 Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">格式化 Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">禁用</span>
            <el-slider v-model="value5" disabled></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">不显示间断点</span>
            <el-slider v-model="value11" :step="10"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">显示间断点</span>
            <el-slider v-model="value21" :step="10" show-stops></el-slider>
        </div>
        <div class="block">
            <el-slider v-model="value31" show-input></el-slider>
        </div>
        <div class="block">
            <el-slider v-model="value00" range show-stops :max="10"></el-slider>
        </div>
        <div class="block">
            <el-slider v-model="value1" vertical height="200px"></el-slider>
        </div>
        <div class="block">
            <el-slider v-model="value14" range :marks="marks"></el-slider>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: true,
            value2: "100",
            value1: 0,
            value22: 50,
            value3: 36,
            value4: 48,
            value5: 42,
            value11: 0,
            value21: 0,
            value31: 0,
            value00: [4, 8],
            value14: [30, 60],
            marks: {
                0: "0°C",
                8: "8°C",
                37: "37°C",
                50: {
                    style: {
                        color: "#1989FA",
                    },
                    label: this.$createElement("strong", "50%"),
                },
            },
        };
    },
};
</script>

<style></style>
