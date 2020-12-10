import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainList: null,
    homeList: null,
    isPage: true,
    allData: null,
    userId: null,
    section: null,
    listindex: null,
  },
  mutations: {
    setMainList(state, val) {
      state.mainList = val;
    },
    setHomeList(state, val) {
      state.homeList = val;
    },
    setAllData(state, val) {
      state.allData = val;
    },
    setIsPage(state, val) {
      state.isPage = val;
    },
    setUserId(state, val) {
      state.userId = val;
    },
    setSection(state, val) {
      state.section = val;
    },
    setListIndex(state, val) {
      state.listindex = val;
    },
  },
  actions: {
    //   xx({commit},val){
    //     commit(setxx,val)
    //   }
  },
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
