<template lang="pug">
    .longin
        h2 登陆
        el-input(
            v-model="formData.useName"
            placeholder="用户名"
        )
        el-input(
            type="password"
            v-model="formData.passWord"
            placeholder="密码"
        )
        el-button(
            type="primary"
            @click="onSubmit"
            ) 登陆

</template>

<script>
export default {
    data() {
        return {
            formData: {
                useName: "",
                passWord: "",
            },
        };
    },
    methods: {
        onSubmit() {
            const { useName, passWord } = this.formData;
            if (!useName || !passWord) {
                this.$message({
                    message: "xxxxxx",
                    type: "waring",
                });
            } else {
                document.cookie = "longin1";
                this.$router.push("/main");
            }
        },
    },
};
</script>

<style lang="sass"></style>
