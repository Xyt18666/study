import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const KEY = "gou_wu_che";
const set = val => {
    window.localStorage.setItem(KEY, JSON.stringify(val));
};
const get = () => {
    return JSON.parse(window.localStorage.getItem(KEY) || "[]");
};

export default new Vuex.Store({
    state: {
        isBlock: false,
        isShowSTort: false,
        stort: get(),
        list: [
            {
                id: 1,
                pic: require("../assets/data/1.png"),
                price: 20,
                text: "店长",
                count: 1,
            },
            {
                id: 2,
                pic: require("../assets/data/2.png"),
                price: 20,
                count: 1,
                text: "咖啡",
            },
            {
                id: 3,
                pic: require("../assets/data/1.png"),
                price: 30,
                count: 1,
                text: "奶茶",
            },
            {
                id: 4,
                pic: require("../assets/data/2.png"),
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
        removeItem(state, val) {
            state.stort.map((item, index) => {
                if (item.id == val) {
                    state.stort.splice(index, 1);
                }
            });
            set(state.stort);
        },
        clearStortItem(state, val) {
            // let isTrue = state.stort.some(item => item.id == val.id);
            let indexs = state.stort.findIndex(item => item.id == val.id);
            if (indexs < 0) {
                console.log("购物车至少有一件");
            } else {
                // state.stort.map((item, index) => {
                // if (item.id == val.id) {
                //     let count = state.stort[index].count;
                //     count = count <= 1 ? 1 : --count;
                //     state.stort[index].count = count;
                // }

                // });
                let count = state.stort[indexs].count;
                state.stort[indexs].count = count <= 1 ? 1 : --count;
            }
            set(state.stort);
        },
        pushStortItem(state, val) {
            // let isTrue = state.stort.some(item => item.id == val.id);
            let indexs = state.stort.findIndex(item => item.id == val.id);

            if (indexs < 0) {
                state.stort.push(val);
            } else {
                // state.stort.map((item, index) => {
                //     if (item.id == val.id) {
                //         state.stort[index].count = ++state.stort[index].count;
                //     }
                // });
                state.stort[indexs].count++;
            }
            set(state.stort);
        },
    },
    actions: {
        //  setHitList({ commit }, list) {
        //       commit("setHitList", list);
        //   },
    },
    modules: {},
});
