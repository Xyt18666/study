<template lang="pug">
.tab-card-container
    router-link.tab-item(
        v-for="(d, i) in tabList",
        :key="i",
        :class="[d.link.substring(1)]",
        tag="div",
        :to="d.link"
    ) {{ d.label }}
</template>

<script>
export default {
    data() {
        return {
            tabList: [{
                label: '首页',
                link: '/home'
            }, {
                label: '歌手',
                link: '/singer'
            }, {
                label: '搜索',
                link: '/search'
            }, {
                label: '我的',
                link: '/user'
            }]
        };
    },
    methods: {
        getIcon(str) {
            return `@/assets/img/icon-${str.substring(1)}.png`;
        }
    }
};
</script>

<style lang="sass" scoped>
.tab-card-container
    display: flex
    justify-content: space-between
    height: 30px
    padding: 0 20px
    .tab-item
        line-height: 30px
        padding-left: 22px
        background-repeat: no-repeat
        background-position: left center
        background-size: 20px
        font-size: 14px
        opacity: .6
        &.router-link-active
            opacity: 1
            transition: opacity .3s
        &.home
            background-image: url(~@/assets/img/icon-home.png)
        &.singer
            background-image: url(~@/assets/img/icon-singer.png)
        &.search
            background-image: url(~@/assets/img/icon-search.png)
        &.user
            background-image: url(~@/assets/img/icon-user.png)
</style>
