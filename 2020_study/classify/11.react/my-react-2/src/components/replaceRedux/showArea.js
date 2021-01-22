// 展示颜色的一个标签组件

import React, { useContext } from "react";
// 引入使用共享数据函数

import { ColorContext } from "./color";
// 获取属性共享组件

function ShowArea() {
    let { color } = useContext(ColorContext);
    // 获取数据

    return <div style={{ color: color }}>字体颜色</div>;
    // 绑定动态属性
}

export default ShowArea;
