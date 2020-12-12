<template>
    <div class="home">
        <div class="button_box">
            <div class="register" @click="isBlock = 1" :class="isBlock == 1 ? 'active' : null">
                注册
            </div>
            <div class="longin" @click="isBlock = 2" :class="isBlock == 2 ? 'active' : null">
                登陆
            </div>
        </div>
        <div class="main">
            <div class="register_box" v-show="isBlock == 1">
                <label>
                    账号
                    <input type="text" v-model="rUserNmae" />
                </label>
                <label>
                    密码
                    <input type="text" v-model="rPassWord" />
                </label>
                <div class="register_button" @click="toRegister">注册</div>
            </div>
            <div class="longin_box" v-show="isBlock == 2">
                <label>
                    账号
                    <input type="text" v-model="userNmae" />
                </label>
                <label>
                    密码
                    <input type="text" v-model="passWord" />
                </label>
                <div class="longin_button" @click="toLongin">登陆</div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    data() {
        return {
            isBlock: 1,
            rUserNmae: 18733678267,
            rPassWord: 123456,
            userNmae: 18733678267,
            passWord: 123456,
        };
    },
    methods: {
        toRegister() {
            this.$http
                .post("http://localhost:8088/api/register", {
                    rUserNmae: this.rUserNmae,
                    rPassWord: this.rPassWord,
                })
                .then(d => {
                    console.log(d);
                    if (d.data.code == 0) {
                        setTimeout(() => {
                            this.toLongin();
                        }, 1000);
                    } else {
                        console.log("注册失败");
                    }
                });
        },
        toLongin() {
            this.$http
                .post("http://localhost:8088/api/longin", {
                    rUserNmae: this.userNmae,
                    rPassWord: this.passWord,
                })
                .then(d => {
                    this.$router.push({
                        name: "home",
                        params: d.data,
                    });
                    console.log(d);
                });
        },
    },
};
</script>
<style lang="sass" scoped>
.home
  width: 600px
  height: 400px
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  background: #fff
  .button_box
    display: flex
    justify-content: space-between
    div
      height: 50px
      line-height: 50px
      text-align: center
      flex: 1
      &.active
        background: #0f0
  .main
    div
      display: flex
      flex-flow: column wrap
      label
        display: block
        margin: 20px auto
      div
        width: 160px
        height: 50px
        line-height: 50px
        border-radius: 50px
        background: #0f0
        text-align: center
        margin: 20px auto
</style>
