<template lang="pug">
    .login
        .l 
            h1  
                | 欢迎使用 
                br
                | 北工商管理系统
        .r
            ul
                li(
                    @click="type='sms'"
                    :class="type=='sms'?'active':''"
                    ) 短信登陆
                li(
                    @click="type='passwprd'"
                    :class="type=='passwprd'?'active':''"

                    ) 密码登陆
            .form
                .sms-from(v-show="type=='sms'")
                    label
                        input(
                            placeholder='13800138001'
                            v-model="phones"
                        )
                    .con
                        label
                            input(
                                placeholder='654321'
                                v-model="codes"
                            )
                        button.sendMsg(
                            @click="sendCode"
                       
                            :class="[loding?'loading':'',!phones?'loading':'']"
                        ) 发送验证码
                        .time {{time}}


                .password-from(v-show="type=='passwprd'")
                    label
                        input(
                            placeholder='用户名'
                            v-model="usernames"
                        )
                    label
                        input(
                            placeholder='密码'
                            v-model="passwords"

                        )

                button(@click="login") 登陆
            p {{phones}} -- {{codes}}
            p {{usernames}} -- {{passwords}}
            
            .datas
                | 系统管理员
                | 测试账号：lidazhao
                | 密码：Qwe123
                | 手机：13800138001
                | 验证码：654321
                | 设备管理员
                | 测试账号：wangerxiao
                | 密码：Qwe123
                | 手机：13800138002
                | 验证码：654321


</template>

<script>
export default {
  data() {
    return {
      type: "sms",
      phones: "13800138001",
      codes: "654321",
      usernames: "",
      passwords: "",
      time: 3,
      loding: false
    };
  },
  methods: {
    sendCode() {
      if (!/^\d{11}$/.test(this.phones)) {
        console.log("手机号码有误，请重填");
        return false;
      } else {
        this.loding = true;
        let interval = setInterval(() => {
          --this.time;
          if (this.time <= 0) {
            this.loding = false;
            this.time = 3;
            clearInterval(interval);
          }
        }, 1000);
      }
    },

    login() {
      console.log(
        this.type,
        this.phones,
        this.codes,
        this.usernames,
        this.passwords
      );
      let { type, phones, codes, usernames, passwords } = this;
      let params = {
        type
      };

      if (this.type == "sms") {
        params.phone = phones;
        params.code = codes;
        // if (!this.phones || !this.codes) {
        //   console.log("请填写完整参数");
        // } else {
        //   this.$http
        //     .post("equipment/login", {
        //       type: this.type,
        //       phone: this.phones,
        //       code: this.codes
        //     })
        //     .then(res => {
        //       // this.$router.push({
        //       //   name: "",
        //       //   params: {}
        //       // });
        //     });
        // }
      } else if (this.type == "passwprd") {
        params.username = usernames;
        params.password = passwords;
        // if (this.usernames || this.passwords) {
        //   console.log("请填写完整参数");
        // } else {
        //   this.$http
        //     .post("equipment/login", {
        //       type: this.type,
        //       username: this.usernames,
        //       password: this.passwords
        //     })
        //     .then(res => {
        //       console.log(res);
        //     });
        // }
      }

      for (let item of Object.values(params)) {
        console.log(item);

        if (!item) {
          console.log("请填写完整参数");
          return;
        } else {
          console.log(params);

          this.$http.post("equipment/login", params).then(res => {
            console.log(res);
            this.$router.push({
              name: "Main"
            });
          });
        }
      }
    }
  }
};
</script>

<style lang="sass">
.active
    border-bottom: 2px solid #0f0
.sendMsg.loading
    pointer-events: none
    background: red
.sendMsg
    background: #0f0
.login
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: url(~@/assets/images/login-bg.png) no-repeat center
    background-size: cover
    .l
        height: 80%
        h1

    .r
        position: fixed
        width: 900px
        height: 500px
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
</style>
