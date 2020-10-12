import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; //引入 axios

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        musicListIsShow: false,
        hitList: null,
        playing: false,
        clearHotIsShow: false,
        miniPlaer: {
            songImgurl: null,
            songTitle: null,
            songName: null,
            songUrl: null,
        },
        sliderListMsg: null,
    },
    mutations: {
        setSliderListMsg(state, val) {
            state.sliderListMsg = val;
        },
        setMusicListShow(state, val) {
            state.musicListIsShow = val;
        },
        setHitList(state, val) {
            state.hitList = val;
        },
        setMiniPlaer(state, val) {
            state.miniPlaer = val;
        },
        setPlaying(state, val) {
            state.playing = val;
        },
        setClearHotIsShow(state, val) {
            state.clearHotIsShow = val;
        },
        clearItem(state, val) {
            state.hitList.map((item, index) => {
                if (item.id == val) {
                    state.hitList.splice(index, 1);
                }
            });
        },
    },
    actions: {
        setHitList({ commit }, list) {
            commit("setHitList", list);
        },
        async setSliderList({ commit }) {
            let sliderList = await axios.get("/api/slider-list");
            commit("setSliderListMsg", sliderList);
        },
    },
    modules: {},
});
