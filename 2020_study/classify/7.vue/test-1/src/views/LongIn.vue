<template lang="pug">
.long
    p long

    input(v-model="val")
    p(@click="sends") 提交
    
</template>

<script>
export default {
    data() {
        return {
            val: "",
        };
    },
    methods: {
        sends() {
            this.$store.commit("setData", this.val);
            this.$router.go(-1);
        },
    },
};
</script>

<style></style>
