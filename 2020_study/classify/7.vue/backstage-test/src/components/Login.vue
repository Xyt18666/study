<template>
    <div class="hello">
        <h1>login</h1>
        <form action="#">
            <label for="#">
                用户名
                <el-input v-model="user" placeholder="请输入内容"></el-input>
            </label>
            <label for="#">
                密码
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
            </label>
            <el-input type="submit" @click.native="toMain"></el-input>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: "",
            password: "",
        };
    },
    props: [],
    methods: {
        toMain() {
            console.log(11);

            // this.$http.get("/api/login").then(res => {
            //     console.log(res);
            // });

            this.$http
                .post("/api/login", {
                    us: this.user,
                    ps: this.password,
                })
                .then(res => {
                    console.log(res);
                });

            // this.$router.push({
            //     name: "Main",
            //     params: {},
            // });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
