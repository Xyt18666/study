<template>
    <div class="time">
        <el-time-select
            v-model="value"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
            }"
            placeholder="选择时间"
        ></el-time-select>
        <el-time-picker
            v-model="value1"
            :picker-options="{
                selectableRange: '18:30:00 - 20:30:00',
            }"
            placeholder="任意时间点"
        ></el-time-picker>
        <el-time-picker
            arrow-control
            v-model="value2"
            :picker-options="{
                selectableRange: '18:30:00 - 20:30:00',
            }"
            placeholder="任意时间点"
        ></el-time-picker>
        <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
            }"
        ></el-time-select>
        <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime,
            }"
        ></el-time-select>
        <el-time-picker
            is-range
            v-model="value11"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
        ></el-time-picker>
        <el-time-picker
            is-range
            arrow-control
            v-model="value22"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
        ></el-time-picker>
        <p>------------------------------------------</p>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="value19" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
                v-model="value29"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
            ></el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">默认为 Date 对象</span>
            <div class="demonstration">值：{{ value1 }}</div>
            <el-date-picker
                v-model="value111"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
            ></el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">使用 value-format</span>
            <div class="demonstration">值：{{ value2 }}</div>
            <el-date-picker
                v-model="value222"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
            ></el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">时间戳</span>
            <div class="demonstration">值：{{ value3 }}</div>
            <el-date-picker
                v-model="value333"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp"
            ></el-date-picker>
        </div>
        <div class="block">
            <p>组件值：{{ value666 }}</p>
            <el-date-picker
                v-model="valu666"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']"
            ></el-date-picker>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            value1: new Date(2016, 9, 10, 18, 40),
            value2: new Date(2016, 9, 10, 18, 40),
            startTime: "",
            endTime: "",
            value11: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value22: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [
                    {
                        text: "今天",
                        onClick(picker) {
                            picker.$emit("pick", new Date());
                        },
                    },
                    {
                        text: "昨天",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit("pick", date);
                        },
                    },
                    {
                        text: "一周前",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit("pick", date);
                        },
                    },
                ],
            },
            value19: "",
            value29: "",
            value111: "",
            value222: "",
            value333: "",
            value666: "",
        };
    },
};
</script>

<style></style>
