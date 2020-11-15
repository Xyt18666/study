<template lang="pug">
.xueya1
    h2 添加血压资料
    input(v-model="name")
    input(v-model="size")
    p(@click="toMsg") 添加

</template>

<script>
export default {
    data: function() {
        return {
            name: "",
            size: null,
        };
    },
    methods: {
        toMsg() {
            this.$emit("getMsg", { name: this.name, size: this.size, time: new Date().toString() });
        },
    },
};
</script>

<style>
.xueya1 {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #ccc;
    top: 0;
    left: 0;
}
</style>
