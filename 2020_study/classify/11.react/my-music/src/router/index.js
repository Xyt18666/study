import Home from "../views/Home";
import Singer from "../views/Singer";
import SingerChild from "../views/SingerChild";

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
        childrens: [
            {
                path: "/singer/child",
                component: SingerChild,
            },
        ],
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
