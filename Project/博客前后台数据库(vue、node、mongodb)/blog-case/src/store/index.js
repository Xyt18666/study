import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import admin from "./model/administration";
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
    vuexTest: [
      {
        title: "任务一",
        isComplete: false,
      },
      {
        title: "任务二",
        isComplete: true,
      },
      {
        title: "任务三",
        isComplete: true,
      },
      {
        title: "任务四",
        isComplete: false,
      },
    ],
  },
  getters: {
    overActive: (state) => {
      return state.vuexTest.filter((d) => d.isComplete);
    },
    noteActive: (state) => {
      return state.vuexTest.filter((d) => !d.isComplete);
    },
  },
  mutations: {
    setVuexTest(state, val) {
      state.vuexTest = val;
    },

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
  modules: {
    admin: admin,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
