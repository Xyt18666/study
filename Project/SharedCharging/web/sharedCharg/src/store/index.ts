import { createStore } from "vuex";

import { state } from "./state";

export default createStore({
    state,
    mutations: {
        setSize(state, val) {
            state.size = val;
        },
        setTitle(state, val) {
            state.title = val;
        },
    },
    actions: {
        setAll({ commit }, list) {
            commit("setSize", list.size);
            commit("setTitle", list.title);
        },
    },
    modules: {},
});
