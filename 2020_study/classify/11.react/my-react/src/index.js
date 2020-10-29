import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import Store from "./store/index";

// import { createStore } from "redux";
// import { Provider } from "react-redux";

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

// function reducer(state = { num: 0 }, action) {
//     // switch (action.type) {
//     //     case "add":
//     //         state.num++;
//     //         break;
//     //     case "dec":
//     //         state.num--;
//     //         break;
//     //     default:
//     //         break;
//     // }
//     if (action.type.indexOf("redux" == -1)) {
//         // console.log(actionFn[action.type]);
//         // console.log(action.type);

//         // state = actionFn[action.type](state, action);
//         // console.log(actionFn[action.type]);

//         actionFn[action.type](state, action);
//         return { ...state };
//     } else {
//         return state;
//     }
// }

// const store = createStore(reducer);

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
