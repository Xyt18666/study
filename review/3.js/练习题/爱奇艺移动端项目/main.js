import "./modules/rem.js"; //引入rem
import * as pub from "./modules/public.js"; //引入全局方法
import Head from "./modules/head.js"; //引入头部模块 类

//获取数据
// import "./jq.js"; //引入jq

// $.ajax({
//   type: "get",
//   async: false,
//   url: "https://pub.m.iqiyi.com/h5/main/index/1/?callback=__jp15993627274295",
//   dataType: "jsonp",
//   jsonpCallback: "__jp15993627274295",
//   success: function (data) {
//     console.log(JSON.stringify(data));
//   },
// });
new Head().init();
