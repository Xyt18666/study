import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; //引入 axios

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        zsc: 0,
        daqsc: 0,
        pleraIsBlock: false,
        bannerLoading: true,
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
        listenRecentlyList: [
            {
                id: 11,
                song: "4646",
                singer: "asdad",
                album: "okpmo",
            },
            {
                id: 1122,
                song: "464622",
                singer: "asdad22",
                album: "okpmo22",
            },
        ],
        myCollection: [
            {
                id: 11,
                song: "4646",
                singer: "asdad",
                album: "okpmo",
            },
            {
                id: 1122,
                song: "464622",
                singer: "asdad22",
                album: "okpmo22",
            },
        ],
        playList: [],
        playIndex: 0,
    },
    mutations: {
        setZsc(state, val) {
            state.zsc = val;
        },
        setDaqsc(state, val) {
            state.daqsc = val;
        },
        setplayIndex(state, val) {
            state.playIndex = val;
        },
        clearplayList(state, val) {
            state.playList.splice(val, 1);
        },
        setplayList(state, val) {
            state.playList.unshift(val);
            state.playList = [...new Set(state.playList)];
        },

        setPleraIsBlock(state, val) {
            state.pleraIsBlock = val;
        },
        setBannerLoading(state, val) {
            state.bannerLoading = val;
        },
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

        async getMiniPlaer({ commit }) {
            let d = await axios.get("hit-single-list");
            commit("setHitList", d.data);

            commit("setplayList", d.data[0]);
        },
        async setSliderList({ commit }) {
            let sliderList = await axios.get("slider-list");
            commit("setSliderListMsg", sliderList.data);
        },
    },
    modules: {},
});
