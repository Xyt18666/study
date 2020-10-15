import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import * as getters from './getters.js';
import mutations from './mutations.js';
import * as actions from './actions.js';
import logger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: debug,
    plugins: debug ? [logger()] : []
});
