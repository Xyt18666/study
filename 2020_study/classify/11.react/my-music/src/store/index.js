import { createStore } from "redux";
let states = { num: 0 };

function reducer(state = states, action) {
    //所有修改数据的方法
    switch (action.type) {
        // case "add":
        //     state.num++;
        //     break;
        // case "dec":
        //     state.num--;
        //     break;
        default:
            break;
    }
    return { ...state };
}

const store = createStore(reducer);

export default store;
