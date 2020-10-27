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
                            placeholder='电话'
                        )
                    .con
                        label
                            input(
                                placeholder='验证码'
                            )
                        .sendMsg 发送验证码


                .password-from(v-show="type=='passwprd'")
                    label
                        input(
                            placeholder='用户名'
                        )
                    label
                        input(
                            placeholder='密码'
                        )

                button 登陆

</template>

<script>
export default {
  data() {
    return { type: "sms" };
  }
};
</script>

<style lang="sass">
.active
    border-bottom: 2px solid #0f0
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
