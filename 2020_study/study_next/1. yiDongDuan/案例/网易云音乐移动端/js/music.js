let id = location.search.split("=").slice(1)[0];
// 找不到 音乐 列表 api

$("audio").attr({
  src: `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
});

var audio = $("audio")[0]; //获取播放元素

//时间转换函数
function getSML(data) {
  var s = Math.floor(data / 3600);
  var f = Math.floor((data % 3600) / 60);
  var m = Math.floor(data % 60);
  s = s < 10 ? "0" + s : s;
  f = f < 10 ? "0" + f : f;
  m = m < 10 ? "0" + m : m;
  return s + ":" + f + ":" + m;
}

//点击播放时
$(".tsEn").click(function () {
  //判断播放状态
  if (audio.paused) {
    audio.play(); //改变状态、样式  开始
    $(".tsEn p:nth-child(1)").hide().siblings().show();
  } else {
    audio.pause(); //停止
    $(".tsEn p:nth-child(2)").hide().siblings().show();
  }
});

// 当 音频 视频 可以播放的时候触发
audio.oncanplay = function () {
  setInterval(function () {
    var total = audio.duration; //获取总时长
    $("time span").text(getSML(total));
  }, 1000); //这个时器为了输出总时长
};

//播放时触发，currentTime改变就会触发
audio.ontimeupdate = function () {
  var curr = audio.currentTime; //当前播放的时间
  $(".tw em").text(getSML(curr));

  //设置百分百，赋值到元素
  var bl = (curr / audio.duration) * 100 + "%";
  $(".sj").css("width", bl);
};

//进度条点击时，
$(".click").click(function (e) {
  var osx = e.offsetX; //获取当前鼠标距离目标节点的位置，

  var per = osx / $(this).width(); //计算比率
  var cur = per * audio.duration; //比率*总时长
  audio.currentTime = cur; //赋值给播放的位置
});

//音量点击时
$(".cona").click(function (e) {
  var osx = e.offsetX; //同样获取当前鼠标距离目标节点的位置，
  var per = osx / $(this).width(); //计算比率
  $(".con").css("width", per * 100 + "%"); //赋值给音量进度元素
  $(".la").css("left", per * 100); //赋值给拖动条
  audio.volume = per; //赋值给音量
  // volume  音量
});

//音量调节键，拖动
$(".la").on("mousedown", function () {
  var x = $(this).offset().left - $(this).position().left;
  //获取距离文档的位置-距离定位父级的左侧的位置
  console.log(x);
  $(document).on("mousemove", function (e) {
    var xx = e.pageX - x;
    //移动时，获取距离文档的位置- 定位父级距离文档的位置

    xx = xx < 0 ? 0 : xx;
    xx = xx > 100 ? 100 : xx;
    //限制拖动范围

    var yi = xx / 100;
    //运算赋值
    $(".con").css("width", xx + 5 + "%");
    audio.volume = yi;
    $(".la").css("left", xx);
  });
});

$(document).on("mouseup", function () {
  $(document).off("mousemove");
});

//播放完毕后执行
audio.onended = function () {
  //重置样式
  reset();
};

document.ondragover = function (e) {
  e.preventDefault();
}; //阻止document的默认事件
document.ondrop = function (e) {
  e.preventDefault();
}; //阻止document的默认事件

$(".contr")[0].ondragover = function (e) {
  e.preventDefault();
}; //阻止默认事件

$(".contr")[0].ondrop = function (e) {
  //拖拽释放时
  console.log(e.dataTransfer);
  var f = e.dataTransfer.files[0]; //常用于桌面拖进浏览器的文件信息
  reset(); //重置样式

  read(f); //读取被拖入的文件
};

var k = 0; //定义播放列表的下标

$("h4").click(function () {
  $("h4").css("pointer-events", "none"); //禁止点击
  k++; //下一首
  k = k > mp3.length - 1 ? 0 : k; //限制范围
  audio.src = "audio/" + mp3[k]; //输出路径
  $(".mame p").text(mp3[k]); //输出文字
  $(".mame img").attr("src", "img/" + mp3[k] + ".jpg"); //输出图片
  reset(); //重置样式

  audio.play(); //开始播放
  $(".tsEn p:nth-child(1)").hide().siblings().show();

  setTimeout(function () {
    //延迟点击
    $("h4").css("pointer-events", "auto");
  }, 1000);
});

$("h5").click(function () {
  $("h5").css("pointer-events", "none");
  k--;
  k = k < 0 ? mp3.length - 1 : k;
  audio.src = "audio/" + mp3[k];

  $(".mame p").text(mp3[k]);
  $(".mame img").attr("src", "img/" + mp3[k] + ".jpg");

  reset();

  audio.play();
  $(".tsEn p:nth-child(1)").hide().siblings().show();

  setTimeout(function () {
    $("h5").css("pointer-events", "auto");
  }, 1000);
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
    $(".mame p").text(f.name); //赋值name

    for (var a = 0; a < imgs.length; a++) {
      if (f.name == mp3[a]) {
        //通过遍历赋值图片
        $(".mame img").attr("src", "img/" + mp3[a] + ".jpg");
      }
    }

    audio.play(); //开始播放
    $(".tsEn p:nth-child(1)").hide().siblings().show();
  };
}

function reset() {
  //重置样式函数
  $(".tsEn p:nth-child(2)").hide().siblings().show();
  $(".sj").css("width", 0);
  $(".tw span").text(getSML(0));
  $(".tw em").text(getSML(0));
}
