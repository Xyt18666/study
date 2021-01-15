import "./modules/rem.js"; //引入rem
import * as pub from "./modules/public.js"; //引入全局方法
import Head from "./modules/head.js"; //引入头部模块 类
import Banner from "./modules/banner.js"; //引入轮播图模块 类
import Body from "./modules/body.js"; //引入身体模块 类

new Head().init();

new Banner().init();

new Body().init();
