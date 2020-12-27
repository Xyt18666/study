import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; //引入 axios
import Lyric from "lyric-parser";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sectionName: "发现",
    userAvatarImgUrl:
      "https://img.nga.178.com/attachments/mon_202004/02/g6Q5-bt6yK2ToS3w-46.jpg",
    globalPlayerIsShow: false,
    playerIsShow: false,
    currentMusic: "",
    playerData: {
      value: 0,
      total: 0,
      curr: 0,
      duration: 0,
      currentTime: 0,
      isplay: false,
      musicUrl: "",
      lyric: "",
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
    setPlayerDataMusicUrl(state, val) {
      state.playerData.musicUrl = val;
    },
    setPlayerDataLyric(state, val) {
      state.playerData.lyric = val;
    },
    setPlayerDataIsplay(state, val) {
      state.playerData.isplay = val;
    },
    setPlayerDataCurrentTime(state, val) {
      state.playerData.currentTime = val;
    },
    setPlayerDataTotal(state, val) {
      state.playerData.total = val;
    },
    setPlayerDataDuration(state, val) {
      state.playerData.duration = val;
    },
    setPlayerDataValueAndCurr(state, val) {
      state.playerData.value = val.value;
      state.playerData.curr = val.curr;
    },
  },
  actions: {
    async getMusicUrl({ commit }, d) {
      let msg = await axios.get("http://localhost:3000/song/url?id=" + d.id);
  
      commit("setPlayerDataMusicUrl", msg.data.data[0]);

      commit("setPlayerIsShow", true);
    },
    async getLyric({ commit }, d) {
      let msg = await axios.get("http://localhost:3000/lyric?id=" + d.id);
      let lyric = new Lyric(msg.data.lrc.lyric);


      commit("setPlayerDataLyric", lyric);
    },
    async setCurrentMusicAction({ commit }, d) {
      commit("setCurrentMusic", d);
    },
  },
  modules: {},
});
