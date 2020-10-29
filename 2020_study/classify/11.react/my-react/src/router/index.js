
import RouterTest1 from "../views/RouterTest1";
import RouterTest2 from "../views/RouterTest2";
import RouterTest2Child from "../views/RouterTest2Child";
import RouterTest3 from "../views/RouterTest3";

const routers = [
    {
        path: "/",
        component: RouterTest1,
        exact: true,
    },
    {
        path: "/two",
        component: RouterTest2,
        routers: [{ path: "/two/", component: RouterTest2Child }],
    },
    {
        path: "/three",
        component: RouterTest3,
    },
];
export default routers;
