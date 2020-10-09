import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //类似于data 存放数据
        name: "小黑",
        lists: ["da", "er", "san"],
        index: 1,
    },
    getters: {
        //派生状态
        son(state) {
            return state.lists[state.index];
        },
    },
    mutations: {
        setindex(state, val) {
            state.index = val;
        },
        setname(state, val) {
            state.name = val;
        },
    },
    actions: {
        setni({commit},list) {
          commit("setindex",list.index);
          commit("setname", list.name);

        },
    },
    modules: {},
});
