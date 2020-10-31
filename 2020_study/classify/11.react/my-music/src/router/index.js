import Home from "../views/Home";
import Singer from "../views/Singer";
import Serach from "../views/Serach";
import User from "../views/User";

const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/singer",
        component: Singer,
    },
    {
        path: "/serach",
        component: Serach,
    },
    {
        path: "/user",
        component: User,
    },
];

export default routes;
