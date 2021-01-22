import React, { createContext, useReducer } from "react";
// 引入 创建 上下文函数 , 属性方法管理

export const ColorContext = createContext();
// 创建实例

export const UPDATE_COLOR = "UPDATE_COLOR";
// 定义常量

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color;
        default:
            return state;
    }
};
// 定义 reducer

export const Color = props => {
    const [color, dispatch] = useReducer(reducer, "blue");
    // 创建 reducer

    return (
        <ColorContext.Provider value={{ color, dispatch }}>{props.children}</ColorContext.Provider>
        // 将颜色 和 修改颜色的方法暴露出去
    );
};
// props.children 用于传不定子组件，也就是插槽
