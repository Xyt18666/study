<template>
    <div class="login">
        <input type="text" v-model="val" />
        <button @click="gotoRoom">进入聊天室</button>
    </div>
</template>

<script>
export default {
    data() {
        return { val: "", userName: "" };
    },
    mounted() {
        // this.userName = localStorage.getItem("userName");
        // if (this.userName) {
        //     this.$router.push("/room");
        //     return;
        // }
    },
    methods: {
        gotoRoom() {
            if (this.val.trim().length < 6) {
                alert("用户名不小于6位");
                return;
            }
            localStorage.setItem("userName", this.val.trim());
            this.$router.push("/room");
        },
    },
};
</script>

<style></style>
