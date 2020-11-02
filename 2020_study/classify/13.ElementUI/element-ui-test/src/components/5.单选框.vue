<template>
    <div class="audio">
        <h1>audio</h1>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <el-radio disabled v-model="radio2" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="radio2" label="选中且禁用">备选项</el-radio>
        <el-radio-group v-model="radio3">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio4" size="mini">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div>
            <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: "1",
            radio1: "1",
            radio2: "选中且禁用",
            radio3: 6,
            radio4: "上海",
        };
    },
};
</script>

<style></style>
