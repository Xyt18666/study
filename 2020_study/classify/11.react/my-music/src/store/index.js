import { createStore } from "redux";
let states = {
    songList: [],
    copySongList: [],
    mucisActive: { url: "?????" },
};

function reducer(state = states, action) {
    //所有修改数据的方法
    switch (action.type) {
        case "setSongList":
            state.songList = action.data;
            break;
        case "setCopySongList":
            state.copySongList = action.data;
            break;
        case "setMucisActive":
            state.mucisActive = action.data;
            break;
        default:
            break;
    }
    return { ...state };
}

const store = createStore(reducer);

export default store;
