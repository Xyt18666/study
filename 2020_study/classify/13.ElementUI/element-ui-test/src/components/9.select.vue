<template>
    <div class="select">
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
        <p>---------------------------</p>
        <el-select v-model="value1" multiple placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>

        <el-select
            v-model="value2"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>

        <el-select v-model="value3" placeholder="请选择">
            <el-option-group v-for="group in options2" :key="group.label" :label="group.label">
                <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-option-group>
        </el-select>
        <el-select v-model="value" filterable placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
        <el-select
            v-model="value5"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签"
        >
            <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {
                    value: "选项1",
                    label: "黄金糕",
                },
                {
                    value: "选项2",
                    label: "双皮奶",
                },
                {
                    value: "选项3",
                    label: "蚵仔煎",
                },
                {
                    value: "选项4",
                    label: "龙须面",
                },
                {
                    value: "选项5",
                    label: "北京烤鸭",
                },
            ],
            options2: [
                {
                    label: "热门城市",
                    options: [
                        {
                            value: "Shanghai",
                            label: "上海",
                        },
                        {
                            value: "Beijing",
                            label: "北京",
                        },
                    ],
                },
                {
                    label: "城市名",
                    options: [
                        {
                            value: "Chengdu",
                            label: "成都",
                        },
                        {
                            value: "Shenzhen",
                            label: "深圳",
                        },
                        {
                            value: "Guangzhou",
                            label: "广州",
                        },
                        {
                            value: "Dalian",
                            label: "大连",
                        },
                    ],
                },
            ],
            value: "",
            value3: "",

            value1: [],
            value2: [],
            options5: [
                {
                    value: "HTML",
                    label: "HTML",
                },
                {
                    value: "CSS",
                    label: "CSS",
                },
                {
                    value: "JavaScript",
                    label: "JavaScript",
                },
            ],
            valu5: [],
        };
    },
};
</script>

<style></style>
