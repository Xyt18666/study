<template>
    <div class="login">
        <h1>请登录</h1>
        <label for="#">
            电话
            <input type="text" v-model="tel" />
        </label>
        <label for="#">
            验证码
            <input type="text" v-model="codeing" />
        </label>
        <button @click="getCode" :class="active ? 'active' : ''">{{ msg }}</button>
        <button @click="longing">登陆</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tel: "18733678267",
            codeing: "",
            msg: "发送验证码",
            times: 10,
            active: false,
        };
    },
    methods: {
        getCode() {
            this.$http
                .post("/api/code", {
                    tel: this.tel,
                })
                .then(res => {
                    console.log(res);

                    if (res.data.code == 0) {
                        this.codeing = res.data.data;
                        console.log(res.data);
                        // -------------------------------------------------------

                        let dsq = setInterval(() => {
                            this.active = true;
                            --this.times;
                            console.log(this.times);
                            this.msg = this.times + "s后重新发送";
                            if (this.times <= 0) {
                                this.msg = "发送验证码";
                                this.times = 10;
                                this.active = false;
                                clearInterval(dsq);
                            }
                        }, 1000);
                    } else {
                        alert("错误");
                    }
                });
        },
        longing() {
            this.$http
                .post("/api/login", {
                    tel: this.tel,
                    codeding: this.codeing,
                })
                .then(res => {
                    console.log(res.data);
                });
        },
    },
};
</script>

<style>
button {
    pointer-events: auto;
}
.active {
    background: red;
    pointer-events: none;
}
</style>
