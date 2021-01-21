import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
//引入 react-redux

import Store from "./store/index";
//引入 数据商店

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
// 引入数据持久插件

ReactDOM.render(
    <Provider store={Store}>
        {/* 使用 Provider 包裹 项目根组件，实现数据刷新 绑定 store 属性 给 props */}

        <PersistGate loading={null} persistor={persistStore(Store)}>
            {/* 数据持久化 */}
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
