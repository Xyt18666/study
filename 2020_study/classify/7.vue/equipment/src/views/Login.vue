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
                    <el-input v-model="phones" placeholder="用户名"></el-input>
                        
                    .con
                        label
                          <el-input v-model="codes" placeholder="用户名"></el-input>
                           
                        button.sendMsg(
                            @click="sendCode"
                       
                            :class="[loding?'loading':'',!phones?'loading':'']"
                        ) 发送验证码
                        .time {{time}}


                .password-from(v-show="type=='passwprd'")
                    label
                        <el-input v-model="usernames" placeholder="用户名"></el-input>
                    label
                       <el-input v-model="passwords" type="password" placeholder="密码"></el-input>

                <el-button type="primary" @click="login">登陆</el-button>
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
      phones: "13800138002",
      codes: "654321",
      usernames: "wangerxiao",
      passwords: "Qwe123",
      time: 3,
      loding: false
    };
  },
  methods: {
    resizeChart() {
      this.$refs.status.resize();
      this.$refs.category.resize();
    },
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
      let { type, phones, codes, usernames, passwords } = this;
      let params = {
        type
      };

      if (this.type == "sms") {
        params.phone = phones;
        params.code = codes;
      } else if (this.type == "passwprd") {
        params.username = usernames;
        params.password = passwords;
      }
      console.log(params);

      this.$http.post("equipment/login", params).then(res => {
        console.log(params);

        console.log(res);
        this.$router.push({
          name: "Main"
        });
      });

      // for (let item of Object.values(params)) {
      //   console.log(item);

      //   if (!item) {
      //     console.log("请填写完整参数");
      //     return;
      //   } else {
      //     console.log(params);

      //     this.$http.post("equipment/login", params).then(res => {
      //       console.log(res);
      //       this.$router.push({
      //         name: "Main"
      //       });
      //     });
      //   }
      // }
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
