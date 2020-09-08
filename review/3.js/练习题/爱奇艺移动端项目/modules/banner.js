import * as pub from "./public.js"; //引入全局方法
import "./jq.js"; //引入jq

export default class Head {
  constructor() {}
  init() {
    this.creatBann();
    this.bannerMove();
  }
  creatBann() {
    $("body").append(`<div class="banner">
      <ul>
      </ul>
      <ol class="dd">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>`);

    async function searchList() {
      let time = new Date().getTime();
      const searchData = await pub
        .PromiseAjax({
          type: "get",
          async: false,
          url: `https://pub.m.iqiyi.com/h5/main/index/1/?`,
          dataType: "jsonp",
          jsonpCallback: `__jp${time}`,
        })
        .then((res) => {
          let {
            data: {
              cards: [{ videos }],
            },
          } = res;

          $(videos).each((index, item) => {
            $(".banner ul").append(`<li> 
                <img src=${item.imageInfo.originalImageUrl} />
                <div class="title">${item.mainTitle}</div>
                <div class="type">${item.upperRightCorner}</div>
            </li>`);
          });
          let cloneLi1 = $(".banner ul li:first-child").clone(true);
          let cloneLi2 = $(".banner ul li:last-child").clone(true);
          $(".banner ul").append(cloneLi1);
          $(".banner ul").prepend(cloneLi2);

          $(".type:contains(VIP)").css({
            background: "rgba(209, 180, 17,1)",
          });
          $(".type:contains(自制)").css({
            background: "#0f0",
          });
          $(".type:contains(专题)").css({
            background: "#0ff",
          });
        });
    }
    searchList();
  }
  bannerMove() {
    let ban = $(".banner ul")[0];
    let index = 1;
    let lateX = null;

    tab(index);

    ban.ontouchstart = function (e) {
      let startX = parseInt(e.touches[0].clientX);
      lateX = parseInt(
        $(".banner ul")
          .css("transform")
          .replace(/[^0-9\-.,]/g, "")
          .split(",")[4]
      );

      $(ban).css({
        transition: "0s",
        transform: `translateX(${lateX}px)`,
      });

      ban.ontouchmove = function (e) {
        let moveX = parseInt(e.touches[0].clientX); //取整为了去除小数点

        $(ban).css({
          transform: `translateX(${lateX - (startX - moveX)}px)`,
        });

        //   console.log(moveX, startX, lateX);

        /*
      lateX - (startX - moveX)  
      按下时的 transformlate X  - (按下时的 x坐标 - 移动的 X 坐标)
    
      首先 transformlate X 为负数，
      按下时的 x坐标 - 移动的 X 坐标 的结果 无论是正还是负，都正确显示
      
      */
      };

      ban.ontouchend = function (e) {
        let endX = parseInt(e.changedTouches[0].clientX);

        if (Math.abs(endX - startX) < parseInt($(".banner").width()) / 6) {
          tab(index);
        } else {
          if (endX - startX > 0) {
            // 向右滑动
            index--;

            if (lateX > -parseInt($(".banner").width())) {
              $(ban).css({
                transition: "0s",
                transform: `translateX(${
                  -parseInt($(".banner").width()) * 6 + (endX - startX)
                }px)`,
              });
              index = 5;
            }
            tab(index);
          } else {
            // 向左滑动
            index++;
            if (lateX < -parseInt($(".banner").width()) * 5) {
              $(ban).css({
                transition: "0s",
                transform: `translateX(${0 + (endX - startX)}px)`,
              });
              index = 1;
            }
            tab(index);
          }
        }
      };
    };

    var dsq = setInterval(() => {
      index++;
      if (index > 5) {
        $(ban).css({
          transition: "0s",
          transform: `translateX(0px)`,
        });
        index = 1;
      }
      tab(index);
    }, 3000);

    function tab(index) {
      $(ban).css({
        transition: "0.5s",
        transform: `translateX(${-index * parseInt($(".banner").width())}px)`,
      });

      $(".dd li")
        .eq(index - 1)
        .css({
          background: "#0f0",
        })
        .siblings()
        .css({
          background: "#ccc",
        });
    }
  }
}
