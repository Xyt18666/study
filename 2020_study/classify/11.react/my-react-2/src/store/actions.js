import { ADD, SET_VAL } from "./actionTypes";

export const add = () => ({
    type: ADD,
});

export const setVal = val => ({
    type: SET_VAL,
    val,
});

export const getData = () => {
    console.log(213);

    return dispatch => {
        console.log(789);

        // axios请求
        const action = setVal(999);
        //请求结果调用 action

        dispatch(action);
        // 通过中间键调用dispatch存储到redux
    };
};
