<template>
    <div class="main">
        <h1>首页</h1>
        <h2>用户名{{ user }} + {{ user2 }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: "",
            user2: "",
        };
    },
    created() {
        this.user = localStorage.getItem("token");
        this.user2 = this.$store.state.user;
        console.log(this.$store.state.user);
    },
};
</script>

<style></style>
