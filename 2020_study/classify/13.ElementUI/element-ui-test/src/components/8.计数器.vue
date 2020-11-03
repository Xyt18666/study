<template>
    <div class="sizes">
        <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
        ></el-input-number>
        <el-input-number v-model="num2" :step="2"></el-input-number>
        <el-input-number v-model="num3" :step="2" step-strictly></el-input-number>
        <el-input-number v-model="num4" :precision="2" :step="0.1" :max="10"></el-input-number>

        <el-input-number
            v-model="num5"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="10"
        ></el-input-number>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1,
            num2: 1,
            num3: 1,
            num4: 1,
            num5: 1,
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
    },
};
</script>

<style></style>
