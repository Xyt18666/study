<template>
    <div class="login">
        <div class="info">
            <h1 class="logo">M</h1>

            <van-cell-group>
                <van-field v-model="tel" label="电话号码" />
            </van-cell-group>
            <van-field
                v-model="code"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
            >
                <template #button>
                    <van-button size="small" type="primary">发送验证码</van-button>
                </template>
            </van-field>
            <van-button class="log" block @click="toHome">登陆</van-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    setup(props) {
        const tel = ref("");
        const code = ref("");
        const router = useRouter();
        const toHome = () => {
            router.push({
                path: "/",
                query: {
                    isLog: "true",
                },
            });
        };

        return { tel, code, toHome };
    },
});
</script>
<style>
.van-cell.van-field {
    background-color: rgb(20, 184, 244);
}
.van-cell.van-field span {
    color: #fff;
}
</style>

<style lang="scss">
.login {
    width: 100%;
    height: 100vh;
    background: rgb(20, 184, 244);
}
.logo {
    font-size: 80px;
    text-align: center;
    color: #fff;
    padding-top: 100px;
}
.info {
    width: 100%;
    height: 100%;
}
.log {
    background: rgb(20, 184, 244);
    color: #fff;
    border: none;
}
</style>
