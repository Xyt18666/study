import { createStore } from "redux";
//引入 redux

import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// 我要对哪些 reduce 的 state 做数据持久化
const persistConfig = {
    key: "root",
    storage: storageSession,
    stateReconciler: autoMergeLevel2,
};

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

// const store = createStore(reducer);
//创建商店
const myPersistReducer = persistReducer(persistConfig, reducer);

const store = createStore(myPersistReducer);

export const persistor = persistStore(store);

export default store;
//导出商店
