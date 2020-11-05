import * as types from './types.js';

const mutations = {
    [types.SET_FULLSCREEN](state, val) {
        state.fullscreen = val;
    },
    [types.SET_PLAY_MODE](state, val) {
        state.mode = val;
    },
    [types.SET_PLAYING_STATE](state, val) {
        state.playing = val;
    },

    [types.SET_PLAYLIST](state, val) {
        state.playlist = val;
    },
    [types.SET_ORIGINAL_LIST](state, val) {
        state.originalList = val;
    },
    [types.SET_CURRENT_INDEX](state, val) {
        state.currentIndex = val;
    },

    [types.SET_PLAY_HISTORY](state, val) {
        state.playHistory = val;
    },
    [types.SET_FAVORITE_LIST](state, val) {
        state.favoriteList = val;
    }
};

export default mutations;
