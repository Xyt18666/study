<template lang="pug">
.nav-box
    ul
        li(
            v-for="item,index in navList"
            :key="index"
            :class="item.icon"
            )   
            router-link(
                :to="item.url"
            ) {{item.name}}


</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    name: "首页",
                    url: "/home",
                    icon: "homeImg",
                },
                {
                    name: "歌手",
                    url: "/singer",
                    icon: "singerImg",
                },
                {
                    name: "搜索",
                    url: "/search",
                    icon: "searchImg",
                },
                {
                    name: "我的",
                    url: "/user",
                    icon: "userImg",
                },
            ],
        };
    },
};
</script>

<style lang="sass" scoped>
ul
    height: 0.3rem
    margin: 0
    padding: 0
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 0.2rem
    li
        height: 0.3rem
        opacity: 0.6
        background-size: 0.2rem 0.2rem
        background-repeat: no-repeat
        padding-left: 0.21rem
        background-position: 0 0.05rem
        &.homeImg
        background-image: url(~@/assets/images/icon-home.png)
        &.singerImg
            background-image: url(~@/assets/images/icon-singer.png)
        &.searchImg
            background-image: url(~@/assets/images/icon-search.png)
        &.userImg
            background-image: url(~@/assets/images/icon-user.png)
        a
            height: 0.3rem
            display: block
            height: 0.3rem
            line-height: 0.3rem
            font-size: 0.14rem
            color: #fff
</style>
