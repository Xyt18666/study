import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sectionName: "发现",
    userAvatarImgUrl:
      "https://img.nga.178.com/attachments/mon_202004/02/g6Q5-bt6yK2ToS3w-46.jpg",
    globalPlayerIsShow: false,
    playerIsShow: false,
    currentMusic: null,
    playerData: {
      value: 0,
      total: 0,
      curr: 0,
      duration: 0,
      currentTime: 0,
      isplay:false
    },
  },
  mutations: {
    setSectionName(state, val) {
      state.sectionName = val;
    },
    setGlobalPlayerIsShow(state, val) {
      state.globalPlayerIsShow = val;
    },
    setPlayerIsShow(state, val) {
      state.playerIsShow = val;
    },
    setCurrentMusic(state, val) {
      state.currentMusic = val;
    },
    setPlayerData(state, val) {
      state.playerData = val;
    },
  },
  actions: {},
  modules: {},
});
