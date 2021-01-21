import router1 from "../components/router1.jsx";
import router2 from "../components/router2.jsx";
import router21 from "../components/router2-1.jsx";

const routes = [
    {
        path: "/",
        component: router1,
        exact: true, //精确匹配,首页必须开启
    },
    {
        path: "/tow",
        component: router2,
        children: [{ path: "/tow/child/:key", component: router21 }],
    },
];

export default routes;
