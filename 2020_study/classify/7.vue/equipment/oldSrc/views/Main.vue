<template lang="pug">
.main-wrapper
    template(v-if="isLogin")
        top-header
        .main
            menu-bar
            .content
                router-view
</template>

<script>
import axios from 'axios';
import TopHeader from '@/components/TopHeader.vue';
import MenuBar from '@/components/MenuBar.vue';

export default {
    components: { TopHeader, MenuBar },
    data() {
        return {
            isLogin: false
        }
    },
    methods: {
        getBaseInfo() {
            return Promise.all([
                axios.get('/equipment/status-list?type=pre'),
                axios.get('/equipment/status-list?type=equip'),
                axios.get('/equipment/category-list')
            ]).then(rsp => {
                const preStatusList = rsp[0].data.data;
                const equipStatusList = rsp[1].data.data;
                const categoryList = rsp[2].data.data;
                this.$store.commit('setPreStatusList', preStatusList);
                this.$store.commit('setEquipStatusList', equipStatusList);
                this.$store.commit('setCategoryList', categoryList);
            });
        },
        who() {
            // { data }解构赋值，从axios封装的数据中取服务器的数据
            axios.get('/equipment/who').then(({ data }) => {
                if (!data.code) {
                    this.$store.commit('setUsername', data.data.name);
                    this.$store.commit('setPermissions', data.data.permissions);
                    this.getBaseInfo().then(() => {
                        this.isLogin = true;
                    });
                } else {
                    this.$router.push('/login');
                }
            });
        }
    },
    created() {
        this.who();
    }
    // watch: {
    //     '$route'(route) {
    //         console.log(route);
    //     }
    // }
};
</script>

<style scoped lang="sass">
.content
    position: fixed
    top: 60px
    right: 0
    bottom: 15px
    left: 210px
    overflow: scroll
</style>
