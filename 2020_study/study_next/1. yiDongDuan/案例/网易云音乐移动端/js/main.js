$(function () {
  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    // 判断是否是什么设备
    // console.log("移动端");

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

        if (Math.abs(endX - startX) < parseInt($(".ban").width()) / 6) {
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

  $.ajax({
    url: "http://musicapi.leanapp.cn/personalized?limit=6",
    type: "get",
    dataType: "json",
    data: "",
    success: function (e) {
      //   console.log(e.result);
      for (let a = 0; a < e.result.length; a++) {
        $(`<li>
              <a href="music.html?id=${e.result[a].id}">
                  <img src=${e.result[a].picUrl} alt="" />
                  <p>${e.result[a].name}</p>
                  <span class="iconfont icon-headset">${
                    gitSize(e.result[a].playCount).value
                  }${gitSize(e.result[a].playCount).unit}</span>
              </a>
          </li>`).appendTo(".recommendMusicList");
      }
    },
  });

  $.ajax({
    url: "http://musicapi.leanapp.cn/top/song?type=0",
    type: "get",
    dataType: "json",
    data: "",
    success: function (e) {
      let data = e.data.slice(0, 9);
      //   console.log(data);
      for (let a = 0; a < data.length; a++) {
        $(` <li>
              <a href="music.html?id=${data[a].id}">
              <div class="mState">
              <p>${data[a].name}</p>
              <span>${data[a].exclusive ? `<i>SQ</i>` : ""}${
          data[a].artists[0].name
        }</span>
              </div>
              <div class="play iconfont icon-bofang"></div>
          </a>
          </li>`).appendTo(".newMusic");
      }
    },
  });
  function gitSize(value) {
    var param = {};
    var k = 10000,
      sizes = ["", "万", "亿", "万亿"],
      i;
    if (value < k) {
      param.value = value;
      param.unit = "";
    } else {
      i = Math.floor(Math.log(value) / Math.log(k));

      param.value = (value / Math.pow(k, i)).toFixed(2);
      param.unit = sizes[i];
    }
    // console.log(param);
    return param;
  }

  $.ajax({
    url: "http://musicapi.leanapp.cn/top/list?idx=1",
    type: "get",
    dataType: "json",
    data: "",
    success: function (e) {
      //   console.log(e);
      $(".time").html("更新日期:" + getFMD(e.playlist.trackNumberUpdateTime));
      let data = e.playlist.tracks.slice(0, 19);
      //   console.log(data);
      for (let a = 0; a < data.length; a++) {
        $(`<li>
            <div class="top">${a + 1 < 10 ? "0" + (a + 1) : a + 1}</div>
            
            <a href="music.html?id=${data[a].id}">
                <div class="conM">
                    <div class="mState">
                    <p>${data[a].name}</p>
                    <span><i>SQ</i> ${data[a].ar[0].name}</span>
                    </div>
                    <div class="play iconfont icon-bofang"></div>
                </div>
            </a>
            
        </li>`).appendTo(".hotList");
      }
    },
  });

  $.ajax({
    url: "  http://musicapi.leanapp.cn/search/hot/detail",
    type: "get",
    dataType: "json",
    data: "",
    success: function (e) {
      //   console.log(e.result.hots);
      for (let a = 0; a < e.result.hots.length; a++) {
        $(`<li>
          ${e.result.hots[a].first}
          </li>`).appendTo(".rmSear ol");
      }
    },
  });

  $("nav ul li").click(function () {
    let index = $(this).index();
    $("nav ul li span").css({
      color: " #636363",
      "border-bottom-color": "transparent",
    });
    $("nav ul li").eq(index).children("span").css({
      color: " #d43c33",
      "border-bottom-color": "#d43c33",
    });
    $(".navList>li").eq(index).show().siblings().hide();
  });

  function getFMD(val) {
    var time = new Date(val);
    // console.log(time.getFullYear() + "年"); //年份
    // console.log(time.getMonth() + 1 + "月"); //月份
    // console.log(time.getDate() + "日"); //几号
    var birthday =
      time.getFullYear() +
      "年" +
      (time.getMonth() + 1) +
      "月" +
      time.getDate() +
      "日";
    // console.log(birthday);
    return birthday;
  }

  $("input").on("input", function () {
    $(".ssL h2 span").text($(this).val());
    if ($("input").val()) {
      $("form b").show();
      $(".rmSear").hide();
      $(".ssL").show();
    } else {
      $("form b").hide();
      $(".rmSear").show();
      $(".ssL").hide();
    }
  });
  $("form b").click(function () {
    $("input").val("");
    $(".ssL h2 span").text("");
    $(".ssL").hide();
    $(".rmSear").show();
  });

  $("form i,.ssL h2").click(function () {
    $.ajax({
      url: `http://musicapi.leanapp.cn/search/multimatch?keywords=${$(
        "form input"
      ).val()}`,
      type: "get",
      dataType: "json",
      data: "",
      success: function (e) {
        console.log(e);
        $(`<li>
        
        </li>`).appendTo(".ssL ul");
      },
    });
  });
});
