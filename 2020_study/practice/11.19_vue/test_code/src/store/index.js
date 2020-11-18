import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {
        // tersData: state => {
        //     let obj = {};
        //     state.preStatusList.forEach(item => {
        //         obj[item.id] = item;
        //     });
        //     return obj;
        // }
    },
    mutations: {
        // setUsername(state, val) {
        //     state.username = val;
        // },
    },
    actions: {
        // setHitList({ commit }, list) {
        //     commit("setHitList", list);
        // },
    },
    modules: {},
});
