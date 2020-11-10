<template>
    <div class="in">
        <h1>in{{ $route.params.id }}</h1>
        <ul>
            <li v-for="(item, index) in lists" :key="index">
                <p>title{{ item.title }}</p>
                <p @click="isLick(index, $event)">like{{ item.like }}</p>
            </li>
        </ul>
        <div class="con" v-show="show">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["isLongin"]),
    },
    methods: {
        onSubmit() {
            console.log("submit", this.username, this.password);
        },
        isLick(i, e) {
            console.log(i, e);
            if (this.isLongin) {
                if (!this.lists[i].isLick) {
                    this.lists[i].like += 1;
                    this.lists[i].isLick = true;
                } else {
                    this.lists[i].like -= 1;
                    this.lists[i].isLick = false;
                }
            } else {
                console.log("弹出登陆组件");
                this.show = true;
            }
        },
    },
    data() {
        return {
            show: false,
            username: "",
            password: "",
            lists: [
                {
                    title: "aaa",
                    like: 0,
                    isLike: false,
                },
                {
                    title: "aaa222",
                    like: 0,
                    isLike: false,
                },
                {
                    title: "aaa3333",
                    like: 0,
                    isLike: false,
                },
            ],
            llist1: [
                {
                    title: "aaa",
                    like: 0,
                    isLike: false,
                },
                {
                    title: "aaa222",
                    like: 0,
                    isLike: false,
                },
                {
                    title: "aaa3333",
                    like: 0,
                    isLike: false,
                },
            ],
            list2: [
                {
                    title: "aaa000000000000000000000",
                    like: 0,
                    isLike: false,
                },
                {
                    title: "aaa222000000000000",
                    like: 0,
                    isLike: false,
                },
                {
                    title: "aaa333300000000000",
                    like: 0,
                    isLike: false,
                },
            ],
        };
    },
    watch: {
        $route() {
            console.log("改变了，重新调用接口");
            console.log(this.$route.params.id);
            this.$route.params.id === 1 ? (this.lists = this.list1) : (this.lists = this.list2);
        },
    },
};
</script>

<style>
.con {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
}
</style>
