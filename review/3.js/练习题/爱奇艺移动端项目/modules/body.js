import * as pub from "./public.js"; //引入全局方法
import ItemW from "./videoList_w.js"; //引入全局方法
import "./jq.js"; //引入jq

export default class Body {
  constructor() {}
  init() {
    this.creatVideoList();
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
          console.log(djrz);

          $(` <div class="djrz">
          <h3>${djrz.cardName}</h3>
          <ul class="VidLst">
            
          </ul>
        </div>`).appendTo("body");

          $(djrz.videos).each((index, item) => {
            console.log(item);
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
}
