import React from "react";
import ShowArea from "./showArea";
import Buttons from "./buttons";
// 引入2个子组件

import { Color } from "./color";
// 引入父组件

function CheckColor() {
    return (
        <div>
            {/* 父组件 */}
            <Color>
                <ShowArea></ShowArea>
                <Buttons></Buttons>
                {/* 子组件 ,以插槽方式写入 */}
            </Color>
        </div>
    );
}

export default CheckColor;
