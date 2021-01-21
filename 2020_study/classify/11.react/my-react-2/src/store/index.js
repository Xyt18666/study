import { createStore, applyMiddleware, compose } from "redux";
// 引入 创建仓库 ,中间键

import thunk from "redux-thunk";
// 引入thunk

import reducer from "./reducer";
// 引入 reducer

import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// 引入数据持久化

const persistConfig = {
    key: "root",
    storage: storageSession, //使用什么方式存储
};

const myPersistReducer = persistReducer(persistConfig, reducer);
//配置 中间键 ， 操作函数

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
// 增强函数 （和链式函数差不多），解决 数据可视化和中间键同时使用的冲突

const enhancer = composeEnhancers(applyMiddleware(thunk));
// 执行增强函数

const store = createStore(myPersistReducer, enhancer);
//创建商店，并引入增强函数

export const persistor = persistStore(store);

export default store;
//导出商店
