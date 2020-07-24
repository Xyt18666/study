let id = location.search.split("=").slice(1)[0];
// 找不到 音乐 列表 api

$("audio").attr({
  src: `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
});

function getRandomNumberByRange(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

function getSML(data) {
  //时间转换 函数
  var s = Math.floor(data / 3600);
  var f = Math.floor((data % 3600) / 60);
  var m = Math.floor(data % 60);
  s = s < 10 ? "0" + s : s;
  f = f < 10 ? "0" + f : f;
  m = m < 10 ? "0" + m : m;
  return s + ":" + f + ":" + m;
}
var audio, dsq;
let state = "lbxh";

$(() => {
  let index = 0;
  // plays(index);

  audio = $("audio")[0]; //获取播放元素

  function of() {
    //判断播放状态
    if (audio.paused) {
      audio.play(); //改变状态、样式  开始
      $(this).css("background", "#0f0");
    } else {
      audio.pause(); //停止
      $(this).css("background", "red");
    }
  }

  // 开关
  $(".onoff").click(function () {
    of();
  });

  // 当 音频 视频 可以播放的时候 获取总时长

  audio.oncanplay = function () {
    dsq = setInterval(function () {
      var total = audio.duration; //获取总时长
      var curr = audio.currentTime; //当前播放的时间
      $(".time em").text(getSML(total));
      $(".time i").text(getSML(curr));
    }, 1000); //这个定时器为了输出总时长
  };

  //播放时触发，currentTime改变就会触发
  audio.ontimeupdate = function () {
    var curr = audio.currentTime; //当前播放的时间
    $(".time i").text(getSML(curr));

    //设置百分百，赋值到元素
    var bl = curr / audio.duration;
    //  当前时长/总时长 * 100 + %
    //     比率   直接放大 100倍 ，就是 进度 百分比
    $(".jd .in").width(bl * 100 + "%");
  };

  // 进度点击 拖拽时
  $(".jd .up").on("mousedown", function (e) {
    audio.pause();
    let bl = e.offsetX / $(".up").width();
    var cur = bl * audio.duration; //比率*总时长
    audio.currentTime = cur; //赋值给播放的位置

    $(".jd .in").width(bl * 100 + "%");

    $(".jd .up").on("mousemove", function (e) {
      e.preventDefault();
      let bl2 = e.offsetX / $(".jd .up").width();
      $(".jd .in").width(bl2 * 100 + "%");
      var cur = bl2 * audio.duration; //比率*总时长
      audio.currentTime = cur; //赋值给播放的位置
    });
    $(window).on("mouseup", function () {
      $(".jd .up").off("mousemove");
      audio.play();
    });
  });

  //音量调节键，拖动
  $(".volume .up").on("mousedown", function () {
    $(document).on("mousemove", function (e) {
      var xx = e.pageX - $(".volume").offset().left;
      //移动时，获取距离文档的位置 - 父级距离文档的位置
      // console.log(xx)
      //获取的是当前位置值，如果不是100px的宽度，需要计算比率
      // 当前位置值/总长度 = 比率
      let bl = (xx / $(".volume").width()) * 100;

      // 限制拖动范围
      bl = bl < 0 ? 0 : bl;
      bl = bl > 100 ? 100 : bl;

      // console.log(bl)
      var yi = bl / 100;
      // 运算赋值
      let tl = yi * $(".volume").width() - $(".volume").width();
      tl = tl <= -145 ? -145 : tl;

      $(".volume .up").css({
        transform: `translate(${tl}px,0)`,
      });
      audio.volume = yi;
    });
  });

  $(document).on("mouseup", function () {
    $(document).off("mousemove");
  });

  // 倍速播放
  for (let a = 0; a < $(".bs p").length; a++) {
    let bs = [0.5, 1, 1.5, 2];
    $(".bs p")
      .eq(a)
      .click(function () {
        audio.playbackRate = bs[a];
        console.log(audio.playbackRate);
      });
  }

  // 切换歌曲
  // function plays(index) {
  //   $(".qm p").text(Music[index].name);
  //   $("img").attr("src", `img/${Music[index].img}`);
  //   $("audio").attr("src", `audio/${Music[index].src}`);
  // }

  // 上下首
  $("h2").click(function () {
    index--;
    index = index < 0 ? Music.length - 1 : index;
    plays(index);
    of();
  });
  $("h3").click(function () {
    index++;
    index = index > Music.length - 1 ? 0 : index;
    plays(index);
    of();
  });

  // 结束自动播放 下一曲
  audio.onended = function () {
    // 判断处于什么模式
    // audio.pause()
    console.log(state);
    switch (state) {
      case "loop":
        audio.loop = true;
        break;
      case "lbxh":
        index++;
        index = index > Music.length - 1 ? 0 : index;
        plays(index);
        break;
      case "sjbf":
        plays(getRandomNumberByRange(0, Music.length - 1));
        break;
    }
    of();
  };

  $("h4").click(function () {
    //单曲循环
    state = "loop";
  });
  $("h5").click(function () {
    state = "sjbf";
  });
  $("h6").click(function () {
    state = "lbxh";
  });

  //文件读取封装
  function read(f) {
    //参数是获取的files
    var reader = new FileReader(); //创建文件读取对象
    // var files= $("input")[0].files
    // console.log(files)
    reader.readAsDataURL(f); //转换data开头的字符串
    console.log(f);
    reader.onload = function () {
      //完成后
      console.log(reader.result); //获取到result 字符串
      audio.src = reader.result; //直接赋值给src
      $(".qm p").text(f.name); //赋值name

      for (let x = 0; x < Music.length; x++) {
        console.log(f.name, Music[x].name);
        if (f.name == Music[x].src) {
          //通过遍历赋值图片
          $("img").attr("src", "img/" + Music[x].src + ".jpg");
        } else {
          $("img").attr("alt", "没有所需图片");
        }
      }
      audio.play(); //开始播放
    };
  }

  document.ondragover = function (e) {
    e.preventDefault();
  }; //阻止document的默认事件
  document.ondrop = function (e) {
    e.preventDefault();
  }; //阻止document的默认事件

  $("section")[0].ondragover = function (e) {
    e.preventDefault();
  }; //阻止默认事件

  $("section")[0].ondrop = function (e) {
    //拖拽释放时
    console.log(e.dataTransfer);
    var f = e.dataTransfer.files[0]; //常用于桌面拖进浏览器的文件信息
    read(f); //读取被拖入的文件
  };
});
