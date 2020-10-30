import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userData: null,
    size: 111
  },
  getters: {},
  mutations: {
    setUserData(state, val) {
      state.userData = val;
    }
  },
  actions: {}
});

export default store;
