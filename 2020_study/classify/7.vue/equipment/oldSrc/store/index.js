import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: '',
        permissions: [],
        preStatusList: [], // 设备登记的状态
        equipStatusList: [], // 设备列表状态
        categoryList: [] // 设备分类
    },
    getters: {
        preStatusObj: state => {
            let obj = {};
            state.preStatusList.forEach(item => {
                obj[item.id] = item;
            });
            return obj;
        },
        equipStatusObj: state => {
            let obj = {};
            state.equipStatusList.forEach(item => {
                obj[item.id] = item;
            });
            return obj;
        },
        categoryObj: state => {
            let obj = {};
            state.categoryList.forEach(item => {
                obj[item.id] = item;
            });
            return obj;
        }
    },
    mutations: {
        setUsername(state, val) {
            state.username = val;
        },
        setPermissions(state, list) {
            state.permissions = list;
        },
        setPreStatusList(state, list) {
            state.preStatusList = list;
        },
        setEquipStatusList(state, list) {
            state.equipStatusList = list;
        },
        setCategoryList(state, list) {
            state.categoryList = list;
        },
    }
});
