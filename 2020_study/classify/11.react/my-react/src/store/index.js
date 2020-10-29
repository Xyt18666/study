import { createStore } from "redux";
//引入 redux

// let actionFn = {
//     add: function (state, action) {
//         state.num++;
//         return state;
//     },
//     dec: function (state, action) {
//         state.num--;
//         return state;
//     },
// };

let states = { num: 0 };
//所有数据

function reducer(state = states, action) {
    //所有修改数据的方法
    switch (action.type) {
        case "add":
            state.num++;
            break;
        case "dec":
            state.num--;
            break;
        default:
            break;
    }

    // if (action.type.indexOf("redux" === -1)) {
    //     console.log(action.type);

    //     // console.log(actionFn[action.type]);

    //     // state = actionFn[action.type](state, action);

    //     return { ...state };
    // } else {
    //     return state;
    // }
    return { ...state };
}

const store = createStore(reducer);
//创建商店

export default store;
//导出商店
