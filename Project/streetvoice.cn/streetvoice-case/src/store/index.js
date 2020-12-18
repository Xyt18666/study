import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sectionName: "发现",
    userAvatarImgUrl:
      "https://img.nga.178.com/attachments/mon_202004/02/g6Q5-bt6yK2ToS3w-46.jpg",
  },
  mutations: {
    setSectionName(state, val) {
      state.sectionName = val;
    },
  },
  actions: {},
  modules: {},
});
