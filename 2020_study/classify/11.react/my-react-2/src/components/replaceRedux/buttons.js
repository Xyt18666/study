import React, { useContext } from "react";
// 获取属性函数


import { ColorContext, UPDATE_COLOR } from "./color";
// 获取属性组件，修改颜色方法常量

function Buttons() {
    const { dispatch } = useContext(ColorContext);
    // 获取修改方法


    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: "UPDATE_COLOR", color: "red" });
                }}
            >
                {/* 通过dispatch修改 */}
                 red
            </button>
            <button
                onClick={() => {
                    dispatch({ type: UPDATE_COLOR, color: "yellow" });
                }}
            >
                yello
            </button>
        </div>
    );
}
export default Buttons;
