import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isBlock:false,
    isShowSTort:false,
    stort:[],
    list: [
      {
        id: 1,
        pic: "../assets/data/1.png",
        price: 20,
        text: "店长",
        count: 1,
      },
      {
        id: 2,
        pic: "../assets/data/2.png",
        price: 20,
        count: 1,
        text: "咖啡",
      },
      {
        id: 3,
        pic: "../assets/data/1.png",
        price: 30,
        count: 1,
        text: "奶茶",
      },
      {
        id: 4,
        pic: "../assets/data/2.png",
        price: 40,
        count: 1,
        text: "其他",
      },
    ],
  },
  mutations: {
      setIsBlock(state, val) {
            state.isBlock = val;
        },
      setIsShowSTort(state, val) {
          state.isShowSTort = val;
      },
      pushStortItem(state, val){
        state.stort.push(val)
      }
  },
  actions: {
      //  setHitList({ commit }, list) {
      //       commit("setHitList", list);
      //   },
  },
  modules: {
  }
})
