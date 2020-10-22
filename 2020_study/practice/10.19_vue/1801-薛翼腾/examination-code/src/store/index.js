import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isBlock: false,
        isShowSTort: false,
        stort: [],
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
        pushStortItem(state, val) {
            // state.stort = [...new Set(state.stort.push(val))];
            // console.log(state.stort.indexOf(val));
            if (state.stort.indexOf(val) == -1) {
                state.stort.push(val);
            } else {
                state.stort.map((item, index) => {
                    if (item.id == val.id) {
                        state.stort.splice(index, 1);
                        val.count++;
                        state.stort.push(val);
                    }
                });
            }
            // let lc = window.localStorage;

            // let stores = JSON.parse(lc.getItem("stort")) || [];
            // console.log(stores);

            // let istrue = stores.map((item, index) => {
            //     console.log(item.id, val.id);
            //     if (item.id == val.id) {
            //         return [true, index];
            //     }
            // });

            // if (!istrue[0]) {
            //     stores.push(val);
            // } else {
            //     stores.splice(istrue[1], 1);

            //     stores.push(val);
            // }

            // lc.setItem("stort", JSON.stringify(stores));
        },
    },
    actions: {
        //  setHitList({ commit }, list) {
        //       commit("setHitList", list);
        //   },
    },
    modules: {},
});
