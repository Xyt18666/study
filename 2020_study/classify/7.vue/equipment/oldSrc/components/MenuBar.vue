<template lang="pug">
.menu-bar
    ul
        li(
            v-for="(d, i) in permissionNavList"
            :key="i"
        )
            router-link(:to="d.url") {{ d.label }}
</template>

<script>
export default {
    data() {
        return {
            navList: [{
                label: '系统概览',
                url: '/main/overview'
            }, {
                label: '设备登记',
                url: '/main/register'
            }, {
                label: '设备管理',
                url: '/main/management'
            }, {
                label: '数据字典',
                url: '/main/dictionary'
            }]
        }
    },
    computed: {
        permissionNavList() {
            // ES6数组的filter方法
            return this.navList.filter(item => {
                // 先取navList每一项里面的url的最后一个/后面的内容
                const pStr = item.url.substr(item.url.lastIndexOf('/') + 1);
                // 从state.permissions里面找，是否存在上面的pStr
                return this.$store.state.permissions.indexOf(pStr) > -1;
            });
        }
    }
};
</script>

<style lang="sass">
.menu-bar
    width: 190px
    height: calc(100vh - 60px)
    background: #2C405A
    ul
        padding: 15px 10px
    a
        display: block
        line-height: 42px
        padding: 0 15px
        border-radius: 4px
        color: #fff
        font-size: 16px
        transition: background .3s
        &.router-link-active
            background: #3F536E
</style>
