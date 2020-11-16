import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// const KEY = "store";
// const set = val => {
//     window.localStorage.setItem(KEY, JSON.stringify(val));
// };
// const get = () => {
//     return JSON.parse(window.localStorage.getItem(KEY) || "[]");
// };

export default new Vuex.Store({
    state: {
        data: localStorage.getItem("datas") || "",
    },
    mutations: {
        setData(state, val) {
            state.data = val;
            localStorage.setItem("datas", state.data);
        },
    },
    actions: {},
    modules: {},
});
