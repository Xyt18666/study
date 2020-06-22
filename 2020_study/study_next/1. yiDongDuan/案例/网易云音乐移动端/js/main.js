$(function () {
  // $.ajax({
  //     url: "hbanListps://api.imjad.cn/cloudmusic/?type=song&id=28012031",
  //     type: "get",
  //     data: "",
  //     dataType: "json",
  //     success: function (e) {
  //       console.log(e);
  //     },
  //   });

  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    // 判断是否是什么设备
    console.log("移动端");

    let ban = $(".banList")[0];
    let index = 3;
    let lateX = null;

    tab(index);

    ban.ontouchstart = function (e) {
      let startX = parseInt(e.touches[0].clientX);
      lateX = parseInt(
        $(".banList")
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

        if (Math.abs(endX - startX) < parseInt($(".ban").width()) / 3) {
          tab(index);
        } else {
          if (endX - startX > 0) {
            // 向右滑动
            index--;

            if (lateX > -parseInt($(".ban").width())) {
              $(ban).css({
                transition: "0s",
                transform: `translateX(${
                  -parseInt($(".ban").width()) * 6 + (endX - startX)
                }px)`,
              });
              index = 5;
            }
            tab(index);
          } else {
            // 向左滑动
            index++;
            if (lateX < -parseInt($(".ban").width()) * 5) {
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

    function tab(index) {
      $(ban).css({
        transition: "0.5s",
        transform: `translateX(${-index * parseInt($(".ban").width())}px)`,
      });

      $(".banD li")
        .eq(index - 1)
        .css({
          background: "pink",
        })
        .siblings()
        .css({
          background: "rgb(44, 195, 241)",
        });
    }

    $(".r").click(() => {
      index++;
      console.log(index);
      if (index > 5) {
        $(ban).css({
          transition: "0s",
          transform: `translateX(0px)`,
        });
        index = 1;
      }
      tab(index);
    });
    $(".l").click(() => {
      index--;
      console.log(index);
      if (index < 1) {
        $(ban).css({
          transition: "0s",
          transform: `translateX(${-parseInt($(".ban").width()) * 6}px)`,
        });
        index = 5;
      }
      tab(index);
    });

    var dsq = setInterval(() => {
      $(".r").click();
    }, 2000);
  } else {
    console.log("PC端");
    $("body").html("pc端");
  }
});
