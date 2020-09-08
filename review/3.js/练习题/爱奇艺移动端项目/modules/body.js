import * as pub from "./public.js"; //引入全局方法
import ItemW from "./videoList_w.js"; //引入全局方法
import "./jq.js"; //引入jq

export default class Body {
  constructor() {}
  init() {
    this.creatVideoList();
    this.creatDSJList();
  }
  creatVideoList() {
    let time = new Date().getTime();
    async function VList() {
      const searchData = await pub
        .PromiseAjax({
          type: "get",
          async: false,
          url: `https://pub.m.iqiyi.com/h5/main/index/1/?callback=__jp${time}`,
          dataType: "jsonp",
          jsonpCallback: `__jp${time}`,
        })
        .then((res) => {
          let {
            data: {
              cards: [, , djrz],
            },
          } = res;
          //拿不到 猜你再追，今日资讯的数据，需要用户登录

          $(` <div class="djrz">
          <h3>${djrz.cardName}</h3>
          <ul class="VidLst">
            
          </ul>
        </div>`).appendTo("body");

          $(djrz.videos).each((index, item) => {
            let itemW = new ItemW(
              item.imageUrl,
              item.mainTitle,
              item.subtitle,
              item.upperRightCorner,
              item.lowerRightCorner,
              $(".djrz ul")
            );
            itemW.init();
            // img, title, plot, lable, information, faz
          });

          $(".djrz .lable:contains(VIP)").css({
            background: "rgba(209, 180, 17, 1)",
          });
          $(".djrz .lable:contains(自制)").css({
            background: "#0f0",
          });
          $(".djrz .lable:contains(专题)").css({
            background: "#0ff",
          });
          $(".djrz .lable:contains(独播)").css({
            background: "#0f0",
          });
        });
    }
    VList();
  }
  creatDSJList() {
    let time = new Date().getTime();
    async function DSJList() {
      const searchData = await pub
        .PromiseAjax({
          type: "get",
          async: false,
          url: `https://pub.m.iqiyi.com/h5/main/channel/dianshiju/?ppuid=1298776115&uid=c59e682b38b861c92668af2e0adaea4c&authCookie=e2K2HGexm2pIib1gRr5sLnkQdMxVI3BdOZyWtAuJjSAVID5qrUhgsgIGiSGTObZ1m2W847&system=ios&callback=__jp${time}`,
          dataType: "jsonp",
          jsonpCallback: `__jp${time}`,
        })
        .then((res) => {
          let {
            data: {
              cards: [dsj],
            },
          } = res;
          console.log(res);
          $(`<div class="dsj">
          <h3>${res.data.channelName}</h3>
          <ul class="dsjLst">
            
          </ul>
        </div>`).appendTo("body");

          $(dsj.videos).each((index, item) => {
            let itemW = new ItemW(
              item.imageUrl,
              item.mainTitle,
              "",
              item.upperRightCorner,
              item.lowerRightCorner,
              $(".dsj ul")
            );
            itemW.init();
            // img, title, plot, lable, information, faz
          });

          $(".dsj .lable:contains(VIP)").css({
            background: "rgba(209, 180, 17, 1)",
          });
          $(".dsj .lable:contains(自制)").css({
            background: "#0f0",
          });
          $(".dsj .lable:contains(专题)").css({
            background: "#0ff",
          });
          $(".dsj .lable:contains(独播)").css({
            background: "#0f0",
          });
        });
    }
    DSJList();
  }
}
