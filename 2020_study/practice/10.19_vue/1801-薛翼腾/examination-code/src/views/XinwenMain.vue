<template>
    <div class="main">
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>

        <ul>
            <li v-for="(item, index) in list" :key="index" @click="toList(item)">{{ item }}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ["A", "B", "C"],
        };
    },
    methods: {
        toList(d) {
            this.$router.push({
                name: "XiwenList",
                params: { type: d },
            });
        },
    },
};
</script>

<style>
.banner {
    width: 100vw;
    overflow: hidden;
}
.van-swipe__track {
    display: flex;
}
.van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
</style>
